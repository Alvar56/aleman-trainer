// TEMA: artículos y determinantes.
// der/die/das y sus formas en acusativo y dativo, ein/kein, los posesivos,
// dieser/welcher y el genitivo con nombres propios. Es donde se decide si una
// frase suena alemana o no, y el punto que más se falla al hablar rápido.

export const ARTICULOS = {
  // ---------- A1.1 L3: der / die / das ----------
  'definiter-artikel-singular': {
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
      { s: '___ Mädchen heißt Lena.', a: 'Das', d: ['Der', 'Die'], t: 'La niña se llama Lena.', e: 'Las palabras en -chen son neutras, aunque sean personas: das Mädchen.' }
    ],
    orders: [
      { sol: ['Der', 'Tisch', 'ist', 'sehr', 'schön'], t: 'La mesa es muy bonita.', e: 'Artículo + sustantivo forman el sujeto.' },
      { sol: ['Wo', 'ist', 'die', 'Tasche?'], t: '¿Dónde está el bolso?', e: 'die Tasche (femenino).' },
      { sol: ['Das', 'Buch', 'liegt', 'auf', 'dem', 'Tisch'], t: 'El libro está sobre la mesa.', e: 'das Buch (neutro).' },
      { sol: ['Der', 'Schlüssel', 'ist', 'nicht', 'hier'], t: 'La llave no está aquí.', e: 'der Schlüssel (masculino).' }
    ]
  },

  // ---------- A1.1 L4: ein / eine ----------
  'indefiniter-artikel-ein-e': {
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
      { s: 'Ich möchte ___ Kaffee.', a: 'einen', d: ['ein', 'eine'], t: 'Quiero un café.', e: 'möchten + acusativo, Kaffee es masculino → einen.' }
    ],
    orders: [
      { sol: ['Das', 'ist', 'ein', 'Foto', 'von', 'meiner', 'Familie'], t: 'Esta es una foto de mi familia.', e: 'Tras "sein" el artículo va en nominativo.' },
      { sol: ['Ich', 'habe', 'eine', 'Schwester', 'und', 'einen', 'Bruder'], t: 'Tengo una hermana y un hermano.', e: 'haben + acusativo: eine / einen.' },
      { sol: ['Wir', 'suchen', 'eine', 'größere', 'Wohnung'], t: 'Buscamos un piso más grande.', e: 'Femenino en acusativo: eine.' },
      { sol: ['Er', 'hat', 'einen', 'Hund', 'und', 'eine', 'Katze'], t: 'Tiene un perro y un gato.', e: 'einen (masc.) / eine (fem.) en acusativo.' }
    ]
  },

  // ---------- A1.1 L4: kein / keine ----------
  'negativartikel-kein-e': {
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
      { s: 'Ich habe ___ Hunger.', a: 'keinen', d: ['kein', 'keine'], t: 'No tengo hambre.', e: 'Hunger es masculino en acusativo → keinen.' }
    ],
    orders: [
      { sol: ['Ich', 'habe', 'keine', 'Geschwister'], t: 'No tengo hermanos.', e: 'Plural → keine.' },
      { sol: ['Das', 'ist', 'kein', 'Problem'], t: 'Eso no es un problema.', e: 'Neutro en nominativo: kein.' },
      { sol: ['Er', 'hat', 'keinen', 'Hund'], t: 'No tiene perro.', e: 'Masculino en acusativo: keinen.' },
      { sol: ['Wir', 'haben', 'heute', 'keine', 'Zeit'], t: 'Hoy no tenemos tiempo.', e: 'Femenino: keine Zeit.' }
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
      { s: 'Ich brauche ___ Löffel.', a: 'einen', d: ['ein', 'eine'], t: 'Necesito una cuchara.', e: 'Löffel es masculino → einen.' }
    ],
    orders: [
      { sol: ['Ich', 'nehme', 'den', 'Salat', 'und', 'das', 'Brot'], t: 'Tomo la ensalada y el pan.', e: 'den (masc.) y das (neutro) en acusativo.' },
      { sol: ['Ich', 'möchte', 'bitte', 'einen', 'Apfelsaft'], t: 'Quisiera un zumo de manzana, por favor.', e: 'Masculino en acusativo: einen.' },
      { sol: ['Wir', 'nehmen', 'die', 'Suppe'], t: 'Tomamos la sopa.', e: 'El femenino no cambia.' },
      { sol: ['Nimmst', 'du', 'auch', 'einen', 'Kaffee?'], t: '¿Tomas tú también un café?', e: 'einen Kaffee.' }
    ]
  },

  // ---------- A1.1 L6: keinen / keine / kein ----------
  'negativartikel-im-akkusativ': {
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
      { s: 'Ich trinke ___ Bier.', a: 'kein', d: ['keine', 'keinen'], t: 'No bebo cerveza.', e: 'Bier es neutro: kein.' }
    ],
    orders: [
      { sol: ['Ich', 'esse', 'keinen', 'Fisch'], t: 'No como pescado.', e: 'keinen para el masculino en acusativo.' },
      { sol: ['Haben', 'Sie', 'keine', 'Kipferl?'], t: '¿No tienen Kipferl?', e: 'Plural: keine.' },
      { sol: ['Wir', 'haben', 'heute', 'kein', 'Brot'], t: 'Hoy no tenemos pan.', e: 'Neutro: kein.' },
      { sol: ['Sie', 'trinkt', 'keinen', 'Kaffee'], t: 'Ella no bebe café.', e: 'Masculino en acusativo: keinen.' }
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
      { s: 'Er kommt aus ___ Türkei.', a: 'der', d: ['die', 'dem'], t: 'Viene de Turquía.', e: 'Los países con artículo (die Türkei) van en dativo tras "aus": der Türkei.' }
    ],
    orders: [
      { sol: ['Ich', 'fahre', 'jeden', 'Tag', 'mit', 'dem', 'Bus'], t: 'Voy todos los días en autobús.', e: 'mit + dativo.' },
      { sol: ['Sie', 'kommt', 'gerade', 'aus', 'der', 'Bibliothek'], t: 'Acaba de salir de la biblioteca.', e: 'aus + dativo femenino.' },
      { sol: ['Wir', 'sprechen', 'mit', 'den', 'Kindern'], t: 'Hablamos con los niños.', e: 'Plural en dativo: den Kindern.' },
      { sol: ['Nach', 'dem', 'Essen', 'trinken', 'wir', 'einen', 'Kaffee'], t: 'Después de comer tomamos un café.', e: 'nach + dativo; complemento inicial → inversión.' }
    ]
  },

  // ---------- A1.1 L4: mein / dein / sein / ihr ----------
  'possessivartikel-singular': {
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
      { s: '___ Bruder wohnt in Graz.', a: 'Sein', d: ['Seine', 'Seinen'], t: 'Su hermano vive en Graz.', e: 'Masculino en nominativo → sein.' }
    ],
    orders: [
      { sol: ['Das', 'ist', 'mein', 'Bruder', 'und', 'das', 'ist', 'meine', 'Schwester'], t: 'Este es mi hermano y esta mi hermana.', e: 'mein (masc.) / meine (fem.).' },
      { sol: ['Wie', 'heißt', 'deine', 'Mutter?'], t: '¿Cómo se llama tu madre?', e: 'Femenino → deine.' },
      { sol: ['Meine', 'Eltern', 'wohnen', 'in', 'Spanien'], t: 'Mis padres viven en España.', e: 'Plural → meine.' },
      { sol: ['Ist', 'das', 'dein', 'Handy?'], t: '¿Es este tu móvil?', e: 'Neutro → dein.' }
    ]
  },

  // ---------- A1.2 L16: sein / ihr en nominativo y acusativo ----------
  'possessivartikel-nominativ-akkusativ-sei': {
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
      { s: 'Sie zeigt uns ___ Wohnung.', a: 'ihre', d: ['ihr', 'ihren'], t: 'Nos enseña su piso.', e: 'Wohnung es femenino en acusativo → ihre.' }
    ],
    orders: [
      { sol: ['Sie', 'lädt', 'ihren', 'Chef', 'zum', 'Fest', 'ein'], t: 'Ella invita a su jefe a la fiesta.', e: 'ihren + acusativo masculino; einladen separable.' },
      { sol: ['Das', 'ist', 'seine', 'Schwester'], t: 'Esa es su hermana.', e: 'Nominativo femenino: seine.' },
      { sol: ['Er', 'besucht', 'am', 'Sonntag', 'seinen', 'Bruder'], t: 'El domingo visita a su hermano.', e: 'Acusativo masculino: seinen.' },
      { sol: ['Ihr', 'Mann', 'kommt', 'aus', 'Italien'], t: 'Su marido es de Italia.', e: 'Nominativo masculino: ihr.' },
      { sol: ['Anna', 'sucht', 'ihr', 'Handy'], t: 'Anna busca su móvil.', e: 'Neutro en acusativo: ihr, sin cambio.' },
      { sol: ['Peter', 'feiert', 'morgen', 'seinen', 'Geburtstag'], t: 'Peter celebra mañana su cumpleaños.', e: 'Acusativo masculino: seinen.' }
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
      { s: 'Gib mir bitte ___ Telefonnummer.', a: 'deine', d: ['dein', 'deinem'], t: 'Dame tu número de teléfono, por favor.', e: 'Telefonnummer es femenino en acusativo → deine.' }
    ],
    orders: [
      { sol: ['Ich', 'hole', 'meinen', 'Sohn', 'von', 'der', 'Schule', 'ab'], t: 'Recojo a mi hijo del colegio.', e: 'Acusativo masculino (meinen) y verbo separable.' },
      { sol: ['Ich', 'spreche', 'morgen', 'mit', 'meiner', 'Lehrerin'], t: 'Mañana hablo con mi profesora.', e: 'mit + dativo femenino: meiner.' },
      { sol: ['Meine', 'Tochter', 'geht', 'in', 'die', 'Volksschule'], t: 'Mi hija va a primaria.', e: 'Nominativo femenino: meine.' },
      { sol: ['Wir', 'fahren', 'mit', 'unserem', 'Auto', 'nach', 'Italien'], t: 'Vamos a Italia con nuestro coche.', e: 'mit + dativo neutro: unserem.' },
      { sol: ['Ich', 'schreibe', 'meinem', 'Bruder', 'eine', 'Nachricht'], t: 'Le escribo un mensaje a mi hermano.', e: 'El destinatario va en dativo: meinem.' },
      { sol: ['Wie', 'geht', 'es', 'deinen', 'Eltern?'], t: '¿Cómo están tus padres?', e: 'Dativo plural: deinen Eltern.' }
    ]
  },

  // ---------- A1.2 L11: dieser / diese / dieses ----------
  'demonstrativartikel-dieser-diese-dieses': {
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
      { s: 'Nimmst du ___ Stuhl?', a: 'diesen', d: ['dieser', 'diesem'], t: '¿Te llevas esta silla?', e: 'Masculino en acusativo → diesen.' }
    ],
    orders: [
      { sol: ['Dieses', 'Sofa', 'ist', 'sehr', 'bequem'], t: 'Este sofá es muy cómodo.', e: 'Neutro en nominativo: dieses.' },
      { sol: ['Ich', 'nehme', 'diesen', 'Tisch'], t: 'Me llevo esta mesa.', e: 'Masculino en acusativo: diesen.' },
      { sol: ['Diese', 'Lampe', 'gefällt', 'mir', 'sehr', 'gut'], t: 'Esta lámpara me gusta mucho.', e: 'Femenino en nominativo: diese.' },
      { sol: ['Wie', 'viel', 'kostet', 'dieser', 'Schrank?'], t: '¿Cuánto cuesta este armario?', e: 'Masculino en nominativo: dieser.' }
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
      { s: 'Mit ___ Bus fährst du?', a: 'welchem', d: ['welchen', 'welcher'], t: '¿En qué autobús vas?', e: '"mit" + dativo masculino → welchem.' }
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
      { s: 'Ich habe ___ Nummer nicht.', a: 'Hannas', d: ['Hanna', "Hanna's"], t: 'No tengo el número de Hanna.', e: 'Hannas Nummer.' }
    ],
    orders: [
      { sol: ['Das', 'ist', 'Ahmets', 'Familie'], t: 'Esta es la familia de Ahmet.', e: 'El poseedor con -s va delante del sustantivo.' },
      { sol: ['Marias', 'Bruder', 'wohnt', 'in', 'Linz'], t: 'El hermano de Maria vive en Linz.', e: 'Marias Bruder como sujeto.' },
      { sol: ['Wie', 'heißt', 'Peters', 'Mutter?'], t: '¿Cómo se llama la madre de Peter?', e: 'Peters Mutter.' },
      { sol: ['Wir', 'feiern', 'heute', 'Samirs', 'Geburtstag'], t: 'Hoy celebramos el cumpleaños de Samir.', e: 'Samirs Geburtstag en acusativo.' }
    ]
  }
};
