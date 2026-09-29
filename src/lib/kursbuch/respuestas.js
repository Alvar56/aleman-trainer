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











  // ---- Lektion 2: Die Einladung -------------------------------------------
















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









  // ---- Lektion 12: Danke für die Hilfe! ----------------------------------












  // ---- Lektion 13: Gesundheit! -------------------------------------------











  // ---- Lektion 14: Das schaffen wir! -------------------------------------













  // ---- Lektion 15: Wie geht das? -----------------------------------------











  // ---- Lektion 16: Glückwunsch! ------------------------------------------













  // ---- Start: preguntas para la profesora ----------------------------






















































































































































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




  // ---- a12-l11 · über Wohnungsmerkmale sprechen ---------------------
  'Die Wohnung hat 60 m² und zwei Zimmer.':
    { de: 'Für zwei Personen reicht das gut.', es: 'Para dos personas está bien.',
      mas: [
        { de: 'Unsere Wohnung hat fünfzig Quadratmeter.', es: 'Nuestro piso tiene cincuenta metros cuadrados.' },
        { de: 'Und wie viele Zimmer sind das?', es: '¿Y cuántas habitaciones son?' },
        { de: 'Die Wohnfläche ist kleiner als im Inserat.', es: 'La superficie es menor que en el anuncio.' },
        { de: 'Das ist leider oft so. Hast du nachgemessen?', es: 'Por desgracia pasa a menudo. ¿Lo has medido?' },
        { de: 'Die Wohnung ist leider nicht möbliert.', es: 'El piso no está amueblado.' },
        { de: 'Dann brauchst du erst mal ein Bett und einen Tisch.', es: 'Entonces necesitas primero una cama y una mesa.' }
      ] },



  // ---- a12-l11 · nach Mietkosten und Bedingungen fragen -------------
  'Wie hoch ist die Miete?':
    { de: 'Siebenhundertzwanzig Euro kalt.', es: 'Setecientos veinte euros sin gastos.',
      mas: [
        { de: 'Sind die Betriebskosten schon dabei?', es: '¿Están incluidos los gastos de comunidad?' },
        { de: 'Nein, die kommen dazu, etwa hundertdreißig.', es: 'No, van aparte, unos ciento treinta.' },
        { de: 'Wie hoch sind die Betriebskosten?', es: '¿Cuánto son los gastos de comunidad?' },
        { de: 'Im Jahr etwa tausendsechshundert, monatlich verteilt.', es: 'Al año unos mil seiscientos, repartidos por meses.' },
        { de: 'Was kostet die Wohnung im Monat?', es: '¿Cuánto cuesta el piso al mes?' },
        { de: 'Alles zusammen knapp neunhundert Euro.', es: 'Todo junto, casi novecientos euros.' }
      ] },



  // ---- a12-l11 · Wohnungsdetails und Ausstattung erfragen -----------
  'Wie groß ist die Wohnung?':
    { de: 'Fünfundsechzig Quadratmeter, plus Balkon.', es: 'Sesenta y cinco metros cuadrados, más balcón.',
      mas: [
        { de: 'Gibt es einen Balkon?', es: '¿Hay balcón?' },
        { de: 'Ja, nach Süden, mit Platz für einen kleinen Tisch.', es: 'Sí, al sur, con sitio para una mesita.' },
        { de: 'Sie liegt im dritten Stock.', es: 'Está en la tercera planta.' },
        { de: 'Und gibt es dafür einen Aufzug?', es: '¿Y hay ascensor para eso?' },
        { de: 'Gibt es einen Aufzug?', es: '¿Hay ascensor?' },
        { de: 'Leider nein. Dafür ist die Miete etwas niedriger.', es: 'Por desgracia no. A cambio el alquiler es algo menor.' }
      ] },



  // ---- a12-l11 · Wohnungsbesichtigung und Einzug planen -------------
  'Wir suchen seit drei Monaten eine Wohnung.':
    { de: 'Der Markt ist hart. Was ist euer Budget?', es: 'El mercado está duro. ¿Cuál es vuestro presupuesto?',
      mas: [
        { de: 'Wie viele Zimmer hat die Wohnung?', es: '¿Cuántas habitaciones tiene el piso?' },
        { de: 'Drei, plus Küche und Bad.', es: 'Tres, más cocina y baño.' },
        { de: 'Wann kann ich die Wohnung besichtigen?', es: '¿Cuándo puedo ver el piso?' },
        { de: 'Donnerstag um siebzehn Uhr, zusammen mit anderen.', es: 'El jueves a las diecisiete, junto con otros.' },
        { de: 'Wann kann ich sie besichtigen?', es: '¿Cuándo puedo verlo?' },
        { de: 'Wenn Donnerstag nicht passt, ginge auch Samstag früh.', es: 'Si el jueves no va bien, también podría el sábado temprano.' }
      ] },



  // ---- a12-l11 · Gefallen und Missfallen ausdrücken -----------------
  'Das gefällt mir (nicht).':
    { de: 'Sag ruhig ehrlich, was dich stört.', es: 'Di con sinceridad qué te molesta.',
      mas: [
        { de: 'Das Wohnzimmer gefällt mir sehr gut.', es: 'El salón me gusta mucho.' },
        { de: 'Vor allem das große Fenster, oder?', es: 'Sobre todo la ventana grande, ¿no?' },
        { de: 'Ich finde das Zimmer sehr gemütlich.', es: 'La habitación me parece muy acogedora.' },
        { de: 'Mit einem Teppich wird es noch wärmer.', es: 'Con una alfombra será aún más cálida.' },
        { de: 'Das Zimmer ist wirklich gemütlich.', es: 'La habitación es de verdad acogedora.' },
        { de: 'Dann nehmen wir es, oder? Ich bin überzeugt.', es: 'Entonces lo cogemos, ¿no? Yo estoy convencido.' }
      ] },



  // ---- a12-l11 · Möbel und Einrichtung bewerten ---------------------
  'Wie findest du die neue Küche?':
    { de: 'Praktisch, aber sehr weiß. Fast wie im Labor.', es: 'Práctica, pero muy blanca. Casi como un laboratorio.',
      mas: [
        { de: 'Das ist mir zu modern.', es: 'Eso es demasiado moderno para mí.' },
        { de: 'Was gefällt dir denn besser? Etwas aus Holz?', es: '¿Qué te gusta más? ¿Algo de madera?' },
        { de: 'Das Sofa ist nicht mein Geschmack.', es: 'El sofá no es de mi gusto.' },
        { de: 'Meins auch nicht, aber es ist sehr bequem.', es: 'El mío tampoco, pero es muy cómodo.' },
        { de: 'Diese Jalousien sehen sehr altmodisch aus.', es: 'Estas persianas parecen muy anticuadas.' },
        { de: 'Die sind aus den Achtzigern, das sieht man.', es: 'Son de los ochenta, se nota.' }
      ] },



  // ---- a12-l11 · im Möbelhaus nach Produkten fragen -----------------
  'Haben Sie auch Regale?':
    { de: 'Gleich hier hinten, eine ganze Abteilung.', es: 'Aquí detrás, toda una sección.',
      mas: [
        { de: 'Was kostet dieser Schrank?', es: '¿Cuánto cuesta este armario?' },
        { de: 'Zweihundertneunzig, im Moment mit Rabatt.', es: 'Doscientos noventa, ahora con descuento.' },
        { de: 'Was kostet dieser Tisch?', es: '¿Cuánto cuesta esta mesa?' },
        { de: 'Hundertzwanzig. Die Stühle kosten extra.', es: 'Ciento veinte. Las sillas van aparte.' },
        { de: 'Gibt es das auch in einer anderen Farbe?', es: '¿Lo tienen también en otro color?' },
        { de: 'In Schwarz und in Naturholz, beides im Katalog.', es: 'En negro y en madera natural, los dos en el catálogo.' }
      ] },



  // ---- a12-l11 · mit Nachbarn und Mitbewohnern sprechen -------------
  'Guten Tag, wir sind neu eingezogen.':
    { de: 'Herzlich willkommen! In welche Wohnung denn?', es: '¡Bienvenidos! ¿A qué piso?',
      mas: [
        { de: 'Wir sind Ihre neuen Nachbarn von oben.', es: 'Somos sus vecinos nuevos de arriba.' },
        { de: 'Sehr angenehm. Klopfen Sie, wenn Sie etwas brauchen.', es: 'Mucho gusto. Llamen si necesitan algo.' },
        { de: 'Wir machen am Samstag eine kleine Feier.', es: 'El sábado hacemos una fiestecita.' },
        { de: 'Danke fürs Bescheidsagen. Bis zehn ist alles erlaubt.', es: 'Gracias por avisar. Hasta las diez todo vale.' },
        { de: 'Entschuldigung, war es gestern zu laut?', es: 'Perdone, ¿ayer hubo demasiado ruido?' },
        { de: 'Überhaupt nicht, wir haben nichts gehört.', es: 'En absoluto, no hemos oído nada.' }
      ] },




  // ---- a12-l12 · sich im Amt informieren ----------------------------
  'Entschuldigung, bin ich hier richtig?':
    { de: 'Das kommt darauf an. Worum geht es denn?', es: 'Depende. ¿De qué se trata?',
      mas: [
        { de: 'Ich möchte einen Ausweis beantragen.', es: 'Quisiera solicitar un documento de identidad.' },
        { de: 'Dann sind Sie hier richtig. Nehmen Sie eine Nummer.', es: 'Entonces está en el sitio correcto. Coja un número.' },
        { de: 'Welche Unterlagen brauche ich?', es: '¿Qué documentación necesito?' },
        { de: 'Pass, Meldezettel und ein aktuelles Foto.', es: 'Pasaporte, empadronamiento y una foto actual.' },
        { de: 'Zu welchem Schalter muss ich?', es: '¿A qué ventanilla tengo que ir?' },
        { de: 'Schalter vier, aber warten Sie auf Ihre Nummer.', es: 'Ventanilla cuatro, pero espere a su número.' }
      ] },



  // ---- a12-l12 · Verfahren und Formalitäten klären ------------------
  'Wer ist für diesen Fall zuständig?':
    { de: 'Frau Berger, Zimmer 204, im zweiten Stock.', es: 'La señora Berger, sala 204, en la segunda planta.',
      mas: [
        { de: 'Wie lange dauert die Bearbeitung?', es: '¿Cuánto tarda la tramitación?' },
        { de: 'Vier bis sechs Wochen, im Sommer eher länger.', es: 'De cuatro a seis semanas; en verano más bien más.' },
        { de: 'Wann bekomme ich den Bescheid?', es: '¿Cuándo recibiré la resolución?' },
        { de: 'Sobald die Prüfung fertig ist, meist im Mai.', es: 'En cuanto acabe la revisión, normalmente en mayo.' },
        { de: 'Wird mir der Bescheid zugeschickt?', es: '¿Me envían la resolución?' },
        { de: 'Ja, per Post an die gemeldete Adresse.', es: 'Sí, por correo a la dirección registrada.' }
      ] },



  // ---- a12-l12 · ein formelles Telefonat beenden --------------------
  'Vielen Dank für Ihre Hilfe.':
    { de: 'Sehr gern geschehen. Melden Sie sich jederzeit.', es: 'Con mucho gusto. Llámeme cuando quiera.',
      mas: [
        { de: 'Vielen Dank für Ihre Auskunft.', es: 'Muchas gracias por la información.' },
        { de: 'Kein Problem. Ich hoffe, es hat weitergeholfen.', es: 'No hay problema. Espero que le haya servido.' },
        { de: 'Ich melde mich nächste Woche wieder.', es: 'Vuelvo a ponerme en contacto la semana que viene.' },
        { de: 'Sehr gut, dann haben wir bis dahin die Antwort.', es: 'Muy bien, para entonces tendremos la respuesta.' },
        { de: 'Auf Wiederhören!', es: '¡Hasta luego! (por teléfono)' },
        { de: 'Auf Wiederhören, einen schönen Tag noch.', es: 'Hasta luego, que tenga buen día.' }
      ] },



  // ---- a12-l12 · um Erlaubnis bitten --------------------------------
  'Darf ich hier parken?':
    { de: 'Nur mit Parkschein, und höchstens zwei Stunden.', es: 'Solo con tique, y dos horas como máximo.',
      mas: [
        { de: 'Darf ich hier kurz stehen bleiben?', es: '¿Puedo pararme aquí un momento?' },
        { de: 'Zum Ausladen ja, aber bleiben Sie beim Auto.', es: 'Para descargar sí, pero quédese junto al coche.' },
        { de: 'Darf ich mich hier kurz hinsetzen?', es: '¿Me puedo sentar aquí un momento?' },
        { de: 'Bitte, der Platz ist frei.', es: 'Por favor, el sitio está libre.' },
        { de: 'Darf ich hier während der Wartezeit telefonieren?', es: '¿Puedo hablar por teléfono aquí mientras espero?' },
        { de: 'Besser draußen im Gang, hier stört es die anderen.', es: 'Mejor fuera en el pasillo, aquí molesta a los demás.' }
      ] },



  // ---- a12-l12 · Erlaubnis und Verbot ausdrücken --------------------
  'Ja, das dürfen Sie. / Nein, das ist verboten.':
    { de: 'Gut, dann weiß ich Bescheid. Danke.', es: 'Bien, entonces ya lo sé. Gracias.',
      mas: [
        { de: 'Darf man hier fotografieren?', es: '¿Se puede hacer fotos aquí?' },
        { de: 'Im Hof ja, in den Büros nicht.', es: 'En el patio sí, en las oficinas no.' },
        { de: 'Rauchen ist hier leider verboten.', es: 'Aquí está prohibido fumar.' },
        { de: 'Verstehe. Gibt es draußen einen Platz dafür?', es: 'Entiendo. ¿Hay un sitio fuera para eso?' },
        { de: 'Ist es erlaubt, das mitzunehmen?', es: '¿Está permitido llevarse esto?' },
        { de: 'Das Formular ja, den Stift bitte nicht.', es: 'El formulario sí, el bolígrafo no, por favor.' }
      ] },



  // ---- a12-l12 · Auskunft über Gewohnheiten geben -------------------
  'Normalerweise arbeite ich bis 17 Uhr.':
    { de: 'Dann schaffen Sie es noch zum Amt, das schließt um sechs.', es: 'Entonces llega a la oficina, cierra a las seis.',
      mas: [
        { de: 'Normalerweise fange ich um acht an.', es: 'Normalmente empiezo a las ocho.' },
        { de: 'Und wie lange dauert Ihr Weg in die Arbeit?', es: '¿Y cuánto tarda en llegar al trabajo?' },
        { de: 'Meistens esse ich mittags in der Kantine.', es: 'Casi siempre como al mediodía en el comedor.' },
        { de: 'Ist das Essen dort gut? Bei uns leider nicht.', es: '¿Se come bien allí? En el nuestro no.' },
        { de: 'Normalerweise mache ich das am Freitag.', es: 'Normalmente eso lo hago el viernes.' },
        { de: 'Dann passt es ja, der Termin ist auch am Freitag.', es: 'Entonces encaja, la cita también es el viernes.' }
      ] },



  // ---- a12-l12 · Vorschläge machen und darauf reagieren -------------
  'Sollen wir das zusammen machen?':
    { de: 'Sehr gern, zu zweit geht es viel schneller.', es: 'Con mucho gusto, entre dos va mucho más rápido.',
      mas: [
        { de: 'Ja, gern. / Lieber nicht.', es: 'Sí, con gusto. / Mejor no.' },
        { de: 'Dann sag mir einfach, was dir lieber ist.', es: 'Entonces dime qué prefieres.' },
        { de: 'Sollen wir gleich anfangen?', es: '¿Empezamos ya?' },
        { de: 'Ja, je früher wir anfangen, desto besser.', es: 'Sí, cuanto antes empecemos, mejor.' },
        { de: 'Sollen wir den Bericht zusammen schreiben?', es: '¿Escribimos el informe juntos?' },
        { de: 'Gute Idee. Du die Zahlen, ich den Text?', es: 'Buena idea. ¿Tú los números y yo el texto?' }
      ] },



  // ---- a12-l12 · schriftliche Anträge und Schreiben formulieren -----
  'Wie beginne ich so ein Schreiben?':
    { de: 'Ganz formell, mit „Sehr geehrte Damen und Herren“.', es: 'Muy formal, con «Sehr geehrte Damen und Herren».',
      mas: [
        { de: 'Sehr geehrte Damen und Herren, ich wende mich an Sie wegen meines Antrags.', es: 'Muy señores míos, me dirijo a ustedes por mi solicitud.' },
        { de: 'Perfekt. Danach kommt gleich, was Sie wollen.', es: 'Perfecto. Después va directamente lo que quiere.' },
        { de: 'Hiermit beantrage ich …', es: 'Por la presente solicito …' },
        { de: 'Genau diese Formel erwarten die Ämter.', es: 'Justo esa fórmula esperan en la administración.' },
        { de: 'Mit freundlichen Grüßen und vielen Dank im Voraus.', es: 'Atentamente y gracias de antemano.' },
        { de: 'Und darunter die Unterschrift, dann ist es fertig.', es: 'Y debajo la firma, y ya está.' }
      ] },




  // ---- a12-l13 · Warnungen und Anweisungen aussprechen --------------
  'Vorsicht! · Pass auf!':
    { de: 'Danke, das hätte ich fast übersehen.', es: 'Gracias, casi no lo veo.',
      mas: [
        { de: 'Vorsicht, der Boden ist nass!', es: '¡Cuidado, el suelo está mojado!' },
        { de: 'Da sollte wirklich ein Schild stehen.', es: 'Ahí debería haber un cartel.' },
        { de: 'Achtung, hier ist eine Stufe.', es: 'Atención, aquí hay un escalón.' },
        { de: 'Gut, dass Sie es sagen, ich sehe schlecht.', es: 'Menos mal que lo dice, veo mal.' },
        { de: 'Pass auf, das Wasser ist heiß.', es: 'Ten cuidado, el agua está caliente.' },
        { de: 'Zu spät, ich habe mich schon verbrannt.', es: 'Demasiado tarde, ya me he quemado.' }
      ] },



  // ---- a12-l13 · Verhaltensregeln bei Krankheit beachten ------------
  'Wo genau tut es weh?':
    { de: 'Hier unten rechts, direkt unter den Rippen.', es: 'Aquí abajo a la derecha, justo bajo las costillas.',
      mas: [
        { de: 'Seit wann haben Sie die Beschwerden?', es: '¿Desde cuándo tiene las molestias?' },
        { de: 'Seit etwa einer Woche, aber es wird schlimmer.', es: 'Desde hace una semana, pero va a peor.' },
        { de: 'Ist der Schmerz eher stechend oder dumpf?', es: '¿El dolor es más punzante o sordo?' },
        { de: 'Dumpf, aber nachts wird er stechend.', es: 'Sordo, pero por la noche se vuelve punzante.' },
        { de: 'Atmen Sie bitte ruhig weiter.', es: 'Siga respirando con calma, por favor.' },
        { de: 'Das fällt mir gerade schwer, ehrlich gesagt.', es: 'Ahora me cuesta, la verdad.' }
      ] },



  // ---- a12-l13 · Schmerzen und Symptome beschreiben -----------------
  'Mein Kopf tut weh.':
    { de: 'Seit wann? Und hast du genug getrunken?', es: '¿Desde cuándo? ¿Y has bebido suficiente?',
      mas: [
        { de: 'Ich habe seit Tagen Kopfschmerzen.', es: 'Llevo días con dolor de cabeza.' },
        { de: 'Dann geh lieber zum Arzt, das ist zu lang.', es: 'Entonces mejor ve al médico, es demasiado tiempo.' },
        { de: 'Ich habe Fieber.', es: 'Tengo fiebre.' },
        { de: 'Wie viel denn? Hast du schon gemessen?', es: '¿Cuánta? ¿Te la has tomado?' },
        { de: 'Ich fühle mich nicht gut.', es: 'No me encuentro bien.' },
        { de: 'Leg dich hin, ich bringe dir einen Tee.', es: 'Túmbate, te traigo un té.' }
      ] },



  // ---- a12-l13 · körperliche Beschwerden schildern ------------------
  'Der Hals tut beim Schlucken weh.':
    { de: 'Machen Sie bitte den Mund auf, ich schaue kurz.', es: 'Abra la boca, por favor, miro un momento.',
      mas: [
        { de: 'Ich habe Fieber, achtunddreißig fünf.', es: 'Tengo fiebre, treinta y ocho y medio.' },
        { de: 'Seit wann genau? Und steigt es abends?', es: '¿Desde cuándo exactamente? ¿Y sube por la tarde?' },
        { de: 'Ich kann kaum tief atmen.', es: 'Casi no puedo respirar hondo.' },
        { de: 'Das schauen wir uns gleich genauer an.', es: 'Eso lo miramos ahora con más detalle.' },
        { de: 'Die Schmerzen kommen und gehen.', es: 'Los dolores van y vienen.' },
        { de: 'Gibt es einen Moment am Tag, an dem es schlimmer ist?', es: '¿Hay algún momento del día en que es peor?' }
      ] },



  // ---- a12-l13 · über das Befinden sprechen -------------------------
  'Wie geht es dir? – Nicht so gut.':
    { de: 'Was ist denn los? Erzähl.', es: '¿Qué pasa? Cuenta.',
      mas: [
        { de: 'Mir geht es leider gar nicht gut.', es: 'No me encuentro nada bien.' },
        { de: 'Soll ich dich zum Arzt begleiten?', es: '¿Te acompaño al médico?' },
        { de: 'Ich schlafe seit Wochen schlecht.', es: 'Llevo semanas durmiendo mal.' },
        { de: 'Das zieht alles andere mit runter. Sprich mit dem Arzt.', es: 'Eso arrastra todo lo demás. Habla con el médico.' },
        { de: 'Heute fühle ich mich schon viel besser.', es: 'Hoy ya me siento mucho mejor.' },
        { de: 'Sehr gut. Aber übertreib es noch nicht.', es: 'Muy bien. Pero no te pases todavía.' }
      ] },



  // ---- a12-l13 · Mitgefühl ausdrücken und Hilfe anbieten ------------
  'Gute Besserung! · Das tut mir leid.':
    { de: 'Danke, das ist lieb von dir.', es: 'Gracias, qué amable.',
      mas: [
        { de: 'Gute Besserung, werde schnell gesund!', es: '¡Que te mejores, recupérate pronto!' },
        { de: 'Ich gebe mir Mühe. Der Arzt sagt, eine Woche.', es: 'Lo intento. El médico dice que una semana.' },
        { de: 'Gute Besserung, ruh dich gut aus!', es: '¡Que te mejores, descansa bien!' },
        { de: 'Das mache ich. Sofa und Serien, den ganzen Tag.', es: 'Eso haré. Sofá y series todo el día.' },
        { de: 'Melde dich, wenn du etwas brauchst.', es: 'Avísame si necesitas algo.' },
        { de: 'Danke, ich weiß das wirklich zu schätzen.', es: 'Gracias, te lo agradezco de verdad.' }
      ] },



  // ---- a12-l13 · ärztlichen Rat einholen und Ratschläge geben -------
  'Was würden Sie mir raten?':
    { de: 'Zwei Tage Ruhe, viel trinken, und dann sehen wir.', es: 'Dos días de reposo, beber mucho, y luego vemos.',
      mas: [
        { de: 'Was hilft gegen Husten?', es: '¿Qué va bien para la tos?' },
        { de: 'Warmer Tee mit Honig, und Dampf einatmen.', es: 'Té caliente con miel y respirar vapor.' },
        { de: 'Was hilft am besten gegen Husten?', es: '¿Qué va mejor para la tos?' },
        { de: 'Ehrlich gesagt: Zeit. Alles andere hilft nur ein bisschen.', es: 'Sinceramente: el tiempo. Lo demás ayuda solo un poco.' },
        { de: 'Soll ich eine Tablette nehmen?', es: '¿Me tomo una pastilla?' },
        { de: 'Bei Fieber über achtunddreißig fünf, ja.', es: 'Con fiebre de más de treinta y ocho y medio, sí.' }
      ] },



  // ---- a12-l13 · eine Krankmeldung mitteilen ------------------------
  'Ich bin krank und kann heute nicht kommen.':
    { de: 'Gute Besserung. Waren Sie schon beim Arzt?', es: 'Que se mejore. ¿Ha ido ya al médico?',
      mas: [
        { de: 'Ich war heute beim Hausarzt.', es: 'Hoy he estado en el médico de cabecera.' },
        { de: 'Und was hat er gesagt?', es: '¿Y qué ha dicho?' },
        { de: 'Ich bin voraussichtlich bis Freitag im Krankenstand.', es: 'Previsiblemente estaré de baja hasta el viernes.' },
        { de: 'In Ordnung, ich sage dem Team Bescheid.', es: 'De acuerdo, aviso al equipo.' },
        { de: 'Die Bestätigung schicke ich Ihnen morgen.', es: 'Le envío el justificante mañana.' },
        { de: 'Das reicht völlig. Erholen Sie sich erst einmal.', es: 'Con eso basta. Recupérese primero.' }
      ] },




  // ---- a12-l14 · nach Kleidung und Größen fragen --------------------
  'Ich suche eine Hose in Größe 40.':
    { de: 'In Vierzig haben wir die dunkelblauen und die grauen.', es: 'En la cuarenta tenemos los azul oscuro y los grises.',
      mas: [
        { de: 'Wo kann ich das anprobieren?', es: '¿Dónde me lo puedo probar?' },
        { de: 'Die Umkleidekabinen sind ganz hinten links, neben den Schuhen.', es: 'Los probadores están al fondo a la izquierda, junto a los zapatos.' },
        { de: 'Diese Hose ist mir zu weit.', es: 'Este pantalón me queda ancho.' },
        { de: 'Dann bringe ich Ihnen die gleiche eine Nummer kleiner.', es: 'Entonces le traigo el mismo una talla menos.' },
        { de: 'Haben Sie das auch in Blau?', es: '¿Lo tienen también en azul?' },
        { de: 'In Blau leider nur noch in Größe achtunddreißig.', es: 'En azul por desgracia solo queda la treinta y ocho.' },
        { de: 'Haben Sie das eine Nummer größer?', es: '¿Lo tienen una talla más grande?' },
        { de: 'Im Lager schon. Ich hole es Ihnen, einen Moment.', es: 'En el almacén sí. Se lo traigo, un momento.' }
      ] },

  // ---- a12-l14 · Passform und Material beschreiben ------------------
  'Ich brauche etwas Warmes für den Winter.':
    { de: 'Dann schauen Sie sich diesen Mantel an, der ist aus Wolle.', es: 'Entonces mire este abrigo, es de lana.',
      mas: [
        { de: 'Hat die Jacke ein warmes Futter?', es: '¿La chaqueta tiene un forro cálido?' },
        { de: 'Ja, ein dickes, und man kann es sogar herausnehmen.', es: 'Sí, uno grueso, y además se puede quitar.' },
        { de: 'Der Stoff fühlt sich sehr angenehm an.', es: 'La tela es muy agradable al tacto.' },
        { de: 'Nicht wahr? Und er kratzt überhaupt nicht am Hals.', es: '¿Verdad que sí? Y no pica nada en el cuello.' },
        { de: 'Der Ärmel ist mir viel zu lang.', es: 'La manga me queda demasiado larga.' },
        { de: 'Das ändern wir Ihnen gern, das kostet nichts extra.', es: 'Se lo arreglamos con gusto, no cuesta nada más.' },
        { de: 'Der Reißverschluss geht kaum zu.', es: 'La cremallera casi no cierra.' },
        { de: 'Dann ist das Modell zu klein geschnitten. Nehmen Sie die nächste Größe.', es: 'Entonces el modelo va justo de corte. Coja la talla siguiente.' }
      ] },

  // ---- a12-l14 · Gefallen und Missfallen bei Kleidung äußern --------
  'Das Kleid steht dir wirklich gut.':
    { de: 'Findest du? Ich bin mir bei der Länge nicht sicher.', es: '¿Tú crees? No estoy segura del largo.',
      mas: [
        { de: 'Das steht dir gut!', es: '¡Te queda bien!' },
        { de: 'Danke! Dann nehme ich es, bevor ich es mir anders überlege.', es: '¡Gracias! Pues me lo llevo antes de cambiar de idea.' },
        { de: 'Das Muster ist mir zu auffällig.', es: 'El estampado me parece demasiado llamativo.' },
        { de: 'Verstehe. Daneben hängt dasselbe Modell einfarbig.', es: 'Entiendo. Al lado está el mismo modelo liso.' },
        { de: 'Mir gefällt die schlichte Variante besser.', es: 'Me gusta más la versión sencilla.' },
        { de: 'Die kann man auch öfter anziehen, ohne dass es auffällt.', es: 'Esa además se puede poner más veces sin que se note.' },
        { de: 'Das ist genau mein Stil.', es: 'Ese es justo mi estilo.' },
        { de: 'Das sieht man. Es passt zu allem, was du sonst trägst.', es: 'Se nota. Pega con todo lo que sueles llevar.' }
      ] },

  // ---- a12-l14 · Vorlieben vergleichen und bewerten -----------------
  'Welches gefällt dir besser?':
    { de: 'Ehrlich gesagt das linke, es wirkt hochwertiger.', es: 'Sinceramente el de la izquierda, parece de más calidad.',
      mas: [
        { de: 'Die blaue Jacke gefällt mir besser als die schwarze.', es: 'La chaqueta azul me gusta más que la negra.' },
        { de: 'Die blaue ist aber auch dreißig Euro teurer.', es: 'Pero la azul también cuesta treinta euros más.' },
        { de: 'Die ist billiger als die andere.', es: 'Esa es más barata que la otra.' },
        { de: 'Billiger schon, aber der Stoff hält nicht so lange.', es: 'Más barata sí, pero la tela no dura tanto.' },
        { de: 'Leder hält länger als Stoff.', es: 'El cuero dura más que la tela.' },
        { de: 'Stimmt, dafür ist es am Anfang deutlich teurer.', es: 'Es verdad, a cambio al principio es bastante más caro.' },
        { de: 'Am liebsten kaufe ich im Ausverkauf.', es: 'Lo que más me gusta es comprar en rebajas.' },
        { de: 'Dann warte noch zwei Wochen, dann fängt er an.', es: 'Pues espera dos semanas, entonces empiezan.' }
      ] },

  // ---- a12-l14 · Wünsche beim Einkauf äußern ------------------------
  'Ich hätte gern einen Termin.':
    { de: 'Gern, wann passt es Ihnen?', es: 'Claro, ¿cuándo le va bien?',
      mas: [
        { de: 'Am liebsten hätte ich es bis Freitag.', es: 'Lo querría idealmente para el viernes.' },
        { de: 'Freitag wird knapp, aber Donnerstagnachmittag ginge sicher.', es: 'El viernes va justo, pero el jueves por la tarde seguro que sí.' },
        { de: 'Ich würde gern noch etwas anderes sehen.', es: 'Me gustaría ver algo más.' },
        { de: 'Natürlich, ich zeige Ihnen die neue Kollektion von hinten.', es: 'Por supuesto, le enseño la colección nueva del fondo.' },
        { de: 'Könnte ich das bitte eingepackt bekommen?', es: '¿Me lo podría envolver, por favor?' },
        { de: 'Sehr gern, als Geschenk? Dann nehme ich das schöne Papier.', es: 'Con mucho gusto, ¿es para regalo? Uso el papel bonito.' },
        { de: 'Ich hätte gern einen Gutschein statt Geld.', es: 'Quisiera un vale en vez del dinero.' },
        { de: 'Kein Problem, der ist drei Jahre lang gültig.', es: 'No hay problema, vale para tres años.' }
      ] },

  // ---- a12-l14 · Reklamation und Umtausch abwickeln -----------------
  'Ich möchte das umtauschen. Hier ist der Kassenbon.':
    { de: 'Danke. Was stimmt denn nicht damit?', es: 'Gracias. ¿Qué le pasa?',
      mas: [
        { de: 'Der Reißverschluss ist kaputt.', es: 'La cremallera está rota.' },
        { de: 'Das sehe ich. Das war schon beim Kauf so, oder?', es: 'Ya lo veo. Eso ya venía así, ¿no?' },
        { de: 'Auf dem Hemd ist ein Fleck.', es: 'En la camisa hay una mancha.' },
        { de: 'Dann tauschen wir es selbstverständlich um, ohne Diskussion.', es: 'Entonces se lo cambiamos, por supuesto, sin discusión.' },
        { de: 'Bekomme ich das Geld zurück?', es: '¿Me devuelven el dinero?' },
        { de: 'Bei einem Mangel ja, sonst nur einen Gutschein.', es: 'Con un defecto sí; si no, solo un vale.' },
        { de: 'Bis wann kann ich es abholen?', es: '¿Hasta cuándo puedo recogerlo?' },
        { de: 'Ab Donnerstag liegt es hier, wir rufen Sie vorher an.', es: 'Desde el jueves está aquí, le llamamos antes.' }
      ] },

  // ---- a12-l14 · Kundendienst und Service anfragen ------------------
  'Ich habe online bestellt, aber nichts bekommen.':
    { de: 'Haben Sie die Bestellnummer? Dann schaue ich gleich nach.', es: '¿Tiene el número de pedido? Así lo miro ahora.',
      mas: [
        { de: 'Wann kommt die Lieferung?', es: '¿Cuándo llega la entrega?' },
        { de: 'Laut System morgen, zwischen acht und zwölf Uhr.', es: 'Según el sistema mañana, entre las ocho y las doce.' },
        { de: 'Die Sohle hat sich nach zwei Wochen gelöst.', es: 'La suela se ha despegado a las dos semanas.' },
        { de: 'Nach zwei Wochen ist das ganz klar ein Garantiefall.', es: 'A las dos semanas eso es claramente garantía.' },
        { de: 'Ist auf das Teil noch Garantie?', es: '¿Esta prenda todavía tiene garantía?' },
        { de: 'Zwei Jahre ab Kaufdatum, Sie sind also gut dabei.', es: 'Dos años desde la compra, así que va bien de tiempo.' },
        { de: 'Können Sie die Schuhe reparieren?', es: '¿Puede reparar los zapatos?' },
        { de: 'Die Sohle ja, das dauert etwa eine Woche.', es: 'La suela sí, tarda una semana más o menos.' }
      ] },

  // ---- a12-l14 · Meinung begründen und einschätzen ------------------
  'Ich finde das zu teuer für die Qualität.':
    { de: 'Da hast du recht, der Stoff ist wirklich dünn.', es: 'En eso tienes razón, la tela es muy fina.',
      mas: [
        { de: 'Für mich ist Qualität wichtiger als der Preis.', es: 'Para mí la calidad importa más que el precio.' },
        { de: 'Auf lange Sicht ist das sogar billiger, finde ich.', es: 'A la larga incluso sale más barato, creo yo.' },
        { de: 'Meiner Meinung nach ist das Angebot gut.', es: 'En mi opinión la oferta es buena.' },
        { de: 'Nur gilt es leider nur bis Samstag.', es: 'Solo que por desgracia vale solo hasta el sábado.' },
        { de: 'Das sehe ich anders, und zwar deshalb:', es: 'Yo lo veo distinto, y por esto:' },
        { de: 'Sag ruhig, vielleicht überzeugst du mich noch.', es: 'Dilo, a lo mejor me convences.' },
        { de: 'Das schaffen wir!', es: '¡Esto lo conseguimos!' },
        { de: 'Genau, zu zweit finden wir bestimmt etwas Passendes.', es: 'Exacto, entre los dos seguro que encontramos algo.' }
      ] },


  // ---- a12-l15 · um Unterstützung und Erklärung bitten --------------
  'Hast du kurz Zeit für eine Frage?':
    { de: 'Klar, setz dich. Worum geht es denn?', es: 'Claro, siéntate. ¿De qué se trata?',
      mas: [
        { de: 'Ich komme mit dem Formular nicht weiter.', es: 'No avanzo con el formulario.' },
        { de: 'Zeig mal her. Ah, hier fehlt die Steuernummer.', es: 'Déjame ver. Ah, aquí falta el número fiscal.' },
        { de: 'Ich verstehe die Anleitung nicht.', es: 'No entiendo las instrucciones.' },
        { de: 'Die ist auch schlecht geschrieben. Ich erkläre es dir einfacher.', es: 'Es que están mal escritas. Te lo explico más fácil.' },
        { de: 'Könntest du das noch einmal erklären?', es: '¿Podrías explicarlo otra vez?' },
        { de: 'Gern, und diesmal Schritt für Schritt, mit dem Papier vor uns.', es: 'Con gusto, y esta vez paso a paso, con el papel delante.' },
        { de: 'Kannst du kurz drüberschauen?', es: '¿Le puedes echar un vistazo?' },
        { de: 'Sieht gut aus. Nur unten fehlt noch deine Unterschrift.', es: 'Tiene buena pinta. Solo falta tu firma abajo.' }
      ] },

  // ---- a12-l15 · bei praktischen Aufgaben um Mithilfe bitten --------
  'Hättest du kurz Zeit für mich?':
    { de: 'Jetzt gerade schon, in einer Stunde nicht mehr.', es: 'Ahora mismo sí, dentro de una hora ya no.',
      mas: [
        { de: 'Kannst du mir zeigen, wie ich das hochlade?', es: '¿Me enseñas cómo subo esto?' },
        { de: 'Ganz einfach: Datei auswählen, dann auf den blauen Knopf.', es: 'Muy fácil: eliges el archivo y luego el botón azul.' },
        { de: 'Mein Speicher ist voll, was mache ich?', es: 'Tengo la memoria llena, ¿qué hago?' },
        { de: 'Lösch erst die alten Videos, die brauchen den meisten Platz.', es: 'Borra primero los vídeos viejos, son los que más ocupan.' },
        { de: 'Könntest du mir beim Brief helfen?', es: '¿Me podrías ayudar con la carta?' },
        { de: 'Sehr gern. Formelle Briefe sind hier wirklich eine eigene Kunst.', es: 'Con mucho gusto. Las cartas formales aquí son todo un arte.' },
        { de: 'Kannst du mich morgen daran erinnern?', es: '¿Me lo puedes recordar mañana?' },
        { de: 'Mache ich, ich schreibe es mir gleich in den Kalender.', es: 'Lo hago, lo apunto ahora en el calendario.' }
      ] },

  // ---- a12-l15 · etwas versprechen und Hoffnung ausdrücken ----------
  'Ich hoffe, dass alles gut geht.':
    { de: 'Das wird es. Du hast alles vorbereitet, was du konntest.', es: 'Irá bien. Has preparado todo lo que podías.',
      mas: [
        { de: 'Ich hoffe, das Visum kommt rechtzeitig.', es: 'Espero que el visado llegue a tiempo.' },
        { de: 'Normalerweise dauert es vier Wochen, du bist gut dran.', es: 'Normalmente tarda cuatro semanas, vas bien de tiempo.' },
        { de: 'Ich verspreche dir, ich melde mich morgen.', es: 'Te prometo que mañana te aviso.' },
        { de: 'Darauf zähle ich. Ruf einfach an, wenn du etwas weißt.', es: 'Cuento con ello. Llama en cuanto sepas algo.' },
        { de: 'Ich kümmere mich darum, versprochen.', es: 'Me ocupo de ello, prometido.' },
        { de: 'Danke, dann kann ich beruhigt ins Wochenende gehen.', es: 'Gracias, así me voy tranquilo al fin de semana.' },
        { de: 'Ich hoffe, wir sehen uns bald wieder.', es: 'Espero que nos veamos pronto.' },
        { de: 'Ganz bestimmt. Im Sommer bin ich sowieso wieder hier.', es: 'Seguro. En verano vuelvo a estar aquí de todas formas.' }
      ] },

  // ---- a12-l15 · über Urlaubsziele sprechen -------------------------
  'Wohin fährst du im Urlaub?':
    { de: 'Nach Kroatien, ans Meer, wie jedes Jahr.', es: 'A Croacia, al mar, como cada año.',
      mas: [
        { de: 'Warst du schon einmal in Kroatien?', es: '¿Has estado alguna vez en Croacia?' },
        { de: 'Dreimal schon. Die Inseln im Süden sind die schönsten.', es: 'Ya tres veces. Las islas del sur son las más bonitas.' },
        { de: 'Wie lange bleibt ihr dort?', es: '¿Cuánto os quedáis allí?' },
        { de: 'Zwei Wochen, im August. Länger geht es leider nicht.', es: 'Dos semanas, en agosto. Por desgracia más no puede ser.' },
        { de: 'Habt ihr schon eine Unterkunft?', es: '¿Ya tenéis alojamiento?' },
        { de: 'Eine kleine Wohnung direkt am Hafen, schon gebucht.', es: 'Un apartamento pequeño junto al puerto, ya reservado.' },
        { de: 'Was kann man dort machen?', es: '¿Qué se puede hacer allí?' },
        { de: 'Schwimmen, wandern, und abends stundenlang draußen essen.', es: 'Nadar, caminar y por la noche cenar fuera durante horas.' }
      ] },

  // ---- a12-l15 · Reisevorbereitung und Transport planen -------------
  'Wann fahrt ihr los?':
    { de: 'Samstag um vier Uhr früh, damit wir dem Stau entkommen.', es: 'El sábado a las cuatro de la mañana, para escapar del atasco.',
      mas: [
        { de: 'Nimmst du viel Gepäck mit?', es: '¿Llevas mucho equipaje?' },
        { de: 'Einen Koffer und einen Rucksack, mehr passt nicht ins Auto.', es: 'Una maleta y una mochila, más no cabe en el coche.' },
        { de: 'Braucht man für dieses Land ein Visum?', es: '¿Para este país hace falta visado?' },
        { de: 'Innerhalb der EU nicht, der Ausweis reicht völlig.', es: 'Dentro de la UE no, basta con el documento.' },
        { de: 'Ist die Reise teuer geworden?', es: '¿Ha salido caro el viaje?' },
        { de: 'Teurer als letztes Jahr, vor allem die Unterkunft.', es: 'Más caro que el año pasado, sobre todo el alojamiento.' },
        { de: 'Lohnt sich die Reise wirklich?', es: '¿Merece la pena el viaje?' },
        { de: 'Jeden Cent. Nach zwei Wochen dort bin ich ein anderer Mensch.', es: 'Cada céntimo. Después de dos semanas allí soy otra persona.' }
      ] },

  // ---- a12-l15 · Vorlieben und Interesse äußern ---------------------
  'Ich interessiere mich sehr für Geschichte.':
    { de: 'Dann bist du in Wien genau richtig, hier ist alles alt.', es: 'Entonces Viena es tu sitio, aquí todo es antiguo.',
      mas: [
        { de: 'Technik finde ich wirklich spannend.', es: 'La tecnología me parece muy interesante.' },
        { de: 'Warst du schon im Technischen Museum? Das würde dir gefallen.', es: '¿Has estado en el Museo Técnico? Te gustaría.' },
        { de: 'Am liebsten lese ich über andere Länder.', es: 'Lo que más me gusta es leer sobre otros países.' },
        { de: 'Deshalb weißt du über jedes Land etwas zu erzählen.', es: 'Por eso tienes algo que contar de cada país.' },
        { de: 'Kochen interessiert mich überhaupt nicht.', es: 'La cocina no me interesa nada.' },
        { de: 'Und trotzdem kochst du besser als die meisten hier.', es: 'Y aun así cocinas mejor que la mayoría de aquí.' },
        { de: 'Sport interessiert mich mehr als Musik.', es: 'Me interesa más el deporte que la música.' },
        { de: 'Bei mir ist es genau umgekehrt, deshalb passen wir gut zusammen.', es: 'A mí me pasa al revés, por eso encajamos bien.' }
      ] },

  // ---- a12-l15 · über Lernziele und Fortschritte sprechen -----------
  'Warum lernst du Deutsch?':
    { de: 'Wegen der Arbeit, aber inzwischen auch, weil es mir gefällt.', es: 'Por el trabajo, pero ya también porque me gusta.',
      mas: [
        { de: 'Was ist dein Ziel?', es: '¿Cuál es tu meta?' },
        { de: 'Mein Ziel ist die B1-Prüfung.', es: 'Mi meta es el examen B1.' },
        { de: 'Was fällt dir am schwersten?', es: '¿Qué es lo que más te cuesta?' },
        { de: 'Die Artikel. Der, die, das sind mein täglicher Feind.', es: 'Los artículos. Der, die, das son mi enemigo diario.' },
        { de: 'Wie oft übst du?', es: '¿Cada cuánto practicas?' },
        { de: 'Jeden Tag zwanzig Minuten, lieber kurz als gar nicht.', es: 'Veinte minutos al día; mejor poco que nada.' },
        { de: 'Merkst du selbst Fortschritte?', es: '¿Notas tú mismo que progresas?' },
        { de: 'Ja, beim Telefonieren. Früher hatte ich richtig Angst davor.', es: 'Sí, al hablar por teléfono. Antes me daba verdadero miedo.' }
      ] },

  // ---- a12-l15 · über Lernmethoden und Schwierigkeiten austauschen ---
  'Wie lernst du am effektivsten?':
    { de: 'Ich lerne am besten mit Musik und Serien.', es: 'Aprendo mejor con música y series.',
      mas: [
        { de: 'Was hilft dir beim Vokabelnlernen?', es: '¿Qué te ayuda a aprender vocabulario?' },
        { de: 'Karten, und die Wörter immer in einem ganzen Satz.', es: 'Fichas, y las palabras siempre en una frase entera.' },
        { de: 'Ohne Wiederholung vergesse ich alles wieder.', es: 'Sin repaso se me vuelve a olvidar todo.' },
        { de: 'Deshalb wiederhole ich sonntags alles von der ganzen Woche.', es: 'Por eso los domingos repaso todo lo de la semana.' },
        { de: 'Die Aussprache ist mein größtes Problem.', es: 'La pronunciación es mi mayor problema.' },
        { de: 'Nimm dich einmal auf. Beim Zuhören hörst du es sofort.', es: 'Grábate una vez. Al escucharte lo notas enseguida.' },
        { de: 'Woher nimmst du die Motivation?', es: '¿De dónde sacas la motivación?' },
        { de: 'Aus den kleinen Erfolgen. Letzte Woche habe ich einen Witz verstanden.', es: 'De los pequeños logros. La semana pasada entendí un chiste.' }
      ] },


  // ---- a12-l16 · über Feste und Bräuche berichten -------------------
  'Bei uns feiert man Weihnachten am 24.':
    { de: 'Hier auch. Und wann gibt es bei euch die Geschenke?', es: 'Aquí también. ¿Y cuándo son los regalos?',
      mas: [
        { de: 'Bei uns isst man am 24. erst spät am Abend.', es: 'Donde yo vivo el día 24 se cena tarde.' },
        { de: 'Wie spät denn? Hier sitzen alle schon um sechs am Tisch.', es: '¿Cómo de tarde? Aquí todos están a la mesa a las seis.' },
        { de: 'In Spanien feiert man bis in die Nacht.', es: 'En España se celebra hasta la madrugada.' },
        { de: 'Das würde meiner Familie überhaupt nicht gefallen.', es: 'Eso a mi familia no le gustaría nada.' },
        { de: 'Den Christbaum schmücken wir erst am Vierundzwanzigsten.', es: 'El árbol lo decoramos el veinticuatro.' },
        { de: 'Wirklich erst dann? Bei uns steht er schon Anfang Dezember.', es: '¿De verdad hasta entonces? En mi casa está desde principios de diciembre.' },
        { de: 'Feiert ihr Geburtstage immer so groß?', es: '¿Siempre celebráis los cumpleaños a lo grande?' },
        { de: 'Nur die runden. Sonst gibt es einfach Kuchen im Büro.', es: 'Solo los redondos. Si no, simplemente hay tarta en la oficina.' }
      ] },

  // ---- a12-l16 · eine Einladung aussprechen -------------------------
  'Ich lade dich zu meinem Geburtstag ein.':
    { de: 'Wie schön! Wann feierst du denn?', es: '¡Qué bien! ¿Cuándo lo celebras?',
      mas: [
        { de: 'Ich feiere am Samstag, kommst du?', es: 'Lo celebro el sábado, ¿vienes?' },
        { de: 'Sehr gern. Wo denn, bei dir zu Hause?', es: 'Con mucho gusto. ¿Dónde, en tu casa?' },
        { de: 'Passt dir Samstag um acht?', es: '¿Te va bien el sábado a las ocho?' },
        { de: 'Acht ist perfekt, da bin ich mit der Arbeit fertig.', es: 'Las ocho es perfecto, ya he acabado de trabajar.' },
        { de: 'Wir würden uns sehr freuen, wenn du kommst.', es: 'Nos encantaría que vinieras.' },
        { de: 'Das ist lieb. Ich komme auf jeden Fall.', es: 'Qué amable. Voy seguro.' },
        { de: 'Kommst du zur Hochzeit im Juni?', es: '¿Vienes a la boda de junio?' },
        { de: 'Natürlich! Schick mir die Einladung mit der Adresse.', es: '¡Por supuesto! Mándame la invitación con la dirección.' }
      ] },

  // ---- a12-l16 · auf eine Einladung reagieren -----------------------
  'Vielen Dank für die Einladung!':
    { de: 'Gern! Es wäre schön, wenn du dabei bist.', es: '¡De nada! Estaría bien que vinieras.',
      mas: [
        { de: 'Sehr gern, ich komme!', es: '¡Con mucho gusto, voy!' },
        { de: 'Super, dann sind wir vollzählig.', es: 'Genial, entonces estamos todos.' },
        { de: 'Um wie viel Uhr soll ich da sein?', es: '¿A qué hora tengo que estar allí?' },
        { de: 'Ab sieben, aber komm ruhig etwas später.', es: 'A partir de las siete, pero puedes venir algo más tarde.' },
        { de: 'Soll ich etwas mitbringen?', es: '¿Llevo algo?' },
        { de: 'Wenn du magst, einen Nachtisch. Sonst ist alles da.', es: 'Si quieres, un postre. Por lo demás está todo.' },
        { de: 'Darf ich jemanden mitbringen?', es: '¿Puedo llevar a alguien?' },
        { de: 'Klar, je mehr Leute, desto besser.', es: 'Claro, cuanta más gente, mejor.' }
      ] },

  // ---- a12-l16 · Treffen vereinbaren und abstimmen ------------------
  'Machen wir uns für den Jahreswechsel etwas aus?':
    { de: 'Unbedingt. Letztes Jahr saß ich allein vor dem Fernseher.', es: 'Sin falta. El año pasado estuve solo delante de la tele.',
      mas: [
        { de: 'Wo machen wir uns aus?', es: '¿Dónde nos vemos?' },
        { de: 'Bei mir, ich habe genug Platz für alle.', es: 'En mi casa, tengo sitio de sobra.' },
        { de: 'Wir haben uns für halb acht ausgemacht.', es: 'Hemos quedado a las siete y media.' },
        { de: 'Gut, dann bin ich um Viertel nach sieben da.', es: 'Bien, entonces estoy a las siete y cuarto.' },
        { de: 'Bring bitte nichts mit, wir haben alles.', es: 'No traigas nada, tenemos de todo.' },
        { de: 'Dann bringe ich nur mich und gute Laune mit.', es: 'Entonces llevo solo a mí mismo y buen humor.' },
        { de: 'Bleibt es bei unserer Ausmachung?', es: '¿Sigue en pie lo que quedamos?' },
        { de: 'Es bleibt dabei, ich freue mich schon.', es: 'Sigue en pie, ya tengo ganas.' }
      ] },

  // ---- a12-l16 · ein Kompliment machen ------------------------------
  'Die Wohnung sieht wunderschön aus!':
    { de: 'Danke! Wir haben den ganzen Tag aufgeräumt.', es: '¡Gracias! Hemos estado ordenando todo el día.',
      mas: [
        { de: 'Die Tischdecke und die Kerzen sehen festlich aus.', es: 'El mantel y las velas dan un aire de fiesta.' },
        { de: 'Das war die Idee von meiner Schwester.', es: 'Eso fue idea de mi hermana.' },
        { de: 'Das Essen schmeckt fantastisch.', es: 'La comida está buenísima.' },
        { de: 'Das freut mich! Das Rezept ist von meiner Großmutter.', es: '¡Me alegro! La receta es de mi abuela.' },
        { de: 'Der Kuchen ist der beste, den ich kenne.', es: 'Es la mejor tarta que conozco.' },
        { de: 'Dann bekommst du das Rezept, aber sag es niemandem.', es: 'Entonces te doy la receta, pero no se lo digas a nadie.' },
        { de: 'Du hast das toll organisiert.', es: 'Lo has organizado estupendamente.' },
        { de: 'Danke, aber ohne die anderen wäre das nichts geworden.', es: 'Gracias, pero sin los demás no habría salido.' }
      ] },

  // ---- a12-l16 · Essen und Trinken anbieten -------------------------
  'Was möchtest du trinken?':
    { de: 'Ein Glas Wasser erst mal, später gern ein Glas Wein.', es: 'Un vaso de agua de momento; luego una copa de vino.',
      mas: [
        { de: 'Nimm dir doch! · Greif zu!', es: '¡Sírvete! · ¡Coge!' },
        { de: 'Danke, das sieht alles so gut aus.', es: 'Gracias, tiene todo muy buena pinta.' },
        { de: 'Greif bitte zu, es ist genug da!', es: '¡Sírvete, hay de sobra!' },
        { de: 'Dann nehme ich noch einmal von dem Salat.', es: 'Entonces repito de la ensalada.' },
        { de: 'Möchtest du noch ein Stück Torte?', es: '¿Quieres otro trozo de tarta?' },
        { de: 'Ein kleines, ich bin eigentlich schon satt.', es: 'Uno pequeño, la verdad es que ya estoy lleno.' },
        { de: 'Stoßen wir gemeinsam an?', es: '¿Brindamos juntos?' },
        { de: 'Unbedingt. Auf die Gastgeber und auf das neue Jahr!', es: 'Sin falta. ¡Por los anfitriones y por el año nuevo!' }
      ] },

  // ---- a12-l16 · sich entschuldigen und Fehler eingestehen ----------
  'Entschuldige die Verspätung!':
    { de: 'Kein Problem, wir haben gerade erst angefangen.', es: 'No pasa nada, acabamos de empezar.',
      mas: [
        { de: 'Tut mir leid, der Bus hatte Verspätung.', es: 'Lo siento, el bus venía con retraso.' },
        { de: 'Das kennen wir alle. Komm rein, es gibt noch alles.', es: 'Eso nos pasa a todos. Pasa, queda de todo.' },
        { de: 'Entschuldige, ich habe das Geschenk vergessen.', es: 'Perdona, se me ha olvidado el regalo.' },
        { de: 'Das ist doch egal, wichtig ist, dass du da bist.', es: 'Da igual, lo importante es que estés.' },
        { de: 'Es tut mir leid, dass ich nicht geantwortet habe.', es: 'Siento no haber contestado.' },
        { de: 'Ich dachte schon, du bist mir böse.', es: 'Ya pensaba que estabas enfadado conmigo.' },
        { de: 'Das war mein Fehler, ich mache es neu.', es: 'Fue error mío, lo hago otra vez.' },
        { de: 'Danke, dass du das so offen sagst.', es: 'Gracias por decirlo tan claro.' }
      ] },

  // ---- a12-l16 · Gäste vorstellen und beschreiben -------------------
  'Das ist Pekka, er arbeitet mit mir im Labor.':
    { de: 'Freut mich, Pekka! Und woher kommst du?', es: '¡Encantado, Pekka! ¿Y de dónde eres?',
      mas: [
        { de: 'Das ist Pekka. Er kommt aus Finnland.', es: 'Este es Pekka. Es de Finlandia.' },
        { de: 'Aus Finnland! Dann ist dir der Winter hier zu mild.', es: '¡De Finlandia! Entonces el invierno aquí te parece suave.' },
        { de: 'Sie ist sehr hilfsbereit und immer gut gelaunt.', es: 'Es muy servicial y siempre está de buen humor.' },
        { de: 'Das merkt man sofort, wenn man mit ihr spricht.', es: 'Se nota enseguida al hablar con ella.' },
        { de: 'Sie hat das ganze Fest organisiert.', es: 'Ella ha organizado toda la fiesta.' },
        { de: 'Dann muss ich mich unbedingt bei ihr bedanken.', es: 'Entonces tengo que darle las gracias sin falta.' },
        { de: 'Wir kennen uns schon aus der Schule.', es: 'Nos conocemos ya del colegio.' },
        { de: 'So lange schon? Dann habt ihr sicher gute Geschichten.', es: '¿Tanto tiempo? Entonces tendréis buenas historias.' }
      ] },


  // ---- a21-l1 · Wünsche und Sehnsüchte ausdrücken -------------------
  'Mein größter Wunsch ist ein sicherer Job.':
    { de: 'Das verstehe ich gut. Ohne das plant man nichts.', es: 'Lo entiendo bien. Sin eso no se planea nada.',
      mas: [
        { de: 'Ich hoffe auf eine feste Stelle im Herbst.', es: 'Espero un puesto fijo en otoño.' },
        { de: 'Hat dein Chef schon etwas angedeutet?', es: '¿Tu jefe ha dado alguna señal?' },
        { de: 'Ich hätte gern mehr Ruhe im Alltag.', es: 'Me gustaría tener más calma en el día a día.' },
        { de: 'Das geht mir genauso. Alles ist immer gleichzeitig.', es: 'A mí me pasa igual. Todo es siempre a la vez.' },
        { de: 'Ich wünschte, ich hätte früher angefangen.', es: 'Ojalá hubiera empezado antes.' },
        { de: 'Das sagt jeder. Wichtig ist, dass du angefangen hast.', es: 'Eso lo dice todo el mundo. Lo importante es que empezaste.' },
        { de: 'Diese Chance lasse ich nicht vorbeigehen.', es: 'Esta oportunidad no la dejo pasar.' },
        { de: 'Genau richtig. So etwas kommt selten zweimal.', es: 'Muy bien. Algo así rara vez se repite.' }
      ] },

  // ---- a21-l1 · über die Vergangenheit und den Anfang berichten -----
  'Damals bin ich nach Österreich gekommen.':
    { de: 'Und wie war der Anfang?', es: '¿Y cómo fueron los principios?',
      mas: [
        { de: 'Am Anfang war alles fremd für mich.', es: 'Al principio todo me resultaba extraño.' },
        { de: 'Das glaube ich dir. Mir ging es genauso.', es: 'Te creo. A mí me pasó lo mismo.' },
        { de: 'Damals habe ich kein Wort Deutsch gesprochen.', es: 'Entonces no hablaba ni una palabra de alemán.' },
        { de: 'Und heute unterhalten wir uns ganz normal. Respekt.', es: 'Y hoy charlamos con normalidad. Respeto.' },
        { de: 'Meine erste Wohnung war winzig und kalt.', es: 'Mi primer piso era diminuto y frío.' },
        { de: 'Solche Wohnungen kennt hier fast jeder vom Anfang.', es: 'Esos pisos los conoce aquí casi todo el mundo del principio.' },
        { de: 'Ich habe die Entscheidung nie bereut.', es: 'Nunca me arrepentí de la decisión.' },
        { de: 'Das ist das Schönste, was man dazu sagen kann.', es: 'Eso es lo mejor que se puede decir al respecto.' }
      ] },

  // ---- a21-l1 · über Wendepunkte und Krisen sprechen ----------------
  'Was hast du vorher gemacht?':
    { de: 'Ich habe zu Hause als Buchhalter gearbeitet, acht Jahre lang.', es: 'En mi país trabajé de contable, ocho años.',
      mas: [
        { de: 'Wann hast du dich entschieden?', es: '¿Cuándo lo decidiste?' },
        { de: 'Nach der Krise, als die Firma zugemacht hat.', es: 'Después de la crisis, cuando cerró la empresa.' },
        { de: 'Das Praktikum war für mich der Wendepunkt.', es: 'Las prácticas fueron para mí el punto de inflexión.' },
        { de: 'Inwiefern? Hat sich danach alles geändert?', es: '¿En qué sentido? ¿Después cambió todo?' },
        { de: 'Damals habe ich sehr an mir gezweifelt.', es: 'Entonces dudaba mucho de mí mismo.' },
        { de: 'Das hätte ich dir nie angesehen, ehrlich gesagt.', es: 'Nunca lo habría dicho al verte, la verdad.' },
        { de: 'Hat sich der Aufwand gelohnt?', es: '¿Mereció la pena el esfuerzo?' },
        { de: 'Absolut. Heute würde ich es genauso wieder machen.', es: 'Absolutamente. Hoy lo volvería a hacer igual.' }
      ] },

  // ---- a21-l1 · nachfragen und Interesse zeigen ---------------------
  'Und wie ging es dann weiter?':
    { de: 'Dann habe ich eine Arbeit gefunden, erst halbtags.', es: 'Después encontré un trabajo, primero a media jornada.',
      mas: [
        { de: 'Und was hast du dann gemacht?', es: '¿Y qué hiciste después?' },
        { de: 'Ich habe abends den Kurs gemacht und tagsüber gearbeitet.', es: 'Hacía el curso por la tarde y trabajaba de día.' },
        { de: 'Wie hast du dich dabei gefühlt?', es: '¿Cómo te sentiste?' },
        { de: 'Müde, aber zum ersten Mal wieder nützlich.', es: 'Cansado, pero por primera vez otra vez útil.' },
        { de: 'Das kann ich gut nachvollziehen.', es: 'Lo puedo entender perfectamente.' },
        { de: 'Danke. Es tut gut, wenn jemand das versteht.', es: 'Gracias. Sienta bien que alguien lo entienda.' },
        { de: 'Erzähl weiter, das interessiert mich wirklich.', es: 'Sigue contando, me interesa de verdad.' },
        { de: 'Gern, aber dafür brauchen wir noch einen Kaffee.', es: 'Con gusto, pero para eso necesitamos otro café.' }
      ] },

  // ---- a21-l1 · Mitgefühl und Verständnis ausdrücken ----------------
  'Mir fehlt manchmal meine Familie.':
    { de: 'Das muss schwer sein, so weit weg von allen.', es: 'Debe de ser duro, tan lejos de todos.',
      mas: [
        { de: 'Das Heimweh kommt meistens im Winter.', es: 'La morriña llega casi siempre en invierno.' },
        { de: 'Kein Wunder, wenn es hier um vier dunkel wird.', es: 'No me extraña, si aquí a las cuatro es de noche.' },
        { de: 'Ich hatte lange Angst, Fehler zu machen.', es: 'Durante mucho tiempo tuve miedo de cometer errores.' },
        { de: 'Das muss viel Mut gekostet haben, trotzdem zu sprechen.', es: 'Eso debió de costar mucho valor, hablar igualmente.' },
        { de: 'Ohne Zuversicht hätte ich aufgegeben.', es: 'Sin confianza en el futuro habría abandonado.' },
        { de: 'Das tut mir leid für dich. Aber du hast es geschafft.', es: 'Lo siento mucho por ti. Pero lo has conseguido.' },
        { de: 'Und wie war das für dich gefühlsmäßig?', es: '¿Y cómo te sentías con todo aquello?' },
        { de: 'Lange sehr einsam. Heute bin ich froh, geblieben zu sein.', es: 'Mucho tiempo muy solo. Hoy me alegro de haberme quedado.' }
      ] },

  // ---- a21-l1 · eigene Fehler korrigieren ---------------------------
  'Der Termin ist am Montag. Entschuldigung, ich meine …':
    { de: 'Kein Stress, nimm dir Zeit.', es: 'Sin prisa, tómate tu tiempo.',
      mas: [
        { de: 'Entschuldigung, ich meine natürlich Dienstag.', es: 'Perdón, quiero decir el martes, claro.' },
        { de: 'Gut, dass du es sagst, ich hätte es notiert.', es: 'Menos mal que lo dices, lo habría apuntado.' },
        { de: 'Entschuldige, ich habe mich versprochen.', es: 'Perdona, me he equivocado al hablar.' },
        { de: 'Passiert jedem, vor allem in einer Fremdsprache.', es: 'Le pasa a todo el mundo, sobre todo en otro idioma.' },
        { de: 'Das habe ich falsch ausgedrückt.', es: 'Eso lo he expresado mal.' },
        { de: 'Sag es einfach noch einmal, ich höre zu.', es: 'Dilo otra vez sin más, te escucho.' },
        { de: 'Ich fange lieber noch einmal von vorne an.', es: 'Mejor empiezo otra vez desde el principio.' },
        { de: 'Mach das, so wird es für uns beide klarer.', es: 'Hazlo, así queda más claro para los dos.' }
      ] },

  // ---- a21-l1 · über das Ankommen und Einleben sprechen -------------
  'Wie hast du dich in der ersten Woche gefühlt?':
    { de: 'Völlig verloren. Am Anfang war alles fremd.', es: 'Completamente perdido. Al principio todo me resultaba ajeno.',
      mas: [
        { de: 'Hattest du Heimweh?', es: '¿Tenías morriña?' },
        { de: 'Jeden Abend, die ersten Monate.', es: 'Todas las noches, los primeros meses.' },
        { de: 'Der Zusammenhalt im Kurs hat mir geholfen.', es: 'La unión en clase me ayudó.' },
        { de: 'Das glaube ich sofort. Ihr wart ja alle in derselben Lage.', es: 'Me lo creo enseguida. Estabais todos en la misma situación.' },
        { de: 'Ich war stolz, als ich das erste Mal telefoniert habe.', es: 'Estaba orgulloso la primera vez que hablé por teléfono.' },
        { de: 'Das ist ein echter Moment. Telefonieren ist am schwersten.', es: 'Ese es un momento de verdad. Lo del teléfono es lo más difícil.' },
        { de: 'Ich fühle mich hier inzwischen zu Hause.', es: 'Ya me siento aquí como en casa.' },
        { de: 'Schön zu hören. Genau das wünscht man jedem.', es: 'Qué bien oírlo. Justo eso se le desea a cualquiera.' }
      ] },

  // ---- a21-l1 · über Zukunftspläne sprechen -------------------------
  'Was sind deine Pläne für die nächsten Jahre?':
    { de: 'Erst mal will ich mich einfach hier einleben.', es: 'De momento solo quiero adaptarme aquí.',
      mas: [
        { de: 'Wo siehst du dich in fünf Jahren?', es: '¿Dónde te ves dentro de cinco años?' },
        { de: 'Hoffentlich hier, mit einer festen Stelle und eigener Wohnung.', es: 'Ojalá aquí, con un puesto fijo y piso propio.' },
        { de: 'Vielleicht mache ich noch eine Ausbildung.', es: 'Quizá haga todavía una formación.' },
        { de: 'In welchem Bereich denn? Etwas Technisches?', es: '¿En qué sector? ¿Algo técnico?' },
        { de: 'Ich möchte irgendwann ein eigenes Geschäft haben.', es: 'Algún día quiero tener mi propio negocio.' },
        { de: 'Das traue ich dir zu. Du hast den langen Atem dafür.', es: 'Te veo capaz. Tienes la constancia para eso.' },
        { de: 'Was ist dein nächstes großes Ziel?', es: '¿Cuál es tu siguiente gran objetivo?' },
        { de: 'Die B1-Prüfung im Juni, alles andere kommt danach.', es: 'El examen B1 en junio; lo demás viene después.' }
      ] },


  // ---- a21-l2 · eine Einladung aussprechen --------------------------
  'Hast du Lust, morgen vorbeizukommen?':
    { de: 'Sehr gern. Um welche Zeit passt es dir?', es: 'Con mucho gusto. ¿A qué hora te va bien?',
      mas: [
        { de: 'Wollen wir am Sonntag zusammen kochen?', es: '¿Cocinamos juntos el domingo?' },
        { de: 'Gute Idee! Ich bringe die Zutaten für die Paella mit.', es: '¡Buena idea! Yo llevo los ingredientes de la paella.' },
        { de: 'Wir grillen am Samstag, seid ihr dabei?', es: 'El sábado hacemos barbacoa, ¿os apuntáis?' },
        { de: 'Auf jeden Fall. Sollen wir etwas zu trinken mitbringen?', es: 'Desde luego. ¿Llevamos algo de beber?' },
        { de: 'Bring ruhig jemanden mit, es ist genug da.', es: 'Trae a quien quieras, hay de sobra.' },
        { de: 'Dann komme ich mit meiner Schwester, sie ist zu Besuch.', es: 'Entonces voy con mi hermana, está de visita.' },
        { de: 'Du bist jederzeit willkommen bei uns.', es: 'Eres bienvenido en nuestra casa cuando quieras.' },
        { de: 'Das ist wirklich lieb. Das weiß ich sehr zu schätzen.', es: 'Qué amable de verdad. Lo aprecio mucho.' }
      ] },

  // ---- a21-l2 · auf private Einladungen reagieren -------------------
  'Ich möchte dich zum Essen einladen.':
    { de: 'Sehr gern! Wann hattest du denn gedacht?', es: '¡Con mucho gusto! ¿Cuándo habías pensado?',
      mas: [
        { de: 'Wir feiern nichts Großes, nur ein paar Freunde.', es: 'No celebramos nada grande, solo unos amigos.' },
        { de: 'Genau so mag ich es am liebsten.', es: 'Así es como más me gusta.' },
        { de: 'Was soll ich zum Essen beisteuern?', es: '¿Qué aporto para la comida?' },
        { de: 'Einen Nachtisch, wenn du magst. Sonst ist alles da.', es: 'Un postre, si quieres. Por lo demás está todo.' },
        { de: 'Da bin ich auf jeden Fall dabei!', es: '¡Ahí estoy seguro!' },
        { de: 'Super, dann sage ich den anderen Bescheid.', es: 'Genial, entonces aviso a los demás.' },
        { de: 'Leider schaffe ich es diesmal nicht.', es: 'Esta vez no llego.' },
        { de: 'Schade! Aber wir holen das nächsten Monat nach.', es: '¡Qué pena! Pero lo recuperamos el mes que viene.' }
      ] },

  // ---- a21-l2 · Besuche und Gastfreundschaft organisieren -----------
  'Kommt ihr am Sonntag zum Essen?':
    { de: 'Gern! Um wie viel Uhr sollen wir da sein?', es: '¡Con gusto! ¿A qué hora vamos?',
      mas: [
        { de: 'Wir servieren um acht, kommt ihr vorher?', es: 'Servimos a las ocho, ¿venís antes?' },
        { de: 'Wir sind um halb acht da, dann können wir noch helfen.', es: 'Estamos a las siete y media, así podemos ayudar.' },
        { de: 'Ich habe etwas Spanisches gekocht.', es: 'He cocinado algo español.' },
        { de: 'Wie schön! Das kennen wir hier viel zu wenig.', es: '¡Qué bien! Aquí eso se conoce muy poco.' },
        { de: 'Zieht ihr drinnen die Schuhe aus?', es: '¿Os quitáis los zapatos dentro?' },
        { de: 'Bei uns schon, aber macht es, wie es euch lieber ist.', es: 'En nuestra casa sí, pero haced lo que prefiráis.' },
        { de: 'Wir haben leider nur wenig Platz.', es: 'Lo siento, tenemos poco sitio.' },
        { de: 'Das macht nichts, eng sitzen ist auch gemütlich.', es: 'No importa, estar apretados también es acogedor.' }
      ] },

  // ---- a21-l2 · im Restaurant bestellen und bezahlen ----------------
  'Haben Sie noch einen Tisch für zwei frei?':
    { de: 'Drinnen ja, draußen müssten Sie zwanzig Minuten warten.', es: 'Dentro sí; fuera tendrían que esperar veinte minutos.',
      mas: [
        { de: 'Wir hätten gern die Speisekarte.', es: 'Quisiéramos la carta.' },
        { de: 'Hier bitte. Die Tagesempfehlung steht auf der Tafel.', es: 'Aquí tienen. La sugerencia del día está en la pizarra.' },
        { de: 'Was können Sie heute empfehlen?', es: '¿Qué nos recomienda hoy?' },
        { de: 'Den Tafelspitz, der ist heute besonders gut geworden.', es: 'El tafelspitz, hoy ha salido especialmente bueno.' },
        { de: 'Ich nehme das Schnitzel mit Erdäpfelsalat.', es: 'Yo tomo el escalope con ensalada de patata.' },
        { de: 'Sehr gern. Und für Sie, dasselbe oder etwas anderes?', es: 'Con mucho gusto. ¿Y para usted, lo mismo u otra cosa?' },
        { de: 'Zahlen, bitte! – Getrennt oder zusammen?', es: '¡La cuenta! – ¿Por separado o junto?' },
        { de: 'Getrennt bitte, und stimmt so, der Rest ist für Sie.', es: 'Por separado, por favor, y está bien así, el resto para usted.' }
      ] },

  // ---- a21-l2 · Wünsche und Vorlieben im Lokal äußern ---------------
  'Können wir draußen im Gastgarten sitzen?':
    { de: 'Natürlich, dort hinten ist gerade ein Tisch frei geworden.', es: 'Por supuesto, allí atrás acaba de quedar una mesa libre.',
      mas: [
        { de: 'Ist in dem Gericht Fleisch drin?', es: '¿Ese plato lleva carne?' },
        { de: 'In der Soße ist Speck, aber wir machen es auch ohne.', es: 'En la salsa hay panceta, pero también lo hacemos sin.' },
        { de: 'Können Sie das ohne Zwiebeln machen?', es: '¿Lo pueden hacer sin cebolla?' },
        { de: 'Kein Problem, ich sage es gleich in der Küche.', es: 'No hay problema, lo digo ahora en la cocina.' },
        { de: 'Entschuldigung, das habe ich nicht bestellt.', es: 'Perdone, esto no lo he pedido.' },
        { de: 'Oh, das tut mir leid! Ich bringe Ihnen sofort das Richtige.', es: '¡Ay, lo siento! Le traigo enseguida lo correcto.' },
        { de: 'Das Essen hat wirklich gut geschmeckt.', es: 'La comida estaba buenísima.' },
        { de: 'Das freut uns. Ich sage es dem Koch gern weiter.', es: 'Nos alegra. Se lo digo al cocinero con gusto.' }
      ] },

  // ---- a21-l2 · jemanden beruhigen und ermutigen --------------------
  'Ich habe morgen die Prüfung und schlafe schon nicht mehr.':
    { de: 'Keine Sorge, das schaffst du!', es: 'No te preocupes, ¡lo consigues!',
      mas: [
        { de: 'Und wenn ich beim Sprechen stecken bleibe?', es: '¿Y si me atasco al hablar?' },
        { de: 'Das kann jedem passieren, ehrlich. Atme einfach kurz durch.', es: 'Le puede pasar a cualquiera, de verdad. Respira un momento.' },
        { de: 'Ich habe Angst, dass ich zu langsam bin.', es: 'Tengo miedo de ir demasiado lento.' },
        { de: 'Nimm dir einfach etwas mehr Zeit dafür.', es: 'Tómate simplemente algo más de tiempo para eso.' },
        { de: 'Meinst du wirklich, ich soll es versuchen?', es: '¿De verdad crees que debería intentarlo?' },
        { de: 'Probier es einfach, du kannst nichts verlieren.', es: 'Pruébalo, no tienes nada que perder.' },
        { de: 'Danke, das beruhigt mich wirklich.', es: 'Gracias, eso me tranquiliza de verdad.' },
        { de: 'Mach dir keinen Stress, wir haben genug Zeit zum Üben.', es: 'No te agobies, tenemos tiempo de sobra para practicar.' }
      ] },

  // ---- a21-l2 · Essgewohnheiten und Regionen vergleichen ------------
  'Bei uns isst man das ganz anders.':
    { de: 'Wirklich? Erzähl, wie macht ihr das?', es: '¿De verdad? Cuenta, ¿cómo lo hacéis?',
      mas: [
        { de: 'So etwas gibt es bei uns auch, nur mit Fisch.', es: 'Algo así existe también en mi tierra, pero con pescado.' },
        { de: 'Mit Fisch? Das würde ich gern einmal probieren.', es: '¿Con pescado? Eso me gustaría probarlo.' },
        { de: 'Bei uns isst man viel später am Abend.', es: 'En mi tierra se cena mucho más tarde.' },
        { de: 'Um wie viel Uhr denn? Hier essen wir um sieben.', es: '¿A qué hora? Aquí cenamos a las siete.' },
        { de: 'Bei uns kocht man mit viel mehr Olivenöl.', es: 'En mi tierra se cocina con mucho más aceite de oliva.' },
        { de: 'Das schmeckt man sofort, und es ist auch gesünder.', es: 'Se nota enseguida, y además es más sano.' },
        { de: 'Die Portionen sind hier viel größer.', es: 'Aquí las raciones son mucho más grandes.' },
        { de: 'Stimmt. Am Anfang habe ich nie aufessen können.', es: 'Es verdad. Al principio nunca podía terminármelo.' }
      ] },

  // ---- a21-l2 · Überraschung und Staunen ausdrücken -----------------
  'Das ist alles hausgemacht? Wirklich?':
    { de: 'Alles, sogar das Brot und die Nudeln.', es: 'Todo, hasta el pan y la pasta.',
      mas: [
        { de: 'Wirklich? Das wusste ich überhaupt nicht.', es: '¿En serio? No lo sabía en absoluto.' },
        { de: 'Die Familie macht das seit drei Generationen so.', es: 'La familia lo hace así desde hace tres generaciones.' },
        { de: 'Das hätte ich nie gedacht!', es: '¡Nunca lo habría pensado!' },
        { de: 'Deshalb dauert es hier auch etwas länger.', es: 'Por eso aquí también tarda algo más.' },
        { de: 'Echt jetzt? Das kann nicht sein.', es: '¿En serio? No puede ser.' },
        { de: 'Doch, frag den Kellner, er erzählt es dir gern.', es: 'Que sí, pregunta al camarero, te lo cuenta con gusto.' },
        { de: 'Damit hätte ich nie gerechnet.', es: 'Con eso no habría contado nunca.' },
        { de: 'Genau deshalb komme ich immer wieder hierher.', es: 'Justo por eso vuelvo siempre aquí.' }
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
