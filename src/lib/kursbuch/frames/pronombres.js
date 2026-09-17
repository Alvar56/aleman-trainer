// TEMA: pronombres y verbos que cambian el caso.
// er/sie/es para sustantivos, los pronombres en acusativo y en dativo, los
// verbos que exigen dativo (gefallen, gehören, helfen, danken) y "es gibt".

export const PRONOMBRES = {
  // ---------- A1.1 L3: er / sie / es para cosas ----------
  'personalpronomen-singular-er-sie-es-fur-': {
    picks: [
      { s: 'Wo ist der Schlüssel? – ___ ist hier.', a: 'Er', d: ['Sie', 'Es'], t: '¿Dónde está la llave? – Está aquí.', e: 'der Schlüssel → er. El pronombre sigue el género alemán, no el español.' },
      { s: 'Wo ist die Brille? – ___ ist da.', a: 'Sie', d: ['Er', 'Es'], t: '¿Dónde están las gafas? – Ahí.', e: 'die Brille → sie.' },
      { s: 'Wo ist das Buch? – ___ liegt auf dem Tisch.', a: 'Es', d: ['Er', 'Sie'], t: '¿Dónde está el libro? – Está sobre la mesa.', e: 'das Buch → es.' },
      { s: 'Der Tisch ist neu. ___ war teuer.', a: 'Er', d: ['Sie', 'Es'], t: 'La mesa es nueva. Fue cara.', e: 'der Tisch → er, aunque en español sea femenino.' },
      { s: 'Die Lampe ist kaputt. ___ funktioniert nicht.', a: 'Sie', d: ['Er', 'Es'], t: 'La lámpara está rota. No funciona.', e: 'die Lampe → sie.' },
      { s: 'Das Handy ist neu. ___ war ein Geschenk.', a: 'Es', d: ['Er', 'Sie'], t: 'El móvil es nuevo. Fue un regalo.', e: 'das Handy → es.' },
      { s: 'Wo ist der Kuli? – ___ ist in der Tasche.', a: 'Er', d: ['Sie', 'Es'], t: '¿Dónde está el boli? – En el bolso.', e: 'der Kuli → er.' },
      { s: 'Die Wohnung ist groß. ___ hat drei Zimmer.', a: 'Sie', d: ['Er', 'Es'], t: 'El piso es grande. Tiene tres habitaciones.', e: 'die Wohnung → sie.' },
      { s: 'Das Fenster ist offen. ___ ist kaputt.', a: 'Es', d: ['Er', 'Sie'], t: 'La ventana está abierta. Está rota.', e: 'das Fenster → es.' },
      { s: 'Der Stuhl gefällt mir. ___ ist sehr bequem.', a: 'Er', d: ['Sie', 'Es'], t: 'La silla me gusta. Es muy cómoda.', e: 'der Stuhl → er.' },
      { s: 'Die Tasche ist schön. ___ kostet 40 Euro.', a: 'Sie', d: ['Er', 'Es'], t: 'El bolso es bonito. Cuesta 40 euros.', e: 'die Tasche → sie.' },
      { s: 'Das Mädchen ist klein. ___ heißt Lena.', a: 'Es', d: ['Er', 'Sie'], t: 'La niña es pequeña. Se llama Lena.', e: 'das Mädchen es neutro → es, aunque sea una persona.' }
    ],
    orders: [
      { sol: ['Wo', 'ist', 'der', 'Schlüssel?', 'Er', 'ist', 'hier'], t: '¿Dónde está la llave? Está aquí.', e: 'der → er.' },
      { sol: ['Die', 'Brille', 'ist', 'neu.', 'Sie', 'war', 'teuer'], t: 'Las gafas son nuevas. Fueron caras.', e: 'die → sie.' },
      { sol: ['Das', 'Buch', 'ist', 'gut.', 'Es', 'ist', 'sehr', 'spannend'], t: 'El libro es bueno. Es muy emocionante.', e: 'das → es.' },
      { sol: ['Der', 'Tisch', 'ist', 'neu.', 'Er', 'war', 'nicht', 'teuer'], t: 'La mesa es nueva. No fue cara.', e: 'der → er.' }
    ]
  },

  // ---------- A1.2 L14: pronombres en acusativo ----------
  'personalpronomen-im-akkusativ': {
    picks: [
      { s: 'Der Mantel? Ich nehme ___.', a: 'ihn', d: ['er', 'ihm'], t: '¿El abrigo? Me lo llevo.', e: 'der Mantel en acusativo → ihn.' },
      { s: 'Ich rufe ___ morgen an.', a: 'dich', d: ['du', 'dir'], t: 'Te llamo mañana.', e: 'anrufen + acusativo: dich.' },
      { s: 'Die Jacke? Ich finde ___ schön.', a: 'sie', d: ['ihr', 'ihn'], t: '¿La chaqueta? Me parece bonita.', e: 'die Jacke en acusativo → sie (no cambia).' },
      { s: 'Das Hemd? Ich kaufe ___.', a: 'es', d: ['ihn', 'ihm'], t: '¿La camisa? Me la compro.', e: 'das Hemd en acusativo → es.' },
      { s: 'Kennst du ___?', a: 'mich', d: ['ich', 'mir'], t: '¿Me conoces?', e: 'kennen + acusativo: mich.' },
      { s: 'Wir besuchen ___ am Sonntag.', a: 'euch', d: ['ihr', 'euer'], t: 'Os visitamos el domingo.', e: 'besuchen + acusativo de ihr → euch.' },
      { s: 'Die Schuhe? Ich nehme ___.', a: 'sie', d: ['ihnen', 'ihr'], t: '¿Los zapatos? Me los llevo.', e: 'Plural en acusativo → sie.' },
      { s: 'Herr Meier, ich rufe ___ später an.', a: 'Sie', d: ['Ihnen', 'ihn'], t: 'Señor Meier, le llamo más tarde.', e: 'Forma formal en acusativo: Sie (con mayúscula).' },
      { s: 'Er sieht ___ jeden Tag.', a: 'uns', d: ['wir', 'unser'], t: 'Nos ve todos los días.', e: 'Acusativo de wir → uns.' },
      { s: 'Den Pullover? Ich mag ___ nicht.', a: 'ihn', d: ['er', 'ihm'], t: '¿El jersey? No me gusta.', e: 'Masculino en acusativo → ihn.' },
      { s: 'Meine Schwester? Ich sehe ___ selten.', a: 'sie', d: ['ihr', 'ihn'], t: '¿Mi hermana? La veo poco.', e: 'Femenino en acusativo → sie.' },
      { s: 'Das Buch? Ich habe ___ schon gelesen.', a: 'es', d: ['ihn', 'ihm'], t: '¿El libro? Ya lo he leído.', e: 'Neutro en acusativo → es.' }
    ],
    orders: [
      { sol: ['Ich', 'rufe', 'dich', 'morgen', 'an'], t: 'Te llamo mañana.', e: 'dich en acusativo; anrufen separable.' },
      { sol: ['Den', 'Mantel', 'nehme', 'ich', 'nicht'], t: 'El abrigo no me lo llevo.', e: 'Complemento en acusativo al principio.' },
      { sol: ['Kennst', 'du', 'mich', 'noch?'], t: '¿Todavía me conoces?', e: 'mich en acusativo.' },
      { sol: ['Wir', 'besuchen', 'euch', 'am', 'Wochenende'], t: 'Os visitamos el fin de semana.', e: 'euch en acusativo.' }
    ]
  },

  // ---------- A1.2 L11: pronombres en dativo ----------
  'personalpronomen-im-dativ': {
    picks: [
      { s: 'Das gefällt ___ gut.', a: 'uns', d: ['wir', 'unser'], t: 'Eso nos gusta.', e: 'gefallen + dativo; dativo de wir → uns.' },
      { s: 'Ich danke ___.', a: 'Ihnen', d: ['Sie', 'Ihr'], t: 'Le doy las gracias.', e: 'danken + dativo; forma formal → Ihnen.' },
      { s: 'Das Zimmer gefällt ___ sehr.', a: 'mir', d: ['mich', 'ich'], t: 'La habitación me gusta mucho.', e: 'Dativo de ich → mir.' },
      { s: 'Kannst du ___ helfen?', a: 'mir', d: ['mich', 'ich'], t: '¿Me puedes ayudar?', e: 'helfen + dativo → mir.' },
      { s: 'Wie geht es ___?', a: 'dir', d: ['dich', 'du'], t: '¿Cómo estás?', e: '"Wie geht es" + dativo → dir.' },
      { s: 'Ich schenke ___ ein Buch.', a: 'ihm', d: ['ihn', 'er'], t: 'Le regalo un libro (a él).', e: 'Destinatario masculino en dativo → ihm.' },
      { s: 'Das Sofa gefällt ___ nicht.', a: 'ihr', d: ['sie', 'ihre'], t: 'A ella no le gusta el sofá.', e: 'Dativo de sie (ella) → ihr.' },
      { s: 'Er hilft ___ beim Umzug.', a: 'uns', d: ['wir', 'unser'], t: 'Nos ayuda con la mudanza.', e: 'helfen + dativo → uns.' },
      { s: 'Gefällt ___ die Wohnung?', a: 'euch', d: ['ihr', 'euer'], t: '¿Os gusta el piso?', e: 'Dativo de ihr → euch.' },
      { s: 'Ich zeige ___ die Fotos.', a: 'ihnen', d: ['sie', 'ihre'], t: 'Les enseño las fotos.', e: 'Dativo plural → ihnen.' },
      { s: 'Das Buch gehört ___.', a: 'mir', d: ['mich', 'meiner'], t: 'El libro es mío.', e: 'gehören + dativo → mir.' },
      { s: 'Kannst du ___ die Adresse geben?', a: 'mir', d: ['mich', 'ich'], t: '¿Me puedes dar la dirección?', e: 'geben: el destinatario va en dativo.' }
    ],
    orders: [
      { sol: ['Das', 'Zimmer', 'gefällt', 'mir', 'sehr', 'gut'], t: 'La habitación me gusta mucho.', e: 'gefallen + dativo (mir).' },
      { sol: ['Kannst', 'du', 'mir', 'bitte', 'helfen?'], t: '¿Me puedes ayudar, por favor?', e: 'helfen + mir.' },
      { sol: ['Ich', 'danke', 'Ihnen', 'für', 'die', 'Hilfe'], t: 'Le agradezco la ayuda.', e: 'danken + Ihnen (formal).' },
      { sol: ['Wie', 'geht', 'es', 'deinen', 'Eltern?'], t: '¿Cómo están tus padres?', e: 'La persona por la que se pregunta va en dativo.' }
    ]
  },

  // ---------- A1.2 L11: gefallen ----------
  gefallen: {
    picks: [
      { s: 'Gefällt ___ das Zimmer?', a: 'dir', d: ['dich', 'du'], t: '¿Te gusta la habitación?', e: 'Funciona como "gustar": la persona va en dativo.' },
      { s: 'Ja, es ___ mir sehr.', a: 'gefällt', d: ['gefallen', 'gefalle'], t: 'Sí, me gusta mucho.', e: 'El sujeto es "es" (la cosa) → gefällt.' },
      { s: 'Die Möbel ___ mir nicht.', a: 'gefallen', d: ['gefällt', 'gefalle'], t: 'Los muebles no me gustan.', e: 'El sujeto está en plural (die Möbel) → gefallen.' },
      { s: 'Wie ___ dir die Wohnung?', a: 'gefällt', d: ['gefallen', 'gefällst'], t: '¿Qué tal te parece el piso?', e: 'Una sola cosa → gefällt.' },
      { s: 'Das Bild gefällt ___ sehr gut.', a: 'mir', d: ['mich', 'ich'], t: 'El cuadro me gusta mucho.', e: 'Persona en dativo → mir.' },
      { s: 'Gefallen ___ die Farben?', a: 'euch', d: ['ihr', 'euer'], t: '¿Os gustan los colores?', e: 'Plural del verbo + euch en dativo.' },
      { s: 'Der Teppich ___ ihr nicht.', a: 'gefällt', d: ['gefallen', 'gefällst'], t: 'A ella no le gusta la alfombra.', e: 'Sujeto singular → gefällt.' },
      { s: 'Diese Lampe gefällt ___ besser.', a: 'uns', d: ['wir', 'unser'], t: 'Esta lámpara nos gusta más.', e: 'Dativo de wir → uns.' },
      { s: 'Die Stadt ___ mir sehr.', a: 'gefällt', d: ['gefallen', 'gefalle'], t: 'La ciudad me gusta mucho.', e: 'Una cosa → gefällt.' },
      { s: 'Gefällt ___ mein neues Sofa?', a: 'Ihnen', d: ['Sie', 'Ihr'], t: '¿Le gusta mi sofá nuevo?', e: 'Forma formal en dativo → Ihnen.' },
      { s: 'Die Bilder ___ meinen Eltern gut.', a: 'gefallen', d: ['gefällt', 'gefalle'], t: 'Los cuadros les gustan a mis padres.', e: 'Sujeto plural → gefallen.' },
      { s: 'Wie gefällt ___ die Musik?', a: 'dir', d: ['dich', 'du'], t: '¿Qué te parece la música?', e: 'Persona en dativo.' }
    ],
    orders: [
      { sol: ['Gefällt', 'dir', 'das', 'Zimmer?'], t: '¿Te gusta la habitación?', e: 'Verbo + persona en dativo + cosa (sujeto).' },
      { sol: ['Die', 'Möbel', 'gefallen', 'mir', 'nicht'], t: 'Los muebles no me gustan.', e: 'Sujeto plural → gefallen.' },
      { sol: ['Das', 'Bild', 'gefällt', 'uns', 'sehr', 'gut'], t: 'El cuadro nos gusta mucho.', e: 'Sujeto singular → gefällt.' },
      { sol: ['Wie', 'gefällt', 'Ihnen', 'die', 'Wohnung?'], t: '¿Qué le parece el piso?', e: 'Forma formal con Ihnen.' }
    ]
  },

  // ---------- A1.2 L11: verbos con dativo ----------
  'gefallen-gehoren-danken-helfen-dativ': {
    picks: [
      { s: 'Das Buch gehört ___ Schwester.', a: 'meiner', d: ['meine', 'meinen'], t: 'El libro es de mi hermana.', e: 'gehören + dativo; femenino → meiner.' },
      { s: 'Kannst du ___ helfen?', a: 'mir', d: ['mich', 'ich'], t: '¿Me puedes ayudar?', e: 'helfen siempre con dativo.' },
      { s: 'Ich danke ___ für alles.', a: 'dir', d: ['dich', 'du'], t: 'Te doy las gracias por todo.', e: 'danken + dativo.' },
      { s: 'Das Auto gehört ___ Bruder.', a: 'meinem', d: ['meinen', 'mein'], t: 'El coche es de mi hermano.', e: 'gehören + dativo masculino → meinem.' },
      { s: 'Wir helfen ___ Nachbarn.', a: 'dem', d: ['den', 'der'], t: 'Ayudamos al vecino.', e: 'helfen + dativo singular masculino → dem.' },
      { s: 'Die Wohnung gefällt ___ Eltern.', a: 'meinen', d: ['meine', 'meiner'], t: 'El piso les gusta a mis padres.', e: 'Dativo plural → meinen.' },
      { s: 'Er dankt ___ Lehrerin.', a: 'der', d: ['die', 'den'], t: 'Le da las gracias a la profesora.', e: 'danken + dativo femenino → der.' },
      { s: 'Wem gehört ___ Handy?', a: 'das', d: ['dem', 'den'], t: '¿De quién es este móvil?', e: 'El objeto poseído es el sujeto: das Handy en nominativo.' },
      { s: 'Ich helfe ___ gern.', a: 'euch', d: ['ihr', 'euer'], t: 'Os ayudo con gusto.', e: 'helfen + dativo de ihr → euch.' },
      { s: 'Der Schlüssel gehört ___.', a: 'mir', d: ['mich', 'meiner'], t: 'La llave es mía.', e: 'gehören + dativo → mir.' },
      { s: 'Wir danken ___ für die Einladung.', a: 'Ihnen', d: ['Sie', 'Ihr'], t: 'Le agradecemos la invitación.', e: 'Forma formal en dativo → Ihnen.' },
      { s: 'Meine Tochter hilft ___ im Haushalt.', a: 'mir', d: ['mich', 'meiner'], t: 'Mi hija me ayuda en casa.', e: 'helfen + mir.' }
    ],
    orders: [
      { sol: ['Das', 'Buch', 'gehört', 'meiner', 'Schwester'], t: 'El libro es de mi hermana.', e: 'gehören + dativo femenino.' },
      { sol: ['Kannst', 'du', 'mir', 'bitte', 'helfen?'], t: '¿Me puedes ayudar, por favor?', e: 'helfen + mir.' },
      { sol: ['Ich', 'danke', 'dir', 'für', 'deine', 'Hilfe'], t: 'Te agradezco tu ayuda.', e: 'danken + dir.' },
      { sol: ['Wir', 'helfen', 'unseren', 'Nachbarn', 'gern'], t: 'Ayudamos con gusto a nuestros vecinos.', e: 'Dativo plural: unseren Nachbarn.' }
    ]
  },

  // ---------- A1.2 L10: es gibt ----------
  'es-gibt-akkusativ': {
    picks: [
      { s: 'In der Stadt gibt es ___ Markt.', a: 'einen', d: ['ein', 'einem'], t: 'En la ciudad hay un mercado.', e: '"es gibt" siempre con acusativo; Markt es masculino → einen.' },
      { s: 'Gibt es hier ___ Apotheke?', a: 'eine', d: ['ein', 'einen'], t: '¿Hay una farmacia por aquí?', e: 'Apotheke es femenino → eine.' },
      { s: 'In meinem Viertel gibt es ___ Kino.', a: 'ein', d: ['einen', 'eine'], t: 'En mi barrio hay un cine.', e: 'Kino es neutro → ein.' },
      { s: 'Hier gibt ___ viele Cafés.', a: 'es', d: ['er', 'sie'], t: 'Aquí hay muchas cafeterías.', e: 'La fórmula es siempre "es gibt", sin importar el número.' },
      { s: 'Gibt es in der Nähe ___ Supermarkt?', a: 'einen', d: ['ein', 'einem'], t: '¿Hay un supermercado cerca?', e: 'Supermarkt es masculino en acusativo → einen.' },
      { s: 'In dieser Straße gibt es ___ Bank.', a: 'keine', d: ['kein', 'keinen'], t: 'En esta calle no hay ningún banco.', e: 'Bank es femenino → keine.' },
      { s: 'Es gibt hier ___ Parkplatz.', a: 'keinen', d: ['kein', 'keine'], t: 'Aquí no hay aparcamiento.', e: 'Parkplatz es masculino en acusativo → keinen.' },
      { s: 'Im Park gibt es ___ Spielplatz.', a: 'einen', d: ['ein', 'einem'], t: 'En el parque hay un parque infantil.', e: 'Spielplatz es masculino → einen.' },
      { s: 'Gibt es hier ___ Problem?', a: 'ein', d: ['einen', 'eine'], t: '¿Hay algún problema aquí?', e: 'Problem es neutro → ein.' },
      { s: 'In Wien gibt es ___ Straßenbahn.', a: 'eine', d: ['ein', 'einen'], t: 'En Viena hay tranvía.', e: 'Straßenbahn es femenino → eine.' },
      { s: 'Es gibt ___ Bus um sieben Uhr.', a: 'einen', d: ['ein', 'einem'], t: 'Hay un autobús a las siete.', e: 'Bus es masculino en acusativo → einen.' },
      { s: 'Leider gibt es ___ Zimmer mehr.', a: 'keine', d: ['kein', 'keinen'], t: 'Por desgracia ya no quedan habitaciones.', e: 'Plural → keine.' }
    ],
    orders: [
      { sol: ['In', 'der', 'Stadt', 'gibt', 'es', 'einen', 'Markt'], t: 'En la ciudad hay un mercado.', e: 'Complemento (1), gibt (2), es (3), acusativo.' },
      { sol: ['Gibt', 'es', 'hier', 'eine', 'Apotheke?'], t: '¿Hay una farmacia por aquí?', e: 'En la pregunta "Gibt" va el primero.' },
      { sol: ['In', 'meinem', 'Viertel', 'gibt', 'es', 'kein', 'Kino'], t: 'En mi barrio no hay cine.', e: 'Neutro en acusativo: kein Kino.' },
      { sol: ['Es', 'gibt', 'hier', 'viele', 'schöne', 'Cafés'], t: 'Aquí hay muchas cafeterías bonitas.', e: '"es gibt" también con plural.' }
    ]
  }
};
