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
      { s: 'Ich arbeite ___ Praktikantin bei einer Firma.', a: 'als', d: ['wie', 'für'], t: 'Trabajo de becaria en una empresa.', e: 'als + profesión.' },
      { s: 'Sie hat zehn Jahre ___ Krankenschwester gearbeitet.', a: 'als', d: ['wie', 'für'], t: 'Trabajó diez años de enfermera.', e: 'als delante de la profesión.' },
      { s: 'Nebenbei jobbt er ___ in einem Lokal.', a: 'als Kellner', d: ['als einem Kellner', 'wie Kellner'], t: 'Además trabaja de camarero en un local.', e: 'als + profesión, siempre sin artículo.' },
      { s: 'Ich bin hier ___ Praktikant, nicht als Angestellter.', a: 'als', d: ['wie', 'für'], t: 'Aquí estoy de becario, no de empleado.', e: 'als también para decir en calidad de qué.' },
      { s: 'Als ___ verdient man in Wien nicht schlecht.', a: 'Programmierer', d: ['ein Programmierer', 'der Programmierer'], t: 'De programador en Viena no se gana mal.', e: 'Detrás de als la profesión va sin artículo.' },
      { s: 'Er möchte später ___ Lehrer arbeiten.', a: 'als', d: ['wie', 'für'], t: 'Más adelante quiere trabajar de profesor.', e: 'als + profesión.' },
      { s: 'Sie ist seit drei Jahren als ___ selbstständig.', a: 'Übersetzerin', d: ['eine Übersetzerin', 'der Übersetzerin'], t: 'Lleva tres años trabajando por su cuenta como traductora.', e: 'Sin artículo detrás de als.' },
      { s: '___ Studentin hat sie im Supermarkt gejobbt.', a: 'Als', d: ['Wie', 'Für'], t: 'De estudiante trabajaba en el supermercado.', e: 'als también sirve para una etapa de la vida.' },
      { s: 'Er arbeitet als ___, obwohl er Jura studiert hat.', a: 'Koch', d: ['einem Koch', 'dem Koch'], t: 'Trabaja de cocinero, aunque estudió Derecho.', e: 'Detrás de als, el nombre solo.' }
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
      { s: 'das Zimmer → die ___', a: 'Zimmer', d: ['Zimmern', 'Zimmers'], t: 'la habitación → las habitaciones', e: 'Las palabras en -er suelen no cambiar en plural.' },
      { s: 'die Straße → die ___', a: 'Straßen', d: ['Straße', 'Sträßen'], t: 'la calle → las calles', e: 'Los femeninos en -e hacen el plural en -n.' },
      { s: 'der Mann → die ___', a: 'Männer', d: ['Manner', 'Manne'], t: 'el hombre → los hombres', e: 'Plural en -er con Umlaut: Mann → Männer.' },
      { s: 'das Fenster → die ___', a: 'Fenster', d: ['Fenstern', 'Fenstere'], t: 'la ventana → las ventanas', e: 'Los neutros en -er no cambian en plural.' },
      { s: 'die Tochter → die ___', a: 'Töchter', d: ['Tochtern', 'Tochters'], t: 'la hija → las hijas', e: 'Solo cambia la vocal: Tochter → Töchter.' },
      { s: 'der Tisch → die ___', a: 'Tische', d: ['Tischen', 'Tischer'], t: 'la mesa → las mesas', e: 'Muchos masculinos hacen el plural en -e.' },
      { s: 'das Bild → die ___', a: 'Bilder', d: ['Bilde', 'Bilden'], t: 'el cuadro → los cuadros', e: 'Neutro corto → plural en -er.' },
      { s: 'die Übung → die ___', a: 'Übungen', d: ['Übunge', 'Übungs'], t: 'el ejercicio → los ejercicios', e: 'Todo lo que acaba en -ung hace el plural en -en.' },
      { s: 'der Kollege → die ___', a: 'Kollegen', d: ['Kollege', 'Kolleges'], t: 'el compañero → los compañeros', e: 'Los masculinos en -e siguen la declinación débil: -n.' },
      { s: 'das Foto → die ___', a: 'Fotos', d: ['Foten', 'Fotoe'], t: 'la foto → las fotos', e: 'Las palabras extranjeras acabadas en vocal hacen el plural en -s.' },
      { s: 'die Nacht → die ___', a: 'Nächte', d: ['Nachte', 'Nachten'], t: 'la noche → las noches', e: 'Femenino irregular: Umlaut + -e.' },
      { s: 'der Freund → die ___', a: 'Freunde', d: ['Freunden', 'Freunder'], t: 'el amigo → los amigos', e: 'Plural en -e, sin Umlaut.' },
      { s: 'das Ei → die ___', a: 'Eier', d: ['Eie', 'Eis'], t: 'el huevo → los huevos', e: 'Plural en -er: Ei → Eier.' },
      { s: 'Im Winter brauche ich warme ___.', a: 'Handschuhe', d: ['Handschuh', 'Handschuhen'], t: 'En invierno necesito guantes calientes.', e: 'der Handschuh → die Handschuhe, plural en -e.' },
      { s: 'Am Himmel sind heute kaum ___.', a: 'Wolken', d: ['Wolke', 'Wolkens'], t: 'Hoy casi no hay nubes en el cielo.', e: 'die Wolke → die Wolken, plural en -n.' },
      { s: 'Die ___ sinken heute Nacht auf null Grad.', a: 'Temperaturen', d: ['Temperatur', 'Temperaturs'], t: 'Las temperaturas bajan esta noche a cero grados.', e: 'die Temperatur → die Temperaturen.' },
      { s: 'Wie viele ___ hat das Jahr?', a: 'Jahreszeiten', d: ['Jahreszeit', 'Jahreszeiter'], t: '¿Cuántas estaciones tiene el año?', e: 'die Jahreszeit → die Jahreszeiten.' },
      { s: 'Im Sommer sind die ___ sehr lang.', a: 'Tage', d: ['Tag', 'Tagen'], t: 'En verano los días son muy largos.', e: 'der Tag → die Tage.' },
      { s: 'Die ___ im Dezember sind hier sehr kalt.', a: 'Nächte', d: ['Nacht', 'Nachten'], t: 'Las noches de diciembre aquí son muy frías.', e: 'die Nacht → die Nächte, con Umlaut.' },
      { s: 'Auf der Straße liegen viele ___.', a: 'Blätter', d: ['Blatt', 'Blatten'], t: 'En la calle hay muchas hojas.', e: 'das Blatt → die Blätter, con Umlaut y -er.' }
    ],
    orders: [
      { sol: ['Wir', 'haben', 'zwei', 'Kinder'], t: 'Tenemos dos hijos.', e: 'Plural: die Kinder.' },
      { sol: ['Die', 'Bücher', 'sind', 'sehr', 'interessant'], t: 'Los libros son muy interesantes.', e: 'Buch → Bücher.' },
      { sol: ['Meine', 'Eltern', 'wohnen', 'in', 'Spanien'], t: 'Mis padres viven en España.', e: 'Eltern solo existe en plural.' },
      { sol: ['Die', 'Wohnung', 'hat', 'drei', 'Zimmer'], t: 'El piso tiene tres habitaciones.', e: 'Zimmer no cambia en plural.' },
      { sol: ['Die', 'Kinder', 'spielen', 'im', 'Garten'], t: 'Los niños juegan en el jardín.', e: 'El plural lleva su artículo "die" y el verbo en plural.' },
      { sol: ['Wir', 'haben', 'zwei', 'Zimmer', 'und', 'ein', 'Bad'], t: 'Tenemos dos habitaciones y un baño.', e: '"Zimmer" no cambia en plural.' },
      { sol: ['Meine', 'Eltern', 'haben', 'zwei', 'Autos'], t: 'Mis padres tienen dos coches.', e: '"Auto" hace el plural en -s, como las palabras extranjeras.' }
    ],
    clozes: [
      { txt: 'Unsere Wohnung hat drei ___ und zwei ___. In der Küche stehen vier ___ und ein Tisch. An den Wänden hängen alte ___ von meinen Großeltern.', a: ['Zimmer', 'Bäder', 'Stühle', 'Bilder'], extra: ['Zimmern', 'Bads', 'Stuhle', 'Bilde'], t: 'Nuestro piso tiene tres habitaciones y dos baños. En la cocina hay cuatro sillas y una mesa. En las paredes cuelgan cuadros antiguos de mis abuelos.', e: 'Cuatro plurales distintos en cuatro palabras: sin cambio (Zimmer), con Umlaut (Bäder), en -e (Stühle) y en -er (Bilder).' },
      { txt: 'Im Kurs sind zwölf ___. Wir haben zwei ___ pro Woche und machen viele ___. Die ___ stehen hinten im Buch.', a: ['Leute', 'Stunden', 'Übungen', 'Lösungen'], extra: ['Leuten', 'Stunde', 'Übunge', 'Lösunge'], t: 'En el curso somos doce personas. Tenemos dos horas por semana y hacemos muchos ejercicios. Las soluciones están al final del libro.', e: 'Los tres últimos acaban en -ung o en -e y hacen el plural en -n/-en; "Leute" solo existe en plural.' }
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
      { s: 'die Küche + der Tisch = ___ Küchentisch', a: 'der', d: ['die', 'das'], t: 'la mesa de la cocina', e: 'der Tisch manda.' },
      { s: 'der Apfel + der Saft = ___', a: 'der Apfelsaft', d: ['die Apfelsaft', 'das Apfelsaft'], t: 'zumo de manzana', e: 'El género lo manda la ÚLTIMA palabra: der Saft → der Apfelsaft.' },
      { s: 'das Brot + die Zeit = ___', a: 'die Brotzeit', d: ['der Brotzeit', 'das Brotzeit'], t: 'el tentempié', e: 'die Zeit manda → die Brotzeit.' },
      { s: 'die Milch + das Brot = ___', a: 'das Milchbrot', d: ['die Milchbrot', 'der Milchbrot'], t: 'el pan de leche', e: 'das Brot manda → das Milchbrot.' },
      { s: 'der Käse + das Brot = ___', a: 'das Käsebrot', d: ['der Käsebrot', 'die Käsebrot'], t: 'el pan con queso', e: 'La última palabra da el género.' },
      { s: 'das Obst + der Salat = ___', a: 'der Obstsalat', d: ['das Obstsalat', 'die Obstsalat'], t: 'la macedonia', e: 'der Salat → der Obstsalat.' },
      { s: 'die Kartoffel + die Suppe = ___', a: 'die Kartoffelsuppe', d: ['der Kartoffelsuppe', 'das Kartoffelsuppe'], t: 'la sopa de patata', e: 'die Suppe manda.' }
    ],
    orders: [
      { sol: ['Ich', 'möchte', 'bitte', 'einen', 'Apfelsaft'], t: 'Quisiera un zumo de manzana, por favor.', e: 'der Apfelsaft → einen en acusativo.' },
      { sol: ['Der', 'Obstsalat', 'schmeckt', 'sehr', 'gut'], t: 'La macedonia está muy buena.', e: 'der Obstsalat.' },
      { sol: ['Sie', 'isst', 'ein', 'Butterbrot'], t: 'Se come un pan con mantequilla.', e: 'das Butterbrot → ein.' },
      { sol: ['Hast', 'du', 'die', 'Hausaufgaben', 'gemacht?'], t: '¿Has hecho los deberes?', e: 'die Hausaufgabe / die Hausaufgaben.' }
    ],
    clozes: [
      { txt: 'Zum Frühstück esse ich ___ Käsebrot und trinke ___ Apfelsaft. Mittags gibt es oft ___ Kartoffelsuppe und danach ___ Obstsalat.', a: ['ein', 'einen', 'eine', 'einen'], extra: ['einem', 'einer', 'eines'], t: 'Para desayunar como un pan con queso y bebo un zumo de manzana. Al mediodía hay muchas veces sopa de patata y después macedonia.', e: 'El artículo lo manda la última palabra del compuesto: das Brot → ein, der Saft → einen, die Suppe → eine.' }
    ]
  },

  // ---------- A1.1 L8: jeden Tag, jede Woche ----------
  'haufigkeitsangaben-mit-jed': {
    reserva: ['jedem', 'jeder'],
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
      { s: '___ Mal ist es anders.', a: 'Jedes', d: ['Jeden', 'Jede'], t: 'Cada vez es distinto.', e: 'Mal es neutro → jedes.' },
      { s: '___ Sommer fahren wir ans Meer.', a: 'Jeden', d: ['Jedes', 'Jede'], t: 'Todos los veranos vamos al mar.', e: '"der Sommer" en acusativo de tiempo → jeden.' },
      { s: 'Sie ruft ___ Abend ihre Mutter an.', a: 'jeden', d: ['jedes', 'jede'], t: 'Llama a su madre todas las noches.', e: '"der Abend" → jeden.' },
      { s: '___ Kind bekommt ein Buch.', a: 'Jedes', d: ['Jeden', 'Jede'], t: 'Cada niño recibe un libro.', e: '"das Kind" en nominativo → jedes.' },
      { s: '___ Schülerin hat einen eigenen Platz.', a: 'Jede', d: ['Jeden', 'Jedes'], t: 'Cada alumna tiene su propio sitio.', e: 'Femenino en nominativo → jede.' },
      { s: 'Wir gehen ___ Donnerstag ins Kino.', a: 'jeden', d: ['jedes', 'jede'], t: 'Vamos al cine todos los jueves.', e: 'Los días son masculinos → jeden.' },
      { s: '___ Semester fängt im Oktober an.', a: 'Jedes', d: ['Jeden', 'Jede'], t: 'Cada semestre empieza en octubre.', e: '"das Semester" en nominativo → jedes.' },
      { s: 'Er trinkt ___ Morgen zwei Kaffee.', a: 'jeden', d: ['jedes', 'jede'], t: 'Se toma dos cafés cada mañana.', e: '"der Morgen" → jeden.' },
      { s: '___ Nacht wache ich einmal auf.', a: 'Jede', d: ['Jeden', 'Jedes'], t: 'Todas las noches me despierto una vez.', e: '"die Nacht" es femenino → jede.' },
      { s: 'Ich putze ___ Samstag die Wohnung.', a: 'jeden', d: ['jedes', 'jede'], t: 'Limpio el piso todos los sábados.', e: 'Día masculino → jeden.' },
      { s: '___ Wohnung hier hat einen Balkon.', a: 'Jede', d: ['Jeden', 'Jedes'], t: 'Todos los pisos de aquí tienen balcón.', e: '"die Wohnung" en nominativo → jede.' },
      { s: '___ Frühling putzen wir das ganze Haus.', a: 'Jeden', d: ['Jedes', 'Jede'], t: 'Cada primavera limpiamos la casa entera.', e: '"der Frühling" en acusativo de tiempo → jeden.' },
      { s: '___ Woche gehe ich zweimal joggen.', a: 'Jede', d: ['Jeden', 'Jedes'], t: 'Cada semana salgo dos veces a correr.', e: 'die Woche → jede.' },
      { s: '___ Morgen trainiere ich vor der Arbeit.', a: 'Jeden', d: ['Jede', 'Jedes'], t: 'Cada mañana entreno antes del trabajo.', e: 'der Morgen como complemento de tiempo → jeden.' },
      { s: '___ Wochenende gehen wir in die Halle.', a: 'Jedes', d: ['Jeden', 'Jede'], t: 'Cada fin de semana vamos al pabellón.', e: 'das Wochenende → jedes.' },
      { s: '___ Dienstag habe ich Chorprobe.', a: 'Jeden', d: ['Jede', 'Jedes'], t: 'Cada martes tengo ensayo del coro.', e: 'der Dienstag como complemento de tiempo → jeden.' },
      { s: '___ Jahr fahren wir einmal ans Meer.', a: 'Jedes', d: ['Jeden', 'Jede'], t: 'Cada año vamos una vez al mar.', e: 'das Jahr → jedes.' },
      { s: '___ Stunde mache ich eine kurze Pause.', a: 'Jede', d: ['Jeden', 'Jedes'], t: 'Cada hora hago una pausa corta.', e: 'die Stunde → jede.' },
      { s: '___ Abend lese ich eine halbe Stunde.', a: 'Jeden', d: ['Jede', 'Jedes'], t: 'Cada tarde leo media hora.', e: 'der Abend como complemento de tiempo → jeden.' },
      { s: '___ zweite Woche habe ich Spätdienst.', a: 'Jede', d: ['Jeden', 'Jedes'], t: 'Una semana sí y otra no tengo turno de tarde.', e: 'die Woche: jede.' },
      { s: 'Er ruft ___ Sonntag seine Mutter an.', a: 'jeden', d: ['jede', 'jedes'], t: 'Llama a su madre todos los domingos.', e: 'der Sonntag en acusativo: jeden.' },
      { s: '___ Mal vergesse ich denselben Namen.', a: 'Jedes', d: ['Jeden', 'Jede'], t: 'Cada vez se me olvida el mismo nombre.', e: 'das Mal: jedes.' },
      { s: 'Sie fährt ___ Jahr zweimal nach Spanien.', a: 'jedes', d: ['jeden', 'jede'], t: 'Va dos veces al año a España.', e: 'das Jahr: jedes.' },
      { s: '___ Morgen läuft er eine halbe Stunde.', a: 'Jeden', d: ['Jede', 'Jedes'], t: 'Todas las mañanas corre media hora.', e: 'der Morgen en acusativo: jeden.' },
      { s: '___ Nacht wacht das Baby zweimal auf.', a: 'Jede', d: ['Jeden', 'Jedes'], t: 'Todas las noches el bebé se despierta dos veces.', e: 'die Nacht: jede.' },
      { s: 'Der Bus fährt ___ halbe Stunde.', a: 'jede', d: ['jeden', 'jedes'], t: 'El autobús pasa cada media hora.', e: 'die Stunde: jede halbe Stunde.' },
      { s: '___ Wochenende ist unten am Platz Markt.', a: 'Jedes', d: ['Jeden', 'Jede'], t: 'Todos los fines de semana hay mercado abajo en la plaza.', e: 'das Wochenende: jedes.' }
    ],
    orders: [
      { sol: ['Ich', 'gehe', 'jeden', 'Tag', 'laufen'], t: 'Salgo a correr todos los días.', e: 'jeden Tag (acusativo masculino).' },
      { sol: ['Jedes', 'Wochenende', 'spielen', 'wir', 'Fußball'], alt: [['Wir', 'spielen', 'jedes', 'Wochenende', 'Fußball']], t: 'Cada fin de semana jugamos al fútbol.', e: 'jedes Wochenende al principio → inversión.' },
      { sol: ['Jede', 'Woche', 'habe', 'ich', 'zwei', 'Kurse'], alt: [['Ich', 'habe', 'jede', 'Woche', 'zwei', 'Kurse']], t: 'Cada semana tengo dos cursos.', e: 'jede Woche.' },
      { sol: ['Er', 'trainiert', 'jeden', 'Abend', 'im', 'Fitnessstudio'], t: 'Entrena todas las tardes en el gimnasio.', e: 'jeden Abend.' },
      { sol: ['Ich', 'gehe', 'jeden', 'Tag', 'eine', 'Stunde', 'laufen'], t: 'Salgo a correr una hora todos los días.', e: '"jeden Tag" es acusativo de tiempo, no sujeto.' },
      { sol: ['Jede', 'Woche', 'habe', 'ich', 'drei', 'Kurse'], alt: [['Ich', 'habe', 'jede', 'Woche', 'drei', 'Kurse']], t: 'Cada semana tengo tres cursos.', e: 'El complemento abre → inversión.' },
      { sol: ['Jeden', 'Morgen', 'gehe', 'ich', 'schwimmen'], alt: [['Ich', 'gehe', 'jeden', 'Morgen', 'schwimmen']], t: 'Todas las mañanas voy a nadar.', e: '"jeden Morgen" es acusativo de tiempo y abre la frase.' }
    ],
    clozes: [
      { txt: '___ Tag stehe ich um sechs auf. ___ Woche habe ich drei Kurse, und ___ Wochenende besuche ich meine Eltern. ___ Sommer fahren wir zusammen ans Meer.', a: ['Jeden', 'Jede', 'jedes', 'Jeden'], extra: ['Jedes', 'Jeden', 'jede', 'Jedes'], t: 'Todos los días me levanto a las seis. Cada semana tengo tres cursos, y todos los fines de semana visito a mis padres. Cada verano vamos juntos al mar.', e: 'La terminación la manda el género de la palabra que sigue: der Tag y der Sommer → jeden, die Woche → jede, das Wochenende → jedes.' }
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
      { s: '___ Mal war es besser.', a: 'Letztes', d: ['Letzten', 'Letzte'], t: 'La última vez fue mejor.', e: 'Mal es neutro → letztes.' },
      { s: '___ Woche fahre ich nach Graz.', a: 'Nächste', d: ['Letzte', 'Nächsten'], t: 'La semana que viene voy a Graz.', e: 'Lo que viene → nächst-; "die Woche" → nächste.' },
      { s: '___ Jahr war ich in Italien.', a: 'Letztes', d: ['Nächstes', 'Letzten'], t: 'El año pasado estuve en Italia.', e: 'Lo que ya pasó → letzt-; "das Jahr" → letztes.' },
      { s: '___ Montag habe ich einen Termin.', a: 'Nächsten', d: ['Nächste', 'Letzte'], t: 'El lunes que viene tengo cita.', e: '"der Montag" como complemento de tiempo → acusativo: nächsten.' },
      { s: '___ Wochenende waren wir in den Bergen.', a: 'Letztes', d: ['Letzten', 'Nächstes'], t: 'El fin de semana pasado estuvimos en la montaña.', e: '"das Wochenende" → letztes.' },
      { s: '___ Sommer möchte ich nach Kroatien.', a: 'Nächsten', d: ['Nächste', 'Letztes'], t: 'El verano que viene quiero ir a Croacia.', e: '"der Sommer" en acusativo de tiempo → nächsten.' },
      { s: '___ Mal machen wir es besser.', a: 'Nächstes', d: ['Nächsten', 'Letzte'], t: 'La próxima vez lo haremos mejor.', e: '"das Mal" → nächstes.' },
      { s: '___ Woche hatte ich viel zu tun.', a: 'Letzte', d: ['Letzten', 'Nächste'], t: 'La semana pasada tuve mucho que hacer.', e: '"die Woche" → letzte.' },
      { s: 'Wir sehen uns ___ Freitag.', a: 'nächsten', d: ['nächste', 'letzten'], t: 'Nos vemos el viernes que viene.', e: 'Día masculino en acusativo → nächsten.' },
      { s: '___ Woche war ich krank.', a: 'Letzte', d: ['Letzten', 'Letztes'], t: 'La semana pasada estuve enfermo.', e: 'die Woche en nominativo → letzte.' },
      { s: '___ Montag fange ich an.', a: 'Nächsten', d: ['Nächste', 'Nächstes'], t: 'El lunes que viene empiezo.', e: 'der Montag como complemento de tiempo → nächsten.' },
      { s: '___ Jahr fahren wir nach Spanien.', a: 'Nächstes', d: ['Nächste', 'Nächsten'], t: 'El año que viene vamos a España.', e: 'das Jahr → nächstes.' },
      { s: '___ Sommer war es sehr heiß.', a: 'Letzten', d: ['Letzte', 'Letztes'], t: 'El verano pasado hizo mucho calor.', e: 'der Sommer como complemento de tiempo → letzten.' },
      { s: '___ Wochenende bleibe ich zu Hause.', a: 'Nächstes', d: ['Nächste', 'Nächsten'], t: 'El fin de semana que viene me quedo en casa.', e: 'das Wochenende → nächstes.' }
    ],
    orders: [
      { sol: ['Letzten', 'Sommer', 'war', 'ich', 'in', 'Kroatien'], alt: [['Ich', 'war', 'letzten', 'Sommer', 'in', 'Kroatien']], t: 'El verano pasado estuve en Croacia.', e: 'Complemento inicial → inversión.' },
      { sol: ['Nächste', 'Woche', 'habe', 'ich', 'Urlaub'], alt: [['Ich', 'habe', 'nächste', 'Woche', 'Urlaub']], t: 'La semana que viene tengo vacaciones.', e: 'nächste Woche.' },
      { sol: ['Nächstes', 'Jahr', 'ziehen', 'wir', 'nach', 'Graz'], alt: [['Wir', 'ziehen', 'nächstes', 'Jahr', 'nach', 'Graz']], t: 'El año que viene nos mudamos a Graz.', e: 'nächstes Jahr.' },
      { sol: ['Letzten', 'Montag', 'war', 'ich', 'beim', 'Arzt'], alt: [['Ich', 'war', 'letzten', 'Montag', 'beim', 'Arzt']], t: 'El lunes pasado estuve en el médico.', e: 'letzten Montag.' }
    ],
    clozes: [
      { txt: '___ Woche hatte ich viel zu tun, aber ___ Woche wird ruhiger. ___ Montag fange ich ein neues Projekt an, und ___ Jahr war das ganz anders.', a: ['Letzte', 'nächste', 'Nächsten', 'letztes'], extra: ['Letzten', 'nächsten', 'Nächste', 'letzte'], t: 'La semana pasada tuve mucho que hacer, pero la que viene será más tranquila. El lunes que viene empiezo un proyecto nuevo, y el año pasado esto era muy distinto.', e: 'La terminación la manda el género y la función: die Woche en nominativo → letzte/nächste, der Montag como complemento de tiempo → nächsten, das Jahr → letztes.' }
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
      { s: 'Ich gehe ___ zu Fuß als mit dem Bus.', a: 'lieber', d: ['gerner', 'am liebsten'], t: 'Prefiero ir a pie que en autobús.', e: 'lieber … als.' },
      { s: 'Diese Jacke gefällt mir ___ als die andere.', a: 'besser', d: ['gut', 'am besten'], t: 'Esta chaqueta me gusta más que la otra.', e: 'Comparativo irregular de gut: besser.' },
      { s: 'Am ___ trage ich einfache Jeans.', a: 'liebsten', d: ['lieber', 'gern'], t: 'Lo que más me gusta llevar son vaqueros sencillos.', e: 'Superlativo de gern: am liebsten.' },
      { s: 'Dieses Geschäft hat ___ Auswahl als das andere.', a: 'mehr', d: ['viel', 'am meisten'], t: 'Esta tienda tiene más variedad que la otra.', e: 'Comparativo de viel: mehr.' },
      { s: 'Welches Modell ist ___?', a: 'am besten', d: ['besser', 'gut'], t: '¿Qué modelo es el mejor?', e: 'Superlativo de gut: am besten.' }
    ],
    orders: [
      { sol: ['Diese', 'Jacke', 'gefällt', 'mir', 'besser'], t: 'Esta chaqueta me gusta más.', e: 'besser (comparativo de gut).' },
      { sol: ['Am', 'liebsten', 'trage', 'ich', 'Jeans'], alt: [['Ich', 'trage', 'am', 'liebsten', 'Jeans']], t: 'Lo que más me gusta es llevar vaqueros.', e: 'Am liebsten al principio → inversión.' },
      { sol: ['Ich', 'trinke', 'lieber', 'Tee', 'als', 'Kaffee'], t: 'Prefiero el té al café.', e: 'lieber … als.' },
      { sol: ['Das', 'ist', 'das', 'beste', 'Restaurant', 'der', 'Stadt'], t: 'Es el mejor restaurante de la ciudad.', e: 'Superlativo delante del sustantivo.' }
    ],
    clozes: [
      { txt: 'Die blaue Jacke gefällt mir ___ als die rote, aber ___ mag ich die schwarze. Sie ist zwar teurer, aber die Qualität ist ___.', a: ['besser', 'am liebsten', 'besser'], extra: ['gut', 'gern', 'gut'], t: 'La chaqueta azul me gusta más que la roja, pero la que más me gusta es la negra. Es más cara, pero la calidad es mejor.', e: 'Las formas irregulares: gut → besser → am besten, y gern → lieber → am liebsten.' },
      { txt: 'Die blaue Jacke gefällt mir ___ als die graue, aber die schwarze gefällt mir ___. Sie kostet zwar ___, aber sie hält länger.', a: ['besser', 'am besten', 'mehr'], extra: ['gut', 'gern', 'viel'], t: 'La chaqueta azul me gusta más que la gris, pero la que más me gusta es la negra. Cuesta más, pero dura más.', e: 'Las tres irregulares: gut → besser → am besten, y viel → mehr.' }
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
      { s: 'Er isst ___ Gemüse als früher.', a: 'mehr', d: ['vieler', 'am meisten'], t: 'Come más verdura que antes.', e: 'mehr … als.' },
      { s: 'Schwimmen ist ___ als Laufen.', a: 'gesünder', d: ['gesund', 'am gesündesten'], t: 'Nadar es más sano que correr.', e: 'Comparativo con -er y Umlaut: gesund → gesünder.' },
      { s: 'Mein Rad ist ___ als deins.', a: 'älter', d: ['alt', 'am ältesten'], t: 'Mi bici es más vieja que la tuya.', e: 'alt → älter.' },
      { s: 'Heute war das Training ___ als gestern.', a: 'härter', d: ['hart', 'am härtesten'], t: 'Hoy el entrenamiento fue más duro que ayer.', e: 'hart → härter.' },
      { s: 'Der Weg am Fluss ist ___.', a: 'schöner', d: ['schön', 'am schönen'], t: 'El camino junto al río es más bonito.', e: 'schön → schöner, sin Umlaut.' },
      { s: 'Im Winter stehe ich ___ auf als im Sommer.', a: 'später', d: ['spät', 'am spätesten'], t: 'En invierno me levanto más tarde que en verano.', e: 'spät → später.' },
      { s: 'Diese Schuhe sind ___ als die anderen.', a: 'bequemer', d: ['bequem', 'am bequemsten'], t: 'Estos zapatos son más cómodos que los otros.', e: 'bequem → bequemer.' },
      { s: 'Mit dem Rad bin ich ___ da.', a: 'schneller', d: ['schnell', 'am schnellsten'], t: 'En bici llego antes.', e: 'schnell → schneller.' },
      { s: 'Das Wasser im See ist ___ als im Meer.', a: 'kälter', d: ['kalt', 'am kältesten'], t: 'El agua del lago está más fría que la del mar.', e: 'kalt → kälter.' },
      { s: 'Schwimmen finde ich ___ als Joggen.', a: 'besser', d: ['gut', 'am besten'], t: 'Nadar me parece mejor que correr.', e: 'Comparativo de gut: besser.' },
      { s: 'Am ___ klettere ich im Freien.', a: 'liebsten', d: ['lieber', 'gern'], t: 'Lo que más me gusta es escalar al aire libre.', e: 'Superlativo de gern: am liebsten.' },
      { s: 'Im Winter trainiere ich ___ als im Sommer.', a: 'weniger', d: ['wenig', 'am wenigsten'], t: 'En invierno entreno menos que en verano.', e: 'Comparativo de wenig: weniger.' },
      { s: 'Er läuft von allen ___.', a: 'am schnellsten', d: ['schneller', 'schnell'], t: 'Él es el que corre más rápido de todos.', e: 'Superlativo: am schnellsten.' },
      { s: 'Yoga mache ich heute ___ als früher.', a: 'lieber', d: ['gern', 'am liebsten'], t: 'Hoy hago yoga más a gusto que antes.', e: 'Comparativo de gern: lieber.' }
    ],
    orders: [
      { sol: ['Ich', 'schwimme', 'gern,', 'aber', 'ich', 'laufe', 'lieber'], t: 'Me gusta nadar, pero prefiero correr.', e: 'gern → lieber.' },
      { sol: ['Am', 'liebsten', 'gehe', 'ich', 'klettern'], alt: [['Ich', 'gehe', 'am', 'liebsten', 'klettern']], t: 'Lo que más me gusta es escalar.', e: 'Superlativo al principio → inversión.' },
      { sol: ['Zofia', 'spielt', 'besser', 'Volleyball', 'als', 'ich'], t: 'Zofia juega mejor al voleibol que yo.', e: 'besser … als.' },
      { sol: ['Er', 'trainiert', 'am', 'meisten', 'von', 'allen'], t: 'Él es el que más entrena de todos.', e: 'am meisten von allen.' }
    ],
    clozes: [
      { txt: 'Laufen ist ___ als Radfahren, aber Schwimmen ist ___ für den Rücken. Im Winter trainiere ich ___ als im Sommer.', a: ['anstrengender', 'gesünder', 'weniger'], extra: ['anstrengend', 'gesund', 'wenig'], t: 'Correr es más cansado que ir en bici, pero nadar es más sano para la espalda. En invierno entreno menos que en verano.', e: 'Comparativo con -er, con Umlaut en gesund → gesünder, y la forma irregular de wenig → weniger.' }
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
      { s: 'Heute ist der ___ Jänner.', a: 'sechste', d: ['sechte', 'sechs'], t: 'Hoy es seis de enero.', e: 'sechs → der sechste.' },
      { s: 'Der ___ Januar ist ein Feiertag.', a: 'erste', d: ['eins', 'ersten'], t: 'El uno de enero es festivo.', e: 'Como sujeto: der erste.' },
      { s: 'Ich habe am ___ April Geburtstag.', a: 'zwölften', d: ['zwölf', 'zwölfte'], t: 'Mi cumpleaños es el doce de abril.', e: 'Con "am" va en dativo: am zwölften.' },
      { s: 'Die Prüfung ist am ___ November.', a: 'vierten', d: ['vier', 'vierte'], t: 'El examen es el cuatro de noviembre.', e: 'am + ordinal en dativo.' },
      { s: 'Der Wievielte ist heute? – Der ___.', a: 'dritte', d: ['drei', 'dritten'], t: '¿A qué día estamos? – A tres.', e: 'Respuesta con nominativo: der dritte.' },
      { s: 'Wir fahren vom ___ bis zum zehnten Juni.', a: 'dritten', d: ['dritte', 'drei'], t: 'Vamos del tres al diez de junio.', e: 'vom + dativo: vom dritten.' },
      { s: 'Mein Termin ist am ___ Oktober.', a: 'zwanzigsten', d: ['zwanzig', 'zwanzigste'], t: 'Mi cita es el veinte de octubre.', e: 'A partir de veinte el ordinal acaba en -sten con "am".' },
      { s: 'Der ___ Juli war ein Sonntag.', a: 'siebte', d: ['sieben', 'siebten'], t: 'El siete de julio fue domingo.', e: 'Sujeto → der siebte.' },
      { s: 'Bis zum ___ müssen wir das abgeben.', a: 'fünfzehnten', d: ['fünfzehn', 'fünfzehnte'], t: 'Tenemos que entregarlo antes del quince.', e: 'bis zum + dativo.' },
      { s: 'Morgen ist schon der ___ Mai.', a: 'erste', d: ['ersten', 'eins'], t: 'Mañana ya es uno de mayo.', e: 'Con der va la forma en -e: der erste Mai.' },
      { s: 'Ich komme am ___ Juni zurück.', a: 'dritten', d: ['dritte', 'drei'], t: 'Vuelvo el tres de junio.', e: 'am + ordinal en -en: am dritten.' },
      { s: 'Der Termin ist am ___ März.', a: 'zwanzigsten', d: ['zwanzigste', 'zwanzig'], t: 'La cita es el veinte de marzo.', e: 'A partir de veinte se dice -sten: zwanzigsten.' },
      { s: 'Mein Geburtstag ist der ___ Oktober.', a: 'siebte', d: ['siebten', 'sieben'], t: 'Mi cumpleaños es el siete de octubre.', e: 'Con der: der siebte Oktober.' }
    ],
    orders: [
      { sol: ['Heute', 'ist', 'der', 'fünfte', 'Mai'], t: 'Hoy es cinco de mayo.', e: 'La fecha como sujeto va en nominativo.' },
      { sol: ['Ich', 'habe', 'am', 'zwanzigsten', 'Juni', 'Geburtstag'], t: 'Cumplo años el veinte de junio.', e: 'am + ordinal en -sten.' },
      { sol: ['Der', 'Kurs', 'beginnt', 'am', 'ersten', 'September'], t: 'El curso empieza el uno de septiembre.', e: 'am ersten September.' },
      { sol: ['Wir', 'treffen', 'uns', 'am', 'achten', 'April'], t: 'Quedamos el ocho de abril.', e: 'am achten April.' }
    ],
    clozes: [
      { txt: 'Heute ist der ___ Mai. Mein Kurs beginnt am ___ Juni und geht bis zum ___ Juli. Am ___ August habe ich Geburtstag.', a: ['erste', 'zehnten', 'dritten', 'zwölften'], extra: ['ersten', 'zehnte', 'dritte', 'zwölfte'], t: 'Hoy es uno de mayo. Mi curso empieza el diez de junio y dura hasta el tres de julio. El doce de agosto es mi cumpleaños.', e: 'El primero va en nominativo (der erste) porque es el sujeto; los otros tres llevan am o bis zum, que piden dativo y terminación -en.' }
    ]
  },

  // ---------- A2.1 L1: un- y -los ----------
  'wortbildung-un-los': {
    picks: [
      { s: 'Er sucht schon lange Arbeit: er ist seit einem Jahr ___.', a: 'arbeitslos', d: ['unarbeit', 'arbeitsfrei'], t: 'Lleva mucho buscando trabajo: está en paro desde hace un año.', e: '-los = "sin": Arbeit + -los → arbeitslos.' },
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
      { s: 'Das Kind ist heute sehr ___.', a: 'unruhig', d: ['ruhelos', 'nichtruhig'], t: 'El niño está hoy muy inquieto.', e: 'ruhig → unruhig.' },
      { s: 'Das Wetter war leider sehr ___ (freundlich).', a: 'unfreundlich', d: ['freundlichlos', 'nichtfreundlich'], t: 'El tiempo fue por desgracia muy desapacible.', e: '"un-" delante del adjetivo le da el sentido contrario.' },
      { s: 'Nach dem Kurs war ich ___ (arbeit).', a: 'arbeitslos', d: ['unarbeit', 'arbeitun'], t: 'Después del curso me quedé en paro.', e: '"-los" al final significa "sin": Arbeit + -los.' },
      { s: 'Diese Antwort ist völlig ___ (nötig).', a: 'unnötig', d: ['nötiglos', 'nichtnötig'], t: 'Esa respuesta es totalmente innecesaria.', e: 'un- + nötig.' },
      { s: 'Der Eintritt ist heute ___ (Kosten).', a: 'kostenlos', d: ['unkosten', 'kostenun'], t: 'Hoy la entrada es gratuita.', e: 'Kosten + -los = sin coste.' },
      { s: 'Das Formular war mir völlig ___ (klar).', a: 'unklar', d: ['klarlos', 'nichtklar'], t: 'El formulario no me quedó nada claro.', e: 'un- + klar.' },
      { s: 'Ohne Handy fühle ich mich ___ (Hilfe).', a: 'hilflos', d: ['unhilfe', 'hilfeun'], t: 'Sin móvil me siento indefenso.', e: 'Hilfe + -los.' },
      { s: 'Die Wohnung war ganz ___ (möbliert).', a: 'unmöbliert', d: ['möbliertlos', 'nichtmöbliert'], t: 'El piso estaba sin amueblar.', e: 'un- + möbliert.' },
      { s: 'Der Hund ist ganz ___ (Gefahr).', a: 'gefahrlos', d: ['ungefahr', 'gefahrun'], t: 'El perro es completamente inofensivo.', e: 'Gefahr + -los.' },
      { s: 'Nach der Kündigung war ich lange ___.', a: 'arbeitslos', d: ['unarbeit', 'losarbeit'], t: 'Después del despido estuve mucho tiempo en paro.', e: '-los significa sin: arbeitslos.' },
      { s: 'Am Anfang war ich sehr ___.', a: 'unsicher', d: ['sicherlos', 'losicher'], t: 'Al principio estaba muy inseguro.', e: 'un- niega el adjetivo: unsicher.' },
      { s: 'Die Prüfung ist zum Glück ___ verlaufen.', a: 'problemlos', d: ['unproblem', 'losproblem'], t: 'Por suerte el examen fue sin problemas.', e: '-los con un sustantivo: sin problemas.' },
      { s: 'Er war an dem Tag völlig ___.', a: 'sprachlos', d: ['unsprache', 'lossprach'], t: 'Ese día se quedó completamente sin palabras.', e: '-los con Sprache: sprachlos.' }
    ],
    orders: [
      { sol: ['Er', 'ist', 'seit', 'einem', 'Jahr', 'arbeitslos'], t: 'Lleva un año en paro.', e: 'Arbeit + -los.' },
      { sol: ['Ich', 'bin', 'mit', 'dem', 'Ergebnis', 'unzufrieden'], t: 'No estoy satisfecho con el resultado.', e: 'un- + zufrieden.' },
      { sol: ['Die', 'neue', 'App', 'ist', 'völlig', 'kostenlos'], t: 'La nueva app es totalmente gratis.', e: 'Kosten + -los.' },
      { sol: ['Das', 'ist', 'für', 'mich', 'einfach', 'unmöglich'], t: 'Eso para mí es simplemente imposible.', e: 'un- + möglich.' }
    ],
    clozes: [
      { txt: 'Am Anfang war alles ___ (klar) und ich fühlte mich oft ___ (Hilfe). Der Deutschkurs war zum Glück ___ (Kosten), und die Lehrerin war nie ___ (freundlich).', a: ['unklar', 'hilflos', 'kostenlos', 'unfreundlich'], extra: ['klarlos', 'unhilfe', 'unkosten', 'freundlichlos'], t: 'Al principio todo era confuso y muchas veces me sentía indefenso. Por suerte el curso de alemán era gratuito, y la profesora nunca fue antipática.', e: '"un-" va delante y da el contrario; "-los" va detrás y significa "sin". No se pueden intercambiar.' }
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
      { s: 'Dieses Zimmer ist ___ als das andere.', a: 'kleiner', d: ['klein', 'am kleinsten'], t: 'Esta habitación es más pequeña que la otra.', e: 'klein → kleiner (sin Umlaut).' },
      { s: 'Von allen Sportarten mag ich Schwimmen ___.', a: 'am liebsten', d: ['lieber', 'gern'], t: 'De todos los deportes el que más me gusta es la natación.', e: 'Superlativo de gern: am liebsten.' },
      { s: 'Er läuft ___ von uns dreien.', a: 'am schnellsten', d: ['schneller', 'schnell'], t: 'Es el que corre más rápido de los tres.', e: 'Superlativo con "am …sten".' },
      { s: 'Das Training heute war ___ als gestern.', a: 'kürzer', d: ['kurz', 'am kürzesten'], t: 'El entrenamiento de hoy fue más corto que el de ayer.', e: 'Comparativo con -er + als.' },
      { s: 'Wer ist ___ in der Mannschaft?', a: 'am jüngsten', d: ['jünger', 'jung'], t: '¿Quién es el más joven del equipo?', e: 'Superlativo con Umlaut: jung → am jüngsten.' },
      { s: 'Radfahren finde ich ___ als Laufen.', a: 'angenehmer', d: ['angenehm', 'am angenehmsten'], t: 'Ir en bici me parece más agradable que correr.', e: 'Comparativo regular.' },
      { s: 'Im Winter trainiere ich ___.', a: 'am wenigsten', d: ['weniger', 'wenig'], t: 'En invierno es cuando menos entreno.', e: 'Superlativo de wenig: am wenigsten.' },
      { s: 'Dieses Jahr bin ich ___ als letztes Jahr.', a: 'fitter', d: ['fit', 'am fittesten'], t: 'Este año estoy más en forma que el año pasado.', e: 'fit → fitter.' },
      { s: 'Von allen Übungen ist diese ___.', a: 'am schwersten', d: ['schwerer', 'schwer'], t: 'De todos los ejercicios este es el más difícil.', e: 'Superlativo: am schwersten.' },
      { s: 'Dieser Weg ist ___ als der andere.', a: 'kürzer', d: ['kurz', 'am kürzesten'], t: 'Este camino es más corto que el otro.', e: 'Comparativo con -er y Umlaut: kürzer.' },
      { s: 'Der Marathon war das ___ Rennen des Jahres.', a: 'härteste', d: ['härter', 'hart'], t: 'El maratón fue la carrera más dura del año.', e: 'Superlativo delante del sustantivo: das härteste.' },
      { s: 'Im Hallenbad ist es ___ als im Freibad.', a: 'wärmer', d: ['warm', 'am wärmsten'], t: 'En la piscina cubierta está más caliente que en la de fuera.', e: 'warm → wärmer, con Umlaut.' },
      { s: 'Diese Übung ist ___ von allen.', a: 'am leichtesten', d: ['leichter', 'leicht'], t: 'Este ejercicio es el más fácil de todos.', e: 'Superlativo con am … -sten.' },
      { s: 'Der neue Trainer ist ___ als der alte.', a: 'strenger', d: ['streng', 'am strengsten'], t: 'El entrenador nuevo es más estricto que el antiguo.', e: 'Comparativo con -er.' }
    ],
    orders: [
      { sol: ['Fußball', 'ist', 'populärer', 'als', 'Handball'], t: 'El fútbol es más popular que el balonmano.', e: 'Comparativo + als.' },
      { sol: ['Von', 'allen', 'läuft', 'Zofia', 'am', 'schnellsten'], t: 'De todos, Zofia es la que corre más rápido.', e: 'am + -sten.' },
      { sol: ['Mein', 'Bruder', 'ist', 'älter', 'als', 'ich'], t: 'Mi hermano es mayor que yo.', e: 'alt → älter.' },
      { sol: ['Das', 'ist', 'die', 'längste', 'Straße', 'der', 'Stadt'], t: 'Es la calle más larga de la ciudad.', e: 'Superlativo delante del sustantivo.' },
      { sol: ['Schwimmen', 'ist', 'gesünder', 'als', 'Laufen'], t: 'Nadar es más sano que correr.', e: 'Comparativo + als, y el adjetivo antes.' },
      { sol: ['Von', 'allen', 'mag', 'ich', 'Schwimmen', 'am', 'liebsten'], alt: [['Ich', 'mag', 'von', 'allen', 'Schwimmen', 'am', 'liebsten']], t: 'De todos, el que más me gusta es nadar.', e: 'El complemento abre y el superlativo cierra.' }
    ],
    clozes: [
      { txt: 'Laufen ist ___ als Radfahren, aber Schwimmen finde ich ___. Am Morgen fühle ich mich ___ als am Abend.', a: ['anstrengender', 'am besten', 'fitter'], extra: ['anstrengend', 'gut', 'fit'], t: 'Correr es más cansado que ir en bici, pero lo que más me gusta es nadar. Por la mañana me siento más en forma que por la noche.', e: 'Comparativo con -er + als; superlativo con "am …sten". "gut" es irregular: besser, am besten.' }
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
      { s: 'Mein Zimmer ist so hell ___ deins.', a: 'wie', d: ['als', 'dass'], t: 'Mi habitación es tan luminosa como la tuya.', e: 'so hell … wie.' },
      { s: 'Ich trainiere so oft ___ du.', a: 'wie', d: ['als', 'denn'], t: 'Entreno tantas veces como tú.', e: 'Igualdad: so … wie.' },
      { s: 'Heute war ich schneller ___ gestern.', a: 'als', d: ['wie', 'so'], t: 'Hoy fui más rápido que ayer.', e: 'Diferencia: comparativo + als.' },
      { s: 'Er ist genauso groß ___ sein Bruder.', a: 'wie', d: ['als', 'denn'], t: 'Es exactamente igual de alto que su hermano.', e: 'genauso … wie.' },
      { s: 'Radfahren ist nicht so anstrengend ___ Laufen.', a: 'wie', d: ['als', 'so'], t: 'Ir en bici no cansa tanto como correr.', e: 'nicht so … wie.' },
      { s: 'Die Mannschaft ist besser ___ letztes Jahr.', a: 'als', d: ['wie', 'so'], t: 'El equipo está mejor que el año pasado.', e: 'besser + als.' },
      { s: 'Ich schwimme lieber ___ ich laufe.', a: 'als', d: ['wie', 'so'], t: 'Prefiero nadar a correr.', e: 'lieber + als.' },
      { s: 'Sie läuft genauso schnell ___ er.', a: 'wie', d: ['als', 'denn'], t: 'Corre igual de rápido que él.', e: 'genauso schnell wie.' },
      { s: 'Das Training war härter ___ erwartet.', a: 'als', d: ['wie', 'so'], t: 'El entrenamiento fue más duro de lo esperado.', e: 'Comparativo + als.' },
      { s: 'Er läuft deutlich schneller ___ ich.', a: 'als', d: ['wie', 'so'], t: 'Él corre bastante más rápido que yo.', e: 'als cuando hay diferencia.' },
      { s: 'Sie schwimmt genauso gut ___ ich.', a: 'wie', d: ['als', 'so'], t: 'Ella nada tan bien como yo.', e: 'wie cuando hay igualdad.' },
      { s: 'Das Training war härter ___ letzte Woche.', a: 'als', d: ['wie', 'so'], t: 'El entrenamiento fue más duro que la semana pasada.', e: 'Con el comparativo siempre als.' },
      { s: 'Ich trainiere genau so oft ___ mein Bruder.', a: 'wie', d: ['als', 'dass'], t: 'Entreno exactamente tantas veces como mi hermano.', e: 'so … wie para la igualdad.' },
      { s: 'Klettern ist anstrengender ___ Radfahren.', a: 'als', d: ['wie', 'so'], t: 'Escalar cansa más que ir en bici.', e: 'Comparativo → als.' },
      { s: 'Er läuft ___ als ich.', a: 'schneller', d: ['schnell', 'am schnellsten'], t: 'Él corre más rápido que yo.', e: 'Con als hace falta el comparativo: schneller.' },
      { s: 'Sie ist genauso ___ wie ihre Schwester.', a: 'groß', d: ['größer', 'am größten'], t: 'Es igual de alta que su hermana.', e: 'Con so … wie el adjetivo va sin cambiar.' },
      { s: 'Klettern ist ___ als Radfahren.', a: 'anstrengender', d: ['anstrengend', 'am anstrengendsten'], t: 'Escalar cansa más que ir en bici.', e: 'Comparativo delante de als.' },
      { s: 'Das Training war so ___ wie letzte Woche.', a: 'hart', d: ['härter', 'am härtesten'], t: 'El entrenamiento fue tan duro como la semana pasada.', e: 'so … wie con la forma básica.' },
      { s: 'Im Hallenbad ist es ___ als draußen.', a: 'wärmer', d: ['warm', 'am wärmsten'], t: 'En la piscina cubierta está más caliente que fuera.', e: 'als pide comparativo.' },
      { s: 'Er trainiert genauso ___ wie ich.', a: 'oft', d: ['öfter', 'am öftesten'], t: 'Entrena tantas veces como yo.', e: 'Con so … wie no se usa comparativo.' },
      { s: 'Der Weg am Fluss ist ___ als der durch den Wald.', a: 'kürzer', d: ['kurz', 'am kürzesten'], t: 'El camino junto al río es más corto que el del bosque.', e: 'Comparativo con als.' },
      { s: 'Sie schwimmt so ___ wie eine Profisportlerin.', a: 'gut', d: ['besser', 'am besten'], t: 'Nada tan bien como una deportista profesional.', e: 'so … wie con la forma básica: gut.' }
    ],
    orders: [
      { sol: ['Schwimmen', 'ist', 'gesünder', 'als', 'Autofahren'], t: 'Nadar es más sano que ir en coche.', e: 'Comparativo + als.' },
      { sol: ['Sie', 'ist', 'so', 'sportlich', 'wie', 'ihr', 'Bruder'], t: 'Es tan deportista como su hermano.', e: 'so … wie.' },
      { sol: ['Heute', 'ist', 'es', 'kälter', 'als', 'gestern'], alt: [['Es', 'ist', 'heute', 'kälter', 'als', 'gestern']], t: 'Hoy hace más frío que ayer.', e: 'kälter als.' },
      { sol: ['Ich', 'bin', 'genauso', 'alt', 'wie', 'du'], t: 'Tengo la misma edad que tú.', e: 'genauso … wie.' },
      { sol: ['Ich', 'trainiere', 'so', 'oft', 'wie', 'du'], t: 'Entreno tantas veces como tú.', e: 'so … wie para la igualdad.' },
      { sol: ['Heute', 'war', 'ich', 'schneller', 'als', 'gestern'], alt: [['Ich', 'war', 'heute', 'schneller', 'als', 'gestern']], t: 'Hoy fui más rápido que ayer.', e: 'El complemento abre → inversión, y el comparativo con als.' }
    ],
    clozes: [
      { txt: 'Mein Bruder ist größer ___ ich, aber nicht so sportlich ___ ich. Er läuft genauso gern ___ ich, nur langsamer ___ früher.', a: ['als', 'wie', 'wie', 'als'], extra: ['so', 'dass', 'wenn'], t: 'Mi hermano es más alto que yo, pero no tan deportista como yo. Le gusta correr tanto como a mí, solo que más despacio que antes.', e: '"als" cuando hay diferencia (comparativo), "wie" cuando hay igualdad (so … wie, genauso … wie).' },
      { txt: 'Mein Bruder läuft schneller ___ ich, aber er schwimmt nicht so gut ___ ich. Er trainiert genauso oft ___ ich, nur härter ___ früher.', a: ['als', 'wie', 'wie', 'als'], extra: ['so', 'denn', 'dass'], t: 'Mi hermano corre más rápido que yo, pero no nada tan bien como yo. Entrena tantas veces como yo, solo que más duro que antes.', e: '"als" cuando hay diferencia y "wie" cuando hay igualdad. Los cuatro seguidos para que se vea el corte.' }
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
      { s: 'Er hat ___ davon erzählt.', a: 'niemandem', d: ['niemand', 'niemanden'], t: 'No se lo ha contado a nadie.', e: 'erzählen: el destinatario va en dativo → niemandem.' },
      { s: 'Hat ___ meine Tasche gesehen?', a: 'jemand', d: ['niemand', 'etwas'], t: '¿Alguien ha visto mi bolsa?', e: '"jemand" para preguntar por una persona indefinida.' },
      { s: 'Im Studio war ___ außer mir.', a: 'niemand', d: ['jemand', 'etwas'], t: 'En el gimnasio no había nadie más que yo.', e: '"niemand" es la negación de "jemand".' },
      { s: 'Kann mir ___ helfen?', a: 'jemand', d: ['niemand', 'etwas'], t: '¿Alguien me puede ayudar?', e: 'Pregunta abierta → jemand.' },
      { s: '___ hat das Licht ausgemacht.', a: 'Jemand', d: ['Niemand', 'Etwas'], t: 'Alguien ha apagado la luz.', e: 'Sujeto indefinido en afirmativa → jemand.' },
      { s: 'Ich habe ___ getroffen, den ich kenne.', a: 'niemanden', d: ['niemand', 'jemand'], t: 'No me he encontrado con nadie conocido.', e: 'Como objeto directo lleva -en: niemanden.' },
      { s: 'Hast du ___ gefragt?', a: 'jemanden', d: ['jemand', 'niemand'], t: '¿Le has preguntado a alguien?', e: 'Objeto directo → jemanden.' },
      { s: '___ weiß, wo der Trainer ist.', a: 'Niemand', d: ['Jemand', 'Etwas'], t: 'Nadie sabe dónde está el entrenador.', e: 'Sujeto negativo → Niemand.' },
      { s: 'Ich möchte mit ___ darüber reden.', a: 'jemandem', d: ['jemand', 'jemanden'], t: 'Quiero hablar de eso con alguien.', e: '"mit" pide dativo: jemandem.' },
      { s: 'Im Studio war heute ___ außer mir.', a: 'niemand', d: ['niemanden', 'jemanden'], t: 'Hoy en el gimnasio no había nadie más que yo.', e: 'Como sujeto: niemand, sin terminación.' },
      { s: 'Im Verein habe ich ___ gefunden, der mittrainiert.', a: 'niemanden', d: ['niemand', 'jemand'], t: 'En el club no encontré a nadie que entrenara conmigo.', e: 'Como objeto directo lleva -en: niemanden.' },
      { s: 'Morgen kommt bestimmt ___ mit.', a: 'jemand', d: ['jemanden', 'niemanden'], t: 'Mañana seguro que viene alguien.', e: 'Sujeto: jemand.' },
      { s: 'Kennst du hier eigentlich ___?', a: 'jemanden', d: ['jemand', 'niemand'], t: '¿Conoces a alguien aquí?', e: 'kennen pide acusativo: jemanden.' },
      { s: '___ hat den Pokal schon abgeholt.', a: 'Jemand', d: ['Jemanden', 'Niemanden'], t: 'Alguien ya se ha llevado el trofeo.', e: 'Sujeto → jemand.' }
    ],
    orders: [
      { sol: ['Kennst', 'du', 'jemanden', 'im', 'Verein?'], t: '¿Conoces a alguien en el club?', e: 'jemanden en acusativo.' },
      { sol: ['Niemand', 'wollte', 'am', 'Sonntag', 'mitkommen'], t: 'Nadie quiso venir el domingo.', e: 'niemand como sujeto.' },
      { sol: ['Ich', 'habe', 'mit', 'niemandem', 'darüber', 'gesprochen'], t: 'No he hablado con nadie de eso.', e: 'mit + dativo.' },
      { sol: ['Ist', 'hier', 'jemand,', 'der', 'Deutsch', 'spricht?'], t: '¿Hay aquí alguien que hable alemán?', e: 'jemand como sujeto.' }
    ],
    clozes: [
      { txt: 'Im Studio war heute ___ außer mir. Ich habe ___ getroffen, den ich kenne. Aber morgen kommt sicher ___ mit.', a: ['niemand', 'niemanden', 'jemand'], extra: ['jemandem', 'niemandem', 'etwas'], t: 'Hoy en el gimnasio no había nadie más que yo. No me encontré con nadie conocido. Pero mañana seguro que viene alguien conmigo.', e: 'Como sujeto van sin terminación (niemand, jemand); como objeto directo llevan -en: niemanden.' }
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
      { s: '___ Bücher liest du gern?', a: 'Was für', d: ['Was für eine', 'Was für ein'], t: '¿Qué tipo de libros te gusta leer?', e: 'Plural → solo "Was für".' },
      { s: '___ für einen Wein möchtest du?', a: 'Was', d: ['Welchen', 'Wie'], t: '¿Qué clase de vino quieres?', e: '"Was für ein-" pregunta por la clase; el artículo va en acusativo tras "möchten".' },
      { s: 'Was für ___ Geschenk bringst du mit?', a: 'ein', d: ['einen', 'einem'], t: '¿Qué regalo llevas?', e: '"das Geschenk" en acusativo neutro → ein.' },
      { s: 'Was für ___ Musik hört ihr auf dem Fest?', a: 'eine', d: ['einen', 'ein'], t: '¿Qué tipo de música ponéis en la fiesta?', e: 'Femenino en acusativo → eine.' },
      { s: 'Was für ___ Kuchen hast du gebacken?', a: 'einen', d: ['ein', 'eine'], t: '¿Qué clase de bizcocho has hecho?', e: '"der Kuchen" en acusativo → einen.' },
      { s: 'Was für ___ Leute kommen heute?', a: '—', d: ['ein', 'eine'], t: '¿Qué clase de gente viene hoy?', e: 'En plural "was für" va sin artículo.' },
      { s: 'Was für ___ Film habt ihr gesehen?', a: 'einen', d: ['ein', 'eine'], t: '¿Qué clase de película visteis?', e: '"der Film" en acusativo → einen.' },
      { s: 'Was für ___ Wohnung sucht ihr?', a: 'eine', d: ['einen', 'ein'], t: '¿Qué tipo de piso buscáis?', e: 'Femenino en acusativo → eine.' },
      { s: 'Was für ___ Auto fährst du?', a: 'ein', d: ['einen', 'einem'], t: '¿Qué coche llevas?', e: 'Neutro en acusativo → ein.' },
      { s: '___ Kuchen möchtest du, den mit Schokolade oder den mit Äpfeln?', a: 'Welchen', d: ['Was für einen', 'Wie einen'], t: '¿Cuál quieres, el de chocolate o el de manzana?', e: 'Si eliges entre opciones concretas es "welch-", no "was für ein-".' },
      { s: 'Was für ___ Salat machst du?', a: 'einen', d: ['ein', 'eine'], t: '¿Qué ensalada haces?', e: '"der Salat" en acusativo → einen.' },
      { s: 'Was für ___ Blumen soll ich mitbringen?', a: '—', d: ['eine', 'einen'], t: '¿Qué flores llevo?', e: 'Plural → sin artículo.' },
      { s: 'Was für ___ Getränk trinkst du am liebsten?', a: 'ein', d: ['einen', 'eine'], t: '¿Qué bebida te gusta más?', e: '"das Getränk" en acusativo → ein.' },
      { s: 'Was für ___ Party wird das?', a: 'eine', d: ['einen', 'ein'], t: '¿Qué clase de fiesta va a ser?', e: 'Femenino en nominativo → eine.' },
      { s: 'Was für ___ Wein hast du mitgebracht?', a: 'einen', d: ['ein', 'eine'], t: '¿Qué vino has traído?', e: '"der Wein" en acusativo → einen.' },
      { s: '___ von den beiden Kleidern nimmst du?', a: 'Welches', d: ['Was für ein', 'Wie ein'], t: '¿Cuál de los dos vestidos te llevas?', e: 'Elegir entre dos concretos → "welch-".' },
      { s: 'Was für ___ Buch liest du gerade?', a: 'ein', d: ['einen', 'einem'], t: '¿Qué clase de libro estás leyendo?', e: 'Neutro en acusativo → ein.' },
      { s: 'Was für ___ Schuhe suchst du?', a: '—', d: ['einen', 'eine'], t: '¿Qué zapatos buscas?', e: 'Plural → sin artículo.' },
      { s: 'Was für ___ Job hat er jetzt?', a: 'einen', d: ['ein', 'eine'], t: '¿Qué clase de trabajo tiene ahora?', e: '"der Job" en acusativo → einen.' },
      { s: 'Was für ___ Tasche möchtest du?', a: 'eine', d: ['einen', 'ein'], t: '¿Qué bolso quieres?', e: 'Femenino en acusativo → eine.' },
      { s: 'Was für ___ Wetter war im Urlaub?', a: '—', d: ['ein', 'eine'], t: '¿Qué tiempo hizo en las vacaciones?', e: 'Con incontables "was für" va sin artículo.' },
      { s: 'Was für ___ Kurs machst du?', a: 'einen', d: ['ein', 'eine'], t: '¿Qué curso haces?', e: '"der Kurs" en acusativo → einen.' },
      { s: 'Was für ___ Geschenk wäre gut?', a: 'ein', d: ['einen', 'einem'], t: '¿Qué regalo estaría bien?', e: 'Neutro en nominativo → ein.' },
      { s: '___ Farbe gefällt dir besser, die blaue oder die grüne?', a: 'Welche', d: ['Was für eine', 'Wie eine'], t: '¿Qué color te gusta más, el azul o el verde?', e: 'Dos opciones concretas → "welch-".' },
      { s: 'Was für ___ Musik magst du?', a: '—', d: ['eine', 'einen'], t: '¿Qué música te gusta?', e: 'Aquí "Musik" va sin artículo, como incontable.' },
      { s: 'Was für ___ Hund habt ihr?', a: 'einen', d: ['ein', 'eine'], t: '¿Qué clase de perro tenéis?', e: '"der Hund" en acusativo → einen.' },
      { s: 'Was für ___ Zimmer suchen Sie?', a: 'ein', d: ['einen', 'einem'], t: '¿Qué tipo de habitación busca?', e: 'Neutro en acusativo → ein.' },
      { s: 'Was für ___ Torte soll ich bestellen?', a: 'eine', d: ['einen', 'ein'], t: '¿Qué tarta pido?', e: 'Femenino en acusativo → eine.' },
      { s: 'Was für ___ Gäste kommen zu deiner Party?', a: '—', d: ['ein', 'eine'], t: '¿Qué clase de invitados vienen a tu fiesta?', e: 'Plural → sin artículo.' },
      { s: '___ Auto fährst du eigentlich?', a: 'Was für ein', d: ['Was für einen', 'Was für eine'], t: '¿Y qué coche conduces?', e: 'das Auto en acusativo → was für ein.' },
      { s: '___ Film habt ihr gestern gesehen?', a: 'Was für einen', d: ['Was für ein', 'Was für eine'], t: '¿Qué película visteis ayer?', e: 'der Film en acusativo → einen.' },
      { s: '___ Wohnung sucht ihr genau?', a: 'Was für eine', d: ['Was für einen', 'Was für ein'], t: '¿Qué tipo de piso buscáis exactamente?', e: 'die Wohnung en acusativo → eine.' },
      { s: '___ Musik hörst du am liebsten?', a: 'Was für', d: ['Was für ein', 'Was für eine'], t: '¿Qué música te gusta más escuchar?', e: 'Sin artículo delante de sustantivos incontables.' },
      { s: '___ Kuchen soll ich für dich backen?', a: 'Was für einen', d: ['Was für ein', 'Was für eine'], t: '¿Qué pastel te hago?', e: 'der Kuchen en acusativo → einen.' },
      { s: '___ Suppe möchten Sie als Vorspeise?', a: 'Was für eine', d: ['Was für einen', 'Was für ein'], t: '¿Qué sopa quiere de entrante?', e: 'die Suppe → eine.' },
      { s: '___ Geschenk hast du ihr gekauft?', a: 'Was für ein', d: ['Was für einen', 'Was für eine'], t: '¿Qué regalo le has comprado?', e: 'das Geschenk → ein.' },
      { s: '___ Zutaten braucht man für das Rezept?', a: 'Was für', d: ['Was für ein', 'Was für eine'], t: '¿Qué ingredientes hacen falta para la receta?', e: 'En plural no se pone artículo.' },
      { s: '___ Wein trinkt ihr am liebsten?', a: 'Was für einen', d: ['Was für ein', 'Was für eine'], t: '¿Qué vino os gusta más?', e: 'der Wein en acusativo → einen.' },
      { s: '___ Gemüse nimmst du für den Salat?', a: 'Was für', d: ['Was für einen', 'Was für eine'], t: '¿Qué verdura coges para la ensalada?', e: 'Con incontables no se usa artículo.' }
    ],
    orders: [
      { sol: ['Was', 'für', 'einen', 'Wein', 'möchtest', 'du?'], t: '¿Qué tipo de vino quieres?', e: 'Acusativo masculino: einen.' },
      { sol: ['Was', 'für', 'eine', 'Wohnung', 'sucht', 'ihr?'], t: '¿Qué tipo de piso buscáis?', e: 'Acusativo femenino: eine.' },
      { sol: ['Was', 'für', 'Schuhe', 'trägst', 'du', 'heute?'], t: '¿Qué zapatos llevas hoy?', e: 'Plural sin artículo.' },
      { sol: ['Was', 'für', 'ein', 'Wetter', 'haben', 'wir', 'heute!'], t: '¡Qué tiempo tenemos hoy!', e: 'Exclamación con neutro.' },
      { sol: ['Was', 'für', 'einen', 'Film', 'hast', 'du', 'gesehen?'], t: '¿Qué película has visto?', e: 'Acusativo masculino tras haben.' },
      { sol: ['Was', 'für', 'Musik', 'hörst', 'du', 'gern?'], t: '¿Qué tipo de música te gusta?', e: 'Sin artículo cuando el sustantivo no lo lleva.' },
      { sol: ['Was', 'für', 'einen', 'Kuchen', 'hast', 'du', 'gebacken?'], t: '¿Qué clase de bizcocho has hecho?', e: '«Was für ein-» abre la pregunta y el auxiliar va en 2ª posición.' },
      { sol: ['Was', 'für', 'ein', 'Geschenk', 'bringst', 'du', 'mit?'], t: '¿Qué regalo llevas?', e: 'El separable cierra la pregunta: bringst … mit.' },
      { sol: ['Was', 'für', 'Blumen', 'soll', 'ich', 'mitbringen?'], t: '¿Qué flores llevo?', e: 'En plural no hay artículo detrás de "was für".' },
      { sol: ['Welchen', 'Kuchen', 'möchtest', 'du?'], t: '¿Cuál de los bizcochos quieres?', e: 'Si eliges entre opciones concretas, "welch-".' }
    ],
    clozes: [
      { txt: '– Ich gehe heute Abend auf eine Party. – ___ für ___ Party ist das? – Ein Geburtstagsfest. – Und was für ___ Geschenk bringst du mit? – Ich weiß noch nicht. ___ Wein magst du lieber, den roten oder den weißen?', a: ['Was', 'eine', 'ein', 'Welchen'], extra: ['Wie', 'einen', 'eine', 'Was für einen'], t: '– Esta noche voy a una fiesta. – ¿Qué clase de fiesta es? – Un cumpleaños. – ¿Y qué regalo llevas? – Todavía no lo sé. ¿Qué vino prefieres, el tinto o el blanco?', e: 'Los tres primeros preguntan por la clase (was für ein-, con el género de cada palabra); el último elige entre dos vinos concretos, y eso pide "welch-".' },
      { txt: '___ für ___ Geschenk bringst du mit? – Einen Wein. – Und ___ für ___ Torte machst du? – Eine mit Schokolade.', a: ['Was', 'ein', 'was', 'eine'], extra: ['Wie', 'einen', 'welche'], t: '¿Qué regalo llevas? – Un vino. ¿Y qué tarta haces? – Una de chocolate.', e: '"was für ein-" pregunta por la clase, y el artículo lleva el género de la palabra: das Geschenk → ein, die Torte → eine.' }
    ]
  },
  'land-sprache-person': {
    picks: [
      { s: 'Ich komme aus Polen und spreche ___.', a: 'Polnisch', d: ['Polen', 'Pole'], t: 'Soy de Polonia y hablo polaco.', e: 'El idioma se escribe con mayúscula: Polnisch.' },
      { s: 'Sie ist ___ und kommt aus Wien.', a: 'Österreicherin', d: ['Österreich', 'österreichisch'], t: 'Es austriaca y es de Viena.', e: 'La persona: der Österreicher / die Österreicherin.' },
      { s: 'In der Schweiz spricht man auch ___.', a: 'Französisch', d: ['Frankreich', 'Franzose'], t: 'En Suiza se habla también francés.', e: 'El idioma, no el país ni la persona.' },
      { s: 'Mein Nachbar ist ___ und spricht Türkisch.', a: 'Türke', d: ['Türkei', 'türkisch'], t: 'Mi vecino es turco y habla turco.', e: 'La persona masculina: der Türke.' },
      { s: 'Das ist ein ___ Restaurant.', a: 'spanisches', d: ['Spanisch', 'Spanien'], t: 'Es un restaurante español.', e: 'Como adjetivo va en minúscula y con terminación.' },
      { s: 'Er kommt aus Italien, also spricht er ___.', a: 'Italienisch', d: ['Italien', 'Italiener'], t: 'Es de Italia, así que habla italiano.', e: 'El idioma de Italia es Italienisch.' },
      { s: 'Meine Lehrerin ist ___.', a: 'Deutsche', d: ['Deutschland', 'deutsch'], t: 'Mi profesora es alemana.', e: 'La persona femenina: die Deutsche.' },
      { s: 'Wir lernen ___ im Kurs.', a: 'Deutsch', d: ['Deutschland', 'der Deutsche'], t: 'En el curso aprendemos alemán.', e: 'El idioma va sin artículo detrás de lernen.' },
      { s: 'Der ___ am Tisch nebenan spricht Griechisch.', a: 'Grieche', d: ['Griechenland', 'griechisch'], t: 'El griego de la mesa de al lado habla griego.', e: 'La persona: der Grieche.' },
      { s: 'Sie kommt aus Ungarn und spricht perfekt ___.', a: 'Ungarisch', d: ['Ungarn', 'Ungar'], t: 'Es de Hungría y habla húngaro perfectamente.', e: 'El idioma de Ungarn es Ungarisch.' },
      { s: 'Er kommt aus Frankreich und spricht ___.', a: 'Französisch', d: ['Franzose', 'Französin'], t: 'Es de Francia y habla francés.', e: 'El idioma acaba en -isch.' },
      { s: 'Sie ist ___ und kommt aus Warschau.', a: 'Polin', d: ['Polnisch', 'Pole'], t: 'Es polaca y viene de Varsovia.', e: 'Femenino: -in.' },
      { s: 'Mein Chef ist ___, er kommt aus Zagreb.', a: 'Kroate', d: ['Kroatisch', 'Kroatin'], t: 'Mi jefe es croata, viene de Zagreb.', e: 'Masculino sin -in.' },
      { s: 'In Brasilien spricht man ___.', a: 'Portugiesisch', d: ['Brasilianisch', 'Spanisch'], t: 'En Brasil se habla portugués.', e: 'El país no siempre da nombre al idioma.' },
      { s: 'Das ist ein ___ Film.', a: 'italienischer', d: ['Italienisch', 'Italiener'], t: 'Es una película italiana.', e: 'Delante del nombre, adjetivo con terminación.' },
      { s: 'Meine Kollegin ist ___.', a: 'Österreicherin', d: ['Österreich', 'Österreicher'], t: 'Mi compañera es austriaca.', e: 'Femenino: -erin.' },
      { s: 'Wie heißt die Sprache in Griechenland?', a: 'Griechisch', d: ['Grieche', 'Griechin'], t: 'El idioma de Grecia es el griego.', e: '-isch para el idioma.' },
      { s: 'Die Sprache schreibt man ___.', a: 'groß', d: ['klein', 'mit Artikel'], t: 'El nombre del idioma va en mayúscula.', e: 'Ich lerne Deutsch.' },
      { s: 'Aber das Adjektiv schreibt man ___.', a: 'klein', d: ['groß', 'mit Artikel'], t: 'El adjetivo va en minúscula.', e: 'ein deutsches Buch.' },
      { s: 'Er kommt aus der Türkei, also ist er ___.', a: 'Türke', d: ['Türkisch', 'Türkin'], t: 'Es de Turquía, así que es turco.', e: 'La persona, no el idioma.' }
    ]
  },
  'ordinalzahlen-wohnort': {
    picks: [
      { s: 'Sie wohnt im ___ Stock.', a: 'ersten', d: ['eins', 'erste'], t: 'Vive en el primer piso.', e: 'erste es irregular, y en dativo lleva -en.' },
      { s: 'Wir wohnen im ___ Bezirk.', a: 'fünfzehnten', d: ['fünfzehn', 'fünfzehnte'], t: 'Vivimos en el distrito quince.', e: 'Del 1 al 19 se añade -te, y en dativo -ten.' },
      { s: 'Das Büro ist im ___ Stock.', a: 'dritten', d: ['drei', 'dreiten'], t: 'La oficina está en el tercer piso.', e: 'dritte es irregular: no es «dreite».' },
      { s: 'Er ist gerade in den ___ Bezirk gezogen.', a: 'zwanzigsten', d: ['zwanzigten', 'zwanzig'], t: 'Se acaba de mudar al distrito veinte.', e: 'A partir de 20 se añade -ste: zwanzigste.' },
      { s: 'Die Wohnung liegt im ___ Stock.', a: 'siebten', d: ['siebenten', 'sieben'], t: 'El piso está en la séptima planta.', e: 'siebte pierde la -en: no es «siebenten».' },
      { s: 'Mein Kurs ist im ___ Stock.', a: 'achten', d: ['achtten', 'acht'], t: 'Mi curso está en el octavo piso.', e: 'achte lleva una sola t: achten.' },
      { s: 'Sie wohnen im ___ Bezirk, in Favoriten.', a: 'zehnten', d: ['zehnte', 'zehn'], t: 'Viven en el distrito diez, en Favoriten.', e: 'En dativo la terminación es -ten.' },
      { s: 'Ich habe die Wohnung im ___ Stock genommen.', a: 'zweiten', d: ['zwei', 'zweite'], t: 'He cogido el piso del segundo.', e: 'zweite en dativo: zweiten.' },
      { s: 'Der Laden ist im ___ Bezirk.', a: 'einundzwanzigsten', d: ['einundzwanzigten', 'einundzwanzig'], t: 'La tienda está en el distrito veintiuno.', e: 'A partir de 20 siempre -ste, también en los compuestos.' },
      { s: 'Wir sind im ___ Stock, ganz oben.', a: 'vierten', d: ['vier', 'vierte'], t: 'Estamos en el cuarto, arriba del todo.', e: 'vierte es regular: vier + te, y en dativo -ten.' },
      { s: 'Wie bildet man die Ordnungszahl von 1 bis 19?', a: 'Zahl + -te', d: ['Zahl + -ste', 'Zahl + -er'], t: 'Del 1 al 19 se forma con la cifra y «-te».', e: 'vierte, fünfte, siebte.' },
      { s: 'Und ab 20?', a: 'Zahl + -ste', d: ['Zahl + -te', 'Zahl + -er'], t: 'A partir de 20 se añade «-ste».', e: 'zwanzigste, dreißigste.' },
      { s: 'Welche drei Ordnungszahlen sind unregelmäßig?', a: 'erste, dritte, siebte', d: ['zweite, vierte, fünfte', 'achte, neunte, zehnte'], t: 'Las irregulares son «erste», «dritte» y «siebte».', e: 'No salen de la cifra tal cual.' },
      { s: 'Warum sagt man „im ersten Stock“ und no „im eins Stock“?', a: 'es ist eine Ordnungszahl', d: ['es ist ein Fehler im Buch', 'beides geht'], t: 'Porque es un ordinal, no un número a secas.', e: 'El primero, no el uno.' },
      { s: 'Welche Endung hat die Ordnungszahl nach „im“?', a: '-en', d: ['-e', '-er'], t: 'Después de «im» el ordinal acaba en «-en».', e: 'im ersten, im dritten, im zwanzigsten.' },
      { s: 'Ihre Schwester wohnt im ___ Stock.', a: 'sechsten', d: ['sechste', 'sechs'], t: 'Vive en la sexta planta.', e: 'sechs → sechste → im sechsten.' },
      { s: 'Das Lokal ist im ___ Bezirk.', a: 'neunten', d: ['neunte', 'neun'], t: 'El local está en el distrito noveno.', e: 'Ordinal en dativo: -en.' },
      { s: 'Wie schreibt man „im 3. Stock“ als Zahl mit Punkt?', a: 'der Punkt macht die Ordnungszahl', d: ['der Punkt ist ein Komma', 'der Punkt bedeutet Abkürzung'], t: 'El punto es lo que convierte la cifra en ordinal.', e: '3. Stock se lee «dritten Stock».' },
      { s: 'Wir wohnen im ___ Bezirk, in Landstraße.', a: 'dritten', d: ['dritte', 'drei'], t: 'Vivimos en el distrito tercero, en Landstraße.', e: 'dritte es irregular: no «dreite».' },
      { s: 'Wie viele Bezirke hat Wien?', a: 'dreiundzwanzig', d: ['zwanzig', 'fünfzehn'], t: 'Viena tiene veintitrés distritos.', e: 'Por eso llegan hasta el «dreiundzwanzigsten».' }
    ]
  },
  'uhrzeit-offiziell-inoffiziell': {
    picks: [
      { s: '14:30 sagt man inoffiziell: ___ drei.', a: 'halb', d: ['Viertel', 'halbe'], t: 'Las 14:30 se dicen «halb drei».', e: 'halb drei son las DOS y media: se cuenta hacia la hora siguiente.' },
      { s: '8:15 sagt man: Viertel ___ acht.', a: 'nach', d: ['vor', 'über'], t: 'Las 8:15 son «Viertel nach acht».', e: 'Pasados quince minutos: nach.' },
      { s: '8:45 sagt man: Viertel ___ neun.', a: 'vor', d: ['nach', 'bis'], t: 'Las 8:45 son «Viertel vor neun».', e: 'Quince para la hora siguiente: vor.' },
      { s: 'Offiziell heißt 14:30: vierzehn ___ dreißig.', a: 'Uhr', d: ['Stunde', 'Minuten'], t: 'Oficialmente 14:30 es «vierzehn Uhr dreißig».', e: 'En la forma oficial se dice Uhr entre hora y minutos.' },
      { s: 'Der Zug fährt um ___ Uhr fünfzehn.', a: 'acht', d: ['halb', 'Viertel'], t: 'El tren sale a las ocho quince.', e: 'Horario oficial: número + Uhr + minutos.' },
      { s: 'Es ist 19:30. Inoffiziell: ___ acht.', a: 'halb', d: ['Viertel vor', 'Viertel nach'], t: 'Son las 19:30: «halb acht».', e: 'Media hora antes de las ocho.' },
      { s: 'Wir treffen uns um ___ nach sechs.', a: 'zehn', d: ['halb', 'Viertel vor'], t: 'Quedamos a las seis y diez.', e: 'Los minutos sueltos también van con nach.' },
      { s: '12:00 mittags sagt man ___.', a: 'zwölf Uhr', d: ['null Uhr', 'vierundzwanzig Uhr'], t: 'Las doce del mediodía son «zwölf Uhr».', e: 'Medianoche en cambio es null Uhr o vierundzwanzig Uhr.' },
      { s: 'Wie spät ist es? – Es ___ gleich neun.', a: 'ist', d: ['hat', 'sind'], t: '¿Qué hora es? – Van a ser las nueve.', e: 'La hora va siempre con es ist.' },
      { s: 'Der Kurs beginnt ___ Viertel nach fünf.', a: 'um', d: ['am', 'im'], t: 'El curso empieza a las cinco y cuarto.', e: 'La hora exacta va con um.' },
      { s: 'Wo benutzt man die offizielle Uhrzeit?', a: 'en horarios y citas formales', d: ['entre amigos', 'sólo en la radio'], t: 'La hora oficial se usa en horarios y citas formales.', e: 'Trenes, médico, trabajo.' },
      { s: 'Bis wieviel geht die offizielle Uhrzeit?', a: 'hasta las 24', d: ['hasta las 12', 'hasta las 20'], t: 'La hora oficial llega hasta las 24.', e: '20 Uhr, 23 Uhr 45.' },
      { s: 'Was bedeutet „halb acht“?', a: 'las siete y media', d: ['las ocho y media', 'las ocho menos cuarto'], t: '«halb acht» son las siete y media.', e: 'Mira hacia LA hora que viene, no la que pasó.' },
      { s: 'Warum ist „halb“ die trampa clásica para nosotros?', a: 'en español la media va con la hora pasada', d: ['porque halb significa cuarto', 'porque no existe en alemán'], t: 'Porque en español «y media» se cuenta con la hora que ya pasó.', e: 'halb acht = 7:30, no 8:30.' },
      { s: 'Was heißt „Viertel vor neun“?', a: 'las nueve menos cuarto', d: ['las nueve y cuarto', 'las ocho y media'], t: '«Viertel vor neun» son las nueve menos cuarto.', e: 'vor = antes.' },
      { s: 'Welche Präposition steht vor der Uhrzeit?', a: 'um', d: ['in', 'an'], t: 'Delante de la hora va «um».', e: 'um acht, um Viertel nach fünf.' },
      { s: 'Wie fragt man nach der Uhrzeit?', a: 'Wie spät ist es?', d: ['Wie viel Uhr hast du?', 'Was ist die Zeit?'], t: 'Se pregunta «Wie spät ist es?».', e: 'También vale «Wie viel Uhr ist es?».' },
      { s: '18:45 offiziell heißt ___.', a: 'achtzehn Uhr fünfundvierzig', d: ['Viertel vor sieben', 'halb sieben'], t: '18:45 en oficial es «achtzehn Uhr fünfundvierzig».', e: 'Cifra a cifra, sin «vor» ni «nach».' },
      { s: 'Und 18:45 inoffiziell?', a: 'Viertel vor sieben', d: ['Viertel nach sechs', 'halb sieben'], t: 'Y en informal, «Viertel vor sieben».', e: 'Se cuenta sobre el 7, no sobre el 19.' },
      { s: 'Der Film beginnt ___ zwanzig Uhr.', a: 'um', d: ['in', 'am'], t: 'La película empieza a las veinte horas.', e: 'um + hora.' }
    ]
  },
  'mengenangaben-ohne-plural': {
    picks: [
      { s: 'Ich hätte gern zwei ___ Erdäpfel.', a: 'Kilo', d: ['Kilos', 'Kile'], t: 'Querría dos kilos de patatas.', e: 'La medida se queda en singular: zwei Kilo.' },
      { s: 'Bitte drei ___ Kuchen.', a: 'Stück', d: ['Stücke', 'Stücken'], t: 'Tres trozos de tarta, por favor.', e: 'Stück no cambia detrás de un número.' },
      { s: 'Wir brauchen zwei ___ Milch.', a: 'Liter', d: ['Liters', 'Litern'], t: 'Necesitamos dos litros de leche.', e: 'Liter también se queda igual.' },
      { s: 'Zehn ___ Schinken, bitte.', a: 'Deka', d: ['Dekas', 'Deken'], t: 'Cien gramos de jamón, por favor.', e: 'En Austria se cuenta en Deka, y no lleva plural.' },
      { s: 'Geben Sie mir bitte ein ___ Wasser.', a: 'Glas', d: ['Glases', 'Gläser'], t: 'Póngame un vaso de agua, por favor.', e: 'Con uno va el singular normal.' },
      { s: 'Ich nehme vier ___ Bier.', a: 'Flaschen', d: ['Flasche', 'Flaschens'], t: 'Me llevo cuatro botellas de cerveza.', e: 'Las femeninas SÍ hacen plural: vier Flaschen.' },
      { s: 'Zwischen Kilo und Erdäpfel kommt ___.', a: 'nichts', d: ['von', 'der'], t: 'Entre kilo y patatas no va nada.', e: 'No se dice «zwei Kilo von Erdäpfel».' },
      { s: 'Ein ___ Brot kostet drei Euro.', a: 'Kilo', d: ['Kilos', 'Kilogramme'], t: 'Un kilo de pan cuesta tres euros.', e: 'Un kilo, sin plural.' },
      { s: 'Drei ___ Kaffee, bitte.', a: 'Tassen', d: ['Tasse', 'Tassens'], t: 'Tres tazas de café, por favor.', e: 'Tasse es femenina y hace plural.' },
      { s: 'Zwei ___ Mineralwasser zum Mitnehmen.', a: 'Flaschen', d: ['Flasche', 'Flaschen von'], t: 'Dos botellas de agua para llevar.', e: 'Femenina en plural, y sin von.' },
      { s: 'Was steht zwischen der Menge und der Ware?', a: 'nada, van pegadas', d: ['von', 'der Artikel'], t: 'No va nada: cantidad y producto van seguidos.', e: 'zwei Kilo Erdäpfel.' },
      { s: 'Welche Maße bleiben im Singular?', a: 'Kilo, Liter, Stück, Deka', d: ['Flasche, Tasse, Glas', 'todas'], t: 'Se quedan en singular «Kilo», «Liter», «Stück» y «Deka».', e: 'zwei Kilo, no «zwei Kilos».' },
      { s: 'Und welche sí hacen plural?', a: 'los recipientes: Flaschen, Tassen', d: ['las medidas', 'ninguna'], t: 'Los recipientes sí: «Flaschen», «Tassen», «Gläser».', e: 'Son cosas contables de verdad.' },
      { s: 'Was ist „Deka“ in Österreich?', a: 'diez gramos', d: ['cien gramos', 'un kilo'], t: 'Un «Deka» son diez gramos.', e: 'Zehn Deka = 100 g. Muy austriaco.' },
      { s: 'Wie sagt man in Österreich zu „Kartoffeln“?', a: 'Erdäpfel', d: ['Kartoffeln', 'Patates'], t: 'En Austria se dice «Erdäpfel».', e: 'Es de las palabras que más cambian.' },
      { s: 'Ich hätte gern zwanzig ___ Käse.', a: 'Deka', d: ['Dekas', 'Deken'], t: 'Póngame doscientos gramos de queso.', e: 'Deka no hace plural.' },
      { s: 'Geben Sie mir bitte drei ___ Wein.', a: 'Flaschen', d: ['Flasche', 'Flaschens'], t: 'Póngame tres botellas de vino.', e: 'Recipiente → sí plural.' },
      { s: 'Zwei ___ Mehl, bitte.', a: 'Kilo', d: ['Kilos', 'Kile'], t: 'Dos kilos de harina, por favor.', e: 'Medida → sin plural.' },
      { s: 'Welcher Satz ist richtig?', a: 'Ich nehme zwei Stück Kuchen.', d: ['Ich nehme zwei Stücke von Kuchen.', 'Ich nehme zwei Stücks Kuchen.'], t: 'Lo correcto es «Ich nehme zwei Stück Kuchen.».', e: 'Sin plural y sin «von».' },
      { s: 'Warum sale mal a los españoles?', a: 'porque metemos el de', d: ['porque el orden cambia', 'porque falta el artículo'], t: 'Porque en español decimos «dos kilos DE patatas».', e: 'En alemán ese «de» no existe.' }
    ]
  },
  'adjektiv-steigerung-wetter': {
    picks: [
      { s: 'Heute ist es ___ als gestern.', a: 'wärmer', d: ['warm', 'am wärmsten'], t: 'Hoy hace más calor que ayer.', e: 'als pide comparativo.' },
      { s: 'Im Juli ist es ___.', a: 'am wärmsten', d: ['wärmer', 'warm'], t: 'En julio es cuando más calor hace.', e: 'El máximo: am …-sten.' },
      { s: 'Der Jänner ist meistens ___ als der Februar.', a: 'kälter', d: ['kalt', 'am kältesten'], t: 'Enero suele ser más frío que febrero.', e: 'kalt coge Umlaut: kälter.' },
      { s: 'Gestern war es ___ als heute.', a: 'windiger', d: ['windig', 'am windigsten'], t: 'Ayer hizo más viento que hoy.', e: 'windig no coge Umlaut: windiger.' },
      { s: 'Im Februar sind die Tage ___.', a: 'am kürzesten', d: ['kürzer', 'kurz'], t: 'En febrero los días son más cortos.', e: 'Superlativo con am.' },
      { s: 'Diese Woche ist es ___ als letzte Woche.', a: 'schöner', d: ['schön', 'am schönsten'], t: 'Esta semana hace mejor que la pasada.', e: 'schön → schöner, sin Umlaut nuevo.' },
      { s: 'Im August wird es ___ als im Juni.', a: 'heißer', d: ['heiß', 'am heißesten'], t: 'En agosto hace más calor que en junio.', e: 'heiß → heißer.' },
      { s: 'Der Nebel ist morgens ___.', a: 'am dichtesten', d: ['dichter', 'dicht'], t: 'La niebla es más espesa por la mañana.', e: 'Superlativo de dicht.' },
      { s: 'Heute ist es ___ als angesagt war.', a: 'kühler', d: ['kühl', 'am kühlsten'], t: 'Hoy hace más fresco de lo que anunciaban.', e: 'kühl → kühler.' },
      { s: 'Im Gebirge ist die Luft ___.', a: 'am kältesten', d: ['kälter', 'kalt'], t: 'En la montaña el aire es más frío.', e: 'am + adjetivo + sten.' },
      { s: 'Wie bildet man den Komparativ?', a: 'adjetivo + -er', d: ['mehr + adjetivo', 'adjetivo + -ste'], t: 'El comparativo se forma con el adjetivo y «-er».', e: 'kalt → kälter.' },
      { s: 'Welches Wort steht beim Vergleich?', a: 'als', d: ['wie', 'dass'], t: 'En la comparación se usa «als».', e: 'wärmer ALS gestern.' },
      { s: 'Und wenn dos cosas son iguales?', a: 'so … wie', d: ['als', 'mehr als'], t: 'Si son iguales, «so … wie».', e: 'so warm wie gestern.' },
      { s: 'Wie bildet man den Superlativ?', a: 'am + adjetivo + -sten', d: ['der meiste', 'sehr + adjetivo'], t: 'El superlativo es «am» + adjetivo + «-sten».', e: 'am wärmsten.' },
      { s: 'Was passiert oft mit dem Vokal?', a: 'coge Umlaut', d: ['se alarga', 'no cambia'], t: 'Muchas veces coge Umlaut.', e: 'kalt → kälter, warm → wärmer, lang → länger.' },
      { s: 'Wie steigert man „gut“?', a: 'besser, am besten', d: ['guter, am gutsten', 'mehr gut'], t: '«gut» hace «besser» y «am besten».', e: 'Irregular, como en español.' },
      { s: 'Wie steigert man „gern“?', a: 'lieber, am liebsten', d: ['gerner, am gernsten', 'mehr gern'], t: '«gern» hace «lieber» y «am liebsten».', e: 'También irregular.' },
      { s: 'Was ist der Unterschied zum Spanischen?', a: 'en alemán no se usa «más», va en la palabra', d: ['es igual', 'en alemán no hay comparativo'], t: 'Que el alemán no pone «más» delante: lo mete en la palabra.', e: '«más frío» = kälter.' },
      { s: 'Heute ist es so warm ___ gestern.', a: 'wie', d: ['als', 'dass'], t: 'Hoy hace el mismo calor que ayer.', e: 'Igualdad → wie.' },
      { s: 'Der Sommer ist hier ___ als in Spanien.', a: 'kürzer', d: ['kurzer', 'am kürzesten'], t: 'Aquí el verano es más corto que en España.', e: 'Comparativo con Umlaut.' }
    ]
  },
  'gern-lieber-am-liebsten': {
    picks: [
      { s: 'Ich spiele ___ Fußball.', a: 'gern', d: ['lieber', 'am liebsten'], t: 'Me gusta jugar al fútbol.', e: 'gern va detrás del verbo y dice que te gusta.' },
      { s: 'Im Winter gehe ich ___ schwimmen als laufen.', a: 'lieber', d: ['gern', 'am liebsten'], t: 'En invierno prefiero nadar a correr.', e: 'Comparando dos cosas: lieber.' },
      { s: '___ wandere ich in den Bergen.', a: 'Am liebsten', d: ['Gern', 'Lieber'], t: 'Lo que más me gusta es caminar por la montaña.', e: 'Lo que más te gusta de todo: am liebsten.' },
      { s: 'Trinkst du ___ Kaffee oder Tee?', a: 'lieber', d: ['gern', 'am liebsten'], t: '¿Prefieres café o té?', e: 'Entre dos opciones: lieber.' },
      { s: 'Sie kocht sehr ___.', a: 'gern', d: ['lieber', 'am liebsten'], t: 'Le gusta mucho cocinar.', e: 'sehr gern = mucho, sin comparar.' },
      { s: 'Was machst du ___ am Wochenende?', a: 'am liebsten', d: ['gern', 'lieber'], t: '¿Qué es lo que más te gusta hacer el finde?', e: 'Preguntando por la preferencia máxima.' },
      { s: 'Ich gehe ___ ins Kino als ins Theater.', a: 'lieber', d: ['gern', 'am liebsten'], t: 'Prefiero el cine al teatro.', e: 'lieber … als: la comparación.' },
      { s: 'Die Kinder spielen ___ draußen.', a: 'gern', d: ['lieber als', 'am liebsten von'], t: 'A los niños les gusta jugar fuera.', e: 'gern a secas.' },
      { s: '___ esse ich Paella, wie zu Hause.', a: 'Am liebsten', d: ['Lieber', 'Gern als'], t: 'Lo que más me gusta comer es paella, como en casa.', e: 'El superlativo abre la frase.' },
      { s: 'Er fährt ___ Rad als Auto.', a: 'lieber', d: ['gern', 'am liebsten'], t: 'Prefiere la bici al coche.', e: 'lieber … als con dos medios de transporte.' },
      { s: 'Was ist „gern“ für eine Wortart?', a: 'un adverbio', d: ['un verbo', 'un adjetivo'], t: '«gern» es un adverbio.', e: 'Acompaña al verbo y no cambia.' },
      { s: 'Wie lauten die drei Stufen von „gern“?', a: 'gern, lieber, am liebsten', d: ['gern, gerner, am gernsten', 'gut, besser, am besten'], t: 'Se gradúa «gern, lieber, am liebsten».', e: 'Irregular del todo.' },
      { s: 'Wo steht „gern“ im Satz?', a: 'detrás del verbo', d: ['delante del verbo', 'al final siempre'], t: 'Va detrás del verbo.', e: 'Ich spiele gern Fußball.' },
      { s: 'Wie sagt man „me gusta el fútbol“ con gern?', a: 'Ich spiele gern Fußball.', d: ['Ich mag gern Fußball.', 'Ich gern Fußball spiele.'], t: 'Se dice «Ich spiele gern Fußball.».', e: 'El alemán lo dice con la acción, no con «gustar».' },
      { s: 'Was ist der Unterschied zu „gefallen“?', a: 'gern va con lo que HACES', d: ['son intercambiables', 'gefallen es más formal'], t: '«gern» acompaña a lo que HACES.', e: 'gefallen es para lo que te gusta ver o tener.' },
      { s: 'Was heißt „Ich trinke lieber Tee“?', a: 'prefiero el té', d: ['me gusta el té', 'el té es mejor'], t: 'Significa «prefiero el té».', e: 'lieber = preferir.' },
      { s: 'Welches Wort steht beim Vergleich mit lieber?', a: 'als', d: ['wie', 'dass'], t: 'En la comparación con «lieber» va «als».', e: 'lieber Tee ALS Kaffee.' },
      { s: 'Muss man bei „am liebsten“ etwas ändern?', a: 'no, es fijo', d: ['sí, la terminación', 'sí, el artículo'], t: 'No, «am liebsten» es una forma fija.', e: 'Nunca cambia.' },
      { s: 'Im Sommer schwimme ich ___ als im Winter.', a: 'lieber', d: ['gern', 'am liebsten'], t: 'En verano prefiero nadar que en invierno.', e: 'Comparación → lieber.' },
      { s: '___ bleibe ich zu Hause und lese.', a: 'Am liebsten', d: ['Gern', 'Lieber'], t: 'Lo que más me gusta es quedarme en casa leyendo.', e: 'Superlativo → am liebsten.' }
    ]
  },
  'zu-teuer-zu-klein': {
    picks: [
      { s: 'Die Wohnung ist leider ___ teuer.', a: 'zu', d: ['sehr', 'viel'], t: 'El piso es, por desgracia, demasiado caro.', e: 'zu = demasiado, y siempre en negativo.' },
      { s: 'Das Zimmer ist ___ schön, aber zu klein.', a: 'sehr', d: ['zu', 'viel'], t: 'La habitación es muy bonita, pero demasiado pequeña.', e: 'sehr no critica; zu sí.' },
      { s: 'Der Schrank ist ___ groß für den Flur.', a: 'zu', d: ['sehr', 'ganz'], t: 'El armario es demasiado grande para el pasillo.', e: 'No cabe: zu groß.' },
      { s: 'Die Küche ist ___ praktisch, wir nehmen sie.', a: 'sehr', d: ['zu', 'viel'], t: 'La cocina es muy práctica, nos la quedamos.', e: 'Algo bueno: sehr, no zu.' },
      { s: 'Hier ist es mir ___ laut zum Schlafen.', a: 'zu', d: ['sehr', 'ganz'], t: 'Aquí hay demasiado ruido para dormir.', e: 'Impide dormir: zu laut.' },
      { s: 'Das Bad ist ___ dunkel, ohne Fenster.', a: 'zu', d: ['sehr', 'viel'], t: 'El baño es demasiado oscuro, sin ventana.', e: 'Un problema: zu dunkel.' },
      { s: 'Die Miete ist ___ hoch für mein Gehalt.', a: 'zu', d: ['sehr', 'ganz'], t: 'El alquiler es demasiado alto para mi sueldo.', e: 'No te lo puedes permitir: zu hoch.' },
      { s: 'Die Aussicht ist ___ schön.', a: 'sehr', d: ['zu', 'kein'], t: 'Las vistas son muy bonitas.', e: 'Aquí no hay queja: sehr.' },
      { s: 'Der Weg zur U-Bahn ist ___ weit.', a: 'zu', d: ['sehr', 'ganz'], t: 'El camino al metro es demasiado largo.', e: 'Molesta: zu weit.' },
      { s: 'Das Sofa ist ___ bequem, ich bleibe hier.', a: 'so', d: ['zu', 'kein'], t: 'El sofá es tan cómodo que me quedo aquí.', e: 'so + adjetivo, ni zu ni sehr.' },
      { s: 'Was bedeutet „zu“ vor einem Adjektiv?', a: 'demasiado', d: ['muy', 'bastante'], t: '«zu» delante de un adjetivo significa «demasiado».', e: 'Y siempre es algo malo.' },
      { s: 'Und „sehr“?', a: 'muy', d: ['demasiado', 'poco'], t: '«sehr» significa «muy».', e: 'Es neutro o bueno.' },
      { s: 'Was ist der Unterschied en la práctica?', a: 'zu significa que no vale', d: ['ninguno', 'zu es más formal'], t: 'Que «zu» dice que ya no sirve.', e: '«zu teuer» = no lo compro.' },
      { s: 'Warum lo confundimos los españoles?', a: 'porque decimos «muy caro» para las dos cosas', d: ['porque zu es corto', 'porque suena igual'], t: 'Porque en español decimos «muy caro» para las dos cosas.', e: 'En alemán hay que elegir.' },
      { s: 'Kann man „sehr“ y „zu“ juntos?', a: 'no', d: ['sí', 'sólo en preguntas'], t: 'No se pueden juntar.', e: 'O una o la otra.' },
      { s: 'Die Wohnung ist ___ schön, wir nehmen sie.', a: 'sehr', d: ['zu', 'so'], t: 'El piso es muy bonito, nos lo quedamos.', e: 'Es algo bueno → sehr.' },
      { s: 'Der Preis ist leider ___ hoch.', a: 'zu', d: ['sehr', 'so'], t: 'El precio es demasiado alto.', e: '«leider» ya avisa: algo va mal.' },
      { s: 'Das Zimmer ist ___ klein für zwei Personen.', a: 'zu', d: ['sehr', 'so'], t: 'La habitación es demasiado pequeña para dos.', e: 'No cabe → zu.' },
      { s: 'Was heißt „so“ vor einem Adjektiv?', a: 'tan', d: ['demasiado', 'poco'], t: '«so» delante de un adjetivo es «tan».', e: 'Das Sofa ist so bequem!' },
      { s: 'Was heißt „nicht teuer genug“?', a: 'no es lo bastante caro', d: ['es demasiado caro', 'no es caro'], t: 'Significa que no es lo bastante caro.', e: '«genug» va DETRÁS del adjetivo.' }
    ]
  },
  'schmerzen-haben': {
    picks: [
      { s: 'Ich habe seit gestern ___.', a: 'Kopfschmerzen', d: ['Kopfschmerz', 'Kopfschmerze'], t: 'Tengo dolor de cabeza desde ayer.', e: 'Siempre en plural y en una sola palabra.' },
      { s: 'Sie hat starke ___.', a: 'Rückenschmerzen', d: ['Rückenschmerz', 'Rückenschmerze'], t: 'Tiene un fuerte dolor de espalda.', e: 'Compuesto: Rücken + Schmerzen.' },
      { s: 'Beim Schlucken habe ich ___.', a: 'Halsschmerzen', d: ['Halsschmerz', 'Halsschmerze'], t: 'Al tragar me duele la garganta.', e: 'Hals + Schmerzen.' },
      { s: 'Nach dem Essen hatte er ___.', a: 'Bauchschmerzen', d: ['Bauchschmerz', 'Bauchschmerze'], t: 'Después de comer le dolía la tripa.', e: 'Bauch + Schmerzen.' },
      { s: '___ Sie Schmerzen?', a: 'Haben', d: ['Sind', 'Tun'], t: '¿Tiene dolores?', e: 'Schmerzen va con haben, no con sein.' },
      { s: 'Ich ___ keine Schmerzen mehr.', a: 'habe', d: ['bin', 'tue'], t: 'Ya no tengo dolores.', e: 'haben + Schmerzen.' },
      { s: 'Bei Kälte bekomme ich ___.', a: 'Ohrenschmerzen', d: ['Ohrschmerz', 'Ohrenschmerze'], t: 'Con el frío me duelen los oídos.', e: 'Ohren + Schmerzen.' },
      { s: 'Er hat seit Tagen ___.', a: 'Zahnschmerzen', d: ['Zahnschmerz', 'Zahnschmerze'], t: 'Lleva días con dolor de muelas.', e: 'Zahn + Schmerzen.' },
      { s: 'Die Schmerzen ___ seit heute Morgen weg.', a: 'sind', d: ['haben', 'tun'], t: 'Los dolores han desaparecido desde esta mañana.', e: 'weg sein: con sein.' },
      { s: 'Nach der Tablette hatte sie weniger ___.', a: 'Schmerzen', d: ['Schmerz', 'Schmerze'], t: 'Después de la pastilla tenía menos dolores.', e: 'Plural, siempre.' },
      { s: 'Nach dem langen Sitzen habe ich ___.', a: 'Rückenschmerzen', d: ['Rückenschmerz', 'Rücken Schmerzen'], t: 'Después de estar tanto sentado tengo dolor de espalda.', e: 'Se escribe todo junto y en plural.' },
      { s: 'Das Kind hat ___ und will nicht essen.', a: 'Zahnschmerzen', d: ['Zahnschmerz', 'Zähneschmerzen'], t: 'El niño tiene dolor de muelas y no quiere comer.', e: 'Zahn en singular + Schmerzen.' },
      { s: 'Bei Grippe hat man oft ___.', a: 'Gliederschmerzen', d: ['Gliedschmerzen', 'Glieder Schmerzen'], t: 'Con la gripe se suelen tener dolores articulares.', e: 'Glieder en plural + Schmerzen, todo junto.' },
      { s: 'Ich habe ___ im linken Ohr.', a: 'Schmerzen', d: ['Schmerz', 'Weh'], t: 'Tengo dolor en el oído izquierdo.', e: 'Schmerzen se usa casi siempre en plural.' },
      { s: '___ du noch Kopfschmerzen?', a: 'Hast', d: ['Habst', 'Hat'], t: '¿Sigues con dolor de cabeza?', e: 'du hast, con la forma irregular.' },
      { s: 'Seit der Tablette sind die Schmerzen ___.', a: 'weniger geworden', d: ['weniger werden', 'wenig geworden'], t: 'Desde la pastilla los dolores han disminuido.', e: 'Perfecto de werden: sind geworden.' },
      { s: 'Der Arzt fragt, wo ich ___ habe.', a: 'Schmerzen', d: ['schmerzen', 'Schmerz'], t: 'El médico pregunta dónde tengo dolores.', e: 'Es un sustantivo: mayúscula y plural.' },
      { s: 'Sie hat ___ und kann kaum schlucken.', a: 'Halsschmerzen', d: ['Halschmerzen', 'Hals Schmerzen'], t: 'Tiene dolor de garganta y casi no puede tragar.', e: 'Hals + Schmerzen: quedan dos eses seguidas.' },
      { s: 'Nach dem fetten Essen bekam er ___.', a: 'Bauchschmerzen', d: ['Bauchschmerz', 'Bauch Schmerzen'], t: 'Después de la comida grasienta le dio dolor de barriga.', e: 'Bauch + Schmerzen, todo junto.' },
      { s: 'Gegen die Schmerzen ___ mir nichts.', a: 'hilft', d: ['helfen', 'hilfst'], t: 'Contra los dolores no me ayuda nada.', e: 'El sujeto es nichts, que es singular.' }
    ]
  },
  'koerperteile-plural': {
    picks: [
      { s: 'Meine ___ sind müde.', a: 'Augen', d: ['Auge', 'Augens'], t: 'Tengo los ojos cansados.', e: 'das Auge → die Augen.' },
      { s: 'Nach dem Lauf tun mir die ___ weh.', a: 'Füße', d: ['Fuße', 'Fußen'], t: 'Después de correr me duelen los pies.', e: 'der Fuß → die Füße, con Umlaut.' },
      { s: 'Er hat starke ___.', a: 'Arme', d: ['Armen', 'Ärme'], t: 'Tiene los brazos fuertes.', e: 'der Arm → die Arme, sin Umlaut.' },
      { s: 'Die ___ tun mir beim Kauen weh.', a: 'Zähne', d: ['Zahne', 'Zähnen'], t: 'Me duelen los dientes al masticar.', e: 'der Zahn → die Zähne.' },
      { s: 'Wasch dir bitte die ___.', a: 'Hände', d: ['Hande', 'Händen'], t: 'Lávate las manos.', e: 'die Hand → die Hände.' },
      { s: 'Mit dem Rad werden die ___ stärker.', a: 'Beine', d: ['Beinen', 'Beins'], t: 'Con la bici las piernas se fortalecen.', e: 'das Bein → die Beine.' },
      { s: 'Bei Lärm tun mir die ___ weh.', a: 'Ohren', d: ['Ohre', 'Öhren'], t: 'Con ruido me duelen los oídos.', e: 'das Ohr → die Ohren.' },
      { s: 'Nach dem Skifahren schmerzen die ___.', a: 'Knie', d: ['Knies', 'Knien'], t: 'Después de esquiar duelen las rodillas.', e: 'das Knie no cambia en plural.' },
      { s: 'Die ___ sind bei Kälte immer kalt.', a: 'Finger', d: ['Fingers', 'Fingern'], t: 'Con frío los dedos siempre están helados.', e: 'der Finger → die Finger, igual.' },
      { s: 'Er hat breite ___.', a: 'Schultern', d: ['Schulter', 'Schultere'], t: 'Tiene los hombros anchos.', e: 'die Schulter → die Schultern.' },
      { s: 'Mach bitte die ___ zu, ich mache ein Foto.', a: 'Augen', d: ['Auge', 'Augens'], t: 'Cierra los ojos, que hago una foto.', e: 'das Auge pasa a die Augen.' },
      { s: 'Er hat sich beide ___ gebrochen.', a: 'Arme', d: ['Arm', 'Armen'], t: 'Se ha roto los dos brazos.', e: 'der Arm pasa a die Arme.' },
      { s: 'Beim Klavierspielen braucht man alle ___.', a: 'Finger', d: ['Fingers', 'Fingeren'], t: 'Para tocar el piano hacen falta todos los dedos.', e: 'der Finger no cambia en plural: die Finger.' },
      { s: 'Nach dem Wandern tun mir die ___ weh.', a: 'Knie', d: ['Knies', 'Knieen'], t: 'Después de caminar me duelen las rodillas.', e: 'das Knie tampoco cambia: die Knie.' },
      { s: 'Die ___ werden im Alter schlechter.', a: 'Augen', d: ['Auge', 'Augenen'], t: 'La vista empeora con la edad.', e: 'Plural die Augen.' },
      { s: 'Sie hat lange ___ und läuft sehr schnell.', a: 'Beine', d: ['Bein', 'Beinen'], t: 'Tiene las piernas largas y corre muy rápido.', e: 'das Bein pasa a die Beine.' },
      { s: 'Beim Zahnarzt schaut man sich die ___ an.', a: 'Zähne', d: ['Zahn', 'Zahnen'], t: 'En el dentista se miran los dientes.', e: 'der Zahn pasa a die Zähne, con Umlaut.' },
      { s: 'Er hat breite ___ vom Schwimmen.', a: 'Schultern', d: ['Schulter', 'Schulteren'], t: 'Tiene los hombros anchos de nadar.', e: 'die Schulter pasa a die Schultern.' },
      { s: 'Meine ___ sind vom Tippen müde.', a: 'Hände', d: ['Hand', 'Handen'], t: 'Tengo las manos cansadas de teclear.', e: 'die Hand pasa a die Hände, con Umlaut.' },
      { s: 'Die ___ hören mit dem Alter schlechter.', a: 'Ohren', d: ['Ohr', 'Ohres'], t: 'Los oídos oyen peor con la edad.', e: 'das Ohr pasa a die Ohren.' }
    ]
  }
};
