import fs from 'node:fs';
import path from 'node:path';

const DB_PATH = path.join(process.cwd(), '.dtrainer-sync.json');
const TMP_PATH = DB_PATH + '.tmp';

// Escritura atomica: primero a un temporal y luego se renombra. rename() es
// atomico en el mismo disco, asi que el fichero bueno nunca se queda a medias.
// Antes se escribia encima directamente: si el servidor se moria en ese
// momento (o se apagaba el ordenador, que pasa), el JSON quedaba truncado y se
// perdia TODO el progreso guardado, no solo el ultimo cambio.
function guardar(obj) {
  fs.writeFileSync(TMP_PATH, JSON.stringify(obj));
  fs.renameSync(TMP_PATH, DB_PATH);
}

function leer() {
  if (!fs.existsSync(DB_PATH)) return { timestamp: 0, data: {} };
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  } catch {
    // Fichero corrupto de alguna escritura anterior a medias: mejor empezar de
    // cero que reventar en cada peticion.
    return { timestamp: 0, data: {} };
  }
}

export function syncBridge() {
  // Las peticiones se atienden de una en una. La secuencia leer marca →
  // compararla → escribir no es atomica, asi que dos POST a la vez podian
  // leer los dos la misma marca, pasar los dos el control y escribir los dos:
  // el segundo se llevaba por delante al primero sin que nadie se enterara.
  let cola = Promise.resolve();
  const enCola = (fn) => {
    const r = cola.then(fn);
    cola = r.catch(() => {});
    return r;
  };

  return {
    name: 'dtrainer-sync',
    configureServer(server) {
      server.middlewares.use('/api/sync', (req, res, next) => {
        if (req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
          enCola(() => res.end(JSON.stringify(leer())));
          return;
        }

        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk.toString();
            // El payload lleva todo el progreso (mazos, fotos del cuaderno…),
            // asi que el tope tiene que ser generoso, pero tope al fin y al cabo.
            if (body.length > 32 * 1024 * 1024) req.destroy();
          });
          req.on('end', () => {
            enCola(() => {
              res.setHeader('Content-Type', 'application/json');
              try {
                const reqData = JSON.parse(body);
                const clientTs = reqData.localTs || 0;
                const backendTs = leer().timestamp || 0;

                if (clientTs > 0 && clientTs < backendTs) {
                  res.statusCode = 409;
                  res.end(JSON.stringify({ error: 'Stale sync', timestamp: backendTs }));
                  return;
                }

                // Date.now() puede repetirse si dos escrituras caen en el mismo
                // milisegundo, y entonces la marca no distingue una de otra.
                const timestamp = Math.max(Date.now(), backendTs + 1);
                guardar({ timestamp, data: reqData.payload || reqData });
                res.end(JSON.stringify({ success: true, timestamp }));
              } catch {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
              }
            });
          });
          return;
        }

        next();
      });
    }
  };
}
