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
      { s: 'Ich heiße Luis und ___ heißt Marta.', a: 'sie', d: ['er', 'es'], t: 'Yo me llamo Luis y ella se llama Marta.', e: 'Marta es mujer → sie.' },
      { s: 'Das ist Anna. ___ kommt aus Polen.', a: 'Sie', d: ['Er', 'Es'], t: 'Esta es Anna. Es de Polonia.', e: 'Persona femenina → sie.' },
      { s: 'Das ist mein Bruder. ___ wohnt in Linz.', a: 'Er', d: ['Sie', 'Es'], t: 'Este es mi hermano. Vive en Linz.', e: 'Persona masculina → er.' },
      { s: 'Wie heißt ___? – Ich heiße Tom.', a: 'du', d: ['Sie', 'er'], t: '¿Cómo te llamas? – Me llamo Tom.', e: 'Trato informal → du.' },
      { s: '___ kommen aus Italien, nicht wahr?', a: 'Sie', d: ['Du', 'Er'], t: 'Ustedes son de Italia, ¿verdad?', e: 'Forma de cortesía, con mayúscula: Sie.' },
      { s: 'Wo wohnt ___? – In Graz.', a: 'ihr', d: ['du', 'er'], t: '¿Dónde vivís? – En Graz.', e: 'Plural informal → ihr.' },
      { s: 'Das Kind ist müde. ___ schläft schon.', a: 'Es', d: ['Er', 'Sie'], t: 'El niño está cansado. Ya duerme.', e: '"das Kind" es neutro → es.' },
      { s: '___ heiße Álvaro und komme aus Madrid.', a: 'Ich', d: ['Du', 'Er'], t: 'Me llamo Álvaro y soy de Madrid.', e: 'Primera persona → ich.' },
      { s: 'Anna und Tom? ___ wohnen zusammen.', a: 'Sie', d: ['Er', 'Wir'], t: '¿Anna y Tom? Viven juntos.', e: 'Plural → sie.' }
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
      { s: 'Frau Berger ___ in Salzburg.', a: 'wohnt', d: ['wohne', 'wohnen'], t: 'La señora Berger vive en Salzburgo.', e: 'Un nombre en singular lleva la forma de er/sie/es: -t.' },
      { s: 'Meine Schwester ___ Lucía.', a: 'heißt', d: ['heißen', 'heiße'], t: 'Mi hermana se llama Lucía.', e: 'er/sie → heißt.' },
      { s: 'Wir ___ seit drei Jahren in Wien.', a: 'wohnen', d: ['wohnt', 'wohnst'], t: 'Llevamos tres años viviendo en Viena.', e: 'wir → como el infinitivo.' },
      { s: '___ Sie aus Österreich?', a: 'Kommen', d: ['Kommt', 'Kommst'], t: '¿Es usted de Austria?', e: 'Sie formal → kommen.' },
      { s: 'Die Kinder ___ schon in der Schule.', a: 'sind', d: ['ist', 'seid'], t: 'Los niños ya están en el colegio.', e: 'Plural → sind.' },
      { s: 'In welchem Bezirk ___ ihr?', a: 'wohnt', d: ['wohnen', 'wohnst'], t: '¿Dónde vivís exactamente?', e: 'ihr → -t.' },
      { s: 'Ich ___ nicht aus Wien, ich bin aus Linz.', a: 'komme', d: ['kommst', 'kommt'], t: 'No soy de Viena, soy de Linz.', e: 'ich → -e.' },
      { s: 'Wie ___ Ihr Kollege?', a: 'heißt', d: ['heißen', 'heiße'], t: '¿Cómo se llama su compañero?', e: 'El sujeto es «Ihr Kollege», singular.' },
      { s: 'Du ___ noch neu hier, oder?', a: 'bist', d: ['bin', 'ist'], t: 'Eres nuevo aquí, ¿no?', e: 'du → bist.' }
    ],
    orders: [
      { sol: ['Ich', 'heiße', 'Anna', 'und', 'ich', 'komme', 'aus', 'Polen'], t: 'Me llamo Anna y vengo de Polonia.', e: 'Dos frases con sujeto + verbo unidas por "und".' },
      { sol: ['Wo', 'wohnst', 'du', 'jetzt?'], t: '¿Dónde vives ahora?', e: 'W-Frage con la forma de du (-st).' },
      { sol: ['Wir', 'sind', 'aus', 'Syrien'], t: 'Somos de Siria.', e: 'sein en plural: sind.' },
      { sol: ['Meine', 'Schwester', 'wohnt', 'in', 'Berlin'], t: 'Mi hermana vive en Berlín.', e: 'Sujeto singular → verbo en -t.' },
      { sol: ['Ich', 'komme', 'aus', 'Spanien', 'und', 'wohne', 'in', 'Wien'], t: 'Soy de España y vivo en Viena.', e: 'Dos frases con "und": el verbo va en 2ª posición en las dos.' },
      { sol: ['Wie', 'heißt', 'deine', 'Schwester?'], t: '¿Cómo se llama tu hermana?', e: 'W-Frage: partícula (1), verbo (2), sujeto (3).' },
      { sol: ['Meine', 'Eltern', 'sind', 'aus', 'Polen'], t: 'Mis padres son de Polonia.', e: 'Sujeto plural → sind.' }
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
      { s: 'Wir ___ jeden Tag Deutsch.', a: 'lernen', d: ['lernt', 'lernst'], t: 'Estudiamos alemán todos los días.', e: 'wir + -en.' },
      { s: '___ wohnen seit einem Jahr in Wien.', a: 'Wir', d: ['Ihr', 'Sie'], t: 'Vivimos en Viena desde hace un año.', e: 'Primera persona del plural → wir.' },
      { s: 'Woher kommt ___?', a: 'ihr', d: ['wir', 'sie'], t: '¿De dónde sois?', e: 'Plural informal → ihr, y el verbo en -t.' },
      { s: '___ sprecht sehr gut Deutsch.', a: 'Ihr', d: ['Wir', 'Sie'], t: 'Habláis muy bien alemán.', e: 'ihr sprecht.' },
      { s: '___ haben zwei Kinder.', a: 'Wir', d: ['Ihr', 'Du'], t: 'Tenemos dos hijos.', e: 'wir haben.' },
      { s: 'Wo wohnt ___ genau?', a: 'ihr', d: ['wir', 'du'], t: '¿Dónde vivís exactamente?', e: 'ihr wohnt.' },
      { s: '___ sind beide aus Spanien.', a: 'Wir', d: ['Ihr', 'Er'], t: 'Los dos somos de España.', e: 'wir sind.' },
      { s: 'Seid ___ auch im Deutschkurs?', a: 'ihr', d: ['wir', 'sie'], t: '¿Vosotros también estáis en el curso de alemán?', e: 'La forma de ihr con sein es "seid".' },
      { s: '___ lernen zusammen für die Prüfung.', a: 'Wir', d: ['Ihr', 'Du'], t: 'Estudiamos juntos para el examen.', e: 'wir lernen.' },
      { s: '___ kommen aus Spanien und wohnen in Wien.', a: 'Wir', d: ['Ihr', 'Du'], t: 'Nosotros somos de España y vivimos en Viena.', e: 'wir lleva el verbo en -en: wir kommen.' },
      { s: '___ wohnt doch auch in Linz, oder?', a: 'Ihr', d: ['Wir', 'Ich'], t: 'Vosotros también vivís en Linz, ¿no?', e: 'ihr lleva el verbo en -t: ihr wohnt.' },
      { s: '___ sprechen zu Hause Polnisch.', a: 'Wir', d: ['Ihr', 'Du'], t: 'En casa hablamos polaco.', e: 'wir sprechen: terminación -en.' },
      { s: '___ habt zwei Kinder, richtig?', a: 'Ihr', d: ['Wir', 'Er'], t: 'Vosotros tenéis dos hijos, ¿verdad?', e: 'ihr habt: la forma de ihr acaba en -t.' },
      { s: '___ sind beide aus Kroatien.', a: 'Wir', d: ['Ihr', 'Ich'], t: 'Los dos somos de Croacia.', e: 'wir sind, del verbo sein.' }
    ],
    orders: [
      { sol: ['Wir', 'wohnen', 'seit', 'zwei', 'Jahren', 'in', 'Wien'], t: 'Vivimos en Viena desde hace dos años.', e: 'wir + verbo en -en.' },
      { sol: ['Woher', 'kommt', 'ihr', 'denn?'], t: '¿De dónde venís?', e: 'W-Frage + verbo en -t (ihr).' },
      { sol: ['Habt', 'ihr', 'Kinder?'], t: '¿Tenéis hijos?', e: 'Pregunta de sí/no con la forma de ihr.' },
      { sol: ['Wir', 'sprechen', 'zu', 'Hause', 'Spanisch'], t: 'En casa hablamos español.', e: 'Sujeto (1), verbo (2), resto.' },
      { sol: ['Wir', 'wohnen', 'seit', 'einem', 'Jahr', 'in', 'Wien'], t: 'Vivimos en Viena desde hace un año.', e: 'wir + verbo en -en.' },
      { sol: ['Wo', 'wohnt', 'ihr', 'jetzt?'], t: '¿Dónde vivís ahora?', e: 'W-Frage con ihr: el verbo acaba en -t.' },
      { sol: ['Sprecht', 'ihr', 'auch', 'Englisch?'], t: '¿Habláis también inglés?', e: 'Pregunta de sí/no con ihr: el verbo abre.' }
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
      { s: 'Er ___ keine Geschwister.', a: 'hat', d: ['habe', 'haben'], t: 'No tiene hermanos.', e: 'haben con er: hat.' },
      { s: '___ du Englisch?', a: 'Sprichst', d: ['Sprechst', 'Sprecht'], t: '¿Hablas inglés?', e: 'sprechen cambia e→i con du: sprichst.' },
      { s: 'Meine Großeltern ___ noch in Spanien.', a: 'leben', d: ['lebt', 'lebe'], t: 'Mis abuelos todavía viven en España.', e: 'Sujeto plural → leben.' },
      { s: '___ ihr Kinder?', a: 'Habt', d: ['Hast', 'Haben'], t: '¿Tenéis hijos?', e: 'haben con ihr: habt.' },
      { s: 'Er ___ drei Sprachen.', a: 'spricht', d: ['sprecht', 'sprichst'], t: 'Habla tres idiomas.', e: 'sprechen con er: spricht.' },
      { s: 'Wir ___ aus Polen.', a: 'sind', d: ['seid', 'ist'], t: 'Somos de Polonia.', e: 'sein con wir: sind.' },
      { s: '___ Sie hier in der Nähe?', a: 'Leben', d: ['Lebst', 'Lebt'], t: '¿Vive usted cerca de aquí?', e: 'Forma de cortesía: Leben Sie.' },
      { s: 'Ich ___ leider kein Auto.', a: 'habe', d: ['hast', 'hat'], t: 'Por desgracia no tengo coche.', e: 'haben con ich: habe.' },
      { s: '___ ihr schon lange hier?', a: 'Seid', d: ['Sind', 'Bist'], t: '¿Lleváis mucho aquí?', e: 'sein con ihr: seid.' },
      { s: 'Meine Schwester ___ in Berlin.', a: 'lebt', d: ['leben', 'lebst'], t: 'Mi hermana vive en Berlín.', e: 'Sujeto singular → lebt.' },
      { s: 'Wie viele Sprachen ___ du?', a: 'sprichst', d: ['sprechst', 'sprecht'], t: '¿Cuántos idiomas hablas?', e: 'e→i con du.' },
      { s: '___ Sie Geschwister?', a: 'Haben', d: ['Habt', 'Hast'], t: '¿Tiene usted hermanos?', e: 'Cortesía: Haben Sie.' },
      { s: 'Das ___ meine Kollegen.', a: 'sind', d: ['ist', 'seid'], t: 'Estos son mis compañeros.', e: 'El atributo en plural → sind.' },
      { s: 'Wo ___ deine Familie?', a: 'lebt', d: ['leben', 'lebst'], t: '¿Dónde vive tu familia?', e: '"die Familie" es singular → lebt.' },
      { s: 'Ihr ___ sehr gut Deutsch.', a: 'sprecht', d: ['sprecht ihr', 'sprichst'], t: 'Habláis muy bien alemán.', e: 'ihr sprecht, sin cambio de vocal.' },
      { s: '___ du aus Wien oder aus Graz?', a: 'Bist', d: ['Seid', 'Sind'], t: '¿Eres de Viena o de Graz?', e: 'sein con du: bist.' },
      { s: 'Wir ___ keine Haustiere.', a: 'haben', d: ['habt', 'hat'], t: 'No tenemos mascotas.', e: 'haben con wir: haben.' },
      { s: 'Er ___ schon lange in Österreich.', a: 'lebt', d: ['leben', 'lebst'], t: 'Lleva mucho tiempo viviendo en Austria.', e: 'leben con er: lebt.' },
      { s: '___ ihr auch aus Spanien?', a: 'Kommt', d: ['Kommst', 'Kommen'], t: '¿Vosotros también sois de España?', e: 'kommen con ihr: kommt.' },
      { s: 'Meine Großeltern ___ noch in Madrid.', a: 'leben', d: ['lebt', 'lebst'], t: 'Mis abuelos viven todavía en Madrid.', e: 'Sujeto en plural: leben.' },
      { s: 'Du ___ sehr gut Englisch.', a: 'sprichst', d: ['sprechst', 'spricht'], t: 'Hablas muy bien inglés.', e: 'sprechen cambia la vocal: du sprichst.' },
      { s: 'Er ___ eine neue Telefonnummer.', a: 'hat', d: ['habt', 'haben'], t: 'Él tiene un número de teléfono nuevo.', e: 'haben en la 3ª del singular: er hat.' },
      { s: 'Wir ___ seit Mai hier.', a: 'sind', d: ['seid', 'bist'], t: 'Estamos aquí desde mayo.', e: 'wir sind, del verbo sein.' },
      { s: 'Ihr ___ ja schon perfekt Deutsch!', a: 'sprecht', d: ['sprichst', 'spreche'], t: '¡Vosotros ya habláis alemán perfecto!', e: 'ihr sprecht: sin cambio de vocal.' },
      { s: 'Ich ___ leider keine Geschwister.', a: 'habe', d: ['hat', 'hast'], t: 'Por desgracia no tengo hermanos.', e: 'ich habe.' },
      { s: 'Sie ___ mit ihrer Tochter Spanisch.', a: 'spricht', d: ['sprichst', 'sprechen'], t: 'Ella habla español con su hija.', e: '3ª del singular: sie spricht.' },
      { s: '___ du schon lange in Wien?', a: 'Bist', d: ['Bin', 'Seid'], t: '¿Llevas mucho en Viena?', e: 'du bist.' },
      { s: 'Meine Frau und ich ___ beide Lehrer.', a: 'sind', d: ['seid', 'ist'], t: 'Mi mujer y yo somos los dos profesores.', e: 'El sujeto equivale a wir: sind.' },
      { s: 'Wo ___ ihr genau?', a: 'lebt', d: ['lebst', 'leben'], t: '¿Dónde vivís exactamente?', e: 'ihr lebt.' }
    ],
    orders: [
      { sol: ['Ich', 'habe', 'eine', 'Tochter', 'und', 'einen', 'Sohn'], t: 'Tengo una hija y un hijo.', e: 'haben con ich: habe.' },
      { sol: ['Sprichst', 'du', 'auch', 'ein', 'bisschen', 'Englisch?'], t: '¿Hablas también un poco de inglés?', e: 'du sprichst, con el verbo delante por ser pregunta.' },
      { sol: ['Meine', 'Familie', 'lebt', 'in', 'Madrid'], t: 'Mi familia vive en Madrid.', e: 'Sujeto singular → lebt.' },
      { sol: ['Wir', 'sind', 'seit', 'einem', 'Jahr', 'hier'], t: 'Llevamos un año aquí.', e: 'sein con wir: sind.' },
      { sol: ['Sprich', 'bitte', 'langsam', 'und', 'deutlich'], t: 'Habla despacio y claro, por favor.', e: '«Sprich» empieza con el sonido «schpr».' },
      { sol: ['Die', 'Straße', 'heißt', 'Hauptstraße'], t: 'La calle se llama Hauptstraße.', e: '«Straße» empieza con «schtr»; en «Hauptstraße» pasa lo mismo en la raíz.' }
    ],
    clozes: [
      { txt: 'Ich ___ Álvaro, ich ___ aus Spanien und ___ jetzt in Wien. Meine Frau ___ Polnisch und Deutsch. Wir ___ zwei Kinder.', a: ['bin', 'komme', 'lebe', 'spricht', 'haben'], extra: ['ist', 'kommst', 'lebt', 'sprechen'], t: 'Soy Álvaro, soy de España y ahora vivo en Viena. Mi mujer habla polaco y alemán. Tenemos dos hijos.', e: 'Cinco verbos y tres personas: ich (-e), sie (-t, con e→i en sprechen) y wir (-en).' }
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
      { s: 'Der Kurs ___ um 18 Uhr.', a: 'endet', d: ['endt', 'endest'], t: 'El curso termina a las 18.', e: 'enden: raíz en -d → er endet.' },
      { s: 'Warum sagt man „du arbeitest“ y no „du arbeitst“?', a: 'der Stamm endet auf -t', d: ['arbeiten ist unregelmäßig', 'es ist ein Modalverb'], t: 'Porque la raíz acaba en «-t» y se mete una e.', e: 'arbeit- + -e- + -st.' },
      { s: 'Welche Personen bekommen das extra -e?', a: 'du, er/sie/es und ihr', d: ['nur du', 'todas'], t: 'Lo llevan «du», «er/sie/es» e «ihr».', e: 'wir y sie ya acaban en -en.' },
      { s: 'Welches Verb braucht das extra -e NICHT?', a: 'kommen', d: ['antworten', 'finden'], t: '«kommen» no necesita la e extra.', e: 'Su raíz no acaba en -t ni en -d.' },
      { s: 'Nach welchen Buchstaben kommt das extra -e?', a: 'nach -t und -d', d: ['nach -s und -z', 'nach -n'], t: 'Se mete detrás de «-t» y «-d».', e: 'arbeiten, antworten, finden, reden.' },
      { s: 'Du ___ mir nie auf meine Nachrichten.', a: 'antwortest', d: ['antwortst', 'antwortet'], t: 'Nunca me contestas a los mensajes.', e: 'antwort- + -e- + -st.' },
      { s: 'Er ___ das Formular aus.', a: 'füllt', d: ['füllet', 'fülle'], t: 'Rellena el formulario.', e: 'füll- no acaba en -t: sin e extra.' },
      { s: 'Ihr ___ zu schnell.', a: 'redet', d: ['redt', 'redest'], t: 'Habláis muy rápido.', e: 'red- acaba en -d: red-e-t.' },
      { s: 'Wozu dient das extra -e überhaupt?', a: 'damit man es aussprechen kann', d: ['por gramática y ya', 'para que suene formal'], t: 'Está para que la palabra se pueda pronunciar.', e: '«arbeitst» sería impronunciable.' }
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
      { s: 'Wir ___ lieber Tee als Kaffee.', a: 'mögen', d: ['mag', 'magst'], t: 'Nos gusta más el té que el café.', e: 'mögen con wir: mögen.' },
      { s: 'Was ___ du? – Ein Schnitzel.', a: 'nimmst', d: ['nehmst', 'nimmt'], t: '¿Qué pides? – Un escalope.', e: 'nehmen cambia e→i con du: nimmst.' },
      { s: 'Er ___ kein Fleisch.', a: 'isst', d: ['esst', 'essen'], t: 'No come carne.', e: 'essen con er: isst.' },
      { s: '___ Sie einen Kaffee?', a: 'Möchten', d: ['Möchtet', 'Magst'], t: '¿Desea un café?', e: 'Fórmula de cortesía: Möchten Sie…?' },
      { s: 'Ich ___ keinen Fisch.', a: 'mag', d: ['möchte', 'magst'], t: 'No me gusta el pescado.', e: '"mögen" es el gusto general; "möchten" es lo que quieres ahora.' },
      { s: 'Was ___ ihr zum Frühstück?', a: 'esst', d: ['isst', 'essen'], t: '¿Qué desayunáis?', e: 'essen con ihr: esst.' }
    ],
    orders: [
      { sol: ['Ich', 'möchte', 'bitte', 'einen', 'Kaffee'], t: 'Quisiera un café, por favor.', e: 'möchte + acusativo.' },
      { sol: ['Was', 'nimmst', 'du', 'zum', 'Frühstück?'], t: '¿Qué tomas para desayunar?', e: 'du nimmst, con cambio de vocal.' },
      { sol: ['Er', 'isst', 'kein', 'Fleisch'], t: 'No come carne.', e: 'er isst + kein.' },
      { sol: ['Wir', 'möchten', 'bitte', 'bestellen'], t: 'Querríamos pedir, por favor.', e: 'möchten + infinitivo al final.' }
    ],
    clozes: [
      { txt: '– Was ___ Sie? – Ich ___ das Schnitzel, bitte. Und meine Frau ___ eine Suppe. – ___ Sie auch etwas trinken?', a: ['nehmen', 'nehme', 'möchte', 'Möchten'], extra: ['nimmst', 'nimmt', 'mag'], t: '– ¿Qué van a tomar? – Yo el escalope, por favor. Y mi mujer una sopa. – ¿Desean beber algo?', e: 'En el restaurante se usa "nehmen" para pedir y "möchten" para expresar el deseo; "mögen" sería el gusto general, no el pedido.' }
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
      { s: 'Ich ___ meine Tasche auf.', a: 'mache', d: ['aufmache', 'macht'], t: 'Abro mi bolso.', e: 'aufmachen: mache … auf.' },
      { s: 'Wann ___ du normalerweise auf?', a: 'stehst', d: ['aufstehst', 'steht'], t: '¿A qué hora te levantas normalmente?', e: 'aufstehen se separa: stehst … auf.' },
      { s: 'Meine Tochter ___ am Wochenende lange.', a: 'schläft', d: ['schlaft', 'schlafen'], t: 'Mi hija duerme mucho el fin de semana.', e: 'schlafen cambia la vocal: sie schläft.' },
      { s: '___ du bitte die Tür zu?', a: 'Machst', d: ['Zumachst', 'Macht'], t: '¿Cierras la puerta, por favor?', e: 'zumachen se separa: machst … zu.' },
      { s: 'Er ___ jeden Abend fern.', a: 'sieht', d: ['seht', 'sehen'], t: 'Él ve la tele todas las tardes.', e: 'sehen cambia la vocal en la 3ª: er sieht.' },
      { s: 'Wir ___ heute früher an.', a: 'fangen', d: ['anfangen', 'fängt'], t: 'Hoy empezamos antes.', e: 'wir fangen … an, sin cambio de vocal en plural.' },
      { s: '___ du am Samstag ein?', a: 'Kaufst', d: ['Einkaufst', 'Kauft'], t: '¿Haces la compra el sábado?', e: 'einkaufen se separa: kaufst … ein.' }
    ],
    orders: [
      { sol: ['Ich', 'stehe', 'jeden', 'Tag', 'um', 'sechs', 'auf'], t: 'Me levanto todos los días a las seis.', e: 'El prefijo separable cierra la frase.' },
      { sol: ['Wann', 'fängt', 'der', 'Kurs', 'an?'], t: '¿Cuándo empieza el curso?', e: 'anfangen: fängt … an.' },
      { sol: ['Am', 'Abend', 'sehe', 'ich', 'fern'], alt: [['Ich', 'sehe', 'am', 'Abend', 'fern']], t: 'Por la tarde veo la tele.', e: 'Complemento (1), verbo (2), prefijo al final.' },
      { sol: ['Rufst', 'du', 'mich', 'morgen', 'an?'], t: '¿Me llamas mañana?', e: 'anrufen en pregunta: Rufst … an.' }
    ],
    clozes: [
      { txt: 'Ich ___ um sechs ___ (aufstehen), dann ___ ich (fernsehen) nicht, sondern ___ sofort ___ (einkaufen gehen).', a: ['stehe', 'auf', 'sehe', 'gehe', 'einkaufen'], extra: ['aufstehe', 'an', 'fernsehe', 'einkaufen', 'gehe'], t: 'Me levanto a las seis; luego no veo la tele, sino que voy enseguida a la compra.', e: 'El verbo separable se parte: la parte conjugada va en 2ª posición y el prefijo se queda al final.' },
      { txt: 'Er ___ um sechs ___ (aufstehen), ___ (fahren) mit dem Rad zur Arbeit und ___ abends nicht ___ (fernsehen).', a: ['steht', 'auf', 'fährt', 'sieht', 'fern'], extra: ['aufsteht', 'an', 'fahrt', 'sehen'], t: 'Se levanta a las seis, va al trabajo en bici y por la noche no ve la tele.', e: 'Dos separables que se parten y un verbo fuerte que cambia la vocal: fahren → fährt.' }
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
      { s: 'Hier ___ man nicht parken.', a: 'darf', d: ['dürfen', 'darfst'], t: 'Aquí no se puede aparcar.', e: 'man darf.' },
      { s: 'In Österreich ___ man oft "Grüß Gott".', a: 'sagt', d: ['sagen', 'sagst'], t: 'En Austria se dice a menudo «Grüß Gott».', e: '"man" lleva siempre la forma de er/sie/es.' },
      { s: 'Hier ___ man gut und günstig essen.', a: 'kann', d: ['können', 'kannst'], t: 'Aquí se come bien y barato.', e: 'Modal con "man" → kann.' },
      { s: 'Wie ___ man zum Bahnhof?', a: 'kommt', d: ['kommen', 'kommst'], t: '¿Cómo se va a la estación?', e: '"man" + verbo en 3ª del singular.' },
      { s: 'In der Bibliothek ___ man leise sein.', a: 'muss', d: ['müssen', 'musst'], t: 'En la biblioteca hay que estar en silencio.', e: 'Obligación general con "man".' },
      { s: 'Wo ___ man hier parken?', a: 'darf', d: ['dürfen', 'darfst'], t: '¿Dónde se puede aparcar aquí?', e: 'Permiso con "man" → darf.' },
      { s: 'Im Winter ___ man früh dunkel.', a: 'wird', d: ['werden', 'wirst'], t: 'En invierno oscurece pronto.', e: 'Aquí "es wird" sería lo normal; con "man" el verbo sigue en singular.' },
      { s: 'Was ___ man in Wien unbedingt sehen?', a: 'muss', d: ['müssen', 'musst'], t: '¿Qué hay que ver sí o sí en Viena?', e: '"man" + modal en singular.' },
      { s: 'Mit dem Rad ___ man schneller als mit dem Auto.', a: 'ist', d: ['sind', 'bist'], t: 'En bici se va más rápido que en coche.', e: '"man ist", nunca "man sind".' },
      { s: 'Hier ___ man Tickets am Automaten.', a: 'kauft', d: ['kaufen', 'kaufst'], t: 'Aquí los billetes se compran en la máquina.', e: '"man" + 3ª persona.' },
      { s: 'In Österreich ___ man viel Kaffeehaus-Kultur.', a: 'hat', d: ['haben', 'hast'], t: 'En Austria hay mucha cultura de café.', e: '"man hat".' },
      { s: 'Am Sonntag ___ man hier nicht einkaufen.', a: 'kann', d: ['können', 'kannst'], t: 'Los domingos aquí no se puede comprar.', e: 'Modal en singular con "man".' },
      { s: 'Bei Gewitter ___ man nicht auf den Berg.', a: 'geht', d: ['gehen', 'gehst'], t: 'Con tormenta no se sube a la montaña.', e: 'man lleva la forma de er/sie/es: geht.' },
      { s: 'Im Winter ___ man hier eine Mütze.', a: 'braucht', d: ['brauchen', 'brauchst'], t: 'En invierno aquí hace falta un gorro.', e: 'man + verbo en 3ª del singular.' },
      { s: 'Bei Hitze ___ man viel trinken.', a: 'soll', d: ['sollen', 'sollst'], t: 'Con calor hay que beber mucho.', e: 'man soll, como er soll.' },
      { s: 'Bei Nebel ___ man kaum zwanzig Meter.', a: 'sieht', d: ['sehen', 'siehst'], t: 'Con niebla apenas se ven veinte metros.', e: 'man sieht.' },
      { s: 'Im Schnee ___ man mit Turnschuhen sofort aus.', a: 'rutscht', d: ['rutschen', 'rutschst'], t: 'Con nieve, en zapatillas te resbalas enseguida.', e: 'man rutscht … aus.' },
      { s: 'Bei diesem Wind ___ man besser drinnen.', a: 'bleibt', d: ['bleiben', 'bleibst'], t: 'Con este viento es mejor quedarse dentro.', e: 'man bleibt.' },
      { s: 'Im Sommer ___ man hier bis spät draußen.', a: 'sitzt', d: ['sitzen', 'sitzt du'], t: 'En verano aquí se está fuera hasta tarde.', e: 'man sitzt.' }
    ],
    orders: [
      { sol: ['Hier', 'spricht', 'man', 'Deutsch'], alt: [['Man', 'spricht', 'hier', 'Deutsch']], t: 'Aquí se habla alemán.', e: 'Complemento (1), verbo (2), man (3).' },
      { sol: ['Im', 'Winter', 'trägt', 'man', 'einen', 'Mantel'], alt: [['Man', 'trägt', 'im', 'Winter', 'einen', 'Mantel']], t: 'En invierno se lleva abrigo.', e: 'man + verbo en singular.' },
      { sol: ['Wie', 'sagt', 'man', 'das', 'auf', 'Deutsch?'], t: '¿Cómo se dice eso en alemán?', e: 'Pregunta con man.' },
      { sol: ['In', 'Österreich', 'trinkt', 'man', 'viel', 'Kaffee'], alt: [['Man', 'trinkt', 'in', 'Österreich', 'viel', 'Kaffee']], t: 'En Austria se bebe mucho café.', e: 'man siempre con la 3ª persona del singular.' },
      { sol: ['In', 'Österreich', 'sagt', 'man', 'oft', 'Grüß', 'Gott'], alt: [['Man', 'sagt', 'in', 'Österreich', 'oft', 'Grüß', 'Gott']], t: 'En Austria se dice a menudo «Grüß Gott».', e: 'El complemento abre, el verbo va segundo y «man» detrás.' },
      { sol: ['Hier', 'kann', 'man', 'gut', 'essen'], alt: [['Man', 'kann', 'hier', 'gut', 'essen']], t: 'Aquí se come bien.', e: 'Modal en 2ª posición, infinitivo al final.' }
    ],
    clozes: [
      { txt: 'In Wien ___ man vieles zu Fuß machen. Tickets ___ man am Automaten oder mit dem Handy. Am Sonntag ___ man nicht einkaufen, aber ins Café ___ man immer gehen.', a: ['kann', 'kauft', 'darf', 'kann'], extra: ['können', 'kaufen', 'dürfen', 'könnt'], t: 'En Viena muchas cosas se pueden hacer a pie. Los billetes se compran en la máquina o con el móvil. Los domingos no se puede ir de compras, pero al café siempre se puede ir.', e: '"man" no cambia nunca y el verbo va siempre en singular, aunque hables de todo el mundo.' }
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
      { s: '___ mir bitte einen Termin!', a: 'Gib', d: ['Gibst', 'Gebe'], t: '¡Dame una cita, por favor!', e: 'geben: Gib! (e → i).' },
      { s: '___ dich bitte hin!', a: 'Setz', d: ['Setzt', 'Setzen'], t: '¡Siéntate, por favor!', e: 'Imperativo de du: raíz sin terminación (setzen → setz).' },
      { s: '___ Sie bitte tief ein!', a: 'Atmen', d: ['Atme', 'Atmet'], t: '¡Respire hondo, por favor!', e: 'Con Sie el verbo va delante y se mantiene el pronombre.' },
      { s: '___ bitte die Tür zu!', a: 'Mach', d: ['Macht', 'Machen'], t: '¡Cierra la puerta, por favor!', e: 'Imperativo de du con verbo separable: el prefijo va al final.' },
      { s: 'Kinder, ___ bitte ruhig!', a: 'seid', d: ['sei', 'seien'], t: 'Niños, ¡estaos quietos!', e: 'Imperativo irregular de sein con ihr: seid.' },
      { s: '___ mir bitte das Salz!', a: 'Gib', d: ['Gebt', 'Geben'], t: '¡Pásame la sal, por favor!', e: 'Los verbos con cambio e→i lo mantienen en el imperativo de du: geben → gib.' },
      { s: '___ Sie bitte hier Ihren Namen!', a: 'Schreiben', d: ['Schreib', 'Schreibt'], t: '¡Escriba aquí su nombre, por favor!', e: 'Forma de cortesía: infinitivo + Sie.' },
      { s: '___ nicht so viel fern!', a: 'Sieh', d: ['Seht', 'Sehen'], t: '¡No veas tanto la tele!', e: 'sehen cambia e→ie en du: sieh. El prefijo separable va al final.' },
      { s: '___ bitte langsamer!', a: 'Fahr', d: ['Fahrt', 'Fahren'], t: '¡Ve más despacio, por favor!', e: 'Los verbos con a→ä NO cambian en el imperativo de du: fahren → fahr.' },
      { s: '___ euch keine Sorgen!', a: 'Macht', d: ['Mach', 'Machen'], t: '¡No os preocupéis!', e: 'Imperativo de ihr: igual que el presente, sin pronombre.' },
      { s: '___ Sie bitte einen Moment!', a: 'Entschuldigen', d: ['Entschuldige', 'Entschuldigt'], t: '¡Disculpe un momento!', e: 'Cortesía: infinitivo + Sie.' },
      { s: '___ bitte deine Jacke an!', a: 'Zieh', d: ['Zieht', 'Ziehen'], t: '¡Ponte la chaqueta!', e: 'Verbo separable en imperativo: zieh … an.' },
      { s: '___ mir bitte die Wahrheit!', a: 'Sag', d: ['Sagt', 'Sagen'], t: '¡Dime la verdad!', e: 'Imperativo de du: la raíz sola.' },
      { s: '___ bitte nicht so laut!', a: 'Sprich', d: ['Sprecht', 'Sprechen'], t: '¡No hables tan alto!', e: 'sprechen cambia e→i: sprich.' },
      { s: '___ Sie bitte Platz!', a: 'Nehmen', d: ['Nimm', 'Nehmt'], t: '¡Tome asiento, por favor!', e: 'Con Sie se usa el infinitivo, no la forma corta.' },
      { s: '___ heute früher ins Bett!', a: 'Geh', d: ['Geht', 'Gehen'], t: '¡Vete hoy antes a la cama!', e: 'gehen no cambia la vocal: geh.' },
      { s: '___ mir bitte mit dem Koffer!', a: 'Hilf', d: ['Helft', 'Helfen'], t: '¡Ayúdame con la maleta!', e: 'helfen cambia e→i: hilf.' },
      { s: '___ bitte pünktlich!', a: 'Sei', d: ['Seid', 'Seien'], t: '¡Sé puntual!', e: 'Imperativo irregular de sein con du: sei.' },
      { s: '___ die Suppe, sie wird kalt!', a: 'Iss', d: ['Esst', 'Essen'], t: '¡Cómete la sopa, que se enfría!', e: 'essen cambia e→i: iss.' },
      { s: '___ euch bitte hier an!', a: 'Meldet', d: ['Melde', 'Melden'], t: '¡Registraos aquí, por favor!', e: 'Imperativo de ihr con verbo separable.' },
      { s: '___ Sie mich bitte morgen an!', a: 'Rufen', d: ['Ruf', 'Ruft'], t: '¡Llámeme mañana, por favor!', e: 'Cortesía + verbo separable: Rufen Sie … an.' },
      { s: '___ bitte das Fenster auf!', a: 'Mach', d: ['Macht', 'Machen'], t: '¡Abre la ventana, por favor!', e: 'mach … auf: el prefijo se queda al final.' },
      { s: '___ mir bitte Bescheid!', a: 'Gebt', d: ['Gib', 'Geben'], t: '¡Avisadme!', e: 'Imperativo de ihr: gebt.' },
      { s: '___ nicht so viel Kaffee!', a: 'Trink', d: ['Trinkt', 'Trinken'], t: '¡No bebas tanto café!', e: 'Imperativo de du en negativo.' },
      { s: '___ Sie bitte die Tabletten nach dem Essen!', a: 'Nehmen', d: ['Nimm', 'Nehmt'], t: '¡Tome las pastillas después de comer!', e: 'Cortesía: infinitivo + Sie.' },
      { s: '___ bitte eine Woche zu Hause!', a: 'Bleib', d: ['Bleibt', 'Bleiben'], t: '¡Quédate una semana en casa!', e: 'bleiben → bleib en el imperativo de du.' },
      { s: '___ mal, das ist wichtig!', a: 'Hör', d: ['Hört', 'Hören'], t: '¡Escucha, que esto es importante!', e: 'hören → hör.' },
      { s: '___ euch warm an, es ist kalt!', a: 'Zieht', d: ['Zieh', 'Ziehen'], t: '¡Abrigaos, que hace frío!', e: 'Imperativo de ihr con verbo separable: zieht … an.' },
      { s: '___ bitte etwas langsamer!', a: 'Sprich', d: ['Sprichst', 'Sprechst'], t: '¡Habla un poco más despacio, por favor!', e: 'Imperativo de du: sin -st y sin pronombre.' },
      { s: '___ Sie bitte hier Platz.', a: 'Nehmen', d: ['Nimm', 'Nehmt'], t: 'Siéntese aquí, por favor.', e: 'Imperativo de Sie: verbo + Sie.' },
      { s: '___ viel Wasser und ruh dich aus.', a: 'Trink', d: ['Trinkst', 'Trinken'], t: 'Bebe mucha agua y descansa.', e: 'Imperativo de du, sin -st.' },
      { s: '___ bitte vorsichtig, es ist glatt!', a: 'Fahr', d: ['Fährst', 'Fahren'], t: '¡Conduce con cuidado, resbala!', e: 'En el imperativo de du no hay cambio de vocal: fahr.' },
      { s: '___ mir bitte kurz mit dem Koffer.', a: 'Hilf', d: ['Hilfst', 'Helfen'], t: 'Ayúdame un momento con la maleta.', e: 'helfen cambia la vocal en el imperativo de du: hilf.' },
      { s: '___ euch bitte hin, es dauert noch.', a: 'Setzt', d: ['Setz', 'Setzen'], t: 'Sentaos, por favor, todavía tarda.', e: 'Imperativo de ihr: como el presente, sin pronombre.' },
      { s: '___ Sie mich bitte morgen an.', a: 'Rufen', d: ['Ruf', 'Ruft'], t: 'Llámeme mañana, por favor.', e: 'Imperativo de Sie con verbo separable: Rufen Sie … an.' },
      { s: '___ nicht so viel Süßes, das ist ungesund.', a: 'Iss', d: ['Isst', 'Essen'], t: 'No comas tanto dulce, no es sano.', e: 'essen en imperativo de du: iss.' },
      { s: '___ bitte das Fenster zu, mir ist kalt.', a: 'Mach', d: ['Machst', 'Machen'], t: 'Cierra la ventana, por favor, tengo frío.', e: 'Imperativo de du: mach … zu.' },
      { s: '___ Sie bitte tief ein und wieder aus.', a: 'Atmen', d: ['Atme', 'Atmet'], t: 'Respire hondo y suelte, por favor.', e: 'Imperativo de Sie: Atmen Sie … ein.' }
    ],
    orders: [
      { sol: ['Nimm', 'die', 'Tabletten', 'dreimal', 'am', 'Tag!'], t: '¡Toma las pastillas tres veces al día!', e: 'Imperativo de du, sin pronombre.' },
      { sol: ['Bleiben', 'Sie', 'bitte', 'im', 'Bett!'], t: '¡Quédese en la cama, por favor!', e: 'Forma formal: verbo + Sie.' },
      { sol: ['Trink', 'bitte', 'viel', 'Tee!'], t: '¡Bebe mucho té, por favor!', e: '"bitte" suaviza el imperativo.' },
      { sol: ['Macht', 'bitte', 'die', 'Übung', 'auf', 'Seite', 'zehn!'], t: '¡Haced el ejercicio de la página diez!', e: 'Imperativo de ihr.' },
      { sol: ['Geh', 'bitte', 'zum', 'Arzt!'], t: '¡Ve al médico, por favor!', e: 'Imperativo de du: la raíz sola, sin pronombre.' },
      { sol: ['Warten', 'Sie', 'bitte', 'einen', 'Moment!'], t: '¡Espere un momento, por favor!', e: 'Forma formal: verbo + Sie.' },
      { sol: ['Nehmen', 'Sie', 'bitte', 'Platz!'], t: '¡Tome asiento, por favor!', e: 'Con Sie: infinitivo (1), Sie (2), el resto detrás.' },
      { sol: ['Zieh', 'bitte', 'deine', 'Jacke', 'an!'], t: '¡Ponte la chaqueta, por favor!', e: 'Imperativo de du con verbo separable: el prefijo cierra la frase.' },
      { sol: ['Sprich', 'bitte', 'nicht', 'so', 'laut!'], t: '¡No hables tan alto, por favor!', e: 'sprechen cambia e→i en el imperativo de du.' }
    ],
    clozes: [
      { txt: 'Auf dem Rezept steht: „___ die Tabletten dreimal am Tag und ___ viel Wasser dazu. ___ Sie bitte in einer Woche wieder!“', a: ['Nimm', 'trink', 'Kommen'], extra: ['Nehmen', 'trinkt', 'Komm'], t: 'En la receta pone: «Toma las pastillas tres veces al día y bebe mucha agua con ellas. ¡Vuelva usted dentro de una semana!».', e: 'Los dos primeros son de tú (raíz sola); el tercero cambia a usted, y ahí el imperativo es el infinitivo + Sie.' },
      { txt: '___ viel Tee und ___ dich aus! ___ Sie bitte in einer Woche wieder, sagt der Arzt. Kinder, ___ jetzt bitte leise!', a: ['Trink', 'ruh', 'Kommen', 'seid'], extra: ['Trinkt', 'ruht', 'Komm', 'sei'], t: '¡Bebe mucho té y descansa! Vuelva usted dentro de una semana, dice el médico. ¡Niños, estaos quietos ahora!', e: 'Las tres personas del imperativo en un texto: du (raíz sola), Sie (infinitivo + Sie) e ihr (como el presente, sin pronombre).' }
    ]
  },
  'wie-alt-sein': {
    picks: [
      { s: 'Wie alt ___ deine Schwester?', a: 'ist', d: ['hat', 'sind'], t: '¿Cuántos años tiene tu hermana?', e: 'La edad va con sein, no con haben.' },
      { s: 'Mein Opa ___ achtzig Jahre alt.', a: 'ist', d: ['hat', 'sind'], t: 'Mi abuelo tiene ochenta años.', e: 'sein + número: ist achtzig.' },
      { s: 'Ich ___ zweiunddreißig.', a: 'bin', d: ['habe', 'ist'], t: 'Tengo treinta y dos.', e: 'Con ich: ich bin.' },
      { s: 'Wie alt ___ ihr beide?', a: 'seid', d: ['habt', 'sind'], t: '¿Cuántos años tenéis los dos?', e: 'Con ihr: ihr seid.' },
      { s: 'Die Zwillinge ___ schon vierzehn.', a: 'sind', d: ['haben', 'ist'], t: 'Los gemelos ya tienen catorce.', e: 'Plural: sind.' },
      { s: 'Wie alt ___ Sie, wenn ich fragen darf?', a: 'sind', d: ['haben', 'ist'], t: '¿Qué edad tiene, si me permite?', e: 'Con Sie: sind Sie.' },
      { s: 'Das Baby ist erst drei ___ alt.', a: 'Monate', d: ['Jahre', 'Wochen alt'], t: 'El bebé solo tiene tres meses.', e: 'Con bebés se cuenta en meses o semanas.' },
      { s: 'Meine Tochter ___ nächste Woche sechs.', a: 'wird', d: ['ist', 'hat'], t: 'Mi hija cumple seis la semana que viene.', e: 'Cumplir años es werden, no sein.' },
      { s: 'Er ___ genauso alt wie ich.', a: 'ist', d: ['hat', 'sind'], t: 'Tiene la misma edad que yo.', e: 'Comparar edades también con sein.' },
      { s: 'Wie alt ___ dein Bruder eigentlich?', a: 'ist', d: ['hat', 'bist'], t: '¿Cuántos años tiene tu hermano?', e: 'Tercera persona: ist.' },
      { s: 'Mit welchem Verb sagt man das Alter auf Deutsch?', a: 'sein', d: ['haben', 'werden'], t: 'La edad se dice con «sein».', e: 'Ich BIN 32, no «ich habe 32».' },
      { s: 'Warum sagen wir Spanier hier oft etwas falsch?', a: 'porque en español se usa tener', d: ['porque el verbo es irregular', 'por el orden de la frase'], t: 'Porque en español la edad va con «tener».', e: '«Tengo 32» → «Ich bin 32».' },
      { s: 'Muss man „Jahre alt“ immer sagen?', a: 'no, se puede dejar solo el número', d: ['sí, siempre', 'sólo con Sie'], t: 'No hace falta: basta con el número.', e: 'Ich bin 32 (Jahre alt).' },
      { s: 'Welches Verb braucht man für „cumplir años“?', a: 'werden', d: ['sein', 'haben'], t: 'Para «cumplir años» se usa «werden».', e: 'Sie wird morgen sechs.' },
      { s: 'Wie fragt man höflich nach dem Alter?', a: 'Wie alt sind Sie, wenn ich fragen darf?', d: ['Wie alt bist du?', 'Wie viele Jahre hast du?'], t: 'La forma cortés es «Wie alt sind Sie, wenn ich fragen darf?».', e: 'Con desconocidos, y suavizado.' },
      { s: 'Meine Neffen ___ acht und zehn.', a: 'sind', d: ['ist', 'seid'], t: 'Mis sobrinos tienen ocho y diez.', e: 'Plural → sind.' },
      { s: 'Wie alt ___ du?', a: 'bist', d: ['bin', 'ist'], t: '¿Cuántos años tienes?', e: 'du → bist.' },
      { s: 'Das Baby ist erst sechs ___ alt.', a: 'Wochen', d: ['Woche', 'Wochens'], t: 'El bebé solo tiene seis semanas.', e: 'Plural: Wochen.' },
      { s: 'Er ___ im Mai vierzig.', a: 'wird', d: ['ist', 'hat'], t: 'Cumple cuarenta en mayo.', e: 'Futuro cercano → werden.' },
      { s: 'Wie alt ___ Ihre Kinder?', a: 'sind', d: ['ist', 'seid'], t: '¿Qué edad tienen sus hijos?', e: 'Sujeto plural → sind.' }
    ]
  },
  'praesens-fuer-die-zukunft': {
    picks: [
      { s: 'Nächste Woche ___ ich frei.', a: 'habe', d: ['werde haben', 'hatte'], t: 'La semana que viene libro.', e: 'Con una palabra de tiempo basta el presente.' },
      { s: 'Im Sommer ___ wir ans Meer.', a: 'fahren', d: ['werden fahren', 'fuhren'], t: 'En verano vamos al mar.', e: 'Plan de futuro, verbo en presente.' },
      { s: 'Morgen ___ der Kurs um neun an.', a: 'fängt', d: ['fing', 'wird anfangen'], t: 'Mañana el curso empieza a las nueve.', e: 'morgen ya dice que es futuro.' },
      { s: 'Am Freitag ___ meine Schwester zu Besuch.', a: 'kommt', d: ['kam', 'wird kommen'], t: 'El viernes viene mi hermana de visita.', e: 'Presente con am Freitag.' },
      { s: 'Nächstes Jahr ___ ich die B1-Prüfung.', a: 'mache', d: ['machte', 'werde machen'], t: 'El año que viene hago el examen B1.', e: 'El presente vale para planes.' },
      { s: 'Heute Abend ___ wir zu Hause.', a: 'bleiben', d: ['blieben', 'werden bleiben'], t: 'Esta noche nos quedamos en casa.', e: 'heute Abend + presente.' },
      { s: 'Übermorgen ___ er nach Linz.', a: 'fährt', d: ['fuhr', 'wird fahren'], t: 'Pasado mañana va a Linz.', e: 'übermorgen marca el futuro.' },
      { s: 'Im Mai ___ meine Prüfung.', a: 'ist', d: ['war', 'wird sein'], t: 'En mayo es mi examen.', e: 'im Mai + presente.' },
      { s: 'Am Wochenende ___ wir die Wohnung.', a: 'putzen', d: ['putzten', 'werden putzen'], t: 'El fin de semana limpiamos el piso.', e: 'Presente para lo planeado.' },
      { s: 'Gleich ___ ich dich an.', a: 'rufe', d: ['rief', 'werde anrufen'], t: 'Ahora te llamo.', e: 'gleich = enseguida, y el verbo va en presente.' },
      { s: 'Womit sagt man im Alltag el futuro auf Deutsch?', a: 'con el presente', d: ['con werden siempre', 'con el Perfekt'], t: 'En el día a día el futuro se dice con el presente.', e: 'Morgen fahre ich nach Graz.' },
      { s: 'Was braucht der Satz dafür?', a: 'una palabra de tiempo', d: ['el verbo werden', 'nada'], t: 'Hace falta una palabra de tiempo.', e: 'morgen, nächste Woche, im Mai.' },
      { s: 'Wozu benutzt man „werden“ dann?', a: 'para pronósticos y promesas', d: ['para cualquier futuro', 'para el pasado'], t: '«werden» se usa para pronósticos y promesas.', e: 'Es wird regnen. Ich werde es machen.' },
      { s: 'Ist „Ich werde morgen fahren“ falsch?', a: 'no, pero suena más pesado', d: ['sí, es incorrecto', 'sólo vale por escrito'], t: 'No es incorrecto, pero suena más pesado.', e: 'Lo natural es «Ich fahre morgen».' },
      { s: 'Nächsten Monat ___ wir um.', a: 'ziehen', d: ['werden ziehen', 'zogen'], t: 'El mes que viene nos mudamos.', e: 'Presente con palabra de tiempo.' },
      { s: 'Was hilft nos a los españoles aquí?', a: 'que en español hacemos lo mismo', d: ['nada, es muy distinto', 'que hay que usar werden'], t: 'Nos ayuda que en español hacemos lo mismo.', e: '«Mañana voy a Graz».' },
      { s: 'Nächstes Jahr ___ sie nach Wien.', a: 'kommt', d: ['wird kommen', 'kam'], t: 'El año que viene se viene a Viena.', e: 'Presente.' },
      { s: 'Ohne Zeitangabe versteht man den Satz als ___.', a: 'presente', d: ['futuro', 'pasado'], t: 'Sin palabra de tiempo, la frase se entiende como presente.', e: 'Por eso la palabra de tiempo es obligatoria.' },
      { s: 'Heute Abend ___ ich früh ins Bett.', a: 'gehe', d: ['werde gehen', 'ging'], t: 'Esta noche me acuesto pronto.', e: 'Presente con «heute Abend».' },
      { s: 'In zwei Wochen ___ der Kurs zu Ende.', a: 'ist', d: ['wird sein', 'war'], t: 'En dos semanas se acaba el curso.', e: 'Presente para algo ya planeado.' }
    ]
  },
  'sport-spielen-machen-fahren': {
    picks: [
      { s: 'Am Sonntag ___ wir Volleyball.', a: 'spielen', d: ['machen', 'fahren'], t: 'El domingo jugamos al voleibol.', e: 'Con pelota: spielen.' },
      { s: 'Im Winter ___ ich gern Ski.', a: 'fahre', d: ['spiele', 'mache'], t: 'En invierno me gusta esquiar.', e: 'Con tabla o vehículo: fahren.' },
      { s: 'Zweimal pro Woche ___ ich Yoga.', a: 'mache', d: ['spiele', 'fahre'], t: 'Dos veces por semana hago yoga.', e: 'Yoga va con machen.' },
      { s: 'Meine Tochter ___ Handball im Verein.', a: 'spielt', d: ['macht', 'fährt'], t: 'Mi hija juega al balonmano en un club.', e: 'Handball lleva pelota: spielen.' },
      { s: 'Am Abend ___ ich eine halbe Stunde.', a: 'laufe', d: ['spiele', 'mache'], t: 'Por la tarde corro media hora.', e: 'laufen es verbo propio, no necesita nada más.' },
      { s: 'Er ___ jeden Tag mit dem Rad zur Arbeit.', a: 'fährt', d: ['spielt', 'macht'], t: 'Va cada día en bici al trabajo.', e: 'Rad fahren: con fahren.' },
      { s: 'Wir ___ im Sommer oft Tennis.', a: 'spielen', d: ['machen', 'fahren'], t: 'En verano jugamos mucho al tenis.', e: 'Tennis con pelota: spielen.' },
      { s: 'Sie ___ dreimal pro Woche Sport.', a: 'treibt', d: ['spielt', 'fährt'], t: 'Hace deporte tres veces por semana.', e: 'Sport treiben es la expresión fija.' },
      { s: 'Im Hallenbad ___ ich zwanzig Bahnen.', a: 'schwimme', d: ['mache', 'spiele'], t: 'En la piscina cubierta nado veinte largos.', e: 'schwimmen también es verbo propio.' },
      { s: 'Am Wochenende ___ wir eine Wanderung.', a: 'machen', d: ['spielen', 'fahren'], t: 'El fin de semana hacemos una caminata.', e: 'eine Wanderung machen.' },
      { s: 'Welches Verb geht mit Ballsportarten?', a: 'spielen', d: ['machen', 'fahren'], t: 'Con los deportes de pelota va «spielen».', e: 'Fußball, Tennis, Handball spielen.' },
      { s: 'Welches Verb geht mit Ski und Rad?', a: 'fahren', d: ['spielen', 'machen'], t: 'Con esquí y bici va «fahren».', e: 'Ski fahren, Rad fahren.' },
      { s: 'Und mit Yoga oder Pilates?', a: 'machen', d: ['spielen', 'fahren'], t: 'Con yoga o pilates va «machen».', e: 'Yoga machen.' },
      { s: 'Was heißt „Sport treiben“?', a: 'hacer deporte en general', d: ['entrenar duro', 'competir'], t: '«Sport treiben» es hacer deporte en general.', e: 'Un pelín más formal que «Sport machen».' },
      { s: 'Welche Sportarten haben ihr eigenes Verb?', a: 'nadar y correr', d: ['fútbol y tenis', 'yoga y pilates'], t: 'Nadar y correr tienen verbo propio.', e: 'schwimmen, laufen.' },
      { s: 'Warum sale mal a los españoles?', a: 'en español todo es «hacer» o «jugar a»', d: ['porque hay muchos verbos', 'por el orden'], t: 'Porque en español casi todo es «hacer» o «jugar a».', e: 'En alemán el verbo cambia según el deporte.' },
      { s: 'Braucht „Fußball spielen“ einen Artikel?', a: 'no', d: ['sí, der', 'sí, das'], t: 'No lleva artículo.', e: 'Ich spiele Fußball, no «den Fußball».' },
      { s: 'Am Wochenende ___ ich oft Schach.', a: 'spiele', d: ['mache', 'fahre'], t: 'Los fines de semana juego mucho al ajedrez.', e: 'Juego de tablero → también spielen.' },
      { s: 'Im Urlaub ___ wir viel Rad.', a: 'fahren', d: ['spielen', 'machen'], t: 'En vacaciones vamos mucho en bici.', e: 'Rad fahren.' },
      { s: 'Dreimal pro Woche ___ ich ins Fitnessstudio.', a: 'gehe', d: ['spiele', 'fahre'], t: 'Voy al gimnasio tres veces por semana.', e: 'Al sitio se va: gehen.' }
    ]
  },
  'reflexive-verben-akkusativ': {
    picks: [
      { s: 'Ich dusche ___ jeden Morgen.', a: 'mich', d: ['mir', 'sich'], t: 'Me ducho todas las mañanas.', e: 'Con ich el pronombre es mich.' },
      { s: 'Wir haben ___ sehr gefreut.', a: 'uns', d: ['sich', 'unser'], t: 'Nos alegramos mucho.', e: 'Con wir: uns.' },
      { s: 'Beeil ___ bitte, wir kommen zu spät!', a: 'dich', d: ['dir', 'sich'], t: '¡Date prisa, que llegamos tarde!', e: 'En imperativo con du: dich.' },
      { s: 'Er zieht ___ schnell an.', a: 'sich', d: ['ihn', 'ihm'], t: 'Se viste rápido.', e: 'Tercera persona: sich.' },
      { s: 'Setzt ___ bitte hin!', a: 'euch', d: ['sich', 'ihr'], t: '¡Sentaos, por favor!', e: 'Con ihr: euch.' },
      { s: 'Am Sonntag ruhe ich ___ aus.', a: 'mich', d: ['mir', 'sich'], t: 'El domingo descanso.', e: 'sich ausruhen con ich: mich.' },
      { s: 'Wie fühlst du ___ heute?', a: 'dich', d: ['dir', 'sich'], t: '¿Cómo te encuentras hoy?', e: 'sich fühlen con du: dich.' },
      { s: 'Die Kinder waschen ___ allein.', a: 'sich', d: ['ihnen', 'uns'], t: 'Los niños se lavan solos.', e: 'Plural de tercera persona: sich.' },
      { s: 'Ich habe ___ gestern verspätet.', a: 'mich', d: ['mir', 'sich'], t: 'Ayer llegué tarde.', e: 'sich verspäten: mich con ich.' },
      { s: 'Sie interessiert ___ für Geschichte.', a: 'sich', d: ['ihr', 'ihn'], t: 'Le interesa la historia.', e: 'sich interessieren für.' },
      { s: 'Was ist ein reflexives Verb?', a: 'uno que se hace a uno mismo', d: ['uno irregular', 'uno con dos verbos'], t: 'Es un verbo cuya acción recae en uno mismo.', e: 'sich waschen, sich freuen.' },
      { s: 'Wie heißt das Pronomen bei „ich“?', a: 'mich', d: ['mir', 'sich'], t: 'Con «ich» el pronombre es «mich».', e: 'Ich wasche mich.' },
      { s: 'Und bei „er, sie, es“ und „sie/Sie“?', a: 'sich', d: ['ihn', 'ihm'], t: 'Con «er, sie, es» y «sie/Sie» es «sich».', e: 'Siempre «sich», en singular y en plural.' },
      { s: 'Wo steht das Pronomen im Satz?', a: 'justo detrás del verbo', d: ['al final', 'delante del sujeto'], t: 'Va justo detrás del verbo conjugado.', e: 'Ich freue mich sehr.' },
      { s: 'Was ist der Unterschied zum Spanischen?', a: 'en español va pegado al verbo', d: ['no hay diferencia', 'en español no existe'], t: 'Que en español va pegado al verbo.', e: '«me ducho» frente a «ich dusche mich».' },
      { s: 'Welches Hilfsverb nehmen sie im Perfekt?', a: 'haben, casi siempre', d: ['sein', 'werden'], t: 'Casi siempre «haben».', e: 'Ich habe mich gefreut.' },
      { s: 'Wir treffen ___ um acht.', a: 'uns', d: ['sich', 'euch'], t: 'Quedamos a las ocho.', e: 'wir → uns.' },
      { s: 'Zieh ___ bitte warm an!', a: 'dich', d: ['dir', 'sich'], t: '¡Abrígate bien!', e: 'Imperativo de du → dich.' },
      { s: 'Habt ihr ___ schon vorgestellt?', a: 'euch', d: ['uns', 'sich'], t: '¿Ya os habéis presentado?', e: 'ihr → euch.' },
      { s: 'Welcher Satz ist falsch?', a: 'Ich freue sehr mich.', d: ['Ich freue mich sehr.', 'Sie freut sich sehr.'], t: 'El incorrecto es «Ich freue sehr mich.».', e: 'El pronombre va pegado al verbo, no al final.' }
    ]
  },
  'wehtun-dativ': {
    picks: [
      { s: '___ tut der Kopf weh.', a: 'Mir', d: ['Ich', 'Mich'], t: 'Me duele la cabeza.', e: 'La persona va en dativo: mir.' },
      { s: 'Tut ___ der Hals weh?', a: 'dir', d: ['du', 'dich'], t: '¿Te duele la garganta?', e: 'Dativo de du: dir.' },
      { s: '___ tun die Füße weh.', a: 'Ihr', d: ['Sie', 'Ihre'], t: 'Le duelen los pies.', e: 'Dativo de sie: ihr.' },
      { s: 'Mir ___ seit gestern der Rücken weh.', a: 'tut', d: ['tue', 'tun'], t: 'Me duele la espalda desde ayer.', e: 'El sujeto es der Rücken, singular: tut.' },
      { s: 'Mir ___ die Augen weh.', a: 'tun', d: ['tut', 'tue'], t: 'Me duelen los ojos.', e: 'Sujeto plural: tun.' },
      { s: 'Was tut ___ denn weh?', a: 'Ihnen', d: ['Sie', 'Ihr'], t: '¿Qué le duele?', e: 'Usted en dativo: Ihnen.' },
      { s: '___ tut nach dem Laufen das Knie weh.', a: 'Ihm', d: ['Er', 'Ihn'], t: 'Le duele la rodilla después de correr.', e: 'Dativo de er: ihm.' },
      { s: 'Tut ___ etwas weh?', a: 'euch', d: ['ihr', 'eure'], t: '¿Os duele algo?', e: 'Dativo de ihr: euch.' },
      { s: 'Uns ___ vom Umzug alles weh.', a: 'tut', d: ['tun', 'tuen'], t: 'Nos duele todo de la mudanza.', e: 'alles es singular: tut.' },
      { s: 'Dem Kind ___ der Bauch weh.', a: 'tut', d: ['tun', 'tue'], t: 'Al niño le duele la tripa.', e: 'der Bauch, singular: tut.' }
    ]
  },
  'reflexive-verben-dativ': {
    picks: [
      { s: 'Ich putze ___ die Zähne.', a: 'mir', d: ['mich', 'sich'], t: 'Me lavo los dientes.', e: 'Con complemento directo, el pronombre va en dativo.' },
      { s: 'Er hat ___ den Arm gebrochen.', a: 'sich', d: ['ihn', 'ihm selbst'], t: 'Se ha roto el brazo.', e: 'Tercera persona en dativo también es sich.' },
      { s: 'Wasch ___ bitte die Hände.', a: 'dir', d: ['dich', 'du'], t: 'Lávate las manos, por favor.', e: 'Con die Hände el pronombre pasa a dativo: dir.' },
      { s: 'Wir haben ___ die Füße vertreten.', a: 'uns', d: ['unser', 'wir'], t: 'Hemos estirado las piernas.', e: 'uns vale para acusativo y dativo.' },
      { s: 'Ich habe ___ den Fuß verletzt.', a: 'mir', d: ['mich', 'meinen'], t: 'Me he hecho daño en el pie.', e: 'Hay complemento directo: dativo mir.' },
      { s: 'Sie zieht ___ die Schuhe aus.', a: 'sich', d: ['ihr', 'ihre'], t: 'Se quita los zapatos.', e: 'die Schuhe es el directo: sich en dativo.' },
      { s: 'Ich wasche ___ jeden Morgen.', a: 'mich', d: ['mir', 'meiner'], t: 'Me lavo cada mañana.', e: 'Sin complemento directo: acusativo mich.' },
      { s: 'Putz ___ bitte die Nase.', a: 'dir', d: ['dich', 'deine'], t: 'Suénate la nariz, por favor.', e: 'die Nase es el directo: dir.' },
      { s: 'Er hat ___ beim Sport wehgetan.', a: 'sich', d: ['ihn', 'ihm'], t: 'Se ha hecho daño haciendo deporte.', e: 'sich wehtun.' },
      { s: 'Habt ihr ___ die Hände desinfiziert?', a: 'euch', d: ['ihr', 'eure'], t: '¿Os habéis desinfectado las manos?', e: 'euch vale para los dos casos.' }
    ]
  },
  'passen-stehen-gefallen': {
    picks: [
      { s: 'Die Hose ___ mir nicht, sie ist zu eng.', a: 'passt', d: ['steht', 'gefällt'], t: 'El pantalón no me vale, es muy estrecho.', e: 'passen = ser de tu talla.' },
      { s: 'Blau ___ dir wirklich gut.', a: 'steht', d: ['passt', 'gefällt'], t: 'El azul te queda muy bien.', e: 'stehen = quedarte bien.' },
      { s: 'Das Kleid ___ mir sehr.', a: 'gefällt', d: ['passt', 'steht'], t: 'El vestido me gusta mucho.', e: 'gefallen = gustarte cómo es.' },
      { s: 'Die Schuhe ___ leider nicht, zu klein.', a: 'passen', d: ['stehen', 'gefallen'], t: 'Los zapatos no me valen, muy pequeños.', e: 'Cuestión de talla: passen.' },
      { s: 'Der Hut ___ ihr ausgezeichnet.', a: 'steht', d: ['passt', 'gefällt'], t: 'El sombrero le queda de maravilla.', e: 'Le favorece: stehen.' },
      { s: 'Mir ___ die Farbe nicht.', a: 'gefällt', d: ['passt', 'steht'], t: 'El color no me gusta.', e: 'Opinión estética: gefallen.' },
      { s: 'Die Jacke ___ mir perfekt.', a: 'passt', d: ['steht', 'gefällt'], t: 'La chaqueta me queda perfecta de talla.', e: 'Talla: passen.' },
      { s: 'Diese Farbe ___ dir nicht so gut.', a: 'steht', d: ['passt', 'gefällt'], t: 'Ese color no te favorece tanto.', e: 'Favorecer: stehen.' },
      { s: '___ Ihnen die Schuhe?', a: 'Gefallen', d: ['Passen Ihnen sie', 'Stehen Ihnen es'], t: '¿Le gustan los zapatos?', e: 'Plural: gefallen.' },
      { s: 'Der Anzug ___ ihm nicht mehr.', a: 'passt', d: ['steht', 'gefällt'], t: 'El traje ya no le vale.', e: 'Ha cambiado de talla: passen.' }
    ]
  },
  'futur-mit-werden': {
    picks: [
      { s: 'Ich ___ dir aus dem Urlaub schreiben.', a: 'werde', d: ['will', 'würde'], t: 'Te escribiré desde las vacaciones.', e: 'werden + infinitivo al final.' },
      { s: 'Morgen ___ es regnen.', a: 'wird', d: ['will', 'würde'], t: 'Mañana lloverá.', e: 'Pronóstico: werden.' },
      { s: 'Wir ___ dich nicht vergessen.', a: 'werden', d: ['wollen', 'würden'], t: 'No te olvidaremos.', e: 'Promesa con werden.' },
      { s: 'Ich werde dich morgen ___.', a: 'anrufen', d: ['anrufe', 'angerufen'], t: 'Te llamaré mañana.', e: 'El infinitivo cierra la frase.' },
      { s: '___ du mir helfen?', a: 'Wirst', d: ['Willst', 'Würdest'], t: '¿Me ayudarás?', e: 'Con du: wirst.' },
      { s: 'Das Wetter ___ besser werden.', a: 'wird', d: ['will', 'würde'], t: 'El tiempo va a mejorar.', e: 'werden como auxiliar y como verbo pleno.' },
      { s: 'Ihr ___ das schon schaffen.', a: 'werdet', d: ['wollt', 'würdet'], t: 'Lo conseguiréis.', e: 'Con ihr: werdet.' },
      { s: 'Sie ___ in zwei Jahren fertig sein.', a: 'wird', d: ['will', 'würde'], t: 'Habrá terminado en dos años.', e: 'Previsión a futuro.' },
      { s: 'Für Pläne reicht meistens ___.', a: 'das Präsens', d: ['das Futur', 'der Konjunktiv'], t: 'Para planes basta casi siempre el presente.', e: 'werden se reserva para promesas y pronósticos.' },
      { s: 'Ich ___ es dir versprechen.', a: 'werde', d: ['will', 'würde'], t: 'Te lo prometeré.', e: 'Promesa explícita.' }
    ]
  },
  'dativ-bei-gratulieren-danken': {
    picks: [
      { s: 'Ich gratuliere ___ zum Geburtstag!', a: 'dir', d: ['dich', 'du'], t: '¡Te felicito por tu cumpleaños!', e: 'gratulieren pide dativo.' },
      { s: 'Wir danken ___ für die Einladung.', a: 'Ihnen', d: ['Sie', 'Ihr'], t: 'Le agradecemos la invitación.', e: 'danken pide dativo.' },
      { s: 'Er hat ___ herzlich gratuliert.', a: 'ihr', d: ['sie', 'ihre'], t: 'La felicitó de corazón.', e: 'Dativo femenino: ihr.' },
      { s: 'Ich danke ___ für alles.', a: 'euch', d: ['ihr', 'eure'], t: 'Os doy las gracias por todo.', e: 'Dativo de ihr: euch.' },
      { s: 'Alle haben ___ gratuliert.', a: 'uns', d: ['wir', 'unser'], t: 'Todos nos felicitaron.', e: 'Dativo de wir: uns.' },
      { s: 'Sie dankt ___ Gastgebern für den Abend.', a: 'den', d: ['die', 'der'], t: 'Da las gracias a los anfitriones por la noche.', e: 'Dativo plural: den + -n.' },
      { s: 'Ich möchte ___ Kollegin gratulieren.', a: 'der', d: ['die', 'den'], t: 'Quiero felicitar a la compañera.', e: 'Dativo femenino: der Kollegin.' },
      { s: 'Hast du ___ schon gratuliert?', a: 'ihm', d: ['ihn', 'er'], t: '¿Ya le has felicitado?', e: 'Dativo de er: ihm.' },
      { s: 'Wir gratulieren ___ Brautpaar.', a: 'dem', d: ['das', 'der'], t: 'Felicitamos a los novios.', e: 'das Brautpaar en dativo: dem.' },
      { s: 'Danke ___ für die Blumen!', a: 'dir', d: ['dich', 'du'], t: '¡Gracias por las flores!', e: 'danken + dativo, también en imperativo.' }
    ]
  },
  'verben-mit-praeposition-gefuehl': {
    picks: [
      { s: 'Ich freue mich ___ deinen Besuch.', a: 'über', d: ['für', 'von'], t: 'Me alegro de tu visita.', e: 'sich freuen ÜBER + acusativo.' },
      { s: 'Am Anfang hatte ich Angst ___ dem Telefonieren.', a: 'vor', d: ['von', 'für'], t: 'Al principio me daba miedo hablar por teléfono.', e: 'Angst haben VOR + dativo.' },
      { s: 'Er ärgert sich ___ den Lärm.', a: 'über', d: ['von', 'mit'], t: 'Le molesta el ruido.', e: 'sich ärgern ÜBER + acusativo.' },
      { s: 'Man gewöhnt sich ___ alles.', a: 'an', d: ['auf', 'zu'], t: 'Uno se acostumbra a todo.', e: 'sich gewöhnen AN + acusativo.' },
      { s: 'Sie macht sich Sorgen ___ ihre Tochter.', a: 'um', d: ['für', 'über'], t: 'Está preocupada por su hija.', e: 'sich Sorgen machen UM + acusativo.' },
      { s: 'Ich interessiere mich ___ Geschichte.', a: 'für', d: ['an', 'über'], t: 'Me interesa la historia.', e: 'sich interessieren FÜR + acusativo.' },
      { s: 'Wir warten ___ die Antwort vom Amt.', a: 'auf', d: ['für', 'nach'], t: 'Esperamos la respuesta de la administración.', e: 'warten AUF + acusativo.' },
      { s: 'Er denkt oft ___ seine Heimat.', a: 'an', d: ['über', 'von'], t: 'Piensa a menudo en su tierra.', e: 'denken AN + acusativo.' },
      { s: 'Ich freue mich schon ___ den Sommer.', a: 'auf', d: ['über', 'für'], t: 'Ya tengo ganas de que llegue el verano.', e: 'sich freuen AUF es el futuro; ÜBER, lo que ya pasó.' },
      { s: 'Sie träumt ___ einer eigenen Wohnung.', a: 'von', d: ['über', 'an'], t: 'Sueña con un piso propio.', e: 'träumen VON + dativo.' }
    ]
  },
  'mitbringen-schenken-dativ': {
    picks: [
      { s: 'Ich bringe ___ einen Kuchen mit.', a: 'dir', d: ['dich', 'du'], t: 'Te llevo una tarta.', e: 'A quién: dativo, y va primero.' },
      { s: 'Was sollen wir ___ Gastgebern schenken?', a: 'den', d: ['die', 'der'], t: '¿Qué les regalamos a los anfitriones?', e: 'Dativo plural: den + -n.' },
      { s: 'Sie hat ___ Blumen mitgebracht.', a: 'uns', d: ['wir', 'unser'], t: 'Nos ha traído flores.', e: 'Dativo de wir: uns.' },
      { s: 'Ich schenke ___ ein Buch.', a: 'ihm', d: ['ihn', 'er'], t: 'Le regalo un libro.', e: 'Dativo de er: ihm.' },
      { s: 'Bring ___ bitte etwas zu trinken mit!', a: 'mir', d: ['mich', 'ich'], t: '¡Tráeme algo de beber!', e: 'Dativo de ich: mir.' },
      { s: 'Wir haben ___ Kollegin eine Karte geschenkt.', a: 'der', d: ['die', 'den'], t: 'Le hemos regalado una tarjeta a la compañera.', e: 'Dativo femenino: der Kollegin.' },
      { s: 'Ich bringe es ___ morgen mit.', a: 'dir', d: ['dich', 'deiner'], t: 'Te lo llevo mañana.', e: 'Con el qué en pronombre, el dativo va detrás.' },
      { s: 'Sie schenkt ___ Kindern jedes Jahr Bücher.', a: 'den', d: ['die', 'der'], t: 'Cada año les regala libros a los niños.', e: 'Dativo plural con -n.' },
      { s: 'Was hast du ___ zum Geburtstag geschenkt?', a: 'ihr', d: ['sie', 'ihre'], t: '¿Qué le regalaste por su cumpleaños?', e: 'Dativo femenino: ihr.' },
      { s: 'Bringt ___ bitte nichts mit!', a: 'uns', d: ['wir', 'unser'], t: '¡No nos traigáis nada!', e: 'uns en dativo.' }
    ]
  },
  'reflexive-verben-sport': {
    picks: [
      { s: 'Ich wärme ___ zehn Minuten auf.', a: 'mich', d: ['mir', 'sich'], t: 'Caliento diez minutos.', e: 'sich aufwärmen con ich: mich.' },
      { s: 'Nach dem Training ruhe ich ___ aus.', a: 'mich', d: ['mir', 'sich'], t: 'Después de entrenar descanso.', e: 'sich ausruhen: mich.' },
      { s: 'Er hat ___ beim Fußball verletzt.', a: 'sich', d: ['ihn', 'ihm'], t: 'Se lesionó jugando al fútbol.', e: 'sich verletzen, tercera persona.' },
      { s: 'Wir dehnen ___ nach jedem Lauf.', a: 'uns', d: ['unser', 'wir'], t: 'Estiramos después de cada carrera.', e: 'sich dehnen con wir: uns.' },
      { s: 'Bewegt ___ mehr, das tut gut!', a: 'euch', d: ['ihr', 'eure'], t: '¡Moveos más, sienta bien!', e: 'sich bewegen en imperativo con ihr: euch.' },
      { s: 'Streng ___ am ersten Tag nicht zu sehr an!', a: 'dich', d: ['dir', 'du'], t: '¡No te esfuerces demasiado el primer día!', e: 'sich anstrengen con du: dich.' },
      { s: 'Sie meldet ___ für den Marathon an.', a: 'sich', d: ['ihr', 'ihre'], t: 'Se apunta al maratón.', e: 'sich anmelden, tercera persona.' },
      { s: 'Ich habe ___ beim Skifahren das Knie verletzt.', a: 'mir', d: ['mich', 'meiner'], t: 'Me lesioné la rodilla esquiando.', e: 'Con das Knie de directo, el pronombre va en dativo.' },
      { s: 'Wie fühlst du ___ nach dem Training?', a: 'dich', d: ['dir', 'du'], t: '¿Cómo te encuentras después de entrenar?', e: 'sich fühlen: dich.' },
      { s: 'Die Läufer wärmen ___ gemeinsam auf.', a: 'sich', d: ['ihnen', 'uns'], t: 'Los corredores calientan juntos.', e: 'Plural de tercera: sich.' }
    ]
  },
  'passiv-praesens': {
    picks: [
      { s: 'Die Unterlagen ___ heute geprüft.', a: 'werden', d: ['sind', 'haben'], t: 'La documentación se revisa hoy.', e: 'Pasiva: werden + participio.' },
      { s: 'Das Büro ___ um achtzehn Uhr geschlossen.', a: 'wird', d: ['ist', 'hat'], t: 'La oficina se cierra a las seis.', e: 'Singular: wird.' },
      { s: 'Hier ___ nicht geraucht.', a: 'wird', d: ['ist', 'hat'], t: 'Aquí no se fuma.', e: 'Pasiva sin sujeto, muy típica en avisos.' },
      { s: 'Die Mails ___ jeden Morgen beantwortet.', a: 'werden', d: ['sind', 'haben'], t: 'Los correos se contestan cada mañana.', e: 'Plural: werden.' },
      { s: 'Der Vertrag wird morgen ___.', a: 'unterschrieben', d: ['unterschreiben', 'unterschreibt'], t: 'El contrato se firma mañana.', e: 'El participio va al final.' },
      { s: 'Das Formular ___ von der Chefin geprüft.', a: 'wird', d: ['ist', 'hat'], t: 'El formulario lo revisa la jefa.', e: 'Quien lo hace va con von + dativo.' },
      { s: 'Die Termine ___ telefonisch vereinbart.', a: 'werden', d: ['sind', 'haben'], t: 'Las citas se concretan por teléfono.', e: 'Plural: werden.' },
      { s: 'Im Passiv steht das Partizip ___.', a: 'am Ende', d: ['am Anfang', 'in der Mitte'], t: 'En la pasiva el participio va al final.', e: 'Como en el Perfekt.' },
      { s: 'Das Protokoll ___ nach der Besprechung geschrieben.', a: 'wird', d: ['ist', 'hat'], t: 'El acta se escribe después de la reunión.', e: 'Singular: wird.' },
      { s: 'Die Rechnungen ___ am Monatsende bezahlt.', a: 'werden', d: ['sind', 'haben'], t: 'Las facturas se pagan a final de mes.', e: 'Plural: werden.' }
    ]
  }
};
