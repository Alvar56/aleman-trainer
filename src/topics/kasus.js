import { mc, order } from '../engine/helpers.js';
import { pick } from '../lib/rng.js';
import { t } from '../lib/i18n.js';
import { tc } from '../lib/contenido/index.js';

// 1) Elegir el artículo según el caso (el verbo/función marca el caso)
const ART = [
  { s: 'Kennst du ___ Mann dort drüben?', a: 'den', d: ['der', 'dem'], c: 'kasus:akkusativ', t: '¿Conoces a ese hombre de ahí?', e: '"kennen" lleva objeto directo → acusativo. En masculino: der → den.' },
  { s: '___ Kind spielt schon seit einer Stunde im Garten.', a: 'Das', d: ['Dem', 'Den'], c: 'kasus:nominativ', t: 'El niño lleva ya una hora jugando en el jardín.', e: 'Es el sujeto (¿quién juega?) → nominativo: "das Kind".' },
  { s: 'Ich schreibe ___ Chef gleich eine kurze E-Mail.', a: 'dem', d: ['den', 'der'], c: 'kasus:dativ', t: 'Ahora le escribo un correo corto al jefe.', e: 'Destinatario (¿a quién?) → dativo. En masculino: der → dem.' },
  { s: 'Am Sonntag besuchen wir ___ Großmutter im Krankenhaus.', a: 'die', d: ['der', 'dem'], c: 'kasus:akkusativ', t: 'El domingo visitamos a la abuela en el hospital.', e: '"besuchen" → objeto directo → acusativo. El femenino no cambia: "die Großmutter".' },
  { s: 'Das teure Fahrrad gehört ___ Nachbarin aus dem dritten Stock.', a: 'der', d: ['die', 'dem'], c: 'kasus:dativ', t: 'La bici cara es de la vecina del tercero.', e: '"gehören" rige dativo. En femenino: die → der.' },
  { s: 'Kannst du ___ Kindern bitte die Jacken geben?', a: 'den', d: ['die', 'der'], c: 'kasus:dativ', t: '¿Puedes darles las chaquetas a los niños?', e: 'Destinatario en plural → dativo: die → den (y el sustantivo añade -n: "den Kindern").' },
  { s: 'Siehst du ___ blaue Auto vor der Bäckerei?', a: 'das', d: ['dem', 'den'], c: 'kasus:akkusativ', t: '¿Ves el coche azul delante de la panadería?', e: '"sehen" → objeto directo → acusativo. El neutro no cambia: "das Auto".' },
  { s: 'Ich brauche dringend ___ Kugelschreiber, meiner schreibt nicht mehr.', a: 'einen', d: ['ein', 'einem'], c: 'kasus:artikel', t: 'Necesito un boli urgentemente, el mío ya no pinta.', e: '"brauchen" → acusativo. Masculino indefinido: ein → einen.' },
  { s: 'Seit dem Umzug wohnt sie bei ___ alten Freundin.', a: 'einer', d: ['eine', 'einem'], c: 'kasus:artikel', t: 'Desde la mudanza vive en casa de una vieja amiga.', e: 'Aquí toca dativo (femenino). Indefinido femenino en dativo: eine → einer.' },
  { s: 'Tut mir leid, heute habe ich wirklich ___ Zeit.', a: 'keine', d: ['kein', 'keinen'], c: 'kasus:kein-possessiv', t: 'Lo siento, hoy de verdad que no tengo tiempo.', e: '"Zeit" es femenino; objeto directo → acusativo. "kein" en femenino = "keine".' },
  { s: 'Er hat ___ Bruder eine Gitarre zum Geburtstag geschenkt.', a: 'seinem', d: ['seinen', 'sein'], c: 'kasus:kein-possessiv', t: 'Le regaló una guitarra a su hermano por su cumpleaños.', e: 'Destinatario → dativo. Los posesivos siguen a "ein": masculino dativo → "seinem".' },
  { s: 'Ich habe ___ ganzen Nachmittag im Wartezimmer verbracht.', a: 'den', d: ['dem', 'der'], c: 'kasus:akkusativ', t: 'Me he pasado toda la tarde en la sala de espera.', e: 'Duración con "verbringen" → acusativo. Masculino: der → den ("den ganzen Nachmittag").' },
  { s: 'Haben Sie ___ neuen Reisepass dabei?', a: 'Ihren', d: ['Ihr', 'Ihrem'], c: 'kasus:kein-possessiv', t: '¿Lleva consigo su nuevo pasaporte?', e: '"Reisepass" es masculino; objeto directo → acusativo: "Ihren neuen Reisepass".' },
  { s: 'Wir danken ___ Professor für seine ausführliche Erklärung.', a: 'dem', d: ['den', 'der'], c: 'kasus:dativ', t: 'Agradecemos al profesor su detallada explicación.', e: '"danken" rige dativo. Masculino: "dem Professor".' },
  { s: 'Er sucht ___ Schlüsselbund schon seit einer halben Stunde.', a: 'seinen', d: ['seinem', 'sein'], c: 'kasus:kein-possessiv', t: 'Lleva media hora buscando su llavero.', e: '"suchen" lleva objeto directo → acusativo: "seinen Schlüsselbund".' },
  { s: 'Ich antworte ___ Kollegin so schnell wie möglich.', a: 'der', d: ['die', 'den'], c: 'kasus:dativ', t: 'Le respondo a la compañera lo antes posible.', e: '"antworten" rige dativo. Femenino: "der Kollegin".' },
  { s: 'Das Kind trinkt ___ kaltes Glas Milch.', a: 'ein', d: ['einen', 'einem'], c: 'kasus:artikel', t: 'El niño bebe un vaso frío de leche.', e: '"Glas" es neutro; objeto directo en acusativo: "ein Glas".' },
  { s: 'Wir haben gestern ___ ganzen Abend draußen gesessen.', a: 'den', d: ['dem', 'der'], c: 'kasus:akkusativ', t: 'Ayer estuvimos sentados afuera toda la noche.', e: 'Complemento de duración en acusativo: "den ganzen Abend".' },
  { s: 'Er schenkt ___ Eltern eine schöne Reise nach Italien.', a: 'seinen', d: ['seine', 'seinem'], c: 'kasus:kein-possessiv', t: 'Les regala a sus padres un bonito viaje a Italia.', e: 'Destinatario en plural → dativo: "seinen Eltern".' },
  { s: 'Ich kenne ___ Arzt schon seit vielen Jahren.', a: 'diesen', d: ['diesem', 'dieser'], c: 'kasus:akkusativ', t: 'Conozco a este médico desde hace muchos años.', e: '"kennen" → objeto directo → acusativo: "diesen Arzt".' },
  { s: 'Gefällt ___ Gästen das Essen im Restaurant?', a: 'den', d: ['die', 'der'], c: 'kasus:dativ', t: '¿Les gusta la comida del restaurante a los invitados?', e: '"gefallen" rige dativo; plural: "den Gästen".' },
  { s: 'Sie hat gestern ___ neue Stelle im Krankenhaus angetreten.', a: 'ihre', d: ['ihrer', 'ihren'], c: 'kasus:kein-possessiv', t: 'Ayer se incorporó a su nuevo puesto en el hospital.', e: '"Stelle" es femenina; objeto directo → acusativo: "ihre neue Stelle".' },
  { s: 'Der Lehrer erklärt ___ Schülern die schwere Grammatikregel.', a: 'den', d: ['die', 'der'], c: 'kasus:dativ', t: 'El profesor les explica a los alumnos la difícil regla de gramática.', e: 'Destinatario en plural → dativo: "den Schülern".' },
  { s: 'Ich habe heute leider ___ einzigen Cent im Portemonnaie.', a: 'keinen', d: ['kein', 'keinem'], c: 'kasus:kein-possessiv', t: 'Hoy por desgracia no tengo ni un solo céntimo en la cartera.', e: '"Cent" es masculino; objeto directo → acusativo: "keinen einzigen Cent".' }
];

// 2) Pronombres personales según el caso
const PRON = [
  { s: 'Wenn du willst, kann ich ___ mit dem Umzug helfen. (a ti)', a: 'dir', d: ['dich', 'du'], c: 'kasus:pronomen', t: 'Si quieres, puedo ayudarte con la mudanza.', e: '"helfen" rige dativo → "dir" (no "dich").' },
  { s: 'Ich habe ___ gestern zufällig in der Stadt gesehen. (a él)', a: 'ihn', d: ['ihm', 'er'], c: 'kasus:pronomen', t: 'Ayer lo vi por casualidad en el centro.', e: '"sehen" → acusativo → "ihn".' },
  { s: 'Der neue Job gefällt ___ von Tag zu Tag besser. (a mí)', a: 'mir', d: ['mich', 'ich'], c: 'kasus:pronomen', t: 'El trabajo nuevo me gusta más cada día.', e: '"gefallen" rige dativo → "mir".' },
  { s: 'Könntest du ___ nachher kurz zurückrufen? (a nosotros)', a: 'uns', d: ['unser', 'wir'], c: 'kasus:pronomen', t: '¿Podrías devolvernos la llamada luego?', e: '"zurückrufen" → acusativo. "uns" sirve para acusativo y dativo.' },
  { s: 'Wir danken ___ herzlich für die schöne Einladung. (a vosotros)', a: 'euch', d: ['ihr', 'euer'], c: 'kasus:pronomen', t: 'Os agradecemos de corazón la bonita invitación.', e: '"danken" rige dativo → "euch".' },
  { s: 'Gib ___ bitte die Fernbedienung, der Film fängt an. (a ella)', a: 'ihr', d: ['sie', 'ihn'], c: 'kasus:pronomen', t: 'Dale el mando, que empieza la película.', e: 'Destinatario de "geben" → dativo → "ihr".' },
  { s: 'Das große Paket auf dem Tisch ist für ___. (para ti)', a: 'dich', d: ['dir', 'du'], c: 'kasus:pronomen', t: 'El paquete grande de la mesa es para ti.', e: '"für" rige acusativo → "dich".' },
  { s: 'Die neuen Schuhe passen ___ leider überhaupt nicht. (a mí)', a: 'mir', d: ['mich', 'ich'], c: 'kasus:pronomen', t: 'Los zapatos nuevos no me quedan nada bien.', e: '"passen" rige dativo → "mir".' },
  { s: 'Der Lehrer erklärt ___ die Grammatikregel ganz genau. (a nosotros)', a: 'uns', d: ['unser', 'wir'], c: 'kasus:pronomen', t: 'El profesor nos explica la regla gramatical con exactitud.', e: '"erklären" + dativo (destinatario) → "uns".' },
  { s: 'Ich rufe ___ morgen früh um acht Uhr an. (a ti)', a: 'dich', d: ['dir', 'du'], c: 'kasus:pronomen', t: 'Te llamo mañana a las ocho de la mañana.', e: '"anrufen" lleva objeto directo → acusativo → "dich".' },
  { s: 'Können Sie ___ bitte den Weg zum Bahnhof beschreiben? (a mí)', a: 'mir', d: ['mich', 'ich'], c: 'kasus:pronomen', t: '¿Puede describirme el camino a la estación, por favor?', e: '"beschreiben" + dativo (destinatario) → "mir".' },
  { s: 'Wir haben ___ leider nicht auf der Feier getroffen. (a ellos)', a: 'sie', d: ['ihnen', 'ihr'], c: 'kasus:pronomen', t: 'Por desgracia no los encontramos en la fiesta.', e: '"treffen" lleva objeto directo → acusativo → "sie".' },
  { s: 'Ich vertraue ___ vollkommen und erzähle dir alles. (a ti)', a: 'dir', d: ['dich', 'du'], c: 'kasus:pronomen', t: 'Confío plenamente en ti y te lo cuento todo.', e: '"vertrauen" rige dativo → "dir".' },
  { s: 'Wie schmeckt ___ die Suppe? — Sehr lecker! (a vosotros)', a: 'euch', d: ['ihr', 'sie'], c: 'kasus:pronomen', t: '¿Qué tal os sabe la sopa? — ¡Muy rica!', e: '"schmecken" rige dativo → "euch".' },
  { s: 'Er hat ___ einen wunderschönen Blumenstrauß mitgebracht. (a ella)', a: 'ihr', d: ['sie', 'ihn'], c: 'kasus:pronomen', t: 'Le trajo un precioso ramo de flores.', e: 'Destinatario de "mitbringen" → dativo → "ihr".' },
  { s: 'Ich danke ___ sehr für Ihre freundliche Hilfe. (a usted)', a: 'Ihnen', d: ['Sie', 'Ihr'], c: 'kasus:pronomen', t: 'Le agradezco mucho su amable ayuda.', e: '"danken" rige dativo cortesía → "Ihnen".' }
];

// 3) Elegir el sintagma bien declinado
const FORM = [
  { s: 'Nach der Schule hilft er oft ___.', opts: ['seiner kleinen Schwester', 'seine kleine Schwester', 'seinen kleinen Schwester'], a: 'seiner kleinen Schwester', c: 'kasus:dativ-verben', t: 'Después del cole ayuda a menudo a su hermana pequeña.', e: '"helfen" rige DATIVO. Femenino: "seine" → "seiner".' },
  { s: 'Sie sucht seit Wochen ___.', opts: ['einen ruhigen Job', 'einem ruhigen Job', 'ein ruhigen Job'], a: 'einen ruhigen Job', c: 'kasus:akkusativ', t: 'Lleva semanas buscando un trabajo tranquilo.', e: '"suchen" → acusativo. Masculino: "ein" → "einen".' },
  { s: 'Der Rucksack dort in der Ecke gehört ___.', opts: ['dem neuen Praktikanten', 'den neuen Praktikanten', 'der neue Praktikant'], a: 'dem neuen Praktikanten', c: 'kasus:dativ-verben', t: 'La mochila del rincón es del becario nuevo.', e: '"gehören" rige dativo. Masculino: "der" → "dem" ("Praktikant" añade -en).' },
  { s: 'Zum Schluss haben wir ___ für die viele Hilfe gedankt.', opts: ['den Nachbarn', 'die Nachbarn', 'der Nachbarn'], a: 'den Nachbarn', c: 'kasus:dativ-verben', t: 'Al final les dimos las gracias a los vecinos por tanta ayuda.', e: '"danken" + dativo; plural: "die" → "den" (y -n en el sustantivo).' },
  { s: 'Im Bus sehe ich fast jeden Morgen ___.', opts: ['diesen netten Mann', 'diesem netten Mann', 'dieser nette Mann'], a: 'diesen netten Mann', c: 'kasus:akkusativ', t: 'En el autobús veo casi cada mañana a este hombre tan simpático.', e: 'Objeto directo → acusativo. Masculino: "dieser" → "diesen".' },
  { s: 'Der Chef gratuliert ___ zum großen Erfolg.', opts: ['allen Mitarbeitern', 'alle Mitarbeiter', 'aller Mitarbeiter'], a: 'allen Mitarbeitern', c: 'kasus:dativ-verben', t: 'El jefe felicita a todos los empleados por el gran éxito.', e: '"gratulieren" rige DATIVO. Plural: "allen Mitarbeitern".' },
  { s: 'Wir vertrauen ___ in dieser wichtigen Angelegenheit.', opts: ['unserem Anwalt', 'unseren Anwalt', 'unser Anwalt'], a: 'unserem Anwalt', c: 'kasus:dativ-verben', t: 'Confiamos en nuestro abogado en este asunto tan importante.', e: '"vertrauen" rige DATIVO. Masculino: "unserem Anwalt".' },
  { s: 'Ich kaufe ___ ein spannendes Jugendbuch.', opts: ['meiner Nichte', 'meine Nichte', 'meinen Nichte'], a: 'meiner Nichte', c: 'kasus:dativ', t: 'Le compro a mi sobrina un emocionante libro juvenil.', e: 'Destinatario (¿a quién?) → dativo. Femenino: "meiner Nichte".' },
  { s: 'Der Kellner empfiehlt ___ die Spezialität des Hauses.', opts: ['den Gästen', 'die Gäste', 'der Gäste'], a: 'den Gästen', c: 'kasus:dativ', t: 'El camarero les recomienda a los comensales la especialidad de la casa.', e: 'Destinatario en plural → dativo: "den Gästen".' },
  { s: 'Er trinkt jeden Morgen ___.', opts: ['einen heißen Kaffee', 'einem heißen Kaffee', 'ein heißer Kaffee'], a: 'einen heißen Kaffee', c: 'kasus:akkusativ', t: 'Se toma un café caliente todas las mañanas.', e: 'Objeto directo → acusativo masculino: "einen heißen Kaffee".' },
  { s: 'Das neue Kleid steht ___ ausgezeichnet.', opts: ['deiner Schwester', 'deine Schwester', 'deinen Schwester'], a: 'deiner Schwester', c: 'kasus:dativ-verben', t: 'El vestido nuevo le sienta fenomenal a tu hermana.', e: '"stehen" (quedar bien una prenda) rige DATIVO. Femenino: "deiner Schwester".' },
  { s: 'Wir beantworten ___ innerhalb von 24 Stunden.', opts: ['Ihre Anfrage', 'Ihrer Anfrage', 'Ihren Anfrage'], a: 'Ihre Anfrage', c: 'kasus:akkusativ', t: 'Respondemos a su solicitud en un plazo de 24 horas.', e: '"beantworten" lleva objeto directo → acusativo femenino: "Ihre Anfrage".' }
];

// 4) Palabra interrogativa según el caso
const WFRAGE = [
  { s: '___ hast du gestern auf der Party getroffen? — Meinen alten Chef.', a: 'Wen', d: ['Wer', 'Wem'], c: 'kasus:akkusativ', t: '¿A quién te encontraste ayer en la fiesta? — A mi antiguo jefe.', e: 'Se pregunta por el objeto directo → "wen" (acusativo).' },
  { s: '___ gehört dieser schwarze Koffer? — Der Frau da vorne.', a: 'Wem', d: ['Wer', 'Wen'], c: 'kasus:dativ', t: '¿De quién es esta maleta negra? — De la señora de delante.', e: '"gehören" rige dativo → se pregunta con "wem".' },
  { s: '___ hat eigentlich diesen leckeren Kuchen gebacken? — Meine Oma.', a: 'Wer', d: ['Wen', 'Wem'], c: 'kasus:nominativ', t: '¿Quién ha hecho esta tarta tan rica? — Mi abuela.', e: 'Se pregunta por el sujeto → "wer" (nominativo).' },
  { s: 'Mit ___ fährst du in den Urlaub? — Mit meinen Cousins.', a: 'wem', d: ['wen', 'wer'], c: 'kasus:dativ', t: '¿Con quién te vas de vacaciones? — Con mis primos.', e: '"mit" rige dativo, así que la pregunta es "mit wem?".' },
  { s: '___ lädst du zu deiner Geburtstagsfeier ein? — Meine engsten Freunde.', a: 'Wen', d: ['Wer', 'Wem'], c: 'kasus:akkusativ', t: '¿A quién invitas a tu fiesta de cumpleaños? — A mis amigos más cercanos.', e: '"einladen" pide objeto directo → acusativo: "wen?".' },
  { s: '___ antwortest du gerade auf die E-Mail? — Dem Abteilungsleiter.', a: 'Wem', d: ['Wen', 'Wer'], c: 'kasus:dativ', t: '¿A quién le estás respondiendo al correo? — Al jefe de departamento.', e: '"antworten" rige dativo → "wem?".' },
  { s: '___ holt die Kinder heute von der Schule ab? — Mein Mann.', a: 'Wer', d: ['Wen', 'Wem'], c: 'kasus:nominativ', t: '¿Quién recoge a los niños hoy del colegio? — Mi marido.', e: 'Se pregunta por el sujeto → "wer?".' },
  { s: 'Für ___ hast du das schöne Geschenk gekauft? — Für meine Mutter.', a: 'wen', d: ['wem', 'wer'], c: 'kasus:akkusativ', t: '¿Para quién has comprado el bonito regalo? — Para mi madre.', e: '"für" rige acusativo → "für wen?".' },
  { s: '___ vertraust du am meisten in schwierigen Situationen? — Meinen Eltern.', a: 'Wem', d: ['Wen', 'Wer'], c: 'kasus:dativ', t: '¿En quién confías más en situaciones difíciles? — En mis padres.', e: '"vertrauen" rige dativo → "wem?".' },
  { s: '___ siehst du da drüben an der Bushaltestelle? — Meinen Nachbarn.', a: 'Wen', d: ['Wer', 'Wem'], c: 'kasus:akkusativ', t: '¿A quién ves allí en la parada de autobús? — A mi vecino.', e: '"sehen" rige acusativo → "wen?".' }
];

// 5) Orden objeto indirecto (dativo) / objeto directo (acusativo)
const ORDERS = [
  { sol: ['Ich', 'schenke', 'meiner', 'Schwester', 'ein', 'Kochbuch'], t: 'Le regalo un libro de cocina a mi hermana.', e: 'Con dos objetos sustantivos: primero el DATIVO ("meiner Schwester"), luego el ACUSATIVO ("ein Kochbuch").', c: 'kasus:wortstellung' },
  { sol: ['Kannst', 'du', 'mir', 'bitte', 'den', 'Weg', 'zeigen'], t: '¿Me puedes indicar el camino, por favor?', e: 'Dativo ("mir") antes del acusativo ("den Weg").', c: 'kasus:wortstellung' },
  { sol: ['Der', 'Kellner', 'bringt', 'den', 'Gästen', 'die', 'Getränke'], t: 'El camarero les trae las bebidas a los clientes.', e: 'Dativo ("den Gästen") antes del acusativo ("die Getränke").', c: 'kasus:wortstellung' },
  { sol: ['Ich', 'gebe', 'es', 'dir', 'morgen', 'zurück'], t: 'Te lo devuelvo mañana.', e: 'Si el objeto directo es un PRONOMBRE ("es"), va delante del dativo: pronombre-acusativo + dativo.', c: 'kasus:wortstellung' },
  { sol: ['Der', 'Vater', 'kauft', 'seinem', 'Sohn', 'ein', 'neues', 'Fahrrad'], t: 'El padre le compra una bici nueva a su hijo.', e: 'Dos objetos sustantivos: primero DATIVO ("seinem Sohn"), luego ACUSATIVO ("ein neues Fahrrad").', c: 'kasus:wortstellung' },
  { sol: ['Ich', 'habe', 'meiner', 'Mutter', 'die', 'gute', 'Nachricht', 'erzählt'], t: 'Le he contado la buena noticia a mi madre.', e: 'Dativo ("meiner Mutter") antes del acusativo ("die gute Nachricht").', c: 'kasus:wortstellung' },
  { sol: ['Er', 'schickt', 'ihm', 'den', 'Vertrag', 'noch', 'heute', 'per', 'Mail'], t: 'Él le envía el contrato hoy mismo por correo.', e: 'Dativo pronombre ("ihm") antes del acusativo sustantivo ("den Vertrag").', c: 'kasus:wortstellung' },
  { sol: ['Sie', 'schenkt', 'es', 'ihrer', 'Freundin', 'zum', 'Geburtstag'], t: 'Ella se lo regala a su amiga por su cumpleaños.', e: 'Pronombre acusativo ("es") va DELANTE del dativo ("ihrer Freundin").', c: 'kasus:wortstellung' },
  { sol: ['Wir', 'bringen', 'unseren', 'Nachbarn', 'etwas', 'Kuchen', 'vorbei'], t: 'Les llevamos un poco de tarta a nuestros vecinos.', e: 'Dativo ("unseren Nachbarn") antes del objeto directo.', c: 'kasus:wortstellung' },
  { sol: ['Kannst', 'du', 'ihr', 'den', 'Brief', 'bitte', 'geben'], t: '¿Puedes darle la carta a ella, por favor?', e: 'Dativo ("ihr") antes del acusativo ("den Brief").', c: 'kasus:wortstellung' },
  { sol: ['Die', 'Oma', 'backt', 'ihren', 'Enkeln', 'einen', 'leckeren', 'Kuchen'], t: 'La abuela les hornea una rica tarta a sus nietos.', e: 'Dativo ("ihren Enkeln") antes de acusativo ("einen leckeren Kuchen").', c: 'kasus:wortstellung' },
  { sol: ['Er', 'erklärt', 'den', 'neuen', 'Kollegen', 'das', 'Computerprogramm'], t: 'Él les explica el programa informático a los compañeros nuevos.', e: 'Dativo ("den neuen Kollegen") antes de acusativo ("das Computerprogramm").', c: 'kasus:wortstellung' },
  { sol: ['Ich', 'habe', 'es', 'ihnen', 'gestern', 'schon', 'gesagt'], t: 'Ya se lo dije a ellos ayer.', e: 'Pronombre acusativo ("es") antes del pronombre dativo ("ihnen").', c: 'kasus:wortstellung' },
  { sol: ['Wir', 'wünschen', 'allen', 'Gästen', 'einen', 'schönen', 'Aufenthalt'], t: 'Deseamos a todos los huéspedes una agradable estancia.', e: 'Dativo ("allen Gästen") antes de acusativo ("einen schönen Aufenthalt").', c: 'kasus:wortstellung' },
  { sol: ['Sie', 'leiht', 'ihrer', 'Freundin', 'ein', 'schönes', 'Kleid'], t: 'Ella le presta un bonito vestido a su amiga.', e: 'Dativo ("ihrer Freundin") antes de acusativo ("ein schönes Kleid").', c: 'kasus:wortstellung' },
  { sol: ['Gibst', 'du', 'mir', 'bitte', 'das', 'Salz'], t: '¿Me pasas la sal, por favor?', e: 'Dativo ("mir") antes del acusativo ("das Salz").', c: 'kasus:wortstellung' },
  { sol: ['Er', 'schreibt', 'seinem', 'Chef', 'einen', 'ausführlichen', 'Bericht'], t: 'Le escribe un informe detallado a su jefe.', e: 'Dativo ("seinem Chef") antes de acusativo ("einen ausführlichen Bericht").', c: 'kasus:wortstellung' },
  { sol: ['Ich', 'zeige', 'euch', 'gerne', 'unsere', 'neue', 'Wohnung'], t: 'Con mucho gusto os enseño nuestro piso nuevo.', e: 'Dativo ("euch") antes de acusativo ("unsere neue Wohnung").', c: 'kasus:wortstellung' },
  { sol: ['Wir', 'haben', 'ihm', 'ein', 'Geschenk', 'aus', 'dem', 'Urlaub', 'mitgebracht'], t: 'Le trajimos un regalo de las vacaciones.', e: 'Dativo ("ihm") antes del objeto directo ("ein Geschenk").', c: 'kasus:wortstellung' },
  { sol: ['Sie', 'bringt', 'dem', 'Patienten', 'ein', 'Glas', 'Wasser'], t: 'Ella le trae al paciente un vaso de agua.', e: 'Dativo ("dem Patienten") antes del acusativo ("ein Glas Wasser").', c: 'kasus:wortstellung' },
  { sol: ['Der', 'Arzt', 'verschreibt', 'dem', 'Patienten', 'ein', 'wirksames', 'Medikament'], t: 'El médico le receta un medicamento eficaz al paciente.', e: 'Dativo ("dem Patienten") antes del acusativo.', c: 'kasus:wortstellung' },
  { sol: ['Ich', 'habe', 'meinem', 'Bruder', 'das', 'Auto', 'geliehen'], t: 'Le he prestado el coche a mi hermano.', e: 'Dativo ("meinem Bruder") antes del acusativo.', c: 'kasus:wortstellung' },
  { sol: ['Sie', 'bringt', 'den', 'Kindern', 'die', 'warmen', 'Jacken'], t: 'Ella les trae las chaquetas abrigadas a los niños.', e: 'Dativo ("den Kindern") antes del acusativo.', c: 'kasus:wortstellung' },
  { sol: ['Er', 'beantwortet', 'dem', 'Kunden', 'alle', 'offenen', 'Fragen'], t: 'Él le responde al cliente todas las dudas pendientes.', e: 'Dativo ("dem Kunden") antes del acusativo.', c: 'kasus:wortstellung' },
  { sol: ['Ich', 'schenke', 'ihr', 'ein', 'schönes', 'Buch', 'zu', 'Weihnachten'], t: 'Le regalo a ella un bonito libro por Navidad.', e: 'Dativo ("ihr") antes del acusativo ("ein schönes Buch").', c: 'kasus:wortstellung' },
  { sol: ['Wir', 'empfehlen', 'unseren', 'Freunden', 'dieses', 'tolle', 'Hotel'], t: 'Les recomendamos este magnífico hotel a nuestros amigos.', e: 'Dativo ("unseren Freunden") antes del acusativo.', c: 'kasus:wortstellung' },
  { sol: ['Er', 'gibt', 'dem', 'Kellner', 'ein', 'großzügiges', 'Trinkgeld'], t: 'Él le da al camarero una propina generosa.', e: 'Dativo ("dem Kellner") antes del acusativo.', c: 'kasus:wortstellung' },
  { sol: ['Kannst', 'du', 'uns', 'bitte', 'den', 'Weg', 'erklären'], t: '¿Puedes explicarnos el camino, por favor?', e: 'Dativo ("uns") antes del acusativo ("den Weg").', c: 'kasus:wortstellung' },
  { sol: ['Sie', 'schickt', 'ihren', 'Eltern', 'eine', 'Postkarte', 'aus', 'Italien'], t: 'Ella les envía a sus padres una postal desde Italia.', e: 'Dativo ("ihren Eltern") antes del acusativo.', c: 'kasus:wortstellung' },
  { sol: ['Ich', 'habe', 'es', 'meinem', 'Chef', 'gestern', 'persönlich', 'übergeben'], t: 'Se lo entregué ayer personalmente a mi jefe.', e: 'Pronombre acusativo ("es") va antes del dativo ("meinem Chef").', c: 'kasus:wortstellung' },
  { sol: ['Der', 'Lehrer', 'zeigt', 'den', 'Schülern', 'ein', 'interessantes', 'Experiment'], t: 'El profesor les muestra a los alumnos un experimento interesante.', e: 'Dativo ("den Schülern") antes del acusativo.', c: 'kasus:wortstellung' },
  { sol: ['Wir', 'haben', 'ihnen', 'unsere', 'Hilfe', 'beim', 'Umzug', 'angeboten'], t: 'Les ofrecimos nuestra ayuda con la mudanza.', e: 'Dativo ("ihnen") antes del acusativo ("unsere Hilfe").', c: 'kasus:wortstellung' },
  { sol: ['Er', 'kauft', 'seiner', 'Freundin', 'einen', 'wunderschönen', 'Ring'], t: 'Él le compra un precioso anillo a su novia.', e: 'Dativo ("seiner Freundin") antes del acusativo.', c: 'kasus:wortstellung' },
  { sol: ['Geben', 'Sie', 'mir', 'bitte', 'Ihre', 'Telefonnummer'], t: 'Deme su número de teléfono, por favor.', e: 'Dativo ("mir") antes del acusativo.', c: 'kasus:wortstellung' },
  { sol: ['Sie', 'erzählt', 'ihrer', 'Tochter', 'eine', 'schöne', 'Gute-Nacht-Geschichte'], t: 'Ella le cuenta a su hija un bonito cuento para dormir.', e: 'Dativo ("ihrer Tochter") antes del acusativo.', c: 'kasus:wortstellung' }
];

const frames = [
  { make: (rng) => { const x = pick(rng, ART); return mc(rng, { conceptId: x.c, prompt: t('tp.pickArticleCase'), sentence: x.s, correct: x.a, distractors: x.d, translation: tc(x.t), explanation: tc(x.e) }); } },
  { make: (rng) => { const x = pick(rng, PRON); return mc(rng, { conceptId: x.c, prompt: t('tp.pickPronounCase'), sentence: x.s, correct: x.a, distractors: x.d, translation: tc(x.t), explanation: tc(x.e) }); } },
  { make: (rng) => { const x = pick(rng, FORM); return mc(rng, { conceptId: x.c, prompt: t('tp.pickPhrase'), sentence: x.s, correct: x.a, distractors: x.opts.filter((o) => o !== x.a), translation: tc(x.t), explanation: tc(x.e) }); } },
  { make: (rng) => { const x = pick(rng, WFRAGE); return mc(rng, { conceptId: x.c, prompt: t('tp.pickWFrage'), sentence: x.s, correct: x.a, distractors: x.d, translation: tc(x.t), explanation: tc(x.e) }); } },
  { make: (rng) => { const x = pick(rng, ORDERS); return order(rng, { conceptId: x.c, prompt: t('tp.orderDatAkk'), solution: x.sol, translation: tc(x.t), explanation: tc(x.e) }); } }
];

export const theory = {
  intro:
    'El alemán tiene 4 casos (Nominativ, Akkusativ, Dativ, Genitiv). El caso marca la FUNCIÓN del sustantivo en la frase (sujeto, objeto directo, objeto indirecto, posesión). Lo que cambia es sobre todo el ARTÍCULO (y el pronombre y la terminación del adjetivo), no el sustantivo. Pulsa cada bloque para ver la explicación completa y más ejemplos.',
  sections: [
    {
      title: 'Nominativ — el sujeto (wer? / was?)',
      body: 'Quien hace la acción o de quien se dice algo. Es la forma que aparece en el diccionario.',
      examples: [
        { de: 'Der Hund schläft auf dem Sofa.', es: 'El perro duerme en el sofá.' },
        { de: 'Das ist meine neue Kollegin.', es: 'Esta es mi compañera nueva.' }
      ],
      detail:
        'Va en nominativo el sujeto y también lo que va detrás de los verbos "sein", "werden" y "bleiben" (predicativo): "Er ist ein guter Lehrer", "Sie wird Ärztin".\n\nArtículos en nominativo: der (m) · das (n) · die (f) · die (pl) / ein · ein · eine · —. La pregunta es "wer?" (personas) o "was?" (cosas): "Wer kommt? – Mein Bruder."',
      more: {
        examples: [
          { de: 'Ein Auto steht direkt vor der Einfahrt.', es: 'Hay un coche justo delante de la entrada.' },
          { de: 'Meine Eltern wohnen noch im selben Haus.', es: 'Mis padres siguen viviendo en la misma casa.' },
          { de: 'Das Wetter wird morgen besser.', es: 'Mañana el tiempo mejorará.' }
        ]
      }
    },
    {
      title: 'Akkusativ — el objeto directo (wen? / was?)',
      body: 'Lo que recibe directamente la acción. ¡Solo cambia el masculino: der → den!',
      examples: [
        { de: 'Ich sehe den Hund / das Kind / die Frau.', es: 'Veo al perro / al niño / a la mujer.' },
        { de: 'Wir haben einen Tisch reserviert.', es: 'Hemos reservado una mesa.' }
      ],
      detail:
        'Rigen acusativo la mayoría de los verbos con objeto (haben, sehen, kaufen, brauchen, kennen, besuchen, essen, lesen, machen…) y las preposiciones durch, für, gegen, ohne, um.\n\nComparado con el nominativo, en acusativo SOLO cambia el masculino: der → den, ein → einen, kein → keinen, mein → meinen. El neutro, el femenino y el plural son idénticos al nominativo. También van en acusativo muchas expresiones de tiempo y duración: "Ich bleibe einen Monat", "jeden Tag", "letzten Sommer".',
      table: {
        title: 'Artículo en Nominativ y Akkusativ',
        headers: ['', 'm', 'n', 'f', 'pl'],
        rows: [
          ['Nom. definido', 'der', 'das', 'die', 'die'],
          ['Akk. definido', 'den', 'das', 'die', 'die'],
          ['Nom. indefinido', 'ein', 'ein', 'eine', '—'],
          ['Akk. indefinido', 'einen', 'ein', 'eine', '—']
        ]
      },
      more: {
        examples: [
          { de: 'Kennst du einen guten Zahnarzt in der Nähe?', es: '¿Conoces a un buen dentista por aquí?' },
          { de: 'Ich habe den ganzen Tag auf deine Nachricht gewartet.', es: 'He esperado todo el día tu mensaje.' },
          { de: 'Sie trägt heute keinen Mantel.', es: 'Hoy no lleva abrigo.' }
        ]
      }
    },
    {
      title: 'Dativ — el objeto indirecto (wem?)',
      body: 'El destinatario: a quién / para quién. Cambian los cuatro géneros.',
      examples: [
        { de: 'Ich gebe dem Hund / dem Kind / der Frau Wasser.', es: 'Le doy agua al perro / al niño / a la mujer.' },
        { de: 'Ich helfe den Kindern bei den Hausaufgaben.', es: 'Ayudo a los niños con los deberes.' }
      ],
      detail:
        'El dativo aparece: (1) como segundo objeto de verbos como geben, zeigen, schenken, bringen, erklären, schicken, kaufen ("Ich kaufe meinem Sohn ein Fahrrad"); (2) con verbos que rigen dativo (helfen, danken, gehören, gefallen, antworten, folgen, glauben, passen, schmecken, gratulieren, zuhören); (3) con preposiciones de dativo (aus, bei, mit, nach, seit, von, zu) y como caso "wo?" de las Wechselpräpositionen.\n\nFormas: der → dem, das → dem, die → der, die (pl) → den. Además, TODOS los sustantivos en dativo plural añaden -n: mit den Kindern, aus den Häusern, zu den Freunden (si el plural ya acaba en -n o -s, no se añade nada).',
      table: {
        title: 'Artículo en Dativ',
        headers: ['', 'm', 'n', 'f', 'pl'],
        rows: [
          ['definido', 'dem', 'dem', 'der', 'den (+ -n)'],
          ['indefinido', 'einem', 'einem', 'einer', 'keinen (+ -n)']
        ]
      },
      more: {
        examples: [
          { de: 'Wie geht es deiner Mutter?', es: '¿Cómo está tu madre?' },
          { de: 'Das Bild an der Wand gefällt mir sehr.', es: 'El cuadro de la pared me gusta mucho.' },
          { de: 'Der Chef hat allen Mitarbeitern gratuliert.', es: 'El jefe felicitó a todos los empleados.' }
        ]
      }
    },
    {
      title: 'Verbos que rigen dativo · orden Dativ–Akkusativ',
      body: 'Algunos verbos parecen tener objeto directo en español pero en alemán van con dativo.',
      examples: [
        { de: 'Ich helfe dir. / Ich danke dir. / Das gehört dir.', es: 'Te ayudo. / Te doy las gracias. / Es tuyo.' },
        { de: 'Ich schenke meiner Schwester ein Buch.', es: 'Le regalo un libro a mi hermana.' }
      ],
      detail:
        'Lista básica para memorizar: helfen, danken, gefallen, gehören, antworten, folgen, glauben (a alguien), passen, schmecken, gratulieren, zuhören, begegnen, wehtun. "Ich helfe DIR" (no "dich"), "Der Kaffee schmeckt MIR nicht".\n\nOrden con dos objetos: si los dos son sustantivos, va primero el DATIVO y luego el ACUSATIVO ("Ich gebe dem Kind den Ball"). Pero si el objeto directo es un PRONOMBRE, va delante ("Ich gebe es dem Kind" / "Ich gebe es ihm").',
      more: {
        examples: [
          { de: 'Der Film hat allen gut gefallen.', es: 'La película les gustó a todos.' },
          { de: 'Kannst du mir das noch einmal erklären?', es: '¿Me lo puedes explicar otra vez?' },
          { de: 'Ich bringe dir morgen die Bücher zurück.', es: 'Mañana te devuelvo los libros.' },
          { de: 'Gib ihn mir bitte.', es: 'Dámelo, por favor.' }
        ]
      }
    },
    {
      title: 'Pronombres personales por caso',
      body: 'mich/dich/ihn (acusativo) frente a mir/dir/ihm (dativo). No los mezcles.',
      examples: [
        { de: 'Ich sehe dich. / Ich helfe dir.', es: 'Te veo. / Te ayudo.' },
        { de: 'Er ruft mich an und gibt mir die Adresse.', es: 'Me llama y me da la dirección.' }
      ],
      detail:
        'Solo "uns" y "euch" son iguales en acusativo y dativo. El resto tiene forma propia. En 3ª persona: ihn/ihm (m), sie/ihr (f), es/ihm (n), sie/ihnen (pl), Sie/Ihnen (cortesía).',
      table: {
        title: 'Pronombres personales',
        headers: ['Nominativ', 'Akkusativ', 'Dativ'],
        rows: [
          ['ich', 'mich', 'mir'],
          ['du', 'dich', 'dir'],
          ['er', 'ihn', 'ihm'],
          ['sie (ella)', 'sie', 'ihr'],
          ['es', 'es', 'ihm'],
          ['wir', 'uns', 'uns'],
          ['ihr', 'euch', 'euch'],
          ['sie / Sie', 'sie / Sie', 'ihnen / Ihnen']
        ]
      },
      more: {
        examples: [
          { de: 'Ich kenne ihn, aber ich vertraue ihm nicht.', es: 'Lo conozco, pero no me fío de él.' },
          { de: 'Wir treffen euch um acht und bringen euch die Tickets mit.', es: 'Quedamos con vosotros a las ocho y os llevamos las entradas.' },
          { de: 'Das Kleid steht ihr wirklich gut.', es: 'El vestido le queda genial (a ella).' }
        ]
      }
    },
    {
      title: 'Genitiv — la posesión (wessen?)',
      body: 'Indica de quién es algo. En el habla se sustituye a menudo por "von + dativo".',
      examples: [
        { de: 'das Auto meines Vaters', es: 'el coche de mi padre' },
        { de: 'die Farbe der Wand', es: 'el color de la pared' }
      ],
      detail:
        'Artículo: des (m/n) · der (f) · der (pl). Los sustantivos masculinos y neutros añaden -s o -es: "des Vaters", "des Kindes", "des Hauses".\n\nAl hablar es muy frecuente "von + dativo": "das Auto von meinem Vater". El Genitiv se mantiene sobre todo por escrito y con algunas preposiciones (während, wegen, trotz, statt): "während der Pause", "wegen des Wetters".',
      table: {
        title: 'Artículo en Genitiv',
        headers: ['', 'm', 'n', 'f', 'pl'],
        rows: [
          ['definido', 'des (+ -s)', 'des (+ -s)', 'der', 'der'],
          ['indefinido', 'eines (+ -s)', 'eines (+ -s)', 'einer', '—']
        ]
      },
      more: {
        examples: [
          { de: 'Wegen des schlechten Wetters bleiben wir zu Hause.', es: 'Por el mal tiempo nos quedamos en casa.' },
          { de: 'Das ist das Haus meiner Großeltern.', es: 'Esta es la casa de mis abuelos.' },
          { de: 'Während der Woche habe ich kaum Zeit.', es: 'Entre semana apenas tengo tiempo.' }
        ]
      }
    }
  ],
  table: {
    title: 'Resumen: artículo definido por caso',
    headers: ['', 'm (der Mann)', 'n (das Kind)', 'f (die Frau)', 'pl (die Leute)'],
    rows: [
      ['Nominativ', 'der', 'das', 'die', 'die'],
      ['Akkusativ', 'den', 'das', 'die', 'die'],
      ['Dativ', 'dem', 'dem', 'der', 'den (+ -n)'],
      ['Genitiv', 'des (+ -s)', 'des (+ -s)', 'der', 'der']
    ]
  },
  pitfalls: [
    'En acusativo SOLO cambia el masculino: ✓ Ich sehe den Mann / das Kind / die Frau.',
    'helfen, danken, gehören, gefallen… van con DATIVO aunque en español lleven "a": ✗ Ich helfe dich → ✓ Ich helfe dir.',
    'Dativo plural: el sustantivo añade -n: ✗ mit den Kinder → ✓ mit den Kindern.',
    'No mezcles pronombres: acusativo mich/dich/ihn · dativo mir/dir/ihm.'
  ]
};

export default {
  id: 'kasus',
  name: 'Kasus & Deklination',
  nameEs: 'Los casos y la declinación',
  emoji: '🎭',
  blurb: 'Nominativ, Akkusativ, Dativ (y Genitiv): artículos, pronombres, verbos con dativo y orden',
  theory,
  concepts: [
    { id: 'kasus:nominativ', label: 'Nominativ: el sujeto (wer/was)' },
    { id: 'kasus:akkusativ', label: 'Akkusativ: objeto directo (wen/was)' },
    { id: 'kasus:dativ', label: 'Dativ: objeto indirecto (wem)' },
    { id: 'kasus:artikel', label: 'Artículos por caso (der/den/dem…)' },
    { id: 'kasus:kein-possessiv', label: 'kein y posesivos (mein → meinen/meinem)' },
    { id: 'kasus:pronomen', label: 'Pronombres personales (mich/mir, ihn/ihm…)' },
    { id: 'kasus:dativ-verben', label: 'Verbos con dativo (helfen, danken, gehören…)' },
    { id: 'kasus:wortstellung', label: 'Orden dativo–acusativo' }
  ],
  frames
};
