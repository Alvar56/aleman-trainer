// TEMA: cómo se monta la frase alemana.
// Posición del verbo, preguntas, negación y los conectores (und/oder/denn,
// weil/wenn/dass, deswegen/trotzdem). Es el tema que más se nota al hablar:
// las palabras pueden estar bien y la frase sonar mal solo por el orden.

export const FRASE = {
  // ---------- A1.1 L1: preguntas con W ----------
  'w-fragen': {
    picks: [
      { s: '___ wohnst du? – In Wien.', a: 'Wo', d: ['Woher', 'Wohin'], t: '¿Dónde vives? – En Viena.', e: 'Wo = dónde (posición). Woher = de dónde, wohin = a dónde.' },
      { s: '___ kommst du? – Aus Spanien.', a: 'Woher', d: ['Wo', 'Wohin'], t: '¿De dónde vienes? – De España.', e: 'La respuesta lleva "aus" (procedencia) → la pregunta es "woher".' },
      { s: '___ heißt du? – Ich heiße Álvaro.', a: 'Wie', d: ['Wer', 'Was'], t: '¿Cómo te llamas? – Me llamo Álvaro.', e: 'El nombre se pregunta con "wie", no con "was".' },
      { s: '___ ist das? – Das ist meine Lehrerin.', a: 'Wer', d: ['Was', 'Wie'], t: '¿Quién es? – Es mi profesora.', e: 'Wer pregunta por personas; was, por cosas.' },
      { s: '___ machst du am Wochenende?', a: 'Was', d: ['Wer', 'Wohin'], t: '¿Qué haces el fin de semana?', e: 'Was pregunta por la cosa o la actividad.' },
      { s: '___ beginnt der Kurs? – Um neun Uhr.', a: 'Wann', d: ['Wo', 'Wie'], t: '¿Cuándo empieza el curso? – A las nueve.', e: 'La respuesta es una hora → wann.' },
      { s: '___ alt bist du? – Ich bin 28.', a: 'Wie', d: ['Was', 'Wer'], t: '¿Cuántos años tienes? – Tengo 28.', e: 'La edad se pregunta con "wie alt", no con "was".' },
      { s: '___ fährst du in den Urlaub? – Nach Italien.', a: 'Wohin', d: ['Woher', 'Wo'], t: '¿A dónde vas de vacaciones? – A Italia.', e: 'Hay movimiento con destino → wohin.' },
      { s: 'Wo ___ deine Schwester? – In Madrid.', a: 'wohnt', d: ['wohnen', 'wohnst'], t: '¿Dónde vive tu hermana? – En Madrid.', e: 'En la W-Frage el verbo va en 2ª posición y concuerda con el sujeto (sie wohnt).' },
      { s: '___ viel kostet das Ticket?', a: 'Wie', d: ['Was', 'Wo'], t: '¿Cuánto cuesta el billete?', e: 'La cantidad se pregunta con "wie viel".' },
      { s: '___ Sprachen sprechen Sie?', a: 'Welche', d: ['Wer', 'Wohin'], t: '¿Qué idiomas habla usted?', e: '"welche" pregunta eligiendo dentro de un grupo.' },
      { s: '___ gehst du nach dem Kurs? – Nach Hause.', a: 'Wohin', d: ['Wo', 'Woher'], t: '¿A dónde vas después del curso? – A casa.', e: 'La respuesta "nach Hause" indica destino → wohin.' }
    ],
    orders: [
      { sol: ['Woher', 'kommen', 'Sie?'], t: '¿De dónde es usted?', e: 'W-Frage: palabra interrogativa (1) + verbo (2) + sujeto.' },
      { sol: ['Wo', 'wohnt', 'deine', 'Schwester?'], t: '¿Dónde vive tu hermana?', e: 'El verbo "wohnt" va justo detrás de la palabra interrogativa.' },
      { sol: ['Wann', 'beginnt', 'der', 'Deutschkurs?'], t: '¿Cuándo empieza el curso de alemán?', e: 'Wann (1) + beginnt (2) + sujeto.' },
      { sol: ['Wie', 'heißt', 'der', 'Mann', 'da?'], t: '¿Cómo se llama ese hombre?', e: 'El verbo siempre en 2ª posición, también en preguntas con W.' },
      { sol: ['Was', 'machst', 'du', 'am', 'Wochenende?'], t: '¿Qué haces el fin de semana?', e: 'Was (1) + machst (2) + du.' }
    ]
  },

  // ---------- A1.1 L2: preguntas de sí/no ----------
  'ja-nein-frage': {
    picks: [
      { s: '___ du Deutsch? – Ja, ein bisschen.', a: 'Sprichst', d: ['Du sprichst', 'Sprechen'], t: '¿Hablas alemán? – Sí, un poco.', e: 'En la pregunta de sí/no el verbo abre la frase: Sprichst du…?' },
      { s: '___ Sie auch hier? – Ja, ich wohne auch da.', a: 'Wohnen', d: ['Sie wohnen', 'Wohnt'], t: '¿Vive usted también aquí? – Sí.', e: 'Verbo en 1ª posición + Sie.' },
      { s: '___ ihr aus Österreich? – Nein, aus Deutschland.', a: 'Kommt', d: ['Ihr kommt', 'Kommen'], t: '¿Sois de Austria? – No, de Alemania.', e: 'Con "ihr" el verbo termina en -t: Kommt ihr…?' },
      { s: 'Hast du Kinder? – ___, zwei.', a: 'Ja', d: ['Nein', 'Doch'], t: '¿Tienes hijos? – Sí, dos.', e: 'La respuesta confirma → ja.' },
      { s: 'Arbeitest du hier? – ___, ich bin Student.', a: 'Nein', d: ['Ja', 'Doch'], t: '¿Trabajas aquí? – No, soy estudiante.', e: 'La respuesta niega → nein.' },
      { s: '___ das dein Kuli? – Ja, danke!', a: 'Ist', d: ['Das ist', 'Sind'], t: '¿Es este tu boli? – ¡Sí, gracias!', e: 'El verbo "ist" ocupa la posición 1.' },
      { s: '___ Sie mir bitte helfen?', a: 'Können', d: ['Sie können', 'Kann'], t: '¿Puede ayudarme, por favor?', e: 'También con modales: el modal abre la pregunta.' },
      { s: '___ du morgen Zeit?', a: 'Hast', d: ['Du hast', 'Habt'], t: '¿Tienes tiempo mañana?', e: 'haben con du: hast, y va delante.' },
      { s: '___ ihr schon Deutsch gelernt?', a: 'Habt', d: ['Ihr habt', 'Haben'], t: '¿Ya habéis aprendido algo de alemán?', e: 'Perfekt: el auxiliar "habt" abre la pregunta y el participio va al final.' },
      { s: '___ er in Wien? – Ja, seit zwei Jahren.', a: 'Wohnt', d: ['Er wohnt', 'Wohnen'], t: '¿Vive él en Viena? – Sí, desde hace dos años.', e: 'Verbo (1) + sujeto (2).' },
      { s: 'Trinkst du Kaffee? – ___, nur Tee.', a: 'Nein', d: ['Ja', 'Doch'], t: '¿Bebes café? – No, solo té.', e: 'Se rechaza la pregunta → nein.' },
      { s: '___ das Zimmer noch frei?', a: 'Ist', d: ['Das ist', 'Sind'], t: '¿La habitación sigue libre?', e: 'Pregunta sin palabra interrogativa: empieza por el verbo.' }
    ],
    orders: [
      { sol: ['Sprechen', 'Sie', 'auch', 'Englisch?'], t: '¿Habla usted también inglés?', e: 'Ja-/Nein-Frage: el verbo va el primero.' },
      { sol: ['Hast', 'du', 'heute', 'Abend', 'Zeit?'], t: '¿Tienes tiempo esta tarde?', e: 'Verbo (1) + sujeto (2) + resto.' },
      { sol: ['Kommt', 'ihr', 'aus', 'der', 'Türkei?'], t: '¿Sois de Turquía?', e: 'Con ihr el verbo hace -t y abre la pregunta.' },
      { sol: ['Ist', 'das', 'dein', 'Handy?'], t: '¿Es este tu móvil?', e: '"Ist" en la posición 1 porque se espera sí o no.' },
      { sol: ['Wohnen', 'Sie', 'schon', 'lange', 'in', 'Wien?'], t: '¿Lleva usted mucho tiempo viviendo en Viena?', e: 'Verbo primero; el resto en el orden normal.' }
    ]
  },

  // ---------- A1.1 L3: negación con nicht ----------
  'negation-nicht': {
    picks: [
      { s: 'Ich arbeite heute ___.', a: 'nicht', d: ['kein', 'keine'], t: 'Hoy no trabajo.', e: '"nicht" niega el verbo y va al final. "kein" solo niega sustantivos.' },
      { s: 'Das ist ___ mein Kuli.', a: 'nicht', d: ['kein', 'keinen'], t: 'Ese no es mi boli.', e: 'Delante de un posesivo (mein) va "nicht", nunca "kein".' },
      { s: 'Ich habe ___ Zeit.', a: 'keine', d: ['nicht', 'nicht die'], t: 'No tengo tiempo.', e: 'Se niega un sustantivo sin artículo → kein-. "Zeit" es femenino: keine.' },
      { s: 'Er kommt heute ___ mit.', a: 'nicht', d: ['kein', 'nichts'], t: 'Hoy no viene.', e: 'Con verbo separable, "nicht" va antes del prefijo: … nicht mit.' },
      { s: 'Das Buch ist ___ teuer.', a: 'nicht', d: ['kein', 'keine'], t: 'El libro no es caro.', e: 'Delante de un adjetivo siempre "nicht".' },
      { s: 'Ich verstehe dich ___.', a: 'nicht', d: ['kein', 'nichts'], t: 'No te entiendo.', e: 'Se niega el verbo entero → nicht al final.' },
      { s: 'Wir wohnen ___ in Graz, sondern in Linz.', a: 'nicht', d: ['kein', 'keinen'], t: 'No vivimos en Graz, sino en Linz.', e: 'Cuando se corrige una parte concreta, "nicht" va justo delante de ella.' },
      { s: 'Der Film war ___ interessant.', a: 'nicht', d: ['kein', 'keine'], t: 'La película no fue interesante.', e: 'Adjetivo → nicht.' },
      { s: 'Ich trinke ___ Kaffee.', a: 'keinen', d: ['nicht', 'nicht den'], t: 'No bebo café.', e: 'Sustantivo masculino en acusativo sin artículo → keinen.' },
      { s: 'Heute gehe ich ___ ins Kino.', a: 'nicht', d: ['kein', 'keine'], t: 'Hoy no voy al cine.', e: '"nicht" delante del complemento de lugar que se niega.' },
      { s: 'Sie ist ___ meine Schwester, sie ist meine Cousine.', a: 'nicht', d: ['kein', 'keine'], t: 'No es mi hermana, es mi prima.', e: 'Con posesivo → nicht.' },
      { s: 'Ich kann heute ___ kommen.', a: 'nicht', d: ['kein', 'nichts'], t: 'Hoy no puedo venir.', e: 'Con modal, "nicht" va antes del infinitivo final.' }
    ],
    orders: [
      { sol: ['Ich', 'verstehe', 'das', 'Wort', 'nicht'], t: 'No entiendo esa palabra.', e: '"nicht" cierra la frase cuando se niega el verbo.' },
      { sol: ['Das', 'ist', 'nicht', 'mein', 'Platz'], t: 'Ese no es mi sitio.', e: 'Delante de un posesivo se usa "nicht".' },
      { sol: ['Heute', 'arbeite', 'ich', 'nicht'], t: 'Hoy no trabajo.', e: 'Complemento de tiempo (1), verbo (2), sujeto, y "nicht" al final.' },
      { sol: ['Der', 'Bus', 'fährt', 'am', 'Sonntag', 'nicht'], t: 'El domingo el autobús no circula.', e: '"nicht" al final de la frase.' },
      { sol: ['Ich', 'kann', 'heute', 'leider', 'nicht', 'kommen'], t: 'Hoy lamentablemente no puedo venir.', e: 'Con modal: "nicht" va justo antes del infinitivo.' }
    ]
  },

  // ---------- A1.1 L4: und / oder ----------
  'konjunktionen-und-oder': {
    picks: [
      { s: 'Ich habe einen Sohn ___ eine Tochter.', a: 'und', d: ['oder', 'aber'], t: 'Tengo un hijo y una hija.', e: '"und" suma dos cosas.' },
      { s: 'Kommst du heute ___ morgen?', a: 'oder', d: ['und', 'aber'], t: '¿Vienes hoy o mañana?', e: '"oder" ofrece una alternativa.' },
      { s: 'Er wohnt in Wien ___ arbeitet in Graz.', a: 'und', d: ['oder', 'denn'], t: 'Vive en Viena y trabaja en Graz.', e: 'Tras "und" el orden de la frase no cambia.' },
      { s: 'Möchten Sie Kaffee ___ Tee?', a: 'oder', d: ['und', 'aber'], t: '¿Quiere café o té?', e: 'Dos opciones entre las que elegir → oder.' },
      { s: 'Ich lerne Deutsch ___ Englisch.', a: 'und', d: ['oder', 'denn'], t: 'Aprendo alemán e inglés.', e: 'Las dos cosas a la vez → und.' },
      { s: 'Wir fahren mit dem Bus ___ mit dem Zug, das ist egal.', a: 'oder', d: ['und', 'aber'], t: 'Vamos en autobús o en tren, da igual.', e: '"das ist egal" indica alternativa → oder.' },
      { s: 'Meine Mutter heißt Ana ___ mein Vater heißt Luis.', a: 'und', d: ['oder', 'denn'], t: 'Mi madre se llama Ana y mi padre se llama Luis.', e: '"und" une dos frases completas sin cambiar el orden.' },
      { s: 'Ist das ein Kuli ___ ein Bleistift?', a: 'oder', d: ['und', 'aber'], t: '¿Es un bolígrafo o un lápiz?', e: 'Pregunta con dos posibilidades → oder.' },
      { s: 'Ich komme aus Spanien ___ wohne in Wien.', a: 'und', d: ['oder', 'denn'], t: 'Soy de España y vivo en Viena.', e: 'El sujeto no se repite tras "und".' },
      { s: 'Das Zimmer ist klein, ___ es ist sehr hell.', a: 'aber', d: ['und', 'oder'], t: 'La habitación es pequeña, pero muy luminosa.', e: '"aber" marca contraste, y tampoco cambia el orden.' },
      { s: 'Trinkst du Wasser ___ Saft?', a: 'oder', d: ['und', 'aber'], t: '¿Bebes agua o zumo?', e: 'Elección entre dos → oder.' },
      { s: 'Sie ist müde, ___ sie geht noch nicht schlafen.', a: 'aber', d: ['und', 'oder'], t: 'Está cansada, pero todavía no se va a dormir.', e: 'Las dos ideas se oponen → aber.' }
    ],
    orders: [
      { sol: ['Ich', 'heiße', 'Ana', 'und', 'ich', 'komme', 'aus', 'Peru'], t: 'Me llamo Ana y soy de Perú.', e: 'Tras "und" la frase sigue con su orden normal (sujeto + verbo).' },
      { sol: ['Möchtest', 'du', 'Tee', 'oder', 'Kaffee?'], t: '¿Quieres té o café?', e: '"oder" une dos palabras dentro de la misma pregunta.' },
      { sol: ['Er', 'spielt', 'Fußball', 'und', 'sie', 'spielt', 'Tennis'], t: 'Él juega al fútbol y ella al tenis.', e: 'Dos frases principales unidas por "und".' },
      { sol: ['Das', 'Zimmer', 'ist', 'klein,', 'aber', 'es', 'ist', 'billig'], t: 'La habitación es pequeña, pero barata.', e: '"aber" no manda el verbo al final.' },
      { sol: ['Kommst', 'du', 'allein', 'oder', 'mit', 'deinem', 'Bruder?'], t: '¿Vienes solo o con tu hermano?', e: 'La alternativa va detrás de "oder".' }
    ]
  },

  // ---------- A1.1 L5: el verbo en segunda posición ----------
  'verbposition-im-satz': {
    picks: [
      { s: 'Um 7 Uhr ___ ich auf.', a: 'stehe', d: ['ich stehe', 'steht'], t: 'A las 7 me levanto.', e: 'Si la frase empieza por la hora, el verbo sigue en 2ª posición y el sujeto pasa detrás.' },
      { s: 'Heute ___ wir ins Kino.', a: 'gehen', d: ['wir gehen', 'geht'], t: 'Hoy vamos al cine.', e: 'Posición 1 = "heute", posición 2 = el verbo.' },
      { s: 'Am Montag ___ ich um 6 Uhr auf.', a: 'stehe', d: ['ich stehe', 'aufstehe'], t: 'El lunes me levanto a las 6.', e: 'El verbo conjugado va el segundo; el prefijo "auf" se queda al final.' },
      { s: 'Morgen ___ meine Schwester nach Wien.', a: 'fährt', d: ['meine Schwester fährt', 'fahren'], t: 'Mañana mi hermana va a Viena.', e: 'Tras un complemento inicial se invierte: verbo + sujeto.' },
      { s: 'Ich ___ um halb acht.', a: 'frühstücke', d: ['frühstückt', 'frühstücken'], t: 'Desayuno a las siete y media.', e: 'Orden normal: sujeto (1), verbo (2).' },
      { s: 'Am Wochenende ___ er lange.', a: 'schläft', d: ['er schläft', 'schlafen'], t: 'El fin de semana duerme hasta tarde.', e: 'Inversión tras el complemento de tiempo.' },
      { s: 'Um 18 Uhr ___ der Kurs.', a: 'beginnt', d: ['der Kurs beginnt', 'beginnen'], t: 'El curso empieza a las 18.', e: 'Posición 2 para el verbo, siempre.' },
      { s: 'Dann ___ ich zur Arbeit.', a: 'fahre', d: ['ich fahre', 'fährt'], t: 'Luego voy al trabajo.', e: '"dann" ocupa la posición 1 y empuja al sujeto detrás del verbo.' },
      { s: 'Im Sommer ___ wir immer ans Meer.', a: 'fahren', d: ['wir fahren', 'fährt'], t: 'En verano vamos siempre al mar.', e: 'Complemento (1) + verbo (2) + sujeto (3).' },
      { s: 'Jeden Tag ___ sie eine Stunde Deutsch.', a: 'lernt', d: ['sie lernt', 'lernen'], t: 'Todos los días estudia una hora de alemán.', e: 'La expresión de frecuencia ocupa la posición 1.' },
      { s: 'Am Abend ___ ich fern.', a: 'sehe', d: ['ich sehe', 'fernsehe'], t: 'Por la tarde veo la tele.', e: 'fernsehen se separa: "sehe" en 2ª posición y "fern" al final.' },
      { s: 'Zuerst ___ ich einen Kaffee.', a: 'trinke', d: ['ich trinke', 'trinkt'], t: 'Primero me tomo un café.', e: 'Tras "zuerst" el verbo va inmediatamente después.' }
    ],
    orders: [
      { sol: ['Um', 'acht', 'Uhr', 'beginnt', 'der', 'Unterricht'], t: 'La clase empieza a las ocho.', e: 'La hora ocupa la posición 1 y el verbo la 2.' },
      { sol: ['Am', 'Wochenende', 'schlafe', 'ich', 'lange'], t: 'El fin de semana duermo hasta tarde.', e: 'Complemento (1) + verbo (2) + sujeto (3).' },
      { sol: ['Ich', 'stehe', 'jeden', 'Tag', 'um', 'sechs', 'Uhr', 'auf'], t: 'Me levanto todos los días a las seis.', e: 'Verbo separable: "stehe" el segundo, "auf" al final.' },
      { sol: ['Heute', 'Abend', 'sehe', 'ich', 'fern'], t: 'Esta noche veo la tele.', e: 'Aunque el complemento sean dos palabras, cuenta como posición 1.' },
      { sol: ['Meine', 'Freundin', 'kommt', 'morgen', 'nach', 'Wien'], t: 'Mi amiga viene mañana a Viena.', e: 'Sujeto (1) + verbo (2): el orden más normal.' }
    ]
  },

  // ---------- A1.1 L5: zuerst / dann / danach ----------
  'zeitadverbien-zuerst-dann-nachher': {
    picks: [
      { s: '___ frühstücke ich, dann fahre ich zur Arbeit.', a: 'Zuerst', d: ['Dann', 'Zuletzt'], t: 'Primero desayuno, luego voy al trabajo.', e: '"zuerst" abre la serie de acciones.' },
      { s: 'Zuerst dusche ich, ___ ziehe ich mich an.', a: 'dann', d: ['zuerst', 'vorher'], t: 'Primero me ducho, luego me visto.', e: '"dann" marca la acción siguiente.' },
      { s: 'Ich lerne zwei Stunden. ___ gehe ich einkaufen.', a: 'Danach', d: ['Zuerst', 'Vorher'], t: 'Estudio dos horas. Después voy a comprar.', e: '"danach" = después de eso.' },
      { s: 'Zuerst ___ ich Kaffee, dann lese ich die Zeitung.', a: 'trinke', d: ['ich trinke', 'trinkt'], t: 'Primero tomo café, luego leo el periódico.', e: 'Tras "zuerst" el verbo va inmediatamente detrás (posición 2).' },
      { s: 'Dann ___ wir nach Hause.', a: 'fahren', d: ['wir fahren', 'fährt'], t: 'Luego nos vamos a casa.', e: '"dann" ocupa la posición 1 → inversión verbo + sujeto.' },
      { s: 'Ich esse, ich lese noch etwas und ___ gehe ich schlafen.', a: 'zuletzt', d: ['zuerst', 'vorher'], t: 'Como, leo un rato y por último me voy a dormir.', e: '"zuletzt" cierra la serie.' },
      { s: '___ dem Frühstück putze ich mir die Zähne.', a: 'Nach', d: ['Danach', 'Dann'], t: 'Después del desayuno me lavo los dientes.', e: 'Delante de un sustantivo hace falta la preposición "nach" + dativo, no el adverbio "danach".' },
      { s: 'Wir gehen ins Kino und ___ essen wir eine Pizza.', a: 'danach', d: ['zuerst', 'vorher'], t: 'Vamos al cine y después comemos una pizza.', e: '"danach" enlaza con lo dicho antes.' },
      { s: '___ gehe ich duschen, dann frühstücke ich.', a: 'Zuerst', d: ['Danach', 'Zuletzt'], t: 'Primero me ducho, luego desayuno.', e: 'La primera acción de la serie → zuerst.' },
      { s: 'Nachher ___ ich noch einkaufen.', a: 'gehe', d: ['ich gehe', 'geht'], t: 'Luego voy todavía a comprar.', e: '"nachher" en posición 1 obliga a invertir: gehe ich.' },
      { s: 'Dann ___ ich mit dem Bus zur Arbeit.', a: 'fahre', d: ['ich fahre', 'fährt'], t: 'Luego voy en autobús al trabajo.', e: 'Inversión tras el adverbio inicial.' },
      { s: '___ ich schlafen gehe, lese ich noch ein bisschen.', a: 'Bevor', d: ['Vorher', 'Danach'], t: 'Antes de irme a dormir leo un poco.', e: 'El verbo "gehe" está al final → hace falta el subordinante "bevor", no el adverbio "vorher".' }
    ],
    orders: [
      { sol: ['Zuerst', 'frühstücke', 'ich', 'und', 'dann', 'fahre', 'ich', 'zur', 'Arbeit'], t: 'Primero desayuno y luego voy al trabajo.', e: 'Tanto tras "zuerst" como tras "dann" el verbo va justo detrás.' },
      { sol: ['Danach', 'gehe', 'ich', 'mit', 'dem', 'Hund', 'spazieren'], t: 'Después saco a pasear al perro.', e: 'Adverbio (1) + verbo (2) + sujeto (3).' },
      { sol: ['Am', 'Abend', 'sehe', 'ich', 'zuerst', 'die', 'Nachrichten'], t: 'Por la tarde veo primero las noticias.', e: '"zuerst" también puede ir dentro de la frase, detrás del sujeto.' },
      { sol: ['Zuletzt', 'putze', 'ich', 'mir', 'die', 'Zähne'], t: 'Por último me lavo los dientes.', e: 'Con "zuletzt" en posición 1 el verbo le sigue.' }
    ]
  },

  // ---------- A1.1 L8: Satzklammer con modales ----------
  satzklammer: {
    picks: [
      { s: 'Ich kann am Wochenende Fußball ___.', a: 'spielen', d: ['spiele', 'gespielt'], t: 'Puedo jugar al fútbol el fin de semana.', e: 'Con un modal, el segundo verbo va en INFINITIVO y al final.' },
      { s: 'Wir wollen nächstes Jahr nach Wien ___.', a: 'ziehen', d: ['ziehen wir', 'gezogen'], t: 'Queremos mudarnos a Viena el año que viene.', e: 'El infinitivo cierra la frase.' },
      { s: 'Kannst du gut ___?', a: 'schwimmen', d: ['schwimmst', 'geschwommen'], t: '¿Sabes nadar bien?', e: 'Tras el modal, infinitivo al final (también en preguntas).' },
      { s: 'Er will heute Abend ins Kino ___.', a: 'gehen', d: ['geht', 'gegangen'], t: 'Quiere ir al cine esta tarde.', e: 'Modal en 2ª posición, infinitivo al final: la "grapa" de la frase.' },
      { s: 'Ich ___ sehr gut kochen.', a: 'kann', d: ['kannst', 'können'], t: 'Sé cocinar muy bien.', e: 'können con ich: kann (1ª y 3ª persona sin terminación).' },
      { s: 'Willst du mit uns ___?', a: 'kommen', d: ['kommst', 'gekommen'], t: '¿Quieres venir con nosotros?', e: 'El infinitivo va al final.' },
      { s: 'Meine Kinder können schon ___.', a: 'lesen', d: ['lesen sie', 'gelesen'], t: 'Mis hijos ya saben leer.', e: 'Infinitivo al final de la frase.' },
      { s: 'Wir ___ am Samstag grillen.', a: 'wollen', d: ['will', 'willst'], t: 'El sábado queremos hacer una barbacoa.', e: 'wollen con wir: wollen.' },
      { s: 'Ich kann heute leider nicht ___.', a: 'arbeiten', d: ['arbeite', 'gearbeitet'], t: 'Hoy lamentablemente no puedo trabajar.', e: '"nicht" va justo delante del infinitivo final.' },
      { s: 'Sie will Ärztin ___.', a: 'werden', d: ['wird', 'geworden'], t: 'Quiere ser médica.', e: 'werden en infinitivo, al final.' },
      { s: 'Was ___ du am Wochenende machen?', a: 'willst', d: ['will', 'wollen'], t: '¿Qué quieres hacer el fin de semana?', e: 'wollen con du: willst, en 2ª posición tras "was".' },
      { s: 'Hier ___ man nicht parken.', a: 'kann', d: ['kannst', 'können'], t: 'Aquí no se puede aparcar.', e: '"man" lleva siempre 3ª persona singular: kann.' }
    ],
    orders: [
      { sol: ['Ich', 'kann', 'am', 'Samstag', 'Tennis', 'spielen'], t: 'El sábado puedo jugar al tenis.', e: 'Satzklammer: "kann" el segundo, "spielen" al final.' },
      { sol: ['Wir', 'wollen', 'im', 'Sommer', 'nach', 'Kroatien', 'fahren'], t: 'En verano queremos ir a Croacia.', e: 'El infinitivo cierra la frase.' },
      { sol: ['Kannst', 'du', 'mir', 'bitte', 'helfen?'], t: '¿Me puedes ayudar, por favor?', e: 'En la pregunta el modal abre y el infinitivo cierra.' },
      { sol: ['Er', 'will', 'heute', 'Abend', 'nicht', 'fernsehen'], t: 'Esta tarde no quiere ver la tele.', e: '"nicht" justo antes del infinitivo final.' },
      { sol: ['Meine', 'Tochter', 'kann', 'schon', 'sehr', 'gut', 'lesen'], t: 'Mi hija ya sabe leer muy bien.', e: 'Modal (2) … infinitivo (final).' }
    ]
  },

  // ---------- A1.2 L9: Satzklammer con Perfekt ----------
  'satzklammer-bei-perfekt': {
    picks: [
      { s: 'Am Montag habe ich meine Familie ___.', a: 'besucht', d: ['besuche', 'besuchen'], t: 'El lunes visité a mi familia.', e: 'Perfekt: auxiliar en 2ª posición y participio al final.' },
      { s: 'Wann bist du nach Hause ___?', a: 'gekommen', d: ['kommen', 'kommst'], t: '¿Cuándo llegaste a casa?', e: 'El participio cierra la pregunta.' },
      { s: 'Ich habe gestern viel ___.', a: 'gearbeitet', d: ['arbeite', 'arbeiten'], t: 'Ayer trabajé mucho.', e: 'Partizip II de arbeiten: gearbeitet, al final.' },
      { s: 'Wir ___ am Abend einen Film gesehen.', a: 'haben', d: ['sind', 'hatten'], t: 'Por la tarde vimos una película.', e: 'sehen forma el Perfekt con haben.' },
      { s: 'Sie ___ um sieben aufgestanden.', a: 'ist', d: ['hat', 'war'], t: 'Se levantó a las siete.', e: 'aufstehen es cambio de estado → auxiliar sein.' },
      { s: 'Hast du schon ___?', a: 'gegessen', d: ['isst', 'essen'], t: '¿Ya has comido?', e: 'Partizip II irregular de essen: gegessen.' },
      { s: 'Gestern ___ ich sehr früh ins Bett gegangen.', a: 'bin', d: ['habe', 'war'], t: 'Ayer me fui muy pronto a la cama.', e: 'gehen es movimiento → sein.' },
      { s: 'Was habt ihr am Wochenende ___?', a: 'gemacht', d: ['macht', 'machen'], t: '¿Qué habéis hecho el fin de semana?', e: 'El participio va al final, detrás de todo lo demás.' },
      { s: 'Der Kurs hat um neun Uhr ___.', a: 'begonnen', d: ['beginnt', 'beginnen'], t: 'El curso empezó a las nueve.', e: 'beginnen → begonnen (sin ge- extra: los verbos con prefijo inseparable no lo llevan).' },
      { s: 'Ich ___ meine Hausaufgaben schon gemacht.', a: 'habe', d: ['bin', 'hatte'], t: 'Ya he hecho los deberes.', e: 'machen va con haben.' },
      { s: 'Am Sonntag sind wir lange ___.', a: 'geblieben', d: ['bleiben', 'bleibt'], t: 'El domingo nos quedamos mucho rato.', e: 'bleiben usa sein y su participio es geblieben.' },
      { s: 'Wie lange hast du gestern ___?', a: 'geschlafen', d: ['schläfst', 'schlafen'], t: '¿Cuánto dormiste ayer?', e: 'schlafen → geschlafen, al final de la pregunta.' }
    ],
    orders: [
      { sol: ['Am', 'Montag', 'habe', 'ich', 'meine', 'Familie', 'besucht'], t: 'El lunes visité a mi familia.', e: 'Complemento (1), auxiliar (2), participio al final.' },
      { sol: ['Wann', 'bist', 'du', 'nach', 'Hause', 'gekommen?'], t: '¿Cuándo llegaste a casa?', e: 'Wann (1), auxiliar (2), participio al final.' },
      { sol: ['Wir', 'haben', 'gestern', 'einen', 'Film', 'gesehen'], t: 'Ayer vimos una película.', e: 'La grapa: haben … gesehen.' },
      { sol: ['Ich', 'bin', 'um', 'sieben', 'Uhr', 'aufgestanden'], t: 'Me levanté a las siete.', e: 'Verbo separable en Perfekt: el ge- va en medio (aufgestanden).' },
      { sol: ['Was', 'habt', 'ihr', 'am', 'Wochenende', 'gemacht?'], t: '¿Qué habéis hecho el fin de semana?', e: 'El participio cierra siempre la frase.' }
    ]
  },

  // ---------- A1.2 L16: denn ----------
  'konjunktion-denn': {
    picks: [
      { s: 'Ich komme später, ___ ich muss noch arbeiten.', a: 'denn', d: ['weil', 'deswegen'], t: 'Llego más tarde, porque todavía tengo que trabajar.', e: 'El verbo "muss" está en 2ª posición, no al final → "denn".' },
      { s: 'Er bleibt zu Hause, denn er ___ krank.', a: 'ist', d: ['ist er', 'sei'], t: 'Se queda en casa, porque está enfermo.', e: 'Tras "denn" la frase sigue normal: sujeto + verbo.' },
      { s: 'Wir gehen nicht ins Schwimmbad, ___ das Wetter ist schlecht.', a: 'denn', d: ['weil', 'obwohl'], t: 'No vamos a la piscina, porque hace mal tiempo.', e: '"ist" en 2ª posición → conector coordinante "denn".' },
      { s: 'Ich kaufe das nicht, ___ es ist zu teuer.', a: 'denn', d: ['weil', 'dass'], t: 'No lo compro, porque es demasiado caro.', e: 'El orden no cambia tras denn.' },
      { s: 'Sie lernt viel, ___ sie hat bald eine Prüfung.', a: 'denn', d: ['weil', 'trotzdem'], t: 'Estudia mucho, porque pronto tiene un examen.', e: 'El verbo "hat" va el segundo → denn.' },
      { s: 'Ich nehme den Bus, ___ mein Auto ist kaputt.', a: 'denn', d: ['weil', 'deswegen'], t: 'Cojo el autobús, porque mi coche está averiado.', e: 'Tras denn: sujeto, verbo, resto.' },
      { s: 'Er kommt nicht mit, ___ er keine Zeit hat.', a: 'weil', d: ['denn', 'trotzdem'], t: 'No viene, porque no tiene tiempo.', e: 'Aquí "hat" está AL FINAL → hace falta "weil", no "denn".' },
      { s: 'Ich bleibe im Bett, denn ich ___ sehr müde.', a: 'bin', d: ['bin ich', 'sei'], t: 'Me quedo en la cama, porque estoy muy cansado.', e: 'Sin inversión: ich bin.' },
      { s: 'Sie freut sich, ___ morgen ist ihr Geburtstag.', a: 'denn', d: ['weil', 'dass'], t: 'Está contenta, porque mañana es su cumpleaños.', e: 'La segunda frase es principal ("ist" el segundo) → denn.' },
      { s: 'Wir essen jetzt, ___ wir haben Hunger.', a: 'denn', d: ['weil', 'obwohl'], t: 'Comemos ya, porque tenemos hambre.', e: 'denn no toca el orden de palabras.' },
      { s: 'Der Unterricht fällt aus, ___ die Lehrerin ist krank.', a: 'denn', d: ['weil', 'deswegen'], t: 'La clase se suspende, porque la profesora está enferma.', e: 'Verbo en 2ª posición tras el conector → denn.' },
      { s: 'Ich rufe dich morgen an, ___ heute geht es nicht.', a: 'denn', d: ['weil', 'dass'], t: 'Te llamo mañana, porque hoy no puede ser.', e: 'denn + frase principal completa.' }
    ],
    orders: [
      { sol: ['Ich', 'komme', 'später,', 'denn', 'ich', 'muss', 'noch', 'arbeiten'], t: 'Llego más tarde, porque todavía tengo que trabajar.', e: 'Tras "denn" el orden es el normal: sujeto + verbo.' },
      { sol: ['Wir', 'bleiben', 'zu', 'Hause,', 'denn', 'es', 'regnet'], t: 'Nos quedamos en casa, porque llueve.', e: 'denn no manda el verbo al final.' },
      { sol: ['Er', 'isst', 'nichts,', 'denn', 'er', 'hat', 'keinen', 'Hunger'], t: 'No come nada, porque no tiene hambre.', e: 'Dos frases principales unidas por denn.' },
      { sol: ['Ich', 'nehme', 'den', 'Zug,', 'denn', 'das', 'Auto', 'ist', 'kaputt'], t: 'Cojo el tren, porque el coche está averiado.', e: 'Sujeto + verbo también después de denn.' },
      { sol: ['Sie', 'lernt', 'viel,', 'denn', 'sie', 'hat', 'bald', 'eine', 'Prüfung'], t: 'Estudia mucho, porque pronto tiene un examen.', e: 'denn + frase principal completa.' },
      { sol: ['Ich', 'kaufe', 'das', 'nicht,', 'denn', 'es', 'ist', 'zu', 'teuer'], t: 'No lo compro, porque es demasiado caro.', e: 'El orden no cambia tras denn.' }
    ]
  },

  // ---------- A2.1 L2: weil ----------
  'konjunktion-weil': {
    picks: [
      { s: 'Ich komme heute nicht, ___ ich arbeiten muss.', a: 'weil', d: ['denn', 'deshalb'], t: 'Hoy no voy porque tengo que trabajar.', e: 'El verbo "muss" está al final → conector subordinante "weil".' },
      { s: 'Wir bleiben zu Hause, weil das Wetter schlecht ___.', a: 'ist', d: ['sein', 'ist es'], t: 'Nos quedamos en casa porque hace mal tiempo.', e: 'Tras "weil" el verbo conjugado va AL FINAL.' },
      { s: 'Weil ich keine Zeit ___, komme ich später.', a: 'habe', d: ['habe ich', 'hab'], t: 'Como no tengo tiempo, llego más tarde.', e: 'Subordinada primero: verbo al final ("habe"), y la principal invierte ("komme ich").' },
      { s: 'Sie isst kein Fleisch, ___ sie Vegetarierin ist.', a: 'weil', d: ['aber', 'trotzdem'], t: 'No come carne porque es vegetariana.', e: '"weil" da la causa y manda el verbo "ist" al final.' },
      { s: 'Er lernt Deutsch, ___ er in Berlin leben will.', a: 'weil', d: ['denn', 'dass'], t: 'Aprende alemán porque quiere vivir en Berlín.', e: 'El verbo "will" está al final, así que se usa "weil".' },
      { s: 'Wir gehen nicht spazieren, weil es ___.', a: 'regnet', d: ['regnen', 'regnet es'], t: 'No vamos de paseo porque llueve.', e: 'En la subordinada con weil, el verbo (regnet) va al final.' },
      { s: '___ er krank ist, bleibt er heute im Bett.', a: 'Weil', d: ['Denn', 'Deswegen'], t: 'Como está enfermo, se queda hoy en la cama.', e: 'Si empezamos dando la razón, usamos "Weil" al principio.' },
      { s: 'Ich mag diesen Film, weil die Geschichte so lustig ___.', a: 'ist', d: ['sein', 'ist sie'], t: 'Me gusta esta película porque la historia es muy divertida.', e: 'El verbo "ist" va al final de la oración subordinada.' },
      { s: 'Ich nehme das Fahrrad, weil der Bus zu lange ___.', a: 'braucht', d: ['braucht er', 'brauchen'], t: 'Cojo la bici porque el autobús tarda demasiado.', e: 'Verbo al final de la subordinada.' },
      { s: 'Warum kommst du nicht? – ___ ich keine Lust habe.', a: 'Weil', d: ['Denn', 'Deswegen'], t: '¿Por qué no vienes? – Porque no tengo ganas.', e: 'La respuesta a "warum" empieza por "weil" (nunca por "denn").' },
      { s: 'Sie ist müde, weil sie gestern lange ___ hat.', a: 'gearbeitet', d: ['arbeitet', 'arbeiten'], t: 'Está cansada porque ayer trabajó hasta tarde.', e: 'Perfekt en subordinada: participio + auxiliar al final.' },
      { s: 'Weil wir umgezogen ___, haben wir viel zu tun.', a: 'sind', d: ['sind wir', 'haben'], t: 'Como nos hemos mudado, tenemos mucho que hacer.', e: 'umziehen usa sein; el auxiliar cierra la subordinada.' }
    ],
    orders: [
      { sol: ['weil', 'ich', 'morgen', 'früh', 'arbeiten', 'muss'], t: '…porque mañana tengo que trabajar temprano.', e: 'En la subordinada: infinitivo + verbo conjugado ("muss") al final.' },
      { sol: ['weil', 'das', 'Essen', 'sehr', 'gut', 'geschmeckt', 'hat'], t: '…porque la comida estaba muy buena.', e: 'Perfekt en subordinada: participio + auxiliar ("hat") al final.' },
      { sol: ['Weil', 'ich', 'Kopfschmerzen', 'habe,', 'gehe', 'ich', 'schlafen'], t: 'Como me duele la cabeza, me voy a dormir.', e: 'Estructura subordinada + principal (verbo antes del sujeto).' },
      { sol: ['Ich', 'bleibe', 'zu', 'Hause,', 'weil', 'ich', 'krank', 'bin'], t: 'Me quedo en casa porque estoy enfermo.', e: 'Principal + weil-subordinada con el verbo al final.' },
      { sol: ['Weil', 'der', 'Zug', 'Verspätung', 'hatte,', 'kam', 'ich', 'zu', 'spät'], t: 'Como el tren llevaba retraso, llegué tarde.', e: 'Subordinada delante: la principal empieza por el verbo.' }
    ]
  },

  // ---------- A2.1 L3: wenn ----------
  'konjunktion-wenn': {
    picks: [
      { s: 'Ruf mich an, ___ du Fragen hast.', a: 'wenn', d: ['als', 'ob'], t: 'Llámame si tienes preguntas.', e: '"wenn" (si / cuando) manda el verbo "hast" al final.' },
      { s: 'Wenn ich Zeit ___, helfe ich dir gern.', a: 'habe', d: ['habe ich', 'hätte'], t: 'Cuando tengo tiempo, te ayudo con gusto.', e: 'Verbo al final en la subordinada; luego la principal invierte: "helfe ich".' },
      { s: 'Immer ___ es regnet, nehme ich den Bus.', a: 'wenn', d: ['als', 'wann'], t: 'Siempre que llueve cojo el autobús.', e: 'Acción repetida → "wenn". "wann" solo en preguntas.' },
      { s: 'Ich freue mich, ___ du kommst.', a: 'wenn', d: ['dass', 'als'], t: 'Me alegro cuando vienes.', e: 'Condición o tiempo → "wenn".' },
      { s: '___ du willst, können wir ins Kino gehen.', a: 'Wenn', d: ['Wann', 'Als'], t: 'Si quieres, podemos ir al cine.', e: 'Condicional "si" → "wenn".' },
      { s: 'Was machst du, ___ du Kopfschmerzen hast?', a: 'wenn', d: ['wann', 'dass'], t: '¿Qué haces cuando te duele la cabeza?', e: 'Situación habitual → "wenn".' },
      { s: '___ hast du Geburtstag?', a: 'Wann', d: ['Wenn', 'Als'], t: '¿Cuándo es tu cumpleaños?', e: 'En una pregunta directa se usa "wann", no "wenn".' },
      { s: 'Wenn das Wetter schön ___, gehen wir schwimmen.', a: 'ist', d: ['ist es', 'sein'], t: 'Si hace buen tiempo, vamos a nadar.', e: 'El verbo cierra la subordinada.' },
      { s: 'Ich rufe dich an, wenn ich zu Hause ___.', a: 'bin', d: ['bin ich', 'sein'], t: 'Te llamo cuando esté en casa.', e: 'Verbo al final; en alemán se usa presente donde el español usa subjuntivo.' },
      { s: 'Sag mir Bescheid, ___ du fertig bist.', a: 'wenn', d: ['wann', 'als'], t: 'Avísame cuando termines.', e: 'El verbo "bist" está al final → wenn.' },
      { s: 'Wenn ich mehr Geld ___, würde ich reisen.', a: 'hätte', d: ['habe ich', 'haben'], t: 'Si tuviera más dinero, viajaría.', e: 'Condición irreal: Konjunktiv II "hätte", igualmente al final.' },
      { s: 'Weißt du, ___ der Zug ankommt?', a: 'wann', d: ['wenn', 'als'], t: '¿Sabes cuándo llega el tren?', e: 'Pregunta indirecta por el momento → wann.' }
    ],
    orders: [
      { sol: ['wenn', 'ich', 'mit', 'der', 'Arbeit', 'fertig', 'bin'], t: '…cuando termine el trabajo.', e: 'Subordinada con "wenn": el verbo conjugado ("bin") va al final.' },
      { sol: ['Wenn', 'es', 'regnet,', 'bleiben', 'wir', 'zu', 'Hause'], t: 'Si llueve, nos quedamos en casa.', e: 'Subordinada primero → la principal empieza por el verbo.' },
      { sol: ['Ruf', 'mich', 'an,', 'wenn', 'du', 'Zeit', 'hast'], t: 'Llámame cuando tengas tiempo.', e: 'La principal es imperativa; en la subordinada "hast" cierra.' },
      { sol: ['Wenn', 'ich', 'müde', 'bin,', 'trinke', 'ich', 'einen', 'Kaffee'], t: 'Cuando estoy cansado, me tomo un café.', e: 'Verbo al final en la subordinada, inversión en la principal.' }
    ]
  },

  // ---------- A2.1 L6: dass ----------
  'konjunktion-dass': {
    picks: [
      { s: 'Ich glaube, ___ der Film sehr spannend ist.', a: 'dass', d: ['das', 'weil'], t: 'Creo que la película es muy emocionante.', e: '"dass" (con dos eses) introduce la completiva y manda el verbo al final.' },
      { s: 'Er sagt, dass er lieber Dokus ___.', a: 'schaut', d: ['schaut er', 'zu schauen'], t: 'Dice que prefiere ver documentales.', e: 'Tras "dass" el verbo conjugado va AL FINAL.' },
      { s: 'Ich finde, ___ man zu viel fernsieht.', a: 'dass', d: ['das', 'ob'], t: 'Creo que se ve demasiada tele.', e: 'Tras "ich finde" se usa "dass" + verbo al final.' },
      { s: 'Wusstest du, dass er heute Geburtstag ___?', a: 'hat', d: ['hat er', 'haben'], t: '¿Sabías que hoy es su cumpleaños?', e: 'Verbo al final de la subordinada con dass.' },
      { s: 'Es ist wichtig, ___ du Deutsch lernst.', a: 'dass', d: ['das', 'weil'], t: 'Es importante que aprendas alemán.', e: '"Es ist wichtig, dass…".' },
      { s: 'Sie hofft, dass das Wetter morgen besser ___.', a: 'wird', d: ['wird es', 'sein'], t: 'Espera que el tiempo mañana sea mejor.', e: 'Verbo "wird" al final.' },
      { s: 'Ich weiß nicht, ___ er heute kommt.', a: 'ob', d: ['dass', 'das'], t: 'No sé si viene hoy.', e: 'Si hay duda (sí o no), se usa "ob", no "dass".' },
      { s: 'Tut mir leid, ___ ich zu spät bin.', a: 'dass', d: ['das', 'ob'], t: 'Siento llegar tarde.', e: 'Disculpa con "dass" + verbo al final.' },
      { s: 'Ich habe gehört, dass du umgezogen ___.', a: 'bist', d: ['bist du', 'sein'], t: 'He oído que te has mudado.', e: 'El auxiliar "bist" cierra la subordinada.' },
      { s: '___ Buch, das ich lese, ist sehr gut.', a: 'Das', d: ['Dass', 'Ob'], t: 'El libro que estoy leyendo es muy bueno.', e: 'Aquí "das" es artículo, no conjunción: se escribe con una sola s.' },
      { s: 'Meine Lehrerin sagt, dass ich mehr sprechen ___.', a: 'soll', d: ['soll ich', 'sollen'], t: 'Mi profesora dice que debo hablar más.', e: 'El modal conjugado cierra la subordinada, detrás del infinitivo.' },
      { s: 'Ich denke, ___ wir pünktlich ankommen.', a: 'dass', d: ['das', 'weil'], t: 'Creo que llegaremos puntuales.', e: 'Completiva tras un verbo de opinión → dass.' }
    ],
    orders: [
      { sol: ['dass', 'die', 'Serie', 'viel', 'zu', 'lang', 'ist'], t: '…que la serie es demasiado larga.', e: 'Tras "dass" el verbo ("ist") cierra la frase.' },
      { sol: ['dass', 'ich', 'die', 'Folge', 'schon', 'gesehen', 'habe'], t: '…que ya he visto el capítulo.', e: 'Perfekt en subordinada: participio + auxiliar ("habe") al final.' },
      { sol: ['Ich', 'glaube,', 'dass', 'er', 'heute', 'nicht', 'kommt'], t: 'Creo que hoy no viene.', e: 'Principal + dass-subordinada con el verbo al final.' },
      { sol: ['Es', 'ist', 'schade,', 'dass', 'du', 'nicht', 'mitkommen', 'kannst'], t: 'Es una pena que no puedas venir.', e: 'Infinitivo + modal conjugado cierran la subordinada.' },
      { sol: ['Ich', 'finde,', 'dass', 'man', 'zu', 'viel', 'fernsieht'], t: 'Creo que se ve demasiada tele.', e: 'El verbo cierra la subordinada.' },
      { sol: ['Wusstest', 'du,', 'dass', 'er', 'heute', 'Geburtstag', 'hat?'], t: '¿Sabías que hoy es su cumpleaños?', e: '"hat" al final de la subordinada.' }
    ]
  },

  // ---------- A2.1 L5: deswegen ----------
  deswegen: {
    picks: [
      { s: 'Mein Sohn war krank, ___ war er nicht in der Schule.', a: 'deswegen', d: ['weil', 'obwohl'], t: 'Mi hijo estaba enfermo, por eso no fue al colegio.', e: '"deswegen" es adverbio: ocupa la posición 1 y detrás va el verbo ("war er").' },
      { s: 'Ich habe den Bus verpasst. Deswegen ___ ich zu spät.', a: 'komme', d: ['ich komme', 'gekommen'], t: 'He perdido el bus. Por eso llego tarde.', e: 'Tras "deswegen" hay inversión: verbo + sujeto.' },
      { s: 'Sie hat keine Zeit, ___ kommt sie nicht mit.', a: 'deswegen', d: ['denn', 'dass'], t: 'No tiene tiempo, por eso no viene.', e: 'El verbo "kommt" va justo detrás → adverbio conector.' },
      { s: 'Es regnet stark, ___ bleiben wir zu Hause.', a: 'deswegen', d: ['weil', 'dass'], t: 'Llueve fuerte, por eso nos quedamos en casa.', e: 'Consecuencia → "deswegen" (posición 1 y le sigue el verbo).' },
      { s: 'Ich bin müde. ___ gehe ich früh ins Bett.', a: 'Deswegen', d: ['Weil', 'Denn'], t: 'Estoy cansado. Por eso me voy pronto a la cama.', e: 'Adverbio "deswegen" abre la segunda oración.' },
      { s: 'Der Zug hatte Verspätung, ___ habe ich den Termin verpasst.', a: 'deswegen', d: ['weil', 'obwohl'], t: 'El tren llevaba retraso, por eso perdí la cita.', e: 'El auxiliar "habe" va justo detrás → deswegen.' },
      { s: 'Ich habe kein Auto, ___ fahre ich mit dem Rad.', a: 'deswegen', d: ['denn', 'dass'], t: 'No tengo coche, por eso voy en bici.', e: 'Consecuencia con inversión (fahre ich).' },
      { s: 'Er hat nicht gelernt, ___ hat er die Prüfung nicht bestanden.', a: 'deswegen', d: ['weil', 'trotzdem'], t: 'No estudió, por eso no aprobó el examen.', e: 'Causa → consecuencia: deswegen.' },
      { s: 'Ich bin nicht gekommen, ___ ich krank war.', a: 'weil', d: ['deswegen', 'trotzdem'], t: 'No vine porque estaba enfermo.', e: 'Aquí el verbo "war" está al final → hace falta "weil", no "deswegen".' },
      { s: 'Das Geschäft ist geschlossen. ___ kaufe ich online.', a: 'Deswegen', d: ['Weil', 'Obwohl'], t: 'La tienda está cerrada. Por eso compro por internet.', e: 'Adverbio en posición 1 + verbo inmediatamente después.' },
      { s: 'Wir haben wenig Platz, ___ verkaufen wir das Sofa.', a: 'deswegen', d: ['weil', 'dass'], t: 'Tenemos poco sitio, por eso vendemos el sofá.', e: 'Inversión: verkaufen wir.' },
      { s: 'Sie spricht sehr gut Deutsch, ___ hat sie den Job bekommen.', a: 'deswegen', d: ['weil', 'obwohl'], t: 'Habla muy bien alemán, por eso consiguió el trabajo.', e: 'El auxiliar va justo detrás del adverbio.' }
    ],
    orders: [
      { sol: ['Ich', 'war', 'krank,', 'deswegen', 'bin', 'ich', 'nicht', 'gekommen'], t: 'Estaba enfermo, por eso no vine.', e: 'Tras "deswegen" va el verbo y luego el sujeto.' },
      { sol: ['Es', 'regnet,', 'deswegen', 'nehme', 'ich', 'den', 'Bus'], t: 'Llueve, por eso cojo el autobús.', e: 'Adverbio (1), verbo (2), sujeto (3).' },
      { sol: ['Deswegen', 'gehe', 'ich', 'heute', 'früher', 'nach', 'Hause'], t: 'Por eso hoy me voy antes a casa.', e: '"Deswegen" abre la frase y el verbo le sigue.' },
      { sol: ['Der', 'Kurs', 'war', 'voll,', 'deswegen', 'habe', 'ich', 'gewartet'], t: 'El curso estaba lleno, por eso he esperado.', e: 'El auxiliar "habe" viene justo después de deswegen.' },
      { sol: ['Ich', 'habe', 'kein', 'Auto,', 'deswegen', 'fahre', 'ich', 'Rad'], t: 'No tengo coche, por eso voy en bici.', e: 'Inversión tras deswegen.' },
      { sol: ['Sie', 'hat', 'keine', 'Zeit,', 'deswegen', 'kommt', 'sie', 'nicht'], t: 'No tiene tiempo, por eso no viene.', e: 'deswegen + verbo + sujeto.' }
    ]
  },

  // ---------- A2.1 L6: trotzdem ----------
  trotzdem: {
    picks: [
      { s: 'Der Film war lang. ___ hat er mir gefallen.', a: 'Trotzdem', d: ['Obwohl', 'Weil'], t: 'La película era larga. Aun así me gustó.', e: '"trotzdem" ocupa la posición 1 y detrás va el verbo ("hat er").' },
      { s: 'Ich bin müde, ___ schaue ich noch eine Folge.', a: 'trotzdem', d: ['obwohl', 'dass'], t: 'Estoy cansado, aun así veo otro capítulo.', e: 'El verbo "schaue" va justo detrás → adverbio "trotzdem".' },
      { s: '___ es spät war, haben wir weitergeschaut.', a: 'Obwohl', d: ['Trotzdem', 'Deswegen'], t: 'Aunque era tarde, seguimos viendo.', e: 'Aquí el verbo "war" está al final → hace falta el subordinante "obwohl".' },
      { s: 'Es ist kalt, ___ gehen wir schwimmen.', a: 'trotzdem', d: ['obwohl', 'weil'], t: 'Hace frío, sin embargo vamos a nadar.', e: 'El verbo "gehen" le sigue directamente → trotzdem.' },
      { s: 'Er hat wenig Geld. ___ kauft er ein neues Auto.', a: 'Trotzdem', d: ['Obwohl', 'Deswegen'], t: 'Tiene poco dinero. Aun así se compra un coche nuevo.', e: 'Oposición de ideas, y es adverbio en posición 1.' },
      { s: 'Ich habe viel gelernt, ___ habe ich die Prüfung nicht bestanden.', a: 'trotzdem', d: ['obwohl', 'weil'], t: 'He estudiado mucho, aun así no he aprobado.', e: 'Concesión con adverbio: trotzdem + verbo.' },
      { s: '___ ich keine Zeit hatte, bin ich gekommen.', a: 'Obwohl', d: ['Trotzdem', 'Denn'], t: 'Aunque no tenía tiempo, vine.', e: '"hatte" al final → obwohl.' },
      { s: 'Das Zimmer ist klein, ___ gefällt es mir.', a: 'trotzdem', d: ['obwohl', 'weil'], t: 'La habitación es pequeña, aun así me gusta.', e: 'Verbo justo detrás → trotzdem.' },
      { s: 'Sie ist krank. ___ geht sie arbeiten.', a: 'Trotzdem', d: ['Obwohl', 'Weil'], t: 'Está enferma. Aun así va a trabajar.', e: 'Adverbio en posición 1 con inversión.' },
      { s: 'Obwohl der Bus Verspätung ___, war ich pünktlich.', a: 'hatte', d: ['hatte er', 'haben'], t: 'Aunque el autobús llevaba retraso, llegué puntual.', e: 'Tras "obwohl" el verbo va al final.' },
      { s: 'Wir haben wenig Platz, ___ laden wir alle ein.', a: 'trotzdem', d: ['obwohl', 'deswegen'], t: 'Tenemos poco sitio, aun así invitamos a todos.', e: 'Contraste + inversión → trotzdem.' },
      { s: 'Das Essen war teuer. ___ war es nicht gut.', a: 'Trotzdem', d: ['Obwohl', 'Denn'], t: 'La comida era cara. Aun así no estaba buena.', e: 'Trotzdem (1) + war (2).' }
    ],
    orders: [
      { sol: ['Es', 'war', 'kalt,', 'trotzdem', 'sind', 'wir', 'schwimmen', 'gegangen'], t: 'Hacía frío, aun así fuimos a nadar.', e: 'Tras "trotzdem" va el auxiliar y luego el sujeto.' },
      { sol: ['Trotzdem', 'habe', 'ich', 'viel', 'gelernt'], t: 'Aun así he aprendido mucho.', e: 'Adverbio (1), auxiliar (2), sujeto (3).' },
      { sol: ['Obwohl', 'ich', 'müde', 'war,', 'bin', 'ich', 'gekommen'], t: 'Aunque estaba cansado, vine.', e: 'Con "obwohl" el verbo cierra la subordinada.' },
      { sol: ['Das', 'Zimmer', 'ist', 'klein,', 'trotzdem', 'gefällt', 'es', 'mir'], t: 'La habitación es pequeña, aun así me gusta.', e: 'trotzdem + verbo + sujeto.' },
      { sol: ['Sie', 'ist', 'krank,', 'trotzdem', 'geht', 'sie', 'arbeiten'], t: 'Está enferma, aun así va a trabajar.', e: 'Adverbio en posición 1 + inversión.' },
      { sol: ['Obwohl', 'es', 'spät', 'war,', 'haben', 'wir', 'weitergeschaut'], t: 'Aunque era tarde, seguimos viendo.', e: 'Con obwohl el verbo cierra la subordinada.' }
    ]
  },

  // ---------- A2.1 L8: würde + infinitivo ----------
  'satzklammer-wuerd': {
    picks: [
      { s: 'Ich würde gern einen Sitzplatz ___.', a: 'reservieren', d: ['reserviere', 'reserviert'], t: 'Me gustaría reservar un asiento.', e: 'würde en 2ª posición y el infinitivo al final.' },
      { s: 'Würden Sie mir bitte den Weg ___?', a: 'zeigen', d: ['zeigt', 'gezeigt'], t: '¿Me indicaría el camino, por favor?', e: 'Petición cortés: Würden Sie … + infinitivo al final.' },
      { s: 'Wir würden lieber mit dem Zug ___.', a: 'fahren', d: ['fahren wir', 'gefahren'], t: 'Preferiríamos ir en tren.', e: 'El infinitivo cierra la frase.' },
      { s: 'Ich ___ gern nach Italien fahren.', a: 'würde', d: ['werde', 'wäre'], t: 'Me gustaría ir a Italia.', e: 'Deseo → würde + infinitivo.' },
      { s: '___ du mir bitte helfen?', a: 'Würdest', d: ['Wirst', 'Wärst'], t: '¿Me ayudarías, por favor?', e: 'würden con du: würdest.' },
      { s: 'An deiner Stelle würde ich einen Arzt ___.', a: 'fragen', d: ['frage', 'gefragt'], t: 'Yo en tu lugar preguntaría a un médico.', e: 'Consejo con würde + infinitivo final.' },
      { s: 'Sie ___ gern länger bleiben.', a: 'würden', d: ['würde', 'wären'], t: 'Les gustaría quedarse más tiempo.', e: 'Con Sie / sie (plural): würden.' },
      { s: 'Würdest du das Fenster bitte ___?', a: 'aufmachen', d: ['aufmachst', 'aufgemacht'], t: '¿Abrirías la ventana, por favor?', e: 'El verbo separable va entero y en infinitivo al final.' },
      { s: 'Ich würde nie so früh ___.', a: 'aufstehen', d: ['stehe auf', 'aufgestanden'], t: 'Yo nunca me levantaría tan pronto.', e: 'Infinitivo completo al final.' },
      { s: 'Was ___ ihr an meiner Stelle machen?', a: 'würdet', d: ['würde', 'werdet'], t: '¿Qué haríais en mi lugar?', e: 'würden con ihr: würdet.' },
      { s: 'Ich ___ gern ein Zimmer reservieren.', a: 'würde', d: ['will', 'werde'], t: 'Me gustaría reservar una habitación.', e: 'Más cortés que "ich will": würde … reservieren.' },
      { s: 'Würden Sie bitte kurz ___?', a: 'warten', d: ['warten Sie', 'gewartet'], t: '¿Esperaría un momento, por favor?', e: 'El infinitivo cierra la petición.' }
    ],
    orders: [
      { sol: ['Ich', 'würde', 'gern', 'einen', 'Sitzplatz', 'reservieren'], t: 'Me gustaría reservar un asiento.', e: 'würde (2) … reservieren (final).' },
      { sol: ['Würden', 'Sie', 'mir', 'bitte', 'den', 'Weg', 'zeigen?'], t: '¿Me indicaría el camino, por favor?', e: 'En la pregunta cortés, "Würden" abre y el infinitivo cierra.' },
      { sol: ['Wir', 'würden', 'lieber', 'mit', 'dem', 'Zug', 'fahren'], t: 'Preferiríamos ir en tren.', e: 'La grapa: würden … fahren.' },
      { sol: ['Würdest', 'du', 'das', 'Fenster', 'bitte', 'aufmachen?'], t: '¿Abrirías la ventana, por favor?', e: 'Verbo separable entero al final.' }
    ]
  }
};
