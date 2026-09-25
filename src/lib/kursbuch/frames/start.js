// TEMA: lo de la primera clase.
//
// Ocho reglas que no estaban en ninguna de las 91 del libro y que son de las
// primeras que te explican: que todos los sustantivos van en mayúscula, cuándo
// se tutea y cuándo se trata de usted, que los números se dicen al revés, que
// "ei" e "ie" no suenan como parecen, los tres artículos, las terminaciones
// del verbo, el adjetivo detrás de "sein" y los tres moldes de frase.
//
// Las cuatro últimas son el esqueleto: el libro las da por sabidas y las
// desarrolla en las Lektionen (el artículo en la 3, el presente en la 1, la
// posición del verbo en la 5). Aquí está el mapa, no el detalle.
//
// Lo de "ei / ie" no es gramática, es ortografía y pronunciación. Va aquí
// igual: es de lo primero que hace falta y de lo que más se falla al escribir,
// y sin ella la Start no tenía nada en Grammatik.

export const START = {
  // ---------- Todos los sustantivos, con mayúscula ----------
  grossschreibung: {
    picks: [
      { s: 'In „der hund schläft“ muss ___ groß sein.', a: 'Hund', d: ['schläft', 'der'], t: 'En «der hund schläft», Hund va en mayúscula.', e: 'Hund es el sustantivo. El artículo y el verbo van en minúscula.' },
      { s: 'In „ich lerne deutsch“ muss ___ groß sein.', a: 'Deutsch', d: ['lerne', 'ich'], t: 'En «ich lerne deutsch», Deutsch va en mayúscula.', e: 'El nombre del idioma es un sustantivo. Ojo: "ich" NO se escribe con mayúscula.' },
      { s: 'In „das buch ist interessant“ muss ___ groß sein.', a: 'Buch', d: ['interessant', 'ist'], t: 'En esa frase, Buch va en mayúscula.', e: 'Buch es sustantivo; interessant es adjetivo y va en minúscula.' },
      { s: 'In „meine mutter wohnt in graz“ müssen ___ groß sein.', a: 'Mutter und Graz', d: ['wohnt und in', 'meine und wohnt'], t: 'Mutter y Graz van en mayúscula.', e: 'El sustantivo y el nombre propio. El posesivo y el verbo, no.' },
      { s: 'Welches Wort ist FALSCH geschrieben? ___', a: 'zeit', d: ['Wetter', 'Kaffee'], t: '¿Cuál está mal escrita?', e: 'die Zeit es un sustantivo: va con mayúscula.' },
      { s: 'Welches dieser Wörter ist falsch geschrieben? ___', a: 'Müde', d: ['Wohnung', 'Bruder'], t: '¿Cuál está mal escrita?', e: '"müde" es un adjetivo: en minúscula.' },
      { s: 'Welches Wort ist hier FALSCH geschrieben? ___', a: 'Spricht', d: ['Lehrerin', 'Garten'], t: '¿Cuál está mal escrita?', e: '"spricht" es un verbo: en minúscula.' },
      { s: 'Wie viele Wörter sind in „Der Hund trinkt Wasser“ groß? ___', a: 'drei', d: ['zwei', 'eins'], t: '¿Cuántas palabras van en mayúscula?', e: 'Der (por abrir la frase), Hund y Wasser (sustantivos). "trinkt" es el verbo.' },
      { s: 'In „ich trinke kaffee mit milch“ müssen ___ groß sein.', a: 'Kaffee und Milch', d: ['trinke und mit', 'ich und mit'], t: 'Kaffee y Milch van en mayúscula.', e: 'Los dos son sustantivos. "mit" es preposición.' },
      { s: 'In „wir haben heute keine zeit“ muss ___ groß sein.', a: 'Zeit', d: ['heute', 'keine'], t: 'Zeit va en mayúscula.', e: 'Solo el sustantivo. "heute" es un adverbio.' },
      { s: 'In „das wetter ist schön“ muss ___ groß sein.', a: 'Wetter', d: ['schön', 'ist'], t: 'Wetter va en mayúscula.', e: 'Wetter es sustantivo; schön es adjetivo.' },
      { s: 'In „mein bruder sucht eine wohnung“ müssen ___ groß sein.', a: 'Bruder und Wohnung', d: ['sucht und eine', 'mein und sucht'], t: 'Bruder y Wohnung van en mayúscula.', e: 'Los dos sustantivos. El posesivo y el artículo, en minúscula.' }
    ],
    orders: [
      { sol: ['Der', 'Hund', 'schläft', 'im', 'Garten'], t: 'El perro duerme en el jardín.', e: 'Hund y Garten con mayúscula; schläft, en minúscula.' },
      { sol: ['Ich', 'lerne', 'Deutsch', 'in', 'Wien'], t: 'Estudio alemán en Viena.', e: 'Deutsch y Wien, mayúscula; el verbo no.' },
      { sol: ['Das', 'Buch', 'ist', 'sehr', 'interessant'], t: 'El libro es muy interesante.', e: 'Buch sí, interessant no.' }
    ]
  },

  // ---------- du o Sie ----------
  'du-oder-sie': {
    picks: [
      { s: 'Zu einem Kind: Wie heißt ___?', a: 'du', d: ['Sie', 'ihr'], t: 'A un niño: ¿cómo te llamas?', e: 'A los niños siempre se les tutea.' },
      { s: 'Zu einer fremden Frau: Wie heißen ___?', a: 'Sie', d: ['du', 'ihr'], t: 'A una desconocida: ¿cómo se llama usted?', e: 'Con desconocidos, "Sie" — y con mayúscula siempre.' },
      { s: 'Zu einem Freund: Woher kommst ___?', a: 'du', d: ['Sie', 'ihr'], t: 'A un amigo: ¿de dónde eres?', e: 'Entre amigos, "du".' },
      { s: 'Im Amt: Können ___ mir bitte helfen?', a: 'Sie', d: ['du', 'ihr'], t: 'En una oficina: ¿puede ayudarme, por favor?', e: 'En una ventanilla, "Sie".' },
      { s: 'Zu zwei Freunden: Wo wohnt ___?', a: 'ihr', d: ['du', 'Sie'], t: 'A dos amigos: ¿dónde vivís?', e: '"ihr" es el plural de "du": a varios conocidos.' },
      { s: 'Der Kollege sagt: "Wir sagen ___", also duzen wir uns.', a: 'du', d: ['Sie', 'ihr'], t: 'El compañero dice: «nos tuteamos».', e: 'Cuando alguien te ofrece el "du", se acepta y ya está.' },
      { s: 'Herr Gruber, ___ Sie bitte hier.', a: 'warten', d: ['wartest', 'wartet'], t: 'Señor Gruber, espere aquí por favor.', e: 'Con "Sie" el verbo va en -en, igual que en plural.' },
      { s: 'Anna, ___ du heute Zeit?', a: 'hast', d: ['haben', 'habt'], t: 'Anna, ¿tienes tiempo hoy?', e: 'Con "du", el verbo lleva -st.' },
      { s: 'In Österreich grüßt man formell mit ___.', a: 'Grüß Gott', d: ['Servus', 'Hallo'], t: 'En Austria el saludo formal es «Grüß Gott».', e: '"Servus" y "Hallo" son informales.' },
      { s: 'Zu deiner Chefin: ___ Sie einen Moment Zeit?', a: 'Haben', d: ['Hast', 'Habt'], t: 'A tu jefa: ¿tiene usted un momento?', e: 'Con la jefa, "Sie" mientras no te diga lo contrario.' },
      { s: 'Welche Form schreibt man immer groß? ___', a: 'Sie (formal)', d: ['du', 'ihr'], t: '¿Cuál se escribe siempre con mayúscula?', e: 'El "Sie" de usted, siempre. Así se distingue de "sie" = ella / ellos.' },
      { s: 'Zu einem Kellner: Ich ___ bitte einen Kaffee.', a: 'hätte', d: ['habe', 'hast'], t: 'A un camarero: querría un café, por favor.', e: '"Ich hätte gern" es la fórmula educada para pedir.' }
    ],
    orders: [
      { sol: ['Wie', 'heißen', 'Sie,', 'bitte?'], t: '¿Cómo se llama usted, por favor?', e: 'Sie + verbo en -en.' },
      { sol: ['Woher', 'kommst', 'du?'], t: '¿De dónde eres?', e: 'du + verbo en -st.' },
      { sol: ['Haben', 'Sie', 'einen', 'Moment', 'Zeit?'], t: '¿Tiene usted un momento?', e: 'Pregunta de sí/no: el verbo, primero.' }
    ],
    clozes: [
      { txt: 'Im Kurs sagen wir „___“: Wie heißt ___? Aber zur Lehrerin sagen wir „___“: Woher kommen ___?', a: ['du', 'du', 'Sie', 'Sie'], extra: ['euch', 'dir', 'Ihnen'], t: 'En clase nos tuteamos: ¿cómo te llamas? Pero a la profesora la tratamos de usted: ¿de dónde es usted?', e: '"du" entre compañeros y "Sie" con quien no tienes confianza. "Sie" siempre con mayúscula.' }
    ]
  },

  // ---------- Los números, al revés ----------
  'zahlen-rueckwaerts': {
    picks: [
      { s: '21 = ___', a: 'einundzwanzig', d: ['zwanzigeins', 'zwanzigundeins'], t: 'veintiuno', e: 'Primero la unidad, luego "und", luego la decena: uno-y-veinte.' },
      { s: '34 = ___', a: 'vierunddreißig', d: ['dreißigundvier', 'dreiundvierzig'], t: 'treinta y cuatro', e: 'cuatro-y-treinta. Ojo con dreiundvierzig, que es 43.' },
      { s: '57 = ___', a: 'siebenundfünfzig', d: ['fünfundsiebzig', 'fünfzigsieben'], t: 'cincuenta y siete', e: 'siete-y-cincuenta. fünfundsiebzig sería 75.' },
      { s: '99 = ___', a: 'neunundneunzig', d: ['neunzigneun', 'neunzehnneun'], t: 'noventa y nueve', e: 'nueve-y-noventa.' },
      { s: '42 = ___', a: 'zweiundvierzig', d: ['vierundzwanzig', 'vierzigzwei'], t: 'cuarenta y dos', e: 'dos-y-cuarenta. vierundzwanzig es 24.' },
      { s: 'Ich bin ___ Jahre alt. (26)', a: 'sechsundzwanzig', d: ['zwanzigsechs', 'sechzigzwei'], t: 'Tengo 26 años.', e: 'seis-y-veinte.' },
      { s: 'Der Bus kommt um ___ nach acht. (8:25)', a: 'fünfundzwanzig', d: ['zwanzigfünf', 'fünfzwanzig'], t: 'El autobús llega a las ocho y veinticinco.', e: 'cinco-y-veinte.' },
      { s: '100 = ___', a: 'hundert', d: ['einhundertzig', 'zehnzig'], t: 'cien', e: 'Aquí no hay vuelta: hundert, sin más.' },
      { s: '13 = ___', a: 'dreizehn', d: ['dreiundzehn', 'zehndrei'], t: 'trece', e: 'Del 13 al 19 no se usa "und": unidad + zehn.' },
      { s: 'Meine Nummer endet auf ___. (67)', a: 'siebenundsechzig', d: ['sechsundsiebzig', 'sechzigsieben'], t: 'Mi número acaba en 67.', e: 'siete-y-sesenta. Cuidado: sechsundsiebzig es 76.' },
      { s: '16 = ___', a: 'sechzehn', d: ['sechsundzehn', 'sechszehn'], t: 'dieciséis', e: 'sechzehn pierde la -s de sechs.' },
      { s: '70 = ___', a: 'siebzig', d: ['siebenzig', 'siebenundzig'], t: 'setenta', e: 'siebzig también se come la -en de sieben.' }
    ],
    orders: [
      { sol: ['Ich', 'bin', 'einunddreißig', 'Jahre', 'alt'], t: 'Tengo treinta y un años.', e: 'uno-y-treinta, todo junto en una palabra.' },
      { sol: ['Meine', 'Nummer', 'ist', 'vierundsechzig'], t: 'Mi número es el sesenta y cuatro.', e: 'cuatro-y-sesenta.' },
      { sol: ['Das', 'kostet', 'zweiundzwanzig', 'Euro'], t: 'Eso cuesta veintidós euros.', e: 'dos-y-veinte.' }
    ]
  },

  // ---------- ei y ie ----------
  'ei-oder-ie': {
    picks: [
      { s: 'Welches Wort klingt wie „ai“? ___', a: 'Wein', d: ['Wien', 'Bier'], t: '¿Qué palabra suena «ain»?', e: '"ei" se lee AI: Wein suena «vain».' },
      { s: 'Welches Wort klingt wie ein langes „i“? ___', a: 'Bier', d: ['Bein', 'mein'], t: '¿Qué palabra suena con «i» larga?', e: '"ie" se lee I larga: Bier suena «bir».' },
      { s: 'Die Hauptstadt von Österreich: ___', a: 'Wien', d: ['Wein', 'Wenn'], t: 'La capital de Austria.', e: 'Wien se dice «vin»; Wein, «vain». Una letra y otra ciudad.' },
      { s: 'Ich trinke ein Glas ___.', a: 'Wein', d: ['Wien', 'Win'], t: 'Me bebo una copa de vino.', e: 'der Wein, con ei.' },
      { s: 'Wie ___ Sie? — Ich heiße Ahmet.', a: 'heißen', d: ['hießen', 'hiesen'], t: '¿Cómo se llama? — Me llamo Ahmet.', e: 'heißen lleva ei.' },
      { s: 'Das ist ___ Buch.', a: 'mein', d: ['mien', 'min'], t: 'Ese es mi libro.', e: 'mein, con ei.' },
      { s: 'Er hat ___ Zeit.', a: 'keine', d: ['kiene', 'kene'], t: 'No tiene tiempo.', e: 'keine, con ei.' },
      { s: 'Wir ___ in Wien.', a: 'sind', d: ['siend', 'seind'], t: 'Estamos en Viena.', e: 'sind, sin ei ni ie.' },
      { s: 'Sie ___ gern Musik.', a: 'hört', d: ['hiert', 'heirt'], t: 'Le gusta escuchar música.', e: 'Ni ei ni ie: hören lleva ö.' },
      { s: 'Ich ___ dich morgen an.', a: 'rufe', d: ['riefe', 'reife'], t: 'Te llamo mañana.', e: 'rufen en presente: rufe. "rief" es pasado.' },
      { s: 'Das Zimmer ist ___.', a: 'klein', d: ['kliein', 'klien'], t: 'La habitación es pequeña.', e: 'klein, con ei.' },
      { s: 'Wie ___ kostet das?', a: 'viel', d: ['veil', 'vil'], t: '¿Cuánto cuesta eso?', e: 'viel, con ie, se lee «fil».' }
    ],
    orders: [
      { sol: ['Ich', 'trinke', 'gern', 'Bier'], t: 'Me gusta la cerveza.', e: 'Bier con ie: «bir».' },
      { sol: ['Mein', 'Freund', 'wohnt', 'in', 'Wien'], t: 'Mi amigo vive en Viena.', e: 'Mein con ei, Wien con ie.' },
      { sol: ['Wie', 'heißen', 'Sie?'], t: '¿Cómo se llama usted?', e: 'Wie con ie, heißen con ei.' }
    ]
  },
  // ---------- Los tres artículos ----------
  'artikel-drei': {
    picks: [
      { s: '___ Tisch ist neu.', a: 'Der', d: ['Die', 'Das'], t: 'La mesa es nueva.', e: 'der Tisch: masculino. El género alemán no es el español — en español "mesa" es femenino.' },
      { s: '___ Auto ist alt.', a: 'Das', d: ['Der', 'Die'], t: 'El coche es viejo.', e: 'das Auto: neutro. El neutro no existe en español, hay que aprenderlo con la palabra.' },
      { s: '___ Tür ist offen.', a: 'Die', d: ['Der', 'Das'], t: 'La puerta está abierta.', e: 'die Tür: femenino.' },
      { s: 'Plural: der Tisch → ___ Tische', a: 'die', d: ['der', 'das'], t: 'la mesa → las mesas', e: 'En plural el artículo es SIEMPRE "die", venga del género que venga.' },
      { s: 'Plural: das Kind → ___ Kinder', a: 'die', d: ['das', 'der'], t: 'el niño → los niños', e: 'Otra vez "die": en plural no hay tres géneros, solo uno.' },
      { s: 'Wie viele Artikel gibt es im Singular? ___', a: 'drei', d: ['zwei', 'vier'], t: '¿Cuántos artículos hay en singular?', e: 'der, die, das. En plural solo queda "die".' },
      { s: '___ Buch liegt auf dem Tisch.', a: 'Das', d: ['Der', 'Die'], t: 'El libro está sobre la mesa.', e: 'das Buch, neutro — aunque en español sea masculino.' },
      { s: '___ Milch ist kalt.', a: 'Die', d: ['Der', 'Das'], t: 'La leche está fría.', e: 'die Milch, femenino.' },
      { s: 'Wie lernt man das Genus am besten? ___', a: 'mit dem Wort zusammen', d: ['mit der Übersetzung', 'gar nicht'], t: '¿Cuál es la mejor forma de aprender el género?', e: 'Nunca "Tisch" a secas: siempre "der Tisch". Con el color de la app se queda antes.' },
      { s: '___ Fenster ist geschlossen.', a: 'Das', d: ['Der', 'Die'], t: 'La ventana está cerrada.', e: 'das Fenster, neutro.' },
      { s: 'Plural: die Frau → ___ Frauen', a: 'die', d: ['der', 'das'], t: 'la mujer → las mujeres', e: 'El femenino ya era "die" y en plural sigue igual.' },
      { s: 'Welcher Artikel ist im Plural richtig? ___', a: 'die Männer', d: ['der Männer', 'das Männer'], t: '¿Qué artículo de plural es el correcto?', e: 'der Mann en singular, die Männer en plural.' }
    ],
    orders: [
      { sol: ['Der', 'Tisch', 'ist', 'neu'], t: 'La mesa es nueva.', e: 'der Tisch, masculino.' },
      { sol: ['Das', 'Auto', 'ist', 'sehr', 'alt'], t: 'El coche es muy viejo.', e: 'das Auto, neutro.' },
      { sol: ['Die', 'Kinder', 'sind', 'im', 'Garten'], t: 'Los niños están en el jardín.', e: 'Plural: "die" y el verbo en plural.' }
    ],
    clozes: [
      { txt: 'Das ist ___ Tisch, das ist ___ Tür und das ist ___ Fenster. ___ Buch dort ist auch neu.', a: ['der', 'die', 'das', 'Das'], extra: ['dem', 'den', 'des'], t: 'Esta es la mesa, esa es la puerta y esa es la ventana. El libro de ahí también es nuevo.', e: 'Los tres géneros seguidos, y el cuarto repite el neutro al principio de la frase.' }
    ]
  },

  // ---------- El verbo: infinitivo y terminaciones ----------
  'verb-endungen': {
    picks: [
      { s: 'Der Infinitiv endet fast immer auf ___.', a: '-en', d: ['-er', '-e'], t: 'El infinitivo casi siempre acaba en «-en».', e: 'wohnen, lernen, machen. Es la forma del diccionario.' },
      { s: 'ich ___ in Wien.', a: 'wohne', d: ['wohnst', 'wohnt'], t: 'Vivo en Viena.', e: 'Con "ich", la terminación es -e.' },
      { s: 'du ___ Deutsch.', a: 'lernst', d: ['lerne', 'lernen'], t: 'Aprendes alemán.', e: 'Con "du", -st.' },
      { s: 'er ___ viel.', a: 'arbeitet', d: ['arbeite', 'arbeiten'], t: 'Él trabaja mucho.', e: 'Con er/sie/es, -t (aquí con -e- de apoyo porque la raíz acaba en -t).' },
      { s: 'wir ___ Musik.', a: 'hören', d: ['hörst', 'hört'], t: 'Escuchamos música.', e: 'Con "wir", la terminación es -en, igual que el infinitivo.' },
      { s: 'ihr ___ zu viel.', a: 'spielt', d: ['spielen', 'spiele'], t: 'Jugáis demasiado.', e: 'Con "ihr", -t.' },
      { s: 'Der Wortstamm von „machen“ ist ___.', a: 'mach-', d: ['machen-', 'mache-'], t: 'La raíz de «machen» es «mach-».', e: 'Se le quita el -en al infinitivo y a esa raíz se le pegan las terminaciones.' },
      { s: 'Kann man das Pronomen weglassen? ___', a: 'nein, nie', d: ['ja, immer', 'ja, bei ich'], t: '¿Se puede quitar el pronombre?', e: 'En español dices "vivo en Viena"; en alemán el "ich" es obligatorio.' },
      { s: 'sie (Plural) ___ aus Spanien.', a: 'kommen', d: ['kommt', 'komme'], t: 'Ellos son de España.', e: 'sie en plural lleva -en, igual que "wir" y que el "Sie" de usted.' },
      { s: 'Welche Endung passt zu „du“? ___', a: '-st', d: ['-t', '-en'], t: '¿Qué terminación va con «du»?', e: 'du wohnst, du lernst, du machst.' },
      { s: 'Sie (formal) ___ sehr gut Deutsch.', a: 'sprechen', d: ['sprichst', 'spricht'], t: 'Usted habla muy bien alemán.', e: 'El "Sie" de usted lleva -en, como el plural.' },
      { s: 'Welche zwei Formen sind immer gleich? ___', a: 'wir und sie/Sie', d: ['ich und du', 'du und ihr'], t: '¿Qué dos formas son siempre iguales?', e: 'wir wohnen / sie wohnen: las dos en -en, como el infinitivo.' }
    ],
    orders: [
      { sol: ['Ich', 'lerne', 'jeden', 'Tag', 'Deutsch'], t: 'Estudio alemán todos los días.', e: 'ich + raíz + -e. El pronombre no se quita.' },
      { sol: ['Wir', 'wohnen', 'in', 'Wien'], t: 'Vivimos en Viena.', e: 'wir + -en.' },
      { sol: ['Du', 'machst', 'das', 'sehr', 'gut'], t: 'Lo haces muy bien.', e: 'du + -st.' }
    ],
    clozes: [
      { txt: 'Ich ___ Álvaro und ___ aus Spanien. Meine Frau ___ Lena, sie ___ aus Polen. Wir ___ jetzt in Wien und ___ Deutsch.', a: ['heiße', 'komme', 'heißt', 'kommt', 'wohnen', 'lernen'], extra: ['heißen', 'kommen', 'lernt'], t: 'Me llamo Álvaro y soy de España. Mi mujer se llama Lena, es de Polonia. Ahora vivimos en Viena y aprendemos alemán.', e: 'Las terminaciones cambian con la persona: ich -e, er/sie -t, wir -en. Seis verbos seguidos para verlo de golpe.' }
    ]
  },

  // ---------- El adjetivo detrás de sein ----------
  'adjektiv-nach-sein': {
    picks: [
      { s: 'Das Auto ist ___.', a: 'neu', d: ['neue', 'neues'], t: 'El coche es nuevo.', e: 'Detrás de "sein" el adjetivo no cambia nunca.' },
      { s: 'Die Wohnung ist ___.', a: 'schön', d: ['schöne', 'schönes'], t: 'El piso es bonito.', e: 'Femenino, pero el adjetivo sigue igual: schön.' },
      { s: 'Die Kinder sind ___.', a: 'müde', d: ['müden', 'müdes'], t: 'Los niños están cansados.', e: 'Plural y tampoco cambia. En español dirías "cansados"; aquí no.' },
      { s: 'Wie viele Formen hat das Adjektiv nach „sein“? ___', a: 'eine', d: ['zwei', 'vier'], t: '¿Cuántas formas tiene el adjetivo detrás de «sein»?', e: 'Una sola: la del diccionario, sin terminación.' },
      { s: 'Mein Bruder ist sehr ___.', a: 'nett', d: ['netter', 'nettes'], t: 'Mi hermano es muy simpático.', e: '"sehr" tampoco cambia nada.' },
      { s: 'Wann bekommt das Adjektiv eine Endung? ___', a: 'vor einem Nomen', d: ['nach sein', 'nie'], t: '¿Cuándo lleva terminación el adjetivo?', e: 'Solo delante del sustantivo: "ein neues Auto". Eso llega más adelante.' },
      { s: 'Der Kaffee ist ___.', a: 'heiß', d: ['heiße', 'heißer'], t: 'El café está caliente.', e: 'Masculino, pero el adjetivo va desnudo.' },
      { s: 'Welcher Satz ist richtig? ___', a: 'Die Tasche ist teuer.', d: ['Die Tasche ist teure.', 'Die Tasche ist teures.'], t: '¿Qué frase es la correcta?', e: 'Detrás de "ist" nunca hay terminación.' },
      { s: 'Das Zimmer wird ___.', a: 'kalt', d: ['kalte', 'kaltes'], t: 'La habitación se está quedando fría.', e: 'Con "werden" pasa lo mismo que con "sein".' },
      { s: 'Wir sind ___.', a: 'fertig', d: ['fertige', 'fertigen'], t: 'Hemos terminado.', e: 'Plural, adjetivo sin cambios.' },
      { s: 'Die Häuser sind ___.', a: 'alt', d: ['alte', 'alten'], t: 'Las casas son viejas.', e: 'Ni por el género ni por el plural cambia.' },
      { s: 'Wie sagt man „ella está cansada“? ___', a: 'Sie ist müde.', d: ['Sie ist müdea.', 'Sie ist müden.'], t: '¿Cómo se dice «ella está cansada»?', e: 'Sin marca de femenino: el adjetivo es el mismo para todos.' }
    ],
    orders: [
      { sol: ['Das', 'Auto', 'ist', 'neu'], t: 'El coche es nuevo.', e: 'Adjetivo sin terminación.' },
      { sol: ['Die', 'Kinder', 'sind', 'sehr', 'müde'], t: 'Los niños están muy cansados.', e: 'Ni en plural cambia.' },
      { sol: ['Meine', 'Wohnung', 'ist', 'klein', 'aber', 'schön'], t: 'Mi piso es pequeño pero bonito.', e: 'Dos adjetivos, los dos desnudos.' }
    ]
  },

  // ---------- Las tres formas de la frase ----------
  satzarten: {
    picks: [
      { s: 'In der Aussage steht das Verb auf Position ___.', a: 'zwei', d: ['eins', 'drei'], t: 'En una afirmación el verbo va en la posición dos.', e: 'Ich | wohne | in Wien. El verbo, siempre el segundo bloque.' },
      { s: 'In der Ja-/Nein-Frage steht das Verb auf Position ___.', a: 'eins', d: ['zwei', 'drei'], t: 'En una pregunta de sí o no el verbo va el primero.', e: 'Wohnst du in Wien? Empieza el verbo, sin "¿".' },
      { s: 'Welcher Satz ist eine Ja-/Nein-Frage? ___', a: 'Kommst du aus Spanien?', d: ['Woher kommst du?', 'Du kommst aus Spanien.'], t: '¿Cuál es una pregunta de sí o no?', e: 'El verbo abre la frase, así que se contesta ja o nein.' },
      { s: 'In der W-Frage steht das Verb ___.', a: 'nach dem W-Wort', d: ['am Ende', 'vor dem W-Wort'], t: 'En una pregunta con W el verbo va detrás de la palabra interrogativa.', e: 'Wo | wohnst | du? La W ocupa el primer sitio y el verbo sigue siendo el segundo.' },
      { s: 'Ordne: „heute – ich – arbeite“ als Aussage: ___', a: 'Heute arbeite ich.', d: ['Heute ich arbeite.', 'Ich heute arbeite.'], t: 'Ordena esas tres palabras como afirmación.', e: 'Si empiezas por otra cosa, el sujeto pasa detrás del verbo. El verbo no se mueve del segundo puesto.' },
      { s: 'Welcher Satz ist falsch? ___', a: 'Morgen ich komme.', d: ['Morgen komme ich.', 'Ich komme morgen.'], t: '¿Qué frase está mal?', e: 'Ahí el verbo queda tercero. En alemán eso no vale.' },
      { s: 'Wo steht das Subjekt in der Aussage? ___', a: 'neben dem Verb', d: ['immer am Anfang', 'am Ende'], t: '¿Dónde va el sujeto en una afirmación?', e: 'Pegado al verbo: delante si abre la frase, detrás si abre otra cosa.' },
      { s: '___ wohnst du? — In Graz.', a: 'Wo', d: ['Wohnst', 'Was'], t: '¿Dónde vives? — En Graz.', e: 'Pregunta con W: la W primero, el verbo después.' },
      { s: '___ du Deutsch? — Ja, ein bisschen.', a: 'Sprichst', d: ['Was sprichst', 'Du sprichst'], t: '¿Hablas alemán? — Sí, un poco.', e: 'Se contesta ja/nein, así que el verbo abre.' },
      { s: 'Wie viele Satzarten gibt es hier? ___', a: 'drei', d: ['zwei', 'vier'], t: '¿Cuántas formas de frase hay aquí?', e: 'Afirmación, pregunta con W y pregunta de sí o no.' },
      { s: 'Welcher Satz antwortet auf „Ja“? ___', a: 'Hast du Zeit?', d: ['Wann hast du Zeit?', 'Du hast Zeit.'], t: '¿A cuál se contesta con «sí»?', e: 'Verbo en primer lugar = pregunta cerrada.' },
      { s: 'Im Deutschen gibt es kein ___ wie im Englischen.', a: 'do', d: ['Verb', 'Subjekt'], t: 'En alemán no existe el «do» del inglés.', e: 'Para preguntar no se añade nada: se mueve el verbo y ya está.' }
    ],
    orders: [
      { sol: ['Ich', 'wohne', 'in', 'Wien'], t: 'Vivo en Viena.', e: 'Afirmación: el verbo, segundo.' },
      { sol: ['Woher', 'kommst', 'du?'], t: '¿De dónde eres?', e: 'Pregunta con W: W-Wort y detrás el verbo.' },
      { sol: ['Sprechen', 'Sie', 'Deutsch?'], t: '¿Habla usted alemán?', e: 'Pregunta de sí o no: el verbo abre la frase.' }
    ],
    clozes: [
      { txt: '___ heißt du? – Tom. ___ du aus Wien? – Nein, aus Linz. ___ bitte langsamer!', a: ['Wie', 'Kommst', 'Sprich'], extra: ['Was', 'Du kommst', 'Sprichst'], t: '¿Cómo te llamas? – Tom. ¿Eres de Viena? – No, de Linz. ¡Habla más despacio, por favor!', e: 'Los tres tipos de frase: la W-Frage empieza por la partícula, la de sí/no por el verbo, y el imperativo también por el verbo.' }
    ]
  }
};
