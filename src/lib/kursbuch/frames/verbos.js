// TEMA: el verbo y su sujeto.
// Presente (regular, con cambio de vocal y con raíz en -t/-d), pronombres
// personales de sujeto, verbos separables, imperativo y el impersonal "man".

export const VERBOS = {
  // ---------- A1.1 L1: pronombres personales ----------
  personalpronomen: {
    picks: [
      { s: '___ heiße Álvaro und komme aus Spanien.', a: 'Ich', d: ['Er', 'Wir'], t: 'Me llamo Álvaro y vengo de España.', e: 'La terminación -e de "heiße" corresponde a "ich".' },
      { s: 'Wie heißen ___? – Müller, Anna Müller.', a: 'Sie', d: ['du', 'ihr'], t: '¿Cómo se llama usted? – Müller, Anna Müller.', e: '"Sie" (con mayúscula) es el tratamiento formal; a un desconocido nunca se le dice "du".' },
      { s: 'Das ist Ahmet. ___ kommt aus der Türkei.', a: 'Er', d: ['Sie', 'Es'], t: 'Este es Ahmet. Viene de Turquía.', e: 'Un hombre → er.' },
      { s: 'Das ist Zofia. ___ wohnt in Wien.', a: 'Sie', d: ['Er', 'Es'], t: 'Esta es Zofia. Vive en Viena.', e: 'Una mujer → sie.' },
      { s: '___ seid aus Deutschland, oder?', a: 'Ihr', d: ['Wir', 'Sie'], t: 'Sois de Alemania, ¿no?', e: 'La forma "seid" solo va con "ihr".' },
      { s: '___ wohnen jetzt in Graz.', a: 'Wir', d: ['Ihr', 'Du'], t: 'Ahora vivimos en Graz.', e: 'La terminación -en con sujeto plural de 1ª persona → wir.' },
      { s: 'Maria und ich? ___ sind Nachbarn.', a: 'Wir', d: ['Ihr', 'Sie'], t: '¿Maria y yo? Somos vecinos.', e: '"… y yo" es siempre wir.' },
      { s: 'Meine Eltern? ___ leben in Madrid.', a: 'Sie', d: ['Er', 'Wir'], t: '¿Mis padres? Viven en Madrid.', e: 'Plural de 3ª persona → sie (minúscula).' },
      { s: 'Das Kind ist klein. ___ heißt Lena.', a: 'Es', d: ['Er', 'Sie'], t: 'La niña es pequeña. Se llama Lena.', e: '"das Kind" es neutro, así que el pronombre es "es".' },
      { s: 'Frau Wagner, woher kommen ___?', a: 'Sie', d: ['du', 'ihr'], t: 'Señora Wagner, ¿de dónde es usted?', e: 'Con "Frau/Herr + apellido" se usa siempre la forma formal Sie.' },
      { s: '___ bist Student, oder?', a: 'Du', d: ['Ihr', 'Wir'], t: 'Eres estudiante, ¿verdad?', e: '"bist" es la forma de du.' },
      { s: 'Ich heiße Luis und ___ heißt Marta.', a: 'sie', d: ['er', 'es'], t: 'Yo me llamo Luis y ella se llama Marta.', e: 'Marta es mujer → sie.' }
    ],
    orders: [
      { sol: ['Ich', 'komme', 'aus', 'Spanien'], t: 'Vengo de España.', e: 'Sujeto (1) + verbo (2) + complemento.' },
      { sol: ['Wie', 'heißen', 'Sie?'], t: '¿Cómo se llama usted?', e: 'Con Sie el verbo va en -en.' },
      { sol: ['Er', 'wohnt', 'jetzt', 'in', 'Wien'], t: 'Ahora vive en Viena.', e: 'er + verbo en -t.' },
      { sol: ['Wir', 'sind', 'aus', 'Österreich'], t: 'Somos de Austria.', e: 'wir + sind (forma irregular de sein).' }
    ]
  },

  // ---------- A1.1 L1: presente de los primeros verbos ----------
  'prasens-wohnen-heissen-kommen-sein': {
    picks: [
      { s: 'Du ___ in Graz und ich wohne in Linz.', a: 'wohnst', d: ['wohne', 'wohnt'], t: 'Tú vives en Graz y yo vivo en Linz.', e: 'Presente regular con du: raíz + -st.' },
      { s: 'Er ___ Samir.', a: 'heißt', d: ['heiße', 'heißen'], t: 'Él se llama Samir.', e: 'Con er/sie/es: raíz + -t.' },
      { s: 'Wir ___ aus Syrien.', a: 'sind', d: ['seid', 'bin'], t: 'Somos de Siria.', e: 'sein es irregular: wir sind.' },
      { s: 'Ich ___ aus Spanien.', a: 'komme', d: ['kommst', 'kommt'], t: 'Vengo de España.', e: 'Con ich: raíz + -e.' },
      { s: 'Woher ___ ihr?', a: 'kommt', d: ['kommen', 'kommst'], t: '¿De dónde venís?', e: 'Con ihr: raíz + -t.' },
      { s: 'Sie ___ Lehrerin von Beruf.', a: 'ist', d: ['bin', 'sind'], t: 'Es profesora de profesión.', e: 'sein con er/sie/es: ist.' },
      { s: 'Ich ___ Álvaro.', a: 'bin', d: ['ist', 'bist'], t: 'Soy Álvaro.', e: 'sein con ich: bin.' },
      { s: '___ du auch aus Wien?', a: 'Bist', d: ['Bin', 'Ist'], t: '¿Tú también eres de Viena?', e: 'sein con du: bist.' },
      { s: 'Meine Eltern ___ in Madrid.', a: 'wohnen', d: ['wohnt', 'wohnst'], t: 'Mis padres viven en Madrid.', e: 'Plural (sie) → raíz + -en.' },
      { s: 'Wie ___ du?', a: 'heißt', d: ['heiße', 'heißen'], t: '¿Cómo te llamas?', e: 'La raíz de heißen ya acaba en -ß, así que du solo añade -t: heißt.' },
      { s: 'Ihr ___ aus Deutschland, oder?', a: 'seid', d: ['sind', 'ist'], t: 'Sois de Alemania, ¿no?', e: 'sein con ihr: seid.' },
      { s: 'Frau Berger ___ in Salzburg.', a: 'wohnt', d: ['wohne', 'wohnen'], t: 'La señora Berger vive en Salzburgo.', e: 'Un nombre en singular lleva la forma de er/sie/es: -t.' }
    ],
    orders: [
      { sol: ['Ich', 'heiße', 'Anna', 'und', 'ich', 'komme', 'aus', 'Polen'], t: 'Me llamo Anna y vengo de Polonia.', e: 'Dos frases con sujeto + verbo unidas por "und".' },
      { sol: ['Wo', 'wohnst', 'du', 'jetzt?'], t: '¿Dónde vives ahora?', e: 'W-Frage con la forma de du (-st).' },
      { sol: ['Wir', 'sind', 'aus', 'Syrien'], t: 'Somos de Siria.', e: 'sein en plural: sind.' },
      { sol: ['Meine', 'Schwester', 'wohnt', 'in', 'Berlin'], t: 'Mi hermana vive en Berlín.', e: 'Sujeto singular → verbo en -t.' }
    ]
  },

  // ---------- A1.1 L2: wir / ihr ----------
  'personalpronomen-wir-ihr': {
    picks: [
      { s: 'Wir ___ in Salzburg.', a: 'wohnen', d: ['wohnt', 'wohnst'], t: 'Vivimos en Salzburgo.', e: 'Con wir la terminación es -en, igual que el infinitivo.' },
      { s: 'Woher ___ ihr?', a: 'kommt', d: ['kommen', 'komme'], t: '¿De dónde venís?', e: 'Con ihr la terminación es -t.' },
      { s: '___ sprechen zu Hause Spanisch.', a: 'Wir', d: ['Ihr', 'Du'], t: 'En casa hablamos español.', e: 'La terminación -en con este significado corresponde a wir.' },
      { s: '___ lernt schon zwei Jahre Deutsch.', a: 'Ihr', d: ['Wir', 'Sie'], t: 'Lleváis ya dos años aprendiendo alemán.', e: 'La terminación -t corresponde a ihr.' },
      { s: 'Wir ___ zwei Kinder.', a: 'haben', d: ['habt', 'hast'], t: 'Tenemos dos hijos.', e: 'haben con wir: haben.' },
      { s: 'Ihr ___ sehr nett!', a: 'seid', d: ['sind', 'seit'], t: '¡Sois muy simpáticos!', e: 'sein con ihr: seid (con d, no "seit").' },
      { s: '___ arbeitet ihr?', a: 'Wo', d: ['Wer', 'Wohin'], t: '¿Dónde trabajáis?', e: 'La forma "arbeitet" va con ihr; se pregunta el lugar con wo.' },
      { s: 'Wir ___ gern Fußball.', a: 'spielen', d: ['spielt', 'spielst'], t: 'Nos gusta jugar al fútbol.', e: 'wir + -en.' },
      { s: 'Habt ___ heute Zeit?', a: 'ihr', d: ['wir', 'sie'], t: '¿Tenéis tiempo hoy?', e: '"habt" es la forma de ihr.' },
      { s: 'Wir ___ aus Peru.', a: 'kommen', d: ['kommt', 'komme'], t: 'Somos de Perú.', e: 'wir + -en.' },
      { s: 'Wohnt ___ auch hier in Wien?', a: 'ihr', d: ['wir', 'du'], t: '¿Vosotros también vivís aquí en Viena?', e: 'La forma "wohnt" en una pregunta va con ihr.' },
      { s: 'Wir ___ jeden Tag Deutsch.', a: 'lernen', d: ['lernt', 'lernst'], t: 'Estudiamos alemán todos los días.', e: 'wir + -en.' }
    ],
    orders: [
      { sol: ['Wir', 'wohnen', 'seit', 'zwei', 'Jahren', 'in', 'Wien'], t: 'Vivimos en Viena desde hace dos años.', e: 'wir + verbo en -en.' },
      { sol: ['Woher', 'kommt', 'ihr', 'denn?'], t: '¿De dónde venís?', e: 'W-Frage + verbo en -t (ihr).' },
      { sol: ['Habt', 'ihr', 'Kinder?'], t: '¿Tenéis hijos?', e: 'Pregunta de sí/no con la forma de ihr.' },
      { sol: ['Wir', 'sprechen', 'zu', 'Hause', 'Spanisch'], t: 'En casa hablamos español.', e: 'Sujeto (1), verbo (2), resto.' }
    ]
  },

  // ---------- A1.1 L2: leben, sprechen, haben, sein ----------
  'verben-leben-sprechen-haben-sein': {
    picks: [
      { s: 'Er ___ Türkisch und Deutsch.', a: 'spricht', d: ['sprecht', 'sprechen'], t: 'Él habla turco y alemán.', e: 'sprechen cambia la vocal en du/er: e → i (er spricht).' },
      { s: 'Ich ___ eine Tochter.', a: 'habe', d: ['hast', 'hat'], t: 'Tengo una hija.', e: 'haben con ich: habe.' },
      { s: '___ du auch Englisch?', a: 'Sprichst', d: ['Sprechst', 'Sprecht'], t: '¿Hablas también inglés?', e: 'du sprichst (con i, no con e).' },
      { s: 'Wir ___ seit drei Jahren in Österreich.', a: 'leben', d: ['lebt', 'lebst'], t: 'Vivimos en Austria desde hace tres años.', e: 'leben es regular: wir leben.' },
      { s: 'Sie ___ zwei Söhne.', a: 'hat', d: ['habe', 'habt'], t: 'Ella tiene dos hijos.', e: 'haben con er/sie/es: hat.' },
      { s: 'Meine Kinder ___ sehr gut Deutsch.', a: 'sprechen', d: ['spricht', 'sprecht'], t: 'Mis hijos hablan muy bien alemán.', e: 'En plural no hay cambio de vocal: sprechen.' },
      { s: '___ ihr Geschwister?', a: 'Habt', d: ['Habet', 'Hast'], t: '¿Tenéis hermanos?', e: 'haben con ihr: habt.' },
      { s: 'Mein Mann ___ aus Ägypten.', a: 'ist', d: ['bin', 'sind'], t: 'Mi marido es de Egipto.', e: 'sein con un sujeto singular: ist.' },
      { s: 'Du ___ sehr gut Deutsch!', a: 'sprichst', d: ['sprechst', 'sprecht'], t: '¡Hablas muy bien alemán!', e: 'Cambio de vocal en du: sprichst.' },
      { s: 'Ich ___ in Wien, aber ich komme aus Lima.', a: 'lebe', d: ['lebst', 'lebt'], t: 'Vivo en Viena, pero soy de Lima.', e: 'leben con ich: lebe.' },
      { s: '___ Sie Kinder?', a: 'Haben', d: ['Habt', 'Hat'], t: '¿Tiene usted hijos?', e: 'Forma formal: Haben Sie.' },
      { s: 'Er ___ keine Geschwister.', a: 'hat', d: ['habe', 'haben'], t: 'No tiene hermanos.', e: 'haben con er: hat.' }
    ],
    orders: [
      { sol: ['Ich', 'habe', 'eine', 'Tochter', 'und', 'einen', 'Sohn'], t: 'Tengo una hija y un hijo.', e: 'haben con ich: habe.' },
      { sol: ['Sprichst', 'du', 'auch', 'ein', 'bisschen', 'Englisch?'], t: '¿Hablas también un poco de inglés?', e: 'du sprichst, con el verbo delante por ser pregunta.' },
      { sol: ['Meine', 'Familie', 'lebt', 'in', 'Madrid'], t: 'Mi familia vive en Madrid.', e: 'Sujeto singular → lebt.' },
      { sol: ['Wir', 'sind', 'seit', 'einem', 'Jahr', 'hier'], t: 'Llevamos un año aquí.', e: 'sein con wir: sind.' }
    ]
  },

  // ---------- A1.1 L3: raíz en -t / -d ----------
  arbeiten: {
    picks: [
      { s: 'Du ___ in einem Büro.', a: 'arbeitest', d: ['arbeitst', 'arbeitet'], t: 'Trabajas en una oficina.', e: 'La raíz acaba en -t, así que se mete una -e-: du arbeitest.' },
      { s: 'Er ___ bei Siemens.', a: 'arbeitet', d: ['arbeitt', 'arbeitest'], t: 'Trabaja en Siemens.', e: 'er arbeitet (raíz + -et).' },
      { s: 'Wir ___ von Montag bis Freitag.', a: 'arbeiten', d: ['arbeitet', 'arbeitest'], t: 'Trabajamos de lunes a viernes.', e: 'En plural la terminación es -en, sin -e- extra.' },
      { s: 'Ihr ___ zu viel!', a: 'arbeitet', d: ['arbeitest', 'arbeiten'], t: '¡Trabajáis demasiado!', e: 'ihr arbeitet.' },
      { s: 'Wie lange ___ du heute?', a: 'arbeitest', d: ['arbeitst', 'arbeitet'], t: '¿Cuánto trabajas hoy?', e: 'du + raíz en -t → arbeitest.' },
      { s: 'Das Kind ___ sehr gut.', a: 'zeichnet', d: ['zeichnt', 'zeichnest'], t: 'La niña dibuja muy bien.', e: 'zeichnen también mete -e-: er zeichnet.' },
      { s: 'Du ___ jeden Tag zu spät.', a: 'antwortest', d: ['antwortst', 'antwortet'], t: 'Contestas tarde todos los días.', e: 'antworten: raíz en -t → du antwortest.' },
      { s: 'Er ___ in Wien Medizin.', a: 'studiert', d: ['studiertet', 'studierst'], t: 'Estudia medicina en Viena.', e: 'studieren no acaba en -t/-d: er studiert, sin -e- extra.' },
      { s: 'Sie ___ bei einer Bank.', a: 'arbeitet', d: ['arbeiten', 'arbeitest'], t: 'Ella trabaja en un banco.', e: 'Sujeto singular → arbeitet.' },
      { s: 'Du ___ den Film bestimmt gut.', a: 'findest', d: ['findst', 'findet'], t: 'Seguro que la película te gusta.', e: 'finden: raíz en -d → du findest.' },
      { s: 'Wo ___ ihr?', a: 'arbeitet', d: ['arbeiten', 'arbeitest'], t: '¿Dónde trabajáis?', e: 'ihr arbeitet.' },
      { s: 'Der Kurs ___ um 18 Uhr.', a: 'endet', d: ['endt', 'endest'], t: 'El curso termina a las 18.', e: 'enden: raíz en -d → er endet.' }
    ],
    orders: [
      { sol: ['Ich', 'arbeite', 'bei', 'einer', 'Bank'], t: 'Trabajo en un banco.', e: 'Con ich la terminación es -e.' },
      { sol: ['Wo', 'arbeitest', 'du', 'jetzt?'], t: '¿Dónde trabajas ahora?', e: 'du arbeitest, con -e- de apoyo.' },
      { sol: ['Er', 'arbeitet', 'als', 'Kellner', 'in', 'einem', 'Café'], t: 'Trabaja de camarero en una cafetería.', e: 'er arbeitet.' },
      { sol: ['Wir', 'arbeiten', 'von', 'Montag', 'bis', 'Freitag'], t: 'Trabajamos de lunes a viernes.', e: 'En plural: arbeiten.' }
    ]
  },

  // ---------- A1.1 L6: essen, nehmen, mögen, möchte ----------
  'essen-nehmen-mogen-mochte': {
    picks: [
      { s: 'Was ___ du? – Ich nehme die Suppe.', a: 'nimmst', d: ['nehmst', 'nehmt'], t: '¿Qué vas a tomar? – Tomo la sopa.', e: 'nehmen cambia en du/er: du nimmst, er nimmt.' },
      { s: 'Ich ___ einen Kaffee, bitte.', a: 'möchte', d: ['möchtet', 'möchtest'], t: 'Quisiera un café, por favor.', e: 'möchte con ich (y con er/sie/es) no lleva terminación.' },
      { s: 'Er ___ gern Fisch.', a: 'isst', d: ['esst', 'essen'], t: 'Le gusta comer pescado.', e: 'essen cambia e → i: er isst.' },
      { s: '___ du Schokolade?', a: 'Magst', d: ['Mögst', 'Mögt'], t: '¿Te gusta el chocolate?', e: 'mögen con du: magst.' },
      { s: 'Was ___ Sie trinken?', a: 'möchten', d: ['möchtet', 'möchte'], t: '¿Qué quiere beber?', e: 'Con Sie: möchten.' },
      { s: 'Ich ___ keinen Kuchen.', a: 'mag', d: ['magst', 'mögen'], t: 'No me gusta el pastel.', e: 'mögen con ich: mag.' },
      { s: 'Wir ___ um 12 Uhr zu Mittag.', a: 'essen', d: ['esst', 'isst'], t: 'Comemos a las 12.', e: 'En plural no hay cambio de vocal: wir essen.' },
      { s: 'Du ___ zu wenig!', a: 'isst', d: ['esst', 'essst'], t: '¡Comes muy poco!', e: 'du isst (la -s de la raíz se funde con la terminación).' },
      { s: '___ ihr auch einen Salat?', a: 'Nehmt', d: ['Nimmt', 'Nehmst'], t: '¿Tomáis también una ensalada?', e: 'En plural no cambia la vocal: ihr nehmt.' },
      { s: 'Meine Tochter ___ ein Eis.', a: 'möchte', d: ['möchtet', 'möchten'], t: 'Mi hija quiere un helado.', e: 'Sujeto singular → möchte.' },
      { s: 'Er ___ den Salat mit Brot.', a: 'nimmt', d: ['nehmt', 'nehme'], t: 'Toma la ensalada con pan.', e: 'er nimmt.' },
      { s: 'Wir ___ lieber Tee als Kaffee.', a: 'mögen', d: ['mag', 'magst'], t: 'Nos gusta más el té que el café.', e: 'mögen con wir: mögen.' }
    ],
    orders: [
      { sol: ['Ich', 'möchte', 'bitte', 'einen', 'Kaffee'], t: 'Quisiera un café, por favor.', e: 'möchte + acusativo.' },
      { sol: ['Was', 'nimmst', 'du', 'zum', 'Frühstück?'], t: '¿Qué tomas para desayunar?', e: 'du nimmst, con cambio de vocal.' },
      { sol: ['Er', 'isst', 'kein', 'Fleisch'], t: 'No come carne.', e: 'er isst + kein.' },
      { sol: ['Wir', 'möchten', 'bitte', 'bestellen'], t: 'Querríamos pedir, por favor.', e: 'möchten + infinitivo al final.' }
    ]
  },

  // ---------- A1.1 L5: verbos separables y cambio de vocal ----------
  'trennbare-verben-und-vokalwechsel': {
    picks: [
      { s: 'Wann ___ du auf?', a: 'stehst', d: ['aufstehst', 'stehe'], t: '¿Cuándo te levantas?', e: 'aufstehen se separa: "stehst" en 2ª posición y "auf" al final.' },
      { s: 'Er ___ am Abend fern.', a: 'sieht', d: ['fernsieht', 'seht'], t: 'Él ve la tele por la tarde.', e: 'fernsehen: sieht … fern. Además cambia e → ie.' },
      { s: 'Du ___ am Wochenende lange.', a: 'schläfst', d: ['schlafst', 'schlaft'], t: 'El fin de semana duermes mucho.', e: 'schlafen cambia a → ä: du schläfst.' },
      { s: 'Ich ___ um sieben Uhr auf.', a: 'stehe', d: ['aufstehe', 'steht'], t: 'Me levanto a las siete.', e: 'El prefijo "auf" se queda al final de la frase.' },
      { s: 'Wir ___ heute im Supermarkt ein.', a: 'kaufen', d: ['einkaufen', 'kauft'], t: 'Hoy hacemos la compra en el súper.', e: 'einkaufen: kaufen … ein.' },
      { s: '___ du heute Abend mit?', a: 'Kommst', d: ['Mitkommst', 'Kommt'], t: '¿Vienes esta tarde?', e: 'mitkommen: Kommst … mit.' },
      { s: 'Der Zug ___ um 8 Uhr ab.', a: 'fährt', d: ['abfährt', 'fahren'], t: 'El tren sale a las 8.', e: 'abfahren: fährt … ab (con cambio a → ä).' },
      { s: 'Sie ___ jeden Tag ihre Freundin an.', a: 'ruft', d: ['anruft', 'rufen'], t: 'Llama a su amiga todos los días.', e: 'anrufen: ruft … an.' },
      { s: 'Er ___ viel Obst.', a: 'isst', d: ['esst', 'essen'], t: 'Come mucha fruta.', e: 'essen cambia e → i: er isst.' },
      { s: 'Wann ___ der Film an?', a: 'fängt', d: ['anfängt', 'fangt'], t: '¿Cuándo empieza la película?', e: 'anfangen: fängt … an (a → ä).' },
      { s: 'Du ___ sehr schnell.', a: 'läufst', d: ['laufst', 'lauft'], t: 'Corres muy rápido.', e: 'laufen: du läufst (au → äu).' },
      { s: 'Ich ___ meine Tasche auf.', a: 'mache', d: ['aufmache', 'macht'], t: 'Abro mi bolso.', e: 'aufmachen: mache … auf.' }
    ],
    orders: [
      { sol: ['Ich', 'stehe', 'jeden', 'Tag', 'um', 'sechs', 'auf'], t: 'Me levanto todos los días a las seis.', e: 'El prefijo separable cierra la frase.' },
      { sol: ['Wann', 'fängt', 'der', 'Kurs', 'an?'], t: '¿Cuándo empieza el curso?', e: 'anfangen: fängt … an.' },
      { sol: ['Am', 'Abend', 'sehe', 'ich', 'fern'], t: 'Por la tarde veo la tele.', e: 'Complemento (1), verbo (2), prefijo al final.' },
      { sol: ['Rufst', 'du', 'mich', 'morgen', 'an?'], t: '¿Me llamas mañana?', e: 'anrufen en pregunta: Rufst … an.' }
    ]
  },

  // ---------- A1.1 L7: el impersonal man ----------
  'pronomen-man': {
    picks: [
      { s: 'Im Winter trägt ___ einen Mantel.', a: 'man', d: ['er', 'sie'], t: 'En invierno se lleva abrigo.', e: '"man" es el sujeto impersonal (= "se").' },
      { s: 'Hier ___ man Deutsch.', a: 'spricht', d: ['sprechen', 'sprichst'], t: 'Aquí se habla alemán.', e: '"man" lleva siempre el verbo en 3ª persona del singular.' },
      { s: 'Wie ___ man das auf Deutsch?', a: 'sagt', d: ['sagen', 'sagst'], t: '¿Cómo se dice eso en alemán?', e: 'man + sagt.' },
      { s: 'In Österreich ___ man viel Kaffee.', a: 'trinkt', d: ['trinken', 'trinkst'], t: 'En Austria se bebe mucho café.', e: 'Verbo en singular tras man.' },
      { s: 'Hier darf ___ nicht rauchen.', a: 'man', d: ['er', 'wir'], t: 'Aquí no se puede fumar.', e: 'Prohibición general → man.' },
      { s: 'Wo ___ man hier Tickets?', a: 'kauft', d: ['kaufen', 'kaufst'], t: '¿Dónde se compran aquí los billetes?', e: 'man + kauft.' },
      { s: 'Im Sommer ___ man leichte Kleidung.', a: 'trägt', d: ['tragen', 'trägst'], t: 'En verano se lleva ropa ligera.', e: 'tragen con man: trägt.' },
      { s: 'Am Wochenende ___ man länger.', a: 'schläft', d: ['schlafen', 'schläfst'], t: 'El fin de semana se duerme más.', e: 'man + schläft.' },
      { s: 'Was ___ man im Urlaub?', a: 'macht', d: ['machen', 'machst'], t: '¿Qué se hace en vacaciones?', e: 'man + macht.' },
      { s: 'Mit dem Rad ___ man schneller.', a: 'ist', d: ['sind', 'bist'], t: 'En bici se va más rápido.', e: 'man + ist (3ª persona singular).' },
      { s: 'In Wien ___ man gut leben.', a: 'kann', d: ['können', 'kannst'], t: 'En Viena se vive bien.', e: 'El modal también va en singular: man kann.' },
      { s: 'Hier ___ man nicht parken.', a: 'darf', d: ['dürfen', 'darfst'], t: 'Aquí no se puede aparcar.', e: 'man darf.' }
    ],
    orders: [
      { sol: ['Hier', 'spricht', 'man', 'Deutsch'], t: 'Aquí se habla alemán.', e: 'Complemento (1), verbo (2), man (3).' },
      { sol: ['Im', 'Winter', 'trägt', 'man', 'einen', 'Mantel'], t: 'En invierno se lleva abrigo.', e: 'man + verbo en singular.' },
      { sol: ['Wie', 'sagt', 'man', 'das', 'auf', 'Deutsch?'], t: '¿Cómo se dice eso en alemán?', e: 'Pregunta con man.' },
      { sol: ['In', 'Österreich', 'trinkt', 'man', 'viel', 'Kaffee'], t: 'En Austria se bebe mucho café.', e: 'man siempre con la 3ª persona del singular.' }
    ]
  },

  // ---------- A1.2 L13: imperativo ----------
  imperativ: {
    picks: [
      { s: '___ die Tabletten dreimal am Tag!', a: 'Nimm', d: ['Nimmst', 'Nehme'], t: '¡Toma las pastillas tres veces al día!', e: 'Imperativo de du: la raíz con cambio de vocal, sin -st ni sujeto.' },
      { s: '___ Sie bitte im Bett!', a: 'Bleiben', d: ['Bleibt', 'Bleib'], t: '¡Quédese en la cama, por favor!', e: 'Forma formal: verbo en -en + Sie.' },
      { s: '___ viel Wasser!', a: 'Trink', d: ['Trinkst', 'Trinken'], t: '¡Bebe mucha agua!', e: 'Imperativo de du: raíz sola (Trink!).' },
      { s: '___ bitte leise, das Baby schläft!', a: 'Seid', d: ['Sind', 'Sei'], t: '¡Estad callados, el bebé duerme!', e: 'Imperativo de ihr con sein: Seid!' },
      { s: '___ zum Arzt, wenn es nicht besser wird!', a: 'Geh', d: ['Gehst', 'Gehen'], t: '¡Ve al médico si no mejora!', e: 'du-Imperativ de gehen: Geh!' },
      { s: '___ mir bitte!', a: 'Hilf', d: ['Hilfst', 'Helfe'], t: '¡Ayúdame, por favor!', e: 'helfen cambia e → i también en imperativo: Hilf!' },
      { s: '___ Sie bitte hier.', a: 'Warten', d: ['Wartet', 'Warte'], t: 'Espere aquí, por favor.', e: 'Forma de Sie: Warten Sie.' },
      { s: 'Kinder, ___ eure Hausaufgaben!', a: 'macht', d: ['mach', 'machen'], t: '¡Niños, haced los deberes!', e: 'Imperativo de ihr: la forma normal de ihr sin el pronombre.' },
      { s: '___ bitte nicht so schnell!', a: 'Sprich', d: ['Sprichst', 'Sprechen'], t: '¡No hables tan rápido, por favor!', e: 'sprechen: Sprich! (e → i).' },
      { s: '___ ruhig, alles ist gut.', a: 'Sei', d: ['Bist', 'Seid'], t: 'Tranquilo, todo está bien.', e: 'Imperativo irregular de sein para du: Sei!' },
      { s: '___ Sie bitte das Formular aus!', a: 'Füllen', d: ['Füllt', 'Fülle'], t: '¡Rellene el formulario, por favor!', e: 'Verbo separable con Sie: Füllen Sie … aus.' },
      { s: '___ mir bitte einen Termin!', a: 'Gib', d: ['Gibst', 'Gebe'], t: '¡Dame una cita, por favor!', e: 'geben: Gib! (e → i).' }
    ],
    orders: [
      { sol: ['Nimm', 'die', 'Tabletten', 'dreimal', 'am', 'Tag!'], t: '¡Toma las pastillas tres veces al día!', e: 'Imperativo de du, sin pronombre.' },
      { sol: ['Bleiben', 'Sie', 'bitte', 'im', 'Bett!'], t: '¡Quédese en la cama, por favor!', e: 'Forma formal: verbo + Sie.' },
      { sol: ['Trink', 'bitte', 'viel', 'Tee!'], t: '¡Bebe mucho té, por favor!', e: '"bitte" suaviza el imperativo.' },
      { sol: ['Macht', 'bitte', 'die', 'Übung', 'auf', 'Seite', 'zehn!'], t: '¡Haced el ejercicio de la página diez!', e: 'Imperativo de ihr.' },
      { sol: ['Geh', 'bitte', 'zum', 'Arzt!'], t: '¡Ve al médico, por favor!', e: 'Imperativo de du: la raíz sola, sin pronombre.' },
      { sol: ['Warten', 'Sie', 'bitte', 'einen', 'Moment!'], t: '¡Espere un momento, por favor!', e: 'Forma formal: verbo + Sie.' }
    ]
  }
};
