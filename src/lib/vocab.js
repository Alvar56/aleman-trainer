// Vocabulario: mazos (decks) temáticos, importación de Excel, generación con IA
// y repaso espaciado por tarjeta. Se guarda todo en localStorage.

import { storage } from './storage.js';
import { allBookDecks, lektionDecks, lektionDeckTodo, getLektion } from './kursbuch/index.js';
import { tc } from './contenido/index.js';
import { t } from './i18n.js';

const DECKS_KEY = 'vocab:decks'; // mazos creados por el usuario (excel / IA)
const PROG_KEY = 'vocab:progress'; // { 'deckId::de': { correct, wrong, strength, due, lastSeen } }

// ---------- Mazos de arranque ----------
const BUILTIN = [
  {
    id: 'alltag',
    name: 'Día a día',
    emoji: '☀️',
    builtin: true,
    cards: [
      { de: 'aufstehen', es: 'levantarse', ex: 'Ich stehe unter der Woche um sieben auf.', exEs: 'Entre semana me levanto a las siete.' },
      { de: 'sich beeilen', es: 'darse prisa', ex: 'Beeil dich, der Bus kommt gleich!', exEs: '¡Date prisa, que ya viene el autobús!' },
      { de: 'die Besorgungen machen', es: 'hacer los recados', ex: 'Am Samstag mache ich alle Besorgungen.', exEs: 'El sábado hago todos los recados.' },
      { de: 'sich ausruhen', es: 'descansar', ex: 'Nach der Arbeit muss ich mich kurz ausruhen.', exEs: 'Después del trabajo necesito descansar un poco.' },
      { de: 'die Wäsche waschen', es: 'poner la lavadora', ex: 'Ich wasche die Wäsche meistens am Sonntag.', exEs: 'Suelo poner la lavadora los domingos.' },
      { de: 'den Müll rausbringen', es: 'sacar la basura', ex: 'Bringst du bitte den Müll raus?', exEs: '¿Sacas la basura, por favor?' },
      { de: 'einen Termin haben', es: 'tener una cita', ex: 'Morgen habe ich einen Termin beim Zahnarzt.', exEs: 'Mañana tengo cita con el dentista.' },
      { de: 'müde sein', es: 'estar cansado', ex: 'Ich bin heute total müde.', exEs: 'Hoy estoy agotado.' },
      { de: 'Feierabend machen', es: 'terminar la jornada', ex: 'Um fünf mache ich Feierabend.', exEs: 'A las cinco termino de trabajar.' },
      { de: 'sich verspäten', es: 'llegar tarde / retrasarse', ex: 'Entschuldigung, ich habe mich verspätet.', exEs: 'Perdona, he llegado tarde.' },
      { de: 'die Rechnung bezahlen', es: 'pagar la factura', ex: 'Ich muss noch die Stromrechnung bezahlen.', exEs: 'Todavía tengo que pagar la factura de la luz.' },
      { de: 'kurz vorbeikommen', es: 'pasarse un momento', ex: 'Kannst du nachher kurz vorbeikommen?', exEs: '¿Puedes pasarte luego un momento?' },
      { de: 'keine Ahnung haben', es: 'no tener ni idea', ex: 'Wo ist mein Schlüssel? — Keine Ahnung.', exEs: '¿Dónde está mi llave? — Ni idea.' },
      { de: 'sich Zeit nehmen', es: 'tomarse su tiempo', ex: 'Nimm dir Zeit, es ist nicht dringend.', exEs: 'Tómate tu tiempo, no corre prisa.' }
    ]
  },
  {
    id: 'redemittel',
    name: 'Frases útiles (Small Talk)',
    emoji: '💬',
    builtin: true,
    cards: [
      { de: 'Wie geht es dir?', es: '¿Qué tal estás?', ex: 'Hallo! Wie geht es dir? — Danke, gut.', exEs: '¡Hola! ¿Qué tal? — Bien, gracias.' },
      { de: 'Kannst du das bitte wiederholen?', es: '¿Puedes repetirlo, por favor?', ex: 'Entschuldigung, kannst du das bitte wiederholen?', exEs: 'Perdona, ¿puedes repetirlo?' },
      { de: 'Ich verstehe nur Bahnhof.', es: 'No me entero de nada.', ex: 'Bei dem Thema verstehe ich nur Bahnhof.', exEs: 'De este tema no me entero de nada.' },
      { de: 'Das ist mir egal.', es: 'Me da igual.', ex: 'Pizza oder Pasta? — Das ist mir egal.', exEs: '¿Pizza o pasta? — Me da igual.' },
      { de: 'Kommt darauf an.', es: 'Depende.', ex: 'Gehst du mit? — Kommt darauf an, wann.', exEs: '¿Vienes? — Depende de cuándo.' },
      { de: 'Ich bin gleich zurück.', es: 'Ahora vuelvo.', ex: 'Warte kurz, ich bin gleich zurück.', exEs: 'Espera un momento, ahora vuelvo.' },
      { de: 'Mach dir keine Sorgen.', es: 'No te preocupes.', ex: 'Mach dir keine Sorgen, das schaffen wir.', exEs: 'No te preocupes, lo conseguiremos.' },
      { de: 'Das klingt gut.', es: 'Suena bien.', ex: 'Treffen wir uns um acht? — Das klingt gut.', exEs: '¿Quedamos a las ocho? — Suena bien.' },
      { de: 'Ich melde mich später.', es: 'Te escribo/llamo luego.', ex: 'Ich muss los, ich melde mich später.', exEs: 'Me tengo que ir, te escribo luego.' },
      { de: 'Kein Problem.', es: 'Sin problema.', ex: 'Danke für die Hilfe! — Kein Problem.', exEs: '¡Gracias por la ayuda! — Sin problema.' },
      { de: 'Was hältst du davon?', es: '¿Qué te parece?', ex: 'Wir könnten am Meer Urlaub machen. Was hältst du davon?', exEs: 'Podríamos ir de vacaciones al mar. ¿Qué te parece?' },
      { de: 'Ehrlich gesagt …', es: 'La verdad es que…', ex: 'Ehrlich gesagt habe ich keine Lust.', exEs: 'La verdad es que no me apetece.' },
      { de: 'Viel Spaß!', es: '¡Que te diviertas!', ex: 'Ich gehe ins Konzert. — Viel Spaß!', exEs: 'Me voy al concierto. — ¡Que te diviertas!' },
      { de: 'Alles klar.', es: 'Vale / entendido.', ex: 'Wir treffen uns vor dem Kino. — Alles klar.', exEs: 'Quedamos delante del cine. — Vale.' }
    ]
  },
  {
    id: 'restaurant',
    name: 'En el restaurante',
    emoji: '🍽️',
    builtin: true,
    cards: [
      { de: 'einen Tisch reservieren', es: 'reservar mesa', ex: 'Ich möchte einen Tisch für zwei Personen reservieren.', exEs: 'Quería reservar una mesa para dos.' },
      { de: 'die Speisekarte', es: 'la carta', ex: 'Könnten wir bitte die Speisekarte haben?', exEs: '¿Nos trae la carta, por favor?' },
      { de: 'die Vorspeise', es: 'el entrante', ex: 'Als Vorspeise nehme ich die Suppe.', exEs: 'De entrante voy a tomar la sopa.' },
      { de: 'das Hauptgericht', es: 'el plato principal', ex: 'Was empfehlen Sie als Hauptgericht?', exEs: '¿Qué recomienda de plato principal?' },
      { de: 'die Nachspeise', es: 'el postre', ex: 'Möchten Sie noch eine Nachspeise?', exEs: '¿Desea un postre?' },
      { de: 'Ich hätte gern …', es: 'Yo quería / me pone…', ex: 'Ich hätte gern ein Glas Wasser.', exEs: 'Me pone un vaso de agua.' },
      { de: 'Zahlen, bitte.', es: 'La cuenta, por favor.', ex: 'Wir würden gern zahlen, bitte.', exEs: 'Nos gustaría pagar, por favor.' },
      { de: 'Getrennt oder zusammen?', es: '¿Junto o por separado?', ex: 'Zahlen Sie getrennt oder zusammen?', exEs: '¿Pagan junto o por separado?' },
      { de: 'Es hat sehr gut geschmeckt.', es: 'Estaba muy rico.', ex: 'Danke, es hat sehr gut geschmeckt.', exEs: 'Gracias, estaba muy rico.' },
      { de: 'Ich bin allergisch gegen …', es: 'Soy alérgico a…', ex: 'Ich bin allergisch gegen Nüsse.', exEs: 'Soy alérgico a los frutos secos.' },
      { de: 'das Trinkgeld', es: 'la propina', ex: 'Wir haben zehn Prozent Trinkgeld gegeben.', exEs: 'Hemos dejado un diez por ciento de propina.' },
      { de: 'Guten Appetit!', es: '¡Que aproveche!', ex: 'So, das Essen ist da. Guten Appetit!', exEs: 'Ya está la comida. ¡Que aproveche!' },
      { de: 'Stimmt so.', es: 'Quédese con el cambio.', ex: 'Das macht 18 Euro. — Stimmt so.', exEs: 'Son 18 euros. — Quédese con el cambio.' },
      { de: 'noch einmal dasselbe', es: 'otra ronda de lo mismo', ex: 'Bringen Sie uns bitte noch einmal dasselbe.', exEs: 'Tráiganos otra ronda de lo mismo.' }
    ]
  },
  {
    id: 'reisen',
    name: 'Viajes y transporte',
    emoji: '🧳',
    builtin: true,
    cards: [
      { de: 'die Fahrkarte', es: 'el billete', ex: 'Wo kann ich eine Fahrkarte kaufen?', exEs: '¿Dónde puedo comprar un billete?' },
      { de: 'umsteigen', es: 'hacer transbordo', ex: 'In Frankfurt müssen Sie umsteigen.', exEs: 'En Fráncfort tiene que hacer transbordo.' },
      { de: 'der Anschluss', es: 'el enlace / la conexión', ex: 'Ich habe meinen Anschluss verpasst.', exEs: 'He perdido el enlace.' },
      { de: 'die Verspätung', es: 'el retraso', ex: 'Der Zug hat 20 Minuten Verspätung.', exEs: 'El tren lleva 20 minutos de retraso.' },
      { de: 'einchecken', es: 'facturar / hacer el check-in', ex: 'Wir müssen zwei Stunden vorher einchecken.', exEs: 'Tenemos que facturar dos horas antes.' },
      { de: 'das Handgepäck', es: 'el equipaje de mano', ex: 'Nehmen Sie nur Handgepäck mit?', exEs: '¿Lleva solo equipaje de mano?' },
      { de: 'die Unterkunft', es: 'el alojamiento', ex: 'Habt ihr schon eine Unterkunft gebucht?', exEs: '¿Ya habéis reservado alojamiento?' },
      { de: 'sich verlaufen', es: 'perderse (a pie)', ex: 'In der Altstadt haben wir uns total verlaufen.', exEs: 'Nos perdimos del todo en el casco antiguo.' },
      { de: 'die Sehenswürdigkeit', es: 'el lugar de interés', ex: 'Welche Sehenswürdigkeiten muss man sehen?', exEs: '¿Qué sitios hay que ver?' },
      { de: 'die Grenze', es: 'la frontera', ex: 'An der Grenze wurde der Pass kontrolliert.', exEs: 'En la frontera controlaron el pasaporte.' },
      { de: 'ausgebucht', es: 'completo / lleno', ex: 'Das Hotel ist leider ausgebucht.', exEs: 'El hotel está completo, lo siento.' },
      { de: 'die Rückfahrt', es: 'la vuelta / el regreso', ex: 'Die Rückfahrt ist erst am Montag.', exEs: 'La vuelta no es hasta el lunes.' },
      { de: 'auf eigene Faust', es: 'por libre / por su cuenta', ex: 'Wir reisen lieber auf eigene Faust.', exEs: 'Preferimos viajar por libre.' },
      { de: 'die Panne', es: 'la avería', ex: 'Wir hatten unterwegs eine Panne.', exEs: 'Tuvimos una avería por el camino.' }
    ]
  },
  {
    id: 'arbeit',
    name: 'Trabajo y oficina',
    emoji: '💼',
    builtin: true,
    cards: [
      { de: 'die Besprechung', es: 'la reunión', ex: 'Die Besprechung wurde auf morgen verschoben.', exEs: 'La reunión se ha aplazado a mañana.' },
      { de: 'die Frist', es: 'el plazo', ex: 'Die Frist läuft am Freitag ab.', exEs: 'El plazo vence el viernes.' },
      { de: 'sich um etwas kümmern', es: 'encargarse de algo', ex: 'Ich kümmere mich um die Rechnungen.', exEs: 'Yo me encargo de las facturas.' },
      { de: 'einen Termin verschieben', es: 'aplazar una cita', ex: 'Können wir den Termin verschieben?', exEs: '¿Podemos aplazar la cita?' },
      { de: 'in Verzug sein', es: 'ir con retraso', ex: 'Wir sind mit dem Projekt in Verzug.', exEs: 'Vamos con retraso con el proyecto.' },
      { de: 'Bescheid geben', es: 'avisar / decir algo', ex: 'Gib mir bitte Bescheid, wenn du fertig bist.', exEs: 'Avísame cuando termines.' },
      { de: 'die Überstunde', es: 'la hora extra', ex: 'Diese Woche mache ich viele Überstunden.', exEs: 'Esta semana hago muchas horas extra.' },
      { de: 'krankgeschrieben sein', es: 'estar de baja', ex: 'Er ist diese Woche krankgeschrieben.', exEs: 'Esta semana está de baja.' },
      { de: 'sich bewerben', es: 'presentar una candidatura', ex: 'Ich habe mich bei drei Firmen beworben.', exEs: 'He echado el currículum en tres empresas.' },
      { de: 'das Vorstellungsgespräch', es: 'la entrevista de trabajo', ex: 'Morgen habe ich ein Vorstellungsgespräch.', exEs: 'Mañana tengo una entrevista de trabajo.' },
      { de: 'zuständig sein für', es: 'ser responsable de', ex: 'Wer ist für den Einkauf zuständig?', exEs: '¿Quién es el responsable de compras?' },
      { de: 'die Gehaltserhöhung', es: 'el aumento de sueldo', ex: 'Sie hat nach einer Gehaltserhöhung gefragt.', exEs: 'Ha pedido un aumento de sueldo.' },
      { de: 'Feierabend', es: 'fin de la jornada', ex: 'Ich mache jetzt Feierabend, bis morgen!', exEs: 'Yo lo dejo por hoy, ¡hasta mañana!' },
      { de: 'auf dem Laufenden halten', es: 'mantener al día', ex: 'Ich halte dich auf dem Laufenden.', exEs: 'Te mantengo al día.' }
    ]
  },
  {
    id: 'gesundheit',
    name: 'Salud y médico',
    emoji: '🩺',
    builtin: true,
    cards: [
      { de: 'sich krank fühlen', es: 'encontrarse mal', ex: 'Ich fühle mich seit gestern krank.', exEs: 'Me encuentro mal desde ayer.' },
      { de: 'Schmerzen haben', es: 'tener dolor', ex: 'Ich habe starke Kopfschmerzen.', exEs: 'Tengo un dolor de cabeza fuerte.' },
      { de: 'die Erkältung', es: 'el resfriado', ex: 'Ich habe mir eine Erkältung geholt.', exEs: 'He cogido un resfriado.' },
      { de: 'das Rezept', es: 'la receta', ex: 'Der Arzt hat mir ein Rezept ausgestellt.', exEs: 'El médico me ha hecho una receta.' },
      { de: 'die Krankenkasse', es: 'la mutua / seguro médico', ex: 'Das übernimmt die Krankenkasse.', exEs: 'Eso lo cubre el seguro.' },
      { de: 'einen Termin ausmachen', es: 'pedir cita', ex: 'Ich muss einen Termin beim Hausarzt ausmachen.', exEs: 'Tengo que pedir cita con el médico de cabecera.' },
      { de: 'die Überweisung', es: 'el volante / la derivación', ex: 'Sie brauchen eine Überweisung zum Facharzt.', exEs: 'Necesita un volante para el especialista.' },
      { de: 'sich ausruhen', es: 'guardar reposo', ex: 'Sie sollten sich ein paar Tage ausruhen.', exEs: 'Debería guardar reposo unos días.' },
      { de: 'Fieber messen', es: 'tomar la temperatura', ex: 'Hast du schon Fieber gemessen?', exEs: '¿Ya te has tomado la temperatura?' },
      { de: 'die Nebenwirkung', es: 'el efecto secundario', ex: 'Das Medikament hat kaum Nebenwirkungen.', exEs: 'La medicación apenas tiene efectos secundarios.' },
      { de: 'sich etwas brechen', es: 'romperse algo', ex: 'Er hat sich beim Fußball das Bein gebrochen.', exEs: 'Se rompió la pierna jugando al fútbol.' },
      { de: 'gute Besserung!', es: '¡que te mejores!', ex: 'Ruh dich aus und gute Besserung!', exEs: '¡Descansa y que te mejores!' },
      { de: 'die Notaufnahme', es: 'urgencias', ex: 'Wir mussten in die Notaufnahme.', exEs: 'Tuvimos que ir a urgencias.' },
      { de: 'auf nüchternen Magen', es: 'en ayunas', ex: 'Die Tablette auf nüchternen Magen einnehmen.', exEs: 'Tomar la pastilla en ayunas.' }
    ]
  }
];

// Tarjetas adicionales para los mazos de arriba (para tener bastante vocabulario).
const MORE = {
  alltag: [
    { de: 'der Wecker', es: 'el despertador', ex: 'Mein Wecker klingelt um halb sieben.', exEs: 'Mi despertador suena a las seis y media.' },
    { de: 'sich fertig machen', es: 'arreglarse / prepararse', ex: 'Ich mache mich schnell fertig und komme.', exEs: 'Me preparo rápido y voy.' },
    { de: 'frühstücken', es: 'desayunar', ex: 'Wir frühstücken meistens zusammen.', exEs: 'Solemos desayunar juntos.' },
    { de: 'die Zähne putzen', es: 'lavarse los dientes', ex: 'Putz dir die Zähne, bevor du ins Bett gehst.', exEs: 'Lávate los dientes antes de acostarte.' },
    { de: 'das Bett machen', es: 'hacer la cama', ex: 'Ich mache jeden Morgen das Bett.', exEs: 'Hago la cama todas las mañanas.' },
    { de: 'abwaschen / spülen', es: 'fregar los platos', ex: 'Wer wäscht heute ab?', exEs: '¿Quién friega hoy?' },
    { de: 'staubsaugen', es: 'pasar la aspiradora', ex: 'Am Wochenende sauge ich Staub.', exEs: 'El finde paso la aspiradora.' },
    { de: 'kochen', es: 'cocinar', ex: 'Heute Abend koche ich Pasta.', exEs: 'Esta noche cocino pasta.' },
    { de: 'einkaufen gehen', es: 'ir a comprar', ex: 'Ich gehe kurz einkaufen, brauchst du was?', exEs: 'Voy un momento a comprar, ¿necesitas algo?' },
    { de: 'zur Arbeit fahren', es: 'ir al trabajo', ex: 'Ich fahre mit dem Rad zur Arbeit.', exEs: 'Voy en bici al trabajo.' },
    { de: 'die Pause', es: 'la pausa / el descanso', ex: 'Machen wir kurz Pause?', exEs: '¿Hacemos una pausa?' },
    { de: 'Mittag essen', es: 'comer (al mediodía)', ex: 'Wir essen um eins zu Mittag.', exEs: 'Comemos a la una.' },
    { de: 'nach Hause kommen', es: 'volver a casa', ex: 'Ich komme meistens um sechs nach Hause.', exEs: 'Suelo volver a casa a las seis.' },
    { de: 'sich hinsetzen', es: 'sentarse', ex: 'Setz dich, ich mache uns Tee.', exEs: 'Siéntate, hago un té.' },
    { de: 'fernsehen', es: 'ver la tele', ex: 'Abends sehen wir eine Serie.', exEs: 'Por la noche vemos una serie.' },
    { de: 'ins Bett gehen', es: 'irse a la cama', ex: 'Ich gehe heute früh ins Bett.', exEs: 'Hoy me acuesto pronto.' },
    { de: 'verschlafen', es: 'quedarse dormido', ex: 'Ich habe verschlafen und den Bus verpasst.', exEs: 'Me he quedado dormido y he perdido el bus.' },
    { de: 'die To-do-Liste', es: 'la lista de tareas', ex: 'Meine To-do-Liste ist heute lang.', exEs: 'Mi lista de tareas es larga hoy.' },
    { de: 'etwas erledigen', es: 'resolver / hacer algo', ex: 'Ich muss noch ein paar Sachen erledigen.', exEs: 'Aún tengo que hacer un par de cosas.' },
    { de: 'die Wohnung aufräumen', es: 'ordenar la casa', ex: 'Vor dem Besuch räume ich die Wohnung auf.', exEs: 'Antes de la visita ordeno la casa.' },
    { de: 'den Tisch decken', es: 'poner la mesa', ex: 'Kannst du den Tisch decken?', exEs: '¿Puedes poner la mesa?' },
    { de: 'die Blumen gießen', es: 'regar las plantas', ex: 'Vergiss nicht, die Blumen zu gießen.', exEs: 'No olvides regar las plantas.' }
  ],
  redemittel: [
    { de: 'Genau!', es: '¡Exacto!', ex: 'Also treffen wir uns morgen? — Genau.', exEs: 'Entonces, ¿quedamos mañana? — Exacto.' },
    { de: 'Stimmt.', es: 'Es verdad. / Cierto.', ex: 'Das ist teuer. — Stimmt.', exEs: 'Es caro. — Es verdad.' },
    { de: 'Auf keinen Fall.', es: 'De ninguna manera.', ex: 'Sollen wir zu Fuß gehen? — Auf keinen Fall, es regnet.', exEs: '¿Vamos a pie? — De ninguna manera, llueve.' },
    { de: 'Meiner Meinung nach …', es: 'En mi opinión…', ex: 'Meiner Meinung nach ist das keine gute Idee.', exEs: 'En mi opinión no es buena idea.' },
    { de: 'Das kommt nicht in Frage.', es: 'Ni hablar.', ex: 'Allein fahren? Das kommt nicht in Frage.', exEs: '¿Ir solo? Ni hablar.' },
    { de: 'Wie bitte?', es: '¿Cómo dice? / ¿Perdón?', ex: 'Wie bitte? Ich habe dich nicht verstanden.', exEs: '¿Cómo? No te he entendido.' },
    { de: 'Das wäre nett.', es: 'Sería un detalle.', ex: 'Soll ich dich abholen? — Das wäre nett.', exEs: '¿Te recojo? — Sería un detalle.' },
    { de: 'Lass uns …', es: 'Vamos a… / Hagamos…', ex: 'Lass uns eine Pause machen.', exEs: 'Vamos a descansar.' },
    { de: 'Ich bin mir nicht sicher.', es: 'No estoy seguro.', ex: 'Ist heute offen? — Ich bin mir nicht sicher.', exEs: '¿Hoy está abierto? — No estoy seguro.' },
    { de: 'Das tut mir leid.', es: 'Lo siento.', ex: 'Das tut mir wirklich leid.', exEs: 'Lo siento de verdad.' },
    { de: 'Kein Wunder.', es: 'No me extraña.', ex: 'Du bist müde? Kein Wunder, du hast kaum geschlafen.', exEs: '¿Estás cansado? No me extraña, casi no has dormido.' },
    { de: 'Nach dir.', es: 'Tú primero.', ex: 'Nach dir, ich halte die Tür.', exEs: 'Tú primero, sujeto la puerta.' },
    { de: 'Halb so wild.', es: 'No es para tanto.', ex: 'Ich habe es zerbrochen. — Halb so wild.', exEs: 'Lo he roto. — No es para tanto.' },
    { de: 'Das reicht.', es: 'Ya basta. / Es suficiente.', ex: 'Noch mehr? — Nein danke, das reicht.', exEs: '¿Más? — No gracias, es suficiente.' },
    { de: 'Wird gemacht.', es: 'Hecho. / Marchando.', ex: 'Kannst du das schicken? — Wird gemacht.', exEs: '¿Puedes enviarlo? — Hecho.' },
    { de: 'Da hast du recht.', es: 'En eso tienes razón.', ex: 'Wir sollten früher losfahren. — Da hast du recht.', exEs: 'Deberíamos salir antes. — En eso tienes razón.' },
    { de: 'unter uns gesagt', es: 'entre nosotros', ex: 'Unter uns gesagt, das Essen war nicht gut.', exEs: 'Entre nosotros, la comida no estaba buena.' },
    { de: 'im Ernst?', es: '¿En serio?', ex: 'Er kommt doch nicht. — Im Ernst?', exEs: 'Al final no viene. — ¿En serio?' },
    { de: 'Mal sehen.', es: 'Ya veremos.', ex: 'Gehst du mit? — Mal sehen.', exEs: '¿Vienes? — Ya veremos.' },
    { de: 'Bis dann!', es: '¡Hasta luego!', ex: 'Ich muss los. Bis dann!', exEs: 'Me tengo que ir. ¡Hasta luego!' }
  ],
  restaurant: [
    { de: 'die Bedienung', es: 'el camarero / el servicio', ex: 'Die Bedienung war sehr freundlich.', exEs: 'El servicio era muy amable.' },
    { de: 'bestellen', es: 'pedir', ex: 'Haben Sie schon bestellt?', exEs: '¿Ya han pedido?' },
    { de: 'die Getränkekarte', es: 'la carta de bebidas', ex: 'Könnte ich die Getränkekarte sehen?', exEs: '¿Puedo ver la carta de bebidas?' },
    { de: 'das Tagesgericht', es: 'el plato del día', ex: 'Was ist heute das Tagesgericht?', exEs: '¿Cuál es el plato del día?' },
    { de: 'die Beilage', es: 'la guarnición', ex: 'Als Beilage nehme ich Salat.', exEs: 'De guarnición voy a tomar ensalada.' },
    { de: 'gut durch', es: 'muy hecho (carne)', ex: 'Das Steak bitte gut durch.', exEs: 'El filete bien hecho, por favor.' },
    { de: 'die Rechnung', es: 'la cuenta', ex: 'Die Rechnung, bitte.', exEs: 'La cuenta, por favor.' },
    { de: 'ein Glas Leitungswasser', es: 'un vaso de agua del grifo', ex: 'Ein Glas Leitungswasser, bitte.', exEs: 'Un vaso de agua del grifo, por favor.' },
    { de: 'vegetarisch', es: 'vegetariano', ex: 'Gibt es etwas Vegetarisches?', exEs: '¿Hay algo vegetariano?' },
    { de: 'scharf', es: 'picante', ex: 'Ist das Curry sehr scharf?', exEs: '¿El curry pica mucho?' },
    { de: 'noch etwas zu trinken?', es: '¿algo más de beber?', ex: 'Möchten Sie noch etwas zu trinken?', exEs: '¿Desean algo más de beber?' },
    { de: 'satt sein', es: 'estar lleno', ex: 'Danke, ich bin satt.', exEs: 'Gracias, estoy lleno.' },
    { de: 'zum Mitnehmen', es: 'para llevar', ex: 'Einen Kaffee zum Mitnehmen, bitte.', exEs: 'Un café para llevar, por favor.' },
    { de: 'die Vorbestellung', es: 'la reserva', ex: 'Wir haben eine Vorbestellung auf den Namen Müller.', exEs: 'Tenemos una reserva a nombre de Müller.' },
    { de: 'das Besteck', es: 'los cubiertos', ex: 'Könnten wir noch Besteck haben?', exEs: '¿Nos trae más cubiertos?' },
    { de: 'die Serviette', es: 'la servilleta', ex: 'Entschuldigung, haben Sie eine Serviette?', exEs: 'Perdone, ¿tiene una servilleta?' },
    { de: 'die Speisekarte auf Englisch', es: 'la carta en inglés', ex: 'Haben Sie eine Speisekarte auf Englisch?', exEs: '¿Tienen carta en inglés?' },
    { de: 'die Reservierung stornieren', es: 'anular la reserva', ex: 'Ich möchte meine Reservierung stornieren.', exEs: 'Quería anular mi reserva.' },
    { de: 'lecker', es: 'rico / delicioso', ex: 'Das sieht lecker aus!', exEs: '¡Qué buena pinta!' },
    { de: 'Prost!', es: '¡Salud!', ex: 'Auf euch — Prost!', exEs: 'Por vosotros — ¡salud!' }
  ],
  reisen: [
    { de: 'der Bahnsteig / das Gleis', es: 'el andén / la vía', ex: 'Der Zug fährt von Gleis 4.', exEs: 'El tren sale de la vía 4.' },
    { de: 'die Durchsage', es: 'el aviso por megafonía', ex: 'Ich habe die Durchsage nicht verstanden.', exEs: 'No he entendido el aviso.' },
    { de: 'der Bahnhofsvorplatz', es: 'la explanada de la estación', ex: 'Wir treffen uns auf dem Bahnhofsvorplatz.', exEs: 'Quedamos en la explanada de la estación.' },
    { de: 'der Koffer', es: 'la maleta', ex: 'Mein Koffer ist zu schwer.', exEs: 'Mi maleta pesa demasiado.' },
    { de: 'die Bordkarte', es: 'la tarjeta de embarque', ex: 'Zeigen Sie bitte Ihre Bordkarte.', exEs: 'Muestre su tarjeta de embarque, por favor.' },
    { de: 'die Sicherheitskontrolle', es: 'el control de seguridad', ex: 'Die Sicherheitskontrolle dauert heute lange.', exEs: 'El control de seguridad hoy tarda mucho.' },
    { de: 'der Aufenthalt', es: 'la escala / la estancia', ex: 'Wir haben zwei Stunden Aufenthalt in Wien.', exEs: 'Tenemos dos horas de escala en Viena.' },
    { de: 'der Anschlussflug', es: 'el vuelo de conexión', ex: 'Ich verpasse sonst meinen Anschlussflug.', exEs: 'Si no, pierdo el vuelo de conexión.' },
    { de: 'der Reisepass', es: 'el pasaporte', ex: 'Hast du deinen Reisepass dabei?', exEs: '¿Llevas el pasaporte?' },
    { de: 'buchen', es: 'reservar', ex: 'Ich buche die Zimmer online.', exEs: 'Reservo las habitaciones por internet.' },
    { de: 'das Doppelzimmer', es: 'la habitación doble', ex: 'Wir hätten gern ein Doppelzimmer mit Frühstück.', exEs: 'Queríamos una habitación doble con desayuno.' },
    { de: 'die Rezeption', es: 'la recepción', ex: 'Fragen Sie bitte an der Rezeption.', exEs: 'Pregunte en recepción, por favor.' },
    { de: 'ein-/auschecken', es: 'hacer el check-in / check-out', ex: 'Bis wann muss man auschecken?', exEs: '¿Hasta qué hora hay que hacer el check-out?' },
    { de: 'die Wegbeschreibung', es: 'las indicaciones', ex: 'Kannst du mir eine Wegbeschreibung schicken?', exEs: '¿Me puedes mandar cómo llegar?' },
    { de: 'geradeaus', es: 'todo recto', ex: 'Gehen Sie geradeaus und dann links.', exEs: 'Siga todo recto y luego a la izquierda.' },
    { de: 'die Kreuzung', es: 'el cruce', ex: 'An der nächsten Kreuzung rechts.', exEs: 'En el siguiente cruce, a la derecha.' },
    { de: 'die Ermäßigung', es: 'el descuento', ex: 'Gibt es eine Ermäßigung für Studenten?', exEs: '¿Hay descuento para estudiantes?' },
    { de: 'hin und zurück', es: 'ida y vuelta', ex: 'Einmal Berlin, hin und zurück, bitte.', exEs: 'Un billete a Berlín, ida y vuelta, por favor.' },
    { de: 'das Reiseziel', es: 'el destino', ex: 'Unser nächstes Reiseziel ist Portugal.', exEs: 'Nuestro próximo destino es Portugal.' },
    { de: 'sich verfahren', es: 'equivocarse de camino (en coche)', ex: 'Wir haben uns total verfahren.', exEs: 'Nos hemos equivocado de camino del todo.' }
  ],
  arbeit: [
    { de: 'der Kollege / die Kollegin', es: 'el compañero / la compañera', ex: 'Meine Kollegin hilft mir bei dem Bericht.', exEs: 'Mi compañera me ayuda con el informe.' },
    { de: 'die Sitzung', es: 'la sesión / reunión', ex: 'Die Sitzung beginnt um zehn.', exEs: 'La sesión empieza a las diez.' },
    { de: 'das Protokoll', es: 'el acta', ex: 'Wer schreibt heute das Protokoll?', exEs: '¿Quién hace hoy el acta?' },
    { de: 'die Aufgabe', es: 'la tarea', ex: 'Das ist nicht meine Aufgabe.', exEs: 'Esa no es mi tarea.' },
    { de: 'sich einarbeiten', es: 'ponerse al día / familiarizarse', ex: 'Ich muss mich noch einarbeiten.', exEs: 'Todavía tengo que ponerme al día.' },
    { de: 'die Deadline / der Abgabetermin', es: 'la fecha de entrega', ex: 'Der Abgabetermin ist am Montag.', exEs: 'La fecha de entrega es el lunes.' },
    { de: 'im Homeoffice arbeiten', es: 'teletrabajar', ex: 'Dienstags arbeite ich im Homeoffice.', exEs: 'Los martes teletrabajo.' },
    { de: 'die Fortbildung', es: 'la formación / el curso', ex: 'Nächste Woche habe ich eine Fortbildung.', exEs: 'La semana que viene tengo un curso de formación.' },
    { de: 'den Urlaub beantragen', es: 'pedir las vacaciones', ex: 'Ich habe für August Urlaub beantragt.', exEs: 'He pedido vacaciones para agosto.' },
    { de: 'das Team', es: 'el equipo', ex: 'Wir sind ein kleines Team von fünf Leuten.', exEs: 'Somos un equipo pequeño de cinco personas.' },
    { de: 'der Chef / die Chefin', es: 'el jefe / la jefa', ex: 'Frag am besten die Chefin.', exEs: 'Mejor pregúntale a la jefa.' },
    { de: 'die E-Mail beantworten', es: 'contestar el correo', ex: 'Ich beantworte die E-Mail gleich.', exEs: 'Contesto el correo ahora mismo.' },
    { de: 'ein Angebot machen', es: 'hacer una oferta / presupuesto', ex: 'Wir machen dem Kunden ein Angebot.', exEs: 'Le hacemos un presupuesto al cliente.' },
    { de: 'die Frist einhalten', es: 'cumplir el plazo', ex: 'Wir konnten die Frist einhalten.', exEs: 'Hemos podido cumplir el plazo.' },
    { de: 'Rücksprache halten', es: 'consultar / hablarlo', ex: 'Ich muss erst mit dem Team Rücksprache halten.', exEs: 'Primero tengo que consultarlo con el equipo.' },
    { de: 'die Präsentation halten', es: 'dar la presentación', ex: 'Morgen halte ich die Präsentation.', exEs: 'Mañana doy la presentación.' },
    { de: 'der Vertrag', es: 'el contrato', ex: 'Mein Vertrag läuft im Juni aus.', exEs: 'Mi contrato termina en junio.' },
    { de: 'die Gehaltsabrechnung', es: 'la nómina', ex: 'Die Gehaltsabrechnung kommt am Monatsende.', exEs: 'La nómina llega a fin de mes.' },
    { de: 'sich verspäten', es: 'llegar tarde', ex: 'Entschuldigung, ich habe mich verspätet.', exEs: 'Perdón, he llegado tarde.' },
    { de: 'Feierabend machen', es: 'terminar de trabajar', ex: 'Machst du bald Feierabend?', exEs: '¿Terminas pronto de trabajar?' }
  ],
  gesundheit: [
    { de: 'der Hausarzt', es: 'el médico de cabecera', ex: 'Ich gehe zuerst zum Hausarzt.', exEs: 'Primero voy al médico de cabecera.' },
    { de: 'die Sprechstunde', es: 'la consulta (horario)', ex: 'Die Sprechstunde ist bis zwölf.', exEs: 'La consulta es hasta las doce.' },
    { de: 'die Krankmeldung', es: 'el parte de baja', ex: 'Ich brauche eine Krankmeldung für die Arbeit.', exEs: 'Necesito un parte de baja para el trabajo.' },
    { de: 'Husten haben', es: 'tener tos', ex: 'Ich habe seit drei Tagen Husten.', exEs: 'Llevo tres días con tos.' },
    { de: 'der Schnupfen', es: 'los mocos / el catarro', ex: 'Ich habe einen leichten Schnupfen.', exEs: 'Tengo un poco de catarro.' },
    { de: 'sich übergeben / erbrechen', es: 'vomitar', ex: 'Ihm war schlecht und er hat sich übergeben.', exEs: 'Se encontraba mal y ha vomitado.' },
    { de: 'die Beschwerden', es: 'las molestias / los síntomas', ex: 'Seit wann haben Sie diese Beschwerden?', exEs: '¿Desde cuándo tiene estas molestias?' },
    { de: 'die Apotheke', es: 'la farmacia', ex: 'Die Apotheke um die Ecke hat bis acht offen.', exEs: 'La farmacia de la esquina abre hasta las ocho.' },
    { de: 'das Schmerzmittel', es: 'el analgésico', ex: 'Nehmen Sie bei Bedarf ein Schmerzmittel.', exEs: 'Tome un analgésico si lo necesita.' },
    { de: 'die Salbe', es: 'la pomada', ex: 'Reiben Sie die Stelle mit der Salbe ein.', exEs: 'Aplique la pomada en la zona.' },
    { de: 'der Verband / das Pflaster', es: 'la venda / la tirita', ex: 'Wir kleben ein Pflaster drauf.', exEs: 'Le ponemos una tirita.' },
    { de: 'der Blutdruck', es: 'la tensión arterial', ex: 'Ihr Blutdruck ist etwas zu hoch.', exEs: 'Tiene la tensión un poco alta.' },
    { de: 'die Impfung', es: 'la vacuna', ex: 'Brauche ich eine Impfung für die Reise?', exEs: '¿Necesito alguna vacuna para el viaje?' },
    { de: 'die Untersuchung', es: 'la revisión / el examen', ex: 'Die Untersuchung dauert nur zehn Minuten.', exEs: 'La revisión dura solo diez minutos.' },
    { de: 'der Termin fällt aus', es: 'se anula la cita', ex: 'Ihr Termin am Freitag fällt leider aus.', exEs: 'Su cita del viernes queda anulada.' },
    { de: 'sich schonen', es: 'cuidarse / no forzar', ex: 'Sie sollten sich diese Woche schonen.', exEs: 'Esta semana debería cuidarse.' },
    { de: 'die Krankschreibung verlängern', es: 'prorrogar la baja', ex: 'Ich muss die Krankschreibung verlängern lassen.', exEs: 'Tengo que prorrogar la baja.' },
    { de: 'allergisch reagieren', es: 'tener una reacción alérgica', ex: 'Ich reagiere allergisch auf Penicillin.', exEs: 'Tengo alergia a la penicilina.' },
    { de: 'die Notfallnummer', es: 'el número de urgencias', ex: 'Die Notfallnummer ist die 112.', exEs: 'El número de urgencias es el 112.' },
    { de: 'wieder auf den Beinen sein', es: 'estar recuperado', ex: 'In ein paar Tagen bist du wieder auf den Beinen.', exEs: 'En unos días estarás recuperado.' }
  ]
};

// Mazos temáticos adicionales.
const NEW_DECKS = [
  {
    id: 'einkaufen',
    name: 'Compras y dinero',
    emoji: '🛒',
    builtin: true,
    cards: [
      { de: 'der Einkaufszettel', es: 'la lista de la compra', ex: 'Ich habe den Einkaufszettel zu Hause vergessen.', exEs: 'Me he dejado la lista de la compra en casa.' },
      { de: 'der Wagen / der Einkaufswagen', es: 'el carro', ex: 'Nimm einen Wagen, wir kaufen viel.', exEs: 'Coge un carro, vamos a comprar mucho.' },
      { de: 'die Kasse', es: 'la caja', ex: 'An welcher Kasse ist weniger los?', exEs: '¿En qué caja hay menos cola?' },
      { de: 'bar oder mit Karte?', es: '¿en efectivo o con tarjeta?', ex: 'Zahlen Sie bar oder mit Karte?', exEs: '¿Paga en efectivo o con tarjeta?' },
      { de: 'der Kassenbon / der Beleg', es: 'el tique', ex: 'Möchten Sie den Kassenbon?', exEs: '¿Quiere el tique?' },
      { de: 'das Sonderangebot', es: 'la oferta', ex: 'Der Kaffee ist gerade im Sonderangebot.', exEs: 'El café está de oferta ahora.' },
      { de: 'reduziert', es: 'rebajado', ex: 'Die Jacke ist um 30 % reduziert.', exEs: 'La chaqueta está rebajada un 30 %.' },
      { de: 'umtauschen', es: 'cambiar (un producto)', ex: 'Kann ich das ohne Bon umtauschen?', exEs: '¿Puedo cambiarlo sin el tique?' },
      { de: 'die Größe', es: 'la talla', ex: 'Haben Sie das eine Nummer größer?', exEs: '¿Lo tiene una talla más?' },
      { de: 'die Umkleidekabine', es: 'el probador', ex: 'Wo sind die Umkleidekabinen?', exEs: '¿Dónde están los probadores?' },
      { de: 'anprobieren', es: 'probarse', ex: 'Darf ich das anprobieren?', exEs: '¿Me lo puedo probar?' },
      { de: 'es passt (nicht)', es: '(no) me queda bien', ex: 'Die Hose passt leider nicht.', exEs: 'El pantalón no me queda bien.' },
      { de: 'das Kleingeld', es: 'el suelto / la calderilla', ex: 'Hast du Kleingeld für den Automaten?', exEs: '¿Tienes suelto para la máquina?' },
      { de: 'überweisen', es: 'transferir (dinero)', ex: 'Ich überweise dir das Geld morgen.', exEs: 'Te transfiero el dinero mañana.' },
      { de: 'das Konto', es: 'la cuenta bancaria', ex: 'Das Gehalt kommt aufs Konto.', exEs: 'El sueldo entra en la cuenta.' },
      { de: 'abheben', es: 'sacar (dinero)', ex: 'Ich muss noch Geld abheben.', exEs: 'Tengo que sacar dinero.' },
      { de: 'sich etwas leisten können', es: 'poder permitirse algo', ex: 'Das kann ich mir gerade nicht leisten.', exEs: 'Ahora no me lo puedo permitir.' },
      { de: 'die Rechnung / die Quittung', es: 'la factura', ex: 'Ich brauche eine Rechnung auf meinen Namen.', exEs: 'Necesito una factura a mi nombre.' },
      { de: 'das Pfand', es: 'el depósito (envases)', ex: 'Auf die Flasche gibt es 25 Cent Pfand.', exEs: 'La botella tiene 25 céntimos de depósito.' },
      { de: 'die Tüte', es: 'la bolsa', ex: 'Brauchen Sie eine Tüte?', exEs: '¿Necesita una bolsa?' },
      { de: 'frisch', es: 'fresco', ex: 'Ist der Fisch heute frisch?', exEs: '¿El pescado es fresco hoy?' },
      { de: 'abgelaufen', es: 'caducado', ex: 'Der Joghurt ist schon abgelaufen.', exEs: 'El yogur ya está caducado.' },
      { de: 'ausverkauft', es: 'agotado', ex: 'Das Modell ist leider ausverkauft.', exEs: 'Ese modelo está agotado.' },
      { de: 'in Raten zahlen', es: 'pagar a plazos', ex: 'Kann man das in Raten zahlen?', exEs: '¿Se puede pagar a plazos?' }
    ]
  },
  {
    id: 'wohnen',
    name: 'Casa y hogar',
    emoji: '🏠',
    builtin: true,
    cards: [
      { de: 'die Wohnung mieten', es: 'alquilar el piso', ex: 'Wir haben die Wohnung seit zwei Jahren gemietet.', exEs: 'Tenemos el piso alquilado desde hace dos años.' },
      { de: 'die Miete', es: 'el alquiler', ex: 'Die Miete ist am Monatsanfang fällig.', exEs: 'El alquiler se paga a principios de mes.' },
      { de: 'die Nebenkosten', es: 'los gastos (comunidad, luz…)', ex: 'Die Nebenkosten sind ziemlich hoch.', exEs: 'Los gastos son bastante altos.' },
      { de: 'die Kaution', es: 'la fianza', ex: 'Die Kaution beträgt zwei Monatsmieten.', exEs: 'La fianza son dos meses de alquiler.' },
      { de: 'der Vermieter / die Vermieterin', es: 'el casero / la casera', ex: 'Ich rufe die Vermieterin wegen der Heizung an.', exEs: 'Llamo a la casera por la calefacción.' },
      { de: 'der Mitbewohner', es: 'el compañero de piso', ex: 'Mein Mitbewohner kocht sehr gut.', exEs: 'Mi compañero de piso cocina muy bien.' },
      { de: 'die Heizung', es: 'la calefacción', ex: 'Die Heizung funktioniert nicht.', exEs: 'La calefacción no funciona.' },
      { de: 'der Strom', es: 'la luz / la electricidad', ex: 'Der Strom ist ausgefallen.', exEs: 'Se ha ido la luz.' },
      { de: 'der Wasserhahn', es: 'el grifo', ex: 'Der Wasserhahn tropft.', exEs: 'El grifo gotea.' },
      { de: 'die Steckdose', es: 'el enchufe', ex: 'Wo ist hier eine Steckdose?', exEs: '¿Dónde hay un enchufe aquí?' },
      { de: 'die Glühbirne wechseln', es: 'cambiar la bombilla', ex: 'Ich muss die Glühbirne im Flur wechseln.', exEs: 'Tengo que cambiar la bombilla del pasillo.' },
      { de: 'der Handwerker', es: 'el técnico / el manitas', ex: 'Der Handwerker kommt morgen früh.', exEs: 'El técnico viene mañana por la mañana.' },
      { de: 'die Wohnung besichtigen', es: 'visitar el piso', ex: 'Wir besichtigen die Wohnung am Samstag.', exEs: 'Visitamos el piso el sábado.' },
      { de: 'möbliert', es: 'amueblado', ex: 'Ist die Wohnung möbliert?', exEs: '¿El piso está amueblado?' },
      { de: 'der Umzug', es: 'la mudanza', ex: 'Der Umzug war anstrengend.', exEs: 'La mudanza fue agotadora.' },
      { de: 'die Kiste', es: 'la caja', ex: 'Wir haben zwanzig Kisten gepackt.', exEs: 'Hemos hecho veinte cajas.' },
      { de: 'der Nachbar / die Nachbarin', es: 'el vecino / la vecina', ex: 'Die Nachbarn sind sehr nett.', exEs: 'Los vecinos son muy majos.' },
      { de: 'der Hausflur / das Treppenhaus', es: 'el portal / la escalera', ex: 'Im Treppenhaus darf man nicht rauchen.', exEs: 'En la escalera no se puede fumar.' },
      { de: 'den Müll trennen', es: 'reciclar / separar la basura', ex: 'Hier muss man den Müll trennen.', exEs: 'Aquí hay que separar la basura.' },
      { de: 'die Waschküche', es: 'el lavadero comunitario', ex: 'Die Waschmaschine steht in der Waschküche.', exEs: 'La lavadora está en el lavadero.' },
      { de: 'kündigen (den Mietvertrag)', es: 'rescindir el contrato de alquiler', ex: 'Wir haben den Mietvertrag zum Juli gekündigt.', exEs: 'Hemos rescindido el contrato para julio.' },
      { de: 'renovieren', es: 'reformar', ex: 'Vor dem Einzug renovieren wir das Bad.', exEs: 'Antes de mudarnos reformamos el baño.' },
      { de: 'die Aussicht', es: 'las vistas', ex: 'Die Wohnung hat eine tolle Aussicht.', exEs: 'El piso tiene unas vistas geniales.' },
      { de: 'laut / hellhörig', es: 'ruidoso / con poca insonorización', ex: 'Die Wohnung ist leider sehr hellhörig.', exEs: 'El piso está muy mal insonorizado.' }
    ]
  },
  {
    id: 'verben',
    name: 'Verbos frecuentes B1',
    emoji: '🎬',
    builtin: true,
    cards: [
      { de: 'sich entscheiden', es: 'decidirse', ex: 'Ich kann mich einfach nicht entscheiden.', exEs: 'Es que no consigo decidirme.' },
      { de: 'vermeiden', es: 'evitar', ex: 'Versuch, Stress zu vermeiden.', exEs: 'Intenta evitar el estrés.' },
      { de: 'erledigen', es: 'hacer / despachar (tareas)', ex: 'Ich habe heute alles erledigt.', exEs: 'Hoy lo he hecho todo.' },
      { de: 'sich lohnen', es: 'merecer la pena', ex: 'Der lange Weg hat sich gelohnt.', exEs: 'El camino largo ha merecido la pena.' },
      { de: 'auffallen', es: 'llamar la atención / notarse', ex: 'Ist dir an ihm etwas aufgefallen?', exEs: '¿Le has notado algo raro?' },
      { de: 'beeindrucken', es: 'impresionar', ex: 'Ihre Rede hat mich sehr beeindruckt.', exEs: 'Su discurso me impresionó mucho.' },
      { de: 'überzeugen', es: 'convencer', ex: 'Du hast mich überzeugt.', exEs: 'Me has convencido.' },
      { de: 'verzichten auf', es: 'renunciar a / prescindir de', ex: 'Ich verzichte heute auf den Nachtisch.', exEs: 'Hoy paso del postre.' },
      { de: 'sich gewöhnen an', es: 'acostumbrarse a', ex: 'Ich gewöhne mich langsam an die Kälte.', exEs: 'Me voy acostumbrando al frío.' },
      { de: 'vermuten', es: 'suponer / sospechar', ex: 'Ich vermute, er kommt später.', exEs: 'Supongo que vendrá más tarde.' },
      { de: 'behaupten', es: 'afirmar', ex: 'Er behauptet, nichts gewusst zu haben.', exEs: 'Afirma que no sabía nada.' },
      { de: 'sich beschweren', es: 'quejarse', ex: 'Sie hat sich über den Lärm beschwert.', exEs: 'Se quejó del ruido.' },
      { de: 'schaffen', es: 'conseguir / lograr', ex: 'Ich schaffe das bis Freitag.', exEs: 'Lo tengo para el viernes.' },
      { de: 'sich verlassen auf', es: 'contar con / fiarse de', ex: 'Auf ihn kann man sich verlassen.', exEs: 'Se puede contar con él.' },
      { de: 'sich melden', es: 'dar señales / avisar', ex: 'Melde dich, wenn du angekommen bist.', exEs: 'Avisa cuando hayas llegado.' },
      { de: 'ablehnen', es: 'rechazar', ex: 'Sie hat das Angebot abgelehnt.', exEs: 'Ha rechazado la oferta.' },
      { de: 'zustimmen', es: 'estar de acuerdo', ex: 'Da stimme ich dir völlig zu.', exEs: 'En eso estoy totalmente de acuerdo.' },
      { de: 'unterstützen', es: 'apoyar', ex: 'Meine Familie unterstützt mich.', exEs: 'Mi familia me apoya.' },
      { de: 'sich kümmern um', es: 'ocuparse de', ex: 'Ich kümmere mich um die Tickets.', exEs: 'Yo me ocupo de las entradas.' },
      { de: 'vergleichen', es: 'comparar', ex: 'Vergleich mal die Preise.', exEs: 'Compara los precios.' },
      { de: 'sich bewerben', es: 'presentar una candidatura', ex: 'Ich bewerbe mich um die Stelle.', exEs: 'Voy a solicitar el puesto.' },
      { de: 'verschieben', es: 'aplazar', ex: 'Wir verschieben das Treffen auf Montag.', exEs: 'Aplazamos la reunión al lunes.' },
      { de: 'erreichen', es: 'alcanzar / localizar', ex: 'Ich konnte ihn telefonisch nicht erreichen.', exEs: 'No he podido localizarlo por teléfono.' },
      { de: 'vorschlagen', es: 'proponer', ex: 'Ich schlage einen Kompromiss vor.', exEs: 'Propongo un término medio.' },
      { de: 'verbessern', es: 'mejorar', ex: 'Ich will mein Deutsch verbessern.', exEs: 'Quiero mejorar mi alemán.' },
      { de: 'verursachen', es: 'causar / provocar', ex: 'Der Sturm hat große Schäden verursacht.', exEs: 'La tormenta causó grandes daños.' },
      { de: 'bemerken', es: 'notar / darse cuenta de', ex: 'Ich habe den Fehler zu spät bemerkt.', exEs: 'Me di cuenta del fallo demasiado tarde.' },
      { de: 'verlangen', es: 'exigir / pedir', ex: 'Der Kunde verlangt eine Erklärung.', exEs: 'El cliente exige una explicación.' },
      { de: 'gelten', es: 'valer / ser válido', ex: 'Das Ticket gilt einen Tag.', exEs: 'El billete vale un día.' },
      { de: 'betreffen', es: 'afectar / concernir', ex: 'Diese Änderung betrifft uns alle.', exEs: 'Este cambio nos afecta a todos.' },
      { de: 'sich etwas leisten', es: 'permitirse algo', ex: 'So ein Auto kann ich mir nicht leisten.', exEs: 'No puedo permitirme un coche así.' },
      { de: 'aufgeben', es: 'rendirse / abandonar', ex: 'Gib jetzt bloß nicht auf!', exEs: '¡No te rindas ahora!' },
      { de: 'teilnehmen an', es: 'participar en', ex: 'Ich nehme an dem Workshop teil.', exEs: 'Voy a participar en el taller.' },
      { de: 'sich verabreden', es: 'quedar (con alguien)', ex: 'Wir haben uns für acht verabredet.', exEs: 'Hemos quedado a las ocho.' },
      { de: 'funktionieren', es: 'funcionar', ex: 'Der Aufzug funktioniert wieder nicht.', exEs: 'El ascensor otra vez no funciona.' },
      { de: 'sparen', es: 'ahorrar', ex: 'Wir sparen für eine größere Wohnung.', exEs: 'Ahorramos para un piso más grande.' },
      { de: 'besorgen', es: 'conseguir / comprar', ex: 'Ich besorge noch schnell das Getränk.', exEs: 'Compro rápido la bebida.' },
      { de: 'ausmachen', es: 'importar / molestar', ex: 'Macht es dir was aus, wenn ich rauche?', exEs: '¿Te importa si fumo?' },
      { de: 'verbringen', es: 'pasar (tiempo)', ex: 'Wir haben den Sommer am Meer verbracht.', exEs: 'Pasamos el verano en el mar.' },
      { de: 'sich vorstellen', es: 'imaginarse', ex: 'Stell dir vor, wir hätten gewonnen!', exEs: '¡Imagínate que hubiéramos ganado!' },
      { de: 'erlauben', es: 'permitir', ex: 'Das ist hier leider nicht erlaubt.', exEs: 'Aquí no está permitido, lo siento.' },
      { de: 'verbieten', es: 'prohibir', ex: 'Parken ist auf dem Hof verboten.', exEs: 'Está prohibido aparcar en el patio.' },
      { de: 'empfehlen', es: 'recomendar', ex: 'Ich kann dir dieses Buch sehr empfehlen.', exEs: 'Te recomiendo mucho este libro.' },
      { de: 'sich beeilen', es: 'darse prisa', ex: 'Wenn wir uns beeilen, schaffen wir den Zug.', exEs: 'Si nos damos prisa, cogemos el tren.' }
    ]
  },
  {
    id: 'adjektive',
    name: 'Adjetivos B1',
    emoji: '🎨',
    builtin: true,
    cards: [
      { de: 'zuverlässig', es: 'fiable', ex: 'Er ist ein zuverlässiger Kollege.', exEs: 'Es un compañero fiable.' },
      { de: 'anstrengend', es: 'agotador', ex: 'Der Tag war ziemlich anstrengend.', exEs: 'El día ha sido bastante agotador.' },
      { de: 'aufregend', es: 'emocionante', ex: 'Die Reise war total aufregend.', exEs: 'El viaje fue muy emocionante.' },
      { de: 'empfindlich', es: 'sensible / delicado', ex: 'Ich bin empfindlich gegen Lärm.', exEs: 'Soy sensible al ruido.' },
      { de: 'gründlich', es: 'minucioso / a fondo', ex: 'Sie arbeitet immer sehr gründlich.', exEs: 'Siempre trabaja muy a fondo.' },
      { de: 'neugierig', es: 'curioso', ex: 'Ich bin neugierig, wie es ausgeht.', exEs: 'Tengo curiosidad por cómo acaba.' },
      { de: 'ehrgeizig', es: 'ambicioso', ex: 'Sie ist beruflich sehr ehrgeizig.', exEs: 'Es muy ambiciosa en lo profesional.' },
      { de: 'gemütlich', es: 'acogedor / a gusto', ex: 'Das ist ein gemütliches kleines Café.', exEs: 'Es una cafetería pequeña y acogedora.' },
      { de: 'peinlich', es: 'embarazoso / vergonzoso', ex: 'Das war mir echt peinlich.', exEs: 'Me dio muchísima vergüenza.' },
      { de: 'verständlich', es: 'comprensible', ex: 'Deine Reaktion ist völlig verständlich.', exEs: 'Tu reacción es totalmente comprensible.' },
      { de: 'sinnvoll', es: 'con sentido / útil', ex: 'Das ist eine sinnvolle Lösung.', exEs: 'Es una solución con sentido.' },
      { de: 'überflüssig', es: 'innecesario / de más', ex: 'Diese Diskussion ist überflüssig.', exEs: 'Esta discusión sobra.' },
      { de: 'ausführlich', es: 'detallado', ex: 'Er hat alles ausführlich erklärt.', exEs: 'Lo explicó todo con detalle.' },
      { de: 'deutlich', es: 'claro / evidente', ex: 'Es gibt einen deutlichen Unterschied.', exEs: 'Hay una diferencia clara.' },
      { de: 'geeignet', es: 'adecuado / apto', ex: 'Der Film ist nicht für Kinder geeignet.', exEs: 'La película no es apta para niños.' },
      { de: 'selbstständig', es: 'autónomo / independiente', ex: 'Die Kinder spielen schon sehr selbstständig.', exEs: 'Los niños ya juegan de forma muy independiente.' },
      { de: 'verantwortlich', es: 'responsable', ex: 'Wer ist hier verantwortlich?', exEs: '¿Quién es el responsable aquí?' },
      { de: 'vorsichtig', es: 'prudente / con cuidado', ex: 'Sei vorsichtig auf der nassen Treppe!', exEs: '¡Cuidado con la escalera mojada!' },
      { de: 'geduldig', es: 'paciente', ex: 'Bleib bitte geduldig mit ihm.', exEs: 'Ten paciencia con él, por favor.' },
      { de: 'großzügig', es: 'generoso', ex: 'Das war ein sehr großzügiges Geschenk.', exEs: 'Fue un regalo muy generoso.' },
      { de: 'sparsam', es: 'ahorrador', ex: 'Wir leben eher sparsam.', exEs: 'Vivimos más bien ahorrando.' },
      { de: 'pünktlich', es: 'puntual', ex: 'Der Zug war ausnahmsweise pünktlich.', exEs: 'El tren llegó puntual, para variar.' },
      { de: 'höflich', es: 'educado', ex: 'Er ist immer sehr höflich.', exEs: 'Siempre es muy educado.' },
      { de: 'unhöflich', es: 'maleducado', ex: 'Das war ziemlich unhöflich von ihm.', exEs: 'Fue bastante maleducado por su parte.' },
      { de: 'ehrlich', es: 'honesto / sincero', ex: 'Sei ganz ehrlich zu mir.', exEs: 'Sé totalmente sincero conmigo.' },
      { de: 'notwendig', es: 'necesario', ex: 'Das ist wirklich nicht notwendig.', exEs: 'Eso no hace ninguna falta.' },
      { de: 'wahrscheinlich', es: 'probable', ex: 'Es ist wahrscheinlich schon zu spät.', exEs: 'Probablemente ya es tarde.' },
      { de: 'zufrieden', es: 'satisfecho / contento', ex: 'Ich bin mit dem Ergebnis zufrieden.', exEs: 'Estoy contento con el resultado.' },
      { de: 'enttäuscht', es: 'decepcionado', ex: 'Ich bin ein bisschen enttäuscht.', exEs: 'Estoy un poco decepcionado.' },
      { de: 'gespannt', es: 'expectante / con ganas', ex: 'Ich bin gespannt auf den zweiten Teil.', exEs: 'Tengo ganas de ver la segunda parte.' },
      { de: 'erschöpft', es: 'exhausto', ex: 'Nach dem Umzug war ich erschöpft.', exEs: 'Después de la mudanza estaba exhausto.' },
      { de: 'besorgt', es: 'preocupado', ex: 'Sie klang besorgt am Telefon.', exEs: 'Sonaba preocupada por teléfono.' },
      { de: 'verwirrt', es: 'confundido', ex: 'Ich bin gerade völlig verwirrt.', exEs: 'Ahora mismo estoy hecho un lío.' },
      { de: 'glatt', es: 'liso / resbaladizo', ex: 'Vorsicht, die Straße ist glatt.', exEs: 'Cuidado, la carretera está resbaladiza.' },
      { de: 'feucht', es: 'húmedo', ex: 'Das Handtuch ist noch feucht.', exEs: 'La toalla todavía está húmeda.' },
      { de: 'eng', es: 'estrecho / apretado', ex: 'Die Hose ist mir zu eng geworden.', exEs: 'El pantalón me queda apretado.' },
      { de: 'locker', es: 'suelto / relajado', ex: 'Bleib mal ganz locker.', exEs: 'Tú tranquilo, relájate.' },
      { de: 'kompliziert', es: 'complicado', ex: 'Das ist mir alles zu kompliziert.', exEs: 'Todo esto es demasiado complicado para mí.' },
      { de: 'schwierig', es: 'difícil', ex: 'Das war eine schwierige Entscheidung.', exEs: 'Fue una decisión difícil.' },
      { de: 'nüchtern', es: 'sobrio / en ayunas', ex: 'Kommen Sie bitte nüchtern zur Blutabnahme.', exEs: 'Venga en ayunas a la analítica.' },
      { de: 'eklig', es: 'asqueroso', ex: 'Der Geruch im Kühlschrank ist eklig.', exEs: 'El olor de la nevera es asqueroso.' },
      { de: 'steif', es: 'rígido / tieso', ex: 'Mein Nacken ist heute ganz steif.', exEs: 'Hoy tengo el cuello muy rígido.' },
      { de: 'aufmerksam', es: 'atento', ex: 'Sie hört immer aufmerksam zu.', exEs: 'Siempre escucha con atención.' },
      { de: 'faul', es: 'vago / perezoso', ex: 'Am Sonntag bin ich einfach faul.', exEs: 'El domingo simplemente soy un vago.' }
    ]
  },
  {
    id: 'verbprep',
    name: 'Verbos con preposición',
    emoji: '🔗',
    builtin: true,
    cards: [
      { de: 'warten auf + Akk', es: 'esperar (a algo/alguien)', ex: 'Ich warte seit zehn Minuten auf den Bus.', exEs: 'Llevo diez minutos esperando el autobús.' },
      { de: 'denken an + Akk', es: 'pensar en', ex: 'Denk bitte an deinen Termin morgen.', exEs: 'Acuérdate de tu cita de mañana.' },
      { de: 'sich freuen auf + Akk', es: 'tener ganas de (algo futuro)', ex: 'Ich freue mich schon auf den Urlaub.', exEs: 'Ya tengo ganas de las vacaciones.' },
      { de: 'sich freuen über + Akk', es: 'alegrarse de (algo ya ocurrido)', ex: 'Ich freue mich sehr über dein Geschenk.', exEs: 'Me alegro mucho de tu regalo.' },
      { de: 'sich interessieren für + Akk', es: 'interesarse por', ex: 'Er interessiert sich sehr für Politik.', exEs: 'Le interesa mucho la política.' },
      { de: 'sich ärgern über + Akk', es: 'enfadarse por', ex: 'Ich ärgere mich über den langen Stau.', exEs: 'Me fastidia el atasco tan largo.' },
      { de: 'sich kümmern um + Akk', es: 'ocuparse de', ex: 'Kümmerst du dich um die Getränke?', exEs: '¿Te ocupas tú de las bebidas?' },
      { de: 'achten auf + Akk', es: 'prestar atención a / fijarse en', ex: 'Achte auf die letzte Stufe!', exEs: '¡Ojo con el último escalón!' },
      { de: 'sich erinnern an + Akk', es: 'acordarse de', ex: 'Erinnerst du dich noch an sie?', exEs: '¿Todavía te acuerdas de ella?' },
      { de: 'bestehen aus + Dat', es: 'constar de / estar formado por', ex: 'Das Team besteht aus vier Personen.', exEs: 'El equipo lo forman cuatro personas.' },
      { de: 'gehören zu + Dat', es: 'formar parte de', ex: 'Das gehört leider zu meinen Aufgaben.', exEs: 'Eso, por desgracia, entra en mis tareas.' },
      { de: 'teilnehmen an + Dat', es: 'participar en', ex: 'Ich nehme an dem Sprachkurs teil.', exEs: 'Voy a participar en el curso de idiomas.' },
      { de: 'sich bewerben um + Akk', es: 'solicitar (un puesto)', ex: 'Ich bewerbe mich um eine Teilzeitstelle.', exEs: 'Voy a solicitar un puesto a tiempo parcial.' },
      { de: 'Angst haben vor + Dat', es: 'tener miedo de', ex: 'Viele haben Angst vor dem Zahnarzt.', exEs: 'Mucha gente tiene miedo al dentista.' },
      { de: 'sich gewöhnen an + Akk', es: 'acostumbrarse a', ex: 'An das frühe Aufstehen gewöhne ich mich nie.', exEs: 'A madrugar no me acostumbro nunca.' },
      { de: 'sich verlassen auf + Akk', es: 'contar con / fiarse de', ex: 'Du kannst dich auf mich verlassen.', exEs: 'Puedes contar conmigo.' },
      { de: 'sich beschweren über + Akk', es: 'quejarse de', ex: 'Sie hat sich über den Service beschwert.', exEs: 'Se quejó del servicio.' },
      { de: 'sich entscheiden für + Akk', es: 'decidirse por', ex: 'Am Ende habe ich mich für das blaue entschieden.', exEs: 'Al final me decidí por el azul.' },
      { de: 'bitten um + Akk', es: 'pedir (algo)', ex: 'Darf ich dich um einen Gefallen bitten?', exEs: '¿Te puedo pedir un favor?' },
      { de: 'sich bedanken für + Akk', es: 'agradecer (algo)', ex: 'Ich möchte mich für eure Hilfe bedanken.', exEs: 'Quiero daros las gracias por la ayuda.' },
      { de: 'glauben an + Akk', es: 'creer en', ex: 'Ich glaube an dich, du schaffst das.', exEs: 'Creo en ti, lo vas a conseguir.' },
      { de: 'reagieren auf + Akk', es: 'reaccionar a', ex: 'Wie hat er auf die Nachricht reagiert?', exEs: '¿Cómo reaccionó a la noticia?' },
      { de: 'schützen vor + Dat', es: 'proteger de', ex: 'Die Creme schützt vor der Sonne.', exEs: 'La crema protege del sol.' },
      { de: 'sich unterhalten über + Akk', es: 'hablar / conversar sobre', ex: 'Wir haben uns lange über die Arbeit unterhalten.', exEs: 'Estuvimos hablando un buen rato sobre el trabajo.' },
      { de: 'sich beschäftigen mit + Dat', es: 'dedicarse a / ocuparse de', ex: 'In der Freizeit beschäftige ich mich mit Fotografie.', exEs: 'En el tiempo libre me dedico a la fotografía.' },
      { de: 'aufhören mit + Dat', es: 'dejar de', ex: 'Ich habe mit dem Rauchen aufgehört.', exEs: 'He dejado de fumar.' }
    ]
  },
  {
    id: 'gegensaetze',
    name: 'Contrarios',
    emoji: '↔️',
    builtin: true,
    cards: [
      { de: 'billig ⇄ teuer', es: 'barato ⇄ caro', ex: 'Das Hotel war billig, aber das Essen teuer.', exEs: 'El hotel era barato, pero la comida cara.' },
      { de: 'laut ⇄ leise', es: 'ruidoso ⇄ silencioso', ex: 'Kannst du bitte leiser sein? Es ist zu laut.', exEs: '¿Puedes bajar la voz? Hay mucho ruido.' },
      { de: 'hell ⇄ dunkel', es: 'claro ⇄ oscuro', ex: 'Im Sommer wird es spät dunkel.', exEs: 'En verano oscurece tarde.' },
      { de: 'offen ⇄ geschlossen', es: 'abierto ⇄ cerrado', ex: 'Die Bäckerei ist sonntags geschlossen.', exEs: 'La panadería cierra los domingos.' },
      { de: 'voll ⇄ leer', es: 'lleno ⇄ vacío', ex: 'Der Tank ist fast leer.', exEs: 'El depósito está casi vacío.' },
      { de: 'früh ⇄ spät', es: 'temprano ⇄ tarde', ex: 'Lieber zu früh als zu spät.', exEs: 'Mejor pronto que tarde.' },
      { de: 'richtig ⇄ falsch', es: 'correcto ⇄ incorrecto', ex: 'Zwei Antworten waren falsch.', exEs: 'Dos respuestas estaban mal.' },
      { de: 'sauber ⇄ schmutzig', es: 'limpio ⇄ sucio', ex: 'Zieh keine schmutzigen Schuhe an.', exEs: 'No te pongas zapatos sucios.' },
      { de: 'schnell ⇄ langsam', es: 'rápido ⇄ lento', ex: 'Fahr bitte langsamer.', exEs: 'Ve más despacio, por favor.' },
      { de: 'stark ⇄ schwach', es: 'fuerte ⇄ débil', ex: 'Der Kaffee ist mir zu stark.', exEs: 'El café está muy cargado para mí.' },
      { de: 'weich ⇄ hart', es: 'blando ⇄ duro', ex: 'Das Bett im Hotel war zu hart.', exEs: 'La cama del hotel era muy dura.' },
      { de: 'nass ⇄ trocken', es: 'mojado ⇄ seco', ex: 'Meine Jacke ist noch ganz nass.', exEs: 'Mi chaqueta todavía está empapada.' },
      { de: 'eng ⇄ weit', es: 'estrecho ⇄ ancho / holgado', ex: 'Der Rock ist mir zu eng.', exEs: 'La falda me queda estrecha.' },
      { de: 'kurz ⇄ lang', es: 'corto ⇄ largo', ex: 'Halten wir es kurz.', exEs: 'Vamos a hacerlo breve.' },
      { de: 'dick ⇄ dünn', es: 'grueso ⇄ fino / delgado', ex: 'Nimm die dicke Jacke, es ist kalt.', exEs: 'Coge la chaqueta gruesa, hace frío.' },
      { de: 'alt ⇄ jung', es: 'viejo ⇄ joven', ex: 'Mein Auto ist ziemlich alt.', exEs: 'Mi coche es bastante viejo.' },
      { de: 'neu ⇄ gebraucht', es: 'nuevo ⇄ de segunda mano', ex: 'Ich habe das Fahrrad gebraucht gekauft.', exEs: 'Compré la bici de segunda mano.' },
      { de: 'ähnlich ⇄ unterschiedlich', es: 'parecido ⇄ distinto', ex: 'Die beiden sind sich sehr ähnlich.', exEs: 'Los dos se parecen mucho.' },
      { de: 'möglich ⇄ unmöglich', es: 'posible ⇄ imposible', ex: 'Das ist doch völlig unmöglich!', exEs: '¡Pero si eso es totalmente imposible!' },
      { de: 'erlaubt ⇄ verboten', es: 'permitido ⇄ prohibido', ex: 'Rauchen ist hier verboten.', exEs: 'Aquí está prohibido fumar.' },
      { de: 'gesund ⇄ krank', es: 'sano ⇄ enfermo', ex: 'Iss gesünder!', exEs: '¡Come más sano!' },
      { de: 'wichtig ⇄ egal', es: 'importante ⇄ indiferente', ex: 'Das ist mir wirklich wichtig.', exEs: 'Eso me importa de verdad.' },
      { de: 'einverstanden ⇄ dagegen', es: 'de acuerdo ⇄ en contra', ex: 'Ich bin mit dem Plan einverstanden.', exEs: 'Estoy de acuerdo con el plan.' },
      { de: 'freiwillig ⇄ verpflichtend', es: 'voluntario ⇄ obligatorio', ex: 'Die Teilnahme ist freiwillig.', exEs: 'La participación es voluntaria.' }
    ]
  },
  {
    id: 'verben_a2',
    name: 'Verbos esenciales A2',
    emoji: '⚡',
    builtin: true,
    cards: [
      { de: 'sein', es: 'ser / estar', ex: 'Ich bin müde.', exEs: 'Estoy cansado.' },
      { de: 'haben', es: 'tener', ex: 'Ich habe keine Zeit.', exEs: 'No tengo tiempo.' },
      { de: 'werden', es: 'llegar a ser / convertirse', ex: 'Das Wetter wird besser.', exEs: 'El tiempo está mejorando.' },
      { de: 'können', es: 'poder / saber', ex: 'Kannst du mir helfen?', exEs: '¿Puedes ayudarme?' },
      { de: 'müssen', es: 'tener que / deber', ex: 'Ich muss jetzt gehen.', exEs: 'Tengo que irme ahora.' },
      { de: 'wollen', es: 'querer', ex: 'Was willst du essen?', exEs: '¿Qué quieres comer?' },
      { de: 'sollen', es: 'deber (consejo)', ex: 'Du sollst mehr Wasser trinken.', exEs: 'Deberías beber más agua.' },
      { de: 'dürfen', es: 'tener permiso / poder', ex: 'Darf ich hier parken?', exEs: '¿Puedo aparcar aquí?' },
      { de: 'mögen', es: 'gustar', ex: 'Ich mag Schokolade.', exEs: 'Me gusta el chocolate.' },
      { de: 'stellen', es: 'poner (de pie)', ex: 'Stell die Flasche auf den Tisch.', exEs: 'Pon la botella sobre la mesa.' },
      { de: 'legen', es: 'poner (tumbado)', ex: 'Leg das Buch auf das Regal.', exEs: 'Pon el libro en la estantería.' },
      { de: 'sich setzen', es: 'sentarse', ex: 'Setz dich, ich mache uns Kaffee.', exEs: 'Siéntate, hago un café.' },
      { de: 'hängen', es: 'colgar', ex: 'Häng die Jacke an den Haken.', exEs: 'Cuelga la chaqueta en el gancho.' },
      { de: 'ziehen', es: 'tirar / estirar', ex: 'Zieh die Tür fest zu.', exEs: 'Cierra la puerta con fuerza.' },
      { de: 'drücken', es: 'apretar / empujar', ex: 'Drück auf den grünen Knopf.', exEs: 'Aprieta el botón verde.' },
      { de: 'werfen', es: 'tirar / lanzar', ex: 'Wirf den Ball nicht ins Haus!', exEs: '¡No tires la pelota dentro de casa!' },
      { de: 'fangen', es: 'coger (al vuelo) / atrapar', ex: 'Kannst du den Schlüssel fangen?', exEs: '¿Puedes coger la llave?' },
      { de: 'heben', es: 'levantar (un objeto)', ex: 'Heb bitte nichts Schweres.', exEs: 'No levantes nada pesado, por favor.' },
      { de: 'halten', es: 'sujetar / parar', ex: 'Hältst du kurz meine Tasche?', exEs: '¿Me sujetas un momento la bolsa?' },
      { de: 'tragen', es: 'llevar (puesto o en brazos)', ex: 'Er trägt heute einen Anzug.', exEs: 'Hoy lleva traje.' },
      { de: 'holen', es: 'ir a buscar / traer', ex: 'Ich hole schnell Brot vom Bäcker.', exEs: 'Voy rápido a por pan.' },
      { de: 'bringen', es: 'traer / llevar (a alguien algo)', ex: 'Bring mir bitte ein Glas Wasser.', exEs: 'Tráeme un vaso de agua, por favor.' },
      { de: 'schicken', es: 'enviar', ex: 'Ich schicke dir die Adresse per WhatsApp.', exEs: 'Te mando la dirección por WhatsApp.' },
      { de: 'zeigen', es: 'enseñar / mostrar', ex: 'Zeig mir mal deine Fotos.', exEs: 'Enséñame tus fotos.' },
      { de: 'suchen', es: 'buscar', ex: 'Ich suche seit einer Stunde meine Brille.', exEs: 'Llevo una hora buscando las gafas.' },
      { de: 'finden', es: 'encontrar', ex: 'Ich finde den Weg nicht.', exEs: 'No encuentro el camino.' },
      { de: 'verlieren', es: 'perder', ex: 'Ich habe meinen Regenschirm verloren.', exEs: 'He perdido el paraguas.' },
      { de: 'behalten', es: 'quedarse con / conservar', ex: 'Du kannst das Buch behalten.', exEs: 'Puedes quedarte el libro.' },
      { de: 'leihen', es: 'prestar / tomar prestado', ex: 'Kannst du mir 10 Euro leihen?', exEs: '¿Me prestas 10 euros?' },
      { de: 'kosten', es: 'costar', ex: 'Was kostet das?', exEs: '¿Cuánto cuesta esto?' },
      { de: 'verdienen', es: 'ganar (dinero) / merecer', ex: 'Sie verdient gut in ihrem Job.', exEs: 'Gana bien en su trabajo.' },
      { de: 'ausgeben', es: 'gastar', ex: 'Wir haben zu viel Geld ausgegeben.', exEs: 'Hemos gastado demasiado.' },
      { de: 'öffnen / aufmachen', es: 'abrir', ex: 'Mach bitte das Fenster auf.', exEs: 'Abre la ventana, por favor.' },
      { de: 'schließen / zumachen', es: 'cerrar', ex: 'Kannst du die Tür zumachen?', exEs: '¿Puedes cerrar la puerta?' },
      { de: 'einschalten / anmachen', es: 'encender', ex: 'Mach bitte das Licht an.', exEs: 'Enciende la luz, por favor.' },
      { de: 'ausschalten / ausmachen', es: 'apagar', ex: 'Vergiss nicht, den Herd auszumachen.', exEs: 'No olvides apagar los fogones.' },
      { de: 'klingeln', es: 'llamar al timbre / sonar', ex: 'Es hat gerade an der Tür geklingelt.', exEs: 'Acaban de llamar a la puerta.' },
      { de: 'klopfen', es: 'llamar (con los nudillos)', ex: 'Bitte vor dem Eintreten klopfen.', exEs: 'Llame antes de entrar, por favor.' },
      { de: 'winken', es: 'saludar con la mano', ex: 'Sie hat mir vom Bus aus gewinkt.', exEs: 'Me saludó desde el autobús.' },
      { de: 'lächeln', es: 'sonreír', ex: 'Der Verkäufer hat freundlich gelächelt.', exEs: 'El dependiente sonrió amablemente.' },
      { de: 'weinen', es: 'llorar', ex: 'Das Baby weint, es hat Hunger.', exEs: 'El bebé llora, tiene hambre.' },
      { de: 'lachen', es: 'reír', ex: 'Wir haben den ganzen Abend gelacht.', exEs: 'Nos hemos reído toda la tarde.' },
      { de: 'schreien', es: 'gritar', ex: 'Bitte nicht so schreien!', exEs: '¡No grites así!' },
      { de: 'flüstern', es: 'susurrar', ex: 'Im Kino muss man flüstern.', exEs: 'En el cine hay que susurrar.' },
      { de: 'atmen', es: 'respirar', ex: 'Atme tief ein und wieder aus.', exEs: 'Respira hondo y suelta el aire.' },
      { de: 'husten', es: 'toser', ex: 'Er hustet die ganze Nacht.', exEs: 'Tose toda la noche.' },
      { de: 'sich anziehen', es: 'vestirse', ex: 'Zieh dich an, wir gehen gleich.', exEs: 'Vístete, que nos vamos ya.' },
      { de: 'sich ausziehen', es: 'desvestirse', ex: 'Zieh die nassen Sachen aus.', exEs: 'Quítate la ropa mojada.' },
      { de: 'sich umziehen', es: 'cambiarse de ropa', ex: 'Ich ziehe mich kurz um.', exEs: 'Me cambio un momento.' },
      { de: 'sich waschen', es: 'lavarse', ex: 'Wasch dir vor dem Essen die Hände.', exEs: 'Lávate las manos antes de comer.' },
      { de: 'sich duschen', es: 'ducharse', ex: 'Ich dusche mich immer morgens.', exEs: 'Siempre me ducho por la mañana.' },
      { de: 'wecken', es: 'despertar (a alguien)', ex: 'Weck mich bitte um sieben.', exEs: 'Despiértame a las siete, por favor.' },
      { de: 'aufwachen', es: 'despertarse', ex: 'Ich bin heute sehr früh aufgewacht.', exEs: 'Hoy me he despertado muy pronto.' },
      { de: 'einschlafen', es: 'dormirse', ex: 'Ich bin vor dem Fernseher eingeschlafen.', exEs: 'Me he dormido delante de la tele.' },
      { de: 'gehören', es: 'pertenecer / ser de', ex: 'Wem gehört diese Jacke?', exEs: '¿De quién es esta chaqueta?' },
      { de: 'passen', es: 'quedar bien / venir bien', ex: 'Passt dir Freitag um fünf?', exEs: '¿Te viene bien el viernes a las cinco?' },
      { de: 'gefallen', es: 'gustar', ex: 'Die Stadt gefällt mir sehr.', exEs: 'La ciudad me gusta mucho.' },
      { de: 'schmecken', es: 'saber / gustar (comida)', ex: 'Schmeckt dir die Suppe?', exEs: '¿Te gusta la sopa?' },
      { de: 'fehlen', es: 'faltar / echar de menos', ex: 'Mir fehlt noch eine Unterschrift.', exEs: 'Me falta una firma.' },
      { de: 'wehtun', es: 'doler', ex: 'Mein Rücken tut heute weh.', exEs: 'Hoy me duele la espalda.' }
    ]
  },
  {
    id: 'zahlen',
    name: 'Números',
    emoji: '🔢',
    builtin: true,
    cards: [
      { de: 'null', es: '0', ex: '', exEs: '' },
      { de: 'eins', es: '1', ex: 'Es ist ein Uhr.', exEs: 'Es la una.' },
      { de: 'zwei', es: '2', ex: '', exEs: '' },
      { de: 'drei', es: '3', ex: '', exEs: '' },
      { de: 'vier', es: '4', ex: '', exEs: '' },
      { de: 'fünf', es: '5', ex: '', exEs: '' },
      { de: 'sechs', es: '6', ex: '', exEs: '' },
      { de: 'sieben', es: '7', ex: 'Der Zug fährt um sieben.', exEs: 'El tren sale a las siete.' },
      { de: 'acht', es: '8', ex: '', exEs: '' },
      { de: 'neun', es: '9', ex: '', exEs: '' },
      { de: 'zehn', es: '10', ex: '', exEs: '' },
      { de: 'elf', es: '11', ex: '', exEs: '' },
      { de: 'zwölf', es: '12', ex: 'Es ist zwölf Uhr, Mittag.', exEs: 'Son las doce, mediodía.' },
      { de: 'dreizehn', es: '13', ex: '', exEs: '' },
      { de: 'vierzehn', es: '14', ex: '', exEs: '' },
      { de: 'fünfzehn', es: '15', ex: '', exEs: '' },
      { de: 'sechzehn', es: '16', ex: 'Achtung: kein "s" in sechzehn.', exEs: 'Ojo: sin "s" en sechzehn.' },
      { de: 'siebzehn', es: '17', ex: 'Achtung: siebzehn, nicht "siebenzehn".', exEs: 'Ojo: siebzehn, no "siebenzehn".' },
      { de: 'achtzehn', es: '18', ex: '', exEs: '' },
      { de: 'neunzehn', es: '19', ex: '', exEs: '' },
      { de: 'zwanzig', es: '20', ex: '', exEs: '' },
      { de: 'einundzwanzig', es: '21', ex: 'Erst die Einer: ein-und-zwanzig.', exEs: 'Primero las unidades: uno-y-veinte.' },
      { de: 'zweiundvierzig', es: '42', ex: 'zwei-und-vierzig', exEs: 'dos-y-cuarenta' },
      { de: 'dreißig', es: '30', ex: 'Achtung: "ß" → dreißig.', exEs: 'Ojo: dreißig con "ß".' },
      { de: 'vierzig', es: '40', ex: '', exEs: '' },
      { de: 'fünfzig', es: '50', ex: '', exEs: '' },
      { de: 'sechzig', es: '60', ex: '', exEs: '' },
      { de: 'siebzig', es: '70', ex: '', exEs: '' },
      { de: 'achtzig', es: '80', ex: '', exEs: '' },
      { de: 'neunzig', es: '90', ex: '', exEs: '' },
      { de: '(ein)hundert', es: '100', ex: 'hundertzwölf = 112', exEs: 'hundertzwölf = 112' },
      { de: 'zweihundert', es: '200', ex: '', exEs: '' },
      { de: '(ein)tausend', es: '1000', ex: 'tausendneunhundert = 1900', exEs: 'tausendneunhundert = 1900' },
      { de: 'hunderttausend', es: '100 000', ex: '', exEs: '' },
      { de: 'eine Million', es: '1 000 000', ex: 'zwei Millionen', exEs: 'dos millones' },
      { de: 'die Hälfte', es: 'la mitad', ex: 'die Hälfte von acht ist vier', exEs: 'la mitad de ocho es cuatro' },
      { de: 'ein Viertel', es: 'un cuarto', ex: 'ein Viertel des Kuchens', exEs: 'un cuarto del pastel' },
      { de: 'ein Drittel', es: 'un tercio', ex: '', exEs: '' },
      { de: 'erste / zweite / dritte', es: '1º / 2º / 3º', ex: 'der erste Mai', exEs: 'el uno de mayo' }
    ]
  },
  {
    id: 'kalender',
    name: 'Días, meses y estaciones',
    emoji: '📅',
    builtin: true,
    cards: [
      { de: 'der Montag', es: 'el lunes', ex: 'Am Montag habe ich frei.', exEs: 'El lunes libro.' },
      { de: 'der Dienstag', es: 'el martes', ex: '', exEs: '' },
      { de: 'der Mittwoch', es: 'el miércoles', ex: '', exEs: '' },
      { de: 'der Donnerstag', es: 'el jueves', ex: '', exEs: '' },
      { de: 'der Freitag', es: 'el viernes', ex: 'Freitagabend gehen wir aus.', exEs: 'El viernes por la noche salimos.' },
      { de: 'der Samstag', es: 'el sábado', ex: '', exEs: '' },
      { de: 'der Sonntag', es: 'el domingo', ex: 'Sonntags sind die Geschäfte zu.', exEs: 'Los domingos las tiendas cierran.' },
      { de: 'der Januar', es: 'enero', ex: 'im Januar', exEs: 'en enero' },
      { de: 'der Februar', es: 'febrero', ex: '', exEs: '' },
      { de: 'der März', es: 'marzo', ex: '', exEs: '' },
      { de: 'der April', es: 'abril', ex: '', exEs: '' },
      { de: 'der Mai', es: 'mayo', ex: 'am 1. Mai', exEs: 'el 1 de mayo' },
      { de: 'der Juni', es: 'junio', ex: '', exEs: '' },
      { de: 'der Juli', es: 'julio', ex: '', exEs: '' },
      { de: 'der August', es: 'agosto', ex: 'Im August haben wir Urlaub.', exEs: 'En agosto tenemos vacaciones.' },
      { de: 'der September', es: 'septiembre', ex: '', exEs: '' },
      { de: 'der Oktober', es: 'octubre', ex: '', exEs: '' },
      { de: 'der November', es: 'noviembre', ex: '', exEs: '' },
      { de: 'der Dezember', es: 'diciembre', ex: '', exEs: '' },
      { de: 'der Frühling', es: 'la primavera', ex: 'Im Frühling wird es wärmer.', exEs: 'En primavera hace más calor.' },
      { de: 'der Sommer', es: 'el verano', ex: '', exEs: '' },
      { de: 'der Herbst', es: 'el otoño', ex: '', exEs: '' },
      { de: 'der Winter', es: 'el invierno', ex: '', exEs: '' },
      { de: 'heute', es: 'hoy', ex: 'Welcher Tag ist heute?', exEs: '¿Qué día es hoy?' },
      { de: 'morgen', es: 'mañana', ex: 'Bis morgen!', exEs: '¡Hasta mañana!' },
      { de: 'gestern', es: 'ayer', ex: '', exEs: '' },
      { de: 'übermorgen', es: 'pasado mañana', ex: '', exEs: '' },
      { de: 'vorgestern', es: 'anteayer', ex: '', exEs: '' },
      { de: 'die Woche', es: 'la semana', ex: 'nächste Woche', exEs: 'la semana que viene' },
      { de: 'das Wochenende', es: 'el fin de semana', ex: 'am Wochenende', exEs: 'el fin de semana' },
      { de: 'der Monat', es: 'el mes', ex: 'einmal im Monat', exEs: 'una vez al mes' },
      { de: 'das Jahr', es: 'el año', ex: 'dieses Jahr', exEs: 'este año' },
      { de: 'der Feiertag', es: 'el día festivo', ex: 'Morgen ist ein Feiertag.', exEs: 'Mañana es festivo.' },
      { de: 'der Geburtstag', es: 'el cumpleaños', ex: 'Wann hast du Geburtstag?', exEs: '¿Cuándo es tu cumpleaños?' }
    ]
  },
  {
    id: 'farben',
    name: 'Colores',
    emoji: '🎨',
    builtin: true,
    cards: [
      { de: 'rot', es: 'rojo', ex: 'ein rotes Auto', exEs: 'un coche rojo' },
      { de: 'blau', es: 'azul', ex: 'der blaue Himmel', exEs: 'el cielo azul' },
      { de: 'grün', es: 'verde', ex: '', exEs: '' },
      { de: 'gelb', es: 'amarillo', ex: '', exEs: '' },
      { de: 'schwarz', es: 'negro', ex: 'ein schwarzer Mantel', exEs: 'un abrigo negro' },
      { de: 'weiß', es: 'blanco', ex: '', exEs: '' },
      { de: 'grau', es: 'gris', ex: '', exEs: '' },
      { de: 'braun', es: 'marrón', ex: '', exEs: '' },
      { de: 'orange', es: 'naranja', ex: '', exEs: '' },
      { de: 'rosa', es: 'rosa', ex: '', exEs: '' },
      { de: 'lila / violett', es: 'morado / violeta', ex: '', exEs: '' },
      { de: 'türkis', es: 'turquesa', ex: '', exEs: '' },
      { de: 'beige', es: 'beige', ex: '', exEs: '' },
      { de: 'gold(en) / silber(n)', es: 'dorado / plateado', ex: '', exEs: '' },
      { de: 'hellblau', es: 'azul claro', ex: 'hell- = claro', exEs: 'hell- = claro' },
      { de: 'dunkelgrün', es: 'verde oscuro', ex: 'dunkel- = oscuro', exEs: 'dunkel- = oscuro' },
      { de: 'bunt', es: 'de colores / colorido', ex: 'ein buntes Kleid', exEs: 'un vestido de colores' },
      { de: 'die Farbe', es: 'el color', ex: 'Welche Farbe hat dein Auto?', exEs: '¿De qué color es tu coche?' }
    ]
  },
  {
    id: 'familie',
    name: 'La familia',
    emoji: '👨‍👩‍👧',
    builtin: true,
    cards: [
      { de: 'die Mutter', es: 'la madre', ex: 'Meine Mutter kocht sehr gut.', exEs: 'Mi madre cocina muy bien.' },
      { de: 'der Vater', es: 'el padre', ex: '', exEs: '' },
      { de: 'die Eltern', es: 'los padres', ex: 'Meine Eltern wohnen in Bonn.', exEs: 'Mis padres viven en Bonn.' },
      { de: 'der Sohn', es: 'el hijo', ex: '', exEs: '' },
      { de: 'die Tochter', es: 'la hija', ex: '', exEs: '' },
      { de: 'die Geschwister', es: 'los hermanos', ex: 'Hast du Geschwister?', exEs: '¿Tienes hermanos?' },
      { de: 'der Bruder', es: 'el hermano', ex: '', exEs: '' },
      { de: 'die Schwester', es: 'la hermana', ex: '', exEs: '' },
      { de: 'die Großmutter / die Oma', es: 'la abuela', ex: '', exEs: '' },
      { de: 'der Großvater / der Opa', es: 'el abuelo', ex: '', exEs: '' },
      { de: 'die Großeltern', es: 'los abuelos', ex: '', exEs: '' },
      { de: 'der Enkel / die Enkelin', es: 'el nieto / la nieta', ex: '', exEs: '' },
      { de: 'der Onkel', es: 'el tío', ex: '', exEs: '' },
      { de: 'die Tante', es: 'la tía', ex: '', exEs: '' },
      { de: 'der Cousin / die Cousine', es: 'el primo / la prima', ex: '', exEs: '' },
      { de: 'der Neffe / die Nichte', es: 'el sobrino / la sobrina', ex: '', exEs: '' },
      { de: 'der (Ehe)mann', es: 'el marido', ex: '', exEs: '' },
      { de: 'die (Ehe)frau', es: 'la mujer / esposa', ex: '', exEs: '' },
      { de: 'der Freund / die Freundin', es: 'el novio / la novia (o amigo/a)', ex: 'Das ist meine Freundin, Lena.', exEs: 'Esta es mi novia, Lena.' },
      { de: 'die Schwiegereltern', es: 'los suegros', ex: '', exEs: '' },
      { de: 'verheiratet', es: 'casado/a', ex: 'Sie ist seit fünf Jahren verheiratet.', exEs: 'Está casada desde hace cinco años.' },
      { de: 'ledig', es: 'soltero/a', ex: '', exEs: '' },
      { de: 'geschieden', es: 'divorciado/a', ex: '', exEs: '' },
      { de: 'die Verwandten', es: 'los parientes', ex: 'Wir besuchen Verwandte in Köln.', exEs: 'Visitamos a parientes en Colonia.' }
    ]
  },
  {
    id: 'koerper',
    name: 'El cuerpo',
    emoji: '🧍',
    builtin: true,
    cards: [
      { de: 'der Kopf', es: 'la cabeza', ex: 'Mein Kopf tut weh.', exEs: 'Me duele la cabeza.' },
      { de: 'das Gesicht', es: 'la cara', ex: '', exEs: '' },
      { de: 'das Auge (die Augen)', es: 'el ojo (los ojos)', ex: 'Sie hat blaue Augen.', exEs: 'Tiene los ojos azules.' },
      { de: 'die Nase', es: 'la nariz', ex: '', exEs: '' },
      { de: 'der Mund', es: 'la boca', ex: '', exEs: '' },
      { de: 'das Ohr (die Ohren)', es: 'la oreja (las orejas)', ex: '', exEs: '' },
      { de: 'der Zahn (die Zähne)', es: 'el diente (los dientes)', ex: 'Putz dir die Zähne!', exEs: '¡Lávate los dientes!' },
      { de: 'das Haar (die Haare)', es: 'el pelo', ex: 'Er hat kurze Haare.', exEs: 'Tiene el pelo corto.' },
      { de: 'der Hals', es: 'el cuello / la garganta', ex: 'Ich habe Halsschmerzen.', exEs: 'Me duele la garganta.' },
      { de: 'die Schulter', es: 'el hombro', ex: '', exEs: '' },
      { de: 'der Arm', es: 'el brazo', ex: '', exEs: '' },
      { de: 'die Hand (die Hände)', es: 'la mano (las manos)', ex: 'Gib mir die Hand.', exEs: 'Dame la mano.' },
      { de: 'der Finger', es: 'el dedo', ex: '', exEs: '' },
      { de: 'der Bauch', es: 'la barriga / el estómago', ex: 'Mir tut der Bauch weh.', exEs: 'Me duele la barriga.' },
      { de: 'der Rücken', es: 'la espalda', ex: '', exEs: '' },
      { de: 'das Bein', es: 'la pierna', ex: '', exEs: '' },
      { de: 'das Knie', es: 'la rodilla', ex: '', exEs: '' },
      { de: 'der Fuß (die Füße)', es: 'el pie (los pies)', ex: 'zu Fuß gehen', exEs: 'ir a pie' },
      { de: 'das Herz', es: 'el corazón', ex: '', exEs: '' },
      { de: 'die Haut', es: 'la piel', ex: '', exEs: '' },
      { de: 'das Blut', es: 'la sangre', ex: '', exEs: '' },
      { de: 'der Körper', es: 'el cuerpo', ex: '', exEs: '' }
    ]
  },
  {
    id: 'essen',
    name: 'Alimentos y bebidas',
    emoji: '🍎',
    builtin: true,
    cards: [
      { de: 'das Brot', es: 'el pan', ex: 'Ich kaufe frisches Brot.', exEs: 'Compro pan fresco.' },
      { de: 'das Brötchen', es: 'el panecillo / bollo', ex: '', exEs: '' },
      { de: 'die Butter', es: 'la mantequilla', ex: '', exEs: '' },
      { de: 'der Käse', es: 'el queso', ex: '', exEs: '' },
      { de: 'die Wurst', es: 'el embutido / la salchicha', ex: '', exEs: '' },
      { de: 'der Schinken', es: 'el jamón', ex: '', exEs: '' },
      { de: 'das Ei (die Eier)', es: 'el huevo', ex: 'zwei Eier zum Frühstück', exEs: 'dos huevos para desayunar' },
      { de: 'die Milch', es: 'la leche', ex: '', exEs: '' },
      { de: 'der Joghurt', es: 'el yogur', ex: '', exEs: '' },
      { de: 'der Reis', es: 'el arroz', ex: '', exEs: '' },
      { de: 'die Nudeln', es: 'la pasta', ex: 'Heute gibt es Nudeln.', exEs: 'Hoy hay pasta.' },
      { de: 'die Kartoffel', es: 'la patata', ex: '', exEs: '' },
      { de: 'das Gemüse', es: 'la verdura', ex: 'Iss mehr Gemüse!', exEs: '¡Come más verdura!' },
      { de: 'der Salat', es: 'la ensalada / la lechuga', ex: '', exEs: '' },
      { de: 'die Tomate', es: 'el tomate', ex: '', exEs: '' },
      { de: 'die Gurke', es: 'el pepino', ex: '', exEs: '' },
      { de: 'die Zwiebel', es: 'la cebolla', ex: '', exEs: '' },
      { de: 'die Karotte / die Möhre', es: 'la zanahoria', ex: '', exEs: '' },
      { de: 'die Banane', es: 'el plátano', ex: '', exEs: '' },
      { de: 'die Orange', es: 'la naranja', ex: '', exEs: '' },
      { de: 'die Erdbeere', es: 'la fresa', ex: '', exEs: '' },
      { de: 'die Zitrone', es: 'el limón', ex: '', exEs: '' },
      { de: 'das Obst', es: 'la fruta', ex: 'frisches Obst', exEs: 'fruta fresca' },
      { de: 'das Fleisch', es: 'la carne', ex: '', exEs: '' },
      { de: 'das Hähnchen', es: 'el pollo (para comer)', ex: '', exEs: '' },
      { de: 'der Fisch', es: 'el pescado', ex: 'Freitags essen wir Fisch.', exEs: 'Los viernes comemos pescado.' },
      { de: 'die Suppe', es: 'la sopa', ex: '', exEs: '' },
      { de: 'der Zucker', es: 'el azúcar', ex: 'Kaffee ohne Zucker', exEs: 'café sin azúcar' },
      { de: 'das Salz', es: 'la sal', ex: '', exEs: '' },
      { de: 'der Pfeffer', es: 'la pimienta', ex: '', exEs: '' },
      { de: 'das Öl', es: 'el aceite', ex: '', exEs: '' },
      { de: 'der Kuchen', es: 'el pastel / la tarta', ex: '', exEs: '' },
      { de: 'die Schokolade', es: 'el chocolate', ex: '', exEs: '' },
      { de: 'das Eis', es: 'el helado', ex: 'ein Eis im Sommer', exEs: 'un helado en verano' },
      { de: 'der Saft', es: 'el zumo', ex: 'ein Glas Orangensaft', exEs: 'un vaso de zumo de naranja' },
      { de: 'das Wasser', es: 'el agua', ex: 'ein Glas Wasser, bitte', exEs: 'un vaso de agua, por favor' },
      { de: 'das Bier', es: 'la cerveza', ex: '', exEs: '' },
      { de: 'der Wein', es: 'el vino', ex: '', exEs: '' },
      { de: 'das Mineralwasser', es: 'el agua mineral', ex: 'still oder mit Kohlensäure?', exEs: '¿con o sin gas?' },
      { de: 'das Frühstück', es: 'el desayuno', ex: 'Was isst du zum Frühstück?', exEs: '¿Qué desayunas?' },
      { de: 'das Mittagessen', es: 'la comida (mediodía)', ex: '', exEs: '' },
      { de: 'das Abendessen', es: 'la cena', ex: '', exEs: '' },
      { de: 'der Hunger / der Durst', es: 'el hambre / la sed', ex: 'Ich habe Hunger.', exEs: 'Tengo hambre.' },
      { de: 'satt', es: 'lleno / saciado', ex: 'Nein danke, ich bin satt.', exEs: 'No gracias, estoy lleno.' }
    ]
  },
  {
    id: 'tiere',
    name: 'Animales',
    emoji: '🐾',
    builtin: true,
    cards: [
      { de: 'der Hund', es: 'el perro', ex: 'Der Hund bellt.', exEs: 'El perro ladra.' },
      { de: 'die Katze', es: 'el gato', ex: '', exEs: '' },
      { de: 'das Pferd', es: 'el caballo', ex: '', exEs: '' },
      { de: 'die Kuh', es: 'la vaca', ex: '', exEs: '' },
      { de: 'das Schwein', es: 'el cerdo', ex: '', exEs: '' },
      { de: 'das Schaf', es: 'la oveja', ex: '', exEs: '' },
      { de: 'die Ziege', es: 'la cabra', ex: '', exEs: '' },
      { de: 'das Huhn', es: 'la gallina', ex: '', exEs: '' },
      { de: 'der Hahn', es: 'el gallo', ex: '', exEs: '' },
      { de: 'die Ente', es: 'el pato', ex: '', exEs: '' },
      { de: 'der Vogel', es: 'el pájaro', ex: 'Die Vögel singen morgens.', exEs: 'Los pájaros cantan por la mañana.' },
      { de: 'die Maus', es: 'el ratón', ex: '', exEs: '' },
      { de: 'das Kaninchen / der Hase', es: 'el conejo / la liebre', ex: '', exEs: '' },
      { de: 'das Eichhörnchen', es: 'la ardilla', ex: '', exEs: '' },
      { de: 'der Fuchs', es: 'el zorro', ex: '', exEs: '' },
      { de: 'der Wolf', es: 'el lobo', ex: '', exEs: '' },
      { de: 'der Bär', es: 'el oso', ex: '', exEs: '' },
      { de: 'der Löwe', es: 'el león', ex: '', exEs: '' },
      { de: 'der Tiger', es: 'el tigre', ex: '', exEs: '' },
      { de: 'der Elefant', es: 'el elefante', ex: '', exEs: '' },
      { de: 'die Giraffe', es: 'la jirafa', ex: '', exEs: '' },
      { de: 'der Affe', es: 'el mono', ex: '', exEs: '' },
      { de: 'die Schlange', es: 'la serpiente', ex: '', exEs: '' },
      { de: 'die Spinne', es: 'la araña', ex: 'Ich habe Angst vor Spinnen.', exEs: 'Tengo miedo a las arañas.' },
      { de: 'die Biene', es: 'la abeja', ex: '', exEs: '' },
      { de: 'die Mücke', es: 'el mosquito', ex: 'Mich haben die Mücken gestochen.', exEs: 'Me han picado los mosquitos.' },
      { de: 'die Ameise', es: 'la hormiga', ex: '', exEs: '' },
      { de: 'der Schmetterling', es: 'la mariposa', ex: '', exEs: '' },
      { de: 'der Frosch', es: 'la rana', ex: '', exEs: '' },
      { de: 'die Schildkröte', es: 'la tortuga', ex: '', exEs: '' },
      { de: 'der Delfin', es: 'el delfín', ex: '', exEs: '' },
      { de: 'der Wal', es: 'la ballena', ex: '', exEs: '' },
      { de: 'der Hai', es: 'el tiburón', ex: '', exEs: '' },
      { de: 'das Haustier', es: 'la mascota', ex: 'Habt ihr ein Haustier?', exEs: '¿Tenéis mascota?' }
    ]
  },
  {
    id: 'stadt',
    name: 'En la calle y la ciudad',
    emoji: '🏙️',
    builtin: true,
    cards: [
      { de: 'die Straße', es: 'la calle', ex: 'In welcher Straße wohnst du?', exEs: '¿En qué calle vives?' },
      { de: 'die Kreuzung', es: 'el cruce', ex: '', exEs: '' },
      { de: 'die Ampel', es: 'el semáforo', ex: 'An der Ampel links.', exEs: 'En el semáforo, a la izquierda.' },
      { de: 'der Zebrastreifen', es: 'el paso de cebra', ex: '', exEs: '' },
      { de: 'der Bürgersteig / der Gehweg', es: 'la acera', ex: '', exEs: '' },
      { de: 'die Bushaltestelle', es: 'la parada de autobús', ex: '', exEs: '' },
      { de: 'der Bahnhof', es: 'la estación de tren', ex: '', exEs: '' },
      { de: 'der Flughafen', es: 'el aeropuerto', ex: '', exEs: '' },
      { de: 'der Parkplatz', es: 'el aparcamiento', ex: 'Hier gibt es keinen Parkplatz.', exEs: 'Aquí no hay aparcamiento.' },
      { de: 'die Tankstelle', es: 'la gasolinera', ex: '', exEs: '' },
      { de: 'die Brücke', es: 'el puente', ex: '', exEs: '' },
      { de: 'der Platz', es: 'la plaza', ex: 'Wir treffen uns auf dem Marktplatz.', exEs: 'Quedamos en la plaza del mercado.' },
      { de: 'der Park', es: 'el parque', ex: '', exEs: '' },
      { de: 'der Brunnen', es: 'la fuente', ex: '', exEs: '' },
      { de: 'die Bank', es: 'el banco (de sentarse / entidad)', ex: 'Setzen wir uns auf die Bank.', exEs: 'Sentémonos en el banco.' },
      { de: 'die Straßenlaterne', es: 'la farola', ex: '', exEs: '' },
      { de: 'der Mülleimer', es: 'la papelera', ex: '', exEs: '' },
      { de: 'das Verkehrsschild', es: 'la señal de tráfico', ex: '', exEs: '' },
      { de: 'die Baustelle', es: 'las obras', ex: 'Wegen der Baustelle gibt es Stau.', exEs: 'Por las obras hay atasco.' },
      { de: 'das Gebäude', es: 'el edificio', ex: '', exEs: '' },
      { de: 'das Hochhaus', es: 'el rascacielos / bloque alto', ex: '', exEs: '' },
      { de: 'das Rathaus', es: 'el ayuntamiento', ex: '', exEs: '' },
      { de: 'die Kirche', es: 'la iglesia', ex: '', exEs: '' },
      { de: 'die Bibliothek', es: 'la biblioteca', ex: '', exEs: '' },
      { de: 'das Museum', es: 'el museo', ex: '', exEs: '' },
      { de: 'das Kino', es: 'el cine', ex: '', exEs: '' },
      { de: 'das Krankenhaus', es: 'el hospital', ex: '', exEs: '' },
      { de: 'die Apotheke', es: 'la farmacia', ex: '', exEs: '' },
      { de: 'die Bäckerei', es: 'la panadería', ex: '', exEs: '' },
      { de: 'der Supermarkt', es: 'el supermercado', ex: '', exEs: '' },
      { de: 'der Kiosk', es: 'el quiosco', ex: '', exEs: '' },
      { de: 'der Markt', es: 'el mercado', ex: 'Samstags ist Markt.', exEs: 'Los sábados hay mercado.' },
      { de: 'das Einkaufszentrum', es: 'el centro comercial', ex: '', exEs: '' },
      { de: 'die Post', es: 'la oficina de correos', ex: '', exEs: '' },
      { de: 'die Polizei', es: 'la policía', ex: '', exEs: '' },
      { de: 'die Feuerwehr', es: 'los bomberos', ex: '', exEs: '' },
      { de: 'die Innenstadt / das Zentrum', es: 'el centro', ex: 'Wir fahren in die Innenstadt.', exEs: 'Vamos al centro.' },
      { de: 'die Ecke', es: 'la esquina', ex: 'Der Kiosk ist an der Ecke.', exEs: 'El quiosco está en la esquina.' },
      { de: 'die Richtung', es: 'la dirección / el sentido', ex: 'in Richtung Bahnhof', exEs: 'en dirección a la estación' }
    ]
  },
  {
    id: 'kleidung',
    name: 'Ropa',
    emoji: '👕',
    builtin: true,
    cards: [
      { de: 'die Hose', es: 'el pantalón', ex: 'Diese Hose ist mir zu eng.', exEs: 'Este pantalón me queda estrecho.' },
      { de: 'das Hemd', es: 'la camisa', ex: 'Zum Anzug trägt er ein weißes Hemd.', exEs: 'Con el traje lleva una camisa blanca.' },
      { de: 'das T-Shirt', es: 'la camiseta', ex: '', exEs: '' },
      { de: 'der Pullover', es: 'el jersey', ex: 'Zieh einen Pullover an, es ist kalt.', exEs: 'Ponte un jersey, hace frío.' },
      { de: 'die Jacke', es: 'la chaqueta', ex: '', exEs: '' },
      { de: 'der Mantel', es: 'el abrigo', ex: 'Im Winter brauche ich einen warmen Mantel.', exEs: 'En invierno necesito un abrigo de abrigo.' },
      { de: 'das Kleid', es: 'el vestido', ex: 'Sie hat ein blaues Kleid gekauft.', exEs: 'Se ha comprado un vestido azul.' },
      { de: 'der Rock', es: 'la falda', ex: '', exEs: '' },
      { de: 'der Anzug', es: 'el traje', ex: 'Für das Vorstellungsgespräch ziehe ich einen Anzug an.', exEs: 'Para la entrevista me pongo traje.' },
      { de: 'die Bluse', es: 'la blusa', ex: '', exEs: '' },
      { de: 'die Schuhe', es: 'los zapatos', ex: 'Zieh bitte die Schuhe aus.', exEs: 'Quítate los zapatos, por favor.' },
      { de: 'die Stiefel', es: 'las botas', ex: '', exEs: '' },
      { de: 'die Socken', es: 'los calcetines', ex: '', exEs: '' },
      { de: 'der Schal', es: 'la bufanda', ex: '', exEs: '' },
      { de: 'die Mütze', es: 'el gorro', ex: 'Setz die Mütze auf, draußen schneit es.', exEs: 'Ponte el gorro, fuera nieva.' },
      { de: 'der Hut', es: 'el sombrero', ex: '', exEs: '' },
      { de: 'die Handschuhe', es: 'los guantes', ex: '', exEs: '' },
      { de: 'der Gürtel', es: 'el cinturón', ex: '', exEs: '' },
      { de: 'die Krawatte', es: 'la corbata', ex: '', exEs: '' },
      { de: 'der Schlafanzug', es: 'el pijama', ex: '', exEs: '' },
      { de: 'der Reißverschluss', es: 'la cremallera', ex: 'Der Reißverschluss klemmt.', exEs: 'La cremallera se atasca.' },
      { de: 'der Knopf', es: 'el botón', ex: 'Mir fehlt ein Knopf am Hemd.', exEs: 'Me falta un botón en la camisa.' },
      { de: 'anziehen', es: 'ponerse (ropa)', ex: 'Ich ziehe mir schnell etwas an.', exEs: 'Me pongo algo rápido.' },
      { de: 'ausziehen', es: 'quitarse (ropa)', ex: 'Zieh die nasse Jacke aus.', exEs: 'Quítate la chaqueta mojada.' },
      { de: 'sich umziehen', es: 'cambiarse de ropa', ex: 'Ich muss mich vor dem Essen noch umziehen.', exEs: 'Tengo que cambiarme antes de cenar.' },
      { de: 'tragen', es: 'llevar puesto', ex: 'Er trägt heute einen dunklen Anzug.', exEs: 'Hoy lleva un traje oscuro.' },
      { de: 'jemandem stehen', es: 'quedar bien (favorecer)', ex: 'Die Farbe steht dir wirklich gut.', exEs: 'Ese color te queda muy bien.' },
      { de: 'aus Baumwolle', es: 'de algodón', ex: 'Das T-Shirt ist aus reiner Baumwolle.', exEs: 'La camiseta es de algodón puro.' }
    ]
  },
  {
    id: 'wetter',
    name: 'El tiempo (clima)',
    emoji: '🌦️',
    builtin: true,
    cards: [
      { de: 'das Wetter', es: 'el tiempo (meteorológico)', ex: 'Wie wird das Wetter morgen?', exEs: '¿Qué tiempo hará mañana?' },
      { de: 'die Sonne', es: 'el sol', ex: 'Endlich kommt die Sonne raus.', exEs: 'Por fin sale el sol.' },
      { de: 'der Regen', es: 'la lluvia', ex: 'Bei diesem Regen bleibe ich zu Hause.', exEs: 'Con esta lluvia me quedo en casa.' },
      { de: 'der Schnee', es: 'la nieve', ex: 'Auf den Bergen liegt schon Schnee.', exEs: 'En las montañas ya hay nieve.' },
      { de: 'der Wind', es: 'el viento', ex: 'Heute weht ein starker Wind.', exEs: 'Hoy sopla viento fuerte.' },
      { de: 'die Wolke', es: 'la nube', ex: '', exEs: '' },
      { de: 'der Nebel', es: 'la niebla', ex: 'Am Morgen gab es dichten Nebel.', exEs: 'Por la mañana había niebla densa.' },
      { de: 'das Gewitter', es: 'la tormenta', ex: 'Am Nachmittag zieht ein Gewitter auf.', exEs: 'Por la tarde se acerca una tormenta.' },
      { de: 'der Blitz', es: 'el rayo', ex: '', exEs: '' },
      { de: 'der Donner', es: 'el trueno', ex: '', exEs: '' },
      { de: 'der Sturm', es: 'el temporal', ex: 'Der Sturm hat einige Bäume umgeknickt.', exEs: 'El temporal ha tirado varios árboles.' },
      { de: 'der Frost', es: 'la helada', ex: 'Heute Nacht gibt es Frost.', exEs: 'Esta noche va a helar.' },
      { de: 'das Glatteis', es: 'el hielo (en la calzada)', ex: 'Vorsicht, auf den Straßen ist Glatteis.', exEs: 'Cuidado, hay placas de hielo en las calles.' },
      { de: 'der Hagel', es: 'el granizo', ex: '', exEs: '' },
      { de: 'die Temperatur', es: 'la temperatura', ex: 'Die Temperatur fällt unter null.', exEs: 'La temperatura baja de cero.' },
      { de: 'der Grad', es: 'el grado', ex: 'Heute sind es 30 Grad im Schatten.', exEs: 'Hoy hace 30 grados a la sombra.' },
      { de: 'die Hitze', es: 'el calor sofocante', ex: 'Bei der Hitze kann man kaum schlafen.', exEs: 'Con este calor casi no se puede dormir.' },
      { de: 'die Kälte', es: 'el frío', ex: '', exEs: '' },
      { de: 'die Wettervorhersage', es: 'la previsión del tiempo', ex: 'Laut Wettervorhersage regnet es am Wochenende.', exEs: 'Según la previsión, llueve el finde.' },
      { de: 'die Jahreszeit', es: 'la estación del año', ex: 'Der Herbst ist meine liebste Jahreszeit.', exEs: 'El otoño es mi estación favorita.' },
      { de: 'sonnig', es: 'soleado', ex: 'Morgen wird es sonnig und warm.', exEs: 'Mañana estará soleado y cálido.' },
      { de: 'bewölkt', es: 'nublado', ex: 'Der Himmel ist stark bewölkt.', exEs: 'El cielo está muy nublado.' },
      { de: 'neblig', es: 'con niebla', ex: '', exEs: '' },
      { de: 'schwül', es: 'bochornoso', ex: 'Die Luft ist heute sehr schwül.', exEs: 'Hoy hace mucho bochorno.' },
      { de: 'es regnet', es: 'llueve', ex: 'Nimm einen Schirm mit, es regnet.', exEs: 'Llévate un paraguas, llueve.' },
      { de: 'es schneit', es: 'nieva', ex: '', exEs: '' },
      { de: 'es friert', es: 'hiela', ex: '', exEs: '' },
      { de: 'aufklaren', es: 'despejarse (el cielo)', ex: 'Am Nachmittag klart es auf.', exEs: 'Por la tarde despejará.' }
    ]
  },
  {
    id: 'freizeit',
    name: 'Ocio y aficiones',
    emoji: '🎨',
    builtin: true,
    cards: [
      { de: 'die Freizeit', es: 'el tiempo libre', ex: 'In meiner Freizeit lese ich viel.', exEs: 'En mi tiempo libre leo mucho.' },
      { de: 'das Hobby', es: 'la afición', ex: 'Fotografieren ist mein liebstes Hobby.', exEs: 'La fotografía es mi afición favorita.' },
      { de: 'der Verein', es: 'el club / la asociación', ex: 'Er spielt in einem Fußballverein.', exEs: 'Juega en un club de fútbol.' },
      { de: 'die Mannschaft', es: 'el equipo (deporte)', ex: 'Unsere Mannschaft hat gewonnen.', exEs: 'Nuestro equipo ha ganado.' },
      { de: 'das Spiel', es: 'el partido / el juego', ex: 'Das Spiel beginnt um acht.', exEs: 'El partido empieza a las ocho.' },
      { de: 'die Ausstellung', es: 'la exposición', ex: 'Im Museum gibt es eine neue Ausstellung.', exEs: 'En el museo hay una exposición nueva.' },
      { de: 'das Konzert', es: 'el concierto', ex: '', exEs: '' },
      { de: 'die Vorstellung', es: 'la función / la sesión', ex: 'Die Vorstellung war leider ausverkauft.', exEs: 'La función estaba agotada.' },
      { de: 'die Eintrittskarte', es: 'la entrada', ex: 'Ich habe zwei Eintrittskarten reserviert.', exEs: 'He reservado dos entradas.' },
      { de: 'der Ausflug', es: 'la excursión', ex: 'Am Sonntag machen wir einen Ausflug an den See.', exEs: 'El domingo hacemos una excursión al lago.' },
      { de: 'die Wanderung', es: 'la caminata / el senderismo', ex: 'Die Wanderung dauert etwa drei Stunden.', exEs: 'La caminata dura unas tres horas.' },
      { de: 'das Brettspiel', es: 'el juego de mesa', ex: '', exEs: '' },
      { de: 'der Roman', es: 'la novela', ex: 'Ich lese gerade einen spannenden Roman.', exEs: 'Estoy leyendo una novela apasionante.' },
      { de: 'die Zeitschrift', es: 'la revista', ex: '', exEs: '' },
      { de: 'das Puzzle', es: 'el puzle', ex: '', exEs: '' },
      { de: 'angeln', es: 'pescar', ex: 'Mein Onkel geht am Wochenende oft angeln.', exEs: 'Mi tío suele ir a pescar los fines de semana.' },
      { de: 'malen', es: 'pintar', ex: 'Die Kinder malen ein Bild für die Oma.', exEs: 'Los niños pintan un dibujo para la abuela.' },
      { de: 'zeichnen', es: 'dibujar', ex: '', exEs: '' },
      { de: 'fotografieren', es: 'hacer fotos', ex: 'Im Urlaub fotografiere ich sehr viel.', exEs: 'En vacaciones hago muchísimas fotos.' },
      { de: 'tanzen', es: 'bailar', ex: '', exEs: '' },
      { de: 'singen', es: 'cantar', ex: 'Sie singt in einem Chor.', exEs: 'Canta en un coro.' },
      { de: 'sammeln', es: 'coleccionar', ex: 'Als Kind habe ich Briefmarken gesammelt.', exEs: 'De niño coleccionaba sellos.' },
      { de: 'basteln', es: 'hacer manualidades', ex: 'Wir basteln Karten für Weihnachten.', exEs: 'Hacemos tarjetas para Navidad.' },
      { de: 'joggen', es: 'salir a correr', ex: 'Ich jogge dreimal die Woche im Park.', exEs: 'Salgo a correr por el parque tres veces por semana.' },
      { de: 'Rad fahren', es: 'montar en bici', ex: 'Am Wochenende fahren wir gern Rad.', exEs: 'Los fines de semana nos gusta montar en bici.' },
      { de: 'sich verabreden', es: 'quedar (con alguien)', ex: 'Wir haben uns für Freitag verabredet.', exEs: 'Hemos quedado para el viernes.' },
      { de: 'Spaß haben', es: 'pasarlo bien', ex: 'Wir hatten auf dem Fest viel Spaß.', exEs: 'Nos lo pasamos muy bien en la fiesta.' },
      { de: 'sich langweilen', es: 'aburrirse', ex: 'Bei Regen langweilen sich die Kinder schnell.', exEs: 'Cuando llueve, los niños se aburren enseguida.' }
    ]
  },
  {
    id: 'technik',
    name: 'Tecnología e internet',
    emoji: '💻',
    builtin: true,
    cards: [
      { de: 'der Bildschirm', es: 'la pantalla', ex: 'Der Bildschirm ist mir zu klein.', exEs: 'La pantalla me parece pequeña.' },
      { de: 'die Tastatur', es: 'el teclado', ex: '', exEs: '' },
      { de: 'die Maus', es: 'el ratón', ex: 'Die Maus funktioniert nicht mehr.', exEs: 'El ratón ya no funciona.' },
      { de: 'der Kopfhörer', es: 'los auriculares', ex: 'Ich höre Musik über Kopfhörer.', exEs: 'Escucho música con auriculares.' },
      { de: 'das Ladegerät', es: 'el cargador', ex: 'Ich habe mein Ladegerät zu Hause vergessen.', exEs: 'Me he dejado el cargador en casa.' },
      { de: 'der Akku', es: 'la batería', ex: 'Mein Akku ist gleich leer.', exEs: 'Se me está agotando la batería.' },
      { de: 'das Kabel', es: 'el cable', ex: '', exEs: '' },
      { de: 'der Drucker', es: 'la impresora', ex: 'Der Drucker hat kein Papier mehr.', exEs: 'La impresora se ha quedado sin papel.' },
      { de: 'die Festplatte', es: 'el disco duro', ex: 'Die Festplatte ist fast voll.', exEs: 'El disco duro está casi lleno.' },
      { de: 'die Datei', es: 'el archivo', ex: 'Kannst du mir die Datei schicken?', exEs: '¿Me puedes enviar el archivo?' },
      { de: 'der Ordner', es: 'la carpeta', ex: 'Leg das Bild in den richtigen Ordner.', exEs: 'Pon la imagen en la carpeta correcta.' },
      { de: 'das Passwort', es: 'la contraseña', ex: 'Ich habe mein Passwort vergessen.', exEs: 'He olvidado mi contraseña.' },
      { de: 'der Benutzer', es: 'el usuario', ex: '', exEs: '' },
      { de: 'die Anwendung / die App', es: 'la aplicación', ex: 'Diese Anwendung stürzt ständig ab.', exEs: 'Esta aplicación se cuelga sin parar.' },
      { de: 'das Update', es: 'la actualización', ex: 'Nach dem Update läuft alles langsamer.', exEs: 'Tras la actualización todo va más lento.' },
      { de: 'die Einstellungen', es: 'los ajustes', ex: 'Das kannst du in den Einstellungen ändern.', exEs: 'Eso lo puedes cambiar en los ajustes.' },
      { de: 'der Anhang', es: 'el archivo adjunto', ex: 'Die Rechnung ist im Anhang.', exEs: 'La factura va en el archivo adjunto.' },
      { de: 'die Verbindung', es: 'la conexión', ex: 'Die Verbindung ist heute sehr schlecht.', exEs: 'Hoy la conexión va muy mal.' },
      { de: 'das WLAN', es: 'el wifi', ex: 'Wie lautet das WLAN-Passwort?', exEs: '¿Cuál es la contraseña del wifi?' },
      { de: 'die Suchmaschine', es: 'el buscador', ex: '', exEs: '' },
      { de: 'der Browser', es: 'el navegador', ex: '', exEs: '' },
      { de: 'die Cloud', es: 'la nube (informática)', ex: 'Ich speichere die Fotos in der Cloud.', exEs: 'Guardo las fotos en la nube.' },
      { de: 'herunterladen', es: 'descargar', ex: 'Lade die Datei von der Webseite herunter.', exEs: 'Descarga el archivo de la página web.' },
      { de: 'hochladen', es: 'subir (a internet)', ex: 'Ich lade das Video später hoch.', exEs: 'Subo el vídeo más tarde.' },
      { de: 'speichern', es: 'guardar', ex: 'Vergiss nicht, das Dokument zu speichern.', exEs: 'No olvides guardar el documento.' },
      { de: 'löschen', es: 'borrar', ex: 'Ich habe die E-Mail aus Versehen gelöscht.', exEs: 'He borrado el correo sin querer.' },
      { de: 'installieren', es: 'instalar', ex: 'Du musst zuerst das Programm installieren.', exEs: 'Primero tienes que instalar el programa.' },
      { de: 'neu starten', es: 'reiniciar', ex: 'Starte den Computer einmal neu.', exEs: 'Reinicia el ordenador una vez.' },
      { de: 'abstürzen', es: 'colgarse / bloquearse', ex: 'Der Rechner ist mitten in der Arbeit abgestürzt.', exEs: 'El ordenador se ha colgado en plena tarea.' },
      { de: 'aufladen', es: 'cargar (la batería)', ex: 'Ich muss mein Handy aufladen.', exEs: 'Tengo que cargar el móvil.' }
    ]
  }
];

// Más verbos B1 para el mazo "verben".
const MORE_VERBEN = [
  { de: 'sich unterhalten', es: 'conversar / charlar', ex: 'Wir haben uns lange unterhalten.', exEs: 'Estuvimos charlando un buen rato.' },
  { de: 'sich streiten', es: 'discutir / pelearse', ex: 'Die Kinder streiten sich ständig.', exEs: 'Los niños se pelean sin parar.' },
  { de: 'sich verletzen', es: 'hacerse daño / lesionarse', ex: 'Er hat sich beim Sport verletzt.', exEs: 'Se lesionó haciendo deporte.' },
  { de: 'sich erkälten', es: 'resfriarse', ex: 'Zieh dich warm an, sonst erkältest du dich.', exEs: 'Abrígate o te vas a resfriar.' },
  { de: 'sich bemühen', es: 'esforzarse', ex: 'Sie bemüht sich wirklich sehr.', exEs: 'Se esfuerza de verdad.' },
  { de: 'sich weigern', es: 'negarse', ex: 'Er weigert sich, das zu unterschreiben.', exEs: 'Se niega a firmar eso.' },
  { de: 'sich trauen', es: 'atreverse', ex: 'Ich traue mich nicht, ihn zu fragen.', exEs: 'No me atrevo a preguntarle.' },
  { de: 'sich benehmen', es: 'comportarse', ex: 'Benimm dich bitte beim Essen!', exEs: '¡Compórtate en la mesa!' },
  { de: 'sich irren', es: 'equivocarse', ex: 'Da irrst du dich, glaube ich.', exEs: 'En eso te equivocas, creo.' },
  { de: 'gelingen', es: 'salir bien / lograr', ex: 'Der Kuchen ist mir gut gelungen.', exEs: 'El pastel me ha salido bien.' },
  { de: 'scheitern', es: 'fracasar', ex: 'Das Projekt ist am Geld gescheitert.', exEs: 'El proyecto fracasó por dinero.' },
  { de: 'klappen', es: 'funcionar / salir (coloquial)', ex: 'Hat mit dem Termin alles geklappt?', exEs: '¿Ha salido bien lo de la cita?' },
  { de: 'ausfallen', es: 'suspenderse / cancelarse', ex: 'Der Unterricht fällt heute aus.', exEs: 'Hoy no hay clase.' },
  { de: 'stattfinden', es: 'tener lugar / celebrarse', ex: 'Das Konzert findet im Park statt.', exEs: 'El concierto se celebra en el parque.' },
  { de: 'entstehen', es: 'surgir / originarse', ex: 'So entstehen viele Missverständnisse.', exEs: 'Así surgen muchos malentendidos.' },
  { de: 'verschwinden', es: 'desaparecer', ex: 'Meine Schlüssel sind einfach verschwunden.', exEs: 'Mis llaves han desaparecido sin más.' },
  { de: 'zunehmen', es: 'aumentar / engordar', ex: 'Der Verkehr nimmt jedes Jahr zu.', exEs: 'El tráfico aumenta cada año.' },
  { de: 'abnehmen', es: 'disminuir / adelgazar', ex: 'Ich möchte ein paar Kilo abnehmen.', exEs: 'Quiero perder unos kilos.' },
  { de: 'steigen', es: 'subir', ex: 'Die Preise sind stark gestiegen.', exEs: 'Los precios han subido mucho.' },
  { de: 'sinken', es: 'bajar / hundirse', ex: 'Die Temperatur sinkt nachts stark.', exEs: 'La temperatura baja mucho de noche.' },
  { de: 'betragen', es: 'ascender a / ser (una cantidad)', ex: 'Die Miete beträgt 800 Euro.', exEs: 'El alquiler es de 800 euros.' },
  { de: 'enthalten', es: 'contener / incluir', ex: 'Der Preis enthält das Frühstück.', exEs: 'El precio incluye el desayuno.' },
  { de: 'ersetzen', es: 'sustituir / reponer', ex: 'Wir müssen das kaputte Teil ersetzen.', exEs: 'Hay que sustituir la pieza rota.' },
  { de: 'wiederholen', es: 'repetir', ex: 'Könnten Sie das bitte wiederholen?', exEs: '¿Podría repetirlo, por favor?' },
  { de: 'üben', es: 'practicar / ensayar', ex: 'Ich übe jeden Tag ein bisschen.', exEs: 'Practico un poco cada día.' },
  { de: 'prüfen / überprüfen', es: 'comprobar / revisar', ex: 'Bitte prüfen Sie die Daten noch einmal.', exEs: 'Compruebe los datos otra vez, por favor.' },
  { de: 'feststellen', es: 'constatar / darse cuenta', ex: 'Wir haben festgestellt, dass etwas fehlt.', exEs: 'Nos hemos dado cuenta de que falta algo.' },
  { de: 'herausfinden', es: 'averiguar', ex: 'Ich finde heraus, wann der Laden öffnet.', exEs: 'Averiguo a qué hora abre la tienda.' },
  { de: 'beschließen', es: 'decidir / acordar', ex: 'Wir haben beschlossen, umzuziehen.', exEs: 'Hemos decidido mudarnos.' },
  { de: 'veranstalten', es: 'organizar (un evento)', ex: 'Die Schule veranstaltet ein Fest.', exEs: 'El colegio organiza una fiesta.' },
  { de: 'entwickeln', es: 'desarrollar', ex: 'Die Firma entwickelt eine neue App.', exEs: 'La empresa desarrolla una app nueva.' },
  { de: 'herstellen / produzieren', es: 'fabricar / producir', ex: 'Die Fabrik stellt Möbel her.', exEs: 'La fábrica produce muebles.' },
  { de: 'liefern', es: 'entregar / suministrar', ex: 'Sie liefern innerhalb von zwei Tagen.', exEs: 'Entregan en dos días.' },
  { de: 'anbieten', es: 'ofrecer', ex: 'Darf ich Ihnen etwas zu trinken anbieten?', exEs: '¿Le ofrezco algo de beber?' },
  { de: 'benutzen / verwenden', es: 'usar / utilizar', ex: 'Darf ich kurz dein Telefon benutzen?', exEs: '¿Puedo usar tu teléfono un momento?' },
  { de: 'nachdenken über', es: 'reflexionar sobre', ex: 'Ich muss über dein Angebot nachdenken.', exEs: 'Tengo que pensarme tu oferta.' },
  { de: 'sich merken', es: 'memorizar / quedarse con algo', ex: 'Diese Nummer kann ich mir nie merken.', exEs: 'Ese número no consigo memorizarlo.' },
  { de: 'vergessen', es: 'olvidar', ex: 'Ich habe die Butter zu kaufen vergessen.', exEs: 'Se me ha olvidado comprar la mantequilla.' },
  { de: 'sich erinnern', es: 'recordar / acordarse', ex: 'Ich erinnere mich nicht an seinen Namen.', exEs: 'No me acuerdo de su nombre.' }
];
MORE.verben = MORE_VERBEN;

BUILTIN.push(...NEW_DECKS);
BUILTIN.forEach((d) => {
  if (MORE[d.id]) d.cards = [...d.cards, ...MORE[d.id]];
});

// ---------- CRUD de mazos ----------
function userDecks() {
  return storage.get(DECKS_KEY, []);
}

// Los mazos del libro (Miteinander) son la fuente principal; BUILTIN queda como
// material extra y alimenta también el juego der/die/das.
// Los mazos de arranque estan escritos en castellano. Se traducen aqui, en la
// frontera, y no en cada pantalla. Los del libro ya vienen traducidos de
// kursbuch/, y los del usuario NO se tocan: son sus palabras, no las nuestras.
function traducirDeck(deck) {
  return {
    ...deck,
    name: tc(deck.name),
    cards: (deck.cards || []).map((c) => ({ ...c, es: tc(c.es), exEs: tc(c.exEs) }))
  };
}

export function allDecks() {
  return [...allBookDecks(), ...BUILTIN.map(traducirDeck), ...userDecks()];
}

export function bookDecks() {
  return allBookDecks();
}

// Mazo virtual que junta varios: el id lleva dentro los que se combinan, asi
// que no hay que guardar nada y el enlace sigue funcionando al recargar.
export function combinarDecks(ids) {
  const partes = (ids || []).map((x) => getDeck(x)).filter(Boolean);
  if (!partes.length) return null;
  // sin repetir la misma palabra si aparece en dos mazos
  const vistas = new Set();
  const cards = [];
  for (const d of partes) {
    for (const c of d.cards || []) {
      const k = String(c.de).toLowerCase().trim();
      if (vistas.has(k)) continue;
      vistas.add(k);
      cards.push(c);
    }
  }
  return {
    id: 'combi:' + partes.map((d) => d.id).join('|'),
    name: partes.map((d) => d.name).join(' + '),
    emoji: '🧺',
    builtin: true,
    combinado: true,
    partes: partes.map((d) => d.id),
    cards
  };
}

export function getDeck(id) {
  const txt = String(id || '');
  if (txt.startsWith('combi:')) return combinarDecks(txt.slice(6).split('|'));
  const m = /^kb-(.+)-all$/.exec(txt);
  if (m) return lektionDeckTodo(getLektion(m[1]));
  return allDecks().find((d) => d.id === id) || null;
}

export function saveUserDeck(deck) {
  const id = deck.id || 'u-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const clean = {
    id,
    name: deck.name || 'Mazo sin nombre',
    emoji: deck.emoji || '🗂️',
    source: deck.source || 'custom',
    text: deck.text || null,
    textEs: deck.textEs || null,
    createdAt: Date.now(),
    cards: (deck.cards || []).filter((c) => c && c.de && c.es).map((c) => ({
      de: String(c.de).trim(),
      es: String(c.es).trim(),
      ex: c.ex ? String(c.ex).trim() : '',
      exEs: c.exEs ? String(c.exEs).trim() : ''
    }))
  };
  storage.update(DECKS_KEY, [], (list) => [...list.filter((d) => d.id !== id), clean]);
  return clean;
}

export function deleteUserDeck(id) {
  storage.update(DECKS_KEY, [], (list) => list.filter((d) => d.id !== id));
}

// ---------- Repaso espaciado por tarjeta ----------
const INTERVALS = [0, 30e3, 5 * 60e3, 60 * 60e3, 24 * 3600e3, 3 * 24 * 3600e3, 7 * 24 * 3600e3];

function progAll() {
  return storage.get(PROG_KEY, {});
}
// El mazo "toda la lección" no lleva progreso propio: cada palabra se apunta
// en el tema al que pertenece. Si no, la misma palabra viviría en dos sitios,
// jugar la lección entera no movería sus temas, y el porcentaje global saldría
// mal. Aquí se traduce el id combinado al del tema que tiene esa palabra.
// Los mazos "juntos" (una lección entera, o varios combinados) no llevan
// progreso propio: cada palabra se apunta en el mazo del que salió. Si no,
// practicar en grupo no movía ninguno de los mazos de verdad y la palabra se
// contaba dos veces en el total.
function deckReal(deckId, de) {
  const txt = String(deckId || '');

  if (txt.startsWith('combi:')) {
    for (const id of txt.slice(6).split('|')) {
      const d = getDeck(id);
      if (d?.cards?.some((c) => c.de === de)) return deckReal(id, de);
    }
    return deckId;
  }

  const m = /^kb-(.+)-all$/.exec(txt);
  if (!m) return deckId;
  const suyo = lektionDecks(getLektion(m[1])).find((d) => d.cards.some((c) => c.de === de));
  return suyo ? suyo.id : deckId;
}

// ---------------------------------------------------------------------------
// Los colores de las tarjetas.
//
// No son progreso: el porcentaje del mazo lo suben los minijuegos (quiz,
// escribir…) y las tarjetas no lo tocan a proposito. Esto es otra cosa, un
// semaforo de cuanto te sabes cada palabra, y sube o baja segun la DIRECCION
// en la que la hayas acertado, porque no cuesta lo mismo.
//
//   DE -> ES  es reconocer: la lees y te suena. Lo mas que da es AMARILLO.
//   ES -> DE  es producir: tienes que sacarla tu. Eso si da VERDE.
//
// Asi el verde significa siempre lo mismo —"esta me sale sola en aleman"— y no
// se regala por el lado facil.
export const ROJO = '#ef4444';
export const AMARILLO = '#f59e0b';
export const VERDE = '#10b981';

export function colorSiguiente(prev, ok, deToEs) {
  if (deToEs) {
    // Fallar reconociendola es mala senal aunque antes fuera verde.
    if (!ok) return ROJO;
    // Acertar por el lado facil sube hasta amarillo, pero no baja un verde ya
    // ganado: que te salga sola en aleman sigue siendo cierto.
    return prev === VERDE ? VERDE : AMARILLO;
  }
  // ES -> DE, la dificil.
  if (ok) return VERDE;
  // Al fallar produciendo, se baja un escalon, nunca se sube: verde y amarillo
  // caen a amarillo (algo sabias, pero no te sale sola), y lo que no tenia
  // color se queda en rojo. Una roja sigue roja: fallar no puede mejorarla.
  return prev === AMARILLO || prev === VERDE ? AMARILLO : ROJO;
}

// Cuantas palabras del mazo hay de cada color. `todasVerdes` es lo que abre el
// boton de ampliar el tema con la IA.
export function coloresDeck(deck) {
  const vacio = { total: 0, verdes: 0, amarillas: 0, rojas: 0, sinColor: 0, todasVerdes: false };
  if (!deck?.cards?.length) return vacio;
  const p = progAll();
  const r = { ...vacio, total: deck.cards.length };
  for (const card of deck.cards) {
    const c = p[cardKey(deck.id, card.de)]?.color;
    if (c === VERDE) r.verdes += 1;
    else if (c === AMARILLO) r.amarillas += 1;
    else if (c === ROJO) r.rojas += 1;
    else r.sinColor += 1;
  }
  r.todasVerdes = r.verdes === r.total;
  return r;
}

export function setCardColor(deckId, de, color) {
  storage.update(PROG_KEY, {}, (p) => {
    const k = cardKey(deckId, de);
    const c = { correct: 0, wrong: 0, strength: 0, lastSeen: 0, due: 0, ...(p[k] || {}) };
    c.color = color;
    p[k] = c;
    return p;
  });
}

export function getCardColor(deckId, de) {
  const p = progAll();
  const c = p[cardKey(deckId, de)];
  return c ? c.color : null;
}

function cardKey(deckId, de) {
  return `${deckReal(deckId, de)}::${de}`;
}

export function cardProg(deckId, de) {
  return progAll()[cardKey(deckId, de)];
}

export function recordCard(deckId, de, correct) {
  storage.update(PROG_KEY, {}, (p) => {
    const k = cardKey(deckId, de);
    const c = { correct: 0, wrong: 0, strength: 0, lastSeen: 0, due: 0, ...(p[k] || {}) };
    const now = Date.now();
    if (correct) {
      c.correct += 1;
      c.strength = Math.min(6, c.strength + 1);
    } else {
      c.wrong += 1;
      c.strength = Math.max(0, c.strength - 1);
    }
    c.lastSeen = now;
    c.due = now + INTERVALS[Math.min(c.strength, INTERVALS.length - 1)];
    p[k] = c;
    return p;
  });
}

// Las palabras de un mazo que alguna vez has fallado y aún no dominas. Se
// devuelve un mazo con el MISMO id: así los juegos siguen apuntando el
// progreso en las mismas tarjetas, no en una copia paralela.
export function cartasFalladas(deck) {
  if (!deck) return [];
  const p = progAll();
  return deck.cards.filter((card) => {
    const c = p[cardKey(deck.id, card.de)];
    return c && c.wrong > 0 && c.strength < 4;
  });
}

// Quita las marcas de color de las palabras del mazo y NADA mas: lo que llevas
// acertado se queda igual. Son dos cosas distintas —el progreso lo pone el
// motor, los colores los pones tu a mano— y borrar una no tiene por que
// llevarse la otra por delante.
//
// Vale tanto desde el mazo de un tema como desde el de la leccion entera:
// cardKey() pasa por deckReal(), que resuelve `kb-<lektion>-all` al tema que
// contiene esa palabra, asi que las dos vistas escriben en la misma clave.
export function limpiarColores(deck) {
  if (!deck) return;
  storage.update(PROG_KEY, {}, (p) => {
    for (const card of deck.cards) {
      const k = cardKey(deck.id, card.de);
      if (p[k]?.color) delete p[k].color;
    }
    return p;
  });
}

// Las palabras que todavia NO cuentan para el porcentaje: les faltan aciertos.
// Es lo que hace falta para cerrar un tema.
//
// pickCards ya prioriza, pero una palabra que YA sabes puntua 10-16 en cuanto
// le toca repaso, y una que no has visto nunca puntua 5. O sea que al 90% las
// que faltan pierden siempre contra las que ya cuentan, y cierras el tema a
// base de repetir lo que ya te sabes. Medido: unas 5 tandas (50 ejercicios)
// para cubrir las 4 ultimas palabras de un mazo de 45.
//
// Las que no has visto nunca van primero: son las que mas lejos estan.
export function cartasQueFaltan(deck) {
  if (!deck) return [];
  const p = progAll();
  return deck.cards
    .map((card) => ({ card, c: p[cardKey(deck.id, card.de)] }))
    .filter(({ c }) => (c?.correct || 0) < ACIERTOS_POR_PALABRA)
    .sort((a, b) => (a.c?.correct || 0) - (b.c?.correct || 0))
    .map(({ card }) => card);
}

export function soloQueFaltan(deck) {
  return deck ? { ...deck, cards: cartasQueFaltan(deck) } : null;
}

export function soloFallos(deck) {
  return deck ? { ...deck, cards: cartasFalladas(deck) } : null;
}

// Cuantos aciertos necesita una palabra para contar entera en el porcentaje.
// Eran 3, y con ~31 palabras por leccion salian 94 aciertos frente a los 36 de
// gramatica: el vocabulario tardaba 2,6 veces mas y la barra se arrastraba.
// Con 2 siguen siendo mas (63), que es justo —hay mas que aprender—, pero ya
// avanzan a un ritmo parecido.
const ACIERTOS_POR_PALABRA = 2;

export function deckStats(deck) {
  const p = progAll();
  let mastered = 0; // strength >= 4  → "dominada"
  let known = 0; // strength >= 3    → "la conoces"
  let learning = 0;
  let totalHits = 0;
  deck.cards.forEach((card) => {
    const c = p[cardKey(deck.id, card.de)];
    if (!c || c.correct + c.wrong === 0) return;
    if (c.strength >= 4) mastered += 1;
    if (c.correct > 0) known += 1;
    else learning += 1;
    totalHits += Math.min(ACIERTOS_POR_PALABRA, c.correct || 0);
  });
  const total = deck.cards.length;
  const requiredHits = Math.max(1, total) * ACIERTOS_POR_PALABRA;
  return {
    total,
    mastered,
    known,
    learning,
    fresh: total - known - learning,
    pct: Math.round((totalHits / requiredHits) * 100)
  };
}

// Resumen global de todo el vocabulario.
export function vocabOverall() {
  let total = 0;
  let known = 0;
  allDecks().forEach((d) => {
    const s = deckStats(d);
    total += s.total;
    known += s.known;
  });
  return { total, known, pct: Math.round((known / Math.max(1, total)) * 100) };
}

// Elige `size` tarjetas: primero las que tocan repasar / falladas, luego nuevas.
export function pickCards(deck, size = 12) {
  const p = progAll();
  const now = Date.now();
  const scored = deck.cards.map((card) => {
    const c = p[cardKey(deck.id, card.de)];
    let score;
    if (!c || c.correct + c.wrong === 0) score = 5; // nuevas: prioridad media
    else if (c.due <= now) score = 10 + (6 - c.strength); // toca repasar
    else score = -c.strength; // ya dominadas: al final
    return { card, score: score + Math.random() * 2 };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, Math.min(size, deck.cards.length)).map((x) => x.card);
}

// Los modos de juego son INTERFAZ, no contenido: van por t(). Es una funcion
// y no una constante para que al cambiar de idioma se recalculen.
export function vocabModes() {
  return [
    { id: 'flashcards', emoji: '🃏', label: t('vm.flashcards'), hint: t('vm.flashcardsHint') },
    { id: 'quiz', emoji: '✅', label: t('vm.quiz'), hint: t('vm.quizHint') },
    { id: 'write', emoji: '⌨️', label: t('vm.write'), hint: t('vm.writeHint') },
    { id: 'match', emoji: '🧩', label: t('vm.match'), hint: t('vm.matchHint') },
    { id: 'wortsalat', emoji: '🔤', label: 'Wortsalat', hint: t('vm.wortsalatHint') },
    { id: 'blitz', emoji: '⚡', label: 'Blitz', hint: t('vm.blitzHint') },
    { id: 'hangman', emoji: '🪢', label: t('vm.hangman'), hint: t('vm.hangmanHint') }
  ];
}

// Agrupación de los mazos de arranque para la pantalla de Vocabulario.
export function vocabSections() {
  return [
    { title: t('vsec.basico'), ids: ['zahlen', 'kalender', 'farben', 'familie', 'koerper'] },
    { title: t('vsec.temas'), ids: ['essen', 'tiere', 'stadt', 'kleidung', 'wetter', 'freizeit', 'technik'] },
    { title: t('vsec.situaciones'), ids: ['alltag', 'redemittel', 'restaurant', 'einkaufen', 'wohnen', 'arbeit', 'reisen', 'gesundheit'] },
    { title: t('vsec.tipo'), ids: ['verben_a2', 'verben', 'verbprep', 'adjektive', 'gegensaetze'] }
  ];
}

// ---------- Juego der/die/das: todos los sustantivos con artículo ----------
const GENDER_KEY = 'vocab:gender'; // { noun: { correct, wrong, strength, due } }

// Extrae {noun, article, es} de las tarjetas que SON un sustantivo con artículo.
// Acepta "die Frau" y "das Auge (die Augen)"; rechaza frases ("die Zähne putzen")
// y pares de género ambiguo ("der Freund / die Freundin").
// Dificultad por nivel del libro: no tenemos datos de frecuencia real, pero
// dónde aparece una palabra en el curso es una buena señal de lo rara que es.
export const GENDER_NIVELES = [
  { id: 'all', es: 'Todas', en: 'All', bands: null },
  { id: 'leicht', es: 'Fácil (A1.1)', en: 'Easy (A1.1)', bands: ['A1.1'] },
  { id: 'mittel', es: 'Medio (A1.2)', en: 'Medium (A1.2)', bands: ['A1.2'] },
  { id: 'schwer', es: 'Difícil (A2.1 y extra)', en: 'Hard (A2.1 and extra)', bands: ['A2.1', 'extra'] }
];

export function nounsByLevel(nivel = 'all') {
  const def = GENDER_NIVELES.find((n) => n.id === nivel);
  const pool = allNouns();
  if (!def || !def.bands) return pool;
  return pool.filter((x) => def.bands.includes(x.band));
}

export function allNouns() {
  const out = [];
  const seen = new Set();
  allDecks().forEach((d) => {
    d.cards.forEach((c) => {
      // Muchas tarjetas traen dos sustantivos en una: "der Arzt / die Ärztin",
      // "der Ort / die Stadt". Cada lado es una palabra que se puede preguntar,
      // así que se parten en vez de tirar la tarjeta entera.
      const trozosDe = String(c.de).split('/');
      const trozosEs = String(c.es || '').split('/');
      trozosDe.forEach((trozo, i) => {
        // Tras la coma va la marca de plural del diccionario ("die Birne, -n")
        // o un uso de ejemplo ("die Angst, Angst haben"). El sustantivo es la
        // cabeza; sin esto se perdían frutas, muebles y medio vocabulario.
        const parts = trozo.split(',')[0].trim().split(/\s+/);
        if (!['der', 'die', 'das'].includes(parts[0])) return;
        const isPlain = parts.length === 2;
        const isWithPlural = parts.length >= 3 && parts[2].startsWith('(');
        if (!isPlain && !isWithPlural) return;
        const noun = parts[1].replace(/[(),]/g, '');
        if (!/^[A-ZÄÖÜ][A-Za-zäöüß-]+$/.test(noun)) return;
        if (seen.has(noun)) return;
        seen.add(noun);
        // Si la traducción viene partida igual, se empareja lado con lado.
        const es =
          trozosDe.length === trozosEs.length ? trozosEs[i].trim() : String(c.es || '').trim();
        // De donde sale la palabra. Sin esto, der/die/das apuntaba en su
        // propio almacen y no movia el porcentaje de ningun mazo: jugabas y
        // la barra del tema no se enteraba.
        out.push({
          noun, article: parts[0], es,
          band: d.fromBook ? d.bandName : 'extra',
          deckId: d.id,
          cardDe: c.de
        });
      });
    });
  });
  return out;
}

function genderProg() {
  return storage.get(GENDER_KEY, {});
}

export function recordGender(noun, correct) {
  storage.update(GENDER_KEY, {}, (p) => {
    const c = { correct: 0, wrong: 0, strength: 0, due: 0, ...(p[noun] || {}) };
    const now = Date.now();
    if (correct) {
      c.correct += 1;
      c.strength = Math.min(6, c.strength + 1);
    } else {
      c.wrong += 1;
      c.strength = Math.max(0, c.strength - 1);
    }
    c.due = now + INTERVALS[Math.min(c.strength, INTERVALS.length - 1)];
    p[noun] = c;
    return p;
  });
}

const GENDER_LAST_KEY = 'vocab:gender:last'; // sustantivos de la sesión anterior

function shuffled(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Mezcla repaso y palabras nuevas. Antes las palabras "due" ganaban siempre
// (con strength 0-1 vuelven a tocar a los 30 s), así que salían las mismas una
// y otra vez: ahora el repaso ocupa como mucho el 40 % y se evita repetir la
// tanda anterior mientras quede material sin ver.
export function pickGenderNouns(size = 15, nivel = 'all') {
  const pool = nounsByLevel(nivel);
  if (!pool.length) return [];
  const p = genderProg();
  const now = Date.now();
  const last = new Set(storage.get(GENDER_LAST_KEY, []));

  const due = [];
  const fresh = [];
  const rest = [];
  for (const x of pool) {
    const c = p[x.noun];
    if (!c || c.correct + c.wrong === 0) fresh.push(x);
    else if (c.due <= now) due.push({ x, over: now - c.due, strength: c.strength });
    else rest.push(x);
  }

  // Descarta lo de la sesión anterior solo si queda material suficiente.
  const avoidLast = (arr) => {
    const f = arr.filter((n) => !last.has(n.noun));
    return f.length >= size ? f : arr;
  };

  const maxReview = Math.max(1, Math.round(size * 0.4));
  due.sort((a, b) => b.over - a.over || a.strength - b.strength);
  const out = due.slice(0, maxReview).map((o) => o.x);

  const add = (arr) => {
    for (const x of arr) {
      if (out.length >= size) break;
      if (!out.includes(x)) out.push(x);
    }
  };
  add(shuffled(avoidLast(fresh)));
  add(shuffled(avoidLast(rest)));
  add(shuffled(pool));

  const final = shuffled(out).slice(0, Math.min(size, pool.length));
  storage.set(GENDER_LAST_KEY, final.map((x) => x.noun));
  return final;
}

// `known` es DOMINADAS: fuerza 3 o mas, o sea tres aciertos netos. No es lo
// mismo que acertadas alguna vez, y la pantalla lo decia mal: con 31 aciertos
// repartidos entre 43 palabras seguia poniendo '0 acertados', porque los
// fallos bajan la fuerza y ninguna llegaba a 3. Ahora se devuelven las dos
// cifras y cada una se llama por su nombre.
export function genderStats(nivel = 'all') {
  const pool = nounsByLevel(nivel);
  const p = genderProg();
  let known = 0;
  let empezadas = 0;
  pool.forEach((x) => {
    const c = p[x.noun];
    if (!c || c.correct + c.wrong === 0) return;
    empezadas += 1;
    if (c.strength >= 3) known += 1;
  });
  return {
    total: pool.length,
    known,
    empezadas,
    pct: Math.round((known / Math.max(1, pool.length)) * 100)
  };
}
