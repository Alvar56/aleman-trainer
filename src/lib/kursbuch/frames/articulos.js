// TEMA: artículos y determinantes.
// der/die/das y sus formas en acusativo y dativo, ein/kein, los posesivos,
// dieser/welcher y el genitivo con nombres propios. Es donde se decide si una
// frase suena alemana o no, y el punto que más se falla al hablar rápido.

export const ARTICULOS = {
  // ---------- A1.1 L3: der / die / das ----------
  'definiter-artikel-singular': {
    reserva: ['dem', 'des'],
    picks: [
      { s: '___ Tisch ist neu.', a: 'Der', d: ['Die', 'Das'], t: 'La mesa es nueva.', e: 'Tisch es masculino: der Tisch.' },
      { s: '___ Tasche ist schön.', a: 'Die', d: ['Der', 'Das'], t: 'El bolso es bonito.', e: 'Tasche es femenino: die Tasche.' },
      { s: '___ Buch liegt auf dem Tisch.', a: 'Das', d: ['Der', 'Die'], t: 'El libro está sobre la mesa.', e: 'Buch es neutro: das Buch.' },
      { s: 'Wo ist ___ Kuli?', a: 'der', d: ['die', 'das'], t: '¿Dónde está el boli?', e: 'Kuli es masculino.' },
      { s: '___ Lampe ist kaputt.', a: 'Die', d: ['Der', 'Das'], t: 'La lámpara está rota.', e: 'Casi todas las palabras en -e son femeninas: die Lampe.' },
      { s: '___ Handy ist neu.', a: 'Das', d: ['Der', 'Die'], t: 'El móvil es nuevo.', e: 'Handy es neutro.' },
      { s: '___ Stuhl steht da.', a: 'Der', d: ['Die', 'Das'], t: 'La silla está ahí.', e: 'Stuhl es masculino.' },
      { s: '___ Brille ist auf dem Tisch.', a: 'Die', d: ['Der', 'Das'], t: 'Las gafas están sobre la mesa.', e: 'Brille es femenino y en alemán va en singular.' },
      { s: '___ Fenster ist offen.', a: 'Das', d: ['Der', 'Die'], t: 'La ventana está abierta.', e: 'Fenster es neutro.' },
      { s: '___ Schlüssel ist weg.', a: 'Der', d: ['Die', 'Das'], t: 'La llave ha desaparecido.', e: 'Las palabras en -el suelen ser masculinas: der Schlüssel.' },
      { s: '___ Wohnung ist groß.', a: 'Die', d: ['Der', 'Das'], t: 'El piso es grande.', e: 'Las palabras en -ung son siempre femeninas.' },
      { s: '___ Mädchen heißt Lena.', a: 'Das', d: ['Der', 'Die'], t: 'La niña se llama Lena.', e: 'Las palabras en -chen son neutras, aunque sean personas: das Mädchen.' },
      { s: '___ Schere liegt auf dem Tisch.', a: 'Die', d: ['Der', 'Das'], t: 'La tijera está en la mesa.', e: 'die Schere: femenino.' },
      { s: '___ Ladekabel ist nicht meins.', a: 'Das', d: ['Der', 'Die'], t: 'El cable de carga no es mío.', e: 'das Ladekabel: neutro.' },
      { s: '___ Rucksack gehört der Kollegin.', a: 'Der', d: ['Die', 'Das'], t: 'La mochila es de la compañera.', e: 'der Rucksack: masculino.' },
      { s: '___ Fenster in der Küche klemmt schon wieder.', a: 'Das', d: ['Der', 'Die'], t: 'La ventana de la cocina vuelve a atascarse.', e: 'das Fenster.' },
      { s: 'Wie heißt ___ Straße hier noch mal?', a: 'die', d: ['der', 'das'], t: '¿Cómo se llamaba esta calle?', e: 'die Straße.' },
      { s: '___ Kaffee hier ist echt gut.', a: 'Der', d: ['Die', 'Das'], t: 'El café de aquí está muy bueno.', e: 'der Kaffee.' },
      { s: 'Wo hast du ___ Rucksack hingestellt?', a: 'den', d: ['der', 'dem'], t: '¿Dónde has puesto la mochila?', e: 'Acusativo masculino: den Rucksack.' },
      { s: '___ Zimmer geht leider nach hinten raus.', a: 'Das', d: ['Der', 'Die'], t: 'La habitación da, por desgracia, al patio.', e: 'das Zimmer.' },
      { s: 'Ich habe ___ Rechnung schon bezahlt.', a: 'die', d: ['der', 'den'], t: 'La cuenta ya la he pagado.', e: 'die Rechnung también en acusativo.' },
      { s: '___ Bahnhof ist nur fünf Minuten von hier.', a: 'Der', d: ['Die', 'Das'], t: 'La estación está a solo cinco minutos de aquí.', e: 'der Bahnhof.' },
      { s: 'Mach bitte ___ Tür zu, es zieht.', a: 'die', d: ['der', 'den'], t: 'Cierra la puerta, por favor, que hay corriente.', e: 'die Tür en acusativo sigue siendo die.' }
    ],
    orders: [
      { sol: ['Der', 'Tisch', 'ist', 'sehr', 'schön'], t: 'La mesa es muy bonita.', e: 'Artículo + sustantivo forman el sujeto.' },
      { sol: ['Wo', 'ist', 'die', 'Tasche?'], t: '¿Dónde está el bolso?', e: 'die Tasche (femenino).' },
      { sol: ['Das', 'Buch', 'liegt', 'auf', 'dem', 'Tisch'], t: 'El libro está sobre la mesa.', e: 'das Buch (neutro).' },
      { sol: ['Der', 'Schlüssel', 'ist', 'nicht', 'hier'], t: 'La llave no está aquí.', e: 'der Schlüssel (masculino).' }
    ],
    clozes: [
      { txt: 'Das ist ___ Tisch, das ist ___ Tasche und das ist ___ Buch. ___ Kuli liegt auf dem Tisch.', a: ['der', 'die', 'das', 'Der'], extra: ['dem', 'den', 'des'], t: 'Esta es la mesa, este es el bolso y este es el libro. El boli está encima de la mesa.', e: 'Los tres géneros seguidos, y el cuarto repite el masculino al principio de la frase.' }
    ]
  },

  // ---------- A1.1 L4: ein / eine ----------
  'indefiniter-artikel-ein-e': {
    reserva: ['einem', 'einer'],
    picks: [
      { s: 'Das ist ___ Foto von meiner Familie.', a: 'ein', d: ['eine', 'einen'], t: 'Esta es una foto de mi familia.', e: 'Foto es neutro: ein Foto.' },
      { s: 'Ich habe ___ Schwester.', a: 'eine', d: ['ein', 'einen'], t: 'Tengo una hermana.', e: 'Schwester es femenino: eine Schwester.' },
      { s: 'Das ist ___ Kuli.', a: 'ein', d: ['eine', 'einen'], t: 'Esto es un boli.', e: 'Kuli es masculino; en nominativo: ein Kuli.' },
      { s: 'Sie hat ___ Hund.', a: 'einen', d: ['ein', 'eine'], t: 'Ella tiene un perro.', e: '"haben" pide acusativo y Hund es masculino → einen.' },
      { s: 'Wir suchen ___ Wohnung.', a: 'eine', d: ['ein', 'einen'], t: 'Buscamos un piso.', e: 'Wohnung es femenino; en acusativo no cambia: eine.' },
      { s: 'Ist das ___ Lehrerin?', a: 'eine', d: ['ein', 'einen'], t: '¿Es una profesora?', e: 'Lehrerin es femenino.' },
      { s: 'Mein Bruder hat ___ Kind.', a: 'ein', d: ['eine', 'einen'], t: 'Mi hermano tiene un hijo.', e: 'Kind es neutro; en acusativo sigue siendo ein.' },
      { s: 'Ich brauche ___ Bleistift.', a: 'einen', d: ['ein', 'eine'], t: 'Necesito un lápiz.', e: 'brauchen + acusativo, masculino → einen.' },
      { s: 'Das ist ___ Bild.', a: 'ein', d: ['eine', 'einen'], t: 'Esto es un cuadro.', e: 'Bild es neutro.' },
      { s: 'Hast du ___ Frage?', a: 'eine', d: ['ein', 'einen'], t: '¿Tienes una pregunta?', e: 'Frage es femenino.' },
      { s: 'Er ist ___ guter Freund.', a: 'ein', d: ['eine', 'einen'], t: 'Es un buen amigo.', e: 'Tras "sein" va nominativo: ein Freund.' },
      { s: 'Ich möchte ___ Kaffee.', a: 'einen', d: ['ein', 'eine'], t: 'Quiero un café.', e: 'möchten + acusativo, Kaffee es masculino → einen.' },
      { s: 'Ich habe ___ Schwester und zwei Brüder.', a: 'eine', d: ['ein', 'einen'], t: 'Tengo una hermana y dos hermanos.', e: '"die Schwester" en acusativo femenino → eine.' },
      { s: 'Das ist ___ Foto von meiner Oma.', a: 'ein', d: ['eine', 'einen'], t: 'Esta es una foto de mi abuela.', e: '"das Foto" en nominativo neutro → ein.' },
      { s: 'Wir haben ___ Baby bekommen.', a: 'ein', d: ['eine', 'einen'], t: 'Hemos tenido un bebé.', e: 'das Baby → ein, también en acusativo.' },
      { s: 'Sie hat ___ Schwester und zwei Brüder.', a: 'eine', d: ['ein', 'einen'], t: 'Tiene una hermana y dos hermanos.', e: 'die Schwester → eine.' },
      { s: 'Auf dem Tisch steht ___ Foto.', a: 'ein', d: ['eine', 'einen'], t: 'En la mesa hay una foto.', e: 'das Foto → ein en nominativo.' },
      { s: 'Ich suche ___ Geschenk für meine Oma.', a: 'ein', d: ['eine', 'einen'], t: 'Busco un regalo para mi abuela.', e: 'das Geschenk → ein.' },
      { s: 'Er hat ___ Sohn in Deutschland.', a: 'einen', d: ['ein', 'eine'], t: 'Tiene un hijo en Alemania.', e: 'haben pide acusativo: der Sohn → einen.' },
      { s: 'Das ist ___ sehr alte Uhr.', a: 'eine', d: ['ein', 'einen'], t: 'Ese es un reloj muy antiguo.', e: 'die Uhr → eine.' },
      { s: 'Meine Tante hat ___ Hund.', a: 'einen', d: ['ein', 'eine'], t: 'Mi tía tiene un perro.', e: 'der Hund en acusativo → einen.' },
      { s: 'Ich hätte gern ___ großen Kaffee zum Mitnehmen.', a: 'einen', d: ['ein', 'eine'], t: 'Querría un café grande para llevar.', e: 'der Kaffee en acusativo: einen.' },
      { s: 'Vor dem Haus steht seit Tagen ___ altes Fahrrad.', a: 'ein', d: ['einen', 'eine'], t: 'Delante de casa hay una bici vieja desde hace días.', e: 'das Fahrrad en nominativo: ein.' },
      { s: 'Wir suchen ___ Wohnung mit Balkon, aber bezahlbar.', a: 'eine', d: ['ein', 'einen'], t: 'Buscamos un piso con balcón, pero asequible.', e: 'die Wohnung en acusativo: eine.' },
      { s: 'Das ist ___ guter Freund von mir aus Valencia.', a: 'ein', d: ['einen', 'eine'], t: 'Es un buen amigo mío de Valencia.', e: 'Nominativo masculino: ein.' },
      { s: 'Ich schreibe gerade ___ E-Mail an die Sprachschule.', a: 'eine', d: ['ein', 'einen'], t: 'Estoy escribiendo un correo a la escuela de idiomas.', e: 'die E-Mail en acusativo: eine.' },
      { s: 'Hast du zufällig ___ Kuli für mich?', a: 'einen', d: ['ein', 'eine'], t: '¿No tendrás por casualidad un boli para mí?', e: 'der Kuli en acusativo: einen.' },
      { s: 'Das Zimmer hat leider nur ___ kleines Fenster.', a: 'ein', d: ['einen', 'eine'], t: 'La habitación solo tiene, por desgracia, una ventanita.', e: 'El neutro no cambia en acusativo: ein Fenster.' },
      { s: 'Sie hat ___ Termin um zehn und kommt später.', a: 'einen', d: ['ein', 'eine'], t: 'Tiene una cita a las diez y viene más tarde.', e: 'der Termin en acusativo: einen.' }
    ],
    orders: [
      { sol: ['Das', 'ist', 'ein', 'Foto', 'von', 'meiner', 'Familie'], t: 'Esta es una foto de mi familia.', e: 'Tras "sein" el artículo va en nominativo.' },
      { sol: ['Ich', 'habe', 'eine', 'Schwester', 'und', 'einen', 'Bruder'], t: 'Tengo una hermana y un hermano.', e: 'haben + acusativo: eine / einen.' },
      { sol: ['Wir', 'suchen', 'eine', 'größere', 'Wohnung'], t: 'Buscamos un piso más grande.', e: 'Femenino en acusativo: eine.' },
      { sol: ['Er', 'hat', 'einen', 'Hund', 'und', 'eine', 'Katze'], t: 'Tiene un perro y un gato.', e: 'einen (masc.) / eine (fem.) en acusativo.' }
    ],
    clozes: [
      { txt: 'Ich habe ___ Bruder, ___ Schwester und ___ Kind. Und du? Hast du auch ___ große Familie?', a: ['einen', 'eine', 'ein', 'eine'], extra: ['einem', 'einer', 'eines'], t: 'Tengo un hermano, una hermana y un hijo. ¿Y tú? ¿Tienes también una familia grande?', e: 'Los cuatro van detrás de "haben", que pide acusativo: por eso el masculino cambia a einen y los demás se quedan igual.' }
    ]
  },

  // ---------- A1.1 L4: kein / keine ----------
  'negativartikel-kein-e': {
    reserva: ['keinem', 'keiner'],
    picks: [
      { s: 'Ich habe ___ Geschwister.', a: 'keine', d: ['kein', 'nicht'], t: 'No tengo hermanos.', e: 'Plural → keine.' },
      { s: 'Das ist ___ Problem.', a: 'kein', d: ['keine', 'nicht'], t: 'Eso no es un problema.', e: 'Problem es neutro: kein Problem.' },
      { s: 'Ich habe ___ Zeit.', a: 'keine', d: ['kein', 'nicht'], t: 'No tengo tiempo.', e: 'Zeit es femenino: keine Zeit.' },
      { s: 'Er hat ___ Bruder.', a: 'keinen', d: ['kein', 'keine'], t: 'No tiene hermanos.', e: 'Bruder es masculino y va en acusativo → keinen.' },
      { s: 'Das ist ___ Kuli, das ist ein Bleistift.', a: 'kein', d: ['keine', 'nicht'], t: 'Eso no es un boli, es un lápiz.', e: 'Tras "sein" va nominativo: kein Kuli.' },
      { s: 'Wir haben ___ Kinder.', a: 'keine', d: ['kein', 'keinen'], t: 'No tenemos hijos.', e: 'Plural → keine.' },
      { s: 'Ich trinke ___ Alkohol.', a: 'keinen', d: ['kein', 'keine'], t: 'No bebo alcohol.', e: 'Alkohol es masculino en acusativo → keinen.' },
      { s: 'Sie hat ___ Wohnung in Wien.', a: 'keine', d: ['kein', 'keinen'], t: 'No tiene piso en Viena.', e: 'Wohnung es femenino: keine.' },
      { s: 'Ich bin ___ Student.', a: 'kein', d: ['keine', 'nicht'], t: 'No soy estudiante.', e: 'Profesión sin artículo → se niega con kein.' },
      { s: 'Das Zimmer hat ___ Fenster.', a: 'kein', d: ['keine', 'keinen'], t: 'La habitación no tiene ventana.', e: 'Fenster es neutro: kein Fenster.' },
      { s: 'Heute arbeite ich ___.', a: 'nicht', d: ['kein', 'keine'], t: 'Hoy no trabajo.', e: 'Se niega el verbo, no un sustantivo → nicht.' },
      { s: 'Ich habe ___ Hunger.', a: 'keinen', d: ['kein', 'keine'], t: 'No tengo hambre.', e: 'Hunger es masculino en acusativo → keinen.' },
      { s: 'Wir haben ___ Enkel.', a: 'keine', d: ['kein', 'keinen'], t: 'No tenemos nietos.', e: 'Plural → keine.' },
      { s: 'Er hat ___ Auto.', a: 'kein', d: ['keine', 'keinen'], t: 'No tiene coche.', e: '"das Auto" en acusativo neutro → kein.' },
      { s: 'Leider habe ich ___ Geschwister.', a: 'keine', d: ['kein', 'keinen'], t: 'Por desgracia no tengo hermanos.', e: 'En plural siempre keine.' },
      { s: 'Bis jetzt haben wir ___ Kinder.', a: 'keine', d: ['kein', 'keinen'], t: 'Hasta ahora no tenemos hijos.', e: 'Plural: keine.' },
      { s: 'Sie hat ___ Bruder, nur Schwestern.', a: 'keinen', d: ['kein', 'keine'], t: 'No tiene hermanos, solo hermanas.', e: 'der Bruder en acusativo → keinen.' },
      { s: 'Das ist ___ Foto von mir.', a: 'kein', d: ['keine', 'keinen'], t: 'Esa no es una foto mía.', e: 'das Foto → kein.' },
      { s: 'Hier gibt es ___ Aufzug.', a: 'keinen', d: ['kein', 'keine'], t: 'Aquí no hay ascensor.', e: 'es gibt pide acusativo: der Aufzug → keinen.' },
      { s: 'Ich habe ___ Zeit für Besuch.', a: 'keine', d: ['kein', 'keinen'], t: 'No tengo tiempo para visitas.', e: 'die Zeit → keine.' },
      { s: 'Wir haben ___ Hund, der Vermieter erlaubt es nicht.', a: 'keinen', d: ['kein', 'keine'], t: 'No tenemos perro, el casero no lo permite.', e: 'der Hund en acusativo: keinen.' },
      { s: 'Im Kühlschrank ist ___ Tropfen Milch mehr.', a: 'kein', d: ['keine', 'keinen'], t: 'En la nevera no queda ni una gota de leche.', e: 'der Tropfen en nominativo: kein.' },
      { s: 'Hier in der Nähe gibt es ___ einziges Café.', a: 'kein', d: ['keine', 'keinen'], t: 'Por aquí cerca no hay ni una sola cafetería.', e: 'das Café en acusativo: kein.' },
      { s: 'Sie hat ___ Geschwister, dafür zehn Cousins.', a: 'keine', d: ['kein', 'keinen'], t: 'No tiene hermanos, pero sí diez primos.', e: 'Plural: keine.' },
      { s: 'Ich brauche ___ Hilfe, das schaffe ich schon.', a: 'keine', d: ['kein', 'keinen'], t: 'No necesito ayuda, con esto puedo.', e: 'die Hilfe en acusativo: keine.' },
      { s: 'Das ist doch wirklich ___ Problem.', a: 'kein', d: ['keine', 'keinen'], t: 'Pero si eso no es ningún problema.', e: 'das Problem en nominativo: kein.' },
      { s: 'Mein Bruder trinkt seit einem Jahr ___ Alkohol mehr.', a: 'keinen', d: ['kein', 'keine'], t: 'Mi hermano lleva un año sin beber alcohol.', e: 'der Alkohol en acusativo: keinen.' },
      { s: 'Zum Frühstück nehme ich ___ Butter, nur Marmelade.', a: 'keine', d: ['kein', 'keinen'], t: 'Para desayunar no tomo mantequilla, solo mermelada.', e: 'die Butter: keine.' }
    ],
    orders: [
      { sol: ['Ich', 'habe', 'keine', 'Geschwister'], t: 'No tengo hermanos.', e: 'Plural → keine.' },
      { sol: ['Das', 'ist', 'kein', 'Problem'], t: 'Eso no es un problema.', e: 'Neutro en nominativo: kein.' },
      { sol: ['Er', 'hat', 'keinen', 'Hund'], t: 'No tiene perro.', e: 'Masculino en acusativo: keinen.' },
      { sol: ['Wir', 'haben', 'heute', 'keine', 'Zeit'], t: 'Hoy no tenemos tiempo.', e: 'Femenino: keine Zeit.' }
    ],
    clozes: [
      { txt: '– Hast du Geschwister? – Nein, ich habe ___ Geschwister. – Und Kinder? – Auch ___ Kinder. Ich habe nur ___ Hund. – Und ___ Katze?', a: ['keine', 'keine', 'einen', 'keine'], extra: ['kein', 'keinen', 'eine', 'kein'], t: '– ¿Tienes hermanos? – No, no tengo hermanos. – ¿Y hijos? – Tampoco tengo hijos. Solo tengo un perro. – ¿Y gato no?', e: '"kein-" se declina igual que "ein-": por eso el plural es keine y "der Hund" en acusativo sería einen / keinen.' }
    ]
  },

  // ---------- A1.1 L6: el acusativo ----------
  'artikel-im-akkusativ-singular': {
    picks: [
      { s: 'Ich nehme ___ Salat.', a: 'den', d: ['der', 'dem'], t: 'Tomo la ensalada.', e: 'En acusativo solo cambia el masculino: der → den.' },
      { s: 'Ich möchte ___ Apfel.', a: 'einen', d: ['ein', 'einem'], t: 'Quiero una manzana.', e: 'Apfel es masculino: ein → einen.' },
      { s: 'Ich nehme ___ Suppe.', a: 'die', d: ['der', 'den'], t: 'Tomo la sopa.', e: 'El femenino no cambia en acusativo: die Suppe.' },
      { s: 'Wir essen ___ Brot.', a: 'das', d: ['der', 'den'], t: 'Comemos el pan.', e: 'El neutro no cambia: das Brot.' },
      { s: 'Trinkst du ___ Kaffee?', a: 'den', d: ['der', 'dem'], t: '¿Te bebes el café?', e: 'Kaffee es masculino en acusativo → den.' },
      { s: 'Ich kaufe ___ Kuchen.', a: 'einen', d: ['ein', 'eine'], t: 'Compro un pastel.', e: 'Kuchen es masculino → einen.' },
      { s: 'Sie bestellt ___ Wasser.', a: 'ein', d: ['einen', 'eine'], t: 'Pide un agua.', e: 'Wasser es neutro: ein, también en acusativo.' },
      { s: 'Nimmst du ___ Tee?', a: 'einen', d: ['ein', 'eine'], t: '¿Tomas un té?', e: 'Tee es masculino → einen.' },
      { s: 'Ich esse ___ Banane.', a: 'eine', d: ['einen', 'ein'], t: 'Me como un plátano.', e: 'Banane es femenino: eine.' },
      { s: 'Er isst ___ Fisch.', a: 'den', d: ['der', 'dem'], t: 'Se come el pescado.', e: 'Masculino en acusativo → den.' },
      { s: 'Wir möchten ___ Tisch für zwei.', a: 'einen', d: ['ein', 'eine'], t: 'Querríamos una mesa para dos.', e: 'Tisch es masculino → einen.' },
      { s: 'Ich brauche ___ Löffel.', a: 'einen', d: ['ein', 'eine'], t: 'Necesito una cuchara.', e: 'Löffel es masculino → einen.' },
      { s: 'Als Vorspeise nehme ich ___ Salat.', a: 'den', d: ['der', 'dem'], t: 'De entrante tomo la ensalada.', e: 'der Salat en acusativo → den.' },
      { s: 'Wir bestellen ___ Suppe.', a: 'die', d: ['der', 'den'], t: 'Pedimos la sopa.', e: 'die Suppe no cambia en acusativo.' },
      { s: 'Bringen Sie bitte ___ Brot.', a: 'das', d: ['der', 'den'], t: 'Traiga el pan, por favor.', e: 'das Brot no cambia en acusativo.' },
      { s: 'Ich möchte ___ Apfel, bitte.', a: 'den', d: ['der', 'dem'], t: 'Quiero la manzana, por favor.', e: 'der Apfel → den.' },
      { s: 'Sie isst ___ Nachspeise nicht.', a: 'die', d: ['der', 'den'], t: 'Ella no se come el postre.', e: 'die Nachspeise → die.' },
      { s: 'Nimmst du ___ Käse oder den Fisch?', a: 'den', d: ['der', 'dem'], t: '¿Coges el queso o el pescado?', e: 'der Käse → den en acusativo.' },
      { s: 'Wir kaufen ___ Mineralwasser im Angebot.', a: 'das', d: ['der', 'den'], t: 'Compramos el agua mineral de oferta.', e: 'das Mineralwasser → das.' }
    ],
    orders: [
      { sol: ['Ich', 'nehme', 'den', 'Salat', 'und', 'das', 'Brot'], t: 'Tomo la ensalada y el pan.', e: 'den (masc.) y das (neutro) en acusativo.' },
      { sol: ['Ich', 'möchte', 'bitte', 'einen', 'Apfelsaft'], t: 'Quisiera un zumo de manzana, por favor.', e: 'Masculino en acusativo: einen.' },
      { sol: ['Wir', 'nehmen', 'die', 'Suppe'], t: 'Tomamos la sopa.', e: 'El femenino no cambia.' },
      { sol: ['Nimmst', 'du', 'auch', 'einen', 'Kaffee?'], t: '¿Tomas tú también un café?', e: 'einen Kaffee.' }
    ],
    clozes: [
      { txt: 'Ich nehme ___ Kaffee, ___ Semmel und ___ Wasser. Und für dich? – Für mich nur ___ Tee.', a: ['einen', 'eine', 'ein', 'einen'], extra: ['einem', 'einer', 'eines'], t: 'Yo tomo un café, un panecillo y un agua. ¿Y para ti? – Para mí solo un té.', e: 'Detrás de "nehmen" y de "für" todo va en acusativo: solo el masculino cambia (ein → einen).' }
    ]
  },

  // ---------- A1.1 L6: keinen / keine / kein ----------
  'negativartikel-im-akkusativ': {
    reserva: ['keinem', 'keiner'],
    picks: [
      { s: 'Ich esse ___ Fisch.', a: 'keinen', d: ['kein', 'keine'], t: 'No como pescado.', e: 'Fisch es masculino en acusativo → keinen.' },
      { s: 'Haben Sie ___ Kipferl?', a: 'keine', d: ['kein', 'keinen'], t: '¿No tienen Kipferl?', e: 'Plural → keine.' },
      { s: 'Wir haben ___ Brot mehr.', a: 'kein', d: ['keine', 'keinen'], t: 'Ya no tenemos pan.', e: 'Brot es neutro: kein.' },
      { s: 'Ich trinke ___ Milch.', a: 'keine', d: ['kein', 'keinen'], t: 'No bebo leche.', e: 'Milch es femenino: keine.' },
      { s: 'Er möchte ___ Kuchen.', a: 'keinen', d: ['kein', 'keine'], t: 'No quiere pastel.', e: 'Kuchen es masculino en acusativo → keinen.' },
      { s: 'Ich nehme ___ Zucker, danke.', a: 'keinen', d: ['kein', 'keine'], t: 'No tomo azúcar, gracias.', e: 'Zucker es masculino → keinen.' },
      { s: 'Sie essen ___ Fleisch.', a: 'kein', d: ['keine', 'keinen'], t: 'No comen carne.', e: 'Fleisch es neutro: kein.' },
      { s: 'Haben Sie ___ Tomaten?', a: 'keine', d: ['kein', 'keinen'], t: '¿No tienen tomates?', e: 'Plural → keine.' },
      { s: 'Ich möchte ___ Suppe.', a: 'keine', d: ['kein', 'keinen'], t: 'No quiero sopa.', e: 'Suppe es femenino: keine.' },
      { s: 'Wir haben ___ Salat mehr.', a: 'keinen', d: ['kein', 'keine'], t: 'Ya no nos queda ensalada.', e: 'Salat es masculino → keinen.' },
      { s: 'Das Café hat ___ Kuchen heute.', a: 'keinen', d: ['kein', 'keine'], t: 'Hoy la cafetería no tiene pastel.', e: 'Masculino en acusativo → keinen.' },
      { s: 'Ich trinke ___ Bier.', a: 'kein', d: ['keine', 'keinen'], t: 'No bebo cerveza.', e: 'Bier es neutro: kein.' },
      { s: 'Ich esse ___ Fleisch.', a: 'kein', d: ['keine', 'keinen'], t: 'No como carne.', e: 'das Fleisch → kein.' },
      { s: 'Wir haben ___ Kipferl mehr.', a: 'keine', d: ['kein', 'keinen'], t: 'Ya no nos quedan Kipferl.', e: 'Plural → keine.' },
      { s: 'Er trinkt ___ Kaffee am Abend.', a: 'keinen', d: ['kein', 'keine'], t: 'Él no bebe café por la tarde.', e: 'der Kaffee en acusativo → keinen.' },
      { s: 'Ich möchte ___ Suppe, danke.', a: 'keine', d: ['kein', 'keinen'], t: 'No quiero sopa, gracias.', e: 'die Suppe → keine.' },
      { s: 'Sie kauft ___ Fisch mehr hier.', a: 'keinen', d: ['kein', 'keine'], t: 'Ella ya no compra pescado aquí.', e: 'der Fisch → keinen.' },
      { s: 'Wir nehmen ___ Nachspeise.', a: 'keine', d: ['kein', 'keinen'], t: 'No tomamos postre.', e: 'die Nachspeise → keine.' },
      { s: 'Das Kind isst ___ Gemüse.', a: 'kein', d: ['keine', 'keinen'], t: 'El niño no come verdura.', e: 'das Gemüse → kein.' },
      { s: 'Ich nehme ___ Nachtisch, danke.', a: 'keinen', d: ['kein', 'keine'], t: 'No tomo postre, gracias.', e: 'der Nachtisch en acusativo: keinen.' },
      { s: 'Wir haben heute leider ___ Suppe.', a: 'keine', d: ['kein', 'keinen'], t: 'Hoy, por desgracia, no tenemos sopa.', e: 'die Suppe: keine.' },
      { s: 'Sie kauft ___ Fleisch, sie isst vegetarisch.', a: 'kein', d: ['keine', 'keinen'], t: 'No compra carne, come vegetariano.', e: 'das Fleisch: kein.' },
      { s: 'Ich habe ___ Hunger, nur Durst.', a: 'keinen', d: ['kein', 'keine'], t: 'No tengo hambre, solo sed.', e: 'der Hunger en acusativo: keinen.' },
      { s: 'Er trinkt vor dem Training ___ Bier.', a: 'kein', d: ['keine', 'keinen'], t: 'Antes de entrenar no bebe cerveza.', e: 'das Bier: kein.' },
      { s: 'Hast du heute Abend ___ Zeit?', a: 'keine', d: ['kein', 'keinen'], t: '¿No tienes tiempo esta noche?', e: 'die Zeit: keine.' },
      { s: 'Wir brauchen ___ Teller mehr, es reicht so.', a: 'keine', d: ['kein', 'keinen'], t: 'No hacen falta más platos, así basta.', e: 'Plural: keine Teller.' },
      { s: 'In dieser Straße finde ich nie ___ Parkplatz.', a: 'keinen', d: ['kein', 'keine'], t: 'En esta calle nunca encuentro aparcamiento.', e: 'der Parkplatz en acusativo: keinen.' }
    ],
    orders: [
      { sol: ['Ich', 'esse', 'keinen', 'Fisch'], t: 'No como pescado.', e: 'keinen para el masculino en acusativo.' },
      { sol: ['Haben', 'Sie', 'keine', 'Kipferl?'], t: '¿No tienen Kipferl?', e: 'Plural: keine.' },
      { sol: ['Wir', 'haben', 'heute', 'kein', 'Brot'], t: 'Hoy no tenemos pan.', e: 'Neutro: kein.' },
      { sol: ['Sie', 'trinkt', 'keinen', 'Kaffee'], t: 'Ella no bebe café.', e: 'Masculino en acusativo: keinen.' }
    ],
    clozes: [
      { txt: 'Ich trinke ___ Kaffee mehr und esse ___ Fleisch. Wir haben leider auch ___ Milch mehr im Haus.', a: ['keinen', 'kein', 'keine'], extra: ['keinem', 'keiner', 'keines'], t: 'Ya no bebo café ni como carne. Por desgracia tampoco nos queda leche en casa.', e: '"kein-" se declina como "ein-": der Kaffee en acusativo → keinen, das Fleisch → kein, die Milch → keine.' }
    ]
  },

  // ---------- A1.2 L10: el dativo ----------
  'definiter-artikel-im-dativ': {
    picks: [
      { s: 'Ich fahre mit ___ Bus.', a: 'dem', d: ['den', 'der'], t: 'Voy en autobús.', e: '"mit" pide dativo; Bus es masculino → dem.' },
      { s: 'Sie kommt aus ___ Bibliothek.', a: 'der', d: ['die', 'dem'], t: 'Ella viene de la biblioteca.', e: '"aus" pide dativo; Bibliothek es femenino → der.' },
      { s: 'Wir fahren mit ___ Auto.', a: 'dem', d: ['das', 'den'], t: 'Vamos en coche.', e: 'Neutro en dativo: das → dem.' },
      { s: 'Er spricht mit ___ Kindern.', a: 'den', d: ['die', 'dem'], t: 'Habla con los niños.', e: 'Plural en dativo: die → den (+ -n en el sustantivo).' },
      { s: 'Ich komme gerade von ___ Arbeit.', a: 'der', d: ['die', 'dem'], t: 'Vengo ahora mismo del trabajo.', e: '"von" + dativo; Arbeit es femenino → der.' },
      { s: 'Das Buch liegt auf ___ Tisch.', a: 'dem', d: ['den', 'der'], t: 'El libro está sobre la mesa.', e: 'Posición (Wo?) → dativo: dem Tisch.' },
      { s: 'Sie wohnt bei ___ Schwester.', a: 'der', d: ['die', 'dem'], t: 'Vive en casa de su hermana.', e: '"bei" + dativo, femenino → der.' },
      { s: 'Nach ___ Kurs gehe ich einkaufen.', a: 'dem', d: ['den', 'der'], t: 'Después del curso voy a comprar.', e: '"nach" + dativo, masculino → dem.' },
      { s: 'Ich fahre mit ___ U-Bahn.', a: 'der', d: ['die', 'dem'], t: 'Voy en metro.', e: 'U-Bahn es femenino → der.' },
      { s: 'Der Schlüssel ist in ___ Tasche.', a: 'der', d: ['die', 'dem'], t: 'La llave está en el bolso.', e: 'Wo? → dativo; Tasche es femenino → der.' },
      { s: 'Wir helfen ___ Nachbarn.', a: 'dem', d: ['den', 'der'], t: 'Ayudamos al vecino.', e: 'helfen exige dativo; Nachbar es masculino → dem.' },
      { s: 'Er kommt aus ___ Türkei.', a: 'der', d: ['die', 'dem'], t: 'Viene de Turquía.', e: 'Los países con artículo (die Türkei) van en dativo tras "aus": der Türkei.' },
      { s: 'Die Apotheke ist neben ___ Bäckerei.', a: 'der', d: ['die', 'den'], t: 'La farmacia está al lado de la panadería.', e: '"neben" con lugar → dativo; femenino → der.' },
      { s: 'Der Markt ist hinter ___ Bahnhof.', a: 'dem', d: ['den', 'der'], t: 'El mercado está detrás de la estación.', e: 'Masculino en dativo → dem.' },
      { s: 'Wir treffen uns vor ___ Kino.', a: 'dem', d: ['das', 'der'], t: 'Quedamos delante del cine.', e: 'Neutro en dativo → dem.' },
      { s: 'Das Café ist zwischen ___ Post und der Bank.', a: 'der', d: ['die', 'dem'], t: 'El café está entre correos y el banco.', e: '"die Post" en dativo → der.' },
      { s: 'Die Kinder spielen auf ___ Spielplatz.', a: 'dem', d: ['den', 'der'], t: 'Los niños juegan en el parque infantil.', e: 'Sin movimiento → dativo: auf dem.' },
      { s: 'Der Bus hält gegenüber ___ Schule.', a: 'der', d: ['die', 'dem'], t: 'El autobús para enfrente del colegio.', e: 'gegenüber + dativo femenino → der.' },
      { s: 'Die Haltestelle ist bei ___ Museum.', a: 'dem', d: ['das', 'der'], t: 'La parada está junto al museo.', e: '"bei" siempre con dativo.' },
      { s: 'Wir wohnen in ___ Nähe vom Bahnhof.', a: 'der', d: ['die', 'dem'], t: 'Vivimos cerca de la estación.', e: '"in der Nähe" es fijo, con dativo.' },
      { s: 'Ich fahre lieber mit ___ Bus.', a: 'dem', d: ['den', 'der'], t: 'Prefiero ir en autobús.', e: 'mit pide dativo: der Bus → dem.' },
      { s: 'Wir wohnen direkt neben ___ Kirche.', a: 'der', d: ['die', 'dem'], t: 'Vivimos justo al lado de la iglesia.', e: 'die Kirche en dativo → der.' },
      { s: 'Das Museum liegt hinter ___ Rathaus.', a: 'dem', d: ['das', 'der'], t: 'El museo está detrás del ayuntamiento.', e: 'das Rathaus en dativo → dem.' },
      { s: 'Sie arbeitet seit Jahren bei ___ Bank.', a: 'der', d: ['die', 'dem'], t: 'Lleva años trabajando en el banco.', e: 'bei + dativo: die Bank → der.' },
      { s: 'Der Bus hält direkt vor ___ Bahnhof.', a: 'dem', d: ['den', 'der'], t: 'El autobús para justo delante de la estación.', e: 'der Bahnhof en dativo → dem.' },
      { s: 'Hilfst du kurz ___ Mann mit dem Koffer?', a: 'dem', d: ['den', 'der'], t: '¿Ayudas un momento al señor de la maleta?', e: 'helfen pide dativo: dem Mann.' },
      { s: 'Der Rucksack da gehört ___ Lehrerin, glaube ich.', a: 'der', d: ['die', 'dem'], t: 'Esa mochila es de la profesora, creo.', e: 'gehören pide dativo femenino: der Lehrerin.' },
      { s: 'Wir haben den ___ für das Lied gedankt.', a: 'Kindern', d: ['Kinder', 'Kindes'], t: 'Les dimos las gracias a los niños por la canción.', e: 'En dativo plural el sustantivo añade una -n: den Kindern.' },
      { s: 'Gib ___ Kind bitte den Ball zurück.', a: 'dem', d: ['das', 'der'], t: 'Devuélvele la pelota al niño, por favor.', e: 'Dativo neutro: dem Kind.' },
      { s: 'Morgen zeige ich ___ Gästen die ganze Stadt.', a: 'den', d: ['die', 'der'], t: 'Mañana les enseño la ciudad entera a los invitados.', e: 'Dativo plural: den Gästen.' },
      { s: 'Sag ___ Kollegin bitte, dass es später wird.', a: 'der', d: ['die', 'dem'], t: 'Dile a la compañera que se hará tarde, por favor.', e: 'Dativo femenino: der Kollegin.' },
      { s: 'Der Kuchen ___ den Kindern besser als uns.', a: 'schmeckte', d: ['schmeckten', 'gefiel den'], t: 'A los niños la tarta les gustó más que a nosotros.', e: 'El sujeto es der Kuchen, singular; los niños van en dativo.' },
      { s: 'Wie geht es eigentlich ___ Nachbarn von oben?', a: 'dem', d: ['den', 'der'], t: '¿Qué tal está el vecino de arriba?', e: 'Dativo masculino: dem Nachbarn.' }
    ],
    orders: [
      { sol: ['Ich', 'fahre', 'jeden', 'Tag', 'mit', 'dem', 'Bus'], t: 'Voy todos los días en autobús.', e: 'mit + dativo.' },
      { sol: ['Sie', 'kommt', 'gerade', 'aus', 'der', 'Bibliothek'], t: 'Acaba de salir de la biblioteca.', e: 'aus + dativo femenino.' },
      { sol: ['Wir', 'sprechen', 'mit', 'den', 'Kindern'], t: 'Hablamos con los niños.', e: 'Plural en dativo: den Kindern.' },
      { sol: ['Nach', 'dem', 'Essen', 'trinken', 'wir', 'einen', 'Kaffee'], alt: [['Wir', 'trinken', 'nach', 'dem', 'Essen', 'einen', 'Kaffee']], t: 'Después de comer tomamos un café.', e: 'nach + dativo; complemento inicial → inversión.' }
    ]
  },

  // ---------- A1.1 L4: mein / dein / sein / ihr ----------
  'possessivartikel-singular': {
    reserva: ['meinem', 'meiner'],
    picks: [
      { s: 'Das ist ___ Bruder.', a: 'mein', d: ['meine', 'meinen'], t: 'Este es mi hermano.', e: 'Bruder es masculino en nominativo → mein.' },
      { s: 'Das ist ___ Schwester.', a: 'meine', d: ['mein', 'meinen'], t: 'Esta es mi hermana.', e: 'Femenino → meine.' },
      { s: 'Ist das ___ Vater?', a: 'dein', d: ['deine', 'deinen'], t: '¿Es ese tu padre?', e: 'Vater es masculino → dein.' },
      { s: 'Wie heißt ___ Mutter?', a: 'deine', d: ['dein', 'deinen'], t: '¿Cómo se llama tu madre?', e: 'Mutter es femenino → deine.' },
      { s: 'Das ist ___ Kind.', a: 'mein', d: ['meine', 'meinen'], t: 'Este es mi hijo.', e: 'Kind es neutro → mein (igual que el masculino).' },
      { s: 'Er liebt ___ Frau sehr.', a: 'seine', d: ['sein', 'seinen'], t: 'Quiere mucho a su mujer.', e: '"sein" = de él; Frau es femenino → seine.' },
      { s: 'Sie besucht ___ Eltern.', a: 'ihre', d: ['ihr', 'ihren'], t: 'Ella visita a sus padres.', e: '"ihr" = de ella; plural → ihre.' },
      { s: 'Wo ist ___ Handy?', a: 'dein', d: ['deine', 'deinen'], t: '¿Dónde está tu móvil?', e: 'Handy es neutro → dein.' },
      { s: 'Das sind ___ Kinder.', a: 'meine', d: ['mein', 'meinen'], t: 'Estos son mis hijos.', e: 'Plural → meine.' },
      { s: 'Ist das ___ Tasche?', a: 'deine', d: ['dein', 'deinen'], t: '¿Es ese tu bolso?', e: 'Tasche es femenino → deine.' },
      { s: 'Sie ist ___ beste Freundin.', a: 'meine', d: ['mein', 'meinen'], t: 'Es mi mejor amiga.', e: 'Freundin es femenino → meine.' },
      { s: '___ Bruder wohnt in Graz.', a: 'Sein', d: ['Seine', 'Seinen'], t: 'Su hermano vive en Graz.', e: 'Masculino en nominativo → sein.' },
      { s: '___ Tante wohnt in Graz.', a: 'Meine', d: ['Mein', 'Meinen'], t: 'Mi tía vive en Graz.', e: 'Femenino en nominativo → meine.' },
      { s: 'Wo ist ___ Schlüssel?', a: 'dein', d: ['deine', 'deinen'], t: '¿Dónde está tu llave?', e: '«der Schlüssel» en nominativo → dein, sin terminación.' },
      { s: 'Hier rechts steht ___ Bruder.', a: 'mein', d: ['meine', 'meinen'], t: 'Aquí a la derecha está mi hermano.', e: 'der Bruder → mein, sin terminación.' },
      { s: '___ Schwester wohnt in Graz.', a: 'Meine', d: ['Mein', 'Meinen'], t: 'Mi hermana vive en Graz.', e: 'die Schwester → meine.' },
      { s: 'Wie heißt ___ Vater?', a: 'dein', d: ['deine', 'deinen'], t: '¿Cómo se llama tu padre?', e: 'der Vater → dein.' },
      { s: '___ Tochter ist erst drei.', a: 'Seine', d: ['Sein', 'Seinen'], t: 'Su hija tiene solo tres años.', e: 'die Tochter → seine.' },
      { s: 'Das ist ___ Foto von der Hochzeit.', a: 'ihr', d: ['ihre', 'ihren'], t: 'Esta es su foto de la boda.', e: 'das Foto → ihr, neutro sin terminación.' },
      { s: 'Kennst du ___ Onkel?', a: 'meinen', d: ['mein', 'meine'], t: '¿Conoces a mi tío?', e: 'kennen pide acusativo: den Onkel → meinen.' },
      { s: '___ Eltern kommen aus Serbien.', a: 'Meine', d: ['Mein', 'Meinen'], t: 'Mis padres son de Serbia.', e: 'En plural siempre meine.' }
    ],
    orders: [
      { sol: ['Das', 'ist', 'mein', 'Bruder', 'und', 'das', 'ist', 'meine', 'Schwester'], t: 'Este es mi hermano y esta mi hermana.', e: 'mein (masc.) / meine (fem.).' },
      { sol: ['Wie', 'heißt', 'deine', 'Mutter?'], t: '¿Cómo se llama tu madre?', e: 'Femenino → deine.' },
      { sol: ['Meine', 'Eltern', 'wohnen', 'in', 'Spanien'], t: 'Mis padres viven en España.', e: 'Plural → meine.' },
      { sol: ['Ist', 'das', 'dein', 'Handy?'], t: '¿Es este tu móvil?', e: 'Neutro → dein.' }
    ],
    clozes: [
      { txt: 'Das ist ___ Familie: ___ Vater, ___ Mutter und ___ kleiner Bruder.', a: ['meine', 'mein', 'meine', 'mein'], extra: ['mein', 'meine', 'meinen', 'meinen'], t: 'Esta es mi familia: mi padre, mi madre y mi hermano pequeño.', e: 'La terminación la manda el género de lo que sigue: die Familie y die Mutter → meine; der Vater y der Bruder en nominativo → mein.' }
    ]
  },

  // ---------- A1.2 L16: sein / ihr en nominativo y acusativo ----------
  'possessivartikel-nominativ-akkusativ-sei': {
    reserva: ['meinem', 'meiner'],
    picks: [
      { s: 'Das ist ___ Schwester. (von Peter)', a: 'seine', d: ['ihre', 'seinen'], t: 'Esa es su hermana (de Peter).', e: 'El poseedor es un hombre → sein-; Schwester es femenino → seine.' },
      { s: 'Sie lädt ___ Chef ein.', a: 'ihren', d: ['ihr', 'ihre'], t: 'Ella invita a su jefe.', e: 'La poseedora es ella → ihr-; Chef es masculino en acusativo → ihren.' },
      { s: 'Er besucht ___ Bruder.', a: 'seinen', d: ['sein', 'seine'], t: 'Él visita a su hermano.', e: 'Masculino en acusativo → seinen.' },
      { s: '___ Mann heißt Tom. (von Anna)', a: 'Ihr', d: ['Sein', 'Ihre'], t: 'Su marido se llama Tom (de Anna).', e: 'Poseedora mujer → ihr; Mann es masculino en nominativo → ihr.' },
      { s: 'Peter feiert ___ Geburtstag.', a: 'seinen', d: ['sein', 'seine'], t: 'Peter celebra su cumpleaños.', e: 'Geburtstag es masculino en acusativo → seinen.' },
      { s: 'Anna sucht ___ Handy.', a: 'ihr', d: ['ihren', 'ihre'], t: 'Anna busca su móvil.', e: 'Handy es neutro: no cambia en acusativo → ihr.' },
      { s: 'Er ruft ___ Mutter an.', a: 'seine', d: ['sein', 'seinen'], t: 'Llama a su madre.', e: 'Mutter es femenino → seine.' },
      { s: 'Sie liebt ___ Arbeit.', a: 'ihre', d: ['ihr', 'ihren'], t: 'Le encanta su trabajo.', e: 'Arbeit es femenino → ihre.' },
      { s: '___ Kinder sind schon groß. (von Herrn Meier)', a: 'Seine', d: ['Sein', 'Ihre'], t: 'Sus hijos ya son mayores (del señor Meier).', e: 'Plural → seine.' },
      { s: 'Maria bringt ___ Freund mit.', a: 'ihren', d: ['ihr', 'ihre'], t: 'Maria trae a su novio.', e: 'Freund es masculino en acusativo → ihren.' },
      { s: 'Er schreibt ___ Freundin eine Karte.', a: 'seiner', d: ['seine', 'seinen'], t: 'Le escribe una postal a su novia.', e: 'Aquí Freundin es el destinatario → dativo femenino: seiner.' },
      { s: 'Sie zeigt uns ___ Wohnung.', a: 'ihre', d: ['ihr', 'ihren'], t: 'Nos enseña su piso.', e: 'Wohnung es femenino en acusativo → ihre.' },
      { s: 'Das ist Klara und das ist ___ Hund.', a: 'ihr', d: ['ihre', 'ihren'], t: 'Esta es Klara y este es su perro.', e: 'Poseedora femenina → ihr-; "der Hund" en nominativo masculino → ihr.' },
      { s: 'Markus lädt ___ Kollegen zum Essen ein.', a: 'seine', d: ['sein', 'seinen'], t: 'Markus invita a comer a sus compañeros.', e: 'Poseedor masculino → sein-; plural en acusativo → seine.' },
      { s: '___ Wohnung ist sehr hell. (von Frau Berger)', a: 'Ihre', d: ['Ihr', 'Ihren'], t: 'Su piso es muy luminoso. (de la señora Berger)', e: '"die Wohnung" en nominativo femenino → ihre.' },
      { s: 'Er vergisst immer ___ Schlüssel.', a: 'seinen', d: ['sein', 'seine'], t: 'Siempre se olvida la llave.', e: '"der Schlüssel" como objeto directo → acusativo masculino: seinen.' },
      { s: 'Anna trifft ___ Freundinnen am Samstag.', a: 'ihre', d: ['ihr', 'ihren'], t: 'Anna queda con sus amigas el sábado.', e: 'Plural en acusativo → ihre.' },
      { s: '___ Auto steht vor der Tür. (von Thomas)', a: 'Sein', d: ['Seine', 'Seinen'], t: 'Su coche está delante de la puerta. (de Thomas)', e: '"das Auto" en nominativo neutro → sein, sin terminación.' },
      { s: 'Sie sucht ___ Brille schon eine halbe Stunde.', a: 'ihre', d: ['ihr', 'ihren'], t: 'Lleva media hora buscando sus gafas.', e: '"die Brille" en acusativo femenino → ihre.' },
      { s: 'Peter bringt ___ Gitarre mit.', a: 'seine', d: ['sein', 'seinen'], t: 'Peter trae su guitarra.', e: 'Femenino en acusativo → seine.' },
      { s: '___ Eltern wohnen in Graz. (von Lena)', a: 'Ihre', d: ['Ihr', 'Ihren'], t: 'Sus padres viven en Graz. (de Lena)', e: 'Plural en nominativo → ihre.' },
      { s: 'Der Chef liest ___ E-Mails immer sofort.', a: 'seine', d: ['sein', 'seinen'], t: 'El jefe lee sus correos siempre al momento.', e: 'Plural en acusativo → seine.' },
      { s: 'Maria feiert ___ Hochzeit im Juni.', a: 'ihre', d: ['ihr', 'ihren'], t: 'María celebra su boda en junio.', e: '"die Hochzeit" en acusativo femenino → ihre.' },
      { s: '___ Sohn geht schon in die Schule. (von Herrn Weber)', a: 'Sein', d: ['Seine', 'Seinen'], t: 'Su hijo ya va al colegio. (del señor Weber)', e: 'Masculino en nominativo → sein.' },
      { s: 'Sie ruft ___ Bruder jeden Sonntag an.', a: 'ihren', d: ['ihr', 'ihre'], t: 'Llama a su hermano todos los domingos.', e: '"der Bruder" como objeto directo → ihren.' },
      { s: 'Er zeigt uns ___ neues Büro.', a: 'sein', d: ['seine', 'seinen'], t: 'Nos enseña su despacho nuevo.', e: 'Neutro en acusativo → sein, igual que en nominativo.' },
      { s: '___ Freundin kommt aus Polen. (von Jonas)', a: 'Seine', d: ['Sein', 'Seinen'], t: 'Su novia es de Polonia. (de Jonas)', e: 'Femenino en nominativo → seine.' },
      { s: 'Klara verkauft ___ altes Fahrrad.', a: 'ihr', d: ['ihre', 'ihren'], t: 'Klara vende su bici vieja.', e: '"das Fahrrad" en acusativo neutro → ihr.' },
      { s: '___ Kollegen sind alle sehr nett. (von Sabine)', a: 'Ihre', d: ['Ihr', 'Ihren'], t: 'Sus compañeros son todos muy simpáticos. (de Sabine)', e: 'Plural en nominativo → ihre.' },
      { s: 'Der Nachbar wäscht ___ Auto jeden Samstag.', a: 'sein', d: ['seine', 'seinen'], t: 'El vecino lava su coche todos los sábados.', e: 'Neutro en acusativo → sein.' },
      { s: 'Sie packt ___ Koffer schon heute.', a: 'ihren', d: ['ihr', 'ihre'], t: 'Hace su maleta ya hoy.', e: '"der Koffer" en acusativo → ihren.' },
      { s: '___ Schwester studiert in Wien. (von Ali)', a: 'Seine', d: ['Sein', 'Seinen'], t: 'Su hermana estudia en Viena. (de Ali)', e: 'Femenino en nominativo → seine.' },
      { s: 'Er schreibt ___ Großeltern jede Woche.', a: 'seinen', d: ['seine', 'sein'], t: 'Escribe a sus abuelos todas las semanas.', e: '"schreiben" con persona lleva dativo; plural en dativo → seinen.' },
      { s: 'Anna liebt ___ Beruf.', a: 'ihren', d: ['ihr', 'ihre'], t: 'Anna adora su profesión.', e: '"der Beruf" como objeto directo → ihren.' },
      { s: '___ Kinder spielen im Garten. (von Frau Huber)', a: 'Ihre', d: ['Ihr', 'Ihren'], t: 'Sus hijos juegan en el jardín. (de la señora Huber)', e: 'Plural en nominativo → ihre.' },
      { s: 'Er sucht ___ Handschuhe.', a: 'seine', d: ['sein', 'seinen'], t: 'Busca sus guantes.', e: 'Plural en acusativo → seine.' },
      { s: 'Lisa besucht ___ Oma im Krankenhaus.', a: 'ihre', d: ['ihr', 'ihren'], t: 'Lisa visita a su abuela en el hospital.', e: 'Femenino en acusativo → ihre.' },
      { s: '___ Hund heißt Rex. (von Paul)', a: 'Sein', d: ['Seine', 'Seinen'], t: 'Su perro se llama Rex. (de Paul)', e: 'Masculino en nominativo → sein.' },
      { s: 'Sie lädt ___ ganze Familie ein.', a: 'ihre', d: ['ihr', 'ihren'], t: 'Invita a toda su familia.', e: '"die Familie" en acusativo femenino → ihre.' },
      { s: 'Er repariert ___ Fahrrad selbst.', a: 'sein', d: ['seine', 'seinen'], t: 'Se arregla la bici él mismo.', e: 'Neutro en acusativo → sein.' },
      { s: 'Anna feiert heute. ___ Bruder kommt auch.', a: 'Ihr', d: ['Ihre', 'Seine'], t: 'Anna lo celebra hoy. Su hermano también viene.', e: 'Anna → ihr-; der Bruder sin terminación.' },
      { s: 'Markus bringt ___ Freundin mit.', a: 'seine', d: ['sein', 'ihre'], t: 'Markus trae a su novia.', e: 'Markus → sein-; die Freundin → seine.' },
      { s: '___ Eltern backen eine große Torte.', a: 'Ihre', d: ['Ihr', 'Seinen'], t: 'Sus padres hacen una tarta grande.', e: 'Plural → ihre.' },
      { s: 'Er lädt auch ___ Kollegen ein.', a: 'seine', d: ['sein', 'ihren'], t: 'Él invita también a sus compañeros.', e: 'Plural en acusativo → seine.' },
      { s: 'Sie zeigt mir ___ Geschenk.', a: 'ihr', d: ['ihre', 'sein'], t: 'Ella me enseña su regalo.', e: 'das Geschenk → ihr, sin terminación.' },
      { s: 'Kennst du eigentlich ___ Mann?', a: 'ihren', d: ['ihre', 'ihr'], t: '¿Conoces a su marido?', e: 'kennen pide acusativo: der Mann → ihren.' },
      { s: '___ Schwester wohnt seit Mai in Linz.', a: 'Seine', d: ['Sein', 'Ihren'], t: 'Su hermana vive en Linz desde mayo.', e: 'die Schwester → seine.' },
      { s: 'Am Sonntag besuchen wir ___ Großeltern.', a: 'seine', d: ['sein', 'seinen'], t: 'El domingo visitamos a sus abuelos.', e: 'Plural en acusativo → seine.' },
      { s: '___ Auto steht schon vor der Tür.', a: 'Ihr', d: ['Ihre', 'Seinen'], t: 'Su coche ya está delante de la puerta.', e: 'das Auto → ihr.' },
      { s: 'Er hat schon wieder ___ Handy vergessen.', a: 'sein', d: ['seine', 'seinen'], t: 'Se ha vuelto a olvidar el móvil.', e: 'das Handy → sein, también en acusativo.' }
    ],
    orders: [
      { sol: ['Sie', 'lädt', 'ihren', 'Chef', 'zum', 'Fest', 'ein'], t: 'Ella invita a su jefe a la fiesta.', e: 'ihren + acusativo masculino; einladen separable.' },
      { sol: ['Das', 'ist', 'seine', 'Schwester'], t: 'Esa es su hermana.', e: 'Nominativo femenino: seine.' },
      { sol: ['Er', 'besucht', 'am', 'Sonntag', 'seinen', 'Bruder'], t: 'El domingo visita a su hermano.', e: 'Acusativo masculino: seinen.' },
      { sol: ['Ihr', 'Mann', 'kommt', 'aus', 'Italien'], t: 'Su marido es de Italia.', e: 'Nominativo masculino: ihr.' },
      { sol: ['Anna', 'sucht', 'ihr', 'Handy'], t: 'Anna busca su móvil.', e: 'Neutro en acusativo: ihr, sin cambio.' },
      { sol: ['Peter', 'feiert', 'morgen', 'seinen', 'Geburtstag'], t: 'Peter celebra mañana su cumpleaños.', e: 'Acusativo masculino: seinen.' },
      { sol: ['Anna', 'trifft', 'ihre', 'Freundinnen', 'am', 'Samstag'], t: 'Anna queda con sus amigas el sábado.', e: 'Sujeto (1), verbo (2), objeto y complemento de tiempo detrás.' },
      { sol: ['Sein', 'Auto', 'steht', 'vor', 'der', 'Tür'], t: 'Su coche está delante de la puerta.', e: 'El posesivo acompaña al sujeto en 1ª posición.' },
      { sol: ['Sie', 'ruft', 'ihren', 'Bruder', 'jeden', 'Sonntag', 'an'], t: 'Llama a su hermano todos los domingos.', e: 'Verbo separable: el prefijo cierra la frase.' },
      { sol: ['Er', 'vergisst', 'immer', 'seinen', 'Schlüssel'], t: 'Siempre se olvida la llave.', e: 'El objeto directo va en acusativo: seinen.' }
    ],
    clozes: [
      { txt: 'Das ist Peter. ___ Schwester heiratet im Juni, und er lädt ___ ganze Familie ein. ___ Eltern kommen aus Graz.', a: ['Seine', 'seine', 'Seine'], extra: ['Sein', 'seinen', 'Ihre'], t: 'Este es Peter. Su hermana se casa en junio e invita a toda su familia. Sus padres son de Graz.', e: 'Poseedor masculino → sein-, y la terminación la manda lo que sigue: die Schwester y die Familie → seine, los padres en plural → Seine.' },
      { txt: 'Anna feiert am Samstag. ___ Bruder kommt aus Graz und bringt ___ Freundin mit. ___ Eltern backen ___ Torte.', a: ['Ihr', 'seine', 'Ihre', 'eine'], extra: ['Ihre', 'seinen', 'Ihr', 'einen'], t: 'Anna lo celebra el sábado. Su hermano viene de Graz y trae a su novia. Sus padres hacen una tarta.', e: 'Dos poseedores distintos en el mismo texto: Anna → ihr-, y el hermano → sein-. La terminación la manda lo que va detrás.' }
    ]
  },

  // ---------- A2.1 L5: posesivos en los tres casos ----------
  'possessiv-nom-akk-dat': {
    picks: [
      { s: 'Ich hole ___ Sohn von der Schule ab.', a: 'meinen', d: ['mein', 'meinem'], t: 'Recojo a mi hijo del colegio.', e: '"abholen" pide acusativo y "Sohn" es masculino → meinen.' },
      { s: 'Ich spreche morgen mit ___ Lehrerin.', a: 'meiner', d: ['meine', 'meinen'], t: 'Mañana hablo con mi profesora.', e: '"mit" pide dativo y "Lehrerin" es femenino → meiner.' },
      { s: '___ Tochter geht in die Volksschule.', a: 'Meine', d: ['Meinen', 'Meiner'], t: 'Mi hija va a primaria.', e: 'Es el sujeto (nominativo) y es femenino → meine.' },
      { s: 'Hast du ___ Zeugnis schon gesehen?', a: 'sein', d: ['seinen', 'seinem'], t: '¿Has visto ya su boletín de notas?', e: '"Zeugnis" es neutro: en acusativo no cambia → sein.' },
      { s: 'Wir fahren mit ___ Auto in den Urlaub.', a: 'unserem', d: ['unser', 'unseren'], t: 'Nos vamos de vacaciones con nuestro coche.', e: '"mit" pide dativo; Auto es neutro → unserem.' },
      { s: 'Wie geht es ___ Eltern?', a: 'deinen', d: ['deine', 'deiner'], t: '¿Cómo están tus padres?', e: 'Dativo plural para "Eltern" → deinen.' },
      { s: 'Das ist ___ neuer Computer.', a: 'mein', d: ['meinen', 'meinem'], t: 'Ese es mi ordenador nuevo.', e: 'Nominativo masculino (verbo sein) → mein.' },
      { s: 'Frau Müller, ist das ___ Mantel?', a: 'Ihr', d: ['Ihren', 'Ihrem'], t: 'Señora Müller, ¿es este su abrigo?', e: 'Tratamiento formal (Ihr) en nominativo masculino.' },
      { s: 'Ich schreibe ___ Bruder eine Nachricht.', a: 'meinem', d: ['meinen', 'mein'], t: 'Le escribo un mensaje a mi hermano.', e: 'El destinatario va en dativo: meinem Bruder.' },
      { s: 'Sie hilft ___ Mutter im Haushalt.', a: 'ihrer', d: ['ihre', 'ihren'], t: 'Ayuda a su madre en casa.', e: 'helfen + dativo femenino → ihrer.' },
      { s: 'Wir besuchen ___ Großeltern.', a: 'unsere', d: ['unseren', 'unserem'], t: 'Visitamos a nuestros abuelos.', e: 'Acusativo plural → unsere.' },
      { s: 'Gib mir bitte ___ Telefonnummer.', a: 'deine', d: ['dein', 'deinem'], t: 'Dame tu número de teléfono, por favor.', e: 'Telefonnummer es femenino en acusativo → deine.' },
      { s: 'Ich gebe ___ Bruder das Buch.', a: 'meinem', d: ['mein', 'meinen'], t: 'Le doy el libro a mi hermano.', e: '"geben" lleva la persona en dativo; masculino en dativo → meinem.' },
      { s: '___ Schwester wohnt in Linz.', a: 'Meine', d: ['Mein', 'Meinen'], t: 'Mi hermana vive en Linz.', e: 'Femenino en nominativo → meine.' },
      { s: 'Er hilft ___ Mutter im Garten.', a: 'seiner', d: ['seine', 'seinen'], t: 'Ayuda a su madre en el jardín.', e: '"helfen" rige dativo; femenino en dativo → seiner.' },
      { s: 'Wir besuchen ___ Großeltern am Sonntag.', a: 'unsere', d: ['unser', 'unseren'], t: 'Visitamos a nuestros abuelos el domingo.', e: 'Plural en acusativo → unsere.' },
      { s: 'Sie fährt mit ___ Auto zur Arbeit.', a: 'ihrem', d: ['ihr', 'ihre'], t: 'Va al trabajo con su coche.', e: '"mit" siempre lleva dativo; neutro en dativo → ihrem.' },
      { s: '___ Kinder gehen in dieselbe Schule.', a: 'Unsere', d: ['Unser', 'Unseren'], t: 'Nuestros hijos van al mismo colegio.', e: 'Plural en nominativo → unsere.' },
      { s: 'Ich schreibe ___ Freundin eine Nachricht.', a: 'meiner', d: ['meine', 'meinen'], t: 'Le escribo un mensaje a mi amiga.', e: 'El destinatario va en dativo; femenino → meiner.' },
      { s: 'Er sucht ___ Handy.', a: 'sein', d: ['seine', 'seinem'], t: 'Busca su móvil.', e: '"das Handy" como objeto directo → acusativo neutro: sein.' },
      { s: 'Das Buch gehört ___ Lehrerin.', a: 'unserer', d: ['unsere', 'unseren'], t: 'El libro es de nuestra profesora.', e: '"gehören" rige dativo; femenino → unserer.' },
      { s: 'Sie zeigt ___ Eltern die Fotos.', a: 'ihren', d: ['ihre', 'ihrem'], t: 'Les enseña las fotos a sus padres.', e: 'Plural en dativo lleva -n: ihren.' },
      { s: '___ Vater arbeitet bei der Post.', a: 'Mein', d: ['Meine', 'Meinem'], t: 'Mi padre trabaja en correos.', e: 'Masculino en nominativo → mein, sin terminación.' },
      { s: 'Wir danken ___ Nachbarn für die Hilfe.', a: 'unserem', d: ['unser', 'unseren'], t: 'Damos las gracias a nuestro vecino por la ayuda.', e: '"danken" rige dativo; masculino → unserem.' },
      { s: 'Er lädt ___ Kollegen ein.', a: 'seine', d: ['seiner', 'seinem'], t: 'Invita a sus compañeros.', e: 'Plural en acusativo → seine.' },
      { s: 'Ich fahre mit ___ Schwester nach Wien.', a: 'meiner', d: ['meine', 'meinen'], t: 'Voy a Viena con mi hermana.', e: '"mit" + dativo femenino → meiner.' },
      { s: '___ Wohnung liegt im dritten Stock.', a: 'Ihre', d: ['Ihr', 'Ihrem'], t: 'Su piso está en el tercero.', e: 'Femenino en nominativo → ihre.' },
      { s: 'Sie erklärt ___ Sohn die Aufgabe.', a: 'ihrem', d: ['ihren', 'ihre'], t: 'Le explica el ejercicio a su hijo.', e: 'El destinatario en dativo masculino → ihrem.' },
      { s: 'Wir verkaufen ___ altes Sofa.', a: 'unser', d: ['unsere', 'unserem'], t: 'Vendemos nuestro sofá viejo.', e: 'Neutro en acusativo → unser.' },
      { s: 'Der Lehrer spricht mit ___ Eltern.', a: 'meinen', d: ['meine', 'meiner'], t: 'El profesor habla con mis padres.', e: '"mit" + dativo plural, con -n: meinen.' },
      { s: '___ Freund kommt aus Italien.', a: 'Ihr', d: ['Ihre', 'Ihrem'], t: 'Su novio es de Italia.', e: 'Masculino en nominativo → ihr.' },
      { s: 'Ich helfe ___ Tochter bei den Hausaufgaben.', a: 'meiner', d: ['meine', 'meinen'], t: 'Ayudo a mi hija con los deberes.', e: '"helfen" + dativo femenino → meiner.' },
      { s: 'Er bringt ___ Chefin einen Kaffee.', a: 'seiner', d: ['seine', 'seinem'], t: 'Le lleva un café a su jefa.', e: 'Destinatario femenino en dativo → seiner.' },
      { s: '___ Klasse ist sehr groß.', a: 'Unsere', d: ['Unser', 'Unserem'], t: 'Nuestra clase es muy grande.', e: 'Femenino en nominativo → unsere.' },
      { s: 'Sie besucht ___ Onkel im Krankenhaus.', a: 'ihren', d: ['ihr', 'ihrem'], t: 'Visita a su tío en el hospital.', e: 'Masculino en acusativo → ihren.' },
      { s: 'Wir fahren mit ___ Kindern in den Urlaub.', a: 'unseren', d: ['unsere', 'unserem'], t: 'Nos vamos de vacaciones con nuestros hijos.', e: 'Dativo plural con -n: unseren.' },
      { s: 'Ich gebe ___ Lehrerin die Hausaufgaben.', a: 'meiner', d: ['meine', 'meinen'], t: 'Le entrego los deberes a mi profesora.', e: 'Destinatario femenino → dativo: meiner.' },
      { s: 'Das ist ___ Platz, nicht deiner.', a: 'mein', d: ['meinen', 'meinem'], t: 'Este es mi sitio, no el tuyo.', e: 'Masculino en nominativo detrás de "ist" → mein.' },
      { s: 'Er dankt ___ Kolleginnen für die Geduld.', a: 'seinen', d: ['seine', 'seiner'], t: 'Da las gracias a sus compañeras por la paciencia.', e: '"danken" + dativo plural → seinen.' },
      { s: '___ Sohn spielt Klavier.', a: 'Mein', d: ['Meine', 'Meinem'], t: 'Mi hijo toca el piano.', e: 'Masculino en nominativo → mein.' },
      { s: 'Ich gehe mit ___ Mann zum Elternabend.', a: 'meinem', d: ['meinen', 'mein'], t: 'Voy a la reunión de padres con mi marido.', e: 'mit pide dativo: der Mann → meinem.' },
      { s: 'Wir sprechen morgen mit ___ Lehrerin.', a: 'seiner', d: ['seine', 'seinen'], t: 'Mañana hablamos con su profesora.', e: 'mit + dativo femenino: seiner.' },
      { s: 'Er zeigt ___ Eltern das Zeugnis.', a: 'seinen', d: ['seine', 'seiner'], t: 'Les enseña las notas a sus padres.', e: 'El destinatario va en dativo plural: seinen Eltern.' },
      { s: '___ Tochter geht in die dritte Klasse.', a: 'Unsere', d: ['Unseren', 'Unserem'], t: 'Nuestra hija va a tercero.', e: 'Nominativo femenino: unsere.' },
      { s: 'Ich habe ___ Schulbuch zu Hause vergessen.', a: 'mein', d: ['meinem', 'meiner'], t: 'Me he olvidado mi libro de texto en casa.', e: 'das Buch en acusativo → mein.' },
      { s: 'Sprich bitte mit ___ Klassenlehrer.', a: 'deinem', d: ['deinen', 'dein'], t: 'Habla con tu tutor, por favor.', e: 'mit + dativo masculino: deinem.' },
      { s: 'Wir danken ___ Lehrerin für die Geduld.', a: 'Ihrer', d: ['Ihre', 'Ihren'], t: 'Le damos las gracias a su profesora por la paciencia.', e: 'danken pide dativo: Ihrer.' },
      { s: 'Er hilft ___ Schwester bei den Hausaufgaben.', a: 'seiner', d: ['seine', 'seinen'], t: 'Ayuda a su hermana con los deberes.', e: 'helfen pide dativo: seiner Schwester.' },
      { s: '___ Sohn hat sich sehr verbessert.', a: 'Ihr', d: ['Ihre', 'Ihrem'], t: 'Su hijo ha mejorado mucho.', e: 'Nominativo masculino: Ihr Sohn.' },
      { s: 'Ich spreche gern über ___ Fortschritte.', a: 'seine', d: ['seinen', 'seiner'], t: 'Hablo con gusto de sus progresos.', e: 'über pide acusativo plural: seine.' }
    ],
    orders: [
      { sol: ['Ich', 'hole', 'meinen', 'Sohn', 'von', 'der', 'Schule', 'ab'], t: 'Recojo a mi hijo del colegio.', e: 'Acusativo masculino (meinen) y verbo separable.' },
      { sol: ['Ich', 'spreche', 'morgen', 'mit', 'meiner', 'Lehrerin'], t: 'Mañana hablo con mi profesora.', e: 'mit + dativo femenino: meiner.' },
      { sol: ['Meine', 'Tochter', 'geht', 'in', 'die', 'Volksschule'], t: 'Mi hija va a primaria.', e: 'Nominativo femenino: meine.' },
      { sol: ['Wir', 'fahren', 'mit', 'unserem', 'Auto', 'nach', 'Italien'], t: 'Vamos a Italia con nuestro coche.', e: 'mit + dativo neutro: unserem.' },
      { sol: ['Ich', 'schreibe', 'meinem', 'Bruder', 'eine', 'Nachricht'], t: 'Le escribo un mensaje a mi hermano.', e: 'El destinatario va en dativo: meinem.' },
      { sol: ['Wie', 'geht', 'es', 'deinen', 'Eltern?'], t: '¿Cómo están tus padres?', e: 'Dativo plural: deinen Eltern.' },
      { sol: ['Ich', 'gebe', 'meinem', 'Bruder', 'das', 'Buch'], t: 'Le doy el libro a mi hermano.', e: 'Primero el dativo (la persona) y después el acusativo (la cosa).' },
      { sol: ['Sie', 'fährt', 'mit', 'ihrem', 'Auto', 'zur', 'Arbeit'], t: 'Va al trabajo con su coche.', e: '"mit" siempre lleva dativo.' },
      { sol: ['Wir', 'besuchen', 'unsere', 'Großeltern', 'am', 'Sonntag'], t: 'Visitamos a nuestros abuelos el domingo.', e: 'Plural en acusativo: unsere, sin -n.' },
      { sol: ['Der', 'Lehrer', 'spricht', 'mit', 'meinen', 'Eltern'], t: 'El profesor habla con mis padres.', e: 'Dativo plural: la -n es obligatoria.' }
    ],
    clozes: [
      { txt: 'Morgen ist Elternabend. Ich gehe mit ___ Mann in die Schule und wir sprechen mit ___ Lehrerin über ___ Sohn. Danach zeigen wir ___ Eltern von Lisa die Fotos vom Ausflug.', a: ['meinem', 'seiner', 'unseren', 'den'], extra: ['meinen', 'seine', 'unser', 'die'], t: 'Mañana hay reunión de padres. Voy al colegio con mi marido y hablamos con su profesora sobre nuestro hijo. Después les enseñamos las fotos de la excursión a los padres de Lisa.', e: 'Cada hueco lo manda una palabra distinta: "mit" pide dativo, "sprechen mit" también, "über" pide acusativo y el destinatario de "zeigen" va en dativo plural con -n.' },
      { txt: 'Ich gehe mit ___ Mann zum Elternabend. Wir sprechen mit ___ Lehrerin über ___ Sohn und zeigen ___ das Zeugnis.', a: ['meinem', 'seiner', 'unseren', 'ihr'], extra: ['meinen', 'seine', 'unser', 'sie'], t: 'Voy a la reunión de padres con mi marido. Hablamos con su profesora sobre nuestro hijo y le enseñamos las notas.', e: 'Cada hueco lo manda una palabra distinta: mit y sprechen mit piden dativo, über pide acusativo, y el destinatario de zeigen va en dativo.' }
    ]
  },

  // ---------- A1.2 L11: dieser / diese / dieses ----------
  'demonstrativartikel-dieser-diese-dieses': {
    reserva: ['diesen', 'diesem'],
    picks: [
      { s: '___ Sofa ist sehr bequem.', a: 'Dieses', d: ['Dieser', 'Diese'], t: 'Este sofá es muy cómodo.', e: 'Sofa es neutro: dieses (misma terminación que "das").' },
      { s: 'Nehmen wir ___ Lampe?', a: 'diese', d: ['dieser', 'dieses'], t: '¿Nos llevamos esta lámpara?', e: 'Lampe es femenino en acusativo → diese.' },
      { s: '___ Schrank ist zu groß.', a: 'Dieser', d: ['Diese', 'Dieses'], t: 'Este armario es demasiado grande.', e: 'Schrank es masculino en nominativo → dieser.' },
      { s: 'Ich nehme ___ Tisch.', a: 'diesen', d: ['dieser', 'diesem'], t: 'Me llevo esta mesa.', e: 'Masculino en acusativo → diesen.' },
      { s: '___ Stühle sind billig.', a: 'Diese', d: ['Dieser', 'Dieses'], t: 'Estas sillas son baratas.', e: 'Plural → diese.' },
      { s: 'Wie viel kostet ___ Bett?', a: 'dieses', d: ['dieser', 'diese'], t: '¿Cuánto cuesta esta cama?', e: 'Bett es neutro → dieses.' },
      { s: 'Mit ___ Schrank haben wir mehr Platz.', a: 'diesem', d: ['diesen', 'dieser'], t: 'Con este armario tenemos más sitio.', e: '"mit" + dativo masculino → diesem.' },
      { s: '___ Wohnung gefällt mir.', a: 'Diese', d: ['Dieser', 'Dieses'], t: 'Este piso me gusta.', e: 'Wohnung es femenino en nominativo → diese.' },
      { s: 'Ich möchte ___ Teppich.', a: 'diesen', d: ['dieser', 'diesem'], t: 'Quiero esta alfombra.', e: 'Teppich es masculino en acusativo → diesen.' },
      { s: 'In ___ Zimmer ist es sehr hell.', a: 'diesem', d: ['dieses', 'diesen'], t: 'En esta habitación hay mucha luz.', e: 'Wo? → dativo neutro: diesem.' },
      { s: '___ Farbe gefällt mir nicht.', a: 'Diese', d: ['Dieser', 'Dieses'], t: 'Este color no me gusta.', e: 'Farbe es femenino → diese.' },
      { s: 'Nimmst du ___ Stuhl?', a: 'diesen', d: ['dieser', 'diesem'], t: '¿Te llevas esta silla?', e: 'Masculino en acusativo → diesen.' },
      { s: '___ Schrank ist eindeutig zu groß.', a: 'Dieser', d: ['Diese', 'Dieses'], t: 'Este armario es claramente demasiado grande.', e: 'der Schrank → dieser.' },
      { s: '___ Lampe gefällt mir am besten.', a: 'Diese', d: ['Dieser', 'Dieses'], t: 'Esta lámpara es la que más me gusta.', e: 'die Lampe → diese.' },
      { s: '___ Regal nehme ich auf jeden Fall.', a: 'Dieses', d: ['Dieser', 'Diese'], t: 'Esta estantería me la llevo seguro.', e: 'das Regal → dieses.' },
      { s: 'Was kostet ___ Sofa?', a: 'dieses', d: ['dieser', 'diese'], t: '¿Cuánto cuesta este sofá?', e: 'das Sofa → dieses.' },
      { s: '___ Wohnung ist mir zu teuer.', a: 'Diese', d: ['Dieser', 'Dieses'], t: 'Este piso me sale demasiado caro.', e: 'die Wohnung → diese.' }
    ],
    orders: [
      { sol: ['Dieses', 'Sofa', 'ist', 'sehr', 'bequem'], t: 'Este sofá es muy cómodo.', e: 'Neutro en nominativo: dieses.' },
      { sol: ['Ich', 'nehme', 'diesen', 'Tisch'], t: 'Me llevo esta mesa.', e: 'Masculino en acusativo: diesen.' },
      { sol: ['Diese', 'Lampe', 'gefällt', 'mir', 'sehr', 'gut'], t: 'Esta lámpara me gusta mucho.', e: 'Femenino en nominativo: diese.' },
      { sol: ['Wie', 'viel', 'kostet', 'dieser', 'Schrank?'], t: '¿Cuánto cuesta este armario?', e: 'Masculino en nominativo: dieser.' }
    ],
    clozes: [
      { txt: '___ Wohnung ist zu teuer, aber ___ Zimmer hier gefällt mir. ___ Schrank nehmen wir mit, ___ Stühle lassen wir da.', a: ['Diese', 'dieses', 'Diesen', 'diese'], extra: ['Dieser', 'diese', 'Dieses', 'dieser'], t: 'Este piso es demasiado caro, pero esta habitación me gusta. Este armario nos lo llevamos, estas sillas las dejamos.', e: '"dieser" se declina como el artículo: die Wohnung → diese, das Zimmer → dieses, y "der Schrank" como objeto directo → diesen.' }
    ]
  },

  // ---------- A1.2 L14: welch- / dies- ----------
  'fragepronomen-welch-und-dies': {
    picks: [
      { s: '___ Jacke nimmst du? – Diese hier.', a: 'Welche', d: ['Welchen', 'Welches'], t: '¿Qué chaqueta te llevas? – Esta.', e: 'Jacke es femenino en acusativo → welche.' },
      { s: '___ Pullover meinst du?', a: 'Welchen', d: ['Welche', 'Welches'], t: '¿Qué jersey dices?', e: 'Pullover es masculino en acusativo → welchen.' },
      { s: '___ Hemd gefällt dir besser?', a: 'Welches', d: ['Welcher', 'Welche'], t: '¿Qué camisa te gusta más?', e: 'Hemd es neutro → welches.' },
      { s: '___ Schuhe kaufst du?', a: 'Welche', d: ['Welcher', 'Welches'], t: '¿Qué zapatos compras?', e: 'Plural → welche.' },
      { s: 'Welche Hose nimmst du? – ___ hier.', a: 'Diese', d: ['Dieser', 'Dieses'], t: '¿Qué pantalón te llevas? – Este.', e: 'Hose es femenino → diese.' },
      { s: '___ Mantel ist das? – Der von Anna.', a: 'Welcher', d: ['Welche', 'Welches'], t: '¿Qué abrigo es ese? – El de Anna.', e: 'Nominativo masculino → welcher.' },
      { s: 'Welchen Rock möchten Sie? – ___ da.', a: 'Diesen', d: ['Dieser', 'Diesem'], t: '¿Qué falda quiere? – Esa.', e: 'Rock es masculino en acusativo → diesen.' },
      { s: 'In ___ Größe brauchen Sie das?', a: 'welcher', d: ['welche', 'welchen'], t: '¿En qué talla lo necesita?', e: '"in" + dativo femenino → welcher.' },
      { s: '___ T-Shirt nimmst du?', a: 'Welches', d: ['Welcher', 'Welche'], t: '¿Qué camiseta te llevas?', e: 'T-Shirt es neutro → welches.' },
      { s: 'Welches Kleid gefällt dir? – ___ dort.', a: 'Dieses', d: ['Dieser', 'Diese'], t: '¿Qué vestido te gusta? – Ese.', e: 'Kleid es neutro → dieses.' },
      { s: '___ Farbe möchten Sie?', a: 'Welche', d: ['Welcher', 'Welches'], t: '¿Qué color quiere?', e: 'Farbe es femenino en acusativo → welche.' },
      { s: 'Mit ___ Bus fährst du?', a: 'welchem', d: ['welchen', 'welcher'], t: '¿En qué autobús vas?', e: '"mit" + dativo masculino → welchem.' },
      { s: '___ Hose gefällt dir besser?', a: 'Welche', d: ['Welcher', 'Welches'], t: '¿Qué pantalón te gusta más?', e: '"die Hose" → welche.' },
      { s: '___ Pullover nehmen Sie?', a: 'Welchen', d: ['Welche', 'Welches'], t: '¿Qué jersey se lleva?', e: 'Objeto directo masculino → welchen.' },
      { s: '___ Kleid ist das?', a: 'Welches', d: ['Welcher', 'Welche'], t: '¿Qué vestido es ese?', e: '"das Kleid" → welches.' },
      { s: 'Ich nehme ___ hier.', a: 'diese', d: ['dieser', 'diesen'], t: 'Me llevo estas.', e: 'Plural en acusativo → diese.' },
      { s: '___ Schuhe passen besser?', a: 'Welche', d: ['Welcher', 'Welches'], t: '¿Qué zapatos quedan mejor?', e: 'Plural → welche.' },
      { s: '___ Mantel ist teurer?', a: 'Welcher', d: ['Welchen', 'Welches'], t: '¿Qué abrigo es más caro?', e: 'Sujeto masculino → welcher.' },
      { s: 'Nimmst du ___ Rock oder den anderen?', a: 'diesen', d: ['dieser', 'dieses'], t: '¿Te llevas esta falda o la otra?', e: '"der Rock" en acusativo → diesen.' },
      { s: '___ Größe haben Sie?', a: 'Welche', d: ['Welcher', 'Welches'], t: '¿Qué talla tiene?', e: '"die Größe" → welche.' },
      { s: '___ Größe brauchen Sie?', a: 'Welche', d: ['Welcher', 'Welches'], t: '¿Qué talla necesita?', e: 'die Größe → welche.' },
      { s: '___ Kleid gefällt dir am besten?', a: 'Welches', d: ['Welcher', 'Welche'], t: '¿Qué vestido te gusta más?', e: 'das Kleid → welches.' },
      { s: '___ Mantel nimmst du jetzt?', a: 'Welchen', d: ['Welcher', 'Welches'], t: '¿Qué abrigo te llevas al final?', e: 'nehmen pide acusativo: der Mantel → welchen.' },
      { s: '___ Jacke ist gerade im Angebot?', a: 'Welche', d: ['Welcher', 'Welches'], t: '¿Qué chaqueta está de oferta ahora?', e: 'die Jacke → welche.' }
    ],
    orders: [
      { sol: ['Welche', 'Jacke', 'nimmst', 'du?'], t: '¿Qué chaqueta te llevas?', e: 'welche + femenino en acusativo.' },
      { sol: ['Welchen', 'Pullover', 'meinst', 'du?'], t: '¿Qué jersey dices?', e: 'welchen + masculino en acusativo.' },
      { sol: ['Ich', 'nehme', 'dieses', 'Hemd'], t: 'Me llevo esta camisa.', e: 'dieses + neutro.' },
      { sol: ['Welches', 'Kleid', 'gefällt', 'dir', 'besser?'], t: '¿Qué vestido te gusta más?', e: 'welches + neutro en nominativo.' }
    ]
  },

  // ---------- A1.1 L4: el genitivo con nombres ----------
  'genitiv-bei-namen': {
    picks: [
      { s: 'Das ist ___ Familie.', a: 'Ahmets', d: ['Ahmet', "Ahmet's"], t: 'Esta es la familia de Ahmet.', e: 'Con nombres propios se añade -s directamente, sin apóstrofo.' },
      { s: '___ Bruder wohnt in Linz.', a: 'Marias', d: ['Maria', "Maria's"], t: 'El hermano de Maria vive en Linz.', e: 'Maria + s, sin apóstrofo.' },
      { s: 'Wie heißt ___ Mutter?', a: 'Peters', d: ['Peter', "Peter's"], t: '¿Cómo se llama la madre de Peter?', e: 'El poseedor va delante: Peters Mutter.' },
      { s: 'Das ist ___ Auto.', a: 'Annas', d: ['Anna', "Anna's"], t: 'Ese es el coche de Anna.', e: 'Annas Auto.' },
      { s: '___ Tochter geht schon zur Schule.', a: 'Zofias', d: ['Zofia', "Zofia's"], t: 'La hija de Zofia ya va al colegio.', e: 'Nombre + s delante del sustantivo.' },
      { s: 'Kennst du ___ Freundin?', a: 'Toms', d: ['Tom', "Tom's"], t: '¿Conoces a la novia de Tom?', e: 'Toms Freundin.' },
      { s: 'Das ist das Auto ___ Vaters.', a: 'meines', d: ['mein', 'meinem'], t: 'Ese es el coche de mi padre.', e: 'Con un posesivo el genitivo masculino es meines + -s en el sustantivo.' },
      { s: '___ Handy ist kaputt.', a: 'Lenas', d: ['Lena', "Lena's"], t: 'El móvil de Lena está roto.', e: 'Lenas Handy.' },
      { s: 'Wir feiern ___ Geburtstag.', a: 'Samirs', d: ['Samir', "Samir's"], t: 'Celebramos el cumpleaños de Samir.', e: 'Samirs Geburtstag.' },
      { s: 'Das sind ___ Kinder.', a: 'Julias', d: ['Julia', "Julia's"], t: 'Estos son los hijos de Julia.', e: 'Julias Kinder.' },
      { s: '___ Wohnung ist sehr schön.', a: 'Marcos', d: ['Marco', "Marco's"], t: 'El piso de Marco es muy bonito.', e: 'Marcos Wohnung.' },
      { s: 'Ich habe ___ Nummer nicht.', a: 'Hannas', d: ['Hanna', "Hanna's"], t: 'No tengo el número de Hanna.', e: 'Hannas Nummer.' },
      { s: 'Das ist ___ Fahrrad.', a: 'Lisas', d: ['Lisa', 'Lisa\'s'], t: 'Esta es la bici de Lisa.', e: 'Con nombres propios el genitivo es una -s pegada, sin apóstrofo.' },
      { s: '___ Bruder wohnt in Berlin.', a: 'Tobias\'', d: ['Tobiass', 'Tobias'], t: 'El hermano de Tobias vive en Berlín.', e: 'Si el nombre ya acaba en -s, se pone solo el apóstrofo.' }
    ],
    orders: [
      { sol: ['Das', 'ist', 'Ahmets', 'Familie'], t: 'Esta es la familia de Ahmet.', e: 'El poseedor con -s va delante del sustantivo.' },
      { sol: ['Marias', 'Bruder', 'wohnt', 'in', 'Linz'], t: 'El hermano de Maria vive en Linz.', e: 'Marias Bruder como sujeto.' },
      { sol: ['Wie', 'heißt', 'Peters', 'Mutter?'], t: '¿Cómo se llama la madre de Peter?', e: 'Peters Mutter.' },
      { sol: ['Wir', 'feiern', 'heute', 'Samirs', 'Geburtstag'], t: 'Hoy celebramos el cumpleaños de Samir.', e: 'Samirs Geburtstag en acusativo.' }
    ],
    clozes: [
      { txt: 'Auf dem Foto sind ___ Eltern und daneben ___ Schwester. Das Baby ist ___ Tochter, und der Hund gehört ___ Opa.', a: ['Annas', 'Peters', 'Marias', 'Lukas\''], extra: ['Anna', 'Peter\'s', 'Maria', 'Lukass'], t: 'En la foto están los padres de Anna y al lado la hermana de Peter. El bebé es la hija de María, y el perro es del abuelo de Lukas.', e: 'Tres nombres normales llevan la -s pegada; el cuarto ya acaba en -s y por eso solo lleva apóstrofo.' }
    ]
  },
  'laender-mit-artikel': {
    picks: [
      { s: 'Meine Mutter kommt aus ___ Türkei.', a: 'der', d: ['die', 'dem'], t: 'Mi madre es de Turquía.', e: 'die Türkei lleva artículo y aus pide dativo: aus der Türkei.' },
      { s: 'Im Sommer fahren wir in ___ Schweiz.', a: 'die', d: ['der', 'dem'], t: 'En verano vamos a Suiza.', e: 'Movimiento hacia: in + acusativo, y die Schweiz es femenino.' },
      { s: 'Ich komme aus ___.', a: 'Spanien', d: ['der Spanien', 'dem Spanien'], t: 'Soy de España.', e: 'La mayoría de países van sin artículo: aus Spanien.' },
      { s: 'Sie arbeitet seit einem Jahr in ___ USA.', a: 'den', d: ['die', 'der'], t: 'Trabaja desde hace un año en Estados Unidos.', e: 'die USA es plural: in + dativo plural es den.' },
      { s: 'Mein Kollege kommt aus ___ Ukraine.', a: 'der', d: ['die', 'das'], t: 'Mi compañero es de Ucrania.', e: 'die Ukraine lleva artículo: aus der Ukraine.' },
      { s: 'Nächstes Jahr fahre ich nach ___.', a: 'Italien', d: ['die Italien', 'der Italien'], t: 'El año que viene voy a Italia.', e: 'Países sin artículo van con nach, no con in.' },
      { s: 'Der Zug fährt in ___ Slowakei.', a: 'die', d: ['der', 'das'], t: 'El tren va a Eslovaquia.', e: 'die Slowakei con movimiento: in die Slowakei.' },
      { s: 'Wir waren letzten Winter in ___ Schweiz.', a: 'der', d: ['die', 'das'], t: 'El invierno pasado estuvimos en Suiza.', e: 'Aquí no hay movimiento: in + dativo, der Schweiz.' },
      { s: 'Kommst du aus ___ Iran?', a: 'dem', d: ['der', 'die'], t: '¿Eres de Irán?', e: 'der Iran es masculino: aus dem Iran.' },
      { s: 'Meine Nachbarn kommen aus ___.', a: 'Kroatien', d: ['der Kroatien', 'dem Kroatien'], t: 'Mis vecinos son de Croacia.', e: 'Kroatien va sin artículo.' }
    ]
  },
  'von-statt-genitiv': {
    picks: [
      { s: 'Das ist der Mann ___ meiner Schwester.', a: 'von', d: ['aus', 'bei'], t: 'Este es el marido de mi hermana.', e: 'En el día a día: von + dativo en vez del genitivo.' },
      { s: 'Die Tochter von ___ Bruder ist zwölf.', a: 'meinem', d: ['mein', 'meinen'], t: 'La hija de mi hermano tiene doce años.', e: 'von pide dativo: meinem Bruder.' },
      { s: '___ Cousine arbeitet in Linz.', a: 'Annas', d: ['Anna', 'Von Anna'], t: 'La prima de Anna trabaja en Linz.', e: 'Con nombres propios basta con -s, sin apóstrofo.' },
      { s: 'Das Auto ___ meinen Eltern ist alt.', a: 'von', d: ['aus', 'für'], t: 'El coche de mis padres es viejo.', e: 'von + dativo plural: von meinen Eltern.' },
      { s: 'Die Freundin von ___ Sohn heißt Lena.', a: 'meinem', d: ['mein', 'meinen'], t: 'La novia de mi hijo se llama Lena.', e: 'der Sohn en dativo: meinem Sohn.' },
      { s: 'Das ist die Oma ___ Kinder.', a: 'der', d: ['von der', 'den'], t: 'Esta es la abuela de los niños.', e: 'Con plural también vale el genitivo: der Kinder.' },
      { s: 'Der Hund von ___ Nachbarin bellt viel.', a: 'meiner', d: ['meine', 'meinen'], t: 'El perro de mi vecina ladra mucho.', e: 'die Nachbarin en dativo: meiner Nachbarin.' },
      { s: '___ Schwester kommt am Samstag.', a: 'Thomas\'', d: ['Thomas', 'Von Thomas'], t: 'La hermana de Thomas viene el sábado.', e: 'Si el nombre ya acaba en -s, solo se pone el apóstrofo.' },
      { s: 'Das Zimmer ___ meinem Neffen ist klein.', a: 'von', d: ['aus', 'zu'], t: 'La habitación de mi sobrino es pequeña.', e: 'von + dativo, la forma normal al hablar.' },
      { s: 'Die Eltern von ___ Freundin wohnen in Linz.', a: 'meiner', d: ['meine', 'meinem'], t: 'Los padres de mi amiga viven en Linz.', e: 'die Freundin en dativo: meiner Freundin.' }
    ]
  },
  'stoffnamen-ohne-artikel': {
    picks: [
      { s: 'Ich trinke morgens ___.', a: 'Kaffee', d: ['den Kaffee', 'einen Kaffee'], t: 'Por la mañana tomo café.', e: 'En general, sin artículo.' },
      { s: 'Wir kaufen heute ___ und Milch.', a: 'Brot', d: ['das Brot', 'ein Brot'], t: 'Hoy compramos pan y leche.', e: 'Alimentos en general: sin artículo.' },
      { s: 'Bringst du bitte ___ Glas Wasser?', a: 'ein', d: ['das', 'kein'], t: '¿Traes un vaso de agua?', e: 'Con una medida SÍ aparece el artículo.' },
      { s: 'Er isst kein ___.', a: 'Fleisch', d: ['das Fleisch', 'Fleische'], t: 'No come carne.', e: 'Detrás de kein tampoco va artículo.' },
      { s: '___ von gestern schmeckt nicht mehr.', a: 'Das Brot', d: ['Brot', 'Ein Brot'], t: 'El pan de ayer ya no sabe bien.', e: 'Si se concreta cuál, sí lleva artículo.' },
      { s: 'Zum Frühstück esse ich ___.', a: 'Joghurt', d: ['den Joghurt', 'einen Joghurt'], t: 'Para desayunar tomo yogur.', e: 'En general: sin artículo.' },
      { s: 'Ich nehme ___ Tasse Tee.', a: 'eine', d: ['die', 'keine'], t: 'Tomo una taza de té.', e: 'Con la medida Tasse vuelve el artículo.' },
      { s: 'Magst du ___?', a: 'Fisch', d: ['den Fisch', 'einen Fisch'], t: '¿Te gusta el pescado?', e: 'Gustos en general: sin artículo.' },
      { s: '___ im Kühlschrank ist alle.', a: 'Die Milch', d: ['Milch', 'Eine Milch'], t: 'La leche de la nevera se ha acabado.', e: 'Se habla de una leche concreta: con artículo.' },
      { s: 'Wir haben noch ___ zu Hause.', a: 'Reis', d: ['den Reis', 'einen Reis'], t: 'Todavía tenemos arroz en casa.', e: 'Cantidad indefinida: sin artículo.' }
    ]
  },
  'adjektiv-nach-bestimmtem-artikel': {
    picks: [
      { s: 'Die ___ Küche gefällt mir sehr.', a: 'neue', d: ['neuer', 'neues'], t: 'La cocina nueva me gusta mucho.', e: 'Detrás de die en nominativo: -e.' },
      { s: 'Das ___ Zimmer geht nach hinten raus.', a: 'helle', d: ['heller', 'helles'], t: 'La habitación luminosa da al patio.', e: 'Detrás de das: -e.' },
      { s: 'Der ___ Balkon ist wirklich schön.', a: 'große', d: ['großer', 'großes'], t: 'El balcón grande es muy bonito.', e: 'Detrás de der en nominativo: -e.' },
      { s: 'Ich nehme die ___ Wohnung.', a: 'kleinere', d: ['kleinerer', 'kleineres'], t: 'Me quedo con el piso más pequeño.', e: 'die + acusativo femenino: sigue siendo -e.' },
      { s: 'Die ___ Möbel bleiben hier.', a: 'alten', d: ['alte', 'altes'], t: 'Los muebles viejos se quedan aquí.', e: 'En plural la terminación es -en.' },
      { s: 'Wir haben den ___ Schrank verkauft.', a: 'alten', d: ['alte', 'alter'], t: 'Hemos vendido el armario viejo.', e: 'Acusativo masculino: den + -en.' },
      { s: 'In der ___ Wohnung war es lauter.', a: 'alten', d: ['alte', 'alter'], t: 'En el piso viejo había más ruido.', e: 'Dativo femenino: der + -en.' },
      { s: 'Das ___ Bad ist endlich fertig.', a: 'neue', d: ['neuer', 'neues'], t: 'El baño nuevo por fin está acabado.', e: 'das + -e en nominativo.' },
      { s: 'Mit dem ___ Herd kocht es sich besser.', a: 'neuen', d: ['neue', 'neuer'], t: 'Con la cocina nueva se cocina mejor.', e: 'Dativo masculino: dem + -en.' },
      { s: 'Die ___ Fenster halten die Kälte draußen.', a: 'neuen', d: ['neue', 'neues'], t: 'Las ventanas nuevas dejan el frío fuera.', e: 'Plural: -en.' }
    ]
  },
  'adjektiv-nach-unbestimmtem-artikel': {
    picks: [
      { s: 'Ich suche einen ___ Mantel.', a: 'blauen', d: ['blaue', 'blauer'], t: 'Busco un abrigo azul.', e: 'Acusativo masculino: einen + -en.' },
      { s: 'Das ist eine ___ Jacke.', a: 'schöne', d: ['schöner', 'schönes'], t: 'Es una chaqueta bonita.', e: 'Femenino nominativo: eine + -e.' },
      { s: 'Er trägt ein ___ Hemd.', a: 'weißes', d: ['weiße', 'weißer'], t: 'Lleva una camisa blanca.', e: 'Neutro: ein + -es, porque ein no dice el género.' },
      { s: 'Ein ___ Pullover wäre praktisch.', a: 'warmer', d: ['warme', 'warmes'], t: 'Un jersey de abrigo sería práctico.', e: 'Masculino nominativo: ein + -er.' },
      { s: 'Ich hätte gern eine ___ Hose.', a: 'bequeme', d: ['bequemer', 'bequemes'], t: 'Querría un pantalón cómodo.', e: 'Femenino acusativo: eine + -e.' },
      { s: 'Sie kauft keinen ___ Rock.', a: 'kurzen', d: ['kurze', 'kurzer'], t: 'No compra ninguna falda corta.', e: 'kein- se declina como ein-.' },
      { s: 'Mein ___ Schal ist aus Wolle.', a: 'neuer', d: ['neue', 'neues'], t: 'Mi bufanda nueva es de lana.', e: 'mein- también como ein-: -er en masculino.' },
      { s: 'Mit einem ___ Gürtel sieht es besser aus.', a: 'braunen', d: ['braune', 'brauner'], t: 'Con un cinturón marrón queda mejor.', e: 'Dativo masculino: einem + -en.' },
      { s: 'Das ist ein ___ Kleid für den Sommer.', a: 'leichtes', d: ['leichte', 'leichter'], t: 'Es un vestido ligero para el verano.', e: 'Neutro: -es.' },
      { s: 'Ich brauche eine ___ Größe.', a: 'größere', d: ['größerer', 'größeres'], t: 'Necesito una talla más grande.', e: 'Femenino acusativo: -e.' }
    ]
  },
  'welche-groesse-akkusativ': {
    picks: [
      { s: '___ Schuhgröße brauchen Sie?', a: 'Welche', d: ['Welcher', 'Welches'], t: '¿Qué número de zapato necesita?', e: 'die Größe es femenino: welche.' },
      { s: '___ Mantel nehmen Sie?', a: 'Welchen', d: ['Welcher', 'Welche'], t: '¿Qué abrigo se lleva?', e: 'Acusativo masculino: welchen.' },
      { s: '___ T-Shirt nimmst du mit?', a: 'Welches', d: ['Welcher', 'Welche'], t: '¿Qué camiseta te llevas?', e: 'das Hemd es neutro: welches.' },
      { s: '___ Farbe suchen Sie?', a: 'Welche', d: ['Welcher', 'Welches'], t: '¿Qué color busca?', e: 'die Farbe, acusativo femenino: welche.' },
      { s: 'In ___ Geschäft war das?', a: 'welchem', d: ['welchen', 'welche'], t: '¿En qué tienda fue?', e: 'in + dativo neutro: welchem.' },
      { s: '___ Schuhe möchten Sie anprobieren?', a: 'Welche', d: ['Welchen', 'Welches'], t: '¿Qué zapatos quiere probarse?', e: 'Plural: welche.' },
      { s: '___ Pullover ist im Angebot?', a: 'Welcher', d: ['Welchen', 'Welches'], t: '¿Qué jersey está de oferta?', e: 'Nominativo masculino: welcher.' },
      { s: 'Mit ___ Karte zahlen Sie?', a: 'welcher', d: ['welche', 'welchen'], t: '¿Con qué tarjeta paga?', e: 'mit + dativo femenino: welcher.' },
      { s: '___ Rock steht mir besser?', a: 'Welcher', d: ['Welchen', 'Welches'], t: '¿Qué falda me queda mejor?', e: 'der Rock, nominativo: welcher.' },
      { s: '___ Größe brauchen die Kinder?', a: 'Welche', d: ['Welchen', 'Welcher'], t: '¿Qué talla necesitan los niños?', e: 'die Größe, acusativo: welche.' }
    ]
  },
  'adjektiv-ohne-artikel': {
    picks: [
      { s: 'Nach dem Sport trinke ich ___ Wasser.', a: 'kaltes', d: ['kalte', 'kalter'], t: 'Después del deporte bebo agua fría.', e: 'Sin artículo, el adjetivo coge la terminación del artículo: -es.' },
      { s: '___ Luft tut immer gut.', a: 'Frische', d: ['Frisches', 'Frischer'], t: 'El aire fresco siempre sienta bien.', e: 'die Luft: -e.' },
      { s: '___ Saft schmeckt am besten.', a: 'Frischer', d: ['Frische', 'Frisches'], t: 'El zumo recién hecho es el que mejor sabe.', e: 'der Saft: -er.' },
      { s: 'Er isst gern ___ Obst.', a: 'frisches', d: ['frische', 'frischer'], t: 'Le gusta la fruta fresca.', e: 'das Obst: -es.' },
      { s: 'Mit ___ Schuhen läuft es sich besser.', a: 'guten', d: ['gute', 'gutes'], t: 'Con buenos zapatos se corre mejor.', e: 'Dativo plural sin artículo: -en.' },
      { s: '___ Bewegung hilft gegen Stress.', a: 'Regelmäßige', d: ['Regelmäßiges', 'Regelmäßiger'], t: 'El ejercicio regular ayuda contra el estrés.', e: 'die Bewegung: -e.' },
      { s: 'Ich brauche ___ Training, keine Ausreden.', a: 'hartes', d: ['harte', 'harter'], t: 'Necesito entrenamiento duro, no excusas.', e: 'das Training: -es.' },
      { s: '___ Sportler trainieren jeden Tag.', a: 'Gute', d: ['Guter', 'Gutes'], t: 'Los buenos deportistas entrenan cada día.', e: 'Plural sin artículo: -e.' },
      { s: 'Bei ___ Wetter laufe ich draußen.', a: 'schönem', d: ['schöne', 'schönes'], t: 'Con buen tiempo corro fuera.', e: 'Dativo neutro sin artículo: -em.' },
      { s: 'Er trinkt nur ___ Tee.', a: 'grünen', d: ['grüne', 'grünes'], t: 'Solo bebe té verde.', e: 'der Tee en acusativo: -en.' }
    ]
  },
  'genitiv-mit-des-der': {
    picks: [
      { s: 'Das ist das Büro ___ Chefs.', a: 'des', d: ['der', 'dem'], t: 'Esta es la oficina del jefe.', e: 'Masculino en genitivo: des + -s en el nombre.' },
      { s: 'Die Adresse ___ Firma steht unten.', a: 'der', d: ['des', 'dem'], t: 'La dirección de la empresa está abajo.', e: 'Femenino en genitivo: der.' },
      { s: 'Der Name ___ Kollegen fällt mir nicht ein.', a: 'des', d: ['der', 'dem'], t: 'No me viene el nombre del compañero.', e: 'Masculino: des Kollegen.' },
      { s: 'Das Ende ___ Vertrags ist im Juni.', a: 'des', d: ['der', 'dem'], t: 'El contrato acaba en junio.', e: 'der Vertrag: des Vertrags.' },
      { s: 'Die Tür ___ Konferenzraums war zu.', a: 'des', d: ['der', 'dem'], t: 'La puerta de la sala de reuniones estaba cerrada.', e: 'Masculino con -s.' },
      { s: 'Die Nummer ___ Abteilung finde ich nicht.', a: 'der', d: ['des', 'dem'], t: 'No encuentro el número del departamento.', e: 'die Abteilung: der.' },
      { s: 'Das Gehalt ___ Mitarbeiter ist gestiegen.', a: 'der', d: ['des', 'dem'], t: 'El sueldo de los empleados ha subido.', e: 'Plural en genitivo: der.' },
      { s: 'Der Anfang ___ Projekts war schwierig.', a: 'des', d: ['der', 'dem'], t: 'El principio del proyecto fue difícil.', e: 'das Projekt: des Projekts.' },
      { s: 'Im Alltag sagt man oft ___ statt Genitiv.', a: 'von', d: ['zu', 'bei'], t: 'En el día a día se dice a menudo «von» en vez del genitivo.', e: 'das Büro von dem Chef.' },
      { s: 'Die Unterlagen ___ Kunden liegen hier.', a: 'des', d: ['der', 'dem'], t: 'La documentación del cliente está aquí.', e: 'der Kunde: des Kunden.' }
    ]
  },
  'adjektiv-alle-faelle-wdh': {
    picks: [
      { s: 'Der ___ Lehrer ist sehr geduldig.', a: 'neue', d: ['neuer', 'neues'], t: 'El profesor nuevo es muy paciente.', e: 'der ya dice el género: el adjetivo se conforma con -e.' },
      { s: 'Ein ___ Lehrer kommt nach den Ferien.', a: 'neuer', d: ['neue', 'neues'], t: 'Un profesor nuevo llega después de las vacaciones.', e: 'ein no dice el género: el adjetivo lo dice con -er.' },
      { s: 'Ich habe den ___ Test schon geschrieben.', a: 'schweren', d: ['schwere', 'schwerer'], t: 'Ya he hecho el examen difícil.', e: 'den + -en, siempre.' },
      { s: 'Das ist eine ___ Aufgabe.', a: 'leichte', d: ['leichter', 'leichtes'], t: 'Es un ejercicio fácil.', e: 'eine + -e en femenino.' },
      { s: 'Mit ___ Noten kommt man weiter.', a: 'guten', d: ['gute', 'gutes'], t: 'Con buenas notas se llega lejos.', e: 'Dativo plural sin artículo: -en.' },
      { s: 'Das ___ Zeugnis liegt auf dem Tisch.', a: 'neue', d: ['neuer', 'neues'], t: 'El boletín nuevo está en la mesa.', e: 'das + -e.' },
      { s: 'Ein ___ Zeugnis freut die Eltern.', a: 'gutes', d: ['gute', 'guter'], t: 'Un buen boletín alegra a los padres.', e: 'ein + neutro: -es.' },
      { s: 'Die ___ Schüler helfen den anderen.', a: 'älteren', d: ['ältere', 'älteres'], t: 'Los alumnos mayores ayudan a los demás.', e: 'Plural con die: -en.' },
      { s: 'Er ist ein ___ Schüler.', a: 'fleißiger', d: ['fleißige', 'fleißiges'], t: 'Es un alumno aplicado.', e: 'ein + masculino: -er.' },
      { s: 'Wenn der Artikel nichts sagt, sagt es ___.', a: 'das Adjektiv', d: ['das Nomen', 'das Verb'], t: 'Si el artículo no lo dice, lo dice el adjetivo.', e: 'Es la regla corta que vale casi siempre.' }
    ]
  }
};
