import { mc, order } from '../engine/helpers.js';
import { pick } from '../lib/rng.js';
import { t } from '../lib/i18n.js';
import { tc } from '../lib/contenido/index.js';

// 1) Presente (Präsens): conjugación
const PRAES = [
  { s: 'Wo ___ du? — In Berlin.', a: 'wohnst', d: ['wohne', 'wohnt'], c: 'basis:praesens', t: '¿Dónde vives? — En Berlín.', e: 'Verbo regular: raíz + -st para "du" → "wohnst".' },
  { s: '___ ihr auch Deutsch?', a: 'Lernt', d: ['Lernst', 'Lernen'], c: 'basis:praesens', t: '¿Vosotros también aprendéis alemán?', e: 'Para "ihr" la terminación es -t → "lernt".' },
  { s: 'Mein Bruder ___ in einer Bank.', a: 'arbeitet', d: ['arbeite', 'arbeiten'], c: 'basis:praesens', t: 'Mi hermano trabaja en un banco.', e: 'Si la raíz acaba en -t/-d se intercala una -e-: "er arbeitet".' },
  { s: 'Wir ___ am Wochenende oft Fußball.', a: 'spielen', d: ['spielt', 'spielst'], c: 'basis:praesens', t: 'Los fines de semana jugamos al fútbol a menudo.', e: 'Para "wir" la terminación es -en → "spielen".' },
  { s: '___ du müde? — Ein bisschen.', a: 'Bist', d: ['Bin', 'Ist'], c: 'basis:praesens', t: '¿Estás cansado? — Un poco.', e: '"sein": ich bin · du bist · er/sie/es ist.' },
  { s: 'Meine Schwester ___ zwei Kinder.', a: 'hat', d: ['habe', 'haben'], c: 'basis:praesens', t: 'Mi hermana tiene dos hijos.', e: '"haben": ich habe · du hast · er/sie/es hat.' },
  { s: 'Ich ___ aus Spanien, aus Sevilla.', a: 'komme', d: ['kommst', 'kommt'], c: 'basis:praesens', t: 'Soy de España, de Sevilla.', e: 'Para "ich" la terminación es -e → "komme".' },
  { s: 'Ihr ___ heute leider keine Zeit.', a: 'habt', d: ['habe', 'hat'], c: 'basis:praesens', t: 'Hoy no tenéis tiempo, por desgracia.', e: '"haben" con "ihr" → "habt".' },
  { s: 'Sie (Anna) ___ sehr gut Englisch.', a: 'spricht', d: ['sprichst', 'spreche'], c: 'basis:praesens', t: 'Ella (Anna) habla muy bien inglés.', e: '"sprechen" cambia la vocal en la 3ª persona: "sie spricht".' },
  { s: 'Was ___ ihr am Sonntag?', a: 'macht', d: ['machst', 'mache'], c: 'basis:praesens', t: '¿Qué hacéis el domingo?', e: '"machen" con "ihr" → "macht".' },
  { s: 'Er ___ jeden Tag mit dem Fahrrad zur Uni.', a: 'fährt', d: ['fahrt', 'fahre'], c: 'basis:praesens', t: 'Él va todos los días en bici a la universidad.', e: '"fahren" cambia a-ä en 2ª y 3ª persona: "er fährt".' },
  { s: '___ du abends gerne Romane oder Sachbücher?', a: 'Liest', d: ['Lest', 'Lese'], c: 'basis:praesens', t: '¿Te gusta leer novelas o libros de no ficción por la noche?', e: '"lesen" cambia e-ie: "du liest".' },
  { s: 'Wir ___ heute Abend einen spannenden Film.', a: 'sehen', d: ['sieht', 'seht'], c: 'basis:praesens', t: 'Hoy por la noche vemos una película emocionante.', e: '"wir" lleva siempre la terminación regular -en: "wir sehen".' },
  { s: 'Er ___ im Restaurant immer ein Schnitzel mit Pommes.', a: 'nimmt', d: ['nehmt', 'nehme'], c: 'basis:praesens', t: 'En el restaurante él siempre pide un escalope con patatas.', e: '"nehmen" cambia a "er nimmt" en la 3ª persona.' },
  { s: 'Ich ___ schon seit drei Jahren in München.', a: 'lebe', d: ['lebst', 'lebt'], c: 'basis:praesens', t: 'Vivo en Múnich desde hace tres años.', e: 'Para "ich" la terminación es -e: "ich lebe".' },
  { s: '___ du die Antwort auf diese schwierige Frage?', a: 'Weißt', d: ['Wisst', 'Weiß'], c: 'basis:praesens', t: '¿Sabes la respuesta a esta pregunta difícil?', e: '"wissen": ich weiß · du weißt · er weiß · wir wissen.' },
  { s: 'Die Schüler ___ pünktlich um acht Uhr in der Schule an.', a: 'kommen', d: ['kommt', 'kommst'], c: 'basis:praesens', t: 'Los alumnos llegan puntuales al colegio a las ocho.', e: 'Sujeto en plural (die Schüler) → terminación -en: "kommen".' },
  { s: 'Meine Eltern ___ am liebsten im Garten.', a: 'sitzen', d: ['sitzt', 'sitze'], c: 'basis:praesens', t: 'Mis padres prefieren sentarse en el jardín.', e: 'Sujeto plural → "sitzen".' },
  { s: 'Wohin ___ ihr in den nächsten Sommerferien?', a: 'reist', d: ['reisen', 'reise'], c: 'basis:praesens', t: '¿Adónde viajáis en las próximas vacaciones de verano?', e: 'Para "ihr" la terminación es -t: "ihr reist".' },
  { s: 'Er ___ seiner Großmutter beim Einkaufen.', a: 'hilft', d: ['helft', 'helfe'], c: 'basis:praesens', t: 'Él ayuda a su abuela con la compra.', e: '"helfen" cambia e-i en 2ª/3ª persona: "er hilft".' }
];

// 2) Artículos (Nominativo / básico)
const ARTIKEL = [
  { s: '___ Tisch ist ziemlich alt.', a: 'Der', d: ['Die', 'Das'], c: 'basis:artikel', t: 'La mesa es bastante vieja.', e: '"Tisch" es masculino → "der Tisch".' },
  { s: '___ Kinder spielen im Garten.', a: 'Die', d: ['Der', 'Das'], c: 'basis:artikel', t: 'Los niños juegan en el jardín.', e: 'El plural siempre lleva "die".' },
  { s: 'Das ist ___ Kugelschreiber.', a: 'ein', d: ['eine', 'einer'], c: 'basis:artikel', t: 'Esto es un bolígrafo.', e: '"Kugelschreiber" es masculino → "ein" en nominativo.' },
  { s: 'Ist das ___ Katze oder ___ Hund?', a: 'eine', d: ['ein', 'einer'], c: 'basis:artikel', t: '¿Es un gato (una gata) o un perro?', e: '"Katze" es femenino → "eine".' },
  { s: '___ Wohnung hat drei Zimmer.', a: 'Die', d: ['Der', 'Das'], c: 'basis:artikel', t: 'El piso tiene tres habitaciones.', e: '"Wohnung" es femenino → "die Wohnung".' },
  { s: 'Wie viel kostet ___ Kaffee hier?', a: 'der', d: ['die', 'das'], c: 'basis:artikel', t: '¿Cuánto cuesta el café aquí?', e: '"Kaffee" es masculino → "der Kaffee".' },
  { s: 'Ich habe heute keine Zeit und ___ Geld.', a: 'kein', d: ['keine', 'keiner'], c: 'basis:artikel', t: 'Hoy no tengo tiempo ni dinero.', e: '"Geld" es neutro → "kein Geld".' },
  { s: 'Er hat ___ Auto, er fährt immer Fahrrad.', a: 'kein', d: ['keine', 'keinen'], c: 'basis:artikel', t: 'No tiene coche, siempre va en bici.', e: '"Auto" es neutro; se niega con "kein".' },
  { s: '___ Lampe auf dem Schreibtisch ist sehr hell.', a: 'Die', d: ['Der', 'Das'], c: 'basis:artikel', t: 'La lámpara del escritorio es muy luminosa.', e: '"Lampe" es femenino: "die Lampe".' },
  { s: 'Wo liegt ___ neues Smartphone von dir?', a: 'das', d: ['der', 'die'], c: 'basis:artikel', t: '¿Dónde está tu smartphone nuevo?', e: '"Smartphone" es neutro: "das Smartphone".' },
  { s: 'Das ist ___ super Idee für das Wochenende!', a: 'eine', d: ['ein', 'einer'], c: 'basis:artikel', t: '¡Es una idea fantástica para el fin de semana!', e: '"Idee" es femenino: "eine Idee".' },
  { s: 'Wir haben heute leider ___ Unterricht.', a: 'keinen', d: ['kein', 'keine'], c: 'basis:artikel', t: 'Por desgracia hoy no tenemos clase.', e: '"Unterricht" es masculino (acusativo con haben): "keinen Unterricht".' },
  { s: '___ Schlüssel liegt direkt neben der Tür.', a: 'Der', d: ['Die', 'Das'], c: 'basis:artikel', t: 'La llave está justo al lado de la puerta.', e: '"Schlüssel" es masculino: "der Schlüssel".' },
  { s: 'Das ist ___ schönes Foto aus unserem Urlaub.', a: 'ein', d: ['eine', 'einen'], c: 'basis:artikel', t: 'Esta es una bonita foto de nuestras vacaciones.', e: '"Foto" es neutro: "ein schönes Foto".' },
  { s: 'Sie hat ___ Schwester, sie ist Einzelkind.', a: 'keine', d: ['kein', 'keinen'], c: 'basis:artikel', t: 'No tiene hermanas, es hija única.', e: '"Schwester" es femenino: "keine Schwester".' },
  { s: '___ Fenster im Wohnzimmer ist noch offen.', a: 'Das', d: ['Der', 'Die'], c: 'basis:artikel', t: 'La ventana del salón todavía está abierta.', e: '"Fenster" es neutro: "das Fenster".' }
];

// 3) El verbo en 2ª posición / inversión
const POSITION = [
  { s: 'Heute ___.', a: 'gehe ich ins Kino', d: ['ich gehe ins Kino', 'ich ins Kino gehe'], c: 'basis:position2', t: 'Hoy voy al cine.', e: 'Si empiezas por un complemento ("Heute"), el verbo va en 2ª posición y el sujeto detrás.' },
  { s: 'Am Montag ___.', a: 'habe ich einen Termin', d: ['ich habe einen Termin', 'ich einen Termin habe'], c: 'basis:position2', t: 'El lunes tengo una cita.', e: 'Complemento + verbo (2ª posición) + sujeto: "Am Montag habe ich…".' },
  { s: 'Normalerweise ___ am Wochenende.', a: 'arbeite ich nicht', d: ['ich arbeite nicht', 'nicht ich arbeite'], c: 'basis:position2', t: 'Normalmente no trabajo los fines de semana.', e: 'El verbo conjugado siempre en 2ª posición: "Normalerweise arbeite ich…".' },
  { s: 'Meine Eltern ___ in einem kleinen Dorf.', a: 'wohnen', d: ['wohnt', 'wohnst'], c: 'basis:position2', t: 'Mis padres viven en un pueblo pequeño.', e: 'Sujeto en plural → verbo con -en en 2ª posición.' },
  { s: 'Um sieben Uhr morgens ___ der Wecker.', a: 'klingelt', d: ['der Wecker klingelt', 'klingelt der'], c: 'basis:position2', t: 'A las siete de la mañana suena el despertador.', e: 'Complemento temporal en 1ª posición → verbo en 2ª posición ("klingelt").' },
  { s: 'Nach der Arbeit ___ wir noch einkaufen.', a: 'gehen', d: ['wir gehen', 'gehen wir'], c: 'basis:position2', t: 'Después del trabajo vamos a hacer la compra.', e: 'Inversión tras complemento preposicional: "gehen wir".' },
  { s: 'In Spanien ___ das Wetter meistens sehr sonnig.', a: 'ist', d: ['das Wetter ist', 'ist das Wetter'], c: 'basis:position2', t: 'En España el tiempo es casi siempre muy soleado.', e: 'Ubicación en pos. 1 → verbo en pos. 2: "In Spanien ist…".' },
  { s: 'Jeden Samstag ___ er seine Großeltern.', a: 'besucht', d: ['er besucht', 'besucht er'], c: 'basis:position2', t: 'Todos los sábados visita a sus abuelos.', e: 'Temporal en pos. 1 → verbo en pos. 2: "besucht er".' },
  { s: 'Im Sommer ___ viele Touristen nach Berlin.', a: 'reisen', d: ['viele Touristen reisen', 'reisen viele Touristen'], c: 'basis:position2', t: 'En verano viajan muchos turistas a Berlín.', e: 'Temporal en pos. 1 → verbo en pos. 2: "reisen".' },
  { s: 'Leider ___ ich heute keine Zeit für Sport.', a: 'habe', d: ['ich habe', 'habe ich'], c: 'basis:position2', t: 'Lamentablemente hoy no tengo tiempo para hacer deporte.', e: 'Adverbio en pos. 1 → verbo en pos. 2: "habe ich".' }
];

const ORDERS = [
  { sol: ['Am', 'Wochenende', 'spiele', 'ich', 'oft', 'Tennis'], t: 'Los fines de semana juego al tenis a menudo.', e: 'Complemento (1) + verbo (2) + sujeto (3): "Am Wochenende spiele ich…".', c: 'basis:position2' },
  { sol: ['Ich', 'trinke', 'morgens', 'immer', 'einen', 'Kaffee'], t: 'Por las mañanas siempre me tomo un café.', e: 'Orden normal: sujeto + verbo (2ª posición) + complementos.', c: 'basis:position2' },
  { sol: ['Um', 'acht', 'Uhr', 'fängt', 'der', 'Unterricht', 'an'], t: 'La clase empieza a las ocho.', e: 'Complemento de tiempo + verbo (2ª posición); el prefijo "an" va al final.', c: 'basis:position2' },
  { sol: ['Morgen', 'fahren', 'wir', 'mit', 'dem', 'Zug', 'nach', 'München'], t: 'Mañana nos vamos en tren a Múnich.', e: 'Tiempo (1) + verbo (2) + sujeto (3) + complementos.', c: 'basis:position2' },
  { sol: ['Meine', 'Freunde', 'kommen', 'heute', 'Abend', 'zu', 'Besuch'], t: 'Mis amigos vienen de visita esta noche.', e: 'Sujeto + verbo en 2ª posición + complementos.', c: 'basis:position2' },
  { sol: ['In', 'der', 'Mittagspause', 'essen', 'wir', 'gemeinsam', 'in', 'der', 'Kantine'], t: 'En la pausa del mediodía comemos juntos en la cantina.', e: 'Complemento temporal en 1ª posición → verbo en 2ª posición.', c: 'basis:position2' },
  { sol: ['Am', 'Freitag', 'macht', 'sie', 'eine', 'große', 'Party'], t: 'El viernes ella celebra una gran fiesta.', e: 'Tiempo (1) + verbo (2) + sujeto (3) + objeto.', c: 'basis:position2' },
  { sol: ['Er', 'steht', 'unter', 'der', 'Woche', 'sehr', 'früh', 'auf'], t: 'Entre semana él se levanta muy temprano.', e: 'Sujeto + verbo conjugado + complementos + prefijo separable al final.', c: 'basis:position2' },
  { sol: ['Jeden', 'Sonntag', 'frühstücken', 'wir', 'sehr', 'gemütlich'], t: 'Todos los domingos desayunamos muy tranquilamente.', e: 'Complemento de tiempo en 1ª posición → verbo en 2ª posición.', c: 'basis:position2' },
  { sol: ['Wir', 'haben', 'heute', 'leider', 'keine', 'Zeit', 'dafür'], t: 'Hoy por desgracia no tenemos tiempo para eso.', e: 'Sujeto + verbo conjugado + complementos.', c: 'basis:position2' },
  { sol: ['Nach', 'dem', 'Sport', 'trinkt', 'er', 'immer', 'viel', 'Wasser'], t: 'Después de hacer deporte él siempre bebe mucha agua.', e: 'Complemento preposicional en 1ª posición → inversión (verbo en 2ª).', c: 'basis:position2' },
  { sol: ['Meine', 'Schwester', 'wohnt', 'schon', 'lange', 'in', 'Berlin'], t: 'Mi hermana vive en Berlín desde hace mucho tiempo.', e: 'Sujeto + verbo en 2ª posición + complementos.', c: 'basis:position2' },
  { sol: ['Um', 'sieben', 'Uhr', 'gehen', 'die', 'Kinder', 'ins', 'Bett'], t: 'A las siete los niños se van a la cama.', e: 'Hora en 1ª posición → verbo en 2ª posición.', c: 'basis:position2' },
  { sol: ['Heute', 'Abend', 'koche', 'ich', 'ein', 'leckeres', 'Abendessen'], t: 'Esta noche cocino una cena deliciosa.', e: 'Tiempo en 1ª posición → verbo en 2ª posición.', c: 'basis:position2' },
  { sol: ['Mein', 'Vater', 'liest', 'jeden', 'Tag', 'die', 'Zeitung'], t: 'Mi padre lee el periódico todos los días.', e: 'Sujeto + verbo (2ª pos.) + tiempo + objeto.', c: 'basis:position2' },
  { sol: ['Im', 'Sommer', 'fliegen', 'wir', 'für', 'zwei', 'Wochen', 'nach', 'Spanien'], t: 'En verano volamos dos semanas a España.', e: 'Tiempo (1) + verbo (2) + sujeto (3) + complementos.', c: 'basis:position2' },
  { sol: ['Er', 'lernt', 'seit', 'drei', 'Monaten', 'fleißig', 'Deutsch'], t: 'Lleva tres meses aprendiendo alemán aplicadamente.', e: 'Sujeto + verbo (2ª posición) + complementos.', c: 'basis:position2' },
  { sol: ['Abends', 'sehen', 'wir', 'zusammen', 'einen', 'Film'], t: 'Por la noche vemos una película juntos.', e: 'Adverbio temporal en 1ª posición → verbo en 2ª posición.', c: 'basis:position2' },
  { sol: ['Sie', 'kauft', 'am', 'Samstag', 'auf', 'dem', 'Markt', 'ein'], t: 'Los sábados ella hace la compra en el mercado.', e: 'Sujeto + verbo conjugado + complementos + prefijo "ein" al final.', c: 'basis:position2' },
  { sol: ['Manchmal', 'gehen', 'wir', 'nach', 'der', 'Arbeit', 'spazieren'], t: 'A veces vamos a pasear después del trabajo.', e: 'Adverbio en 1ª posición → verbo en 2ª posición.', c: 'basis:position2' },
  { sol: ['Wir', 'kaufen', 'frisches', 'Obst', 'im', 'Supermarkt'], t: 'Compramos fruta fresca en el supermercado.', e: 'Sujeto + verbo (2ª pos.) + objeto + lugar.', c: 'basis:position2' },
  { sol: ['Am', 'Abend', 'liest', 'sie', 'ein', 'interessantes', 'Buch'], t: 'Por la tarde/noche ella lee un libro interesante.', e: 'Tiempo (1) + verbo (2) + sujeto (3) + objeto.', c: 'basis:position2' },
  { sol: ['Meine', 'Kollegen', 'arbeiten', 'sehr', 'fleißig', 'im', 'Büro'], t: 'Mis compañeros trabajan muy aplicadamente en la oficina.', e: 'Sujeto + verbo (2ª pos.) + adverbio + lugar.', c: 'basis:position2' },
  { sol: ['Morgens', 'trinke', 'ich', 'gerne', 'einen', 'grünen', 'Tee'], t: 'Por las mañanas me gusta tomar un té verde.', e: 'Tiempo (1) + verbo (2) + sujeto (3) + objeto.', c: 'basis:position2' },
  { sol: ['Er', 'fährt', 'am', 'Wochenende', 'zu', 'seinen', 'Eltern'], t: 'Él va a casa de sus padres el fin de semana.', e: 'Sujeto + verbo (2ª pos.) + tiempo + dirección.', c: 'basis:position2' },
  { sol: ['In', 'der', 'Küche', 'steht', 'ein', 'großer', 'Kühlschrank'], t: 'En la cocina hay una nevera grande.', e: 'Lugar (1) + verbo (2) + sujeto.', c: 'basis:position2' },
  { sol: ['Wir', 'essen', 'mittags', 'meistens', 'in', 'der', 'Mensa'], t: 'Al mediodía casi siempre comemos en el comedor.', e: 'Sujeto + verbo + tiempo + lugar.', c: 'basis:position2' },
  { sol: ['Heute', 'habe', 'ich', 'einen', 'sehr', 'langen', 'Arbeitstag'], t: 'Hoy tengo una jornada de trabajo muy larga.', e: 'Tiempo (1) + verbo (2) + sujeto (3) + objeto.', c: 'basis:position2' },
  { sol: ['Sie', 'spricht', 'mit', 'ihrer', 'Freundin', 'am', 'Telefon'], t: 'Ella habla con su amiga por teléfono.', e: 'Sujeto + verbo + complementos.', c: 'basis:position2' },
  { sol: ['Nach', 'der', 'Schule', 'spielen', 'die', 'Kinder', 'draußen'], t: 'Después del colegio los niños juegan afuera.', e: 'Preposicional (1) + verbo (2) + sujeto (3) + adverbio.', c: 'basis:position2' },
  { sol: ['Ich', 'brauche', 'dringend', 'eine', 'neue', 'Brille'], t: 'Necesito urgentemente unas gafas nuevas.', e: 'Sujeto + verbo (2ª pos.) + adverbio + objeto.', c: 'basis:position2' },
  { sol: ['Am', 'Nachmittag', 'trinken', 'wir', 'Kaffee', 'zusammen'], t: 'Por la tarde tomamos café juntos.', e: 'Tiempo (1) + verbo (2) + sujeto (3) + complementos.', c: 'basis:position2' },
  { sol: ['Er', 'sucht', 'seinen', 'Schlüssel', 'in', 'der', 'Tasche'], t: 'Él busca su llave en la bolsa.', e: 'Sujeto + verbo + objeto + lugar.', c: 'basis:position2' },
  { sol: ['Am', 'Dienstag', 'habe', 'ich', 'einen', 'wichtigen', 'Termin'], t: 'El martes tengo una cita importante.', e: 'Tiempo (1) + verbo (2) + sujeto (3) + objeto.', c: 'basis:position2' },
  { sol: ['Wir', 'wohnen', 'in', 'einer', 'sehr', 'schönen', 'Wohnung'], t: 'Vivimos en un piso muy bonito.', e: 'Sujeto + verbo (2ª pos.) + lugar.', c: 'basis:position2' }
];

// 4) Preguntas
const FRAGEN = [
  { s: '___ heißt du? — Anna.', a: 'Wie', d: ['Was', 'Wer'], c: 'basis:fragen', t: '¿Cómo te llamas? — Anna.', e: '"Wie heißt du?" es la pregunta fija por el nombre.' },
  { s: '___ wohnst du? — In Hamburg.', a: 'Wo', d: ['Wohin', 'Wer'], c: 'basis:fragen', t: '¿Dónde vives? — En Hamburgo.', e: '"wo?" = ubicación (sin movimiento).' },
  { s: '___ kommst du? — Um acht.', a: 'Wann', d: ['Wo', 'Wie'], c: 'basis:fragen', t: '¿Cuándo vienes? — A las ocho.', e: '"wann?" pregunta por el momento.' },
  { s: '___ lernst du Deutsch? — Für meinen Job.', a: 'Warum', d: ['Was', 'Wie'], c: 'basis:fragen', t: '¿Por qué aprendes alemán? — Por mi trabajo.', e: '"warum?" pregunta por el motivo.' },
  { s: '___ ist das? — Das ist mein Bruder.', a: 'Wer', d: ['Was', 'Wie'], c: 'basis:fragen', t: '¿Quién es? — Es mi hermano.', e: '"wer?" pregunta por personas.' },
  { s: '___ du Kaffee oder Tee?', a: 'Trinkst', d: ['Du trinkst', 'Trinken'], c: 'basis:fragen', t: '¿Tomas café o té?', e: 'En preguntas de sí/no el verbo va PRIMERO: "Trinkst du…?".' },
  { s: '___ ihr aus Österreich?', a: 'Kommt', d: ['Ihr kommt', 'Kommen'], c: 'basis:fragen', t: '¿Sois de Austria?', e: 'Pregunta de sí/no → verbo en 1ª posición: "Kommt ihr…?".' },
  { s: '___ gehst du heute Nachmittag? — In den Park.', a: 'Wohin', d: ['Wo', 'Woher'], c: 'basis:fragen', t: '¿Adónde vas esta tarde? — Al parque.', e: '"wohin?" pregunta por una dirección con movimiento.' },
  { s: '___ kommst du ursprünglich? — Aus Kolumbien.', a: 'Woher', d: ['Wohin', 'Wo'], c: 'basis:fragen', t: '¿De dónde vienes originalmente? — De Colombia.', e: '"woher?" pregunta por la procedencia u origen.' },
  { s: '___ lange dauert der Deutschkurs? — Zwei Monate.', a: 'Wie', d: ['Was', 'Wo'], c: 'basis:fragen', t: '¿Cuánto dura el curso de alemán? — Dos meses.', e: '"Wie lange...?" pregunta por la duración.' },
  { s: '___ kostet dieses Buch hier? — Zwanzig Euro.', a: 'Wie viel', d: ['Wie viele', 'Was für'], c: 'basis:fragen', t: '¿Cuánto cuesta este libro? — Veinte euros.', e: '"Wie viel...?" pregunta por la cantidad/precio singular.' },
  { s: '___ du morgen Zeit für ein Treffen?', a: 'Hast', d: ['Haben', 'Du hast'], c: 'basis:fragen', t: '¿Tienes tiempo mañana para vernos?', e: 'Pregunta de sí/no → verbo conjugado en 1ª posición: "Hast du...?".' },
  { s: '___ ihr heute Abend mit ins Kino?', a: 'Kommt', d: ['Kommen', 'Ihr kommt'], c: 'basis:fragen', t: '¿Venís esta noche al cine?', e: 'Pregunta de sí/no con "ihr" → "Kommt ihr...?".' },
  { s: '___ hat dir dieses Buch empfohlen? — Mein Kollege.', a: 'Wer', d: ['Wen', 'Wem'], c: 'basis:fragen', t: '¿Quién te recomendó este libro? — Mi compañero.', e: 'Pregunta por el sujeto → "wer?".' }
];

// 5) Negación: nicht / kein
const NEGATION = [
  { s: 'Ich habe ___ Auto, nur ein Fahrrad.', a: 'kein', d: ['nicht', 'keine'], c: 'basis:negation', t: 'No tengo coche, solo una bici.', e: '"kein" niega un sustantivo con artículo indefinido o sin artículo.' },
  { s: 'Das Auto ist ___ neu, es ist zehn Jahre alt.', a: 'nicht', d: ['kein', 'keine'], c: 'basis:negation', t: 'El coche no es nuevo, tiene diez años.', e: '"nicht" niega adjetivos, verbos y frases con artículo definido.' },
  { s: 'Er kommt heute ___ zur Party.', a: 'nicht', d: ['kein', 'keine'], c: 'basis:negation', t: 'Hoy no viene a la fiesta.', e: '"nicht" niega el verbo / toda la frase.' },
  { s: 'Wir haben leider ___ Zeit.', a: 'keine', d: ['nicht', 'kein'], c: 'basis:negation', t: 'Por desgracia no tenemos tiempo.', e: '"Zeit" es femenino y va sin artículo → "keine Zeit".' },
  { s: 'Das ist ___ mein Koffer, das ist deiner.', a: 'nicht', d: ['kein', 'keine'], c: 'basis:negation', t: 'Esa no es mi maleta, es la tuya.', e: 'Con un posesivo ("mein") se usa "nicht", no "kein".' },
  { s: 'Ich esse ___ Fleisch, ich bin Vegetarier.', a: 'kein', d: ['nicht', 'keine'], c: 'basis:negation', t: 'No como carne, soy vegetariano.', e: '"Fleisch" es neutro y sin artículo → "kein Fleisch".' },
  { s: 'Er versteht die Frage ___ ganz genau.', a: 'nicht', d: ['kein', 'keine'], c: 'basis:negation', t: 'Él no entiende la pregunta del todo bien.', e: '"nicht" niega el verbo o adverbio.' },
  { s: 'Ich habe heute ___ Lust auf Kochen.', a: 'keine', d: ['nicht', 'kein'], c: 'basis:negation', t: 'Hoy no tengo ganas de cocinar.', e: '"Lust" es femenina y va sin artículo: "keine Lust".' },
  { s: 'Die Suppe ist leider ___ heiß genug.', a: 'nicht', d: ['kein', 'keine'], c: 'basis:negation', t: 'Por desgracia la sopa no está suficientemente caliente.', e: '"nicht" niega el adjetivo ("heiß").' },
  { s: 'Wir haben gestern ___ Brot mehr im Supermarkt bekommen.', a: 'kein', d: ['nicht', 'keine'], c: 'basis:negation', t: 'Ayer ya no conseguimos pan en el supermercado.', e: '"Brot" es neutro y va sin artículo: "kein Brot".' },
  { s: 'Ich kenne ___ Peter, ich kenne nur seinen Bruder.', a: 'nicht', d: ['kein', 'keinen'], c: 'basis:negation', t: 'No conozco a Peter, solo a su hermano.', e: 'Los nombres propios se niegan con "nicht", no con "kein".' },
  { s: 'Sie trinken abends ___ Alkohol.', a: 'keinen', d: ['nicht', 'kein'], c: 'basis:negation', t: 'No beben alcohol por la noche.', e: '"Alkohol" es masculino; objeto directo → acusativo: "keinen Alkohol".' }
];

// 6) Plural
const PLURAL = [
  { s: 'das Kind → die ___', a: 'Kinder', d: ['Kinds', 'Kinden'], c: 'basis:plural', t: 'el niño → los niños', e: 'Muchos neutros hacen el plural en -er (a veces con Umlaut): Kind → Kinder.' },
  { s: 'der Tisch → die ___', a: 'Tische', d: ['Tischen', 'Tischs'], c: 'basis:plural', t: 'la mesa → las mesas', e: 'Muchos masculinos hacen el plural en -e: Tisch → Tische.' },
  { s: 'die Frau → die ___', a: 'Frauen', d: ['Fraus', 'Fräue'], c: 'basis:plural', t: 'la mujer → las mujeres', e: 'La mayoría de los femeninos hacen el plural en -(e)n: Frau → Frauen.' },
  { s: 'das Auto → die ___', a: 'Autos', d: ['Auten', 'Autoe'], c: 'basis:plural', t: 'el coche → los coches', e: 'Las palabras que acaban en vocal (o extranjeras) hacen el plural en -s: Auto → Autos.' },
  { s: 'der Apfel → die ___', a: 'Äpfel', d: ['Apfeln', 'Apfels'], c: 'basis:plural', t: 'la manzana → las manzanas', e: 'Algunos solo cambian con Umlaut: Apfel → Äpfel.' },
  { s: 'die Wohnung → die ___', a: 'Wohnungen', d: ['Wohnunge', 'Wohnungs'], c: 'basis:plural', t: 'el piso → los pisos', e: 'Los femeninos en -ung, -heit, -keit hacen el plural en -en.' },
  { s: 'das Buch → die ___', a: 'Bücher', d: ['Buchen', 'Buchs'], c: 'basis:plural', t: 'el libro → los libros', e: 'Buch → Bücher (-er + Umlaut).' },
  { s: 'der Mann → die ___', a: 'Männer', d: ['Manns', 'Mannen'], c: 'basis:plural', t: 'el hombre → los hombres', e: 'Mann → Männer (-er + Umlaut).' },
  { s: 'die Lampe → die ___', a: 'Lampen', d: ['Lampes', 'Lämpen'], c: 'basis:plural', t: 'la lámpara → las lámparas', e: 'La mayoría de palabras en -e añaden -n en plural: Lampe → Lampen.' },
  { s: 'der Stuhl → die ___', a: 'Stühle', d: ['Stuhle', 'Stuhlen'], c: 'basis:plural', t: 'la silla → las sillas', e: 'Masculinos monosílabos suelen añadir -e y Umlaut: Stuhl → Stühle.' },
  { s: 'das Bild → die ___', a: 'Bilder', d: ['Bilden', 'Bilds'], c: 'basis:plural', t: 'el cuadro → los cuadros', e: 'Neutros cortos suelen formar el plural con -er: Bild → Bilder.' },
  { s: 'die Stadt → die ___', a: 'Städte', d: ['Stadten', 'Stadts'], c: 'basis:plural', t: 'la ciudad → las ciudades', e: 'Femenino irregular con Umlaut y -e: Stadt → Städte.' },
  { s: 'das Foto → die ___', a: 'Fotos', d: ['Fotoes', 'Foten'], c: 'basis:plural', t: 'la foto → las fotos', e: 'Palabras terminadas en -o forman el plural con -s: Foto → Fotos.' },
  { s: 'der Tag → die ___', a: 'Tage', d: ['Täge', 'Tagen'], c: 'basis:plural', t: 'el día → los días', e: 'Masculinos regulares con -e: Tag → Tage (sin Umlaut).' },
  { s: 'die Sprache → die ___', a: 'Sprachen', d: ['Sprächer', 'Spraches'], c: 'basis:plural', t: 'el idioma → los idiomas', e: 'Femenino en -e añade -n: Sprache → Sprachen.' },
  { s: 'das Haus → die ___', a: 'Häuser', d: ['Hauser', 'Häuse'], c: 'basis:plural', t: 'la casa → las casas', e: 'Neutro con Umlaut y -er: Haus → Häuser.' }
];

const frames = [
  { make: (rng) => { const x = pick(rng, PRAES); return mc(rng, { conceptId: x.c, prompt: t('tp.fillPresent'), sentence: x.s, correct: x.a, distractors: x.d, translation: tc(x.t), explanation: tc(x.e) }); } },
  { make: (rng) => { const x = pick(rng, ARTIKEL); return mc(rng, { conceptId: x.c, prompt: t('tp.pickArticle'), sentence: x.s, correct: x.a, distractors: x.d, translation: tc(x.t), explanation: tc(x.e) }); } },
  { make: (rng) => { const x = pick(rng, POSITION); return mc(rng, { conceptId: x.c, prompt: t('tp.pickVerb2'), sentence: x.s, correct: x.a, distractors: x.d, translation: tc(x.t), explanation: tc(x.e) }); } },
  { make: (rng) => { const x = pick(rng, ORDERS); return order(rng, { conceptId: x.c, prompt: t('frames.orderFull'), solution: x.sol, translation: tc(x.t), explanation: tc(x.e) }); } },
  { make: (rng) => { const x = pick(rng, FRAGEN); return mc(rng, { conceptId: x.c, prompt: t('tp.fillQuestion'), sentence: x.s, correct: x.a, distractors: x.d, translation: tc(x.t), explanation: tc(x.e) }); } },
  { make: (rng) => { const x = pick(rng, NEGATION); return mc(rng, { conceptId: x.c, prompt: t('tp.pickNegation'), sentence: x.s, correct: x.a, distractors: x.d, translation: tc(x.t), explanation: tc(x.e) }); } },
  { make: (rng) => { const x = pick(rng, PLURAL); return mc(rng, { conceptId: x.c, prompt: t('tp.pickPlural'), sentence: x.s, correct: x.a, distractors: x.d, translation: tc(x.t), explanation: tc(x.e) }); } }
];

export const theory = {
  intro:
    'Lo imprescindible para empezar: cómo se conjuga el verbo en presente, los artículos, dónde va el verbo en la frase, cómo se pregunta y cómo se niega. Pulsa cada bloque para ver la explicación completa y más ejemplos.',
  sections: [
    {
      title: 'El presente (Präsens)',
      body: 'Raíz del verbo + terminación según la persona. "sein" y "haben" son irregulares.',
      examples: [
        { de: 'wohnen: ich wohne, du wohnst, er wohnt…', es: 'terminaciones -e, -st, -t, -en, -t, -en' },
        { de: 'Ich komme aus Spanien und wohne in Wien.', es: 'Soy de España y vivo en Viena.' }
      ],
      detail:
        'Se quita el -en del infinitivo y se añade: ich -e · du -st · er/sie/es -t · wir -en · ihr -t · sie/Sie -en. "arbeiten, finden…" (raíz en -t/-d) intercalan una -e-: du arbeitest, er arbeitet.\n\nEn alemán el presente vale también para el futuro cercano: "Morgen fahre ich nach Berlin". "sein" y "haben" hay que memorizarlos.',
      table: {
        title: 'Presente: wohnen · sein · haben',
        headers: ['', 'wohnen', 'sein', 'haben'],
        rows: [
          ['ich', 'wohne', 'bin', 'habe'],
          ['du', 'wohnst', 'bist', 'hast'],
          ['er/sie/es', 'wohnt', 'ist', 'hat'],
          ['wir', 'wohnen', 'sind', 'haben'],
          ['ihr', 'wohnt', 'seid', 'habt'],
          ['sie/Sie', 'wohnen', 'sind', 'haben']
        ]
      },
      more: {
        examples: [
          { de: 'Wie heißt du und woher kommst du?', es: '¿Cómo te llamas y de dónde eres?' },
          { de: 'Wir haben eine Wohnung in der Stadt.', es: 'Tenemos un piso en el centro.' },
          { de: 'Seid ihr müde? — Ja, ein bisschen.', es: '¿Estáis cansados? — Sí, un poco.' }
        ]
      }
    },
    {
      title: 'Los artículos: der / die / das',
      body: 'Cada sustantivo tiene un género. En plural el artículo definido siempre es "die".',
      examples: [
        { de: 'der Tisch · die Lampe · das Fenster · die Stühle', es: 'm · f · n · plural' },
        { de: 'Das ist ein Buch. Das Buch ist neu.', es: 'Es un libro. El libro es nuevo.' }
      ],
      detail:
        'Definido (nominativo): der (m) · das (n) · die (f) · die (pl). Indefinido: ein (m/n) · eine (f) · — (no hay plural, se usa el sustantivo solo). "kein/keine" es la negación de "ein" y también vale para el plural: "Ich habe keine Geschwister".\n\nEl género hay que aprenderlo con la palabra. Pistas útiles: -ung, -heit, -keit, -schaft, -e → femenino; -chen, -lein, -ment → neutro; -er (personas/oficios), -ling, -or → masculino.',
      table: {
        title: 'Artículo en nominativo',
        headers: ['', 'm', 'n', 'f', 'pl'],
        rows: [
          ['definido', 'der', 'das', 'die', 'die'],
          ['indefinido', 'ein', 'ein', 'eine', '—'],
          ['negación', 'kein', 'kein', 'keine', 'keine']
        ]
      },
      more: {
        examples: [
          { de: 'Die Kinder sind im Garten.', es: 'Los niños están en el jardín.' },
          { de: 'Ist das eine Katze? — Nein, das ist ein Hund.', es: '¿Es un gato? — No, es un perro.' },
          { de: 'Wir haben kein Auto.', es: 'No tenemos coche.' }
        ]
      }
    },
    {
      title: 'El verbo en 2ª posición',
      body: 'En una frase afirmativa, el verbo conjugado siempre es el segundo elemento.',
      examples: [
        { de: 'Ich gehe heute ins Kino.', es: 'Hoy voy al cine.' },
        { de: 'Heute gehe ich ins Kino.', es: 'Hoy voy al cine. (empezando por "hoy")' }
      ],
      detail:
        '"Segundo elemento" no significa "segunda palabra": la posición 1 puede ser el sujeto, un complemento de tiempo, de lugar… Si en la posición 1 pones algo que no es el sujeto, el sujeto pasa justo detrás del verbo (inversión): "Am Wochenende arbeite ich nicht".\n\nEn preguntas de sí/no y en el imperativo, el verbo va PRIMERO: "Kommst du mit?", "Mach die Tür zu!". En preguntas con w- (wer, was, wo…) el verbo sigue en 2ª posición: "Wo wohnst du?".',
      more: {
        examples: [
          { de: 'Am Montag habe ich einen Termin beim Arzt.', es: 'El lunes tengo cita con el médico.' },
          { de: 'Normalerweise stehe ich um sieben auf.', es: 'Normalmente me levanto a las siete.' },
          { de: 'Danach gehen wir noch etwas trinken.', es: 'Después vamos a tomar algo.' }
        ]
      }
    },
    {
      title: 'Preguntas: W-Fragen y de sí/no',
      body: 'Con palabra interrogativa: verbo en 2ª posición. Sin ella (sí/no): verbo primero.',
      examples: [
        { de: 'Wo wohnst du? — In Berlin.', es: '¿Dónde vives? — En Berlín.' },
        { de: 'Wohnst du in Berlin? — Ja.', es: '¿Vives en Berlín? — Sí.' }
      ],
      detail:
        'Palabras interrogativas frecuentes: wer (quién), was (qué), wo (dónde), wohin (a dónde), woher (de dónde), wann (cuándo), wie (cómo), warum / wieso (por qué), wie viel(e) (cuánto/s), welch- (qué / cuál).\n\nEstructura W-Frage: palabra-w + verbo + sujeto + resto → "Warum lernst du Deutsch?". Estructura sí/no: verbo + sujeto + resto → "Lernst du Deutsch?". Se responde con "Ja", "Nein" o "Doch" (para contradecir una pregunta negativa).',
      more: {
        examples: [
          { de: 'Wie heißt du? — Ich heiße Marco.', es: '¿Cómo te llamas? — Me llamo Marco.' },
          { de: 'Woher kommt ihr? — Aus Italien.', es: '¿De dónde sois? — De Italia.' },
          { de: 'Hast du morgen Zeit? — Ja, ab drei.', es: '¿Tienes tiempo mañana? — Sí, a partir de las tres.' }
        ]
      }
    },
    {
      title: 'La negación: nicht / kein',
      body: '"kein" niega sustantivos con "ein" o sin artículo. "nicht" niega el resto.',
      examples: [
        { de: 'Ich habe kein Auto.', es: 'No tengo coche.' },
        { de: 'Das Auto ist nicht neu.', es: 'El coche no es nuevo.' }
      ],
      detail:
        'Usa "kein/keine/keinen…" cuando el "sí" llevaría "ein" o nada: "Ich habe ein Auto" → "Ich habe kein Auto"; "Ich trinke Kaffee" → "Ich trinke keinen Kaffee".\n\nUsa "nicht" para negar: verbos ("Er kommt nicht"), adjetivos ("nicht teuer"), nombres propios, y sustantivos con artículo definido o posesivo ("Das ist nicht mein Buch"). Posición de "nicht": al final si niega toda la frase ("Ich komme heute nicht"), o justo delante de lo que niega ("Ich fahre nicht mit dem Auto").',
      more: {
        examples: [
          { de: 'Wir haben keine Zeit und kein Geld.', es: 'No tenemos ni tiempo ni dinero.' },
          { de: 'Ich verstehe das nicht.', es: 'Eso no lo entiendo.' },
          { de: 'Sie wohnt nicht mehr hier.', es: 'Ya no vive aquí.' }
        ]
      }
    },
    {
      title: 'El plural de los sustantivos',
      body: 'Hay cinco patrones. Conviene aprender el plural junto con la palabra.',
      examples: [
        { de: 'der Tisch → die Tische', es: '-e (muchos masculinos)' },
        { de: 'die Frau → die Frauen · das Kind → die Kinder', es: '-(e)n / -er' }
      ],
      detail:
        'Patrones: (1) -e, a menudo con Umlaut: Tisch → Tische, Stuhl → Stühle. (2) -er, con Umlaut si se puede: Kind → Kinder, Buch → Bücher (sobre todo neutros). (3) -(e)n, sin Umlaut: Frau → Frauen, Blume → Blumen (la mayoría de femeninos; también -ung/-heit/-keit → -en). (4) -s: palabras en vocal o extranjeras: Auto → Autos, Handy → Handys. (5) solo Umlaut: Apfel → Äpfel, Mutter → Mütter.\n\nEn dativo plural el sustantivo añade además -n: "mit den Kindern".',
      table: {
        title: 'Los cinco patrones de plural',
        headers: ['patrón', 'ejemplo', 'plural'],
        rows: [
          ['-e (± Umlaut)', 'der Tisch / der Stuhl', 'die Tische / die Stühle'],
          ['-er (± Umlaut)', 'das Kind / das Buch', 'die Kinder / die Bücher'],
          ['-(e)n', 'die Frau / die Wohnung', 'die Frauen / die Wohnungen'],
          ['-s', 'das Auto / das Handy', 'die Autos / die Handys'],
          ['solo Umlaut', 'der Apfel / die Mutter', 'die Äpfel / die Mütter']
        ]
      },
      more: {
        examples: [
          { de: 'Wie viele Geschwister hast du? — Zwei Brüder.', es: '¿Cuántos hermanos tienes? — Dos hermanos.' },
          { de: 'Die Zimmer sind alle sehr hell.', es: 'Todas las habitaciones son muy luminosas.' },
          { de: 'Ich brauche noch ein paar Gläser.', es: 'Necesito unos cuantos vasos más.' }
        ]
      }
    }
  ],
  pitfalls: [
    'La 3ª persona del singular acaba en -t: ✗ er komme → ✓ er kommt.',
    'El verbo va SIEMPRE en 2ª posición en la afirmación: ✗ Heute ich gehe → ✓ Heute gehe ich.',
    'En preguntas de sí/no el verbo va primero: ✗ Du kommst mit? → ✓ Kommst du mit?',
    '"kein" con "ein"/sin artículo, "nicht" con lo demás: ✗ Ich habe nicht Auto → ✓ Ich habe kein Auto.'
  ]
};

export default {
  id: 'grundlagen',
  name: 'Grammatik-Grundlagen',
  nameEs: 'Gramática básica',
  emoji: '🌱',
  blurb: 'Conjugación en presente, der/die/das, verbo en 2ª posición, preguntas, negación y plural',
  theory,
  concepts: [
    { id: 'basis:praesens', label: 'Presente: conjugación (y sein/haben)' },
    { id: 'basis:artikel', label: 'Artículos der/die/das, ein/eine, kein' },
    { id: 'basis:position2', label: 'El verbo en 2ª posición' },
    { id: 'basis:fragen', label: 'Preguntas (W-Fragen y de sí/no)' },
    { id: 'basis:negation', label: 'Negación: nicht / kein' },
    { id: 'basis:plural', label: 'El plural de los sustantivos' }
  ],
  frames
};
