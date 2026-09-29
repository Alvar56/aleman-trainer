// Lo que te contestan.
//
// Las frases del libro vienen sueltas: "Ich hätte gern mehr Zeit für meine
// Familie." Pero una frase de conversación no se usa sola, se usa porque
// alguien responde, y sin la respuesta no sabes si lo que acabas de aprender
// abre una puerta o la cierra.
//
// Va en un fichero aparte, con la frase alemana como clave, para no tocar los
// datos del libro: si un día cambia una frase, su respuesta deja de aplicarse
// sola y se ve que hay que revisarla.
//
// La glosa castellana se traduce al inglés por contenido/en.js, como el resto
// del contenido.
//
// De momento están las de A2.1, que son las 106 del nivel en curso. A1.1 y
// A1.2 se pueden ir añadiendo aquí mismo, sin tocar nada más.

import { tc } from '../contenido/index.js';

const RESPUESTAS = {
  // ---- Lektion 1: Weggehen & Ankommen -------------------------------------
  'Damals bin ich nach Österreich gekommen.':
    { de: 'Und wie war der Anfang?', es: '¿Y cómo fueron los principios?',
      mas: [
        { de: 'Schwierig. Ich kannte hier niemanden.', es: 'Difícil. Aquí no conocía a nadie.' },
        { de: 'Und heute? Hast du das Gefühl, angekommen zu sein?', es: '¿Y ahora? ¿Sientes que ya has llegado?' }
      ] },
  'Am Anfang war alles fremd für mich.':
    { de: 'Das glaube ich dir. Mir ging es genauso.', es: 'Te creo. A mí me pasó lo mismo.',
      mas: [
        { de: 'Wie lange hat es bei dir gedauert?', es: '¿A ti cuánto te duró?' },
        { de: 'Zwei Jahre. Dann war es auf einmal einfach mein Zuhause.', es: 'Dos años. Y de repente ya era mi casa.' }
      ] },
  'Mit der Zeit habe ich mich daran gewöhnt.':
    { de: 'Siehst du? Es wird immer leichter.', es: '¿Ves? Siempre se va haciendo más fácil.',
      mas: [
        { de: 'An manches aber immer noch nicht.', es: 'A algunas cosas todavía no.' },
        { de: 'Zum Beispiel?', es: '¿A cuáles?' }
      ] },
  'Und wie ging es dann weiter?':
    { de: 'Dann habe ich eine Arbeit gefunden.', es: 'Después encontré un trabajo.',
      mas: [
        { de: 'Sofort eine richtige Stelle?', es: '¿Un puesto de verdad ya?' },
        { de: 'Erst halbtags. Aber es war ein Anfang.', es: 'Primero a media jornada. Pero era un comienzo.' }
      ] },
  'Das kann ich gut verstehen.':
    { de: 'Danke, das hilft mir wirklich. Oft reicht es schon, gehört zu werden.', es: 'Gracias, eso me ayuda de verdad. A menudo basta con que te escuchen.',
      mas: [
        { de: 'Reden die Leute hier wenig über so etwas?', es: '¿Aquí la gente habla poco de estas cosas?' },
        { de: 'Am Anfang schon. Wenn sie dich kennen, dann doch.', es: 'Al principio sí. Cuando te conocen, ya no.' }
      ] },
  'Das tut mir leid für dich.':
    { de: 'Danke. Es geht schon wieder.', es: 'Gracias. Ya voy mejor.',
      mas: [
        { de: 'Brauchst du etwas? Ich habe morgen Zeit.', es: '¿Necesitas algo? Mañana tengo tiempo.' },
        { de: 'Ein Kaffee wäre schön. Reden hilft mehr als alles andere.', es: 'Un café estaría bien. Hablar ayuda más que nada.' }
      ] },
  'Wie hast du dich dabei gefühlt?':
    { de: 'Ehrlich gesagt ziemlich allein. Ich konnte mit niemandem darüber reden.', es: 'Sinceramente, bastante solo. No podía hablarlo con nadie.',
      mas: [
        { de: 'Und mit wem redest du heute darüber?', es: '¿Y hoy con quién lo hablas?' },
        { de: 'Mit zwei Leuten aus dem Kurs. Das reicht mir.', es: 'Con dos del curso. Me basta.' }
      ] },
  'Entschuldigung, ich meine …':
    { de: 'Kein Problem, sag es einfach noch einmal.', es: 'Sin problema, dilo otra vez.',
      mas: [
        { de: 'Ich meine nicht nächste Woche, sondern übernächste.', es: 'No me refiero a la semana que viene, sino a la otra.' },
        { de: 'Ah, dann passt es mir sogar besser.', es: 'Ah, entonces hasta me viene mejor.' }
      ] },
  'Nein, warte – das stimmt nicht ganz.':
    { de: 'Dann erklär es mir bitte.', es: 'Pues explícamelo.',
      mas: [
        { de: 'Ich habe drei Jahre dort gearbeitet, nicht fünf.', es: 'Trabajé allí tres años, no cinco.' },
        { de: 'Gut, dass du es sagst. Ich hatte es falsch im Kopf.', es: 'Menos mal que lo dices. Lo tenía mal en la cabeza.' }
      ] },
  'Also, noch einmal von vorne.':
    { de: 'Ja, das ist besser. Ich höre.', es: 'Sí, mejor. Te escucho.',
      mas: [
        { de: 'Ich rufe morgen an und sage dir Bescheid.', es: 'Llamo mañana y te digo algo.' },
        { de: 'Jetzt habe ich es. Danke für die Geduld.', es: 'Ahora sí lo pillo. Gracias por la paciencia.' }
      ] },

  // ---- Lektion 2: Die Einladung -------------------------------------------
  'Keine Sorge, das schaffst du!':
    { de: 'Hoffentlich hast du recht. Ich bin seit Tagen wahnsinnig nervös.', es: 'Ojalá tengas razón. Llevo días muy nervioso.',
      mas: [
        { de: 'Du hast doch alles vorbereitet, oder?', es: 'Lo has preparado todo, ¿no?' },
        { de: 'Schon. Aber beim Sprechen blockiere ich immer.', es: 'Sí. Pero al hablar siempre me bloqueo.' }
      ] },
  'An deiner Stelle würde ich …':
    { de: 'Meinst du? Daran habe ich nicht gedacht.', es: '¿Tú crees? No se me había ocurrido.',
      mas: [
        { de: 'Ich würde einfach anrufen und direkt fragen.', es: 'Yo llamaría y preguntaría directamente.' },
        { de: 'Stimmt. Schlimmstenfalls sagen sie nein.', es: 'Tienes razón. Como mucho dicen que no.' }
      ] },
  'Das ist doch halb so schlimm.':
    { de: 'Du hast ja recht. Ich mache mir zu viele Gedanken.', es: 'Tienes razón. Le doy demasiadas vueltas.',
      mas: [
        { de: 'Denk dran, letztes Mal lief es auch gut.', es: 'Acuérdate de que la última vez salió bien.' },
        { de: 'Das hatte ich ganz vergessen. Danke.', es: 'Se me había olvidado. Gracias.' }
      ] },
  'Bei uns isst man das ganz anders.':
    { de: 'Ach ja? Wie denn genau? Das würde mich wirklich interessieren.', es: '¿Ah sí? ¿Y cómo exactamente? Me interesaría de verdad.',
      mas: [
        { de: 'Bei uns kommt Zwiebel rein und kein Speck.', es: 'En mi tierra lleva cebolla y no panceta.' },
        { de: 'Das würde ich gern mal probieren.', es: 'Eso me gustaría probarlo.' }
      ] },
  'In Spanien gibt es das auch, aber mit Fisch.':
    { de: 'Das muss ich unbedingt probieren.', es: 'Eso lo tengo que probar.',
      mas: [
        { de: 'Ich koche es dir mal, wenn du magst.', es: 'Te lo cocino un día si quieres.' },
        { de: 'Sehr gern. Aber ich bringe den Nachtisch mit.', es: 'Con mucho gusto. Pero el postre lo llevo yo.' }
      ] },
  'Das kenne ich von zu Hause nicht.':
    { de: 'Dann wird es Zeit, oder?', es: 'Pues ya va siendo hora, ¿no?',
      mas: [
        { de: 'Wo probiert man das am besten?', es: '¿Dónde se prueba mejor?' },
        { de: 'Am Markt, dort gibt es die besten Stände.', es: 'En el mercado, allí están los mejores puestos.' }
      ] },
  'Wirklich? Das wusste ich nicht!':
    { de: 'Doch, das ist hier ganz normal.', es: 'Que sí, aquí es lo normal.',
      mas: [
        { de: 'Und seit wann ist das so?', es: '¿Y desde cuándo es así?' },
        { de: 'Seit ich denken kann. Hier macht das jeder so.', es: 'Desde que tengo uso de razón. Aquí lo hace todo el mundo.' }
      ] },
  'Das ist ja unglaublich!':
    { de: 'Ich habe es auch kaum geglaubt.', es: 'Yo tampoco me lo creía.' },
  'Echt jetzt?':
    { de: 'Ja, echt. Ich schwöre es dir, genau so ist es passiert.', es: 'Sí, en serio. Te lo juro, pasó exactamente así.',
      mas: [
        { de: 'Und was hast du dann gemacht?', es: '¿Y tú qué hiciste?' },
        { de: 'Gar nichts. Ich stand nur da und habe geschaut.', es: 'Nada. Me quedé ahí mirando.' }
      ] },
  'Ich möchte dich zum Essen einladen.':
    { de: 'Sehr gern! Wann passt es dir?', es: '¡Con mucho gusto! ¿Cuándo te viene bien?',
      mas: [
        { de: 'Samstag hätte ich Zeit, wenn es dir passt.', es: 'El sábado tendría tiempo, si te va bien.' },
        { de: 'Samstag ist gut. Magst du Fisch?', es: 'El sábado está bien. ¿Te gusta el pescado?' }
      ] },
  'Soll ich etwas mitbringen?':
    { de: 'Nur gute Laune. Alles andere habe ich schon.', es: 'Solo buen humor. Lo demás ya lo tengo.' },
  'Sehr gern, ich komme!':
    { de: 'Super, dann bis Samstag! Sag Bescheid, wenn du doch später kommst.', es: '¡Genial, hasta el sábado! Avisa si al final llegas más tarde.' },
  'Wir hätten gern die Speisekarte.':
    { de: 'Natürlich, einen Moment bitte. Die Tageskarte steht auch auf der Tafel.', es: 'Claro, un momento por favor. El menú del día está también en la pizarra.',
      mas: [
        { de: 'Was ist denn heute die Tagessuppe?', es: '¿Cuál es la sopa del día?' },
        { de: 'Kürbiscremesuppe. Die ist wirklich gut.', es: 'Crema de calabaza. Está muy buena.' }
      ] },
  'Ich nehme das Schnitzel mit Erdäpfelsalat.':
    { de: 'Gute Wahl. Und zu trinken?', es: 'Buena elección. ¿Y para beber?',
      mas: [
        { de: 'Ein großes Mineralwasser, bitte.', es: 'Una botella grande de agua mineral, por favor.' },
        { de: 'Kommt sofort. Möchten Sie schon einen Nachtisch aussuchen?', es: 'Ahora mismo. ¿Quiere ir eligiendo postre?' }
      ] },
  'Zahlen, bitte! – Getrennt oder zusammen?':
    { de: 'Zusammen, bitte. Ich lade dich ein.', es: 'Junto, por favor. Te invito.' },

  // ---- Lektion 3: Joggen ist super! ---------------------------------------
  'Wollen wir am Samstag joggen gehen?':
    { de: 'Gern, aber bitte nicht zu früh.', es: 'Vale, pero no muy temprano.' },
  'Super Idee, machen wir!':
    { de: 'Dann schreibe ich dir morgen.', es: 'Pues mañana te escribo.',
      mas: [
        { de: 'Schreib mir bitte am Vormittag, ich arbeite bis drei.', es: 'Escríbeme por la mañana, trabajo hasta las tres.' },
        { de: 'Alles klar, dann so gegen elf.', es: 'Vale, sobre las once entonces.' }
      ] },
  'Ja, gern. Wann treffen wir uns?':
    { de: 'Sagen wir um zehn vor dem Park?', es: '¿A las diez delante del parque?',
      mas: [
        { de: 'Zehn ist gut. Beim Haupteingang?', es: 'Las diez está bien. ¿En la entrada principal?' },
        { de: 'Ja, dort ist auch ein Brunnen, falls es warm wird.', es: 'Sí, allí hay una fuente por si hace calor.' }
      ] },
  'Da bin ich dabei!':
    { de: 'Perfekt, dann sind wir zu dritt.', es: 'Perfecto, entonces somos tres.',
      mas: [
        { de: 'Wer kommt denn noch mit?', es: '¿Quién más viene?' },
        { de: 'Meine Schwester. Sie läuft aber deutlich schneller als wir.', es: 'Mi hermana. Aunque corre bastante más que nosotros.' }
      ] },
  'Das ist nichts für mich.':
    { de: 'Schade. Und was machst du lieber?', es: 'Qué pena. ¿Y qué prefieres hacer?',
      mas: [
        { de: 'Schwimmen. Da tut mir hinterher nichts weh.', es: 'Nadar. Después no me duele nada.' },
        { de: 'Stimmt, das ist viel schonender für die Gelenke.', es: 'Es verdad, es mucho más suave para las articulaciones.' }
      ] },
  'Lieber ein anderes Mal.':
    { de: 'Alles klar, kein Stress. Ich frage dich nächste Woche einfach noch einmal.', es: 'Vale, sin agobios. La semana que viene te vuelvo a preguntar.',
      mas: [
        { de: 'Nächste Woche bin ich wieder da.', es: 'La semana que viene ya estoy.' },
        { de: 'Gut, dann planen wir gleich für Dienstag.', es: 'Bien, pues lo dejamos para el martes.' }
      ] },
  'Tut mir leid, da kann ich nicht.':
    { de: 'Kein Problem. Vielleicht nächste Woche?', es: 'No pasa nada. ¿Quizá la semana que viene?',
      mas: [
        { de: 'Nächste Woche gern, da habe ich frei.', es: 'La que viene sí, tengo libre.' },
        { de: 'Super. Dann sage ich den anderen Bescheid.', es: 'Genial. Pues se lo digo a los demás.' }
      ] },
  'Joggen ist super, aber das Fitnessstudio finde ich langweilig.':
    { de: 'Da bin ich ganz deiner Meinung.', es: 'Estoy totalmente de acuerdo.',
      mas: [
        { de: 'Draußen sieht man wenigstens etwas.', es: 'Fuera al menos ves algo.' },
        { de: 'Genau. Im Studio starre ich nur an die Wand.', es: 'Exacto. En el gimnasio solo miro la pared.' }
      ] },
  'Das ist mir zu anstrengend.':
    { de: 'Am Anfang ja, aber man gewöhnt sich daran.', es: 'Al principio sí, pero te acostumbras.',
      mas: [
        { de: 'Wie lange hat es bei dir gedauert?', es: '¿A ti cuánto te costó?' },
        { de: 'Drei Wochen. Danach habe ich es sogar vermisst.', es: 'Tres semanas. Después hasta lo echaba de menos.' }
      ] },
  'Ich finde das ziemlich gesund.':
    { de: 'Stimmt, und es macht auch Spaß.', es: 'Es verdad, y además es divertido.',
      mas: [
        { de: 'Und man schläft danach viel besser.', es: 'Y después se duerme mucho mejor.' },
        { de: 'Das merke ich auch, besonders im Winter.', es: 'Eso lo noto yo también, sobre todo en invierno.' }
      ] },
  'Ich mag Mannschaftssport lieber als Einzelsport.':
    { de: 'Dann spiel doch bei uns mit!', es: '¡Pues juega con nosotros!',
      mas: [
        { de: 'Wann trainiert ihr denn?', es: '¿Y cuándo entrenáis?' },
        { de: 'Dienstag und Donnerstag, immer um halb acht.', es: 'Martes y jueves, siempre a las siete y media.' }
      ] },
  'Am liebsten trainiere ich früh am Morgen.':
    { de: 'Um die Zeit schlafe ich noch.', es: 'A esa hora yo aún duermo.',
      mas: [
        { de: 'Dafür habe ich den ganzen Tag Ruhe.', es: 'A cambio tengo el día entero tranquilo.' },
        { de: 'Das stimmt schon. Aber aufstehen könnte ich nie.', es: 'Eso es verdad. Pero levantarme no podría.' }
      ] },

  // ---- Lektion 4: Der erste Arbeitstag ------------------------------------
  'Darf ich mich vorstellen? Mein Name ist …':
    { de: 'Freut mich sehr. Herzlich willkommen!', es: 'Encantado. ¡Bienvenido!',
      mas: [
        { de: 'Ich fange heute in der Buchhaltung an.', es: 'Empiezo hoy en contabilidad.' },
        { de: 'Dann sind wir Nachbarn, mein Büro ist gleich daneben.', es: 'Pues somos vecinos, mi despacho está al lado.' }
      ] },
  'Das ist Frau Berger, unsere neue Kollegin.':
    { de: 'Guten Tag, Frau Berger. Schön, Sie hier zu haben.', es: 'Buenos días, señora Berger. Me alegro de tenerla aquí.',
      mas: [
        { de: 'Wenn Sie etwas brauchen, fragen Sie einfach.', es: 'Si necesita algo, no dude en preguntar.' },
        { de: 'Danke, darauf komme ich bestimmt zurück.', es: 'Gracias, seguro que se lo tomo en palabra.' }
      ] },

  'Ich bin für die Buchhaltung zuständig.':
    { de: 'Ah, dann arbeiten wir sicher öfter zusammen.', es: 'Ah, entonces coincidiremos a menudo.' },
  'Entschuldigung, das habe ich nicht verstanden.':
    { de: 'Kein Problem, ich sage es noch einmal.', es: 'Sin problema, lo repito.' },
  'Können Sie das bitte noch einmal erklären?':
    { de: 'Natürlich. Also, ganz von vorne …', es: 'Por supuesto. A ver, desde el principio…',
      mas: [
        { de: 'Jetzt ist es klar. Danke für die Geduld.', es: 'Ahora sí lo veo. Gracias por la paciencia.' },
        { de: 'Kein Problem. Lieber zweimal fragen als einmal falsch machen.', es: 'No pasa nada. Mejor preguntar dos veces que hacerlo mal una.' }
      ] },
  'Was bedeutet das genau?':
    { de: 'Das heißt, wir fangen um acht an.', es: 'Quiere decir que empezamos a las ocho.' },
  'Habe ich das richtig verstanden: …?':
    { de: 'Genau, so ist es. Melden Sie sich, wenn doch etwas unklar bleibt.', es: 'Exacto, así es. Avíseme si algo sigue sin quedar claro.' },

  // ---- Lektion 5: In der Schule -------------------------------------------
  'Das ist mir egal.':
    { de: 'Dann entscheide ich einfach. Beschwer dich nachher nicht!', es: 'Pues decido yo. ¡Luego no te quejes!',
      mas: [
        { de: 'Na gut, dann sag ich doch was: lieber der Nachmittag.', es: 'Vale, pues sí digo algo: mejor por la tarde.' },
        { de: 'Siehst du, es war dir doch nicht egal.', es: '¿Ves? Sí que te daba igual.' }
      ] },
  'Mir ist beides recht.':
    { de: 'Gut, dann nehmen wir das erste.', es: 'Bien, pues el primero.',
      mas: [
        { de: 'Aber wenn es regnet, lieber drinnen.', es: 'Pero si llueve, mejor dentro.' },
        { de: 'Klar. Ich schaue morgen früh auf das Wetter.', es: 'Claro. Mañana miro el tiempo.' }
      ] },
  'Wie du willst.':
    { de: 'Nein, sag du es. Ich will dich nicht überreden.', es: 'No, dilo tú. No te quiero convencer.',
      mas: [
        { de: 'Dann sage ich es: lieber später.', es: 'Pues lo digo: mejor más tarde.' },
        { de: 'Perfekt. Genau das wollte ich wissen.', es: 'Perfecto. Eso es justo lo que quería saber.' }
      ] },
  'Können Sie bitte langsamer sprechen?':
    { de: 'Ja, natürlich. Entschuldigung, ich rede oft zu schnell.', es: 'Sí, claro. Perdone, hablo muy rápido a menudo.',
      mas: [
        { de: 'Jetzt verstehe ich Sie gut.', es: 'Ahora le entiendo bien.' },
        { de: 'Sagen Sie es ruhig wieder, wenn ich schneller werde.', es: 'Dígamelo otra vez si vuelvo a acelerar.' }
      ] },
  'Soll ich es Ihnen aufschreiben?':
    { de: 'Ja bitte, das wäre super.', es: 'Sí, por favor, sería genial.',
      mas: [
        { de: 'Vor allem die Namen und die Uhrzeit.', es: 'Sobre todo los nombres y la hora.' },
        { de: 'Mache ich. Ich gebe es Ihnen gleich mit.', es: 'Lo hago. Se lo doy ahora mismo.' }
      ] },
  'Ich erkläre es Ihnen gern noch einmal.':
    { de: 'Das ist sehr nett von Ihnen.', es: 'Es muy amable por su parte.',
      mas: [
        { de: 'Es ist mir ein bisschen unangenehm zu fragen.', es: 'Me da un poco de apuro preguntar.' },
        { de: 'Das muss es nicht. Mir ist eine Frage lieber als ein Missverständnis.', es: 'No hace falta. Prefiero una pregunta a un malentendido.' }
      ] },
  'Ich bin mir nicht sicher.':
    { de: 'Dann fragen wir lieber nach.', es: 'Pues mejor preguntamos.',
      mas: [
        { de: 'Wen fragen wir am besten?', es: '¿A quién preguntamos mejor?' },
        { de: 'Die Klassenlehrerin. Sie weiß so etwas immer.', es: 'A la tutora. Esas cosas siempre las sabe.' }
      ] },
  'Ich glaube schon, aber ich weiß es nicht genau.':
    { de: 'Wir schauen einfach nach. Das Mitteilungsheft liegt in der Schultasche.', es: 'Lo miramos y ya está. El cuaderno de notas está en la mochila.',
      mas: [
        { de: 'Hier steht es: Ausflug am Freitag.', es: 'Aquí está: excursión el viernes.' },
        { de: 'Gut, dass wir nachgeschaut haben.', es: 'Menos mal que lo hemos mirado.' }
      ] },
  'Vielleicht, das kann ich nicht sagen.':
    { de: 'Kein Problem, ich frage jemand anderen.', es: 'No pasa nada, pregunto a otra persona.',
      mas: [
        { de: 'Ich frage heute Abend zu Hause nach.', es: 'Lo pregunto esta noche en casa.' },
        { de: 'Danke. Dann warten wir damit bis morgen.', es: 'Gracias. Pues lo dejamos para mañana.' }
      ] },

  // ---- Lektion 6: Feierabend ----------------------------------------------
  'Komm schon, das wird bestimmt lustig!':
    { de: 'Na gut, du hast mich überredet.', es: 'Está bien, me has convencido.',
      mas: [
        { de: 'Aber ich bleibe nicht bis zwei Uhr nachts.', es: 'Pero no me quedo hasta las dos.' },
        { de: 'Abgemacht. Um zwölf gehen wir beide.', es: 'Hecho. A las doce nos vamos los dos.' }
      ] },
  'Nur eine Folge, bitte!':
    { de: 'Das sagst du jedes Mal!', es: '¡Eso dices siempre!',
      mas: [
        { de: 'Diesmal meine ich es ernst.', es: 'Esta vez lo digo en serio.' },
        { de: 'Dann stelle ich den Wecker auf eine Stunde.', es: 'Pues pongo la alarma en una hora.' }
      ] },
  'Sei doch nicht so!':
    { de: 'Ist ja gut, ich komme mit.', es: 'Vale, vale, me apunto.',
      mas: [
        { de: 'Aber wir gehen früh, ja?', es: 'Pero nos vamos pronto, ¿eh?' },
        { de: 'Klar. Ich muss morgen auch um sechs raus.', es: 'Claro. Yo también me levanto a las seis.' }
      ] },
  'Ich verspreche dir, dass ich morgen früh aufstehe.':
    { de: 'Das will ich sehen! Stell dir lieber gleich zwei Wecker.', es: '¡Eso quiero verlo! Ponte mejor dos despertadores.',
      mas: [
        { de: 'Zwei sind schon gestellt, einer im Bad.', es: 'Ya tengo dos puestos, uno en el baño.' },
        { de: 'Im Bad? Das ist die einzige Methode, die bei dir wirkt.', es: '¿En el baño? Es lo único que te funciona.' }
      ] },
  'Versprochen? – Versprochen!':
    { de: 'Gut, ich verlasse mich auf dich.', es: 'Bien, cuento contigo.',
      mas: [
        { de: 'Diesmal enttäusche ich dich nicht.', es: 'Esta vez no te fallo.' },
        { de: 'Das hoffe ich. Sonst gehe ich allein.', es: 'Eso espero. Si no, voy sola.' }
      ] },
  'Darauf kannst du dich verlassen.':
    { de: 'Danke, das beruhigt mich sehr. Dann sage ich den anderen Bescheid.', es: 'Gracias, eso me tranquiliza mucho. Entonces aviso a los demás.' },
  'Meiner Meinung nach ist die Serie überbewertet.':
    { de: 'Da bin ich anderer Meinung.', es: 'Yo opino lo contrario.',
      mas: [
        { de: 'Mir ist sie einfach zu langsam.', es: 'A mí se me hace muy lenta.' },
        { de: 'Das stimmt, aber genau das mag ich daran.', es: 'Es verdad, pero eso es lo que me gusta.' }
      ] },
  'Ich finde, dass …':
    { de: 'Interessant. Warum siehst du das so?', es: 'Interesante. ¿Por qué lo ves así?',
      mas: [
        { de: 'Weil das Ende einfach nicht passt.', es: 'Porque el final no encaja.' },
        { de: 'Da hast du vielleicht recht. Darüber habe ich nicht nachgedacht.', es: 'Quizá tengas razón. No lo había pensado.' }
      ] },
  'Er sagt, dass er lieber Dokus schaut.':
    { de: 'Typisch! Er sieht nie etwas Lustiges.', es: '¡Típico! Nunca ve nada divertido.',
      mas: [
        { de: 'Er hat mir eine über Wien empfohlen.', es: 'Me recomendó una sobre Viena.' },
        { de: 'Die kenne ich. Die ist wirklich gut gemacht.', es: 'Esa la conozco. Está muy bien hecha.' }
      ] },
  'Wie viel Zeit verbringst du am Handy?':
    { de: 'Zu viel, ehrlich gesagt. Die App zeigt mir jeden Sonntag drei Stunden.', es: 'Demasiado, sinceramente. La aplicación me marca tres horas cada domingo.',
      mas: [
        { de: 'Drei Stunden? Bei mir sind es vier.', es: '¿Tres horas? Yo tengo cuatro.' },
        { de: 'Dann sind wir beide verloren.', es: 'Pues estamos los dos perdidos.' }
      ] },
  'Ich schaue kaum fern, aber ich höre viele Podcasts.':
    { de: 'Welchen kannst du empfehlen? Am liebsten etwas auf einfachem Deutsch.', es: '¿Cuál me recomiendas? Preferiblemente algo en alemán sencillo.',
      mas: [
        { de: 'Es gibt einen für Deutschlernende, zehn Minuten am Tag.', es: 'Hay uno para quien aprende alemán, diez minutos al día.' },
        { de: 'Zehn Minuten schaffe ich. Schick ihn mir bitte.', es: 'Diez minutos los saco. Mándamelo.' }
      ] },
  'Am Abend lese ich lieber.':
    { de: 'Und was liest du gerade?', es: '¿Y qué estás leyendo?',
      mas: [
        { de: 'Einen Krimi, auf Deutsch. Langsam, aber es geht.', es: 'Una novela policíaca, en alemán. Despacio, pero va.' },
        { de: 'Respekt. Ich lese immer noch auf Spanisch.', es: 'Respeto. Yo sigo leyendo en español.' }
      ] },

  // ---- Lektion 7: Der Umzug -----------------------------------------------
  'Na gut, von mir aus.':
    { de: 'Du klingst nicht sehr begeistert.', es: 'No suenas muy convencido.',
      mas: [
        { de: 'Ich bin einfach müde, mehr nicht.', es: 'Es que estoy cansada, nada más.' },
        { de: 'Dann machen wir es kurz und du gehst früh heim.', es: 'Pues lo hacemos rápido y te vas pronto a casa.' }
      ] },
  'Hmm, ich weiß nicht so recht …':
    { de: 'Überleg es dir in Ruhe.', es: 'Piénsalo con calma.',
      mas: [
        { de: 'Sag mir morgen Bescheid, ja?', es: 'Dime algo mañana, ¿vale?' },
        { de: 'Mache ich. Bis dahin habe ich es mir überlegt.', es: 'Lo haré. Para entonces ya lo habré pensado.' }
      ] },
  'Lieber nicht, ehrlich gesagt.':
    { de: 'Alles klar, dann lassen wir das.', es: 'Vale, pues lo dejamos.',
      mas: [
        { de: 'Nimmst du es mir übel?', es: '¿Te lo tomas a mal?' },
        { de: 'Überhaupt nicht. Lieber ehrlich als halbherzig.', es: 'Para nada. Mejor sincero que a medias.' }
      ] },
  'Klar, mache ich!':
    { de: 'Danke, du rettest mich. Ohne dich säße ich bis Mitternacht hier.', es: 'Gracias, me salvas. Sin ti estaría aquí hasta medianoche.',
      mas: [
        { de: 'Bis wann brauchst du es?', es: '¿Para cuándo lo necesitas?' },
        { de: 'Heute Abend würde reichen.', es: 'Con esta tarde bastaría.' }
      ] },
  'Das übernehme ich.':
    { de: 'Perfekt, dann kümmere ich mich um den Rest.', es: 'Perfecto, yo me ocupo del resto.',
      mas: [
        { de: 'Sag mir nur, wo die Schrauben sind.', es: 'Dime solo dónde están los tornillos.' },
        { de: 'In der blauen Kiste, ganz unten.', es: 'En la caja azul, abajo del todo.' }
      ] },
  'Geht in Ordnung.':
    { de: 'Super, danke dir! Du hast mir sehr geholfen.', es: '¡Genial, gracias! Me has ayudado mucho.',
      mas: [
        { de: 'Kein Thema, dafür sind Freunde da.', es: 'No hay de qué, para eso están los amigos.' },
        { de: 'Nächstes Mal helfe ich dir, versprochen.', es: 'La próxima te ayudo yo, prometido.' }
      ] },
  'Vorsicht, das ist schwer!':
    { de: 'Warte, ich helfe dir. Nimm du vorne, ich gehe rückwärts.', es: 'Espera, te ayudo. Coge tú por delante, yo voy hacia atrás.',
      mas: [
        { de: 'Bei der Tür müssen wir kippen.', es: 'En la puerta hay que inclinarlo.' },
        { de: 'Warte, ich gehe zuerst und sage dir Bescheid.', es: 'Espera, voy primero y te aviso.' }
      ] },
  'Pass auf, nicht fallen lassen!':
    { de: 'Keine Sorge, ich habe es fest.', es: 'Tranquilo, lo tengo bien agarrado.',
      mas: [
        { de: 'Meine Finger rutschen ein bisschen.', es: 'Se me resbalan un poco los dedos.' },
        { de: 'Stell es kurz ab, wir greifen neu.', es: 'Déjalo un momento y lo cogemos otra vez.' }
      ] },
  'Langsam, langsam!':
    { de: 'Ja, ja, ich gebe mir Mühe!', es: '¡Que sí, que voy con cuidado!',
      mas: [
        { de: 'Noch zwei Stufen, dann sind wir oben.', es: 'Dos escalones más y estamos arriba.' },
        { de: 'Endlich. Das war das schwerste Stück.', es: 'Por fin. Eso era lo más pesado.' }
      ] },
  'Das Sofa kommt an die Wand und der Tisch in die Mitte.':
    { de: 'Und wohin mit dem Regal?', es: '¿Y la estantería dónde?',
      mas: [
        { de: 'Zwischen Fenster und Tür, da stört es nicht.', es: 'Entre la ventana y la puerta, ahí no estorba.' },
        { de: 'Gute Idee. Dann bleibt der Durchgang frei.', es: 'Buena idea. Así el paso queda libre.' }
      ] },
  'Stell das Regal bitte neben die Tür.':
    { de: 'So? Oder ein bisschen weiter rechts?', es: '¿Así? ¿O un poco más a la derecha?',
      mas: [
        { de: 'Ein bisschen weiter, sonst geht die Tür nicht auf.', es: 'Un poco más allá, si no la puerta no abre.' },
        { de: 'Jetzt passt es. So bleibt es stehen.', es: 'Ahora sí. Así se queda.' }
      ] },
  'Das ist mir sehr wichtig.':
    { de: 'Dann machen wir das zuerst.', es: 'Pues lo hacemos primero.',
      mas: [
        { de: 'Vor allem, dass die Küche funktioniert.', es: 'Sobre todo que la cocina funcione.' },
        { de: 'Verstehe. Dann bauen wir zuerst den Herd an.', es: 'Entiendo. Pues conectamos primero la cocina.' }
      ] },
  'Hauptsache, es ist bis Freitag fertig.':
    { de: 'Das schaffen wir locker, wenn morgen noch jemand mithilft.', es: 'Eso lo sacamos de sobra si mañana alguien más echa una mano.',
      mas: [
        { de: 'Meine Schwester kommt am Samstag zu Besuch.', es: 'Mi hermana viene de visita el sábado.' },
        { de: 'Dann ist bis Freitag alles an seinem Platz, versprochen.', es: 'Pues para el viernes está todo en su sitio, prometido.' }
      ] },

  // ---- Lektion 8: Unterwegs -----------------------------------------------
  'Wann fährt der nächste Zug nach Salzburg?':
    { de: 'Um 14:20 Uhr, von Gleis drei.', es: 'A las 14:20, del andén tres.',
      mas: [
        { de: 'Gleis drei ist im Untergeschoss, oder?', es: 'La vía tres está abajo, ¿no?' },
        { de: 'Ja, die Rolltreppe gleich links hinter Ihnen.', es: 'Sí, la escalera mecánica justo detrás a la izquierda.' }
      ] },
  'Muss ich umsteigen? – Ja, in Linz.':
    { de: 'Und wie lange habe ich dort Zeit?', es: '¿Y cuánto tiempo tengo allí?',
      mas: [
        { de: 'Zwölf Minuten, gleicher Bahnsteig.', es: 'Doce minutos, mismo andén.' },
        { de: 'Das reicht knapp. Bleiben Sie vorne im Zug.', es: 'Va justo. Quédese en la parte delantera del tren.' }
      ] },
  'Von welchem Gleis fährt der Zug ab?':
    { de: 'Von Gleis sieben, ganz hinten.', es: 'Del andén siete, al fondo.' },
  'Könnten Sie mir bitte helfen?':
    { de: 'Aber gern, was brauchen Sie?', es: 'Claro, ¿qué necesita?',
      mas: [
        { de: 'Ich finde meinen Wagen nicht.', es: 'No encuentro mi vagón.' },
        { de: 'Zeigen Sie mir das Ticket. Wagen sieben ist ganz vorne.', es: 'Enséñeme el billete. El vagón siete está delante del todo.' }
      ] },
  'Aber gern! · Kein Problem.':
    { de: 'Vielen Dank, das ist wirklich sehr nett von Ihnen.', es: 'Muchas gracias, es usted muy amable.',
      mas: [
        { de: 'Ohne Sie hätte ich den Zug verpasst.', es: 'Sin usted habría perdido el tren.' },
        { de: 'Das wäre schade gewesen. Gute Fahrt!', es: 'Habría sido una pena. ¡Buen viaje!' }
      ] },
  'Würden Sie so nett sein und …?':
    { de: 'Selbstverständlich. Sagen Sie mir einfach, was Sie brauchen.', es: 'Por supuesto. Dígame sin más qué necesita.',
      mas: [
        { de: 'Könnten Sie kurz auf meinen Koffer schauen?', es: '¿Me vigila la maleta un momento?' },
        { de: 'Natürlich. Lassen Sie sich Zeit.', es: 'Por supuesto. Tómese su tiempo.' }
      ] },
  'Entschuldigung, ist der Platz noch frei?':
    { de: 'Ja, setzen Sie sich ruhig.', es: 'Sí, siéntese tranquilo.',
      mas: [
        { de: 'Danke. Stört es Sie, wenn ich telefoniere?', es: 'Gracias. ¿Le molesta si hablo por teléfono?' },
        { de: 'Das ist hier ein Ruheabteil. Draußen im Gang geht es.', es: 'Esto es un vagón silencioso. En el pasillo sí puede.' }
      ] },
  'Ja, bitte sehr. / Nein, der ist leider besetzt.':
    { de: 'Danke, dann suche ich weiter.', es: 'Gracias, sigo buscando.',
      mas: [
        { de: 'Ist weiter vorne noch etwas frei?', es: '¿Queda algo libre más adelante?' },
        { de: 'Im nächsten Wagen war noch viel Platz.', es: 'En el siguiente vagón había bastante sitio.' }
      ] },
  'Gute Reise! · Gute Fahrt!':
    { de: 'Danke gleichfalls! Fahr vorsichtig, die Straßen sind heute sehr glatt.', es: '¡Gracias, igualmente! Conduce con cuidado, hoy las carreteras resbalan mucho.',
      mas: [
        { de: 'Ich fahre mit dem Zug, da ist mir das egal.', es: 'Voy en tren, así que eso me da igual.' },
        { de: 'Stimmt, viel klüger bei dem Wetter.', es: 'Es verdad, mucho más listo con este tiempo.' }
      ] },
  'Schönen Aufenthalt!':
    { de: 'Vielen Dank, das ist lieb.', es: 'Muchas gracias, qué amable.',
      mas: [
        { de: 'Ich bleibe nur zwei Nächte.', es: 'Me quedo solo dos noches.' },
        { de: 'Dann machen Sie gleich morgen den Stadtspaziergang.', es: 'Pues haga el paseo por la ciudad mañana mismo.' }
      ] },
  'Kommen Sie gut an!':
    { de: 'Danke, bis bald! Ich schreibe Ihnen, wenn ich da bin.', es: '¡Gracias, hasta pronto! Le escribo cuando llegue.',
      mas: [
        { de: 'Ich melde mich, sobald ich im Hotel bin.', es: 'Le aviso en cuanto llegue al hotel.' },
        { de: 'Machen Sie das. Und ruhen Sie sich erst einmal aus.', es: 'Hágalo. Y descanse primero.' }
      ] },
  'Gehen Sie geradeaus bis zur Brücke, dann links.':
    { de: 'Geradeaus und dann links. Danke!', es: 'Recto y luego a la izquierda. ¡Gracias!',
      mas: [
        { de: 'Und wie weit ist es ungefähr?', es: '¿Y a qué distancia está más o menos?' },
        { de: 'Fünf Minuten. Sie sehen den Turm schon von der Brücke.', es: 'Cinco minutos. Desde el puente ya ve la torre.' }
      ] },
  'Das ist gleich um die Ecke.':
    { de: 'Oh, dann finde ich es sicher.', es: 'Ah, entonces seguro que lo encuentro.',
      mas: [
        { de: 'Rechts oder links um die Ecke?', es: '¿A la derecha o a la izquierda?' },
        { de: 'Rechts, direkt neben der Apotheke.', es: 'A la derecha, justo al lado de la farmacia.' }
      ] },
  'Es sind ungefähr zehn Minuten zu Fuß.':
    { de: 'Perfekt, dann gehe ich zu Fuß.', es: 'Perfecto, pues voy andando.',
      mas: [
        { de: 'Ist der Weg gut beschildert?', es: '¿El camino está bien señalizado?' },
        { de: 'Ab dem Platz schon. Vorher einfach der Hauptstraße folgen.', es: 'Desde la plaza sí. Antes siga la calle principal.' }
      ] },
  'Ich habe ein Zimmer auf den Namen … reserviert.':
    { de: 'Einen Moment bitte … ja, hier ist es.', es: 'Un momento… sí, aquí está.',
      mas: [
        { de: 'Ist das Zimmer ruhig? Ich schlafe schlecht bei Lärm.', es: '¿Es una habitación tranquila? Duermo mal con ruido.' },
        { de: 'Es liegt zum Hof hinaus. Ruhiger geht es nicht.', es: 'Da al patio. Más tranquila imposible.' }
      ] },
  'Um wie viel Uhr gibt es Frühstück?':
    { de: 'Von sieben bis zehn Uhr.', es: 'De siete a diez.',
      mas: [
        { de: 'Geht es auch früher? Mein Zug fährt um halb sieben.', es: '¿Se puede antes? Mi tren sale a las seis y media.' },
        { de: 'Dann richten wir Ihnen etwas zum Mitnehmen her.', es: 'Pues le preparamos algo para llevar.' }
      ] },
  'Ich würde gern auschecken.':
    { de: 'Gern. Hat alles gepasst, oder gab es etwas zu bemängeln?', es: 'Con gusto. ¿Ha estado todo bien o hubo algo que objetar?' },

  // ---- A1.1 Start: Wie geht's? -------------------------------------------
  'Wie geht\'s? – Danke, gut. Und dir?':
    { de: 'Auch gut, danke. Ein bisschen müde, aber sonst alles super.', es: 'Bien también, gracias. Un poco cansado, pero por lo demás todo bien.',
      mas: [
        { de: 'Bist du fertig mit den Hausaufgaben?', es: '¿Has terminado los deberes?' },
        { de: 'Fast, mir fehlt nur die letzte Übung.', es: 'Casi, me falta solo el último ejercicio.' }
      ] },
  'Wie geht es Ihnen? – Danke, sehr gut.':
    { de: 'Das freut mich. Und wie läuft es in der Arbeit?', es: 'Me alegro. ¿Y cómo va el trabajo?',
      mas: [
        { de: 'Viel zu tun, aber es macht Spaß.', es: 'Mucho trabajo, pero me gusta.' },
        { de: 'Das ist die beste Kombination.', es: 'Esa es la mejor combinación.' }
      ] },
  'Nicht so gut.':
    { de: 'Oh, was ist denn los? Setz dich kurz, ich hole dir ein Wasser.', es: 'Vaya, ¿qué pasa? Siéntate un momento, te traigo un agua.',
      mas: [
        { de: 'Ich bin müde, ich habe schlecht geschlafen.', es: 'Estoy cansado, he dormido mal.' },
        { de: 'Dann trink einen Kaffee in der Pause.', es: 'Pues tómate un café en la pausa.' }
      ] },
  'Es geht.':
    { de: 'Na ja, das kenne ich.', es: 'Bueno, eso me suena.' },
  'Wie heißt du? – Ich heiße Nuria.':
    { de: 'Freut mich, Nuria! Schön, dass du da bist.', es: '¡Encantado, Nuria! Me alegro de que estés aquí.',
      mas: [
        { de: 'Und wie heißt du?', es: '¿Y tú cómo te llamas?' },
        { de: 'Ich heiße Jonas. Ich sitze hinter dir.', es: 'Me llamo Jonas. Me siento detrás de ti.' }
      ] },
  'Wie heißen Sie? – Mein Name ist Gruber.':
    { de: 'Angenehm, Frau Gruber. Ich bin Nuria, die neue Kollegin.', es: 'Mucho gusto, señora Gruber. Soy Nuria, la compañera nueva.',
      mas: [
        { de: 'Freut mich, Nuria. Woher kommen Sie?', es: 'Encantada, Nuria. ¿De dónde es usted?' },
        { de: 'Aus Spanien, aus Valencia.', es: 'De España, de Valencia.' }
      ] },
  'Wie ist dein Vorname?':
    { de: 'Mein Vorname ist Leon, mit e-o, nicht mit i. Das schreiben viele falsch.', es: 'Me llamo Leon, con e-o, no con i. Mucha gente lo escribe mal.',
      mas: [
        { de: 'Und dein Familienname?', es: '¿Y tu apellido?' },
        { de: 'Meier, mit E-I.', es: 'Meier, con E-I.' }
      ] },
  'Wie bitte? Können Sie das wiederholen?':
    { de: 'Ja, natürlich. Ich sage es noch einmal, diesmal langsamer und lauter.', es: 'Sí, claro. Lo digo otra vez, esta vez más despacio y más alto.',
      mas: [
        { de: 'Jetzt habe ich es verstanden, danke.', es: 'Ahora sí lo he entendido, gracias.' },
        { de: 'Sehr gut. Fragen Sie immer, wenn etwas zu schnell geht.', es: 'Muy bien. Pregunte siempre que algo vaya muy rápido.' }
      ] },
  'Was heißt „Tafel“ auf Spanisch?':
    { de: '„Tafel“ heißt „pizarra“. Schreib es dir am besten auf.', es: '«Tafel» significa «pizarra». Mejor apúntatelo.' },
  'Wie sagt man das auf Deutsch?':
    { de: 'Auf Deutsch sagt man „die Pause“.', es: 'En alemán se dice «die Pause».' },
  'Ich verstehe das nicht.':
    { de: 'Kein Problem, ich erkläre es noch einmal.', es: 'No pasa nada, lo explico otra vez.',
      mas: [
        { de: 'Können Sie ein Beispiel geben?', es: '¿Puede poner un ejemplo?' },
        { de: 'Ja: „Ich fahre mit dem Bus.“', es: 'Sí: «Ich fahre mit dem Bus».' }
      ] },
  'Langsamer, bitte!':
    { de: 'Entschuldigung, ich rede zu schnell.', es: 'Perdona, hablo muy rápido.',
      mas: [
        { de: 'Jetzt verstehe ich es gut.', es: 'Ahora lo entiendo bien.' },
        { de: 'Sehr gut, dann machen wir weiter.', es: 'Muy bien, entonces seguimos.' }
      ] },
  'Danke schön! – Bitte schön!':
    { de: 'Gern geschehen. Frag ruhig wieder, wenn du etwas brauchst.', es: 'Un placer. Pregunta otra vez si necesitas algo.',
      mas: [
        { de: 'Ohne dich hätte ich das Formular nicht verstanden.', es: 'Sin ti no habría entendido el formulario.' },
        { de: 'Die Formulare versteht am Anfang niemand.', es: 'Los formularios no los entiende nadie al principio.' }
      ] },
  'Vielen Dank für die Hilfe.':
    { de: 'Nichts zu danken. Das mache ich doch gern.', es: 'No hay de qué. Lo hago con gusto.',
      mas: [
        { de: 'Darf ich dich morgen wieder fragen?', es: '¿Te puedo preguntar otra vez mañana?' },
        { de: 'Jederzeit. Ich sitze immer hier vorne.', es: 'Cuando quieras. Siempre estoy aquí delante.' }
      ] },
  'Entschuldigung, ich bin zu spät.':
    { de: 'Kein Problem, setz dich einfach. Wir sind gerade erst bei Übung eins.', es: 'No pasa nada, siéntate. Acabamos de empezar el ejercicio uno.',
      mas: [
        { de: 'Mein Bus hatte Verspätung.', es: 'Mi autobús venía con retraso.' },
        { de: 'Das passiert. Wir sind auf Seite 12.', es: 'Pasa. Vamos por la página 12.' }
      ] },
  'Es tut mir leid.':
    { de: 'Schon gut. Das kann jedem passieren.', es: 'No importa. Le puede pasar a cualquiera.' },
  'Wie ist deine Telefonnummer? – 0664 123 45 67.':
    { de: 'Danke, ich schreibe sie auf.', es: 'Gracias, la apunto.',
      mas: [
        { de: 'Schreibst du mir dann eine Nachricht?', es: '¿Me escribes luego un mensaje?' },
        { de: 'Ja, heute Abend.', es: 'Sí, esta noche.' }
      ] },
  'Wie ist Ihre E-Mail-Adresse?':
    { de: 'Nuria Punkt Lopez at mail Punkt at, alles klein und ohne Akzent.', es: 'Nuria punto Lopez arroba mail punto at, todo en minúscula y sin acento.',
      mas: [
        { de: 'Soll ich sie Ihnen aufschreiben?', es: '¿Se la escribo?' },
        { de: 'Ja bitte, beim Buchstabieren verliere ich immer den Faden.', es: 'Sí, por favor, deletreando siempre me pierdo.' }
      ] },
  'Wo wohnst du? – In Wien, Hauptstraße 12.':
    { de: 'Das ist ja ganz in der Nähe!', es: '¡Pero si eso está al lado!',
      mas: [
        { de: 'Ja, ich gehe zu Fuß zum Kurs.', es: 'Sí, voy andando a clase.' },
        { de: 'Ich fahre mit der U-Bahn, zehn Minuten.', es: 'Yo voy en metro, diez minutos.' }
      ] },

  // Las de la Start que ya estaban. Sin respuesta, la practica de esa
  // leccion solo podia montar dos de los cuatro tipos de ejercicio.
  'Guten Morgen! / Guten Tag! / Guten Abend!':
    { de: 'Guten Tag! Schön, Sie zu sehen.', es: '¡Buenos días! Me alegro de verle.',
      mas: [
        { de: 'Sind Sie auch neu im Kurs?', es: '¿Usted también es nuevo en el curso?' },
        { de: 'Ja, heute ist mein erster Tag.', es: 'Sí, hoy es mi primer día.' }
      ] },
  'Hallo! · Servus! · Grüß Gott! (AT)':
    { de: 'Servus! Alles klar bei dir? Lange nicht gesehen.', es: '¡Hola! ¿Todo bien? Hace mucho que no te veo.',
      mas: [
        { de: 'Ja, alles gut. Und bei dir?', es: 'Sí, todo bien. ¿Y tú?' },
        { de: 'Auch gut, danke.', es: 'Bien también, gracias.' }
      ] },
  'Auf Wiedersehen! · Tschüss! · Bis bald!':
    { de: 'Tschüss, bis morgen! Vergiss die Hausaufgabe nicht.', es: '¡Chao, hasta mañana! No te olvides de los deberes.',
      mas: [
        { de: 'Welche Seite war es noch mal?', es: '¿Qué página era?' },
        { de: 'Seite zwölf, die Übungen unten.', es: 'La página doce, los ejercicios de abajo.' }
      ] },
  'Ich heiße Maria.':
    { de: 'Freut mich, Maria. Ich bin Jonas.', es: 'Encantado, Maria. Yo soy Jonas.',
      mas: [
        { de: 'Bist du auch im Kurs A2?', es: '¿Tú también estás en el curso A2?' },
        { de: 'Ja, jeden Dienstag und Donnerstag.', es: 'Sí, todos los martes y jueves.' }
      ] },
  'Mein Name ist Maria López.':
    { de: 'Guten Tag, Frau López. Nehmen Sie bitte Platz, wir fangen gleich an.', es: 'Buenos días, señora López. Siéntese, por favor, empezamos enseguida.',
      mas: [
        { de: 'Entschuldigung, ich bin ein bisschen zu spät.', es: 'Perdone, llego un poco tarde.' },
        { de: 'Kein Problem, wir haben noch nicht angefangen.', es: 'No pasa nada, todavía no hemos empezado.' }
      ] },
  'Ich bin Ahmet. Und du?':
    { de: 'Ich bin Lena. Ich sitze immer da vorne.', es: 'Yo soy Lena. Me siento siempre ahí delante.',
      mas: [
        { de: 'Woher kommst du, Lena?', es: '¿De dónde eres, Lena?' },
        { de: 'Aus Graz. Und du?', es: 'De Graz. ¿Y tú?' }
      ] },
  'Woher kommst du? – Ich komme aus Spanien.':
    { de: 'Aus Spanien? Aus welcher Stadt?', es: '¿De España? ¿De qué ciudad?',
      mas: [
        { de: 'Aus Valencia, im Osten.', es: 'De Valencia, en el este.' },
        { de: 'Da war ich schon! Sehr schön.', es: '¡Yo he estado! Muy bonito.' }
      ] },
  'Woher kommen Sie? – Aus Wien.':
    { de: 'Ah, ein Wiener! Ich komme aus Graz.', es: '¡Ah, vienés! Yo soy de Graz.',
      mas: [
        { de: 'Und wie lange leben Sie schon hier?', es: '¿Y cuánto tiempo lleva aquí?' },
        { de: 'Seit zwanzig Jahren. Graz vermisse ich trotzdem.', es: 'Veinte años. Aun así echo de menos Graz.' }
      ] },
  'Wie schreibt man das?':
    { de: 'Das schreibt man mit zwei L.', es: 'Eso se escribe con dos eles.',
      mas: [
        { de: 'Mit zwei L und einem H am Ende?', es: '¿Con dos eles y una hache al final?' },
        { de: 'Genau so. Sie haben es gleich beim ersten Mal.', es: 'Exactamente. Lo tiene a la primera.' }
      ] },
  'Können Sie das bitte buchstabieren?':
    { de: 'Natürlich: M-A-R-I-A, wie der Name Maria.', es: 'Claro: M-A-R-I-A, como el nombre María.',
      mas: [
        { de: 'Danke, und den Familiennamen?', es: 'Gracias, ¿y el apellido?' },
        { de: 'L-Ó-P-E-Z.', es: 'L-Ó-P-E-Z.' }
      ] },
  'M wie Martha, A wie Anton.':
    { de: 'Danke, jetzt habe ich es.', es: 'Gracias, ahora sí lo tengo.',
      mas: [
        { de: 'Gibt es diese Namen für alle Buchstaben?', es: '¿Hay esos nombres para todas las letras?' },
        { de: 'Für alle. Am Telefon spart das viel Zeit.', es: 'Para todas. Por teléfono ahorra mucho tiempo.' }
      ] },

  // ======================================================================
  // A1.1 y A1.2. Antes solo estaban las de A2.1 y las de la Start: media
  // Kommunikation se veia sin respuesta, y los dos tipos de ejercicio que
  // salen de aqui (contestar y entender) no se podian montar en esas
  // lecciones.
  // ======================================================================
  // ---- Lektion 1: Woher kommen Sie? --------------------------------------
  'Wie heißt du? – Ich heiße Luna.':
    { de: 'Freut mich, Luna! Ich bin Ahmet.', es: '¡Encantado, Luna! Yo soy Ahmet.',
      mas: [
        { de: 'Woher kommst du, Ahmet?', es: '¿De dónde eres, Ahmet?' },
        { de: 'Aus der Türkei, aus Izmir.', es: 'De Turquía, de Esmirna.' }
      ] },
  'Wie heißen Sie, bitte?':
    { de: 'Gruber. Eva Gruber, mit B wie Berta.', es: 'Gruber. Eva Gruber, con be de Berta.' },
  'Wie geht\'s? – Danke, gut.':
    { de: 'Und dir? Alles in Ordnung?', es: '¿Y tú? ¿Todo bien?' },
  'Sehr gut. · Es geht. · Nicht so gut.':
    { de: 'Und warum? Ist etwas passiert?', es: '¿Y eso? ¿Ha pasado algo?' },
  'Woher kommst du? Wo wohnst du?':
    { de: 'Aus Spanien, aber ich wohne schon lange hier.', es: 'De España, pero llevo ya mucho aquí.',
      mas: [
        { de: 'Und wo genau wohnst du?', es: '¿Y dónde vives exactamente?' },
        { de: 'In Favoriten, im zehnten Bezirk.', es: 'En Favoriten, en el distrito diez.' }
      ] },
  'Ich komme aus Polen, aber ich wohne in Wien.':
    { de: 'Und wie lange bist du schon in Wien?', es: '¿Y cuánto llevas en Viena?' },
  'Du bist sicher Maria, oder?':
    { de: 'Ja, genau. Und du bist …?', es: 'Sí, exacto. ¿Y tú eres…?' },
  'Kommst du aus Italien?':
    { de: 'Nein, aus Spanien. Aus Valencia.', es: 'No, de España. De Valencia.',
      mas: [
        { de: 'Entschuldigung! Und wie lange bist du hier?', es: '¡Perdona! ¿Y cuánto llevas aquí?' },
        { de: 'Seit zwei Jahren.', es: 'Desde hace dos años.' }
      ] },
  'Ja, genau. · Richtig. · Stimmt.':
    { de: 'Gut, dann ist ja alles klar.', es: 'Bien, entonces todo claro.',
      mas: [
        { de: 'Genau das meine ich.', es: 'Justo eso digo yo.' },
        { de: 'Dann sind wir uns einig.', es: 'Entonces estamos de acuerdo.' }
      ] },

  // ---- Lektion 2: Wohnen Sie auch da? ------------------------------------
  'Ich bin 32 Jahre alt und ledig.':
    { de: 'Ich bin 29 und wohne mit meinem Bruder.', es: 'Yo tengo 29 y vivo con mi hermano.' },
  'Sind Sie verheiratet?':
    { de: 'Ja, seit fünf Jahren. Wir haben in Spanien geheiratet, mitten im Sommer.', es: 'Sí, desde hace cinco años. Nos casamos en España, en pleno verano.',
      mas: [
        { de: 'Und haben Sie Kinder?', es: '¿Y tiene hijos?' },
        { de: 'Ja, einen Sohn. Er ist drei.', es: 'Sí, un hijo. Tiene tres años.' }
      ] },
  'Wie bitte?':
    { de: 'Ich sage: Wie ist Ihre Adresse?', es: 'Digo: ¿cuál es su dirección?' },
  'Können Sie das bitte wiederholen?':
    { de: 'Natürlich. Ich spreche jetzt langsamer, und sagen Sie ruhig Stopp.', es: 'Claro. Ahora hablo más despacio, y dígame para cuando quiera.' },
  'Noch einmal, bitte. Langsamer, bitte.':
    { de: 'Kein Problem, ich wiederhole es.', es: 'Sin problema, lo repito.' },
  'Ich spreche ein bisschen Deutsch.':
    { de: 'Das reicht für den Anfang. Weiter so!', es: 'Para empezar es suficiente. ¡Sigue así!',
      mas: [
        { de: 'Welche Sprachen sprechen Sie?', es: '¿Qué idiomas habla usted?' },
        { de: 'Deutsch, Englisch und ein bisschen Französisch.', es: 'Alemán, inglés y un poco de francés.' }
      ] },
  'Sprechen Sie Englisch? – Ja, sehr gut.':
    { de: 'Super, dann verstehen wir uns.', es: 'Genial, entonces nos entendemos.' },
  'Wie alt bist du? – Ich bin 25.':
    { de: 'Du siehst deutlich jünger aus! Ich hätte dich auf zwanzig geschätzt.', es: '¡Pareces bastante más joven! Te habría echado veinte.',
      mas: [
        { de: 'Danke! Und wie alt bist du?', es: '¡Gracias! ¿Y tú cuántos tienes?' },
        { de: 'Ich bin 31, seit gestern.', es: 'Tengo 31, desde ayer.' }
      ] },
  'Ich wohne in der Hauptstraße 12, 1010 Wien.':
    { de: 'Danke. Die Postleitzahl habe ich schon, aber fehlt noch die Türnummer?', es: 'Gracias. El código postal ya lo tengo, pero ¿falta el número de puerta?' },
  'Meine Telefonnummer ist 0664 1234567.':
    { de: 'Moment, ich schreibe sie auf.', es: 'Un momento, la apunto.' },

  // ---- Lektion 3: Was sind Sie von Beruf? --------------------------------
  'Wo ist der Kuli? – Hier. / Da drüben.':
    { de: 'Ah, danke. Ich habe ihn gesucht.', es: 'Ah, gracias. Lo estaba buscando.',
      mas: [
        { de: 'Hast du auch ein Blatt Papier?', es: '¿Tienes también una hoja de papel?' },
        { de: 'Ja, hier. Nimm ruhig zwei.', es: 'Sí, toma. Coge dos si quieres.' }
      ] },
  'Was sind Sie von Beruf? – Ich bin Ärztin.':
    { de: 'Interessant! In welchem Krankenhaus arbeiten Sie, und seit wann schon?', es: '¡Interesante! ¿En qué hospital trabaja y desde cuándo?',
      mas: [
        { de: 'Im Krankenhaus Nord, seit drei Jahren.', es: 'En el hospital Nord, desde hace tres años.' },
        { de: 'Das ist bestimmt anstrengend.', es: 'Eso tiene que ser agotador.' }
      ] },
  'Was machst du beruflich?':
    { de: 'Ich arbeite als Köchin in einem Restaurant.', es: 'Trabajo de cocinera en un restaurante.' },
  'Ja, stimmt. · Genau.':
    { de: 'Siehst du? Ich hatte recht.', es: '¿Ves? Tenía razón.' },
  'Nein, das stimmt nicht. · Doch!':
    { de: 'Bist du sicher? Ich glaube schon.', es: '¿Seguro? Yo creo que sí.' },

  // ---- Lektion 4: Das ist meine Familie. ---------------------------------
  'Hast du Geschwister? – Ja, zwei Brüder.':
    { de: 'Und wie alt sind sie?', es: '¿Y cuántos años tienen?',
      mas: [
        { de: 'Der eine ist 20, der andere 27.', es: 'Uno tiene 20 y el otro 27.' },
        { de: 'Wohnen sie auch hier in Wien?', es: '¿Viven también aquí en Viena?' }
      ] },
  'Meine Eltern wohnen in Polen.':
    { de: 'Und besuchst du sie oft?', es: '¿Y los visitas a menudo?' },
  'Ist das deine Schwester?':
    { de: 'Nein, das ist meine Cousine.', es: 'No, esa es mi prima.' },
  'Das ist sicher dein Opa.':
    { de: 'Ja, das ist er. Er ist 82.', es: 'Sí, es él. Tiene 82.' },
  'Was ist das? – Das ist ein Foto.':
    { de: 'Von wem? Von deiner Familie?', es: '¿De quién? ¿De tu familia?' },
  'Wer ist das?':
    { de: 'Das ist mein Bruder Tomek.', es: 'Ese es mi hermano Tomek.' },

  // ---- Lektion 5: Wann hast du Zeit? -------------------------------------
  'Wann hast du Zeit? – Am Samstag.':
    { de: 'Perfekt, dann machen wir das.', es: 'Perfecto, pues quedamos así.' },
  'Um wie viel Uhr treffen wir uns?':
    { de: 'Sagen wir um vier vor dem Kino?', es: '¿Decimos a las cuatro delante del cine?' },
  'Kannst du mir bitte helfen?':
    { de: 'Klar, sag mir, was du brauchst.', es: 'Claro, dime qué necesitas.',
      mas: [
        { de: 'Ich verstehe dieses Formular nicht.', es: 'No entiendo este formulario.' },
        { de: 'Zeig her, das machen wir zusammen.', es: 'Trae, eso lo hacemos juntos.' }
      ] },
  'Einen Moment, bitte.':
    { de: 'Ja, ich warte. Lassen Sie sich Zeit.', es: 'Sí, espero. Tómese su tiempo.' },
  'Wann hat die Bank offen? – Von 9 bis 15 Uhr.':
    { de: 'Dann gehe ich morgen früh hin.', es: 'Entonces voy mañana por la mañana.' },
  'Am Sonntag ist geschlossen.':
    { de: 'Schade, dann eben am Montag.', es: 'Qué pena, pues el lunes.' },
  'Hast du am Freitag Zeit?':
    { de: 'Freitag passt mir sehr gut, aber bitte erst nach fünf Uhr.', es: 'El viernes me viene muy bien, pero a partir de las cinco.' },
  'Passt dir 18 Uhr? – Ja, das passt.':
    { de: 'Super, bis dann! Ich reserviere zwei Plätze.', es: '¡Genial, hasta entonces! Reservo dos sitios.' },
  'Wollen wir ins Kino gehen?':
    { de: 'Ja, gern! Was läuft denn?', es: '¡Sí, con gusto! ¿Qué ponen?',
      mas: [
        { de: 'Ein Film aus Spanien, um acht.', es: 'Una película española, a las ocho.' },
        { de: 'Perfekt, treffen wir uns um halb acht.', es: 'Perfecto, quedamos a las siete y media.' }
      ] },
  'Gute Idee! · Ja, gern.':
    { de: 'Dann treffen wir uns dort.', es: 'Pues quedamos allí.' },

  // ---- Lektion 6: Haben Sie keine Kipferl? -------------------------------
  'Ich hätte gern eine Suppe.':
    { de: 'Sehr gern. Möchten Sie Brot dazu, und etwas zu trinken?', es: 'Con mucho gusto. ¿Quiere pan y algo de beber?',
      mas: [
        { de: 'Ja, bitte. Und ein Glas Wasser.', es: 'Sí, por favor. Y un vaso de agua.' },
        { de: 'Kommt sofort.', es: 'Enseguida.' }
      ] },
  'Einmal Schnitzel, bitte.':
    { de: 'Kommt sofort. Und zu trinken?', es: 'Enseguida. ¿Y para beber?' },
  'Was kostet das?':
    { de: 'Zwölf Euro fünfzig. Soll ich es einpacken?', es: 'Doce euros con cincuenta. ¿Se lo envuelvo?',
      mas: [
        { de: 'Kann ich mit Karte zahlen?', es: '¿Puedo pagar con tarjeta?' },
        { de: 'Ja, natürlich. Bitte hier.', es: 'Sí, claro. Aquí, por favor.' }
      ] },
  'Wie viel macht das? – Das macht 8,50 Euro.':
    { de: 'Hier bitte, zehn Euro. Stimmt so, der Rest ist für Sie.', es: 'Aquí tiene, diez euros. Está bien así, el resto es para usted.' },
  'Ich mag keinen Fisch.':
    { de: 'Dann nimm doch das Hühnchen.', es: 'Pues coge el pollo.' },
  'Ich esse gern Gemüse.':
    { de: 'Ich auch. Der Salat hier ist sehr gut.', es: 'Yo también. La ensalada de aquí está muy buena.' },
  'Heute gibt es Suppe und Salat.':
    { de: 'Dann nehme ich beides, bitte.', es: 'Pues tomo las dos cosas, por favor.',
      mas: [
        { de: 'Sehr gern. Und zu trinken?', es: 'Muy bien. ¿Y para beber?' },
        { de: 'Ein Glas Wasser, bitte.', es: 'Un vaso de agua, por favor.' }
      ] },
  // ---- Lektion 7: Heute regnet es. ---------------------------------------
  'Wie ist das Wetter? – Es regnet.':
    { de: 'Schon wieder! Nimm den Schirm mit.', es: '¡Otra vez! Llévate el paraguas.' },
  'Es sind 20 Grad.':
    { de: 'Dann brauchen wir keine Jacke.', es: 'Entonces no hace falta chaqueta.' },
  'Heute ist es schön / schlecht.':
    { de: 'Stimmt, heute ist es richtig schön.', es: 'Es verdad, hoy hace muy bueno.' },

  // ---- Lektion 8: Du spielst super Fußball! ------------------------------
  'immer – oft – manchmal – selten – nie':
    { de: 'Und wie oft machst du Sport?', es: '¿Y con qué frecuencia haces deporte?' },
  'Ich gehe zweimal pro Woche ins Fitnessstudio.':
    { de: 'Respekt! Ich gehe fast nie.', es: '¡Respeto! Yo casi nunca voy.' },
  'Das stimmt nicht.':
    { de: 'Doch, das stimmt schon. Schau selbst nach, ich habe es zweimal geprüft.', es: 'Que sí es verdad. Míralo tú mismo, lo he comprobado dos veces.' },
  'Nein, überhaupt nicht.':
    { de: 'Wirklich nicht? Schade, ich hätte es gern gemacht.', es: '¿De verdad que no? Qué pena, me habría gustado.' },
  'Du spielst super Fußball!':
    { de: 'Danke! Ich spiele seit zehn Jahren.', es: '¡Gracias! Llevo diez años jugando.' },
  'Mein Hobby ist Fotografieren.':
    { de: 'Und was fotografierst du am liebsten?', es: '¿Y qué te gusta fotografiar?' },
  'Ich will einen Deutschkurs machen.':
    { de: 'Gute Idee. Wann fängst du an?', es: 'Buena idea. ¿Cuándo empiezas?' },

  // ---- Lektion 9: Wie war dein Tag? --------------------------------------
  'Wie war dein Tag? – Ganz gut, danke.':
    { de: 'Freut mich. Was hast du gemacht?', es: 'Me alegro. ¿Qué has hecho?' },
  'Zuerst habe ich … und dann bin ich …':
    { de: 'Und danach? Erzähl ruhig weiter, ich höre dir gern zu.', es: '¿Y después? Sigue contando, te escucho con gusto.' },
  'Echt? · Wirklich? · Ach so!':
    { de: 'Ja, ehrlich! Ich war selbst überrascht.', es: '¡Sí, en serio! Yo mismo me sorprendí.' },
  'Das ist ja interessant!':
    { de: 'Finde ich auch. Erzähl mehr.', es: 'A mí también me lo parece. Cuenta más.' },
  'Wie war dein Wochenende?':
    { de: 'Ruhig, ich war zu Hause.', es: 'Tranquilo, estuve en casa.' },
  'Schönes Wetter heute, oder?':
    { de: 'Ja, endlich! Nach dieser Woche.', es: '¡Sí, por fin! Después de esta semana.' },
  '2015 bin ich nach Österreich gekommen.':
    { de: 'Und wie war der Anfang hier?', es: '¿Y cómo fueron los principios aquí?' },
  'Am Anfang war alles neu für mich.':
    { de: 'Das kenne ich gut. Wie lange hat es bei dir gedauert?', es: 'Eso lo conozco bien. ¿Cuánto tiempo te llevó a ti?' },
  'Ich möchte lieber nicht darüber sprechen.':
    { de: 'Kein Problem, wir reden über etwas anderes.', es: 'Sin problema, hablamos de otra cosa.' },
  'Entschuldigung, ich habe es eilig.':
    { de: 'Alles klar, lauf ruhig. Wir reden morgen in der Pause weiter.', es: 'Vale, vete tranquilo. Mañana seguimos hablando en la pausa.' },

  // ---- Lektion 10: Was ist denn WIN? -------------------------------------
  'Entschuldigung, wie komme ich zum Rathaus?':
    { de: 'Das ist ganz einfach: immer geradeaus.', es: 'Es muy fácil: siempre todo recto.' },
  'Gehen Sie geradeaus und dann die zweite Straße rechts.':
    { de: 'Danke! Und wie lange dauert das?', es: '¡Gracias! ¿Y cuánto se tarda?' },
  'Ist es weit von hier? – Nein, fünf Minuten zu Fuß.':
    { de: 'Perfekt, dann gehe ich zu Fuß.', es: 'Perfecto, pues voy andando.' },
  'Nehmen Sie die U3 und steigen Sie bei Stephansplatz um.':
    { de: 'Und wo genau ist die Station?', es: '¿Y dónde está exactamente la parada?' },
  'Sie müssen drei Stationen fahren.':
    { de: 'Danke, dann steige ich dort aus.', es: 'Gracias, pues me bajo allí.' },

  // ---- Lektion 11: Gefällt dir das Zimmer? -------------------------------
  'Die Wohnung hat 60 m² und zwei Zimmer.':
    { de: 'Und in welchem Stadtteil liegt sie?', es: '¿Y en qué barrio está?' },
  'Wie hoch ist die Miete?':
    { de: '600 Euro warm, mit Heizung.', es: '600 euros con gastos, calefacción incluida.' },
  'Die Küche ist klein, aber hell.':
    { de: 'Das ist mir wichtiger als groß.', es: 'Eso me importa más que el tamaño.' },
  'Sie liegt im dritten Stock.':
    { de: 'Gibt es einen Aufzug, oder muss man immer die Treppe nehmen?', es: '¿Hay ascensor o hay que subir siempre por la escalera?' },
  'Das gefällt mir (nicht).':
    { de: 'Wirklich? Mir gefällt es sehr.', es: '¿En serio? A mí me gusta mucho.' },
  'Ich finde das Zimmer sehr gemütlich.':
    { de: 'Ja, und die Farben passen gut zusammen.', es: 'Sí, y los colores pegan bien.' },
  'Haben Sie auch Regale?':
    { de: 'Ja, gleich hier hinten rechts.', es: 'Sí, aquí detrás a la derecha.' },
  'Was kostet dieser Schrank?':
    { de: 'Hundertneunundzwanzig Euro, und der Aufbau kostet noch einmal dreißig Euro extra.', es: 'Ciento veintinueve euros, y el montaje cuesta otros treinta euros más.' },

  // ---- Lektion 12: Danke für die Hilfe! ----------------------------------
  'Ich habe eine Frage: Wo muss ich das abgeben?':
    { de: 'Am Schalter zwei, dort drüben.', es: 'En la ventanilla dos, allí enfrente.' },
  'Können Sie mir bitte helfen?':
    { de: 'Natürlich, sagen Sie mir, worum es geht.', es: 'Por supuesto, dígame de qué se trata.' },
  'Vielen Dank für Ihre Hilfe.':
    { de: 'Gern geschehen. Melden Sie sich, wenn etwas ist.', es: 'De nada. Avise si hace falta algo.' },
  'Auf Wiederhören!':
    { de: 'Auf Wiederhören und schönen Tag noch!', es: '¡Hasta luego y que tenga buen día!' },
  'Darf ich hier parken?':
    { de: 'Nur mit Parkschein, und höchstens zwei Stunden.', es: 'Solo con tique, y dos horas como mucho.' },
  'Ja, das dürfen Sie. / Nein, das ist verboten.':
    { de: 'Danke, dann suche ich einen Automaten.', es: 'Gracias, pues busco un parquímetro.' },
  'Normalerweise arbeite ich bis 17 Uhr.':
    { de: 'Und freitags? Da ist doch früher Schluss.', es: '¿Y los viernes? Ahí se acaba antes.',
      mas: [
        { de: 'Ja, freitags bin ich um 14 Uhr fertig.', es: 'Sí, los viernes acabo a las 14.' },
        { de: 'Das ist super. Was machst du dann?', es: 'Eso está genial. ¿Y qué haces luego?' }
      ] },
  'Sollen wir das zusammen machen?':
    { de: 'Ja, zu zweit geht es schneller.', es: 'Sí, entre dos va más rápido.' },
  'Ja, gern. / Lieber nicht.':
    { de: 'Gut, dann sag mir Bescheid.', es: 'Vale, pues avísame.' },
  'Hiermit beantrage ich …':
    { de: 'Schicken Sie das bitte schriftlich.', es: 'Mándelo por escrito, por favor.' },
  'Ich bitte um eine Bestätigung.':
    { de: 'Die bekommen Sie per E-Mail.', es: 'Lo recibirá por correo electrónico.' },

  // ---- Lektion 13: Gesundheit! -------------------------------------------
  'Vorsicht! · Pass auf!':
    { de: 'Uff, das war knapp! Ist dir wirklich nichts passiert?', es: '¡Uf, por poco! ¿De verdad no te ha pasado nada?' },
  'Nehmen Sie bitte Platz.':
    { de: 'Danke. Wo tut es denn weh?', es: 'Gracias. ¿Dónde le duele?' },
  'Mein Kopf tut weh.':
    { de: 'Seit wann denn? Du solltest zum Arzt gehen.', es: '¿Desde cuándo? Deberías ir al médico.' },
  'Ich habe Halsschmerzen und Fieber.':
    { de: 'Dann bleiben Sie besser im Bett.', es: 'Entonces mejor quédese en la cama.' },
  'Wie geht es dir? – Nicht so gut.':
    { de: 'Was hast du denn? Halsweh, Kopfschmerzen oder einfach nur müde?', es: '¿Qué te pasa? ¿Garganta, dolor de cabeza o simplemente cansancio?' },
  'Gute Besserung! · Das tut mir leid.':
    { de: 'Danke, ich melde mich, wenn es besser ist.', es: 'Gracias, aviso cuando esté mejor.' },
  'Was soll ich tun?':
    { de: 'Trink viel und ruh dich aus.', es: 'Bebe mucho y descansa.' },
  'Du solltest zum Arzt gehen.':
    { de: 'Du hast recht, ich rufe gleich an.', es: 'Tienes razón, llamo ahora mismo.' },
  'Ich bin krank und kann heute nicht kommen.':
    { de: 'Gute Besserung! Wir schaffen das hier.', es: '¡Que te mejores! Aquí nos apañamos.' },
  'Die Bestätigung schicke ich Ihnen morgen.':
    { de: 'In Ordnung, danke für die Info.', es: 'De acuerdo, gracias por avisar.' },

  // ---- Lektion 14: Das schaffen wir! -------------------------------------
  'Ich suche eine Hose in Größe 40.':
    { de: 'Die hängen dort hinten. Welche Farbe?', es: 'Están ahí detrás. ¿De qué color?' },
  'Kann ich das anprobieren?':
    { de: 'Ja, die Kabine ist frei.', es: 'Sí, el probador está libre.' },
  'Das steht dir gut!':
    { de: 'Findest du? Ist sie nicht zu eng?', es: '¿Tú crees? ¿No queda estrecha?' },
  'Die Farbe gefällt mir nicht.':
    { de: 'Wir haben sie auch in Grün.', es: 'También la tenemos en verde.' },
  'Ich mag lieber die blaue Jacke.':
    { de: 'Die steht dir auch besser.', es: 'Esa también te queda mejor.' },
  'Die ist billiger als die andere.':
    { de: 'Stimmt, und die Qualität ist gleich.', es: 'Es verdad, y la calidad es la misma.' },
  'Ich hätte gern einen Termin.':
    { de: 'Am Dienstag um zehn, oder passt Ihnen der Nachmittag besser?', es: 'El martes a las diez, ¿o le viene mejor por la tarde?' },
  'Gern, wann passt es Ihnen?':
    { de: 'Am Donnerstag nach der Arbeit.', es: 'El jueves después del trabajo.' },
  'Ich möchte das umtauschen. Hier ist der Kassenbon.':
    { de: 'Kein Problem. Möchten Sie das Geld zurück?', es: 'Sin problema. ¿Quiere el dinero de vuelta?' },
  'Wann ist es fertig?':
    { de: 'Am Freitag können Sie es abholen.', es: 'El viernes puede recogerlo.' },
  'Ich finde das zu teuer.':
    { de: 'Dann schauen wir noch woanders.', es: 'Pues miramos en otro sitio.' },
  'Das schaffen wir!':
    { de: 'Genau, zusammen geht das schon.', es: 'Exacto, juntos podemos.' },

  // ---- Lektion 15: Wie geht das? -----------------------------------------
  'Könntest du mir kurz helfen?':
    { de: 'Klar, was brauchst du? Ich habe bis halb zwölf Zeit.', es: 'Claro, ¿qué necesitas? Tengo tiempo hasta las once y media.' },
  'Wie geht das? Kannst du mir das zeigen?':
    { de: 'Pass auf, ich mache es dir vor.', es: 'Mira, te lo enseño.' },
  'Ich verspreche es dir.':
    { de: 'Gut, ich verlasse mich auf dich.', es: 'Bien, cuento contigo.' },
  'Ich hoffe, dass es klappt.':
    { de: 'Ich drücke dir die Daumen.', es: 'Cruzo los dedos por ti.' },
  'Im Sommer fahren wir ans Meer.':
    { de: 'Schön! Ans Meer oder in die Berge?', es: '¡Qué bien! ¿Al mar o a la montaña?' },
  'Wohin würdest du gern reisen?':
    { de: 'Nach Japan, schon lange. Nur der Flug ist mir zu teuer.', es: 'A Japón, desde hace tiempo. Solo que el vuelo me sale caro.' },
  'Ich interessiere mich für Technik.':
    { de: 'Und was genau interessiert dich daran?', es: '¿Y qué es lo que te interesa de eso?' },
  'Das finde ich spannend.':
    { de: 'Mich auch. Erzähl mir mehr.', es: 'A mí también. Cuéntame más.' },
  'Mein Ziel ist die B1-Prüfung.':
    { de: 'Wann willst du die Prüfung machen?', es: '¿Cuándo quieres hacer el examen?' },
  'Ich möchte flüssiger sprechen.':
    { de: 'Dann rede so viel wie möglich.', es: 'Pues habla todo lo que puedas.' },

  // ---- Lektion 16: Glückwunsch! ------------------------------------------
  'Bei uns feiert man Weihnachten am 24.':
    { de: 'Bei uns erst am 25.', es: 'Nosotros el 25.',
      mas: [
        { de: 'Und was esst ihr an dem Tag?', es: '¿Y qué coméis ese día?' },
        { de: 'Meistens Gans, mit der ganzen Familie.', es: 'Normalmente oca, con toda la familia.' }
      ] },
  'Leider kann ich nicht.':
    { de: 'Schade! Vielleicht ein anderes Mal.', es: '¡Qué pena! Quizá en otra ocasión.' },
  'Das sieht toll aus!':
    { de: 'Danke, das freut mich! Meine Schwester hat beim Dekorieren geholfen.', es: '¡Gracias, me alegra! Mi hermana ayudó con la decoración.' },
  'Das schmeckt super!':
    { de: 'Danke! Das Rezept ist von meiner Mutter.', es: '¡Gracias! La receta es de mi madre.' },
  'Möchtest du noch etwas?':
    { de: 'Ja, gern. Nur ein bisschen.', es: 'Sí, con gusto. Solo un poco.' },
  'Nimm dir doch! · Greif zu!':
    { de: 'Danke, das mache ich gern. Alles sieht wirklich köstlich aus.', es: 'Gracias, lo haré con gusto. Todo tiene una pinta buenísima.' },
  'Wollen wir uns für Samstag etwas ausmachen?':
    { de: 'Ja, gern! Was hast du vor?', es: '¡Sí, con gusto! ¿Qué se te ocurre?' },
  'Passt dir 19 Uhr?':
    { de: 'Ja, das passt mir gut. Soll ich etwas zu trinken mitbringen?', es: 'Sí, me viene bien. ¿Llevo algo de beber?' },
  'Entschuldige die Verspätung!':
    { de: 'Kein Problem, wir haben auch gerade erst angefangen.', es: 'No pasa nada, nosotros también acabamos de empezar.' },
  'Tut mir leid, der Bus hatte Verspätung.':
    { de: 'Das kenne ich. Setz dich!', es: 'Eso lo conozco. ¡Siéntate!' },
  'Das ist Pekka. Er kommt aus Finnland.':
    { de: 'Hallo Pekka, freut mich! Und wie lange bist du schon hier?', es: '¡Hola Pekka, encantado! ¿Y cuánto tiempo llevas aquí?' },
  'Sie ist sehr nett und hilfsbereit.':
    { de: 'Das merkt man gleich. Arbeitet ihr schon lange zusammen?', es: 'Se nota enseguida. ¿Lleváis mucho trabajando juntos?' },

  // ---- Start: preguntas para la profesora ----------------------------
  'Entschuldigung, ich habe eine Frage.':
    { de: 'Ja, bitte. Was möchtest du wissen?', es: 'Sí, dime. ¿Qué quieres saber?',
      mas: [
        { de: 'Was bedeutet dieses Wort hier?', es: '¿Qué significa esta palabra de aquí?' },
        { de: 'Das ist ein Adjektiv: „schnell“.', es: 'Es un adjetivo: «rápido».' }
      ] },
  'Können Sie das bitte an die Tafel schreiben?':
    { de: 'Natürlich. Ich schreibe es groß.', es: 'Claro. Lo escribo grande.' },
  'Auf welcher Seite sind wir?':
    { de: 'Auf Seite 24, Übung 3.', es: 'En la página 24, ejercicio 3.',
      mas: [
        { de: 'Danke, ich war auf der falschen Seite.', es: 'Gracias, estaba en la página equivocada.' },
        { de: 'Kein Problem, wir fangen gleich an.', es: 'No pasa nada, empezamos ya.' }
      ] },
  'Was ist die Hausaufgabe?':
    { de: 'Übung 5 und 6 für Montag.', es: 'Los ejercicios 5 y 6 para el lunes.' },
  'Ist das richtig so?':
    { de: 'Fast. Schau noch einmal auf das Verb.', es: 'Casi. Mira otra vez el verbo.' },
  'Können Sie das noch einmal erklären?':
    { de: 'Gern. Ich mache ein Beispiel.', es: 'Con gusto. Pongo un ejemplo.' },
  'Wie spricht man das aus?':
    { de: 'Hör zu und sprich mir nach.', es: 'Escucha y repite conmigo.' },
  'Darf ich auf die Toilette gehen?':
    { de: 'Ja, natürlich. Beeil dich bitte, wir fangen gleich mit der Übung an.', es: 'Sí, claro. Date prisa, por favor, empezamos ya con el ejercicio.',
      mas: [
        { de: 'Ich bin gleich wieder da.', es: 'Vuelvo enseguida.' },
        { de: 'Wir machen in fünf Minuten Pause.', es: 'Hacemos la pausa en cinco minutos.' }
      ] },
  'Wie heißt das auf Deutsch?':
    { de: 'Das heißt der Radiergummi. Schreib es dir auf, das Wort vergisst man schnell.', es: 'Se dice der Radiergummi. Apúntatelo, esa palabra se olvida rápido.',
      mas: [
        { de: 'Und wie schreibt man das?', es: '¿Y cómo se escribe?' },
        { de: 'Mit zwei M: Radiergummi.', es: 'Con dos emes: Radiergummi.' }
      ] },
  'Darf ich heute früher gehen?':
    { de: 'Ja, aber sag es mir vorher.', es: 'Sí, pero dímelo antes.',
      mas: [
        { de: 'Ich habe um fünf einen Arzttermin.', es: 'Tengo cita con el médico a las cinco.' },
        { de: 'Alles klar. Dann nimm dir die Übungen mit nach Hause.', es: 'Muy bien. Pues llévate los ejercicios a casa.' }
      ] },
  'Darf ich das Licht anmachen?':
    { de: 'Ja, bitte. Hier ist es dunkel.', es: 'Sí, por favor. Aquí está oscuro.' },
  'Können wir das Licht ausmachen?':
    { de: 'Gute Idee, für das Video.', es: 'Buena idea, para el vídeo.' },
  'Darf ich das Fenster aufmachen?':
    { de: 'Ja, hier ist es warm.', es: 'Sí, aquí hace calor.' },
  'Können Sie bitte das Fenster zumachen?':
    { de: 'Natürlich, es zieht hier ziemlich.', es: 'Claro, aquí hay bastante corriente.' },
  'Wo sind wir gerade?':
    { de: 'Bei Übung 4, oben rechts.', es: 'Por el ejercicio 4, arriba a la derecha.' },
  'Wann ist die nächste Prüfung?':
    { de: 'In zwei Wochen, am Freitag.', es: 'Dentro de dos semanas, el viernes.' },
  'Wie ist das Wetter heute?':
    { de: 'Ziemlich kalt, aber es regnet nicht.', es: 'Bastante frío, pero no llueve.' },
  'Es regnet den ganzen Tag.':
    { de: 'Dann bleiben wir eben zu Hause.', es: 'Pues entonces nos quedamos en casa.' },
  'Heute ist es richtig warm.':
    { de: 'Ja, endlich! Gehen wir in den Park?', es: '¡Sí, por fin! ¿Vamos al parque?' },
  'Morgen soll es schneien.':
    { de: 'Dann nehme ich lieber die U-Bahn.', es: 'Entonces mejor cojo el metro.' },
  'Was für ein scheußliches Wetter!':
    { de: 'Und das mitten im Sommer!', es: '¡Y en pleno verano!' },
  'Hier ist es im Winter sehr kalt.':
    { de: 'Stimmt, aber es ist trocken.', es: 'Es verdad, pero es un frío seco.' },
  'Nimm einen Regenschirm mit!':
    { de: 'Danke für den Tipp. Dann nehme ich gleich den großen aus dem Auto.', es: 'Gracias por el aviso. Pues cojo el grande del coche.' },
  'Zieh dich warm an, es ist kühl.':
    { de: 'Ich nehme die dicke Jacke.', es: 'Cojo la chaqueta gruesa.' },
  'Sollen wir drinnen bleiben?':
    { de: 'Lieber ja, draußen stürmt es richtig. Ich mache uns einen Tee.', es: 'Mejor sí, fuera hay un vendaval. Nos hago un té.' },
  'Bei dem Wetter gehe ich nicht raus.':
    { de: 'Verstehe ich gut. Bleib zu Hause, wir verschieben es auf morgen.', es: 'Lo entiendo. Quédate en casa, lo dejamos para mañana.' },
  'Der Wetterbericht sagt Sonne.':
    { de: 'Endlich mal gute Nachrichten! Dann grillen wir am Samstag im Garten.', es: '¡Por fin buenas noticias! Pues el sábado hacemos barbacoa en el jardín.' },
  'Mir ist kalt.':
    { de: 'Soll ich die Heizung anmachen?', es: '¿Pongo la calefacción?' },
  'Wie viele Geschwister hast du?':
    { de: 'Zwei: einen Bruder und eine Schwester.', es: 'Dos: un hermano y una hermana.' },
  'Bist du verheiratet?':
    { de: 'Nein, ich bin ledig. Aber meine Schwester heiratet im nächsten Sommer.', es: 'No, estoy soltero. Pero mi hermana se casa el verano que viene.' },
  'Hast du Kinder?':
    { de: 'Ja, einen Sohn. Er ist drei.', es: 'Sí, un hijo. Tiene tres años.' },
  'Wo wohnt deine Familie?':
    { de: 'Meine Eltern wohnen noch in Spanien.', es: 'Mis padres siguen viviendo en España.' },
  'Wie alt ist dein Bruder?':
    { de: 'Er ist gerade dreißig geworden.', es: 'Acaba de cumplir treinta.' },
  'Das ist meine Schwester Ana.':
    { de: 'Freut mich! Ich bin Tom.', es: '¡Encantado! Soy Tom.' },
  'Darf ich vorstellen? Mein Mann.':
    { de: 'Sehr angenehm! Ihre Frau hat mir schon viel von Ihnen erzählt.', es: '¡Mucho gusto! Su mujer ya me ha hablado mucho de usted.' },
  'Kennst du meinen Onkel schon?':
    { de: 'Nein, noch nicht. Aber du hast mir schon oft von ihm erzählt.', es: 'No, todavía no. Pero ya me has hablado de él muchas veces.' },
  'Das sind meine Großeltern.':
    { de: 'Sie sehen sehr sympathisch aus.', es: 'Parecen muy simpáticos.' },
  'Wo arbeiten Sie?':
    { de: 'In einem Krankenhaus in Wien.', es: 'En un hospital de Viena.' },
  'Arbeitest du Vollzeit?':
    { de: 'Nein, nur dreißig Stunden. Den Freitag habe ich immer für die Kinder.', es: 'No, solo treinta horas. El viernes lo tengo siempre para los niños.' },
  'Was machst du genau?':
    { de: 'Ich arbeite im Büro, mit Zahlen.', es: 'Trabajo en la oficina, con números.' },
  'Gefällt dir deine Arbeit?':
    { de: 'Ja, sehr. Die Kollegen sind nett.', es: 'Sí, mucho. Los compañeros son majos.' },
  'Ich suche gerade Arbeit.':
    { de: 'Viel Glück! Das ist nicht leicht.', es: '¡Suerte! No es fácil.' },
  'Ich mache eine Ausbildung.':
    { de: 'Als was denn? Und wie lange dauert die Ausbildung insgesamt?', es: '¿De qué? ¿Y cuánto dura la formación en total?' },
  'Wo ist meine Brille?':
    { de: 'Auf dem Tisch, neben dem Buch.', es: 'En la mesa, al lado del libro.' },
  'Hast du meinen Schlüssel gesehen?':
    { de: 'Ja, er steckt in deiner Jacke. Ich habe ihn vorhin klimpern gehört.', es: 'Sí, está en tu chaqueta. Antes lo oí tintinear.' },
  'Ist das dein Rucksack?':
    { de: 'Nein, der gehört Tom. Meiner ist blau und steht unter dem Tisch.', es: 'No, ese es de Tom. El mío es azul y está debajo de la mesa.' },
  'Wo finde ich das Büro?':
    { de: 'Zweiter Stock, gleich links neben der Küche. Der Name steht an der Tür.', es: 'Segundo piso, a la izquierda al lado de la cocina. El nombre está en la puerta.' },
  'Was machst du in deiner Freizeit?':
    { de: 'Ich gehe viel wandern, meistens am Wochenende in den Wienerwald.', es: 'Voy mucho de senderismo, casi siempre el fin de semana al Wienerwald.' },
  'Kannst du Gitarre spielen?':
    { de: 'Ein bisschen, aber wirklich schlecht. Vier Griffe, mehr habe ich nie gelernt.', es: 'Un poco, pero muy mal. Cuatro acordes, nunca aprendí más.' },
  'Ich will nächstes Jahr einen Kurs machen.':
    { de: 'Was für einen denn? Und weißt du schon, wo du ihn machst?', es: '¿De qué? ¿Y ya sabes dónde lo vas a hacer?' },
  'Machst du gern Sport?':
    { de: 'Ja, ich jogge fast täglich.', es: 'Sí, salgo a correr casi a diario.' },
  'Mein größtes Hobby ist Klettern.':
    { de: 'Wow, und wo kletterst du?', es: 'Hala, ¿y dónde escalas?' },
  'Das kann ich überhaupt nicht.':
    { de: 'Das lernt man schneller, als du denkst. Komm einfach einmal mit.', es: 'Eso se aprende más rápido de lo que crees. Vente una vez y ya está.' },
  'Seit wann arbeitest du dort?':
    { de: 'Seit zwei Jahren. Angefangen habe ich im Lager, jetzt bin ich im Büro.', es: 'Desde hace dos años. Empecé en el almacén y ahora estoy en la oficina.' },
  'Wie komme ich zum Schwimmbad?':
    { de: 'Mit der Straßenbahn, drei Stationen.', es: 'En tranvía, tres paradas.' },
  'Entschuldigung, wo ist die Post?':
    { de: 'Gleich hinter der Kirche, neben der Bank. Zwei Minuten zu Fuß.', es: 'Justo detrás de la iglesia, al lado del banco. Dos minutos a pie.' },
  'Ist das weit von hier?':
    { de: 'Nein, zehn Minuten zu Fuß.', es: 'No, diez minutos andando.' },
  'Kann ich zu Fuß gehen?':
    { de: 'Ja, aber mit dem Bus geht es schneller.', es: 'Sí, pero en autobús se va más rápido.' },
  'Ich habe mich verlaufen.':
    { de: 'Kein Problem, ich zeige es Ihnen.', es: 'No pasa nada, se lo enseño.' },
  'Welche Linie muss ich nehmen?':
    { de: 'Die U3 Richtung Simmering, und dann noch vier Stationen.', es: 'La U3 dirección Simmering, y luego cuatro paradas más.' },
  'Wo muss ich umsteigen?':
    { de: 'Am Stephansplatz, dort steigen Sie in die U1 Richtung Leopoldau um.', es: 'En Stephansplatz, allí cambia a la U1 dirección Leopoldau.' },
  'Wie viele Stationen sind das?':
    { de: 'Vier, dann bist du da.', es: 'Cuatro y ya has llegado.' },
  'Wo kann ich eine Fahrkarte kaufen?':
    { de: 'Am Automaten oder mit dem Handy.', es: 'En la máquina o con el móvil.' },
  'Wann fährt der letzte Bus?':
    { de: 'Um halb eins. Am Wochenende fährt er die ganze Nacht durch.', es: 'A las doce y media. El fin de semana funciona toda la noche.' },
  'Fährt der Zug pünktlich?':
    { de: 'Nein, er hat zehn Minuten Verspätung. Das steht auf der Anzeige.', es: 'No, lleva diez minutos de retraso. Está en el panel.' },
  'Welche Größe haben Sie?':
    { de: 'Normalerweise achtunddreißig, aber bei dieser Marke brauche ich eher vierzig.', es: 'Normalmente la treinta y ocho, pero en esta marca necesito más bien la cuarenta.' },
  'Haben Sie das auch in Blau?':
    { de: 'Ja, einen Moment bitte. Ich schaue schnell im Lager nach.', es: 'Sí, un momento por favor. Miro rápido en el almacén.' },
  'Das ist mir zu eng.':
    { de: 'Ich hole Ihnen eine Nummer größer.', es: 'Le traigo una talla más.' },
  'Wo ist die Umkleidekabine?':
    { de: 'Gleich da hinten links, neben den Spiegeln. Sie ist frei.', es: 'Ahí al fondo a la izquierda, al lado de los espejos. Está libre.' },
  'Der Reißverschluss ist kaputt.':
    { de: 'Dann tauschen wir es natürlich um.', es: 'Entonces se lo cambiamos, por supuesto.' },
  'Kann ich das zurückgeben?':
    { de: 'Mit Kassenbon ja, innerhalb von 14 Tagen.', es: 'Con el tique sí, dentro de 14 días.' },
  'Zahlen Sie bar oder mit Karte?':
    { de: 'Mit Karte, bitte. Brauchen Sie meine Unterschrift oder reicht die PIN?', es: 'Con tarjeta, por favor. ¿Necesita mi firma o basta con el pin?' },
  'Bis wann kann ich es abholen?':
    { de: 'Bis Freitag um achtzehn Uhr. Danach haben wir geschlossen.', es: 'Hasta el viernes a las seis. Después cerramos.' },
  'Ich lade dich zu meinem Geburtstag ein.':
    { de: 'Super, ich komme gern! Wann und wo feierst du denn?', es: '¡Genial, voy encantado! ¿Cuándo y dónde lo celebras?' },
  'Passt dir Samstag um acht?':
    { de: 'Ja, das passt mir gut.', es: 'Sí, me viene bien.' },
  'Wie ist Ihr Familienname?':
    { de: 'García, mit Akzent auf dem i. Ich buchstabiere ihn Ihnen: G-A-R-C-I-A.', es: 'García, con acento en la i. Se lo deletreo: G-A-R-C-I-A.' },
  'Woher kommen Sie?':
    { de: 'Aus Spanien, genauer gesagt aus Madrid. Aber ich lebe seit Jahren hier.', es: 'De España, más concretamente de Madrid. Pero vivo aquí desde hace años.' },
  'Wo sind Sie geboren?':
    { de: 'In Madrid, neunzehnhundertfünfundneunzig. Meine Eltern wohnen immer noch dort.', es: 'En Madrid, en mil novecientos noventa y cinco. Mis padres siguen viviendo allí.' },
  'Haben Sie einen Ausweis dabei?':
    { de: 'Ja, meinen Reisepass. Reicht der, oder brauchen Sie auch den Meldezettel?', es: 'Sí, el pasaporte. ¿Basta con eso o necesita también el empadronamiento?' },
  'Wie ist Ihre Adresse?':
    { de: 'Hauptstraße zwölf, Tür vier, eintausendzehn Wien. Das ist im ersten Bezirk.', es: 'Hauptstraße doce, puerta cuatro, mil diez Viena. Está en el distrito uno.' },
  'In welchem Stock wohnen Sie?':
    { de: 'Im zweiten Stock, Tür vierzehn. Es gibt leider keinen Aufzug.', es: 'En el segundo piso, puerta catorce. Por desgracia no hay ascensor.' },
  'Unter welcher Nummer erreiche ich Sie?':
    { de: 'Am besten auf dem Handy.', es: 'Mejor en el móvil.' },
  'Ich bin gerade umgezogen.':
    { de: 'Dann brauchen wir die neue Adresse.', es: 'Entonces necesitamos la nueva dirección.' },
  'Wann treffen wir uns?':
    { de: 'Sagen wir um sieben? Dann haben wir vor dem Film noch Zeit.', es: '¿Decimos a las siete? Así nos queda tiempo antes de la película.' },
  'Wo treffen wir uns?':
    { de: 'Vor dem Kino, beim großen Plakat. Dort findet man sich leicht.', es: 'Delante del cine, junto al cartel grande. Ahí es fácil encontrarse.' },
  'Geht es auch etwas später?':
    { de: 'Klar, um halb acht dann.', es: 'Claro, pues a las siete y media.' },
  'Ich muss leider absagen.':
    { de: 'Schade! Dann machen wir es nächste Woche, such dir einfach einen Tag aus.', es: '¡Qué pena! Pues lo hacemos la semana que viene, elige un día.' },
  'Wann haben Sie geöffnet?':
    { de: 'Von neun bis achtzehn Uhr.', es: 'De nueve a seis.' },
  'Haben Sie sonntags offen?':
    { de: 'Nein, sonntags ist geschlossen. Samstag haben wir aber bis achtzehn Uhr offen.', es: 'No, los domingos cerramos. Pero el sábado abrimos hasta las seis.' },
  'Wie lange dauert der Kurs?':
    { de: 'Zwei Stunden, mit einer kurzen Pause in der Mitte. Kaffee gibt es gratis.', es: 'Dos horas, con una pausa corta en medio. El café es gratis.' },
  'Um wie viel Uhr fängt es an?':
    { de: 'Pünktlich um acht. Komm lieber zehn Minuten früher, sonst ist alles voll.', es: 'A las ocho en punto. Ven mejor diez minutos antes, si no está todo lleno.' },
  'Welche Unterlagen brauche ich?':
    { de: 'Ausweis und eine Kopie davon.', es: 'El documento de identidad y una copia.' },
  'Bis wann muss ich das abgeben?':
    { de: 'Bis Ende des Monats. Danach können wir den Antrag nicht mehr annehmen.', es: 'Antes de fin de mes. Después ya no podemos aceptar la solicitud.' },
  'Wie lange muss ich warten?':
    { de: 'Etwa zwanzig Minuten. Setzen Sie sich, ich rufe Ihre Nummer auf.', es: 'Unos veinte minutos. Siéntese, la llamo por su número.' },
  'Zu welchem Schalter muss ich?':
    { de: 'Nummer drei, gleich links. Ziehen Sie vorher bitte eine Wartenummer.', es: 'El número tres, a la izquierda. Coja antes un número de espera.' },
  'Fehlt noch etwas?':
    { de: 'Ja, Ihre Unterschrift hier unten.', es: 'Sí, su firma aquí abajo.' },
  'Sollen wir gleich anfangen?':
    { de: 'Ja, machen wir. Ich habe die Unterlagen schon auf dem Tisch.', es: 'Sí, empecemos. Ya tengo la documentación en la mesa.' },
  'Wollen wir kurz Pause machen?':
    { de: 'Gute Idee, ich brauche einen Kaffee.', es: 'Buena idea, necesito un café.' },
  'Ich schlage Freitag vor.':
    { de: 'Freitag passt mir gut, am besten am Vormittag um zehn.', es: 'El viernes me viene bien, mejor por la mañana a las diez.' },
  'Kannst du das übernehmen?':
    { de: 'Ja, kein Problem. Bis wann brauchst du es, Mittwoch oder Freitag?', es: 'Sí, sin problema. ¿Para cuándo lo necesitas, el miércoles o el viernes?' },
  'Ich hätte gern ein Schnitzel.':
    { de: 'Sehr gern. Mit Erdäpfelsalat oder Pommes, und was möchten Sie trinken?', es: 'Con mucho gusto. ¿Con ensalada de patata o patatas fritas, y qué quiere beber?' },
  'Was können Sie empfehlen?':
    { de: 'Heute ist die Suppe sehr gut.', es: 'Hoy la sopa está muy buena.' },
  'Für mich bitte nur ein Wasser.':
    { de: 'Mit oder ohne Kohlensäure? Und darf es ein großes Glas sein?', es: '¿Con o sin gas? ¿Y se lo pongo en vaso grande?' },
  'Die Rechnung, bitte.':
    { de: 'Zusammen oder getrennt? Und zahlen Sie bar oder mit Karte?', es: '¿Junto o por separado? ¿Y paga en efectivo o con tarjeta?' },
  'Isst du gern Fisch?':
    { de: 'Ja, sehr gern, besonders gegrillt.', es: 'Sí, mucho, sobre todo a la plancha.' },
  'Ich esse kein Fleisch.':
    { de: 'Kein Problem, wir machen Gemüse.', es: 'No hay problema, hacemos verdura.' },
  'Magst du scharfes Essen?':
    { de: 'Nicht so sehr, ehrlich gesagt.', es: 'No mucho, la verdad.' },
  'Schmeckt es dir?':
    { de: 'Ja, wirklich gut! Was ist da drin, ich schmecke etwas Scharfes.', es: '¡Sí, está muy bueno! ¿Qué lleva? Noto algo picante.' },
  'Was hast du am Wochenende gemacht?':
    { de: 'Nicht viel, ich war zu Hause.', es: 'No mucho, estuve en casa.' },
  'Gestern war ich beim Arzt.':
    { de: 'Und? Was hat er gesagt?', es: '¿Y? ¿Qué te ha dicho?' },
  'Ich habe den Zug verpasst.':
    { de: 'Oh nein! Und wann fährt der nächste, oder brauchst du ein Taxi?', es: '¡Oh no! ¿Y cuándo sale el siguiente, o necesitas un taxi?' },
  'Vorhin hat deine Mutter angerufen.':
    { de: 'Danke, ich rufe sie zurück.', es: 'Gracias, la llamo yo.' },
  'Ach wirklich?':
    { de: 'Ja, ganz ehrlich. Ich habe es selbst kaum geglaubt.', es: 'Sí, de verdad. Yo mismo casi no me lo creía.' },
  'Im Ernst?':
    { de: 'Ja, ganz im Ernst. Frag ruhig die anderen, sie waren dabei.', es: 'Sí, completamente en serio. Pregunta a los demás, estaban allí.' },
  'Das tut mir leid.':
    { de: 'Danke, es geht schon wieder. Heute sehe ich es viel gelassener.', es: 'Gracias, ya voy mejor. Hoy me lo tomo con mucha más calma.' },
  'Wie groß ist die Wohnung?':
    { de: 'Sechzig Quadratmeter, zwei Zimmer und ein kleiner Balkon nach hinten.', es: 'Sesenta metros cuadrados, dos habitaciones y un balcón pequeño hacia atrás.' },
  'Was kostet die Wohnung im Monat?':
    { de: 'Achthundert Euro warm, also inklusive Betriebskosten, Heizung und Warmwasser.', es: 'Ochocientos euros con gastos, es decir, comunidad, calefacción y agua caliente incluidas.' },
  'Gibt es einen Aufzug?':
    { de: 'Ja, aber heute ist er kaputt.', es: 'Sí, pero hoy está averiado.' },
  'Ist die Wohnung möbliert?':
    { de: 'Nur die Küche ist eingerichtet, den Rest bringen Sie selbst mit.', es: 'Solo la cocina está equipada, el resto lo trae usted.' },
  'Wann kann ich sie besichtigen?':
    { de: 'Morgen um siebzehn Uhr. Bitte pünktlich, es kommen mehrere Interessenten.', es: 'Mañana a las cinco. Puntual, por favor, vienen varios interesados.' },
  'Sind Haustiere erlaubt?':
    { de: 'Katzen ja, Hunde leider nicht.', es: 'Gatos sí, perros no.' },
  'Wie viel Kaution muss ich zahlen?':
    { de: 'Drei Monatsmieten. Die bekommen Sie beim Auszug wieder zurück.', es: 'Tres mensualidades. Se las devuelven al mudarse.' },
  'Mir tut der Rücken weh.':
    { de: 'Seit wann denn? Und tut es beim Sitzen oder beim Gehen weh?', es: '¿Desde cuándo? ¿Y duele al estar sentado o al andar?' },
  'Ich habe seit Tagen Kopfschmerzen.':
    { de: 'Warst du schon beim Arzt?', es: '¿Has ido ya al médico?' },
  'Ich fühle mich nicht gut.':
    { de: 'Leg dich lieber hin. Soll ich dir einen Tee machen?', es: 'Échate mejor un rato. ¿Te hago un té?' },
  'Ich habe Fieber.':
    { de: 'Dann bleib heute zu Hause.', es: 'Entonces quédate hoy en casa.' },
  'Was würden Sie mir raten?':
    { de: 'Viel trinken und schlafen. In zwei Tagen sollte es besser sein.', es: 'Beber mucho y dormir. En dos días debería estar mejor.' },
  'Was hilft gegen Husten?':
    { de: 'Tee mit Honig und wenig reden. Das ist das Wichtigste.', es: 'Té con miel y hablar poco. Eso es lo más importante.' },
  'Soll ich eine Tablette nehmen?':
    { de: 'Frag lieber in der Apotheke.', es: 'Mejor pregunta en la farmacia.' },
  'Brauche ich ein Rezept?':
    { de: 'Nein, das gibt es frei.', es: 'No, eso se vende libre.' },
  'Wie lange soll ich zu Hause bleiben?':
    { de: 'Mindestens drei Tage, und danach fangen Sie bitte ganz langsam wieder an.', es: 'Al menos tres días, y después vuelva poco a poco, sin forzar.' },
  'Kann ich morgen wieder arbeiten?':
    { de: 'Besser übermorgen. Sonst stecken Sie die halbe Abteilung an.', es: 'Mejor pasado mañana. Si no, contagia a medio departamento.' },
  'Aus welchem Land kommst du?':
    { de: 'Aus Spanien, aus der Nähe von Madrid.', es: 'De España, de cerca de Madrid.' },
  'Seit wann bist du in Wien?':
    { de: 'Seit zwei Jahren. Die ersten Monate waren hart, jetzt geht es gut.', es: 'Desde hace dos años. Los primeros meses fueron duros, ahora va bien.' },
  'Was ist deine Muttersprache?':
    { de: 'Spanisch, und ein bisschen Katalanisch.', es: 'El español, y un poco de catalán.' },

  'Wie schreibt man Ihren Namen?':
    { de: 'Mit V wie Viktor, nicht mit W. Soll ich es Ihnen aufschreiben?', es: 'Con V de Víctor, no con W. ¿Se lo escribo?' },


  'Wohin fährst du im Urlaub?':
    { de: 'Nach Kroatien, ans Meer. Wir fahren diesmal mit dem Auto hin.', es: 'A Croacia, al mar. Esta vez vamos en coche.' },
  'Warst du schon mal in Italien?':
    { de: 'Ja, zweimal. Es war super.', es: 'Sí, dos veces. Fue genial.' },
  'Wie lange bleibt ihr dort?':
    { de: 'Eine Woche, vielleicht zehn Tage.', es: 'Una semana, quizá diez días.' },
  'Was kann man dort machen?':
    { de: 'Wandern, schwimmen und sehr gut essen. Langweilig wird es nie.', es: 'Senderismo, nadar y comer muy bien. Aburrido no es nunca.' },
  'Habt ihr schon eine Unterkunft?':
    { de: 'Ja, eine kleine Wohnung direkt am Hafen, für zwei Wochen.', es: 'Sí, un piso pequeño justo en el puerto, para dos semanas.' },
  'Warum lernst du Deutsch?':
    { de: 'Weil ich hier arbeiten möchte.', es: 'Porque quiero trabajar aquí.' },
  'Was fällt dir am schwersten?':
    { de: 'Die Aussprache, ganz klar. Vor allem das r und das ch.', es: 'La pronunciación, sin duda. Sobre todo la r y la ch.' },
  'Wie oft übst du?':
    { de: 'Jeden Tag ein bisschen, meistens zwanzig Minuten in der U-Bahn.', es: 'Un poco cada día, casi siempre veinte minutos en el metro.' },
  'Was ist dein Ziel?':
    { de: 'Die B1-Prüfung im Sommer, und danach ein Job mit Kundenkontakt.', es: 'El examen B1 en verano, y después un trabajo con trato al cliente.' },
  'Machst du Fortschritte?':
    { de: 'Langsam, aber ja. Beim Arzt habe ich neulich alles selbst erklärt.', es: 'Despacio, pero sí. El otro día en el médico lo expliqué todo yo solo.' },
  'Hast du die Hausaufgabe gemacht?':
    { de: 'Fast, mir fehlt noch eine Übung.', es: 'Casi, me falta un ejercicio.' },
  'Darf ich Ihnen Frau Berger vorstellen?':
    { de: 'Sehr angenehm, Berger. In welcher Abteilung arbeiten Sie denn?', es: 'Mucho gusto, Berger. ¿Y en qué departamento trabaja usted?' },
  'Ich bin die neue Kollegin aus dem Büro nebenan.':
    { de: 'Willkommen! Wenn Sie Fragen haben, fragen Sie.', es: '¡Bienvenida! Si tiene dudas, pregunte.' },
  'Ich fange heute bei Ihnen an.':
    { de: 'Schön, dass Sie da sind.', es: 'Nos alegra que esté aquí.' },
  'Wir sehen uns bei der Besprechung.':
    { de: 'Ja, um zehn im großen Raum.', es: 'Sí, a las diez en la sala grande.' },
  'Das habe ich nicht ganz verstanden.':
    { de: 'Ich erkläre es Ihnen noch einmal.', es: 'Se lo explico otra vez.' },
  'Wie meinen Sie das?':
    { de: 'Ich meine, bis heute Abend.', es: 'Quiero decir, para esta noche.' },
  'Habe ich das richtig verstanden?':
    { de: 'Ja, genau so ist es.', es: 'Sí, es exactamente así.' },
  'Was schaust du gerade?':
    { de: 'Eine Serie auf Deutsch, mit Untertiteln.', es: 'Una serie en alemán, con subtítulos.' },
  'Siehst du viel fern?':
    { de: 'Kaum, ich streame lieber. Dann schaue ich, wann ich will.', es: 'Casi nada, prefiero el streaming. Así veo cuando quiero.' },
  'Hörst du Podcasts?':
    { de: 'Ja, jeden Morgen im Zug.', es: 'Sí, cada mañana en el tren.' },
  'Wie findest du die Serie?':
    { de: 'Die ersten Folgen waren besser.', es: 'Los primeros capítulos eran mejores.' },
  'Wo hast du das gelesen?':
    { de: 'In den Nachrichten heute Morgen.', es: 'En las noticias de esta mañana.' },
  'Schaltest du abends ab?':
    { de: 'Ich versuche es, klappt aber selten.', es: 'Lo intento, pero casi nunca lo consigo.' },
  'Wann bekommen wir das Zeugnis?':
    { de: 'Am letzten Schultag, zusammen mit der Information über das nächste Jahr.', es: 'El último día de clase, junto con la información del curso que viene.',
      mas: [
        { de: 'Kommt die Information auch per Mail?', es: '¿La información llega también por correo?' },
        { de: 'Ja, am selben Tag. Prüfen Sie bitte den Spam-Ordner.', es: 'Sí, el mismo día. Mire también en la carpeta de spam.' }
      ] },
  'Mein Sohn war krank.':
    { de: 'Bringen Sie bitte eine Entschuldigung mit.', es: 'Traiga un justificante, por favor.',
      mas: [
        { de: 'Reicht eine von mir oder muss sie vom Arzt sein?', es: '¿Basta una mía o tiene que ser del médico?' },
        { de: 'Bis drei Tage reicht Ihre. Danach brauchen wir ein Attest.', es: 'Hasta tres días basta la suya. Después necesitamos un justificante médico.' }
      ] },
  'Wie läuft es in der Klasse?':
    { de: 'Sehr gut, er macht gut mit.', es: 'Muy bien, participa mucho.' },
  'Gibt es Hausaufgaben über die Ferien?':
    { de: 'Nur ein bisschen Lesen, zwanzig Minuten am Tag reichen völlig.', es: 'Solo leer un poco, veinte minutos al día bastan de sobra.' },
  'Am Anfang war alles fremd.':
    { de: 'Das kenne ich gut. Was war für dich am schwersten?', es: 'Eso lo conozco bien. ¿Qué fue lo más difícil para ti?',
      mas: [
        { de: 'Das Telefonieren. Ohne Gesicht verstehe ich viel weniger.', es: 'Hablar por teléfono. Sin ver la cara entiendo mucho menos.' },
        { de: 'Das sagen alle. Und irgendwann merkst du, dass es geht.', es: 'Eso lo dicen todos. Y un día ves que te sale.' }
      ] },
  'Ich habe mich schnell eingelebt.':
    { de: 'Das ging bei mir länger.', es: 'A mí me costó más.',
      mas: [
        { de: 'Wie lange hat es bei dir gedauert?', es: '¿A ti cuánto te costó?' },
        { de: 'Gut drei Jahre. Ich bin auch später gekommen.', es: 'Unos tres años. Yo también llegué más mayor.' }
      ] },
  'Mir fehlt manchmal meine Familie.':
    { de: 'Telefonierst du oft mit ihnen?', es: '¿Hablas mucho con ellos?' },
  'Hast du Lust, vorbeizukommen?':
    { de: 'Sehr gern, wann denn? Heute Abend hätte ich schon Zeit.', es: 'Con mucho gusto, ¿cuándo? Esta tarde ya tendría tiempo.',
      mas: [
        { de: 'Heute Abend passt mir gut. So ab sieben?', es: 'Esta tarde me viene bien. ¿A partir de las siete?' },
        { de: 'Perfekt. Ich mache uns was zu essen.', es: 'Perfecto. Preparo algo de comer.' }
      ] },
  'Treibst du regelmäßig Sport?':
    { de: 'Dreimal die Woche, meistens laufen.', es: 'Tres veces por semana, casi siempre correr.' },
  'Wo trainierst du?':
    { de: 'Im Park, nicht im Studio.', es: 'En el parque, no en el gimnasio.',
      mas: [
        { de: 'Im Prater, dort ist die Strecke flach.', es: 'En el Prater, allí el recorrido es llano.' },
        { de: 'Gute Wahl. Bergauf hätte ich auch keine Lust.', es: 'Buena elección. Cuesta arriba tampoco me apetecería.' }
      ] },
  'Kannst du mir beim Umzug helfen?':
    { de: 'Klar, wann ziehst du um?', es: 'Claro, ¿cuándo te mudas?',
      mas: [
        { de: 'Am Samstag, ab acht Uhr früh.', es: 'El sábado, a partir de las ocho.' },
        { de: 'Dann bin ich da. Habt ihr schon einen Lift bestellt?', es: 'Pues allí estaré. ¿Habéis reservado montacargas?' }
      ] },

  'Wie ist dein Name?':
    { de: 'Mein Name ist Lena Novak. Den Nachnamen schreibt man mit V, nicht mit W.', es: 'Me llamo Lena Novak. El apellido se escribe con V, no con W.' },
  'Und wie heißt du mit Nachnamen?':
    { de: 'Mit Nachnamen heiße ich Horvat. Das ist ein sehr häufiger Name in Kroatien.', es: 'De apellido me llamo Horvat. Es un apellido muy común en Croacia.' },
  'Darf ich fragen, wie Sie heißen?':
    { de: 'Natürlich. Ich heiße Peter Wagner und komme aus Salzburg.', es: 'Por supuesto. Me llamo Peter Wagner y soy de Salzburgo.' },


  'Wie war noch mal dein Name?':
    { de: 'Luna. Kein Problem, das fragen mich viele ein zweites Mal.', es: 'Luna. No pasa nada, mucha gente me lo pregunta por segunda vez.' },
  'Entschuldigung, wie spricht man Ihren Namen aus?':
    { de: 'Öztürk. Der Ton kommt auf die erste Silbe, das ist für alle schwierig.', es: 'Öztürk. El acento va en la primera sílaba, a todo el mundo le cuesta.' },
  'Wie geht es Ihnen heute?':
    { de: 'Danke, sehr gut. Und Ihnen? Sie sehen auch ganz zufrieden aus.', es: 'Gracias, muy bien. ¿Y usted? También se le ve contento.' },
  'Alles gut bei dir?':
    { de: 'Ja, alles bestens. Ich habe gerade Urlaub und schlafe endlich genug.', es: 'Sí, todo estupendo. Estoy de vacaciones y por fin duermo lo suficiente.' },
  'Mir geht es heute nicht so gut.':
    { de: 'Das tut mir leid. Willst du dich kurz setzen? Ich hole dir ein Wasser.', es: 'Lo siento. ¿Quieres sentarte un momento? Te traigo un agua.' },
  'Und selbst?':
    { de: 'Auch gut, danke. Viel Arbeit im Moment, aber das ist kein Problem.', es: 'Bien también, gracias. Ahora hay mucho trabajo, pero no pasa nada.' },
  'Ich bin ein bisschen nervös.':
    { de: 'Das ist normal am ersten Tag. In einer Stunde ist alles vorbei.', es: 'Es normal el primer día. En una hora ya habrá pasado todo.' },
  'In welchem Bezirk wohnst du?':
    { de: 'Im zehnten Bezirk, gleich beim Hauptbahnhof. Die Verbindung ist perfekt.', es: 'En el distrito diez, al lado de la estación central. La conexión es perfecta.' },
  'Fährst du oft in deine Heimat?':
    { de: 'Zweimal im Jahr, im Sommer und zu Weihnachten. Öfter geht leider nicht.', es: 'Dos veces al año, en verano y en Navidad. Más a menudo no puede ser.' },
  'Warum bist du nach Österreich gekommen?':
    { de: 'Wegen der Arbeit. Ich habe hier eine Stelle als Ingenieur gefunden.', es: 'Por el trabajo. Aquí encontré un puesto de ingeniero.',
      mas: [
        { de: 'Und war es schwer, die Stelle zu finden?', es: '¿Y fue difícil encontrar el puesto?' },
        { de: 'Ohne Deutsch schon. Deshalb lerne ich jetzt jeden Abend.', es: 'Sin alemán sí. Por eso ahora estudio todas las tardes.' }
      ] },
  'Vermisst du dein Land?':
    { de: 'Manchmal schon, vor allem das Essen und die langen Abende draußen.', es: 'A veces sí, sobre todo la comida y las tardes largas fuera.',
      mas: [
        { de: 'Das verstehe ich. Kochst du hier spanisch?', es: 'Lo entiendo. ¿Aquí cocinas español?' },
        { de: 'Fast jeden Sonntag. Die Zutaten finde ich am Brunnenmarkt.', es: 'Casi todos los domingos. Los ingredientes los encuentro en el Brunnenmarkt.' }
      ] },
  'Wie gefällt dir das Leben hier?':
    { de: 'Sehr gut. Alles funktioniert, nur der Winter ist mir noch zu lang.', es: 'Muy bien. Todo funciona, solo el invierno se me hace largo todavía.' },
  'Sie sind bestimmt der neue Kollege, oder?':
    { de: 'Ja, genau. Ich fange heute an und suche gerade mein Büro.', es: 'Sí, exacto. Empiezo hoy y estoy buscando mi despacho.' },
  'Du sprichst Spanisch, oder?':
    { de: 'Ja, das ist meine Muttersprache. Hörst du das am Akzent?', es: 'Sí, es mi lengua materna. ¿Se me nota en el acento?' },
  'Das ist wahrscheinlich Ihr Platz.':
    { de: 'Danke, aber ich glaube, meiner ist dort hinten am Fenster.', es: 'Gracias, pero creo que el mío es aquel de atrás junto a la ventana.' },
  'Ihr kennt euch vielleicht schon?':
    { de: 'Noch nicht. Aber wir wohnen offenbar in derselben Straße.', es: 'Todavía no. Pero por lo visto vivimos en la misma calle.' },
  'Du bist sicher nicht von hier.':
    { de: 'Stimmt, ich bin erst im März gekommen. Wie hast du das gemerkt?', es: 'Es verdad, llegué en marzo. ¿Cómo te has dado cuenta?' },
  'Da haben Sie völlig recht.':
    { de: 'Schön, dass Sie das auch so sehen. Dann machen wir es so.', es: 'Me alegra que lo vea igual. Entonces lo hacemos así.' },
  'Genau das denke ich auch.':
    { de: 'Dann sind wir uns einig. Das macht die Sache viel einfacher.', es: 'Entonces estamos de acuerdo. Así todo es mucho más fácil.' },
  'Das sehe ich genauso.':
    { de: 'Gut. Ich dachte schon, ich bin der Einzige mit dieser Meinung.', es: 'Bien. Ya pensaba que era el único que opinaba así.' },
  'Ja, das stimmt wirklich.':
    { de: 'Nicht wahr? Am Anfang habe ich das auch nicht geglaubt.', es: '¿Verdad que sí? Al principio yo tampoco me lo creía.' },
  'Einverstanden, machen wir das so.':
    { de: 'Perfekt. Dann schreibe ich dir morgen die Details per Mail.', es: 'Perfecto. Entonces mañana te escribo los detalles por correo.' },
  'Welche Sprachen sprichst du?':
    { de: 'Spanisch, Englisch und ein bisschen Deutsch. Französisch verstehe ich nur.', es: 'Español, inglés y un poco de alemán. El francés solo lo entiendo.',
      mas: [
        { de: 'Und wo hast du Englisch gelernt?', es: '¿Y dónde aprendiste inglés?' },
        { de: 'Ein Jahr in Irland, direkt nach der Schule.', es: 'Un año en Irlanda, justo después del colegio.' }
      ] },
  'Wie lange lernst du schon Deutsch?':
    { de: 'Seit einem Jahr. Ich gehe zweimal pro Woche in den Kurs.', es: 'Desde hace un año. Voy dos veces por semana a clase.' },
  'Deutsch ist schwer, finde ich.':
    { de: 'Am Anfang ja. Aber nach ein paar Monaten kommt es von allein.', es: 'Al principio sí. Pero después de unos meses sale solo.' },
  'Können wir bitte Deutsch sprechen? Ich möchte üben.':
    { de: 'Sehr gern. Und wenn du einen Fehler machst, sage ich es dir einfach.', es: 'Con mucho gusto. Y si cometes un error, simplemente te lo digo.' },
  'Auf Wiedersehen und einen schönen Tag noch!':
    { de: 'Danke, gleichfalls. Bis morgen um neun im Büro.', es: 'Gracias, igualmente. Hasta mañana a las nueve en la oficina.' },
  'Tschüss, bis bald!':
    { de: 'Bis bald! Melde dich, wenn du wieder in der Stadt bist.', es: '¡Hasta pronto! Avísame cuando vuelvas a estar en la ciudad.' },
  'Ich muss leider los, mein Bus kommt gleich.':
    { de: 'Kein Problem, lauf ruhig. Wir reden morgen in Ruhe weiter.', es: 'No pasa nada, vete tranquilo. Mañana seguimos hablando con calma.',
      mas: [
        { de: 'Gern. Bist du morgen auch um acht da?', es: 'Con gusto. ¿Mañana también estás a las ocho?' },
        { de: 'Ja, wie immer. Dann trinken wir einen Kaffee zusammen.', es: 'Sí, como siempre. Entonces nos tomamos un café juntos.' }
      ] },
  'Schönes Wochenende!':
    { de: 'Danke, dir auch. Hast du schon etwas geplant?', es: 'Gracias, igualmente. ¿Ya tienes algún plan?' },
  'Bis morgen, schlaf gut!':
    { de: 'Du auch. Vergiss nicht, morgen etwas früher zu kommen.', es: 'Tú también. No olvides venir un poco antes mañana.' },
  'Es war schön, Sie kennenzulernen.':
    { de: 'Ganz meinerseits. Hier ist meine Karte, schreiben Sie mir einfach.', es: 'Igualmente. Aquí tiene mi tarjeta, escríbame sin problema.' },
  'Grüß deine Familie von mir!':
    { de: 'Mache ich gern. Sie fragen immer, wie es dir in Wien geht.', es: 'Lo haré encantado. Siempre preguntan qué tal te va en Viena.' },
  'Ich bin seit fünf Jahren verheiratet und habe zwei Kinder.':
    { de: 'Zwei Kinder? Wie alt sind sie denn? Gehen sie schon in die Schule?', es: '¿Dos hijos? ¿Y qué edad tienen? ¿Ya van al colegio?' },
  'Sind Sie ledig oder verheiratet?':
    { de: 'Ich bin geschieden, aber wir verstehen uns immer noch gut.', es: 'Estoy divorciado, pero seguimos llevándonos bien.' },
  'Darf ich nach Ihrem Geburtsdatum fragen?':
    { de: 'Natürlich: am zwölften März neunzehnhundertachtundachtzig, in Lissabon.', es: 'Claro: el doce de marzo de mil novecientos ochenta y ocho, en Lisboa.' },
  'Was ist Ihre Staatsangehörigkeit?':
    { de: 'Ich habe die spanische, und seit letztem Jahr auch die österreichische.', es: 'Tengo la española y, desde el año pasado, también la austriaca.' },
  'Haben Sie Kinder?':
    { de: 'Ja, einen Sohn. Er ist sechs und geht seit September in die Schule.', es: 'Sí, un hijo. Tiene seis años y va al colegio desde septiembre.',
      mas: [
        { de: 'Und wie gefällt ihm die Schule?', es: '¿Y qué tal le gusta el colegio?' },
        { de: 'Sehr gut. Am liebsten mag er die Turnstunde.', es: 'Muy bien. Lo que más le gusta es la clase de gimnasia.' }
      ] },
  'Mein Familienstand ist ledig.':
    { de: 'Gut, das trage ich so ein. Dann brauchen wir keine weiteren Papiere.', es: 'Bien, lo anoto así. Entonces no hacen falta más papeles.' },
  'Ich bin verwitwet und lebe jetzt bei meiner Tochter.':
    { de: 'Das ist schön, dass Sie nicht allein sind. Wohnt sie auch hier in Wien?', es: 'Qué bien que no esté solo. ¿Ella también vive aquí en Viena?' },
  'Können Sie das bitte aufschreiben?':
    { de: 'Gern. Ich schreibe es Ihnen hier auf den Zettel, dann haben Sie es schwarz auf weiß.', es: 'Con gusto. Se lo escribo aquí en el papel, así lo tiene por escrito.' },
  'Sprechen Sie bitte etwas lauter, ich höre Sie schlecht.':
    { de: 'Entschuldigung. Ist es so besser? Die Verbindung ist heute wirklich schlecht.', es: 'Perdón. ¿Así mejor? Hoy la conexión está muy mal.' },
  'Noch einmal von vorne, bitte.':
    { de: 'Also: Sie kommen am Montag um acht und bringen den Ausweis mit.', es: 'Entonces: viene el lunes a las ocho y trae el documento.' },
  'Wie war die Nummer noch einmal?':
    { de: 'Null sechs sechs vier, dann eins zwei drei, vier fünf sechs sieben.', es: 'Cero seis seis cuatro, luego uno dos tres, cuatro cinco seis siete.' },
  'Ich lerne Deutsch, aber ich mache noch viele Fehler.':
    { de: 'Das ist völlig normal. Wichtig ist, dass man dich versteht, und das tue ich.', es: 'Es completamente normal. Lo importante es que se te entienda, y yo te entiendo.',
      mas: [
        { de: 'Danke. Korrigierst du mich trotzdem, wenn etwas falsch ist?', es: 'Gracias. ¿Me corriges igualmente si algo está mal?' },
        { de: 'Gern, aber nur die großen Fehler. Sonst redest du bald gar nicht mehr.', es: 'Con gusto, pero solo los errores gordos. Si no, acabas por no hablar.' }
      ] },
  'Verstehen Sie mich?':
    { de: 'Ja, sehr gut sogar. Sie sprechen deutlicher als viele Muttersprachler.', es: 'Sí, muy bien incluso. Habla usted más claro que muchos nativos.' },
  'Ich spreche nur ein paar Wörter Türkisch.':
    { de: 'Ein paar Wörter reichen schon. Die Leute freuen sich, wenn man es versucht.', es: 'Con unas pocas palabras ya basta. A la gente le gusta que lo intentes.' },
  'Welche Sprache sprechen Sie bei der Arbeit?':
    { de: 'Meistens Englisch, mit den Kollegen aus Wien aber Deutsch.', es: 'Casi siempre inglés, pero con los compañeros de Viena, alemán.' },
  'Mein Deutsch ist noch nicht so gut.':
    { de: 'Für ein Jahr Kurs ist das erstaunlich. Sprich einfach weiter, dann kommt der Rest.', es: 'Para un año de clases está asombroso. Sigue hablando y el resto llega solo.' },
  'Ich lese schon Zeitung auf Deutsch.':
    { de: 'Respekt! Die Zeitung ist schwerer als der Kurs, da steht viel Fachsprache drin.', es: '¡Respeto! El periódico es más difícil que el curso, tiene mucho lenguaje técnico.' },
  'Sprechen Sie langsamer, bitte, ich lerne noch.':
    { de: 'Selbstverständlich. Sagen Sie mir einfach Bescheid, wenn ich zu schnell werde.', es: 'Por supuesto. Dígamelo simplemente si voy demasiado rápido.' },
  'Wie alt ist Ihre Tochter?':
    { de: 'Sie wird im August sieben. Sie freut sich schon auf die Schule.', es: 'Cumple siete en agosto. Ya tiene ganas de ir al colegio.' },
  'Darf ich fragen, wie alt Sie sind?':
    { de: 'Ich bin dreiundvierzig, aber die meisten schätzen mich jünger.', es: 'Tengo cuarenta y tres, pero casi todos me echan menos.' },
  'Wann hast du Geburtstag?':
    { de: 'Am neunten November. Ich feiere immer erst am Wochenende danach.', es: 'El nueve de noviembre. Siempre lo celebro el fin de semana siguiente.' },
  'In welchem Jahr sind Sie geboren?':
    { de: 'Neunzehnhundertneunzig, im selben Jahr wie meine Frau.', es: 'En mil novecientos noventa, el mismo año que mi mujer.' },
  'Wie alt sind deine Eltern?':
    { de: 'Mein Vater ist siebzig und meine Mutter achtundsechzig. Beide sind noch fit.', es: 'Mi padre tiene setenta y mi madre sesenta y ocho. Los dos están todavía en forma.' },
  'Meine neue Adresse ist Gumpendorfer Straße 45, Tür 12.':
    { de: 'Danke, ich ändere das gleich im System. Ab wann gilt die neue Adresse?', es: 'Gracias, lo cambio ahora mismo en el sistema. ¿Desde cuándo vale la nueva dirección?' },
  'Wie ist Ihre Postleitzahl?':
    { de: 'Eins null eins null, das ist der erste Bezirk, direkt im Zentrum.', es: 'Uno cero uno cero, es el distrito uno, justo en el centro.' },
  'Unter welcher E-Mail-Adresse kann ich Sie erreichen?':
    { de: 'Am besten unter der privaten. Die geschäftliche lese ich nur am Vormittag.', es: 'Mejor en el privado. El del trabajo solo lo leo por la mañana.' },
  'Ich wohne im dritten Stock, ohne Aufzug.':
    { de: 'Ohne Aufzug im dritten Stock? Dann brauchen Sie beim Umzug viele Freunde.', es: '¿En el tercero sin ascensor? Entonces va a necesitar muchos amigos para la mudanza.' },
  'Mein Handy ist neu, die Nummer hat sich geändert.':
    { de: 'Sag sie mir bitte, dann speichere ich sie sofort ein.', es: 'Dímelo, por favor, y lo guardo ahora mismo.' },
  'Ich habe noch keinen Meldezettel.':
    { de: 'Den bekommen Sie am Magistrat. Bringen Sie den Pass und den Mietvertrag mit.', es: 'Lo consigue en el ayuntamiento. Lleve el pasaporte y el contrato de alquiler.' },
  'Ist mein Ausweis noch gültig?':
    { de: 'Bis Mai nächstes Jahr, ja. Danach müssen Sie ihn verlängern lassen.', es: 'Hasta mayo del año que viene, sí. Después tendrá que renovarlo.' },
  'Bitte füllen Sie dieses Formular aus.':
    { de: 'Mache ich. Muss ich alles ausfüllen oder nur die Felder mit dem Stern?', es: 'Lo hago. ¿Tengo que rellenarlo todo o solo los campos con el asterisco?',
      mas: [
        { de: 'Nur die mit dem Stern, der Rest ist freiwillig.', es: 'Solo los que tienen asterisco, el resto es voluntario.' },
        { de: 'Danke. Dann bin ich in zwei Minuten fertig.', es: 'Gracias. Entonces termino en dos minutos.' }
      ] },
  'Wo muss ich unterschreiben?':
    { de: 'Hier unten rechts, neben dem Datum. Mit Kugelschreiber, bitte.', es: 'Aquí abajo a la derecha, al lado de la fecha. Con bolígrafo, por favor.' },
  'Diese Angabe verstehe ich nicht.':
    { de: 'Da kommt Ihr Geburtsort hinein, also die Stadt, in der Sie geboren sind.', es: 'Ahí va su lugar de nacimiento, es decir, la ciudad en la que nació.' },
  'Muss ich das Formular heute abgeben?':
    { de: 'Nicht unbedingt. Sie können es auch bis Freitag per Post schicken.', es: 'No necesariamente. También puede enviarlo por correo hasta el viernes.' },
  'Brauchen Sie eine Kopie von meinem Pass?':
    { de: 'Ja, bitte, und zwar von der Seite mit dem Foto. Den Rest brauche ich nicht.', es: 'Sí, por favor, de la página con la foto. El resto no me hace falta.' },
  'Hier fehlt noch etwas, oder?':
    { de: 'Genau, die Telefonnummer. Ohne die können wir Sie nicht erreichen.', es: 'Exacto, el número de teléfono. Sin él no podemos localizarle.' },
  'Kann ich den Antrag auch online stellen?':
    { de: 'Ja, seit letztem Monat. Sie brauchen nur eine Handysignatur dafür.', es: 'Sí, desde el mes pasado. Solo necesita la firma digital del móvil.' },
  'Können wir eine kurze Pause machen?':
    { de: 'Ja, fünf Minuten. Danach machen wir mit Übung drei weiter.', es: 'Sí, cinco minutos. Después seguimos con el ejercicio tres.',
      mas: [
        { de: 'Darf ich schnell einen Kaffee holen?', es: '¿Puedo ir rápido a por un café?' },
        { de: 'Natürlich, aber bitte pünktlich zurück.', es: 'Claro, pero vuelva puntual, por favor.' }
      ] },
  'Was machen wir in der nächsten Stunde?':
    { de: 'Wir wiederholen die Zahlen und danach hören wir einen kurzen Dialog.', es: 'Repasamos los números y después escuchamos un diálogo corto.' },
  'Können Sie mir bitte helfen? Ich finde die Übung nicht.':
    { de: 'Natürlich. Sie ist auf Seite zweiundzwanzig, unten rechts.', es: 'Por supuesto. Está en la página veintidós, abajo a la derecha.' },
  'Ich habe eine Frage zu Übung vier.':
    { de: 'Gern. Was genau verstehst du dort nicht? Wir gehen es zusammen durch.', es: 'Claro. ¿Qué es exactamente lo que no entiendes ahí? Lo vemos juntos.' },
  'Arbeiten wir zu zweit oder allein?':
    { de: 'Zu zweit, bitte. Suchen Sie sich einen Partner an Ihrem Tisch.', es: 'Por parejas, por favor. Busquen a un compañero en su mesa.' },
  'Ich brauche noch zwei Minuten, bitte.':
    { de: 'In Ordnung. Nehmen Sie sich Zeit, wir warten auf alle.', es: 'De acuerdo. Tómese su tiempo, esperamos a todos.' },
  'Was bedeutet dieses Wort?':
    { de: 'Das heißt Übung, auf Spanisch ejercicio. Schreib es dir gleich ins Heft.', es: 'Significa Übung, en español ejercicio. Apúntalo ahora mismo en el cuaderno.' },
  'Vielen Dank, das war sehr nett von Ihnen.':
    { de: 'Keine Ursache. Melden Sie sich, wenn Sie noch etwas brauchen.', es: 'De nada. Avíseme si necesita algo más.' },
  'Entschuldigung, der Bus hatte Verspätung.':
    { de: 'Macht nichts, setzen Sie sich. Wir sind gerade bei Übung zwei.', es: 'No pasa nada, siéntese. Estamos justo en el ejercicio dos.' },
  'Das tut mir wirklich leid.':
    { de: 'Schon gut, das kann passieren. Wir machen einfach weiter.', es: 'Está bien, puede pasar. Simplemente seguimos.' },
  'Darf ich mich für die Verspätung entschuldigen?':
    { de: 'Natürlich, kein Problem. Der Verkehr war heute wirklich schlimm.', es: 'Claro, no hay problema. Hoy el tráfico estaba fatal.' },
  'Guten Morgen, schön, dass Sie da sind!':
    { de: 'Guten Morgen! Ich bin heute extra früher gekommen.', es: '¡Buenos días! Hoy he venido más temprano a propósito.' },
  'Hallo, lange nicht gesehen!':
    { de: 'Stimmt, das ist Monate her. Wie geht es dir denn?', es: 'Es verdad, hace meses. ¿Y qué tal estás?',
      mas: [
        { de: 'Gut, danke. Ich war ein halbes Jahr in Spanien.', es: 'Bien, gracias. Estuve medio año en España.' },
        { de: 'Deshalb! Erzähl, wie war es dort?', es: '¡Por eso! Cuenta, ¿qué tal por allí?' }
      ] },
  'Bis nächste Woche im Kurs!':
    { de: 'Bis dann! Vergiss die Hausaufgabe auf Seite dreißig nicht.', es: '¡Hasta entonces! No olvides los deberes de la página treinta.',
      mas: [
        { de: 'Danke, sonst hätte ich sie vergessen.', es: 'Gracias, si no se me olvida.' },
        { de: 'Dafür sind Kolleginnen da. Schönes Wochenende!', es: 'Para eso están las compañeras. ¡Buen finde!' }
      ] },
  'Schönen Abend noch!':
    { de: 'Danke, Ihnen auch. Kommen Sie gut nach Hause.', es: 'Gracias, igualmente. Que llegue bien a casa.',
      mas: [
        { de: 'Ich nehme die Straßenbahn, das geht schnell.', es: 'Cojo el tranvía, es rápido.' },
        { de: 'Gut. Bis morgen um neun!', es: 'Bien. ¡Hasta mañana a las nueve!' }
      ] },
  'Weißt du, wo mein Ladekabel ist?':
    { de: 'Ich glaube, es liegt noch im Besprechungsraum auf dem Tisch.', es: 'Creo que sigue en la sala de reuniones, encima de la mesa.' },
  'Wo finde ich hier einen Drucker?':
    { de: 'Im zweiten Stock neben der Küche. Der im Erdgeschoss ist kaputt.', es: 'En el segundo piso, al lado de la cocina. La de la planta baja está rota.' },
  'Ist mein Rucksack noch im Büro?':
    { de: 'Ja, er steht unter deinem Schreibtisch. Ich habe ihn gerade gesehen.', es: 'Sí, está debajo de tu escritorio. Acabo de verla.' },
  'Wo liegen die Ordner vom letzten Jahr?':
    { de: 'Im Schrank hinten links, ganz unten. Der Schlüssel hängt daneben.', es: 'En el armario del fondo a la izquierda, abajo del todo. La llave está al lado.' },
  'Gibt es hier irgendwo einen Kugelschreiber?':
    { de: 'Klar, nimm dir einen aus der Schublade. Da liegen genug.', es: 'Claro, coge uno del cajón. Ahí hay de sobra.' },
  'Wo ist der Schlüssel für die Tür?':
    { de: 'Den hat immer die Chefin. Frag sie kurz, sie ist im Büro.', es: 'La tiene siempre la jefa. Pregúntale, está en el despacho.' },
  'Ist das dein Handy auf dem Tisch?':
    { de: 'Nein, meines ist schwarz. Das gehört wahrscheinlich der neuen Kollegin.', es: 'No, el mío es negro. Ese seguramente es de la compañera nueva.' },
  'Welchen Beruf hast du gelernt?':
    { de: 'Ich bin gelernter Elektriker, arbeite aber jetzt im Verkauf.', es: 'Soy electricista de formación, pero ahora trabajo en ventas.',
      mas: [
        { de: 'Und warum hast du gewechselt?', es: '¿Y por qué cambiaste?' },
        { de: 'Der Rücken. Nach zehn Jahren auf der Leiter reicht es.', es: 'La espalda. Después de diez años en la escalera ya basta.' }
      ] },
  'Bei welcher Firma arbeiten Sie?':
    { de: 'Bei einer kleinen Firma im zehnten Bezirk. Wir sind nur zwölf Leute.', es: 'En una empresa pequeña del distrito diez. Somos solo doce personas.' },
  'Wie hast du diese Stelle gefunden?':
    { de: 'Über eine Kollegin. Sie hat mir die Anzeige geschickt.', es: 'Por una compañera. Ella me mandó el anuncio.' },
  'Machst du gerade ein Praktikum?':
    { de: 'Ja, drei Monate im Krankenhaus. Danach fange ich die Ausbildung an.', es: 'Sí, tres meses en el hospital. Después empiezo la formación.' },
  'Verdienst du gut bei der Arbeit?':
    { de: 'Es reicht zum Leben. Das Gehalt ist nicht hoch, aber die Arbeit gefällt mir.', es: 'Da para vivir. El sueldo no es alto, pero el trabajo me gusta.' },
  'Ist die Arbeit anstrengend?':
    { de: 'Manchmal schon, besonders am Wochenende. Aber ich habe zwei freie Tage.', es: 'A veces sí, sobre todo el fin de semana. Pero tengo dos días libres.' },
  'Möchtest du den Beruf wechseln?':
    { de: 'Vielleicht später. Erst möchte ich die Prüfung fertig machen.', es: 'Quizá más adelante. Primero quiero terminar el examen.' },
  'Ich arbeite als Krankenpflegerin im Spital.':
    { de: 'Das ist ein wichtiger Beruf. Arbeiten Sie auch nachts?', es: 'Es una profesión importante. ¿También trabaja de noche?' },
  'Mein Mann ist selbstständig.':
    { de: 'Als was denn? Selbstständig zu sein ist viel Arbeit, aber auch viel Freiheit.', es: '¿De qué? Ser autónomo es mucho trabajo, pero también mucha libertad.' },
  'Ich bin zurzeit arbeitslos.':
    { de: 'Das tut mir leid. Hast du schon beim AMS einen Termin gemacht?', es: 'Lo siento. ¿Ya has pedido cita en la oficina de empleo?' },
  'Wie viele Stunden arbeitest du pro Woche?':
    { de: 'Dreißig Stunden, also Teilzeit. Freitag habe ich immer frei.', es: 'Treinta horas, es decir, media jornada. Los viernes siempre libro.' },
  'Das ist doch nicht richtig, oder?':
    { de: 'Doch, ich habe es zweimal geprüft. Schau selbst auf die Rechnung.', es: 'Sí que lo está, lo he comprobado dos veces. Míralo tú mismo en la factura.' },
  'Da bin ich anderer Meinung.':
    { de: 'Interessant. Erklär mir bitte, warum du das anders siehst.', es: 'Interesante. Explícame por qué lo ves de otra manera.' },
  'Stimmt, so habe ich das noch nicht gesehen.':
    { de: 'Genau deshalb reden wir darüber. Zu zweit sieht man einfach mehr.', es: 'Justo por eso lo hablamos. Entre dos se ve más.' },
  'Nein, das glaube ich nicht.':
    { de: 'Warte, ich zeige es dir. Hier steht es schwarz auf weiß.', es: 'Espera, te lo enseño. Aquí está por escrito.' },
  'Du hast völlig recht, entschuldige.':
    { de: 'Kein Problem. Das kann jedem passieren, ich mache es auch oft falsch.', es: 'No pasa nada. Le puede pasar a cualquiera, yo también me equivoco a menudo.' },
  'Der Computer ist schon wieder langsam.':
    { de: 'Starte ihn einmal neu. Wenn das nicht hilft, rufe ich den Techniker.', es: 'Reinícialo. Si eso no ayuda, llamo al técnico.' },
  'Kannst du mir kurz helfen?':
    { de: 'Klar, was brauchst du? Ich habe bis halb elf Zeit.', es: 'Claro, ¿qué necesitas? Tengo tiempo hasta las diez y media.' },
  'Wo ist die Chefin heute?':
    { de: 'Sie ist bis Mittwoch auf einer Messe in München.', es: 'Está hasta el miércoles en una feria en Múnich.' },
  'Ich habe einen Termin um drei Uhr.':
    { de: 'Gut, ich trage ihn in den Kalender ein. Wo findet er statt?', es: 'Bien, la apunto en el calendario. ¿Dónde es?' },
  'Der Drucker funktioniert nicht.':
    { de: 'Er hat kein Papier mehr. Im Schrank liegt noch ein Paket.', es: 'Se ha quedado sin papel. En el armario hay todavía un paquete.' },
  'Diese Woche habe ich die späte Schicht.':
    { de: 'Dann sehen wir uns kaum. Ich arbeite nämlich immer am Vormittag.', es: 'Entonces casi no nos vemos. Yo trabajo siempre por la mañana.' },
  'Machen wir zusammen Mittagspause?':
    { de: 'Sehr gern. Um zwölf in der Kantine, oder lieber draußen im Park?', es: 'Con mucho gusto. ¿A las doce en el comedor o mejor fuera en el parque?',
      mas: [
        { de: 'Im Park, das Wetter ist zu schön für drinnen.', es: 'En el parque, hace demasiado bueno para estar dentro.' },
        { de: 'Perfekt. Ich bringe etwas zu trinken mit.', es: 'Perfecto. Yo llevo algo de beber.' }
      ] },
  'Kannst du mir die Datei schicken?':
    { de: 'Mache ich gleich. Soll ich die Kollegin auch in Kopie setzen?', es: 'Lo hago ahora mismo. ¿Pongo también a la compañera en copia?' },
  'Wann fängst du morgens an?':
    { de: 'Um sieben. Dafür bin ich schon um vier Uhr nachmittags fertig.', es: 'A las siete. A cambio termino ya a las cuatro de la tarde.' },
  'Arbeitest du auch am Wochenende?':
    { de: 'Nur jeden zweiten Samstag. Sonntag habe ich immer frei.', es: 'Solo un sábado de cada dos. El domingo siempre libro.' },
  'Wie lange dauert deine Mittagspause?':
    { de: 'Eine halbe Stunde. Das ist kurz, aber ich esse sowieso wenig.', es: 'Media hora. Es poco, pero de todos modos como poco.' },
  'Hast du morgen frei?':
    { de: 'Ja, endlich. Ich schlafe aus und gehe dann zum Arzt.', es: 'Sí, por fin. Duermo hasta tarde y luego voy al médico.' },
  'Machst du oft Überstunden?':
    { de: 'Am Monatsende schon. Die Stunden schreibe ich auf und nehme sie später frei.', es: 'A final de mes sí. Las apunto y luego las cojo libres.' },
  'Wann hast du Urlaub?':
    { de: 'Im August, drei Wochen. Wir fliegen mit den Kindern nach Spanien.', es: 'En agosto, tres semanas. Volamos con los niños a España.',
      mas: [
        { de: 'Wohin genau fahrt ihr?', es: '¿Adónde vais exactamente?' },
        { de: 'Nach Valencia, zu meinen Schwiegereltern ans Meer.', es: 'A Valencia, a casa de mis suegros, al mar.' }
      ] },
  'Kannst du am Freitag früher gehen?':
    { de: 'Ich frage die Chefin. Normalerweise ist das kein Problem.', es: 'Le pregunto a la jefa. Normalmente no hay problema.' },
  'Ich arbeite von Montag bis Donnerstag.':
    { de: 'Ein langes Wochenende jede Woche? Das klingt wirklich gut.', es: '¿Un fin de semana largo cada semana? Eso suena muy bien.' },
  'Wie viele Personen seid ihr zu Hause?':
    { de: 'Wir sind fünf: meine Eltern, meine zwei Schwestern und ich.', es: 'Somos cinco: mis padres, mis dos hermanas y yo.',
      mas: [
        { de: 'Fünf in einer Wohnung, wird das nicht eng?', es: '¿Cinco en un piso, no se queda pequeño?' },
        { de: 'Doch, aber wir sind es gewohnt. Nur das Bad ist morgens ein Problem.', es: 'Sí, pero estamos acostumbrados. Solo el baño por la mañana es un problema.' }
      ] },
  'Leben deine Großeltern noch?':
    { de: 'Meine Oma ja, sie ist sechsundachtzig und noch ganz fit.', es: 'Mi abuela sí, tiene ochenta y seis y está todavía muy bien.' },
  'Hast du viele Verwandte in Österreich?':
    { de: 'Nur einen Onkel in Graz. Der Rest der Familie lebt in Spanien.', es: 'Solo un tío en Graz. El resto de la familia vive en España.' },
  'Wie oft siehst du deine Familie?':
    { de: 'Am Telefon jeden Tag, aber persönlich nur zweimal im Jahr.', es: 'Por teléfono todos los días, pero en persona solo dos veces al año.' },
  'Wohnst du noch bei deinen Eltern?':
    { de: 'Nein, seit zwei Jahren habe ich eine eigene Wohnung.', es: 'No, desde hace dos años tengo mi propio piso.' },
  'Meine Schwester ist schwanger.':
    { de: 'Herzlichen Glückwunsch! Wann kommt das Baby denn?', es: '¡Enhorabuena! ¿Y cuándo llega el bebé?' },
  'Meine Eltern sind seit letztem Jahr geschieden.':
    { de: 'Das ist sicher nicht leicht. Wie geht es dir damit?', es: 'Seguro que no es fácil. ¿Cómo lo llevas?' },
  'Wir sind eine große Familie.':
    { de: 'Das merkt man an den Fotos. Wie viele Geschwister hast du genau?', es: 'Se nota en las fotos. ¿Cuántos hermanos tienes exactamente?' },
  'Ich bin Einzelkind.':
    { de: 'Und war das schön oder eher langweilig als Kind?', es: '¿Y eso era bonito o más bien aburrido de niño?' },
  'Mein Sohn sieht seinem Vater sehr ähnlich.':
    { de: 'Wirklich, die gleichen Augen. Und der Charakter auch?', es: 'Es verdad, los mismos ojos. ¿Y el carácter también?' },
  'Am Samstag ist eine große Familienfeier.':
    { de: 'Wie schön! Wer kommt denn alles? Sicher über zwanzig Leute.', es: '¡Qué bien! ¿Y quién va? Seguro que más de veinte personas.' },
  'Das ist bestimmt deine Mutter auf dem Foto.':
    { de: 'Fast! Das ist meine Tante, aber alle verwechseln die beiden.', es: '¡Casi! Es mi tía, pero todo el mundo las confunde.' },
  'Ihr seid sicher Geschwister, oder?':
    { de: 'Ja, wir sind Zwillinge. Das erraten aber nicht viele beim ersten Mal.', es: 'Sí, somos gemelos. Pero no lo adivinan muchos a la primera.' },
  'Der Kleine ist wohl dein Enkel.':
    { de: 'Genau, mein erstes Enkelkind. Er wird im Jänner drei.', es: 'Exacto, mi primer nieto. Cumple tres en enero.' },
  'Du hast wahrscheinlich viele Cousins.':
    { de: 'Vierzehn insgesamt. Bei Familienfeiern kenne ich nicht alle Namen.', es: 'Catorce en total. En las fiestas familiares no me sé todos los nombres.' },
  'Das ist vielleicht dein Bruder am Telefon.':
    { de: 'Nein, das ist mein Chef. Er ruft leider auch am Sonntag an.', es: 'No, es mi jefe. Por desgracia llama también los domingos.' },
  'Wem gehört dieses Foto?':
    { de: 'Das ist von meiner Oma. Es hängt schon vierzig Jahre im Wohnzimmer.', es: 'Es de mi abuela. Lleva cuarenta años colgada en el salón.' },
  'Was ist das für ein Ring?':
    { de: 'Ein Verlobungsring. Wir haben uns im Mai verlobt.', es: 'Un anillo de compromiso. Nos prometimos en mayo.' },
  'Ist das ein Geschenk für die Hochzeit?':
    { de: 'Ja, ein Bild von der Familie. Ich hoffe, es gefällt ihnen.', es: 'Sí, un cuadro de la familia. Espero que les guste.' },
  'Wer ist die Frau auf dem Bild?':
    { de: 'Meine Schwiegermutter. Sie hat das Foto selbst ausgesucht.', es: 'Mi suegra. Ella misma eligió la foto.' },
  'Was bedeutet dieses Symbol hier?':
    { de: 'Das ist unser Familienname auf Arabisch. Mein Vater hat es geschrieben.', es: 'Es nuestro apellido en árabe. Lo escribió mi padre.' },
  'Darf ich dir meine Frau vorstellen?':
    { de: 'Sehr gern. Guten Abend, freut mich, Sie kennenzulernen.', es: 'Con mucho gusto. Buenas noches, encantado de conocerla.' },
  'Das sind meine Schwiegereltern aus Ungarn.':
    { de: 'Willkommen in Wien! Sprechen sie auch ein bisschen Deutsch?', es: '¡Bienvenidos a Viena! ¿Hablan también un poco de alemán?' },
  'Kennst du schon meinen Cousin Marco?':
    { de: 'Nein, noch nicht. Aber du hast mir schon viel von ihm erzählt.', es: 'No, todavía no. Pero ya me has hablado mucho de él.' },
  'Das ist mein Stiefvater Thomas.':
    { de: 'Guten Tag, Thomas. Wohnen Sie auch hier in der Nähe?', es: 'Buenos días, Thomas. ¿Vive usted también cerca de aquí?' },
  'Ich möchte Ihnen meinen Sohn vorstellen.':
    { de: 'Sehr gern. Und was macht er? Geht er noch zur Schule?', es: 'Encantada. ¿Y a qué se dedica? ¿Todavía va al colegio?' },
  'Möchtest du ein paar Fotos sehen?':
    { de: 'Sehr gern. Zeig mir vor allem die von der Hochzeit.', es: 'Con mucho gusto. Enséñame sobre todo las de la boda.',
      mas: [
        { de: 'Hier, das war der Abend vor der Feier.', es: 'Mira, esta era la noche antes de la fiesta.' },
        { de: 'Ihr seht alle so glücklich aus. Wo war das genau?', es: 'Se os ve a todos tan felices. ¿Dónde fue exactamente?' }
      ] },
  'Wann ist dieses Foto entstanden?':
    { de: 'Vor ungefähr zehn Jahren, im Sommer am Meer.', es: 'Hace unos diez años, en verano en la playa.' },
  'Wer steht ganz links auf dem Bild?':
    { de: 'Das ist mein Onkel. Er ist der Bruder von meiner Mutter.', es: 'Es mi tío. Es el hermano de mi madre.' },
  'Du warst als Kind sehr blond!':
    { de: 'Ja, und heute sind die Haare ganz dunkel. Das ist bei uns normal.', es: 'Sí, y hoy tengo el pelo muy oscuro. En mi familia es normal.' },
  'Darf ich das Foto fotografieren?':
    { de: 'Natürlich. Ich schicke es dir aber lieber gleich per Handy.', es: 'Claro. Pero mejor te la mando ahora mismo por el móvil.' },
  'Auf diesem Bild ist die ganze Familie.':
    { de: 'Und wer fehlt? Bei uns fehlt immer der, der fotografiert.', es: '¿Y quién falta? En mi casa siempre falta el que hace la foto.' },
  'Wer macht bei euch den Haushalt?':
    { de: 'Wir teilen uns alles. Ich koche und mein Mann putzt.', es: 'Nos lo repartimos todo. Yo cocino y mi marido limpia.' },
  'Streitet ihr oft?':
    { de: 'Selten, und wenn, dann nur wegen Kleinigkeiten. Danach vertragen wir uns schnell.', es: 'Pocas veces, y cuando pasa es por tonterías. Después hacemos las paces enseguida.',
      mas: [
        { de: 'Worüber denn zum Beispiel?', es: '¿Por ejemplo sobre qué?' },
        { de: 'Wer den Müll runterbringt. Immer dasselbe Thema.', es: 'Sobre quién baja la basura. Siempre el mismo tema.' }
      ] },
  'Ich kümmere mich um meine Oma.':
    { de: 'Das ist viel Arbeit. Hast du jemanden, der dir manchmal hilft?', es: 'Eso es mucho trabajo. ¿Tienes a alguien que te ayude a veces?' },
  'Meine Kinder helfen kaum im Haushalt.':
    { de: 'Das kenne ich. Bei uns hat erst ein fester Plan geholfen.', es: 'Eso lo conozco. En mi casa solo funcionó con un plan fijo.' },
  'Wir essen abends immer zusammen.':
    { de: 'Das finde ich wichtig. Bei uns klappt das leider nur am Wochenende.', es: 'Eso me parece importante. En mi casa solo sale el fin de semana.' },
  'Mein Bruder wohnt wieder bei meinen Eltern.':
    { de: 'Wegen der Miete? Das machen im Moment viele junge Leute.', es: '¿Por el alquiler? Ahora mismo lo hacen muchos jóvenes.' },
  'Die Kinder vertragen sich heute wieder.':
    { de: 'Zum Glück. Gestern haben sie den ganzen Nachmittag gestritten.', es: 'Menos mal. Ayer estuvieron discutiendo toda la tarde.' },
  'Die Beziehung zu meinem Vater ist heute gut.':
    { de: 'Das freut mich für dich. War das früher anders?', es: 'Me alegro por ti. ¿Antes era distinto?' },
  'Wie spät ist es eigentlich?':
    { de: 'Schon Viertel nach sieben. Wir sollten langsam losgehen.', es: 'Ya son las siete y cuarto. Deberíamos ir saliendo.' },
  'Wann stehst du normalerweise auf?':
    { de: 'Unter der Woche um halb sieben, am Wochenende viel später.', es: 'Entre semana a las seis y media, el fin de semana mucho más tarde.' },
  'Der Wecker klingelt bei mir um fünf.':
    { de: 'So früh? Dann gehst du abends sicher zeitig ins Bett.', es: '¿Tan temprano? Entonces seguro que te acuestas pronto.' },
  'Ich habe heute gar keine Zeit.':
    { de: 'Kein Problem, dann verschieben wir es auf morgen Nachmittag.', es: 'No pasa nada, lo dejamos para mañana por la tarde.' },
  'Wie lange brauchst du bis zur Arbeit?':
    { de: 'Mit der U-Bahn zwanzig Minuten, mit dem Rad eine halbe Stunde.', es: 'En metro veinte minutos, en bici media hora.' },
  'Um wie viel Uhr fängt der Film an?':
    { de: 'Um zwanzig Uhr dreißig. Sei bitte zehn Minuten vorher da.', es: 'A las ocho y media. Estate allí diez minutos antes, por favor.' },
  'Bist du immer so pünktlich?':
    { de: 'Fast immer. Zu spät zu kommen macht mich selbst nervös.', es: 'Casi siempre. Llegar tarde me pone nervioso a mí mismo.' },
  'Mein Tag ist heute völlig voll.':
    { de: 'Das klingt anstrengend. Hast du wenigstens abends eine Pause?', es: 'Suena agotador. ¿Al menos tienes un descanso por la noche?' },
  'Ich schaffe das nicht bis Freitag.':
    { de: 'Dann sag Bescheid. Wir können den Termin auf Montag legen.', es: 'Pues avisa. Podemos pasar la cita al lunes.' },
  'Nachher gehe ich noch schnell einkaufen.':
    { de: 'Kannst du mir Brot und Milch mitbringen? Ich gebe dir das Geld.', es: '¿Me puedes traer pan y leche? Te doy el dinero.' },
  'Könnten Sie mir bitte kurz die Tür aufhalten?':
    { de: 'Natürlich, gehen Sie ruhig vor. Sie haben ja beide Hände voll.', es: 'Claro, pase usted. Va con las dos manos ocupadas.' },
  'Darf ich dich um einen Gefallen bitten?':
    { de: 'Klar, frag einfach. Wenn ich kann, helfe ich dir gern.', es: 'Claro, dime. Si puedo, te ayudo con mucho gusto.' },
  'Kannst du mich morgen früh anrufen?':
    { de: 'Mache ich. Um wie viel Uhr soll ich anrufen?', es: 'Lo hago. ¿A qué hora te llamo?' },
  'Würden Sie das bitte noch einmal prüfen?':
    { de: 'Gern. Ich schaue es mir bis heute Nachmittag genau an.', es: 'Con gusto. Se lo miro con detalle antes de esta tarde.' },
  'Hilfst du mir kurz beim Tragen?':
    { de: 'Natürlich, ich nehme die schwere Tasche. Wohin müssen die Sachen?', es: 'Claro, yo cojo la bolsa pesada. ¿Adónde van las cosas?' },
  'Könnten Sie mir bitte den Weg zeigen?':
    { de: 'Sehr gern. Gehen Sie hier geradeaus und dann die zweite Straße rechts.', es: 'Con mucho gusto. Siga recto y luego la segunda calle a la derecha.' },
  'Kannst du bitte etwas leiser sein?':
    { de: 'Entschuldigung, ich habe nicht gemerkt, dass du arbeitest.', es: 'Perdona, no me había dado cuenta de que estabas trabajando.' },
  'Darf ich Sie kurz stören?':
    { de: 'Ja, bitte. Ich habe jetzt fünf Minuten Zeit für Sie.', es: 'Sí, dígame. Ahora tengo cinco minutos para usted.' },
  'Bis wann hat die Apotheke heute offen?':
    { de: 'Bis achtzehn Uhr. Danach gibt es nur den Nachtdienst am Gürtel.', es: 'Hasta las seis. Después solo está la de guardia en el Gürtel.' },
  'Ist das Amt am Samstag geöffnet?':
    { de: 'Nein, nur Montag bis Freitag. Am Donnerstag sogar bis achtzehn Uhr.', es: 'No, solo de lunes a viernes. Los jueves incluso hasta las seis.' },
  'Wann macht der Supermarkt zu?':
    { de: 'Um zwanzig Uhr, aber am Samstag schon um achtzehn Uhr.', es: 'A las ocho, pero el sábado ya a las seis.' },
  'Haben Sie über Mittag geschlossen?':
    { de: 'Ja, von zwölf bis dreizehn Uhr. Danach sind wir wieder da.', es: 'Sí, de doce a una. Después volvemos a estar.' },
  'Ab wann kann ich morgen kommen?':
    { de: 'Ab acht Uhr früh. Vorher ist niemand im Büro.', es: 'A partir de las ocho de la mañana. Antes no hay nadie en la oficina.' },
  'Wie lange dauert die Sprechstunde?':
    { de: 'Zwei Stunden, aber kommen Sie lieber früh. Sonst warten Sie lange.', es: 'Dos horas, pero venga mejor temprano. Si no, espera mucho.' },
  'Hast du am Wochenende schon etwas vor?':
    { de: 'Am Samstag arbeite ich, aber der Sonntag ist noch frei.', es: 'El sábado trabajo, pero el domingo lo tengo libre.',
      mas: [
        { de: 'Dann gehen wir am Sonntag wandern?', es: '¿Entonces vamos el domingo de senderismo?' },
        { de: 'Gern, aber bitte nicht zu früh. Vor neun stehe ich nicht auf.', es: 'Con gusto, pero no muy temprano. Antes de las nueve no me levanto.' }
      ] },
  'Wollen wir uns am Donnerstag treffen?':
    { de: 'Gern, aber bitte erst nach sechs. Vorher bin ich im Kurs.', es: 'Con gusto, pero después de las seis. Antes estoy en clase.' },
  'Passt es dir um halb acht?':
    { de: 'Etwas später wäre besser, sagen wir um acht Uhr.', es: 'Un poco más tarde sería mejor, digamos a las ocho.' },
  'Ich muss unseren Termin leider verschieben.':
    { de: 'Kein Problem. Passt dir nächste Woche Dienstag zur gleichen Zeit?', es: 'No pasa nada. ¿Te viene bien el martes que viene a la misma hora?',
      mas: [
        { de: 'Dienstag passt sehr gut, danke für dein Verständnis.', es: 'El martes me viene muy bien, gracias por entenderlo.' },
        { de: 'Gern. Ich schicke dir morgen noch eine Erinnerung.', es: 'De nada. Mañana te mando un recordatorio.' }
      ] },
  'Kommst du allein oder mit Ana?':
    { de: 'Mit Ana, wenn das für dich passt. Sie freut sich schon.', es: 'Con Ana, si te parece bien. Ya tiene ganas.' },
  'Sollen wir uns direkt dort treffen?':
    { de: 'Ja, das ist einfacher. Ich schicke dir den Standort per Handy.', es: 'Sí, es más fácil. Te mando la ubicación por el móvil.' },
  'Können wir das auf nächste Woche legen?':
    { de: 'Klar. Montag oder Mittwoch, such dir einen Tag aus.', es: 'Claro. Lunes o miércoles, elige un día.' },
  'Ich komme vielleicht zehn Minuten später.':
    { de: 'Macht nichts, ich warte im Café und bestelle schon einen Kaffee.', es: 'No pasa nada, espero en el café y pido ya un café.' },
  'Bleibt es bei Freitag um sieben?':
    { de: 'Ja, alles bleibt wie besprochen. Bis Freitag dann!', es: 'Sí, todo sigue como quedamos. ¡Hasta el viernes!' },
  'Wollen wir zusammen spazieren gehen?':
    { de: 'Sehr gern, das Wetter ist perfekt dafür. Gehen wir in den Prater?', es: 'Con mucho gusto, el tiempo es perfecto. ¿Vamos al Prater?' },
  'Wie wäre es mit einem Kaffee?':
    { de: 'Gute Idee. Ich kenne ein ruhiges Café gleich um die Ecke.', es: 'Buena idea. Conozco un café tranquilo a la vuelta de la esquina.',
      mas: [
        { de: 'Haben die auch Kuchen?', es: '¿Tienen también tarta?' },
        { de: 'Den besten Apfelstrudel im Bezirk. Komm, ich zeige es dir.', es: 'El mejor strudel de manzana del distrito. Ven, te lo enseño.' }
      ] },
  'Hast du Lust auf ein Konzert?':
    { de: 'Kommt darauf an, welche Musik. Klassik höre ich lieber zu Hause.', es: 'Depende de qué música. La clásica prefiero escucharla en casa.' },
  'Machen wir eine kurze Pause?':
    { de: 'Unbedingt. Ich hole uns zwei Kaffee, du suchst einen freien Tisch.', es: 'Sin duda. Yo traigo dos cafés y tú buscas una mesa libre.' },
  'Wir möchten gern bestellen.':
    { de: 'Sehr gern. Was darf ich Ihnen bringen? Die Tagessuppe ist heute Kürbis.', es: 'Con mucho gusto. ¿Qué les traigo? La sopa del día es de calabaza.',
      mas: [
        { de: 'Dann zweimal die Suppe und einmal das Schnitzel, bitte.', es: 'Entonces dos sopas y un escalope, por favor.' },
        { de: 'Kommt sofort. Möchten Sie schon etwas zu trinken?', es: 'Enseguida. ¿Quieren ya algo de beber?' }
      ] },
  'Können wir bitte die Speisekarte haben?':
    { de: 'Natürlich, hier bitte. Die Tageskarte steht auch auf der Tafel.', es: 'Claro, aquí tiene. El menú del día está también en la pizarra.' },
  'Was ist die Spezialität des Hauses?':
    { de: 'Unser Tafelspitz. Den bestellen fast alle Gäste beim ersten Mal.', es: 'Nuestro Tafelspitz. Casi todos los clientes lo piden la primera vez.' },
  'Ich nehme das Menü mit Suppe.':
    { de: 'Gute Wahl. Und als Hauptspeise Fisch oder Fleisch?', es: 'Buena elección. ¿Y de plato principal pescado o carne?' },
  'Für mich bitte nur einen kleinen Salat.':
    { de: 'Gern. Mit Essig und Öl oder lieber mit Joghurtdressing?', es: 'Con gusto. ¿Con vinagre y aceite o mejor con salsa de yogur?' },
  'Haben Sie auch vegetarische Gerichte?':
    { de: 'Ja, drei Stück. Die Gemüselasagne empfehle ich Ihnen besonders.', es: 'Sí, tres. Le recomiendo especialmente la lasaña de verduras.' },
  'Könnten wir bitte noch Brot bekommen?':
    { de: 'Selbstverständlich, ich bringe es gleich. Möchten Sie auch Butter dazu?', es: 'Por supuesto, se lo traigo enseguida. ¿Quiere también mantequilla?' },
  'Als Nachtisch nehmen wir einen Apfelstrudel.':
    { de: 'Mit Schlagobers oder Vanillesoße? Beides passt sehr gut dazu.', es: '¿Con nata o con salsa de vainilla? Las dos cosas le van muy bien.' },
  'Die Rechnung, bitte. Wir zahlen getrennt.':
    { de: 'Kein Problem. Wer hatte die Suppe und wer das Schnitzel?', es: 'No hay problema. ¿Quién tomó la sopa y quién el escalope?' },
  'Wie viel kostet das Kilo Äpfel?':
    { de: 'Zwei Euro zwanzig. Heute sind sie im Angebot.', es: 'Dos euros veinte. Hoy están de oferta.' },
  'Ist das der Preis für ein Stück?':
    { de: 'Nein, für die ganze Packung. Ein Stück wäre viel teurer.', es: 'No, por el paquete entero. Una unidad sería mucho más cara.' },
  'Haben Sie etwas Günstigeres?':
    { de: 'Ja, hier unten im Regal. Die Qualität ist fast gleich.', es: 'Sí, aquí abajo en la estantería. La calidad es casi la misma.' },
  'Warum ist das so teuer geworden?':
    { de: 'Alles ist teurer geworden, vor allem Butter und Käse.', es: 'Todo se ha puesto más caro, sobre todo la mantequilla y el queso.' },
  'Gibt es heute eine Sonderaktion?':
    { de: 'Ja, beim Fleisch. Zwei Packungen zum Preis von einer.', es: 'Sí, en la carne. Dos paquetes al precio de uno.' },
  'Was macht das zusammen?':
    { de: 'Vierzehn Euro achtzig. Zahlen Sie bar oder mit Karte?', es: 'Catorce euros ochenta. ¿Paga en efectivo o con tarjeta?' },
  'Was isst du am liebsten?':
    { de: 'Alles mit Gemüse, aber am liebsten die Paella meiner Mutter.', es: 'Todo lo que lleve verdura, pero sobre todo la paella de mi madre.',
      mas: [
        { de: 'Kannst du die auch selbst kochen?', es: '¿La sabes cocinar tú también?' },
        { de: 'Ich versuche es, aber es schmeckt nie ganz gleich.', es: 'Lo intento, pero nunca sabe exactamente igual.' }
      ] },
  'Magst du österreichisches Essen?':
    { de: 'Sehr. Nur die Portionen sind mir manchmal ein bisschen zu groß.', es: 'Mucho. Solo que las raciones me parecen a veces algo grandes.' },
  'Isst du gern scharf?':
    { de: 'Ja, je schärfer desto besser. Meine Frau verträgt das gar nicht.', es: 'Sí, cuanto más picante mejor. Mi mujer no lo tolera nada.' },
  'Trinkst du Kaffee oder lieber Tee?':
    { de: 'Morgens Kaffee, am Nachmittag Tee. Abends nur noch Wasser.', es: 'Por la mañana café, por la tarde té. Por la noche solo agua.' },
  'Vertragen Sie Milchprodukte?':
    { de: 'Leider nicht. Käse und Milch machen mir Bauchschmerzen.', es: 'Por desgracia no. El queso y la leche me dan dolor de barriga.' },
  'Hast du eine Allergie?':
    { de: 'Ja, gegen Nüsse. Ich frage deshalb immer genau nach.', es: 'Sí, a los frutos secos. Por eso pregunto siempre con detalle.' },
  'Schmeckt dir die Suppe?':
    { de: 'Ausgezeichnet, wirklich. Was ist da alles drin?', es: 'Excelente, de verdad. ¿Qué lleva dentro?' },
  'Ich esse kein Schweinefleisch.':
    { de: 'Kein Problem, ich koche heute Hühnchen. Das mögen alle.', es: 'No hay problema, hoy cocino pollo. Le gusta a todo el mundo.' },
  'Ich bin satt, ich kann nicht mehr.':
    { de: 'Dann packe ich dir den Rest ein. Morgen schmeckt es auch noch.', es: 'Entonces te envuelvo el resto. Mañana también estará bueno.' },
  'Heute gibt es Nudeln mit Tomatensoße.':
    { de: 'Perfekt, das mögen die Kinder. Gibt es auch Salat dazu?', es: 'Perfecto, eso les gusta a los niños. ¿Hay también ensalada?' },
  'Zum Frühstück gibt es frische Semmeln.':
    { de: 'Wunderbar. Ich hole schnell die Butter und den Honig.', es: 'Estupendo. Voy a por la mantequilla y la miel.' },
  'Als Nachspeise gibt es Eis.':
    { de: 'Nicht schlecht! Welche Sorten hast du denn eingekauft?', es: '¡Nada mal! ¿Y qué sabores has comprado?' },
  'Im Angebot gibt es diese Woche Fisch.':
    { de: 'Dann nehmen wir zwei Packungen. Fisch essen wir sowieso zu selten.', es: 'Entonces cogemos dos paquetes. De todos modos comemos poco pescado.' },
  'Es gibt heute nur noch kalte Küche.':
    { de: 'Macht nichts, ein Brot mit Käse reicht mir völlig.', es: 'No importa, con un pan con queso me basta.' },
  'Wo finde ich hier den Reis?':
    { de: 'Im Regal hinten links, gleich neben den Nudeln.', es: 'En la estantería del fondo a la izquierda, al lado de la pasta.',
      mas: [
        { de: 'Danke. Und die Sojasoße?', es: 'Gracias. ¿Y la salsa de soja?' },
        { de: 'Die steht eine Reihe weiter, bei den asiatischen Produkten.', es: 'Está una fila más allá, con los productos asiáticos.' }
      ] },
  'Haben Sie noch frische Erdäpfel?':
    { de: 'Ja, gleich beim Eingang. Heute Morgen sind sie gekommen.', es: 'Sí, justo a la entrada. Han llegado esta mañana.' },
  'Brauchen Sie ein Sackerl?':
    { de: 'Nein danke, ich habe meine eigene Tasche dabei.', es: 'No, gracias, llevo mi propia bolsa.' },
  'Kann ich mit Karte zahlen?':
    { de: 'Natürlich, ab einem Euro. Bitte die Karte hier auflegen.', es: 'Claro, a partir de un euro. Ponga la tarjeta aquí, por favor.' },
  'Bis wann ist die Milch haltbar?':
    { de: 'Bis zum siebzehnten. Das steht oben auf der Packung.', es: 'Hasta el diecisiete. Está arriba en el envase.' },
  'Ich habe meine Einkaufsliste vergessen.':
    { de: 'Kein Problem, wir gehen einfach durch alle Gänge.', es: 'No pasa nada, recorremos todos los pasillos y ya está.' },
  'Der Einkaufswagen ist schon ganz voll.':
    { de: 'Dann fehlt nur noch das Obst. Danach gehen wir zur Kasse.', es: 'Entonces solo falta la fruta. Después vamos a la caja.' },
  'Haben Sie Kleingeld für den Wagen?':
    { de: 'Ja, hier ist ein Euro. Den bekomme ich nachher zurück.', es: 'Sí, aquí tiene un euro. Después lo recupero.' },
  'Wie wird das Wetter am Wochenende?':
    { de: 'Am Samstag sonnig, am Sonntag soll es leider regnen.', es: 'El sábado soleado, el domingo por desgracia dicen que llueve.',
      mas: [
        { de: 'Dann machen wir den Ausflug am Samstag.', es: 'Entonces hacemos la excursión el sábado.' },
        { de: 'Gute Idee. Ich packe trotzdem eine Jacke ein.', es: 'Buena idea. Aun así me llevo una chaqueta.' }
      ] },
  'Es ist heute richtig schwül.':
    { de: 'Furchtbar. Am Abend kommt bestimmt ein Gewitter.', es: 'Horrible. Por la tarde seguro que cae una tormenta.' },
  'Hat es bei euch auch geschneit?':
    { de: 'Ja, zehn Zentimeter über Nacht. Die Kinder waren begeistert.', es: 'Sí, diez centímetros por la noche. Los niños estaban encantados.' },
  'Wie viel Grad hat es draußen?':
    { de: 'Nur noch drei Grad. Heute Nacht soll es sogar frieren.', es: 'Ya solo tres grados. Esta noche dicen que incluso helará.' },
  'Der Himmel ist heute ganz grau.':
    { de: 'Typisch November. Bis Februar sehen wir die Sonne kaum.', es: 'Típico de noviembre. Hasta febrero casi no vemos el sol.' },
  'War das ein Blitz?':
    { de: 'Ja, und der Donner kam sofort danach. Das Gewitter ist ganz nah.', es: 'Sí, y el trueno vino justo después. La tormenta está muy cerca.' },
  'Es hat die ganze Nacht geregnet.':
    { de: 'Ich weiß, der Keller steht voll Wasser. So etwas hatten wir noch nie.', es: 'Lo sé, el sótano está lleno de agua. Nunca nos había pasado algo así.' },
  'Heute ist es endlich wieder warm.':
    { de: 'Zwanzig Grad im April, das ist schon fast Sommer.', es: 'Veinte grados en abril, eso ya es casi verano.' },
  'Im Sommer ist es hier sehr heiß.':
    { de: 'Stimmt, über dreißig Grad. Ohne Klimaanlage hält man es kaum aus.', es: 'Es verdad, más de treinta grados. Sin aire acondicionado casi no se aguanta.' },
  'Gestern gab es ein schweres Unwetter.':
    { de: 'Wir haben es im Radio gehört. Ist bei euch etwas kaputtgegangen?', es: 'Lo oímos en la radio. ¿Se os ha roto algo?' },
  'Der Nebel ist heute sehr dicht.':
    { de: 'Fahr bitte vorsichtig. Man sieht kaum zwanzig Meter weit.', es: 'Conduce con cuidado, por favor. Apenas se ven veinte metros.' },
  'Das Wetter ändert sich hier sehr schnell.':
    { de: 'Das stimmt. Morgens Sonne und mittags Regen, das ist normal.', es: 'Es verdad. Sol por la mañana y lluvia al mediodía, es lo normal.' },
  'Soll ich eine Jacke mitnehmen?':
    { de: 'Unbedingt. Am Abend wird es deutlich kühler als jetzt.', es: 'Sin falta. Por la tarde refresca bastante más que ahora.',
      mas: [
        { de: 'Reicht die dünne oder brauche ich die dicke?', es: '¿Basta con la fina o necesito la gruesa?' },
        { de: 'Nimm die dicke. Bei Wind fühlen sich zehn Grad wie fünf an.', es: 'Coge la gruesa. Con viento diez grados parecen cinco.' }
      ] },
  'Vergiss die Sonnencreme nicht!':
    { de: 'Danke für die Erinnerung. Im Rucksack habe ich noch eine Flasche.', es: 'Gracias por recordármelo. En la mochila tengo todavía un bote.' },
  'Die Straßen sind heute sehr glatt.':
    { de: 'Dann nimm lieber die U-Bahn. Mit dem Rad ist das zu gefährlich.', es: 'Pues coge mejor el metro. En bici es demasiado peligroso.' },
  'Setz bitte eine Mütze auf.':
    { de: 'Mache ich. Bei minus fünf Grad ist mir das auch lieber.', es: 'Lo hago. Con cinco bajo cero yo también lo prefiero.' },
  'Nimmst du den Regenschirm mit?':
    { de: 'Ja, der Wetterbericht hat Regen für den Nachmittag angesagt.', es: 'Sí, el parte ha anunciado lluvia para la tarde.' },
  'Zieh dir feste Schuhe an.':
    { de: 'Gute Idee, bei dem Schnee rutscht man in Turnschuhen sofort.', es: 'Buena idea, con esta nieve en zapatillas te resbalas enseguida.' },
  'Wir sollten heute drinnen bleiben.':
    { de: 'Finde ich auch. Bei dem Sturm geht niemand freiwillig raus.', es: 'Yo también lo creo. Con esta tormenta nadie sale por gusto.' },
  'Mach bitte die Heizung an.':
    { de: 'Ist schon an, aber die Wohnung braucht eine halbe Stunde.', es: 'Ya está encendida, pero el piso necesita media hora.' },
  'Wo sind meine Handschuhe?':
    { de: 'Im Flur auf der Kommode, neben deinem Schal.', es: 'En el pasillo, encima de la cómoda, al lado de tu bufanda.' },
  'Im Schatten ist es viel angenehmer.':
    { de: 'Stimmt. Setzen wir uns unter den Baum, dort weht auch ein Wind.', es: 'Es verdad. Sentémonos bajo el árbol, allí además corre el aire.' },
  'Sollen wir den Sonnenschirm aufstellen?':
    { de: 'Ja bitte, sonst verbrennen die Kinder in einer halben Stunde.', es: 'Sí, por favor, si no los niños se queman en media hora.' },
  'Mir ist eiskalt.':
    { de: 'Komm rein, ich mache dir einen heißen Tee. Draußen sind nur zwei Grad.', es: 'Entra, te hago un té caliente. Fuera solo hay dos grados.' },
  'Welche Jahreszeit magst du am liebsten?':
    { de: 'Den Herbst. Die Farben sind schön und es ist nicht mehr so heiß.', es: 'El otoño. Los colores son bonitos y ya no hace tanto calor.',
      mas: [
        { de: 'Und was machst du im Herbst am liebsten?', es: '¿Y qué es lo que más te gusta hacer en otoño?' },
        { de: 'Wandern im Wienerwald und danach einen heißen Tee.', es: 'Caminar por el Wienerwald y después un té caliente.' }
      ] },
  'Der Frühling kommt dieses Jahr früh.':
    { de: 'Ja, die Bäume blühen schon Ende März. Das gab es früher nicht.', es: 'Sí, los árboles ya florecen a finales de marzo. Antes no pasaba.' },
  'Im Winter wird es hier sehr früh dunkel.':
    { de: 'Um vier Uhr ist es schon finster. Daran gewöhnt man sich nie.', es: 'A las cuatro ya es de noche. A eso no te acostumbras nunca.' },
  'Der Sommer war dieses Jahr kurz.':
    { de: 'Und regnerisch. Wir waren nur dreimal im Freibad.', es: 'Y lluvioso. Solo fuimos tres veces a la piscina.' },
  'Wann fangen die Ferien an?':
    { de: 'Anfang Juli. Danach ist die Stadt viel ruhiger als sonst.', es: 'A principios de julio. Después la ciudad está mucho más tranquila.' },
  'Der Herbst ist meine liebste Zeit zum Wandern.':
    { de: 'Meine auch. Es ist kühl genug und die Wege sind leer.', es: 'La mía también. Hace bastante fresco y los caminos están vacíos.' },
  'Im Jänner ist es hier am kältesten.':
    { de: 'Ja, oft unter null. Dafür ist der Schnee in den Bergen perfekt.', es: 'Sí, a menudo bajo cero. A cambio la nieve en la montaña está perfecta.' },
  'Der Sonnenuntergang ist im Sommer erst um neun.':
    { de: 'Deshalb sitzen alle bis spät draußen. Das liebe ich an dieser Zeit.', es: 'Por eso todo el mundo se queda fuera hasta tarde. Eso me encanta de esta época.' },
  'Im Mai regnet es hier fast jeden Tag.':
    { de: 'Das kennen wir. Dafür ist danach alles grün.', es: 'Eso lo conocemos. A cambio después está todo verde.' },
  'Die Jahreszeiten sind in Spanien anders.':
    { de: 'Erzähl mal. Gibt es dort überhaupt einen richtigen Winter?', es: 'Cuéntame. ¿Allí hay siquiera un invierno de verdad?' },
  'Gehen wir schwimmen, wenn es warm bleibt?':
    { de: 'Sehr gern. Ich rufe dich morgen früh an, dann wissen wir mehr.', es: 'Con mucho gusto. Te llamo mañana por la mañana, entonces sabremos más.' },
  'Bei Regen fällt der Ausflug aus.':
    { de: 'Schade, aber verständlich. Dann machen wir es nächstes Wochenende.', es: 'Qué pena, pero se entiende. Entonces lo hacemos el fin de semana que viene.' },
  'Wenn es schneit, fahre ich nicht mit dem Auto.':
    { de: 'Sehr vernünftig. Die Züge fahren bei Schnee viel zuverlässiger.', es: 'Muy sensato. Con nieve los trenes son mucho más fiables.' },
  'Sollen wir drinnen oder draußen sitzen?':
    { de: 'Draußen, solange die Sonne scheint. Sonst gehen wir einfach rein.', es: 'Fuera, mientras haga sol. Si no, nos metemos y ya está.' },
  'Das Grillfest ist nur bei schönem Wetter.':
    { de: 'Dann drücke ich die Daumen. Der Wetterbericht klingt aber gut.', es: 'Pues cruzo los dedos. Aunque el parte suena bien.' },
  'Ich fahre morgen mit dem Rad, wenn es trocken bleibt.':
    { de: 'Schau vorher noch einmal nach. Für nachmittags ist Regen gemeldet.', es: 'Míralo otra vez antes. Para la tarde anuncian lluvia.' },
  'Bei Gewitter gehen wir nicht auf den Berg.':
    { de: 'Auf keinen Fall. Oben ist ein Gewitter wirklich gefährlich.', es: 'De ninguna manera. Arriba una tormenta es realmente peligrosa.' },
  'Wir verschieben das Picknick auf Sonntag.':
    { de: 'Gute Entscheidung. Am Sonntag sollen es fünfundzwanzig Grad werden.', es: 'Buena decisión. El domingo dicen que hará veinticinco grados.' },
  'Bei der Hitze bleibe ich zu Hause.':
    { de: 'Verstehe ich. Mach die Fenster früh zu, dann bleibt es kühler.', es: 'Lo entiendo. Cierra las ventanas temprano y así se mantiene más fresco.' },
  'Wie oft machst du Sport?':
    { de: 'Dreimal die Woche. Montag und Mittwoch laufen, am Samstag Fußball.', es: 'Tres veces por semana. Lunes y miércoles correr, el sábado fútbol.' },
  'Ich koche fast jeden Tag selbst.':
    { de: 'Das schaffe ich nicht. Unter der Woche esse ich meistens in der Kantine.', es: 'Yo no lo consigo. Entre semana como casi siempre en el comedor.' },
  'Ins Kino gehe ich nur selten.':
    { de: 'Wirklich? Ich gehe mindestens einmal im Monat, am liebsten allein.', es: '¿En serio? Yo voy al menos una vez al mes, y prefiero ir solo.' },
  'Ich lese jeden Abend eine halbe Stunde.':
    { de: 'Das ist eine gute Gewohnheit. Was liest du gerade?', es: 'Es una buena costumbre. ¿Qué estás leyendo ahora?' },
  'Wir treffen uns einmal im Monat.':
    { de: 'Nur einmal? Ihr wohnt doch in derselben Straße!', es: '¿Solo una vez? ¡Pero si vivís en la misma calle!' },
  'Ich habe noch nie Ski gefahren.':
    { de: 'In Österreich? Das musst du unbedingt einmal probieren.', es: '¿En Austria? Tienes que probarlo alguna vez sin falta.' },
  'Manchmal gehe ich am Abend schwimmen.':
    { de: 'Gute Idee, da ist das Bad viel leerer als am Nachmittag.', es: 'Buena idea, a esa hora la piscina está mucho más vacía que por la tarde.' },
  'Ich trainiere immer vor der Arbeit.':
    { de: 'Um wie viel Uhr denn? Ich könnte um sechs nicht aufstehen.', es: '¿Y a qué hora? Yo no podría levantarme a las seis.' },
  'Das stimmt so nicht ganz.':
    { de: 'Dann erklär es mir bitte. Ich höre gern zu.', es: 'Pues explícamelo, por favor. Te escucho con gusto.' },
  'Nein, das sehe ich völlig anders.':
    { de: 'Interessant. Warum denn? Erzähl mal.', es: 'Interesante. ¿Y por qué? Cuéntame.' },
  'Da muss ich dir widersprechen.':
    { de: 'Kein Problem, dafür reden wir ja. Was stört dich daran?', es: 'No pasa nada, para eso hablamos. ¿Qué es lo que te molesta?' },
  'Doch, ich kann sehr gut kochen!':
    { de: 'Dann beweise es. Am Samstag kochst du für uns alle.', es: 'Pues demuéstralo. El sábado cocinas para todos.' },
  'Überhaupt nicht, das war ganz anders.':
    { de: 'Dann habe ich es falsch verstanden. Wie war es wirklich?', es: 'Entonces lo he entendido mal. ¿Cómo fue de verdad?' },
  'Das glaube ich dir nicht.':
    { de: 'Warte, ich zeige dir ein Foto. Dann glaubst du es.', es: 'Espera, te enseño una foto. Entonces te lo vas a creer.' },
  'Was machst du am liebsten in deiner Freizeit?':
    { de: 'Klettern. Im Sommer draußen, im Winter in der Halle.', es: 'Escalar. En verano al aire libre, en invierno en el pabellón.',
      mas: [
        { de: 'Und wo kletterst du im Sommer?', es: '¿Y dónde escalas en verano?' },
        { de: 'Meistens in der Hohen Wand, eine Stunde von Wien.', es: 'Casi siempre en la Hohe Wand, a una hora de Viena.' }
      ] },
  'Kannst du schwimmen?':
    { de: 'Ja, seit ich klein bin. Mein Vater hat es mir beigebracht.', es: 'Sí, desde pequeño. Me enseñó mi padre.' },
  'Ich will nächstes Jahr einen Tanzkurs machen.':
    { de: 'Wie schön! Suchst du noch jemanden zum Mitmachen?', es: '¡Qué bien! ¿Buscas a alguien para apuntarse contigo?' },
  'Ich bin ziemlich schlecht in Mathematik.':
    { de: 'Das war ich auch. Mit einem guten Lehrer wird es besser.', es: 'A mí también me pasaba. Con un buen profesor mejora.' },
  'Spielst du ein Instrument?':
    { de: 'Gitarre, aber nur für mich zu Hause. Auf der Bühne wäre ich zu nervös.', es: 'La guitarra, pero solo para mí en casa. En un escenario estaría demasiado nervioso.' },
  'Ich habe vor, im Sommer Spanisch zu lernen.':
    { de: 'Perfekt, dann können wir üben. Ich bin ja Muttersprachler.', es: 'Perfecto, así podemos practicar. Yo soy nativo.' },
  'Sammelst du etwas?':
    { de: 'Alte Postkarten aus Wien. Ich habe schon über zweihundert.', es: 'Postales antiguas de Viena. Ya tengo más de doscientas.' },
  'Ich entspanne mich am besten beim Kochen.':
    { de: 'Das verstehe ich. Was kochst du, wenn du Zeit hast?', es: 'Lo entiendo. ¿Qué cocinas cuando tienes tiempo?' },
  'Bist du in einem Verein?':
    { de: 'Ja, seit drei Jahren. Wir trainieren zweimal die Woche zusammen.', es: 'Sí, desde hace tres años. Entrenamos juntos dos veces por semana.' },
  'Ich möchte gern Gitarre lernen.':
    { de: 'Fang einfach an. Für die ersten Lieder reichen vier Griffe.', es: 'Empieza sin más. Para las primeras canciones bastan cuatro acordes.' },
  'Was für Filme siehst du gern?':
    { de: 'Alles außer Horror. Am liebsten Komödien auf Deutsch, mit Untertiteln.', es: 'De todo menos terror. Sobre todo comedias en alemán, con subtítulos.' },
  'Ich lese lieber, als fernzusehen.':
    { de: 'Da bist du in der Minderheit. Welches Buch empfiehlst du mir?', es: 'En eso eres minoría. ¿Qué libro me recomiendas?' },
  'Hast du Lust, am Samstag mitzukommen?':
    { de: 'Sehr gern! Wohin geht es denn und um wie viel Uhr?', es: '¡Con mucho gusto! ¿Y adónde vamos y a qué hora?',
      mas: [
        { de: 'Wir treffen uns um zehn beim Bahnhof.', es: 'Quedamos a las diez en la estación.' },
        { de: 'Zehn ist perfekt. Soll ich etwas zu essen mitnehmen?', es: 'Las diez son perfectas. ¿Llevo algo de comer?' }
      ] },
  'Wir grillen am Sonntag, kommst du?':
    { de: 'Klar. Soll ich Salat oder etwas zu trinken mitbringen?', es: 'Claro. ¿Llevo ensalada o algo de beber?' },
  'Ich lade dich zum Essen ein.':
    { de: 'Das ist lieb, aber diesmal zahle ich. Du warst letztes Mal dran.', es: 'Qué majo, pero esta vez pago yo. La última vez te tocó a ti.' },
  'Leider kann ich am Freitag nicht.':
    { de: 'Schade. Geht es bei dir vielleicht am Samstag?', es: 'Qué pena. ¿Te va bien quizá el sábado?' },
  'Ich muss leider absagen, mir geht es nicht gut.':
    { de: 'Kein Problem, werde gesund. Wir machen es einfach nächste Woche.', es: 'No pasa nada, que te mejores. Lo hacemos la semana que viene.' },
  'Kommst du mit ins Konzert?':
    { de: 'Was für Musik denn? Wenn es nicht zu laut ist, gern.', es: '¿Y qué música es? Si no es demasiado alto, con gusto.' },
  'Vielleicht nächstes Mal, heute passt es nicht.':
    { de: 'Alles gut. Ich sage dir Bescheid, wenn wir wieder etwas planen.', es: 'Todo bien. Te aviso cuando planeemos algo otra vez.' },
  'Bring ruhig jemanden mit!':
    { de: 'Danke, dann kommt meine Schwester mit. Sie freut sich bestimmt.', es: 'Gracias, entonces viene mi hermana. Seguro que le hace ilusión.' },
  'Wer hat gestern gewonnen?':
    { de: 'Wir, drei zu eins. Das zweite Tor war wirklich schön.', es: 'Nosotros, tres a uno. El segundo gol fue realmente bonito.',
      mas: [
        { de: 'Und wer hat die Tore geschossen?', es: '¿Y quién marcó los goles?' },
        { de: 'Zweimal der Neue. Er spielt erst seit einem Monat bei uns.', es: 'Dos veces el nuevo. Solo lleva un mes con nosotros.' }
      ] },
  'Wann ist das nächste Spiel?':
    { de: 'Sonntag um fünfzehn Uhr, auf dem Platz hinter der Schule.', es: 'El domingo a las tres, en el campo de detrás del colegio.' },
  'Ich habe mich beim Training verletzt.':
    { de: 'Was ist passiert? Musst du zum Arzt?', es: '¿Qué ha pasado? ¿Tienes que ir al médico?' },
  'Unsere Mannschaft hat leider verloren.':
    { de: 'Nicht schlimm, ihr habt gut gespielt. Nächstes Mal klappt es.', es: 'No pasa nada, habéis jugado bien. La próxima vez sale.' },
  'Der neue Trainer ist wirklich streng.':
    { de: 'Das braucht die Mannschaft. Vorher war das Training zu locker.', es: 'Eso es lo que necesita el equipo. Antes el entrenamiento era demasiado flojo.' },
  'Wo trainiert ihr im Winter?':
    { de: 'In der Halle beim Bahnhof. Draußen ist es zu nass und zu kalt.', es: 'En el pabellón de al lado de la estación. Fuera está demasiado húmedo y frío.' },
  'Die Ausrüstung war ganz schön teuer.':
    { de: 'Kauf gebraucht. Im Verein verkaufen immer welche ihre alten Sachen.', es: 'Compra de segunda mano. En el club siempre hay quien vende sus cosas viejas.' },
  'Nimmst du beim Turnier teil?':
    { de: 'Ja, ich habe mich gestern angemeldet. Drückst du mir die Daumen?', es: 'Sí, me apunté ayer. ¿Me cruzas los dedos?' },
  'Was hast du gestern Abend gemacht?':
    { de: 'Nicht viel. Ich habe gekocht und danach eine Serie geschaut.', es: 'No mucho. Cociné y después vi una serie.',
      mas: [
        { de: 'Welche Serie schaust du denn gerade?', es: '¿Y qué serie estás viendo?' },
        { de: 'Eine österreichische Krimiserie. Der Dialekt ist eine Herausforderung.', es: 'Una serie policíaca austriaca. El dialecto es todo un reto.' }
      ] },
  'Ich bin heute viel zu spät aufgestanden.':
    { de: 'Das habe ich gemerkt. Hast du wenigstens gefrühstückt?', es: 'Ya lo he notado. ¿Al menos has desayunado?' },
  'Wir waren letztes Wochenende in Salzburg.':
    { de: 'Wie war es? Habt ihr auch die Altstadt gesehen?', es: '¿Qué tal? ¿Visteis también el casco antiguo?' },
  'Ich habe den ganzen Tag gearbeitet.':
    { de: 'Dann setz dich hin, ich mache dir etwas zu essen.', es: 'Pues siéntate, te preparo algo de comer.' },
  'Vorhin hat dein Chef angerufen.':
    { de: 'Schon wieder? Hat er gesagt, worum es geht?', es: '¿Otra vez? ¿Ha dicho de qué se trata?' },
  'Im Sommer bin ich zum ersten Mal geflogen.':
    { de: 'Und wie war es? Viele haben beim ersten Mal Angst.', es: '¿Y qué tal? A mucha gente le da miedo la primera vez.' },
  'Wir haben uns im Kurs kennengelernt.':
    { de: 'Wann war das denn? Ich dachte, ihr seid schon länger befreundet.', es: '¿Y cuándo fue eso? Pensaba que erais amigos desde hace más tiempo.' },
  'Gestern war ich zum ersten Mal beim Zahnarzt hier.':
    { de: 'Und? War es teuer oder zahlt die Krankenkasse?', es: '¿Y? ¿Fue caro o lo paga el seguro?' },
  'Ich habe letztes Jahr meinen Führerschein gemacht.':
    { de: 'Gratuliere! Fährst du seitdem viel Auto?', es: '¡Enhorabuena! ¿Desde entonces conduces mucho?' },
  'Plötzlich ist der Strom ausgefallen.':
    { de: 'Bei uns auch! Wir haben zwei Stunden bei Kerzenlicht gesessen.', es: '¡En nuestra casa también! Estuvimos dos horas con velas.' },
  'Der Tag war anstrengend, aber schön.':
    { de: 'Das klingt gut. Erzähl, was war das Beste daran?', es: 'Suena bien. Cuenta, ¿qué fue lo mejor?' },
  'Was für ein Zufall!':
    { de: 'Nicht wahr? Und das ausgerechnet hier, am anderen Ende der Stadt.', es: '¿Verdad que sí? Y precisamente aquí, en el otro extremo de la ciudad.' },
  'Erzähl weiter, das klingt spannend!':
    { de: 'Also, am nächsten Morgen stand plötzlich die Polizei vor der Tür.', es: 'Pues a la mañana siguiente apareció la policía en la puerta.' },
  'Im Ernst? Das wusste ich gar nicht.':
    { de: 'Doch, seit zwei Monaten schon. Ich dachte, alle wissen es.', es: 'Que sí, desde hace ya dos meses. Pensaba que lo sabía todo el mundo.' },
  'Das freut mich wirklich für dich!':
    { de: 'Danke. Ich habe lange darauf gewartet.', es: 'Gracias. Llevaba mucho tiempo esperándolo.' },
  'Oje, das tut mir leid.':
    { de: 'Danke. Es ist nicht so schlimm, wie es klingt.', es: 'Gracias. No es tan grave como suena.' },
  'Ach so, jetzt verstehe ich.':
    { de: 'Genau. Deshalb war ich gestern so schlecht gelaunt.', es: 'Exacto. Por eso ayer estaba de tan mal humor.' },
  'Das hätte ich nicht gedacht.':
    { de: 'Ich auch nicht. Manchmal kommt es eben anders.', es: 'Yo tampoco. A veces las cosas salen de otra manera.' },
  'Viel los heute, oder?':
    { de: 'Und wie. Um diese Zeit ist hier normalerweise niemand.', es: 'Y tanto. A esta hora normalmente no hay nadie aquí.' },
  'Warten Sie auch auf den Bus?':
    { de: 'Ja, seit zehn Minuten. Der kommt heute wieder zu spät.', es: 'Sí, desde hace diez minutos. Hoy vuelve a llegar tarde.' },
  'Arbeiten Sie auch in diesem Haus?':
    { de: 'Im dritten Stock, bei der Versicherung. Und Sie?', es: 'En el tercer piso, en la aseguradora. ¿Y usted?' },
  'Der Kaffee hier ist gar nicht schlecht.':
    { de: 'Finde ich auch. Und viel billiger als im Café nebenan.', es: 'Yo también lo creo. Y mucho más barato que en el café de al lado.' },
  'Ist hier noch frei?':
    { de: 'Ja, bitte setzen Sie sich. Ich gehe sowieso gleich.', es: 'Sí, siéntese. De todos modos me voy enseguida.' },
  'Wohnen Sie schon lange in diesem Viertel?':
    { de: 'Seit acht Jahren. Früher war es hier viel ruhiger.', es: 'Desde hace ocho años. Antes esto era mucho más tranquilo.' },
  'Die Tage werden schon wieder kürzer.':
    { de: 'Leider. Um sechs ist es jetzt schon fast dunkel.', es: 'Por desgracia. A las seis ya está casi oscuro.' },
  'Kennen wir uns nicht von irgendwoher?':
    { de: 'Vielleicht aus dem Deutschkurs? Ich saß immer ganz hinten.', es: '¿Quizá del curso de alemán? Yo me sentaba siempre al fondo.' },
  'Die ersten Monate waren wirklich hart.':
    { de: 'Das glaube ich dir. Was hat dir damals am meisten geholfen?', es: 'Te creo. ¿Qué fue lo que más te ayudó entonces?',
      mas: [
        { de: 'Vor allem die Bürokratie hat mich fertiggemacht.', es: 'Sobre todo la burocracia me tenía agotado.' },
        { de: 'Das kenne ich. Beim zweiten Mal weiß man wenigstens, wohin man muss.', es: 'Eso lo conozco. La segunda vez al menos sabes adónde ir.' }
      ] },
  'Am Anfang habe ich fast nichts verstanden.':
    { de: 'Und heute reden wir hier ganz normal. Das ist viel wert.', es: 'Y hoy hablamos aquí con toda normalidad. Eso vale mucho.' },
  'Meine Familie ist ein Jahr später nachgekommen.':
    { de: 'Ein Jahr allein? Das muss sehr lang gewesen sein.', es: '¿Un año solo? Debió de hacerse muy largo.' },
  'Ich habe zuerst in einer Fabrik gearbeitet.':
    { de: 'Und wie hast du dann die Stelle im Büro bekommen?', es: '¿Y cómo conseguiste luego el puesto en la oficina?' },
  'Mit der Zeit wurde alles leichter.':
    { de: 'So ist es meistens. Ab wann hast du dich hier zu Hause gefühlt?', es: 'Suele ser así. ¿Desde cuándo te sentiste aquí en casa?' },
  'Den Papierkram fand ich am schwierigsten.':
    { de: 'Da bist du nicht allein. Auch Österreicher verstehen die Formulare kaum.', es: 'No eres el único. Ni los austriacos entienden bien los formularios.' },
  'Ich habe hier viele nette Leute kennengelernt.':
    { de: 'Das ist das Wichtigste. Ohne Leute wird jede Stadt kalt.', es: 'Eso es lo más importante. Sin gente cualquier ciudad se vuelve fría.' },
  'Manchmal denke ich ans Zurückgehen.':
    { de: 'Das ist normal. Und was hält dich hier?', es: 'Es normal. ¿Y qué te retiene aquí?' },
  'Darüber möchte ich jetzt nicht reden.':
    { de: 'In Ordnung, kein Problem. Sag Bescheid, wenn du doch willst.', es: 'De acuerdo, no hay problema. Avísame si al final quieres.' },
  'Das ist mir zu privat, entschuldige.':
    { de: 'Entschuldige du, ich wollte nicht neugierig sein.', es: 'Perdona tú, no quería ser indiscreto.' },
  'Können wir später weiterreden?':
    { de: 'Klar. Ich bin bis sechs im Büro, komm einfach vorbei.', es: 'Claro. Estoy hasta las seis en la oficina, pásate cuando quieras.' },
  'Ich habe es gerade wirklich eilig.':
    { de: 'Dann lauf. Wir telefonieren heute Abend in Ruhe.', es: 'Pues corre. Hablamos esta tarde con calma por teléfono.' },
  'Lass uns bitte das Thema wechseln.':
    { de: 'Gern. Hast du das Spiel gestern gesehen?', es: 'Con gusto. ¿Viste el partido de ayer?' },
  'Ich bin heute nicht besonders gesprächig.':
    { de: 'Merke ich. Soll ich dich einfach in Ruhe lassen?', es: 'Se nota. ¿Te dejo tranquilo sin más?' },
  'Entschuldigung, wie komme ich zum Museum?':
    { de: 'Geradeaus bis zur Ampel, dann rechts. Es ist gleich gegenüber.', es: 'Recto hasta el semáforo y luego a la derecha. Está justo enfrente.',
      mas: [
        { de: 'Und ist es heute überhaupt offen?', es: '¿Y hoy está abierto siquiera?' },
        { de: 'Bis achtzehn Uhr, am Montag ist Ruhetag.', es: 'Hasta las seis, los lunes cierra.' }
      ] },
  'Ist das zu Fuß zu schaffen?':
    { de: 'Locker, zehn Minuten. Der Weg durch den Park ist sogar schöner.', es: 'Sin problema, diez minutos. El camino por el parque es incluso más bonito.' },
  'Ich glaube, ich habe mich verlaufen.':
    { de: 'Wohin möchten Sie denn? Ich kenne die Gegend gut.', es: '¿Y adónde quiere ir? Conozco bien la zona.' },
  'Gibt es hier eine Abkürzung?':
    { de: 'Ja, hinter dem Supermarkt. Das spart dir fünf Minuten.', es: 'Sí, detrás del supermercado. Te ahorra cinco minutos.' },
  'Muss ich über die Brücke?':
    { de: 'Nein, bleiben Sie auf dieser Seite. Die Brücke ist ein Umweg.', es: 'No, quédese en este lado. El puente es un rodeo.' },
  'Wo ist der nächste Supermarkt?':
    { de: 'An der Kreuzung links, dann sehen Sie ihn schon.', es: 'En el cruce a la izquierda, ahí ya lo ve.' },
  'Kann ich hier über die Straße?':
    { de: 'Besser nicht. Der Zebrastreifen ist zwanzig Meter weiter.', es: 'Mejor no. El paso de cebra está veinte metros más allá.' },
  'Ist die Post hier in der Nähe?':
    { de: 'Zwei Straßen weiter, neben der Bank. Sie hat bis achtzehn Uhr offen.', es: 'Dos calles más allá, al lado del banco. Abre hasta las seis.' },
  'Können Sie mir das auf der Karte zeigen?':
    { de: 'Natürlich. Wir sind hier, und Sie müssen dorthin.', es: 'Claro. Estamos aquí y usted tiene que ir allí.' },
  'Ich suche die Bibliothek.':
    { de: 'Die ist umgezogen. Jetzt ist sie hinter dem Rathaus.', es: 'Se ha mudado. Ahora está detrás del ayuntamiento.' },
  'Bin ich hier richtig zum Bahnhof?':
    { de: 'Fast. Sie müssen bei der nächsten Straße links abbiegen.', es: 'Casi. Tiene que girar a la izquierda en la próxima calle.' },
  'Wie lange brauche ich ungefähr?':
    { de: 'Zu Fuß eine Viertelstunde, mit dem Rad fünf Minuten.', es: 'A pie un cuarto de hora, en bici cinco minutos.' },
  'Welche Linie fährt zum Flughafen?':
    { de: 'Die S7, alle dreißig Minuten. Vom Bahnhof braucht sie eine halbe Stunde.', es: 'La S7, cada treinta minutos. Desde la estación tarda media hora.',
      mas: [
        { de: 'Und was kostet die Fahrt ungefähr?', es: '¿Y cuánto cuesta el trayecto más o menos?' },
        { de: 'Mit dem normalen Ticket vier Euro zwanzig. Der Schnellzug ist teurer.', es: 'Con el billete normal cuatro euros veinte. El rápido es más caro.' }
      ] },
  'Muss ich irgendwo umsteigen?':
    { de: 'Einmal, bei Landstraße. Dort nehmen Sie die U3 Richtung Ottakring.', es: 'Una vez, en Landstraße. Allí coge la U3 dirección Ottakring.' },
  'Fährt dieser Bus zum Krankenhaus?':
    { de: 'Nein, der hält vorher ab. Nehmen Sie den 13A.', es: 'No, ese gira antes. Coja el 13A.' },
  'Lohnt sich eine Monatskarte für mich?':
    { de: 'Wenn du täglich fährst, auf jeden Fall. Ab zwei Fahrten am Tag rechnet es sich.', es: 'Si viajas a diario, sin duda. A partir de dos viajes al día ya sale a cuenta.' },
  'Muss ich das Ticket entwerten?':
    { de: 'Ja, gleich beim Einsteigen. Sonst ist es nicht gültig.', es: 'Sí, nada más subir. Si no, no es válido.' },
  'Wann fährt die letzte U-Bahn?':
    { de: 'Unter der Woche um halb eins, am Wochenende fährt sie die ganze Nacht.', es: 'Entre semana a las doce y media, el fin de semana funciona toda la noche.' },
  'Der Zug hat zwanzig Minuten Verspätung.':
    { de: 'Dann verpassen wir den Anschluss. Ich schaue nach einer anderen Verbindung.', es: 'Entonces perdemos el enlace. Miro otra conexión.' },
  'Von welchem Gleis fährt der Zug?':
    { de: 'Von Gleis sieben, aber schau lieber noch einmal auf die Anzeige.', es: 'De la vía siete, pero mira otra vez el panel.' },
  'Ist das die richtige Richtung?':
    { de: 'Nein, du musst auf die andere Seite des Bahnsteigs.', es: 'No, tienes que ir al otro lado del andén.' },
  'Fährt am Sonntag auch die Straßenbahn?':
    { de: 'Ja, aber seltener. Ungefähr alle fünfzehn Minuten.', es: 'Sí, pero con menos frecuencia. Más o menos cada quince minutos.' },
  'Ist dieser Platz noch frei?':
    { de: 'Ja, bitte. Die Tasche nehme ich weg.', es: 'Sí, por favor. Quito la bolsa.' },
  'Entschuldigung, das ist mein reservierter Platz.':
    { de: 'Oh, Verzeihung. Ich habe die Reservierung nicht gesehen.', es: 'Ah, perdón. No he visto la reserva.' },
  'Die Fahrkarten, bitte.':
    { de: 'Einen Moment, ich habe sie auf dem Handy.', es: 'Un momento, los tengo en el móvil.' },
  'Hält dieser Zug in Wels?':
    { de: 'Nein, das ist ein Schnellzug. Sie müssen in Linz umsteigen.', es: 'No, es un tren rápido. Tiene que cambiar en Linz.' },
  'Wo ist der Speisewagen?':
    { de: 'Ganz vorne, im Wagen drei. Er hat bis zwanzig Uhr offen.', es: 'Justo delante, en el vagón tres. Abre hasta las ocho.' },
  'Gibt es hier WLAN?':
    { de: 'Ja, aber es ist ziemlich langsam. Zum Lesen reicht es.', es: 'Sí, pero va bastante lento. Para leer da.' },
  'Können Sie mir mit dem Koffer helfen?':
    { de: 'Natürlich. Soll er nach oben oder hinten zum Gepäck?', es: 'Claro. ¿La pongo arriba o atrás con el equipaje?' },
  'Wann kommen wir in Graz an?':
    { de: 'Planmäßig um sechzehn Uhr zehn. Wir sind aber schon spät dran.', es: 'Según el horario, a las cuatro y diez. Aunque ya llevamos retraso.' },
  'Ich habe meinen Anschluss verpasst.':
    { de: 'Gehen Sie zur Auskunft. Die schreiben Ihnen den nächsten Zug auf.', es: 'Vaya a información. Le apuntan el próximo tren.' },
  'Wo finde ich die Gepäckaufbewahrung?':
    { de: 'Im Untergeschoss, neben den Toiletten. Ein Schließfach kostet vier Euro.', es: 'En el sótano, al lado de los baños. Una taquilla cuesta cuatro euros.' },
  'Der Automat nimmt meine Karte nicht.':
    { de: 'Probier den daneben. Der funktioniert meistens besser.', es: 'Prueba el de al lado. Ese suele funcionar mejor.' },
  'Wir stehen seit einer Stunde im Stau.':
    { de: 'Nimm die nächste Ausfahrt. Über die Landstraße geht es schneller.', es: 'Coge la próxima salida. Por la carretera comarcal se va más rápido.' },
  'Ich habe mich total verfahren.':
    { de: 'Kein Drama. Sag mir, was du siehst, und ich lotse dich.', es: 'No es para tanto. Dime qué ves y te guío.' },
  'Mein Handyakku ist leer.':
    { de: 'Nimm meines. Die Adresse kennst du ja auswendig.', es: 'Coge el mío. La dirección te la sabes de memoria.' },
  'Ich habe meine Fahrkarte verloren.':
    { de: 'Sag es dem Schaffner sofort. Dann wird es meistens billiger.', es: 'Díselo al revisor enseguida. Así suele salir más barato.' },
  'Der Bus ist einfach vorbeigefahren.':
    { de: 'Er war wahrscheinlich voll. In zehn Minuten kommt der nächste.', es: 'Seguramente iba lleno. En diez minutos llega el siguiente.' },
  'Hier ist eine Baustelle, die Straße ist gesperrt.':
    { de: 'Dann gehen wir außen herum. Das sind nur hundert Meter mehr.', es: 'Pues damos la vuelta por fuera. Son solo cien metros más.' },
  'Ich komme bestimmt zu spät zum Termin.':
    { de: 'Ruf gleich an und sag Bescheid. Das machen die Leute lieber als warten.', es: 'Llama ahora y avisa. La gente lo prefiere a esperar.' },
  'Weißt du, wo wir gerade sind?':
    { de: 'Kurz vor der Brücke. Von da sind es noch fünf Minuten.', es: 'Justo antes del puente. Desde ahí quedan cinco minutos.' },
  'Sollen wir ein Taxi nehmen?':
    { de: 'Um diese Zeit ja. Die U-Bahn fährt nur noch alle zwanzig Minuten.', es: 'A esta hora sí. El metro ya solo pasa cada veinte minutos.' },
  'Wir suchen seit drei Monaten eine Wohnung.':
    { de: 'Das ist zäh, ich weiß. Wie viele Besichtigungen hattet ihr schon?', es: 'Es duro, lo sé. ¿Cuántas visitas habéis hecho ya?',
      mas: [
        { de: 'Zwölf Besichtigungen, und jedes Mal waren dreißig Leute da.', es: 'Doce visitas, y cada vez había treinta personas.' },
        { de: 'Das ist der Wahnsinn. Schreibt dem Vermieter vorher eine kurze Mail.', es: 'Es una locura. Escribid antes un correo corto al propietario.' }
      ] },
  'Unsere Wohnung hat fünfzig Quadratmeter.':
    { de: 'Für zwei Personen reicht das gut, wenn der Grundriss stimmt.', es: 'Para dos personas está bien, si el plano es bueno.' },
  'Wir ziehen im Mai um.':
    { de: 'Braucht ihr Hilfe? Ich habe ein Auto und am Samstag Zeit.', es: '¿Necesitáis ayuda? Tengo coche y el sábado tengo tiempo.' },
  'Der Strom ist in der Miete nicht dabei.':
    { de: 'Das ist normal hier. Rechne mit ungefähr fünfzig Euro im Monat.', es: 'Aquí es lo normal. Cuenta unos cincuenta euros al mes.' },
  'Wir wollen zuerst das Bad renovieren.':
    { de: 'Gute Reihenfolge. Das Bad zuletzt zu machen ist immer ein Fehler.', es: 'Buen orden. Dejar el baño para el final siempre es un error.' },
  'Die Wohnung ist leider nicht möbliert.':
    { de: 'Dafür kannst du alles so machen, wie du es willst.', es: 'A cambio puedes ponerlo todo a tu gusto.' },
  'Von der Terrasse hat man eine tolle Aussicht.':
    { de: 'Dann zahlt man die Miete gern. Sieht man bis zum Berg?', es: 'Entonces el alquiler se paga a gusto. ¿Se ve hasta la montaña?' },
  'Im Winter sind die Heizkosten sehr hoch.':
    { de: 'Prüf mal die Fenster. Bei alten Fenstern geht die Wärme sofort raus.', es: 'Mira las ventanas. Con ventanas viejas el calor se va enseguida.' },
  'Ab wann ist die Wohnung frei?':
    { de: 'Ab dem ersten Juni. Die alten Mieter ziehen Ende Mai aus.', es: 'A partir del uno de junio. Los inquilinos anteriores se van a finales de mayo.' },
  'Wie hoch ist die Kaution?':
    { de: 'Drei Monatsmieten. Die bekommen Sie beim Auszug zurück.', es: 'Tres mensualidades. Se la devuelven al irse.' },
  'Sind die Betriebskosten schon dabei?':
    { de: 'Ja, aber Strom und Internet zahlen Sie selbst.', es: 'Sí, pero la luz e internet los paga usted.' },
  'Gibt es einen Stellplatz für das Auto?':
    { de: 'In der Garage, ja. Der kostet fünfzig Euro extra im Monat.', es: 'En el garaje, sí. Cuesta cincuenta euros más al mes.' },
  'Wie lange läuft der Mietvertrag?':
    { de: 'Drei Jahre, danach kann man verlängern. Das machen fast alle.', es: 'Tres años, después se puede prolongar. Casi todo el mundo lo hace.' },
  'Darf ich die Wände streichen?':
    { de: 'Ja, aber beim Auszug müssen sie wieder weiß sein.', es: 'Sí, pero al irse tienen que volver a ser blancas.' },
  'Wann kann ich die Wohnung besichtigen?':
    { de: 'Morgen um siebzehn Uhr. Kommen Sie bitte pünktlich, es sind mehrere Interessenten.', es: 'Mañana a las cinco. Venga puntual, por favor, hay varios interesados.' },
  'Gibt es einen Keller oder einen Dachboden?':
    { de: 'Einen Keller, vier Quadratmeter. Für Koffer und Winterreifen reicht er.', es: 'Un sótano de cuatro metros cuadrados. Para maletas y ruedas de invierno basta.' },
  'Das Wohnzimmer gefällt mir sehr gut.':
    { de: 'Mir auch, vor allem wegen der großen Fenster.', es: 'A mí también, sobre todo por las ventanas grandes.' },
  'Die Küche finde ich zu dunkel.':
    { de: 'Mit einer guten Lampe wird das viel besser, glaub mir.', es: 'Con una buena lámpara mejora mucho, créeme.' },
  'Diese Farbe gefällt mir überhaupt nicht.':
    { de: 'Dann streichen wir es einfach. Zwei Dosen Farbe sind schnell gekauft.', es: 'Pues lo pintamos y ya está. Dos botes de pintura se compran rápido.' },
  'Das Zimmer ist wirklich gemütlich.':
    { de: 'Danke! Der Teppich und die Kissen machen den Unterschied.', es: '¡Gracias! La alfombra y los cojines marcan la diferencia.' },
  'Der Schrank passt hier gar nicht.':
    { de: 'Stimmt, er ist zu groß. Im Schlafzimmer wäre er besser.', es: 'Es verdad, es demasiado grande. En el dormitorio quedaría mejor.' },
  'Mir gefällt die Aussicht am besten.':
    { de: 'Deshalb habe ich die Wohnung genommen. Der Rest war Nebensache.', es: 'Por eso cogí el piso. Lo demás era secundario.' },
  'Das ist mir zu modern.':
    { de: 'Verstehe. Magst du es lieber gemütlich und ein bisschen altmodisch?', es: 'Entiendo. ¿Lo prefieres acogedor y un poco a la antigua?' },
  'Ich finde die Lage perfekt.':
    { de: 'Ja, zehn Minuten zur U-Bahn und der Markt gleich ums Eck.', es: 'Sí, diez minutos al metro y el mercado a la vuelta.' },
  'Haben Sie dieses Regal auch in Weiß?':
    { de: 'Im Lager ja. Ich kann es Ihnen bis Freitag bestellen.', es: 'En el almacén sí. Se lo puedo pedir para el viernes.' },
  'Was kostet dieser Tisch?':
    { de: 'Hundertneunzig Euro. Mit den Stühlen zweihundertfünfzig.', es: 'Ciento noventa euros. Con las sillas doscientos cincuenta.' },
  'Muss ich den Schrank selbst aufbauen?':
    { de: 'Nicht unbedingt. Gegen dreißig Euro machen das unsere Leute.', es: 'No necesariamente. Por treinta euros lo hace nuestro personal.' },
  'Liefern Sie auch nach Hause?':
    { de: 'Ja, innerhalb von Wien. Die Lieferung kostet zwanzig Euro.', es: 'Sí, dentro de Viena. El envío cuesta veinte euros.' },
  'Ist das Sofa auch als Bett verwendbar?':
    { de: 'Ja, man klappt es einfach auf. Soll ich es Ihnen zeigen?', es: 'Sí, se abre y ya está. ¿Se lo enseño?' },
  'Wie lange ist die Garantie?':
    { de: 'Zwei Jahre auf alles, bei den Matratzen sogar zehn.', es: 'Dos años en todo, y en los colchones incluso diez.' },
  'Kann ich das zurückgeben, wenn es nicht passt?':
    { de: 'Innerhalb von dreißig Tagen, mit Rechnung und im Originalkarton.', es: 'Dentro de treinta días, con la factura y en la caja original.' },
  'Guten Tag, wir sind neu eingezogen.':
    { de: 'Herzlich willkommen! Ich wohne nebenan, wenn Sie etwas brauchen.', es: '¡Bienvenidos! Vivo al lado, por si necesitan algo.' },
  'Entschuldigung, war es gestern zu laut?':
    { de: 'Ein bisschen, aber Sie haben ja gerade den Schrank aufgebaut.', es: 'Un poco, pero estaban montando el armario.' },
  'Wann wird der Müll abgeholt?':
    { de: 'Dienstag und Freitag früh. Die Tonnen stehen unten im Hof.', es: 'Martes y viernes por la mañana. Los cubos están abajo en el patio.' },
  'Wo ist die Waschküche?':
    { de: 'Im Keller. Man trägt sich vorher in die Liste an der Tür ein.', es: 'En el sótano. Antes hay que apuntarse en la lista de la puerta.' },
  'Gibt es im Haus eine Hausordnung?':
    { de: 'Ja, sie hängt im Eingang. Wichtig ist nur die Ruhe ab zweiundzwanzig Uhr.', es: 'Sí, están colgadas en la entrada. Lo importante es el silencio a partir de las diez.' },
  'Könnten Sie ein Paket für mich annehmen?':
    { de: 'Klar, kein Problem. Ich bin vormittags fast immer zu Hause.', es: 'Claro, sin problema. Por la mañana estoy casi siempre en casa.' },
  'Wir machen am Samstag eine kleine Feier.':
    { de: 'Danke für die Info. Sagen Sie einfach Bescheid, wenn es später wird.', es: 'Gracias por avisar. Dígamelo si se alarga.' },
  'Haben Sie zufällig Werkzeug?':
    { de: 'Einen ganzen Kasten. Was brauchen Sie, einen Bohrer?', es: 'Una caja entera. ¿Qué necesita, un taladro?' },
  'Entschuldigung, bin ich hier richtig?':
    { de: 'Für die Anmeldung ja. Ziehen Sie bitte eine Wartenummer.', es: 'Para el empadronamiento sí. Coja un número de espera, por favor.' },
  'Ich möchte einen Ausweis beantragen.':
    { de: 'Dafür brauchen Sie ein Foto, den alten Ausweis und dreißig Euro.', es: 'Para eso necesita una foto, el documento antiguo y treinta euros.',
      mas: [
        { de: 'Das Foto habe ich dabei. Reicht ein normales Passfoto?', es: 'La foto la traigo. ¿Basta con una foto de carné normal?' },
        { de: 'Wenn der Hintergrund weiß ist, ja. Sonst machen wir eines hier.', es: 'Si el fondo es blanco, sí. Si no, se la hacemos aquí.' }
      ] },
  'Welche Unterlagen muss ich mitbringen?':
    { de: 'Den Mietvertrag, den Pass und eine Meldebestätigung.', es: 'El contrato de alquiler, el pasaporte y el certificado de empadronamiento.' },
  'Kann ich den Antrag auch per Post schicken?':
    { de: 'Ja, aber dann dauert es zwei Wochen länger.', es: 'Sí, pero entonces tarda dos semanas más.' },
  'Wer ist für diesen Fall zuständig?':
    { de: 'Mein Kollege am Schalter vier. Er ist ab vierzehn Uhr da.', es: 'Mi compañero de la ventanilla cuatro. Está a partir de las dos.' },
  'Wie lange dauert die Bearbeitung?':
    { de: 'Normalerweise drei Wochen. Wir schicken Ihnen dann ein Schreiben.', es: 'Normalmente tres semanas. Después le enviamos un escrito.' },
  'Fehlt noch etwas in meinem Antrag?':
    { de: 'Nur die Unterschrift auf Seite zwei, dann ist er vollständig.', es: 'Solo la firma de la página dos, y ya está completa.' },
  'Muss ich noch einmal persönlich kommen?':
    { de: 'Nein, wir melden uns bei Ihnen. Bleiben Sie einfach erreichbar.', es: 'No, nosotros le avisamos. Esté localizable, sin más.' },
  'Könnten Sie mir das bitte erklären?':
    { de: 'Gern, Schritt für Schritt. Hier oben tragen Sie Ihren Namen ein.', es: 'Con gusto, paso a paso. Aquí arriba pone su nombre.' },
  'Vielen Dank für Ihre Auskunft.':
    { de: 'Sehr gern. Rufen Sie an, wenn noch etwas unklar ist.', es: 'De nada. Llame si algo no queda claro.' },
  'Dann bleiben wir so verblieben.':
    { de: 'Genau. Ich schicke Ihnen heute noch eine Bestätigung per Mail.', es: 'Exacto. Hoy mismo le mando una confirmación por correo.' },
  'Ich melde mich nächste Woche wieder.':
    { de: 'Gut. Am besten am Dienstag, da bin ich den ganzen Tag da.', es: 'Bien. Mejor el martes, ese día estoy todo el día.' },
  'Entschuldigen Sie die Störung.':
    { de: 'Keine Ursache, dafür sind wir da. Schönen Tag noch!', es: 'De nada, para eso estamos. ¡Que pase buen día!' },
  'Auf Wiederhören und danke nochmals.':
    { de: 'Auf Wiederhören. Und viel Erfolg mit dem Antrag!', es: 'Hasta luego. ¡Y suerte con la solicitud!' },
  'Könnten Sie mir das schriftlich bestätigen?':
    { de: 'Selbstverständlich. Geben Sie mir bitte Ihre E-Mail-Adresse.', es: 'Por supuesto. Deme su correo electrónico, por favor.' },
  'Darf ich hier kurz stehen bleiben?':
    { de: 'Nur zum Ausladen. Länger als zehn Minuten ist verboten.', es: 'Solo para descargar. Más de diez minutos está prohibido.' },
  'Ist es erlaubt, hier zu fotografieren?':
    { de: 'Im Hof ja, im Gebäude leider nicht.', es: 'En el patio sí, en el edificio por desgracia no.' },
  'Dürfen die Kinder im Hof spielen?':
    { de: 'Bis zwanzig Uhr, ja. Danach muss es ruhig sein.', es: 'Hasta las ocho, sí. Después tiene que haber silencio.' },
  'Kann ich das Fenster aufmachen?':
    { de: 'Bitte, ja. Hier drinnen ist es wirklich zu warm.', es: 'Sí, por favor. Aquí dentro hace demasiado calor.' },
  'Darf man hier mit dem Rad fahren?':
    { de: 'Nein, im Park müssen Sie schieben. Das steht auf dem Schild.', es: 'No, en el parque hay que llevarla a mano. Lo pone en el cartel.' },
  'Rauchen ist hier leider verboten.':
    { de: 'Entschuldigung, das habe ich nicht gesehen. Wo darf man denn?', es: 'Perdón, no lo había visto. ¿Y dónde se puede?' },
  'Sie dürfen das gern mitnehmen.':
    { de: 'Danke! Dann lese ich es in Ruhe zu Hause.', es: '¡Gracias! Así lo leo con calma en casa.' },
  'Muss ich vorher um Erlaubnis fragen?':
    { de: 'Besser ja. Eine kurze Mail an die Hausverwaltung reicht.', es: 'Mejor sí. Basta con un correo corto a la administración.' },
  'Ist das hier ein Parkplatz?':
    { de: 'Nur für Anrainer. Ohne Ausweis wird sofort abgeschleppt.', es: 'Solo para residentes. Sin distintivo se lo llevan enseguida.' },
  'Darf ich das kopieren?':
    { de: 'Natürlich. Der Kopierer steht im Gang, gleich links.', es: 'Claro. La fotocopiadora está en el pasillo, a la izquierda.' },
  'Normalerweise fange ich um acht an.':
    { de: 'Und schaffen Sie das immer? Die U-Bahn ist um diese Zeit voll.', es: '¿Y lo consigue siempre? El metro a esa hora va lleno.' },
  'Meistens esse ich mittags in der Kantine.':
    { de: 'Ist das Essen gut? Bei uns kocht jeder selbst vor.', es: '¿Se come bien? En mi trabajo cada uno se lo prepara.' },
  'Am Wochenende stehe ich nie vor neun auf.':
    { de: 'Das ist gesund. Der Körper braucht diese zwei Tage.', es: 'Eso es sano. El cuerpo necesita esos dos días.' },
  'Ich lese jeden Abend eine Stunde Deutsch.':
    { de: 'Deshalb bist du so schnell besser geworden.', es: 'Por eso has mejorado tan rápido.' },
  'Normalerweise mache ich das am Freitag.':
    { de: 'Diese Woche wäre Donnerstag besser. Geht das auch?', es: 'Esta semana el jueves sería mejor. ¿También te va bien?' },
  'Ich telefoniere lieber, als zu schreiben.':
    { de: 'Ich genau umgekehrt. Beim Schreiben denke ich besser nach.', es: 'Yo justo al revés. Escribiendo pienso mejor.' },
  'Sollen wir den Bericht zusammen schreiben?':
    { de: 'Gute Idee. Du machst die Zahlen und ich den Text.', es: 'Buena idea. Tú haces los números y yo el texto.',
      mas: [
        { de: 'Dann schicke ich dir heute Abend meinen Teil.', es: 'Entonces esta tarde te mando mi parte.' },
        { de: 'Perfekt. Ich baue es morgen früh zusammen und schicke es dir zurück.', es: 'Perfecto. Mañana por la mañana lo junto y te lo devuelvo.' }
      ] },
  'Wie wäre es, wenn wir früher anfangen?':
    { de: 'Ab halb acht? Dann sind wir um drei fertig.', es: '¿A las siete y media? Así terminamos a las tres.' },
  'Einverstanden, das machen wir so.':
    { de: 'Super. Ich schreibe es gleich in die Besprechungsnotiz.', es: 'Estupendo. Lo apunto ahora en el acta de la reunión.' },
  'Hast du einen besseren Vorschlag?':
    { de: 'Vielleicht. Wir fragen zuerst die Kollegen und entscheiden danach.', es: 'Quizá. Primero preguntamos a los compañeros y luego decidimos.' },
  'Hiermit beantrage ich eine Verlängerung.':
    { de: 'Ihr Antrag ist angekommen. Wir melden uns innerhalb von zehn Tagen.', es: 'Su solicitud ha llegado. Le contestamos en un plazo de diez días.' },
  'Ich bitte Sie um eine schriftliche Bestätigung.':
    { de: 'Die schicken wir Ihnen per Post an die gemeldete Adresse.', es: 'Se la enviamos por correo a la dirección registrada.' },
  'Anbei sende ich Ihnen die Unterlagen.':
    { de: 'Danke. Eine Kopie des Ausweises fehlt allerdings noch.', es: 'Gracias. Aunque falta todavía una copia del documento.' },
  'Leider kann ich die Frist nicht einhalten.':
    { de: 'Schreiben Sie uns kurz warum. Meistens verlängern wir dann.', es: 'Escríbanos brevemente por qué. Normalmente lo prolongamos.' },
  'Sehr geehrte Damen und Herren, ich wende mich an Sie wegen meines Antrags.':
    { de: 'Nennen Sie bitte immer die Aktenzahl. Sonst finden wir den Akt nicht.', es: 'Indique siempre el número de expediente. Si no, no encontramos el caso.' },
  'Mit freundlichen Grüßen und vielen Dank im Voraus.':
    { de: 'Wir haben Ihre Nachricht erhalten und leiten sie weiter.', es: 'Hemos recibido su mensaje y lo pasamos al departamento correspondiente.' },
  'Vorsicht, der Boden ist nass!':
    { de: 'Danke, fast wäre ich ausgerutscht.', es: 'Gracias, casi me resbalo.' },
  'Pass auf, das Wasser ist heiß.':
    { de: 'Gut, dass du es sagst. Ich hätte einfach hineingegriffen.', es: 'Menos mal que lo dices. Habría metido la mano sin más.' },
  'Nehmen Sie bitte im Wartezimmer Platz.':
    { de: 'Danke. Wissen Sie ungefähr, wie lange es dauert?', es: 'Gracias. ¿Sabe más o menos cuánto tardará?' },
  'Bitte bewegen Sie den Arm nicht.':
    { de: 'In Ordnung. Soll ich ihn so halten oder auflegen?', es: 'De acuerdo. ¿Lo sujeto así o lo apoyo?' },
  'Achtung, hier ist eine Stufe.':
    { de: 'Danke für den Hinweis, bei dem Licht sieht man sie kaum.', es: 'Gracias por avisar, con esta luz casi no se ve.' },
  'Könnten Sie bitte einen Moment warten?':
    { de: 'Natürlich. Ich habe Zeit, kein Problem.', es: 'Claro. Tengo tiempo, no hay problema.' },
  'Bitte nehmen Sie die Tabletten nicht auf leeren Magen.':
    { de: 'Verstanden. Also immer nach dem Essen?', es: 'Entendido. ¿Entonces siempre después de comer?' },
  'Fassen Sie die Wunde bitte nicht an.':
    { de: 'Ich versuche es. Aber es juckt die ganze Zeit.', es: 'Lo intento. Pero me pica todo el rato.' },
  'Ich habe seit drei Tagen Rückenschmerzen.':
    { de: 'Wo genau tut es weh, oben oder unten?', es: '¿Dónde le duele exactamente, arriba o abajo?',
      mas: [
        { de: 'Eher unten, direkt über dem Becken.', es: 'Más bien abajo, justo encima de la cadera.' },
        { de: 'Dann schauen wir uns das an. Legen Sie sich bitte kurz hin.', es: 'Pues vamos a verlo. Recuéstese un momento, por favor.' }
      ] },
  'Mein Knie tut beim Gehen weh.':
    { de: 'Und beim Sitzen? Ist der Schmerz dann auch da?', es: '¿Y al estar sentado? ¿También le duele?' },
  'Mir ist seit heute Morgen übel.':
    { de: 'Haben Sie etwas gegessen, was Sie sonst nicht essen?', es: '¿Ha comido algo que normalmente no come?' },
  'Ich fühle mich schwach und müde.':
    { de: 'Das kann von der Grippe kommen. Messen wir zuerst das Fieber.', es: 'Puede ser de la gripe. Primero le tomamos la fiebre.' },
  'Der Hals tut beim Schlucken weh.':
    { de: 'Machen Sie bitte den Mund auf. Ich schaue kurz hinein.', es: 'Abra la boca, por favor. Miro un momento.' },
  'Mir ist plötzlich schwindlig geworden.':
    { de: 'Setzen Sie sich. Ist das heute zum ersten Mal passiert?', es: 'Siéntese. ¿Es la primera vez que le pasa hoy?' },
  'Ich habe Fieber, achtunddreißig fünf.':
    { de: 'Das ist nicht dramatisch, aber bleiben Sie bitte zu Hause.', es: 'No es dramático, pero quédese en casa.' },
  'Der Bauch tut mir seit gestern weh.':
    { de: 'Zeigen Sie mir, wo genau. Hier oder eher hier unten?', es: 'Enséñeme dónde exactamente. ¿Aquí o más bien aquí abajo?' },
  'Ich habe mich beim Sport verletzt.':
    { de: 'Können Sie den Fuß noch belasten oder gar nicht?', es: '¿Todavía puede apoyar el pie o nada?' },
  'Die Schmerzen kommen und gehen.':
    { de: 'Wie oft am Tag ungefähr? Und wie lange halten sie an?', es: '¿Cuántas veces al día más o menos? ¿Y cuánto duran?' },
  'Heute fühle ich mich schon viel besser.':
    { de: 'Das freut mich! Trotzdem nimm es noch ein paar Tage ruhig.', es: '¡Me alegro! Aun así tómatelo con calma unos días.' },
  'Mir geht es leider gar nicht gut.':
    { de: 'Soll ich dich zum Arzt fahren? Ich habe das Auto da.', es: '¿Te llevo al médico? Tengo el coche aquí.' },
  'Ich war zwei Wochen im Krankenstand.':
    { de: 'So lange? Bist du jetzt wirklich wieder fit?', es: '¿Tanto tiempo? ¿De verdad estás ya recuperado?' },
  'Gute Besserung, werde schnell gesund!':
    { de: 'Danke dir. Ich melde mich, sobald es besser geht.', es: 'Gracias. Te aviso en cuanto esté mejor.' },
  'Das tut mir wirklich leid für dich.':
    { de: 'Danke. Reden hilft schon, ehrlich gesagt.', es: 'Gracias. Hablar ya ayuda, la verdad.' },
  'Wie geht es deiner Mutter jetzt?':
    { de: 'Besser, danke. Sie darf nächste Woche nach Hause.', es: 'Mejor, gracias. La semana que viene le dan el alta.' },
  'Brauchst du irgendetwas aus der Apotheke?':
    { de: 'Wenn du sowieso hingehst: Hustensaft, bitte.', es: 'Si vas de todos modos: jarabe para la tos, por favor.' },
  'Ruh dich aus, die Arbeit läuft nicht weg.':
    { de: 'Du hast recht. Ich mache morgen einfach weiter.', es: 'Tienes razón. Mañana simplemente sigo.' },
  'Was hilft am besten gegen Husten?':
    { de: 'Viel trinken und Tee mit Honig. Und nicht zu viel reden.', es: 'Beber mucho y té con miel. Y no hablar demasiado.',
      mas: [
        { de: 'Und wenn er nach einer Woche noch da ist?', es: '¿Y si a la semana sigue ahí?' },
        { de: 'Dann kommen Sie wieder. Wir hören dann die Lunge ab.', es: 'Entonces vuelva. Le auscultamos los pulmones.' }
      ] },
  'Soll ich zum Arzt gehen oder warten?':
    { de: 'Bei Fieber über drei Tage würde ich nicht mehr warten.', es: 'Con fiebre de más de tres días yo ya no esperaría.' },
  'Brauche ich für die Salbe ein Rezept?':
    { de: 'Für diese nicht. Sie bekommen sie frei in der Apotheke.', es: 'Para esta no. La consigue sin receta en la farmacia.' },
  'Du solltest weniger Kaffee trinken.':
    { de: 'Ich weiß. Aber ohne Kaffee komme ich morgens nicht hoch.', es: 'Lo sé. Pero sin café no me levanto por la mañana.' },
  'Ich bin voraussichtlich bis Freitag im Krankenstand.':
    { de: 'In Ordnung. Ihre Termine verschiebe ich auf nächste Woche.', es: 'De acuerdo. Sus citas las paso a la semana que viene.' },
  'Könnte jemand meine Termine übernehmen?':
    { de: 'Das macht die Kollegin. Sie kennt die Kunden ja gut.', es: 'Se encarga la compañera. Conoce bien a los clientes.' },
  'Entschuldigen Sie die kurzfristige Absage.':
    { de: 'Kein Problem, so etwas passiert. Melden Sie sich, wenn es Ihnen besser geht.', es: 'No hay problema, estas cosas pasan. Avise cuando esté mejor.' },
  'Mein Sohn ist krank, ich bleibe zu Hause.':
    { de: 'Selbstverständlich. Pflegeurlaub steht Ihnen zu.', es: 'Por supuesto. Tiene derecho a permiso por cuidado familiar.' },
  'Ich suche einen Pullover aus Wolle.':
    { de: 'Die hängen dort hinten. Welche Größe brauchen Sie?', es: 'Están colgados al fondo. ¿Qué talla necesita?',
      mas: [
        { de: 'Größe achtunddreißig, wenn Sie haben.', es: 'La talla treinta y ocho, si tienen.' },
        { de: 'In Grau und in Dunkelblau. Welche Farbe darf ich Ihnen bringen?', es: 'En gris y en azul oscuro. ¿Qué color le traigo?' }
      ] },
  'Haben Sie das eine Nummer größer?':
    { de: 'Ich schaue im Lager nach. Einen Moment bitte.', es: 'Miro en el almacén. Un momento, por favor.' },
  'Diese Hose ist mir zu weit.':
    { de: 'Wir können sie ändern lassen. Das dauert drei Tage.', es: 'Podemos mandarlo a arreglar. Tarda tres días.' },
  'Wo kann ich das anprobieren?':
    { de: 'Die Kabinen sind links hinter dem Regal.', es: 'Los probadores están a la izquierda, detrás de la estantería.' },
  'Der Stoff fühlt sich sehr angenehm an.':
    { de: 'Ja, das ist Baumwolle. Sie können es bei sechzig Grad waschen.', es: 'Sí, es algodón. Lo puede lavar a sesenta grados.' },
  'Diese Schuhe sind endlich bequem.':
    { de: 'Dann nimm sie. Bei Schuhen lohnt es sich zu zahlen.', es: 'Pues cógelos. En zapatos merece la pena pagar.' },
  'Was trägt man hier zu einer Hochzeit?':
    { de: 'Männer meistens Anzug, aber ohne Krawatte ist auch in Ordnung.', es: 'Los hombres casi siempre traje, aunque sin corbata también vale.' },
  'Der Mantel ist mir zu altmodisch.':
    { de: 'Probier den grauen daneben. Der ist viel schlichter.', es: 'Prueba el gris de al lado. Es mucho más sobrio.' },
  'Ich brauche etwas Warmes für den Winter.':
    { de: 'Dann nehmen Sie Wolle oder Daunen. Baumwolle reicht hier nicht.', es: 'Entonces coja lana o plumón. El algodón aquí no basta.' },
  'An der Jacke fehlt ein Knopf.':
    { de: 'Kein Problem, wir nähen ihn gratis an. Bis Freitag ist sie fertig.', es: 'No hay problema, se lo cosemos gratis. El viernes está lista.' },
  'Das Kleid steht dir wirklich gut.':
    { de: 'Findest du? Ich war mir bei der Farbe nicht sicher.', es: '¿Tú crees? No estaba segura del color.' },
  'Die Farbe gefällt mir überhaupt nicht.':
    { de: 'Es gibt das Modell auch in Dunkelblau. Soll ich es holen?', es: 'El modelo está también en azul oscuro. ¿Lo traigo?' },
  'Das ist genau mein Stil.':
    { de: 'Dachte ich mir. Du trägst ja immer schlichte Sachen.', es: 'Me lo imaginaba. Siempre llevas cosas sencillas.' },
  'Ehrlich gesagt gefällt mir das nicht.':
    { de: 'Danke für die Ehrlichkeit. Dann probiere ich etwas anderes.', es: 'Gracias por la sinceridad. Pues pruebo otra cosa.' },
  'Das sieht sehr elegant aus.':
    { de: 'Vielleicht zu elegant für das Büro, oder?', es: '¿Quizá demasiado elegante para la oficina, no?' },
  'Mir gefällt die schlichte Variante besser.':
    { de: 'Mir auch. Schlicht kann man immer und überall tragen.', es: 'A mí también. Lo sencillo se puede llevar siempre y a todas partes.' },
  'Die blaue Jacke gefällt mir besser als die schwarze.':
    { de: 'Sie ist auch billiger. Also keine schwere Entscheidung.', es: 'Además es más barata. Así que no es una decisión difícil.' },
  'Leder hält länger als Stoff.':
    { de: 'Stimmt, aber es ist auch doppelt so teuer.', es: 'Es verdad, pero también cuesta el doble.' },
  'Ich trage lieber bequeme Schuhe.':
    { de: 'Sehr vernünftig. Mit hohen Schuhen kommt man hier nicht weit.', es: 'Muy sensato. Con tacones aquí no se llega lejos.' },
  'Am liebsten kaufe ich im Ausverkauf.':
    { de: 'Ich auch, aber da ist meine Größe meistens weg.', es: 'Yo también, pero entonces mi talla ya no está.' },
  'Dieses Geschäft ist teurer als das andere.':
    { de: 'Dafür ist die Qualität besser. Das merkt man nach einem Jahr.', es: 'A cambio la calidad es mejor. Se nota al cabo de un año.' },
  'Online bestelle ich lieber nicht.':
    { de: 'Ich auch nicht. Das Zurückschicken ist immer ein Aufwand.', es: 'Yo tampoco. Devolverlo siempre es un lío.' },
  'Ich hätte gern einen Termin beim Friseur.':
    { de: 'Gern. Passt Ihnen Donnerstag um sechzehn Uhr?', es: 'Con gusto. ¿Le viene bien el jueves a las cuatro?' },
  'Ich würde gern noch etwas anderes sehen.':
    { de: 'Natürlich. Soll es dieselbe Farbe sein oder ganz anders?', es: 'Claro. ¿Del mismo color o totalmente distinto?' },
  'Am liebsten hätte ich es bis Freitag.':
    { de: 'Das schaffen wir. Ich rufe Sie an, sobald es fertig ist.', es: 'Lo conseguimos. Le llamo en cuanto esté listo.' },
  'Könnte ich das bitte eingepackt bekommen?':
    { de: 'Sehr gern. Ist es ein Geschenk? Dann nehme ich schöneres Papier.', es: 'Con mucho gusto. ¿Es un regalo? Entonces uso un papel más bonito.' },
  'Ich wünsche mir etwas Praktisches.':
    { de: 'Dann sag es deiner Familie. Sonst bekommst du wieder Dekoration.', es: 'Pues díselo a tu familia. Si no, te vuelven a regalar adornos.' },
  'Ich hätte gern die Rechnung getrennt.':
    { de: 'Kein Problem. Wer bezahlt welchen Teil?', es: 'No hay problema. ¿Quién paga qué parte?' },
  'Ich möchte das umtauschen, es passt nicht.':
    { de: 'Kein Problem, haben Sie die Quittung dabei?', es: 'No hay problema, ¿trae el recibo?',
      mas: [
        { de: 'Hier ist der Kassenbon, gekauft am Montag.', es: 'Aquí tiene el recibo, comprado el lunes.' },
        { de: 'Alles gut, das ist innerhalb der Frist. Möchten Sie Geld oder Tausch?', es: 'Todo bien, está dentro del plazo. ¿Quiere el dinero o cambiarlo?' }
      ] },
  'Ab wann ist es abholbereit?':
    { de: 'Ab Dienstag, jeden Tag zwischen neun und achtzehn Uhr.', es: 'A partir del martes, cada día entre las nueve y las seis.' },
  'Bekomme ich das Geld zurück?':
    { de: 'Bei einem Mangel ja. Sonst nur einen Gutschein.', es: 'Si hay un defecto sí. Si no, solo un vale.' },
  'Auf dem Hemd ist ein Fleck.':
    { de: 'Bringen Sie es in die Reinigung. Die bekommen fast alles raus.', es: 'Llévela a la tintorería. Quitan casi todo.' },
  'Wie lange dauert die Änderung?':
    { de: 'Drei Werktage. Bei Eile geht es auch bis morgen, gegen Aufpreis.', es: 'Tres días laborables. Con prisa también para mañana, con suplemento.' },
  'Wann kommt die Lieferung?':
    { de: 'Am Donnerstag zwischen acht und zwölf. Sie bekommen vorher eine SMS.', es: 'El jueves entre las ocho y las doce. Antes recibe un SMS.' },
  'Können Sie die Schuhe reparieren?':
    { de: 'Die Sohle ja, das Leder oben leider nicht mehr.', es: 'La suela sí, el cuero de arriba ya no.' },
  'Ich habe online bestellt, aber nichts bekommen.':
    { de: 'Geben Sie mir die Bestellnummer, ich schaue sofort nach.', es: 'Deme el número de pedido, lo miro enseguida.' },
  'Ich finde das zu teuer für die Qualität.':
    { de: 'Da hast du recht. Für den Preis erwarte ich echtes Leder.', es: 'En eso tienes razón. Por ese precio espero cuero auténtico.' },
  'Meiner Meinung nach ist das Angebot gut.':
    { de: 'Warum? Für mich klingt es fast zu billig.', es: '¿Por qué? A mí me suena casi demasiado barato.' },
  'Ich glaube, wir schaffen das zusammen.':
    { de: 'Ich auch. Wir teilen es einfach in kleine Schritte auf.', es: 'Yo también. Lo dividimos en pasos pequeños y ya está.' },
  'Für mich ist Qualität wichtiger als der Preis.':
    { de: 'Auf lange Sicht stimmt das sicher. Kurzfristig tut es aber weh.', es: 'A largo plazo seguro que es así. A corto plazo duele.' },
  'Ich bin überzeugt, dass sich das lohnt.':
    { de: 'Dann probieren wir es. Wenn nicht, wissen wir es wenigstens.', es: 'Pues lo probamos. Y si no, al menos lo sabremos.' },
  'Das sehe ich anders, und zwar deshalb:':
    { de: 'Sag ruhig. Vielleicht übersehe ich wirklich etwas.', es: 'Dime tranquilo. Quizá se me esté escapando algo.' },
  'Kannst du mir zeigen, wie das geht?':
    { de: 'Klar, setz dich her. Wir machen es einmal zusammen.', es: 'Claro, siéntate aquí. Lo hacemos una vez juntos.' },
  'Ich komme mit dem Formular nicht weiter.':
    { de: 'Zeig her. Bei welchem Feld hängst du fest?', es: 'Enséñamelo. ¿En qué campo te has atascado?' },
  'Könntest du das noch einmal erklären?':
    { de: 'Natürlich, langsamer diesmal. Sag Stopp, wenn etwas unklar ist.', es: 'Claro, más despacio esta vez. Dime para si algo no queda claro.' },
  'Hast du kurz Zeit für eine Frage?':
    { de: 'Fünf Minuten, ja. Danach muss ich in die Besprechung.', es: 'Cinco minutos, sí. Después tengo reunión.' },
  'Ich brauche jemanden, der mit mir übt.':
    { de: 'Ich mache gern mit. Zweimal die Woche, wäre das genug?', es: 'Yo me apunto encantado. ¿Dos veces por semana bastaría?' },
  'Kannst du kurz drüberschauen?':
    { de: 'Gern. Schick es mir per Mail, dann korrigiere ich es heute Abend.', es: 'Con gusto. Mándamelo por correo y lo corrijo esta tarde.' },
  'Ich verstehe die Anleitung nicht.':
    { de: 'Die sind auch schlecht geschrieben. Ich zeige es dir einfach.', es: 'Es que están mal escritas. Te lo enseño directamente.' },
  'Mit wem kann ich darüber sprechen?':
    { de: 'Am besten mit der Kursleiterin. Sie kennt alle Möglichkeiten.', es: 'Mejor con la profesora del curso. Conoce todas las opciones.' },
  'Ich verspreche dir, ich melde mich morgen.':
    { de: 'Gut, ich verlasse mich darauf. Bis morgen also.', es: 'Bien, cuento con ello. Hasta mañana entonces.' },
  'Ich hoffe, dass alles gut geht.':
    { de: 'Das wird schon. Du hast dich gut vorbereitet.', es: 'Va a salir bien. Te has preparado bien.' },
  'Hoffentlich klappt es diesmal.':
    { de: 'Warum sollte es nicht? Diesmal hast du alle Unterlagen.', es: '¿Y por qué no? Esta vez tienes toda la documentación.' },
  'Ich kümmere mich darum, versprochen.':
    { de: 'Danke. Sag mir einfach Bescheid, wenn es Probleme gibt.', es: 'Gracias. Avísame si hay problemas.' },
  'Ich hoffe, wir sehen uns bald wieder.':
    { de: 'Bestimmt. Im Sommer bin ich wieder eine Woche in Wien.', es: 'Seguro. En verano vuelvo a estar una semana en Viena.' },
  'Fahrt ihr mit dem Auto oder mit dem Zug?':
    { de: 'Mit dem Zug. Mit Gepäck und Kindern ist das entspannter.', es: 'En tren. Con equipaje y niños es más tranquilo.' },
  'Warst du schon einmal in Kroatien?':
    { de: 'Dreimal sogar. Die Landschaft an der Küste ist unglaublich.', es: 'Tres veces incluso. El paisaje de la costa es increíble.' },
  'Was empfiehlt der Reiseführer?':
    { de: 'Die Altstadt und den Markt am Samstagvormittag.', es: 'El casco antiguo y el mercado del sábado por la mañana.' },
  'Nimmst du viel Gepäck mit?':
    { de: 'Nur einen Rucksack. Alles andere kauft man unterwegs.', es: 'Solo una mochila. Lo demás se compra por el camino.' },
  'Ist die Reise teuer geworden?':
    { de: 'Ging so. Im Reisebüro war es günstiger als online.', es: 'Regular. En la agencia salió más barato que por internet.' },
  'Wann fahrt ihr los?':
    { de: 'Am Freitag um fünf Uhr früh, damit wir den Stau vermeiden.', es: 'El viernes a las cinco de la mañana, para evitar el atasco.' },
  'Ich interessiere mich sehr für Geschichte.':
    { de: 'Dann gefällt dir das Museum hier. Der Eintritt ist sogar frei.', es: 'Entonces te va a gustar el museo de aquí. Y la entrada es gratis.' },
  'Technik finde ich wirklich spannend.':
    { de: 'Arbeitest du auch damit oder ist es nur ein Hobby?', es: '¿Trabajas con ella o es solo una afición?' },
  'Kochen interessiert mich überhaupt nicht.':
    { de: 'Und wie isst du dann? Immer auswärts?', es: '¿Y entonces cómo comes? ¿Siempre fuera?' },
  'Am liebsten lese ich über andere Länder.':
    { de: 'Dann leihe ich dir mein Buch über Japan.', es: 'Pues te presto mi libro sobre Japón.' },
  'Sport interessiert mich mehr als Musik.':
    { de: 'Bei mir ist es genau umgekehrt. Beim Sport schlafe ich ein.', es: 'En mi caso es justo al revés. Con el deporte me duermo.' },
  'Das finde ich nicht so interessant.':
    { de: 'Schade. Gib ihm eine Chance, es wird später besser.', es: 'Qué pena. Dale una oportunidad, luego mejora.' },
  'Ich will endlich ohne Pausen sprechen.':
    { de: 'Dann hör auf, jeden Satz vorher zu übersetzen. Das bremst dich.', es: 'Pues deja de traducir cada frase antes. Eso te frena.' },
  'Ohne Wiederholung vergesse ich alles wieder.':
    { de: 'Deshalb schreibe ich jede Woche die alten Wörter noch einmal ab.', es: 'Por eso cada semana vuelvo a copiar las palabras antiguas.' },
  'Merkst du selbst Fortschritte?':
    { de: 'Langsam, aber ja. Beim Arzt konnte ich alles selbst erklären.', es: 'Despacio, pero sí. En el médico pude explicarlo todo yo solo.' },
  'Ich lerne am besten mit Musik und Serien.':
    { de: 'Das hilft beim Hören. Für die Grammatik brauchst du aber den Kurs.', es: 'Eso ayuda con la comprensión. Pero para la gramática necesitas el curso.' },
  'Die Aussprache ist mein größtes Problem.':
    { de: 'Lies jeden Tag fünf Minuten laut. Das wirkt erstaunlich schnell.', es: 'Lee cinco minutos en voz alta cada día. Funciona sorprendentemente rápido.' },
  'Warum lernst du eigentlich Deutsch?':
    { de: 'Wegen der Arbeit, aber inzwischen auch, weil es mir Spaß macht.', es: 'Por el trabajo, pero ya también porque me divierte.' },
  'Bei uns isst man am 24. erst spät am Abend.':
    { de: 'Bei uns auch. Hier wird dagegen schon um sechs gegessen.', es: 'En mi tierra también. Aquí, en cambio, se come ya a las seis.' },
  'In Spanien feiert man bis in die Nacht.':
    { de: 'Das habe ich gehört. Hier ist um zweiundzwanzig Uhr meistens Schluss.', es: 'Eso he oído. Aquí a las diez se suele acabar.' },
  'Zu Ostern versteckt man bei uns Eier.':
    { de: 'Das machen die Kinder hier auch. Im Garten oder in der Wohnung.', es: 'Aquí los niños también lo hacen. En el jardín o en casa.' },
  'Normalerweise bringt man Blumen oder Wein mit.':
    { de: 'Gut zu wissen. Ich hätte fast nichts mitgebracht.', es: 'Bueno es saberlo. Casi no llevo nada.' },
  'Bei uns gratuliert man nicht vor dem Geburtstag.':
    { de: 'Hier auch nicht, das bringt angeblich Unglück.', es: 'Aquí tampoco, dicen que trae mala suerte.' },
  'Silvester verbringen wir immer zu Hause.':
    { de: 'Wir gehen auf den Platz. Aber ehrlich, zu Hause ist es gemütlicher.', es: 'Nosotros vamos a la plaza. Aunque en casa se está más a gusto.' },
  'Ich feiere am Samstag, kommst du?':
    { de: 'Sehr gern! Wann und wo feierst du denn?', es: '¡Con mucho gusto! ¿Y cuándo y dónde lo celebras?' },
  'Kann ich etwas beisteuern?':
    { de: 'Wenn du magst, einen Salat. Getränke haben wir genug.', es: 'Si quieres, una ensalada. De bebida vamos sobrados.' },
  'Leider kann ich am Samstag nicht.':
    { de: 'Schade! Kommst du wenigstens später noch kurz vorbei?', es: '¡Qué pena! ¿Al menos te pasas un rato después?' },
  'Darf ich jemanden mitbringen?':
    { de: 'Natürlich. Sag mir nur Bescheid, wegen des Essens.', es: 'Claro. Solo avísame, por la comida.' },
  'Um wie viel Uhr soll ich da sein?':
    { de: 'Ab sieben, aber komm ruhig etwas später. Wir essen um acht.', es: 'A partir de las siete, pero ven algo más tarde si quieres. Cenamos a las ocho.' },
  'Vielen Dank für die Einladung!':
    { de: 'Schön, dass du kommst. Es wird bestimmt lustig.', es: 'Qué bien que vengas. Seguro que es divertido.' },
  'Muss ich mich verkleiden?':
    { de: 'Musst du nicht, aber es machen fast alle. Mach einfach mit!', es: 'No tienes que hacerlo, pero casi todos lo hacen. ¡Apúntate!' },
  'Ich sage dir bis Mittwoch Bescheid.':
    { de: 'Passt. Ich muss nur wegen der Tischreservierung Bescheid wissen.', es: 'Vale. Solo lo necesito saber por la reserva de la mesa.' },
  'Wir müssen leider kurzfristig absagen.':
    { de: 'Das ist schade, aber kein Drama. Ist alles in Ordnung bei euch?', es: 'Es una pena, pero no pasa nada. ¿Va todo bien?' },
  'Kommst du zur Hochzeit im Juni?':
    { de: 'Auf jeden Fall. Ich habe mir den Tag schon freigenommen.', es: 'Por supuesto. Ya me he cogido el día libre.',
      mas: [
        { de: 'Weißt du schon, was du anziehst?', es: '¿Ya sabes qué te vas a poner?' },
        { de: 'Noch nicht. Anzug hätte ich, aber im Juni ist das die Hölle.', es: 'Todavía no. Traje tengo, pero en junio es un infierno.' }
      ] },
  'Die Wohnung sieht wunderschön aus!':
    { de: 'Danke! Die Dekoration hat meine Schwester gemacht.', es: '¡Gracias! La decoración la hizo mi hermana.',
      mas: [
        { de: 'Habt ihr das alles selbst gemacht?', es: '¿Lo habéis hecho todo vosotros?' },
        { de: 'Fast. Nur die Lampen hat ein Elektriker montiert.', es: 'Casi. Solo las lámparas las montó un electricista.' }
      ] },
  'Das Essen schmeckt fantastisch.':
    { de: 'Freut mich sehr. Das Rezept ist von meiner Großmutter.', es: 'Me alegra mucho. La receta es de mi abuela.' },
  'Du hast das toll organisiert.':
    { de: 'Nicht allein, alle haben mitgeholfen. Das war der Trick.', es: 'No yo solo, todos ayudaron. Ese fue el truco.' },
  'Deine Rede war wirklich schön.':
    { de: 'Danke. Ich war so nervös, dass ich fast alles vergessen hätte.', es: 'Gracias. Estaba tan nervioso que casi se me olvida todo.' },
  'Der Kuchen ist der beste, den ich kenne.':
    { de: 'Dann nimm noch ein Stück. Ich schreibe dir das Rezept auf.', es: 'Pues coge otro trozo. Te apunto la receta.' },
  'Du siehst heute richtig gut aus.':
    { de: 'Danke! Das Hemd ist neu, ein Geschenk von meiner Frau.', es: '¡Gracias! La camisa es nueva, un regalo de mi mujer.' },
  'Möchtest du noch ein Stück Torte?':
    { de: 'Sehr gern, aber nur ein kleines. Ich bin schon fast satt.', es: 'Con mucho gusto, pero pequeño. Estoy casi lleno.' },
  'Greif bitte zu, es ist genug da!':
    { de: 'Danke, das mache ich. Alles sieht so gut aus.', es: 'Gracias, eso haré. Todo tiene una pinta estupenda.' },
  'Was möchtest du trinken?':
    { de: 'Ein Glas Wasser zuerst, und später vielleicht ein Glas Wein.', es: 'Primero un vaso de agua, y luego quizá una copa de vino.' },
  'Soll ich dir nachschenken?':
    { de: 'Nur ein bisschen, danke. Ich fahre noch mit dem Auto.', es: 'Solo un poco, gracias. Tengo que conducir.' },
  'Nimm dir doch noch etwas Salat.':
    { de: 'Gern, der ist wirklich gut. Was ist da alles drin?', es: 'Con gusto, está muy buena. ¿Qué lleva dentro?' },
  'Magst du einen Kaffee zum Kuchen?':
    { de: 'Sehr gern, aber bitte ohne Zucker.', es: 'Con mucho gusto, pero sin azúcar, por favor.' },
  'Wo machen wir uns aus?':
    { de: 'Bei der Oper, dort finden alle hin.', es: 'En la ópera, allí llega todo el mundo.' },
  'Bleibt es bei unserer Ausmachung?':
    { de: 'Ja, alles wie besprochen. Ich freue mich schon.', es: 'Sí, todo como quedamos. Ya tengo ganas.' },
  'Können wir das auf nächsten Monat verschieben?':
    { de: 'Klar. Such dir einen Termin aus, ich bin flexibel.', es: 'Claro. Elige un día, yo soy flexible.' },
  'Ich melde mich am Vortag noch einmal.':
    { de: 'Perfekt. Dann weiß ich sicher, dass es klappt.', es: 'Perfecto. Así sé seguro que sale.' },
  'Tut mir leid, ich habe es völlig vergessen.':
    { de: 'Das kann passieren. Wir holen es einfach nach.', es: 'Puede pasar. Simplemente lo recuperamos.' },
  'Entschuldigung, das war nicht so gemeint.':
    { de: 'Schon gut. Ich habe es auch falsch verstanden.', es: 'Está bien. Yo también lo entendí mal.' },
  'Es tut mir leid, dass ich nicht geantwortet habe.':
    { de: 'Kein Stress. Ich weiß, dass du viel um die Ohren hast.', es: 'Sin estrés. Sé que vas muy liado.' },
  'Verzeihung, ich habe Sie unterbrochen.':
    { de: 'Macht nichts. Sagen Sie ruhig, was Sie sagen wollten.', es: 'No importa. Diga lo que iba a decir.' },
  'Das war mein Fehler, ich mache es neu.':
    { de: 'Danke. Bis wann könntest du es schaffen?', es: 'Gracias. ¿Para cuándo lo podrías tener?' },
  'Das ist Pekka, er arbeitet mit mir im Labor.':
    { de: 'Angenehm! Und woher kommen Sie ursprünglich?', es: '¡Encantado! ¿Y de dónde es usted originalmente?' },
  'Sie ist sehr hilfsbereit und immer gut gelaunt.':
    { de: 'Solche Kollegen braucht jedes Team. Wie lange ist sie schon da?', es: 'Compañeros así los necesita todo equipo. ¿Cuánto lleva ahí?' },
  'Mein Bruder ist ziemlich ruhig.':
    { de: 'Ihr seid also ganz verschieden. Du redest die ganze Zeit!', es: 'Entonces sois muy distintos. ¡Tú hablas todo el rato!' },
  'Sie kommt aus Rumänien und lebt seit zehn Jahren hier.':
    { de: 'Dann spricht sie sicher perfekt Deutsch.', es: 'Entonces seguro que habla alemán perfecto.' },
  'Er ist der Gastgeber und hat alles vorbereitet.':
    { de: 'Dann muss ich mich bei ihm bedanken. Wo steckt er?', es: 'Entonces tengo que darle las gracias. ¿Dónde está?' },
  'Wir kennen uns schon aus der Schule.':
    { de: 'So lange! Und ihr habt euch nie aus den Augen verloren?', es: '¡Tanto tiempo! ¿Y nunca os habéis perdido la pista?' },
  'Ich würde gern öfter nach Hause fahren.':
    { de: 'Schau dir die Nachtzüge an. Die sind billiger als Fliegen.', es: 'Mira los trenes nocturnos. Salen más baratos que volar.',
      mas: [
        { de: 'Nachts fahren? Das halte ich nicht durch.', es: '¿Viajar de noche? No lo aguanto.' },
        { de: 'Im Liegewagen schon. Man wacht auf und ist da.', es: 'En coche cama sí. Te despiertas y ya estás.' }
      ] },
  'Mein größter Wunsch ist ein sicherer Job.':
    { de: 'Das verstehe ich. Wie lange läuft dein Vertrag noch?', es: 'Lo entiendo. ¿Cuánto te queda de contrato?',
      mas: [
        { de: 'Noch acht Monate. Danach weiß ich gar nichts.', es: 'Ocho meses más. Después no sé nada.' },
        { de: 'Dann frag jetzt schon nach. Warten macht es nicht besser.', es: 'Pues pregunta ya. Esperar no lo mejora.' }
      ] },
  'Damals habe ich kein Wort Deutsch gesprochen.':
    { de: 'Und heute reden wir hier ohne Probleme. Wie hast du das gemacht?', es: 'Y hoy hablamos aquí sin problemas. ¿Cómo lo hiciste?' },
  'Die ersten zwei Jahre waren die schwersten.':
    { de: 'Was hat dir damals am meisten geholfen?', es: '¿Qué fue lo que más te ayudó entonces?' },
  'Ich habe zuerst bei einem Freund gewohnt.':
    { de: 'Zum Glück hattest du ihn. Ohne Kontakte ist es doppelt so schwer.', es: 'Menos mal que lo tenías. Sin contactos es el doble de difícil.' },
  'Nach und nach habe ich mich daran gewöhnt.':
    { de: 'An was zum Beispiel? Am Wetter oder an den Leuten?', es: '¿A qué, por ejemplo? ¿Al tiempo o a la gente?' },
  'Ich habe damals jeden Abend gelernt.':
    { de: 'Nach der Arbeit? Das braucht ziemlich viel Disziplin.', es: '¿Después del trabajo? Eso requiere bastante disciplina.' },
  'Meine erste Wohnung war winzig und kalt.':
    { de: 'Das klingt hart. Wie lange hast du dort gewohnt?', es: 'Suena duro. ¿Cuánto tiempo viviste allí?' },
  'Ich habe die Entscheidung nie bereut.':
    { de: 'Das hört man selten. Die meisten hadern zumindest manchmal.', es: 'Eso se oye pocas veces. La mayoría duda al menos a veces.' },
  'Vor fünf Jahren war hier alles anders.':
    { de: 'Inwiefern? Die Straße sieht doch gleich aus.', es: '¿En qué sentido? La calle tiene el mismo aspecto.',
      mas: [
        { de: 'Die Häuser schon, aber die Geschäfte alle nicht.', es: 'Las casas sí, pero las tiendas ninguna.' },
        { de: 'Jetzt, wo du es sagst: der Bäcker war früher an der Ecke.', es: 'Ahora que lo dices: la panadería estaba en la esquina.' }
      ] },
  'Und wie ist es dir dabei gegangen?':
    { de: 'Ehrlich gesagt ziemlich schlecht. Ich habe viel geweint.', es: 'Sinceramente, bastante mal. Lloré mucho.' },
  'Erzähl weiter, das interessiert mich wirklich.':
    { de: 'Also, nach einem halben Jahr kam dann der Anruf.', es: 'Pues a los seis meses llegó la llamada.' },
  'Das muss sehr schwer gewesen sein.':
    { de: 'War es auch. Aber man wächst an so etwas.', es: 'Lo fue. Pero con eso uno crece.',
      mas: [
        { de: 'Würdest du es wieder so machen?', es: '¿Lo volverías a hacer así?' },
        { de: 'Ja, nur früher um Hilfe bitten.', es: 'Sí, solo que pediría ayuda antes.' }
      ] },
  'Und wie war das für dich gefühlsmäßig?':
    { de: 'Vor allem einsam. Reden konnte ich mit niemandem.', es: 'Sobre todo solo. No podía hablar con nadie.',
      mas: [
        { de: 'Und wie bist du da rausgekommen?', es: '¿Y cómo saliste de ahí?' },
        { de: 'Ich habe mich zu einem Chor angemeldet. Klingt komisch, hat aber geholfen.', es: 'Me apunté a un coro. Suena raro, pero funcionó.' }
      ] },
  'Das kann ich gut nachvollziehen.':
    { de: 'Danke. Es hilft schon, wenn jemand einfach zuhört.', es: 'Gracias. Ya ayuda que alguien simplemente escuche.' },
  'Was hat dir damals am meisten geholfen?':
    { de: 'Der Deutschkurs. Nicht wegen der Grammatik, wegen der Leute.', es: 'El curso de alemán. No por la gramática, por la gente.' },
  'Und wie ist es danach weitergegangen?':
    { de: 'Dann habe ich endlich eine Stelle gefunden und alles wurde leichter.', es: 'Luego por fin encontré un trabajo y todo se hizo más fácil.' },
  'Entschuldigung, ich meine natürlich Dienstag.':
    { de: 'Kein Problem. Dienstag passt mir sogar besser.', es: 'No hay problema. El martes incluso me viene mejor.' },
  'Ich fange lieber noch einmal von vorne an.':
    { de: 'Gern. Ich habe sowieso den Faden verloren.', es: 'Con gusto. De todos modos he perdido el hilo.' },
  'Ich habe mich versprochen, sorry.':
    { de: 'Passiert mir auch ständig, sogar auf Spanisch.', es: 'A mí me pasa constantemente, incluso en español.' },
  'Das habe ich falsch ausgedrückt.':
    { de: 'Kein Drama. Wie hättest du es sagen wollen?', es: 'No es para tanto. ¿Cómo lo querías decir?' },
  'Moment, ich korrigiere mich kurz.':
    { de: 'Nur zu. Lieber einmal mehr nachdenken als etwas Falsches sagen.', es: 'Adelante. Mejor pensarlo una vez más que decir algo incorrecto.' },
  'Ich hatte lange Angst, Fehler zu machen.':
    { de: 'Und jetzt? Merkst du, dass es niemanden stört?', es: '¿Y ahora? ¿Ves que no le molesta a nadie?' },
  'Ich fühle mich hier inzwischen zu Hause.':
    { de: 'Schön! Ab wann war das so, ungefähr?', es: '¡Qué bien! ¿Desde cuándo, más o menos?',
      mas: [
        { de: 'Seit ich eigene Möbel habe, komisch genug.', es: 'Desde que tengo muebles míos, aunque suene raro.' },
        { de: 'Gar nicht komisch. Das ist bei vielen der Moment.', es: 'Nada raro. A mucha gente le pasa justo ahí.' }
      ] },
  'Das Heimweh kommt meistens im Winter.':
    { de: 'Wegen der Dunkelheit? Da geht es vielen so.', es: '¿Por la oscuridad? A mucha gente le pasa.' },
  'Ich war stolz, als ich das erste Mal telefoniert habe.':
    { de: 'Zu Recht! Telefonieren ist viel schwerer als von Angesicht zu Angesicht.', es: '¡Y con razón! Hablar por teléfono es mucho más difícil que en persona.' },
  'Inzwischen habe ich das Gefühl dazuzugehören.':
    { de: 'Das ist das Wichtigste überhaupt. Herzlichen Glückwunsch dazu.', es: 'Eso es lo más importante de todo. Enhorabuena por ello.' },
  'Was sind deine Pläne für die nächsten Jahre?':
    { de: 'Erst die B1-Prüfung, danach suche ich eine bessere Stelle.', es: 'Primero el examen B1 y después busco un trabajo mejor.',
      mas: [
        { de: 'Und wenn die Prüfung nicht klappt?', es: '¿Y si el examen no sale?' },
        { de: 'Dann mache ich sie im Herbst noch einmal. Aufgeben ist keine Option.', es: 'Entonces lo repito en otoño. Rendirse no es una opción.' }
      ] },
  'Ich will hierbleiben, zumindest vorerst.':
    { de: 'Klingt vernünftig. Und deine Familie sieht das auch so?', es: 'Suena razonable. ¿Y tu familia lo ve igual?',
      mas: [
        { de: 'Meine Frau schon. Meine Mutter fragt jedes Jahr, wann wir zurückkommen.', es: 'Mi mujer sí. Mi madre pregunta cada año cuándo volvemos.' },
        { de: 'Das hört bei uns auch nicht auf.', es: 'En mi casa eso tampoco para.' }
      ] },
  'Vielleicht mache ich noch eine Ausbildung.':
    { de: 'In welche Richtung? Etwas Technisches oder lieber im Sozialbereich?', es: '¿En qué dirección? ¿Algo técnico o mejor en lo social?',
      mas: [
        { de: 'Etwas mit Technik. Das habe ich immer gern gemacht.', es: 'Algo de técnica. Siempre me ha gustado.' },
        { de: 'Dann schau dir das WIFI an, die haben Abendkurse.', es: 'Pues mira el WIFI, tienen cursos por la tarde.' }
      ] },
  'Ich möchte irgendwann ein eigenes Geschäft haben.':
    { de: 'Das traue ich dir zu. Hast du schon eine konkrete Idee?', es: 'Te veo capaz. ¿Ya tienes una idea concreta?' },
  'Nächstes Jahr ziehen wir in eine größere Wohnung.':
    { de: 'In welchen Bezirk? Bleibt ihr in der Nähe der Schule?', es: '¿A qué distrito? ¿Os quedáis cerca del colegio?' },
  'Ich habe vor, den Führerschein zu machen.':
    { de: 'Gute Idee. Außerhalb von Wien geht ohne Auto fast nichts.', es: 'Buena idea. Fuera de Viena sin coche casi no se puede.' },
  'Langfristig möchte ich zurück nach Spanien.':
    { de: 'Verständlich. Weiß deine Familie hier schon davon?', es: 'Es comprensible. ¿Lo sabe ya tu familia de aquí?' },
  'Erst mal will ich mich einfach hier einleben.':
    { de: 'Sehr klug. Große Pläne kann man später immer noch machen.', es: 'Muy inteligente. Los grandes planes se pueden hacer después.' },
  'Keine Sorge, das wird schon klappen.':
    { de: 'Hoffentlich. Ich habe seit Tagen nicht richtig geschlafen.', es: 'Ojalá. Llevo días sin dormir bien.' },
  'An deiner Stelle würde ich einfach anrufen.':
    { de: 'Du hast recht. Schreiben dauert sowieso länger.', es: 'Tienes razón. Escribir tarda más de todos modos.' },
  'So schlimm ist das gar nicht.':
    { de: 'Sagst du. Mir ist es vor allen Leuten passiert.', es: 'Eso lo dices tú. A mí me pasó delante de todo el mundo.' },
  'Mach dir keinen Stress, wir haben genug Zeit.':
    { de: 'Wirklich? Ich dachte, die Gäste kommen um sieben.', es: '¿En serio? Pensaba que los invitados venían a las siete.' },
  'Das kann jedem passieren, ehrlich.':
    { de: 'Danke. Trotzdem war es mir sehr unangenehm.', es: 'Gracias. Aun así me dio mucha vergüenza.' },
  'Probier es einfach, du kannst nichts verlieren.':
    { de: 'Stimmt eigentlich. Schlimmstenfalls sagen sie Nein.', es: 'La verdad es que sí. En el peor caso dicen que no.' },
  'Nimm dir einfach etwas mehr Zeit dafür.':
    { de: 'Das wäre gut. Nur weiß ich nicht, woher ich sie nehmen soll.', es: 'Estaría bien. Solo que no sé de dónde sacarlo.' },
  'Bei uns isst man viel später am Abend.':
    { de: 'Um wie viel Uhr denn? Hier ist um acht meistens schon Schluss.', es: '¿Y a qué hora? Aquí a las ocho ya se suele acabar.' },
  'So etwas gibt es bei uns auch, nur mit Fisch.':
    { de: 'Klingt gut. Schmeckt es mit Fisch besser oder anders?', es: 'Suena bien. ¿Está mejor con pescado o solo distinto?' },
  'Das kenne ich von zu Hause gar nicht.':
    { de: 'Dann probier es unbedingt. Es sieht komisch aus, schmeckt aber gut.', es: 'Pues pruébalo sin falta. Tiene una pinta rara, pero está bueno.' },
  'Bei uns ist das Brot ganz anders.':
    { de: 'Weißer und weicher, oder? Hier ist es dunkel und fest.', es: '¿Más blanco y blando, no? Aquí es oscuro y denso.' },
  'In meiner Heimat trinkt man kaum Bier.':
    { de: 'Interessant. Was trinkt man dann zum Essen?', es: 'Interesante. ¿Y qué se bebe con la comida?' },
  'Bei uns kocht man mit viel mehr Olivenöl.':
    { de: 'Hier nimmt man eher Butter. Man schmeckt den Unterschied sofort.', es: 'Aquí se usa más mantequilla. Se nota la diferencia enseguida.' },
  'Die Portionen sind hier viel größer.':
    { de: 'Stimmt. Dafür isst man nur zweimal am Tag warm.', es: 'Es verdad. A cambio solo se come caliente dos veces al día.' },
  'Wirklich? Das wusste ich überhaupt nicht.':
    { de: 'Doch, seit letztem Jahr. Steht sogar in der Hausordnung.', es: 'Que sí, desde el año pasado. Está hasta en las normas de la casa.' },
  'Das glaube ich jetzt nicht!':
    { de: 'Ich habe es selbst dreimal nachgelesen, bis ich es geglaubt habe.', es: 'Yo mismo lo leí tres veces hasta que me lo creí.' },
  'Echt jetzt? Das kann nicht sein.':
    { de: 'Doch, schau selbst. Hier steht es schwarz auf weiß.', es: 'Que sí, míralo tú mismo. Aquí está por escrito.' },
  'Damit hätte ich nie gerechnet.':
    { de: 'Ich auch nicht. Manchmal geht es eben schneller als gedacht.', es: 'Yo tampoco. A veces va más rápido de lo que uno cree.' },
  'Was? Das gibt es doch nicht!':
    { de: 'Doch, und es kommt noch besser. Hör dir den Rest an.', es: 'Que sí, y todavía hay más. Escucha el resto.' },
  'Das überrascht mich ehrlich gesagt.':
    { de: 'Warum? Sie hat das doch schon lange vorgehabt.', es: '¿Por qué? Si hacía mucho que lo tenía pensado.' },
  'Ich möchte dich am Freitag zum Essen einladen.':
    { de: 'Sehr gern! Kochst du selbst oder gehen wir aus?', es: '¡Con mucho gusto! ¿Cocinas tú o salimos?',
      mas: [
        { de: 'Ich koche selbst, etwas Spanisches.', es: 'Cocino yo, algo español.' },
        { de: 'Noch besser! Soll ich Wein mitbringen, rot oder weiß?', es: '¡Todavía mejor! ¿Llevo vino, tinto o blanco?' }
      ] },
  'Kommt doch am Wochenende zu uns.':
    { de: 'Gern. Passt Sonntagnachmittag, wegen der Kinder?', es: 'Con gusto. ¿Os va bien el domingo por la tarde, por los niños?' },
  'Bring ruhig jemanden mit, es ist genug da.':
    { de: 'Danke, dann kommt meine Schwester mit. Sie freut sich schon.', es: 'Gracias, entonces viene mi hermana. Ya tiene ganas.' },
  'Was soll ich zum Essen beisteuern?':
    { de: 'Etwas Süßes wäre schön. Beim Rest bin ich versorgt.', es: 'Algo dulce estaría bien. Con lo demás voy servido.' },
  'Wir feiern nichts Großes, nur ein paar Freunde.':
    { de: 'Das ist mir sowieso lieber. Große Partys sind anstrengend.', es: 'A mí me gusta más así. Las fiestas grandes cansan.' },
  'Leider schaffe ich es diesmal nicht.':
    { de: 'Schade. Beim nächsten Mal sagst du aber zu, versprochen?', es: 'Qué pena. Pero la próxima dices que sí, ¿prometido?' },
  'Komm einfach vorbei, wenn du Zeit hast.':
    { de: 'Mache ich. Ruf ich vorher an oder klingle ich einfach?', es: 'Lo haré. ¿Llamo antes o simplemente toco el timbre?' },
  'Wir würden uns sehr freuen, wenn ihr kommt.':
    { de: 'Das ist lieb. Wir sagen euch bis Mittwoch sicher Bescheid.', es: 'Qué amable. Os confirmamos seguro antes del miércoles.' },
  'Haben Sie noch einen Tisch für zwei frei?':
    { de: 'Drinnen ja, draußen erst in zwanzig Minuten.', es: 'Dentro sí, fuera hasta dentro de veinte minutos no.' },
  'Was können Sie heute empfehlen?':
    { de: 'Den Braten mit Knödel. Der ist heute besonders gut gelungen.', es: 'El asado con Knödel. Hoy ha salido especialmente bueno.',
      mas: [
        { de: 'Und ist der Tafelspitz sehr fett?', es: '¿Y el Tafelspitz es muy graso?' },
        { de: 'Überhaupt nicht. Wir servieren ihn mit Apfelkren und Rösterdäpfeln.', es: 'Para nada. Lo servimos con rábano picante y patatas asadas.' }
      ] },
  'Für mich bitte das Schnitzel mit Salat.':
    { de: 'Sehr gern. Und für Sie? Die Dame hat noch nicht gewählt.', es: 'Con mucho gusto. ¿Y para usted? La señora aún no ha elegido.' },
  'Ist in dem Gericht Fleisch drin?':
    { de: 'In der Suppe ist Rindsuppe als Basis. Vegetarisch ist sie nicht.', es: 'La sopa lleva caldo de ternera de base. Vegetariana no es.',
      mas: [
        { de: 'Gibt es etwas Vegetarisches ohne Fleischbrühe?', es: '¿Hay algo vegetariano sin caldo de carne?' },
        { de: 'Die Käsespätzle. Die macht der Koch mit Gemüsebrühe.', es: 'Los Käsespätzle. El cocinero los hace con caldo de verdura.' }
      ] },
  'Könnten wir bitte noch Wasser bekommen?':
    { de: 'Natürlich. Mit oder ohne Kohlensäure?', es: 'Claro. ¿Con o sin gas?' },
  'Das war ausgezeichnet, danke schön.':
    { de: 'Das freut mich. Darf es noch eine Nachspeise sein?', es: 'Me alegro. ¿Desean algún postre?' },
  'Zahlen bitte, getrennt.':
    { de: 'Gern. Wer hatte den Wein und wer das Mineralwasser?', es: 'Con gusto. ¿Quién tomó el vino y quién el agua mineral?' },
  'Stimmt so, der Rest ist für Sie.':
    { de: 'Vielen Dank, das ist sehr freundlich. Schönen Abend noch!', es: 'Muchas gracias, muy amable. ¡Que pasen buena noche!' },
  'Entschuldigung, das habe ich nicht bestellt.':
    { de: 'Oh, Verzeihung. Ich bringe Ihnen sofort das Richtige.', es: 'Ay, disculpe. Le traigo enseguida lo correcto.',
      mas: [
        { de: 'Kein Problem, ich habe ja Zeit.', es: 'No pasa nada, tengo tiempo.' },
        { de: 'Trotzdem, das geht auf uns. Sie bekommen den Kaffee gratis.', es: 'Aun así, invita la casa. El café se lo regalamos.' }
      ] },
  'Hast du Lust, morgen vorbeizukommen?':
    { de: 'Gern. Ab wann bist du zu Hause?', es: 'Con gusto. ¿A partir de qué hora estás en casa?',
      mas: [
        { de: 'Ab sechs bin ich da, vorher habe ich Kurs.', es: 'A partir de las seis estoy, antes tengo clase.' },
        { de: 'Dann komme ich um halb sieben.', es: 'Pues voy a las seis y media.' }
      ] },
  'Wollen wir am Sonntag zusammen kochen?':
    { de: 'Super Idee. Zeigst du mir endlich die Paella?', es: 'Buenísima idea. ¿Por fin me enseñas la paella?',
      mas: [
        { de: 'Klar, aber du musst den Reis besorgen.', es: 'Claro, pero el arroz lo traes tú.' },
        { de: 'Abgemacht. Und du bringst die Pfanne mit.', es: 'Hecho. Y tú traes la paellera.' }
      ] },
  'Ich lade euch alle zum Kaffee ein.':
    { de: 'Das ist lieb von dir. Wann und wo treffen wir uns?', es: 'Qué detalle. ¿Cuándo y dónde quedamos?' },
  'Wir grillen am Samstag, seid ihr dabei?':
    { de: 'Auf jeden Fall. Wir bringen den Salat und die Getränke mit.', es: 'Por supuesto. Llevamos la ensalada y las bebidas.' },
  'Möchtest du uns am Wochenende besuchen?':
    { de: 'Sehr gern. Ich komme mit dem Zug, geht das?', es: 'Con mucho gusto. Voy en tren, ¿te parece?' },
  'Du bist jederzeit willkommen bei uns.':
    { de: 'Danke, das bedeutet mir wirklich viel.', es: 'Gracias, eso significa mucho para mí.' },
  'Machen wir nächste Woche beim Lauf mit?':
    { de: 'Fünf Kilometer schaffe ich. Zehn wären zu viel.', es: 'Cinco kilómetros los hago. Diez sería demasiado.',
      mas: [
        { de: 'Fünf reichen auch. Dann melde ich uns an.', es: 'Con cinco basta. Pues nos apunto.' },
        { de: 'Mach das. Und trainieren wir vorher zusammen?', es: 'Hazlo. ¿Y entrenamos juntos antes?' }
      ] },
  'Sollen wir uns vorher kurz aufwärmen?':
    { de: 'Unbedingt. Ohne Aufwärmen hole ich mir sofort eine Verletzung.', es: 'Sin falta. Sin calentar me lesiono enseguida.',
      mas: [
        { de: 'Zehn Minuten reichen, oder?', es: 'Con diez minutos basta, ¿no?' },
        { de: 'Für mich schon. Die Waden brauchen am längsten.', es: 'Para mí sí. Los gemelos son los que más tardan.' }
      ] },
  'Super Idee, das machen wir!':
    { de: 'Dann schreibe ich es gleich in die Gruppe.', es: 'Pues lo escribo ahora en el grupo.' },
  'Ja, gern. Wann und wo treffen wir uns?':
    { de: 'Um neun beim Eingang zum Park, passt das?', es: 'A las nueve en la entrada del parque, ¿te va bien?' },
  'Da bin ich auf jeden Fall dabei.':
    { de: 'Freut mich. Zu dritt macht es sowieso mehr Spaß.', es: 'Me alegro. Entre tres es más divertido de todos modos.' },
  'Klingt gut, ich sage zu.':
    { de: 'Perfekt. Bring Wasser mit, unterwegs gibt es nichts.', es: 'Perfecto. Trae agua, por el camino no hay nada.' },
  'Genau darauf hatte ich Lust.':
    { de: 'Dachte ich mir. Du redest seit Wochen davon.', es: 'Me lo imaginaba. Llevas semanas hablando de ello.' },
  'Warum eigentlich nicht? Machen wir.':
    { de: 'Genau die Einstellung! Dann bis Samstag.', es: '¡Esa es la actitud! Hasta el sábado entonces.' },
  'Das ist wirklich nichts für mich.':
    { de: 'Schade. Was machst du denn lieber?', es: 'Qué pena. ¿Y qué prefieres hacer?' },
  'Lieber ein anderes Mal, heute bin ich kaputt.':
    { de: 'Kein Problem. Ich frage nächste Woche wieder.', es: 'No hay problema. Te vuelvo a preguntar la semana que viene.' },
  'Tut mir leid, an dem Tag geht es nicht.':
    { de: 'Und am Sonntag? Da wäre ich auch frei.', es: '¿Y el domingo? Ese día también estaría libre.' },
  'Das ist mir ehrlich gesagt zu anstrengend.':
    { de: 'Dann fangen wir langsamer an. Walken statt laufen?', es: 'Pues empezamos más despacio. ¿Marcha en vez de correr?' },
  'Ich habe leider gerade kein Geld dafür.':
    { de: 'Der Park kostet nichts. Lass uns einfach dort laufen.', es: 'El parque no cuesta nada. Corramos allí y ya está.' },
  'Ohne mich, ich hasse Mannschaftssport.':
    { de: 'Verstehe. Dann schwimmen wir das nächste Mal.', es: 'Entiendo. Pues la próxima vez nadamos.' },
  'Joggen finde ich auf Dauer langweilig.':
    { de: 'Dann hör Podcasts dabei. Plötzlich ist die Stunde vorbei.', es: 'Pues escucha pódcast mientras. De repente pasa la hora.' },
  'Das Fitnessstudio ist mir zu teuer.':
    { de: 'Im Park gibt es Geräte, die nichts kosten.', es: 'En el parque hay aparatos que no cuestan nada.' },
  'Schwimmen finde ich richtig gesund.':
    { de: 'Stimmt, dabei tut man den Gelenken nichts an.', es: 'Es verdad, no se castigan las articulaciones.' },
  'Das Training war heute zu leicht.':
    { de: 'Sag das dem Trainer. Er stellt gern schwerere Übungen zusammen.', es: 'Díselo al entrenador. Le gusta preparar ejercicios más duros.' },
  'Ich halte Yoga für unterschätzt.':
    { de: 'Da hast du recht. Nach einem Monat merkt man den Rücken nicht mehr.', es: 'En eso tienes razón. Al mes ya no notas la espalda.' },
  'Die Halle ist zu klein für so viele Leute.':
    { de: 'Deshalb trainieren wir jetzt um sieben statt um acht.', es: 'Por eso ahora entrenamos a las siete en vez de a las ocho.' },
  'Ich finde den Beitrag ziemlich fair.':
    { de: 'Für zweimal Training pro Woche auf jeden Fall.', es: 'Para dos entrenamientos por semana, desde luego.' },
  'Das Spiel gestern war eine Katastrophe.':
    { de: 'Der Schiedsrichter oder unsere Mannschaft?', es: '¿El árbitro o nuestro equipo?',
      mas: [
        { de: 'Beides, ehrlich gesagt.', es: 'Las dos cosas, la verdad.' },
        { de: 'Dann war es wirklich ein schlechter Abend.', es: 'Pues sí que fue una mala noche.' }
      ] },
  'Im Team trainiere ich lieber als allein.':
    { de: 'Warum? Weil man sich gegenseitig mitzieht?', es: '¿Por qué? ¿Porque unos tiran de otros?',
      mas: [
        { de: 'Genau. Allein höre ich viel früher auf.', es: 'Exacto. Solo lo dejo mucho antes.' },
        { de: 'Bei mir ist es dasselbe. Deshalb bin ich im Verein.', es: 'A mí me pasa igual. Por eso estoy en el club.' }
      ] },
  'Mir ist das Training in der Früh am liebsten.':
    { de: 'Um welche Zeit? Ich schaffe es kaum vor acht.', es: '¿A qué hora? Yo casi no llego antes de las ocho.' },
  'Im Winter laufe ich lieber drinnen.':
    { de: 'Bei Schnee verstehe ich das. Sonst ist draußen schöner.', es: 'Con nieve lo entiendo. Si no, fuera es más bonito.' },
  'Mir gefällt Radfahren besser als Laufen.':
    { de: 'Mir auch. Man kommt weiter und sieht mehr.', es: 'A mí también. Llegas más lejos y ves más.' },
  'Ich trainiere am liebsten allein.':
    { de: 'Wirklich? Ich brauche jemanden, der mich anschiebt.', es: '¿En serio? Yo necesito a alguien que me empuje.' },
  'Klettern finde ich spannender als Fußball.':
    { de: 'Kann ich verstehen. Beim Klettern denkt man mit.', es: 'Lo entiendo. Escalando también piensas.' },
  'Ich bewege mich lieber in der Natur.':
    { de: 'Dann ist der Wienerwald perfekt für dich.', es: 'Entonces el Wienerwald es perfecto para ti.' },
  'Ohne Musik kann ich nicht trainieren.':
    { de: 'Bei mir ist es umgekehrt. Ich brauche die Ruhe.', es: 'En mi caso es al revés. Necesito silencio.' },
  'Machst du regelmäßig Sport?':
    { de: 'Dreimal die Woche. Weniger merke ich sofort im Rücken.', es: 'Tres veces por semana. Con menos lo noto enseguida en la espalda.',
      mas: [
        { de: 'Und wie hältst du das über den Winter durch?', es: '¿Y cómo aguantas durante el invierno?' },
        { de: 'Mit einem festen Termin im Kalender. Sonst finde ich immer eine Ausrede.', es: 'Con una cita fija en el calendario. Si no, siempre encuentro una excusa.' }
      ] },
  'Wo trainierst du im Winter?':
    { de: 'In der Halle beim Bahnhof. Draußen ist es zu glatt.', es: 'En el pabellón junto a la estación. Fuera resbala demasiado.' },
  'Hast du dich schon einmal verletzt?':
    { de: 'Einmal das Knie. Danach habe ich sechs Monate pausiert.', es: 'Una vez la rodilla. Después paré seis meses.' },
  'Wie war das Spiel am Wochenende?':
    { de: 'Ein Unentschieden. Gerecht, ehrlich gesagt.', es: 'Un empate. Justo, la verdad.' },
  'Wie lange trainierst du am Stück?':
    { de: 'Eine Stunde, mehr bringt bei mir nichts.', es: 'Una hora, más no me aporta nada.' },
  'Achtest du auch auf die Ernährung?':
    { de: 'Ja, seit einem Jahr. Das war wichtiger als das Training.', es: 'Sí, desde hace un año. Eso importó más que el entrenamiento.' },
  'Gehst du nach dem Training duschen?':
    { de: 'Immer. Die Umkleide ist zum Glück gleich neben der Halle.', es: 'Siempre. Por suerte el vestuario está al lado del pabellón.' },
  'Hast du heute Muskelkater?':
    { de: 'Und wie. Treppensteigen ist heute eine echte Strafe.', es: 'Y tanto. Hoy subir escaleras es un castigo.' },
  'Wie viele Zuschauer waren im Stadion?':
    { de: 'Fast zehntausend. Die Stimmung war unglaublich.', es: 'Casi diez mil. El ambiente era increíble.' },
  'Seit wann bist du in diesem Verein?':
    { de: 'Seit vier Jahren. Inzwischen sind das meine besten Freunde.', es: 'Desde hace cuatro años. Ya son mis mejores amigos.' },
  'Darf ich mich kurz vorstellen? Mein Name ist Pascual.':
    { de: 'Guten Tag, Herr Pascual. Berger, Leiterin der Buchhaltung.', es: 'Buenos días, señor Pascual. Berger, jefa de contabilidad.' },
  'Die Buchhaltung gehört zu meinem Bereich.':
    { de: 'Sehr gut. Dann sehen wir uns bei der Monatsabrechnung oft.', es: 'Muy bien. Entonces nos veremos a menudo con el cierre mensual.' },
  'Ich stelle Ihnen Frau Berger vor, sie ist neu bei uns.':
    { de: 'Willkommen im Team! In welcher Abteilung arbeiten Sie?', es: '¡Bienvenida al equipo! ¿En qué departamento trabaja?',
      mas: [
        { de: 'Im Einkauf, bei Herrn Wagner.', es: 'En compras, con el señor Wagner.' },
        { de: 'Dann sehen wir uns oft. Wir bestellen alles über Sie.', es: 'Entonces nos veremos mucho. Lo pedimos todo por ustedes.' }
      ] },
  'Heute ist mein erster Arbeitstag hier.':
    { de: 'Herzlich willkommen. Ich zeige Ihnen zuerst Ihren Arbeitsplatz.', es: 'Bienvenido. Primero le enseño su puesto de trabajo.',
      mas: [
        { de: 'Brauche ich für den Computer schon ein Passwort?', es: '¿Necesito ya una contraseña para el ordenador?' },
        { de: 'Das bekommen Sie heute Nachmittag von der IT.', es: 'Se la dará informática esta tarde.' }
      ] },
  'Freut mich, Sie persönlich kennenzulernen.':
    { de: 'Ganz meinerseits. Wir haben ja schon oft telefoniert.', es: 'Igualmente. Ya hemos hablado muchas veces por teléfono.',
      mas: [
        { de: 'Am Telefon klingen Sie ganz anders.', es: 'Por teléfono suena usted muy distinto.' },
        { de: 'Das sagen alle. Angeblich klinge ich strenger.', es: 'Me lo dicen todos. Por lo visto sueno más serio.' }
      ] },
  'Ich komme aus der Abteilung nebenan.':
    { de: 'Ach, Sie sind der Kollege von Herrn Huber?', es: 'Ah, ¿usted es el compañero del señor Huber?' },
  'Wer ist hier mein Ansprechpartner?':
    { de: 'Für alles Technische Herr Novak, für den Rest ich.', es: 'Para todo lo técnico el señor Novak, para el resto yo.' },
  'Wir sehen uns bei der Besprechung um zehn.':
    { de: 'Gut. Soll ich etwas vorbereiten oder nur zuhören?', es: 'Bien. ¿Preparo algo o solo escucho?' },
  'Entschuldigung, das habe ich nicht ganz mitbekommen.':
    { de: 'Kein Problem. Ich wiederhole es langsamer.', es: 'No hay problema. Lo repito más despacio.' },
  'Habe ich das richtig verstanden: bis Freitag?':
    { de: 'Genau, Freitag Mittag. Danach geht es an den Kunden.', es: 'Exacto, el viernes al mediodía. Después va al cliente.' },
  'Was bedeutet diese Abkürzung?':
    { de: 'Die verwendet nur unsere Abteilung. Ich schreibe sie dir auf.', es: 'Esa solo la usa nuestro departamento. Te la apunto.',
      mas: [
        { de: 'Gibt es eine Liste mit allen?', es: '¿Hay una lista con todas?' },
        { de: 'Im Intranet, unter „Interne Begriffe". Sehr praktisch.', es: 'En la intranet, en «Interne Begriffe». Muy práctica.' }
      ] },
  'Wie meinen Sie das genau?':
    { de: 'Ich meine, der Kunde soll den Bericht zuerst sehen.', es: 'Quiero decir que el cliente debe ver el informe primero.',
      mas: [
        { de: 'Also erst der Kunde und dann die Abteilungsleitung?', es: '¿Entonces primero el cliente y luego la jefatura?' },
        { de: 'Genau so. Sonst gibt es wieder Diskussionen.', es: 'Exactamente así. Si no, vuelve a haber discusiones.' }
      ] },
  'Könnten Sie mir das an einem Beispiel zeigen?':
    { de: 'Gern. Schauen wir den letzten Auftrag zusammen an.', es: 'Con gusto. Miramos juntos el último pedido.',
      mas: [
        { de: 'Dürfte ich mir dabei Notizen machen?', es: '¿Podría tomar notas mientras?' },
        { de: 'Natürlich. Beim ersten Mal merkt sich das niemand.', es: 'Por supuesto. La primera vez no se acuerda nadie.' }
      ] },
  'Ich bin mir nicht sicher, ob das stimmt.':
    { de: 'Prüf es ruhig nach. Lieber jetzt als nach der Abgabe.', es: 'Compruébalo tranquilamente. Mejor ahora que después de entregarlo.' },
  'Zu wem gehe ich, wenn ich nicht weiterweiß?':
    { de: 'Zu mir, jederzeit. Fragen sind besser als Fehler.', es: 'A mí, cuando quieras. Preguntar es mejor que equivocarse.' },
  'Darf ich noch einmal nachfragen?':
    { de: 'Natürlich. In der Einarbeitung ist das völlig normal.', es: 'Claro. En el periodo de adaptación es completamente normal.' },
  'Wer übernimmt das Protokoll heute?':
    { de: 'Ich mache es. Nächste Woche ist jemand anderer dran.', es: 'Lo hago yo. La semana que viene le toca a otro.',
      mas: [
        { de: 'Soll ich es gleich nach der Besprechung verschicken?', es: '¿Lo mando justo después de la reunión?' },
        { de: 'Bis morgen Mittag reicht. Bitte alle in Kopie setzen.', es: 'Con mañana al mediodía basta. Pon a todos en copia, por favor.' }
      ] },
  'Wann ist der Abgabetermin für den Bericht?':
    { de: 'Freitag zwölf Uhr. Schick ihn mir vorher zum Gegenlesen.', es: 'El viernes a las doce. Mándamelo antes para revisarlo.',
      mas: [
        { de: 'Donnerstagabend hätte ich ihn fertig.', es: 'El jueves por la tarde lo tendría listo.' },
        { de: 'Perfekt, dann haben wir noch einen Tag Luft.', es: 'Perfecto, así nos queda un día de margen.' }
      ] },
  'Ich arbeite mich gerade noch ein.':
    { de: 'Lass dir Zeit. Die ersten drei Monate sind dafür da.', es: 'Tómate tu tiempo. Los tres primeros meses son para eso.',
      mas: [
        { de: 'Manches frage ich bestimmt zweimal.', es: 'Seguro que algunas cosas las pregunto dos veces.' },
        { de: 'Frag ruhig dreimal. Das ist normal am Anfang.', es: 'Pregunta hasta tres veces. Es normal al principio.' }
      ] },
  'Diese Aufgabe schaffe ich bis Mittwoch.':
    { de: 'Perfekt. Sag Bescheid, falls doch etwas dazwischenkommt.', es: 'Perfecto. Avisa si surge algo.' },
  'Unter Zeitdruck mache ich mehr Fehler.':
    { de: 'Das geht allen so. Sag früh Bescheid, dann teilen wir auf.', es: 'A todos nos pasa. Avisa pronto y lo repartimos.' },
  'Wie läuft das hier normalerweise ab?':
    { de: 'Erst der Antrag, dann die Freigabe, dann die Bestellung.', es: 'Primero la solicitud, luego la aprobación, luego el pedido.' },
  'Kann ich das an jemanden weitergeben?':
    { de: 'An die Kollegin im zweiten Stock. Sie kennt den Kunden.', es: 'A la compañera del segundo piso. Conoce al cliente.' },
  'Die Zusammenarbeit mit dem Team klappt gut.':
    { de: 'Das höre ich gern. Gibt es trotzdem etwas zu verbessern?', es: 'Me alegra oírlo. ¿Aun así hay algo que mejorar?' },
  'Welche Vorschriften muss ich hier beachten?':
    { de: 'Vor allem die Sicherheit in der Werkstatt. Der Rest steht im Handbuch.', es: 'Sobre todo la seguridad en el taller. El resto está en el manual.' },
  'Ich hätte gern ehrliches Feedback zu meiner Arbeit.':
    { de: 'Gern. Fachlich sehr gut, du fragst nur zu selten nach.', es: 'Con gusto. Técnicamente muy bien, solo que preguntas poco.' },
  'Ich möchte mich auf die Stelle bewerben.':
    { de: 'Schicken Sie uns Lebenslauf und Anschreiben per Mail.', es: 'Envíenos currículum y carta de presentación por correo.',
      mas: [
        { de: 'Bis wann kann ich die Unterlagen schicken?', es: '¿Hasta cuándo puedo enviar la documentación?' },
        { de: 'Bis Ende des Monats. Danach laden wir zu den Gesprächen ein.', es: 'Hasta fin de mes. Después convocamos las entrevistas.' }
      ] },
  'Welche Unterlagen brauchen Sie von mir?':
    { de: 'Zeugnisse, Lebenslauf und eine Kopie des Ausweises.', es: 'Certificados, currículum y una copia del documento.',
      mas: [
        { de: 'Meine Zeugnisse sind auf Spanisch. Reicht eine Übersetzung?', es: 'Mis títulos están en español. ¿Basta con una traducción?' },
        { de: 'Eine beglaubigte, ja. Die Liste der Übersetzer schicke ich Ihnen.', es: 'Una jurada, sí. Le mando la lista de traductores.' }
      ] },
  'Ich habe fünf Jahre Erfahrung in der Branche.':
    { de: 'Und in welchem Bereich genau? Vertrieb oder Technik?', es: '¿Y en qué área exactamente? ¿Ventas o técnica?',
      mas: [
        { de: 'Vor allem im Vertrieb, zuletzt auch etwas Technik.', es: 'Sobre todo en ventas, y últimamente algo de técnica.' },
        { de: 'Die Mischung suchen wir genau.', es: 'Justo esa mezcla es la que buscamos.' }
      ] },
  'Wann könnten Sie bei uns anfangen?':
    { de: 'In sechs Wochen. So lange läuft meine Kündigungsfrist.', es: 'En seis semanas. Es mi plazo de preaviso.' },
  'Wie sind die Arbeitszeiten geregelt?':
    { de: 'Gleitzeit zwischen sieben und neunzehn Uhr, Kernzeit ab neun.', es: 'Horario flexible entre las siete y las siete, obligatorio desde las nueve.' },
  'Gibt es eine Probezeit?':
    { de: 'Ja, drei Monate. Das ist bei uns Standard.', es: 'Sí, tres meses. Aquí es lo habitual.' },
  'Zahlt die Firma auch Fortbildungen?':
    { de: 'Zwei Kurse im Jahr. Sprachkurse ausdrücklich eingeschlossen.', es: 'Dos cursos al año. Los cursos de idiomas incluidos expresamente.' },
  'Mein Deutsch ist noch nicht perfekt.':
    { de: 'Für diese Stelle reicht es völlig. Wichtiger ist die Erfahrung.', es: 'Para este puesto basta de sobra. La experiencia importa más.' },
  'Wann bekomme ich eine Rückmeldung?':
    { de: 'Bis Ende der Woche. So oder so melden wir uns.', es: 'Antes de fin de semana. De un modo u otro le avisamos.' },
  'Vielen Dank für das Gespräch.':
    { de: 'Danke Ihnen. Es war ein sehr angenehmes Gespräch.', es: 'Gracias a usted. Ha sido una conversación muy agradable.' },
  'Ich habe einen Fehler gemacht, es tut mir leid.':
    { de: 'Danke, dass du es sagst. Schauen wir, wie wir es reparieren.', es: 'Gracias por decirlo. Vamos a ver cómo lo arreglamos.',
      mas: [
        { de: 'Ich habe die Rechnung an die falsche Firma geschickt.', es: 'He mandado la factura a la empresa equivocada.' },
        { de: 'Das passiert. Ruf dort an und schick sie neu.', es: 'Eso pasa. Llama allí y vuelve a mandarla.' }
      ] },
  'Ich schaffe die Arbeit in der Zeit nicht.':
    { de: 'Dann sag es früher. Zusammen finden wir eine Lösung.', es: 'Pues dilo antes. Juntos encontramos una solución.',
      mas: [
        { de: 'Es sind einfach zu viele Aufträge gleichzeitig.', es: 'Son demasiados encargos a la vez.' },
        { de: 'Dann nehmen wir zwei raus und geben sie weiter.', es: 'Pues sacamos dos y los pasamos a otro.' }
      ] },
  'Können wir kurz unter vier Augen sprechen?':
    { de: 'Natürlich. Gehen wir in den Besprechungsraum.', es: 'Claro. Vamos a la sala de reuniones.',
      mas: [
        { de: 'Es geht um die Schichtplanung.', es: 'Es sobre el reparto de turnos.' },
        { de: 'Dachte ich mir. Setzen Sie sich, wir haben Zeit.', es: 'Me lo imaginaba. Siéntese, tenemos tiempo.' }
      ] },
  'Mit dem neuen Ablauf komme ich nicht zurecht.':
    { de: 'Woran genau hakt es? Dann passen wir es an.', es: '¿Dónde se atasca exactamente? Así lo ajustamos.' },
  'Ich fühle mich im Team nicht wohl.':
    { de: 'Das ist ernst. Erzähl mir bitte, was genau passiert ist.', es: 'Eso es serio. Cuéntame qué ha pasado exactamente.' },
  'Die Vorschriften werden hier oft ignoriert.':
    { de: 'Das gebe ich sofort weiter. Bei Sicherheit gibt es keine Ausnahmen.', es: 'Lo transmito ahora mismo. En seguridad no hay excepciones.' },
  'Ich mache seit Wochen zu viele Überstunden.':
    { de: 'Das darf kein Dauerzustand sein. Wir brauchen noch jemanden.', es: 'Eso no puede ser permanente. Necesitamos a alguien más.' },
  'Könnten wir meinen Vertrag besprechen?':
    { de: 'Gern. Machen wir einen Termin mit der Personalabteilung.', es: 'Con gusto. Pedimos cita con el departamento de personal.' },
  'Der Kunde war am Telefon sehr unfreundlich.':
    { de: 'Das musst du dir nicht gefallen lassen. Sag mir Bescheid, ich rufe zurück.', es: 'No tienes por qué aguantarlo. Avísame y le llamo yo.' },
  'Ich möchte zum Monatsende kündigen.':
    { de: 'Das bedaure ich sehr. Können wir vorher noch einmal reden?', es: 'Lo lamento mucho. ¿Podemos hablarlo antes una vez más?' },
  'Ich denke, wir haben alles besprochen.':
    { de: 'Von meiner Seite ja. Vielen Dank für Ihre Zeit.', es: 'Por mi parte sí. Muchas gracias por su tiempo.',
      mas: [
        { de: 'Eine Sache noch: der Ausflug im Mai.', es: 'Una cosa más: la excursión de mayo.' },
        { de: 'Stimmt. Die Anmeldung kommt nächste Woche.', es: 'Es verdad. La inscripción llega la semana que viene.' }
      ] },
  'Schönen Tag noch und auf Wiedersehen.':
    { de: 'Ihnen auch. Grüßen Sie bitte Ihre Frau von mir.', es: 'Igualmente. Salude a su mujer de mi parte.',
      mas: [
        { de: 'Mache ich gern. Bis zum nächsten Mal.', es: 'Con mucho gusto. Hasta la próxima.' },
        { de: 'Bis dann. Und melden Sie sich, wenn etwas ist.', es: 'Hasta entonces. Y avise si pasa algo.' }
      ] },
  'Das ist mir ehrlich gesagt egal.':
    { de: 'Dann entscheide ich. Wir nehmen den Donnerstag.', es: 'Pues decido yo. Cogemos el jueves.' },
  'Von mir aus beides, such du aus.':
    { de: 'Gut, dann machen wir es so, wie es für die Kinder passt.', es: 'Bien, lo hacemos como les venga bien a los niños.' },
  'Mach einfach, wie du willst.':
    { de: 'Sag mir ruhig deine Meinung. Ich frage ja nicht umsonst.', es: 'Dime tu opinión tranquilamente. Por algo pregunto.' },
  'Das spielt für mich keine Rolle.':
    { de: 'Für mich schon. Deswegen frage ich noch einmal nach.', es: 'Para mí sí. Por eso lo vuelvo a preguntar.' },
  'Von mir aus gern, aber es muss nicht sein.':
    { de: 'Dann lassen wir es. Wir haben ohnehin genug zu tun.', es: 'Pues lo dejamos. De todos modos tenemos bastante que hacer.' },
  'Ist mir eigentlich ziemlich gleich.':
    { de: 'Das merkt man. Interessiert dich das Thema gar nicht?', es: 'Se nota. ¿No te interesa nada el tema?' },
  'Könnten Sie bitte etwas langsamer sprechen?':
    { de: 'Natürlich. Sagen Sie mir Bescheid, wenn ich wieder zu schnell werde.', es: 'Claro. Dígame si vuelvo a ir demasiado rápido.' },
  'Ich kann es Ihnen gern noch einmal erklären.':
    { de: 'Bitte. Besonders den Teil mit der Anmeldung.', es: 'Por favor. Sobre todo la parte del registro.' },
  'Gibt es das auch auf Spanisch?':
    { de: 'Das Merkblatt ja. Ich drucke es Ihnen gleich aus.', es: 'La hoja informativa sí. Se la imprimo ahora.' },
  'Sagen Sie es bitte mit einfachen Worten.':
    { de: 'Gern: Ihr Sohn braucht Hilfe in Mathematik, sonst nichts.', es: 'Con gusto: su hijo necesita ayuda en matemáticas, nada más.' },
  'Bitte unterbrechen Sie mich, wenn etwas unklar ist.':
    { de: 'Danke, das mache ich. Sonst nicke ich nur und verstehe nichts.', es: 'Gracias, lo haré. Si no, solo asiento y no entiendo nada.' },
  'Ich bin mir da nicht ganz sicher.':
    { de: 'Dann fragen wir lieber nach, bevor wir etwas Falsches machen.', es: 'Pues mejor preguntamos antes de hacer algo mal.' },
  'Ich denke ja, sicher bin ich mir aber nicht.':
    { de: 'Schau bitte im Mitteilungsheft nach. Dort steht es sicher.', es: 'Mira en el cuaderno de notas. Ahí seguro que está.' },
  'Das kann ich leider nicht sagen.':
    { de: 'Wer könnte es wissen? Die Klassenlehrerin vielleicht?', es: '¿Quién lo podría saber? ¿Quizá la tutora?' },
  'Vielleicht, vielleicht auch nicht.':
    { de: 'Das hilft mir wenig. Wann wissen wir mehr?', es: 'Eso me ayuda poco. ¿Cuándo sabremos más?' },
  'Ich müsste das erst nachlesen.':
    { de: 'Kein Problem. Sagen Sie mir einfach morgen Bescheid.', es: 'No hay problema. Avíseme mañana sin más.' },
  'Ehrlich gesagt habe ich keine Ahnung.':
    { de: 'Danke für die Ehrlichkeit. Dann suchen wir es gemeinsam.', es: 'Gracias por la sinceridad. Pues lo buscamos juntos.' },
  'Wann bekommen die Kinder das Zeugnis?':
    { de: 'Am letzten Schultag vor den Ferien, immer am Vormittag.', es: 'El último día de clase antes de las vacaciones, siempre por la mañana.',
      mas: [
        { de: 'Muss ich es unterschreiben und zurückgeben?', es: '¿Tengo que firmarlo y devolverlo?' },
        { de: 'Nur die Kopie. Das Original bleibt bei Ihnen.', es: 'Solo la copia. El original se queda con usted.' }
      ] },
  'Mein Sohn war gestern krank.':
    { de: 'Danke für die Info. Eine kurze schriftliche Entschuldigung brauche ich trotzdem.', es: 'Gracias por avisar. Aun así necesito un justificante por escrito.' },
  'Wie kommt mein Kind in der Klasse zurecht?':
    { de: 'Gut. Er ist ruhig, aber er meldet sich immer öfter.', es: 'Bien. Es tranquilo, pero cada vez participa más.' },
  'Bekommen die Kinder Aufgaben für die Ferien?':
    { de: 'Nur Lesen. Zwanzig Minuten am Tag reichen völlig.', es: 'Solo leer. Veinte minutos al día bastan de sobra.' },
  'Braucht mein Kind Nachhilfe?':
    { de: 'In Mathematik wäre es sinnvoll. In Deutsch reicht üben zu Hause.', es: 'En matemáticas tendría sentido. En alemán basta con practicar en casa.' },
  'Wann ist der nächste Elternsprechtag?':
    { de: 'Am zwölften November. Sie können sich online anmelden.', es: 'El doce de noviembre. Se pueden apuntar por internet.' },
  'Welche Schulbücher müssen wir kaufen?':
    { de: 'Keine. Die Liste bekommen die Kinder, die Bücher stellt die Schule.', es: 'Ninguno. Los niños reciben la lista, los libros los pone el colegio.',
      mas: [
        { de: 'Und Hefte und Stifte?', es: '¿Y cuadernos y bolígrafos?' },
        { de: 'Die schon. Die Liste kommt in der ersten Woche.', es: 'Eso sí. La lista llega la primera semana.' }
      ] },
  'Wie viel kostet die Nachmittagsbetreuung?':
    { de: 'Achtzig Euro im Monat, mit Mittagessen hundertzwanzig.', es: 'Ochenta euros al mes, con comida ciento veinte.',
      mas: [
        { de: 'Gibt es eine Ermäßigung für zwei Kinder?', es: '¿Hay descuento por dos hijos?' },
        { de: 'Ja, das zweite Kind zahlt die Hälfte.', es: 'Sí, el segundo paga la mitad.' }
      ] },
  'Darf mein Kind allein nach Hause gehen?':
    { de: 'Ab der dritten Klasse ja, mit Ihrer schriftlichen Erlaubnis.', es: 'A partir de tercero sí, con su permiso por escrito.',
      mas: [
        { de: 'Wo bekomme ich dieses Formular?', es: '¿Dónde consigo ese formulario?' },
        { de: 'Im Sekretariat, oder ich gebe es ihm morgen mit.', es: 'En secretaría, o se lo doy mañana a él.' }
      ] },
  'Ist die Schularbeit schon korrigiert?':
    { de: 'Bis Freitag. Die Kinder bekommen sie dann zurück.', es: 'Para el viernes. Los niños lo recibirán entonces.' },
  'Mein Kind hat Schwierigkeiten mit der Sprache.':
    { de: 'Das sehe ich auch. Wir können ihn in die Sprachförderung nehmen.', es: 'Yo también lo veo. Lo podemos meter en apoyo lingüístico.',
      mas: [
        { de: 'Wie viele Stunden pro Woche wären das?', es: '¿Cuántas horas a la semana serían?' },
        { de: 'Zwei, immer am Dienstag und Donnerstag nach dem Unterricht.', es: 'Dos, siempre martes y jueves después de clase.' }
      ] },
  'Er kann sich in der Klasse schlecht konzentrieren.':
    { de: 'Ich setze ihn weiter nach vorne. Das hilft bei vielen Kindern.', es: 'Lo pongo más adelante. A muchos niños les ayuda.',
      mas: [
        { de: 'Zu Hause ist es genauso.', es: 'En casa pasa lo mismo.' },
        { de: 'Dann probieren Sie kürzere Einheiten, zwanzig Minuten mit Pause.', es: 'Pruebe con ratos más cortos, veinte minutos con pausa.' }
      ] },
  'Wie kann ich zu Hause besser helfen?':
    { de: 'Lassen Sie ihn laut vorlesen, jeden Tag zehn Minuten.', es: 'Déjele leer en voz alta, diez minutos al día.',
      mas: [
        { de: 'Auf Deutsch? Mein Deutsch ist nicht perfekt.', es: '¿En alemán? Mi alemán no es perfecto.' },
        { de: 'Das macht nichts. Er liest, Sie hören zu. Das genügt.', es: 'No importa. Él lee y usted escucha. Con eso basta.' }
      ] },
  'Ist meine Tochter im Unterricht aktiv?':
    { de: 'Sehr. Manchmal so aktiv, dass die anderen nicht drankommen.', es: 'Mucho. A veces tanto que los demás no llegan a intervenir.' },
  'Seine Noten haben sich stark verbessert.':
    { de: 'Stimmt. Er arbeitet seit dem Sommer viel fleißiger.', es: 'Es verdad. Desde el verano trabaja mucho más.' },
  'Gibt es Probleme mit den Mitschülern?':
    { de: 'Nichts Ernstes. Kleine Streitereien, wie in jeder Klasse.', es: 'Nada serio. Peleíllas, como en cualquier clase.' },
  'Sollten wir die Schule wechseln?':
    { de: 'Das würde ich jetzt nicht tun. Geben Sie ihm noch ein Jahr.', es: 'Yo ahora no lo haría. Denle un año más.' },
  'Welchen Abschluss kann er später machen?':
    { de: 'Mit diesen Noten steht ihm fast alles offen, auch die Matura.', es: 'Con estas notas tiene casi todo abierto, también el bachillerato.' },
  'Er ist begabt, aber ziemlich faul.':
    { de: 'Das höre ich oft von Eltern. Meistens ändert sich das mit vierzehn.', es: 'Eso lo oigo mucho de los padres. Normalmente cambia a los catorce.' },
  'Vielen Dank für Ihre Geduld mit ihm.':
    { de: 'Gern. Er ist ein netter Bub, das macht es leicht.', es: 'De nada. Es un chico majo, eso lo hace fácil.' },
  'Jetzt komm mit, das wird sicher lustig!':
    { de: 'Na gut, aber nur bis elf. Morgen muss ich früh raus.', es: 'Bueno, pero solo hasta las once. Mañana madrugo.' },
  'Eine Folge noch, bitte!':
    { de: 'Das sagst du jedes Mal. Und dann werden es vier.', es: 'Eso dices siempre. Y luego se convierten en cuatro.' },
  'Sei doch nicht so, das macht Spaß.':
    { de: 'Von mir aus. Aber du suchst den Film aus, nicht ich.', es: 'Por mí vale. Pero eliges tú la película, no yo.' },
  'Probier es wenigstens einmal.':
    { de: 'Also gut, eine Folge. Wenn sie langweilig ist, höre ich auf.', es: 'Está bien, un episodio. Si es aburrido, lo dejo.' },
  'Alle anderen kommen auch mit.':
    { de: 'Das ist kein gutes Argument, aber gut, ich komme.', es: 'Ese no es un buen argumento, pero bueno, voy.' },
  'Du bereust es sicher nicht.':
    { de: 'Das hast du beim letzten Film auch gesagt.', es: 'Eso dijiste también con la última película.' },
  'Es dauert doch nur eine halbe Stunde.':
    { de: 'Dann schau ich es mir an. Aber danach schlafe ich.', es: 'Entonces lo veo. Pero después me duermo.' },
  'Wann hast du das letzte Mal etwas Neues probiert?':
    { de: 'Treffer. Gut, ich bin dabei.', es: 'Tocado. Bueno, me apunto.' },
  'Ich verspreche dir, morgen stehe ich früh auf.':
    { de: 'Das will ich sehen. Stell dir lieber zwei Wecker.', es: 'Eso quiero verlo. Ponte mejor dos despertadores.',
      mas: [
        { de: 'Und wenn nicht, mache ich das Frühstück eine Woche lang.', es: 'Y si no, hago yo el desayuno una semana.' },
        { de: 'Das nehme ich an. Abgemacht ist abgemacht.', es: 'Acepto. Lo dicho, dicho está.' }
      ] },
  'Ist das ein Versprechen?':
    { de: 'Gut. Und diesmal gilt es wirklich, ja?', es: 'Bien. Y esta vez va en serio, ¿eh?',
      mas: [
        { de: 'Ja, diesmal wirklich.', es: 'Sí, esta vez de verdad.' },
        { de: 'Gut. Ich erinnere dich am Freitag daran.', es: 'Bien. Te lo recuerdo el viernes.' }
      ] },
  'Darauf kannst du dich hundertprozentig verlassen.':
    { de: 'Dann bin ich beruhigt. Ich sage es gleich den anderen.', es: 'Entonces me quedo tranquilo. Se lo digo ahora a los demás.' },
  'Ich schwöre, ich habe es nicht gelöscht.':
    { de: 'Dann war es wohl das Update. Schauen wir im Papierkorb.', es: 'Entonces habrá sido la actualización. Miramos en la papelera.' },
  'Ich mache es heute Abend, ganz sicher.':
    { de: 'Schreib es dir auf. Sonst vergisst du es wie letztes Mal.', es: 'Apúntatelo. Si no, se te olvida como la última vez.' },
  'Ich halte immer, was ich verspreche.':
    { de: 'Das stimmt tatsächlich. Deshalb frage ich dich zuerst.', es: 'La verdad es que es cierto. Por eso te pregunto a ti primero.' },
  'Ich halte die Serie für überbewertet.':
    { de: 'Findest du? Die zweite Staffel wird deutlich besser.', es: '¿Tú crees? La segunda temporada mejora bastante.',
      mas: [
        { de: 'Dann gebe ich ihr noch eine Chance.', es: 'Pues le doy otra oportunidad.' },
        { de: 'Fang direkt mit Staffel zwei an. Die erste kannst du überspringen.', es: 'Empieza por la segunda temporada. La primera te la puedes saltar.' }
      ] },
  'Ich finde, dass zu viel Werbung läuft.':
    { de: 'Deswegen zahle ich das Abo. Ohne Werbung ist es ein anderes Leben.', es: 'Por eso pago la suscripción. Sin publicidad es otra vida.' },
  'Er meint, Dokus seien ihm lieber.':
    { de: 'Das passt zu ihm. Er weiß über alles Bescheid.', es: 'Eso le pega. Está al tanto de todo.',
      mas: [
        { de: 'Schaut er auch etwas auf Deutsch?', es: '¿Ve algo en alemán?' },
        { de: 'Nur auf Deutsch, mit Untertiteln. So lernt er nebenbei.', es: 'Solo en alemán, con subtítulos. Así aprende de paso.' }
      ] },
  'Sie meint, das Ende war unlogisch.':
    { de: 'Da hat sie recht. Die letzte Folge erklärt gar nichts.', es: 'En eso tiene razón. El último episodio no explica nada.',
      mas: [
        { de: 'Hat sie gesagt, was sie gestört hat?', es: '¿Dijo qué le molestó?' },
        { de: 'Dass die halbe Geschichte offen bleibt.', es: 'Que media historia queda abierta.' }
      ] },
  'Ich halte diese Nachricht für falsch.':
    { de: 'Dann prüf die Quelle. Oft steht sie gar nicht dabei.', es: 'Pues comprueba la fuente. A menudo ni aparece.' },
  'Für mich ist das nur ein Gerücht.':
    { de: 'Sehe ich auch so. Keine einzige Zeitung berichtet darüber.', es: 'Yo también lo veo así. Ni un periódico lo cuenta.' },
  'Der Hauptdarsteller spielt hervorragend.':
    { de: 'Ja, aber die Geschichte selbst ist ziemlich dünn.', es: 'Sí, pero la historia en sí es bastante floja.' },
  'Ich bin der Meinung, dass man weniger Handy nutzen sollte.':
    { de: 'Theoretisch stimme ich zu. Praktisch schaffe ich es nicht.', es: 'En teoría estoy de acuerdo. En la práctica no lo consigo.' },
  'Was hältst du von dem Interview?':
    { de: 'Der Moderator hat gut gefragt, die Antworten waren aber leer.', es: 'El presentador preguntó bien, pero las respuestas estaban vacías.' },
  'Wie viel Zeit verbringst du täglich am Handy?':
    { de: 'Zu viel, ungefähr drei Stunden. Das Handy zeigt es mir jeden Sonntag.', es: 'Demasiado, unas tres horas. El móvil me lo enseña cada domingo.',
      mas: [
        { de: 'Und hast du schon einmal versucht, es zu reduzieren?', es: '¿Y has intentado alguna vez reducirlo?' },
        { de: 'Ja, mit einer App. Nach drei Tagen habe ich die App gelöscht.', es: 'Sí, con una aplicación. A los tres días borré la aplicación.' }
      ] },
  'Siehst du überhaupt noch fern?':
    { de: 'Nur die Nachrichten. Alles andere schaue ich im Netz.', es: 'Solo las noticias. Todo lo demás lo veo en internet.',
      mas: [
        { de: 'Welche Nachrichten schaust du?', es: '¿Qué informativo ves?' },
        { de: 'Die ZIB um halb acht. Die sind kurz und deutlich gesprochen.', es: 'El ZIB de las siete y media. Es corto y hablan claro.' }
      ] },
  'Hörst du Podcasts beim Pendeln?':
    { de: 'Jeden Morgen. So lerne ich sogar nebenbei Deutsch.', es: 'Todas las mañanas. Así hasta aprendo alemán de paso.',
      mas: [
        { de: 'Verstehst du denn alles?', es: '¿Lo entiendes todo?' },
        { de: 'Nicht alles. Aber jede Woche ein bisschen mehr.', es: 'Todo no. Pero cada semana un poco más.' }
      ] },
  'Wo informierst du dich über Nachrichten?':
    { de: 'Eine Zeitung und ein Radiosender. Sozialen Medien traue ich nicht.', es: 'Un periódico y una emisora. De las redes no me fío.' },
  'Welche Serie schaust du im Moment?':
    { de: 'Eine spanische Serie mit deutschen Untertiteln. Doppelt nützlich.', es: 'Una serie española con subtítulos en alemán. Doblemente útil.' },
  'Schaust du mit oder ohne Untertitel?':
    { de: 'Mit, immer. Ohne verstehe ich nur die Hälfte.', es: 'Con, siempre. Sin ellos solo entiendo la mitad.' },
  'Hast du das Abo eigentlich gekündigt?':
    { de: 'Noch nicht. Ich schiebe es seit drei Monaten vor mir her.', es: 'Todavía no. Llevo tres meses aplazándolo.' },
  'Bist du in sozialen Medien aktiv?':
    { de: 'Ich lese mit, poste aber fast nie etwas.', es: 'Leo, pero casi nunca publico nada.' },
  'Wie findest du die neue Staffel?':
    { de: 'Schwächer als die erste, aber ich schaue trotzdem weiter.', es: 'Más floja que la primera, pero sigo viéndola igual.' },
  'Schaltest du am Abend wirklich ab?':
    { de: 'Seit ich das Handy aus dem Schlafzimmer verbannt habe, ja.', es: 'Desde que desterré el móvil del dormitorio, sí.' },
  'Was machst du nach der Arbeit meistens?':
    { de: 'Erst eine Stunde nichts. Danach koche ich und lese.', es: 'Primero una hora sin hacer nada. Después cocino y leo.',
      mas: [
        { de: 'Und am Wochenende? Auch so ruhig?', es: '¿Y el fin de semana? ¿También tan tranquilo?' },
        { de: 'Samstag ja, Sonntag sind wir immer bei meinen Schwiegereltern.', es: 'El sábado sí, el domingo siempre estamos en casa de mis suegros.' }
      ] },
  'Ich brauche nach der Arbeit erst einmal Ruhe.':
    { de: 'Das geht mir genauso. Reden kann ich erst nach dem Essen.', es: 'A mí me pasa igual. No puedo hablar hasta después de cenar.',
      mas: [
        { de: 'Eine halbe Stunde reicht mir schon.', es: 'Con media hora me basta.' },
        { de: 'Dann esse ich vor und wir reden danach.', es: 'Pues ceno antes y hablamos después.' }
      ] },
  'Gehst du unter der Woche aus?':
    { de: 'Selten. Höchstens am Donnerstag auf ein Glas.', es: 'Pocas veces. Como mucho el jueves a tomar algo.',
      mas: [
        { de: 'Donnerstag ist bei mir auch der einzige Tag.', es: 'El jueves es también mi único día.' },
        { de: 'Dann machen wir das nächste Woche fix aus.', es: 'Pues lo dejamos apalabrado para la semana que viene.' }
      ] },
  'Heute faulenze ich einfach.':
    { de: 'Das hast du dir verdient. Die Woche war brutal.', es: 'Te lo has ganado. La semana ha sido brutal.' },
  'Hast du Lust, heute noch wegzugehen?':
    { de: 'Ehrlich? Nein. Aber überrede mich ruhig.', es: '¿Sinceramente? No. Pero convénceme.' },
  'Am Freitag bleibe ich prinzipiell zu Hause.':
    { de: 'Klug. Überall ist es voll und alles ist teurer.', es: 'Inteligente. Está todo lleno y todo más caro.' },
  'Wie schaltest du nach einem harten Tag ab?':
    { de: 'Laufen gehen. Nach zwanzig Minuten ist der Kopf leer.', es: 'Saliendo a correr. A los veinte minutos la cabeza está vacía.' },
  'Nach der Spätschicht bin ich zu nichts zu gebrauchen.':
    { de: 'Verständlich. Schlaf dich aus, wir reden morgen.', es: 'Es comprensible. Duerme bien, hablamos mañana.' },
  'Fangen wir mit der Küche an?':
    { de: 'Lieber das Schlafzimmer. Dort können wir wenigstens schon schlafen.', es: 'Mejor el dormitorio. Allí al menos ya podemos dormir.',
      mas: [
        { de: 'Stimmt, Hauptsache wir haben heute Nacht ein Bett.', es: 'Cierto, lo importante es tener cama esta noche.' },
        { de: 'Genau. Die Küche machen wir morgen in Ruhe.', es: 'Exacto. La cocina la hacemos mañana con calma.' }
      ] },
  'Was hältst du davon, morgen weiterzumachen?':
    { de: 'Gute Idee. Bei diesem Licht sieht man die Ecken nicht mehr.', es: 'Buena idea. Con esta luz ya no se ven las esquinas.',
      mas: [
        { de: 'Um wie viel Uhr sollen wir anfangen?', es: '¿A qué hora empezamos?' },
        { de: 'Neun ist früh genug. Ich bringe Frühstück mit.', es: 'A las nueve ya está bien. Llevo el desayuno.' }
      ] },
  'Wir könnten die alten Möbel verschenken.':
    { de: 'Besser als entsorgen. Ich stelle heute Abend die Anzeige online.', es: 'Mejor que tirarlos. Esta noche pongo el anuncio.',
      mas: [
        { de: 'Stell sie auf willhaben, da geht alles weg.', es: 'Ponlos en willhaben, ahí se va todo.' },
        { de: 'Mache ich. Zur Not stelle ich sie zum Sperrmüll.', es: 'Lo hago. Si acaso los saco a los trastos.' }
      ] },
  'Lass uns die Kisten gleich beschriften.':
    { de: 'Unbedingt. Beim letzten Umzug haben wir alles wieder aufgemacht.', es: 'Sin falta. En la última mudanza lo abrimos todo otra vez.' },
  'Ich schlage vor, wir mieten einen Wagen.':
    { de: 'Rechne mal nach. Zweimal fahren mit dem Auto ist billiger.', es: 'Echa cuentas. Hacer dos viajes en coche sale más barato.' },
  'Sollen wir die Handwerker kommen lassen?':
    { de: 'Für das Bad ja. Den Rest schaffen wir selbst.', es: 'Para el baño sí. El resto lo sacamos nosotros.' },
  'Na gut, von mir aus machen wir es so.':
    { de: 'Du klingst nicht überzeugt. Sag ruhig, wenn dir etwas nicht passt.', es: 'No suenas convencido. Dilo si algo no te cuadra.' },
  'Hmm, ich weiß nicht so recht.':
    { de: 'Was stört dich? Die Farbe oder der Preis?', es: '¿Qué te molesta? ¿El color o el precio?' },
  'Ehrlich gesagt wäre mir das nicht recht.':
    { de: 'In Ordnung. Dann suchen wir eine andere Lösung.', es: 'De acuerdo. Pues buscamos otra solución.' },
  'Einverstanden, aber nur unter einer Bedingung.':
    { de: 'Und die wäre? Ich höre.', es: '¿Y cuál es? Te escucho.' },
  'Wenn es sein muss, mache ich mit.':
    { de: 'Es muss nicht. Ich frage lieber jemand anderen.', es: 'No tiene que ser. Mejor le pregunto a otro.' },
  'Da bin ich mir noch nicht sicher.':
    { de: 'Lass dir Zeit. Wir entscheiden es am Wochenende.', es: 'Tómate tu tiempo. Lo decidimos el fin de semana.' },
  'Klar, das mache ich gern.':
    { de: 'Danke! Dann bist du für die Küche zuständig.', es: '¡Gracias! Entonces te encargas de la cocina.' },
  'Das übernehme ich bis Freitag.':
    { de: 'Perfekt. Sag Bescheid, wenn du Werkzeug brauchst.', es: 'Perfecto. Avisa si necesitas herramientas.' },
  'Geht in Ordnung, verlass dich auf mich.':
    { de: 'Mache ich. Du hast mich noch nie hängen lassen.', es: 'Lo hago. Nunca me has fallado.' },
  'Kein Problem, ich bringe das Werkzeug mit.':
    { de: 'Super. Dann brauchen wir nur noch eine Leiter.', es: 'Genial. Entonces solo falta una escalera.' },
  'Das kriege ich hin, keine Sorge.':
    { de: 'Ich weiß. Du hast das Regal letztes Mal in zehn Minuten aufgebaut.', es: 'Lo sé. La última vez montaste la estantería en diez minutos.' },
  'Ich kümmere mich um den Müll.':
    { de: 'Danke. Die sperrigen Sachen musst du zum Mistplatz bringen.', es: 'Gracias. Lo voluminoso hay que llevarlo al punto limpio.' },
  'Vorsicht, die Kiste ist sehr schwer!':
    { de: 'Merke ich. Nimm du unten, ich gehe rückwärts.', es: 'Ya lo noto. Coge tú por abajo, yo voy hacia atrás.' },
  'Vorsicht, lass es nicht fallen!':
    { de: 'Keine Angst. Ich habe ihn fest, geh ruhig weiter.', es: 'Tranquilo. Lo tengo bien, sigue andando.' },
  'Langsam, hier ist eine Stufe.':
    { de: 'Danke, die habe ich nicht gesehen. Noch eine?', es: 'Gracias, no lo había visto. ¿Hay otro?' },
  'Achte bitte auf die frische Farbe.':
    { de: 'Wie lange braucht sie noch zum Trocknen?', es: '¿Cuánto le queda para secarse?' },
  'Stell das nicht auf den neuen Boden.':
    { de: 'Wo dann? Im Flur steht schon alles voll.', es: '¿Y dónde entonces? El pasillo ya está lleno.' },
  'Halt die Leiter fest, bitte.':
    { de: 'Ich halte. Aber bitte nicht auf die oberste Stufe steigen.', es: 'La sujeto. Pero no te subas al último escalón.' },
  'Das Sofa kommt an die Wand beim Fenster.':
    { de: 'Gute Idee. Dann hat man beim Lesen Licht von links.', es: 'Buena idea. Así al leer entra la luz por la izquierda.' },
  'Das Regal stellen wir am besten neben die Tür.':
    { de: 'Dort passt es genau. Zwei Zentimeter Luft bleiben noch.', es: 'Ahí cabe justo. Quedan dos centímetros de margen.' },
  'Wohin hängen wir den Spiegel?':
    { de: 'Gegenüber dem Fenster. Dann wirkt der Raum größer.', es: 'Enfrente de la ventana. Así la habitación parece más grande.',
      mas: [
        { de: 'Und wie hoch? Ich sehe sonst nur meine Stirn.', es: '¿Y a qué altura? Si no, solo me veo la frente.' },
        { de: 'Auf Augenhöhe der kleineren Person. Das ist die Regel.', es: 'A la altura de los ojos de la persona más baja. Es la regla.' }
      ] },
  'Der Tisch soll in die Mitte.':
    { de: 'Dann ist der Weg zur Küche aber eng.', es: 'Pero entonces el paso a la cocina se queda estrecho.' },
  'Die Lampe hängen wir über den Esstisch.':
    { de: 'Nicht zu tief, sonst stößt man sich ständig den Kopf.', es: 'No muy baja, si no te das en la cabeza constantemente.' },
  'Der Teppich passt farblich gar nicht.':
    { de: 'Stimmt. Im Schlafzimmer würde er besser wirken.', es: 'Es verdad. En el dormitorio quedaría mejor.' },
  'Wir brauchen mehr Steckdosen hier.':
    { de: 'Sag es den Handwerkern, solange die Wand noch offen ist.', es: 'Díselo a los operarios, mientras la pared está abierta.' },
  'Die Vorhänge machen den Raum gemütlich.':
    { de: 'Und sie halten im Winter die Wärme drinnen.', es: 'Y en invierno mantienen el calor dentro.' },
  'Das ist mir wirklich sehr wichtig.':
    { de: 'Dann machen wir es zuerst. Der Rest kann warten.', es: 'Pues lo hacemos primero. Lo demás puede esperar.',
      mas: [
        { de: 'Ich weiß, ich wiederhole mich.', es: 'Ya sé que me repito.' },
        { de: 'Kein Problem. Jetzt weiß ich, worauf es dir ankommt.', es: 'No pasa nada. Ahora sé qué te importa.' }
      ] },
  'Wichtig ist nur, dass es Freitag fertig ist.':
    { de: 'Das schaffen wir, wenn morgen jemand mithilft.', es: 'Lo conseguimos si mañana alguien echa una mano.' },
  'Für mich zählt vor allem die Ruhe.':
    { de: 'Dann ist die Wohnung im Hof perfekt für dich.', es: 'Entonces el piso que da al patio es perfecto para ti.' },
  'Wichtiger als die Farbe ist das Licht.':
    { de: 'Da hast du recht. Dunkle Räume drücken auf die Stimmung.', es: 'En eso tienes razón. Las habitaciones oscuras hunden el ánimo.' },
  'Das kann warten, es eilt nicht.':
    { de: 'Gut. Dann konzentrieren wir uns auf die Küche.', es: 'Bien. Entonces nos centramos en la cocina.' },
  'Entscheidend ist, dass die Kinder ein Zimmer haben.':
    { de: 'Sehe ich genauso. Wir schlafen notfalls im Wohnzimmer.', es: 'Lo veo igual. Si hace falta dormimos en el salón.' },
  'Kannst du mir am Samstag beim Umzug helfen?':
    { de: 'Klar. Ab wann brauchst du mich, und wie viele sind wir?', es: 'Claro. ¿Desde qué hora me necesitas y cuántos somos?',
      mas: [
        { de: 'Ab acht, und wir sind zu viert.', es: 'Desde las ocho, y somos cuatro.' },
        { de: 'Dann bin ich um acht da. Gibt es einen Lift oder nur Treppen?', es: 'Entonces estoy a las ocho. ¿Hay ascensor o solo escaleras?' }
      ] },
  'Wir schleppen schon seit sechs Uhr Kisten.':
    { de: 'Dann macht ihr jetzt Pause. Ich bringe Kaffee und Semmeln.', es: 'Pues ahora hacéis una pausa. Yo llevo café y panecillos.',
      mas: [
        { de: 'Kaffee wäre jetzt die Rettung.', es: 'Un café ahora sería la salvación.' },
        { de: 'Bin in zehn Minuten da. Setzt euch schon mal hin.', es: 'Llego en diez minutos. Id sentándoos.' }
      ] },
  'Wo soll diese Kiste hin?':
    { de: 'Schau auf die Beschriftung. Da steht das Zimmer drauf.', es: 'Mira la etiqueta. Ahí pone la habitación.' },
  'Das Sofa passt nicht in den Lift.':
    { de: 'Dann über die Treppe. Zu dritt schaffen wir das.', es: 'Pues por la escalera. Entre tres lo sacamos.' },
  'Hast du den Umzugswagen schon reserviert?':
    { de: 'Für neun Uhr. Um achtzehn Uhr muss er zurück sein.', es: 'Para las nueve. A las seis tiene que estar de vuelta.' },
  'Vergiss nicht, die Adresse umzumelden.':
    { de: 'Danke für die Erinnerung. Ich habe drei Tage Zeit, oder?', es: 'Gracias por recordármelo. Tengo tres días, ¿no?' },
  'Die Übergabe der alten Wohnung ist am Montag.':
    { de: 'Dann muss sie am Sonntag komplett leer und sauber sein.', es: 'Entonces el domingo tiene que estar vacío y limpio del todo.' },
  'Danke, dass ihr alle gekommen seid!':
    { de: 'Gern. Du hast mir letztes Jahr auch geholfen.', es: 'De nada. Tú también me ayudaste el año pasado.' },
  'Wann fährt der nächste Zug nach Graz?':
    { de: 'In zwölf Minuten von Gleis sieben, ohne Umsteigen.', es: 'Dentro de doce minutos de la vía siete, sin transbordo.',
      mas: [
        { de: 'Reicht die Zeit noch für einen Kaffee?', es: '¿Da tiempo todavía para un café?' },
        { de: 'Knapp. Der Kiosk am Bahnsteig geht schneller als das Café.', es: 'Justo. El quiosco del andén va más rápido que la cafetería.' }
      ] },
  'Muss ich unterwegs umsteigen?':
    { de: 'Einmal in Linz, mit acht Minuten Umsteigezeit.', es: 'Una vez en Linz, con ocho minutos de enlace.' },
  'Auf welchem Gleis steht der Zug?':
    { de: 'Heute ausnahmsweise von Gleis zwei. Achten Sie auf die Durchsage.', es: 'Hoy excepcionalmente de la vía dos. Esté atento al aviso.' },
  'Gibt es eine Ermäßigung für Studenten?':
    { de: 'Ja, fünfundzwanzig Prozent. Bitte den Ausweis bereithalten.', es: 'Sí, un veinticinco por ciento. Tenga el carné a mano.' },
  'Was kostet eine Rückfahrkarte?':
    { de: 'Achtunddreißig Euro. Einfach wäre fünfundzwanzig.', es: 'Treinta y ocho euros. Solo ida serían veinticinco.' },
  'Wie lange dauert die Fahrt ungefähr?':
    { de: 'Zweieinhalb Stunden. Mit dem Regionalzug fast vier.', es: 'Dos horas y media. Con el regional casi cuatro.' },
  'Fährt am Sonntag auch ein Nachtzug?':
    { de: 'Ja, aber nur bis München. Weiter müssen Sie am Morgen.', es: 'Sí, pero solo hasta Múnich. Más allá tiene que ir por la mañana.' },
  'Ist die Ankunftszeit realistisch?':
    { de: 'Meistens schon. Nur am Freitag gibt es oft Verspätungen.', es: 'Casi siempre sí. Solo los viernes suele haber retrasos.',
      mas: [
        { de: 'Ich habe um sieben einen Termin.', es: 'Tengo una cita a las siete.' },
        { de: 'Dann nehmen Sie lieber den früheren. Eine Stunde Puffer schadet nie.', es: 'Pues coja el anterior. Una hora de margen nunca sobra.' }
      ] },
  'Könnten Sie mir bitte mit dem Koffer helfen?':
    { de: 'Aber gern. Soll er nach oben oder ins Gepäckabteil?', es: 'Con mucho gusto. ¿Arriba o al compartimento de equipajes?',
      mas: [
        { de: 'Nach oben bitte, ich steige erst in Graz aus.', es: 'Arriba, por favor, me bajo en Graz.' },
        { de: 'Alles klar. Sagen Sie Bescheid, wenn Sie ihn runterbrauchen.', es: 'Muy bien. Avíseme cuando lo necesite abajo.' }
      ] },
  'Würden Sie so nett sein und kurz aufpassen?':
    { de: 'Kein Problem. Gehen Sie ruhig, ich bleibe sitzen.', es: 'No hay problema. Vaya tranquilo, yo me quedo sentado.' },
  'Dürfte ich kurz vorbei?':
    { de: 'Selbstverständlich, ich rücke zur Seite.', es: 'Por supuesto, me aparto.' },
  'Hätten Sie vielleicht einen Stift für mich?':
    { de: 'Hier bitte. Sie können ihn auch behalten.', es: 'Aquí tiene. Se lo puede quedar.' },
  'Wären Sie so freundlich, das Fenster zu schließen?':
    { de: 'Natürlich. Ist es Ihnen zu zugig?', es: 'Claro. ¿Le entra demasiada corriente?' },
  'Vielen Dank, das ist sehr freundlich.':
    { de: 'Nicht der Rede wert. Gute Weiterreise!', es: 'No tiene importancia. ¡Buen viaje!',
      mas: [
        { de: 'Ihnen auch alles Gute!', es: '¡Que le vaya muy bien a usted también!' },
        { de: 'Danke. Und keine Sorge, der Anschluss wartet meistens.', es: 'Gracias. Y tranquila, el enlace suele esperar.' }
      ] },
  'Verzeihung, ist hier noch ein Platz frei?':
    { de: 'Ja, bitte sehr. Ich nehme meine Jacke weg.', es: 'Sí, por favor. Quito mi chaqueta.',
      mas: [
        { de: 'Danke, ich stelle den Koffer nach oben.', es: 'Gracias, pongo la maleta arriba.' },
        { de: 'Soll ich Ihnen helfen? Der sieht schwer aus.', es: '¿Le ayudo? Parece pesada.' }
      ] },
  'Sitzt hier schon jemand?':
    { de: 'Leider ja, mein Mann kommt gleich vom Speisewagen zurück.', es: 'Por desgracia sí, mi marido vuelve enseguida del vagón restaurante.' },
  'Ist der Platz reserviert?':
    { de: 'Erst ab Linz. Bis dahin können Sie ruhig sitzen.', es: 'Solo a partir de Linz. Hasta entonces puede sentarse.' },
  'Darf ich mich hier hinsetzen?':
    { de: 'Natürlich, es ist ja niemand da.', es: 'Claro, si no hay nadie.' },
  'Könnten wir tauschen? Ich sitze gern am Fenster.':
    { de: 'Gern, mir ist der Gang sowieso lieber.', es: 'Con gusto, yo prefiero el pasillo de todos modos.' },
  'Gute Reise und kommen Sie gut an!':
    { de: 'Danke schön! Ich melde mich, sobald ich da bin.', es: '¡Muchas gracias! Aviso en cuanto llegue.' },
  'Schönen Aufenthalt in Wien!':
    { de: 'Danke. Haben Sie einen Tipp, was ich sehen soll?', es: 'Gracias. ¿Tiene algún consejo de qué ver?' },
  'Gute Fahrt und pass auf dich auf!':
    { de: 'Mache ich. Bis nächste Woche!', es: 'Lo haré. ¡Hasta la semana que viene!' },
  'Ich wünsche Ihnen einen angenehmen Flug.':
    { de: 'Danke, hoffentlich ohne Turbulenzen. Das ist mein erster Langstreckenflug.', es: 'Gracias, ojalá sin turbulencias. Es mi primer vuelo de larga distancia.' },
  'Erhol dich gut im Urlaub!':
    { de: 'Das habe ich vor. Zwei Wochen ohne Handy.', es: 'Esa es la intención. Dos semanas sin móvil.' },
  'Viel Spaß beim Stadtrundgang!':
    { de: 'Danke! Angeblich soll der Führer sehr gut sein.', es: '¡Gracias! Dicen que el guía es muy bueno.' },
  'Immer geradeaus bis zur Brücke und dann links.':
    { de: 'Und danach? Sehe ich das Hotel dann schon?', es: '¿Y después? ¿Ya veo el hotel?' },
  'Das liegt direkt um die Ecke.':
    { de: 'Super, dann lasse ich den Koffer gleich hier stehen.', es: 'Genial, entonces dejo la maleta aquí mismo.' },
  'Zu Fuß braucht man etwa zehn Minuten.':
    { de: 'Mit dem Koffer eher fünfzehn, schätze ich.', es: 'Con la maleta más bien quince, calculo.' },
  'Nehmen Sie die Fußgängerzone, das ist kürzer.':
    { de: 'Danke. Komme ich dabei am Denkmal vorbei?', es: 'Gracias. ¿Paso así por el monumento?' },
  'An der zweiten Ampel rechts abbiegen.':
    { de: 'Zweite, nicht erste? Gut, dass Sie es sagen.', es: '¿La segunda, no la primera? Menos mal que lo dice.' },
  'Der Bahnhof ist zu Fuß gut erreichbar.':
    { de: 'Perfekt. Dann brauche ich kein Taxi zu nehmen.', es: 'Perfecto. Así no necesito coger un taxi.' },
  'Ich schicke Ihnen eine Wegbeschreibung aufs Handy.':
    { de: 'Sehr praktisch, danke. Mein Orientierungssinn ist schlecht.', es: 'Muy práctico, gracias. Tengo mal sentido de la orientación.' },
  'Sie können den Weg gar nicht verfehlen.':
    { de: 'Das sagen alle. Und dann stehe ich doch falsch.', es: 'Eso dicen todos. Y luego acabo en el sitio equivocado.' },
  'Ich habe ein Doppelzimmer auf den Namen Pascual reserviert.':
    { de: 'Willkommen. Zwei Nächte mit Frühstück, ist das richtig?', es: 'Bienvenido. Dos noches con desayuno, ¿correcto?',
      mas: [
        { de: 'Genau, zwei Nächte. Ist ein ruhiges Zimmer möglich?', es: 'Exacto, dos noches. ¿Sería posible una habitación tranquila?' },
        { de: 'Ich gebe Ihnen eines zum Hof. Dort hören Sie die Straße gar nicht.', es: 'Le doy una que da al patio. Ahí no se oye nada la calle.' }
      ] },
  'Ab wann wird das Frühstück serviert?':
    { de: 'Von sieben bis zehn, am Wochenende bis elf.', es: 'De siete a diez, el fin de semana hasta las once.' },
  'Ich möchte jetzt auschecken.':
    { de: 'Gern. Hatten Sie etwas aus der Minibar?', es: 'Con gusto. ¿Ha tomado algo del minibar?' },
  'Im Bad fehlt ein Handtuch.':
    { de: 'Entschuldigung, ich lasse sofort eins bringen.', es: 'Disculpe, mando que suban una enseguida.' },
  'Kann ich das Gepäck bis nachmittags hierlassen?':
    { de: 'Natürlich. Wir haben Schließfächer gleich hinter dem Empfang.', es: 'Claro. Tenemos taquillas justo detrás de recepción.' },
  'Haben Sie einen Stadtplan für mich?':
    { de: 'Hier bitte. Ich markiere Ihnen kurz den Weg zum Dom.', es: 'Aquí tiene. Le marco el camino a la catedral.' },
  'Ab wann kann ich das Zimmer beziehen?':
    { de: 'Ab vierzehn Uhr. Vorher wird noch geputzt.', es: 'A partir de las dos. Antes todavía se limpia.' },
  'Wie fühlst du dich heute?':
    { de: 'Viel besser als gestern, danke. Der Kopf tut nicht mehr weh.', es: 'Mucho mejor que ayer, gracias. Ya no me duele la cabeza.' },
  'Alles in Ordnung bei dir?':
    { de: 'Ja, alles gut. Ich war nur kurz in Gedanken.', es: 'Sí, todo bien. Solo estaba un momento pensando en mis cosas.' },
  'Geht es Ihnen wieder besser?':
    { de: 'Danke der Nachfrage, ja. Die Erkältung ist fast weg.', es: 'Gracias por preguntar, sí. El resfriado ya casi ha pasado.' },
  'Du wirkst heute so fröhlich.':
    { de: 'Bin ich auch! Ich habe die Prüfung endlich bestanden.', es: '¡Lo estoy! Por fin he aprobado el examen.' },
  'Wie heißen Sie mit Vornamen?':
    { de: 'Mit Vornamen heiße ich Nuria, mit Nachnamen López.', es: 'De nombre me llamo Nuria y de apellido López.' },
  'Wie war Ihr Name noch einmal?':
    { de: 'Gruber, wie die Firma an der Ecke. Das merkt sich gut.', es: 'Gruber, como la empresa de la esquina. Así se recuerda bien.' },
  'Sagt man zu dir Luna oder Luní?':
    { de: 'Luna reicht. Luní sagen nur meine Großeltern.', es: 'Con Luna basta. Luní solo me llaman mis abuelos.' },
  'Und wie ist Ihr Nachname, bitte?':
    { de: 'Öztürk, mit Ö am Anfang. Soll ich ihn buchstabieren?', es: 'Öztürk, con Ö al principio. ¿Se lo deletreo?' },
  'Unter welcher Nummer erreiche ich dich am besten?':
    { de: 'Am Handy, immer nach achtzehn Uhr. Vorher bin ich im Kurs.', es: 'En el móvil, siempre después de las seis. Antes estoy en clase.' },
  'Hast du eine neue Nummer?':
    { de: 'Ja, seit letzter Woche. Ich schicke sie dir gleich.', es: 'Sí, desde la semana pasada. Te lo mando ahora.' },
  'Wo genau wohnst du in Wien?':
    { de: 'Im fünften Bezirk, fünf Minuten von der U-Bahn.', es: 'En el distrito cinco, a cinco minutos del metro.' },
  'Schreib mir bitte deine Adresse auf.':
    { de: 'Mache ich. Soll ich auch die Türnummer dazuschreiben?', es: 'Lo hago. ¿Apunto también el número de puerta?' },
  'Ich bin neu im Kurs, ich heiße Nuria.':
    { de: 'Willkommen, Nuria! Setz dich zu uns, hier ist noch frei.', es: '¡Bienvenida, Nuria! Siéntate con nosotros, aquí hay sitio.' },
  'Darf ich mich vorstellen? Ich komme aus Syrien.':
    { de: 'Freut mich sehr. Und wie lange sind Sie schon in Wien?', es: 'Encantado. ¿Y cuánto tiempo lleva en Viena?' },
  'Wir kennen uns noch nicht, oder?':
    { de: 'Ich glaube nicht. Ich bin Ahmet, ich sitze meistens vorne.', es: 'Creo que no. Soy Ahmet, suelo sentarme delante.' },
  'Aus welcher Stadt kommst du genau?':
    { de: 'Aus Aleppo. Meine Familie lebt jetzt aber in der Türkei.', es: 'De Alepo. Pero mi familia vive ahora en Turquía.',
      mas: [
        { de: 'Warst du seitdem noch einmal dort?', es: '¿Has vuelto desde entonces?' },
        { de: 'Nein, noch nicht. Vielleicht nächstes Jahr.', es: 'No, todavía no. Quizá el año que viene.' }
      ] },
  'Bist du hier geboren?':
    { de: 'Nein, ich bin mit sechs Jahren hergekommen.', es: 'No, vine aquí con seis años.' },
  'Sprichst du die Sprache deiner Eltern?':
    { de: 'Ja, zu Hause immer. Schreiben kann ich sie aber kaum.', es: 'Sí, en casa siempre. Pero escribirlo casi no sé.' },
  'Wie lange lebst du schon in Österreich?':
    { de: 'Seit vier Jahren. Die ersten zwei waren die schwersten.', es: 'Desde hace cuatro años. Los dos primeros fueron los más duros.' },
  'Wie schreibt man das mit ü oder mit ue?':
    { de: 'Mit ü. Auf dem Formular geht aber auch ue.', es: 'Con ü. Pero en el formulario también vale ue.' },
  'Ist das ein ß oder ein Doppel-s?':
    { de: 'Ein ß. In der Schweiz schreibt man dafür immer ss.', es: 'Una ß. En Suiza en su lugar se escribe siempre ss.' },
  'Können Sie den Namen langsam buchstabieren?':
    { de: 'Gern: P-A-S-C-U-A-L, alles mit einem A am Ende.', es: 'Con gusto: P-A-S-C-U-A-L, con una A al final.' },
  'Wie läuft es gerade bei dir?':
    { de: 'Ganz gut. Viel Arbeit, aber ich beschwere mich nicht.', es: 'Bastante bien. Mucho trabajo, pero no me quejo.' },
  'Sie kommen bestimmt aus Südamerika, oder?':
    { de: 'Fast. Aus Spanien, aber viele hören den gleichen Akzent.', es: 'Casi. De España, pero mucha gente oye el mismo acento.' },
  'Du arbeitest vermutlich im Krankenhaus.':
    { de: 'Wie kommst du darauf? Ich bin tatsächlich Krankenpfleger.', es: '¿Cómo lo has sabido? Efectivamente soy enfermero.' },
  'Ganz genau, so sehe ich das auch.':
    { de: 'Schön, dann sind wir uns ausnahmsweise einig.', es: 'Bien, entonces por una vez estamos de acuerdo.' },
  'Da kann ich dir nur zustimmen.':
    { de: 'Danke. Ich dachte schon, ich sehe das zu streng.', es: 'Gracias. Ya pensaba que lo veía demasiado estricto.' },
  'So ist es, ohne Zweifel.':
    { de: 'Dann brauchen wir nicht weiter darüber zu reden.', es: 'Entonces no hace falta seguir hablándolo.' },
  'Träumst du schon auf Deutsch?':
    { de: 'Einmal ist es passiert. Danach war ich den ganzen Tag stolz.', es: 'Una vez pasó. Después estuve orgulloso todo el día.' },
  'Welche Sprache fällt dir am leichtesten?':
    { de: 'Englisch, ganz klar. Deutsch kostet mich immer noch Kraft.', es: 'El inglés, sin duda. El alemán todavía me cuesta esfuerzo.' },
  'Wir sehen uns nächste Woche!':
    { de: 'Bestimmt. Schreib mir, falls sich etwas ändert.', es: 'Seguro. Escríbeme si cambia algo.' },
  'Pass auf dich auf, bis bald!':
    { de: 'Du auch! Und komm gut durch die Woche.', es: '¡Tú también! Y que te vaya bien la semana.' },
  'Wie lange leben Sie schon in Österreich?':
    { de: 'Seit sieben Jahren. Die Staatsbürgerschaft habe ich seit letztem Mai.', es: 'Siete años. La ciudadanía la tengo desde mayo pasado.' },
  'Sind Sie berufstätig?':
    { de: 'Ja, ich arbeite Teilzeit in einem Kindergarten.', es: 'Sí, trabajo media jornada en una guardería.' },
  'Haben Sie Geschwister?':
    { de: 'Zwei Brüder, beide jünger. Einer lebt noch in Madrid.', es: 'Dos hermanos, los dos menores. Uno vive todavía en Madrid.' },
  'Wer wohnt alles in Ihrem Haushalt?':
    { de: 'Meine Frau, unsere zwei Kinder und ich. Vier Personen also.', es: 'Mi mujer, nuestros dos hijos y yo. Cuatro personas.' },
  'Auf welchem Niveau sind Sie?':
    { de: 'A2, im Frühling mache ich die B1-Prüfung.', es: 'A2, en primavera hago el examen B1.' },
  'Wie alt ist Ihr jüngstes Kind?':
    { de: 'Vier Jahre. Im September kommt es in den Kindergarten.', es: 'Cuatro años. En septiembre empieza en la guardería.' },
  'Seit wann wohnen Sie in dieser Wohnung?':
    { de: 'Seit drei Jahren, genau seit meinem dreißigsten Geburtstag.', es: 'Desde hace tres años, justo desde mi trigésimo cumpleaños.' },
  'Bist du älter oder jünger als dein Bruder?':
    { de: 'Zwei Jahre jünger, aber alle halten mich für den Älteren.', es: 'Dos años menor, pero todos me toman por el mayor.' },
  'Was soll ich bei Geschlecht ankreuzen?':
    { de: 'Männlich, weiblich oder divers. Suchen Sie sich das Passende aus.', es: 'Masculino, femenino o diverso. Elija lo que corresponda.' },
  'Brauchen Sie das Original oder reicht eine Kopie?':
    { de: 'Eine beglaubigte Kopie reicht. Das Original bleibt bei Ihnen.', es: 'Basta una copia compulsada. El original se queda con usted.' },
  'Weißt du, wo die Schere geblieben ist?':
    { de: 'In der obersten Schublade, glaube ich. Da liegt alles Kleine.', es: 'En el cajón de arriba, creo. Ahí está todo lo pequeño.' },
  'Wo finde ich hier den Eingang zum Lager?':
    { de: 'Hinten beim Hof. Du brauchst aber einen Schlüssel dafür.', es: 'Al fondo, junto al patio. Pero necesitas una llave.' },
  'Ist mein Telefon im Besprechungsraum?':
    { de: 'Ja, es hat gerade dort geklingelt. Ich hole es dir.', es: 'Sí, acaba de sonar allí. Te lo traigo.' },
  'Bist du angestellt oder selbstständig?':
    { de: 'Angestellt, zum Glück. Selbstständig wäre mir zu unsicher.', es: 'Asalariado, por suerte. Ser autónomo me daría demasiada inseguridad.' },
  'Wie viele Mitarbeiter hat der Betrieb?':
    { de: 'Dreißig, plus zwei Lehrlinge. Wir kennen uns alle mit Namen.', es: 'Treinta, más dos aprendices. Nos conocemos todos por el nombre.' },
  'Arbeitest du lieber drinnen oder draußen?':
    { de: 'Draußen, auch im Winter. Im Büro werde ich unruhig.', es: 'Fuera, también en invierno. En la oficina me pongo inquieto.' },
  'Musst du eine Uniform tragen?':
    { de: 'Ja, im Dienst immer. Waschen muss ich sie aber selbst.', es: 'Sí, siempre de servicio. Pero lavarla me toca a mí.' },
  'Genau so ist es, du hast es erfasst.':
    { de: 'Dann schreiben wir es genau so in den Bericht.', es: 'Pues lo ponemos así mismo en el informe.' },
  'Da muss ich dir leider widersprechen.':
    { de: 'Nur zu. Lieber jetzt streiten als nachher Fehler machen.', es: 'Adelante. Mejor discutir ahora que equivocarnos después.' },
  'Heute ist wirklich viel Stress.':
    { de: 'Mach eine kurze Pause. Danach geht es meistens leichter.', es: 'Haz una pausa corta. Después suele ir más fácil.' },
  'Kannst du für mich ans Telefon gehen?':
    { de: 'Klar. Wer ruft an, und was soll ich sagen?', es: 'Claro. ¿Quién llama y qué digo?' },
  'Arbeitest du auch in der Nachtschicht?':
    { de: 'Jede dritte Woche. Danach brauche ich zwei Tage Schlaf.', es: 'Una semana de cada tres. Después necesito dos días de sueño.' },
  'Wo bist du aufgewachsen?':
    { de: 'Auf dem Land, in einem Dorf mit dreihundert Leuten.', es: 'En el campo, en un pueblo de trescientas personas.' },
  'Haltet ihr in der Familie zusammen?':
    { de: 'Immer. Wenn jemand Probleme hat, sind alle sofort da.', es: 'Siempre. Si alguien tiene problemas, están todos enseguida.' },
  'Wie oft gibt es ein Familientreffen?':
    { de: 'Einmal im Jahr, im August. Dann sind wir über vierzig.', es: 'Una vez al año, en agosto. Entonces somos más de cuarenta.' },
  'Hast du einen Spitznamen?':
    { de: 'Ja, seit der Schule. Aber den verrate ich dir nicht.', es: 'Sí, desde el colegio. Pero ese no te lo digo.' },
  'Das ist sicher deine Urgroßmutter auf dem Bild.':
    { de: 'Richtig geraten. Sie war damals zwanzig, kurz vor der Hochzeit.', es: 'Has acertado. Tenía veinte años, poco antes de la boda.' },
  'Ihr habt wahrscheinlich denselben Charakter.':
    { de: 'Leider ja. Deshalb streiten wir auch so oft.', es: 'Por desgracia sí. Por eso discutimos tanto.' },
  'Was ist das für ein altes Buch?':
    { de: 'Der Stammbaum unserer Familie, von meinem Urgroßvater angefangen.', es: 'El árbol genealógico de la familia, empezado por mi bisabuelo.' },
  'Gehört dir dieser Ring?':
    { de: 'Er war von meiner Oma. Ich trage ihn nur an Feiertagen.', es: 'Era de mi abuela. Solo lo llevo en días señalados.' },
  'Wer hat dieses Foto gemacht?':
    { de: 'Mein Vater. Deshalb fehlt er auf allen Familienfotos.', es: 'Mi padre. Por eso falta en todas las fotos de familia.' },
  'Sind das drei Generationen auf einem Bild?':
    { de: 'Sogar vier. Meine Urgroßmutter sitzt ganz vorne.', es: 'Cuatro incluso. Mi bisabuela está sentada delante del todo.' },
  'Wie alt warst du auf diesem Foto?':
    { de: 'Sieben oder acht. Das war der erste Schultag.', es: 'Siete u ocho. Era el primer día de colegio.' },
  'Wie löst ihr einen Streit?':
    { de: 'Wir reden am nächsten Tag darüber. Am selben Abend hat es keinen Sinn.', es: 'Lo hablamos al día siguiente. La misma noche no tiene sentido.' },
  'Unterstützt dich deine Familie bei der Ausbildung?':
    { de: 'Sehr. Ohne sie hätte ich schon im ersten Jahr aufgegeben.', es: 'Mucho. Sin ellos habría abandonado el primer año.' },
  'Gibt es bei euch feste Regeln zu Hause?':
    { de: 'Nur eine: Am Sonntag essen alle gemeinsam. Der Rest ist locker.', es: 'Solo una: el domingo comemos todos juntos. El resto es flexible.' },
  'Wie viel Vertrauen habt ihr untereinander?':
    { de: 'Genug, um alles zu sagen. Das war nicht immer so.', es: 'Suficiente para decirlo todo. No siempre fue así.' },
  'Wie teilst du dir den Tag ein?':
    { de: 'Vormittags die schwere Arbeit, nachmittags die Mails. Das klappt gut.', es: 'Por la mañana el trabajo duro, por la tarde los correos. Funciona bien.' },
  'Wann hast du übermorgen Zeit?':
    { de: 'Ab vierzehn Uhr. Vorher habe ich zwei Termine hintereinander.', es: 'A partir de las dos. Antes tengo dos citas seguidas.' },
  'Das ist dringend, kannst du es heute machen?':
    { de: 'Bis achtzehn Uhr schaffe ich es, aber nicht früher.', es: 'Para las seis lo saco, pero no antes.' },
  'Nimm dir ruhig Zeit dafür.':
    { de: 'Danke. Unter Druck mache ich sowieso nur Fehler.', es: 'Gracias. Bajo presión solo cometo errores.' },
  'Könntest du einen Augenblick warten?':
    { de: 'Natürlich. Ich setze mich so lange hier hin.', es: 'Claro. Mientras me siento aquí.' },
  'Darf ich dich um deinen Rat bitten?':
    { de: 'Immer. Worum geht es, um die Arbeit oder privat?', es: 'Cuando quieras. ¿De qué se trata, del trabajo o personal?' },
  'Würdest du das bitte für mich erledigen?':
    { de: 'Gern, aber erst am Nachmittag. Vormittags schaffe ich es nicht.', es: 'Con gusto, pero por la tarde. Por la mañana no llego.' },
  'Kannst du mir nächste Woche noch einmal helfen?':
    { de: 'Klar. Sag mir nur rechtzeitig, an welchem Tag.', es: 'Claro. Dime con tiempo qué día.' },
  'Haben Sie an Feiertagen geöffnet?':
    { de: 'Nein, da ist geschlossen. Nur die Apotheke am Bahnhof hat Dienst.', es: 'No, cerramos. Solo la farmacia de la estación está de guardia.' },
  'Wie sind die Öffnungszeiten am Werktag?':
    { de: 'Acht bis achtzehn Uhr, durchgehend. Am Samstag nur bis dreizehn.', es: 'De ocho a seis, sin cerrar al mediodía. El sábado solo hasta la una.' },
  'Kann ich auch später noch kommen?':
    { de: 'Bis halb sechs, ja. Danach ist die Kassa schon zu.', es: 'Hasta las cinco y media, sí. Después la caja ya está cerrada.' },
  'Öffnet die Bibliothek stündlich oder durchgehend?':
    { de: 'Durchgehend, von neun bis neunzehn Uhr. Mittags ist es am leersten.', es: 'De corrido, de nueve a siete. Al mediodía es cuando más vacía está.' },
  'Sollen wir das gleich erledigen?':
    { de: 'Ja, bitte. Sonst schieben wir es wieder eine Woche.', es: 'Sí, por favor. Si no, lo volvemos a aplazar una semana.' },
  'Lass uns eine kurze Mittagspause machen.':
    { de: 'Unbedingt. Danach sehen wir den Fehler bestimmt sofort.', es: 'Sin falta. Después seguro que vemos el error enseguida.' },
  'Was ist heute im Angebot?':
    { de: 'Die Gemüsesuppe und der Braten mit Knödel.', es: 'La sopa de verduras y el asado con Knödel.' },
  'Können wir gleich bestellen oder sollen wir warten?':
    { de: 'Bestellen Sie ruhig, ich nehme es gleich auf.', es: 'Pidan tranquilamente, lo apunto ahora.' },
  'Bitte einmal das Gleiche wie mein Kollege.':
    { de: 'Also zweimal Schnitzel. Und zu trinken das Gleiche auch?', es: 'Entonces dos escalopes. ¿Y de beber también lo mismo?' },
  'Ich hätte gern eine kleine Portion.':
    { de: 'Kein Problem, das kostet auch zwei Euro weniger.', es: 'No hay problema, cuesta también dos euros menos.' },
  'Was kosten zweihundert Gramm Käse?':
    { de: 'Drei Euro vierzig. Soll ich ihn in Scheiben schneiden?', es: 'Tres euros cuarenta. ¿Se lo corto en lonchas?' },
  'Ist die Dose billiger als die frische Ware?':
    { de: 'Deutlich. Dafür schmeckt frisch natürlich besser.', es: 'Bastante. A cambio, lo fresco sabe mejor, claro.' },
  'Warum ist das Brot hier teurer?':
    { de: 'Weil es aus der Bäckerei kommt, nicht aus der Fabrik.', es: 'Porque viene de la panadería, no de la fábrica.' },
  'Gibt es einen Rabatt auf abgelaufene Ware?':
    { de: 'Ab dem Vortag fünfzig Prozent, immer am Abend.', es: 'Desde el día anterior un cincuenta por ciento, siempre por la tarde.' },
  'Wie findest du das österreichische Frühstück?':
    { de: 'Ungewohnt, aber lecker. In Spanien essen wir morgens fast nichts.', es: 'Poco habitual, pero rico. En España por la mañana casi no comemos.' },
  'Heute gibt es Fisch aus der Pfanne.':
    { de: 'Wunderbar. Gibt es auch Erdäpfel dazu?', es: 'Estupendo. ¿Hay también patatas?' },
  'Im Ofen ist noch ein Kuchen.':
    { de: 'Wie lange braucht er noch? Es riecht schon fertig.', es: '¿Cuánto le queda? Ya huele a hecho.' },
  'Zum Nachtisch gibt es frisches Obst.':
    { de: 'Perfekt nach so einem großen Essen.', es: 'Perfecto después de una comida tan copiosa.' },
  'Auf dem Wochenmarkt gibt es alles frisch.':
    { de: 'Stimmt, und billiger als im Supermarkt.', es: 'Es verdad, y más barato que en el supermercado.' },
  'Wo finde ich die Dosen mit Tomaten?':
    { de: 'Gang vier, unten im Regal. Neben den Nudeln.', es: 'Pasillo cuatro, abajo en la estantería. Al lado de la pasta.' },
  'Ist diese Ware noch haltbar?':
    { de: 'Bis morgen. Deshalb kostet sie nur die Hälfte.', es: 'Hasta mañana. Por eso cuesta la mitad.' },
  'Haben Sie auch tiefgekühltes Gemüse?':
    { de: 'Ganz hinten bei den Truhen, gleich neben dem Eis.', es: 'Al fondo del todo, junto a los congeladores, al lado del helado.' },
  'Bekomme ich hier auch frisches Brot?':
    { de: 'Bis zehn Uhr ja. Danach nur noch abgepacktes.', es: 'Hasta las diez sí. Después solo envasado.' },
  'Wie ist die Prognose für die Woche?':
    { de: 'Bis Mittwoch schön, danach soll es kühler werden.', es: 'Hasta el miércoles bueno, después dicen que refresca.' },
  'Die Temperaturen sinken heute Nacht stark.':
    { de: 'Dann hole ich die Pflanzen vom Balkon herein.', es: 'Pues meto las plantas del balcón.' },
  'Es ist heute völlig windstill.':
    { de: 'Perfekt zum Radfahren. Bei Gegenwind ist es die Hölle.', es: 'Perfecto para ir en bici. Con viento en contra es un infierno.' },
  'Hat es bei euch auch Frost gegeben?':
    { de: 'Ja, minus drei Grad. Das Auto war komplett vereist.', es: 'Sí, tres bajo cero. El coche estaba completamente helado.' },
  'Zieh den Kindern die Gummistiefel an.':
    { de: 'Mache ich. Draußen steht überall Wasser.', es: 'Lo hago. Fuera hay charcos por todas partes.' },
  'Vergiss die Sonnenbrille nicht.':
    { de: 'Danke! Im Schnee blendet die Sonne noch mehr.', es: '¡Gracias! En la nieve el sol deslumbra todavía más.' },
  'Wann taut hier normalerweise der Schnee?':
    { de: 'Im Tal Ende Februar, in den Bergen erst im Mai.', es: 'En el valle a finales de febrero, en la montaña hasta mayo.' },
  'Der Sommer wird jedes Jahr heißer.':
    { de: 'Das Klima ändert sich, das merkt man deutlich.', es: 'El clima está cambiando, se nota claramente.' },
  'Im Herbst gibt es hier viele Regenschauer.':
    { de: 'Dafür sind die Wälder unglaublich schön.', es: 'A cambio los bosques están increíblemente bonitos.' },
  'Welcher Monat ist im Durchschnitt am kältesten?':
    { de: 'Der Jänner, knapp vor dem Februar.', es: 'Enero, justo por delante de febrero.' },
  'Der Frühling kommt hier später als in Spanien.':
    { de: 'Ungefähr einen Monat. Dafür bleibt er länger.', es: 'Un mes más o menos. A cambio dura más.' },
  'Wie oft gehst du ins Theater?':
    { de: 'Zweimal im Jahr. Die Eintrittskarten sind mir zu teuer.', es: 'Dos veces al año. Las entradas me salen caras.' },
  'Singst du regelmäßig im Chor?':
    { de: 'Jeden Donnerstag. Im Dezember sogar zweimal die Woche.', es: 'Todos los jueves. En diciembre incluso dos veces por semana.' },
  'Wir spielen jeden Sonntag ein Brettspiel.':
    { de: 'Schöne Tradition. Welches spielt ihr am liebsten?', es: 'Bonita tradición. ¿Cuál os gusta más?' },
  'Ich mache fast täglich Gartenarbeit.':
    { de: 'Auch im Winter? Da gibt es doch kaum etwas zu tun.', es: '¿También en invierno? Si casi no hay nada que hacer.' },
  'Was ist deine größte Leidenschaft?':
    { de: 'Die Berge. Dafür stehe ich auch um vier Uhr auf.', es: 'La montaña. Por eso me levanto incluso a las cuatro.' },
  'Bist du Anfänger oder schon fortgeschritten?':
    { de: 'Dazwischen. Die Grundlagen kann ich, den Rest übe ich noch.', es: 'Entre medias. Lo básico lo sé, el resto lo sigo practicando.' },
  'Ich habe zwei Eintrittskarten, kommst du mit?':
    { de: 'Auf jeden Fall! Wann beginnt die Vorstellung?', es: '¡Por supuesto! ¿Cuándo empieza la función?' },
  'Wir spielen heute Abend Karten, magst du?':
    { de: 'Gern, aber ich kann die Regeln nicht. Bringt ihr es mir bei?', es: 'Con gusto, pero no sé las reglas. ¿Me las enseñáis?' },
  'Wie viele Zuschauer waren beim Spiel?':
    { de: 'Etwa dreihundert. Für unsere Liga ist das viel.', es: 'Unos trescientos. Para nuestra liga es mucho.' },
  'Hast du genug Ehrgeiz für den Wettkampf?':
    { de: 'Ich glaube schon. Gewinnen muss ich aber nicht.', es: 'Creo que sí. Aunque no necesito ganar.' },
  'Was kostet die Mitgliedschaft im Verein?':
    { de: 'Zwanzig Euro im Monat, für Schüler die Hälfte.', es: 'Veinte euros al mes, para estudiantes la mitad.' },
  'Wir hatten gestern eine Panne auf der Autobahn.':
    { de: 'Oje! Und wie seid ihr dann nach Hause gekommen?', es: '¡Vaya! ¿Y cómo llegasteis después a casa?' },
  'Damals war ich noch keine zwanzig.':
    { de: 'Und trotzdem bist du allein hergezogen? Das ist mutig.', es: '¿Y aun así te viniste solo? Eso es valiente.' },
  'Ich habe mich gestern richtig erschrocken.':
    { de: 'Was ist denn passiert? Du siehst heute noch blass aus.', es: '¿Qué pasó? Todavía hoy estás pálido.' },
  'Wir haben den ganzen Abend gelacht.':
    { de: 'Das hört man gern. Wer hat denn die Geschichten erzählt?', es: 'Me alegra oírlo. ¿Y quién contaba las historias?' },
  'So ein Zufall, das glaube ich kaum!':
    { de: 'Ich auch nicht. Wir waren beide am selben Tag dort.', es: 'Yo tampoco. Estuvimos los dos allí el mismo día.' },
  'Das hätte ich nie von ihm gedacht.':
    { de: 'Ich schon. Er hat es seit Monaten angedeutet.', es: 'Yo sí. Lleva meses insinuándolo.' },
  'Erzähl mir mehr, das klingt spannend.':
    { de: 'Es wird noch besser: am nächsten Tag stand er wieder da.', es: 'Todavía mejora: al día siguiente volvió a aparecer.' },
  'Da bin ich jetzt wirklich überrascht.':
    { de: 'Das waren wir alle. Niemand hat damit gerechnet.', es: 'Lo estábamos todos. Nadie contaba con eso.' },
  'Kommen Sie oft hierher?':
    { de: 'Jeden Donnerstag, seit Jahren. Der Kaffee ist der beste im Bezirk.', es: 'Todos los jueves, desde hace años. El café es el mejor del distrito.' },
  'Endlich wird es wieder heller draußen.':
    { de: 'Nicht wahr? Ab jetzt geht es täglich zwei Minuten länger.', es: '¿Verdad? A partir de ahora son dos minutos más cada día.' },
  'Warten Sie schon lange?':
    { de: 'Zwanzig Minuten. Heute ist erstaunlich viel los.', es: 'Veinte minutos. Hoy hay muchísimo movimiento.' },
  'Der Verkehr war heute besonders schlimm.':
    { de: 'Wegen der Baustelle am Gürtel. Das dauert noch bis Juni.', es: 'Por las obras del Gürtel. Eso dura hasta junio.' },
  'Ich möchte mich darüber nicht aufregen.':
    { de: 'Verstehe. Dann lassen wir das Thema einfach liegen.', es: 'Entiendo. Pues dejamos el tema.' },
  'Ich brauche gerade einen Moment für mich.':
    { de: 'Natürlich. Ich bin in der Küche, wenn du reden willst.', es: 'Claro. Estoy en la cocina si quieres hablar.' },
  'Wie weit ist es bis ins Zentrum?':
    { de: 'Zwei Kilometer. Zu Fuß eine gute halbe Stunde.', es: 'Dos kilómetros. A pie, media hora larga.' },
  'Ist das hier eine Einbahnstraße?':
    { de: 'Ja, aber für Fußgänger ist das egal.', es: 'Sí, pero para los peatones da igual.' },
  'Wo kann ich mein Rad abstellen?':
    { de: 'Vor dem Eingang stehen Bügel. Schloss aber nicht vergessen.', es: 'Delante de la entrada hay aparcabicis. Pero no olvides el candado.' },
  'Fahren Sie lieber öffentlich oder mit dem Auto?':
    { de: 'Immer öffentlich. Einen Parkplatz suche ich sonst eine halbe Stunde.', es: 'Siempre público. Si no, busco aparcamiento media hora.' },
  'Ist das Ticket auch im Vorort gültig?':
    { de: 'Bis zur Stadtgrenze ja, danach brauchen Sie eine Zusatzkarte.', es: 'Hasta el límite de la ciudad sí, después necesita un suplemento.' },
  'Wir haben kein Benzin mehr.':
    { de: 'Die nächste Tankstelle ist drei Kilometer weiter. Wir schaffen das.', es: 'La próxima gasolinera está tres kilómetros más allá. Llegamos.' },
  'Wegen der Umleitung sind wir falsch gefahren.':
    { de: 'Kein Drama. Am Kreisverkehr drehen wir einfach um.', es: 'No es para tanto. En la rotonda damos la vuelta.' },
  'Ich habe meinen Führerschein zu Hause vergessen.':
    { de: 'Dann fahre besser ich. Eine Kontrolle wäre teuer.', es: 'Pues mejor conduzco yo. Un control saldría caro.' },
  'Hier ist die Geschwindigkeit stark begrenzt.':
    { de: 'Gut zu wissen. Ich habe das Verkehrsschild nicht gesehen.', es: 'Bueno es saberlo. No he visto la señal.' },
  'Der Parkplatz ist komplett voll.':
    { de: 'Stell den Wagen im Vorort ab und nimm die U-Bahn.', es: 'Deja el coche en las afueras y coge el metro.' },
  'Wir ziehen nächsten Monat endlich ein.':
    { de: 'Herzlichen Glückwunsch! Ist schon alles renoviert?', es: '¡Enhorabuena! ¿Ya está todo reformado?' },
  'Altbau oder Neubau, was ist dir lieber?':
    { de: 'Altbau, wegen der hohen Decken. Die Heizkosten sind der Preis dafür.', es: 'Antiguo, por los techos altos. El precio son los gastos de calefacción.' },
  'In der Wohngemeinschaft spare ich viel Geld.':
    { de: 'Und wie kommst du mit den Mitbewohnern zurecht?', es: '¿Y qué tal te llevas con los compañeros?' },
  'Die Wohnfläche ist kleiner als im Inserat.':
    { de: 'Das ist leider üblich. Miss selbst nach, bevor du unterschreibst.', es: 'Por desgracia es lo habitual. Mídelo tú antes de firmar.' },
  'Wer kümmert sich um Reparaturen?':
    { de: 'Der Hausmeister, für alles Kleine. Sonst die Hausverwaltung.', es: 'El conserje, para todo lo pequeño. Si no, la administración.' },
  'Ab wann kann ich einziehen?':
    { de: 'Ab dem ersten Juli. Vorher wird noch gestrichen.', es: 'A partir del uno de julio. Antes todavía se pinta.' },
  'Der Schimmel im Bad gefällt mir gar nicht.':
    { de: 'Das muss der Vermieter beheben, bevor du einziehst.', es: 'Eso lo tiene que arreglar el propietario antes de que entres.' },
  'Die hohen Decken finde ich wunderbar.':
    { de: 'Ja, aber Lampen aufhängen wird eine Herausforderung.', es: 'Sí, pero colgar las lámparas va a ser un reto.' },
  'Der Innenhof gefällt mir am besten.':
    { de: 'Mir auch. Im Sommer sitzen dort abends alle Nachbarn.', es: 'A mí también. En verano por la tarde se sientan allí todos los vecinos.' },
  'Diese Jalousien sehen sehr altmodisch aus.':
    { de: 'Dafür halten sie die Hitze draußen, besser als jeder Vorhang.', es: 'A cambio dejan fuera el calor, mejor que cualquier cortina.' },
  'Darf man im Innenhof grillen?':
    { de: 'Leider nein. Die Hausordnung verbietet offenes Feuer.', es: 'Por desgracia no. Las normas prohíben el fuego.' },
  'Muss die Übersetzung beglaubigt sein?':
    { de: 'Unbedingt. Eine einfache Übersetzung nehmen wir nicht an.', es: 'Sin falta. Una traducción simple no la aceptamos.' },
  'Wann bekomme ich den Bescheid?':
    { de: 'In zwei bis drei Wochen, per Post an Ihre Meldeadresse.', es: 'En dos o tres semanas, por correo a su dirección registrada.' },
  'Ist diese Angabe verpflichtend?':
    { de: 'Nein, freiwillig. Sie können das Feld auch leer lassen.', es: 'No, es voluntario. Puede dejar la casilla vacía.' },
  'Darf mein Mann das für mich abgeben?':
    { de: 'Nur mit einer schriftlichen Vollmacht von Ihnen.', es: 'Solo con una autorización por escrito suya.' },
  'Kann ich gegen den Bescheid etwas machen?':
    { de: 'Ja, Einspruch, innerhalb von vier Wochen und schriftlich.', es: 'Sí, recurso, en el plazo de cuatro semanas y por escrito.' },
  'Darf ich hier während der Wartezeit telefonieren?':
    { de: 'Bitte draußen im Gang. Hier drinnen stört es die anderen.', es: 'Fuera en el pasillo, por favor. Aquí dentro molesta a los demás.' },
  'Ich vereinbare Termine immer online.':
    { de: 'Das ist klüger. Am Telefon wartet man zwanzig Minuten.', es: 'Es más inteligente. Por teléfono esperas veinte minutos.' },
  'Steuererklärungen mache ich immer im Februar.':
    { de: 'So früh? Ich schiebe es jedes Jahr bis zum letzten Tag.', es: '¿Tan pronto? Yo lo aplazo cada año hasta el último día.' },
  'Wichtige Papiere hebe ich in einem Ordner auf.':
    { de: 'Sehr vernünftig. Ich suche jedes Mal eine halbe Stunde.', es: 'Muy sensato. Yo busco media hora cada vez.' },
  'Atmen Sie bitte ruhig weiter.':
    { de: 'Ich versuche es. Beim Arzt werde ich immer nervös.', es: 'Lo intento. En el médico siempre me pongo nervioso.' },
  'Vorsicht, die Wunde darf nicht nass werden.':
    { de: 'Wie dusche ich dann? Mit einer Folie darüber?', es: '¿Y cómo me ducho? ¿Con un plástico encima?' },
  'Bitte rauchen Sie vor der Operation nicht.':
    { de: 'Mache ich nicht. Ich habe sowieso vor einem Jahr aufgehört.', es: 'No lo haré. De todos modos lo dejé hace un año.' },
  'Achtung, diese Tablette hat Nebenwirkungen.':
    { de: 'Welche denn? Werde ich müde oder schwindlig?', es: '¿Cuáles? ¿Me dará sueño o mareo?' },
  'Der Schmerz ist scharf, nicht dumpf.':
    { de: 'Das ist wichtig. Kommt er beim Bewegen oder in Ruhe?', es: 'Eso es importante. ¿Llega al moverse o en reposo?' },
  'Ich kann kaum tief atmen.':
    { de: 'Dann hören wir gleich die Lunge ab. Machen Sie bitte den Rücken frei.', es: 'Entonces auscultamos los pulmones. Descúbrase la espalda, por favor.' },
  'Die Wunde blutet immer wieder.':
    { de: 'Dann muss sie genäht werden. Das dauert nur zehn Minuten.', es: 'Entonces hay que coserla. Son solo diez minutos.' },
  'Meine Haut juckt seit Tagen.':
    { de: 'Haben Sie ein neues Waschmittel benutzt?', es: '¿Ha usado un detergente nuevo?' },
  'Die Diagnose war zum Glück harmlos.':
    { de: 'Was für eine Erleichterung! Du hast wochenlang schlecht geschlafen.', es: '¡Qué alivio! Llevabas semanas durmiendo mal.' },
  'Nach der Operation geht es mir besser.':
    { de: 'Das freut mich. Darfst du schon wieder arbeiten?', es: 'Me alegro. ¿Ya puedes volver a trabajar?' },
  'Mein Vater ist im Krankenhaus.':
    { de: 'Das tut mir leid. Wenn du Hilfe brauchst, sag Bescheid.', es: 'Lo siento. Si necesitas ayuda, avísame.' },
  'Ich schlafe seit Wochen schlecht.':
    { de: 'Rede mit dem Hausarzt. Guter Schlaf ist keine Kleinigkeit.', es: 'Habla con el médico de cabecera. Dormir bien no es una tontería.' },
  'Ich war heute beim Hausarzt.':
    { de: 'Und was hat er gesagt? Bleiben Sie zu Hause?', es: '¿Y qué le ha dicho? ¿Se queda en casa?' },
  'Nach der Operation bin ich vier Wochen weg.':
    { de: 'Danke für die frühe Information. Wir planen die Vertretung gleich.', es: 'Gracias por avisar con tiempo. Organizamos ya la sustitución.' },
  'Die Bestätigung schickt die Ordination direkt.':
    { de: 'Perfekt, dann müssen Sie sich um nichts kümmern.', es: 'Perfecto, así no se tiene que ocupar de nada.' },
  'Haben Sie das Hemd auch einfarbig?':
    { de: 'In Weiß und in Hellblau. Kariert ist gerade sehr gefragt.', es: 'En blanco y en azul claro. Lo de cuadros está muy solicitado.' },
  'Der Ärmel ist mir viel zu lang.':
    { de: 'Das kürzen wir Ihnen, fünfzehn Euro und drei Tage.', es: 'Se la acortamos, quince euros y tres días.' },
  'Hat die Jacke ein warmes Futter?':
    { de: 'Ja, aus Wolle. Damit kommen Sie gut durch den Winter.', es: 'Sí, de lana. Con eso pasa bien el invierno.' },
  'Der Reißverschluss geht kaum zu.':
    { de: 'Lassen Sie ihn tauschen. Bei diesem Modell passiert das oft.', es: 'Mándela cambiar. En este modelo pasa a menudo.' },
  'Diese Kette gefällt mir wirklich gut.':
    { de: 'Sie passt perfekt zu deinem Kleid. Nimm sie.', es: 'Pega perfecto con tu vestido. Cógelo.' },
  'Das Muster ist mir zu auffällig.':
    { de: 'Dann schau dir das einfarbige daneben an.', es: 'Pues mira el liso de al lado.' },
  'Ich trage lieber einfarbig als kariert.':
    { de: 'Einfarbig kann man auch leichter kombinieren.', es: 'Lo liso también se combina más fácil.' },
  'Ich hätte gern einen Gutschein statt Geld.':
    { de: 'Kein Problem. Er ist drei Jahre lang gültig.', es: 'No hay problema. Vale durante tres años.' },
  'Am liebsten hätte ich den Ring eine Nummer größer.':
    { de: 'Wir lassen ihn weiten, das kostet nichts extra.', es: 'Se lo ensanchamos, no cuesta nada más.' },
  'Bis wann ist der Umtausch möglich?':
    { de: 'Dreißig Tage ab Kaufdatum, mit Quittung und Originalverpackung.', es: 'Treinta días desde la compra, con recibo y envase original.' },
  'Ich möchte eine Beschwerde einreichen.':
    { de: 'Selbstverständlich. Schildern Sie mir bitte kurz, was passiert ist.', es: 'Por supuesto. Cuénteme brevemente qué ha pasado.' },
  'Die Sohle hat sich nach zwei Wochen gelöst.':
    { de: 'Das ist eindeutig ein Mangel. Sie bekommen ein neues Paar.', es: 'Eso es claramente un defecto. Le damos un par nuevo.' },
  'Ich finde Mode ziemlich überbewertet.':
    { de: 'Trotzdem achtest du sehr genau darauf, was du anziehst.', es: 'Aun así te fijas mucho en lo que te pones.' },
  'Ein Gutschein ist für mich keine Lösung.':
    { de: 'Da hast du recht. Bei einem Mangel steht dir das Geld zu.', es: 'Tienes razón. Si hay un defecto, te corresponde el dinero.' },
  'Kannst du mir zeigen, wie ich das hochlade?':
    { de: 'Klar. Zuerst anklicken, dann die Datei auswählen, dann warten.', es: 'Claro. Primero haces clic, luego eliges el archivo y esperas.' },
  'Mein Speicher ist voll, was mache ich?':
    { de: 'Alte Videos löschen. Die brauchen den meisten Platz.', es: 'Borra los vídeos viejos. Son los que más ocupan.' },
  'Hilfst du mir beim Buchen der Ferienwohnung?':
    { de: 'Gern. Such du die Wohnung aus, ich prüfe die Bewertungen.', es: 'Con gusto. Tú eliges el piso y yo miro las valoraciones.' },
  'Könntest du meine Vokabeln abfragen?':
    { de: 'Zehn Minuten, ja. Gib mir die Liste und leg los.', es: 'Diez minutos, sí. Dame la lista y empieza.' },
  'Ich hoffe, das Visum kommt rechtzeitig.':
    { de: 'Wann hast du es beantragt? Meistens dauert es vier Wochen.', es: '¿Cuándo lo solicitaste? Suele tardar cuatro semanas.' },
  'Ich verspreche, ich lerne jeden Tag zehn Vokabeln.':
    { de: 'Zehn sind viel. Fünf jeden Tag ist besser als zwanzig am Sonntag.', es: 'Diez son muchas. Cinco al día es mejor que veinte el domingo.' },
  'Lieber Strand oder lieber Berge?':
    { de: 'Berge, eindeutig. Am Strand wird mir nach zwei Tagen langweilig.', es: 'Montaña, sin duda. En la playa me aburro a los dos días.' },
  'Schläfst du im Zelt oder in der Jugendherberge?':
    { de: 'Im Zelt. Der Campingplatz kostet nur zwölf Euro pro Nacht.', es: 'En tienda. El camping cuesta solo doce euros por noche.' },
  'Braucht man für dieses Land ein Visum?':
    { de: 'Für drei Monate nicht. Länger schon, dann wird es kompliziert.', es: 'Para tres meses no. Para más sí, y ahí se complica.' },
  'Wie lang ist der Wanderweg zum Gipfel?':
    { de: 'Vier Stunden hinauf, drei hinunter. Nimm genug Wasser mit.', es: 'Cuatro horas de subida, tres de bajada. Lleva agua de sobra.' },
  'Mich interessiert vor allem die Grammatik.':
    { de: 'Wirklich? Die meisten sagen, sie sei das Schlimmste.', es: '¿En serio? La mayoría dice que es lo peor.' },
  'Vokabeln auswendig lernen mag ich nicht.':
    { de: 'Dann lerne sie in Sätzen. Allein bleiben sie sowieso nicht hängen.', es: 'Pues apréndelo en frases. Suelto no se queda de todos modos.' },
  'Woher nimmst du die Motivation?':
    { de: 'Aus kleinen Erfolgen. Jedes verstandene Gespräch zählt.', es: 'De los pequeños éxitos. Cada conversación entendida cuenta.' },
  'Wie viele Vokabeln lernst du pro Woche?':
    { de: 'Dreißig. Am Sonntag wiederhole ich alles noch einmal.', es: 'Treinta. El domingo lo repaso todo otra vez.' },
  'Kannst du die Regeln auswendig?':
    { de: 'Die wichtigsten schon. Beim Sprechen denke ich trotzdem nicht daran.', es: 'Las principales sí. Aunque al hablar no me acuerdo.' },
  'Was willst du als Nächstes erreichen?':
    { de: 'Ein Gespräch am Telefon ohne Angst. Das ist mein nächstes Ziel.', es: 'Una conversación por teléfono sin miedo. Ese es mi próximo objetivo.' },
  'Bei uns gibt es zu Silvester ein Feuerwerk im Dorf.':
    { de: 'Hier auch, aber immer weniger. Wegen der Tiere und der Luft.', es: 'Aquí también, pero cada vez menos. Por los animales y el aire.' },
  'Den Christbaum schmücken wir erst am Vierundzwanzigsten.':
    { de: 'Bei uns schon Anfang Dezember. Das ist wohl Geschmackssache.', es: 'En mi casa ya a principios de diciembre. Será cuestión de gustos.' },
  'Kommst du zur Taufe am Sonntag?':
    { de: 'Sehr gern. Gibt es eine Tischordnung oder setzt man sich frei?', es: 'Con mucho gusto. ¿Hay distribución de mesas o uno se sienta donde quiere?' },
  'Wir feiern unser Jubiläum im September.':
    { de: 'Zwanzig Jahre! Sagt rechtzeitig Bescheid, ich nehme mir frei.', es: '¡Veinte años! Avisad con tiempo, me cojo el día libre.' },
  'Bring bitte nichts mit, wir haben alles.':
    { de: 'Einen Strauß Blumen doch, oder? Ganz ohne komme ich nicht.', es: 'Un ramo de flores sí, ¿no? Con las manos vacías no voy.' },
  'Die Tischdecke und die Kerzen sehen festlich aus.':
    { de: 'Danke! Die Tischdecke ist von meiner Urgroßmutter.', es: '¡Gracias! El mantel es de mi bisabuela.' },
  'Stoßen wir gemeinsam an?':
    { de: 'Unbedingt. Aber füll mir bitte nur ein halbes Glas ein.', es: 'Sin falta. Pero sírveme solo medio vaso.' },
  'Vom Buffet ist noch viel übrig.':
    { de: 'Dann nehme ich noch etwas Salat. Der war ausgezeichnet.', es: 'Pues cojo un poco más de ensalada. Estaba excelente.' },
  'Machen wir uns für den Jahreswechsel etwas aus?':
    { de: 'Gern, aber zu Hause. Draußen ist es mir zu voll.', es: 'Con gusto, pero en casa. Fuera hay demasiada gente.' },
  'Passt es dir, wenn wir gemeinsam hinfahren?':
    { de: 'Perfekt. Dann teilen wir uns auch das Benzin.', es: 'Perfecto. Así compartimos también la gasolina.' },
  'Entschuldige, ich habe das Geschenk vergessen.':
    { de: 'Das ist doch egal. Wichtig ist, dass du da bist.', es: 'Da igual. Lo importante es que estés aquí.' },
  'Es tut mir leid, dass wir so spät gratulieren.':
    { de: 'Kein Problem. Ich feiere sowieso die ganze Woche.', es: 'No hay problema. De todos modos lo celebro toda la semana.' },
  'Das ist Jonas, mein Trauzeuge.':
    { de: 'Freut mich! Kennt ihr euch schon lange?', es: '¡Encantado! ¿Os conocéis desde hace mucho?' },
  'Sie hat das ganze Fest organisiert.':
    { de: 'Das sieht man. Alles läuft wie am Schnürchen.', es: 'Se nota. Todo va como la seda.' },
  'Ich hätte gern mehr Ruhe im Alltag.':
    { de: 'Wer nicht? Fang mit einem freien Abend pro Woche an.', es: '¿Quién no? Empieza con una tarde libre por semana.',
      mas: [
        { de: 'Einen ganzen Abend? Das schaffe ich nie.', es: '¿Una tarde entera? Eso no lo consigo.' },
        { de: 'Dann eine Stunde. Hauptsache, sie gehört dir.', es: 'Pues una hora. Lo importante es que sea tuya.' }
      ] },
  'Am liebsten hätte ich etwas mehr Freiheit bei der Arbeit.':
    { de: 'Sprich mit deinem Chef. Manchmal reicht ein Gespräch.', es: 'Habla con tu jefe. A veces basta una conversación.' },
  'Ich wünsche mir, dass die Kinder es leichter haben.':
    { de: 'Das wollen alle Eltern. Und meistens klappt es auch.', es: 'Eso lo quieren todos los padres. Y normalmente sale.' },
  'Das Praktikum war für mich der Wendepunkt.':
    { de: 'Warum genau? Wegen der Leute oder wegen der Arbeit?', es: '¿Por qué exactamente? ¿Por la gente o por el trabajo?',
      mas: [
        { de: 'Vor allem wegen der Leute. Da habe ich zum ersten Mal den ganzen Tag Deutsch geredet.', es: 'Sobre todo por la gente. Fue la primera vez que hablé alemán todo el día.' },
        { de: 'Und danach ging es leichter?', es: '¿Y después fue más fácil?' }
      ] },
  'Nach der Krise ging es langsam aufwärts.':
    { de: 'Wie lange hat das gedauert, bis du es gemerkt hast?', es: '¿Cuánto tardaste en notarlo?',
      mas: [
        { de: 'Ein halbes Jahr ungefähr. Ich habe es erst gemerkt, als ich wieder Pläne gemacht habe.', es: 'Medio año más o menos. Me di cuenta cuando volví a hacer planes.' },
        { de: 'Das ist ein gutes Zeichen, finde ich.', es: 'Eso es buena señal, me parece.' }
      ] },
  'Damals habe ich sehr an mir gezweifelt.':
    { de: 'Und heute? Sieht man dir gar nicht mehr an.', es: '¿Y hoy? Ya no se te nota nada.' },
  'Wie hast du die Trennung damals verkraftet?':
    { de: 'Schlecht, ehrlich gesagt. Erst nach einem Jahr wurde es besser.', es: 'Mal, la verdad. Hasta el año no fue a mejor.' },
  'Hast du Vorurteile erlebt?':
    { de: 'Ein paar Mal. Meistens verschwinden sie nach dem ersten Gespräch.', es: 'Alguna vez. Normalmente desaparecen tras la primera conversación.' },
  'Das muss viel Mut gekostet haben.':
    { de: 'Damals dachte ich nicht darüber nach. Heute schon.', es: 'Entonces no lo pensaba. Hoy sí.' },
  'Halt, das habe ich falsch gesagt.':
    { de: 'Kein Problem. Sag es einfach noch einmal in Ruhe.', es: 'No hay problema. Dilo otra vez con calma.' },
  'Ohne Zuversicht hätte ich aufgegeben.':
    { de: 'Woher kam die Zuversicht? Aus der Familie?', es: '¿De dónde venía esa confianza? ¿De la familia?' },
  'Der Zusammenhalt im Kurs hat mir geholfen.':
    { de: 'Das höre ich oft. Man ist mit den Problemen nicht allein.', es: 'Eso lo oigo mucho. Con los problemas no estás solo.' },
  'Heute fühle ich mich hier stark.':
    { de: 'Das freut mich sehr. Ab wann war das so?', es: 'Me alegra mucho. ¿Desde cuándo es así?' },
  'Ich will das Risiko diesmal eingehen.':
    { de: 'Gut. Und was ist der schlimmste Fall, den du dir vorstellst?', es: 'Bien. ¿Y cuál es el peor caso que te imaginas?' },
  'Diese Chance lasse ich nicht vorbeigehen.':
    { de: 'Genau richtig. Solche kommen selten zweimal.', es: 'Muy bien. De esas pocas veces vienen dos.' },
  'Ich hoffe auf eine feste Stelle im Herbst.':
    { de: 'Hast du schon gefragt, oder wartest du auf ein Angebot?', es: '¿Ya lo has preguntado o esperas una oferta?' },
  'Das ist alles hausgemacht? Wirklich?':
    { de: 'Sogar die Marmelade und der Honig, vom eigenen Garten.', es: 'Hasta la mermelada y la miel, del propio jardín.' },
  'Wir servieren um acht, kommt ihr vorher?':
    { de: 'Um halb acht sind wir da. Sollen wir Wein mitbringen?', es: 'A las siete y media estamos allí. ¿Llevamos vino?',
      mas: [
        { de: 'Bringt lieber nichts mit, wir haben alles.', es: 'Mejor no traigáis nada, lo tenemos todo.' },
        { de: 'Dann kommen wir eben mit leeren Händen.', es: 'Pues vamos con las manos vacías.' }
      ] },
  'Ich habe etwas Spanisches gekocht.':
    { de: 'Wie schön! Ist es scharf? Meine Frite verträgt das nicht.', es: '¡Qué bien! ¿Es picante? Mi hija no lo tolera.',
      mas: [
        { de: 'Gar nicht scharf, keine Sorge.', es: 'Nada picante, tranquila.' },
        { de: 'Puh. Dann probiere ich auch das mit der Paprika.', es: 'Uf. Entonces pruebo también lo del pimentón.' }
      ] },
  'Bei uns gibt es nur eine Kleinigkeit.':
    { de: 'Umso besser. Nach großen Essen bin ich immer müde.', es: 'Mejor aún. Después de comidas copiosas siempre estoy cansado.' },
  'Können wir draußen im Gastgarten sitzen?':
    { de: 'Ab achtzehn Uhr ist dort wieder Platz. Bis dahin nur drinnen.', es: 'A partir de las seis hay sitio allí. Hasta entonces solo dentro.',
      mas: [
        { de: 'Dann warten wir. Draußen ist es viel schöner.', es: 'Pues esperamos. Fuera se está mucho mejor.' },
        { de: 'Verstehe ich. Ich sage Ihnen Bescheid, sobald ein Tisch frei wird.', es: 'Le entiendo. Le aviso en cuanto quede una mesa.' }
      ] },
  'Ist in dem Gericht eine Nuss drin?':
    { de: 'In der Soße ja. Ich frage sicherheitshalber in der Küche nach.', es: 'En la salsa sí. Por seguridad lo pregunto en la cocina.' },
  'Können Sie mir etwas Würziges empfehlen?':
    { de: 'Das Gulasch. Aber sagen Sie Bescheid, wenn es zu scharf wird.', es: 'El gulash. Pero avise si le resulta demasiado picante.' },
  'Magst du am Sonntag zum Frühstück kommen?':
    { de: 'Sehr gern. Ich bringe frisches Brot vom Markt mit.', es: 'Con mucho gusto. Llevo pan fresco del mercado.' },
  'Komm doch einfach ins Lokal, wir sind schon dort.':
    { de: 'Ich brauche zwanzig Minuten. Bestellt ruhig schon.', es: 'Necesito veinte minutos. Pedid tranquilamente.' },
  'Wir grillen im Garten, kommt ihr dazu?':
    { de: 'Sehr gern! Sollen wir Salat oder Nachspeise machen?', es: '¡Con mucho gusto! ¿Hacemos ensalada o postre?' },
  'Gehen wir morgen ins Hallenbad?':
    { de: 'Gern, aber früh. Ab sechzehn Uhr sind alle Bahnen belegt.', es: 'Con gusto, pero temprano. A partir de las cuatro están todas las calles ocupadas.',
      mas: [
        { de: 'Dann um zwei. Da ist noch fast niemand.', es: 'Pues a las dos. A esa hora casi no hay nadie.' },
        { de: 'Abgemacht. Vergiss die Badekappe nicht.', es: 'Hecho. No te olvides el gorro.' }
      ] },
  'Sollen wir uns für den Lauf anmelden?':
    { de: 'Machen wir. Die Startnummern holen wir am Vortag ab.', es: 'Hagámoslo. Los dorsales los recogemos el día antes.' },
  'Wie wäre es mit einem Ruhetag?':
    { de: 'Sehr vernünftig. Drei Tage hintereinander waren zu viel.', es: 'Muy sensato. Tres días seguidos fue demasiado.' },
  'Einverstanden, ich bin beim Wettkampf dabei.':
    { de: 'Super! Dann trainieren wir ab Montag zusammen.', es: '¡Genial! Entonces entrenamos juntos a partir del lunes.' },
  'Ohne mich, ich bin noch verletzt.':
    { de: 'Natürlich. Erhol dich, der Wettkampf läuft nicht weg.', es: 'Claro. Recupérate, la competición no se va a escapar.' },
  'Heute fehlt mir einfach die Kraft.':
    { de: 'Kein Problem. Ein Spaziergang zählt auch als Bewegung.', es: 'No hay problema. Un paseo también cuenta como ejercicio.',
      mas: [
        { de: 'Gehen wir eine Runde um den Block?', es: '¿Damos una vuelta a la manzana?' },
        { de: 'Das schaffe ich. Danach fühle ich mich bestimmt besser.', es: 'Eso sí puedo. Seguro que después me siento mejor.' }
      ] },
  'Das Spiel war absolut fair.':
    { de: 'Finde ich auch. Der Schiedsrichter hat kaum eingegriffen.', es: 'Yo también lo creo. El árbitro apenas intervino.',
      mas: [
        { de: 'Und das Ergebnis war auch verdient.', es: 'Y el resultado también fue merecido.' },
        { de: 'Da sind wir uns ausnahmsweise mal einig.', es: 'Por una vez estamos de acuerdo.' }
      ] },
  'Der Erfolg kommt nicht von allein.':
    { de: 'Stimmt. Zwei Jahre Training stecken in dieser Medaille.', es: 'Es verdad. En esa medalla hay dos años de entrenamiento.',
      mas: [
        { de: 'Wie oft habt ihr trainiert?', es: '¿Cuántas veces entrenabais?' },
        { de: 'Viermal die Woche, auch im Winter.', es: 'Cuatro veces por semana, también en invierno.' }
      ] },
  'Diese Übung ist nur Kraft, keine Technik.':
    { de: 'Deshalb mag ich sie nicht. Technik macht mehr Spaß.', es: 'Por eso no me gusta. La técnica es más divertida.',
      mas: [
        { de: 'Welche magst du denn lieber?', es: '¿Cuál te gusta más?' },
        { de: 'Alles mit Ball. Da denkt man nicht ans Zählen.', es: 'Todo lo que sea con pelota. Ahí no piensas en contar.' }
      ] },
  'Beweglichkeit ist mir wichtiger als Kraft.':
    { de: 'Vernünftig. Mit sechzig ist das noch wichtiger.', es: 'Sensato. A los sesenta es todavía más importante.' },
  'Am liebsten trainiere ich ohne Gegner.':
    { de: 'Also lieber laufen als Fußball? Das verstehe ich.', es: '¿O sea, mejor correr que jugar al fútbol? Lo entiendo.' },
  'Wie war der Start beim Marathon?':
    { de: 'Chaotisch. Zehntausend Leute auf einer schmalen Straße.', es: 'Caótica. Diez mil personas en una calle estrecha.' },
  'Habt ihr in der Halbzeit geführt?':
    { de: 'Zwei zu null. Danach ist alles zusammengebrochen.', es: 'Dos a cero. Después se vino todo abajo.' },
  'Wie lange bist du schon verletzt?':
    { de: 'Vier Wochen. Nächsten Monat darf ich wieder ins Training.', es: 'Cuatro semanas. El mes que viene puedo volver a entrenar.' },
  'Ich bin der neue Praktikant in Ihrer Abteilung.':
    { de: 'Willkommen! Wie lange bleiben Sie bei uns?', es: '¡Bienvenido! ¿Cuánto tiempo se queda con nosotros?' },
  'Das Projekt fällt in meine Zuständigkeit.':
    { de: 'Gut zu wissen. Dann schicke ich Ihnen alle Unterlagen.', es: 'Bueno es saberlo. Entonces le envío toda la documentación.' },
  'Darf ich Ihnen unseren neuen Kollegen vorstellen?':
    { de: 'Sehr gern. In welchem Bereich werden Sie arbeiten?', es: 'Con mucho gusto. ¿En qué área va a trabajar?' },
  'War das eine feste Absprache oder nur eine Idee?':
    { de: 'Eine Idee. Entschieden wird es erst in der Besprechung.', es: 'Una idea. Se decide en la reunión.' },
  'Wie lange soll die Präsentation dauern?':
    { de: 'Zwanzig Minuten, plus zehn für Fragen.', es: 'Veinte minutos, más diez para preguntas.' },
  'Gilt das Homeoffice auch in der Probezeit?':
    { de: 'Erst danach. In den ersten drei Monaten sind Sie im Büro.', es: 'Solo después. Los tres primeros meses está en la oficina.' },
  'Wer übernimmt das Projekt nach dem Sommer?':
    { de: 'Vermutlich ich, wenn die Beförderung durchgeht.', es: 'Probablemente yo, si sale el ascenso.' },
  'Welche Qualifikationen erwarten Sie?':
    { de: 'Eine abgeschlossene Ausbildung und zwei Jahre Erfahrung.', es: 'Una formación terminada y dos años de experiencia.',
      mas: [
        { de: 'Zählt Erfahrung aus dem Ausland auch?', es: '¿Cuenta también la experiencia del extranjero?' },
        { de: 'Selbstverständlich. Die Hälfte des Teams kommt nicht von hier.', es: 'Por supuesto. La mitad del equipo no es de aquí.' }
      ] },
  'Zahlt der Arbeitgeber auch Fortbildungen?':
    { de: 'Ja, zwei Kurse pro Jahr, auch Sprachkurse.', es: 'Sí, dos cursos al año, también de idiomas.',
      mas: [
        { de: 'Auch während der Arbeitszeit?', es: '¿También en horario de trabajo?' },
        { de: 'Einen halben Tag pro Woche, ja.', es: 'Media jornada a la semana, sí.' }
      ] },
  'Wie ist das Betriebsklima bei Ihnen?':
    { de: 'Familiär. Die meisten sind seit über zehn Jahren da.', es: 'Familiar. La mayoría lleva más de diez años aquí.',
      mas: [
        { de: 'Das klingt gut. Gibt es viel Wechsel?', es: 'Suena bien. ¿Hay mucha rotación?' },
        { de: 'Kaum. Letztes Jahr ist niemand gegangen.', es: 'Apenas. El año pasado no se fue nadie.' }
      ] },
  'Ich bin zeitlich sehr flexibel.':
    { de: 'Das hilft uns sehr. Wären auch Samstage möglich?', es: 'Eso nos ayuda mucho. ¿Serían posibles también los sábados?' },
  'Dann probieren wir es bis zum Semesterende so.':
    { de: 'Einverstanden. Im Februar sprechen wir noch einmal darüber.', es: 'De acuerdo. En febrero lo volvemos a hablar.',
      mas: [
        { de: 'Soll ich Ihnen vorher schreiben, wenn es nicht klappt?', es: '¿Le escribo antes si no funciona?' },
        { de: 'Bitte. Warten Sie nicht bis Februar.', es: 'Por favor. No espere hasta febrero.' }
      ] },
  'Ich denke, wir sind uns einig.':
    { de: 'Ja. Vielen Dank, dass Sie sich die Zeit genommen haben.', es: 'Sí. Muchas gracias por dedicar el tiempo.' },
  'Sagen Sie mir Bescheid, wenn sich etwas ändert.':
    { de: 'Mache ich. Am besten gleich über das Mitteilungsheft.', es: 'Lo haré. Mejor directamente por el cuaderno de notas.' },
  'Ob Mathe oder Deutsch, ist mir gleich.':
    { de: 'Dem Kind aber nicht. Es hat in Deutsch viel mehr Freude.', es: 'Al niño no. En alemán disfruta mucho más.' },
  'Können Sie mir den Lernstoff kurz zusammenfassen?':
    { de: 'Gern: Kapitel drei und vier, plus die Wörterliste hinten.', es: 'Con gusto: capítulos tres y cuatro, más la lista de palabras del final.' },
  'Ich verstehe das Schulsystem hier noch nicht ganz.':
    { de: 'Das geht allen so. Ich zeichne es Ihnen kurz auf.', es: 'A todos les pasa. Se lo dibujo brevemente.' },
  'Ich weiß nicht, ob Nachhilfe wirklich hilft.':
    { de: 'Probieren Sie es ein Semester. Danach sehen Sie den Unterschied.', es: 'Pruébelo un semestre. Después verá la diferencia.' },
  'Was kostet die Klassenfahrt insgesamt?':
    { de: 'Hundertachtzig Euro. Bei Bedarf gibt es einen Zuschuss.', es: 'Ciento ochenta euros. Si hace falta, hay una ayuda.' },
  'Wann ist die Einschreibung für nächstes Jahr?':
    { de: 'Im Februar, zwei Wochen lang. Die Termine kommen per Post.', es: 'En febrero, durante dos semanas. Las citas llegan por correo.' },
  'Gibt es an dieser Schule Schulgeld?':
    { de: 'Nein, nur einen kleinen Beitrag für Material.', es: 'No, solo una pequeña aportación para material.' },
  'Wie ist sein Verhalten in der Klasse?':
    { de: 'Deutlich besser als im Herbst. Er meldet sich sogar freiwillig.', es: 'Bastante mejor que en otoño. Incluso participa voluntariamente.',
      mas: [
        { de: 'Das höre ich zum ersten Mal, das freut mich sehr.', es: 'Es la primera vez que lo oigo, me alegra mucho.' },
        { de: 'Sagen Sie es ihm ruhig. Das hört er gern von Ihnen.', es: 'Dígaselo, que le gusta oírlo de usted.' }
      ] },
  'Hilft Loben bei ihm mehr als Schimpfen?':
    { de: 'Eindeutig. Nach einem Lob arbeitet er eine Woche lang anders.', es: 'Sin duda. Después de un elogio trabaja distinto una semana.',
      mas: [
        { de: 'Dann machen wir es zu Hause auch so.', es: 'Pues en casa lo haremos igual.' },
        { de: 'Sehr gut. Wenn wir beide gleich handeln, wirkt es doppelt.', es: 'Muy bien. Si actuamos igual los dos, funciona el doble.' }
      ] },
  'Was können wir für sein Selbstvertrauen tun?':
    { de: 'Kleine Aufgaben, die er sicher schafft. Erfolge wirken schnell.', es: 'Tareas pequeñas que seguro consigue. Los éxitos funcionan rápido.',
      mas: [
        { de: 'Er hilft gern beim Kochen. Zählt das?', es: 'Le gusta ayudar a cocinar. ¿Eso cuenta?' },
        { de: 'Absolut. Alles, wo er am Ende etwas Fertiges sieht.', es: 'Desde luego. Todo donde al final vea algo terminado.' }
      ] },
  'Lies wenigstens den Artikel zu Ende.':
    { de: 'Also gut. Aber wenn er langweilig ist, höre ich auf.', es: 'Está bien. Pero si es aburrido, lo dejo.' },
  'Komm schon, einmal offline schadet dir nicht.':
    { de: 'Ein Wochenende? Das halte ich keine drei Stunden durch.', es: '¿Un fin de semana? No aguanto ni tres horas.' },
  'Hör dir den Podcast an, nur eine Folge.':
    { de: 'Wie lang ist eine Folge? Unter einer Stunde, hoffe ich.', es: '¿Cuánto dura un episodio? Menos de una hora, espero.' },
  'Ich verspreche dir, ich prüfe künftig die Quelle.':
    { de: 'Das reicht schon. Die meisten Falschmeldungen fallen dabei auf.', es: 'Con eso basta. Así se caen casi todas las noticias falsas.' },
  'Ab morgen reduziere ich meine Bildschirmzeit.':
    { de: 'Auf wie viel? Realistisch bleiben ist hier das Wichtigste.', es: '¿A cuánto? Aquí lo importante es ser realista.' },
  'Darauf kannst du dich verlassen, ich teile nichts.':
    { de: 'Danke. Bei privaten Fotos ist mir das wirklich wichtig.', es: 'Gracias. Con las fotos privadas eso me importa mucho.' },
  'Ich schaue nur eine Folge, versprochen.':
    { de: 'Das sagst du jedes Mal, und dann wird es Mitternacht.', es: 'Eso dices siempre, y luego se hace medianoche.',
      mas: [
        { de: 'Heute mache ich danach wirklich aus.', es: 'Hoy después lo apago de verdad.' },
        { de: 'Dann setze ich mich dazu und passe auf dich auf.', es: 'Pues me siento contigo y te vigilo.' }
      ] },
  'Diese Schlagzeile finde ich übertrieben.':
    { de: 'Absolut. Im Text selbst steht etwas ganz anderes.', es: 'Totalmente. En el texto pone algo muy distinto.' },
  'Meiner Meinung nach ist die Quelle glaubwürdig.':
    { de: 'Woran machst du das fest? An der Redaktion?', es: '¿En qué te basas? ¿En la redacción?' },
  'Sie sagt, der Bericht sei völlig neutral.':
    { de: 'Das sehe ich anders. Die Wortwahl ist deutlich einseitig.', es: 'Yo lo veo distinto. La elección de palabras es claramente parcial.' },
  'Für mich ist das reine Unterhaltung.':
    { de: 'Das ist ja nicht schlimm. Man muss es nur wissen.', es: 'Tampoco es malo. Solo hay que saberlo.' },
  'Wie hoch ist deine Bildschirmzeit pro Tag?':
    { de: 'Drei Stunden, und das ist schon weniger als früher.', es: 'Tres horas, y eso ya es menos que antes.' },
  'Schaffst du es, abends wirklich abzuschalten?':
    { de: 'Nur ohne Handy im Zimmer. Sonst greife ich alle zehn Minuten danach.', es: 'Solo sin el móvil en la habitación. Si no, lo cojo cada diez minutos.' },
  'Was ist für dich die größte Ablenkung?':
    { de: 'Kurze Videos. Fünf Minuten werden immer zu vierzig.', es: 'Los vídeos cortos. Cinco minutos se convierten siempre en cuarenta.' },
  'Werfen wir die Hälfte einfach weg?':
    { de: 'Radikal, aber richtig. Wir tragen sonst nur Ballast mit.', es: 'Radical, pero acertado. Si no, solo cargamos lastre.' },
  'Bringen wir den alten Schrank zum Mistplatz?':
    { de: 'Besser zum Sperrmüll. Der wird nächste Woche abgeholt.', es: 'Mejor a los trastos. Los recogen la semana que viene.' },
  'Ich schlage vor, wir räumen zuerst die Küche ein.':
    { de: 'Genau. Ohne Küche wird der erste Abend sehr lang.', es: 'Exacto. Sin cocina la primera noche se hace muy larga.' },
  'Na gut, dann eben provisorisch.':
    { de: 'Nur bitte nicht drei Jahre lang wie beim letzten Mal.', es: 'Pero por favor no tres años como la última vez.' },
  'Ich kümmere mich um den Nachsendeauftrag.':
    { de: 'Perfekt. Vergiss die Bank und die Versicherung nicht.', es: 'Perfecto. No olvides el banco y el seguro.' },
  'Vorsicht, diese Kiste ist zerbrechlich!':
    { de: 'Danke für die Warnung. Ich stelle sie ganz oben hin.', es: 'Gracias por avisar. La pongo arriba del todo.' },
  'Wo schaffen wir den meisten Stauraum?':
    { de: 'An der langen Wand. Dort passt ein Regal bis zur Decke.', es: 'En la pared larga. Ahí cabe una estantería hasta el techo.',
      mas: [
        { de: 'Bis zur Decke? Da komme ich nie hin.', es: '¿Hasta el techo? Ahí no llego.' },
        { de: 'Dafür gibt es Leitern. Und oben kommt nur der Winterkram hin.', es: 'Para eso hay escaleras. Y arriba solo va lo de invierno.' }
      ] },
  'Stellen wir das Bett provisorisch hierher?':
    { de: 'Ja, und morgen probieren wir die andere Ecke aus.', es: 'Sí, y mañana probamos la otra esquina.',
      mas: [
        { de: 'Hauptsache, wir schlafen heute Nacht irgendwo.', es: 'Lo importante es dormir en algún sitio esta noche.' },
        { de: 'Genau. Alles andere hat Zeit bis morgen.', es: 'Exacto. Lo demás puede esperar a mañana.' }
      ] },
  'Diese Lösung finde ich sehr praktisch.':
    { de: 'Und günstig. Zwei Bretter und vier Schrauben, mehr nicht.', es: 'Y barata. Dos tablas y cuatro tornillos, nada más.',
      mas: [
        { de: 'Wo hast du das gelernt?', es: '¿Dónde aprendiste eso?' },
        { de: 'Von meinem Vater. Der hat alles selbst gebaut.', es: 'De mi padre. Él se lo construía todo.' }
      ] },
  'In welche Kiste kommen die Gläser?':
    { de: 'In die kleine, mit viel Luftpolsterfolie dazwischen.', es: 'En la pequeña, con mucho plástico de burbujas entre medias.' },
  'Hier herrscht noch das totale Chaos.':
    { de: 'Das ist normal am ersten Tag. Morgen sieht es anders aus.', es: 'Es normal el primer día. Mañana tendrá otra cara.' },
  'Wer macht die Endreinigung der alten Wohnung?':
    { de: 'Wir, am Sonntag. Eine Firma wäre uns zu teuer.', es: 'Nosotros, el domingo. Una empresa nos saldría cara.' },
  'Was stand gerade in der Durchsage?':
    { de: 'Gleiswechsel: Der Zug fährt heute von Gleis neun ab.', es: 'Cambio de vía: hoy el tren sale de la vía nueve.',
      mas: [
        { de: 'Gleis neun? Wo ist das?', es: '¿Vía nueve? ¿Dónde está eso?' },
        { de: 'Ganz am Ende, hinter dem Supermarkt. Sie haben noch acht Minuten.', es: 'Al fondo del todo, detrás del súper. Le quedan ocho minutos.' }
      ] },
  'Lohnt sich eine Sitzplatzreservierung?':
    { de: 'Am Freitag auf jeden Fall. Sonst stehen Sie zwei Stunden.', es: 'El viernes sin duda. Si no, va de pie dos horas.',
      mas: [
        { de: 'Was kostet sie denn?', es: '¿Y cuánto cuesta?' },
        { de: 'Drei Euro. Für zwei Stunden Stehen ist das nichts.', es: 'Tres euros. Para dos horas de pie no es nada.' }
      ] },
  'Bekomme ich bei Verspätung eine Entschädigung?':
    { de: 'Ab sechzig Minuten, ja. Das Formular gibt es online.', es: 'A partir de sesenta minutos, sí. El formulario está en la web.' },
  'Könnten Sie im Ruhebereich bitte leiser sprechen?':
    { de: 'Entschuldigung, das Schild habe ich gar nicht gesehen.', es: 'Perdón, no había visto el cartel.' },
  'Dürfte ich Ihren Gepäckwagen kurz haben?':
    { de: 'Selbstverständlich, ich bin sowieso fertig.', es: 'Por supuesto, de todos modos ya he terminado.' },
  'Wären Sie so nett, mir beim Koffer zu helfen?':
    { de: 'Gern. Soll er nach oben oder ins Gepäckabteil?', es: 'Con gusto. ¿Arriba o al compartimento de equipajes?' },
  'Ist dieser Platz reserviert?':
    { de: 'Ab Linz, ja. Bis dahin können Sie bleiben.', es: 'A partir de Linz, sí. Hasta entonces puede quedarse.' },
  'Sind hier im Ruhebereich noch Plätze frei?':
    { de: 'Zwei, ganz vorne im Wagen. Ich zeige es Ihnen.', es: 'Dos, al principio del vagón. Se lo enseño.' },
  'Einen schönen Aufenthalt bei uns!':
    { de: 'Danke. Können Sie mir etwas für heute Abend empfehlen?', es: 'Gracias. ¿Me puede recomendar algo para esta noche?' },
  'Wie lang ist der Fußweg zum Hotel?':
    { de: 'Acht Minuten, immer geradeaus und dann links.', es: 'Ocho minutos, todo recto y luego a la izquierda.' },
  'Komme ich zu Fuß zur Innenstadt?':
    { de: 'Locker. Über die Brücke sind es zehn Minuten.', es: 'Sin problema. Por el puente son diez minutos.' },
  'Können wir das noch einmal zusammen üben?':
    { de: 'Ja, natürlich, wir machen die Übung einfach noch einmal von vorne.', es: 'Sí, claro, repetimos el ejercicio otra vez desde el principio.' },
  'Darf ich kurz auf die Toilette gehen?':
    { de: 'Ja, gehen Sie ruhig, wir warten kurz mit der nächsten Übung.', es: 'Sí, vaya tranquilo, esperamos un momento con el siguiente ejercicio.' },
  'Du wirkst heute so gut gelaunt.':
    { de: 'Bin ich auch, ich habe nach drei Monaten endlich eine Wohnung gefunden.', es: 'Y lo estoy: después de tres meses por fin he encontrado piso.' },
  'Ich bin neu hier im Kurs.':
    { de: 'Herzlich willkommen, setz dich einfach zu uns, hier ist noch ein Platz frei.', es: 'Bienvenido, siéntate con nosotros, aquí queda un sitio libre.' },
  'Und wo genau in Spanien liegt das?':
    { de: 'Ganz im Osten, direkt am Meer, ungefähr vier Stunden von Madrid.', es: 'Al este del todo, justo al lado del mar, a unas cuatro horas de Madrid.' },
  'Bist du schon lange in Wien?':
    { de: 'Seit knapp einem Jahr, und langsam fühlt es sich wie zu Hause an.', es: 'Desde hace casi un año, y poco a poco me siento como en casa.' },
  'Entschuldigung, ich habe Sie unterbrochen.':
    { de: 'Macht nichts, sagen Sie ruhig, was Sie sagen wollten.', es: 'No pasa nada, diga tranquilamente lo que quería decir.' },
  'Unter welcher Nummer erreiche ich Sie am besten?':
    { de: 'Am besten am Handy, ich schreibe Ihnen die Nummer kurz auf.', es: 'Mejor en el móvil, le apunto el número ahora mismo.' },
  'Schönen Feierabend noch!':
    { de: 'Danke, dir auch, und bis nächsten Montag im Kurs!', es: 'Gracias, igualmente, ¡y hasta el lunes que viene en clase!' },
  'Wohnst du allein oder mit anderen zusammen?':
    { de: 'Ich teile eine Wohnung mit zwei Studenten, das ist deutlich billiger.', es: 'Comparto piso con dos estudiantes; sale bastante más barato.' },
  'Wo hast du dein Deutsch gelernt?':
    { de: 'Zum Teil in Spanien, den Rest einfach hier im Alltag in Wien.', es: 'En parte en España; el resto, aquí en el día a día en Viena.' },
  'Verstehst du den Wiener Dialekt?':
    { de: 'Ehrlich gesagt kaum, im Kurs klingt alles viel langsamer und klarer.', es: 'Sinceramente, casi nada; en clase todo suena mucho más lento y claro.' },
  'Geht es dir schon besser?':
    { de: 'Viel besser, danke, ich habe zwei Tage nur geschlafen und Tee getrunken.', es: 'Mucho mejor, gracias; me he pasado dos días durmiendo y tomando té.' },
  'Was ist denn los mit dir?':
    { de: 'Nichts Schlimmes, ich habe nur ziemlich viel Stress in der Arbeit.', es: 'Nada grave, solo que tengo bastante estrés en el trabajo.' },
  'Wie war noch mal dein Nachname?':
    { de: 'García, wie der Fußballspieler, aber wir sind leider überhaupt nicht verwandt.', es: 'García, como el futbolista, pero no somos parientes ni de lejos.' },

  'Wie spricht man deinen Namen richtig aus?':
    { de: 'Álvaro, mit der Betonung auf der ersten Silbe, das machen alle falsch.', es: 'Álvaro, con el acento en la primera sílaba; todo el mundo lo dice mal.' },
  'Ist das vielleicht deine Tasche?':
    { de: 'Ich glaube schon, ja, meine sieht ganz genauso aus wie die.', es: 'Creo que sí; la mía es exactamente igual que esa.' },
  'Genau das wollte ich auch sagen.':
    { de: 'Dann sind wir uns ja einig, machen wir es einfach so.', es: 'Pues entonces estamos de acuerdo; hagámoslo así.' },
  'Wir sehen uns am Donnerstag, ja?':
    { de: 'Ja, gleiche Zeit, gleicher Ort, ich schreibe dir vorher kurz.', es: 'Sí, misma hora y mismo sitio; te escribo antes.' },
  'Bist du verheiratet oder ledig?':
    { de: 'Ledig, aber ich bin seit drei Jahren mit meiner Freundin zusammen.', es: 'Soltero, aunque llevo tres años con mi novia.' },
  'Wohnst du gern in dieser Gegend?':
    { de: 'Sehr gern, es ist ruhig und trotzdem bin ich schnell in der Stadt.', es: 'Mucho: es tranquilo y aun así llego rápido al centro.' },
  'Können Sie das bitte langsamer sagen?':
    { de: 'Natürlich, ich wiederhole es ganz langsam, Wort für Wort.', es: 'Claro, lo repito muy despacio, palabra por palabra.' },
  'Wie alt ist deine Schwester?':
    { de: 'Sie wird nächsten Monat dreißig und plant schon eine große Feier.', es: 'Cumple treinta el mes que viene y ya está planeando una fiesta.' },
  'In welchem Jahr bist du geboren?':
    { de: 'Dreiundneunzig, also bin ich jetzt zweiunddreißig, wenn ich richtig rechne.', es: 'En el noventa y tres, así que tengo treinta y dos, si echo bien la cuenta.' },
  'Wie lautet Ihre Adresse bitte?':
    { de: 'Mariahilfer Straße achtundvierzig, dritter Stock, Tür zwölf, gleich neben dem Aufzug.', es: 'Mariahilfer Straße cuarenta y ocho, tercer piso, puerta doce, junto al ascensor.' },
  'Haben Sie eine österreichische Handynummer?':
    { de: 'Ja, seit zwei Monaten, ich diktiere sie Ihnen gleich.', es: 'Sí, desde hace dos meses; se lo dicto ahora mismo.' },
  'Wie ist Ihr Geburtsdatum?':
    { de: 'Am vierzehnten März neunzehnhundertdreiundneunzig, geboren in Valencia in Spanien.', es: 'El catorce de marzo de mil novecientos noventa y tres, nacido en Valencia, España.' },
  'Ist das noch Ihre aktuelle Adresse?':
    { de: 'Nein, ich bin letzten Monat umgezogen, ich gebe Ihnen die neue.', es: 'No, me mudé el mes pasado; le doy la nueva.' },
  'Muss ich das Formular unterschreiben?':
    { de: 'Ja, bitte unten rechts, und vergessen Sie das Datum nicht.', es: 'Sí, abajo a la derecha, y no olvide la fecha.' },
  'Wo trage ich die Telefonnummer ein?':
    { de: 'In das Feld ganz unten, direkt unter der E-Mail-Adresse.', es: 'En la casilla de abajo del todo, justo debajo del correo.' },
  'Arbeitest du in Vollzeit oder Teilzeit?':
    { de: 'Teilzeit, dreißig Stunden, so bleibt genug Zeit für den Deutschkurs.', es: 'A tiempo parcial, treinta horas; así me queda tiempo para el curso de alemán.' },
  'Arbeitest du lieber im Team oder allein?':
    { de: 'Im Team auf jeden Fall, allein fällt mir die Konzentration schwer.', es: 'En equipo sin duda; solo me cuesta concentrarme.' },
  'Wie bist du zu diesem Beruf gekommen?':
    { de: 'Eher zufällig, ein Freund hat mich damals einfach mitgenommen.', es: 'Más bien por casualidad: un amigo me llevó con él sin más.' },
  'Was gefällt dir an deinem Job am besten?':
    { de: 'Der Kontakt mit den Leuten, kein Tag ist wie der andere.', es: 'El contacto con la gente: ningún día es igual que otro.' },
  'Suchst du gerade eine neue Stelle?':
    { de: 'Ja, ich schreibe seit einem Monat Bewerbungen, aber es dauert.', es: 'Sí, llevo un mes mandando solicitudes, pero la cosa va lenta.' },
  'Haben Sie kurz Zeit für eine Frage?':
    { de: 'Ja, aber nur ganz kurz, in fünf Minuten habe ich eine Besprechung.', es: 'Sí, pero muy poquito: dentro de cinco minutos tengo una reunión.' },
  'Kannst du dir die Arbeitszeit frei einteilen?':
    { de: 'Größtenteils ja, ich muss nur zu den Besprechungen pünktlich da sein.', es: 'En gran parte sí; solo tengo que llegar puntual a las reuniones.' },
  'Wie lange brauchst du in die Arbeit?':
    { de: 'Eine gute halbe Stunde mit der Straßenbahn, bei Stau auch länger.', es: 'Media hora larga en tranvía, y con atasco más.' },
  'Wo ist denn hier der Kopierer?':
    { de: 'Am Ende des Gangs, gleich neben der Küche auf der rechten Seite.', es: 'Al final del pasillo, justo al lado de la cocina, a la derecha.' },
  'Entschuldigung, wo finde ich Zimmer zwölf?':
    { de: 'Eine Etage höher, dann links, die Tür mit dem blauen Schild.', es: 'Un piso más arriba, luego a la izquierda: la puerta del cartel azul.' },
  'Ist die Kantine im Erdgeschoss?':
    { de: 'Nein, im Keller, aber der Aufzug fährt direkt hinunter.', es: 'No, en el sótano; pero el ascensor baja directo.' },
  'Wissen Sie, wo Frau Berger sitzt?':
    { de: 'Im Großraumbüro hinten, der zweite Schreibtisch direkt am großen Fenster.', es: 'En la oficina grande del fondo, la segunda mesa junto al ventanal.' },
  'Das stimmt allerdings.':
    { de: 'Freut mich, dass du das auch so siehst, dann machen wir es so.', es: 'Me alegra que lo veas igual; entonces lo hacemos así.' },
  'Bist du das älteste Kind zu Hause?':
    { de: 'Nein, das mittlere, mein Bruder ist vier Jahre älter als ich.', es: 'No, el mediano; mi hermano me lleva cuatro años.' },
  'Wie oft telefonierst du mit deinen Eltern?':
    { de: 'Fast jeden Sonntag, sonst macht sich meine Mutter sofort Sorgen.', es: 'Casi todos los domingos; si no, mi madre se preocupa enseguida.' },
  'Habt ihr eine große Familie?':
    { de: 'Ziemlich, allein bei meiner Mutter sind wir zwölf Cousins.', es: 'Bastante: solo por parte de mi madre somos doce primos.' },
  'Darf ich Ihnen meine Frau vorstellen?':
    { de: 'Sehr gerne, es freut mich außerordentlich, Sie endlich persönlich kennenzulernen.', es: 'Con mucho gusto; me alegra muchísimo conocerla por fin en persona.' },
  'Wer ist das neben dir auf dem Foto?':
    { de: 'Das ist mein Onkel, bei ihm haben wir jeden Sommer verbracht.', es: 'Es mi tío; en su casa pasábamos todos los veranos.' },
  'Wem gehört eigentlich dieser Schal?':
    { de: 'Keine Ahnung, der hängt schon seit letzter Woche da.', es: 'Ni idea; lleva ahí colgada desde la semana pasada.' },
  'Wer putzt bei euch die Küche?':
    { de: 'Wir wechseln uns jede Woche ab, das klappt ganz gut.', es: 'Nos turnamos cada semana y funciona bastante bien.' },
  'Kocht bei euch jeder für sich?':
    { de: 'Unter der Woche schon, am Sonntag kochen wir immer zusammen.', es: 'Entre semana sí; los domingos cocinamos siempre juntos.' },
  'Wie ist das Zusammenwohnen mit deinem Bruder?':
    { de: 'Überraschend entspannt, wir sehen uns unter der Woche kaum.', es: 'Sorprendentemente tranquilo; entre semana casi no nos vemos.' },
  'Die beiden sind sicher verwandt.':
    { de: 'Kann gut sein, sie haben genau die gleichen Augen.', es: 'Puede ser; tienen exactamente los mismos ojos.' },
  'Haben wir bis dahin noch genug Zeit?':
    { de: 'Reichlich, wir können sogar noch gemütlich einen Kaffee trinken.', es: 'De sobra; hasta nos da para un café con calma.' },
  'Schaffst du das bis morgen Mittag?':
    { de: 'Knapp, aber wenn ich heute Abend noch zwei Stunden dranbleibe, ja.', es: 'Justo, pero si esta noche le meto dos horas más, sí.' },
  'Bist du morgen früh oder später da?':
    { de: 'Eher später, vorher muss ich noch schnell zur Post.', es: 'Más bien tarde; antes tengo que pasar por correos.' },
  'Bis wann hat der Supermarkt offen?':
    { de: 'Unter der Woche bis acht, am Samstag nur bis sechs.', es: 'Entre semana hasta las ocho; el sábado solo hasta las seis.' },
  'Hat die Apotheke sonntags auch offen?':
    { de: 'Nur die Bereitschaftsapotheke, die steht immer am Aushang an der Tür.', es: 'Solo la de guardia; siempre está puesta en el cartel de la puerta.' },
  'Wann macht das Amt am Montag auf?':
    { de: 'Um acht, aber erfahrungsgemäß steht ab halb acht schon eine Schlange.', es: 'A las ocho, pero por experiencia ya hay cola desde las siete y media.' },
  'Ist das Schwimmbad im Sommer länger offen?':
    { de: 'Ja, bis zweiundzwanzig Uhr, das ist bei der Hitze wirklich angenehm.', es: 'Sí, hasta las diez de la noche; con el calor se agradece.' },
  'Darf ich mir kurz deinen Kuli ausleihen?':
    { de: 'Natürlich, hier, aber bitte denk daran, ihn zurückzugeben.', es: 'Claro, toma; pero acuérdate de devolvérmelo.' },
  'Würdest du mich um sieben anrufen?':
    { de: 'Mache ich, ich stelle mir gleich einen Wecker im Handy.', es: 'Lo haré; me pongo ahora mismo una alarma en el móvil.' },
  'Sollen wir lieber morgen weitermachen?':
    { de: 'Ja, lass uns aufhören, wir sind beide schon ziemlich unkonzentriert.', es: 'Sí, dejémoslo; los dos estamos ya bastante desconcentrados.' },
  'Könnte ich bitte die Karte haben?':
    { de: 'Sofort, ich bringe Ihnen auch gleich die Getränkekarte mit.', es: 'Enseguida; le traigo también la carta de bebidas.' },
  'Für mich bitte das Gleiche.':
    { de: 'Also zweimal das Gulasch, kommt sofort, dauert ungefähr zehn Minuten.', es: 'Entonces dos goulash; enseguida, unos diez minutos.' },
  'Magst du eher süß oder salzig?':
    { de: 'Eindeutig salzig, Kuchen rühre ich fast nie an.', es: 'Salado sin duda; la tarta casi ni la toco.' },
  'Gibt es etwas, das du nicht magst?':
    { de: 'Leber kann ich überhaupt nicht, sonst esse ich wirklich alles.', es: 'El hígado no lo soporto; por lo demás como de todo.' },
  'Wie schmeckt dir die österreichische Küche?':
    { de: 'Ausgezeichnet, nur ist sie mir abends manchmal ein bisschen schwer.', es: 'Excelente; solo que por la noche a veces me resulta pesada.' },
  'Bist du Vegetarier?':
    { de: 'Nicht ganz, ich esse einfach nur sehr selten Fleisch.', es: 'No del todo; simplemente como carne muy pocas veces.' },
  'Möchten Sie ein Sackerl dazu?':
    { de: 'Nein danke, ich habe eine Stofftasche im Rucksack dabei.', es: 'No, gracias; llevo una bolsa de tela en la mochila.' },
  'Was kostet das Kilo?':
    { de: 'Drei Euro neunzig, heute sind sie besonders gut und reif.', es: 'Tres noventa; hoy están especialmente buenos y maduros.' },
  'Ist der Preis pro Person?':
    { de: 'Ja, pro Person und Nacht, das Frühstück ist schon dabei.', es: 'Sí, por persona y noche; el desayuno va incluido.' },
  'Geht das auch etwas günstiger?':
    { de: 'Leider nicht, die Preise sind bei uns überall gleich.', es: 'Por desgracia no; los precios son iguales en todas nuestras tiendas.' },
  'Regnet es draußen noch?':
    { de: 'Es tröpfelt nur noch, der Schirm bleibt aber besser dabei.', es: 'Ya solo chispea, pero mejor llévate el paraguas.' },
  'Wie warm ist es eigentlich?':
    { de: 'Etwa achtzehn Grad, im Schatten fühlt es sich kühler an.', es: 'Unos dieciocho grados; a la sombra parece más fresco.' },
  'Hast du den Wetterbericht gesehen?':
    { de: 'Ja, für morgen melden sie Regen und deutlich weniger Wind.', es: 'Sí, para mañana dan lluvia y bastante menos viento.' },
  'Ist es bei euch auch so windig?':
    { de: 'Furchtbar, heute Nacht hat der Wind die Mülltonnen umgeworfen.', es: 'Horrible; esta noche el viento tiró los contenedores.' },
  'Schneit es schon?':
    { de: 'Noch nicht, aber der Himmel sieht ganz danach aus.', es: 'Todavía no, pero el cielo tiene toda la pinta.' },
  'Welche Jahreszeit ist hier am schönsten?':
    { de: 'Für mich der Mai, dann blüht die ganze Stadt auf einmal.', es: 'Para mí mayo; entonces florece toda la ciudad de golpe.' },
  'Ist der Winter hier sehr hart?':
    { de: 'Nicht extrem, aber er dauert für meinen Geschmack viel zu lange.', es: 'Extremo no, pero para mi gusto dura demasiado.' },
  'Wird es im Sommer sehr heiß?':
    { de: 'In der Stadt schon, über dreißig Grad sind hier keine Seltenheit.', es: 'En la ciudad sí; pasar de treinta grados aquí no es raro.' },
  'Wann beginnt hier der Frühling?':
    { de: 'Meistens Ende März, aber richtig warm wird es erst im Mai.', es: 'Normalmente a finales de marzo, pero hasta mayo no calienta de verdad.' },
  'Fehlt dir das Meer im Sommer?':
    { de: 'Schrecklich, dafür fahre ich oft an die Alte Donau.', es: 'Muchísimo; por eso voy a menudo al Alte Donau.' },
  'Was machen wir, wenn es regnet?':
    { de: 'Dann gehen wir einfach ins Museum, das wollte ich sowieso schon lange.', es: 'Pues nos vamos al museo; llevaba tiempo queriendo ir.' },
  'Kannst du ein Instrument spielen?':
    { de: 'Früher Gitarre, aber ich habe seit Jahren nicht mehr geübt.', es: 'Antes la guitarra, pero hace años que no practico.' },
  'Hast du schon Pläne für den Sommer?':
    { de: 'Noch nichts Festes, wahrscheinlich fahre ich zwei Wochen nach Hause.', es: 'Nada fijo aún; seguramente me iré dos semanas a casa.' },
  'Bist du gut im Kochen?':
    { de: 'Ganz passabel, Paella kann ich wirklich, alles andere eher mittelmäßig.', es: 'Bastante decente; la paella la clavo, lo demás regular.' },
  'Würdest du gern einen Tanzkurs machen?':
    { de: 'Warum nicht, ich bewege mich nur leider wie ein Schrank.', es: '¿Por qué no? Lo malo es que me muevo como un armario.' },
  'In welchem Verein spielst du?':
    { de: 'Bei einem kleinen Klub im Zwanzigsten, wir spielen nur zum Spaß.', es: 'En un club pequeño del distrito veinte; jugamos solo por diversión.' },
  'Wie ist das Spiel am Sonntag ausgegangen?':
    { de: 'Unentschieden, eins zu eins, und das war absolut verdient.', es: 'Empate, uno a uno, y totalmente merecido.' },
  'Gehst du ins Fitnessstudio?':
    { de: 'Ich habe eine Karte, benutze sie aber viel zu selten.', es: 'Tengo abono, pero lo uso poquísimo.' },
  'Wie oft kochst du selbst?':
    { de: 'Fast jeden Abend, auswärts essen ist mir auf Dauer zu teuer.', es: 'Casi cada noche; comer fuera a la larga me sale caro.' },
  'Fährst du jeden Tag mit dem Rad?':
    { de: 'Bei gutem Wetter schon, im Winter nehme ich die Straßenbahn.', es: 'Si hace bueno sí; en invierno cojo el tranvía.' },
  'Gehst du oft ins Kino?':
    { de: 'Höchstens einmal im Monat, meistens am Montag, da ist es billiger.', es: 'Como mucho una vez al mes, casi siempre el lunes, que es más barato.' },
  'Wie häufig hast du Deutschkurs?':
    { de: 'Dreimal pro Woche, immer montags, mittwochs und freitags am Abend.', es: 'Tres veces por semana: lunes, miércoles y viernes por la tarde.' },
  'Das kann eigentlich nicht stimmen.':
    { de: 'Doch, ich habe es gestern selbst in der Zeitung gelesen.', es: 'Que sí; ayer lo leí yo mismo en el periódico.' },
  'Also da bin ich anderer Meinung.':
    { de: 'Kein Problem, darüber können wir gern in Ruhe diskutieren.', es: 'Sin problema; podemos discutirlo con calma.' },
  'Wie war es denn gestern auf der Feier?':
    { de: 'Richtig lustig, wir sind erst um drei Uhr nach Hause gekommen.', es: 'Muy divertida; no llegamos a casa hasta las tres.' },
  'Was ist danach passiert?':
    { de: 'Nichts Dramatisches, wir haben einfach nie wieder voneinander gehört.', es: 'Nada dramático: simplemente no volvimos a saber el uno del otro.' },
  'Erzähl mir mehr davon!':
    { de: 'Gern, aber dann brauchen wir noch einen zweiten Kaffee.', es: 'Encantado, pero entonces nos hace falta un segundo café.' },
  'Im Ernst? Das ist ja unglaublich.':
    { de: 'Doch, wirklich, ich habe es selbst kaum glauben können.', es: 'Que sí, de verdad; yo tampoco me lo creía.' },
  'Wie ist das denn passiert?':
    { de: 'Ganz banal, ich war einfach für eine Sekunde unaufmerksam.', es: 'De lo más tonto: me despisté un segundo.' },
  'Kennen Sie sich hier gut aus?':
    { de: 'Einigermaßen, ich arbeite seit zwei Jahren gleich um die Ecke.', es: 'Más o menos; llevo dos años trabajando aquí a la vuelta.' },
  'Haben Sie es weit nach Hause?':
    { de: 'Nicht besonders, zwei Stationen mit der U-Bahn und ich bin da.', es: 'No mucho: dos paradas de metro y ya estoy.' },
  'Schönes Wetter heute, nicht wahr?':
    { de: 'Wunderbar, nach diesem langen Winter tut das richtig gut.', es: 'Maravilloso; después de este invierno tan largo sienta de maravilla.' },
  'Können Sie mir die Richtung kurz zeigen?':
    { de: 'Sehen Sie die Kirche dort? Genau daran gehen Sie vorbei.', es: '¿Ve aquella iglesia? Pase justo por delante de ella.' },
  'Fährt die Straßenbahn bis zum Prater?':
    { de: 'Die Eins schon, aber du musst am Ring einmal umsteigen.', es: 'El uno sí, pero tienes que cambiar una vez en el Ring.' },
  'Brauche ich ein extra Ticket?':
    { de: 'Nein, innerhalb von Wien gilt dein Ticket für alle Linien.', es: 'No; dentro de Viena tu billete vale para todas las líneas.' },
  'Wie lange dauert es bis zum Flughafen?':
    { de: 'Mit dem Schnellzug sechzehn Minuten, mit der S-Bahn etwa fünfundzwanzig.', es: 'En el tren rápido dieciséis minutos; en cercanías unos veinticinco.' },
  'Von welchem Bahnsteig fährt der Zug?':
    { de: 'Von Gleis sieben, aber schau auf die Anzeige, das ändert sich.', es: 'De la vía siete, pero mira el panel, que eso cambia.' },
  'Gilt mein Ticket auch im Nachtbus?':
    { de: 'Ja, dieselbe Karte, du musst sie nur nicht neu entwerten.', es: 'Sí, el mismo billete; solo que no hay que volver a validarlo.' },
  'Muss ich den Sitzplatz reservieren?':
    { de: 'Nicht unbedingt, am Wochenende würde ich es aber empfehlen.', es: 'No necesariamente, pero el fin de semana lo recomendaría.' },
  'Ich glaube, ich bin falsch eingestiegen.':
    { de: 'Kein Problem, steig an der nächsten Station aus und fahr zurück.', es: 'No pasa nada; bájate en la próxima parada y vuelve.' },
  'Mein Ticket funktioniert nicht.':
    { de: 'Zeigen Sie mal her, vielleicht ist der Code einfach verkratzt.', es: 'A ver, enséñemelo; quizá el código esté rayado.' },
  'Der Automat hat mein Geld geschluckt.':
    { de: 'Notieren Sie die Nummer des Automaten, dann bekommen Sie es zurück.', es: 'Apunte el número de la máquina y se lo devuelven.' },
  'Ich habe mich total verlaufen.':
    { de: 'Sag mir, was du siehst, dann lotse ich dich zurück.', es: 'Dime qué ves y te guío de vuelta.' },
  'Wie viele Zimmer hat die Wohnung?':
    { de: 'Zwei Zimmer, Küche, Bad, insgesamt etwa fünfzig Quadratmeter.', es: 'Dos habitaciones, cocina y baño; en total unos cincuenta metros cuadrados.' },
  'Ist eine Küche schon eingebaut?':
    { de: 'Ja, sie bleibt drin, der Vormieter lässt sie gegen Ablöse da.', es: 'Sí, se queda; el inquilino anterior la deja a cambio de un traspaso.' },
  'Wie hoch sind die Betriebskosten?':
    { de: 'Ungefähr hundertzwanzig Euro im Monat, Heizung ist da schon dabei.', es: 'Unos ciento veinte euros al mes, calefacción incluida.' },
  'Gibt es einen Balkon?':
    { de: 'Keinen Balkon, aber einen kleinen Hof, den alle Mieter nutzen dürfen.', es: 'Balcón no, pero hay un patio pequeño para todos los inquilinos.' },
  'Wohnst du zur Miete oder im Eigentum?':
    { de: 'Zur Miete, kaufen kann sich hier kaum noch jemand leisten.', es: 'De alquiler; comprar aquí casi nadie se lo puede permitir.' },
  'Ist die Gegend ruhig?':
    { de: 'Nachts völlig, nur morgens hört man die Straßenbahn ganz leise.', es: 'De noche del todo; solo por la mañana se oye un poco el tranvía.' },
  'Wie weit ist die nächste U-Bahn?':
    { de: 'Fünf Minuten zu Fuß, das war für mich das wichtigste Kriterium.', es: 'Cinco minutos a pie; para mí ese fue el criterio principal.' },
  'Haben Sie den Tisch auch in Weiß?':
    { de: 'Momentan leider nicht, wir könnten ihn aber für Sie bestellen.', es: 'Ahora mismo no, pero se la podríamos encargar.' },
  'Passt das Regal in einen normalen Kofferraum?':
    { de: 'Zerlegt schon, der Karton ist knapp einen Meter achtzig lang.', es: 'Desmontada sí; la caja mide casi un metro ochenta.' },
  'Wie lange dauert die Lieferung?':
    { de: 'Etwa zehn Tage, bei Sonderfarben kann es etwas länger dauern.', es: 'Unos diez días; con colores especiales puede tardar algo más.' },
  'Wie findest du die neue Küche?':
    { de: 'Wirklich schön, nur die Farbe der Fronten gefällt mir nicht.', es: 'Muy bonita; solo el color de las puertas no me gusta.' },
  'Das Sofa ist nicht mein Geschmack.':
    { de: 'Verstehe ich, es ist tatsächlich ziemlich groß für den Raum.', es: 'Lo entiendo; la verdad es que es bastante grande para la sala.' },
  'Mir gefällt der Boden ausgesprochen gut.':
    { de: 'Mir auch, das Holz macht das ganze Zimmer sofort wärmer.', es: 'A mí también; la madera hace la habitación mucho más cálida.' },
  'Wir sind Ihre neuen Nachbarn von oben.':
    { de: 'Herzlich willkommen, wenn Sie etwas brauchen, klingeln Sie einfach.', es: 'Bienvenidos; si necesitan algo, llamen al timbre sin más.' },
  'Kann ich das auch online erledigen?':
    { de: 'Den Antrag ja, unterschreiben müssen Sie aber trotzdem persönlich hier.', es: 'La solicitud sí, pero firmar tiene que hacerlo aquí en persona.' },
  'Wird mir der Bescheid zugeschickt?':
    { de: 'Ja, per Post an die Adresse, die Sie hier angegeben haben.', es: 'Sí, por correo a la dirección que ha indicado aquí.' },
  'Darf man hier fotografieren?':
    { de: 'Im Vorraum ja, in den Büros ist es leider verboten.', es: 'En el vestíbulo sí; en las oficinas está prohibido.' },
  'Dürfen wir hier kurz stehen bleiben?':
    { de: 'Nur ganz kurz bitte, der Gang muss unbedingt frei bleiben.', es: 'Solo un momentito, por favor; el pasillo tiene que quedar libre.' },
  'Ist es erlaubt, das mitzunehmen?':
    { de: 'Selbstverständlich, die Broschüren liegen extra für die Kunden dort.', es: 'Por supuesto; los folletos están ahí justo para los clientes.' },
  'Darf ich mich hier kurz hinsetzen?':
    { de: 'Natürlich, der Platz ist frei, setzen Sie sich ruhig hin.', es: 'Claro, el sitio está libre; siéntese tranquilamente.' },
  'Wie beginne ich so ein Schreiben?':
    { de: 'Mit Sehr geehrte Damen und Herren, das passt eigentlich immer.', es: 'Con Sehr geehrte Damen und Herren; eso vale siempre.' },
  'Bis wann muss ich den Antrag einreichen?':
    { de: 'Spätestens bis Monatsende, danach gilt er erst für das Folgejahr.', es: 'Como muy tarde a final de mes; después ya vale para el año siguiente.' },
  'Ich bedanke mich für Ihre Geduld.':
    { de: 'Aber bitte, dafür sind wir schließlich da, einen schönen Tag noch.', es: 'Nada, para eso estamos; que tenga buen día.' },
  'Dann verbleiben wir so, danke schön.':
    { de: 'Gerne, ich schicke Ihnen die Bestätigung noch heute per Mail.', es: 'Con gusto; le mando la confirmación hoy mismo por correo.' },
  'Wo genau tut es weh?':
    { de: 'Hier unten links, besonders wenn ich mich nach vorne beuge.', es: 'Aquí abajo a la izquierda, sobre todo al inclinarme hacia delante.' },
  'Seit wann haben Sie die Beschwerden?':
    { de: 'Seit ungefähr einer Woche, angefangen hat es nach dem Umzug.', es: 'Desde hace una semana más o menos; empezó tras la mudanza.' },
  'Ist der Schmerz eher stechend oder dumpf?':
    { de: 'Eher dumpf, aber beim Aufstehen wird er kurz richtig stechend.', es: 'Más bien sordo, pero al levantarme se vuelve punzante un momento.' },
  'Melde dich, wenn du etwas brauchst.':
    { de: 'Danke, vielleicht kannst du morgen kurz einkaufen gehen für mich.', es: 'Gracias; quizá mañana me puedas hacer la compra.' },
  'Gute Besserung, ruh dich gut aus!':
    { de: 'Danke dir, ich bleibe heute wirklich den ganzen Tag liegen.', es: 'Gracias; hoy me quedo tumbado todo el día de verdad.' },
  'Wie geht es dir nach der Operation?':
    { de: 'Von Tag zu Tag besser, laufen darf ich aber noch nicht.', es: 'Mejor de día en día, pero andar todavía no puedo.' },
  'Das klingt gar nicht gut.':
    { de: 'Ist es auch nicht, aber ich bekomme morgen endlich einen Termin.', es: 'Y no lo es, pero mañana por fin me dan cita.' },
  'Pass auf, die Stufe ist sehr hoch!':
    { de: 'Danke für die Warnung, die hätte ich glatt übersehen.', es: 'Gracias por el aviso; se me habría pasado del todo.' },
  'Nehmen Sie die Tabletten bitte regelmäßig.':
    { de: 'Mache ich, morgens und abends, immer direkt nach dem Essen.', es: 'Lo haré: mañana y noche, siempre justo después de comer.' },
  'Heben Sie bitte nichts Schweres.':
    { de: 'Verstanden, ich lasse die Einkäufe von jemand anderem tragen.', es: 'Entendido; la compra que la lleve otro.' },
  'Wem muss ich die Krankmeldung schicken?':
    { de: 'An die Personalabteilung, eine Kopie geht an Ihre direkte Vorgesetzte.', es: 'A recursos humanos; una copia va a su jefa directa.' },
  'Kann ich das umtauschen?':
    { de: 'Innerhalb von vierzehn Tagen gern, bringen Sie nur den Kassenbon mit.', es: 'Dentro de catorce días sin problema; traiga solo el tique.' },
  'Fällt die Größe eher klein aus?':
    { de: 'Bei dieser Marke ja, nehmen Sie lieber gleich eine Nummer größer.', es: 'En esta marca sí; coja mejor una talla más.' },
  'Ist auf das Teil noch Garantie?':
    { de: 'Zwei Jahre, aber nur bei einem echten Materialfehler, nicht bei Verschleiß.', es: 'Dos años, pero solo por defecto de fabricación, no por desgaste.' },
  'Welches gefällt dir besser?':
    { de: 'Das linke eindeutig, es ist schlichter und passt zu allem.', es: 'El de la izquierda sin duda: es más sobrio y pega con todo.' },
  'Wohin fährst du dieses Jahr?':
    { de: 'Wahrscheinlich nach Kroatien, das ist von Wien aus schnell erreichbar.', es: 'Seguramente a Croacia; desde Viena se llega rápido.' },
  'Warst du schon einmal in Tirol?':
    { de: 'Nur im Winter, im Sommer soll es dort noch schöner sein.', es: 'Solo en invierno; dicen que en verano es aún más bonito.' },
  'Lohnt sich die Reise wirklich?':
    { de: 'Absolut, ich würde jederzeit wieder genau dorthin fahren.', es: 'Totalmente; volvería allí cuando fuera.' },
  'Wie lernst du am effektivsten?':
    { de: 'Jeden Tag zwanzig Minuten, das bringt mehr als drei Stunden sonntags.', es: 'Veinte minutos al día: rinde más que tres horas el domingo.' },
  'Was hilft dir beim Vokabelnlernen?':
    { de: 'Karteikarten am Handy und Wörter sofort in eigenen Sätzen benutzen.', es: 'Tarjetas en el móvil y usar las palabras enseguida en frases propias.' },
  'Könntest du mir beim Brief helfen?':
    { de: 'Sehr gern, schick sie mir und ich schaue sie heute Abend durch.', es: 'Encantado; mándamela y esta noche le echo un vistazo.' },
  'Würdest du das kurz gegenlesen?':
    { de: 'Natürlich, zwei Augenpaare finden am Ende immer mehr Fehler als eines.', es: 'Claro; cuatro ojos siempre encuentran más fallos que dos.' },
  'Kannst du mich morgen daran erinnern?':
    { de: 'Mache ich, ich schreibe es mir sofort in den Kalender.', es: 'Lo haré; me lo apunto ahora mismo en el calendario.' },
  'Hättest du kurz Zeit für mich?':
    { de: 'Jetzt gerade nicht, aber in einer halben Stunde sehr gern.', es: 'Ahora mismo no, pero dentro de media hora encantado.' },
  'Hoffentlich klappt alles wie geplant.':
    { de: 'Das wird schon, ihr habt wirklich an alles gedacht.', es: 'Saldrá bien; habéis pensado de verdad en todo.' },
  'Ich gebe mein Bestes, versprochen.':
    { de: 'Mehr kann niemand verlangen, ich drücke dir die Daumen.', es: 'Nadie puede pedir más; te cruzo los dedos.' },
  'Wir würden uns sehr freuen, wenn du kommst.':
    { de: 'Ich komme auf jeden Fall, sag mir nur, was ich mitbringen soll.', es: 'Voy seguro; dime solo qué llevo.' },
  'Das Kleid steht dir ausgezeichnet.':
    { de: 'Danke, ich war mir überhaupt nicht sicher damit.', es: 'Gracias; no estaba nada segura con él.' },
  'Entschuldige, dass ich mich nicht gemeldet habe.':
    { de: 'Kein Problem, ich weiß doch, wie viel du gerade zu tun hast.', es: 'No pasa nada; ya sé lo liado que estás.' },
  'Machen wir uns für Freitag etwas aus?':
    { de: 'Sehr gern, ich schreibe dir am Mittwoch wegen der Uhrzeit.', es: 'Encantado; el miércoles te escribo por lo de la hora.' },
  'Passt es dir, wenn wir es so ausmachen?':
    { de: 'Ja, so machen wir es, ich trage es gleich ein.', es: 'Sí, lo dejamos así; lo apunto ahora mismo.' },
  'Wir haben uns für halb acht ausgemacht.':
    { de: 'Gut, dann bin ich fünf Minuten vorher schon dort.', es: 'Bien; estaré allí cinco minutos antes.' },
  'Feiert ihr Geburtstage immer so groß?':
    { de: 'Nur die runden, sonst gehen wir einfach nett essen.', es: 'Solo los redondos; si no, salimos a cenar y ya.' },
  'Wie hast du dich in der ersten Woche gefühlt?':
    { de: 'Ziemlich verloren, alles war laut, fremd und viel zu schnell.', es: 'Bastante perdido: todo era ruidoso, ajeno y demasiado rápido.' },
  'Hattest du Heimweh?':
    { de: 'Am Anfang sehr, besonders sonntags, wenn die Stadt so leer war.', es: 'Al principio mucho, sobre todo los domingos, con la ciudad tan vacía.' },
  'Wann hast du dich hier zu Hause gefühlt?':
    { de: 'Als ich zum ersten Mal einen Witz auf Deutsch verstanden habe.', es: 'Cuando entendí por primera vez un chiste en alemán.' },
  'Wo siehst du dich in fünf Jahren?':
    { de: 'Hoffentlich noch hier, mit besserem Deutsch und einer festen Stelle.', es: 'Con suerte todavía aquí, con mejor alemán y un puesto fijo.' },
  'Was ist dein nächstes großes Ziel?':
    { de: 'Der Führerschein, ohne Auto komme ich aufs Land kaum hin.', es: 'El carné; sin coche apenas llego al campo.' },
  'Wie lange hat der ganze Prozess gedauert?':
    { de: 'Fast ein Jahr, allein auf den Termin habe ich Monate gewartet.', es: 'Casi un año; solo por la cita esperé meses.' },
  'Was hast du vorher gemacht?':
    { de: 'In Spanien habe ich fünf Jahre in einem Architekturbüro gearbeitet.', es: 'En España trabajé cinco años en un estudio de arquitectura.' },
  'Hat sich der Aufwand gelohnt?':
    { de: 'Auf jeden Fall, heute würde ich alles genauso wieder machen.', es: 'Desde luego; hoy lo volvería a hacer todo igual.' },
  'Wann hast du dich entschieden?':
    { de: 'Nach einem sehr schlechten Winter, da war mir plötzlich alles klar.', es: 'Tras un invierno muy malo; de golpe lo vi clarísimo.' },
  'Das muss hart gewesen sein.':
    { de: 'War es auch, zum Glück hatte ich ein paar gute Freunde.', es: 'Lo fue; por suerte tenía un par de buenos amigos.' },
  'Erzähl doch mal, wie es weiterging.':
    { de: 'Ganz unerwartet gut, plötzlich kam ein Anruf mit einem Jobangebot.', es: 'Inesperadamente bien: de repente llamaron con una oferta de trabajo.' },
  'Ich wünschte, ich hätte früher angefangen.':
    { de: 'Das denkt am Anfang jeder, wichtig ist nur, dass du angefangen hast.', es: 'Eso lo piensa todo el mundo; lo importante es que empezaste.' },
  'Am liebsten würde ich ein Jahr Pause machen.':
    { de: 'Verständlich, aber danach fällt der Wiedereinstieg oft ziemlich schwer.', es: 'Es comprensible, pero luego volver suele costar bastante.' },
  'Haben Sie einen Tisch für vier Personen?':
    { de: 'Um acht wird einer frei, davor ist leider alles besetzt.', es: 'A las ocho queda una libre; antes está todo ocupado.' },
  'Können wir draußen sitzen?':
    { de: 'Gern, es sind aber nur noch zwei Tische im Schatten frei.', es: 'Claro, aunque solo quedan dos mesas a la sombra.' },
  'Können Sie das ohne Zwiebeln machen?':
    { de: 'Ich frage in der Küche nach, normalerweise ist das kein Problem.', es: 'Pregunto en la cocina; normalmente no hay problema.' },
  'Könnten wir bitte zahlen?':
    { de: 'Sofort, zusammen oder getrennt, und bar oder mit Karte?', es: 'Enseguida: ¿junto o separado, y en efectivo o con tarjeta?' },
  'Kommt ihr am Sonntag zum Essen?':
    { de: 'Sehr gern, soll ich einen Nachtisch mitbringen oder passt das so?', es: 'Encantados; ¿llevo postre o lo tenéis cubierto?' },
  'Bring ruhig deine Mitbewohnerin mit.':
    { de: 'Danke, ich frage sie heute Abend, ob sie Zeit hat.', es: 'Gracias; esta noche le pregunto si tiene tiempo.' },
  'Zieht ihr drinnen die Schuhe aus?':
    { de: 'Bei uns schon, aber wenn du willst, bleib ruhig angezogen.', es: 'En nuestra casa sí, pero si quieres déjatelos puestos.' },
  'Wir haben leider nur wenig Platz.':
    { de: 'Macht nichts, eng zusammen sitzen ist sowieso viel gemütlicher.', es: 'No importa; apretaditos se está mucho más a gusto.' },
  'Hättet ihr Lust auf einen Grillabend?':
    { de: 'Auf jeden Fall, sag uns nur, was wir beisteuern sollen.', es: 'Desde luego; dinos solo con qué contribuimos.' },
  'Kommt doch nächstes Wochenende zu uns.':
    { de: 'Sehr gerne, wir freuen uns schon, es ist lange her.', es: 'Encantados; nos hace ilusión, hace mucho que no nos vemos.' },
  'Seit wann läufst du regelmäßig?':
    { de: 'Seit zwei Jahren, angefangen habe ich mit fünf Minuten täglich.', es: 'Desde hace dos años; empecé con cinco minutos al día.' },
  'Was machst du gegen den inneren Schweinehund?':
    { de: 'Ich lege die Laufschuhe abends neben das Bett, das hilft erstaunlich.', es: 'Dejo las zapatillas por la noche junto a la cama; ayuda una barbaridad.' },
  'Tut dir nach dem Training oft etwas weh?':
    { de: 'Nur wenn ich mich vorher nicht ordentlich aufgewärmt habe.', es: 'Solo si antes no he calentado como es debido.' },
  'Läufst du lieber morgens oder abends?':
    { de: 'Morgens eindeutig, abends finde ich immer eine Ausrede.', es: 'Por la mañana sin duda; por la tarde siempre encuentro una excusa.' },
  'Wie oft trainierst du in der Woche?':
    { de: 'Dreimal, mehr schaffe ich neben Arbeit und Kurs einfach nicht.', es: 'Tres veces; con el trabajo y el curso no doy para más.' },
  'Das war die beste Entscheidung seit Langem.':
    { de: 'Sehe ich genauso, und das hätte ich vorher nie gedacht.', es: 'Opino igual, y antes nunca lo habría pensado.' },
  'Der Kurs hat sich wirklich gelohnt.':
    { de: 'Absolut, ich habe in acht Wochen mehr gelernt als vorher.', es: 'Totalmente; en ocho semanas he aprendido más que antes.' },
  'Wie wäre es, wenn wir zusammen trainieren?':
    { de: 'Sehr gute Idee, zu zweit fällt das Aufstehen deutlich leichter.', es: 'Muy buena idea; entre dos cuesta mucho menos levantarse.' },
  'Ich schlage vor, wir treffen uns im Park.':
    { de: 'Perfekt, dort gibt es auch Geräte und genug Platz.', es: 'Perfecto; allí hay aparatos y sitio de sobra.' },
  'Sollen wir es einfach mal ausprobieren?':
    { de: 'Warum nicht, viel falsch machen können wir dabei nicht.', es: '¿Por qué no? Tampoco podemos meter mucho la pata.' },
  'Wollen wir statt Kino lieber schwimmen gehen?':
    { de: 'Noch besser, das Hallenbad hat heute bis zehn offen.', es: 'Aún mejor; la piscina cubierta abre hoy hasta las diez.' },
  'Dafür fehlt mir gerade die Energie.':
    { de: 'Kein Problem, machen wir es einfach nächste Woche noch einmal aus.', es: 'Sin problema; lo volvemos a quedar la semana que viene.',
      mas: [
        { de: 'Dann sag mir einfach Bescheid, wenn es wieder passt.', es: 'Pues avísame cuando te venga bien.' },
        { de: 'Mache ich. Danke, dass du nicht drängst.', es: 'Lo haré. Gracias por no insistir.' }
      ] },
  'Warum möchten Sie gerade bei uns arbeiten?':
    { de: 'Weil Ihr Team international ist und ich genau dort hineinpassen würde.', es: 'Porque su equipo es internacional y ahí encajaría bien.' },
  'Welche Erfahrung bringen Sie mit?':
    { de: 'Fünf Jahre im Kundenkontakt, davon zwei in einem ähnlichen Bereich.', es: 'Cinco años de trato con clientes, dos de ellos en un sector parecido.' },
  'Was sind Ihre größten Schwächen?':
    { de: 'Ich nehme mir oft zu viel vor und arbeite dann zu lange.', es: 'Me propongo demasiadas cosas y luego trabajo hasta tarde.' },
  'Wann könnten Sie anfangen?':
    { de: 'Frühestens in vier Wochen, meine Kündigungsfrist läuft bis Monatsende.', es: 'Como pronto en cuatro semanas; mi preaviso llega a final de mes.' },
  'Haben Sie noch Fragen an uns?':
    { de: 'Ja, wie sieht ein ganz normaler Arbeitstag in diesem Team aus?', es: 'Sí: ¿cómo es un día de trabajo normal en este equipo?' },
  'Sprechen Sie bitte etwas lauter?':
    { de: 'Natürlich, hier hinten hört man wirklich schlecht, das stimmt.', es: 'Claro; aquí al fondo se oye fatal, es verdad.' },
  'Das ist Frau Wolf, unsere Abteilungsleiterin.':
    { de: 'Sehr angenehm, ich habe schon viel Gutes über Sie gehört.', es: 'Mucho gusto; he oído hablar muy bien de usted.' },
  'Wie läuft es bei meinem Sohn im Unterricht?':
    { de: 'Gut, er ist aufmerksam, nur beim Schreiben braucht er mehr Übung.', es: 'Bien; está atento, solo le falta práctica al escribir.' },
  'Wann sind die nächsten Schularbeiten?':
    { de: 'In der letzten Novemberwoche, die Termine stehen im Mitteilungsheft.', es: 'La última semana de noviembre; las fechas están en la agenda escolar.' },
  'Braucht sie zusätzliche Unterstützung?':
    { de: 'Eine Lernhilfe wäre sinnvoll, wir haben hier ein kostenloses Angebot.', es: 'Un refuerzo tendría sentido; aquí hay una oferta gratuita.' },
  'Wie viele Stunden hat er am Freitag?':
    { de: 'Sechs, danach kann er direkt in den Hort gehen.', es: 'Seis; después puede ir directo al centro de tarde.' },
  'Gibt es dieses Jahr einen Ausflug?':
    { de: 'Im Mai, drei Tage, die Informationen kommen nächste Woche nach Hause.', es: 'En mayo, tres días; la información llega a casa la semana que viene.' },
  'Können wir einen Termin vereinbaren?':
    { de: 'Gern, am Dienstag habe ich zwischen zwei und vier Zeit.', es: 'Claro; el martes tengo tiempo entre las dos y las cuatro.' },
  'Mein Sohn hat gestern gefehlt.':
    { de: 'Danke für die Info, dann entschuldige ich ihn im System.', es: 'Gracias por avisar; lo justifico en el sistema.' },
  'Er tut sich mit den Artikeln sehr schwer.':
    { de: 'Das geht fast allen so, wir üben das gerade täglich.', es: 'Les pasa a casi todos; ahora lo practicamos a diario.' },
  'Was können wir zu Hause üben?':
    { de: 'Am besten laut lesen, jeden Tag zehn Minuten reichen völlig.', es: 'Lo mejor, leer en voz alta; diez minutos al día bastan.' },
  'Ich kann es Ihnen auch zeigen.':
    { de: 'Ja bitte, sehen hilft mir mehr als jede Erklärung.', es: 'Sí, por favor; ver me ayuda más que cualquier explicación.' },
  'Dann hätten wir alles besprochen.':
    { de: 'Ja, vielen Dank für Ihre Zeit und den guten Austausch.', es: 'Sí; muchas gracias por su tiempo y por el buen intercambio.' },
  'Wie stehst du zu dem Thema?':
    { de: 'Ich halte das für übertrieben, aber ich verstehe beide Seiten.', es: 'Me parece exagerado, aunque entiendo a las dos partes.' },
  'Was sagen deine Kollegen dazu?':
    { de: 'Die meisten meinen, es ändert sich ohnehin nichts daran.', es: 'La mayoría cree que de todos modos no va a cambiar nada.' },
  'Sie behauptet, das sei längst entschieden.':
    { de: 'Davon habe ich nichts gehört, das müsste in der Mail stehen.', es: 'No he oído nada de eso; debería estar en el correo.' },
  'Meiner Meinung nach ist das der falsche Weg.':
    { de: 'Da stimme ich dir zu, es geht viel zu schnell.', es: 'En eso te doy la razón: va demasiado rápido.' },
  'Ich kümmere mich morgen darum, versprochen.':
    { de: 'Danke, dann kann ich es endlich von meiner Liste streichen.', es: 'Gracias; así por fin lo tacho de mi lista.' },
  'Verlass dich drauf, das vergesse ich nicht.':
    { de: 'Gut, ich erinnere dich sicherheitshalber am Vormittag noch einmal.', es: 'Bien; por si acaso te lo recuerdo por la mañana.' },
  'Ich stehe dir jederzeit zur Verfügung.':
    { de: 'Das weiß ich wirklich zu schätzen, danke für das Angebot.', es: 'Te lo agradezco de verdad; gracias por el ofrecimiento.' },
  'Kannst du am Samstag mit anpacken?':
    { de: 'Klar, ich habe den ganzen Vormittag Zeit, ab acht bin ich da.', es: 'Claro; tengo toda la mañana libre, a partir de las ocho estoy allí.' },
  'Nimmst du bitte das andere Ende?':
    { de: 'Warte kurz, ich stelle mich erst richtig hin, dann heben wir.', es: 'Espera; me coloco bien y entonces levantamos.' },
  'Wohin stellen wir das Regal am besten?':
    { de: 'An die kurze Wand, dann bleibt der Weg zum Fenster frei.', es: 'En la pared corta; así queda libre el paso a la ventana.' },
  'Passt das Bett überhaupt an diese Wand?':
    { de: 'Knapp, wir müssten aber die Tür noch ganz öffnen können.', es: 'Justo, pero tendríamos que poder abrir la puerta del todo.' },
  'Soll der Schreibtisch ans Fenster?':
    { de: 'Unbedingt, mit Tageslicht arbeitet es sich einfach viel angenehmer.', es: 'Sin duda; con luz natural se trabaja mucho mejor.' },
  'Wie wollen wir die Küche einräumen?':
    { de: 'Geschirr nach oben, Töpfe nach unten, das ist am praktischsten.', es: 'La vajilla arriba y las ollas abajo: es lo más práctico.' },
  'Sollen wir zuerst die schweren Sachen tragen?':
    { de: 'Gute Idee, solange wir noch Kraft haben, ist das klüger.', es: 'Buena idea; mientras tengamos fuerzas es más listo.' },
  'Das Wichtigste ist, dass nichts kaputtgeht.':
    { de: 'Sehe ich genauso, lieber langsamer und dafür ohne Schaden.', es: 'Opino igual: mejor más lento pero sin daños.' },
  'Wann geht der letzte Zug zurück?':
    { de: 'Um dreiundzwanzig Uhr zehn, danach fährt nur noch der Nachtbus.', es: 'A las veintitrés diez; después solo queda el autobús nocturno.' },
  'Fährt heute etwas anders als sonst?':
    { de: 'Ja, wegen Bauarbeiten endet die Linie eine Station früher.', es: 'Sí; por obras la línea termina una parada antes.' },
  'Wie oft fährt die Bahn am Abend?':
    { de: 'Ab acht nur noch stündlich, das steht unten auf dem Plan.', es: 'A partir de las ocho solo cada hora; lo pone abajo en el horario.' },
  'Muss ich für diese Strecke umsteigen?':
    { de: 'Nur einmal, in Sankt Pölten, und der Anschluss wartet normalerweise.', es: 'Solo una vez, en Sankt Pölten, y el enlace suele esperar.' },
  'Ist der Weg ausgeschildert?':
    { de: 'Ab dem Marktplatz schon, davor müssen Sie einmal jemanden fragen.', es: 'A partir de la plaza sí; antes tendrá que preguntar una vez.' },
  'Soll ich Sie ein Stück begleiten?':
    { de: 'Das wäre sehr nett, allein finde ich bestimmt wieder nicht hin.', es: 'Sería muy amable; solo seguro que me vuelvo a perder.' },
  'Wären Sie so freundlich, mir zu helfen?':
    { de: 'Aber natürlich, sagen Sie mir einfach, wo ich anpacken soll.', es: 'Pues claro; dígame dónde tengo que ayudar.' },
  'Dürfte ich Sie kurz stören?':
    { de: 'Sie stören überhaupt nicht, was kann ich für Sie tun?', es: 'No molesta en absoluto; ¿qué puedo hacer por usted?' },
  'Könnten Sie das bitte kurz halten?':
    { de: 'Gern, geben Sie es mir, ich habe beide Hände frei.', es: 'Con gusto; démelo, tengo las dos manos libres.' },
  'Darf ich mich zu Ihnen setzen?':
    { de: 'Natürlich, es ist ohnehin gemütlicher als allein am Tisch.', es: 'Claro; de todos modos se está mejor que solo en la mesa.' },


  'Guten Tag, Herr Müller!':
    { de: 'Guten Tag, Frau Schmidt!', es: '¡Buenas tardes, señora Schmidt!' },
  'Hallo zusammen!':
    { de: 'Hallo! Schön dich zu sehen.', es: '¡Hola! Qué bien verte.' },
  'Grüß dich, Anna!':
    { de: 'Hallo Peter, wie geht\'s?', es: 'Hola Peter, ¿qué tal?' },
  'Guten Abend allerseits!':
    { de: 'Guten Abend! Kommen Sie rein.', es: '¡Buenas noches! Pasen.' },
  'Hi, wie läuft\'s?':
    { de: 'Ganz gut, danke!', es: 'Bastante bien, gracias.' },
  'Schön, dich wiederzusehen!':
    { de: 'Gleichfalls, freut mich auch!', es: '¡Igualmente, a mí también!' },
  'Bis morgen!':
    { de: 'Bis morgen, schlaf gut!', es: '¡Hasta mañana, duerme bien!' },
  'Bis später!':
    { de: 'Ja, bis nachher!', es: '¡Sí, hasta luego!' },
  'Mach\'s gut!':
    { de: 'Du auch, mach\'s gut!', es: '¡Tú también, cuídate!' },
  'Schönen Sonntag noch!':
    { de: 'Danke, dir auch!', es: '¡Gracias, a ti también!' },
  'Gute Nacht!':
    { de: 'Gute Nacht, träum was Schönes!', es: '¡Buenas noches, dulces sueños!' },
  'Wer bist du?':
    { de: 'Ich bin Marco aus Italien.', es: 'Soy Marco, de Italia.' },
  'Wie heißen Sie mit Nachnamen?':
    { de: 'Ich heiße Bauer mit Nachnamen.', es: 'Me apellido Bauer.' },
  'Wie ist dein Familienname?':
    { de: 'Mein Familienname ist Santos.', es: 'Mi apellido es Santos.' },
  'Freut mich, ich bin David.':
    { de: 'Freut mich auch, David! Ich bin Lisa.', es: '¡Mucho gusto también, David! Soy Lisa.' },
  'Hallo, mein Vorname ist Clara.':
    { de: 'Hallo Clara, schön dich kennenzulernen.', es: 'Hola Clara, encantado de conocerte.' },
  'Kommst du aus Deutschland?':
    { de: 'Nein, ich komme aus Österreich.', es: 'No, vengo de Austria.' },
  'Sind Sie aus der Schweiz?':
    { de: 'Ja, genau, ich komme aus Zürich.', es: 'Sí, exacto, soy de Zúrich.' },
  'Haben Sie eine Handynummer?':
    { de: 'Ja, meine Nummer ist 0176 555 432.', es: 'Sí, mi número es 0176 555 432.' },
  'Wie lautet Ihre Postleitzahl?':
    { de: 'Meine Postleitzahl ist 1010 Wien.', es: 'Mi código postal es 1010 Viena.' },
  'Schreibt man deinen Namen mit K oder mit C?':
    { de: 'Mit K, wie Klaus.', es: 'Con K, como Klaus.' },
  'Buchstabieren Sie bitte Ihren Nachnamen.':
    { de: 'M-Ü-L-L-E-R, mit Umlaut.', es: 'M-Ü-L-L-E-R, con diéresis.' },
  'Ist das ein langes oder ein kurzes i?':
    { de: 'Ein langes i, geschrieben mit ie.', es: 'Una i larga, escrita con ie.' },
  'Schreibt man das groß oder klein?':
    { de: 'Das schreibt man groß, weil es ein Nomen ist.', es: 'Se escribe con mayúscula porque es un sustantivo.' },
  'Kein Problem, schon gut!':
    { de: 'Danke für dein Verständnis.', es: 'Gracias por tu comprensión.' },
  'Darf ich Ihnen meine Kollegin vorstellen?':
    { de: 'Ja, gern. Guten Tag, freut mich!', es: 'Sí, claro. Buenos días, ¡encantado!' },
  'Mach\'s gut, wir hören uns!':
    { de: 'Du auch, bis bald!', es: 'Tú también, ¡hasta pronto!' },
  'Gibt es dafür ein deutsches Wort?':
    { de: 'Ja, das heißt „Feierabend“.', es: 'Sí, se dice «Feierabend».' },
  'Wie gefällt dir deine Wohngegend?':
    { de: 'Sehr gut, es ist ruhig und alles ist in der Nähe.', es: 'Muy bien, es tranquilo y lo tengo todo cerca.' },
  'Wie viele Kinder habt ihr?':
    { de: 'Zwei, einen Buben und ein Mädchen.', es: 'Dos, un niño y una niña.' },
  'Wie lange dauert der Termin ungefähr?':
    { de: 'Ungefähr eine halbe Stunde.', es: 'Media hora más o menos.' },
  'Ist das Brot von heute?':
    { de: 'Ja, frisch aus dem Ofen.', es: 'Sí, recién salido del horno.' },
  'Hast du am Wochenende schon was vor?':
    { de: 'Noch nicht viel, vielleicht ins Kino.', es: 'Todavía no mucho, quizá al cine.' },
  'Gilt das Ticket auch für die Straßenbahn?':
    { de: 'Ja, für alle Öffis in der Zone hundert.', es: 'Sí, para todo el transporte de la zona cien.' },
  'Gibt es das auch in einer anderen Farbe?':
    { de: 'In Grau und in Weiß, ja.', es: 'En gris y en blanco, sí.' },
  'Und was hast du dann gemacht?':
    { de: 'Ich habe erst mal mit meiner Schwester geredet.', es: 'Primero hablé con mi hermana.' },
  'Entschuldige, ich habe mich versprochen.':
    { de: 'Kein Problem, sag es noch mal.', es: 'No pasa nada, dilo otra vez.' },
  'Das muss schwer für dich gewesen sein.':
    { de: 'Ja, das war es. Aber jetzt geht es besser.', es: 'Sí, lo fue. Pero ahora va mejor.' },
  'Kann ich etwas zum Essen beisteuern?':
    { de: 'Wenn du magst, bring einen Salat mit.', es: 'Si quieres, trae una ensalada.',
      mas: [
        { de: 'Gern, ich mache einen mit Tomate und Zwiebel.', es: 'Vale, hago una de tomate y cebolla.' },
        { de: 'Klingt gut. Dann brauche ich nur noch das Brot.', es: 'Suena bien. Entonces solo me falta el pan.' }
      ] },
  'Da bin ich auf jeden Fall dabei!':
    { de: 'Super, dann rechne ich mit dir.', es: 'Genial, entonces cuento contigo.',
      mas: [
        { de: 'Soll ich noch jemanden mitbringen?', es: '¿Llevo a alguien más?' },
        { de: 'Wenn du magst. Platz ist genug da.', es: 'Si quieres. Sitio hay de sobra.' }
      ] },
  'Das Essen hat wirklich gut geschmeckt.':
    { de: 'Das freut mich! Möchten Sie noch einen Kaffee?', es: '¡Me alegro! ¿Quiere un café?' },
  'Das hätte ich nie gedacht!':
    { de: 'Ich auch nicht, ehrlich gesagt.', es: 'Yo tampoco, la verdad.',
      mas: [
        { de: 'Woher weißt du das überhaupt?', es: '¿Y tú cómo lo sabes?' },
        { de: 'Meine Nachbarin hat es mir erzählt. Sie arbeitet dort.', es: 'Me lo contó mi vecina. Trabaja allí.' }
      ] },
  'Gehst du lieber laufen oder ins Fitnessstudio?':
    { de: 'Im Sommer laufen, im Winter ins Studio.', es: 'En verano correr, en invierno al gimnasio.',
      mas: [
        { de: 'Und wie oft schaffst du das?', es: '¿Y cuántas veces lo consigues?' },
        { de: 'Zweimal die Woche. Mehr geht mit der Arbeit nicht.', es: 'Dos veces por semana. Más no me da con el trabajo.' }
      ] },
  'Willkommen im Team! Ich bin Álvaro.':
    { de: 'Danke! Ich freue mich auf die Arbeit hier.', es: '¡Gracias! Tengo ganas de empezar aquí.',
      mas: [
        { de: 'Wo sitzt du denn?', es: '¿Dónde te sientas?' },
        { de: 'Ganz hinten am Fenster. Komm vorbei, wenn du etwas brauchst.', es: 'Al fondo, junto a la ventana. Pásate si necesitas algo.' }
      ] },
  'Entschuldigung, da bin ich nicht mitgekommen.':
    { de: 'Kein Problem, ich erkläre es noch einmal.', es: 'No pasa nada, lo explico otra vez.',
      mas: [
        { de: 'Vor allem den Teil mit den Terminen.', es: 'Sobre todo la parte de los plazos.' },
        { de: 'Verstehe. Ich male es kurz auf, dann ist es klarer.', es: 'Entiendo. Se lo dibujo y queda más claro.' }
      ] },
  'Was heißt das für meine Arbeit?':
    { de: 'Sie machen ab Montag die Frühschicht.', es: 'A partir del lunes hace el turno de mañana.',
      mas: [
        { de: 'Ab wann genau? Ich muss das zu Hause absprechen.', es: '¿Desde cuándo exactamente? Lo tengo que hablar en casa.' },
        { de: 'Ab dem Ersten. Bis dahin haben Sie Zeit.', es: 'Desde el día uno. Hasta entonces tiene tiempo.' }
      ] },
  'Könnten Sie den letzten Punkt noch einmal sagen?':
    { de: 'Natürlich. Die Pause ist von zwölf bis halb eins.', es: 'Claro. La pausa es de doce a doce y media.' },
  'Sprechen Sie bitte etwas langsamer mit mir.':
    { de: 'Natürlich, entschuldigen Sie.', es: 'Claro, perdone.' },
  'Wir üben zu Hause jeden Tag ein bisschen.':
    { de: 'Das ist genau richtig. Zehn Minuten reichen schon.', es: 'Eso está muy bien. Con diez minutos basta.' },
  'Ich brauche manchmal etwas länger zum Verstehen.':
    { de: 'Das ist ganz normal. Fragen Sie ruhig nach.', es: 'Es totalmente normal. Pregunte sin problema.' },
  'Ist das so richtig, wie ich es sage?':
    { de: 'Fast. Man sagt „auf der Schule“ nicht, sondern „in der Schule“.', es: 'Casi. No se dice «auf der Schule», sino «in der Schule».' },
  'Könnten Sie mir kurz weiterhelfen?':
    { de: 'Gern, worum geht es denn?', es: 'Con mucho gusto, ¿de qué se trata?' },
  'Kein Problem, ich helfe Ihnen gern.':
    { de: 'Das ist wirklich nett von Ihnen.', es: 'Es muy amable de su parte.',
      mas: [
        { de: 'Darf ich Ihnen einen Kaffee ausgeben?', es: '¿Le puedo invitar a un café?' },
        { de: 'Das ist lieb, aber nicht nötig. Wirklich gern geschehen.', es: 'Muy amable, pero no hace falta. De verdad, un placer.' }
      ] },
  'Ich halte mein Wort, das schwöre ich dir.':
    { de: 'Dann bin ich beruhigt.', es: 'Entonces me quedo tranquilo.',
      mas: [
        { de: 'Ich schreibe es mir sogar auf.', es: 'Hasta me lo apunto.' },
        { de: 'Dann glaube ich es dir wirklich.', es: 'Entonces sí te creo.' }
      ] },

  // ---- a11-l1 · sich vorstellen -------------------------------------
  'Guten Tag, ich bin Álvaro Pascual.':
    { de: 'Guten Tag, Herr Pascual. Freut mich sehr. Ich bin Frau Berger und arbeite hier im Büro.', es: 'Buenos días, señor Pascual. Encantada. Soy la señora Berger y trabajo aquí en la oficina.',
      mas: [
        { de: 'Freut mich, Sie kennenzulernen.', es: 'Encantado de conocerle.' },
        { de: 'Ganz meinerseits. Ich habe schon viel von Ihnen gehört.', es: 'Igualmente. Ya he oído hablar mucho de usted.' },
        { de: 'Das ist mein Kollege, Herr Öztürk.', es: 'Este es mi compañero, el señor Öztürk.' },
        { de: 'Guten Tag, Herr Öztürk. Freut mich. Arbeiten Sie auch schon lange hier?', es: 'Buenos días, señor Öztürk. Encantado. ¿Usted también lleva mucho tiempo trabajando aquí?' },
        { de: 'Sagen Sie ruhig du zu mir.', es: 'Puede tutearme tranquilamente.' },
        { de: 'Gern, dann sind wir per du. Ich bin die Martina.', es: 'Con mucho gusto, entonces nos tuteamos. Yo soy Martina.' }
      ] },
  'Kennen wir uns schon?':
    { de: 'Ich glaube, wir kennen uns vom Deutschkurs. Du saßt immer hinten links.', es: 'Creo que nos conocemos del curso de alemán. Te sentabas siempre atrás a la izquierda.',
      mas: [
        { de: 'Sind wir per du?', es: '¿Nos tuteamos?' },
        { de: 'Klar, hier sagen alle du. Ich bin der Tom.', es: 'Claro, aquí todos se tutean. Yo soy Tom.' },
        { de: 'Darf ich dich vorstellen? Das ist Anna.', es: '¿Te presento? Esta es Anna.' },
        { de: 'Freut mich sehr, ich habe schon viel von dir gehört.', es: 'Encantada, ya había oído hablar mucho de ti.' }
      ] },
  'Ich bin neu hier. Ich heiße Álvaro.':
    { de: 'Willkommen! Ich zeige dir gleich alles.', es: '¡Bienvenido! Ahora te lo enseño todo.',
      mas: [
        { de: 'Wir haben uns noch nicht kennengelernt, oder?', es: 'Todavía no nos conocemos, ¿verdad?' },
        { de: 'Nein, ich glaube nicht. Ich bin Sofia.', es: 'No, creo que no. Soy Sofía.' },
        { de: 'Darf ich mich vorstellen? Ich bin Álvaro.', es: '¿Me presento? Soy Álvaro.' },
        { de: 'Freut mich, Álvaro. Arbeitest du auch hier?', es: 'Encantada, Álvaro. ¿Tú también trabajas aquí?' }
      ] },

};

// La glosa, en el idioma de la interfaz. Todo lo que sale de este fichero
// pasa por aqui: si no, la app en ingles enseñaba las respuestas en
// castellano, y en un test de "que significa" se mezclaban los dos idiomas
// en la misma lista de opciones.
function conGlosa(x) {
  return x ? { ...x, es: tc(x.es) } : x;
}

// La respuesta de una frase, si la hay.
export function respuestaDe(de) {
  return conGlosa(RESPUESTAS[de]) || null;
}

// Los turnos que siguen a la respuesta, si la conversacion es larga. Van
// alternando: el primero lo dices tu, el segundo el otro, y asi.
//
// Un apartado del libro con una sola frase se quedaba en un "hola / que tal"
// y ahi acababa la conversacion. Con esto algunas siguen dos turnos mas, que
// es donde empieza a parecerse a hablar de verdad.
export function seguimientoDe(de) {
  return (RESPUESTAS[de]?.mas || []).map(conGlosa);
}

// Todos los turnos de una frase, del primero al ultimo, con quien lo dice:
// 'tu' la frase del libro y lo que digas despues, 'otro' lo que te contestan.
export function conversacionDe(de) {
  const r = RESPUESTAS[de];
  if (!r) return [];
  const turnos = [{ de: r.de, es: tc(r.es), quien: 'otro' }];
  (r.mas || []).forEach((x, i) => {
    turnos.push({ de: x.de, es: tc(x.es), quien: i % 2 === 0 ? 'tu' : 'otro' });
  });
  return turnos;
}

// Cuantas llevamos escritas, para las herramientas.
export function cuantasRespuestas() {
  return Object.keys(RESPUESTAS).length;
}

// Dentro de una conversacion larga, cada turno que dices tu lo contesta el
// siguiente. Sin esto, Contestar y Entender solo salian de la frase que ABRE la
// conversacion: en una de cinco intercambios se practicaba una respuesta y las
// otras cuatro no se veian nunca, aunque estuvieran escritas dos lineas mas
// abajo. Se monta una vez al cargar el modulo, que es barato y se usa en cada
// tanda.
const EN_CADENA = new Map();
for (const [apertura, r] of Object.entries(RESPUESTAS)) {
  EN_CADENA.set(apertura, { de: r.de, es: r.es });
  const mas = r.mas || [];
  // Los pares los dices tu y los impares te los contestan, igual que en
  // conversacionDe. El ultimo turno impar no abre nada: se queda fuera.
  for (let i = 0; i + 1 < mas.length; i += 2) {
    if (!EN_CADENA.has(mas[i].de)) EN_CADENA.set(mas[i].de, { de: mas[i + 1].de, es: mas[i + 1].es });
  }
}

// Lo que te contestan a CUALQUIER turno que digas tu, sea la frase que abre la
// conversacion o una de dentro. respuestaDe se queda como estaba porque los
// scripts cuentan conversaciones con ella, y una conversacion es una apertura.
export function respuestaEnCadena(de) {
  return conGlosa(EN_CADENA.get(de)) || null;
}
