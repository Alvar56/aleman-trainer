import { storage } from './storage.js';
import { guardarFoto, leerFoto, borrarFoto } from './fotos.js';

/**
 * Escala y comprime una imagen (File o Blob del portapapeles) usando un canvas.
 * Limita el lado mayor a 1400px y comprime a JPEG 0.85 para que se vea
 * nítida, en grande, y ocupe muy poco espacio (~90-140 KB).
 */
export function comprimirImagen(fileOrBlob, maxLado = 1400) {
  return new Promise((resolve, reject) => {
    if (!fileOrBlob || !fileOrBlob.type.startsWith('image/')) {
      return reject(new Error('El archivo no es una imagen válida.'));
    }
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Error al leer el archivo.'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('No se pudo cargar la imagen.'));
      img.onload = () => {
        const escala = Math.min(1, maxLado / Math.max(img.width, img.height));
        const w = Math.round(img.width * escala);
        const h = Math.round(img.height * escala);
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', 0.85));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(fileOrBlob);
  });
}

function keyDe(ownerId) {
  return 'fotos:' + (ownerId || 'default');
}

export function getFotosVocab(ownerId) {
  if (!ownerId) return [];
  const keyNueva = 'fotos:' + ownerId;
  let list = storage.get(keyNueva, null);
  if (!list) {
    const fallbacks = [
      'vocab_fotos:' + ownerId,
      'fotos:' + ownerId.replace(/^vocab:/, 'lektion:'),
      'vocab_fotos:' + ownerId.replace(/^vocab:/, 'lektion:'),
      'vocab_fotos:' + ownerId.replace(/^grammatik:/, 'topic:')
    ];
    for (const fb of fallbacks) {
      const fbList = storage.get(fb, null);
      if (Array.isArray(fbList) && fbList.length > 0) {
        list = fbList;
        storage.set(keyNueva, list);
        break;
      }
    }
  }

  const arr = Array.isArray(list) ? [...list] : [];
  // Orden cronológico: la primera foto subida (#1) aparece arriba, la segunda (#2) debajo
  arr.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
  return arr;
}

export async function agregarFotoVocab(ownerId, dataUrl, titulo = '', explicacion = '') {
  if (!ownerId || !dataUrl) return null;
  const id = 'vf_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7);

  // Intentar guardar en IndexedDB además de guardarlo localmente
  let refId = null;
  try {
    refId = await guardarFoto(dataUrl);
  } catch {
    refId = null;
  }

  const nueva = {
    id,
    ownerId,
    refId, // ID en IndexedDB (si se pudo guardar)
    dataUrl, // Guardar siempre el dataUrl para carga instantánea y persistencia fiable
    titulo: String(titulo || '').trim(),
    explicacion: String(explicacion || '').trim(),
    createdAt: Date.now()
  };

  storage.update(keyDe(ownerId), [], (list) => [...(Array.isArray(list) ? list : []), nueva]);
  return nueva;
}

export function actualizarFotoVocab(ownerId, id, patch) {
  if (!ownerId || !id) return;
  storage.update(keyDe(ownerId), [], (list) =>
    (Array.isArray(list) ? list : []).map((f) => (f.id === id ? { ...f, ...patch } : f))
  );
}

export async function eliminarFotoVocab(ownerId, id) {
  if (!ownerId || !id) return;
  const list = getFotosVocab(ownerId);
  const target = list.find((f) => f.id === id);
  if (target?.refId) {
    try {
      await borrarFoto(target.refId);
    } catch {
      /* ignore */
    }
  }
  storage.update(keyDe(ownerId), [], (list) =>
    (Array.isArray(list) ? list : []).filter((f) => f.id !== id)
  );
}

/**
 * Carga el dataUrl real de una foto (leyéndolo de dataUrl directo o de IndexedDB si usa refId)
 */
export async function resolverFotoUrl(foto) {
  if (!foto) return null;
  if (foto.dataUrl) return foto.dataUrl;
  if (foto.refId) {
    try {
      const data = await leerFoto(foto.refId);
      if (data) return data;
    } catch {
      /* ignore */
    }
  }
  return null;
}
