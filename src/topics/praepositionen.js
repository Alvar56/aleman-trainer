import { mc, order } from '../engine/helpers.js';
import { pick } from '../lib/rng.js';
import { t } from '../lib/i18n.js';
import { tc } from '../lib/contenido/index.js';

// Cada entrada trae ya su respuesta, distractores, traduccion y explicacion
// para garantizar que el ejercicio es correcto. La variedad viene del numero
// de frases y de la mezcla con repaso / IA.

// 1) Elegir la preposicion (frases A2-B1 de la vida real)
const PREP = [
  { s: 'Auf dem Heimweg bin ich noch kurz ___ den Supermarkt gegangen.', a: 'durch', d: ['aus', 'bei'], c: 'prep:akk', t: 'De camino a casa pasé un momento por el supermercado.', e: '"durch" (a través de) rige siempre acusativo.' },
  { s: 'Vielen Dank ___ die schnelle Antwort und die Unterlagen.', a: 'für', d: ['von', 'zu'], c: 'prep:akk', t: 'Muchas gracias por la respuesta rápida y la documentación.', e: '"für" rige acusativo. "sich bedanken für / danke für + Akk".' },
  { s: 'Ich habe nichts ___ diesen Vorschlag, aber wir sollten noch warten.', a: 'gegen', d: ['für', 'ohne'], c: 'prep:akk', t: 'No tengo nada en contra de esta propuesta, pero deberíamos esperar.', e: '"gegen" (contra) rige acusativo.' },
  { s: 'Ohne meinen Kaffee ___ Morgen bin ich zu nichts zu gebrauchen.', a: 'am', d: ['im', 'um'], c: 'prep:dat', t: 'Sin mi café de la mañana no valgo para nada.', e: '"an dem Morgen" → "am Morgen"; expresión temporal fija en dativo.' },
  { s: 'Ich fahre lieber ___ dem Fahrrad zur Arbeit als mit dem Auto.', a: 'mit', d: ['für', 'um'], c: 'prep:dat', t: 'Prefiero ir en bici al trabajo que en coche.', e: '"mit" (medio de transporte) rige dativo: "mit dem Fahrrad".' },
  { s: 'Meine neue Kollegin kommt ___ der Schweiz, aus Basel genau.', a: 'aus', d: ['von', 'nach'], c: 'prep:dat', t: 'Mi compañera nueva es de Suiza, de Basilea exactamente.', e: '"aus" (procedencia de país/ciudad) rige dativo.' },
  { s: 'Nach dem langen Arbeitstag wollte ich einfach nur ___ Hause.', a: 'nach', d: ['zu', 'in'], c: 'prep:dat', t: 'Después del largo día de trabajo solo quería irme a casa.', e: '"nach Hause" es expresión fija de dirección.' },
  { s: 'Während des Umzugs habe ich zwei Wochen ___ meinen Eltern gewohnt.', a: 'bei', d: ['mit', 'zu'], c: 'prep:dat', t: 'Durante la mudanza viví dos semanas en casa de mis padres.', e: '"bei jdm wohnen" (en casa de alguien) rige dativo.' },
  { s: 'Ich mache diesen Job schon ___ über fünf Jahren und mag ihn noch.', a: 'seit', d: ['für', 'vor'], c: 'prep:dat', t: 'Llevo más de cinco años en este trabajo y todavía me gusta.', e: '"seit" (desde hace) rige dativo y va con presente.' },
  { s: 'Wegen der Zahnschmerzen muss ich morgen unbedingt ___ Zahnarzt.', a: 'zum', d: ['nach', 'ins'], c: 'prep:dat', t: 'Por el dolor de muelas mañana tengo que ir al dentista sin falta.', e: '"zu dem Zahnarzt" → "zum Zahnarzt" (hacia una persona → dativo).' },
  { s: 'Ich kann ___ meine Brille fast gar nichts sehen.', a: 'ohne', d: ['mit', 'für'], c: 'prep:akk', t: 'Sin mis gafas no puedo ver casi nada.', e: '"ohne" rige siempre acusativo.' },
  { s: 'Wir treffen uns morgen genau ___ acht Uhr vor dem Kino.', a: 'um', d: ['am', 'im'], c: 'prep:akk', t: 'Quedamos mañana exactamente a las ocho delante del cine.', e: '"um" se usa para horas exactas y rige acusativo.' },
  { s: 'Das Auto fuhr mit voller Wucht ___ den Baum.', a: 'gegen', d: ['durch', 'ohne'], c: 'prep:akk', t: 'El coche chocó con toda la fuerza contra el árbol.', e: '"gegen" (contra) rige acusativo.' },
  { s: 'Der schöne Spaziergang führt uns mitten ___ den Wald.', a: 'durch', d: ['nach', 'aus'], c: 'prep:akk', t: 'El bonito paseo nos lleva por medio del bosque.', e: '"durch" (a través de) rige acusativo.' },
  { s: 'Ist das Geschenk eigentlich ___ deine Schwester oder für dich?', a: 'für', d: ['von', 'zu'], c: 'prep:akk', t: '¿El regalo es en realidad para tu hermana o para ti?', e: '"für" rige siempre acusativo.' },
  { s: 'Das Hotel liegt direkt ___ dem Bahnhof.', a: 'gegenüber', d: ['ohne', 'durch'], c: 'prep:dat', t: 'El hotel está justo enfrente de la estación.', e: '"gegenüber" rige dativo: "gegenüber dem Bahnhof".' },
  { s: 'Ich habe gestern einen langen Brief ___ meiner Tante bekommen.', a: 'von', d: ['aus', 'zu'], c: 'prep:dat', t: 'Ayer recibí una larga carta de mi tía.', e: '"von" (procedencia / remitente) rige dativo: "von meiner Tante".' },
  { s: 'Er trinkt seinen Tee immer ___ Milch und viel Zucker.', a: 'mit', d: ['aus', 'bei'], c: 'prep:dat', t: 'Siempre toma el té con leche y mucho azúcar.', e: '"mit" rige siempre dativo.' },
  { s: 'Wir fliegen nächsten Monat für zwei Wochen ___ Spanien.', a: 'nach', d: ['zu', 'in'], c: 'prep:dat', t: 'El mes que viene volamos dos semanas a España.', e: '"nach" se usa con países y ciudades sin artículo.' },
  { s: 'Sie arbeitet seit drei Jahren ___ einer internationalen Firma.', a: 'bei', d: ['in', 'zu'], c: 'prep:dat', t: 'Trabaja desde hace tres años en una empresa internacional.', e: '"bei" se usa para empresas o lugares de trabajo (en dativo).' },
  { s: 'Ich nehme die Flasche Saft ___ dem Kühlschrank.', a: 'aus', d: ['von', 'nach'], c: 'prep:dat', t: 'Saco la botella de zumo del frigorífico.', e: '"aus" (de dentro hacia fuera) rige dativo: "aus dem Kühlschrank".' },
  { s: 'Ich lerne ___ einem halben Jahr intensiv Deutsch.', a: 'seit', d: ['für', 'vor'], c: 'prep:dat', t: 'Llevo medio año aprendiendo alemán de forma intensiva.', e: '"seit" expresa una acción iniciada en el pasado que continúa y rige dativo.' },
  { s: 'Kommst du heute Abend mit ___ mir nach Hause?', a: 'zu', d: ['nach', 'bei'], c: 'prep:dat', t: '¿Vienes hoy conmigo a mi casa?', e: '"zu mir" (a mi casa / a mi lado) rige dativo.' },
  { s: 'Die Bäckerei befindet sich direkt ___ der Kirche.', a: 'neben', d: ['ohne', 'durch'], c: 'prep:dat', t: 'La panadería se encuentra justo al lado de la iglesia.', e: '"neben" indica ubicación (wo?) y rige dativo.' }
];

// 2) Wechselpräpositionen: elige el ARTÍCULO según wo? (dativo) / wohin? (acusativo)
const WECHSEL = [
  { s: 'Häng deinen Mantel bitte an ___ Garderobe im Flur. (wohin?)', a: 'die', d: ['der', 'das'], c: 'prep:wechsel:wohin', t: 'Cuelga el abrigo en el perchero del pasillo.', e: 'Dirección (wohin?) → acusativo. "Garderobe" es femenina → "an die Garderobe".' },
  { s: 'Dein Schlüssel liegt schon die ganze Zeit auf ___ Küchentisch. (wo?)', a: 'dem', d: ['den', 'der'], c: 'prep:wechsel:wo', t: 'Tu llave lleva todo el rato encima de la mesa de la cocina.', e: 'Ubicación (wo?) → dativo. "Tisch" es masculino → "auf dem Tisch".' },
  { s: 'Stell die schweren Kisten erst mal in ___ Ecke, wir sortieren später. (wohin?)', a: 'die', d: ['der', 'dem'], c: 'prep:wechsel:wohin', t: 'Deja las cajas pesadas en el rincón de momento, ordenamos luego.', e: '"stellen" (dirección) → acusativo. "Ecke" es femenina → "in die Ecke".' },
  { s: 'Die Kinder spielen bei dem Wetter am liebsten in ___ Wohnzimmer. (wo?)', a: 'dem', d: ['das', 'den'], c: 'prep:wechsel:wo', t: 'Con este tiempo los niños prefieren jugar en el salón.', e: 'Ubicación (wo?) → dativo. "Wohnzimmer" es neutro → "in dem Wohnzimmer" (im).' },
  { s: 'Wir haben das neue Sofa genau vor ___ Fenster gestellt. (wohin?)', a: 'das', d: ['dem', 'der'], c: 'prep:wechsel:wohin', t: 'Hemos puesto el sofá nuevo justo delante de la ventana.', e: '"stellen" (dirección) → acusativo. "Fenster" es neutro → "vor das Fenster".' },
  { s: 'Zwischen ___ beiden Terminen habe ich nur zwanzig Minuten Zeit. (wo?)', a: 'den', d: ['die', 'der'], c: 'prep:wechsel:wo', t: 'Entre las dos citas solo tengo veinte minutos.', e: 'Ubicación (wo?) → dativo; plural en dativo → "zwischen den Terminen".' },
  { s: 'Das Bild hängt schon lange an ___ Wand im Schlafzimmer. (wo?)', a: 'der', d: ['die', 'den'], c: 'prep:wechsel:wo', t: 'El cuadro lleva mucho tiempo colgado en la pared del dormitorio.', e: 'Ubicación (wo?) → dativo. "Wand" es femenina: "an der Wand".' },
  { s: 'Ich hänge das neue Bild jetzt an ___ Wand. (wohin?)', a: 'die', d: ['der', 'dem'], c: 'prep:wechsel:wohin', t: 'Ahora cuelgo el cuadro nuevo en la pared.', e: 'Dirección (wohin?) → acusativo. "Wand" es femenina: "an die Wand".' },
  { s: 'Die Katze schläft friedlich unter ___ Bett. (wo?)', a: 'dem', d: ['das', 'den'], c: 'prep:wechsel:wo', t: 'El gato duerme plácidamente debajo de la cama.', e: 'Ubicación (wo?) → dativo. "Bett" es neutro: "unter dem Bett".' },
  { s: 'Der Hund rennt schnell unter ___ Tisch. (wohin?)', a: 'den', d: ['dem', 'der'], c: 'prep:wechsel:wohin', t: 'El perro corre rápido debajo de la mesa.', e: 'Dirección (wohin?) → acusativo. "Tisch" es masculino: "unter den Tisch".' },
  { s: 'Die Lampe hängt direkt über ___ Esstisch. (wo?)', a: 'dem', d: ['den', 'das'], c: 'prep:wechsel:wo', t: 'La lámpara cuelga justo encima de la mesa del comedor.', e: 'Ubicación (wo?) → dativo. "Esstisch" es masculino: "über dem Esstisch".' },
  { s: 'Ich stelle meine Schuhe hinter ___ Tür. (wohin?)', a: 'die', d: ['der', 'den'], c: 'prep:wechsel:wohin', t: 'Pongo mis zapatos detrás de la puerta.', e: 'Dirección (wohin?) → acusativo. "Tür" es femenina: "hinter die Tür".' },
  { s: 'Der Besen steht hinter ___ Schrank im Flur. (wo?)', a: 'dem', d: ['den', 'der'], c: 'prep:wechsel:wo', t: 'La escoba está detrás del armario en el pasillo.', e: 'Ubicación (wo?) → dativo. "Schrank" es masculino: "hinter dem Schrank".' },
  { s: 'Setz dich bitte neben ___ neuen Kollegen. (wohin?)', a: 'den', d: ['dem', 'der'], c: 'prep:wechsel:wohin', t: 'Siéntate por favor al lado del compañero nuevo.', e: 'Dirección (wohin?) → acusativo. "Kollege" es masculino (débil): "neben den neuen Kollegen".' },
  { s: 'Sie sitzt im Meeting immer neben ___ Chefin. (wo?)', a: 'der', d: ['die', 'den'], c: 'prep:wechsel:wo', t: 'En la reunión siempre se sienta al lado de la jefa.', e: 'Ubicación (wo?) → dativo. "Chefin" es femenina: "neben der Chefin".' },
  { s: 'Wir legen den Teppich vor ___ Kamin. (wohin?)', a: 'den', d: ['dem', 'das'], c: 'prep:wechsel:wohin', t: 'Ponemos la alfombra delante de la chimenea.', e: 'Dirección (wohin?) → acusativo. "Kamin" es masculino: "vor den Kamin".' },
  { s: 'Das Auto steht schon seit zwei Tagen vor ___ Haus. (wo?)', a: 'dem', d: ['das', 'den'], c: 'prep:wechsel:wo', t: 'El coche lleva dos días parado delante de la casa.', e: 'Ubicación (wo?) → dativo. "Haus" es neutro: "vor dem Haus".' },
  { s: 'Stell die Stehlampe bitte zwischen ___ Sofa und das Regal. (wohin?)', a: 'das', d: ['dem', 'den'], c: 'prep:wechsel:wohin', t: 'Pon la lámpara de pie entre el sofá y la estantería.', e: 'Dirección (wohin?) → acusativo. "Sofa" es neutro: "zwischen das Sofa".' }
];

// 3) Contracciones · preposición fija de verbos
const KONTRA = [
  { s: 'Bei dem Regen bleiben wir heute lieber ___ Haus und kochen etwas.', a: 'im', d: ['ins', 'zu'], c: 'prep:kontraktion', t: 'Con esta lluvia hoy mejor nos quedamos en casa y cocinamos algo.', e: '"in dem Haus" → "im Haus" (ubicación → dativo). Nota: "zu Hause" también vale, pero aquí falta "zu".' },
  { s: 'Nach dem Termin muss ich noch schnell ___ Post, ein Paket abholen.', a: 'zur', d: ['zum', 'nach'], c: 'prep:kontraktion', t: 'Después de la cita tengo que pasar rápido por Correos a recoger un paquete.', e: '"zu der Post" → "zur Post".' },
  { s: 'Wir treffen uns um sieben ___ Eingang vom Kino, nicht drinnen.', a: 'am', d: ['ans', 'im'], c: 'prep:kontraktion', t: 'Quedamos a las siete en la entrada del cine, no dentro.', e: '"an dem Eingang" → "am Eingang" (ubicación → dativo).' },
  { s: 'Häng die nassen Handtücher bitte ___ Balkon, drinnen trocknen sie nicht.', a: 'auf den', d: ['auf dem', 'an dem'], c: 'prep:kontraktion', t: 'Cuelga las toallas mojadas en el balcón, dentro no se secan.', e: 'Dirección (wohin?) → acusativo: "auf den Balkon".' },
  { s: 'Am Wochenende fahren wir mit den Kindern ___ Zoo.', a: 'in den', d: ['im', 'in dem'], c: 'prep:kontraktion', t: 'El finde vamos con los niños al zoo.', e: 'Dirección → acusativo: "in den Zoo" (no se contrae con "den").' },
  { s: 'Ich freue mich schon riesig ___ die Sommerferien.', a: 'auf', d: ['für', 'über'], c: 'prep:verbprep', t: 'Tengo muchísimas ganas de las vacaciones de verano.', e: '"sich freuen auf + Akk" = tener ganas de algo futuro (verbo con preposición fija).' },
  { s: 'Viele Leute haben Angst ___ dem Zahnarzt, das ist ganz normal.', a: 'vor', d: ['von', 'für'], c: 'prep:verbprep', t: 'Mucha gente tiene miedo al dentista, es de lo más normal.', e: '"Angst haben vor + Dat" (verbo/expresión con preposición fija).' },
  { s: 'Wir warten seit einer halben Stunde ___ den nächsten Bus.', a: 'auf', d: ['für', 'nach'], c: 'prep:verbprep', t: 'Llevamos media hora esperando el próximo autobús.', e: '"warten auf + Akk" (verbo con preposición fija).' },
  { s: 'Sie interessiert sich sehr ___ Politik und liest jeden Tag Zeitung.', a: 'für', d: ['an', 'über'], c: 'prep:verbprep', t: 'Le interesa mucho la política y lee el periódico todos los días.', e: '"sich interessieren für + Akk" (verbo con preposición fija).' },
  { s: 'Denk bitte ___ deinen Termin morgen um neun.', a: 'an', d: ['auf', 'über'], c: 'prep:verbprep', t: 'Acuérdate de tu cita de mañana a las nueve.', e: '"denken an + Akk" (verbo con preposición fija).' },
  { s: 'Morgens gehe ich meistens zu Fuß ___ Arbeit.', a: 'zur', d: ['zum', 'in die'], c: 'prep:kontraktion', t: 'Por las mañanas casi siempre voy a pie al trabajo.', e: '"zu der Arbeit" → "zur Arbeit".' },
  { s: 'Er nimmt regelmäßig ___ Sprachkurs an der Volkshochschule teil.', a: 'am', d: ['ans', 'im'], c: 'prep:verbprep', t: 'Participa con regularidad en el curso de idiomas en la escuela popular.', e: '"teilnehmen an + Dat": "an dem" → "am".' },
  { s: 'Wir sprechen oft ___ unsere Zukunft und gemeinsame Pläne.', a: 'über', d: ['von', 'für'], c: 'prep:verbprep', t: 'A menudo hablamos sobre nuestro futuro y planes comunes.', e: '"sprechen über + Akk" (hablar sobre algo).' },
  { s: 'Ich träume schon lange ___ einer Reise nach Japan.', a: 'von', d: ['über', 'an'], c: 'prep:verbprep', t: 'Sueño desde hace tiempo con un viaje a Japón.', e: '"träumen von + Dat" (soñar con algo).' },
  { s: 'Er kümmert sich am Wochenende liebevoll ___ seine kleinen Geschwister.', a: 'um', d: ['für', 'über'], c: 'prep:verbprep', t: 'El fin de semana cuida con cariño de sus hermanos pequeños.', e: '"sich kümmern um + Akk" (ocuparse de / cuidar de).' },
  { s: 'Bitte achte beim Überqueren der Straße gut ___ den Verkehr.', a: 'auf', d: ['an', 'für'], c: 'prep:verbprep', t: 'Por favor presta mucha atención al tráfico al cruzar la calle.', e: '"achten auf + Akk" (prestar atención a).' },
  { s: 'Dieses alte Wörterbuch gehört ___ meinem Großvater.', a: 'zu', d: ['an', 'bei'], c: 'prep:verbprep', t: 'Este diccionario antiguo pertenecía a mi abuelo.', e: '"gehören zu + Dat" (formar parte de / pertenecer a).' },
  { s: 'Ich bedanke mich herzlich ___ deine tolle Unterstützung.', a: 'für', d: ['über', 'von'], c: 'prep:verbprep', t: 'Te agradezco de corazón tu gran apoyo.', e: '"sich bedanken für + Akk" (agradecer por).' },
  { s: 'Kommst du heute noch mit ___ Supermarkt?', a: 'in den', d: ['im', 'ins'], c: 'prep:kontraktion', t: '¿Te vienes hoy conmigo al supermercado?', e: 'Dirección con masculino → acusativo: "in den Supermarkt".' },
  { s: 'Wir springen bei dem heißen Wetter sofort ___ kühle Wasser.', a: 'ins', d: ['im', 'in dem'], c: 'prep:kontraktion', t: 'Con este calor nos tiramos enseguida al agua fresca.', e: '"in das Wasser" → "ins Wasser" (dirección → acusativo neutro).' },
  { s: 'Mein Onkel erzählt gerne spannende Geschichten ___ seiner Jugend.', a: 'aus', d: ['von', 'nach'], c: 'prep:kontraktion', t: 'A mi tío le gusta contar historias emocionantes de su juventud.', e: '"aus der Jugend" (procedencia / vivencia temporal → dativo).' },
  { s: 'Beim Kochen höre ich immer Musik ___ Radio.', a: 'vom', d: ['im', 'vom dem'], c: 'prep:kontraktion', t: 'Al cocinar siempre escucho música de la radio.', e: '"von dem Radio" → "vom Radio".' }
];

const ORDERS = [
  { sol: ['Nach', 'der', 'Arbeit', 'fahre', 'ich', 'mit', 'dem', 'Bus', 'zum', 'Sportverein'], t: 'Después del trabajo voy en autobús al club deportivo.', e: '"mit" + dativo; "zu dem" → "zum" (hacia una institución → dativo).', c: 'prep:dat' },
  { sol: ['Stell', 'die', 'Blumen', 'bitte', 'auf', 'den', 'Tisch', 'im', 'Wohnzimmer'], t: 'Pon las flores en la mesa del salón, por favor.', e: '"stellen" es dirección → acusativo: "auf den Tisch".', c: 'prep:wechsel:wohin' },
  { sol: ['Das', 'Fahrrad', 'meines', 'Bruders', 'steht', 'seit', 'Wochen', 'im', 'Keller'], t: 'La bici de mi hermano lleva semanas en el sótano.', e: '"stehen" es ubicación → dativo: "im Keller".', c: 'prep:wechsel:wo' },
  { sol: ['Ich', 'freue', 'mich', 'schon', 'sehr', 'auf', 'das', 'Wochenende'], t: 'Ya tengo muchas ganas del fin de semana.', e: '"sich freuen auf + Akk": preposición fija del verbo.', c: 'prep:verbprep' },
  { sol: ['Wir', 'treffen', 'uns', 'morgen', 'um', 'acht', 'vor', 'dem', 'Theater'], t: 'Mañana quedamos a las ocho delante del teatro.', e: '"um" + acusativo para la hora; "vor dem" (ubicación → dativo).', c: 'prep:wechsel:wo' },
  { sol: ['Er', 'hängt', 'seine', 'Jacke', 'immer', 'an', 'die', 'Garderobe'], t: 'Él siempre cuelga su chaqueta en el perchero.', e: '"hängen" (dirección) → acusativo: "an die Garderobe".', c: 'prep:wechsel:wohin' },
  { sol: ['Sie', 'interessiert', 'sich', 'schon', 'seit', 'Jahren', 'für', 'moderne', 'Kunst'], t: 'Lleva años interesándose por el arte moderno.', e: '"seit" + dativo; "sich interessieren für" + acusativo.', c: 'prep:verbprep' },
  { sol: ['Die', 'Kinder', 'laufen', 'nach', 'der', 'Schule', 'in', 'den', 'Park'], t: 'Los niños corren al parque después del colegio.', e: '"nach" + dativo; "in den Park" (dirección → acusativo).', c: 'prep:wechsel:wohin' },
  { sol: ['Ich', 'habe', 'lange', 'auf', 'die', 'wichtige', 'Antwort', 'gewartet'], t: 'He esperado mucho tiempo la respuesta importante.', e: '"warten auf" + acusativo ("auf die wichtige Antwort").', c: 'prep:verbprep' },
  { sol: ['Mein', 'Bruder', 'wohnt', 'seit', 'letztem', 'Jahr', 'bei', 'einer', 'Gastfamilie'], t: 'Mi hermano vive con una familia de acogida desde el año pasado.', e: '"seit" + dativo; "bei" + dativo ("bei einer Gastfamilie").', c: 'prep:dat' },
  { sol: ['Wir', 'gehen', 'am', 'Samstag', 'zusammen', 'in', 'das', 'neue', 'Museum'], t: 'El sábado vamos juntos al museo nuevo.', e: '"in das" (dirección → acusativo neutro).', c: 'prep:wechsel:wohin' },
  { sol: ['Der', 'Hund', 'liegt', 'den', 'ganzen', 'Tag', 'unter', 'dem', 'Schreibtisch'], t: 'El perro se pasa todo el día tumbado debajo del escritorio.', e: '"unter dem" (ubicación → dativo masculino).', c: 'prep:wechsel:wo' },
  { sol: ['Sie', 'fährt', 'jeden', 'Morgen', 'mit', 'der', 'U-Bahn', 'zur', 'Universität'], t: 'Ella va cada mañana en metro a la universidad.', e: '"mit der" (dativo); "zur" (zu der → dativo).', c: 'prep:dat' },
  { sol: ['Er', 'denkt', 'oft', 'an', 'seine', 'schöne', 'Zeit', 'in', 'Berlin'], t: 'Él piensa a menudo en su buena época en Berlín.', e: '"denken an" + acusativo ("an seine schöne Zeit").', c: 'prep:verbprep' },
  { sol: ['Ich', 'habe', 'den', 'Schlüssel', 'aus', 'meiner', 'Hosentasche', 'geholt'], t: 'Saqué la llave de mi bolsillo.', e: '"aus" + dativo femenino ("aus meiner Hosentasche").', c: 'prep:dat' },
  { sol: ['Die', 'Touristen', 'gehen', 'gemütlich', 'durch', 'die', 'historische', 'Altstadt'], t: 'Los turistas pasean tranquilamente por el casco histórico.', e: '"durch" + acusativo femenino ("durch die historische Altstadt").', c: 'prep:akk' },
  { sol: ['Er', 'sitzt', 'am', 'liebsten', 'zwischen', 'den', 'beiden', 'Fenstern'], t: 'Prefiere sentarse entre las dos ventanas.', e: '"zwischen den" (ubicación → dativo plural).', c: 'prep:wechsel:wo' },
  { sol: ['Wir', 'haben', 'uns', 'sehr', 'über', 'deine', 'Nachricht', 'gefreut'], t: 'Nos alegramos mucho por tu mensaje.', e: '"sich freuen über" + acusativo ("über deine Nachricht").', c: 'prep:verbprep' },
  { sol: ['Sie', 'legt', 'die', 'Zeitung', 'auf', 'den', 'kleinen', 'Couchtisch'], t: 'Ella pone el periódico sobre la mesita de centro.', e: '"legen auf" (dirección → acusativo: "auf den kleinen Couchtisch").', c: 'prep:wechsel:wohin' },
  { sol: ['Ich', 'bedanke', 'mich', 'bei', 'Ihnen', 'für', 'die', 'Einladung'], t: 'Le agradezco a usted la invitación.', e: '"sich bedanken bei" (dativo) + "für" (acusativo).', c: 'prep:verbprep' }
];

const frames = [
  { make: (rng) => { const x = pick(rng, PREP); return mc(rng, { conceptId: x.c, prompt: t('tp.pickPrep'), sentence: x.s, correct: x.a, distractors: x.d, translation: tc(x.t), explanation: tc(x.e) }); } },
  { make: (rng) => { const x = pick(rng, WECHSEL); return mc(rng, { conceptId: x.c, prompt: t('tp.woWohin'), sentence: x.s, correct: x.a, distractors: x.d, translation: tc(x.t), explanation: tc(x.e) }); } },
  { make: (rng) => { const x = pick(rng, KONTRA); return mc(rng, { conceptId: x.c, prompt: t('tp.pickForm'), sentence: x.s, correct: x.a, distractors: x.d, translation: tc(x.t), explanation: tc(x.e) }); } },
  { make: (rng) => { const x = pick(rng, ORDERS); return order(rng, { conceptId: x.c, prompt: t('frames.orderFull'), solution: x.sol, translation: tc(x.t), explanation: tc(x.e) }); } }
];

export const theory = {
  intro:
    'Cada preposición exige un caso. Hay tres grupos: las que siempre piden acusativo, las que siempre piden dativo, y las "Wechselpräpositionen", que piden uno u otro según el sentido. Pulsa cada bloque para ver la explicación completa y más ejemplos.',
  sections: [
    {
      title: 'Siempre acusativo: durch, für, gegen, ohne, um',
      body: 'Truco para recordarlas: "dogfu" (durch-ohne-gegen-für-um).',
      examples: [
        { de: 'Das Geschenk ist für dich.', es: 'El regalo es para ti.' },
        { de: 'Wir gehen durch den Park.', es: 'Vamos por el parque.' }
      ],
      detail:
        'durch (a través de, por dentro de), für (para; a favor de), gegen (contra; hacia una hora aprox.), ohne (sin), um (alrededor de; a una hora exacta). No cambian nunca de caso: durch DEN Park, für DEN Kollegen, gegen DIE Wand.\n\n"ohne" suele ir sin artículo: "ohne Zucker", "ohne Auto". "um" para la hora: "um 8 Uhr"; "gegen" para la hora aproximada: "gegen 8 Uhr". A veces "durch" y "für" se contraen en lenguaje informal: durchs, fürs.',
      more: {
        examples: [
          { de: 'Ich bin gegen diesen Plan.', es: 'Estoy en contra de este plan.' },
          { de: 'Wir treffen uns um acht vor dem Kino.', es: 'Quedamos a las ocho delante del cine.' },
          { de: 'Ohne dich macht das keinen Spaß.', es: 'Sin ti esto no tiene gracia.' },
          { de: 'Sie ist um die halbe Welt gereist.', es: 'Ha viajado por medio mundo.' },
          { de: 'Das ist ein Geschenk für meine Eltern.', es: 'Es un regalo para mis padres.' }
        ]
      }
    },
    {
      title: 'Siempre dativo: aus, bei, mit, nach, seit, von, zu',
      body: 'También gegenüber. Todas piden dativo sin excepción.',
      examples: [
        { de: 'Ich fahre mit dem Bus zur Arbeit.', es: 'Voy en autobús al trabajo.' },
        { de: 'Ich lerne seit zwei Jahren Deutsch.', es: 'Aprendo alemán desde hace dos años.' }
      ],
      detail:
        'aus (de dentro de; procedencia de país/ciudad), bei (en casa de / en la empresa de / cerca de), mit (con; medio de transporte), nach (a, con países y ciudades y "nach Hause"; también "después de"), seit (desde hace + presente), von (de; procedencia general y posesión), zu (a, hacia una persona o institución y "zu Hause").\n\n"nach" vs "zu": nach + nombres propios de lugar sin artículo (nach Berlin, nach Italien) y "nach Hause"; zu + personas e instituciones (zum Arzt, zur Schule, zu mir). "bei" es "estar en / trabajar en", "zu" es "ir a". "seit" siempre con presente en alemán: "Ich wohne seit 2020 hier".',
      more: {
        examples: [
          { de: 'Nach der Arbeit gehe ich zu einem Freund.', es: 'Después del trabajo voy a casa de un amigo.' },
          { de: 'Sie arbeitet bei einer großen Firma.', es: 'Trabaja en una empresa grande.' },
          { de: 'Das ist ein Foto von meiner Schwester.', es: 'Es una foto de mi hermana.' },
          { de: 'Ich komme gerade aus dem Büro.', es: 'Vengo ahora mismo de la oficina.' },
          { de: 'Fährst du mit mir zum Bahnhof?', es: '¿Vienes conmigo a la estación?' }
        ]
      }
    },
    {
      title: 'Wechselpräpositionen: an, auf, hinter, in, neben, über, unter, vor, zwischen',
      body: 'wo? (ubicación, sin movimiento) → dativo. wohin? (dirección, movimiento) → acusativo.',
      examples: [
        { de: 'Das Buch liegt auf dem Tisch. (wo?)', es: 'dativo → dem' },
        { de: 'Ich lege das Buch auf den Tisch. (wohin?)', es: 'acusativo → den' }
      ],
      detail:
        'Son nueve y funcionan por parejas de verbos: verbos de ubicación (sein, liegen, stehen, hängen, sitzen, bleiben, arbeiten) → wo? → DATIVO. Verbos de dirección (gehen, fahren, legen, stellen, hängen, sich setzen, kommen) → wohin? → ACUSATIVO.\n\nMismo par, distinto caso: "Ich hänge das Bild an die Wand" (wohin, acusativo) / "Das Bild hängt an der Wand" (wo, dativo). Truco: si puedes preguntar "¿a dónde?" es acusativo; si preguntas "¿dónde?" es dativo. Con horas y fechas "an", "in", "vor" son fijas en dativo: "am Montag", "im Sommer", "vor einer Woche".',
      more: {
        title: 'wo? (dativo) vs wohin? (acusativo)',
        examples: [
          { de: 'Die Kinder spielen im Garten. (wo?)', es: 'Los niños juegan en el jardín.' },
          { de: 'Die Kinder laufen in den Garten. (wohin?)', es: 'Los niños corren al jardín.' },
          { de: 'Stell die Tasche bitte neben den Stuhl.', es: 'Pon la bolsa al lado de la silla, por favor.' },
          { de: 'Zwischen den beiden Häusern gibt es einen Weg.', es: 'Entre las dos casas hay un camino.' },
          { de: 'Häng deine Jacke über den Stuhl.', es: 'Cuelga la chaqueta sobre la silla.' }
        ]
      }
    },
    {
      title: 'Contracciones · verbos con preposición fija',
      body: 'Preposición + artículo se funden; y muchos verbos B1 llevan una preposición fija que hay que aprender con el verbo.',
      examples: [
        { de: 'in das → ins · in dem → im · zu dem → zum · zu der → zur', es: '' },
        { de: 'Ich freue mich auf die Ferien.', es: 'Tengo ganas de las vacaciones.' }
      ],
      detail:
        'Contracciones habituales: am (an dem), ans (an das), im (in dem), ins (in das), zum (zu dem), zur (zu der), beim (bei dem), vom (von dem). Se usan casi siempre salvo si el artículo lleva énfasis ("in DEM Haus, nicht in dem anderen").\n\nVerbos con preposición fija (Verben mit Präposition): el caso lo marca la preposición, no el sentido. warten auf + Akk, sich freuen auf/über + Akk, denken an + Akk, sich interessieren für + Akk, teilnehmen an + Dat, gehören zu + Dat, sich kümmern um + Akk, Angst haben vor + Dat. Estos hay que memorizarlos como bloque.',
      more: {
        examples: [
          { de: 'Wir warten seit einer Stunde auf den Bus.', es: 'Llevamos una hora esperando el autobús.' },
          { de: 'Ich interessiere mich sehr für Geschichte.', es: 'Me interesa mucho la historia.' },
          { de: 'Denk bitte an deinen Termin morgen.', es: 'Acuérdate de tu cita de mañana.' },
          { de: 'Sie hat an einem Sprachkurs teilgenommen.', es: 'Participó en un curso de idiomas.' },
          { de: 'Viele Leute haben Angst vor dem Zahnarzt.', es: 'Mucha gente tiene miedo al dentista.' }
        ]
      }
    }
  ],
  table: {
    title: 'Artículo definido por caso',
    headers: ['', 'der (m)', 'das (n)', 'die (f)', 'die (pl)'],
    rows: [
      ['Akkusativ', 'den', 'das', 'die', 'die'],
      ['Dativ', 'dem', 'dem', 'der', 'den + -n']
    ]
  },
  pitfalls: [
    '"nach" vs "zu": nach + países/ciudades y "nach Hause"; zu + personas e instituciones. ✗ nach dem Arzt → ✓ zum Arzt.',
    'wo? ≠ wohin?: ✗ Ich gehe in der Schule → ✓ Ich gehe in die Schule.',
    '"seit" es dativo y va con presente: Ich wohne seit 2020 hier (no "für").',
    'En dativo plural el sustantivo añade -n: mit den Kindern, aus den Häusern.'
  ]
};

export default {
  id: 'praepositionen',
  name: 'Präpositionen',
  nameEs: 'Preposiciones',
  emoji: '📍',
  blurb: 'Acusativo, dativo, Wechselpräpositionen, contracciones y verbos con preposición fija',
  theory,
  concepts: [
    { id: 'prep:akk', label: 'Preposiciones de acusativo' },
    { id: 'prep:dat', label: 'Preposiciones de dativo' },
    { id: 'prep:wechsel:wo', label: 'Wechselpräposition: wo? → dativo' },
    { id: 'prep:wechsel:wohin', label: 'Wechselpräposition: wohin? → acusativo' },
    { id: 'prep:kontraktion', label: 'Contracciones (im, ans, zum, zur…)' },
    { id: 'prep:verbprep', label: 'Verbos con preposición fija (warten auf, sich freuen auf…)' }
  ],
  frames
};
