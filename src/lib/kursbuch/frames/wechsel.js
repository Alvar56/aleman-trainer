// TEMA: las preposiciones que cambian de caso (Wechselpräpositionen).
// an, auf, hinter, in, neben, über, unter, vor, zwischen: dativo si la frase
// responde a Wo? (dónde está) y acusativo si responde a Wohin? (a dónde va).
// Se suman los verbos que las acompañan (legen/liegen, stellen/stehen,
// setzen/sitzen) y los adverbios de posición y de dirección.

export const WECHSEL = {
  // ---------- A1.2 L11: con dativo (Wo?) ----------
  'wechselprapositionen-dativ-wo': {
    picks: [
      { s: 'Das Bett steht ___ Schlafzimmer.', a: 'im', d: ['ins', 'in das'], t: 'La cama está en el dormitorio.', e: 'Wo? → dativo. in dem = im.' },
      { s: 'Die Lampe hängt über ___ Tisch.', a: 'dem', d: ['den', 'der'], t: 'La lámpara cuelga sobre la mesa.', e: 'Posición → dativo masculino: dem.' },
      { s: 'Der Teppich liegt vor ___ Sofa.', a: 'dem', d: ['das', 'den'], t: 'La alfombra está delante del sofá.', e: 'Wo? → dativo neutro: dem Sofa.' },
      { s: 'Die Katze schläft unter ___ Bett.', a: 'dem', d: ['das', 'den'], t: 'El gato duerme debajo de la cama.', e: 'Posición → dativo.' },
      { s: 'Der Schrank steht neben ___ Tür.', a: 'der', d: ['die', 'den'], t: 'El armario está al lado de la puerta.', e: 'die Tür → dativo der.' },
      { s: 'Das Bild hängt an ___ Wand.', a: 'der', d: ['die', 'den'], t: 'El cuadro cuelga en la pared.', e: 'Wo? + femenino → der Wand.' },
      { s: 'Die Bücher stehen ___ Regal.', a: 'im', d: ['ins', 'in das'], t: 'Los libros están en la estantería.', e: 'in dem = im.' },
      { s: 'Der Stuhl steht zwischen ___ Fenstern.', a: 'den', d: ['die', 'der'], t: 'La silla está entre las ventanas.', e: 'Dativo plural → den (+ -n).' },
      { s: 'Die Schuhe sind hinter ___ Tür.', a: 'der', d: ['die', 'den'], t: 'Los zapatos están detrás de la puerta.', e: 'Wo? + femenino → der.' },
      { s: 'Das Glas steht auf ___ Tisch.', a: 'dem', d: ['den', 'der'], t: 'El vaso está sobre la mesa.', e: 'Posición → dativo masculino.' },
      { s: 'Wir sitzen ___ Wohnzimmer.', a: 'im', d: ['ins', 'in das'], t: 'Estamos sentados en el salón.', e: 'Wo? → im.' },
      { s: 'Der Spiegel hängt über ___ Waschbecken.', a: 'dem', d: ['das', 'den'], t: 'El espejo cuelga sobre el lavabo.', e: 'Posición → dativo neutro.' },
      { s: 'Der Schlüssel liegt ___ Tisch.', a: 'auf dem', d: ['auf den', 'an den'], t: 'La llave está encima de la mesa.', e: '"liegen" es estado → dativo.' },
      { s: 'Die Lampe hängt ___ Decke.', a: 'an der', d: ['an die', 'auf die'], t: 'La lámpara cuelga del techo.', e: '"hängen" sin movimiento → dativo.' },
      { s: 'Das Sofa steht ___ Wohnzimmer.', a: 'im', d: ['ins', 'in das'], t: 'El sofá está en el salón.', e: '"stehen" es estado → in dem = im.' },
      { s: 'Die Kinder sind ___ Garten.', a: 'im', d: ['in den', 'in die'], t: 'Los niños están en el jardín.', e: 'Estado → dativo.' },
      { s: 'Der Teppich liegt ___ Bett.', a: 'vor dem', d: ['vor das', 'auf das'], t: 'La alfombra está delante de la cama.', e: 'Sin movimiento → dativo.' },
      { s: 'Die Handtücher liegen ___ Schrank.', a: 'im', d: ['ins', 'an das'], t: 'Las toallas están en el armario.', e: 'Estado → im.' },
      { s: 'Der Spiegel hängt ___ Tür.', a: 'an der', d: ['an die', 'auf die'], t: 'El espejo está colgado en la puerta.', e: 'Estado → an der.' },
      { s: 'Wir sitzen ___ Balkon.', a: 'auf dem', d: ['auf den', 'an den'], t: 'Estamos sentados en el balcón.', e: '"sitzen" es estado → dativo.' }
    ],
    orders: [
      { sol: ['Das', 'Bett', 'steht', 'im', 'Schlafzimmer'], t: 'La cama está en el dormitorio.', e: 'Wo? → im.' },
      { sol: ['Die', 'Lampe', 'hängt', 'über', 'dem', 'Tisch'], t: 'La lámpara cuelga sobre la mesa.', e: 'über + dativo.' },
      { sol: ['Der', 'Teppich', 'liegt', 'vor', 'dem', 'Sofa'], t: 'La alfombra está delante del sofá.', e: 'vor + dativo.' },
      { sol: ['Die', 'Bücher', 'stehen', 'neben', 'dem', 'Fernseher'], t: 'Los libros están al lado de la tele.', e: 'neben + dativo.' }
    ]
  },

  // ---------- A1.2 L15: in / auf / an, dativo o acusativo ----------
  'wechselprapositionen-in-auf-an-dativ-akk': {
    picks: [
      { s: 'Ich fahre ___ Meer. (Wohin?)', a: 'ans', d: ['am', 'an dem'], t: 'Voy al mar.', e: 'Movimiento → acusativo: an das = ans.' },
      { s: 'Ich bin ___ Meer. (Wo?)', a: 'am', d: ['ans', 'an das'], t: 'Estoy en el mar.', e: 'Posición → dativo: an dem = am.' },
      { s: 'Wir gehen ___ Kino.', a: 'ins', d: ['im', 'in dem'], t: 'Vamos al cine.', e: 'Wohin? → in das = ins.' },
      { s: 'Wir sind ___ Kino.', a: 'im', d: ['ins', 'in das'], t: 'Estamos en el cine.', e: 'Wo? → in dem = im.' },
      { s: 'Leg das Buch ___ Tisch.', a: 'auf den', d: ['auf dem', 'am'], t: 'Pon el libro sobre la mesa.', e: 'Movimiento → acusativo: auf den Tisch.' },
      { s: 'Das Buch liegt ___ Tisch.', a: 'auf dem', d: ['auf den', 'ans'], t: 'El libro está sobre la mesa.', e: 'Posición → dativo: auf dem Tisch.' },
      { s: 'Ich gehe ___ Schule.', a: 'in die', d: ['in der', 'im'], t: 'Voy al colegio.', e: 'Wohin? + femenino → in die Schule.' },
      { s: 'Ich bin ___ Schule.', a: 'in der', d: ['in die', 'ins'], t: 'Estoy en el colegio.', e: 'Wo? + femenino → in der Schule.' },
      { s: 'Häng das Bild ___ Wand!', a: 'an die', d: ['an der', 'am'], t: '¡Cuelga el cuadro en la pared!', e: 'Movimiento → an die Wand.' },
      { s: 'Das Bild hängt ___ Wand.', a: 'an der', d: ['an die', 'ans'], t: 'El cuadro cuelga en la pared.', e: 'Posición → an der Wand.' },
      { s: 'Wir fahren ___ Berge.', a: 'in die', d: ['in den', 'im'], t: 'Vamos a la montaña.', e: 'Wohin? + plural → in die Berge.' },
      { s: 'Wir sind ___ Bergen.', a: 'in den', d: ['in die', 'im'], t: 'Estamos en la montaña.', e: 'Wo? + plural → in den Bergen.' },
      { s: 'Die Kinder laufen ___ Garten. (Wohin?)', a: 'in den', d: ['im', 'in dem'], t: 'Los niños corren hacia el jardín.', e: 'Movimiento hacia un sitio → acusativo.' },
      { s: 'Die Kinder spielen ___ Garten. (Wo?)', a: 'im', d: ['in den', 'in die'], t: 'Los niños juegan en el jardín.', e: 'Sin movimiento, solo lugar → dativo.' },
      { s: 'Stell die Flasche ___ Tisch!', a: 'auf den', d: ['auf dem', 'am'], t: '¡Pon la botella en la mesa!', e: '"stellen" es colocar: hay movimiento → acusativo.' },
      { s: 'Die Flasche steht ___ Tisch.', a: 'auf dem', d: ['auf den', 'an den'], t: 'La botella está en la mesa.', e: '"stehen" es estar: sin movimiento → dativo.' },
      { s: 'Wir setzen uns ___ Bank.', a: 'auf die', d: ['auf der', 'an der'], t: 'Nos sentamos en el banco.', e: '"sich setzen" implica movimiento → acusativo.' },
      { s: 'Wir sitzen ___ Bank und reden.', a: 'auf der', d: ['auf die', 'an die'], t: 'Estamos sentados en el banco charlando.', e: '"sitzen" es estar sentado → dativo.' },
      { s: 'Häng bitte deine Jacke ___ Haken.', a: 'an den', d: ['am', 'an dem'], t: 'Cuelga la chaqueta en el gancho.', e: '"hängen" con movimiento → acusativo.' },
      { s: 'Die Jacke hängt ___ Haken.', a: 'am', d: ['an den', 'an die'], t: 'La chaqueta está colgada en el gancho.', e: '"hängen" sin movimiento → dativo.' },
      { s: 'Ich lege das Handy ___ Tasche.', a: 'in die', d: ['in der', 'auf die'], t: 'Meto el móvil en el bolso.', e: '"legen" es meter/poner → acusativo.' },
      { s: 'Das Handy ist ___ Tasche.', a: 'in der', d: ['in die', 'auf die'], t: 'El móvil está en el bolso.', e: 'Estado → dativo.' },
      { s: 'Sie geht ___ Arbeit.', a: 'zur', d: ['in der', 'an der'], t: 'Va al trabajo.', e: '"zur Arbeit" es fijo, con "zu" + dativo.' },
      { s: 'Wir warten ___ Haltestelle.', a: 'an der', d: ['an die', 'auf die'], t: 'Esperamos en la parada.', e: 'Esperar en un sitio → dativo.' },
      { s: 'Stell dich bitte ___ Schlange an!', a: 'in die', d: ['in der', 'an der'], t: '¡Ponte en la cola!', e: 'Meterse en algo → acusativo.' },
      { s: 'Das Bild hängt ___ Wand im Flur.', a: 'an der', d: ['an die', 'auf die'], t: 'El cuadro está colgado en la pared del pasillo.', e: 'Estado → dativo.' },
      { s: 'Er fährt ___ Land, um sich zu erholen.', a: 'aufs', d: ['auf dem', 'am'], t: 'Se va al campo a descansar.', e: '"aufs Land" (movimiento) frente a "auf dem Land" (estar).' },
      { s: 'Meine Großeltern wohnen ___ Land.', a: 'auf dem', d: ['aufs', 'auf das'], t: 'Mis abuelos viven en el campo.', e: 'Vivir en un sitio → dativo.' },
      { s: 'Die Fotos liegen ___ dem Tisch.', a: 'auf', d: ['auf den', 'an den'], t: 'Las fotos están encima de la mesa.', e: 'Sin movimiento: dativo, auf dem Tisch.' },
      { s: 'Leg den Koffer bitte ___ Bett.', a: 'aufs', d: ['auf dem', 'am'], t: 'Pon la maleta en la cama, por favor.', e: 'Con movimiento: acusativo, aufs Bett.' },
      { s: 'Wir treffen uns ___ Bahnhof.', a: 'am', d: ['an den', 'auf den'], t: 'Quedamos en la estación.', e: 'Sin movimiento: am Bahnhof.' },
      { s: 'Häng das Bild bitte ___ Wand.', a: 'an die', d: ['an der', 'auf der'], t: 'Cuelga el cuadro en la pared, por favor.', e: 'Con movimiento: acusativo, an die Wand.' },
      { s: 'Der Schlüssel liegt ___ Schublade.', a: 'in der', d: ['in die', 'an die'], t: 'La llave está en el cajón.', e: 'Sin movimiento: dativo, in der Schublade.' }
    ],
    orders: [
      { sol: ['Ich', 'fahre', 'im', 'Sommer', 'ans', 'Meer'], t: 'En verano voy al mar.', e: 'Wohin? → ans Meer.' },
      { sol: ['Wir', 'gehen', 'heute', 'Abend', 'ins', 'Kino'], t: 'Esta tarde vamos al cine.', e: 'Wohin? → ins Kino.' },
      { sol: ['Das', 'Buch', 'liegt', 'auf', 'dem', 'Tisch'], t: 'El libro está sobre la mesa.', e: 'Wo? → auf dem Tisch.' },
      { sol: ['Häng', 'das', 'Bild', 'bitte', 'an', 'die', 'Wand!'], t: '¡Cuelga el cuadro en la pared, por favor!', e: 'Wohin? → an die Wand.' },
      { sol: ['Stell', 'die', 'Flasche', 'bitte', 'auf', 'den', 'Tisch!'], t: '¡Pon la botella en la mesa, por favor!', e: 'Hay movimiento, así que acusativo: auf den.' },
      { sol: ['Die', 'Flasche', 'steht', 'auf', 'dem', 'Tisch'], t: 'La botella está en la mesa.', e: 'Sin movimiento: dativo, auf dem.' },
      { sol: ['Häng', 'bitte', 'deine', 'Jacke', 'an', 'den', 'Haken'], t: 'Cuelga la chaqueta en el gancho.', e: 'Colgar algo es movimiento → acusativo.' },
      { sol: ['Meine', 'Großeltern', 'wohnen', 'auf', 'dem', 'Land'], t: 'Mis abuelos viven en el campo.', e: 'Vivir es estado → dativo.' }
    ],
    clozes: [
      { txt: 'Komm rein! Stell die Tasche ___ Boden und häng die Jacke ___ Garderobe. Die anderen sitzen schon ___ Wohnzimmer. Das Essen steht ___ Tisch.', a: ['auf den', 'an die', 'im', 'auf dem'], extra: ['auf dem', 'an der', 'ins', 'auf den'], t: '¡Pasa! Deja la bolsa en el suelo y cuelga la chaqueta en el perchero. Los demás ya están en el salón. La comida está en la mesa.', e: 'Los dos primeros son movimiento (stellen, hängen) y van en acusativo; los dos últimos son estado (sitzen, stehen) y van en dativo. La preposición es la misma: lo que cambia es el caso.' },
      { txt: 'Ich lege das Handy ___ Tisch, aber die Schlüssel liegen schon ___ Tisch. Häng die Jacke ___ Haken; der Mantel hängt schon ___ Haken.', a: ['auf den', 'auf dem', 'an den', 'am'], extra: ['auf dem Tisch', 'an die', 'ans'], t: 'Dejo el móvil en la mesa, pero las llaves ya están en la mesa. Cuelga la chaqueta en el gancho; el abrigo ya está colgado en el gancho.', e: 'La misma preposición dos veces seguidas, una con movimiento (acusativo) y otra sin él (dativo). Es exactamente la diferencia que hay que ver.' }
    ]
  },

  // ---------- A2.1 L7: las nueve juntas ----------
  wechselpraepositionen: {
    picks: [
      { s: 'Ich stelle die Lampe auf ___ Tisch.', a: 'den', d: ['dem', 'der'], t: 'Pongo la lámpara sobre la mesa.', e: 'Hay movimiento (Wohin?) → acusativo: auf den Tisch.' },
      { s: 'Die Lampe steht auf ___ Tisch.', a: 'dem', d: ['den', 'der'], t: 'La lámpara está sobre la mesa.', e: 'Es posición (Wo?) → dativo: auf dem Tisch.' },
      { s: 'Häng den Spiegel bitte an ___ Wand!', a: 'die', d: ['der', 'den'], t: '¡Cuelga el espejo en la pared!', e: 'Movimiento (Wohin?) + "Wand" femenino → acusativo: an die Wand.' },
      { s: 'Der Spiegel hängt schon an ___ Wand.', a: 'der', d: ['die', 'dem'], t: 'El espejo ya cuelga en la pared.', e: 'Posición (Wo?) + femenino → dativo: an der Wand.' },
      { s: 'Die Kartons sind noch in ___ Keller.', a: 'dem', d: ['den', 'der'], t: 'Las cajas todavía están en el sótano.', e: 'Wo? → dativo. (in dem = im).' },
      { s: 'Wir gehen heute in ___ Kino.', a: 'das', d: ['dem', 'den'], t: 'Hoy vamos al cine.', e: 'Movimiento (Wohin?) + neutro → in das / ins.' },
      { s: 'Ich bin in ___ Kino.', a: 'dem', d: ['das', 'den'], t: 'Estoy en el cine.', e: 'Posición (Wo?) + neutro → in dem / im.' },
      { s: 'Sie legt das Buch auf ___ Bett.', a: 'das', d: ['dem', 'den'], t: 'Ella pone el libro sobre la cama.', e: 'Movimiento → acusativo (auf das / aufs).' },
      { s: 'Das Buch liegt auf ___ Bett.', a: 'dem', d: ['das', 'den'], t: 'El libro está sobre la cama.', e: 'Posición → dativo (auf dem).' },
      { s: 'Komm an ___ Tafel!', a: 'die', d: ['der', 'den'], t: '¡Ven a la pizarra!', e: 'Movimiento → acusativo femenino (an die).' },
      { s: 'Der Schlüssel liegt unter ___ Zeitung.', a: 'der', d: ['die', 'den'], t: 'La llave está debajo del periódico.', e: 'Wo? + femenino → dativo der.' },
      { s: 'Stell die Kartons bitte zwischen ___ Schrank und das Bett.', a: 'den', d: ['dem', 'der'], t: 'Pon las cajas entre el armario y la cama.', e: 'Wohin? + masculino → acusativo den.' },
      { s: 'Häng den Mantel bitte ___ Garderobe.', a: 'an die', d: ['an der', 'auf der'], t: 'Cuelga el abrigo en el perchero.', e: 'Movimiento → acusativo: an die.' },
      { s: 'Der Mantel hängt schon ___ Garderobe.', a: 'an der', d: ['an die', 'auf die'], t: 'El abrigo ya está colgado en el perchero.', e: 'Estado → dativo: an der.' },
      { s: 'Wir tragen die Kisten ___ Keller.', a: 'in den', d: ['im', 'in dem'], t: 'Bajamos las cajas al trastero.', e: 'Movimiento hacia dentro → acusativo.' },
      { s: 'Die Kisten sind schon ___ Keller.', a: 'im', d: ['in den', 'in die'], t: 'Las cajas ya están en el trastero.', e: 'Estado → im.' },
      { s: 'Der Teppich liegt ___ Boden.', a: 'auf dem', d: ['auf den', 'an den'], t: 'La alfombra está en el suelo.', e: 'Sin movimiento → dativo.' },
      { s: 'Leg den Teppich bitte ___ Boden.', a: 'auf den', d: ['auf dem', 'am'], t: 'Pon la alfombra en el suelo, por favor.', e: 'Con movimiento → acusativo.' },
      { s: 'Die Schrauben sind ___ Schublade.', a: 'in der', d: ['in die', 'an die'], t: 'Los tornillos están en el cajón.', e: 'Sin movimiento → dativo.' },
      { s: 'Tu die Schrauben bitte ___ Schublade.', a: 'in die', d: ['in der', 'an der'], t: 'Mete los tornillos en el cajón, por favor.', e: 'Con movimiento → acusativo.' }
    ],
    orders: [
      { sol: ['Ich', 'stelle', 'die', 'Lampe', 'auf', 'den', 'Tisch'], t: 'Pongo la lámpara sobre la mesa.', e: 'Wohin? → acusativo.' },
      { sol: ['Die', 'Lampe', 'steht', 'auf', 'dem', 'Tisch'], t: 'La lámpara está sobre la mesa.', e: 'Wo? → dativo.' },
      { sol: ['Häng', 'den', 'Spiegel', 'bitte', 'an', 'die', 'Wand!'], t: '¡Cuelga el espejo en la pared, por favor!', e: 'Movimiento → an die Wand.' },
      { sol: ['Die', 'Kartons', 'sind', 'noch', 'im', 'Keller'], t: 'Las cajas todavía están en el sótano.', e: 'Wo? → im Keller.' }
    ]
  },

  // ---------- A2.1 L7: legen/liegen, stellen/stehen, setzen/sitzen ----------
  'verben-wechselpraep': {
    picks: [
      { s: 'Ich ___ das Kissen auf das Sofa.', a: 'lege', d: ['liege', 'stehe'], t: 'Pongo el cojín en el sofá.', e: '"legen" = acción (poner tumbado) + acusativo. "liegen" sería la posición.' },
      { s: 'Das Kissen ___ auf dem Sofa.', a: 'liegt', d: ['legt', 'stellt'], t: 'El cojín está en el sofá.', e: '"liegen" = posición + dativo.' },
      { s: 'Kannst du die Bücher ins Regal ___?', a: 'stellen', d: ['stehen', 'legen'], t: '¿Puedes poner los libros en la estantería?', e: '"stellen" = colocar de pie (acción) + acusativo (ins Regal).' },
      { s: 'Die Bücher ___ schon im Regal.', a: 'stehen', d: ['stellen', 'liegen'], t: 'Los libros ya están en la estantería.', e: '"stehen" = estar de pie (posición) + dativo (im Regal).' },
      { s: 'Er ___ sich auf den Stuhl.', a: 'setzt', d: ['sitzt', 'legt'], t: 'Él se sienta en la silla.', e: '"sich setzen" = acción de sentarse.' },
      { s: 'Er ___ auf dem Stuhl.', a: 'sitzt', d: ['setzt', 'steht'], t: 'Él está sentado en la silla.', e: '"sitzen" = estar sentado (posición).' },
      { s: 'Ich ___ den Teller auf den Tisch.', a: 'stelle', d: ['stehe', 'liege'], t: 'Pongo el plato en la mesa.', e: 'Acción de colocar de pie → stellen + acusativo.' },
      { s: 'Der Teller ___ auf dem Tisch.', a: 'steht', d: ['stellt', 'legt'], t: 'El plato está en la mesa.', e: 'Posición → stehen + dativo.' },
      { s: 'Leg die Zeitung bitte auf ___ Tisch!', a: 'den', d: ['dem', 'der'], t: '¡Pon el periódico en la mesa, por favor!', e: 'legen = movimiento → acusativo.' },
      { s: 'Die Zeitung liegt auf ___ Tisch.', a: 'dem', d: ['den', 'der'], t: 'El periódico está en la mesa.', e: 'liegen = posición → dativo.' },
      { s: 'Häng die Jacke in ___ Schrank!', a: 'den', d: ['dem', 'der'], t: '¡Cuelga la chaqueta en el armario!', e: 'hängen (acción) → acusativo.' },
      { s: 'Die Jacke hängt in ___ Schrank.', a: 'dem', d: ['den', 'der'], t: 'La chaqueta está colgada en el armario.', e: 'hängen (posición) → dativo.' },
      { s: 'Ich ___ das Buch auf den Tisch.', a: 'lege', d: ['liege', 'stelle'], t: 'Pongo el libro sobre la mesa.', e: '"legen" es tumbar algo: movimiento + acusativo.' },
      { s: 'Das Buch ___ auf dem Tisch.', a: 'liegt', d: ['legt', 'stellt'], t: 'El libro está sobre la mesa.', e: '"liegen" es estar tumbado: estado + dativo.' },
      { s: 'Wir ___ den Schrank in die Ecke.', a: 'stellen', d: ['stehen', 'legen'], t: 'Ponemos el armario en el rincón.', e: '"stellen" es poner de pie: acusativo.' },
      { s: 'Der Schrank ___ in der Ecke.', a: 'steht', d: ['stellt', 'liegt'], t: 'El armario está en el rincón.', e: '"stehen" es estado: dativo.' },
      { s: '___ dich bitte auf das Sofa.', a: 'Setz', d: ['Sitz', 'Stell'], t: 'Siéntate en el sofá.', e: '"sich setzen" es el movimiento de sentarse: acusativo.' },
      { s: 'Wir ___ auf dem Sofa und reden.', a: 'sitzen', d: ['setzen', 'stellen'], t: 'Estamos sentados en el sofá charlando.', e: '"sitzen" es estar sentado: dativo.' },
      { s: 'Er ___ das Bild an die Wand.', a: 'hängt', d: ['hängt ab', 'steht'], t: 'Cuelga el cuadro en la pared.', e: 'Aquí "hängen" es transitivo → acusativo.' },
      { s: 'Das Bild ___ schon an der Wand.', a: 'hängt', d: ['hängt auf', 'legt'], t: 'El cuadro ya está colgado en la pared.', e: 'El mismo verbo, sin movimiento → dativo.' },
      { s: '___ die Kisten bitte in den Flur.', a: 'Stell', d: ['Steh', 'Stellt sich'], t: 'Pon las cajas en el pasillo, por favor.', e: 'stellen mueve algo: con acusativo.' },
      { s: 'Der Schrank ___ schon im Zimmer.', a: 'steht', d: ['stellt', 'stell'], t: 'El armario ya está en la habitación.', e: 'stehen describe dónde está: con dativo.' },
      { s: '___ das Bild bitte an die Wand.', a: 'Häng', d: ['Hängt', 'Hängst'], t: 'Cuelga el cuadro en la pared, por favor.', e: 'hängen con movimiento: acusativo.' },
      { s: 'Die Lampe ___ schon an der Decke.', a: 'hängt', d: ['hängen sich', 'häng'], t: 'La lámpara ya cuelga del techo.', e: 'hängen sin movimiento: dativo.' }
    ],
    orders: [
      { sol: ['Stell', 'die', 'Kartons', 'bitte', 'in', 'den', 'Flur'], t: 'Pon las cajas en el pasillo, por favor.', e: 'Imperativo + movimiento → acusativo: in den Flur.' },
      { sol: ['Der', 'Hund', 'liegt', 'unter', 'dem', 'Tisch'], t: 'El perro está tumbado bajo la mesa.', e: '"liegen" (posición) con dativo (unter dem Tisch).' },
      { sol: ['Ich', 'lege', 'das', 'Buch', 'auf', 'den', 'Tisch'], t: 'Pongo el libro sobre la mesa.', e: 'legen + acusativo.' },
      { sol: ['Die', 'Bücher', 'stehen', 'schon', 'im', 'Regal'], t: 'Los libros ya están en la estantería.', e: 'stehen + dativo.' }
    ],
    clozes: [
      { txt: '___ die Kisten bitte in den Flur, da ___ schon die anderen. Den Spiegel ___ wir später an die Wand, und der Tisch ___ am Fenster.', a: ['Stell', 'stehen', 'hängen', 'steht'], extra: ['Steh', 'stellen', 'hängt', 'stellt'], t: 'Pon las cajas en el pasillo, que allí ya están las otras. El espejo lo colgamos luego en la pared, y la mesa está junto a la ventana.', e: 'Los verbos van por parejas: stellen/stehen y hängen (transitivo) / hängen (intransitivo). El que mueve pide acusativo, el que está pide dativo.' },
      { txt: '___ die Kisten bitte in den Flur. Der Schrank ___ schon im Zimmer, und die Lampe ___ an der Decke.', a: ['Stell', 'steht', 'hängt'], extra: ['Steh', 'stellt', 'hängen'], t: 'Pon las cajas en el pasillo. El armario ya está en la habitación y la lámpara cuelga del techo.', e: 'El primero mueve algo (acusativo) y los otros dos describen dónde está (dativo).' }
    ]
  },

  // ---------- A2.1 L7: adverbios de posición ----------
  lokaladverbien: {
    picks: [
      { s: 'Die Kartons stehen ___ im Keller.', a: 'unten', d: ['runter', 'rein'], t: 'Las cajas están abajo en el sótano.', e: '"unten" indica posición (Wo?). "runter" sería movimiento.' },
      { s: 'Der Wäschekorb ist ___ im Bad.', a: 'hinten', d: ['rein', 'raus'], t: 'El cesto está al fondo del baño.', e: 'Posición → hinten.' },
      { s: 'Das Werkzeug liegt da ___.', a: 'unten', d: ['runter', 'rüber'], t: 'Las herramientas están ahí abajo.', e: 'da unten = ahí abajo (posición).' },
      { s: 'Die Handtücher sind ___ im Schrank.', a: 'oben', d: ['rauf', 'rein'], t: 'Las toallas están arriba en el armario.', e: 'Posición → oben.' },
      { s: 'Meine Eltern wohnen ___.', a: 'oben', d: ['rauf', 'runter'], t: 'Mis padres viven arriba.', e: 'Wo? → oben.' },
      { s: 'Der Schlüssel liegt ___ auf dem Tisch.', a: 'vorn', d: ['rein', 'rüber'], t: 'La llave está delante, sobre la mesa.', e: 'Posición → vorn.' },
      { s: 'Der Garten ist ___ hinter dem Haus.', a: 'hinten', d: ['raus', 'rüber'], t: 'El jardín está detrás de la casa.', e: 'Wo? → hinten.' },
      { s: 'Wir sitzen lieber ___ im Bus.', a: 'vorn', d: ['rein', 'rauf'], t: 'Preferimos sentarnos delante en el autobús.', e: 'Posición → vorn.' },
      { s: 'Die Waschmaschine steht ___ im Keller.', a: 'unten', d: ['runter', 'raus'], t: 'La lavadora está abajo en el sótano.', e: 'Wo? → unten.' },
      { s: 'Wo ist das Bad? – ___ rechts.', a: 'Hinten', d: ['Raus', 'Rüber'], t: '¿Dónde está el baño? – Al fondo a la derecha.', e: 'Indicación de posición → hinten.' },
      { s: 'Die Gläser stehen ganz ___.', a: 'oben', d: ['rauf', 'rein'], t: 'Los vasos están arriba del todo.', e: 'ganz oben (posición).' },
      { s: 'Bring die Schachtel bitte ___!', a: 'rauf', d: ['oben', 'vorn'], t: '¡Sube la caja, por favor!', e: 'Aquí hay movimiento, así que toca "rauf", no "oben".' },
      { s: 'Die Kisten stehen ___ im Keller.', a: 'unten', d: ['runter', 'hinunter'], t: 'Las cajas están abajo en el sótano.', e: 'unten dice dónde están, sin movimiento.' },
      { s: 'Das Werkzeug liegt ___ auf dem Dachboden.', a: 'oben', d: ['rauf', 'hinauf'], t: 'Las herramientas están arriba en el desván.', e: 'oben indica el lugar.' },
      { s: 'Der Wäschekorb steht ___ im Bad.', a: 'hinten', d: ['nach hinten', 'rüber'], t: 'El cesto de la ropa está al fondo del baño.', e: 'hinten dice dónde, no adónde.' },
      { s: '___ im Auto ist noch Platz.', a: 'Vorn', d: ['Nach vorn', 'Rein'], t: 'Delante en el coche todavía hay sitio.', e: 'vorn indica el lugar.' },
      { s: 'Wo ist die Post? – Gleich ___.', a: 'dort', d: ['dorthin', 'hierher'], t: '¿Dónde está correos? – Justo ahí.', e: 'dort indica lugar, no direccion.' },
      { s: 'Die Kinder spielen ___.', a: 'draußen', d: ['hinaus', 'heraus'], t: 'Los niños juegan fuera.', e: 'draußen es lugar.' },
      { s: 'Ich wohne ___ im dritten Stock.', a: 'oben', d: ['nach oben', 'hinauf'], t: 'Vivo arriba, en la tercera planta.', e: 'oben indica donde, no adonde.' },
      { s: 'Der Schlüssel liegt ___ in der Schublade.', a: 'drinnen', d: ['hinein', 'herein'], t: 'La llave está dentro, en el cajón.', e: 'drinnen es lugar.' }
    ],
    orders: [
      { sol: ['Die', 'Kartons', 'stehen', 'unten', 'im', 'Keller'], t: 'Las cajas están abajo en el sótano.', e: 'unten = posición.' },
      { sol: ['Der', 'Wäschekorb', 'ist', 'hinten', 'im', 'Bad'], t: 'El cesto está al fondo del baño.', e: 'hinten = posición.' },
      { sol: ['Die', 'Handtücher', 'liegen', 'oben', 'im', 'Schrank'], t: 'Las toallas están arriba en el armario.', e: 'oben = posición.' },
      { sol: ['Das', 'Werkzeug', 'liegt', 'da', 'unten'], t: 'Las herramientas están ahí abajo.', e: 'da unten.' }
    ],
    clozes: [
      { txt: 'Die Bücher stehen ___ im Regal, die Schuhe sind ___ im Schrank. Der Keller ist ___ und der Balkon ___.', a: ['oben', 'unten', 'unten', 'vorn'], extra: ['hinten', 'draußen', 'drinnen'], t: 'Los libros están arriba en la estantería, los zapatos abajo en el armario. El trastero está abajo y el balcón delante.', e: 'Estos adverbios dicen DÓNDE está algo, sin movimiento: oben, unten, vorn, hinten.' }
    ]
  },

  // ---------- A2.1 L7: adverbios de dirección ----------
  direktionaladverbien: {
    picks: [
      { s: 'Trag die Schachtel bitte ___!', a: 'rauf', d: ['oben', 'unten'], t: '¡Sube la caja, por favor!', e: 'Movimiento hacia arriba → rauf (forma coloquial de hinauf).' },
      { s: 'Komm ___, die Tür ist offen.', a: 'rein', d: ['drinnen', 'raus'], t: 'Pasa, la puerta está abierta.', e: 'Entrar → rein.' },
      { s: 'Bringst du bitte den Müll ___?', a: 'raus', d: ['draußen', 'rein'], t: '¿Sacas la basura, por favor?', e: 'Sacar fuera → raus.' },
      { s: 'Kommst du kurz ___ zu uns?', a: 'rüber', d: ['drüben', 'rein'], t: '¿Te pasas un momento a nuestra casa?', e: 'Cruzar hacia el otro lado → rüber.' },
      { s: 'Trag die Kisten bitte ___ in den Keller.', a: 'runter', d: ['unten', 'raus'], t: 'Baja las cajas al sótano, por favor.', e: 'Movimiento hacia abajo → runter.' },
      { s: 'Geh bitte ___ und warte dort.', a: 'raus', d: ['draußen', 'rauf'], t: 'Sal y espera allí.', e: 'Salir → raus.' },
      { s: 'Stell die Kartons ___ auf den Dachboden.', a: 'rauf', d: ['oben', 'rein'], t: 'Sube las cajas al desván.', e: 'Hacia arriba → rauf.' },
      { s: 'Die Kinder laufen ins Haus ___.', a: 'rein', d: ['drinnen', 'raus'], t: 'Los niños entran corriendo en casa.', e: 'Entrar → rein.' },
      { s: 'Aber die Waschmaschine steht ___.', a: 'unten', d: ['runter', 'raus'], t: 'Pero la lavadora está abajo.', e: 'Aquí no hay movimiento: es "unten" (posición).' },
      { s: 'Bring die Stühle bitte ___ in den Garten.', a: 'raus', d: ['draußen', 'rauf'], t: 'Saca las sillas al jardín, por favor.', e: 'Hacia fuera → raus.' },
      { s: 'Fahr bitte den Wagen ___ in die Garage.', a: 'rein', d: ['drinnen', 'runter'], t: 'Mete el coche en el garaje, por favor.', e: 'Hacia dentro → rein.' },
      { s: 'Komm ___, das Essen ist fertig!', a: 'runter', d: ['unten', 'rüber'], t: '¡Baja, la comida está lista!', e: 'Movimiento hacia abajo → runter.' },
      { s: 'Bring die Kiste bitte ___ in den Keller.', a: 'runter', d: ['unten', 'hinten'], t: 'Baja la caja al sótano, por favor.', e: 'runter indica movimiento hacia abajo.' },
      { s: 'Komm ___, es ist kalt draußen!', a: 'rein', d: ['drinnen', 'innen'], t: '¡Entra, hace frío fuera!', e: 'rein indica movimiento hacia dentro.' },
      { s: 'Trag den Spiegel bitte ___ in den ersten Stock.', a: 'rauf', d: ['oben', 'auf'], t: 'Sube el espejo al primer piso, por favor.', e: 'rauf: movimiento hacia arriba.' },
      { s: 'Geh bitte kurz ___ zum Nachbarn.', a: 'rüber', d: ['drüben', 'hinten'], t: 'Pásate un momento a casa del vecino.', e: 'rüber indica movimiento al otro lado.' },
      { s: 'Komm bitte ___!', a: 'herein', d: ['drinnen', 'innen'], t: '¡Pasa, por favor!', e: 'herein indica movimiento hacia el hablante.' },
      { s: 'Geh bitte ___, es ist zu laut hier.', a: 'hinaus', d: ['draußen', 'außen'], t: 'Sal fuera, por favor, aquí hay mucho ruido.', e: 'hinaus indica movimiento alejandose.' },
      { s: 'Wir gehen ___ auf den Berg.', a: 'hinauf', d: ['oben', 'droben'], t: 'Subimos a la montaña.', e: 'hinauf indica direccion hacia arriba.' },
      { s: '„her“ zeigt die Richtung ___.', a: 'zum Sprecher', d: ['vom Sprecher weg', 'nach unten'], t: '«her» indica la dirección hacia el hablante.', e: 'hin se aleja, her se acerca.' }
    ],
    orders: [
      { sol: ['Trag', 'die', 'Schachtel', 'bitte', 'rauf!'], t: '¡Sube la caja, por favor!', e: 'rauf = movimiento hacia arriba.' },
      { sol: ['Komm', 'rein,', 'die', 'Tür', 'ist', 'offen'], t: 'Pasa, la puerta está abierta.', e: 'rein = hacia dentro.' },
      { sol: ['Bringst', 'du', 'bitte', 'den', 'Müll', 'raus?'], t: '¿Sacas la basura, por favor?', e: 'raus = hacia fuera.' },
      { sol: ['Trag', 'die', 'Kisten', 'bitte', 'runter'], t: 'Baja las cajas, por favor.', e: 'runter = hacia abajo.' }
    ],
    clozes: [
      { txt: 'Komm ___! Die Tür ist offen. Den schweren Karton bringen wir ___ in den Keller, und das Sofa muss ___ in den zweiten Stock.', a: ['rein', 'runter', 'rauf'], extra: ['raus', 'rüber', 'weg'], t: '¡Pasa! La puerta está abierta. La caja pesada la bajamos al sótano, y el sofá hay que subirlo al segundo.', e: 'Estos dicen HACIA DÓNDE: rein (hacia dentro), raus, rauf (hacia arriba), runter (hacia abajo).' }
    ]
  },
  'wechselpraep-akkusativ-wohin': {
    picks: [
      { s: 'Ich gehe in ___ Stadt.', a: 'die', d: ['der', 'dem'], t: 'Voy al centro.', e: 'Movimiento hacia: acusativo, die Stadt.' },
      { s: 'Stell die Tasche bitte auf ___ Tisch.', a: 'den', d: ['dem', 'der'], t: 'Pon la bolsa en la mesa.', e: 'stellen es movimiento: auf den Tisch.' },
      { s: 'Wir fahren an ___ See.', a: 'den', d: ['dem', 'der'], t: 'Vamos al lago.', e: 'Hacia el lago: an den See.' },
      { s: 'Häng das Bild bitte an ___ Wand.', a: 'die', d: ['der', 'dem'], t: 'Cuelga el cuadro en la pared.', e: 'hängen con movimiento: an die Wand.' },
      { s: 'Der Bus fährt über ___ Brücke.', a: 'die', d: ['der', 'dem'], t: 'El autobús cruza el puente.', e: 'Atravesar: acusativo.' },
      { s: 'Leg den Schlüssel unter ___ Matte.', a: 'die', d: ['der', 'dem'], t: 'Deja la llave debajo del felpudo.', e: 'legen es movimiento: unter die Matte.' },
      { s: 'Ich setze mich neben ___ Fenster.', a: 'das', d: ['dem', 'der'], t: 'Me siento al lado de la ventana.', e: 'sich setzen es movimiento: neben das Fenster.' },
      { s: 'Stell das Rad hinter ___ Haus.', a: 'das', d: ['dem', 'der'], t: 'Pon la bici detrás de la casa.', e: 'hinter + acusativo con movimiento.' },
      { s: 'Wir gehen ins Kino, also in ___ Kino.', a: 'das', d: ['dem', 'der'], t: 'Vamos al cine, o sea in das Kino.', e: 'ins es la unión de in + das.' },
      { s: 'Fahr bitte vor ___ Eingang.', a: 'den', d: ['dem', 'der'], t: 'Para delante de la entrada.', e: 'Movimiento hacia: vor den Eingang.' },
      { s: 'Welche Frage geht mit dem Akkusativ?', a: 'wohin', d: ['wo', 'woher'], t: 'Con el acusativo va la pregunta «wohin».', e: 'Adónde: hay movimiento.' },
      { s: 'Und welche mit dem Dativ?', a: 'wo', d: ['wohin', 'wann'], t: 'Con el dativo va «wo».', e: 'Dónde: no hay movimiento.' },
      { s: 'Wie viele Wechselpräpositionen gibt es?', a: 'nueve', d: ['cinco', 'doce'], t: 'Son nueve.', e: 'in, an, auf, über, unter, vor, hinter, neben, zwischen.' },
      { s: 'Was heißt „Wechsel“ hier?', a: 'que cambian de caso', d: ['que cambian de sentido', 'que van en parejas'], t: 'Que cambian de caso según haya movimiento o no.', e: 'Por eso se llaman así.' },
      { s: 'Was ist „ins“ die Abkürzung von?', a: 'in das', d: ['in dem', 'in die'], t: '«ins» es «in das».', e: 'Acusativo, o sea movimiento.' },
      { s: 'Und „im“?', a: 'in dem', d: ['in das', 'in die'], t: '«im» es «in dem».', e: 'Dativo, o sea sitio.' },
      { s: 'Ich lege das Buch auf ___ Tisch.', a: 'den', d: ['dem', 'der'], t: 'Pongo el libro sobre la mesa.', e: 'Movimiento → acusativo.' },
      { s: 'Stell die Flasche in ___ Kühlschrank.', a: 'den', d: ['dem', 'der'], t: 'Mete la botella en la nevera.', e: 'der Kühlschrank + movimiento → den.' },
      { s: 'Wir gehen heute in ___ Oper.', a: 'die', d: ['der', 'dem'], t: 'Hoy vamos a la ópera.', e: 'die Oper + movimiento → die.' },
      { s: 'Woran erkennt man el movimiento?', a: 'el verbo lo dice', d: ['la preposición', 'el artículo'], t: 'Lo dice el verbo.', e: 'gehen, stellen, legen frente a sein, stehen, liegen.' }
    ]
  },
  'wechselpraep-stellen-legen-haengen': {
    picks: [
      { s: 'Ich stelle den Drucker auf ___ Kommode.', a: 'den', d: ['dem', 'der'], t: 'Pongo la impresora en la cómoda.', e: 'stellen es movimiento: acusativo.' },
      { s: 'Der Drucker steht auf ___ Kommode.', a: 'dem', d: ['den', 'der'], t: 'La impresora está en la cómoda.', e: 'stehen es sitio: dativo.' },
      { s: 'Leg das Buch bitte auf ___ Regal.', a: 'das', d: ['dem', 'der'], t: 'Deja el libro en la estantería.', e: 'legen es movimiento: acusativo.' },
      { s: 'Das Buch liegt schon auf ___ Regal.', a: 'dem', d: ['das', 'der'], t: 'El libro ya está en la estantería.', e: 'liegen es sitio: dativo.' },
      { s: 'Häng den Spiegel über ___ Waschbecken.', a: 'das', d: ['dem', 'der'], t: 'Cuelga el espejo encima del lavabo.', e: 'hängen con movimiento: acusativo.' },
      { s: 'Der Kalender hängt über ___ Schreibtisch.', a: 'dem', d: ['das', 'der'], t: 'El calendario está colgado encima del escritorio.', e: 'hängen sin movimiento: dativo.' },
      { s: 'Stell den Sessel neben ___ Sofa.', a: 'das', d: ['dem', 'der'], t: 'Pon el sillón al lado del sofá.', e: 'stellen: acusativo.' },
      { s: 'Der Sessel steht neben ___ Sofa.', a: 'dem', d: ['das', 'der'], t: 'El sillón está al lado del sofá.', e: 'stehen: dativo.' },
      { s: 'Ich lege die Decke auf ___ Bett.', a: 'das', d: ['dem', 'der'], t: 'Pongo la manta en la cama.', e: 'legen: acusativo.' },
      { s: 'Die Schuhe stehen vor ___ Tür.', a: 'der', d: ['die', 'den'], t: 'Los zapatos están delante de la puerta.', e: 'stehen con die Tür en dativo: der Tür.' },
      { s: 'Welche drei Verben fragen nach „wohin“?', a: 'stellen, legen, hängen', d: ['stehen, liegen, hängen', 'gehen, fahren, kommen'], t: 'Preguntan «wohin»: «stellen», «legen» y «hängen».', e: 'Y por tanto acusativo.' },
      { s: 'Und welche por „wo“?', a: 'stehen, liegen, hängen', d: ['stellen, legen, setzen', 'machen, tun'], t: 'Preguntan «wo»: «stehen», «liegen» y «hängen».', e: 'Y por tanto dativo.' },
      { s: 'Welches Verb está en las dos listas?', a: 'hängen', d: ['stellen', 'liegen'], t: '«hängen» está en las dos.', e: 'Colgar algo y estar colgado.' },
      { s: 'Was ist der Unterschied zwischen „stellen“ und „legen“?', a: 'de pie o tumbado', d: ['dentro o fuera', 'arriba o abajo'], t: '«stellen» es ponerlo de pie, «legen» tumbado.', e: 'Una botella se stellt, un libro se legt.' },
      { s: 'Sind estos verbos regulares?', a: 'stellen y legen sí, los otros no', d: ['todos sí', 'ninguno'], t: '«stellen» y «legen» son regulares; «stehen», «liegen» y «hängen» no.', e: 'stand, lag, hing.' },
      { s: 'Ich hänge das Foto an ___ Wand.', a: 'die', d: ['der', 'dem'], t: 'Cuelgo la foto en la pared.', e: 'hängen con movimiento → acusativo.' },
      { s: 'Das Foto hängt an ___ Wand.', a: 'der', d: ['die', 'dem'], t: 'La foto está colgada en la pared.', e: 'hängen sin movimiento → dativo.' },
      { s: 'Stell die Vase auf ___ Fensterbrett.', a: 'das', d: ['dem', 'der'], t: 'Pon el jarrón en el alféizar.', e: 'stellen → acusativo.' },
      { s: 'Die Post liegt auf ___ Küchentisch.', a: 'dem', d: ['den', 'der'], t: 'El periódico está en la mesa.', e: 'liegen → dativo.' },
      { s: 'Warum sale mal a los españoles?', a: 'porque usamos poner y estar para todo', d: ['porque son irregulares', 'por el orden'], t: 'Porque en español lo resolvemos con «poner» y «estar».', e: 'El alemán distingue de pie, tumbado y colgado.' }
    ]
  },
  'wechselpraep-wo-wohin-wdh': {
    picks: [
      { s: 'Ich stelle die Lampe ___ den Tisch.', a: 'auf', d: ['auf dem', 'an dem'], t: 'Pongo la lámpara sobre la mesa.', e: 'Movimiento (wohin?) → acusativo.' },
      { s: 'Die Lampe steht auf ___ Schreibtisch.', a: 'dem', d: ['den', 'der'], t: 'La lámpara está sobre el escritorio.', e: 'Sitio (wo?) → dativo.' },
      { s: 'Häng den Kalender bitte an ___ Wand.', a: 'die', d: ['der', 'dem'], t: 'Cuelga el calendario en la pared.', e: 'hängen con movimiento → acusativo.' },
      { s: 'Der Kalender hängt an ___ Wand.', a: 'der', d: ['die', 'dem'], t: 'El calendario está colgado en la pared.', e: 'Sin movimiento → dativo.' },
      { s: 'Ich lege das Buch ___ das Regal.', a: 'in', d: ['in dem', 'im'], t: 'Pongo el libro en la estantería.', e: 'legen → wohin → acusativo.' },
      { s: 'Das Buch liegt ___ Regal.', a: 'im', d: ['ins', 'in das'], t: 'El libro está en la estantería.', e: 'liegen → wo → dativo (in dem = im).' },
      { s: 'stellen, legen und hängen fragen nach ___.', a: 'wohin', d: ['wo', 'wann'], t: 'stellen, legen y hängen preguntan «wohin».', e: 'Son los verbos de movimiento.' },
      { s: 'stehen, liegen und hängen fragen nach ___.', a: 'wo', d: ['wohin', 'woher'], t: 'stehen, liegen y hängen preguntan «wo».', e: 'Son los verbos de posición.' },
      { s: 'Setz dich bitte ___ das Sofa.', a: 'auf', d: ['auf dem', 'am'], t: 'Siéntate en el sofá.', e: 'sich setzen → movimiento → acusativo.' },
      { s: 'Er sitzt ___ dem Sofa.', a: 'auf', d: ['auf das', 'aufs'], t: 'Está sentado en el sofá.', e: 'sitzen → sitio → dativo.' },
      { s: 'Ich hänge das Bild über ___ Sofa.', a: 'das', d: ['dem', 'der'], t: 'Cuelgo el cuadro encima del sofá.', e: 'Movimiento (wohin): acusativo.' },
      { s: 'Das Bild hängt über ___ Sofa.', a: 'dem', d: ['das', 'der'], t: 'El cuadro está encima del sofá.', e: 'Posición (wo): dativo.' },
      { s: 'Stell die Schuhe bitte vor ___ Tür.', a: 'die', d: ['der', 'dem'], t: 'Pon los zapatos delante de la puerta.', e: 'stellen indica movimiento: acusativo.' },
      { s: 'Die Pflanze steht auf ___ Fensterbrett.', a: 'dem', d: ['das', 'der'], t: 'La planta está en el alféizar.', e: 'Posición (wo): dativo.' },
      { s: 'Er legt den Schlüssel neben ___ Teller.', a: 'den', d: ['dem', 'der'], t: 'Pone la llave al lado del plato.', e: 'legen indica movimiento: acusativo.' },
      { s: 'Der Schlüssel liegt neben ___ Teller.', a: 'dem', d: ['den', 'der'], t: 'La llave está al lado del plato.', e: 'liegen indica posición: dativo.' },
      { s: 'Wohin fragt nach ___.', a: 'der Richtung', d: ['dem Ort', 'der Zeit'], t: '«Wohin» pregunta por la dirección.', e: 'Y se responde con acusativo.' },
      { s: 'Wo fragt nach ___.', a: 'dem Ort', d: ['der Richtung', 'der Zeit'], t: '«Wo» pregunta por el lugar.', e: 'Y se responde con dativo.' },
      { s: 'Ich gehe in ___ Küche.', a: 'die', d: ['der', 'dem'], t: 'Voy a la cocina.', e: 'Movimiento hacia dentro: acusativo.' },
      { s: 'Ich bin in ___ Küche.', a: 'der', d: ['die', 'dem'], t: 'Estoy en la cocina.', e: 'Estar dentro: dativo.' }
    ]
  }
};
