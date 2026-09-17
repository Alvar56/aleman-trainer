# Mete un lote de traducciones en src/lib/contenido/en.js sin pisar lo que ya
# hubiera.
#
# Comprueba ademas que cada clave existe de verdad en el contenido: una clave
# que no case con ningun texto no se aplicaria nunca y seria trabajo tirado,
# asi que se avisa en vez de colarla en silencio.
#
#   node scripts/extraer-textos.mjs --claves     (primero, para validar)
#   python scripts/_fusionar.py lote.json
import io, json, re, sys, os

lote = json.load(io.open(sys.argv[1], encoding='utf-8'))

CLAVES = 'scripts/_claves.json'
if not os.path.exists(CLAVES):
    sys.exit('Falta %s: ejecuta antes  node scripts/extraer-textos.mjs --claves' % CLAVES)
fuente = set(json.load(io.open(CLAVES, encoding='utf-8')))

huerfanas = [k for k in lote if k not in fuente]

ruta = 'src/lib/contenido/en.js'
src = io.open(ruta, encoding='utf-8', newline='').read()
nl = '\r\n' if '\r\n' in src else '\n'

existentes = {}
for m in re.finditer(r"^\s*'((?:[^'\\]|\\.)*)':\s*'((?:[^'\\]|\\.)*)',?$", src, re.M):
    existentes[m.group(1)] = m.group(2)


def esc(x):
    return x.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n')


nuevas = 0
for k, v in lote.items():
    if k in huerfanas:
        continue
    ek = esc(k)
    if ek in existentes:
        continue
    existentes[ek] = esc(v)
    nuevas += 1

cuerpo = nl.join("  '%s': '%s'," % (k, v) for k, v in existentes.items())
cabecera = src.split('export const EN = {')[0]
io.open(ruta, 'w', encoding='utf-8', newline='').write(
    cabecera + 'export const EN = {' + nl + cuerpo + nl + '};' + nl
)

print('anadidas:', nuevas, ' total en el fichero:', len(existentes))
if huerfanas:
    print('AVISO - claves que no existen en el contenido (no se aplicarian):', len(huerfanas))
    for k in huerfanas[:5]:
        print('   ', k[:70])
