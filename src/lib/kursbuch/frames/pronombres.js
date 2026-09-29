// TEMA: pronombres y verbos que cambian el caso.
// er/sie/es para sustantivos, los pronombres en acusativo y en dativo, los
// verbos que exigen dativo (gefallen, gehören, helfen, danken) y "es gibt".

export const PRONOMBRES = {
  // ---------- A1.1 L3: er / sie / es para cosas ----------
  'personalpronomen-singular-er-sie-es-fur-': {
    reserva: ['ihn', 'ihm', 'ihr'],
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
      { s: 'Das Mädchen ist klein. ___ heißt Lena.', a: 'Es', d: ['Er', 'Sie'], t: 'La niña es pequeña. Se llama Lena.', e: 'das Mädchen es neutro → es, aunque sea una persona.' },
      { s: 'Wo ist mein Handy? ___ war doch gerade noch hier.', a: 'Es', d: ['Er', 'Sie'], t: '¿Dónde está mi móvil? Si estaba aquí hace nada.', e: 'das Handy → es.' },
      { s: 'Die Suppe ist kalt. Kannst du ___ warm machen?', a: 'sie', d: ['ihn', 'es'], t: 'La sopa está fría. ¿La puedes calentar?', e: 'die Suppe en acusativo: sie.' },
      { s: 'Der Kuchen war super. Hast du ___ selbst gebacken?', a: 'ihn', d: ['sie', 'es'], t: 'La tarta estaba buenísima. ¿La has hecho tú?', e: 'der Kuchen en acusativo: ihn.' },
      { s: 'Das Fahrrad steht unten. ___ hat einen Platten.', a: 'Es', d: ['Er', 'Sie'], t: 'La bici está abajo. Tiene una rueda pinchada.', e: 'das Fahrrad → es.' },
      { s: 'Die Wohnung ist frei, aber ___ ist ziemlich teuer.', a: 'sie', d: ['er', 'es'], t: 'El piso está libre, pero es bastante caro.', e: 'die Wohnung → sie.' },
      { s: 'Mein Mantel ist weg. Hast du ___ irgendwo gesehen?', a: 'ihn', d: ['sie', 'es'], t: 'Mi abrigo ha desaparecido. ¿Lo has visto por algún lado?', e: 'der Mantel en acusativo: ihn.' },
      { s: 'Der Schlüssel liegt da. Nimm ___ bitte mit.', a: 'ihn', d: ['sie', 'es'], t: 'La llave está ahí. Llévatela, por favor.', e: 'der Schlüssel en acusativo: ihn.' },
      { s: 'Das Paket ist gekommen. ___ steht im Flur.', a: 'Es', d: ['Er', 'Sie'], t: 'Ha llegado el paquete. Está en la entrada.', e: 'das Paket → es.' }
    ],
    orders: [
      { sol: ['Wo', 'ist', 'der', 'Schlüssel?', 'Er', 'ist', 'hier'], t: '¿Dónde está la llave? Está aquí.', e: 'der → er.' },
      { sol: ['Die', 'Brille', 'ist', 'neu.', 'Sie', 'war', 'teuer'], t: 'Las gafas son nuevas. Fueron caras.', e: 'die → sie.' },
      { sol: ['Das', 'Buch', 'ist', 'gut.', 'Es', 'ist', 'sehr', 'spannend'], t: 'El libro es bueno. Es muy emocionante.', e: 'das → es.' },
      { sol: ['Der', 'Tisch', 'ist', 'neu.', 'Er', 'war', 'nicht', 'teuer'], t: 'La mesa es nueva. No fue cara.', e: 'der → er.' }
    ],
    clozes: [
      { txt: 'Wo ist der Schlüssel? – ___ ist in der Tasche. Und die Brille? – ___ liegt auf dem Tisch. Und das Handy? – ___ ist kaputt.', a: ['Er', 'Sie', 'Es'], extra: ['Ihr', 'Wir', 'Ihnen'], t: '¿Dónde está la llave? – Está en el bolso. ¿Y las gafas? – Están en la mesa. ¿Y el móvil? – Está roto.', e: 'El pronombre repite el género de la cosa, no de la persona: der → er, die → sie, das → es.' }
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
      { s: 'Das Buch? Ich habe ___ schon gelesen.', a: 'es', d: ['ihn', 'ihm'], t: '¿El libro? Ya lo he leído.', e: 'Neutro en acusativo → es.' },
      { s: 'Den Mantel nehme ich, ___ finde ich schön.', a: 'ihn', d: ['er', 'ihm'], t: 'El abrigo me lo llevo, me parece bonito.', e: 'der Mantel en acusativo → ihn.' },
      { s: 'Die Hose ist toll, willst du ___ anprobieren?', a: 'sie', d: ['ihr', 'ihnen'], t: 'El pantalón es estupendo, ¿te lo quieres probar?', e: 'die Hose en acusativo → sie.' },
      { s: 'Das Hemd passt nicht, ich möchte ___ umtauschen.', a: 'es', d: ['ihm', 'er'], t: 'La camisa no me queda, quiero cambiarla.', e: 'das Hemd en acusativo → es.' },
      { s: 'Rufen Sie ___ bitte morgen Vormittag an.', a: 'mich', d: ['mir', 'ich'], t: 'Llámeme mañana por la mañana, por favor.', e: 'anrufen pide acusativo: mich.' }
    ],
    orders: [
      { sol: ['Ich', 'rufe', 'dich', 'morgen', 'an'], t: 'Te llamo mañana.', e: 'dich en acusativo; anrufen separable.' },
      { sol: ['Den', 'Mantel', 'nehme', 'ich', 'nicht'], t: 'El abrigo no me lo llevo.', e: 'Complemento en acusativo al principio.' },
      { sol: ['Kennst', 'du', 'mich', 'noch?'], t: '¿Todavía me conoces?', e: 'mich en acusativo.' },
      { sol: ['Wir', 'besuchen', 'euch', 'am', 'Wochenende'], t: 'Os visitamos el fin de semana.', e: 'euch en acusativo.' }
    ],
    clozes: [
      { txt: 'Die Jacke ist schön – ich nehme ___. Den Pullover finde ich zu eng, ich probiere ___ nicht an. Und die Schuhe? ___ nehme ich auch mit.', a: ['sie', 'ihn', 'Die'], extra: ['es', 'ihm', 'Den'], t: 'La chaqueta es bonita, me la llevo. El jersey me parece estrecho, no me lo pruebo. ¿Y los zapatos? Esos también me los llevo.', e: 'El pronombre repite el género de la prenda: die Jacke → sie, der Pullover en acusativo → ihn.' }
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
      { s: 'Kannst du ___ die Adresse geben?', a: 'mir', d: ['mich', 'ich'], t: '¿Me puedes dar la dirección?', e: 'geben: el destinatario va en dativo.' },
      { s: 'Die Wohnung gefällt ___ sehr gut.', a: 'uns', d: ['wir', 'unser'], t: 'El piso nos gusta mucho.', e: 'gefallen rige dativo: uns.' },
      { s: 'Kannst du ___ mit dem Schrank helfen?', a: 'mir', d: ['mich', 'ich'], t: '¿Me ayudas con el armario?', e: 'helfen rige dativo: mir.' },
      { s: 'Ich schenke ___ die alte Lampe.', a: 'euch', d: ['ihr', 'euer'], t: 'Os regalo la lámpara vieja.', e: 'El destinatario en dativo plural informal: euch.' },
      { s: 'Das Sofa gehört ___ nicht.', a: 'ihm', d: ['ihn', 'er'], t: 'El sofá no es suyo.', e: 'gehören rige dativo: ihm.' },
      { s: 'Kannst du ___ das bitte erklären?', a: 'mir', d: ['mich', 'ich'], t: '¿Me lo puedes explicar, por favor?', e: 'erklären lleva la persona en dativo: mir.' },
      { s: 'Ich schicke ___ gleich die Adresse.', a: 'dir', d: ['dich', 'du'], t: 'Te mando ahora la dirección.', e: 'schicken + dativo: dir.' },
      { s: 'Gefällt ___ die neue Wohnung?', a: 'euch', d: ['ihr', 'ihnen'], t: '¿Os gusta el piso nuevo?', e: 'El dativo de ihr es euch.' },
      { s: 'Wir zeigen ___ morgen die Wohnung.', a: 'ihnen', d: ['sie', 'ihr'], t: 'Mañana les enseñamos el piso.', e: 'Dativo plural: ihnen.' },
      { s: 'Das gehört ___ gar nicht.', a: 'uns', d: ['wir', 'unser'], t: 'Eso no es nuestro en absoluto.', e: 'El dativo de wir es uns.' }
    ],
    orders: [
      { sol: ['Das', 'Zimmer', 'gefällt', 'mir', 'sehr', 'gut'], t: 'La habitación me gusta mucho.', e: 'gefallen + dativo (mir).' },
      { sol: ['Kannst', 'du', 'mir', 'bitte', 'helfen?'], t: '¿Me puedes ayudar, por favor?', e: 'helfen + mir.' },
      { sol: ['Ich', 'danke', 'Ihnen', 'für', 'die', 'Hilfe'], t: 'Le agradezco la ayuda.', e: 'danken + Ihnen (formal).' },
      { sol: ['Wie', 'geht', 'es', 'deinen', 'Eltern?'], t: '¿Cómo están tus padres?', e: 'La persona por la que se pregunta va en dativo.' }
    ],
    clozes: [
      { txt: 'Kannst du ___ helfen? – Klar, ich helfe ___ gern. Und der Lampe? Die gefällt ___ nicht, sagt Anna. Wir schenken sie ___ Nachbarn.', a: ['mir', 'dir', 'ihr', 'den'], extra: ['mich', 'dich', 'sie', 'die'], t: '¿Me ayudas? – Claro, te ayudo encantado. ¿Y la lámpara? A Anna no le gusta. Se la regalamos a los vecinos.', e: 'Con helfen y gefallen la persona va en dativo: mir, dir, ihr. El plural lleva -n: den Nachbarn.' }
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
      { s: 'Wie gefällt ___ die Musik?', a: 'dir', d: ['dich', 'du'], t: '¿Qué te parece la música?', e: 'Persona en dativo.' },
      { s: 'Die Wohnung ___ mir sehr gut.', a: 'gefällt', d: ['gefalle', 'gefallen'], t: 'El piso me gusta mucho.', e: 'El sujeto es la cosa que gusta: die Wohnung → gefällt.' },
      { s: 'Die neuen Möbel ___ uns nicht.', a: 'gefallen', d: ['gefällt', 'gefalle'], t: 'Los muebles nuevos no nos gustan.', e: 'Sujeto en plural → gefallen.' },
      { s: '___ dir das Zimmer?', a: 'Gefällt', d: ['Gefallen', 'Gefalle'], t: '¿Te gusta la habitación?', e: 'das Zimmer es el sujeto → gefällt.' },
      { s: 'Der Balkon ___ meiner Frau am besten.', a: 'gefällt', d: ['gefallen', 'gefalle'], t: 'A mi mujer lo que más le gusta es el balcón.', e: 'Un solo sujeto → gefällt, y la persona en dativo.' },
      { s: 'Wie ___ Ihnen die Küche?', a: 'gefällt', d: ['gefallen', 'gefällst'], t: '¿Qué le parece la cocina?', e: 'die Küche → gefällt; Ihnen es el dativo de cortesía.' },
      { s: 'Die Farben ___ mir überhaupt nicht.', a: 'gefallen', d: ['gefällt', 'gefalle'], t: 'Los colores no me gustan nada.', e: 'Plural → gefallen.' },
      { s: 'Das Haus ___ allen sehr gut.', a: 'gefällt', d: ['gefallen', 'gefällst'], t: 'La casa les gusta mucho a todos.', e: 'das Haus es el sujeto, allen va en dativo.' },
      { s: '___ euch die Aussicht?', a: 'Gefällt', d: ['Gefallen', 'Gefällst'], t: '¿Os gusta la vista?', e: 'die Aussicht → gefällt.' },
      { s: 'Die Küche ___ mir besonders gut.', a: 'gefällt', d: ['gefalle', 'gefallen'], t: 'La cocina me gusta especialmente.', e: 'El sujeto es la cocina, en singular: gefällt.' },
      { s: '___ dir die Farbe im Flur?', a: 'Gefällt', d: ['Gefallen', 'Gefällst'], t: '¿Te gusta el color del pasillo?', e: 'die Farbe en singular → gefällt.' },
      { s: 'Die Vorhänge ___ uns überhaupt nicht.', a: 'gefallen', d: ['gefällt', 'gefalle'], t: 'Las cortinas no nos gustan nada.', e: 'Sujeto en plural → gefallen.' },
      { s: '___ Ihnen das Zimmer nach hinten?', a: 'Gefällt', d: ['Gefallen', 'Gefällst'], t: '¿Le gusta la habitación de atrás?', e: 'das Zimmer, singular → gefällt.' },
      { s: 'Mir ___ die Aussicht am besten.', a: 'gefällt', d: ['gefallen', 'gefalle'], t: 'Lo que más me gustan son las vistas.', e: 'die Aussicht, singular → gefällt.' },
      { s: 'Und, wie gefällt ___ die neue Wohnung?', a: 'dir', d: ['du', 'dich'], t: 'Y qué, ¿te gusta el piso nuevo?', e: 'gefallen pide dativo: dir.' },
      { s: 'Wien gefällt ___ von Tag zu Tag besser.', a: 'uns', d: ['wir', 'unser'], t: 'Viena nos gusta más de día en día.', e: 'Dativo: uns.' },
      { s: 'Gefallen ___ die Schuhe, Frau Berger?', a: 'Ihnen', d: ['Sie', 'Ihr'], t: '¿Le gustan los zapatos, señora Berger?', e: 'Usted en dativo: Ihnen.' },
      { s: 'Der Film hat ___ überhaupt nicht gefallen.', a: 'mir', d: ['mich', 'ich'], t: 'La película no me gustó nada de nada.', e: 'gefallen siempre con dativo: mir.' },
      { s: 'Das Bild gefällt ___ Kindern am besten.', a: 'den', d: ['die', 'der'], t: 'El cuadro que más les gusta a los niños es ese.', e: 'Dativo plural: den Kindern.' },
      { s: 'Gefällt ___ das Hotel am Meer?', a: 'euch', d: ['ihr', 'eure'], t: '¿Os gusta el hotel junto al mar?', e: 'vosotros en dativo: euch.' },
      { s: 'Die Idee ___ der Chefin überraschend gut.', a: 'gefällt', d: ['gefallen', 'gefällst'], t: 'A la jefa la idea le gusta sorprendentemente.', e: 'El sujeto es die Idee, singular: gefällt.' },
      { s: 'Mir ___ die neuen Kollegen alle sehr gut.', a: 'gefallen', d: ['gefällt', 'gefalle'], t: 'Los compañeros nuevos me caen todos muy bien.', e: 'El sujeto es plural, die Kollegen: gefallen.' }
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
      { s: 'Meine Tochter hilft ___ im Haushalt.', a: 'mir', d: ['mich', 'meiner'], t: 'Mi hija me ayuda en casa.', e: 'helfen + mir.' },
      { s: 'Das Buch dort gehört ___.', a: 'mir', d: ['mich', 'ich'], t: 'Ese libro de ahí es mío.', e: 'gehören pide dativo: mir.' },
      { s: 'Kannst du ___ kurz helfen?', a: 'mir', d: ['mich', 'ich'], t: '¿Me puedes ayudar un momento?', e: 'helfen pide dativo.' },
      { s: 'Ich danke ___ für deine Hilfe.', a: 'dir', d: ['dich', 'du'], t: 'Te doy las gracias por tu ayuda.', e: 'danken pide dativo: dir.' },
      { s: 'Der Schlüssel gehört ___ Nachbarin.', a: 'der', d: ['die', 'den'], t: 'La llave es de la vecina.', e: 'gehören + dativo: die Nachbarin → der.' },
      { s: 'Wir helfen ___ gern beim Umzug.', a: 'ihnen', d: ['sie', 'ihr'], t: 'Les ayudamos con gusto con la mudanza.', e: 'helfen + dativo plural: ihnen.' }
    ],
    orders: [
      { sol: ['Das', 'Buch', 'gehört', 'meiner', 'Schwester'], t: 'El libro es de mi hermana.', e: 'gehören + dativo femenino.' },
      { sol: ['Kannst', 'du', 'mir', 'bitte', 'helfen?'], t: '¿Me puedes ayudar, por favor?', e: 'helfen + mir.' },
      { sol: ['Ich', 'danke', 'dir', 'für', 'deine', 'Hilfe'], t: 'Te agradezco tu ayuda.', e: 'danken + dir.' },
      { sol: ['Wir', 'helfen', 'unseren', 'Nachbarn', 'gern'], t: 'Ayudamos con gusto a nuestros vecinos.', e: 'Dativo plural: unseren Nachbarn.' }
    ],
    clozes: [
      { txt: 'Die Wohnung gefällt ___ sehr gut. Das Sofa gehört ___ Vermieterin, aber der Tisch gehört ___. Ich danke ___ Nachbarn für die Hilfe beim Umzug.', a: ['mir', 'der', 'uns', 'den'], extra: ['mich', 'die', 'wir', 'die'], t: 'El piso me gusta mucho. El sofá es de la casera, pero la mesa es nuestra. Les doy las gracias a los vecinos por la ayuda con la mudanza.', e: 'Los cuatro verbos rigen dativo: gefallen, gehören y danken. Fíjate en el plural con -n: den Nachbarn.' },
      { txt: 'Die neue Wohnung gefällt ___ sehr. Der Schrank gehört ___ Vermieterin, aber das Sofa gehört ___. Wir danken ___ Nachbarn, sie haben ___ beim Umzug geholfen.', a: ['uns', 'der', 'uns', 'den', 'uns'], extra: ['wir', 'die', 'unser', 'die'], t: 'El piso nuevo nos gusta mucho. El armario es de la casera, pero el sofá es nuestro. Damos las gracias a los vecinos, nos ayudaron con la mudanza.', e: 'Los cuatro verbos rigen dativo, y el plural lleva -n: den Nachbarn.' }
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
      { s: 'Leider gibt es ___ Zimmer mehr.', a: 'keine', d: ['kein', 'keinen'], t: 'Por desgracia ya no quedan habitaciones.', e: 'Plural → keine.' },
      { s: 'In meinem Viertel ___ einen Markt.', a: 'gibt es', d: ['es gibt', 'gibt'], t: 'En mi barrio hay un mercado.', e: 'Con el complemento delante: gibt es.' },
      { s: 'Hier gibt es ___ Apotheke.', a: 'eine', d: ['ein', 'einen'], t: 'Aquí hay una farmacia.', e: '"es gibt" siempre lleva acusativo; femenino → eine.' },
      { s: 'In der Nähe gibt es ___ Supermarkt.', a: 'einen', d: ['ein', 'eine'], t: 'Cerca hay un supermercado.', e: 'Masculino en acusativo → einen.' },
      { s: 'Gibt es hier ___ Museum?', a: 'ein', d: ['einen', 'eine'], t: '¿Hay aquí un museo?', e: 'Neutro en acusativo → ein.' },
      { s: 'In diesem Dorf gibt es ___ Bahnhof.', a: 'keinen', d: ['kein', 'keine'], t: 'En este pueblo no hay estación.', e: 'La negación también en acusativo: keinen.' },
      { s: 'Im Park gibt es ___ Spielplatz für die Kinder.', a: 'einen', d: ['ein', 'eine'], t: 'En el parque hay un parque infantil para los niños.', e: 'der Spielplatz → einen.' },
      { s: 'Gibt es hier ___ Bank?', a: 'eine', d: ['einen', 'ein'], t: '¿Hay aquí un banco?', e: 'die Bank → eine.' },
      { s: 'In der Stadt gibt es ___ gute Restaurants.', a: 'viele', d: ['viel', 'vielen'], t: 'En la ciudad hay muchos restaurantes buenos.', e: 'Plural en acusativo → viele.' },
      { s: 'In meinem Viertel gibt es ___ Markt.', a: 'einen', d: ['ein', 'eine'], t: 'En mi barrio hay un mercado.', e: 'es gibt pide acusativo: der Markt → einen.' },
      { s: 'Hier gibt es zum Glück ___ Apotheke.', a: 'eine', d: ['einen', 'ein'], t: 'Por suerte aquí hay una farmacia.', e: 'die Apotheke → eine.' },
      { s: 'Gibt es hier in der Nähe ___ Kino?', a: 'ein', d: ['einen', 'eine'], t: '¿Hay un cine cerca de aquí?', e: 'das Kino → ein.' },
      { s: 'Im Dorf gibt es ___ Bahnhof.', a: 'keinen', d: ['kein', 'keine'], t: 'En el pueblo no hay estación.', e: 'En negativo también acusativo: keinen Bahnhof.' },
      { s: 'Gibt es hier irgendwo ___ Automaten?', a: 'einen', d: ['ein', 'eine'], t: '¿Hay por aquí alguna máquina?', e: 'der Automat en acusativo → einen.' }
    ],
    orders: [
      { sol: ['In', 'der', 'Stadt', 'gibt', 'es', 'einen', 'Markt'], alt: [['Es', 'gibt', 'in', 'der', 'Stadt', 'einen', 'Markt']], t: 'En la ciudad hay un mercado.', e: 'Complemento (1), gibt (2), es (3), acusativo.' },
      { sol: ['Gibt', 'es', 'hier', 'eine', 'Apotheke?'], t: '¿Hay una farmacia por aquí?', e: 'En la pregunta "Gibt" va el primero.' },
      { sol: ['In', 'meinem', 'Viertel', 'gibt', 'es', 'kein', 'Kino'], alt: [['Es', 'gibt', 'in', 'meinem', 'Viertel', 'kein', 'Kino']], t: 'En mi barrio no hay cine.', e: 'Neutro en acusativo: kein Kino.' },
      { sol: ['Es', 'gibt', 'hier', 'viele', 'schöne', 'Cafés'], t: 'Aquí hay muchas cafeterías bonitas.', e: '"es gibt" también con plural.' }
    ],
    clozes: [
      { txt: 'In meinem Viertel ___ ___ Markt, ___ Apotheke und ___ Kino. Aber ___ ___ Bahnhof.', a: ['gibt', 'es einen', 'eine', 'ein', 'es gibt', 'keinen'], extra: ['es gibt', 'einem', 'einer'], t: 'En mi barrio hay un mercado, una farmacia y un cine. Pero no hay estación.', e: '"es gibt" siempre lleva acusativo, también en negativo: keinen Bahnhof.' }
    ]
  },
  'es-als-subjekt-wetter': {
    picks: [
      { s: 'Heute regnet ___ den ganzen Tag.', a: 'es', d: ['er', 'das'], t: 'Hoy llueve todo el día.', e: 'El tiempo lleva siempre es como sujeto.' },
      { s: 'Im Jänner ___ es hier eiskalt.', a: 'ist', d: ['hat', 'sind'], t: 'En enero aquí hace un frío helador.', e: 'es ist + adjetivo.' },
      { s: '___ schneit seit gestern.', a: 'Es', d: ['Er', 'Das'], t: 'Nieva desde ayer.', e: 'schneien pide es, no otro sujeto.' },
      { s: 'Draußen ___ es sehr windig.', a: 'ist', d: ['hat', 'macht'], t: 'Fuera hace mucho viento.', e: 'es ist windig, no «es macht Wind».' },
      { s: 'Am Abend wird ___ kühl.', a: 'es', d: ['er', 'das'], t: 'Por la tarde refresca.', e: 'También con werden hace falta es.' },
      { s: '___ gibt heute ein Gewitter.', a: 'Es', d: ['Da', 'Man'], t: 'Hoy hay tormenta.', e: 'es gibt es fijo: siempre con es.' },
      { s: 'Wie kalt ___ es heute?', a: 'ist', d: ['hat', 'macht'], t: '¿Qué frío hace hoy?', e: 'En la pregunta el es se queda.' },
      { s: 'Im Dezember wird ___ früh dunkel.', a: 'es', d: ['er', 'das'], t: 'En diciembre oscurece pronto.', e: 'Sin es la frase no se sostiene.' },
      { s: 'Gestern ___ es den ganzen Tag geregnet.', a: 'hat', d: ['ist', 'war'], t: 'Ayer estuvo lloviendo todo el día.', e: 'regnen forma el Perfekt con haben.' },
      { s: '___ ist heute achtzehn Grad.', a: 'Es', d: ['Er', 'Das'], t: 'Hoy hace dieciocho grados.', e: 'La temperatura también va con es.' },
      { s: 'Warum braucht „Es regnet“ ein „es“?', a: 'porque el verbo alemán exige sujeto', d: ['porque es más educado', 'porque es plural'], t: 'Porque en alemán el verbo siempre necesita sujeto.', e: 'En español basta con «llueve».' },
      { s: 'Was bedeutet das „es“ hier?', a: 'nada, es un relleno obligatorio', d: ['ello', 'el tiempo'], t: 'No significa nada: es un relleno obligatorio.', e: 'No se puede quitar.' },
      { s: 'Darf man „Regnet heute“ sagen?', a: 'no, falta el sujeto', d: ['sí, en lenguaje coloquial', 'sí, en preguntas'], t: 'No: falta el sujeto.', e: 'Regnet es heute?' },
      { s: 'Wo steht „es“ in „Heute regnet es“?', a: 'detrás del verbo', d: ['delante del verbo', 'al final'], t: 'Va detrás del verbo.', e: 'Porque «heute» ocupa la posición uno.' },
      { s: 'Welche Verben brauchen dieses „es“ noch?', a: 'los del tiempo y la hora', d: ['todos', 'los modales'], t: 'Los del tiempo y los de la hora.', e: 'Es regnet, es ist drei Uhr.' },
      { s: '___ hat gestern gehagelt.', a: 'Es', d: ['Das', 'Er'], t: 'Ayer granizó.', e: 'Sujeto de relleno.' },
      { s: 'Wie warm ___ es morgen?', a: 'wird', d: ['werden', 'wirst'], t: '¿Qué temperatura hará mañana?', e: 'es → wird.' },
      { s: 'Im Winter ___ es hier oft neblig.', a: 'ist', d: ['sind', 'hat'], t: 'En invierno aquí hay niebla a menudo.', e: 'es → ist.' },
      { s: 'Welcher Satz ist falsch?', a: 'Heute regnet.', d: ['Heute regnet es.', 'Es regnet heute.'], t: 'El incorrecto es «Heute regnet.».', e: 'Sin sujeto no vale.' },
      { s: '___ gibt morgen Schnee.', a: 'Es', d: ['Da', 'Man'], t: 'Mañana va a nevar.', e: '«es gibt», siempre con es.' }
    ]
  },
  'dativ-und-akkusativ-zusammen': {
    picks: [
      { s: 'Ich gebe ___ Beamten das Formular.', a: 'dem', d: ['den', 'der'], t: 'Le doy el formulario al funcionario.', e: 'A quién: dativo, y va primero.' },
      { s: 'Ich gebe es ___ morgen.', a: 'ihm', d: ['ihn', 'er'], t: 'Se lo doy mañana.', e: 'Con el qué en pronombre, el dativo va detrás.' },
      { s: 'Sie zeigt ___ Kollegin die Unterlagen.', a: 'der', d: ['die', 'den'], t: 'Le enseña la documentación a la compañera.', e: 'Dativo femenino: der Kollegin.' },
      { s: 'Er bringt ___ den Stempel.', a: 'mir', d: ['mich', 'ich'], t: 'Me trae el sello.', e: 'A quién: mir.' },
      { s: 'Kannst du ___ die Kopie schicken?', a: 'uns', d: ['wir', 'unser'], t: '¿Nos puedes enviar la copia?', e: 'Dativo plural: uns.' },
      { s: 'Ich schicke ___ Ihnen per Mail.', a: 'es', d: ['ihn', 'sie'], t: 'Se lo envío por correo.', e: 'El pronombre del qué va delante del dativo.' },
      { s: 'Der Beamte erklärt ___ Antragstellern alles.', a: 'den', d: ['die', 'der'], t: 'El funcionario se lo explica todo a los solicitantes.', e: 'Dativo plural: den + -n.' },
      { s: 'Geben Sie ___ bitte Ihren Ausweis.', a: 'mir', d: ['mich', 'ich'], t: 'Deme su documento, por favor.', e: 'mir es el dativo de ich.' },
      { s: 'Ich habe ___ die Bestätigung schon gegeben.', a: 'ihr', d: ['sie', 'ihre'], t: 'Ya le he dado la confirmación.', e: 'Dativo femenino del pronombre: ihr.' },
      { s: 'Er hat ___ dem Chef weitergeleitet.', a: 'es', d: ['ihn', 'ihm'], t: 'Se lo ha reenviado al jefe.', e: 'Pronombre del qué delante del dativo con nombre.' },
      { s: 'Welche Reihenfolge haben die zwei Objekte?', a: 'primero el dativo, luego el acusativo', d: ['primero el acusativo', 'da igual'], t: 'Primero el dativo y después el acusativo.', e: 'Ich gebe dem Kind das Buch.' },
      { s: 'Und si los dos son pronombres?', a: 'al revés: acusativo primero', d: ['igual que antes', 'da igual'], t: 'Al revés: el acusativo va delante.', e: 'Ich gebe es ihm.' },
      { s: 'Warum cambia el orden con pronombres?', a: 'porque lo corto va delante', d: ['por costumbre', 'por el verbo'], t: 'Porque lo más corto va delante.', e: 'Es la regla de fondo en alemán.' },
      { s: 'Welches Objekt ist normalmente una persona?', a: 'el dativo', d: ['el acusativo', 'los dos'], t: 'Normalmente la persona es el dativo.', e: 'A quién se lo das.' },
      { s: 'Und la cosa?', a: 'el acusativo', d: ['el dativo', 'ninguno'], t: 'La cosa es el acusativo.', e: 'Qué le das.' },
      { s: 'Welche Verben llevan los dos?', a: 'geben, zeigen, schicken, bringen', d: ['gehen, kommen, fahren', 'sein, haben'], t: 'Los llevan «geben», «zeigen», «schicken», «bringen».', e: 'Todos son de dar o pasar algo a alguien.' },
      { s: 'Ich schicke ___ die Rechnung morgen.', a: 'dir', d: ['dich', 'du'], t: 'Te mando la factura mañana.', e: 'La persona → dativo.' },
      { s: 'Zeig ___ bitte den Ausweis.', a: 'mir', d: ['mich', 'ich'], t: 'Enséñame el carné, por favor.', e: 'mir, no mich.' },
      { s: 'Ich habe ___ ihr schon geschickt.', a: 'es', d: ['ihn', 'sie'], t: 'Ya se lo he mandado.', e: 'Dos pronombres → acusativo primero.' },
      { s: 'Welcher Satz ist richtig?', a: 'Ich gebe ihm das Buch.', d: ['Ich gebe das Buch ihm.', 'Ich gebe ihn das Buch.'], t: 'Lo correcto es «Ich gebe ihm das Buch.».', e: 'Pronombre dativo delante del nombre.' }
    ]
  },
  'wo-fragen-worueber-darueber': {
    picks: [
      { s: '___ freust du dich?', a: 'Worüber', d: ['Über was', 'Über wer'], t: '¿De qué te alegras?', e: 'Por una cosa: wo(r)- + preposición.' },
      { s: 'Ich denke oft ___.', a: 'daran', d: ['an das', 'an es'], t: 'Pienso en ello a menudo.', e: 'Respuesta con da(r)- + preposición.' },
      { s: '___ hast du Angst?', a: 'Wovor', d: ['Vor was', 'Vor wem'], t: '¿De qué tienes miedo?', e: 'vor + wo- lleva una v: wovor.' },
      { s: 'Über wen habt ihr gesprochen? – ___ meinen Chef.', a: 'Über', d: ['Worüber', 'Darüber'], t: '¿De quién habéis hablado? – De mi jefe.', e: 'Con PERSONAS se usa la preposición normal.' },
      { s: '___ wartest du?', a: 'Worauf', d: ['Auf was', 'Auf wen'], t: '¿Qué estás esperando?', e: 'auf + wo- da worauf.' },
      { s: 'Die Prüfung? Ich denke die ganze Zeit ___.', a: 'daran', d: ['an sie', 'daran an'], t: '¿El examen? Pienso en él todo el rato.', e: 'Cosa: daran.' },
      { s: '___ interessierst du dich?', a: 'Wofür', d: ['Für was', 'Für wen'], t: '¿Qué te interesa?', e: 'für + wo- da wofür.' },
      { s: 'Er hat sich sehr ___ gefreut.', a: 'darüber', d: ['über es', 'über das'], t: 'Se alegró mucho de ello.', e: 'über + da- da darüber.' },
      { s: 'Auf wen wartest du? – ___ meine Schwester.', a: 'Auf', d: ['Worauf', 'Darauf'], t: '¿A quién esperas? – A mi hermana.', e: 'Persona: preposición normal.' },
      { s: 'Die r in wo-r-über ist da, ___.', a: 'weil über mit Vokal anfängt', d: ['ohne Grund', 'immer'], t: 'La r de «worüber» está porque «über» empieza por vocal.', e: 'wovor no la lleva: vor empieza por consonante.' },
      { s: '___ hast du geträumt?', a: 'Wovon', d: ['Von was', 'Wovon über'], t: '¿Con qué has soñado?', e: 'träumen von pasa a wovon para cosas.' },
      { s: 'Er hat mir davon erzählt. ___ genau?', a: 'Wovon', d: ['Von wem', 'Worüber'], t: 'Me habló de ello. ¿De qué exactamente?', e: 'wovon pregunta por una cosa.' },
      { s: 'Mit wem fährst du? – ___ meinem Bruder.', a: 'Mit', d: ['Damit', 'Womit'], t: '¿Con quién vas? – Con mi hermano.', e: 'Para personas se usa la preposición normal.' },
      { s: 'Womit schreibst du? – ___ einem Kuli.', a: 'Mit', d: ['Damit', 'Womit'], t: '¿Con qué escribes? – Con un boli.', e: 'womit pregunta por cosas; la respuesta lleva mit.' },
      { s: 'Das Wetter? Ich ärgere mich jeden Tag ___.', a: 'darüber', d: ['über es', 'davon'], t: '¿El tiempo? Me enfado con ello cada día.', e: 'Para cosas se usa da(r)- más preposición.' },
      { s: '___ sprecht ihr gerade?', a: 'Worüber', d: ['Über was', 'Wovon über'], t: '¿De qué estáis hablando?', e: 'sprechen über pasa a worüber.' },
      { s: 'Bei Personen fragt man mit ___.', a: 'Präposition plus wem', d: ['wo-', 'da-'], t: 'Con personas se pregunta con preposición más «wem».', e: 'Mit wem? Von wem? Auf wen?' },
      { s: 'Die Prüfung? Ich habe Angst ___.', a: 'davor', d: ['vor es', 'worvor'], t: '¿El examen? Me da miedo.', e: 'Angst vor pasa a davor para cosas.' },
      { s: 'Das r kommt dazu, wenn die Präposition ___ anfängt.', a: 'mit einem Vokal', d: ['mit einem Konsonanten', 'mit s'], t: 'La r se añade cuando la preposición empieza por vocal.', e: 'worüber, worauf, darüber, daran.' },
      { s: '___ wartest du denn so lange?', a: 'Worauf', d: ['Auf was', 'Woraufhin'], t: '¿Qué estás esperando tanto rato?', e: 'warten auf pasa a worauf.' }
    ]
  },
  'man-unpersoenlich-essen': {
    picks: [
      { s: 'Wie macht ___ diese Suppe?', a: 'man', d: ['er', 'sie'], t: '¿Cómo se hace esta sopa?', e: 'man para hablar en general.' },
      { s: 'In Spanien ___ man später als hier.', a: 'isst', d: ['essen', 'esst'], t: 'En España se come más tarde que aquí.', e: 'man va con la 3ª persona del singular.' },
      { s: 'Hier ___ man nur mit Karte zahlen.', a: 'kann', d: ['können', 'kannst'], t: 'Aquí solo se puede pagar con tarjeta.', e: 'man + modal en singular.' },
      { s: 'Was ___ man zu einer Einladung mit?', a: 'bringt', d: ['bringen', 'bringst'], t: '¿Qué se lleva a una invitación?', e: 'mitbringen: el prefijo al final.' },
      { s: 'Bei uns ___ man um zwei zu Mittag.', a: 'isst', d: ['essen', 'esst'], t: 'En mi tierra se come a las dos.', e: 'Tercera del singular.' },
      { s: '___ sagt Prost oder Zum Wohl.', a: 'Man', d: ['Er', 'Sie'], t: 'Se dice Prost o Zum Wohl.', e: 'man como sujeto.' },
      { s: 'Wie lange ___ man den Teig kneten?', a: 'muss', d: ['müssen', 'musst'], t: '¿Cuánto hay que amasar la masa?', e: 'man + müssen en singular.' },
      { s: 'Zu einer Hochzeit ___ man sich schön an.', a: 'zieht', d: ['ziehen', 'ziehst'], t: 'A una boda uno se arregla.', e: 'sich anziehen con man: sich, tercera persona.' },
      { s: '___ braucht nicht viel für dieses Rezept.', a: 'Man', d: ['Es', 'Sie'], t: 'No hace falta mucho para esta receta.', e: 'man en posición 1.' },
      { s: 'Wo ___ man hier gut essen?', a: 'kann', d: ['können', 'kannst'], t: '¿Dónde se come bien por aquí?', e: 'Pregunta general con man.' }
    ]
  }
};
