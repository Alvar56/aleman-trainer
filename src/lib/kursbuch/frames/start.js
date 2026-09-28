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
      { s: 'Welches Wort ist FALSCH geschrieben?', a: 'zeit', d: ['Wetter', 'Kaffee'], t: '¿Cuál está mal escrita?', e: 'die Zeit es un sustantivo: va con mayúscula.' },
      { s: 'Welches dieser Wörter ist falsch geschrieben?', a: 'Müde', d: ['Wohnung', 'Bruder'], t: '¿Cuál está mal escrita?', e: '"müde" es un adjetivo: en minúscula.' },
      { s: 'Welches Wort ist hier FALSCH geschrieben?', a: 'Spricht', d: ['Lehrerin', 'Garten'], t: '¿Cuál está mal escrita?', e: '"spricht" es un verbo: en minúscula.' },
      { s: 'Wie viele Wörter sind in „Der Hund trinkt Wasser“ groß?', a: 'drei', d: ['zwei', 'eins'], t: '¿Cuántas palabras van en mayúscula?', e: 'Der (por abrir la frase), Hund y Wasser (sustantivos). "trinkt" es el verbo.' },
      { s: 'In „ich trinke kaffee mit milch“ müssen ___ groß sein.', a: 'Kaffee und Milch', d: ['trinke und mit', 'ich und mit'], t: 'Kaffee y Milch van en mayúscula.', e: 'Los dos son sustantivos. "mit" es preposición.' },
      { s: 'In „wir haben heute keine zeit“ muss ___ groß sein.', a: 'Zeit', d: ['heute', 'keine'], t: 'Zeit va en mayúscula.', e: 'Solo el sustantivo. "heute" es un adverbio.' },
      { s: 'In „das wetter ist schön“ muss ___ groß sein.', a: 'Wetter', d: ['schön', 'ist'], t: 'Wetter va en mayúscula.', e: 'Wetter es sustantivo; schön es adjetivo.' },
      { s: 'In „mein bruder sucht eine wohnung“ müssen ___ groß sein.', a: 'Bruder und Wohnung', d: ['sucht und eine', 'mein und sucht'], t: 'Bruder y Wohnung van en mayúscula.', e: 'Los dos sustantivos. El posesivo y el artículo, en minúscula.' },
      { s: 'In „die kinder spielen im garten“ müssen ___ groß sein.', a: 'Kinder und Garten', d: ['Kinder', 'Garten'], t: 'En «die kinder spielen im garten» van en mayúscula «Kinder» y «Garten».', e: 'Los dos son sustantivos.' },
      { s: 'In „er fährt mit dem zug nach linz“ müssen ___ groß sein.', a: 'Zug und Linz', d: ['Zug', 'Linz'], t: 'En esa frase van en mayúscula «Zug» y «Linz».', e: 'Sustantivo y nombre de ciudad.' },
      { s: 'In „ich habe hunger“ muss ___ groß sein.', a: 'Hunger', d: ['ich', 'habe'], t: 'En «ich habe hunger» va en mayúscula «Hunger».', e: 'En alemán «ich» va en minúscula salvo al empezar.' },
      { s: 'Welches dieser drei Wörter ist FALSCH geschrieben?', a: 'Wohne', d: ['Wohnung', 'Wien'], t: 'La palabra mal escrita es «Wohne».', e: '«wohnen» es verbo: va en minúscula.' },
      { s: 'Wie viele Wörter sind in „Meine Schwester kauft Brot“ groß?', a: 'drei', d: ['zwei', 'vier'], t: 'En «Meine Schwester kauft Brot» hay tres palabras con mayúscula.', e: 'La primera y los dos sustantivos.' },
      { s: 'In „am montag gehe ich zum arzt“ müssen ___ groß sein.', a: 'Montag und Arzt', d: ['Montag', 'Arzt'], t: 'Ahí van en mayúscula «Montag» y «Arzt».', e: 'Los días de la semana también son sustantivos.' },
      { s: 'Und welches ist hier FALSCH geschrieben?', a: 'Trinken', d: ['Tee', 'Milch'], t: 'La mal escrita es «Trinken».', e: 'Verbo en infinitivo dentro de la frase: minúscula.' },
      { s: 'In „das essen schmeckt gut“ muss ___ groß sein.', a: 'Essen', d: ['schmeckt', 'gut'], t: 'En «das essen schmeckt gut» va en mayúscula «Essen».', e: 'Con «das» delante, «essen» es sustantivo.' }
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
      { s: 'Welche Form schreibt man immer groß?', a: 'Sie (formal)', d: ['du', 'ihr'], t: '¿Cuál se escribe siempre con mayúscula?', e: 'El "Sie" de usted, siempre. Así se distingue de "sie" = ella / ellos.' },
      { s: 'Zu einem Kellner: Ich ___ bitte einen Kaffee.', a: 'hätte', d: ['habe', 'hast'], t: 'A un camarero: querría un café, por favor.', e: '"Ich hätte gern" es la fórmula educada para pedir.' },
      { s: 'Zu deinem Nachbarn, den du gut kennst: ___ du kurz Zeit?', a: 'Hast', d: ['Haben', 'Habt'], t: 'A tu vecino de confianza: «Hast du kurz Zeit?».', e: 'Confianza → du.' },
      { s: 'Zu drei Kollegen: ___ ihr schon Mittag gegessen?', a: 'Habt', d: ['Hast', 'Haben'], t: 'A tres compañeros: «Habt ihr schon Mittag gegessen?».', e: 'Varios y de tú → ihr.' },
      { s: 'Am Telefon mit einer Behörde: ___ Sie mich bitte verbinden?', a: 'Können', d: ['Kannst', 'Könnt'], t: 'Por teléfono con la administración: «Können Sie mich bitte verbinden?».', e: 'Formal → Sie.' },
      { s: 'Zu einem Kind im Kindergarten: ___ du schon drei?', a: 'Bist', d: ['Sind', 'Seid'], t: 'A un niño de la guardería: «Bist du schon drei?».', e: 'A los niños siempre de tú.' },
      { s: 'Wie fragt man höflich nach dem Beruf?', a: 'Was machen Sie beruflich?', d: ['Was machst du beruflich?', 'Was macht ihr beruflich?'], t: 'La forma cortés es «Was machen Sie beruflich?».', e: 'Con desconocidos, Sie.' },
      { s: 'Deine Lehrerin sagt: „Wir können gern ___ sagen.“', a: 'du', d: ['Sie', 'ihr'], t: 'Tu profesora dice: «podemos tutearnos».', e: 'Ofrecer el tuteo: «du sagen».' },
      { s: 'Zu einer älteren Nachbarin, die du kaum kennst: ___ Sie gut geschlafen?', a: 'Haben', d: ['Hast', 'Habt'], t: 'A una vecina mayor a la que apenas conoces: «Haben Sie gut geschlafen?».', e: 'Poca confianza → Sie.' },
      { s: 'Was ist in Österreich im Lokal normal?', a: 'Sie zum Kellner', d: ['du zum Kellner', 'ihr zum Kellner'], t: 'En Austria, al camarero se le habla de usted.', e: 'Salvo en sitios muy jóvenes.' }
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
      { s: '70 = ___', a: 'siebzig', d: ['siebenzig', 'siebenundzig'], t: 'setenta', e: 'siebzig también se come la -en de sieben.' },
      { s: '38 = ___', a: 'achtunddreißig', d: ['dreiundachtzig', 'achtzehn'], t: '38 = achtunddreißig.', e: 'Primero la unidad, luego la decena.' },
      { s: '64 = ___', a: 'vierundsechzig', d: ['sechsundvierzig', 'vierzehn'], t: '64 = vierundsechzig.', e: 'vier + und + sechzig.' },
      { s: '83 = ___', a: 'dreiundachtzig', d: ['achtunddreißig', 'dreizehn'], t: '83 = dreiundachtzig.', e: 'Cuidado con 38 y 83: se dicen al revés.' },
      { s: 'Die Hausnummer ist ___. (45)', a: 'fünfundvierzig', d: ['vierundfünfzig', 'fünfzehn'], t: 'El número de la casa es el 45.', e: 'fünf + und + vierzig.' },
      { s: 'Mein Vater wird ___. (71)', a: 'einundsiebzig', d: ['siebenundzwanzig', 'siebzehn'], t: 'Mi padre cumple 71.', e: 'ein, sin -s, delante de und.' },
      { s: '12 = ___', a: 'zwölf', d: ['zweiundzehn', 'zwanzig'], t: '12 = zwölf.', e: 'Del 0 al 12 son palabras propias.' },
      { s: 'Die PLZ ist 1 0 ___ 0. (7)', a: 'sieben', d: ['siebzehn', 'siebzig'], t: 'El código postal es 1 0 7 0.', e: 'Los códigos se dicen cifra a cifra.' },
      { s: 'Warum sind deutsche Zahlen für uns schwer?', a: 'die Einer kommen zuerst', d: ['sie sind sehr lang', 'sie haben keine Regel'], t: 'Cuesta porque la unidad se dice antes que la decena.', e: 'einundzwanzig = uno-y-veinte.' }
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
      { s: 'Welches Wort klingt wie „ai“?', a: 'Wein', d: ['Wien', 'Bier'], t: '¿Qué palabra suena «ain»?', e: '"ei" se lee AI: Wein suena «vain».' },
      { s: 'Welches Wort klingt wie ein langes „i“?', a: 'Bier', d: ['Bein', 'mein'], t: '¿Qué palabra suena con «i» larga?', e: '"ie" se lee I larga: Bier suena «bir».' },
      { s: 'Die Hauptstadt von Österreich: ___', a: 'Wien', d: ['Wein', 'Wenn'], t: 'La capital de Austria.', e: 'Wien se dice «vin»; Wein, «vain». Una letra y otra ciudad.' },
      { s: 'Ich trinke ein Glas ___.', a: 'Wein', d: ['Wien', 'Win'], t: 'Me bebo una copa de vino.', e: 'der Wein, con ei.' },
      { s: 'Wie ___ Sie? — Ich heiße Ahmet.', a: 'heißen', d: ['hießen', 'hiesen'], t: '¿Cómo se llama? — Me llamo Ahmet.', e: 'heißen lleva ei.' },
      { s: 'Das ist ___ Buch.', a: 'mein', d: ['mien', 'min'], t: 'Ese es mi libro.', e: 'mein, con ei.' },
      { s: 'Er hat ___ Zeit.', a: 'keine', d: ['kiene', 'kene'], t: 'No tiene tiempo.', e: 'keine, con ei.' },
      { s: 'Wir ___ in Wien.', a: 'sind', d: ['siend', 'seind'], t: 'Estamos en Viena.', e: 'sind, sin ei ni ie.' },
      { s: 'Sie ___ gern Musik.', a: 'hört', d: ['hiert', 'heirt'], t: 'Le gusta escuchar música.', e: 'Ni ei ni ie: hören lleva ö.' },
      { s: 'Ich ___ dich morgen an.', a: 'rufe', d: ['riefe', 'reife'], t: 'Te llamo mañana.', e: 'rufen en presente: rufe. "rief" es pasado.' },
      { s: 'Das Zimmer ist ___.', a: 'klein', d: ['kliein', 'klien'], t: 'La habitación es pequeña.', e: 'klein, con ei.' },
      { s: 'Wie ___ kostet das?', a: 'viel', d: ['veil', 'vil'], t: '¿Cuánto cuesta eso?', e: 'viel, con ie, se lee «fil».' },
      { s: 'Welches dieser Wörter klingt wie „ai“?', a: 'Zeit', d: ['Liebe', 'Brief'], t: '«Zeit» suena «tsáit».', e: 'ei se lee ai.' },
      { s: 'Und welches klingt wie ein langes „i“?', a: 'Brief', d: ['Wein', 'Zeit'], t: '«Brief» lleva una i larga.', e: 'ie es i larga.' },
      { s: 'Ich schreibe dir einen ___.', a: 'Brief', d: ['Bein', 'Beil'], t: 'Te escribo una carta.', e: 'der Brief, con ie.' },
      { s: 'Wie ___ du? — Nuria.', a: 'heißt', d: ['hießt', 'hiest'], t: '¿Cómo te llamas? — Nuria.', e: 'heißen lleva ei.' },
      { s: 'Das Buch gefällt ___.', a: 'mir', d: ['mier', 'miehr'], t: 'El libro me gusta.', e: 'mir, sin e.' },
      { s: 'Ich ___ Deutsch seit zwei Jahren.', a: 'lerne', d: ['lierne', 'leirne'], t: 'Llevo dos años aprendiendo alemán.', e: 'lernen, sin ei ni ie.' },
      { s: '„Beine“ und „Biene“ klingen ___.', a: 'verschieden', d: ['gleich', 'fast gleich'], t: '«Beine» y «Biene» suenan distinto.', e: 'ai frente a i larga: cambia la palabra.' },
      { s: 'Wir ___ uns am Freitag.', a: 'sehen', d: ['siehen', 'seihen'], t: 'Nos vemos el viernes.', e: 'sehen, con e sola.' }
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
      { s: 'Wie viele Artikel gibt es im Singular?', a: 'drei', d: ['zwei', 'vier'], t: '¿Cuántos artículos hay en singular?', e: 'der, die, das. En plural solo queda "die".' },
      { s: '___ Buch liegt auf dem Tisch.', a: 'Das', d: ['Der', 'Die'], t: 'El libro está sobre la mesa.', e: 'das Buch, neutro — aunque en español sea masculino.' },
      { s: '___ Milch ist kalt.', a: 'Die', d: ['Der', 'Das'], t: 'La leche está fría.', e: 'die Milch, femenino.' },
      { s: 'Wie lernt man das Genus am besten?', a: 'mit dem Wort zusammen', d: ['mit der Übersetzung', 'gar nicht'], t: '¿Cuál es la mejor forma de aprender el género?', e: 'Nunca "Tisch" a secas: siempre "der Tisch". Con el color de la app se queda antes.' },
      { s: '___ Fenster ist geschlossen.', a: 'Das', d: ['Der', 'Die'], t: 'La ventana está cerrada.', e: 'das Fenster, neutro.' },
      { s: 'Plural: die Frau → ___ Frauen', a: 'die', d: ['der', 'das'], t: 'la mujer → las mujeres', e: 'El femenino ya era "die" y en plural sigue igual.' },
      { s: 'Welcher Artikel ist im Plural richtig?', a: 'die Männer', d: ['der Männer', 'das Männer'], t: '¿Qué artículo de plural es el correcto?', e: 'der Mann en singular, die Männer en plural.' },
      { s: '___ Stuhl steht am Fenster.', a: 'Der', d: ['Die', 'Das'], t: 'La silla está junto a la ventana.', e: 'der Stuhl, masculino.' },
      { s: '___ Lampe ist kaputt.', a: 'Die', d: ['Der', 'Das'], t: 'La lámpara está rota.', e: 'die Lampe, femenino.' },
      { s: '___ Zimmer ist klein.', a: 'Das', d: ['Der', 'Die'], t: 'La habitación es pequeña.', e: 'das Zimmer, neutro.' },
      { s: 'Plural: das Buch → ___ Bücher', a: 'die', d: ['der', 'das'], t: 'Plural: das Buch → die Bücher.', e: 'En plural todo es die.' },
      { s: 'Welche Wörter sind fast immer feminin?', a: 'die auf -ung', d: ['die auf -er', 'die auf -chen'], t: 'Casi siempre son femeninas las acabadas en -ung.', e: 'die Wohnung, die Zeitung, die Rechnung.' },
      { s: '___ Mädchen spielt draußen.', a: 'Das', d: ['Die', 'Der'], t: 'La niña juega fuera.', e: 'Todo lo acabado en -chen es neutro.' },
      { s: '___ Kaffee ist noch heiß.', a: 'Der', d: ['Die', 'Das'], t: 'El café todavía está caliente.', e: 'der Kaffee, masculino.' },
      { s: 'Wie steht ein Nomen am besten im Heft?', a: 'mit Artikel und Plural', d: ['nur das Wort', 'nur mit Artikel'], t: 'Lo mejor es apuntarlo con artículo y plural.', e: 'die Wohnung, -en.' },
      { s: 'Wie viele Geschlechter hat das deutsche Nomen?', a: 'drei', d: ['zwei', 'vier'], t: 'El sustantivo alemán tiene tres géneros.', e: 'Masculino, femenino y neutro.' },
      { s: 'Welcher Artikel steht im Plural, egal welches Geschlecht?', a: 'die', d: ['der', 'das'], t: 'En plural el artículo es siempre «die».', e: 'der Tisch → die Tische, das Kind → die Kinder.' },
      { s: 'Welche Endung ist fast immer feminin?', a: '-ung', d: ['-er', '-chen'], t: 'La terminación casi siempre femenina es «-ung».', e: 'die Wohnung, die Zeitung, die Rechnung.' },
      { s: 'Welche Endung ist immer neutrum?', a: '-chen', d: ['-ung', '-heit'], t: 'La terminación siempre neutra es «-chen».', e: 'das Mädchen, das Brötchen.' }
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
      { s: 'Kann man das Pronomen weglassen?', a: 'nein, nie', d: ['ja, immer', 'ja, bei ich'], t: '¿Se puede quitar el pronombre?', e: 'En español dices "vivo en Viena"; en alemán el "ich" es obligatorio.' },
      { s: 'sie (Plural) ___ aus Spanien.', a: 'kommen', d: ['kommt', 'komme'], t: 'Ellos son de España.', e: 'sie en plural lleva -en, igual que "wir" y que el "Sie" de usted.' },
      { s: 'Welche Endung passt zu „du“?', a: '-st', d: ['-t', '-en'], t: '¿Qué terminación va con «du»?', e: 'du wohnst, du lernst, du machst.' },
      { s: 'Sie (formal) ___ sehr gut Deutsch.', a: 'sprechen', d: ['sprichst', 'spricht'], t: 'Usted habla muy bien alemán.', e: 'El "Sie" de usted lleva -en, como el plural.' },
      { s: 'Welche zwei Formen sind immer gleich?', a: 'wir und sie/Sie', d: ['ich und du', 'du und ihr'], t: '¿Qué dos formas son siempre iguales?', e: 'wir wohnen / sie wohnen: las dos en -en, como el infinitivo.' },
      { s: 'ich ___ gern Fußball.', a: 'spiele', d: ['spielst', 'spielt'], t: 'Me gusta jugar al fútbol.', e: 'ich → -e.' },
      { s: 'du ___ sehr schnell.', a: 'sprichst', d: ['sprichtst', 'sprecht'], t: 'Hablas muy rápido.', e: 'du → -st (y sprechen cambia la e por i).' },
      { s: 'sie (Singular) ___ in einem Büro.', a: 'arbeitet', d: ['arbeitest', 'arbeiten'], t: 'Ella trabaja en una oficina.', e: 'Con raíz en -t se mete una e: arbeit-e-t.' },
      { s: 'wir ___ am Wochenende nach Graz.', a: 'fahren', d: ['fährt', 'fahrt'], t: 'El fin de semana vamos a Graz.', e: 'wir → como el infinitivo.' },
      { s: 'ihr ___ zu wenig Wasser.', a: 'trinkt', d: ['trinkst', 'trinken'], t: 'Bebéis poca agua.', e: 'ihr → -t.' },
      { s: 'Welche Endung passt zu „er“?', a: '-t', d: ['-st', '-en'], t: 'Con «er» la terminación es -t.', e: 'er/sie/es → -t.' },
      { s: 'Der Wortstamm von „arbeiten“ ist ___.', a: 'arbeit-', d: ['arbeite-', 'arbeiten-'], t: 'La raíz de «arbeiten» es «arbeit-».', e: 'Se quita el -en.' },
      { s: 'Warum braucht man das Pronomen?', a: 'die Endung reicht nicht immer', d: ['es klingt besser', 'es ist nur Gewohnheit'], t: 'Hace falta porque la terminación no siempre basta.', e: 'wir y sie/Sie acaban igual.' },
      { s: 'Welche Endung gehört zu „du“?', a: '-st', d: ['-e', '-t'], t: 'A «du» le corresponde la terminación «-st».', e: 'du lernst, du wohnst.' },
      { s: 'Welche zwei Formen haben im Präsens immer dieselbe Endung?', a: 'wir und sie/Sie', d: ['ich und er', 'du und ihr'], t: '«wir» y «sie/Sie» comparten siempre terminación.', e: 'Las dos van como el infinitivo.' },
      { s: 'Worauf endet der Infinitiv fast immer?', a: '-en', d: ['-st', '-t'], t: 'El infinitivo acaba casi siempre en «-en».', e: 'lernen, wohnen, arbeiten.' },
      { s: 'Warum sagt man „er arbeitet“ und nicht „er arbeitt“?', a: 'der Stamm endet auf -t', d: ['es ist unregelmäßig', 'es ist ein Modalverb'], t: 'Porque la raíz acaba en «-t» y se mete una «e».', e: 'arbeit- + -e- + -t.' }
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
      { s: 'Wie viele Formen hat das Adjektiv nach „sein“?', a: 'eine', d: ['zwei', 'vier'], t: '¿Cuántas formas tiene el adjetivo detrás de «sein»?', e: 'Una sola: la del diccionario, sin terminación.' },
      { s: 'Mein Bruder ist sehr ___.', a: 'nett', d: ['netter', 'nettes'], t: 'Mi hermano es muy simpático.', e: '"sehr" tampoco cambia nada.' },
      { s: 'Wann bekommt das Adjektiv eine Endung?', a: 'vor einem Nomen', d: ['nach sein', 'nie'], t: '¿Cuándo lleva terminación el adjetivo?', e: 'Solo delante del sustantivo: "ein neues Auto". Eso llega más adelante.' },
      { s: 'Der Kaffee ist ___.', a: 'heiß', d: ['heiße', 'heißer'], t: 'El café está caliente.', e: 'Masculino, pero el adjetivo va desnudo.' },
      { s: 'Welcher Satz ist richtig?', a: 'Die Tasche ist teuer.', d: ['Die Tasche ist teure.', 'Die Tasche ist teures.'], t: '¿Qué frase es la correcta?', e: 'Detrás de "ist" nunca hay terminación.' },
      { s: 'Das Zimmer wird ___.', a: 'kalt', d: ['kalte', 'kaltes'], t: 'La habitación se está quedando fría.', e: 'Con "werden" pasa lo mismo que con "sein".' },
      { s: 'Wir sind ___.', a: 'fertig', d: ['fertige', 'fertigen'], t: 'Hemos terminado.', e: 'Plural, adjetivo sin cambios.' },
      { s: 'Die Häuser sind ___.', a: 'alt', d: ['alte', 'alten'], t: 'Las casas son viejas.', e: 'Ni por el género ni por el plural cambia.' },
      { s: 'Wie sagt man „ella está cansada“?', a: 'Sie ist müde.', d: ['Sie ist müdea.', 'Sie ist müden.'], t: '¿Cómo se dice «ella está cansada»?', e: 'Sin marca de femenino: el adjetivo es el mismo para todos.' },
      { s: 'Die Suppe ist ___.', a: 'kalt', d: ['kalte', 'kalter'], t: 'La sopa está fría.', e: 'Detrás de sein, sin terminación.' },
      { s: 'Meine Schuhe sind ___.', a: 'neu', d: ['neue', 'neuen'], t: 'Mis zapatos son nuevos.', e: 'Ni en plural lleva terminación.' },
      { s: 'Der Film war ___.', a: 'langweilig', d: ['langweilige', 'langweiliger'], t: 'La película fue aburrida.', e: 'Con war pasa lo mismo que con ist.' },
      { s: 'Welcher dieser Sätze ist richtig?', a: 'Das Auto ist schnell.', d: ['Das Auto ist schnelles.', 'Das Auto ist schneller.'], t: 'Lo correcto es «Das Auto ist schnell.».', e: 'Detrás del verbo, la forma desnuda.' },
      { s: 'Aber: Das ist ein ___ Auto.', a: 'schnelles', d: ['schnell', 'schneller'], t: 'Pero: «Das ist ein schnelles Auto.».', e: 'Delante del nombre sí lleva terminación.' },
      { s: 'Die Kinder werden ___.', a: 'groß', d: ['große', 'großen'], t: 'Los niños se hacen mayores.', e: 'werden funciona como sein.' },
      { s: 'Deine Wohnung ist wirklich ___.', a: 'gemütlich', d: ['gemütliche', 'gemütlichen'], t: 'Tu piso es muy acogedor.', e: 'Sin terminación.' },
      { s: 'Wie sagt man „los niños están cansados“?', a: 'Die Kinder sind müde.', d: ['Die Kinder sind müden.', 'Die müden Kinder sind.'], t: 'Se dice «Die Kinder sind müde.».', e: 'müde se queda igual.' }
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
      { s: 'Welcher Satz ist eine Ja-/Nein-Frage?', a: 'Kommst du aus Spanien?', d: ['Woher kommst du?', 'Du kommst aus Spanien.'], t: '¿Cuál es una pregunta de sí o no?', e: 'El verbo abre la frase, así que se contesta ja o nein.' },
      { s: 'In der W-Frage steht das Verb ___.', a: 'nach dem W-Wort', d: ['am Ende', 'vor dem W-Wort'], t: 'En una pregunta con W el verbo va detrás de la palabra interrogativa.', e: 'Wo | wohnst | du? La W ocupa el primer sitio y el verbo sigue siendo el segundo.' },
      { s: 'Ordne: „heute – ich – arbeite“ als Aussage: ___', a: 'Heute arbeite ich.', d: ['Heute ich arbeite.', 'Ich heute arbeite.'], t: 'Ordena esas tres palabras como afirmación.', e: 'Si empiezas por otra cosa, el sujeto pasa detrás del verbo. El verbo no se mueve del segundo puesto.' },
      { s: 'Welcher Satz ist falsch?', a: 'Morgen ich komme.', d: ['Morgen komme ich.', 'Ich komme morgen.'], t: '¿Qué frase está mal?', e: 'Ahí el verbo queda tercero. En alemán eso no vale.' },
      { s: 'Wo steht das Subjekt in der Aussage?', a: 'neben dem Verb', d: ['immer am Anfang', 'am Ende'], t: '¿Dónde va el sujeto en una afirmación?', e: 'Pegado al verbo: delante si abre la frase, detrás si abre otra cosa.' },
      { s: '___ wohnst du? — In Graz.', a: 'Wo', d: ['Wohnst', 'Was'], t: '¿Dónde vives? — En Graz.', e: 'Pregunta con W: la W primero, el verbo después.' },
      { s: '___ du Deutsch? — Ja, ein bisschen.', a: 'Sprichst', d: ['Was sprichst', 'Du sprichst'], t: '¿Hablas alemán? — Sí, un poco.', e: 'Se contesta ja/nein, así que el verbo abre.' },
      { s: 'Wie viele Satzarten gibt es hier?', a: 'drei', d: ['zwei', 'vier'], t: '¿Cuántas formas de frase hay aquí?', e: 'Afirmación, pregunta con W y pregunta de sí o no.' },
      { s: 'Welcher Satz antwortet auf „Ja“?', a: 'Hast du Zeit?', d: ['Wann hast du Zeit?', 'Du hast Zeit.'], t: '¿A cuál se contesta con «sí»?', e: 'Verbo en primer lugar = pregunta cerrada.' },
      { s: 'Im Deutschen gibt es kein ___ wie im Englischen.', a: 'do', d: ['Verb', 'Subjekt'], t: 'En alemán no existe el «do» del inglés.', e: 'Para preguntar no se añade nada: se mueve el verbo y ya está.' },
      { s: '___ kommt der Bus? — Um zehn.', a: 'Wann', d: ['Kommt', 'Der'], t: '¿Cuándo viene el autobús? — A las diez.', e: 'Pregunta con W: el W-Wort primero.' },
      { s: '___ ihr heute Zeit? — Ja.', a: 'Habt', d: ['Wann', 'Wo'], t: '¿Tenéis tiempo hoy? — Sí.', e: 'Pregunta de sí/no: el verbo primero.' },
      { s: 'Ordne: „morgen – wir – gehen“ als Aussage: ___', a: 'Morgen gehen wir.', d: ['Morgen wir gehen.', 'Wir morgen gehen.'], t: 'Ordenado: «Morgen gehen wir.».', e: 'El verbo se queda en la posición dos.' },
      { s: 'Welcher Satz ist eine W-Frage?', a: 'Woher kommst du?', d: ['Kommst du aus Wien?', 'Du kommst aus Wien.'], t: 'La pregunta con W es «Woher kommst du?».', e: 'Empieza por una palabra interrogativa.' },
      { s: 'Welcher dieser Sätze ist falsch?', a: 'Wo du wohnst?', d: ['Wo wohnst du?', 'Du wohnst in Wien.'], t: 'El incorrecto es «Wo du wohnst?».', e: 'En la pregunta el verbo va detrás del W-Wort.' },
      { s: 'Was steht in der Aussage auf Position eins?', a: 'was du betonen willst', d: ['immer das Subjekt', 'immer das Verb'], t: 'En la afirmación en la posición uno va lo que quieres destacar.', e: 'Sujeto, tiempo, lugar… pero solo uno.' },
      { s: '___ Sie mir bitte helfen?', a: 'Können', d: ['Wann', 'Wo'], t: '¿Me puede ayudar, por favor?', e: 'Sí/no: verbo en la posición uno.' },
      { s: 'Wie heißt „¿dónde trabajas?“ auf Deutsch?', a: 'Wo arbeitest du?', d: ['Wo du arbeitest?', 'Arbeitest du wo?'], t: 'Se dice «Wo arbeitest du?».', e: 'W-Wort, verbo, sujeto.' },
      { s: 'An welcher Stelle steht das Verb in der Aussage?', a: 'an zweiter', d: ['an erster', 'am Ende'], t: 'En la afirmación el verbo va en segunda posición.', e: 'Es la regla que ordena toda la frase alemana.' },
      { s: 'An welcher Stelle steht das Verb in der Ja-/Nein-Frage?', a: 'an erster', d: ['an zweiter', 'am Ende'], t: 'En la pregunta de sí/no el verbo va el primero.', e: 'Kommst du? Hast du Zeit?' },
      { s: 'Was steht in der W-Frage vor dem Verb?', a: 'das W-Wort', d: ['das Subjekt', 'nichts'], t: 'En la pregunta con W, delante del verbo va la palabra interrogativa.', e: 'Wo wohnst du?' },
      { s: 'Was gibt es im Deutschen NICHT, anders als im Englischen?', a: 'das Hilfsverb „do“', d: ['die Verneinung', 'die W-Fragen'], t: 'En alemán no existe el auxiliar «do» del inglés.', e: 'Se pregunta moviendo el verbo, no añadiendo nada.' }
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
