// La primera persona del singular, en castellano.
//
// Sirve para una cosa muy concreta: traducir los ejemplos del conjugador
// alemán. La ventana enseñaba "Heute erlebe ich." y debajo, de traducción,
// "Hoy …" — tres puntos suspensivos, o sea nada. Con esto pone "Hoy vivo".
//
// Solo hace falta el "yo" de tres tiempos, que son los tres que enseña la
// tabla alemana:
//
//   presente     vivo        (Präsens)
//   indefinido   viví        (Präteritum)
//   participio   vivido      (Perfekt: "he vivido")
//
// Nada de tú, él, nosotros ni subjuntivos: aquí no se enseña castellano, se
// traduce una frase de ejemplo.

// Los irregulares que salen de verdad en el vocabulario del libro. Cada uno:
// [presente, indefinido, participio].
const IRREGULARES = {
  ser: ['soy', 'fui', 'sido'],
  estar: ['estoy', 'estuve', 'estado'],
  ir: ['voy', 'fui', 'ido'],
  irse: ['me voy', 'me fui', 'ido'],
  haber: ['he', 'hube', 'habido'],
  tener: ['tengo', 'tuve', 'tenido'],
  hacer: ['hago', 'hice', 'hecho'],
  decir: ['digo', 'dije', 'dicho'],
  poder: ['puedo', 'pude', 'podido'],
  poner: ['pongo', 'puse', 'puesto'],
  ponerse: ['me pongo', 'me puse', 'puesto'],
  saber: ['sé', 'supe', 'sabido'],
  querer: ['quiero', 'quise', 'querido'],
  venir: ['vengo', 'vine', 'venido'],
  ver: ['veo', 'vi', 'visto'],
  dar: ['doy', 'di', 'dado'],
  salir: ['salgo', 'salí', 'salido'],
  traer: ['traigo', 'traje', 'traído'],
  caer: ['caigo', 'caí', 'caído'],
  oír: ['oigo', 'oí', 'oído'],
  dormir: ['duermo', 'dormí', 'dormido'],
  dormirse: ['me duermo', 'me dormí', 'dormido'],
  morir: ['muero', 'morí', 'muerto'],
  volver: ['vuelvo', 'volví', 'vuelto'],
  volverse: ['me vuelvo', 'me volví', 'vuelto'],
  abrir: ['abro', 'abrí', 'abierto'],
  escribir: ['escribo', 'escribí', 'escrito'],
  romper: ['rompo', 'rompí', 'roto'],
  cubrir: ['cubro', 'cubrí', 'cubierto'],
  freír: ['frío', 'freí', 'frito'],
  conducir: ['conduzco', 'conduje', 'conducido'],
  traducir: ['traduzco', 'traduje', 'traducido'],
  conocer: ['conozco', 'conocí', 'conocido'],
  crecer: ['crezco', 'crecí', 'crecido'],
  parecer: ['parezco', 'parecí', 'parecido'],
  ofrecer: ['ofrezco', 'ofrecí', 'ofrecido'],
  empezar: ['empiezo', 'empecé', 'empezado'],
  comenzar: ['comienzo', 'comencé', 'comenzado'],
  cerrar: ['cierro', 'cerré', 'cerrado'],
  pensar: ['pienso', 'pensé', 'pensado'],
  despertar: ['despierto', 'desperté', 'despertado'],
  despertarse: ['me despierto', 'me desperté', 'despertado'],
  sentarse: ['me siento', 'me senté', 'sentado'],
  sentir: ['siento', 'sentí', 'sentido'],
  sentirse: ['me siento', 'me sentí', 'sentido'],
  perder: ['pierdo', 'perdí', 'perdido'],
  entender: ['entiendo', 'entendí', 'entendido'],
  encender: ['enciendo', 'encendí', 'encendido'],
  contar: ['cuento', 'conté', 'contado'],
  encontrar: ['encuentro', 'encontré', 'encontrado'],
  encontrarse: ['me encuentro', 'me encontré', 'encontrado'],
  acostarse: ['me acuesto', 'me acosté', 'acostado'],
  recordar: ['recuerdo', 'recordé', 'recordado'],
  costar: ['cuesta', 'costó', 'costado'],
  jugar: ['juego', 'jugué', 'jugado'],
  pedir: ['pido', 'pedí', 'pedido'],
  servir: ['sirvo', 'serví', 'servido'],
  repetir: ['repito', 'repetí', 'repetido'],
  vestirse: ['me visto', 'me vestí', 'vestido'],
  seguir: ['sigo', 'seguí', 'seguido'],
  conseguir: ['consigo', 'conseguí', 'conseguido'],
  llegar: ['llego', 'llegué', 'llegado'],
  pagar: ['pago', 'pagué', 'pagado'],
  apagar: ['apago', 'apagué', 'apagado'],
  buscar: ['busco', 'busqué', 'buscado'],
  sacar: ['saco', 'saqué', 'sacado'],
  tocar: ['toco', 'toqué', 'tocado'],
  practicar: ['practico', 'practiqué', 'practicado'],
  cruzar: ['cruzo', 'crucé', 'cruzado'],
  almorzar: ['almuerzo', 'almorcé', 'almorzado'],
  probar: ['pruebo', 'probé', 'probado'],
  proponer: ['propongo', 'propuse', 'propuesto'],
  suponer: ['supongo', 'supuse', 'supuesto'],
  componer: ['compongo', 'compuse', 'compuesto'],
  transferir: ['transfiero', 'transferí', 'transferido'],
  sugerir: ['sugiero', 'sugerí', 'sugerido'],
  convertir: ['convierto', 'convertí', 'convertido'],
  advertir: ['advierto', 'advertí', 'advertido'],
  producir: ['produzco', 'produje', 'producido'],
  reducir: ['reduzco', 'reduje', 'reducido'],
  introducir: ['introduzco', 'introduje', 'introducido'],
  obtener: ['obtengo', 'obtuve', 'obtenido'],
  mantener: ['mantengo', 'mantuve', 'mantenido'],
  detener: ['detengo', 'detuve', 'detenido'],
  devolver: ['devuelvo', 'devolví', 'devuelto'],
  enviar: ['envío', 'envié', 'enviado'],
  confiar: ['confío', 'confié', 'confiado'],
  guiar: ['guío', 'guié', 'guiado'],
  esquiar: ['esquío', 'esquié', 'esquiado'],
  continuar: ['continúo', 'continué', 'continuado'],
  actuar: ['actúo', 'actué', 'actuado'],
  averiguar: ['averiguo', 'averigüé', 'averiguado'],
  aprobar: ['apruebo', 'aprobé', 'aprobado'],
  soñar: ['sueño', 'soñé', 'soñado'],
  sonar: ['sueno', 'soné', 'sonado'],
  colgar: ['cuelgo', 'colgué', 'colgado'],
  mostrar: ['muestro', 'mostré', 'mostrado'],
  volar: ['vuelo', 'volé', 'volado'],
  devolver: ['devuelvo', 'devolví', 'devuelto'],
  resolver: ['resuelvo', 'resolví', 'resuelto'],
  mover: ['muevo', 'moví', 'movido'],
  doler: ['duele', 'dolió', 'dolido'],
  acordarse: ['me acuerdo', 'me acordé', 'acordado'],
  preferir: ['prefiero', 'preferí', 'preferido'],
  divertirse: ['me divierto', 'me divertí', 'divertido'],
  mentir: ['miento', 'mentí', 'mentido'],
  hervir: ['hiervo', 'herví', 'hervido'],
  recomendar: ['recomiendo', 'recomendé', 'recomendado'],
  merendar: ['meriendo', 'merendé', 'merendado'],
  calentar: ['caliento', 'calenté', 'calentado'],
  regar: ['riego', 'regué', 'regado'],
  fregar: ['friego', 'fregué', 'fregado'],
  apretar: ['aprieto', 'apreté', 'apretado'],
  tropezar: ['tropiezo', 'tropecé', 'tropezado'],
  medir: ['mido', 'medí', 'medido'],
  elegir: ['elijo', 'elegí', 'elegido'],
  corregir: ['corrijo', 'corregí', 'corregido'],
  despedirse: ['me despido', 'me despedí', 'despedido'],
  reír: ['río', 'reí', 'reído'],
  reírse: ['me río', 'me reí', 'reído'],
  sonreír: ['sonrío', 'sonreí', 'sonreído'],
  gustar: ['gusta', 'gustó', 'gustado'],
  apetecer: ['apetece', 'apeteció', 'apetecido'],
  llover: ['llueve', 'llovió', 'llovido'],
  nevar: ['nieva', 'nevó', 'nevado']
};

// Verbos sin "yo" que se entienda: el tiempo, y poco más. Se conjugan en
// tercera persona, que es como se dicen ("llueve", no "lluevo").
const IMPERSONALES = new Set(['llover', 'nevar', 'costar', 'gustar', 'doler', 'apetecer']);

function quitaAcentos(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

// De "levantarse pronto" saca ['levantarse', 'pronto']: el verbo y lo que le
// acompaña, que se copia tal cual detrás.
function partir(gloss) {
  const limpio = String(gloss || '')
    .replace(/\([^)]*\)/g, ' ')      // "(sich)" y demás aclaraciones
    .split(/[/·;,]/)[0]              // "vivir, residir" o "vivir / residir" -> el primero
    .replace(/\s+/g, ' ')
    .trim();
  if (!limpio) return null;
  const partes = limpio.split(' ');
  return { verbo: partes[0].toLowerCase(), resto: partes.slice(1).join(' ') };
}

// ¿Es un infinitivo? Lo demás (un sustantivo, una expresión) no se conjuga.
function esInfinitivo(v) {
  return /(ar|er|ir|ír|arse|erse|irse)$/.test(v);
}

// Las tres formas del "yo" de un infinitivo castellano.
// Devuelve null si no parece un verbo.
export function primeraPersona(infinitivo) {
  const v = String(infinitivo || '').toLowerCase().trim();
  if (!v || !esInfinitivo(v)) return null;

  const irr = IRREGULARES[v];
  if (irr) {
    return {
      presente: irr[0],
      pasado: irr[1],
      participio: irr[2],
      // Los reflexivos de la tabla ya vienen con el 'me' delante.
      reflexivo: irr[0].startsWith('me '),
      impersonal: IMPERSONALES.has(v)
    };
  }

  // Reflexivo: "levantarse" = "levantar" + se, y el "yo" lleva "me" delante.
  const reflexivo = /se$/.test(v) && /(arse|erse|irse)$/.test(v);
  const base = reflexivo ? v.slice(0, -2) : v;
  const irrBase = reflexivo ? IRREGULARES[base] : null;

  const me = reflexivo ? 'me ' : '';
  if (irrBase) {
    return {
      presente: me + irrBase[0],
      pasado: me + irrBase[1],
      participio: irrBase[2],
      reflexivo,
      impersonal: false
    };
  }

  const raiz = base.slice(0, -2);
  const term = quitaAcentos(base.slice(-2));
  if (!raiz) return null;

  if (term === 'ar') {
    return { presente: me + raiz + 'o', pasado: me + raiz + 'é', participio: raiz + 'ado', reflexivo, impersonal: IMPERSONALES.has(v) };
  }
  if (term === 'er' || term === 'ir') {
    // Los -uir hacen -uyo: construir -> construyo. (No los -guir: sigo.)
    const presenteRaiz = /u$/.test(raiz) && !/gu$/.test(raiz) && term === 'ir' ? raiz + 'y' : raiz;
    // Y el participio lleva tilde si la raiz acaba en vocal: creer -> creído,
    // leer -> leído, oír -> oído. Sin ella se leeria "creido".
    const pp = /[aeo]$/.test(raiz) ? raiz + 'ído' : raiz + 'ido';
    return { presente: me + presenteRaiz + 'o', pasado: me + raiz + 'í', participio: pp, reflexivo, impersonal: IMPERSONALES.has(v) };
  }
  return null;
}

// La traducción de los ejemplos: "Hoy me levanto pronto." y compañía.
//
// `gloss` es lo que trae la tarjeta ("levantarse", "hacer los recados"). Si no
// se puede conjugar —porque la traducción es un sustantivo o una expresión—
// devuelve null y la ventana se queda sin la línea en castellano, que es mejor
// que enseñar unos puntos suspensivos.
export function ejemplosEnCastellano(gloss) {
  const partes = partir(gloss);
  if (!partes) return null;
  const f = primeraPersona(partes.verbo);
  if (!f) return null;

  const cola = partes.resto ? ' ' + partes.resto : '';
  // Los impersonales ("llueve") ya vienen en tercera persona de la tabla: no
  // hay nada que anteponer.
  // En el compuesto el pronombre va delante del auxiliar: "ya ME he",
  // no "ya he me". Y lo impersonal no lleva "yo": "ya ha llovido".
  const pronombre = f.reflexivo ? 'me ' : '';
  const aux = f.impersonal ? 'ha' : 'he';
  return {
    presente: cap(`hoy ${f.presente}${cola} por la tarde.`),
    pasado: cap(`ayer ${f.pasado}${cola} todo el día.`),
    perfecto: cap(`ya ${pronombre}${aux} ${f.participio}${cola} varias veces.`)
  };
}

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
