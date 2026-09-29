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

  'Können Sie das bitte noch einmal erklären?':
    { de: 'Natürlich. Also, ganz von vorne …', es: 'Por supuesto. A ver, desde el principio…',
      mas: [
        { de: 'Jetzt ist es klar. Danke für die Geduld.', es: 'Ahora sí lo veo. Gracias por la paciencia.' },
        { de: 'Kein Problem. Lieber zweimal fragen als einmal falsch machen.', es: 'No pasa nada. Mejor preguntar dos veces que hacerlo mal una.' }
      ] },

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




















  // Las de la Start que ya estaban. Sin respuesta, la practica de esa
  // leccion solo podia montar dos de los cuatro tipos de ejercicio.












  // ======================================================================
  // A1.1 y A1.2. Antes solo estaban las de A2.1 y las de la Start: media
  // Kommunikation se veia sin respuesta, y los dos tipos de ejercicio que
  // salen de aqui (contestar y entender) no se podian montar en esas
  // lecciones.
  // ======================================================================
  // ---- Lektion 1: Woher kommen Sie? --------------------------------------










  // ---- Lektion 2: Wohnen Sie auch da? ------------------------------------











  // ---- Lektion 3: Was sind Sie von Beruf? --------------------------------






  // ---- Lektion 4: Das ist meine Familie. ---------------------------------







  // ---- Lektion 5: Wann hast du Zeit? -------------------------------------











  // ---- Lektion 6: Haben Sie keine Kipferl? -------------------------------







  // ---- Lektion 7: Heute regnet es. ---------------------------------------




  // ---- Lektion 8: Du spielst super Fußball! ------------------------------








  // ---- Lektion 9: Wie war dein Tag? --------------------------------------











  // ---- Lektion 10: Was ist denn WIN? -------------------------------------






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


  // ---- a11-l1 · nach dem Namen fragen -------------------------------
  'Darf ich fragen, wie Sie heißen?':
    { de: 'Natürlich. Ich heiße Ayla Öztürk.', es: 'Por supuesto. Me llamo Ayla Öztürk.',
      mas: [
        { de: 'Wie schreibt man Ihren Namen?', es: '¿Cómo se escribe su nombre?' },
        { de: 'Ö-Z-T-Ü-R-K. Das Ö am Anfang vergessen die meisten.', es: 'Ö-Z-T-Ü-R-K. La mayoría se olvida de la Ö del principio.' },
        { de: 'Entschuldigung, wie spricht man Ihren Namen aus?', es: 'Perdone, ¿cómo se pronuncia su nombre?' },
        { de: 'Öztürk, der Ton kommt auf die erste Silbe. Das ist für alle schwierig.', es: 'Öztürk, el acento va en la primera sílaba. A todo el mundo le cuesta.' },
        { de: 'Wie heißen Sie, bitte?', es: '¿Cómo se llama usted, por favor?' },
        { de: 'Wagner, Peter Wagner. Ich bin mit Frau Öztürk gekommen.', es: 'Wagner, Peter Wagner. He venido con la señora Öztürk.' }
      ] },
  'Wie heißt du? – Ich heiße Luna.':
    { de: 'Freut mich, Luna! Ich bin Ahmet.', es: '¡Encantado, Luna! Yo soy Ahmet.',
      mas: [
        { de: 'Und wie heißt du mit Nachnamen?', es: '¿Y de apellido cómo te llamas?' },
        { de: 'Mit Nachnamen heiße ich Horvat. Das ist ein sehr häufiger Name in Kroatien.', es: 'De apellido me llamo Horvat. Es un apellido muy común en Croacia.' },
        { de: 'Wie spricht man deinen Namen richtig aus?', es: '¿Cómo se pronuncia bien tu nombre?' },
        { de: 'Horvat, mit dem Ton vorne. Die meisten sagen es falsch.', es: 'Horvat, con el acento delante. La mayoría lo dice mal.' }
      ] },
  'Wie ist dein Name?':
    { de: 'Mein Name ist Lena Novak. Den Nachnamen schreibt man mit V, nicht mit W.', es: 'Me llamo Lena Novak. El apellido se escribe con V, no con W.',
      mas: [
        { de: 'Wie war noch mal dein Name?', es: '¿Cómo era tu nombre?' },
        { de: 'Lena. Kein Problem, das fragen mich viele ein zweites Mal.', es: 'Lena. No pasa nada, mucha gente me lo pregunta por segunda vez.' },
        { de: 'Wie war noch mal dein Nachname?', es: '¿Cómo era tu apellido?' },
        { de: 'Novak, wie der Tennisspieler, aber wir sind leider nicht verwandt.', es: 'Novak, como el tenista, pero por desgracia no somos parientes.' }
      ] },

  // ---- a11-l1 · über Befinden sprechen ------------------------------
  'Wie geht\'s? – Danke, gut.':
    { de: 'Und dir? Alles in Ordnung?', es: '¿Y tú? ¿Todo bien?',
      mas: [
        { de: 'Sehr gut. · Es geht. · Nicht so gut.', es: 'Muy bien. · Va tirando. · No muy bien.' },
        { de: 'Das freut mich. Bei mir ist diese Woche auch alles ruhig.', es: 'Me alegro. Esta semana a mí también me va todo tranquilo.' },
        { de: 'Und selbst?', es: '¿Y tú qué tal?' },
        { de: 'Auch gut, danke. Viel Arbeit im Moment, aber das ist kein Problem.', es: 'Bien también, gracias. Ahora hay mucho trabajo, pero no pasa nada.' },
        { de: 'Wie läuft es gerade bei dir?', es: '¿Cómo te va ahora mismo?' },
        { de: 'Ganz gut. Viel Arbeit, aber ich beschwere mich nicht.', es: 'Bastante bien. Mucho trabajo, pero no me quejo.' }
      ] },
  'Alles gut bei dir?':
    { de: 'Nicht ganz, ehrlich gesagt. Die Woche war lang.', es: 'No del todo, la verdad. La semana ha sido larga.',
      mas: [
        { de: 'Was ist denn los mit dir?', es: '¿Qué te pasa?' },
        { de: 'Nichts Schlimmes, ich habe nur ziemlich viel Stress in der Arbeit.', es: 'Nada grave, solo que tengo bastante estrés en el trabajo.' },
        { de: 'Geht es dir schon besser?', es: '¿Ya estás mejor?' },
        { de: 'Ein bisschen, ja. Am Wochenende schlafe ich das alles nach.', es: 'Un poco sí. El fin de semana recupero todo el sueño.' }
      ] },
  'Wie geht es Ihnen heute?':
    { de: 'Danke, sehr gut. Und Ihnen? Sie sehen ein wenig blass aus.', es: 'Gracias, muy bien. ¿Y usted? Se le ve un poco pálido.',
      mas: [
        { de: 'Mir geht es heute nicht so gut.', es: 'Hoy no me encuentro muy bien.' },
        { de: 'Das tut mir leid. Setzen Sie sich, ich hole Ihnen ein Wasser.', es: 'Lo siento. Siéntese, le traigo un agua.' },
        { de: 'Ich bin ein bisschen nervös.', es: 'Estoy un poco nervioso.' },
        { de: 'Das ist normal am ersten Tag. In einer Stunde ist alles vorbei.', es: 'Es normal el primer día. En una hora ya habrá pasado todo.' }
      ] },

  // ---- a11-l1 · über Herkunft und Wohnort sprechen ------------------
  'Woher kommst du? Wo wohnst du?':
    { de: 'Aus Spanien, aber ich wohne schon lange hier.', es: 'De España, pero llevo ya mucho aquí.',
      mas: [
        { de: 'Aus welchem Land kommst du?', es: '¿De qué país eres?' },
        { de: 'Aus Spanien, aus der Nähe von Madrid.', es: 'De España, de cerca de Madrid.' },
        { de: 'In welchem Bezirk wohnst du?', es: '¿En qué distrito vives?' },
        { de: 'Im zehnten Bezirk, gleich beim Hauptbahnhof. Die Verbindung ist perfekt.', es: 'En el distrito diez, al lado de la estación central. La conexión es perfecta.' },
        { de: 'Wohnst du allein oder mit anderen zusammen?', es: '¿Vives solo o con más gente?' },
        { de: 'Ich teile eine Wohnung mit zwei Studenten, das ist deutlich billiger.', es: 'Comparto piso con dos estudiantes; sale bastante más barato.' }
      ] },
  'Seit wann bist du in Wien?':
    { de: 'Seit zwei Jahren. Die ersten Monate waren hart, jetzt geht es gut.', es: 'Desde hace dos años. Los primeros meses fueron duros, ahora va bien.',
      mas: [
        { de: 'Warum bist du nach Österreich gekommen?', es: '¿Por qué viniste a Austria?' },
        { de: 'Wegen der Arbeit. Ich habe hier eine Stelle als Ingenieur gefunden.', es: 'Por el trabajo. Aquí encontré un puesto de ingeniero.' },
        { de: 'Wie gefällt dir das Leben hier?', es: '¿Qué tal te gusta la vida aquí?' },
        { de: 'Sehr gut. Alles funktioniert, nur der Winter ist mir noch zu lang.', es: 'Muy bien. Todo funciona, solo el invierno se me hace largo todavía.' }
      ] },
  'Ich komme aus Polen, aber ich wohne in Wien.':
    { de: 'Und wie lange bist du schon in Wien?', es: '¿Y cuánto llevas en Viena?',
      mas: [
        { de: 'Vermisst du dein Land?', es: '¿Echas de menos tu país?' },
        { de: 'Manchmal schon, vor allem das Essen und die langen Abende draußen.', es: 'A veces sí, sobre todo la comida y las tardes largas fuera.' },
        { de: 'Fährst du oft in deine Heimat?', es: '¿Vas a menudo a tu tierra?' },
        { de: 'Zweimal im Jahr, im Sommer und zu Weihnachten. Öfter geht leider nicht.', es: 'Dos veces al año, en verano y en Navidad. Más a menudo no puede ser.' }
      ] },

  // ---- a11-l1 · etwas vermuten --------------------------------------
  'Du bist sicher Maria, oder?':
    { de: 'Ja, genau. Und du bist …?', es: 'Sí, exacto. ¿Y tú eres…?',
      mas: [
        { de: 'Kommst du aus Italien?', es: '¿Vienes de Italia?' },
        { de: 'Nein, aus Spanien. Aus Valencia.', es: 'No, de España. De Valencia.' },
        { de: 'Du sprichst Spanisch, oder?', es: 'Hablas español, ¿verdad?' },
        { de: 'Ja, das ist meine Muttersprache. Hörst du das am Akzent?', es: 'Sí, es mi lengua materna. ¿Se me nota en el acento?' },
        { de: 'Du bist sicher nicht von hier.', es: 'Seguro que no eres de aquí.' },
        { de: 'Stimmt, ich bin erst im März gekommen. Wie hast du das gemerkt?', es: 'Es verdad, llegué en marzo. ¿Cómo te has dado cuenta?' }
      ] },
  'Sie sind bestimmt der neue Kollege, oder?':
    { de: 'Ja, genau. Ich fange heute an und suche gerade mein Büro.', es: 'Sí, exacto. Empiezo hoy y estoy buscando mi despacho.',
      mas: [
        { de: 'Das ist wahrscheinlich Ihr Platz.', es: 'Ese seguramente es su sitio.' },
        { de: 'Danke, aber ich glaube, meiner ist dort hinten am Fenster.', es: 'Gracias, pero creo que el mío es aquel de atrás junto a la ventana.' },
        { de: 'Sie kommen bestimmt aus Südamerika, oder?', es: 'Seguro que es usted de Sudamérica, ¿no?' },
        { de: 'Fast. Aus Spanien, aber viele hören den gleichen Akzent.', es: 'Casi. De España, pero mucha gente oye el mismo acento.' }
      ] },
  'Ihr kennt euch vielleicht schon?':
    { de: 'Noch nicht. Aber wir wohnen offenbar in derselben Straße.', es: 'Todavía no. Pero por lo visto vivimos en la misma calle.',
      mas: [
        { de: 'Du arbeitest vermutlich im Krankenhaus.', es: 'Seguramente trabajas en el hospital.' },
        { de: 'Wie kommst du darauf? Ich bin tatsächlich Krankenpfleger.', es: '¿Cómo lo has sabido? Efectivamente soy enfermero.' },
        { de: 'Ist das vielleicht deine Tasche?', es: '¿Esa bolsa es tuya, quizá?' },
        { de: 'Ich glaube schon, ja, meine sieht ganz genauso aus wie die.', es: 'Creo que sí; la mía es exactamente igual que esa.' }
      ] },

  // ---- a11-l1 · zustimmen -------------------------------------------
  'Ja, genau. · Richtig. · Stimmt.':
    { de: 'Gut, dann ist ja alles klar.', es: 'Bien, entonces todo claro.',
      mas: [
        { de: 'Das sehe ich genauso.', es: 'Yo lo veo igual.' },
        { de: 'Gut. Ich dachte schon, ich bin der Einzige mit dieser Meinung.', es: 'Bien. Ya pensaba que era el único que opinaba así.' },
        { de: 'Ja, das stimmt wirklich.', es: 'Sí, eso es verdad.' },
        { de: 'Nicht wahr? Am Anfang habe ich das auch nicht geglaubt.', es: '¿Verdad que sí? Al principio yo tampoco me lo creía.' },
        { de: 'Genau das wollte ich auch sagen.', es: 'Justo eso quería decir yo.' },
        { de: 'Dann sind wir uns ja einig, machen wir es einfach so.', es: 'Pues entonces estamos de acuerdo; hagámoslo así.' }
      ] },
  'Da haben Sie völlig recht.':
    { de: 'Schön, dass Sie das auch so sehen. Dann machen wir es so.', es: 'Me alegra que lo vea igual. Entonces lo hacemos así.',
      mas: [
        { de: 'Einverstanden, machen wir das so.', es: 'De acuerdo, lo hacemos así.' },
        { de: 'Perfekt. Dann schreibe ich Ihnen morgen die Details per Mail.', es: 'Perfecto. Entonces mañana le escribo los detalles por correo.' },
        { de: 'So ist es, ohne Zweifel.', es: 'Así es, sin duda.' },
        { de: 'Dann brauchen wir nicht weiter darüber zu reden.', es: 'Entonces no hace falta seguir hablándolo.' }
      ] },
  'Genau das denke ich auch.':
    { de: 'Dann sind wir uns einig. Das macht die Sache viel einfacher.', es: 'Entonces estamos de acuerdo. Así todo es mucho más fácil.',
      mas: [
        { de: 'Ganz genau, so sehe ich das auch.', es: 'Exactamente, yo también lo veo así.' },
        { de: 'Schön, dann sind wir uns ausnahmsweise einig.', es: 'Bien, entonces por una vez estamos de acuerdo.' },
        { de: 'Da kann ich dir nur zustimmen.', es: 'En eso solo puedo darte la razón.' },
        { de: 'Danke. Ich dachte schon, ich sehe das zu streng.', es: 'Gracias. Ya pensaba que lo veía demasiado estricto.' }
      ] },

  // ---- a11-l1 · über Sprachen sprechen ------------------------------
  'Welche Sprachen sprichst du?':
    { de: 'Spanisch, Englisch und ein bisschen Deutsch. Französisch verstehe ich nur.', es: 'Español, inglés y un poco de alemán. El francés solo lo entiendo.',
      mas: [
        { de: 'Was ist deine Muttersprache?', es: '¿Cuál es tu lengua materna?' },
        { de: 'Spanisch, und ein bisschen Katalanisch.', es: 'El español, y un poco de catalán.' },
        { de: 'Welche Sprache fällt dir am leichtesten?', es: '¿Qué idioma te resulta más fácil?' },
        { de: 'Englisch, ganz klar. Deutsch kostet mich immer noch Kraft.', es: 'El inglés, sin duda. El alemán todavía me cuesta esfuerzo.' },
        { de: 'Wie lange lernst du schon Deutsch?', es: '¿Cuánto tiempo llevas aprendiendo alemán?' },
        { de: 'Seit einem Jahr. Ich gehe zweimal pro Woche in den Kurs.', es: 'Desde hace un año. Voy dos veces por semana a clase.' }
      ] },
  'Deutsch ist schwer, finde ich.':
    { de: 'Am Anfang ja. Aber nach ein paar Monaten kommt es von allein.', es: 'Al principio sí. Pero después de unos meses sale solo.',
      mas: [
        { de: 'Können wir bitte Deutsch sprechen? Ich möchte üben.', es: '¿Podemos hablar en alemán, por favor? Quiero practicar.' },
        { de: 'Sehr gern. Und wenn du einen Fehler machst, sage ich es dir einfach.', es: 'Con mucho gusto. Y si cometes un error, simplemente te lo digo.' },
        { de: 'Gibt es dafür ein deutsches Wort?', es: '¿Hay una palabra alemana para eso?' },
        { de: 'Ja, das heißt „Feierabend“.', es: 'Sí, se dice «Feierabend».' }
      ] },
  'Wo hast du dein Deutsch gelernt?':
    { de: 'Zum Teil in Spanien, den Rest einfach hier im Alltag in Wien.', es: 'En parte en España; el resto, aquí en el día a día en Viena.',
      mas: [
        { de: 'Verstehst du den Wiener Dialekt?', es: '¿Entiendes el dialecto vienés?' },
        { de: 'Ehrlich gesagt kaum, im Kurs klingt alles viel langsamer und klarer.', es: 'Sinceramente, casi nada; en clase todo suena mucho más lento y claro.' },
        { de: 'Träumst du schon auf Deutsch?', es: '¿Ya sueñas en alemán?' },
        { de: 'Einmal ist es passiert. Danach war ich den ganzen Tag stolz.', es: 'Una vez pasó. Después estuve orgulloso todo el día.' }
      ] },

  // ---- a11-l1 · sich verabschieden ----------------------------------
  'Auf Wiedersehen und einen schönen Tag noch!':
    { de: 'Danke, gleichfalls. Bis morgen um neun im Büro.', es: 'Gracias, igualmente. Hasta mañana a las nueve en la oficina.',
      mas: [
        { de: 'Es war schön, Sie kennenzulernen.', es: 'Ha sido un placer conocerle.' },
        { de: 'Ganz meinerseits. Hier ist meine Karte, schreiben Sie mir einfach.', es: 'Igualmente. Aquí tiene mi tarjeta, escríbame sin problema.' },
        { de: 'Wir sehen uns nächste Woche!', es: '¡Nos vemos la semana que viene!' },
        { de: 'Bestimmt. Schreib mir, falls sich etwas ändert.', es: 'Seguro. Escríbeme si cambia algo.' },
        { de: 'Wir sehen uns am Donnerstag, ja?', es: 'Nos vemos el jueves, ¿vale?' },
        { de: 'Ja, gleiche Zeit, gleicher Ort, ich schreibe dir vorher kurz.', es: 'Sí, misma hora y mismo sitio; te escribo antes.' }
      ] },
  'Ich muss leider los, mein Bus kommt gleich.':
    { de: 'Kein Problem, lauf ruhig. Wir reden morgen in Ruhe weiter.', es: 'No pasa nada, vete tranquilo. Mañana seguimos hablando con calma.',
      mas: [
        { de: 'Tschüss, bis bald!', es: '¡Adiós, hasta pronto!' },
        { de: 'Bis bald! Melde dich, wenn du wieder in der Stadt bist.', es: '¡Hasta pronto! Avísame cuando vuelvas a estar en la ciudad.' },
        { de: 'Pass auf dich auf, bis bald!', es: '¡Cuídate, hasta pronto!' },
        { de: 'Du auch! Und komm gut durch die Woche.', es: '¡Tú también! Y que te vaya bien la semana.' }
      ] },
  'Schönes Wochenende!':
    { de: 'Danke, dir auch. Hast du schon etwas geplant?', es: 'Gracias, igualmente. ¿Ya tienes algún plan?',
      mas: [
        { de: 'Grüß deine Familie von mir!', es: '¡Saluda a tu familia de mi parte!' },
        { de: 'Mache ich gern. Sie fragen immer, wie es dir in Wien geht.', es: 'Lo haré encantado. Siempre preguntan qué tal te va en Viena.' },
        { de: 'Bis morgen, schlaf gut!', es: 'Hasta mañana, ¡que duermas bien!' },
        { de: 'Du auch. Vergiss nicht, morgen etwas früher zu kommen.', es: 'Tú también. No olvides venir un poco antes mañana.' }
      ] },


  // ---- a11-l2 · nach dem Alter fragen -------------------------------
  'Darf ich fragen, wie alt Sie sind?':
    { de: 'Natürlich, ich bin 48.', es: 'Por supuesto, tengo 48.',
      mas: [
        { de: 'In welchem Jahr sind Sie geboren?', es: '¿En qué año nació?' },
        { de: '1977, im November.', es: 'En 1977, en noviembre.' },
        { de: 'Wie alt ist Ihre Tochter?', es: '¿Cuántos años tiene su hija?' },
        { de: 'Sie wird im Mai zwölf. Sie geht schon ins Gymnasium.', es: 'En mayo cumple doce. Ya va al instituto.' },
        { de: 'Wie alt ist Ihr jüngstes Kind?', es: '¿Cuántos años tiene su hijo menor?' },
        { de: 'Der Kleine ist drei. Mit ihm ist es gerade am anstrengendsten.', es: 'El pequeño tiene tres. Con él es ahora lo más agotador.' }
      ] },
  'Wie alt bist du? – Ich bin 25.':
    { de: 'Genauso alt wie ich. Wann genau?', es: 'Igual que yo. ¿Cuándo exactamente?',
      mas: [
        { de: 'In welchem Jahr bist du geboren?', es: '¿En qué año naciste?' },
        { de: '2000, ich bin ein Jahrtausendkind.', es: 'En 2000, soy hijo del milenio.' },
        { de: 'Wann hast du Geburtstag?', es: '¿Cuándo es tu cumpleaños?' },
        { de: 'Am 3. August. Da ist immer schon jemand im Urlaub.', es: 'El 3 de agosto. Siempre hay alguien de vacaciones.' }
      ] },
  'Wie alt sind deine Eltern?':
    { de: 'Mein Vater ist 60, meine Mutter 58.', es: 'Mi padre tiene 60 y mi madre 58.',
      mas: [
        { de: 'Wie alt ist deine Schwester?', es: '¿Cuántos años tiene tu hermana?' },
        { de: 'Sie ist 30, also fünf Jahre älter als ich.', es: 'Tiene 30, o sea cinco años más que yo.' },
        { de: 'Bist du älter oder jünger als dein Bruder?', es: '¿Eres mayor o menor que tu hermano?' },
        { de: 'Jünger, aber alle halten mich für den Älteren.', es: 'Menor, pero todos me toman por el mayor.' }
      ] },

  // ---- a11-l2 · über Familie und Familienstand sprechen -------------
  'Sind Sie ledig oder verheiratet?':
    { de: 'Ledig. Ich wohne allein, das passt mir gut.', es: 'Soltero. Vivo solo y me va bien así.',
      mas: [
        { de: 'Haben Sie Kinder?', es: '¿Tiene hijos?' },
        { de: 'Nein, keine. Dafür sehr viele Patenkinder.', es: 'No, ninguno. En cambio, muchos ahijados.' },
        { de: 'Haben Sie Geschwister?', es: '¿Tiene hermanos?' },
        { de: 'Zwei Schwestern, beide in Linz. Wir telefonieren jeden Sonntag.', es: 'Dos hermanas, las dos en Linz. Hablamos por teléfono todos los domingos.' },
        { de: 'Mein Familienstand ist ledig.', es: 'Mi estado civil es soltero.' },
        { de: 'Gut, dann kreuzen wir hier einfach „ledig“ an.', es: 'Bien, entonces marcamos aquí «soltero».' }
      ] },
  'Bist du verheiratet oder ledig?':
    { de: 'Verheiratet, seit letztem Sommer.', es: 'Casado, desde el verano pasado.',
      mas: [
        { de: 'Hast du Kinder?', es: '¿Tienes hijos?' },
        { de: 'Noch nicht, aber wir planen es für nächstes Jahr.', es: 'Todavía no, pero lo tenemos pensado para el año que viene.' },
        { de: 'Ich bin verwitwet und lebe jetzt bei meiner Tochter.', es: 'Soy viudo y ahora vivo en casa de mi hija.' },
        { de: 'Das wusste ich nicht. Geht es dir gut damit?', es: 'No lo sabía. ¿Estás bien así?' }
      ] },
  'Sind Sie verheiratet?':
    { de: 'Ja, seit zwölf Jahren. Und Sie?', es: 'Sí, desde hace doce años. ¿Y usted?',
      mas: [
        { de: 'Ich bin seit fünf Jahren verheiratet und habe zwei Kinder.', es: 'Llevo cinco años casado y tengo dos hijos.' },
        { de: 'Zwei Kinder schon? Dann ist bei Ihnen immer was los.', es: '¿Ya dos hijos? Entonces en su casa siempre pasa algo.' },
        { de: 'Wer wohnt alles in Ihrem Haushalt?', es: '¿Quiénes viven en su domicilio?' },
        { de: 'Wir vier und meine Mutter, sie ist letztes Jahr zu uns gezogen.', es: 'Nosotros cuatro y mi madre, que se vino con nosotros el año pasado.' }
      ] },

  // ---- a11-l2 · nach Wohnort und Wohnsituation fragen ---------------
  'Woher kommen Sie?':
    { de: 'Aus Bosnien, aus Tuzla.', es: 'De Bosnia, de Tuzla.',
      mas: [
        { de: 'Wo sind Sie geboren?', es: '¿Dónde nació?' },
        { de: 'In Tuzla, im Krankenhaus gleich neben unserem Haus.', es: 'En Tuzla, en el hospital justo al lado de nuestra casa.' },
        { de: 'Wie lange leben Sie schon in Österreich?', es: '¿Cuánto tiempo lleva viviendo en Austria?' },
        { de: 'Seit 2014, also über zehn Jahre.', es: 'Desde 2014, o sea más de diez años.' },
        { de: 'Seit wann wohnen Sie in dieser Wohnung?', es: '¿Desde cuándo vive en este piso?' },
        { de: 'Seit drei Jahren. Vorher war ich im neunzehnten Bezirk.', es: 'Desde hace tres años. Antes estaba en el distrito diecinueve.' }
      ] },
  'In welchem Stock wohnen Sie?':
    { de: 'Im ersten, gleich über der Bäckerei.', es: 'En la primera, justo encima de la panadería.',
      mas: [
        { de: 'Ich wohne im dritten Stock, ohne Aufzug.', es: 'Vivo en el tercer piso, sin ascensor.' },
        { de: 'Ohne Aufzug? Dann brauchen Sie keinen Sport mehr.', es: '¿Sin ascensor? Entonces ya no necesita hacer deporte.' },
        { de: 'Wohnst du gern in dieser Gegend?', es: '¿Te gusta vivir por esta zona?' },
        { de: 'Sehr gern. Alles ist zu Fuß erreichbar, nur die Miete steigt.', es: 'Muchísimo. Todo está a pie, solo sube el alquiler.' }
      ] },
  'Ich bin gerade umgezogen.':
    { de: 'Wirklich? Und wohin denn?', es: '¿De verdad? ¿Y adónde?',
      mas: [
        { de: 'Meine neue Adresse ist Gumpendorfer Straße 45, Tür 12.', es: 'Mi nueva dirección es Gumpendorfer Straße 45, puerta 12.' },
        { de: 'Schöne Ecke. Ich wohne zwei Straßen weiter.', es: 'Bonita zona. Yo vivo dos calles más allá.' },
        { de: 'Wie gefällt dir deine Wohngegend?', es: '¿Qué tal te parece tu barrio?' },
        { de: 'Mir gefällt sie gut, nur am Wochenende ist es sehr laut.', es: 'Me gusta, solo que el fin de semana hay mucho ruido.' }
      ] },

  // ---- a11-l2 · Adresse und Kontaktdaten angeben --------------------
  'Wie ist Ihre Adresse?':
    { de: 'Hauptstraße 12, in Wien.', es: 'Hauptstraße 12, en Viena.',
      mas: [
        { de: 'Wie ist Ihre Postleitzahl?', es: '¿Qué código postal tiene?' },
        { de: '1010, ich wohne mitten in der Stadt.', es: '1010, vivo en el centro.' },
        { de: 'Wie lautet Ihre Adresse bitte?', es: '¿Cuál es su dirección, por favor?' },
        { de: 'Ich schreibe sie Ihnen auf, der Straßenname ist lang.', es: 'Se la escribo, el nombre de la calle es largo.' },
        { de: 'Ist das noch Ihre aktuelle Adresse?', es: '¿Sigue siendo esta su dirección actual?' },
        { de: 'Nein, die ist von der alten Wohnung. Ich gebe Ihnen die neue.', es: 'No, esa es del piso viejo. Le doy la nueva.' }
      ] },
  'Ich wohne in der Hauptstraße 12, 1010 Wien.':
    { de: 'Danke, das habe ich. Und eine Telefonnummer?', es: 'Gracias, ya lo tengo. ¿Y un teléfono?',
      mas: [
        { de: 'Meine Telefonnummer ist 0664 1234567.', es: 'Mi teléfono es 0664 1234567.' },
        { de: 'Ich wiederhole: null sechs sechs vier, eins zwei drei vier fünf sechs sieben.', es: 'Repito: cero seis seis cuatro, uno dos tres cuatro cinco seis siete.' },
        { de: 'Mein Handy ist neu, die Nummer hat sich geändert.', es: 'Mi móvil es nuevo, el número ha cambiado.' },
        { de: 'Kein Problem, ich trage die neue gleich ein.', es: 'No pasa nada, apunto la nueva ahora mismo.' }
      ] },
  'Unter welcher Nummer erreiche ich Sie?':
    { de: 'Am besten am Handy, im Büro bin ich selten.', es: 'Mejor al móvil, en la oficina estoy poco.',
      mas: [
        { de: 'Unter welcher E-Mail-Adresse kann ich Sie erreichen?', es: '¿En qué correo electrónico puedo localizarle?' },
        { de: 'Vorname punkt Nachname, alles klein, bei gmx punkt at.', es: 'Nombre punto apellido, todo en minúsculas, arroba gmx punto at.' },
        { de: 'Haben Sie eine österreichische Handynummer?', es: '¿Tiene un número de móvil austriaco?' },
        { de: 'Ja, seit einem Monat. Die spanische habe ich aufgegeben.', es: 'Sí, desde hace un mes. El español lo he dejado.' }
      ] },

  // ---- a11-l2 · über Sprachkenntnisse sprechen ----------------------
  'Ich spreche ein bisschen Deutsch.':
    { de: 'Das hört man, Sie sprechen schon ganz ordentlich.', es: 'Se nota, ya habla bastante bien.',
      mas: [
        { de: 'Mein Deutsch ist noch nicht so gut.', es: 'Mi alemán todavía no es tan bueno.' },
        { de: 'Für ein Jahr Kurs ist das sehr gut. Machen Sie einfach weiter.', es: 'Para un año de clase está muy bien. Siga así.' },
        { de: 'Ich lerne Deutsch, aber ich mache noch viele Fehler.', es: 'Estoy aprendiendo alemán, pero todavía cometo muchos errores.' },
        { de: 'Fehler machen alle. Wichtig ist, dass man Sie versteht.', es: 'Errores comete todo el mundo. Lo importante es que se le entienda.' },
        { de: 'Sprechen Sie langsamer, bitte, ich lerne noch.', es: 'Hable más despacio, por favor, todavía estoy aprendiendo.' },
        { de: 'Entschuldigung, ich rede immer zu schnell. Besser so?', es: 'Perdone, siempre hablo muy rápido. ¿Mejor así?' }
      ] },
  'Sprechen Sie Englisch? – Ja, sehr gut.':
    { de: 'Gut, dann kommen wir im Notfall auch so weiter.', es: 'Bien, así en caso de apuro también nos entendemos.',
      mas: [
        { de: 'Ich spreche nur ein paar Wörter Türkisch.', es: 'Solo hablo unas pocas palabras de turco.' },
        { de: 'Ein paar Wörter freuen die Leute trotzdem sehr.', es: 'Unas pocas palabras alegran mucho a la gente igualmente.' },
        { de: 'Auf welchem Niveau sind Sie?', es: '¿En qué nivel está?' },
        { de: 'A2, im Juni mache ich die Prüfung für B1.', es: 'A2; en junio hago el examen de B1.' }
      ] },
  'Verstehen Sie mich?':
    { de: 'Ja, sehr gut. Sie sprechen klar und deutlich.', es: 'Sí, muy bien. Habla claro.',
      mas: [
        { de: 'Welche Sprache sprechen Sie bei der Arbeit?', es: '¿Qué idioma habla en el trabajo?' },
        { de: 'Auf der Baustelle Deutsch, im Büro meistens Englisch.', es: 'En la obra alemán, en la oficina casi siempre inglés.' },
        { de: 'Ich lese schon Zeitung auf Deutsch.', es: 'Ya leo el periódico en alemán.' },
        { de: 'Respekt. Das ist der beste Weg, Wörter zu lernen.', es: 'Respeto. Es la mejor forma de aprender palabras.' }
      ] },

  // ---- a11-l2 · um Wiederholung bitten ------------------------------
  'Wie bitte?':
    { de: 'Ich sagte, das Formular müssen Sie unten unterschreiben.', es: 'He dicho que el formulario tiene que firmarlo abajo.',
      mas: [
        { de: 'Können Sie das bitte wiederholen?', es: '¿Puede repetirlo, por favor?' },
        { de: 'Gern: unten rechts, neben dem Datum.', es: 'Con gusto: abajo a la derecha, junto a la fecha.' },
        { de: 'Entschuldigung, das habe ich nicht verstanden.', es: 'Perdone, eso no lo he entendido.' },
        { de: 'Ich zeige es Ihnen einfach mit dem Finger.', es: 'Se lo señalo con el dedo y listo.' },
        { de: 'Können Sie das bitte aufschreiben?', es: '¿Puede escribírmelo, por favor?' },
        { de: 'Natürlich, ich schreibe es Ihnen auf den Zettel.', es: 'Por supuesto, se lo escribo en el papel.' }
      ] },
  'Noch einmal, bitte. Langsamer, bitte.':
    { de: 'Kein Problem. Ich rede viel zu schnell, das sagen alle.', es: 'No pasa nada. Hablo demasiado rápido, me lo dicen todos.',
      mas: [
        { de: 'Können Sie das bitte langsamer sagen?', es: '¿Puede decirlo más despacio, por favor?' },
        { de: 'So: der Termin ist am Dienstag um halb elf.', es: 'Así: la cita es el martes a las diez y media.' },
        { de: 'Noch einmal von vorne, bitte.', es: 'Otra vez desde el principio, por favor.' },
        { de: 'Gut. Dienstag, halb elf, Zimmer 204, zweiter Stock.', es: 'Bien. Martes, diez y media, habitación 204, segunda planta.' }
      ] },
  'Sprechen Sie bitte etwas lauter, ich höre Sie schlecht.':
    { de: 'Entschuldigung, hier ist es auch sehr laut. Besser?', es: 'Perdone, aquí también hay mucho ruido. ¿Mejor?',
      mas: [
        { de: 'Wie war die Nummer noch einmal?', es: '¿Cómo era el número otra vez?' },
        { de: 'Null eins, dann vier mal die Acht, dann zwei drei.', es: 'Cero uno, luego cuatro ochos, luego dos tres.' },
        { de: 'Was bedeutet das genau?', es: '¿Qué significa eso exactamente?' },
        { de: 'Dass Sie den Antrag bis Freitag abgeben müssen, sonst verfällt er.', es: 'Que tiene que entregar la solicitud antes del viernes o caduca.' }
      ] },

  // ---- a11-l2 · ein Formular ausfüllen ------------------------------
  'Bitte füllen Sie dieses Formular aus.':
    { de: 'Mache ich. Brauche ich dafür einen blauen Stift?', es: 'Lo hago. ¿Necesito un bolígrafo azul?',
      mas: [
        { de: 'Diese Angabe verstehe ich nicht.', es: 'Este dato no lo entiendo.' },
        { de: 'Da kommt der Name Ihres Arbeitgebers hin.', es: 'Ahí va el nombre de su empleador.' },
        { de: 'Was soll ich bei Geschlecht ankreuzen?', es: '¿Qué marco en la casilla de sexo?' },
        { de: 'Männlich, weiblich oder divers, wie Sie möchten.', es: 'Masculino, femenino u otro, como quiera.' },
        { de: 'Wo trage ich die Telefonnummer ein?', es: '¿Dónde pongo el número de teléfono?' },
        { de: 'In das letzte Feld, unter der E-Mail-Adresse.', es: 'En el último campo, debajo del correo.' }
      ] },
  'Hier fehlt noch etwas, oder?':
    { de: 'Ja, das Geburtsdatum und die Unterschrift.', es: 'Sí, la fecha de nacimiento y la firma.',
      mas: [
        { de: 'Wo muss ich unterschreiben?', es: '¿Dónde tengo que firmar?' },
        { de: 'Unten rechts, in dem kleinen Kästchen.', es: 'Abajo a la derecha, en la casilla pequeña.' },
        { de: 'Muss ich das Formular heute abgeben?', es: '¿Tengo que entregar el formulario hoy?' },
        { de: 'Heute wäre gut. Spätestens aber bis Freitag.', es: 'Hoy estaría bien. Como muy tarde, el viernes.' }
      ] },
  'Brauchen Sie eine Kopie von meinem Pass?':
    { de: 'Ja, bitte. Den Kopierer finden Sie im Gang.', es: 'Sí, por favor. La fotocopiadora está en el pasillo.',
      mas: [
        { de: 'Brauchen Sie das Original oder reicht eine Kopie?', es: '¿Necesita el original o basta una copia?' },
        { de: 'Das Original nur zum Anschauen, behalten tue ich die Kopie.', es: 'El original solo para verlo; me quedo con la copia.' },
        { de: 'Kann ich den Antrag auch online stellen?', es: '¿Puedo hacer la solicitud también por internet?' },
        { de: 'Ja, mit Handysignatur. Dann sparen Sie sich den Weg.', es: 'Sí, con firma digital. Así se ahorra el viaje.' }
      ] },

  // ---- a11-l2 · persönliche Daten und Dokumente klären --------------
  'Haben Sie einen Ausweis dabei?':
    { de: 'Ja, meinen Pass. Der Meldezettel fehlt mir noch.', es: 'Sí, el pasaporte. Me falta el certificado de empadronamiento.',
      mas: [
        { de: 'Darf ich nach Ihrem Geburtsdatum fragen?', es: '¿Puedo preguntarle su fecha de nacimiento?' },
        { de: 'Der 14. März 1993.', es: 'El 14 de marzo de 1993.' },
        { de: 'Was ist Ihre Staatsangehörigkeit?', es: '¿Cuál es su nacionalidad?' },
        { de: 'Spanisch. Ich bin EU-Bürger, das macht es einfacher.', es: 'Española. Soy ciudadano de la UE, eso lo facilita.' },
        { de: 'Wie ist Ihr Familienname?', es: '¿Cuál es su nombre de familia?' },
        { de: 'Pascual, mit c. Den verschreiben fast alle.', es: 'Pascual, con c. Casi todos lo escriben mal.' }
      ] },
  'Wie ist Ihr Geburtsdatum?':
    { de: '14. März 1993, in Valencia.', es: '14 de marzo de 1993, en Valencia.',
      mas: [
        { de: 'Ich bin 32 Jahre alt und ledig.', es: 'Tengo 32 años y estoy soltero.' },
        { de: 'Danke, das trage ich gleich ein.', es: 'Gracias, lo apunto ahora mismo.' },
        { de: 'Sind Sie berufstätig?', es: '¿Trabaja usted?' },
        { de: 'Ja, in Vollzeit, als Techniker bei einer Baufirma.', es: 'Sí, a jornada completa, como técnico en una constructora.' }
      ] },
  'Ich habe noch keinen Meldezettel.':
    { de: 'Den bekommen Sie im Meldeamt, das dauert zehn Minuten.', es: 'Lo consigue en el registro civil, tarda diez minutos.',
      mas: [
        { de: 'Ist mein Ausweis noch gültig?', es: '¿Mi documento sigue siendo válido?' },
        { de: 'Bis August, dann müssen Sie ihn verlängern lassen.', es: 'Hasta agosto; luego tiene que renovarlo.' },
        { de: 'Muss ich das Formular unterschreiben?', es: '¿Tengo que firmar el formulario?' },
        { de: 'Ja, sonst kann ich es nicht annehmen.', es: 'Sí, si no no puedo aceptarlo.' }
      ] },


  // ---- a11-l3 · fragen, wo Gegenstände sind -------------------------
  'Wo ist der Kuli? – Hier. / Da drüben.':
    { de: 'Nimm den, ich habe noch drei in der Schublade.', es: 'Coge ese, tengo tres más en el cajón.',
      mas: [
        { de: 'Gibt es hier irgendwo einen Kugelschreiber?', es: '¿Hay por aquí un bolígrafo?' },
        { de: 'Im Becher neben dem Drucker liegen immer welche.', es: 'En el vaso al lado de la impresora siempre hay.' },
        { de: 'Weißt du, wo die Schere geblieben ist?', es: '¿Sabes dónde ha ido a parar la tijera?' },
        { de: 'Die hat Tom mitgenommen, glaube ich. Frag ihn mal.', es: 'Se la llevó Tom, creo. Pregúntale.' },
        { de: 'Weißt du, wo mein Ladekabel ist?', es: '¿Sabes dónde está mi cable de carga?' },
        { de: 'Das steckt noch in der Dose unter dem Tisch.', es: 'Sigue enchufado debajo de la mesa.' }
      ] },
  'Wo ist meine Brille?':
    { de: 'Auf deinem Kopf. Wie jeden Morgen.', es: 'En tu cabeza. Como cada mañana.',
      mas: [
        { de: 'Hast du meinen Schlüssel gesehen?', es: '¿Has visto mi llave?' },
        { de: 'Der lag vorhin noch neben der Kaffeemaschine.', es: 'Hace un rato estaba al lado de la cafetera.' },
        { de: 'Wo ist der Schlüssel für die Tür?', es: '¿Dónde está la llave de la puerta?' },
        { de: 'Den hat die Hausmeisterin, sie kommt um acht.', es: 'La tiene la conserje, viene a las ocho.' }
      ] },
  'Ist das dein Rucksack?':
    { de: 'Nein, der steht schon seit gestern da.', es: 'No, lleva ahí desde ayer.',
      mas: [
        { de: 'Ist das dein Handy auf dem Tisch?', es: '¿Es tuyo el móvil que está en la mesa?' },
        { de: 'Ja, danke! Das hätte ich glatt liegen gelassen.', es: '¡Sí, gracias! Me lo habría dejado ahí.' },
        { de: 'Wo liegen die Ordner vom letzten Jahr?', es: '¿Dónde están las carpetas del año pasado?' },
        { de: 'Unten im Lager, im Regal rechts an der Wand.', es: 'Abajo en el almacén, en la estantería de la derecha.' }
      ] },

  // ---- a11-l3 · Räume und Geräte im Gebäude suchen ------------------
  'Entschuldigung, wo finde ich Zimmer zwölf?':
    { de: 'Zweiter Stock, dann links bis zum Ende vom Gang.', es: 'Segunda planta, luego a la izquierda hasta el final del pasillo.',
      mas: [
        { de: 'Wo finde ich das Büro?', es: '¿Dónde está la oficina?' },
        { de: 'Gleich hier vorne, die erste Tür nach dem Aufzug.', es: 'Aquí delante, la primera puerta después del ascensor.' },
        { de: 'Ist die Kantine im Erdgeschoss?', es: '¿El comedor está en la planta baja?' },
        { de: 'Ja, hinter dem Empfang. Ab halb zwölf ist offen.', es: 'Sí, detrás de recepción. Abre a las once y media.' },
        { de: 'Wo finde ich hier den Eingang zum Lager?', es: '¿Dónde está aquí la entrada al almacén?' },
        { de: 'Außen herum, beim grauen Tor. Von innen geht es nicht.', es: 'Por fuera, en el portón gris. Por dentro no se puede.' }
      ] },
  'Wo finde ich hier einen Drucker?':
    { de: 'Im Gang, gleich neben dem Kopierraum.', es: 'En el pasillo, al lado de la sala de copias.',
      mas: [
        { de: 'Wo ist denn hier der Kopierer?', es: '¿Dónde está aquí la fotocopiadora?' },
        { de: 'Derselbe Raum. Das Gerät macht beides.', es: 'La misma sala. El aparato hace las dos cosas.' },
        { de: 'Ist mein Telefon im Besprechungsraum?', es: '¿Está mi teléfono en la sala de reuniones?' },
        { de: 'Ich schaue nachher nach, ich muss sowieso hin.', es: 'Luego lo miro, tengo que ir de todas formas.' }
      ] },
  'Wissen Sie, wo Frau Berger sitzt?':
    { de: 'Im dritten Stock, das Büro mit der grünen Tür.', es: 'En la tercera planta, el despacho de la puerta verde.',
      mas: [
        { de: 'Wo ist die Chefin heute?', es: '¿Dónde está hoy la jefa?' },
        { de: 'In Graz, bei einem Kunden. Morgen ist sie wieder da.', es: 'En Graz, en casa de un cliente. Mañana vuelve.' },
        { de: 'Ist mein Rucksack noch im Büro?', es: '¿Sigue mi mochila en la oficina?' },
        { de: 'Ja, er steht unter deinem Schreibtisch. Ich passe auf.', es: 'Sí, está debajo de tu mesa. Yo lo vigilo.' }
      ] },

  // ---- a11-l3 · nach dem Beruf fragen -------------------------------
  'Was sind Sie von Beruf? – Ich bin Ärztin.':
    { de: 'Interessant. In welchem Bereich genau?', es: 'Interesante. ¿En qué especialidad exactamente?',
      mas: [
        { de: 'Wo arbeiten Sie?', es: '¿Dónde trabaja?' },
        { de: 'Im Krankenhaus Nord, in der Notaufnahme.', es: 'En el hospital Nord, en urgencias.' },
        { de: 'Bei welcher Firma arbeiten Sie?', es: '¿En qué empresa trabaja?' },
        { de: 'Bei einer kleinen Baufirma, wir sind nur zwölf Leute.', es: 'En una constructora pequeña, solo somos doce.' },
        { de: 'Welchen Beruf hast du gelernt?', es: '¿Qué profesión estudiaste?' },
        { de: 'Elektriker. Gearbeitet habe ich dann aber im Lager.', es: 'Electricista. Pero después trabajé en el almacén.' }
      ] },
  'Was machst du beruflich?':
    { de: 'Ich bin Erzieher in einem Kindergarten.', es: 'Soy educador en una guardería.',
      mas: [
        { de: 'Was machst du genau?', es: '¿Y qué haces exactamente?' },
        { de: 'Vormittags die Gruppe, nachmittags die Elterngespräche.', es: 'Por la mañana el grupo, por la tarde las reuniones con los padres.' },
        { de: 'Gefällt dir deine Arbeit?', es: '¿Te gusta tu trabajo?' },
        { de: 'Sehr. Laut ist sie, aber langweilig nie.', es: 'Mucho. Es ruidosa, pero nunca aburrida.' }
      ] },
  'Seit wann arbeitest du dort?':
    { de: 'Seit vier Jahren, direkt nach der Ausbildung.', es: 'Desde hace cuatro años, justo después de la formación.',
      mas: [
        { de: 'Wie hast du diese Stelle gefunden?', es: '¿Cómo encontraste este puesto?' },
        { de: 'Über eine Kollegin. Ausgeschrieben war sie nie.', es: 'Por una compañera. Nunca salió en una oferta.' },
        { de: 'Arbeitest du Vollzeit?', es: '¿Trabajas a jornada completa?' },
        { de: 'Dreißig Stunden. Den Freitag habe ich frei.', es: 'Treinta horas. El viernes lo tengo libre.' }
      ] },

  // ---- a11-l3 · über die berufliche Situation sprechen --------------
  'Ich suche gerade Arbeit.':
    { de: 'In welchem Bereich? Vielleicht kenne ich jemanden.', es: '¿En qué sector? A lo mejor conozco a alguien.',
      mas: [
        { de: 'Ich bin zurzeit arbeitslos.', es: 'Ahora mismo estoy en paro.' },
        { de: 'Das ist hart, aber es dauert selten lange. Hast du schon Bewerbungen draußen?', es: 'Es duro, pero suele durar poco. ¿Has enviado ya solicitudes?' },
        { de: 'Ich mache eine Ausbildung.', es: 'Estoy haciendo una formación.' },
        { de: 'Gut, damit hast du danach viel mehr Möglichkeiten.', es: 'Bien, con eso después tendrás muchas más opciones.' },
        { de: 'Machst du gerade ein Praktikum?', es: '¿Estás haciendo prácticas ahora?' },
        { de: 'Ja, drei Monate im Büro. Bezahlt wird es leider kaum.', es: 'Sí, tres meses en la oficina. Por desgracia casi no pagan.' }
      ] },
  'Ich arbeite als Krankenpflegerin im Spital.':
    { de: 'Respekt. Auf welcher Station bist du?', es: 'Respeto. ¿En qué planta estás?',
      mas: [
        { de: 'Ist die Arbeit anstrengend?', es: '¿El trabajo es cansado?' },
        { de: 'Körperlich schon. Aber ich gehe jeden Tag zufrieden heim.', es: 'Físicamente sí. Pero vuelvo contenta a casa cada día.' },
        { de: 'Verdienst du gut bei der Arbeit?', es: '¿Ganas bien en el trabajo?' },
        { de: 'Es reicht. Für die Nachtschichten gibt es extra Geld.', es: 'Da para vivir. Por los turnos de noche pagan un extra.' }
      ] },
  'Bist du angestellt oder selbstständig?':
    { de: 'Angestellt, und ich bin ganz froh darüber.', es: 'Asalariado, y la verdad es que me alegro.',
      mas: [
        { de: 'Mein Mann ist selbstständig.', es: 'Mi marido es autónomo.' },
        { de: 'Dann hat er nie richtig frei, oder?', es: 'Entonces nunca libra de verdad, ¿no?' },
        { de: 'Möchtest du den Beruf wechseln?', es: '¿Te gustaría cambiar de profesión?' },
        { de: 'Manchmal denke ich daran. Aber noch nicht dieses Jahr.', es: 'A veces lo pienso. Pero no este año todavía.' }
      ] },

  // ---- a11-l3 · über Arbeitsbedingungen sprechen --------------------
  'Wie viele Stunden arbeitest du pro Woche?':
    { de: 'Achtunddreißig und ein halbes, plus die Überstunden.', es: 'Treinta y ocho y media, más las horas extra.',
      mas: [
        { de: 'Arbeitest du in Vollzeit oder Teilzeit?', es: '¿Trabajas a jornada completa o parcial?' },
        { de: 'Vollzeit, aber ab Herbst gehe ich auf dreißig Stunden.', es: 'Jornada completa, pero en otoño paso a treinta horas.' },
        { de: 'Wie lange brauchst du in die Arbeit?', es: '¿Cuánto tardas en llegar al trabajo?' },
        { de: 'Vierzig Minuten mit der U-Bahn, mit dem Rad zwanzig.', es: 'Cuarenta minutos en metro, veinte en bici.' },
        { de: 'Wie viele Mitarbeiter hat der Betrieb?', es: '¿Cuántos empleados tiene la empresa?' },
        { de: 'Etwa sechzig, aber in meiner Abteilung sind wir vier.', es: 'Unos sesenta, pero en mi departamento somos cuatro.' }
      ] },
  'Arbeitest du lieber drinnen oder draußen?':
    { de: 'Draußen, ganz klar. Im Büro werde ich müde.', es: 'Fuera, sin duda. En la oficina me da sueño.',
      mas: [
        { de: 'Arbeitest du lieber im Team oder allein?', es: '¿Prefieres trabajar en equipo o solo?' },
        { de: 'Im Team. Allein verliere ich schnell den Faden.', es: 'En equipo. Solo pierdo el hilo enseguida.' },
        { de: 'Musst du eine Uniform tragen?', es: '¿Tienes que llevar uniforme?' },
        { de: 'Nur eine Warnweste und Sicherheitsschuhe.', es: 'Solo un chaleco reflectante y botas de seguridad.' }
      ] },
  'Wie bist du zu diesem Beruf gekommen?':
    { de: 'Über meinen Onkel. Ich habe als Ferienjob angefangen.', es: 'Por mi tío. Empecé como trabajo de verano.',
      mas: [
        { de: 'Was gefällt dir an deinem Job am besten?', es: '¿Qué es lo que más te gusta de tu trabajo?' },
        { de: 'Dass am Abend etwas fertig ist, das man sehen kann.', es: 'Que por la tarde hay algo terminado que se puede ver.' },
        { de: 'Suchst du gerade eine neue Stelle?', es: '¿Estás buscando un trabajo nuevo?' },
        { de: 'Nein, ich bin zufrieden. Aber ich schaue trotzdem manchmal.', es: 'No, estoy contento. Pero aun así miro a veces.' }
      ] },

  // ---- a11-l3 · über Arbeitszeiten sprechen -------------------------
  'Wann fängst du morgens an?':
    { de: 'Um sieben. Dafür bin ich um vier wieder draußen.', es: 'A las siete. En cambio a las cuatro ya estoy fuera.',
      mas: [
        { de: 'Ich arbeite von Montag bis Donnerstag.', es: 'Trabajo de lunes a jueves.' },
        { de: 'Vier Tage? Das würde ich auch nehmen.', es: '¿Cuatro días? Yo también lo cogería.' },
        { de: 'Wie lange dauert deine Mittagspause?', es: '¿Cuánto dura tu pausa para comer?' },
        { de: 'Eine halbe Stunde. Meistens esse ich am Schreibtisch.', es: 'Media hora. Casi siempre como en la mesa.' },
        { de: 'Machst du oft Überstunden?', es: '¿Haces horas extra a menudo?' },
        { de: 'Am Monatsende schon. Sonst geht es.', es: 'A fin de mes sí. El resto se lleva bien.' }
      ] },
  'Arbeitest du auch am Wochenende?':
    { de: 'Jeden zweiten Samstag. Sonntag nie.', es: 'Un sábado de cada dos. Los domingos nunca.',
      mas: [
        { de: 'Arbeitest du auch in der Nachtschicht?', es: '¿Trabajas también en el turno de noche?' },
        { de: 'Zwei Wochen im Monat. Daran gewöhnt man sich nie ganz.', es: 'Dos semanas al mes. A eso no te acostumbras del todo nunca.' },
        { de: 'Kannst du dir die Arbeitszeit frei einteilen?', es: '¿Puedes organizarte tú el horario?' },
        { de: 'Teilweise. Die Kernzeit von neun bis drei ist fix.', es: 'En parte. El horario central de nueve a tres es fijo.' }
      ] },
  'Hast du morgen frei?':
    { de: 'Ja, endlich. Ich habe seit zwölf Tagen durchgearbeitet.', es: 'Sí, por fin. Llevo doce días seguidos trabajando.',
      mas: [
        { de: 'Kannst du am Freitag früher gehen?', es: '¿Puedes salir antes el viernes?' },
        { de: 'Wenn ich die Stunden vorher mache, schon.', es: 'Si hago las horas antes, sí.' },
        { de: 'Wann hast du Urlaub?', es: '¿Cuándo tienes vacaciones?' },
        { de: 'Die letzten zwei Wochen im August. Endlich ans Meer.', es: 'Las dos últimas semanas de agosto. Por fin al mar.' }
      ] },

  // ---- a11-l3 · am Arbeitsplatz zusammenarbeiten --------------------
  'Kannst du mir kurz helfen?':
    { de: 'Klar, was brauchst du?', es: 'Claro, ¿qué necesitas?',
      mas: [
        { de: 'Der Drucker funktioniert nicht.', es: 'La impresora no funciona.' },
        { de: 'Der hat wieder keinen Toner. Ich hole einen neuen.', es: 'Otra vez sin tóner. Voy a por uno nuevo.' },
        { de: 'Der Computer ist schon wieder langsam.', es: 'El ordenador va otra vez lento.' },
        { de: 'Einmal ausschalten und wieder an, das hilft meistens.', es: 'Apágalo y vuelve a encenderlo, eso suele funcionar.' },
        { de: 'Kannst du mir die Datei schicken?', es: '¿Me puedes mandar el archivo?' },
        { de: 'Ist unterwegs. Schau in den Spam, falls sie nicht kommt.', es: 'Va de camino. Mira en spam si no llega.' }
      ] },
  'Heute ist wirklich viel Stress.':
    { de: 'Finde ich auch. Ab drei wird es ruhiger.', es: 'A mí también me lo parece. A partir de las tres se calma.',
      mas: [
        { de: 'Kannst du für mich ans Telefon gehen?', es: '¿Puedes coger el teléfono por mí?' },
        { de: 'Mache ich. Ich sage, du rufst in zehn Minuten zurück.', es: 'Lo hago. Digo que llamas en diez minutos.' },
        { de: 'Ich habe einen Termin um drei Uhr.', es: 'Tengo una cita a las tres.' },
        { de: 'Dann gehe ich allein ins Meeting, kein Problem.', es: 'Entonces voy solo a la reunión, no pasa nada.' }
      ] },
  'Machen wir zusammen Mittagspause?':
    { de: 'Gern, aber erst um halb eins. Vorher schaffe ich es nicht.', es: 'Con gusto, pero a las doce y media. Antes no puedo.',
      mas: [
        { de: 'Diese Woche habe ich die späte Schicht.', es: 'Esta semana tengo el turno de tarde.' },
        { de: 'Dann sehen wir uns kaum. Nächste Woche wieder?', es: 'Entonces casi no nos veremos. ¿La semana que viene otra vez?' },
        { de: 'Haben Sie kurz Zeit für eine Frage?', es: '¿Tiene un momento para una pregunta?' },
        { de: 'Ja, aber wirklich nur kurz, ich muss gleich weg.', es: 'Sí, pero de verdad solo un momento, me tengo que ir.' }
      ] },

  // ---- a11-l3 · zustimmen und widersprechen -------------------------
  'Ja, stimmt. · Genau.':
    { de: 'Gut, dann sind wir uns einig.', es: 'Bien, entonces estamos de acuerdo.',
      mas: [
        { de: 'Das stimmt allerdings.', es: 'En eso sí que tienes razón.' },
        { de: 'Siehst du? Manchmal habe ich auch recht.', es: '¿Ves? A veces yo también tengo razón.' },
        { de: 'Stimmt, so habe ich das noch nicht gesehen.', es: 'Es verdad, así no lo había visto.' },
        { de: 'Deshalb reden wir darüber. Zwei sehen mehr als einer.', es: 'Por eso lo hablamos. Dos ven más que uno.' },
        { de: 'Genau so ist es, du hast es erfasst.', es: 'Exactamente así es, lo has captado.' },
        { de: 'Dann machen wir es so und schließen das Thema ab.', es: 'Entonces lo hacemos así y cerramos el tema.' }
      ] },
  'Das ist doch nicht richtig, oder?':
    { de: 'Doch, schau mal auf die Rechnung. Da steht es.', es: 'Que sí, mira la factura. Ahí lo pone.',
      mas: [
        { de: 'Nein, das stimmt nicht. · Doch!', es: 'No, eso no es así. · ¡Que sí!' },
        { de: 'Dann rechnen wir es zusammen noch einmal durch.', es: 'Entonces lo calculamos otra vez juntos.' },
        { de: 'Du hast völlig recht, entschuldige.', es: 'Tienes toda la razón, perdona.' },
        { de: 'Kein Problem, das passiert jedem am Freitagabend.', es: 'No pasa nada, le pasa a cualquiera un viernes por la tarde.' }
      ] },
  'Da bin ich anderer Meinung.':
    { de: 'Sag ruhig, warum. Vielleicht überzeugst du mich.', es: 'Dime por qué. A lo mejor me convences.',
      mas: [
        { de: 'Da muss ich dir leider widersprechen.', es: 'En eso te tengo que llevar la contraria.' },
        { de: 'Gut, dann hören wir uns beide Seiten an.', es: 'Bien, entonces escuchamos las dos partes.' },
        { de: 'Nein, das glaube ich nicht.', es: 'No, eso no me lo creo.' },
        { de: 'Ich habe es auch nicht geglaubt, bis ich es gesehen habe.', es: 'Yo tampoco me lo creía hasta que lo vi.' }
      ] },


  // ---- a11-l4 · nach der Familie fragen -----------------------------
  'Hast du Geschwister? – Ja, zwei Brüder.':
    { de: 'Zwei Brüder, schön. Ältere oder jüngere?', es: 'Dos hermanos, qué bien. ¿Mayores o menores?',
      mas: [
        { de: 'Wie viele Geschwister hast du?', es: '¿Cuántos hermanos tienes?' },
        { de: 'Vier, ich bin die Mittlere. Es war immer laut bei uns.', es: 'Cuatro, yo soy la del medio. En casa siempre había ruido.' },
        { de: 'Wie alt ist dein Bruder?', es: '¿Cuántos años tiene tu hermano?' },
        { de: 'Der Ältere ist 34, der Jüngere gerade 19 geworden.', es: 'El mayor tiene 34, el pequeño acaba de cumplir 19.' },
        { de: 'Wie viele Personen seid ihr zu Hause?', es: '¿Cuántos sois en casa?' },
        { de: 'Sechs, mit der Oma sieben. Der Tisch ist immer voll.', es: 'Seis, con la abuela siete. La mesa siempre está llena.' }
      ] },
  'Bist du verheiratet?':
    { de: 'Ja, seit sieben Jahren.', es: 'Sí, desde hace siete años.',
      mas: [
        { de: 'Wie viele Kinder habt ihr?', es: '¿Cuántos hijos tenéis?' },
        { de: 'Zwei, ein Mädchen und einen Jungen.', es: 'Dos, una niña y un niño.' },
        { de: 'Wo wohnt deine Familie?', es: '¿Dónde vive tu familia?' },
        { de: 'Wir alle hier in Wien, nur meine Mutter noch in Krakau.', es: 'Todos aquí en Viena, solo mi madre sigue en Cracovia.' }
      ] },
  'Leben deine Großeltern noch?':
    { de: 'Meine Oma ja, sie ist 91 und liest jeden Tag Zeitung.', es: 'Mi abuela sí, tiene 91 y lee el periódico a diario.',
      mas: [
        { de: 'Hast du viele Verwandte in Österreich?', es: '¿Tienes muchos parientes en Austria?' },
        { de: 'Nur einen Cousin in Linz. Der Rest ist in Polen.', es: 'Solo un primo en Linz. El resto está en Polonia.' },
        { de: 'Wie oft siehst du deine Familie?', es: '¿Con qué frecuencia ves a tu familia?' },
        { de: 'Zweimal im Jahr. Dafür bleiben wir dann drei Wochen.', es: 'Dos veces al año. Pero entonces nos quedamos tres semanas.' }
      ] },

  // ---- a11-l4 · über Familienmitglieder berichten -------------------
  'Meine Eltern wohnen in Polen.':
    { de: 'Und vermisst du sie sehr?', es: '¿Y los echas mucho de menos?',
      mas: [
        { de: 'Wie oft telefonierst du mit deinen Eltern?', es: '¿Cada cuánto hablas por teléfono con tus padres?' },
        { de: 'Jeden Sonntag um sechs. Das ist heilig bei uns.', es: 'Todos los domingos a las seis. Eso es sagrado en casa.' },
        { de: 'Wo bist du aufgewachsen?', es: '¿Dónde te criaste?' },
        { de: 'In einem Dorf bei Krakau, mit sehr viel Platz zum Spielen.', es: 'En un pueblo cerca de Cracovia, con mucho sitio para jugar.' },
        { de: 'Meine Eltern sind seit letztem Jahr geschieden.', es: 'Mis padres están divorciados desde el año pasado.' },
        { de: 'Das war sicher nicht leicht. Wie geht es dir damit?', es: 'Seguro que no fue fácil. ¿Cómo lo llevas?' }
      ] },
  'Wir sind eine große Familie.':
    { de: 'Wie viele seid ihr denn, wenn alle da sind?', es: '¿Cuántos sois cuando estáis todos?',
      mas: [
        { de: 'Am Samstag ist eine große Familienfeier.', es: 'El sábado hay una gran fiesta familiar.' },
        { de: 'Klingt schön. Wer kocht bei so vielen Leuten?', es: 'Suena bien. ¿Quién cocina con tanta gente?' },
        { de: 'Meine Schwester ist schwanger.', es: 'Mi hermana está embarazada.' },
        { de: 'Gratuliere! Weiß sie schon, ob es ein Mädchen wird?', es: '¡Felicidades! ¿Ya sabe si es niña?' }
      ] },
  'Ich bin Einzelkind.':
    { de: 'War dir als Kind manchmal langweilig?', es: '¿De niño te aburrías a veces?',
      mas: [
        { de: 'Wohnst du noch bei deinen Eltern?', es: '¿Sigues viviendo con tus padres?' },
        { de: 'Bis Ende des Jahres, dann nehme ich eine kleine Wohnung.', es: 'Hasta final de año; luego cojo un piso pequeño.' },
        { de: 'Mein Sohn sieht seinem Vater sehr ähnlich.', es: 'Mi hijo se parece mucho a su padre.' },
        { de: 'Das sieht man sofort, die gleichen Augen.', es: 'Se ve enseguida, los mismos ojos.' }
      ] },

  // ---- a11-l4 · Familienangehörige vorstellen -----------------------
  'Darf ich vorstellen? Mein Mann.':
    { de: 'Sehr angenehm. Ich habe schon viel von Ihnen gehört.', es: 'Mucho gusto. Ya he oído hablar mucho de usted.',
      mas: [
        { de: 'Darf ich Ihnen meine Frau vorstellen?', es: '¿Le presento a mi mujer?' },
        { de: 'Gern. Guten Abend, freut mich sehr.', es: 'Con gusto. Buenas noches, encantado.' },
        { de: 'Ich möchte Ihnen meinen Sohn vorstellen.', es: 'Me gustaría presentarle a mi hijo.' },
        { de: 'Guten Tag, junger Mann. Gehst du schon zur Schule?', es: 'Buenas tardes, jovencito. ¿Ya vas al colegio?' },
        { de: 'Das sind meine Schwiegereltern aus Ungarn.', es: 'Estos son mis suegros, de Hungría.' },
        { de: 'Willkommen in Wien! Bleiben Sie länger?', es: '¡Bienvenidos a Viena! ¿Se quedan mucho?' }
      ] },
  'Das ist meine Schwester Ana.':
    { de: 'Hallo Ana! Ihr seht euch wirklich ähnlich.', es: '¡Hola, Ana! Os parecéis de verdad.',
      mas: [
        { de: 'Darf ich dir meine Frau vorstellen?', es: '¿Te presento a mi mujer?' },
        { de: 'Ja klar! Freut mich, ich bin der Tom.', es: '¡Claro! Encantado, yo soy Tom.' },
        { de: 'Das ist mein Stiefvater Thomas.', es: 'Este es mi padrastro, Thomas.' },
        { de: 'Freut mich, Thomas. Wohnen Sie auch hier in der Stadt?', es: 'Encantado, Thomas. ¿Usted también vive en la ciudad?' }
      ] },
  'Kennst du meinen Onkel schon?':
    { de: 'Noch nicht, aber du hast oft von ihm erzählt.', es: 'Todavía no, pero has hablado mucho de él.',
      mas: [
        { de: 'Kennst du schon meinen Cousin Marco?', es: '¿Conoces ya a mi primo Marco?' },
        { de: 'Marco, ja! Wir haben zusammen Fußball gespielt.', es: '¡Marco, sí! Jugamos juntos al fútbol.' },
        { de: 'Das sind meine Großeltern.', es: 'Estos son mis abuelos.' },
        { de: 'Guten Tag! Sie sehen beide sehr fit aus.', es: '¡Buenas tardes! Se les ve a los dos muy en forma.' }
      ] },

  // ---- a11-l4 · etwas vermuten --------------------------------------
  'Ist das deine Schwester?':
    { de: 'Ja, die Große. Sie ist zwei Jahre älter.', es: 'Sí, la mayor. Es dos años más grande.',
      mas: [
        { de: 'Das ist bestimmt deine Mutter auf dem Foto.', es: 'Esa seguro que es tu madre en la foto.' },
        { de: 'Genau, mit 25. Alle sagen, ich sehe ihr ähnlich.', es: 'Exacto, con 25 años. Todos dicen que me parezco a ella.' },
        { de: 'Das ist sicher dein Opa.', es: 'Ese seguro que es tu abuelo.' },
        { de: 'Ja, mit seinem alten Fahrrad. Das hat er noch.', es: 'Sí, con su bici vieja. Todavía la tiene.' },
        { de: 'Das ist sicher deine Urgroßmutter auf dem Bild.', es: 'Esa seguro que es tu bisabuela en la foto.' },
        { de: 'Richtig. Das Foto ist von 1938, aus Ungarn.', es: 'Correcto. La foto es de 1938, de Hungría.' }
      ] },
  'Ihr seid sicher Geschwister, oder?':
    { de: 'Ja, das hören wir oft. Zwillinge sind wir aber nicht.', es: 'Sí, nos lo dicen mucho. Pero gemelos no somos.',
      mas: [
        { de: 'Ihr habt wahrscheinlich denselben Charakter.', es: 'Seguramente tenéis el mismo carácter.' },
        { de: 'Überhaupt nicht. Sie ist ruhig, ich rede zu viel.', es: 'Nada de eso. Ella es tranquila, yo hablo demasiado.' },
        { de: 'Die beiden sind sicher verwandt.', es: 'Esos dos seguro que son parientes.' },
        { de: 'Kein bisschen. Sie sind nur seit dreißig Jahren Nachbarn.', es: 'Ni de lejos. Solo son vecinos desde hace treinta años.' }
      ] },
  'Der Kleine ist wohl dein Enkel.':
    { de: 'Ja, der Jüngste. Er kommt jeden Mittwoch zu mir.', es: 'Sí, el más pequeño. Viene a verme todos los miércoles.',
      mas: [
        { de: 'Du hast wahrscheinlich viele Cousins.', es: 'Seguramente tienes muchos primos.' },
        { de: 'Vierzehn. Zu Weihnachten brauchen wir zwei Tische.', es: 'Catorce. En Navidad necesitamos dos mesas.' },
        { de: 'Das ist vielleicht dein Bruder am Telefon.', es: 'Puede que sea tu hermano al teléfono.' },
        { de: 'Bestimmt. Er ruft immer genau zum Essen an.', es: 'Seguro. Siempre llama justo a la hora de comer.' }
      ] },

  // ---- a11-l4 · nach Gegenständen und Besitz fragen -----------------
  'Was ist das? – Das ist ein Foto.':
    { de: 'Darf ich es mir kurz ansehen?', es: '¿Puedo verla un momento?',
      mas: [
        { de: 'Wer ist das?', es: '¿Quién es ese/a?' },
        { de: 'Meine Tante Julia, die Schwester von meiner Mutter.', es: 'Mi tía Julia, la hermana de mi madre.' },
        { de: 'Wer ist die Frau auf dem Bild?', es: '¿Quién es la mujer del cuadro?' },
        { de: 'Meine Großmutter, an ihrem Hochzeitstag.', es: 'Mi abuela, el día de su boda.' },
        { de: 'Wem gehört dieses Foto?', es: '¿De quién es esta foto?' },
        { de: 'Meiner Mutter. Sie will es unbedingt zurück.', es: 'De mi madre. Lo quiere de vuelta a toda costa.' }
      ] },
  'Was ist das für ein Ring?':
    { de: 'Der Ring von meiner Oma, aus Silber.', es: 'El anillo de mi abuela, de plata.',
      mas: [
        { de: 'Gehört dir dieser Ring?', es: '¿Es tuyo este anillo?' },
        { de: 'Jetzt schon. Ich habe ihn zum achtzehnten bekommen.', es: 'Ahora sí. Me lo dieron al cumplir dieciocho.' },
        { de: 'Ist das ein Geschenk für die Hochzeit?', es: '¿Es un regalo para la boda?' },
        { de: 'Ja, aber sag nichts. Es soll eine Überraschung sein.', es: 'Sí, pero no digas nada. Tiene que ser una sorpresa.' }
      ] },
  'Was ist das für ein altes Buch?':
    { de: 'Das Kochbuch von meiner Urgroßmutter, alles handgeschrieben.', es: 'El libro de cocina de mi bisabuela, todo a mano.',
      mas: [
        { de: 'Was bedeutet dieses Symbol hier?', es: '¿Qué significa este símbolo de aquí?' },
        { de: 'Das ist ein altes Familienzeichen, vom Hof meiner Familie.', es: 'Es una marca familiar antigua, de la granja de mi familia.' },
        { de: 'Wem gehört eigentlich dieser Schal?', es: '¿De quién es esta bufanda?' },
        { de: 'Keine Ahnung. Der liegt seit Weihnachten im Flur.', es: 'Ni idea. Lleva en el pasillo desde Navidad.' }
      ] },

  // ---- a11-l4 · über Fotos sprechen ---------------------------------
  'Möchtest du ein paar Fotos sehen?':
    { de: 'Gern! Sind die von der Familienfeier?', es: '¡Con gusto! ¿Son de la fiesta familiar?',
      mas: [
        { de: 'Auf diesem Bild ist die ganze Familie.', es: 'En esta foto está toda la familia.' },
        { de: 'Wie viele seid ihr? Ich zähle fünfzehn Leute.', es: '¿Cuántos sois? Cuento quince personas.' },
        { de: 'Sind das drei Generationen auf einem Bild?', es: '¿Son tres generaciones en una foto?' },
        { de: 'Sogar vier, mit meiner Oma ganz hinten.', es: 'Incluso cuatro, con mi abuela al fondo.' },
        { de: 'Wer steht ganz links auf dem Bild?', es: '¿Quién está a la izquierda del todo en la foto?' },
        { de: 'Mein Cousin Marco. Er kommt immer zu spät und steht am Rand.', es: 'Mi primo Marco. Siempre llega tarde y se queda al borde.' }
      ] },
  'Wann ist dieses Foto entstanden?':
    { de: 'Im Sommer 2009, am See bei meinen Großeltern.', es: 'En el verano de 2009, en el lago de mis abuelos.',
      mas: [
        { de: 'Wie alt warst du auf diesem Foto?', es: '¿Cuántos años tenías en esta foto?' },
        { de: 'Sieben oder acht. Die Zähne fehlen ja alle.', es: 'Siete u ocho. Si me faltan todos los dientes.' },
        { de: 'Du warst als Kind sehr blond!', es: '¡De niño eras muy rubio!' },
        { de: 'Das wird bei uns allen dunkel, mit zehn war es vorbei.', es: 'En mi familia se oscurece; a los diez ya se acabó.' }
      ] },
  'Wer hat dieses Foto gemacht?':
    { de: 'Mein Vater. Er fotografiert seit vierzig Jahren.', es: 'Mi padre. Lleva cuarenta años haciendo fotos.',
      mas: [
        { de: 'Wer ist das neben dir auf dem Foto?', es: '¿Quién es ese que está a tu lado en la foto?' },
        { de: 'Mein bester Freund aus der Schule. Wir sehen uns noch oft.', es: 'Mi mejor amigo del colegio. Todavía nos vemos mucho.' },
        { de: 'Darf ich das Foto fotografieren?', es: '¿Puedo hacer una foto de la foto?' },
        { de: 'Natürlich. Ich schicke dir lieber gleich die Datei.', es: 'Por supuesto. Mejor te mando el archivo directamente.' }
      ] },

  // ---- a11-l4 · über das Zusammenleben sprechen ---------------------
  'Wer macht bei euch den Haushalt?':
    { de: 'Wir teilen es auf, aber ich putze mehr. Das ist die Wahrheit.', es: 'Lo repartimos, pero yo limpio más. Esa es la verdad.',
      mas: [
        { de: 'Meine Kinder helfen kaum im Haushalt.', es: 'Mis hijos casi no ayudan en casa.' },
        { de: 'Wie alt sind sie? Mit zwölf kann man schon abwaschen.', es: '¿Qué edad tienen? Con doce ya se puede lavar los platos.' },
        { de: 'Wir essen abends immer zusammen.', es: 'Por la noche siempre cenamos juntos.' },
        { de: 'Das finde ich gut. Bei uns isst jeder, wann er kann.', es: 'Eso me parece bueno. En casa cada uno come cuando puede.' },
        { de: 'Ich kümmere mich um meine Oma.', es: 'Me ocupo de mi abuela.' },
        { de: 'Das ist viel Arbeit. Hilft dir jemand dabei?', es: 'Eso es mucho trabajo. ¿Te ayuda alguien?' }
      ] },
  'Streitet ihr oft?':
    { de: 'Nicht oft, aber wenn, dann richtig laut.', es: 'No a menudo, pero cuando pasa, bien alto.',
      mas: [
        { de: 'Wie löst ihr einen Streit?', es: '¿Cómo resolvéis una discusión?' },
        { de: 'Wir reden am nächsten Tag darüber, nie am selben Abend.', es: 'Lo hablamos al día siguiente, nunca la misma noche.' },
        { de: 'Die Kinder vertragen sich heute wieder.', es: 'Hoy los niños se llevan bien otra vez.' },
        { de: 'Bei Kindern geht das zum Glück schnell.', es: 'Con los niños, por suerte, va rápido.' }
      ] },
  'Mein Bruder wohnt wieder bei meinen Eltern.':
    { de: 'Vorübergehend oder für länger?', es: '¿Temporalmente o para más tiempo?',
      mas: [
        { de: 'Die Beziehung zu meinem Vater ist heute gut.', es: 'La relación con mi padre hoy es buena.' },
        { de: 'Das freut mich. Früher war das anders, oder?', es: 'Me alegro. Antes era distinto, ¿no?' },
        { de: 'Unterstützt dich deine Familie bei der Ausbildung?', es: '¿Tu familia te apoya con la formación?' },
        { de: 'Sehr. Ohne sie könnte ich das gar nicht machen.', es: 'Mucho. Sin ellos no podría hacerlo.' }
      ] },

  // ---- a11-l4 · Aufgaben im Haushalt aufteilen ----------------------
  'Wer putzt bei euch die Küche?':
    { de: 'Wir wechseln jede Woche. Auf dem Kühlschrank hängt ein Plan.', es: 'Nos turnamos cada semana. En la nevera hay un plan.',
      mas: [
        { de: 'Kocht bei euch jeder für sich?', es: '¿En vuestra casa cocina cada uno para sí?' },
        { de: 'Unter der Woche ja, am Sonntag kocht einer für alle.', es: 'Entre semana sí; el domingo uno cocina para todos.' },
        { de: 'Gibt es bei euch feste Regeln zu Hause?', es: '¿En vuestra casa hay normas fijas?' },
        { de: 'Nur eine: wer kocht, wäscht nicht ab.', es: 'Solo una: quien cocina no lava los platos.' },
        { de: 'Wie ist das Zusammenwohnen mit deinem Bruder?', es: '¿Qué tal convivir con tu hermano?' },
        { de: 'Besser als erwartet. Er ist ordentlicher als ich.', es: 'Mejor de lo esperado. Es más ordenado que yo.' }
      ] },
  'Habt ihr eine große Familie?':
    { de: 'Sehr. Allein Cousins und Cousinen sind wir zwanzig.', es: 'Muy grande. Solo entre primos y primas somos veinte.',
      mas: [
        { de: 'Wie oft gibt es ein Familientreffen?', es: '¿Cada cuánto hay una reunión familiar?' },
        { de: 'Einmal im Sommer, immer im Garten von meinem Onkel.', es: 'Una vez en verano, siempre en el jardín de mi tío.' },
        { de: 'Haltet ihr in der Familie zusammen?', es: '¿Os mantenéis unidos en la familia?' },
        { de: 'Immer. Wenn einer ein Problem hat, rufen alle an.', es: 'Siempre. Si uno tiene un problema, llaman todos.' }
      ] },
  'Bist du das älteste Kind zu Hause?':
    { de: 'Ja, und das heißt bei uns: immer aufpassen.', es: 'Sí, y en mi casa eso significa: vigilar siempre.',
      mas: [
        { de: 'Hast du einen Spitznamen?', es: '¿Tienes apodo?' },
        { de: 'Meine Oma sagt „Kleiner“ zu mir, mit 32 Jahren.', es: 'Mi abuela me llama «pequeño», con 32 años.' },
        { de: 'Wie viel Vertrauen habt ihr untereinander?', es: '¿Cuánta confianza hay entre vosotros?' },
        { de: 'Viel. Ich kann jeden von ihnen nachts um drei anrufen.', es: 'Mucha. Puedo llamar a cualquiera a las tres de la mañana.' }
      ] },


  // ---- a11-l5 · nach der Uhrzeit und dem Zeitplan fragen ------------
  'Wie spät ist es eigentlich?':
    { de: 'Gleich halb neun. Wir müssen los.', es: 'Casi las ocho y media. Tenemos que irnos.',
      mas: [
        { de: 'Um wie viel Uhr fängt der Film an?', es: '¿A qué hora empieza la película?' },
        { de: 'Um neun, aber die Werbung läuft zwanzig Minuten.', es: 'A las nueve, pero los anuncios duran veinte minutos.' },
        { de: 'Um wie viel Uhr treffen wir uns?', es: '¿A qué hora quedamos?' },
        { de: 'Sagen wir Viertel vor neun vor dem Kino.', es: 'Digamos a las nueve menos cuarto delante del cine.' },
        { de: 'Bist du immer so pünktlich?', es: '¿Siempre eres tan puntual?' },
        { de: 'Immer. Zu spät kommen macht mich nervös.', es: 'Siempre. Llegar tarde me pone nervioso.' }
      ] },
  'Wann stehst du normalerweise auf?':
    { de: 'Halb sechs, auch am Wochenende. Der Körper macht das allein.', es: 'A las cinco y media, también el fin de semana. El cuerpo lo hace solo.',
      mas: [
        { de: 'Der Wecker klingelt bei mir um fünf.', es: 'Mi despertador suena a las cinco.' },
        { de: 'Um fünf? Dann bist du mittags schon müde.', es: '¿A las cinco? Entonces al mediodía ya estás cansado.' },
        { de: 'Wie lange brauchst du bis zur Arbeit?', es: '¿Cuánto tiempo tardas hasta el trabajo?' },
        { de: 'Eine gute halbe Stunde, wenn die Straßenbahn kommt.', es: 'Media hora larga, si viene el tranvía.' }
      ] },
  'Wann hast du Zeit? – Am Samstag.':
    { de: 'Samstag passt mir auch. Vormittags oder nachmittags?', es: 'El sábado también me viene bien. ¿Por la mañana o por la tarde?',
      mas: [
        { de: 'Ich habe heute gar keine Zeit.', es: 'Hoy no tengo nada de tiempo.' },
        { de: 'Kein Problem, dann machen wir es am Samstag.', es: 'No pasa nada, entonces lo hacemos el sábado.' },
        { de: 'Mein Tag ist heute völlig voll.', es: 'Hoy tengo el día completamente lleno.' },
        { de: 'Dann ruf mich einfach an, wenn du Luft hast.', es: 'Entonces llámame cuando tengas un hueco.' }
      ] },

  // ---- a11-l5 · über Zeitnot und Termine sprechen -------------------
  'Ich schaffe das nicht bis Freitag.':
    { de: 'Wie viel fehlt denn noch?', es: '¿Cuánto te falta?',
      mas: [
        { de: 'Schaffst du das bis morgen Mittag?', es: '¿Te da tiempo para mañana al mediodía?' },
        { de: 'Wenn mich niemand stört, ja.', es: 'Si nadie me molesta, sí.' },
        { de: 'Das ist dringend, kannst du es heute machen?', es: 'Es urgente, ¿lo puedes hacer hoy?' },
        { de: 'Heute nur die Hälfte. Den Rest gleich morgen früh.', es: 'Hoy solo la mitad. El resto mañana a primera hora.' },
        { de: 'Haben wir bis dahin noch genug Zeit?', es: '¿Nos queda tiempo suficiente hasta entonces?' },
        { de: 'Knapp, aber es geht. Wir müssen nur heute anfangen.', es: 'Justo, pero se puede. Solo hay que empezar hoy.' }
      ] },
  'Wie teilst du dir den Tag ein?':
    { de: 'Das Schwierige am Morgen, die Mails am Nachmittag.', es: 'Lo difícil por la mañana, los correos por la tarde.',
      mas: [
        { de: 'Nimm dir ruhig Zeit dafür.', es: 'Tómate tu tiempo para eso.' },
        { de: 'Danke, das hilft. Dann mache ich es sauber statt schnell.', es: 'Gracias, eso ayuda. Así lo hago bien en vez de rápido.' },
        { de: 'Nachher gehe ich noch schnell einkaufen.', es: 'Después voy a hacer la compra rápido.' },
        { de: 'Bringst du mir Milch mit? Ich gebe dir das Geld gleich.', es: '¿Me traes leche? Te doy el dinero ahora.' }
      ] },
  'Wann hast du übermorgen Zeit?':
    { de: 'Ab vier bin ich frei, vorher habe ich Termine.', es: 'A partir de las cuatro estoy libre, antes tengo citas.',
      mas: [
        { de: 'Wie lange dauert der Termin ungefähr?', es: '¿Cuánto dura la cita más o menos?' },
        { de: 'Eine halbe Stunde, höchstens vierzig Minuten.', es: 'Media hora, cuarenta minutos como máximo.' },
        { de: 'Bist du morgen früh oder später da?', es: '¿Vienes mañana pronto o más tarde?' },
        { de: 'Früh, ich möchte vor allen anderen anfangen.', es: 'Pronto, quiero empezar antes que los demás.' }
      ] },

  // ---- a11-l5 · höflich um Hilfe bitten -----------------------------
  'Kannst du mir bitte helfen?':
    { de: 'Natürlich, sag einfach, was ich tun soll.', es: 'Claro, dime qué tengo que hacer.',
      mas: [
        { de: 'Hilfst du mir kurz beim Tragen?', es: '¿Me ayudas un momento a llevar esto?' },
        { de: 'Klar, nimm du die leichte Kiste.', es: 'Claro, coge tú la caja ligera.' },
        { de: 'Einen Moment, bitte.', es: 'Un momento, por favor.' },
        { de: 'Lass dir Zeit, ich warte hier.', es: 'Tómate tu tiempo, yo espero aquí.' },
        { de: 'Darf ich dich um einen Gefallen bitten?', es: '¿Te puedo pedir un favor?' },
        { de: 'Immer. Was brauchst du?', es: 'Siempre. ¿Qué necesitas?' }
      ] },
  'Könnten Sie mir bitte kurz die Tür aufhalten?':
    { de: 'Natürlich, gehen Sie ruhig vor.', es: 'Por supuesto, pase usted.',
      mas: [
        { de: 'Könnten Sie mir bitte den Weg zeigen?', es: '¿Me podría indicar el camino, por favor?' },
        { de: 'Gern, ich gehe sowieso in dieselbe Richtung.', es: 'Con gusto, voy en la misma dirección.' },
        { de: 'Würden Sie das bitte noch einmal prüfen?', es: '¿Podría comprobarlo otra vez, por favor?' },
        { de: 'Ich schaue gleich nach. Einen Moment noch.', es: 'Lo miro ahora mismo. Un momento.' }
      ] },
  'Darf ich Sie kurz stören?':
    { de: 'Sie stören nicht. Was gibt es?', es: 'No molesta. ¿Qué pasa?',
      mas: [
        { de: 'Kannst du bitte etwas leiser sein?', es: '¿Puedes hacer un poco menos de ruido, por favor?' },
        { de: 'Entschuldige, ich telefoniere draußen weiter.', es: 'Perdona, sigo la llamada fuera.' },
        { de: 'Kannst du mich morgen früh anrufen?', es: '¿Me puedes llamar mañana por la mañana?' },
        { de: 'Mache ich, aber nicht vor acht.', es: 'Lo hago, pero no antes de las ocho.' }
      ] },

  // ---- a11-l5 · um Gefallen und Unterstützung bitten ----------------
  'Darf ich dich um deinen Rat bitten?':
    { de: 'Natürlich. Setz dich, erzähl mal.', es: 'Por supuesto. Siéntate, cuéntame.',
      mas: [
        { de: 'Würdest du das bitte für mich erledigen?', es: '¿Me lo harías tú, por favor?' },
        { de: 'Mache ich, aber erst nach der Mittagspause.', es: 'Lo hago, pero después de comer.' },
        { de: 'Kannst du mir nächste Woche noch einmal helfen?', es: '¿Me puedes ayudar otra vez la semana que viene?' },
        { de: 'Gern, sag mir nur vorher, welcher Tag.', es: 'Con gusto, solo dime antes qué día.' },
        { de: 'Darf ich mir kurz deinen Kuli ausleihen?', es: '¿Me dejas un momento el boli?' },
        { de: 'Nimm ihn, aber gib ihn mir wieder zurück.', es: 'Cógelo, pero devuélvemelo.' }
      ] },
  'Könntest du einen Augenblick warten?':
    { de: 'Ja, ich habe Zeit. Kein Stress.', es: 'Sí, tengo tiempo. Sin estrés.',
      mas: [
        { de: 'Sollen wir das gleich erledigen?', es: '¿Lo resolvemos ahora mismo?' },
        { de: 'Lieber gleich, sonst vergessen wir es beide.', es: 'Mejor ahora, si no se nos olvida a los dos.' },
        { de: 'Würdest du mich um sieben anrufen?', es: '¿Me llamas a las siete?' },
        { de: 'Um sieben, notiert. Ich stelle mir einen Wecker.', es: 'A las siete, apuntado. Me pongo una alarma.' }
      ] },
  'Machen wir eine kurze Pause?':
    { de: 'Bitte, ich sitze seit drei Stunden hier.', es: 'Por favor, llevo tres horas aquí sentado.',
      mas: [
        { de: 'Lass uns eine kurze Mittagspause machen.', es: 'Vamos a hacer una pausa corta para comer.' },
        { de: 'Gute Idee. Zwanzig Minuten, dann weiter?', es: 'Buena idea. ¿Veinte minutos y seguimos?' },
        { de: 'Sollen wir lieber morgen weitermachen?', es: '¿Seguimos mejor mañana?' },
        { de: 'Ja, heute wird das nichts mehr Gutes.', es: 'Sí, hoy ya no va a salir nada bueno.' }
      ] },

  // ---- a11-l5 · über Öffnungszeiten sprechen ------------------------
  'Wann hat die Bank offen? – Von 9 bis 15 Uhr.':
    { de: 'Dann muss ich in der Mittagspause hin.', es: 'Entonces tengo que ir en la pausa de comer.',
      mas: [
        { de: 'Haben Sie über Mittag geschlossen?', es: '¿Cierran al mediodía?' },
        { de: 'Von zwölf bis eins, ja. Danach sind wir wieder da.', es: 'De doce a una, sí. Después volvemos a estar.' },
        { de: 'Wann macht der Supermarkt zu?', es: '¿A qué hora cierra el supermercado?' },
        { de: 'Um acht, am Samstag schon um sechs.', es: 'A las ocho; el sábado ya a las seis.' },
        { de: 'Am Sonntag ist geschlossen.', es: 'Los domingos está cerrado.' },
        { de: 'Deshalb kaufe ich am Samstag für zwei Tage ein.', es: 'Por eso el sábado compro para dos días.' }
      ] },
  'Wann haben Sie geöffnet?':
    { de: 'Montag bis Freitag von acht bis achtzehn Uhr.', es: 'De lunes a viernes de ocho a dieciocho.',
      mas: [
        { de: 'Haben Sie sonntags offen?', es: '¿Abren los domingos?' },
        { de: 'Nein, sonntags nie. Am Samstag bis Mittag.', es: 'No, los domingos nunca. El sábado hasta el mediodía.' },
        { de: 'Ist das Amt am Samstag geöffnet?', es: '¿La oficina abre los sábados?' },
        { de: 'Nur am ersten Samstag im Monat, von neun bis zwölf.', es: 'Solo el primer sábado del mes, de nueve a doce.' }
      ] },
  'Bis wann hat die Apotheke heute offen?':
    { de: 'Bis halb sieben. Danach gibt es die Nachtapotheke.', es: 'Hasta las seis y media. Después hay farmacia de guardia.',
      mas: [
        { de: 'Um wie viel Uhr fängt es an?', es: '¿A qué hora empieza?' },
        { de: 'Pünktlich um achtzehn Uhr, bitte fünf Minuten vorher da sein.', es: 'Puntual a las dieciocho; por favor, estar cinco minutos antes.' },
        { de: 'Wie lange dauert der Kurs?', es: '¿Cuánto dura el curso?' },
        { de: 'Zehn Wochen, zweimal pro Woche je zwei Stunden.', es: 'Diez semanas, dos veces por semana, dos horas cada vez.' }
      ] },

  // ---- a11-l5 · Auskunft über Dienstleistungen erfragen -------------
  'Wie sind die Öffnungszeiten am Werktag?':
    { de: 'Von sieben bis neunzehn Uhr, durchgehend.', es: 'De siete a diecinueve, sin interrupción.',
      mas: [
        { de: 'Ab wann kann ich morgen kommen?', es: '¿A partir de qué hora puedo venir mañana?' },
        { de: 'Ab halb acht ist jemand da.', es: 'A partir de las siete y media hay alguien.' },
        { de: 'Kann ich auch später noch kommen?', es: '¿Puedo venir también más tarde?' },
        { de: 'Bis achtzehn Uhr problemlos, danach ist zu.', es: 'Hasta las dieciocho sin problema; después está cerrado.' },
        { de: 'Wann macht das Amt am Montag auf?', es: '¿Cuándo abre la oficina el lunes?' },
        { de: 'Um acht, aber kommen Sie früh, montags ist immer viel los.', es: 'A las ocho, pero venga pronto; los lunes hay mucha gente.' }
      ] },
  'Wie lange dauert die Sprechstunde?':
    { de: 'Bis zwölf. Mit Termin geht es deutlich schneller.', es: 'Hasta las doce. Con cita va bastante más rápido.',
      mas: [
        { de: 'Haben Sie an Feiertagen geöffnet?', es: '¿Abren en días festivos?' },
        { de: 'Nein, nur der Notdienst. Die Nummer hängt an der Tür.', es: 'No, solo urgencias. El número está en la puerta.' },
        { de: 'Hat die Apotheke sonntags auch offen?', es: '¿La farmacia abre también los domingos?' },
        { de: 'Eine im Bezirk immer, das wechselt jede Woche.', es: 'Siempre una en el distrito; cambia cada semana.' }
      ] },
  'Öffnet die Bibliothek stündlich oder durchgehend?':
    { de: 'Durchgehend, von zehn bis neunzehn Uhr.', es: 'De corrido, de diez a diecinueve.',
      mas: [
        { de: 'Bis wann hat der Supermarkt offen?', es: '¿Hasta qué hora abre el súper?' },
        { de: 'Bis zwanzig Uhr. Der am Bahnhof sogar bis dreiundzwanzig.', es: 'Hasta las veinte. El de la estación incluso hasta las veintitrés.' },
        { de: 'Ist das Schwimmbad im Sommer länger offen?', es: '¿La piscina abre más tiempo en verano?' },
        { de: 'Ja, bis einundzwanzig Uhr. Im Winter nur bis achtzehn.', es: 'Sí, hasta las veintiuna. En invierno solo hasta las dieciocho.' }
      ] },

  // ---- a11-l5 · sich verabreden -------------------------------------
  'Hast du am Freitag Zeit?':
    { de: 'Freitag ja, ab sechs bin ich frei.', es: 'El viernes sí, a partir de las seis estoy libre.',
      mas: [
        { de: 'Passt dir 18 Uhr? – Ja, das passt.', es: '¿Te va bien a las 18? – Sí, me va bien.' },
        { de: 'Gut, dann steht es. Ich freue mich.', es: 'Bien, entonces queda fijado. Me alegro.' },
        { de: 'Wo treffen wir uns?', es: '¿Dónde quedamos?' },
        { de: 'Am besten beim Brunnen, den findet jeder.', es: 'Mejor en la fuente, esa la encuentra cualquiera.' },
        { de: 'Kommst du allein oder mit Ana?', es: '¿Vienes solo o con Ana?' },
        { de: 'Mit Ana, sie will dich sowieso kennenlernen.', es: 'Con Ana, quiere conocerte de todas formas.' }
      ] },
  'Hast du am Wochenende schon etwas vor?':
    { de: 'Samstag nichts. Sonntag bin ich bei meinen Eltern.', es: 'El sábado nada. El domingo estoy en casa de mis padres.',
      mas: [
        { de: 'Wollen wir uns am Donnerstag treffen?', es: '¿Quedamos el jueves?' },
        { de: 'Donnerstag ist besser als Samstag, ja.', es: 'El jueves es mejor que el sábado, sí.' },
        { de: 'Wann treffen wir uns?', es: '¿Cuándo quedamos?' },
        { de: 'Sagen wir sieben, dann haben wir den ganzen Abend.', es: 'Digamos a las siete, así tenemos toda la tarde.' }
      ] },
  'Passt es dir um halb acht?':
    { de: 'Ein bisschen früh, ich arbeite bis sieben.', es: 'Un poco pronto, trabajo hasta las siete.',
      mas: [
        { de: 'Geht es auch etwas später?', es: '¿Puede ser un poco más tarde?' },
        { de: 'Acht wäre perfekt. Dann komme ich in Ruhe.', es: 'A las ocho sería perfecto. Así vengo con calma.' },
        { de: 'Sollen wir uns direkt dort treffen?', es: '¿Quedamos directamente allí?' },
        { de: 'Ja, das ist einfacher. Ich schreibe dir, wenn ich da bin.', es: 'Sí, es más fácil. Te escribo cuando llegue.' }
      ] },

  // ---- a11-l5 · Verabredungen anpassen und vorschlagen --------------
  'Ich muss leider absagen.':
    { de: 'Schade. Ist etwas passiert?', es: 'Qué pena. ¿Ha pasado algo?',
      mas: [
        { de: 'Ich muss unseren Termin leider verschieben.', es: 'Lamentablemente tengo que cambiar nuestra cita.' },
        { de: 'Kein Problem. Wann würde es dir passen?', es: 'No pasa nada. ¿Cuándo te vendría bien?' },
        { de: 'Können wir das auf nächste Woche legen?', es: '¿Podemos pasarlo a la semana que viene?' },
        { de: 'Ja, Dienstag oder Mittwoch hätte ich Zeit.', es: 'Sí, el martes o el miércoles tendría tiempo.' },
        { de: 'Bleibt es bei Freitag um sieben?', es: '¿Seguimos con el viernes a las siete?' },
        { de: 'Es bleibt dabei. Ich habe es mir schon eingetragen.', es: 'Seguimos. Ya lo tengo apuntado.' }
      ] },
  'Wollen wir ins Kino gehen?':
    { de: 'Gern, aber bitte keinen Film über drei Stunden.', es: 'Con gusto, pero por favor nada de más de tres horas.',
      mas: [
        { de: 'Gute Idee! · Ja, gern.', es: '¡Buena idea! · Sí, con gusto.' },
        { de: 'Dann suche ich die Karten schon mal aus.', es: 'Entonces voy buscando las entradas.' },
        { de: 'Ich komme vielleicht zehn Minuten später.', es: 'Puede que llegue diez minutos tarde.' },
        { de: 'Kein Stress, ich halte dir einen Platz frei.', es: 'Sin estrés, te guardo un sitio.' }
      ] },
  'Wie wäre es mit einem Kaffee?':
    { de: 'Sehr gern, ich brauche jetzt genau das.', es: 'Con mucho gusto, es justo lo que necesito.',
      mas: [
        { de: 'Wollen wir zusammen spazieren gehen?', es: '¿Vamos juntos a pasear?' },
        { de: 'Ja, das Wetter ist zu schön für drinnen.', es: 'Sí, hace demasiado buen tiempo para estar dentro.' },
        { de: 'Hast du Lust auf ein Konzert?', es: '¿Te apetece un concierto?' },
        { de: 'Immer. Was für Musik denn?', es: 'Siempre. ¿Qué tipo de música?' }
      ] },


  // ---- a11-l6 · im Restaurant bestellen -----------------------------
  'Wir möchten gern bestellen.':
    { de: 'Sehr gern. Was darf ich Ihnen bringen?', es: 'Con mucho gusto. ¿Qué les traigo?',
      mas: [
        { de: 'Ich hätte gern eine Suppe.', es: 'Quisiera una sopa.' },
        { de: 'Die Rindsuppe oder die Gemüsesuppe?', es: '¿La sopa de carne o la de verduras?' },
        { de: 'Ich hätte gern ein Schnitzel.', es: 'Quería un escalope.' },
        { de: 'Mit Kartoffelsalat oder mit Pommes?', es: '¿Con ensalada de patata o con patatas fritas?' },
        { de: 'Für mich bitte nur ein Wasser.', es: 'Para mí solo un agua.' },
        { de: 'Mit Kohlensäure oder ohne?', es: '¿Con gas o sin gas?' }
      ] },
  'Können wir bitte die Speisekarte haben?':
    { de: 'Natürlich, hier bitte. Die Tageskarte steht auf der Tafel.', es: 'Por supuesto, aquí tiene. El menú del día está en la pizarra.',
      mas: [
        { de: 'Was können Sie empfehlen?', es: '¿Qué me recomienda?' },
        { de: 'Heute das Gulasch, das ist frisch von heute Morgen.', es: 'Hoy el gulasch, está hecho esta mañana.' },
        { de: 'Ich nehme das Menü mit Suppe.', es: 'Tomo el menú con sopa.' },
        { de: 'Gute Wahl. Und zu trinken?', es: 'Buena elección. ¿Y para beber?' }
      ] },
  'Einmal Schnitzel, bitte.':
    { de: 'Kommt sofort. Möchten Sie eine Vorspeise dazu?', es: 'Enseguida. ¿Quiere un entrante?',
      mas: [
        { de: 'Für mich bitte nur einen kleinen Salat.', es: 'Para mí solo una ensalada pequeña, por favor.' },
        { de: 'Gemischt oder grün?', es: '¿Mixta o verde?' },
        { de: 'Könnten wir bitte noch Brot bekommen?', es: '¿Nos podría traer más pan, por favor?' },
        { de: 'Sofort. Beim Brot rechnen wir pro Korb ab.', es: 'Enseguida. El pan lo cobramos por cesta.' }
      ] },

  // ---- a11-l6 · nach Angeboten und Empfehlungen fragen --------------
  'Könnte ich bitte die Karte haben?':
    { de: 'Hier bitte. Nehmen Sie sich Zeit.', es: 'Aquí tiene. Tómese su tiempo.',
      mas: [
        { de: 'Was ist die Spezialität des Hauses?', es: '¿Cuál es la especialidad de la casa?' },
        { de: 'Der Tafelspitz. Den machen wir seit vierzig Jahren gleich.', es: 'El tafelspitz. Lo hacemos igual desde hace cuarenta años.' },
        { de: 'Was ist heute im Angebot?', es: '¿Qué hay hoy de oferta?' },
        { de: 'Das Mittagsmenü mit Suppe und Hauptgang, elf Euro.', es: 'El menú del mediodía con sopa y plato principal, once euros.' },
        { de: 'Haben Sie auch vegetarische Gerichte?', es: '¿Tienen también platos vegetarianos?' },
        { de: 'Drei, sie sind auf der Karte mit einem Blatt markiert.', es: 'Tres, están marcados en la carta con una hoja.' }
      ] },
  'Können wir gleich bestellen oder sollen wir warten?':
    { de: 'Sie können gleich. Ich nehme die Bestellung auf.', es: 'Pueden ya. Tomo el pedido.',
      mas: [
        { de: 'Bitte einmal das Gleiche wie mein Kollege.', es: 'Lo mismo que mi compañero, por favor.' },
        { de: 'Also auch das Gulasch. Und für Sie zu trinken?', es: 'Entonces también el gulasch. ¿Y para usted de beber?' },
        { de: 'Für mich bitte das Gleiche.', es: 'Para mí lo mismo, por favor.' },
        { de: 'Gern, dann zweimal dasselbe. Das geht schnell.', es: 'Con gusto, dos veces lo mismo. Eso va rápido.' }
      ] },
  'Ist das Brot von heute?':
    { de: 'Von heute Morgen, aus der Bäckerei um die Ecke.', es: 'De esta mañana, de la panadería de la esquina.',
      mas: [
        { de: 'Ich hätte gern eine kleine Portion.', es: 'Quisiera una ración pequeña.' },
        { de: 'Mache ich. Eine halbe Portion kostet auch weniger.', es: 'Lo hago. Media ración cuesta también menos.' },
        { de: 'Als Nachtisch nehmen wir einen Apfelstrudel.', es: 'De postre tomamos un strudel de manzana.' },
        { de: 'Mit Vanillesoße oder mit Schlagobers?', es: '¿Con salsa de vainilla o con nata?' }
      ] },

  // ---- a11-l6 · nach dem Preis fragen -------------------------------
  'Was kostet das?':
    { de: 'Drei Euro achtzig das Stück.', es: 'Tres euros ochenta la unidad.',
      mas: [
        { de: 'Ist das der Preis für ein Stück?', es: '¿Es ese el precio por unidad?' },
        { de: 'Ja, pro Stück. Ab fünf wird es billiger.', es: 'Sí, por unidad. A partir de cinco sale más barato.' },
        { de: 'Was kostet das Kilo?', es: '¿Cuánto cuesta el kilo?' },
        { de: 'Sieben Euro fünfzig. Heute ist es besonders gut.', es: 'Siete euros cincuenta. Hoy está especialmente bueno.' },
        { de: 'Haben Sie etwas Günstigeres?', es: '¿Tiene algo más barato?' },
        { de: 'Die von gestern, die kosten nur die Hälfte.', es: 'Las de ayer, esas cuestan solo la mitad.' }
      ] },
  'Wie viel kostet das Kilo Äpfel?':
    { de: 'Zwei Euro zwanzig, aus der Steiermark.', es: 'Dos euros veinte, de Estiria.',
      mas: [
        { de: 'Was kosten zweihundert Gramm Käse?', es: '¿Cuánto cuestan doscientos gramos de queso?' },
        { de: 'Etwa vier Euro. Soll ich ein bisschen mehr nehmen?', es: 'Unos cuatro euros. ¿Le pongo un poco más?' },
        { de: 'Gibt es heute eine Sonderaktion?', es: '¿Hay hoy alguna oferta especial?' },
        { de: 'Drei Becher Joghurt zum Preis von zwei.', es: 'Tres yogures al precio de dos.' }
      ] },
  'Warum ist das so teuer geworden?':
    { de: 'Der Sommer war schlecht, die Ernte ist klein.', es: 'El verano fue malo, la cosecha es pequeña.',
      mas: [
        { de: 'Warum ist das Brot hier teurer?', es: '¿Por qué el pan es más caro aquí?' },
        { de: 'Weil wir selbst backen. Der Supermarkt kauft es fertig.', es: 'Porque lo horneamos nosotros. El súper lo compra hecho.' },
        { de: 'Ist die Dose billiger als die frische Ware?', es: '¿La lata es más barata que el producto fresco?' },
        { de: 'Deutlich, aber frisch schmeckt es einfach besser.', es: 'Bastante, pero fresco sabe mucho mejor.' }
      ] },

  // ---- a11-l6 · bezahlen und abrechnen ------------------------------
  'Die Rechnung, bitte.':
    { de: 'Sofort. Zusammen oder getrennt?', es: 'Enseguida. ¿Junto o separado?',
      mas: [
        { de: 'Die Rechnung, bitte. Wir zahlen getrennt.', es: 'La cuenta, por favor. Pagamos por separado.' },
        { de: 'Kein Problem. Was hatten Sie beide?', es: 'No pasa nada. ¿Qué tomaron cada uno?' },
        { de: 'Wie viel macht das? – Das macht 8,50 Euro.', es: '¿Cuánto es? – Son 8,50 euros.' },
        { de: 'Danke. Neun Euro, stimmt so?', es: 'Gracias. Nueve euros, ¿está bien así?' },
        { de: 'Kann ich mit Karte zahlen?', es: '¿Puedo pagar con tarjeta?' },
        { de: 'Ab zehn Euro gern. Darunter nur bar.', es: 'A partir de diez euros sí. Por debajo solo en efectivo.' }
      ] },
  'Was macht das zusammen?':
    { de: 'Vierundzwanzig Euro sechzig.', es: 'Veinticuatro euros sesenta.',
      mas: [
        { de: 'Ist der Preis pro Person?', es: '¿El precio es por persona?' },
        { de: 'Nein, für beide zusammen. Die Getränke sind schon dabei.', es: 'No, para los dos juntos. Las bebidas están incluidas.' },
        { de: 'Geht das auch etwas günstiger?', es: '¿No sale un poco más barato?' },
        { de: 'Mit der Kundenkarte gibt es fünf Prozent weniger.', es: 'Con la tarjeta de cliente hay un cinco por ciento menos.' }
      ] },
  'Brauchen Sie ein Sackerl?':
    { de: 'Nein danke, ich habe eine Tasche mit.', es: 'No, gracias, traigo bolso.',
      mas: [
        { de: 'Möchten Sie ein Sackerl dazu?', es: '¿Quiere una bolsa?' },
        { de: 'Ja bitte, ein kleines reicht.', es: 'Sí, por favor, una pequeña basta.' },
        { de: 'Gibt es einen Rabatt auf abgelaufene Ware?', es: '¿Hay descuento en los productos a punto de caducar?' },
        { de: 'Ab dem letzten Tag dreißig Prozent, das Regal ist hinten.', es: 'Desde el último día, un treinta por ciento; la estantería está al fondo.' }
      ] },

  // ---- a11-l6 · über Vorlieben beim Essen sprechen ------------------
  'Isst du gern Fisch?':
    { de: 'Sehr gern, am liebsten gegrillt.', es: 'Mucho, sobre todo a la plancha.',
      mas: [
        { de: 'Ich mag keinen Fisch.', es: 'No me gusta el pescado.' },
        { de: 'Überhaupt keinen? Auch keinen Lachs?', es: '¿Ninguno? ¿Tampoco salmón?' },
        { de: 'Ich esse gern Gemüse.', es: 'Me gusta comer verdura.' },
        { de: 'Dann koche ich morgen etwas mit viel Gemüse.', es: 'Entonces mañana cocino algo con mucha verdura.' },
        { de: 'Was isst du am liebsten?', es: '¿Qué es lo que más te gusta comer?' },
        { de: 'Alles, was meine Mutter macht. Das schmeckt anders.', es: 'Todo lo que hace mi madre. Eso sabe distinto.' }
      ] },
  'Magst du scharfes Essen?':
    { de: 'Ja, je schärfer, desto besser.', es: 'Sí, cuanto más picante, mejor.',
      mas: [
        { de: 'Isst du gern scharf?', es: '¿Te gusta comer picante?' },
        { de: 'Bis zu einem Punkt. Danach schmecke ich gar nichts mehr.', es: 'Hasta un punto. Después ya no saboreo nada.' },
        { de: 'Trinkst du Kaffee oder lieber Tee?', es: '¿Bebes café o mejor té?' },
        { de: 'Morgens Kaffee, ab vier Uhr nur noch Tee.', es: 'Por la mañana café; a partir de las cuatro, solo té.' }
      ] },
  'Ich esse kein Fleisch.':
    { de: 'Seit wann schon? Und fällt es dir schwer?', es: '¿Desde cuándo? ¿Y te cuesta?',
      mas: [
        { de: 'Ich esse kein Schweinefleisch.', es: 'No como carne de cerdo.' },
        { de: 'Gut zu wissen. Dann nehme ich Hühnchen für alle.', es: 'Bueno saberlo. Entonces cojo pollo para todos.' },
        { de: 'Magst du österreichisches Essen?', es: '¿Te gusta la comida austriaca?' },
        { de: 'Sehr, nur ist es mir manchmal etwas zu schwer.', es: 'Mucho, solo que a veces se me hace un poco pesada.' }
      ] },

  // ---- a11-l6 · über Geschmack und Verträglichkeit sprechen ---------
  'Schmeckt es dir?':
    { de: 'Sehr gut. Was ist da alles drin?', es: 'Muy bueno. ¿Qué lleva?',
      mas: [
        { de: 'Schmeckt dir die Suppe?', es: '¿Te gusta la sopa?' },
        { de: 'Ja, aber sie ist ein bisschen salzig für mich.', es: 'Sí, pero está un poco salada para mí.' },
        { de: 'Wie schmeckt dir die österreichische Küche?', es: '¿Qué te parece la cocina austriaca?' },
        { de: 'Gut, nur die Portionen sind riesig.', es: 'Bien, solo que las raciones son enormes.' },
        { de: 'Wie findest du das österreichische Frühstück?', es: '¿Qué te parece el desayuno austriaco?' },
        { de: 'Perfekt. Semmel, Butter, Marmelade und ein großer Kaffee.', es: 'Perfecto. Panecillo, mantequilla, mermelada y un café grande.' }
      ] },
  'Hast du eine Allergie?':
    { de: 'Gegen Nüsse, und die sind leider überall drin.', es: 'A los frutos secos, y por desgracia están en todo.',
      mas: [
        { de: 'Vertragen Sie Milchprodukte?', es: '¿Tolera usted los lácteos?' },
        { de: 'Käse ja, Milch schlecht. Kleine Mengen gehen.', es: 'El queso sí, la leche mal. Cantidades pequeñas van bien.' },
        { de: 'Bist du Vegetarier?', es: '¿Eres vegetariano?' },
        { de: 'Seit fünf Jahren, und ich vermisse nichts.', es: 'Desde hace cinco años, y no echo nada de menos.' }
      ] },
  'Magst du eher süß oder salzig?':
    { de: 'Salzig, immer. Kuchen lasse ich meistens stehen.', es: 'Salado, siempre. El pastel casi siempre lo dejo.',
      mas: [
        { de: 'Gibt es etwas, das du nicht magst?', es: '¿Hay algo que no te guste?' },
        { de: 'Oliven. Ich habe es oft versucht, es geht nicht.', es: 'Las aceitunas. Lo he intentado muchas veces, no puedo.' },
        { de: 'Ich bin satt, ich kann nicht mehr.', es: 'Estoy lleno, no puedo más.' },
        { de: 'Dann packe ich dir den Rest ein, für morgen.', es: 'Entonces te envuelvo el resto, para mañana.' }
      ] },

  // ---- a11-l6 · sagen, was es zu essen gibt -------------------------
  'Heute gibt es Suppe und Salat.':
    { de: 'Nur das? Ich habe einen Riesenhunger.', es: '¿Solo eso? Tengo un hambre enorme.',
      mas: [
        { de: 'Im Ofen ist noch ein Kuchen.', es: 'En el horno hay todavía un pastel.' },
        { de: 'Dann warte ich gern. Wie lange noch?', es: 'Entonces espero con gusto. ¿Cuánto falta?' },
        { de: 'Zum Nachtisch gibt es frisches Obst.', es: 'De postre hay fruta fresca.' },
        { de: 'Perfekt, nach der Suppe ist mir das genug.', es: 'Perfecto, después de la sopa me basta.' },
        { de: 'Als Nachspeise gibt es Eis.', es: 'De postre hay helado.' },
        { de: 'Dann nehme ich doch beides, Obst und Eis.', es: 'Entonces cojo las dos cosas, fruta y helado.' }
      ] },
  'Heute gibt es Nudeln mit Tomatensoße.':
    { de: 'Meine Lieblingsspeise. Ist Käse da?', es: 'Mi plato favorito. ¿Hay queso?',
      mas: [
        { de: 'Heute gibt es Fisch aus der Pfanne.', es: 'Hoy hay pescado a la sartén.' },
        { de: 'Riecht schon gut. Was für ein Fisch ist das?', es: 'Ya huele bien. ¿Qué pescado es?' },
        { de: 'Zum Frühstück gibt es frische Semmeln.', es: 'Para desayunar hay panecillos frescos.' },
        { de: 'Dann hole ich schnell Butter und Marmelade.', es: 'Entonces voy rápido por mantequilla y mermelada.' }
      ] },
  'Im Angebot gibt es diese Woche Fisch.':
    { de: 'Gut, dann nehmen wir gleich für zwei Tage.', es: 'Bien, entonces cogemos para dos días.',
      mas: [
        { de: 'Auf dem Wochenmarkt gibt es alles frisch.', es: 'En el mercado semanal hay de todo fresco.' },
        { de: 'Und billiger als im Supermarkt, oder?', es: '¿Y más barato que en el súper, no?' },
        { de: 'Es gibt heute nur noch kalte Küche.', es: 'Hoy ya solo queda comida fría.' },
        { de: 'Kein Problem, ein Brot mit Käse reicht mir.', es: 'No pasa nada, un pan con queso me basta.' }
      ] },

  // ---- a11-l6 · im Supermarkt einkaufen -----------------------------
  'Wo finde ich hier den Reis?':
    { de: 'Gang vier, beim Mehl und den Nudeln.', es: 'Pasillo cuatro, con la harina y la pasta.',
      mas: [
        { de: 'Wo finde ich die Dosen mit Tomaten?', es: '¿Dónde encuentro las latas de tomate?' },
        { de: 'Im selben Gang, unten im Regal.', es: 'En el mismo pasillo, abajo en la estantería.' },
        { de: 'Haben Sie auch tiefgekühltes Gemüse?', es: '¿Tienen también verdura congelada?' },
        { de: 'Ganz hinten links, bei den Truhen.', es: 'Al fondo a la izquierda, en los congeladores.' },
        { de: 'Bekomme ich hier auch frisches Brot?', es: '¿Aquí también hay pan fresco?' },
        { de: 'Ja, gleich beim Eingang. Um vier kommt die zweite Lieferung.', es: 'Sí, junto a la entrada. A las cuatro llega el segundo reparto.' }
      ] },
  'Haben Sie noch frische Erdäpfel?':
    { de: 'Nur noch die kleinen, die großen sind aus.', es: 'Solo las pequeñas, las grandes se han acabado.',
      mas: [
        { de: 'Bis wann ist die Milch haltbar?', es: '¿Hasta cuándo dura la leche?' },
        { de: 'Bis zum siebzehnten, steht oben auf dem Deckel.', es: 'Hasta el diecisiete, está arriba en la tapa.' },
        { de: 'Ist diese Ware noch haltbar?', es: '¿Este producto todavía está en fecha?' },
        { de: 'Noch zwei Tage. Deshalb ist es auch reduziert.', es: 'Dos días más. Por eso está rebajado.' }
      ] },
  'Haben Sie Kleingeld für den Wagen?':
    { de: 'Einen Euro, nimm ihn. Du gibst ihn mir nachher zurück.', es: 'Un euro, cógelo. Me lo devuelves luego.',
      mas: [
        { de: 'Ich habe meine Einkaufsliste vergessen.', es: 'Me he olvidado la lista de la compra.' },
        { de: 'Dann telefonier mit zu Hause, sonst fehlt wieder die Hälfte.', es: 'Entonces llama a casa, si no falta otra vez la mitad.' },
        { de: 'Der Einkaufswagen ist schon ganz voll.', es: 'El carrito ya está lleno del todo.' },
        { de: 'Und wir sind erst bei Gang drei. Das wird teuer.', es: 'Y solo estamos en el pasillo tres. Esto va a salir caro.' }
      ] },


  // ---- a11-l7 · nach dem Wetter und der Vorhersage fragen -----------
  'Wie ist das Wetter? – Es regnet.':
    { de: 'Schon wieder. Diese Woche war noch kein Tag trocken.', es: 'Otra vez. Esta semana no ha habido un día seco.',
      mas: [
        { de: 'Wie ist das Wetter heute?', es: '¿Qué tiempo hace hoy?' },
        { de: 'Grau, aber mild. Mantel brauchst du keinen.', es: 'Gris, pero suave. No necesitas abrigo.' },
        { de: 'Regnet es draußen noch?', es: '¿Sigue lloviendo fuera?' },
        { de: 'Gerade hat es aufgehört. Geh schnell, solange es hält.', es: 'Acaba de parar. Vete rápido mientras aguante.' },
        { de: 'Wie viel Grad hat es draußen?', es: '¿Cuántos grados hace fuera?' },
        { de: 'Elf. Für September ist das ziemlich frisch.', es: 'Once. Para septiembre es bastante fresco.' }
      ] },
  'Hast du den Wetterbericht gesehen?':
    { de: 'Ja, ab Donnerstag soll es besser werden.', es: 'Sí, a partir del jueves dicen que mejora.',
      mas: [
        { de: 'Wie wird das Wetter am Wochenende?', es: '¿Qué tiempo va a hacer el fin de semana?' },
        { de: 'Samstag Sonne, Sonntag wieder Regen.', es: 'El sábado sol, el domingo otra vez lluvia.' },
        { de: 'Wie ist die Prognose für die Woche?', es: '¿Cuál es el pronóstico para la semana?' },
        { de: 'Wechselhaft. Nimm jeden Tag den Schirm mit.', es: 'Variable. Llévate el paraguas todos los días.' }
      ] },
  'Wie warm ist es eigentlich?':
    { de: 'Im Schatten sechsundzwanzig, in der Sonne mehr.', es: 'A la sombra veintiséis, al sol más.',
      mas: [
        { de: 'Schneit es schon?', es: '¿Ya está nevando?' },
        { de: 'Noch nicht, aber es ist kalt genug dafür.', es: 'Todavía no, pero hace frío suficiente.' },
        { de: 'Ist es bei euch auch so windig?', es: '¿Por vuestra zona también hace tanto viento?' },
        { de: 'Schlimmer. Bei uns liegen schon Äste auf der Straße.', es: 'Peor. Aquí ya hay ramas en la calle.' }
      ] },

  // ---- a11-l7 · das Wetter und den Himmel beschreiben ---------------
  'Heute ist es schön / schlecht.':
    { de: 'Finde ich auch. Genau richtig für draußen.', es: 'A mí también me lo parece. Justo para estar fuera.',
      mas: [
        { de: 'Es sind 20 Grad.', es: 'Hay 20 grados.' },
        { de: 'Angenehm. Nicht zu warm und nicht zu kalt.', es: 'Agradable. Ni mucho calor ni mucho frío.' },
        { de: 'Heute ist es richtig warm.', es: 'Hoy hace bastante calor.' },
        { de: 'Endlich. Ich hole die kurzen Hosen aus dem Schrank.', es: 'Por fin. Saco los pantalones cortos del armario.' },
        { de: 'Es ist heute richtig schwül.', es: 'Hoy hace mucho bochorno.' },
        { de: 'Da kommt sicher noch ein Gewitter.', es: 'Seguro que viene tormenta.' }
      ] },
  'Der Himmel ist heute ganz grau.':
    { de: 'Typisch November. Da hilft nur Licht anmachen.', es: 'Típico de noviembre. Solo ayuda encender la luz.',
      mas: [
        { de: 'Es regnet den ganzen Tag.', es: 'Llueve todo el día.' },
        { de: 'Dann bleiben wir drinnen und machen einen Tee.', es: 'Entonces nos quedamos dentro y hacemos un té.' },
        { de: 'Es hat die ganze Nacht geregnet.', es: 'Ha llovido toda la noche.' },
        { de: 'Deshalb steht auf dem Hof das Wasser.', es: 'Por eso hay agua en el patio.' }
      ] },
  'Was für ein scheußliches Wetter!':
    { de: 'Und das soll noch drei Tage so bleiben.', es: 'Y dicen que sigue así tres días más.',
      mas: [
        { de: 'Der Nebel ist heute sehr dicht.', es: 'Hoy la niebla es muy espesa.' },
        { de: 'Fahr vorsichtig, man sieht keine fünfzig Meter.', es: 'Conduce con cuidado, no se ven ni cincuenta metros.' },
        { de: 'Morgen soll es schneien.', es: 'Dicen que mañana va a nevar.' },
        { de: 'Im März? Das wäre wirklich das Letzte.', es: '¿En marzo? Eso ya sería lo último.' }
      ] },

  // ---- a11-l7 · über Hitze, Kälte und Unwetter sprechen -------------
  'Hier ist es im Winter sehr kalt.':
    { de: 'Bis minus fünfzehn manchmal. Daran gewöhnst du dich.', es: 'Hasta menos quince a veces. Te acostumbras.',
      mas: [
        { de: 'Hat es bei euch auch Frost gegeben?', es: '¿En vuestra zona también ha helado?' },
        { de: 'Jede Nacht diese Woche. Die Blumen sind hin.', es: 'Todas las noches esta semana. Las flores se han perdido.' },
        { de: 'Die Temperaturen sinken heute Nacht stark.', es: 'Esta noche las temperaturas bajan mucho.' },
        { de: 'Dann hole ich die Pflanzen lieber rein.', es: 'Entonces mejor meto las plantas.' },
        { de: 'Hat es bei euch auch geschneit?', es: '¿En vuestra zona también ha nevado?' },
        { de: 'Zwanzig Zentimeter. Die Kinder haben frei bekommen.', es: 'Veinte centímetros. Los niños han tenido fiesta.' }
      ] },
  'Im Sommer ist es hier sehr heiß.':
    { de: 'Über dreißig, und die Wohnungen kühlen nachts nicht ab.', es: 'Más de treinta, y los pisos no se enfrían de noche.',
      mas: [
        { de: 'Heute ist es endlich wieder warm.', es: 'Hoy por fin hace calor otra vez.' },
        { de: 'Nach drei Wochen Regen tut das richtig gut.', es: 'Después de tres semanas de lluvia sienta muy bien.' },
        { de: 'Es ist heute völlig windstill.', es: 'Hoy no corre nada de aire.' },
        { de: 'Deshalb ist es so drückend. Kein Lüftchen.', es: 'Por eso está tan cargado. Ni una brisa.' }
      ] },
  'War das ein Blitz?':
    { de: 'Ja, und der Donner kam sofort. Das ist nah.', es: 'Sí, y el trueno vino enseguida. Está cerca.',
      mas: [
        { de: 'Gestern gab es ein schweres Unwetter.', es: 'Ayer hubo un temporal fuerte.' },
        { de: 'Bei uns ist ein Baum auf die Straße gefallen.', es: 'Aquí un árbol cayó a la calle.' },
        { de: 'Das Wetter ändert sich hier sehr schnell.', es: 'Aquí el tiempo cambia muy rápido.' },
        { de: 'In den Bergen ist das normal. Morgens Sonne, mittags Regen.', es: 'En la montaña es normal. Por la mañana sol, al mediodía lluvia.' }
      ] },

  // ---- a11-l7 · Kleidung an das Wetter anpassen ---------------------
  'Nimm einen Regenschirm mit!':
    { de: 'Muss das sein? Der Himmel ist doch blau.', es: '¿Hace falta? Si el cielo está azul.',
      mas: [
        { de: 'Nimmst du den Regenschirm mit?', es: '¿Te llevas el paraguas?' },
        { de: 'Ja, du hast ja doch immer recht damit.', es: 'Sí, al final siempre tienes razón con eso.' },
        { de: 'Zieh dich warm an, es ist kühl.', es: 'Abrígate, que hace fresco.' },
        { de: 'Ich nehme den dicken Pullover, versprochen.', es: 'Cojo el jersey gordo, prometido.' },
        { de: 'Soll ich eine Jacke mitnehmen?', es: '¿Me llevo una chaqueta?' },
        { de: 'Unbedingt, am Abend wird es deutlich kälter.', es: 'Sin falta, por la noche refresca bastante.' }
      ] },
  'Setz bitte eine Mütze auf.':
    { de: 'Die sieht aber furchtbar aus.', es: 'Pero queda horrible.',
      mas: [
        { de: 'Wo sind meine Handschuhe?', es: '¿Dónde están mis guantes?' },
        { de: 'In der rechten Manteltasche, wie immer.', es: 'En el bolsillo derecho del abrigo, como siempre.' },
        { de: 'Zieh dir feste Schuhe an.', es: 'Ponte zapatos resistentes.' },
        { de: 'Stimmt, der Weg ist nach dem Regen sicher matschig.', es: 'Es verdad, el camino estará embarrado tras la lluvia.' }
      ] },
  'Vergiss die Sonnencreme nicht!':
    { de: 'Ist schon im Rucksack, ganz oben.', es: 'Ya está en la mochila, arriba del todo.',
      mas: [
        { de: 'Vergiss die Sonnenbrille nicht.', es: 'No te olvides de las gafas de sol.' },
        { de: 'Die habe ich auf dem Kopf. Wie jeden Tag.', es: 'Las llevo en la cabeza. Como cada día.' },
        { de: 'Zieh den Kindern die Gummistiefel an.', es: 'Ponles a los niños las botas de agua.' },
        { de: 'Mache ich, sonst sind die Socken in fünf Minuten nass.', es: 'Lo hago, si no los calcetines se mojan en cinco minutos.' }
      ] },

  // ---- a11-l7 · sich auf Hitze und Kälte einstellen -----------------
  'Mir ist kalt.':
    { de: 'Soll ich dir eine Decke holen?', es: '¿Te traigo una manta?',
      mas: [
        { de: 'Mir ist eiskalt.', es: 'Tengo un frío helador.' },
        { de: 'Komm näher zur Heizung, hier ist es wärmer.', es: 'Acércate al radiador, aquí está más caliente.' },
        { de: 'Mach bitte die Heizung an.', es: 'Enciende la calefacción, por favor.' },
        { de: 'Steht schon auf drei. Wärmer wird sie nicht.', es: 'Ya está en el tres. Más no calienta.' },
        { de: 'Wir sollten heute drinnen bleiben.', es: 'Hoy deberíamos quedarnos dentro.' },
        { de: 'Einverstanden. Ich koche etwas Warmes.', es: 'De acuerdo. Cocino algo caliente.' }
      ] },
  'Sollen wir drinnen bleiben?':
    { de: 'Lieber ja, draußen hält man es nicht aus.', es: 'Mejor sí, fuera no se aguanta.',
      mas: [
        { de: 'Bei dem Wetter gehe ich nicht raus.', es: 'Con este tiempo no salgo.' },
        { de: 'Verstehe ich gut. Ich bringe dir was mit.', es: 'Lo entiendo. Te traigo algo.' },
        { de: 'Die Straßen sind heute sehr glatt.', es: 'Hoy las calles están muy resbaladizas.' },
        { de: 'Nimm die Straßenbahn, nicht das Rad.', es: 'Coge el tranvía, no la bici.' }
      ] },
  'Der Wetterbericht sagt Sonne.':
    { de: 'Dann können wir den Nachmittag draußen verbringen.', es: 'Entonces podemos pasar la tarde fuera.',
      mas: [
        { de: 'Sollen wir den Sonnenschirm aufstellen?', es: '¿Montamos la sombrilla?' },
        { de: 'Unbedingt, um zwei ist die Sonne zu stark.', es: 'Sin falta, a las dos el sol es muy fuerte.' },
        { de: 'Im Schatten ist es viel angenehmer.', es: 'A la sombra se está mucho mejor.' },
        { de: 'Dann setzen wir uns unter den Baum.', es: 'Entonces nos sentamos debajo del árbol.' }
      ] },

  // ---- a11-l7 · über Jahreszeiten sprechen --------------------------
  'Welche Jahreszeit magst du am liebsten?':
    { de: 'Den Herbst. Die Farben und die Ruhe.', es: 'El otoño. Los colores y la calma.',
      mas: [
        { de: 'Der Herbst ist meine liebste Zeit zum Wandern.', es: 'El otoño es mi época favorita para hacer senderismo.' },
        { de: 'Meine auch. Nicht zu heiß und kaum Leute.', es: 'La mía también. Ni mucho calor ni mucha gente.' },
        { de: 'Im Winter wird es hier sehr früh dunkel.', es: 'En invierno aquí oscurece muy pronto.' },
        { de: 'Um halb vier ist Schluss. Das finde ich hart.', es: 'A las tres y media se acabó. Eso me cuesta.' },
        { de: 'Im Jänner ist es hier am kältesten.', es: 'En enero es cuando más frío hace aquí.' },
        { de: 'Und der längste Monat, finde ich.', es: 'Y el mes más largo, me parece.' }
      ] },
  'Der Frühling kommt dieses Jahr früh.':
    { de: 'Die Bäume blühen schon im März, das ist neu.', es: 'Los árboles ya florecen en marzo, eso es nuevo.',
      mas: [
        { de: 'Der Sommer war dieses Jahr kurz.', es: 'Este año el verano ha sido corto.' },
        { de: 'Zwei warme Wochen, dann war es vorbei.', es: 'Dos semanas de calor y se acabó.' },
        { de: 'Im Mai regnet es hier fast jeden Tag.', es: 'En mayo aquí llueve casi todos los días.' },
        { de: 'Dafür ist danach alles grün.', es: 'A cambio, después está todo verde.' }
      ] },
  'Wann fangen die Ferien an?':
    { de: 'Anfang Juli, und sie dauern neun Wochen.', es: 'A principios de julio, y duran nueve semanas.',
      mas: [
        { de: 'Der Sonnenuntergang ist im Sommer erst um neun.', es: 'En verano el atardecer no es hasta las nueve.' },
        { de: 'Deshalb sind die Abende hier so schön lang.', es: 'Por eso aquí las tardes son tan largas.' },
        { de: 'Die Jahreszeiten sind in Spanien anders.', es: 'Las estaciones en España son distintas.' },
        { de: 'Inwiefern? Gibt es dort keinen richtigen Herbst?', es: '¿En qué sentido? ¿Allí no hay otoño de verdad?' }
      ] },

  // ---- a11-l7 · Klima und Wetter im Jahresverlauf vergleichen -------
  'Ist der Winter hier sehr hart?':
    { de: 'Härter als in Spanien, aber die Häuser sind warm.', es: 'Más duro que en España, pero las casas son cálidas.',
      mas: [
        { de: 'Welcher Monat ist im Durchschnitt am kältesten?', es: '¿Qué mes es de media el más frío?' },
        { de: 'Der Jänner, knapp vor dem Februar.', es: 'Enero, justo por delante de febrero.' },
        { de: 'Wann taut hier normalerweise der Schnee?', es: '¿Cuándo se derrite normalmente la nieve aquí?' },
        { de: 'In der Stadt nach zwei Tagen, auf dem Berg erst im April.', es: 'En la ciudad a los dos días; en la montaña, hasta abril.' },
        { de: 'Wann beginnt hier der Frühling?', es: '¿Cuándo empieza aquí la primavera?' },
        { de: 'Offiziell im März, gefühlt erst Ende April.', es: 'Oficialmente en marzo; de sensación, a finales de abril.' }
      ] },
  'Wird es im Sommer sehr heiß?':
    { de: 'Im Juli und August schon, über dreißig Grad.', es: 'En julio y agosto sí, más de treinta grados.',
      mas: [
        { de: 'Der Sommer wird jedes Jahr heißer.', es: 'El verano es cada año más caluroso.' },
        { de: 'Das merkt man deutlich. Früher war das anders.', es: 'Se nota claramente. Antes era distinto.' },
        { de: 'Fehlt dir das Meer im Sommer?', es: '¿Echas de menos el mar en verano?' },
        { de: 'Sehr. Dafür gibt es hier die Seen, die sind auch schön.', es: 'Mucho. A cambio aquí hay lagos, que también están bien.' }
      ] },
  'Welche Jahreszeit ist hier am schönsten?':
    { de: 'Der Mai, finden die meisten. Alles blüht auf einmal.', es: 'Mayo, dice la mayoría. Todo florece a la vez.',
      mas: [
        { de: 'Im Herbst gibt es hier viele Regenschauer.', es: 'En otoño aquí hay muchos chubascos.' },
        { de: 'Kurz, aber heftig. In zehn Minuten bist du nass.', es: 'Cortos pero fuertes. En diez minutos te empapas.' },
        { de: 'Der Frühling kommt hier später als in Spanien.', es: 'Aquí la primavera llega más tarde que en España.' },
        { de: 'Gut einen Monat später, würde ich sagen.', es: 'Un buen mes más tarde, diría yo.' }
      ] },

  // ---- a11-l7 · Pläne vom Wetter abhängig machen --------------------
  'Was machen wir, wenn es regnet?':
    { de: 'Dann gehen wir ins Museum, das ist auch schön.', es: 'Entonces vamos al museo, también está bien.',
      mas: [
        { de: 'Bei Regen fällt der Ausflug aus.', es: 'Si llueve, se cancela la excursión.' },
        { de: 'Schade. Entscheiden wir das morgen früh?', es: 'Qué pena. ¿Lo decidimos mañana por la mañana?' },
        { de: 'Wir verschieben das Picknick auf Sonntag.', es: 'Pasamos el picnic al domingo.' },
        { de: 'Gute Idee, Sonntag soll es trocken bleiben.', es: 'Buena idea, el domingo dicen que no llueve.' },
        { de: 'Das Grillfest ist nur bei schönem Wetter.', es: 'La barbacoa es solo si hace buen tiempo.' },
        { de: 'Dann drücken wir die Daumen bis Samstag.', es: 'Entonces cruzamos los dedos hasta el sábado.' }
      ] },
  'Gehen wir schwimmen, wenn es warm bleibt?':
    { de: 'Sehr gern. Ab fünf ist weniger los im Bad.', es: 'Con mucho gusto. A partir de las cinco hay menos gente.',
      mas: [
        { de: 'Ich fahre morgen mit dem Rad, wenn es trocken bleibt.', es: 'Mañana voy en bici si no llueve.' },
        { de: 'Dann fahren wir zusammen, ich habe denselben Weg.', es: 'Entonces vamos juntos, hago el mismo camino.' },
        { de: 'Sollen wir drinnen oder draußen sitzen?', es: '¿Nos sentamos dentro o fuera?' },
        { de: 'Draußen, solange die Sonne noch auf die Terrasse scheint.', es: 'Fuera, mientras el sol dé en la terraza.' }
      ] },
  'Wenn es schneit, fahre ich nicht mit dem Auto.':
    { de: 'Sehr vernünftig. Die Winterreifen hast du ja noch nicht.', es: 'Muy sensato. Todavía no tienes las ruedas de invierno.',
      mas: [
        { de: 'Bei Gewitter gehen wir nicht auf den Berg.', es: 'Si hay tormenta no subimos a la montaña.' },
        { de: 'Auf keinen Fall. Oben gibt es keinen Schutz.', es: 'De ninguna manera. Arriba no hay dónde refugiarse.' },
        { de: 'Bei der Hitze bleibe ich zu Hause.', es: 'Con este calor me quedo en casa.' },
        { de: 'Verständlich. Am Abend wird es erträglicher.', es: 'Comprensible. Por la tarde se hace más llevadero.' }
      ] },


  // ---- a11-l8 · sagen, wie oft man etwas macht ----------------------
  'Wie oft machst du Sport?':
    { de: 'Drei- bis viermal die Woche, je nach Schicht.', es: 'Tres o cuatro veces por semana, según el turno.',
      mas: [
        { de: 'Ich gehe zweimal pro Woche ins Fitnessstudio.', es: 'Voy al gimnasio dos veces por semana.' },
        { de: 'Immer an denselben Tagen oder wie es passt?', es: '¿Siempre los mismos días o según venga?' },
        { de: 'Ich trainiere immer vor der Arbeit.', es: 'Entreno siempre antes del trabajo.' },
        { de: 'Um sechs Uhr früh? Das könnte ich nie.', es: '¿A las seis de la mañana? Yo no podría.' },
        { de: 'immer – oft – manchmal – selten – nie', es: 'siempre – a menudo – a veces – rara vez – nunca' },
        { de: 'Bei mir ist es leider meistens „selten“.', es: 'En mi caso por desgracia casi siempre es «rara vez».' }
      ] },
  'Manchmal gehe ich am Abend schwimmen.':
    { de: 'In welches Bad? Ich suche noch eines in der Nähe.', es: '¿A qué piscina? Estoy buscando una cerca.',
      mas: [
        { de: 'Ins Kino gehe ich nur selten.', es: 'Al cine voy pocas veces.' },
        { de: 'Ich auch nicht mehr. Zu Hause ist es bequemer.', es: 'Yo tampoco ya. En casa se está más cómodo.' },
        { de: 'Ich habe noch nie Ski gefahren.', es: 'Nunca he esquiado.' },
        { de: 'Wirklich nicht? Dann wird es Zeit, hier in Österreich.', es: '¿De verdad que no? Pues ya va siendo hora, aquí en Austria.' }
      ] },
  'Ich koche fast jeden Tag selbst.':
    { de: 'Und wird dir das nie zu viel?', es: '¿Y nunca se te hace demasiado?',
      mas: [
        { de: 'Ich lese jeden Abend eine halbe Stunde.', es: 'Leo media hora todas las noches.' },
        { de: 'Das schlafe ich immer weg. Nach zwei Seiten bin ich weg.', es: 'A mí eso me duerme. A las dos páginas caigo.' },
        { de: 'Wir treffen uns einmal im Monat.', es: 'Nos vemos una vez al mes.' },
        { de: 'Das klingt wenig, aber so klappt es wenigstens.', es: 'Suena poco, pero así al menos funciona.' }
      ] },

  // ---- a11-l8 · über Gewohnheiten und Routinen sprechen -------------
  'Treibst du regelmäßig Sport?':
    { de: 'Ich versuche es. Im Winter klappt es besser.', es: 'Lo intento. En invierno funciona mejor.',
      mas: [
        { de: 'Gehst du ins Fitnessstudio?', es: '¿Vas al gimnasio?' },
        { de: 'Nein, ich laufe lieber draußen. Das kostet auch nichts.', es: 'No, prefiero correr fuera. Además no cuesta nada.' },
        { de: 'Fährst du jeden Tag mit dem Rad?', es: '¿Vas en bici todos los días?' },
        { de: 'Bei jedem Wetter außer Schnee.', es: 'Con cualquier tiempo menos con nieve.' },
        { de: 'Wie oft kochst du selbst?', es: '¿Cada cuánto cocinas tú?' },
        { de: 'Unter der Woche immer. Am Wochenende gehen wir aus.', es: 'Entre semana siempre. El fin de semana salimos.' }
      ] },
  'Wie häufig hast du Deutschkurs?':
    { de: 'Montags und mittwochs, jeweils zwei Stunden.', es: 'Lunes y miércoles, dos horas cada vez.',
      mas: [
        { de: 'Singst du regelmäßig im Chor?', es: '¿Cantas en el coro con regularidad?' },
        { de: 'Jeden Donnerstag. Das ist mein schönster Abend.', es: 'Todos los jueves. Es mi mejor tarde.' },
        { de: 'Ich mache fast täglich Gartenarbeit.', es: 'Trabajo en el jardín casi a diario.' },
        { de: 'Dann sieht bei dir sicher alles perfekt aus.', es: 'Entonces seguro que lo tienes todo perfecto.' }
      ] },
  'Gehst du oft ins Kino?':
    { de: 'Vielleicht viermal im Jahr, und immer im Sommer.', es: 'Quizá cuatro veces al año, y siempre en verano.',
      mas: [
        { de: 'Wie oft gehst du ins Theater?', es: '¿Con qué frecuencia vas al teatro?' },
        { de: 'Einmal im Jahr, mit meiner Mutter zu Weihnachten.', es: 'Una vez al año, con mi madre en Navidad.' },
        { de: 'Wir spielen jeden Sonntag ein Brettspiel.', es: 'Cada domingo jugamos a un juego de mesa.' },
        { de: 'Das würde meinen Kindern auch gefallen.', es: 'Eso también les gustaría a mis hijos.' }
      ] },

  // ---- a11-l8 · über Fähigkeiten sprechen ---------------------------
  'Du spielst super Fußball!':
    { de: 'Danke! Ich spiele seit ich sechs bin.', es: '¡Gracias! Juego desde los seis años.',
      mas: [
        { de: 'Bist du Anfänger oder schon fortgeschritten?', es: '¿Eres principiante o ya avanzado?' },
        { de: 'Dazwischen. Für die erste Mannschaft reicht es nicht.', es: 'Entre medias. Para el primer equipo no llega.' },
        { de: 'Hast du genug Ehrgeiz für den Wettkampf?', es: '¿Tienes suficiente ambición para la competición?' },
        { de: 'Ehrlich gesagt nein. Ich spiele nur zum Spaß.', es: 'Sinceramente no. Juego solo por diversión.' },
        { de: 'Das kann ich überhaupt nicht.', es: 'Eso no sé hacerlo para nada.' },
        { de: 'Sag das nicht. Mit etwas Übung schon.', es: 'No digas eso. Con algo de práctica sí.' }
      ] },
  'Spielst du ein Instrument?':
    { de: 'Klavier, aber schon lange nicht mehr.', es: 'El piano, pero hace mucho que no.',
      mas: [
        { de: 'Kannst du ein Instrument spielen?', es: '¿Sabes tocar algún instrumento?' },
        { de: 'Nur ein bisschen Blockflöte, aus der Schule.', es: 'Solo un poco de flauta dulce, del colegio.' },
        { de: 'Kannst du Gitarre spielen?', es: '¿Sabes tocar la guitarra?' },
        { de: 'Drei Akkorde. Damit komme ich durch jeden Abend.', es: 'Tres acordes. Con eso aguanto cualquier noche.' }
      ] },
  'Kannst du schwimmen?':
    { de: 'Ja, aber nicht besonders schnell.', es: 'Sí, pero no especialmente rápido.',
      mas: [
        { de: 'Bist du gut im Kochen?', es: '¿Se te da bien cocinar?' },
        { de: 'Drei Gerichte kann ich richtig gut, der Rest ist Glück.', es: 'Tres platos me salen muy bien, el resto es suerte.' },
        { de: 'Ich bin ziemlich schlecht in Mathematik.', es: 'Se me dan bastante mal las matemáticas.' },
        { de: 'Dafür hast du ein gutes Gedächtnis für Sprachen.', es: 'En cambio tienes buena memoria para los idiomas.' }
      ] },

  // ---- a11-l8 · über Hobbys und Interessen sprechen -----------------
  'Was machst du in deiner Freizeit?':
    { de: 'Vor allem draußen sein, am liebsten in den Bergen.', es: 'Sobre todo estar fuera, mejor en la montaña.',
      mas: [
        { de: 'Mein größtes Hobby ist Klettern.', es: 'Mi mayor afición es la escalada.' },
        { de: 'Drinnen in der Halle oder draußen am Fels?', es: '¿Dentro en el rocódromo o fuera en roca?' },
        { de: 'Was machst du am liebsten in deiner Freizeit?', es: '¿Qué es lo que más te gusta hacer en tu tiempo libre?' },
        { de: 'Lange Spaziergänge, ohne Handy, ohne Ziel.', es: 'Paseos largos, sin móvil, sin rumbo.' },
        { de: 'Was ist deine größte Leidenschaft?', es: '¿Cuál es tu mayor pasión?' },
        { de: 'Die Berge. Alles andere kommt danach.', es: 'Las montañas. Todo lo demás viene después.' }
      ] },
  'Mein Hobby ist Fotografieren.':
    { de: 'Was fotografierst du am liebsten?', es: '¿Qué te gusta más fotografiar?',
      mas: [
        { de: 'Sammelst du etwas?', es: '¿Coleccionas algo?' },
        { de: 'Alte Postkarten aus Wien. Ich habe schon dreihundert.', es: 'Postales antiguas de Viena. Ya tengo trescientas.' },
        { de: 'Was für Filme siehst du gern?', es: '¿Qué tipo de películas te gusta ver?' },
        { de: 'Alles außer Horror. Da schlafe ich schlecht.', es: 'De todo menos terror. Con eso duermo mal.' }
      ] },
  'Machst du gern Sport?':
    { de: 'Sehr gern, aber nur draußen. Hallen mag ich nicht.', es: 'Mucho, pero solo fuera. Los pabellones no me gustan.',
      mas: [
        { de: 'Ich entspanne mich am besten beim Kochen.', es: 'Donde mejor me relajo es cocinando.' },
        { de: 'Das verstehe ich. Man denkt an nichts anderes.', es: 'Lo entiendo. No piensas en nada más.' },
        { de: 'Ich lese lieber, als fernzusehen.', es: 'Prefiero leer antes que ver la tele.' },
        { de: 'Ich auch, aber abends bin ich dafür zu müde.', es: 'Yo también, pero por la noche estoy muy cansado para eso.' }
      ] },

  // ---- a11-l8 · über Pläne und Kurse sprechen -----------------------
  'Ich will einen Deutschkurs machen.':
    { de: 'Gute Idee. Welches Niveau brauchst du?', es: 'Buena idea. ¿Qué nivel necesitas?',
      mas: [
        { de: 'Ich will nächstes Jahr einen Kurs machen.', es: 'El año que viene quiero hacer un curso.' },
        { de: 'Warum erst nächstes Jahr? Im Herbst fängt einer an.', es: '¿Por qué el año que viene? En otoño empieza uno.' },
        { de: 'Ich habe vor, im Sommer Spanisch zu lernen.', es: 'Tengo pensado aprender español en verano.' },
        { de: 'Dann kann ich dir helfen, das ist meine Muttersprache.', es: 'Entonces te puedo ayudar, es mi lengua materna.' },
        { de: 'Ich möchte gern Gitarre lernen.', es: 'Me gustaría aprender a tocar la guitarra.' },
        { de: 'Fang einfach an. Mit dreißig ist das noch gut möglich.', es: 'Empieza sin más. A los treinta todavía se puede.' }
      ] },
  'Hast du schon Pläne für den Sommer?':
    { de: 'Zwei Wochen Spanien, den Rest weiß ich noch nicht.', es: 'Dos semanas en España, el resto no lo sé todavía.',
      mas: [
        { de: 'Würdest du gern einen Tanzkurs machen?', es: '¿Te gustaría hacer un curso de baile?' },
        { de: 'Allein nicht, aber zu zweit würde ich mitgehen.', es: 'Solo no, pero en pareja me apuntaría.' },
        { de: 'Ich will nächstes Jahr einen Tanzkurs machen.', es: 'El año que viene quiero hacer un curso de baile.' },
        { de: 'Dann melden wir uns zusammen an, abgemacht.', es: 'Entonces nos apuntamos juntos, hecho.' }
      ] },
  'Bist du in einem Verein?':
    { de: 'Ja, im Fußballverein hier im Bezirk.', es: 'Sí, en el club de fútbol del distrito.',
      mas: [
        { de: 'In welchem Verein spielst du?', es: '¿En qué club juegas?' },
        { de: 'Beim SV Favoriten, in der zweiten Mannschaft.', es: 'En el SV Favoriten, en el segundo equipo.' },
        { de: 'Was kostet die Mitgliedschaft im Verein?', es: '¿Cuánto cuesta la membresía del club?' },
        { de: 'Achtzig Euro im Jahr, für Studenten die Hälfte.', es: 'Ochenta euros al año, para estudiantes la mitad.' }
      ] },

  // ---- a11-l8 · über Sport und Wettkämpfe sprechen ------------------
  'Wer hat gestern gewonnen?':
    { de: 'Die Gäste, zwei zu eins in der letzten Minute.', es: 'Los visitantes, dos a uno en el último minuto.',
      mas: [
        { de: 'Wie ist das Spiel am Sonntag ausgegangen?', es: '¿Cómo acabó el partido del domingo?' },
        { de: 'Unentschieden, null zu null. Sehr langweilig.', es: 'Empate, cero a cero. Muy aburrido.' },
        { de: 'Unsere Mannschaft hat leider verloren.', es: 'Nuestro equipo ha perdido.' },
        { de: 'Nächstes Mal. Ihr habt trotzdem gut gespielt.', es: 'La próxima vez. Aun así jugasteis bien.' },
        { de: 'Wann ist das nächste Spiel?', es: '¿Cuándo es el próximo partido?' },
        { de: 'Samstag um halb vier, wieder zu Hause.', es: 'El sábado a las tres y media, otra vez en casa.' }
      ] },
  'Nimmst du beim Turnier teil?':
    { de: 'Wenn das Knie hält, ja.', es: 'Si la rodilla aguanta, sí.',
      mas: [
        { de: 'Ich habe mich beim Training verletzt.', es: 'Me he lesionado en el entrenamiento.' },
        { de: 'Schlimm? Warst du schon beim Arzt?', es: '¿Grave? ¿Has ido al médico?' },
        { de: 'Der neue Trainer ist wirklich streng.', es: 'El entrenador nuevo es muy estricto.' },
        { de: 'Dafür seid ihr seit Jänner nicht mehr müde am Ende.', es: 'A cambio, desde enero ya no acabáis cansados.' }
      ] },
  'Wo trainiert ihr im Winter?':
    { de: 'In der Halle vom Gymnasium, zweimal die Woche.', es: 'En el pabellón del instituto, dos veces por semana.',
      mas: [
        { de: 'Die Ausrüstung war ganz schön teuer.', es: 'El equipamiento ha salido bastante caro.' },
        { de: 'Kauf gebraucht, im Verein verkaufen viele ihre alte.', es: 'Cómprala usada, en el club muchos venden la suya.' },
        { de: 'Wie viele Zuschauer waren beim Spiel?', es: '¿Cuántos espectadores había en el partido?' },
        { de: 'Vielleicht zweihundert. Bei dem Regen ist das viel.', es: 'Quizá doscientos. Con esa lluvia es mucho.' }
      ] },

  // ---- a11-l8 · jemanden einladen und reagieren ---------------------
  'Hast du Lust, am Samstag mitzukommen?':
    { de: 'Sehr gern! Wohin geht es denn?', es: '¡Con mucho gusto! ¿Adónde vais?',
      mas: [
        { de: 'Wir grillen am Sonntag, kommst du?', es: 'El domingo hacemos barbacoa, ¿vienes?' },
        { de: 'Ja, gern. Soll ich einen Salat mitbringen?', es: 'Sí, con gusto. ¿Llevo una ensalada?' },
        { de: 'Bring ruhig jemanden mit!', es: '¡Trae a quien quieras!' },
        { de: 'Dann komme ich mit meiner Schwester, sie ist zu Besuch.', es: 'Entonces voy con mi hermana, está de visita.' },
        { de: 'Ich lade dich zum Essen ein.', es: 'Te invito a comer.' },
        { de: 'Das ist lieb, aber dann zahle ich das nächste Mal.', es: 'Qué amable, pero la próxima pago yo.' }
      ] },
  'Kommst du mit ins Konzert?':
    { de: 'Wann denn? Diese Woche wird es eng.', es: '¿Cuándo? Esta semana va justo.',
      mas: [
        { de: 'Ich habe zwei Eintrittskarten, kommst du mit?', es: 'Tengo dos entradas, ¿te vienes?' },
        { de: 'Auf jeden Fall! Was kostet mich die Karte?', es: '¡Desde luego! ¿Cuánto me cuesta la entrada?' },
        { de: 'Wir spielen heute Abend Karten, magst du?', es: 'Esta noche jugamos a las cartas, ¿te apetece?' },
        { de: 'Gern, aber ich kann nur bis zehn bleiben.', es: 'Con gusto, pero solo puedo quedarme hasta las diez.' }
      ] },
  'Leider kann ich am Freitag nicht.':
    { de: 'Schade. Geht Samstag vielleicht auch?', es: 'Qué pena. ¿A lo mejor va el sábado?',
      mas: [
        { de: 'Vielleicht nächstes Mal, heute passt es nicht.', es: 'Quizá la próxima vez, hoy no me va bien.' },
        { de: 'Kein Problem, wir fragen dich einfach wieder.', es: 'No pasa nada, te volvemos a preguntar.' },
        { de: 'Ich muss leider absagen, mir geht es nicht gut.', es: 'Tengo que cancelar, no me encuentro bien.' },
        { de: 'Werd erst mal gesund. Melde dich, wenn du was brauchst.', es: 'Ponte bueno primero. Avísame si necesitas algo.' }
      ] },

  // ---- a11-l8 · widersprechen und korrigieren -----------------------
  'Das stimmt nicht.':
    { de: 'Doch, ich habe es selbst gelesen.', es: 'Que sí, lo he leído yo mismo.',
      mas: [
        { de: 'Das stimmt so nicht ganz.', es: 'Eso no es del todo así.' },
        { de: 'Gut, dann erklär mir, wie es wirklich war.', es: 'Bien, entonces explícame cómo fue de verdad.' },
        { de: 'Überhaupt nicht, das war ganz anders.', es: 'En absoluto, eso fue muy distinto.' },
        { de: 'Dann habe ich das wohl falsch verstanden.', es: 'Entonces lo habré entendido mal.' },
        { de: 'Das kann eigentlich nicht stimmen.', es: 'Eso no puede ser.' },
        { de: 'Schauen wir kurz nach, dann wissen wir es.', es: 'Vamos a mirarlo y así lo sabemos.' }
      ] },
  'Nein, überhaupt nicht.':
    { de: 'Sicher? Ich hätte schwören können.', es: '¿Seguro? Habría jurado que sí.',
      mas: [
        { de: 'Nein, das sehe ich völlig anders.', es: 'No, yo lo veo completamente distinto.' },
        { de: 'Interessant. Erzähl, warum.', es: 'Interesante. Cuenta, ¿por qué?' },
        { de: 'Also da bin ich anderer Meinung.', es: 'Pues yo opino distinto.' },
        { de: 'Das ist in Ordnung, wir müssen nicht immer gleich denken.', es: 'Está bien, no tenemos que pensar siempre igual.' }
      ] },
  'Da muss ich dir widersprechen.':
    { de: 'Nur zu. Ich höre mir das gern an.', es: 'Adelante. Lo escucho con gusto.',
      mas: [
        { de: 'Das glaube ich dir nicht.', es: 'Eso no me lo creo.' },
        { de: 'Dann komm mit und schau es dir selbst an.', es: 'Pues ven y míralo tú mismo.' },
        { de: 'Doch, ich kann sehr gut kochen!', es: '¡Que sí, sé cocinar muy bien!' },
        { de: 'Dann lade ich mich für Samstag selbst ein.', es: 'Entonces me invito yo mismo el sábado.' }
      ] },


  // ---- a11-start · begrüßen -----------------------------------------
  'Guten Morgen! / Guten Tag! / Guten Abend!':
    { de: 'Guten Morgen! Sie sind heute aber früh dran.', es: '¡Buenos días! Hoy viene usted pronto.',
      mas: [
        { de: 'Guten Morgen, schön, dass Sie da sind!', es: '¡Buenos días, qué bien que esté aquí!' },
        { de: 'Danke, ich freue mich auch. Wo soll ich mich hinsetzen?', es: 'Gracias, yo también me alegro. ¿Dónde me siento?' },
        { de: 'Guten Tag, Herr Müller!', es: '¡Buenas tardes, señor Müller!' },
        { de: 'Guten Tag! Schön, dass wir uns hier treffen.', es: '¡Buenas tardes! Qué bien encontrarnos aquí.' },
        { de: 'Guten Abend allerseits!', es: '¡Buenas tardes/noches a todos!' },
        { de: 'Guten Abend! Kommen Sie, es ist noch ein Platz frei.', es: '¡Buenas noches! Venga, queda un sitio libre.' }
      ] },
  'Hallo! · Servus! · Grüß Gott! (AT)':
    { de: 'Servus! Setz dich zu uns.', es: '¡Hola! Siéntate con nosotros.',
      mas: [
        { de: 'Hallo zusammen!', es: '¡Hola a todos!' },
        { de: 'Hallo! Wir haben gerade von dir gesprochen.', es: '¡Hola! Justo estábamos hablando de ti.' },
        { de: 'Grüß dich, Anna!', es: '¡Hola, Anna!' },
        { de: 'Grüß dich! Wie schön, dass du doch noch kommst.', es: '¡Hola! Qué bien que al final vengas.' }
      ] },
  'Hallo, lange nicht gesehen!':
    { de: 'Viel zu lange! Wie geht es dir?', es: '¡Demasiado! ¿Cómo estás?',
      mas: [
        { de: 'Schön, dich wiederzusehen!', es: '¡Qué bien verte otra vez!' },
        { de: 'Ganz meinerseits. Du hast dich gar nicht verändert.', es: 'Igualmente. No has cambiado nada.' },
        { de: 'Hi, wie läuft\'s?', es: '¡Hola! ¿Cómo va?' },
        { de: 'Ganz gut! Viel zu tun, aber alles in Ordnung.', es: '¡Bastante bien! Mucho que hacer, pero todo en orden.' }
      ] },

  // ---- a11-start · sich verabschieden -------------------------------
  'Auf Wiedersehen! · Tschüss! · Bis bald!':
    { de: 'Auf Wiedersehen! Kommen Sie gut nach Hause.', es: '¡Adiós! Que llegue bien a casa.',
      mas: [
        { de: 'Schönen Abend noch!', es: '¡Que pase buena tarde!' },
        { de: 'Danke, Ihnen auch. Bis zum nächsten Mal.', es: 'Gracias, igualmente. Hasta la próxima.' },
        { de: 'Bis nächste Woche im Kurs!', es: '¡Hasta la semana que viene en clase!' },
        { de: 'Bis nächste Woche! Vergiss die Hausaufgabe nicht.', es: '¡Hasta la semana que viene! No olvides los deberes.' },
        { de: 'Schönen Sonntag noch!', es: '¡Que tengas un buen domingo!' },
        { de: 'Danke, dir auch. Wir telefonieren am Montag.', es: 'Gracias, igualmente. Hablamos el lunes.' }
      ] },
  'Bis morgen!':
    { de: 'Bis morgen! Gleiche Zeit wie heute?', es: '¡Hasta mañana! ¿A la misma hora que hoy?',
      mas: [
        { de: 'Bis später!', es: '¡Hasta luego!' },
        { de: 'Bis später, ich bin ab fünf wieder da.', es: 'Hasta luego, vuelvo a partir de las cinco.' },
        { de: 'Gute Nacht!', es: '¡Buenas noches!' },
        { de: 'Gute Nacht, schlaf gut.', es: 'Buenas noches, que duermas bien.' }
      ] },
  'Schönen Feierabend noch!':
    { de: 'Danke! Endlich Wochenende.', es: '¡Gracias! Por fin fin de semana.',
      mas: [
        { de: 'Mach\'s gut, wir hören uns!', es: '¡Cuídate, hablamos!' },
        { de: 'Ja, ich schreibe dir am Wochenende.', es: 'Sí, te escribo el fin de semana.' },
        { de: 'Mach\'s gut!', es: '¡Cuídate! / ¡Que te vaya bien!' },
        { de: 'Du auch! Und pass auf dich auf.', es: '¡Tú también! Y cuídate.' }
      ] },

  // ---- a11-start · nach dem Namen fragen ----------------------------
  'Wie heißen Sie? – Mein Name ist Gruber.':
    { de: 'Freut mich, Frau Gruber. Ich bin die Kursleiterin.', es: 'Encantada, señora Gruber. Soy la profesora del curso.',
      mas: [
        { de: 'Wie heißen Sie mit Vornamen?', es: '¿Cuál es su nombre de pila?' },
        { de: 'Eva. Aber alle sagen Evi zu mir.', es: 'Eva. Pero todos me llaman Evi.' },
        { de: 'Und wie ist Ihr Nachname, bitte?', es: '¿Y su apellido, por favor?' },
        { de: 'Gruber, mit einem B wie Berta.', es: 'Gruber, con be de Berta.' },
        { de: 'Wie war Ihr Name noch einmal?', es: '¿Cómo era su nombre?' },
        { de: 'Gruber. Kein Problem, das vergessen alle am ersten Tag.', es: 'Gruber. No pasa nada, el primer día se le olvida a todos.' }
      ] },
  'Wie heißt du? – Ich heiße Nuria.':
    { de: 'Nuria, schöner Name. Woher kommt der?', es: 'Nuria, bonito nombre. ¿De dónde viene?',
      mas: [
        { de: 'Wie ist dein Vorname?', es: '¿Cuál es tu nombre de pila?' },
        { de: 'Nuria, und mein zweiter ist Isabel.', es: 'Nuria, y el segundo es Isabel.' },
        { de: 'Sagt man zu dir Luna oder Luní?', es: '¿Te llaman Luna o Luní?' },
        { de: 'Luna reicht. Luní sagt nur meine Großmutter.', es: 'Con Luna basta. Luní solo me llama mi abuela.' }
      ] },
  'Wer bist du?':
    { de: 'Ich bin David, ich fange heute im Kurs an.', es: 'Soy David, empiezo hoy en el curso.',
      mas: [
        { de: 'Wie ist dein Familienname?', es: '¿Cuál es tu apellido?' },
        { de: 'Horvat, wie in Kroatien üblich.', es: 'Horvat, como es común en Croacia.' },
        { de: 'Wie heißen Sie mit Nachnamen?', es: '¿Cuál es su apellido?' },
        { de: 'Öztürk. Soll ich es Ihnen aufschreiben?', es: 'Öztürk. ¿Se lo escribo?' }
      ] },

  // ---- a11-start · sich vorstellen ----------------------------------
  'Ich bin neu im Kurs, ich heiße Nuria.':
    { de: 'Willkommen, Nuria! Setz dich einfach zu uns.', es: '¡Bienvenida, Nuria! Siéntate con nosotros.',
      mas: [
        { de: 'Wir kennen uns noch nicht, oder?', es: 'Todavía no nos conocemos, ¿no?' },
        { de: 'Nein, noch nicht. Ich bin Clara.', es: 'No, todavía no. Yo soy Clara.' },
        { de: 'Freut mich, ich bin David.', es: 'Mucho gusto, soy David.' },
        { de: 'Freut mich auch, David. Bist du auch neu hier?', es: 'Igualmente, David. ¿Tú también eres nuevo?' },
        { de: 'Ich bin neu hier im Kurs.', es: 'Soy nuevo en el curso.' },
        { de: 'Dann zeige ich dir gleich alles. Es ist ganz einfach.', es: 'Entonces te enseño todo ahora. Es muy fácil.' }
      ] },
  'Ich heiße Maria.':
    { de: 'Hallo Maria! Ich bin Ahmet.', es: '¡Hola, Maria! Yo soy Ahmet.',
      mas: [
        { de: 'Mein Name ist Maria López.', es: 'Mi nombre es Maria López.' },
        { de: 'López, mit Akzent auf dem o, richtig?', es: 'López, con acento en la o, ¿verdad?' },
        { de: 'Hallo, mein Vorname ist Clara.', es: 'Hola, mi nombre de pila es Clara.' },
        { de: 'Schön, Clara. Sitzt du auch im Abendkurs?', es: 'Qué bien, Clara. ¿Tú también estás en el curso de tarde?' }
      ] },
  'Ich bin Ahmet. Und du?':
    { de: 'Ich bin Nuria, aus Valencia.', es: 'Soy Nuria, de Valencia.',
      mas: [
        { de: 'Darf ich mich vorstellen? Ich komme aus Syrien.', es: '¿Me presento? Soy de Siria.' },
        { de: 'Willkommen! Aus welcher Stadt genau?', es: '¡Bienvenido! ¿De qué ciudad exactamente?' },
        { de: 'Darf ich Ihnen meine Kollegin vorstellen?', es: '¿Le presento a mi compañera?' },
        { de: 'Sehr gern. Guten Tag, freut mich.', es: 'Con mucho gusto. Buenas tardes, encantado.' }
      ] },

  // ---- a11-start · nach dem Befinden fragen -------------------------
  'Wie geht\'s? – Danke, gut. Und dir?':
    { de: 'Auch gut. Das Wochenende war schön lang.', es: 'Bien también. El fin de semana fue bien largo.',
      mas: [
        { de: 'Wie war dein Wochenende?', es: '¿Qué tal el fin de semana?' },
        { de: 'Ruhig, viel geschlafen. Genau das brauchte ich.', es: 'Tranquilo, dormí mucho. Justo lo que necesitaba.' },
        { de: 'Du wirkst heute so fröhlich.', es: 'Hoy se te ve muy contento.' },
        { de: 'Bin ich auch. Ich habe die Prüfung bestanden!', es: 'Lo estoy. ¡He aprobado el examen!' },
        { de: 'Du wirkst heute so gut gelaunt.', es: 'Hoy se te ve de muy buen humor.' },
        { de: 'Die Sonne scheint, und morgen habe ich frei.', es: 'Hace sol y mañana libro.' }
      ] },
  'Wie geht es Ihnen? – Danke, sehr gut.':
    { de: 'Das freut mich zu hören. Und die Familie?', es: 'Me alegra oírlo. ¿Y la familia?',
      mas: [
        { de: 'Geht es Ihnen wieder besser?', es: '¿Se encuentra ya mejor?' },
        { de: 'Deutlich, danke der Nachfrage. Ab Montag arbeite ich wieder.', es: 'Bastante, gracias por preguntar. Desde el lunes vuelvo a trabajar.' },
        { de: 'Alles in Ordnung bei dir?', es: '¿Todo bien contigo?' },
        { de: 'Ja, alles gut. Nur ein bisschen müde.', es: 'Sí, todo bien. Solo un poco cansado.' }
      ] },
  'Wie fühlst du dich heute?':
    { de: 'Ehrlich? Nicht besonders.', es: '¿Sinceramente? No muy allá.',
      mas: [
        { de: 'Nicht so gut.', es: 'No muy bien.' },
        { de: 'Was ist denn los? Kann ich etwas tun?', es: '¿Qué pasa? ¿Puedo hacer algo?' },
        { de: 'Es geht.', es: 'Regular.' },
        { de: 'Dann setz dich und trink erst mal einen Tee.', es: 'Entonces siéntate y tómate primero un té.' }
      ] },

  // ---- a11-start · über die Herkunft sprechen -----------------------
  'Woher kommst du? – Ich komme aus Spanien.':
    { de: 'Aus Spanien! Und wo hast du so gut Deutsch gelernt?', es: '¡De España! ¿Y dónde has aprendido tan bien alemán?',
      mas: [
        { de: 'Aus welcher Stadt kommst du genau?', es: '¿De qué ciudad eres exactamente?' },
        { de: 'Aus Valencia, direkt am Meer.', es: 'De Valencia, justo al lado del mar.' },
        { de: 'Und wo genau in Spanien liegt das?', es: '¿Y dónde está eso exactamente en España?' },
        { de: 'An der Ostküste, etwa vier Stunden von Madrid.', es: 'En la costa este, a unas cuatro horas de Madrid.' },
        { de: 'Wie lange lebst du schon in Österreich?', es: '¿Cuánto llevas viviendo en Austria?' },
        { de: 'Seit drei Jahren. Die ersten Monate waren hart.', es: 'Desde hace tres años. Los primeros meses fueron duros.' }
      ] },
  'Woher kommen Sie? – Aus Wien.':
    { de: 'Ein echter Wiener also. Aus welchem Bezirk?', es: 'Un vienés de verdad, entonces. ¿De qué distrito?',
      mas: [
        { de: 'Bist du hier geboren?', es: '¿Naciste aquí?' },
        { de: 'Ja, im dritten Bezirk, und nie weggezogen.', es: 'Sí, en el distrito tres, y nunca me he mudado.' },
        { de: 'Bist du schon lange in Wien?', es: '¿Llevas mucho en Viena?' },
        { de: 'Mein ganzes Leben. Deshalb kenne ich jede Straßenbahn.', es: 'Toda mi vida. Por eso me sé todos los tranvías.' }
      ] },
  'Kommst du aus Deutschland?':
    { de: 'Nein, aus Österreich. Das hört man am Akzent.', es: 'No, de Austria. Se nota en el acento.',
      mas: [
        { de: 'Sind Sie aus der Schweiz?', es: '¿Es usted de Suiza?' },
        { de: 'Fast. Aus Vorarlberg, das klingt sehr ähnlich.', es: 'Casi. De Vorarlberg, suena muy parecido.' },
        { de: 'Sprichst du die Sprache deiner Eltern?', es: '¿Hablas el idioma de tus padres?' },
        { de: 'Verstehen ja, sprechen kaum. Das tut mir heute leid.', es: 'Entenderlo sí, hablarlo casi nada. Hoy lo lamento.' }
      ] },


  // ---- a11-start · Telefonnummer und Adresse angeben ----------------
  'Wie ist deine Telefonnummer? – 0664 123 45 67.':
    { de: 'Moment, ich tippe mit. Null sechs sechs vier …', es: 'Un momento, lo voy escribiendo. Cero seis seis cuatro…',
      mas: [
        { de: 'Hast du eine neue Nummer?', es: '¿Tienes un número nuevo?' },
        { de: 'Ja, seit letztem Monat. Die alte geht nicht mehr.', es: 'Sí, desde el mes pasado. La antigua ya no funciona.' },
        { de: 'Unter welcher Nummer erreiche ich dich am besten?', es: '¿En qué número te localizo mejor?' },
        { de: 'Am Handy, aber schreib lieber, ich telefoniere ungern.', es: 'Al móvil, pero mejor escribe, no me gusta hablar por teléfono.' },
        { de: 'Wo wohnst du? – In Wien, Hauptstraße 12.', es: '¿Dónde vives? – En Viena, Hauptstraße 12.' },
        { de: 'Das ist ja ganz in meiner Nähe.', es: 'Eso está muy cerca de mí.' }
      ] },
  'Wie ist Ihre E-Mail-Adresse?':
    { de: 'Vorname punkt Nachname, alles klein, bei gmx punkt at.', es: 'Nombre punto apellido, todo en minúsculas, arroba gmx punto at.',
      mas: [
        { de: 'Haben Sie eine Handynummer?', es: '¿Tiene un número de móvil?' },
        { de: 'Ja, aber tagsüber erreichen Sie mich besser im Büro.', es: 'Sí, pero durante el día me localiza mejor en la oficina.' },
        { de: 'Unter welcher Nummer erreiche ich Sie am besten?', es: '¿En qué número le localizo mejor?' },
        { de: 'Vormittags im Büro, ab drei nur noch am Handy.', es: 'Por la mañana en la oficina; a partir de las tres, solo en el móvil.' }
      ] },
  'Wo genau wohnst du in Wien?':
    { de: 'Im zehnten Bezirk, zwei Minuten vom Hauptbahnhof.', es: 'En el distrito diez, a dos minutos de la estación central.',
      mas: [
        { de: 'Schreib mir bitte deine Adresse auf.', es: 'Escríbeme tu dirección, por favor.' },
        { de: 'Mache ich, die Straße schreibt man ziemlich kompliziert.', es: 'Lo hago, la calle se escribe bastante complicada.' },
        { de: 'Wie lautet Ihre Postleitzahl?', es: '¿Cuál es su código postal?' },
        { de: '1100, das ist Favoriten.', es: '1100, eso es Favoriten.' }
      ] },

  // ---- a11-start · buchstabieren ------------------------------------
  'Wie schreibt man das?':
    { de: 'Ich buchstabiere es Ihnen langsam.', es: 'Se lo deletreo despacio.',
      mas: [
        { de: 'Können Sie das bitte buchstabieren?', es: '¿Puede deletrearlo, por favor?' },
        { de: 'Gern: G-R-U-B-E-R.', es: 'Con gusto: G-R-U-B-E-R.' },
        { de: 'M wie Martha, A wie Anton.', es: 'M de Martha, A de Anton.' },
        { de: 'Danke, so ist es viel klarer.', es: 'Gracias, así está mucho más claro.' },
        { de: 'Können Sie den Namen langsam buchstabieren?', es: '¿Puede deletrear el nombre despacio?' },
        { de: 'Natürlich, Buchstabe für Buchstabe.', es: 'Por supuesto, letra por letra.' }
      ] },
  'Wie schreibt man das mit ü oder mit ue?':
    { de: 'Mit ü. Im Ausland schreiben es viele mit ue.', es: 'Con ü. En el extranjero muchos lo escriben con ue.',
      mas: [
        { de: 'Ist das ein ß oder ein Doppel-s?', es: '¿Eso es una ß o una doble s?' },
        { de: 'Ein ß. In der Schweiz würde man ss schreiben.', es: 'Una ß. En Suiza se escribiría ss.' },
        { de: 'Ist das ein langes oder ein kurzes i?', es: '¿Es una i larga o corta?' },
        { de: 'Ein langes, deshalb steht ein h dahinter.', es: 'Larga, por eso lleva una h detrás.' }
      ] },
  'Schreibt man deinen Namen mit K oder mit C?':
    { de: 'Mit C, wie in Clara. Mit K sieht es ganz anders aus.', es: 'Con C, como Clara. Con K queda muy distinto.',
      mas: [
        { de: 'Buchstabieren Sie bitte Ihren Nachnamen.', es: 'Deletree su apellido, por favor.' },
        { de: 'Ö wie Österreich, Z, T, Ü, R, K.', es: 'Ö de Österreich, Z, T, Ü, R, K.' },
        { de: 'Schreibt man das groß oder klein?', es: '¿Se escribe eso con mayúscula o minúscula?' },
        { de: 'Groß, es ist ein Nomen. Die schreibt man immer groß.', es: 'Con mayúscula, es un sustantivo. Esos siempre van en mayúscula.' }
      ] },

  // ---- a11-start · sich im Kurs verständigen ------------------------
  'Wie bitte? Können Sie das wiederholen?':
    { de: 'Natürlich. Ich sagte: Übung vier auf Seite zwölf.', es: 'Por supuesto. He dicho: ejercicio cuatro en la página doce.',
      mas: [
        { de: 'Ich verstehe das nicht.', es: 'No lo entiendo.' },
        { de: 'Kein Problem, ich erkläre es noch einmal anders.', es: 'No pasa nada, lo explico otra vez de otra manera.' },
        { de: 'Langsamer, bitte!', es: '¡Más despacio, por favor!' },
        { de: 'Entschuldigung, ich spreche viel zu schnell.', es: 'Perdón, hablo demasiado rápido.' },
        { de: 'Können wir das noch einmal zusammen üben?', es: '¿Podemos practicarlo otra vez juntos?' },
        { de: 'Gern, wir machen es in Ruhe zu zweit.', es: 'Con gusto, lo hacemos con calma entre los dos.' }
      ] },
  'Was heißt „Tafel“ auf Spanisch?':
    { de: '„Pizarra“. Das Wort brauchst du hier jeden Tag.', es: '«Pizarra». Esa palabra la necesitas aquí a diario.',
      mas: [
        { de: 'Wie sagt man das auf Deutsch?', es: '¿Cómo se dice eso en alemán?' },
        { de: 'Man sagt „der Radiergummi“. Ein langes Wort für etwas Kleines.', es: 'Se dice «der Radiergummi». Una palabra larga para algo pequeño.' },
        { de: 'Was bedeutet dieses Wort?', es: '¿Qué significa esta palabra?' },
        { de: 'Das heißt „Feierabend“: der freie Teil nach der Arbeit.', es: 'Significa «Feierabend»: la parte libre después del trabajo.' }
      ] },
  'Ich habe eine Frage zu Übung vier.':
    { de: 'Sag sie ruhig, die haben bestimmt mehrere.', es: 'Dila tranquilo, seguro que la tienen varios.',
      mas: [
        { de: 'Arbeiten wir zu zweit oder allein?', es: '¿Trabajamos por parejas o solos?' },
        { de: 'Zu zweit, bitte. Such dir jemanden aus der Reihe.', es: 'Por parejas, por favor. Busca a alguien de la fila.' },
        { de: 'Ich brauche noch zwei Minuten, bitte.', es: 'Necesito dos minutos más, por favor.' },
        { de: 'Kein Problem, wir warten auf alle.', es: 'No pasa nada, esperamos a todos.' }
      ] },

  // ---- a11-start · Fragen an die Lehrerin ---------------------------
  'Entschuldigung, ich habe eine Frage.':
    { de: 'Bitte, immer gern. Worum geht es?', es: 'Adelante, con gusto. ¿De qué se trata?',
      mas: [
        { de: 'Auf welcher Seite sind wir?', es: '¿En qué página estamos?' },
        { de: 'Seite dreiundzwanzig, oben links.', es: 'Página veintitrés, arriba a la izquierda.' },
        { de: 'Wo sind wir gerade?', es: '¿Por dónde vamos?' },
        { de: 'Bei Aufgabe zwei b, der zweiten Zeile.', es: 'En el ejercicio dos b, la segunda línea.' },
        { de: 'Können Sie das bitte an die Tafel schreiben?', es: '¿Puede escribirlo en la pizarra, por favor?' },
        { de: 'Mache ich, dann können es alle abschreiben.', es: 'Lo hago, así lo pueden copiar todos.' }
      ] },
  'Wie heißt das auf Deutsch?':
    { de: '„Der Kugelschreiber“, kurz sagt man „Kuli“.', es: '«Der Kugelschreiber»; en corto se dice «Kuli».',
      mas: [
        { de: 'Wie spricht man das aus?', es: '¿Cómo se pronuncia?' },
        { de: 'Mit dem Ton auf der ersten Silbe. Hören Sie: „Kugel“.', es: 'Con el acento en la primera sílaba. Escuche: «Kugel».' },
        { de: 'Ist das richtig so?', es: '¿Está bien así?' },
        { de: 'Fast. Der Artikel muss „der“ sein, nicht „das“.', es: 'Casi. El artículo tiene que ser «der», no «das».' }
      ] },
  'Können Sie das noch einmal erklären?':
    { de: 'Gern, diesmal mit einem Beispiel an der Tafel.', es: 'Con gusto, esta vez con un ejemplo en la pizarra.',
      mas: [
        { de: 'Was ist die Hausaufgabe?', es: '¿Cuáles son los deberes?' },
        { de: 'Seite dreißig, Übungen eins bis drei.', es: 'Página treinta, ejercicios uno a tres.' },
        { de: 'Wann ist die nächste Prüfung?', es: '¿Cuándo es el próximo examen?' },
        { de: 'In zwei Wochen, am Donnerstag. Wir üben vorher.', es: 'Dentro de dos semanas, el jueves. Practicamos antes.' }
      ] },

  // ---- a11-start · im Kursraum um Erlaubnis bitten ------------------
  'Darf ich auf die Toilette gehen?':
    { de: 'Natürlich, sie ist den Gang runter rechts.', es: 'Por supuesto, está por el pasillo a la derecha.',
      mas: [
        { de: 'Darf ich kurz auf die Toilette gehen?', es: '¿Puedo ir un momento al baño?' },
        { de: 'Gehen Sie ruhig, wir warten mit der Übung.', es: 'Vaya tranquilo, esperamos con el ejercicio.' },
        { de: 'Können wir eine kurze Pause machen?', es: '¿Podemos hacer una pausa corta?' },
        { de: 'Gute Idee, zehn Minuten. Danach machen wir weiter.', es: 'Buena idea, diez minutos. Después seguimos.' },
        { de: 'Darf ich heute früher gehen?', es: '¿Puedo irme hoy antes?' },
        { de: 'Ja, aber sagen Sie mir kurz, warum.', es: 'Sí, pero dígame brevemente por qué.' }
      ] },
  'Darf ich das Fenster aufmachen?':
    { de: 'Bitte, hier ist es wirklich zu warm.', es: 'Por favor, aquí hace demasiado calor.',
      mas: [
        { de: 'Können Sie bitte das Fenster zumachen?', es: '¿Puede cerrar la ventana, por favor?' },
        { de: 'Sofort, es zieht wohl auf Ihrer Seite.', es: 'Enseguida, parece que le da corriente.' },
        { de: 'Darf ich das Licht anmachen?', es: '¿Puedo encender la luz?' },
        { de: 'Ja bitte, man sieht die Tafel kaum noch.', es: 'Sí, por favor, casi no se ve la pizarra.' }
      ] },
  'Können wir das Licht ausmachen?':
    { de: 'Ja, für den Film ist es besser dunkel.', es: 'Sí, para la película es mejor a oscuras.',
      mas: [
        { de: 'Können Sie mir bitte helfen? Ich finde die Übung nicht.', es: '¿Me puede ayudar, por favor? No encuentro el ejercicio.' },
        { de: 'Seite achtzehn, ganz unten auf der Seite.', es: 'Página dieciocho, al final del todo.' },
        { de: 'Was machen wir in der nächsten Stunde?', es: '¿Qué hacemos la próxima clase?' },
        { de: 'Die Zahlen bis hundert und ein kurzes Hörverstehen.', es: 'Los números hasta cien y una comprensión oral corta.' }
      ] },

  // ---- a11-start · sich bedanken und entschuldigen ------------------
  'Danke schön! – Bitte schön!':
    { de: 'Gern geschehen, dafür bin ich ja da.', es: 'De nada, para eso estoy.',
      mas: [
        { de: 'Vielen Dank für die Hilfe.', es: 'Muchas gracias por la ayuda.' },
        { de: 'Keine Ursache. Melden Sie sich einfach wieder.', es: 'No hay de qué. Vuelva a avisarme cuando quiera.' },
        { de: 'Vielen Dank, das war sehr nett von Ihnen.', es: 'Muchas gracias, ha sido muy amable.' },
        { de: 'Das mache ich doch gern für Sie.', es: 'Lo hago con gusto por usted.' },
        { de: 'Kein Problem, schon gut!', es: '¡No hay problema, no pasa nada!' },
        { de: 'Trotzdem danke, dass du so ruhig geblieben bist.', es: 'Aun así, gracias por mantener la calma.' }
      ] },
  'Entschuldigung, ich bin zu spät.':
    { de: 'Kommen Sie rein, wir haben gerade erst angefangen.', es: 'Pase, acabamos de empezar.',
      mas: [
        { de: 'Entschuldigung, der Bus hatte Verspätung.', es: 'Perdón, el autobús llegó tarde.' },
        { de: 'Das kennen wir alle. Setzen Sie sich einfach.', es: 'Eso nos pasa a todos. Siéntese sin más.' },
        { de: 'Darf ich mich für die Verspätung entschuldigen?', es: '¿Me disculpa por el retraso?' },
        { de: 'Nicht nötig, aber danke, dass Sie es sagen.', es: 'No hace falta, pero gracias por decirlo.' }
      ] },
  'Es tut mir leid.':
    { de: 'Das ist schon in Ordnung, wirklich.', es: 'No pasa nada, de verdad.',
      mas: [
        { de: 'Das tut mir wirklich leid.', es: 'Lo siento de verdad.' },
        { de: 'Ich weiß. Machen wir es einfach nächstes Mal besser.', es: 'Lo sé. La próxima vez lo hacemos mejor.' },
        { de: 'Entschuldigung, ich habe Sie unterbrochen.', es: 'Perdone, le he interrumpido.' },
        { de: 'Kein Problem, sprechen Sie ruhig zu Ende.', es: 'No pasa nada, termine tranquilo.' }
      ] },


  // ---- a12-l9 · über den Tagesablauf berichten ----------------------
  'Wie war dein Tag? – Ganz gut, danke.':
    { de: 'Nur ganz gut? Erzähl, was war denn?', es: '¿Solo bastante bien? Cuenta, ¿qué ha pasado?',
      mas: [
        { de: 'Ich habe den ganzen Tag gearbeitet.', es: 'He trabajado todo el día.' },
        { de: 'Ohne Pause? Das ist zu viel.', es: '¿Sin pausa? Eso es demasiado.' },
        { de: 'Der Tag war anstrengend, aber schön.', es: 'El día fue agotador, pero bonito.' },
        { de: 'So ist es am besten. Müde und zufrieden.', es: 'Así es lo mejor. Cansado y contento.' },
        { de: 'Ich bin heute viel zu spät aufgestanden.', es: 'Hoy me he levantado demasiado tarde.' },
        { de: 'Deshalb warst du im Kurs nicht da. Alles klar.', es: 'Por eso no estabas en clase. Entendido.' }
      ] },
  'Was hast du am Wochenende gemacht?':
    { de: 'Nicht viel. Am Samstag war eine Feier.', es: 'No mucho. El sábado hubo una fiesta.',
      mas: [
        { de: 'Wie war es denn gestern auf der Feier?', es: '¿Qué tal ayer en la fiesta?' },
        { de: 'Sehr lustig, aber wir sind viel zu spät heimgegangen.', es: 'Muy divertida, pero volvimos demasiado tarde.' },
        { de: 'Was ist danach passiert?', es: '¿Qué pasó después?' },
        { de: 'Wir sind noch zu Fuß durch die halbe Stadt gelaufen.', es: 'Nos recorrimos media ciudad a pie.' }
      ] },
  'Was hast du gestern Abend gemacht?':
    { de: 'Gar nichts. Sofa, Decke, ein Film.', es: 'Nada. Sofá, manta y una película.',
      mas: [
        { de: 'Zuerst habe ich … und dann bin ich …', es: 'Primero he … y luego he …' },
        { de: 'Genau so erzählt man das, sehr gut.', es: 'Justo así se cuenta, muy bien.' },
        { de: 'Gestern war ich beim Arzt.', es: 'Ayer estuve en el médico.' },
        { de: 'Nichts Schlimmes, hoffe ich?', es: 'Nada grave, espero.' }
      ] },

  // ---- a12-l9 · über besondere Erlebnisse im Alltag berichten -------
  'Ich habe den Zug verpasst.':
    { de: 'Um wie viel? Der nächste fährt in einer halben Stunde.', es: '¿Por cuánto? El siguiente sale en media hora.',
      mas: [
        { de: 'Wir hatten gestern eine Panne auf der Autobahn.', es: 'Ayer tuvimos una avería en la autopista.' },
        { de: 'Oje! Habt ihr lange auf den Abschleppdienst gewartet?', es: '¡Vaya! ¿Esperasteis mucho a la grúa?' },
        { de: 'Plötzlich ist der Strom ausgefallen.', es: 'De repente se fue la luz.' },
        { de: 'Im ganzen Haus? Bei uns auch, so gegen acht.', es: '¿En toda la casa? A nosotros también, hacia las ocho.' },
        { de: 'Gestern war ich zum ersten Mal beim Zahnarzt hier.', es: 'Ayer fui por primera vez al dentista aquí.' },
        { de: 'Und? War es anders als in Spanien?', es: '¿Y? ¿Fue distinto que en España?' }
      ] },
  'Vorhin hat deine Mutter angerufen.':
    { de: 'Hat sie gesagt, was sie wollte?', es: '¿Dijo qué quería?',
      mas: [
        { de: 'Vorhin hat dein Chef angerufen.', es: 'Antes ha llamado tu jefe.' },
        { de: 'Am Sonntag? Das kann nichts Gutes sein.', es: '¿Un domingo? Eso no puede ser bueno.' },
        { de: 'Wir haben uns im Kurs kennengelernt.', es: 'Nos conocimos en clase.' },
        { de: 'Schön. Aus dem Kurs sind bei mir zwei Freundschaften geblieben.', es: 'Qué bien. De mi curso me quedaron dos amistades.' }
      ] },
  'Wir waren letztes Wochenende in Salzburg.':
    { de: 'Bei dem Wetter? Da hat es doch dauernd geregnet.', es: '¿Con ese tiempo? Allí no paró de llover.',
      mas: [
        { de: 'Im Sommer bin ich zum ersten Mal geflogen.', es: 'En verano volé por primera vez.' },
        { de: 'Mit dreißig das erste Mal? Und, wie war es?', es: '¿La primera vez a los treinta? ¿Y qué tal?' },
        { de: 'Ich habe letztes Jahr meinen Führerschein gemacht.', es: 'El año pasado me saqué el carné de conducir.' },
        { de: 'Gratuliere! Hier ist die Prüfung nicht einfach.', es: '¡Felicidades! Aquí el examen no es fácil.' }
      ] },

  // ---- a12-l9 · Interesse und Erstaunen signalisieren ---------------
  'Echt? · Wirklich? · Ach so!':
    { de: 'Ja, ganz im Ernst. Ich war selbst überrascht.', es: 'Sí, totalmente en serio. Yo también me sorprendí.',
      mas: [
        { de: 'Ach wirklich?', es: '¿De verdad?' },
        { de: 'Doch, so war es. Frag Anna, sie war dabei.', es: 'Que sí, así fue. Pregunta a Anna, estaba allí.' },
        { de: 'Das ist ja interessant!', es: '¡Qué interesante!' },
        { de: 'Nicht wahr? Davon hatte ich noch nie gehört.', es: '¿Verdad que sí? Nunca había oído hablar de eso.' },
        { de: 'Erzähl weiter, das klingt spannend!', es: '¡Sigue contando, suena interesante!' },
        { de: 'Dann hör zu, der beste Teil kommt jetzt.', es: 'Pues escucha, ahora viene la mejor parte.' }
      ] },
  'Im Ernst?':
    { de: 'Ganz im Ernst. Ich habe es selbst gesehen.', es: 'Totalmente en serio. Lo vi yo mismo.',
      mas: [
        { de: 'Das ist ja unglaublich!', es: '¡Eso es increíble!' },
        { de: 'Genau das habe ich auch gedacht.', es: 'Justo eso pensé yo también.' },
        { de: 'Wie ist das denn passiert?', es: '¿Y cómo pasó eso?' },
        { de: 'Ganz banal: jemand hat die Tür nicht zugemacht.', es: 'Muy banal: alguien no cerró la puerta.' }
      ] },
  'Was für ein Zufall!':
    { de: 'Und das im selben Zug, in derselben Reihe.', es: 'Y en el mismo tren, en la misma fila.',
      mas: [
        { de: 'Das freut mich wirklich für dich!', es: '¡Me alegro mucho por ti!' },
        { de: 'Danke, ich habe es selbst kaum geglaubt.', es: 'Gracias, yo mismo casi no me lo creía.' },
        { de: 'Das tut mir leid.', es: 'Cuánto lo siento.' },
        { de: 'Danke. Es wird schon wieder, nur nicht heute.', es: 'Gracias. Ya pasará, pero no hoy.' }
      ] },

  // ---- a12-l9 · überrascht reagieren und nachhaken ------------------
  'Im Ernst? Das wusste ich gar nicht.':
    { de: 'Wir haben es auch erst letzte Woche erfahren.', es: 'Nosotros también lo supimos la semana pasada.',
      mas: [
        { de: 'Das hätte ich nicht gedacht.', es: 'No me lo habría imaginado.' },
        { de: 'Ich auch nicht. Man weiß nie, wie es kommt.', es: 'Yo tampoco. Nunca se sabe cómo va a salir.' },
        { de: 'Da bin ich jetzt wirklich überrascht.', es: 'Ahora sí que estoy sorprendido.' },
        { de: 'Setz dich lieber, es kommt noch mehr.', es: 'Mejor siéntate, todavía hay más.' },
        { de: 'Erzähl mir mehr davon!', es: '¡Cuéntame más!' },
        { de: 'Gern, aber dafür brauchen wir einen Kaffee.', es: 'Con gusto, pero para eso necesitamos un café.' }
      ] },
  'So ein Zufall, das glaube ich kaum!':
    { de: 'Und doch ist es so. Dieselbe Straße, dieselbe Nummer.', es: 'Y sin embargo es así. La misma calle, el mismo número.',
      mas: [
        { de: 'Das hätte ich nie von ihm gedacht.', es: 'Nunca lo habría pensado de él.' },
        { de: 'Ich kenne ihn seit zehn Jahren und war auch erstaunt.', es: 'Lo conozco desde hace diez años y también me sorprendí.' },
        { de: 'Erzähl mir mehr, das klingt spannend.', es: 'Cuéntame más, suena interesante.' },
        { de: 'Der Rest erzähle ich dir beim Essen.', es: 'El resto te lo cuento comiendo.' }
      ] },
  'Im Ernst? Das ist ja unglaublich.':
    { de: 'Ich habe es dreimal nachgelesen, es stimmt.', es: 'Lo he leído tres veces, es verdad.',
      mas: [
        { de: 'Ach so, jetzt verstehe ich.', es: 'Ah, ahora lo entiendo.' },
        { de: 'Genau, deshalb war sie gestern so still.', es: 'Exacto, por eso ayer estuvo tan callada.' },
        { de: 'Oje, das tut mir leid.', es: 'Vaya, lo siento.' },
        { de: 'Danke. Reden hilft schon mehr, als man denkt.', es: 'Gracias. Hablar ayuda más de lo que uno cree.' }
      ] },

  // ---- a12-l9 · Smalltalk führen ------------------------------------
  'Schönes Wetter heute, oder?':
    { de: 'Endlich. Nach der Woche haben wir es verdient.', es: 'Por fin. Después de esta semana nos lo merecemos.',
      mas: [
        { de: 'Die Tage werden schon wieder kürzer.', es: 'Los días ya se están acortando otra vez.' },
        { de: 'Stimmt, um acht ist es fast dunkel.', es: 'Es verdad, a las ocho ya está casi oscuro.' },
        { de: 'Viel los heute, oder?', es: 'Hay mucho movimiento hoy, ¿no?' },
        { de: 'Immer am Monatsanfang. Da kommen alle gleichzeitig.', es: 'Siempre a principios de mes. Vienen todos a la vez.' },
        { de: 'Der Kaffee hier ist gar nicht schlecht.', es: 'El café de aquí no está nada mal.' },
        { de: 'Für einen Automaten sogar ziemlich gut.', es: 'Para ser de máquina, incluso bastante bueno.' }
      ] },
  'Ist hier noch frei?':
    { de: 'Ja, bitte, setzen Sie sich.', es: 'Sí, por favor, siéntese.',
      mas: [
        { de: 'Warten Sie auch auf den Bus?', es: '¿Usted también espera el autobús?' },
        { de: 'Auf den 13A, aber der kommt heute nicht.', es: 'Al 13A, pero hoy no viene.' },
        { de: 'Arbeiten Sie auch in diesem Haus?', es: '¿Usted también trabaja en este edificio?' },
        { de: 'Im vierten Stock, bei der Versicherung.', es: 'En la cuarta planta, en la aseguradora.' }
      ] },
  'Kennen wir uns nicht von irgendwoher?':
    { de: 'Möglich. Gehen Sie auch in den Deutschkurs?', es: 'Puede ser. ¿Usted también va al curso de alemán?',
      mas: [
        { de: 'Wohnen Sie schon lange in diesem Viertel?', es: '¿Lleva mucho viviendo en este barrio?' },
        { de: 'Seit meiner Geburt. Ich kenne hier jedes Geschäft.', es: 'Desde que nací. Conozco todas las tiendas.' },
        { de: 'Hast du am Wochenende schon was vor?', es: '¿Tienes ya algún plan para el finde?' },
        { de: 'Noch nichts Festes. Hast du eine Idee?', es: 'Nada fijo todavía. ¿Tienes alguna idea?' }
      ] },

  // ---- a12-l9 · Wartezeiten und Situationen kommentieren ------------
  'Warten Sie schon lange?':
    { de: 'Zwanzig Minuten. Angeblich kommt bald einer.', es: 'Veinte minutos. Dicen que viene uno pronto.',
      mas: [
        { de: 'Der Verkehr war heute besonders schlimm.', es: 'Hoy el tráfico estaba especialmente mal.' },
        { de: 'Auf dem Gürtel stand alles. Eine Stunde für acht Kilometer.', es: 'En el Gürtel estaba todo parado. Una hora para ocho kilómetros.' },
        { de: 'Haben Sie es weit nach Hause?', es: '¿Le queda lejos su casa?' },
        { de: 'Vierzig Minuten, mit einmal Umsteigen.', es: 'Cuarenta minutos, con un transbordo.' },
        { de: 'Kommen Sie oft hierher?', es: '¿Viene usted aquí a menudo?' },
        { de: 'Jeden Dienstag. Man gewöhnt sich an den Warteraum.', es: 'Todos los martes. Uno se acostumbra a la sala de espera.' }
      ] },
  'Schönes Wetter heute, nicht wahr?':
    { de: 'Herrlich. Ich habe die Mittagspause draußen gemacht.', es: 'Espléndido. He hecho la pausa de comer fuera.',
      mas: [
        { de: 'Endlich wird es wieder heller draußen.', es: 'Por fin hay más luz fuera.' },
        { de: 'Ja, im Februar merkt man es zum ersten Mal.', es: 'Sí, en febrero se nota por primera vez.' },
        { de: 'Kennen Sie sich hier gut aus?', es: '¿Conoce bien la zona?' },
        { de: 'Ganz gut. Was suchen Sie denn?', es: 'Bastante bien. ¿Qué busca?' }
      ] },
  'Ich habe mich gestern richtig erschrocken.':
    { de: 'Warum, was war denn los?', es: '¿Por qué, qué pasó?',
      mas: [
        { de: 'Wir haben den ganzen Abend gelacht.', es: 'Nos reímos toda la noche.' },
        { de: 'Solche Abende bleiben am längsten in Erinnerung.', es: 'Esas noches son las que más se recuerdan.' },
        { de: 'Damals war ich noch keine zwanzig.', es: 'Entonces todavía no tenía veinte años.' },
        { de: 'Und schon allein in einem anderen Land. Respekt.', es: 'Y ya solo en otro país. Respeto.' }
      ] },

  // ---- a12-l9 · über Lebensstationen und Migration sprechen ---------
  '2015 bin ich nach Österreich gekommen.':
    { de: 'Und wie war der Anfang?', es: '¿Y cómo fueron los principios?',
      mas: [
        { de: 'Am Anfang war alles neu für mich.', es: 'Al principio todo era nuevo para mí.' },
        { de: 'Das kann ich mir vorstellen. Mir ging es genauso.', es: 'Me lo imagino. A mí me pasó lo mismo.' },
        { de: 'Die ersten Monate waren wirklich hart.', es: 'Los primeros meses fueron muy duros.' },
        { de: 'Und wann ist es leichter geworden?', es: '¿Y cuándo se hizo más fácil?' },
        { de: 'Mit der Zeit wurde alles leichter.', es: 'Con el tiempo todo se fue haciendo más fácil.' },
        { de: 'So ist es bei fast allen. Man merkt es nur später.', es: 'Así es en casi todos los casos. Solo se nota después.' }
      ] },
  'Am Anfang habe ich fast nichts verstanden.':
    { de: 'Und heute sprichst du so gut. Das geht schnell.', es: 'Y hoy hablas tan bien. Eso va rápido.',
      mas: [
        { de: 'Den Papierkram fand ich am schwierigsten.', es: 'El papeleo es lo que me pareció más difícil.' },
        { de: 'Da hat jeder hier gelitten, auch die Österreicher.', es: 'De eso ha sufrido todo el mundo aquí, también los austriacos.' },
        { de: 'Ich habe zuerst in einer Fabrik gearbeitet.', es: 'Al principio trabajé en una fábrica.' },
        { de: 'Und wie bist du dann in dein Fach gekommen?', es: '¿Y cómo llegaste luego a tu sector?' }
      ] },
  'Meine Familie ist ein Jahr später nachgekommen.':
    { de: 'Ein ganzes Jahr allein? Das ist lang.', es: '¿Un año entero solo? Eso es mucho.',
      mas: [
        { de: 'Ich habe hier viele nette Leute kennengelernt.', es: 'Aquí he conocido a mucha gente simpática.' },
        { de: 'Das hilft mehr als alles andere, finde ich.', es: 'Eso ayuda más que nada, creo yo.' },
        { de: 'Manchmal denke ich ans Zurückgehen.', es: 'A veces pienso en volver.' },
        { de: 'Verständlich. Aber dein Leben ist jetzt hier.', es: 'Comprensible. Pero tu vida está ahora aquí.' }
      ] },

  // ---- a12-l9 · Gespräche ablehnen oder vertagen --------------------
  'Ich möchte lieber nicht darüber sprechen.':
    { de: 'In Ordnung, ich frage nicht weiter.', es: 'De acuerdo, no pregunto más.',
      mas: [
        { de: 'Darüber möchte ich jetzt nicht reden.', es: 'De eso no quiero hablar ahora.' },
        { de: 'Kein Problem. Sag einfach, wenn es dir passt.', es: 'No pasa nada. Dime cuando te venga bien.' },
        { de: 'Das ist mir zu privat, entschuldige.', es: 'Eso es demasiado privado, perdona.' },
        { de: 'Entschuldige du, das war unpassend von mir.', es: 'Perdona tú, ha sido poco apropiado por mi parte.' },
        { de: 'Lass uns bitte das Thema wechseln.', es: 'Cambiemos de tema, por favor.' },
        { de: 'Gern. Hast du den Film am Sonntag gesehen?', es: 'Con gusto. ¿Viste la película del domingo?' }
      ] },
  'Entschuldigung, ich habe es eilig.':
    { de: 'Natürlich, lauf nur. Wir reden später.', es: 'Claro, vete. Hablamos después.',
      mas: [
        { de: 'Ich habe es gerade wirklich eilig.', es: 'Ahora mismo tengo mucha prisa.' },
        { de: 'Kein Problem, ich schreibe dir kurz alles auf.', es: 'No pasa nada, te lo apunto todo.' },
        { de: 'Können wir später weiterreden?', es: '¿Podemos seguir hablando más tarde?' },
        { de: 'Ja, ab vier bin ich frei. Komm einfach vorbei.', es: 'Sí, a partir de las cuatro estoy libre. Pásate.' }
      ] },
  'Ich bin heute nicht besonders gesprächig.':
    { de: 'Das ist völlig in Ordnung. Wir sitzen einfach so da.', es: 'Eso está perfectamente bien. Nos quedamos aquí sin más.',
      mas: [
        { de: 'Ich brauche gerade einen Moment für mich.', es: 'Ahora mismo necesito un momento para mí.' },
        { de: 'Nimm dir den. Ich bin draußen, wenn du magst.', es: 'Tómatelo. Estoy fuera si quieres.' },
        { de: 'Ich möchte mich darüber nicht aufregen.', es: 'No me quiero alterar con eso.' },
        { de: 'Sehr klug. Morgen sieht das alles anders aus.', es: 'Muy inteligente. Mañana todo se ve distinto.' }
      ] },


  // ---- a12-l10 · nach dem Weg fragen --------------------------------
  'Entschuldigung, wie komme ich zum Rathaus?':
    { de: 'Immer geradeaus, dann sehen Sie schon den Turm.', es: 'Todo recto y ya verá la torre.',
      mas: [
        { de: 'Ist das weit von hier?', es: '¿Está lejos de aquí?' },
        { de: 'Zehn Minuten, höchstens zwölf.', es: 'Diez minutos, doce como mucho.' },
        { de: 'Kann ich zu Fuß gehen?', es: '¿Puedo ir andando?' },
        { de: 'Auf jeden Fall, mit dem Auto finden Sie keinen Parkplatz.', es: 'Desde luego, en coche no encuentra aparcamiento.' },
        { de: 'Wie weit ist es bis ins Zentrum?', es: '¿Qué distancia hay hasta el centro?' },
        { de: 'Etwa zwei Kilometer. Mit der Straßenbahn drei Stationen.', es: 'Unos dos kilómetros. En tranvía, tres paradas.' }
      ] },
  'Entschuldigung, wo ist die Post?':
    { de: 'Gleich um die Ecke, neben der Apotheke.', es: 'A la vuelta de la esquina, al lado de la farmacia.',
      mas: [
        { de: 'Wo ist der nächste Supermarkt?', es: '¿Dónde está el supermercado más cercano?' },
        { de: 'Zwei Straßen weiter, der hat bis acht offen.', es: 'Dos calles más allá, abre hasta las ocho.' },
        { de: 'Ich suche die Bibliothek.', es: 'Busco la biblioteca.' },
        { de: 'Die ist im selben Gebäude wie die Volkshochschule.', es: 'Está en el mismo edificio que la escuela de adultos.' }
      ] },
  'Bin ich hier richtig zum Bahnhof?':
    { de: 'Fast. Sie müssen an der Ampel links, nicht rechts.', es: 'Casi. Tiene que ir a la izquierda en el semáforo, no a la derecha.',
      mas: [
        { de: 'Entschuldigung, wie komme ich zum Museum?', es: 'Perdone, ¿cómo llego al museo?' },
        { de: 'Mit der U2 bis Museumsquartier, dann sehen Sie es.', es: 'Con la U2 hasta Museumsquartier y ya lo ve.' },
        { de: 'Wie komme ich zum Schwimmbad?', es: '¿Cómo llego a la piscina?' },
        { de: 'Den Bus 7A nehmen, es ist die dritte Haltestelle.', es: 'Coja el autobús 7A, es la tercera parada.' }
      ] },

  // ---- a12-l10 · den Fußweg beschreiben -----------------------------
  'Ist es weit von hier? – Nein, fünf Minuten zu Fuß.':
    { de: 'Gut, dann gehe ich. Immer geradeaus?', es: 'Bien, entonces voy andando. ¿Todo recto?',
      mas: [
        { de: 'Gehen Sie geradeaus und dann die zweite Straße rechts.', es: 'Vaya todo recto y luego la segunda a la derecha.' },
        { de: 'Die zweite, nicht die erste. Verstanden.', es: 'La segunda, no la primera. Entendido.' },
        { de: 'Muss ich über die Brücke?', es: '¿Tengo que cruzar el puente?' },
        { de: 'Ja, und danach gleich wieder links am Wasser entlang.', es: 'Sí, y después enseguida a la izquierda junto al agua.' },
        { de: 'Wie lange brauche ich ungefähr?', es: '¿Cuánto tardo más o menos?' },
        { de: 'Eine knappe Viertelstunde, wenn Sie zügig gehen.', es: 'Un cuarto de hora escaso si va rápido.' }
      ] },
  'Ist das zu Fuß zu schaffen?':
    { de: 'Locker. Mit Kinderwagen vielleicht etwas mühsam.', es: 'Fácilmente. Con carrito quizá algo pesado.',
      mas: [
        { de: 'Gibt es hier eine Abkürzung?', es: '¿Hay por aquí un atajo?' },
        { de: 'Durch den Park, das spart fünf Minuten.', es: 'Por el parque, ahorra cinco minutos.' },
        { de: 'Kann ich hier über die Straße?', es: '¿Puedo cruzar aquí la calle?' },
        { de: 'Besser zwanzig Meter weiter, da ist ein Zebrastreifen.', es: 'Mejor veinte metros más allá, hay un paso de cebra.' }
      ] },
  'Ist die Post hier in der Nähe?':
    { de: 'Sehr nah, Sie sehen sie von hier fast schon.', es: 'Muy cerca, casi se ve desde aquí.',
      mas: [
        { de: 'Können Sie mir das auf der Karte zeigen?', es: '¿Me lo puede enseñar en el mapa?' },
        { de: 'Natürlich. Wir sind hier, und Sie wollen dorthin.', es: 'Por supuesto. Estamos aquí y usted quiere ir allí.' },
        { de: 'Können Sie mir die Richtung kurz zeigen?', es: '¿Me puede indicar la dirección un momento?' },
        { de: 'Dorthin, immer der Straßenbahn nach.', es: 'Hacia allá, siguiendo el tranvía.' }
      ] },

  // ---- a12-l10 · nach Haltestellen und Linien im Nahverkehr fragen ---
  'Welche Linie muss ich nehmen?':
    { de: 'Die U1, Richtung Leopoldau.', es: 'La U1, dirección Leopoldau.',
      mas: [
        { de: 'Wo muss ich umsteigen?', es: '¿Dónde tengo que hacer transbordo?' },
        { de: 'Bei Praterstern, dort in die U2.', es: 'En Praterstern, allí a la U2.' },
        { de: 'Wie viele Stationen sind das?', es: '¿Cuántas paradas son?' },
        { de: 'Vier bis zum Umsteigen, dann noch zwei.', es: 'Cuatro hasta el transbordo y luego dos más.' },
        { de: 'Muss ich irgendwo umsteigen?', es: '¿Tengo que hacer transbordo en algún sitio?' },
        { de: 'Diesmal nicht, der Bus fährt direkt durch.', es: 'Esta vez no, el autobús va directo.' }
      ] },
  'Welche Linie fährt zum Flughafen?':
    { de: 'Die S7, oder schneller mit dem CAT.', es: 'La S7, o más rápido con el CAT.',
      mas: [
        { de: 'Fährt dieser Bus zum Krankenhaus?', es: '¿Este autobús va al hospital?' },
        { de: 'Ja, aber steigen Sie erst an der übernächsten aus.', es: 'Sí, pero bájese en la segunda parada.' },
        { de: 'Fährt die Straßenbahn bis zum Prater?', es: '¿El tranvía llega hasta el Prater?' },
        { de: 'Bis zum Eingang sogar. Endstation.', es: 'Hasta la entrada incluso. Final de trayecto.' }
      ] },
  'Wann fährt der letzte Bus?':
    { de: 'Um dreiundzwanzig Uhr zehn, danach nur Nachtbus.', es: 'A las veintitrés y diez, después solo el nocturno.',
      mas: [
        { de: 'Wann fährt die letzte U-Bahn?', es: '¿Cuándo pasa el último metro?' },
        { de: 'Unter der Woche um halb eins, am Wochenende durchgehend.', es: 'Entre semana a las doce y media; el finde, toda la noche.' },
        { de: 'Fährt der Zug pünktlich?', es: '¿El tren sale puntual?' },
        { de: 'Laut Anzeige ja, aber das ändert sich oft.', es: 'Según el panel sí, pero eso cambia a menudo.' }
      ] },

  // ---- a12-l10 · im Nahverkehr den Weg erklären ---------------------
  'Nehmen Sie die U3 und steigen Sie bei Stephansplatz um.':
    { de: 'Und dann? In welche Linie?', es: '¿Y luego? ¿A qué línea?',
      mas: [
        { de: 'Sie müssen drei Stationen fahren.', es: 'Tiene que ir tres paradas.' },
        { de: 'Drei Stationen, dann bin ich da. Danke!', es: 'Tres paradas y ya estoy. ¡Gracias!' },
        { de: 'Ist das die richtige Richtung?', es: '¿Es esta la dirección correcta?' },
        { de: 'Nein, Sie müssen auf die andere Seite wechseln.', es: 'No, tiene que cambiar al otro lado.' },
        { de: 'Wie lange dauert es bis zum Flughafen?', es: '¿Cuánto se tarda al aeropuerto?' },
        { de: 'Mit der S-Bahn fünfundzwanzig Minuten.', es: 'Con el cercanías, veinticinco minutos.' }
      ] },
  'Wo kann ich eine Fahrkarte kaufen?':
    { de: 'Am Automaten dort, oder mit der App.', es: 'En la máquina de allí o con la aplicación.',
      mas: [
        { de: 'Muss ich das Ticket entwerten?', es: '¿Tengo que picar el billete?' },
        { de: 'Ja, vor dem Einsteigen. Sonst gilt es nicht.', es: 'Sí, antes de subir. Si no, no vale.' },
        { de: 'Von welchem Gleis fährt der Zug?', es: '¿De qué vía sale el tren?' },
        { de: 'Gleis elf, heute ausnahmsweise nicht Gleis neun.', es: 'Vía once, hoy excepcionalmente no la nueve.' }
      ] },
  'Der Zug hat zwanzig Minuten Verspätung.':
    { de: 'Dann schaffe ich meinen Anschluss nicht mehr.', es: 'Entonces ya no llego a mi enlace.',
      mas: [
        { de: 'Fährt am Sonntag auch die Straßenbahn?', es: '¿El domingo también hay tranvía?' },
        { de: 'Ja, nur seltener, alle fünfzehn Minuten.', es: 'Sí, solo que menos: cada quince minutos.' },
        { de: 'Fahren Sie lieber öffentlich oder mit dem Auto?', es: '¿Prefiere ir en transporte público o en coche?' },
        { de: 'Öffentlich, immer. In der Stadt ist das Auto Unsinn.', es: 'Transporte público, siempre. En la ciudad el coche es un disparate.' }
      ] },

  // ---- a12-l10 · Tickets und Fahrkarten kaufen ----------------------
  'Die Fahrkarten, bitte.':
    { de: 'Einen Moment, ich habe sie in der Jacke.', es: 'Un momento, las tengo en la chaqueta.',
      mas: [
        { de: 'Gilt das Ticket auch für die Straßenbahn?', es: '¿El billete vale también para el tranvía?' },
        { de: 'Ja, für alle Öffis in der Kernzone.', es: 'Sí, para todo el transporte público de la zona central.' },
        { de: 'Ist das Ticket auch im Vorort gültig?', es: '¿El billete vale también en las afueras?' },
        { de: 'Nein, dafür brauchen Sie eine Zusatzkarte.', es: 'No, para eso necesita un suplemento.' },
        { de: 'Brauche ich ein extra Ticket?', es: '¿Necesito un billete aparte?' },
        { de: 'Für das Rad ja, für den Hund nicht.', es: 'Para la bici sí, para el perro no.' }
      ] },
  'Lohnt sich eine Monatskarte für mich?':
    { de: 'Wenn Sie täglich fahren, auf jeden Fall.', es: 'Si viaja a diario, desde luego.',
      mas: [
        { de: 'Gilt mein Ticket auch im Nachtbus?', es: '¿Mi billete vale también en el autobús nocturno?' },
        { de: 'Ja, ohne Aufpreis. Das ist hier sehr praktisch.', es: 'Sí, sin recargo. Aquí es muy práctico.' },
        { de: 'Muss ich den Sitzplatz reservieren?', es: '¿Tengo que reservar asiento?' },
        { de: 'Am Freitag würde ich es machen, da ist alles voll.', es: 'El viernes yo lo haría, va todo lleno.' }
      ] },
  'Der Automat nimmt meine Karte nicht.':
    { de: 'Versuchen Sie den anderen, der funktioniert meistens.', es: 'Pruebe con la otra, esa suele funcionar.',
      mas: [
        { de: 'Der Automat hat mein Geld geschluckt.', es: 'La máquina se ha tragado mi dinero.' },
        { de: 'Dann melden Sie das am Schalter, die erstatten es.', es: 'Entonces avise en la ventanilla, lo devuelven.' },
        { de: 'Mein Ticket funktioniert nicht.', es: 'Mi billete no funciona.' },
        { de: 'Zeigen Sie mal her. Ah, das ist von gestern.', es: 'Déjeme ver. Ah, es de ayer.' }
      ] },

  // ---- a12-l10 · im Zug und am Bahnsteig nachfragen -----------------
  'Ist dieser Platz noch frei?':
    { de: 'Ja, bitte. Die Tasche nehme ich weg.', es: 'Sí, por favor. Quito la bolsa.',
      mas: [
        { de: 'Entschuldigung, das ist mein reservierter Platz.', es: 'Perdone, ese es mi asiento reservado.' },
        { de: 'Oh, Entschuldigung! Ich setze mich woanders hin.', es: '¡Ay, perdone! Me siento en otro sitio.' },
        { de: 'Können Sie mir mit dem Koffer helfen?', es: '¿Me puede ayudar con la maleta?' },
        { de: 'Natürlich, ich hebe ihn Ihnen hoch.', es: 'Por supuesto, se la subo.' },
        { de: 'Hält dieser Zug in Wels?', es: '¿Este tren para en Wels?' },
        { de: 'Nein, der fährt durch. Sie müssen in Linz umsteigen.', es: 'No, pasa de largo. Tiene que cambiar en Linz.' }
      ] },
  'Von welchem Bahnsteig fährt der Zug?':
    { de: 'Bahnsteig drei, unten durch die Unterführung.', es: 'Andén tres, abajo por el paso subterráneo.',
      mas: [
        { de: 'Wann kommen wir in Graz an?', es: '¿Cuándo llegamos a Graz?' },
        { de: 'Planmäßig um sechzehn Uhr vierzig.', es: 'Según horario, a las dieciséis cuarenta.' },
        { de: 'Ich habe meinen Anschluss verpasst.', es: 'He perdido mi enlace.' },
        { de: 'Gehen Sie zum Schalter, die buchen Sie kostenlos um.', es: 'Vaya a la ventanilla, le cambian el billete gratis.' }
      ] },
  'Gibt es hier WLAN?':
    { de: 'Ja, aber es ist ziemlich langsam.', es: 'Sí, pero va bastante lento.',
      mas: [
        { de: 'Wo ist der Speisewagen?', es: '¿Dónde está el vagón restaurante?' },
        { de: 'Vier Wagen nach vorne, hinter der ersten Klasse.', es: 'Cuatro vagones hacia delante, detrás de primera clase.' },
        { de: 'Wo finde ich die Gepäckaufbewahrung?', es: '¿Dónde está la consigna?' },
        { de: 'Im Untergeschoss, neben den Toiletten.', es: 'En el sótano, junto a los aseos.' }
      ] },

  // ---- a12-l10 · Orientierungsprobleme äußern -----------------------
  'Ich habe mich verlaufen.':
    { de: 'Kein Problem, wo wollen Sie denn hin?', es: 'No pasa nada, ¿adónde quiere ir?',
      mas: [
        { de: 'Ich glaube, ich habe mich verlaufen.', es: 'Creo que me he perdido.' },
        { de: 'Zeig mal das Handy, ich schaue kurz nach.', es: 'Enséñame el móvil, lo miro un momento.' },
        { de: 'Ich habe mich total verlaufen.', es: 'Me he perdido del todo.' },
        { de: 'Bleib, wo du bist. Ich hole dich ab.', es: 'Quédate donde estás. Te recojo.' },
        { de: 'Weißt du, wo wir gerade sind?', es: '¿Sabes dónde estamos ahora mismo?' },
        { de: 'Ungefähr. Das da hinten ist der Donaukanal.', es: 'Más o menos. Eso de allá atrás es el canal del Danubio.' }
      ] },
  'Ich habe mich total verfahren.':
    { de: 'Fahr an die Seite, wir schauen auf die Karte.', es: 'Aparta a un lado, miramos el mapa.',
      mas: [
        { de: 'Wegen der Umleitung sind wir falsch gefahren.', es: 'Por el desvío nos hemos equivocado de camino.' },
        { de: 'Die Schilder waren auch wirklich schlecht.', es: 'Los carteles estaban muy mal, la verdad.' },
        { de: 'Ich glaube, ich bin falsch eingestiegen.', es: 'Creo que me he subido al que no era.' },
        { de: 'Steig an der nächsten aus und fahr zurück.', es: 'Bájate en la siguiente y vuelve.' }
      ] },
  'Hier ist eine Baustelle, die Straße ist gesperrt.':
    { de: 'Seit wann denn? Gestern ging es noch.', es: '¿Desde cuándo? Ayer todavía se podía.',
      mas: [
        { de: 'Ist das hier eine Einbahnstraße?', es: '¿Esta es una calle de sentido único?' },
        { de: 'Ja, und zwar in die andere Richtung.', es: 'Sí, y además en el otro sentido.' },
        { de: 'Wo kann ich mein Rad abstellen?', es: '¿Dónde puedo dejar la bici?' },
        { de: 'Vor dem Eingang stehen Bügel, dort ist es sicher.', es: 'Delante de la entrada hay aros, ahí está seguro.' }
      ] },

  // ---- a12-l10 · Probleme unterwegs lösen ---------------------------
  'Wir stehen seit einer Stunde im Stau.':
    { de: 'Gibt es eine Ausweichstrecke?', es: '¿Hay una ruta alternativa?',
      mas: [
        { de: 'Ich komme bestimmt zu spät zum Termin.', es: 'Seguro que llego tarde a la cita.' },
        { de: 'Ruf an und sag Bescheid, das verstehen alle.', es: 'Llama y avisa, lo entiende todo el mundo.' },
        { de: 'Mein Handyakku ist leer.', es: 'Se me ha acabado la batería del móvil.' },
        { de: 'Nimm meins, ich habe noch achtzig Prozent.', es: 'Coge el mío, tengo el ochenta por ciento.' },
        { de: 'Sollen wir ein Taxi nehmen?', es: '¿Cogemos un taxi?' },
        { de: 'Im Stau bringt das auch nichts. Wir warten.', es: 'En el atasco tampoco sirve. Esperamos.' }
      ] },
  'Ich habe meine Fahrkarte verloren.':
    { de: 'Sag es dem Schaffner gleich, bevor er fragt.', es: 'Díselo al revisor antes de que pregunte.',
      mas: [
        { de: 'Der Bus ist einfach vorbeigefahren.', es: 'El autobús ha pasado de largo.' },
        { de: 'Das macht der immer, wenn er voll ist.', es: 'Eso lo hace siempre cuando va lleno.' },
        { de: 'Der Parkplatz ist komplett voll.', es: 'El aparcamiento está completamente lleno.' },
        { de: 'Hinter dem Supermarkt ist noch einer, meistens leer.', es: 'Detrás del súper hay otro, casi siempre vacío.' }
      ] },
  'Wir haben kein Benzin mehr.':
    { de: 'Die nächste Tankstelle ist drei Kilometer weiter.', es: 'La siguiente gasolinera está tres kilómetros más allá.',
      mas: [
        { de: 'Ich habe meinen Führerschein zu Hause vergessen.', es: 'Me he olvidado el carné en casa.' },
        { de: 'Dann fahre besser ich, das ist zu riskant.', es: 'Entonces mejor conduzco yo, es muy arriesgado.' },
        { de: 'Hier ist die Geschwindigkeit stark begrenzt.', es: 'Aquí la velocidad está muy limitada.' },
        { de: 'Dreißig, und es wird oft kontrolliert.', es: 'Treinta, y controlan a menudo.' }
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
