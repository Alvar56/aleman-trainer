// Pistas de letras para los ejercicios en los que hay que ESCRIBIR.
//
// Escribir sin nada delante es otro ejercicio distinto: en un test descartas
// dos opciones y aciertas, pero con el campo en blanco o te sabes la palabra
// exacta o no hay nada que hacer. La primera letra de cada palabra cambia eso:
// sigue habiendo que recordarla, pero ya sabes qué se te está pidiendo.
//
// El esqueleto enseña siempre la inicial y tapa el resto con puntos. Pedir
// pistas va destapando letras de izquierda a derecha, sin tocar la última:
// escribir la palabra entera la tiene que poner uno.

// Los signos y los espacios no se tapan: son parte del dibujo de la frase y
// taparlos solo la hace ilegible.
const VISIBLE = /[^\p{L}\p{N}]/u;

// Cuántas letras se pueden destapar pidiendo pistas. La inicial va de regalo y
// la última nunca se da, así que una palabra de tres letras no tiene ninguna.
export function pistasDisponibles(respuesta) {
  let n = 0;
  for (const palabra of String(respuesta || '').split(/\s+/)) {
    const letras = [...palabra].filter((c) => !VISIBLE.test(c)).length;
    n += Math.max(0, letras - 2);
  }
  return n;
}

function shuffleDeterminista(arr, semilla) {
  let h = 0;
  for (let i = 0; i < semilla.length; i++) {
    h = (Math.imul(31, h) + semilla.charCodeAt(i)) | 0;
  }
  const res = [...arr];
  for (let k = res.length - 1; k > 0; k--) {
    h = (Math.imul(h ^ (h >>> 16), 0x45d9f3b) + 1013904223) | 0;
    const j = Math.abs(h) % (k + 1);
    [res[k], res[j]] = [res[j], res[k]];
  }
  return res;
}

// La respuesta con la inicial de cada palabra a la vista y el resto en puntos.
// `reveladas` destapa esa cantidad de letras en posiciones aleatorias de forma
// determinista para que no salgan en orden secuencial (2ª letra, 3ª letra...),
// sino repartidas por la palabra o frase.
export function esqueleto(respuesta, reveladas = 0) {
  const resp = String(respuesta || '');
  const palabras = resp.split(/\s+/).filter(Boolean);
  if (!palabras.length) return '';

  // Recopilar todas las posiciones destapables globales (sin inicial ni final)
  const destapablesGlobales = [];
  palabras.forEach((palabra, pIdx) => {
    const letras = [...palabra];
    const idx = letras.map((c, i) => (VISIBLE.test(c) ? -1 : i)).filter((i) => i >= 0);
    if (idx.length > 2) {
      const primera = idx[0];
      const ultima = idx[idx.length - 1];
      for (const i of idx) {
        if (i !== primera && i !== ultima) {
          destapablesGlobales.push({ pIdx, charIdx: i, key: `${pIdx}-${i}` });
        }
      }
    }
  });

  const barajadas = shuffleDeterminista(destapablesGlobales, resp);
  const destapadas = new Set(barajadas.slice(0, Math.max(0, reveladas)).map((d) => d.key));

  return palabras
    .map((palabra, pIdx) => {
      const letras = [...palabra];
      const idx = letras.map((c, i) => (VISIBLE.test(c) ? -1 : i)).filter((i) => i >= 0);
      if (!idx.length) return palabra;
      const primera = idx[0];

      return letras
        .map((c, i) => {
          if (VISIBLE.test(c)) return c;
          if (i === primera) return c; // inicial siempre visible
          if (destapadas.has(`${pIdx}-${i}`)) return c; // letra destapada aleatoria
          return '·';
        })
        .join('');
    })
    .join(' ');
}
