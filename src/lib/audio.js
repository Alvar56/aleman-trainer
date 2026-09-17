let ctx = null;

function init() {
  if (!ctx) {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (ctx.state === 'suspended') {
    ctx.resume();
  }
}

export function playSuccess() {
  try {
    init();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
    osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.02);
    gain.gain.setValueAtTime(0.1, ctx.currentTime + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
  } catch (e) {}
}

export function playError() {
  try {
    init();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.2);
  } catch (e) {}
}

export function playAudio(correct) {
  if (correct) playSuccess();
  else playError();
}

// ---------------------------------------------------------------------------
// Leer una palabra en voz alta, con voz alemana.
//
// Vive aqui porque lo pedian ya dos pantallas del examen con el mismo codigo
// copiado, y ahora tambien las listas de vocabulario.
//
// El detalle que se le escapa a todo el mundo: getVoices() devuelve una lista
// VACIA la primera vez en casi todos los navegadores, y se rellena luego. Si
// preguntas una sola vez al pintar, concluyes que no hay voz alemana y escondes
// el boton para siempre. Por eso hay que enterarse del 'voiceschanged'.
let vocesCache = null;
const oyentesVoz = new Set();

function refrescar() {
  vocesCache = window.speechSynthesis?.getVoices?.() || [];
  for (const fn of oyentesVoz) fn();
}

if (typeof window !== 'undefined' && window.speechSynthesis) {
  refrescar();
  window.speechSynthesis.addEventListener?.('voiceschanged', refrescar);
}

// Avisa cuando llega la lista de voces. Devuelve la funcion para darse de baja.
export function alCargarVoces(fn) {
  oyentesVoz.add(fn);
  return () => oyentesVoz.delete(fn);
}

// La mejor voz alemana disponible: primero austriaca, que es la que oye a
// diario, y si no cualquier alemana.
export function vozAlemana() {
  const vs = vocesCache || [];
  return vs.find((v) => /^de-AT/i.test(v.lang)) || vs.find((v) => /^de/i.test(v.lang)) || null;
}

export function hayVozAlemana() {
  return !!vozAlemana();
}

// Cada vez que se manda hablar (o se para) sube el contador. Los avisos de
// una lectura vieja se ignoran: al cortar, el navegador dispara igualmente el
// 'onend' de la frase en curso, y sin esto la pantalla creia que habia
// terminado sola y se quedaba marcando la ultima intervencion.
let generacion = 0;

export function pararVoz() {
  generacion += 1;
  window.speechSynthesis?.cancel();
}

// Un pelin mas lento de lo normal: son palabras sueltas y lo que importa es
// oir bien la vocal larga y la Umlaut, no la velocidad.
export function hablar(texto, { rate = 0.85 } = {}) {
  const sy = window.speechSynthesis;
  const voz = vozAlemana();
  if (!sy || !voz || !texto) return false;
  pararVoz();
  const u = new SpeechSynthesisUtterance(String(texto));
  u.voice = voz;
  u.lang = voz.lang;
  u.rate = rate;
  sy.speak(u);
  return true;
}

// Lee varios textos seguidos, como una conversacion. Avisa de por cual va
// (`onCambio`) para poder resaltarlo, y de que ha acabado (`onFin`).
//
// Se encolan todos de una vez: speechSynthesis los reproduce en orden y
// pararVoz() los borra de golpe. Encadenarlos a mano desde cada 'onend' daba
// silencios entre frases.
//
// Aqui el ritmo es mas vivo que en una palabra suelta: es una conversacion, y
// a 0.85 sonaba a dictado.
export function hablarSeguido(textos, { rate = 0.95, onCambio, onFin } = {}) {
  const sy = window.speechSynthesis;
  const voz = vozAlemana();
  const lista = (textos || []).filter(Boolean);
  if (!sy || !voz || !lista.length) return false;
  pararVoz();
  const mia = generacion;
  lista.forEach((texto, i) => {
    const u = new SpeechSynthesisUtterance(String(texto));
    u.voice = voz;
    u.lang = voz.lang;
    u.rate = rate;
    u.onstart = () => { if (mia === generacion) onCambio?.(i); };
    if (i === lista.length - 1) {
      u.onend = () => { if (mia === generacion) { onCambio?.(-1); onFin?.(); } };
    }
    sy.speak(u);
  });
  return true;
}
