// TEMA: sustantivos, adjetivos y comparación.
// Plural, palabras compuestas, formación de palabras (-in, un-, -los), "als"
// para profesiones, adjetivos de tiempo (letzt-/nächst-), comparativo y
// superlativo, y los números ordinales para la fecha.

export const NOMBRES = {
  // ---------- A1.1 L3: femenino con -in ----------
  'wortbildung-in': {
    picks: [
      { s: 'Herr Weber ist Lehrer und Frau Berger ist ___.', a: 'Lehrerin', d: ['Lehrerinnen', 'Lehrer'], t: 'El señor Weber es profesor y la señora Berger es profesora.', e: 'El femenino de las profesiones se forma con -in.' },
      { s: 'Sie arbeitet als ___ in einem Restaurant.', a: 'Kellnerin', d: ['Kellner', 'Kellnerinnen'], t: 'Trabaja de camarera en un restaurante.', e: 'Kellner → Kellnerin.' },
      { s: 'Meine Mutter ist ___ von Beruf.', a: 'Ärztin', d: ['Arzt', 'Ärztinnen'], t: 'Mi madre es médica de profesión.', e: 'Arzt → Ärztin (con Umlaut).' },
      { s: 'Frau Huber ist ___ bei einer Bank.', a: 'Angestellte', d: ['Angestellter', 'Angestellten'], t: 'La señora Huber es empleada en un banco.', e: 'Aquí el femenino no usa -in: die Angestellte.' },
      { s: 'Er ist Koch und sie ist ___.', a: 'Köchin', d: ['Koch', 'Kochin'], t: 'Él es cocinero y ella cocinera.', e: 'Koch → Köchin (con Umlaut).' },
      { s: 'Meine Schwester ist ___.', a: 'Studentin', d: ['Student', 'Studentinnen'], t: 'Mi hermana es estudiante.', e: 'Student → Studentin.' },
      { s: 'Sie ist ___ in einem Kindergarten.', a: 'Erzieherin', d: ['Erzieher', 'Erzieherinnen'], t: 'Es educadora en una guardería.', e: 'Erzieher → Erzieherin.' },
      { s: 'Frau Klein ist ___ von Beruf.', a: 'Verkäuferin', d: ['Verkäufer', 'Verkäuferinnen'], t: 'La señora Klein es vendedora.', e: 'Verkäufer → Verkäuferin.' },
      { s: 'Mein Vater ist ___.', a: 'Techniker', d: ['Technikerin', 'Technikerinnen'], t: 'Mi padre es técnico.', e: 'En masculino no se añade -in.' },
      { s: 'Sie möchte ___ werden.', a: 'Krankenschwester', d: ['Krankenpfleger', 'Krankenschwestern'], t: 'Quiere ser enfermera.', e: 'Esta profesión tiene palabra propia en femenino.' },
      { s: 'Die ___ heißt Frau Maier.', a: 'Chefin', d: ['Chef', 'Chefinnen'], t: 'La jefa se llama señora Maier.', e: 'Chef → Chefin.' },
      { s: 'Er arbeitet als ___ bei der Post.', a: 'Briefträger', d: ['Briefträgerin', 'Briefträgerinnen'], t: 'Trabaja de cartero en correos.', e: 'Masculino sin -in.' }
    ],
    orders: [
      { sol: ['Frau', 'Berger', 'ist', 'Lehrerin', 'von', 'Beruf'], t: 'La señora Berger es profesora de profesión.', e: 'La profesión va sin artículo.' },
      { sol: ['Meine', 'Mutter', 'ist', 'Ärztin'], t: 'Mi madre es médica.', e: 'Arzt → Ärztin.' },
      { sol: ['Sie', 'arbeitet', 'als', 'Kellnerin', 'in', 'einem', 'Café'], t: 'Trabaja de camarera en una cafetería.', e: 'als + profesión sin artículo.' },
      { sol: ['Er', 'ist', 'Koch', 'und', 'sie', 'ist', 'Köchin'], t: 'Él es cocinero y ella cocinera.', e: 'Koch / Köchin.' }
    ]
  },

  // ---------- A1.1 L3: als + profesión ----------
  'als-beziehungswort': {
    picks: [
      { s: 'Ich arbeite ___ Kellner.', a: 'als', d: ['wie', 'für'], t: 'Trabajo de camarero.', e: 'Con "als" la profesión va SIN artículo.' },
      { s: 'Sie arbeitet als ___ in einer Schule.', a: 'Lehrerin', d: ['eine Lehrerin', 'die Lehrerin'], t: 'Trabaja de profesora en un colegio.', e: 'Tras "als" no se pone artículo.' },
      { s: 'Er arbeitet ___ Techniker bei Siemens.', a: 'als', d: ['wie', 'für'], t: 'Trabaja de técnico en Siemens.', e: 'als + profesión.' },
      { s: 'Ich arbeite als ___.', a: 'Verkäufer', d: ['ein Verkäufer', 'der Verkäufer'], t: 'Trabajo de vendedor.', e: 'Sin artículo tras als.' },
      { s: 'Meine Schwester arbeitet ___ Ärztin.', a: 'als', d: ['wie', 'für'], t: 'Mi hermana trabaja de médica.', e: 'als + profesión.' },
      { s: 'Er ___ Ingenieur von Beruf.', a: 'ist', d: ['arbeitet', 'hat'], t: 'Es ingeniero de profesión.', e: 'Con "von Beruf" se usa "sein", también sin artículo.' },
      { s: 'Sie arbeitet ___ Köchin in einem Hotel.', a: 'als', d: ['wie', 'für'], t: 'Trabaja de cocinera en un hotel.', e: 'als Köchin.' },
      { s: 'Was sind Sie ___ Beruf?', a: 'von', d: ['als', 'für'], t: '¿A qué se dedica usted?', e: 'Fórmula fija: von Beruf.' },
      { s: 'Ich arbeite als ___ in einem Büro.', a: 'Sekretärin', d: ['eine Sekretärin', 'der Sekretärin'], t: 'Trabajo de secretaria en una oficina.', e: 'Tras als, sin artículo.' },
      { s: 'Er arbeitet ___ Kellner in einem Café.', a: 'als', d: ['bei', 'für'], t: 'Trabaja de camarero en una cafetería.', e: 'als + profesión.' },
      { s: 'Sie ist ___ Studentin.', a: 'noch', d: ['als', 'wie'], t: 'Todavía es estudiante.', e: 'Con "sein" no hace falta "als": Sie ist Studentin.' },
      { s: 'Ich arbeite ___ Praktikantin bei einer Firma.', a: 'als', d: ['wie', 'für'], t: 'Trabajo de becaria en una empresa.', e: 'als + profesión.' }
    ],
    orders: [
      { sol: ['Ich', 'arbeite', 'als', 'Kellner', 'in', 'einem', 'Restaurant'], t: 'Trabajo de camarero en un restaurante.', e: 'als + profesión sin artículo.' },
      { sol: ['Sie', 'arbeitet', 'als', 'Ärztin', 'im', 'Krankenhaus'], t: 'Trabaja de médica en el hospital.', e: 'als Ärztin.' },
      { sol: ['Was', 'sind', 'Sie', 'von', 'Beruf?'], t: '¿A qué se dedica usted?', e: 'von Beruf.' },
      { sol: ['Mein', 'Bruder', 'ist', 'Techniker'], t: 'Mi hermano es técnico.', e: 'Con sein, la profesión va sin artículo.' }
    ]
  },

  // ---------- A1.1 L7: el plural ----------
  plural: {
    picks: [
      { s: 'der Tag → die ___', a: 'Tage', d: ['Tagen', 'Täge'], t: 'el día → los días', e: 'Plural en -e: die Tage.' },
      { s: 'das Kind → die ___', a: 'Kinder', d: ['Kinde', 'Kindern'], t: 'el niño → los niños', e: 'Plural en -er: die Kinder.' },
      { s: 'die Frau → die ___', a: 'Frauen', d: ['Fraue', 'Frauer'], t: 'la mujer → las mujeres', e: 'Los femeninos suelen hacer el plural en -en.' },
      { s: 'das Handy → die ___', a: 'Handys', d: ['Handyen', 'Handye'], t: 'el móvil → los móviles', e: 'Las palabras extranjeras suelen hacer el plural en -s.' },
      { s: 'der Vater → die ___', a: 'Väter', d: ['Vaters', 'Vatere'], t: 'el padre → los padres', e: 'Solo cambia la vocal (Umlaut): die Väter.' },
      { s: 'die Lehrerin → die ___', a: 'Lehrerinnen', d: ['Lehrerins', 'Lehrerine'], t: 'la profesora → las profesoras', e: 'Los femeninos en -in doblan la n: -innen.' },
      { s: 'das Buch → die ___', a: 'Bücher', d: ['Buchs', 'Buche'], t: 'el libro → los libros', e: 'Plural con Umlaut y -er: die Bücher.' },
      { s: 'der Stuhl → die ___', a: 'Stühle', d: ['Stuhle', 'Stühler'], t: 'la silla → las sillas', e: 'Umlaut + -e: die Stühle.' },
      { s: 'das Auto → die ___', a: 'Autos', d: ['Auten', 'Autoe'], t: 'el coche → los coches', e: 'Plural en -s.' },
      { s: 'die Wohnung → die ___', a: 'Wohnungen', d: ['Wohnunge', 'Wohnungs'], t: 'el piso → los pisos', e: 'Las palabras en -ung hacen el plural en -en.' },
      { s: 'der Apfel → die ___', a: 'Äpfel', d: ['Apfeln', 'Apfels'], t: 'la manzana → las manzanas', e: 'Solo Umlaut: die Äpfel.' },
      { s: 'das Zimmer → die ___', a: 'Zimmer', d: ['Zimmern', 'Zimmers'], t: 'la habitación → las habitaciones', e: 'Las palabras en -er suelen no cambiar en plural.' }
    ],
    orders: [
      { sol: ['Wir', 'haben', 'zwei', 'Kinder'], t: 'Tenemos dos hijos.', e: 'Plural: die Kinder.' },
      { sol: ['Die', 'Bücher', 'sind', 'sehr', 'interessant'], t: 'Los libros son muy interesantes.', e: 'Buch → Bücher.' },
      { sol: ['Meine', 'Eltern', 'wohnen', 'in', 'Spanien'], t: 'Mis padres viven en España.', e: 'Eltern solo existe en plural.' },
      { sol: ['Die', 'Wohnung', 'hat', 'drei', 'Zimmer'], t: 'El piso tiene tres habitaciones.', e: 'Zimmer no cambia en plural.' }
    ]
  },

  // ---------- A1.1 L6: palabras compuestas ----------
  komposita: {
    picks: [
      { s: 'der Apfel + der Saft = ___ Apfelsaft', a: 'der', d: ['die', 'das'], t: 'el zumo de manzana', e: 'El artículo lo pone la ÚLTIMA palabra: der Saft → der Apfelsaft.' },
      { s: 'das Obst + der Salat = ___ Obstsalat', a: 'der', d: ['die', 'das'], t: 'la macedonia', e: 'der Salat manda: der Obstsalat.' },
      { s: 'die Butter + das Brot = ___ Butterbrot', a: 'das', d: ['der', 'die'], t: 'el pan con mantequilla', e: 'das Brot manda: das Butterbrot.' },
      { s: 'der Orange + der Saft = ___ Orangensaft', a: 'der', d: ['die', 'das'], t: 'el zumo de naranja', e: 'der Saft manda.' },
      { s: 'die Haus + die Aufgabe = ___ Hausaufgabe', a: 'die', d: ['der', 'das'], t: 'los deberes', e: 'die Aufgabe manda: die Hausaufgabe.' },
      { s: 'der Käse + das Brot = ___ Käsebrot', a: 'das', d: ['der', 'die'], t: 'el pan con queso', e: 'das Brot manda.' },
      { s: 'die Milch + der Kaffee = ___ Milchkaffee', a: 'der', d: ['die', 'das'], t: 'el café con leche', e: 'der Kaffee manda.' },
      { s: 'der Tee + die Tasse = ___ Teetasse', a: 'die', d: ['der', 'das'], t: 'la taza de té', e: 'die Tasse manda.' },
      { s: 'das Wasser + die Flasche = ___ Wasserflasche', a: 'die', d: ['der', 'das'], t: 'la botella de agua', e: 'die Flasche manda.' },
      { s: 'die Schule + das Buch = ___ Schulbuch', a: 'das', d: ['der', 'die'], t: 'el libro de texto', e: 'das Buch manda.' },
      { s: 'der Sonntag + der Morgen = ___ Sonntagmorgen', a: 'der', d: ['die', 'das'], t: 'el domingo por la mañana', e: 'der Morgen manda.' },
      { s: 'die Küche + der Tisch = ___ Küchentisch', a: 'der', d: ['die', 'das'], t: 'la mesa de la cocina', e: 'der Tisch manda.' }
    ],
    orders: [
      { sol: ['Ich', 'möchte', 'bitte', 'einen', 'Apfelsaft'], t: 'Quisiera un zumo de manzana, por favor.', e: 'der Apfelsaft → einen en acusativo.' },
      { sol: ['Der', 'Obstsalat', 'schmeckt', 'sehr', 'gut'], t: 'La macedonia está muy buena.', e: 'der Obstsalat.' },
      { sol: ['Sie', 'isst', 'ein', 'Butterbrot'], t: 'Se come un pan con mantequilla.', e: 'das Butterbrot → ein.' },
      { sol: ['Hast', 'du', 'die', 'Hausaufgaben', 'gemacht?'], t: '¿Has hecho los deberes?', e: 'die Hausaufgabe / die Hausaufgaben.' }
    ]
  },

  // ---------- A1.1 L8: jeden Tag, jede Woche ----------
  'haufigkeitsangaben-mit-jed': {
    picks: [
      { s: 'Ich gehe ___ Tag laufen.', a: 'jeden', d: ['jede', 'jedes'], t: 'Salgo a correr todos los días.', e: 'Tag es masculino y va en acusativo → jeden.' },
      { s: '___ Wochenende spielen wir Fußball.', a: 'Jedes', d: ['Jeden', 'Jede'], t: 'Cada fin de semana jugamos al fútbol.', e: 'Wochenende es neutro → jedes.' },
      { s: '___ Woche habe ich zwei Kurse.', a: 'Jede', d: ['Jeden', 'Jedes'], t: 'Cada semana tengo dos cursos.', e: 'Woche es femenino → jede.' },
      { s: 'Er trainiert ___ Abend.', a: 'jeden', d: ['jede', 'jedes'], t: 'Entrena todas las tardes.', e: 'Abend es masculino → jeden.' },
      { s: '___ Jahr fahren wir ans Meer.', a: 'Jedes', d: ['Jeden', 'Jede'], t: 'Todos los años vamos al mar.', e: 'Jahr es neutro → jedes.' },
      { s: 'Ich rufe meine Mutter ___ Sonntag an.', a: 'jeden', d: ['jede', 'jedes'], t: 'Llamo a mi madre todos los domingos.', e: 'Los días son masculinos → jeden.' },
      { s: '___ Monat zahle ich die Miete.', a: 'Jeden', d: ['Jede', 'Jedes'], t: 'Todos los meses pago el alquiler.', e: 'Monat es masculino → jeden.' },
      { s: 'Sie geht ___ Morgen schwimmen.', a: 'jeden', d: ['jede', 'jedes'], t: 'Va a nadar todas las mañanas.', e: 'Morgen es masculino → jeden.' },
      { s: '___ Stunde macht er eine Pause.', a: 'Jede', d: ['Jeden', 'Jedes'], t: 'Cada hora hace una pausa.', e: 'Stunde es femenino → jede.' },
      { s: 'Wir treffen uns ___ Mittwoch.', a: 'jeden', d: ['jede', 'jedes'], t: 'Quedamos todos los miércoles.', e: 'Mittwoch es masculino → jeden.' },
      { s: 'Ich lerne ___ Tag eine Stunde Deutsch.', a: 'jeden', d: ['jede', 'jedes'], t: 'Estudio alemán una hora al día.', e: 'jeden Tag.' },
      { s: '___ Mal ist es anders.', a: 'Jedes', d: ['Jeden', 'Jede'], t: 'Cada vez es distinto.', e: 'Mal es neutro → jedes.' }
    ],
    orders: [
      { sol: ['Ich', 'gehe', 'jeden', 'Tag', 'laufen'], t: 'Salgo a correr todos los días.', e: 'jeden Tag (acusativo masculino).' },
      { sol: ['Jedes', 'Wochenende', 'spielen', 'wir', 'Fußball'], t: 'Cada fin de semana jugamos al fútbol.', e: 'jedes Wochenende al principio → inversión.' },
      { sol: ['Jede', 'Woche', 'habe', 'ich', 'zwei', 'Kurse'], t: 'Cada semana tengo dos cursos.', e: 'jede Woche.' },
      { sol: ['Er', 'trainiert', 'jeden', 'Abend', 'im', 'Fitnessstudio'], t: 'Entrena todas las tardes en el gimnasio.', e: 'jeden Abend.' }
    ]
  },

  // ---------- A1.2 L9: letzt- / nächst- ----------
  'adjektive-letzt-nachst': {
    picks: [
      { s: '___ Sommer war ich in Kroatien.', a: 'Letzten', d: ['Letzte', 'Letztes'], t: 'El verano pasado estuve en Croacia.', e: 'Sommer es masculino y funciona como complemento de tiempo → letzten.' },
      { s: '___ Woche habe ich Urlaub.', a: 'Nächste', d: ['Nächsten', 'Nächstes'], t: 'La semana que viene tengo vacaciones.', e: 'Woche es femenino → nächste.' },
      { s: '___ Jahr ziehen wir um.', a: 'Nächstes', d: ['Nächsten', 'Nächste'], t: 'El año que viene nos mudamos.', e: 'Jahr es neutro → nächstes.' },
      { s: '___ Monat war ich krank.', a: 'Letzten', d: ['Letzte', 'Letztes'], t: 'El mes pasado estuve enfermo.', e: 'Monat es masculino → letzten.' },
      { s: '___ Montag fängt der Kurs an.', a: 'Nächsten', d: ['Nächste', 'Nächstes'], t: 'El lunes que viene empieza el curso.', e: 'Los días son masculinos → nächsten.' },
      { s: '___ Woche war ich in Salzburg.', a: 'Letzte', d: ['Letzten', 'Letztes'], t: 'La semana pasada estuve en Salzburgo.', e: 'Woche es femenino → letzte.' },
      { s: '___ Wochenende bleiben wir zu Hause.', a: 'Nächstes', d: ['Nächsten', 'Nächste'], t: 'El fin de semana que viene nos quedamos en casa.', e: 'Wochenende es neutro → nächstes.' },
      { s: '___ Jahr habe ich viel gelernt.', a: 'Letztes', d: ['Letzten', 'Letzte'], t: 'El año pasado aprendí mucho.', e: 'Jahr es neutro → letztes.' },
      { s: '___ Freitag habe ich einen Termin.', a: 'Nächsten', d: ['Nächste', 'Nächstes'], t: 'El viernes que viene tengo una cita.', e: 'Día masculino → nächsten.' },
      { s: '___ Sommer fahren wir nach Italien.', a: 'Nächsten', d: ['Nächste', 'Nächstes'], t: 'El verano que viene vamos a Italia.', e: 'Sommer es masculino → nächsten.' },
      { s: '___ Wochenende war das Wetter schlecht.', a: 'Letztes', d: ['Letzten', 'Letzte'], t: 'El fin de semana pasado hizo mal tiempo.', e: 'Neutro → letztes.' },
      { s: '___ Mal war es besser.', a: 'Letztes', d: ['Letzten', 'Letzte'], t: 'La última vez fue mejor.', e: 'Mal es neutro → letztes.' }
    ],
    orders: [
      { sol: ['Letzten', 'Sommer', 'war', 'ich', 'in', 'Kroatien'], t: 'El verano pasado estuve en Croacia.', e: 'Complemento inicial → inversión.' },
      { sol: ['Nächste', 'Woche', 'habe', 'ich', 'Urlaub'], t: 'La semana que viene tengo vacaciones.', e: 'nächste Woche.' },
      { sol: ['Nächstes', 'Jahr', 'ziehen', 'wir', 'nach', 'Graz'], t: 'El año que viene nos mudamos a Graz.', e: 'nächstes Jahr.' },
      { sol: ['Letzten', 'Montag', 'war', 'ich', 'beim', 'Arzt'], t: 'El lunes pasado estuve en el médico.', e: 'letzten Montag.' }
    ]
  },

  // ---------- A1.2 L14: gut, viel, gern ----------
  'komparativ-superlativ-gut-viel-gern': {
    picks: [
      { s: 'Diese Jacke gefällt mir ___.', a: 'besser', d: ['guter', 'mehr gut'], t: 'Esta chaqueta me gusta más.', e: 'gut – besser – am besten (irregular).' },
      { s: '___ trage ich Jeans.', a: 'Am liebsten', d: ['Lieber', 'Am gernsten'], t: 'Lo que más me gusta es llevar vaqueros.', e: 'gern – lieber – am liebsten.' },
      { s: 'Er verdient ___ als ich.', a: 'mehr', d: ['vieler', 'am meisten'], t: 'Gana más que yo.', e: 'viel – mehr – am meisten.' },
      { s: 'Ich trinke ___ Tee als Kaffee.', a: 'lieber', d: ['gerner', 'am liebsten'], t: 'Prefiero el té al café.', e: 'Comparativo de gern: lieber.' },
      { s: 'Das ist das ___ Restaurant der Stadt.', a: 'beste', d: ['gutste', 'bessere'], t: 'Es el mejor restaurante de la ciudad.', e: 'Superlativo de gut delante del sustantivo: das beste.' },
      { s: 'Von allen isst er ___.', a: 'am meisten', d: ['mehr', 'am vielsten'], t: 'De todos, él es el que más come.', e: 'Superlativo de viel: am meisten.' },
      { s: 'Dieses Hemd steht dir ___.', a: 'besser', d: ['guter', 'am besten'], t: 'Esta camisa te queda mejor.', e: 'Comparación entre dos → besser.' },
      { s: 'Welche Farbe magst du ___?', a: 'am liebsten', d: ['lieber', 'am gernsten'], t: '¿Qué color te gusta más de todos?', e: 'Superlativo de gern.' },
      { s: 'Ich habe ___ Zeit als du.', a: 'mehr', d: ['vieler', 'am meisten'], t: 'Tengo más tiempo que tú.', e: 'Comparativo de viel: mehr.' },
      { s: 'Der Pullover gefällt mir ___ von allen.', a: 'am besten', d: ['besser', 'gut'], t: 'De todos, el jersey es el que más me gusta.', e: 'Superlativo con "von allen" → am besten.' },
      { s: 'Sie spricht ___ Deutsch als ich.', a: 'besser', d: ['guter', 'am besten'], t: 'Habla mejor alemán que yo.', e: 'besser + als.' },
      { s: 'Ich gehe ___ zu Fuß als mit dem Bus.', a: 'lieber', d: ['gerner', 'am liebsten'], t: 'Prefiero ir a pie que en autobús.', e: 'lieber … als.' }
    ],
    orders: [
      { sol: ['Diese', 'Jacke', 'gefällt', 'mir', 'besser'], t: 'Esta chaqueta me gusta más.', e: 'besser (comparativo de gut).' },
      { sol: ['Am', 'liebsten', 'trage', 'ich', 'Jeans'], t: 'Lo que más me gusta es llevar vaqueros.', e: 'Am liebsten al principio → inversión.' },
      { sol: ['Ich', 'trinke', 'lieber', 'Tee', 'als', 'Kaffee'], t: 'Prefiero el té al café.', e: 'lieber … als.' },
      { sol: ['Das', 'ist', 'das', 'beste', 'Restaurant', 'der', 'Stadt'], t: 'Es el mejor restaurante de la ciudad.', e: 'Superlativo delante del sustantivo.' }
    ]
  },

  // ---------- A2.1 L3: repaso gut / viel / gern ----------
  'komparativ-wdh': {
    picks: [
      { s: 'Ich schwimme gern, aber ich laufe ___.', a: 'lieber', d: ['gerner', 'am liebsten'], t: 'Me gusta nadar, pero prefiero correr.', e: 'gern – lieber – am liebsten.' },
      { s: '___ gehe ich klettern.', a: 'Am liebsten', d: ['Lieber', 'Gerner'], t: 'Lo que más me gusta es escalar.', e: 'Superlativo de gern.' },
      { s: 'Zofia spielt ___ Volleyball als ich.', a: 'besser', d: ['guter', 'am besten'], t: 'Zofia juega mejor al voleibol que yo.', e: 'gut – besser – am besten.' },
      { s: 'Er trainiert ___ von allen.', a: 'am meisten', d: ['mehr', 'am vielsten'], t: 'Él es el que más entrena de todos.', e: 'viel – mehr – am meisten.' },
      { s: 'Ich laufe ___ als früher.', a: 'mehr', d: ['vieler', 'am meisten'], t: 'Corro más que antes.', e: 'Comparativo de viel: mehr.' },
      { s: 'Welchen Sport machst du ___?', a: 'am liebsten', d: ['lieber', 'am gernsten'], t: '¿Qué deporte te gusta más?', e: 'Superlativo de gern.' },
      { s: 'Nach dem Training fühle ich mich ___.', a: 'besser', d: ['guter', 'am besten'], t: 'Después de entrenar me siento mejor.', e: 'besser (comparativo de gut).' },
      { s: 'Sie kann ___ schwimmen als ich.', a: 'besser', d: ['guter', 'mehr gut'], t: 'Nada mejor que yo.', e: 'besser + als.' },
      { s: 'Wer trainiert ___, du oder er?', a: 'mehr', d: ['vieler', 'am meisten'], t: '¿Quién entrena más, tú o él?', e: 'Comparación entre dos → mehr.' },
      { s: 'Yoga gefällt mir ___ als Joggen.', a: 'besser', d: ['guter', 'am besten'], t: 'El yoga me gusta más que correr.', e: 'gefallen + besser als.' },
      { s: 'Am Wochenende schlafe ich ___.', a: 'am liebsten', d: ['lieber als', 'gerner'], t: 'El fin de semana lo que más me gusta es dormir.', e: 'Superlativo de gern.' },
      { s: 'Er isst ___ Gemüse als früher.', a: 'mehr', d: ['vieler', 'am meisten'], t: 'Come más verdura que antes.', e: 'mehr … als.' }
    ],
    orders: [
      { sol: ['Ich', 'schwimme', 'gern,', 'aber', 'ich', 'laufe', 'lieber'], t: 'Me gusta nadar, pero prefiero correr.', e: 'gern → lieber.' },
      { sol: ['Am', 'liebsten', 'gehe', 'ich', 'klettern'], t: 'Lo que más me gusta es escalar.', e: 'Superlativo al principio → inversión.' },
      { sol: ['Zofia', 'spielt', 'besser', 'Volleyball', 'als', 'ich'], t: 'Zofia juega mejor al voleibol que yo.', e: 'besser … als.' },
      { sol: ['Er', 'trainiert', 'am', 'meisten', 'von', 'allen'], t: 'Él es el que más entrena de todos.', e: 'am meisten von allen.' }
    ]
  },

  // ---------- A1.2 L14: ordinales y fechas ----------
  'ordinalzahlen-datum': {
    picks: [
      { s: 'Heute ist der ___ Mai.', a: 'fünfte', d: ['fünf', 'fünfste'], t: 'Hoy es cinco de mayo.', e: 'Del 1 al 19 se añade -te: der fünfte.' },
      { s: 'Ich habe am ___ Juni Geburtstag.', a: 'zwanzigsten', d: ['zwanzigten', 'zwanzig'], t: 'Cumplo años el veinte de junio.', e: 'A partir del 20 se añade -ste; con "am" lleva -sten.' },
      { s: 'Morgen ist der ___ März.', a: 'dritte', d: ['dreite', 'drei'], t: 'Mañana es tres de marzo.', e: 'Forma irregular: der dritte.' },
      { s: 'Der Kurs beginnt am ___ September.', a: 'ersten', d: ['einten', 'eins'], t: 'El curso empieza el uno de septiembre.', e: 'Forma irregular: der erste → am ersten.' },
      { s: 'Heute ist der ___ Oktober.', a: 'siebte', d: ['siebente', 'sieben'], t: 'Hoy es siete de octubre.', e: 'Forma habitual: der siebte.' },
      { s: 'Wir treffen uns am ___ April.', a: 'achten', d: ['achtten', 'acht'], t: 'Quedamos el ocho de abril.', e: 'acht + -ten (una sola t): am achten.' },
      { s: 'Der ___ Dezember ist ein Feiertag.', a: 'fünfundzwanzigste', d: ['fünfundzwanzigte', 'fünfundzwanzig'], t: 'El 25 de diciembre es festivo.', e: 'A partir del 20: -ste.' },
      { s: 'Ich komme am ___ Februar.', a: 'zweiten', d: ['zweiten Mal', 'zwei'], t: 'Vengo el dos de febrero.', e: 'zwei → der zweite → am zweiten.' },
      { s: 'Welches Datum haben wir? – Den ___ Juli.', a: 'zehnten', d: ['zehnte', 'zehn'], t: '¿A qué día estamos? – A diez de julio.', e: 'Tras "Welches Datum haben wir" se responde en acusativo: den zehnten.' },
      { s: 'Der Termin ist am ___ November.', a: 'dreißigsten', d: ['dreißigten', 'dreißig'], t: 'La cita es el treinta de noviembre.', e: '30 → dreißigste → am dreißigsten.' },
      { s: 'Sie hat am ___ August Geburtstag.', a: 'einunddreißigsten', d: ['einunddreißigten', 'einunddreißig'], t: 'Cumple años el 31 de agosto.', e: 'A partir del 20: -sten con "am".' },
      { s: 'Heute ist der ___ Jänner.', a: 'sechste', d: ['sechte', 'sechs'], t: 'Hoy es seis de enero.', e: 'sechs → der sechste.' }
    ],
    orders: [
      { sol: ['Heute', 'ist', 'der', 'fünfte', 'Mai'], t: 'Hoy es cinco de mayo.', e: 'La fecha como sujeto va en nominativo.' },
      { sol: ['Ich', 'habe', 'am', 'zwanzigsten', 'Juni', 'Geburtstag'], t: 'Cumplo años el veinte de junio.', e: 'am + ordinal en -sten.' },
      { sol: ['Der', 'Kurs', 'beginnt', 'am', 'ersten', 'September'], t: 'El curso empieza el uno de septiembre.', e: 'am ersten September.' },
      { sol: ['Wir', 'treffen', 'uns', 'am', 'achten', 'April'], t: 'Quedamos el ocho de abril.', e: 'am achten April.' }
    ]
  },

  // ---------- A2.1 L1: un- y -los ----------
  'wortbildung-un-los': {
    picks: [
      { s: 'Er sucht schon lange Arbeit: er ist seit einem Jahr ___.', a: 'arbeitslos', d: ['unarbeit', 'arbeitlos'], t: 'Lleva mucho buscando trabajo: está en paro desde hace un año.', e: '-los = "sin": Arbeit + -los → arbeitslos.' },
      { s: 'Ich bin mit dem Ergebnis ___.', a: 'unzufrieden', d: ['zufriedenlos', 'nichtzufrieden'], t: 'No estoy satisfecho con el resultado.', e: 'un- niega el adjetivo: zufrieden → unzufrieden.' },
      { s: 'Nach der Nachricht war sie einfach ___.', a: 'sprachlos', d: ['unsprache', 'sprachnicht'], t: 'Tras la noticia se quedó sin palabras.', e: 'Sprache + -los → sprachlos (sin habla).' },
      { s: 'Der Kellner war heute wirklich ___.', a: 'unfreundlich', d: ['freundlos', 'nichtfreundlich'], t: 'El camarero fue hoy muy antipático.', e: 'freundlich → unfreundlich con el prefijo un-.' },
      { s: 'Das ist ___, ich kann das nicht glauben!', a: 'unglaublich', d: ['glaublichlos', 'nichtglaublich'], t: '¡Eso es increíble, no me lo puedo creer!', e: 'glaublich → unglaublich.' },
      { s: 'Die neue App ist komplett ___.', a: 'kostenlos', d: ['unkosten', 'kostenvoll'], t: 'La nueva app es completamente gratis.', e: 'Kosten (costes) + -los = kostenlos (gratis).' },
      { s: 'Ich finde das Wetter heute sehr ___.', a: 'unangenehm', d: ['angenehmlos', 'nichtangenehm'], t: 'El tiempo de hoy me parece muy desagradable.', e: 'angenehm → unangenehm.' },
      { s: 'Ein Leben ohne Smartphone ist für viele ___.', a: 'undenkbar', d: ['denkbarlos', 'nichtdenkbar'], t: 'Una vida sin móvil es impensable para muchos.', e: 'denkbar → undenkbar.' },
      { s: 'Sein Verhalten war einfach ___.', a: 'unhöflich', d: ['höflichlos', 'nichthöflich'], t: 'Su comportamiento fue simplemente maleducado.', e: 'höflich → unhöflich.' },
      { s: 'Er ist total ___, er hat keine Angst.', a: 'furchtlos', d: ['unfurcht', 'nichtfurcht'], t: 'Es totalmente intrépido, no tiene miedo.', e: 'Furcht (temor) + -los = furchtlos.' },
      { s: 'Diese Aufgabe ist für mich ___.', a: 'unmöglich', d: ['möglichlos', 'nichtmöglich'], t: 'Esta tarea es imposible para mí.', e: 'möglich → unmöglich.' },
      { s: 'Das Kind ist heute sehr ___.', a: 'unruhig', d: ['ruhelos', 'nichtruhig'], t: 'El niño está hoy muy inquieto.', e: 'ruhig → unruhig.' }
    ],
    orders: [
      { sol: ['Er', 'ist', 'seit', 'einem', 'Jahr', 'arbeitslos'], t: 'Lleva un año en paro.', e: 'Arbeit + -los.' },
      { sol: ['Ich', 'bin', 'mit', 'dem', 'Ergebnis', 'unzufrieden'], t: 'No estoy satisfecho con el resultado.', e: 'un- + zufrieden.' },
      { sol: ['Die', 'neue', 'App', 'ist', 'völlig', 'kostenlos'], t: 'La nueva app es totalmente gratis.', e: 'Kosten + -los.' },
      { sol: ['Das', 'ist', 'für', 'mich', 'einfach', 'unmöglich'], t: 'Eso para mí es simplemente imposible.', e: 'un- + möglich.' }
    ]
  },

  // ---------- A2.1 L3: comparativo y superlativo ----------
  'komparativ-superlativ': {
    picks: [
      { s: 'Fußball ist ___ als Handball.', a: 'populärer', d: ['populär', 'am populärsten'], t: 'El fútbol es más popular que el balonmano.', e: 'Comparativo = adjetivo + -er, y la comparación con "als".' },
      { s: 'Von allen läuft Zofia ___.', a: 'am schnellsten', d: ['schneller', 'schnell'], t: 'De todos, Zofia es la que corre más rápido.', e: 'Superlativo adverbial: am + adjetivo + -sten.' },
      { s: 'Klettern ist ___ als Yoga.', a: 'anstrengender', d: ['anstrengend', 'am anstrengendsten'], t: 'Escalar es más agotador que el yoga.', e: 'Comparativo + "als".' },
      { s: 'Mein Bruder ist zwei Jahre ___ als ich.', a: 'älter', d: ['alt', 'am ältesten'], t: 'Mi hermano es dos años mayor que yo.', e: 'Los monosílabos suelen añadir Umlaut: alt → älter.' },
      { s: 'Dieser Sommer ist ___ als der letzte.', a: 'heißer', d: ['heiß', 'am heißesten'], t: 'Este verano es más caluroso que el último.', e: 'heiß → heißer.' },
      { s: 'Das ist das ___ Buch, das ich kenne.', a: 'beste', d: ['bessere', 'guteste'], t: 'Ese es el mejor libro que conozco.', e: 'Superlativo irregular de gut: am besten / das beste.' },
      { s: 'Ich trinke ___ Tee als Kaffee.', a: 'lieber', d: ['gern', 'am liebsten'], t: 'Prefiero beber té que café.', e: 'Comparativo irregular de gern: lieber.' },
      { s: 'Wer springt ___?', a: 'am höchsten', d: ['höher', 'hoch'], t: '¿Quién salta más alto?', e: 'Superlativo irregular de hoch: am höchsten.' },
      { s: 'Wien ist ___ als Graz.', a: 'größer', d: ['groß', 'am größten'], t: 'Viena es más grande que Graz.', e: 'groß → größer (con Umlaut).' },
      { s: 'Der Winter ist hier ___ als in Spanien.', a: 'kälter', d: ['kalt', 'am kältesten'], t: 'Aquí el invierno es más frío que en España.', e: 'kalt → kälter.' },
      { s: 'Das ist die ___ Straße der Stadt.', a: 'längste', d: ['längere', 'langste'], t: 'Es la calle más larga de la ciudad.', e: 'lang → länger → die längste.' },
      { s: 'Dieses Zimmer ist ___ als das andere.', a: 'kleiner', d: ['klein', 'am kleinsten'], t: 'Esta habitación es más pequeña que la otra.', e: 'klein → kleiner (sin Umlaut).' }
    ],
    orders: [
      { sol: ['Fußball', 'ist', 'populärer', 'als', 'Handball'], t: 'El fútbol es más popular que el balonmano.', e: 'Comparativo + als.' },
      { sol: ['Von', 'allen', 'läuft', 'Zofia', 'am', 'schnellsten'], t: 'De todos, Zofia es la que corre más rápido.', e: 'am + -sten.' },
      { sol: ['Mein', 'Bruder', 'ist', 'älter', 'als', 'ich'], t: 'Mi hermano es mayor que yo.', e: 'alt → älter.' },
      { sol: ['Das', 'ist', 'die', 'längste', 'Straße', 'der', 'Stadt'], t: 'Es la calle más larga de la ciudad.', e: 'Superlativo delante del sustantivo.' }
    ]
  },

  // ---------- A2.1 L3: als o wie ----------
  'als-wie': {
    picks: [
      { s: 'Schwimmen ist gesünder ___ Autofahren.', a: 'als', d: ['wie', 'so wie'], t: 'Nadar es más sano que ir en coche.', e: 'Con comparativo (gesünder) se usa "als".' },
      { s: 'Sie ist so sportlich ___ ihr Bruder.', a: 'wie', d: ['als', 'denn'], t: 'Ella es tan deportista como su hermano.', e: 'Comparación de igualdad: so … wie.' },
      { s: 'Der Marathon war viel härter, ___ ich gedacht habe.', a: 'als', d: ['wie', 'so wie'], t: 'El maratón fue mucho más duro de lo que pensaba.', e: 'Tras un comparativo siempre "als", nunca "wie".' },
      { s: 'Er verdient genauso viel Geld ___ sein Chef.', a: 'wie', d: ['als', 'dass'], t: 'Gana tanto dinero como su jefe.', e: 'Igualdad (genauso viel) usa "wie".' },
      { s: 'Die Prüfung war einfacher ___ erwartet.', a: 'als', d: ['wie', 'als wie'], t: 'El examen fue más fácil de lo esperado.', e: 'Comparativo (einfacher) exige "als".' },
      { s: 'Das Haus ist nicht so groß ___ unseres.', a: 'wie', d: ['als', 'als wie'], t: 'La casa no es tan grande como la nuestra.', e: 'Igualdad negativa (nicht so groß) usa "wie".' },
      { s: 'Wien ist größer ___ Salzburg.', a: 'als', d: ['wie', 'so wie'], t: 'Viena es más grande que Salzburgo.', e: 'Comparativo → als.' },
      { s: 'Ich bin genauso alt ___ du.', a: 'wie', d: ['als', 'dass'], t: 'Tengo justo la misma edad que tú.', e: 'genauso … wie.' },
      { s: 'Heute ist es kälter ___ gestern.', a: 'als', d: ['wie', 'so wie'], t: 'Hoy hace más frío que ayer.', e: 'kälter + als.' },
      { s: 'Sie spricht so gut Deutsch ___ ihre Lehrerin.', a: 'wie', d: ['als', 'als wie'], t: 'Habla alemán tan bien como su profesora.', e: 'so gut … wie.' },
      { s: 'Der Film war besser, ___ ich dachte.', a: 'als', d: ['wie', 'so wie'], t: 'La película fue mejor de lo que pensaba.', e: 'besser + als.' },
      { s: 'Mein Zimmer ist so hell ___ deins.', a: 'wie', d: ['als', 'dass'], t: 'Mi habitación es tan luminosa como la tuya.', e: 'so hell … wie.' }
    ],
    orders: [
      { sol: ['Schwimmen', 'ist', 'gesünder', 'als', 'Autofahren'], t: 'Nadar es más sano que ir en coche.', e: 'Comparativo + als.' },
      { sol: ['Sie', 'ist', 'so', 'sportlich', 'wie', 'ihr', 'Bruder'], t: 'Es tan deportista como su hermano.', e: 'so … wie.' },
      { sol: ['Heute', 'ist', 'es', 'kälter', 'als', 'gestern'], t: 'Hoy hace más frío que ayer.', e: 'kälter als.' },
      { sol: ['Ich', 'bin', 'genauso', 'alt', 'wie', 'du'], t: 'Tengo la misma edad que tú.', e: 'genauso … wie.' }
    ]
  },

  // ---------- A2.1 L3: jemand / niemand ----------
  'jemand-niemand': {
    picks: [
      { s: 'Kennst du ___ im Verein?', a: 'jemanden', d: ['jemand', 'niemanden'], t: '¿Conoces a alguien en el club?', e: '"kennen" pide acusativo: jemand → jemanden.' },
      { s: '___ wollte am Sonntag mitkommen.', a: 'Niemand', d: ['Niemanden', 'Jemanden'], t: 'Nadie quiso venir el domingo.', e: 'Es el sujeto → nominativo: niemand.' },
      { s: 'Ich habe mit ___ darüber gesprochen.', a: 'niemandem', d: ['niemand', 'niemanden'], t: 'No he hablado con nadie de eso.', e: '"mit" pide dativo: niemand → niemandem.' },
      { s: 'Hast du ___ gesehen?', a: 'jemanden', d: ['jemand', 'niemand'], t: '¿Has visto a alguien?', e: '"sehen" rige acusativo → jemanden.' },
      { s: 'Das kann doch ___ wissen!', a: 'niemand', d: ['niemanden', 'niemandem'], t: '¡Eso no puede saberlo nadie!', e: 'Sujeto nominativo.' },
      { s: 'Er hilft ___ gern.', a: 'niemandem', d: ['niemand', 'niemanden'], t: 'No le gusta ayudar a nadie.', e: '"helfen" rige dativo → niemandem.' },
      { s: 'Ist ___ hier, der Deutsch spricht?', a: 'jemand', d: ['jemanden', 'jemandem'], t: '¿Hay alguien aquí que hable alemán?', e: 'Sujeto nominativo.' },
      { s: 'Ich möchte mit ___ sprechen.', a: 'jemandem', d: ['jemand', 'jemanden'], t: 'Quiero hablar con alguien.', e: '"mit" + dativo → jemandem.' },
      { s: '___ hat mir geholfen.', a: 'Niemand', d: ['Niemandem', 'Niemanden'], t: 'Nadie me ayudó.', e: 'Sujeto → nominativo.' },
      { s: 'Kennt hier ___ den Weg?', a: 'jemand', d: ['jemanden', 'jemandem'], t: '¿Alguien conoce aquí el camino?', e: 'Es el sujeto → jemand.' },
      { s: 'Ich habe ___ gefragt, aber keiner wusste es.', a: 'jemanden', d: ['jemand', 'jemandem'], t: 'Le pregunté a alguien, pero nadie lo sabía.', e: 'fragen + acusativo → jemanden.' },
      { s: 'Er hat ___ davon erzählt.', a: 'niemandem', d: ['niemand', 'niemanden'], t: 'No se lo ha contado a nadie.', e: 'erzählen: el destinatario va en dativo → niemandem.' }
    ],
    orders: [
      { sol: ['Kennst', 'du', 'jemanden', 'im', 'Verein?'], t: '¿Conoces a alguien en el club?', e: 'jemanden en acusativo.' },
      { sol: ['Niemand', 'wollte', 'am', 'Sonntag', 'mitkommen'], t: 'Nadie quiso venir el domingo.', e: 'niemand como sujeto.' },
      { sol: ['Ich', 'habe', 'mit', 'niemandem', 'darüber', 'gesprochen'], t: 'No he hablado con nadie de eso.', e: 'mit + dativo.' },
      { sol: ['Ist', 'hier', 'jemand,', 'der', 'Deutsch', 'spricht?'], t: '¿Hay aquí alguien que hable alemán?', e: 'jemand como sujeto.' }
    ]
  },

  // ---------- A2.1 L2: was für ein ----------
  'was-fuer-ein': {
    picks: [
      { s: '___ Wein möchtest du? — Einen Rotwein, bitte.', a: 'Was für einen', d: ['Was für ein', 'Was für einem'], t: '¿Qué tipo de vino quieres? — Un tinto, por favor.', e: '"möchten" pide acusativo y "Wein" es masculino → einen.' },
      { s: '___ Suppe ist das?', a: 'Was für eine', d: ['Was für einen', 'Was für ein'], t: '¿Qué clase de sopa es esta?', e: '"Suppe" es femenino y va en nominativo → eine.' },
      { s: '___ Brot kaufen wir?', a: 'Was für ein', d: ['Was für eine', 'Was für einen'], t: '¿Qué tipo de pan compramos?', e: '"Brot" es neutro: en acusativo sigue siendo "ein".' },
      { s: '___ Schuhe trägst du heute?', a: 'Was für', d: ['Was für eine', 'Was für einen'], t: '¿Qué zapatos llevas hoy?', e: 'Plural: solo "Was für", sin artículo.' },
      { s: '___ Film hast du gesehen?', a: 'Was für einen', d: ['Was für ein', 'Was für einem'], t: '¿Qué película has visto?', e: 'Film es masculino en acusativo → Was für einen.' },
      { s: 'Mit ___ Auto fahrt ihr?', a: 'was für einem', d: ['was für ein', 'was für einen'], t: '¿Con qué tipo de coche vais?', e: '"mit" pide dativo; Auto es neutro → was für einem.' },
      { s: '___ Wetter haben wir heute!', a: 'Was für ein', d: ['Was für eine', 'Was für einen'], t: '¡Qué tiempo tenemos hoy!', e: 'Wetter es neutro acusativo → Was für ein.' },
      { s: '___ Musik hörst du gern?', a: 'Was für', d: ['Was für eine', 'Was für einen'], t: '¿Qué tipo de música te gusta?', e: 'Musik se usa sin artículo → solo "Was für".' },
      { s: '___ Wohnung sucht ihr?', a: 'Was für eine', d: ['Was für einen', 'Was für ein'], t: '¿Qué tipo de piso buscáis?', e: 'Wohnung es femenino en acusativo → eine.' },
      { s: '___ Tag ist heute!', a: 'Was für ein', d: ['Was für eine', 'Was für einen'], t: '¡Vaya día!', e: 'Exclamación en nominativo: Tag masculino → ein.' },
      { s: 'In ___ Haus wohnst du?', a: 'was für einem', d: ['was für ein', 'was für einen'], t: '¿En qué tipo de casa vives?', e: '"in" + dativo (Wo?) neutro → einem.' },
      { s: '___ Bücher liest du gern?', a: 'Was für', d: ['Was für eine', 'Was für ein'], t: '¿Qué tipo de libros te gusta leer?', e: 'Plural → solo "Was für".' }
    ],
    orders: [
      { sol: ['Was', 'für', 'einen', 'Wein', 'möchtest', 'du?'], t: '¿Qué tipo de vino quieres?', e: 'Acusativo masculino: einen.' },
      { sol: ['Was', 'für', 'eine', 'Wohnung', 'sucht', 'ihr?'], t: '¿Qué tipo de piso buscáis?', e: 'Acusativo femenino: eine.' },
      { sol: ['Was', 'für', 'Schuhe', 'trägst', 'du', 'heute?'], t: '¿Qué zapatos llevas hoy?', e: 'Plural sin artículo.' },
      { sol: ['Was', 'für', 'ein', 'Wetter', 'haben', 'wir', 'heute!'], t: '¡Qué tiempo tenemos hoy!', e: 'Exclamación con neutro.' },
      { sol: ['Was', 'für', 'einen', 'Film', 'hast', 'du', 'gesehen?'], t: '¿Qué película has visto?', e: 'Acusativo masculino tras haben.' },
      { sol: ['Was', 'für', 'Musik', 'hörst', 'du', 'gern?'], t: '¿Qué tipo de música te gusta?', e: 'Sin artículo cuando el sustantivo no lo lleva.' }
    ]
  }
};
