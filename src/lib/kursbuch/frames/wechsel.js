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
      { s: 'Der Spiegel hängt über ___ Waschbecken.', a: 'dem', d: ['das', 'den'], t: 'El espejo cuelga sobre el lavabo.', e: 'Posición → dativo neutro.' }
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
      { s: 'Wir sind ___ Bergen.', a: 'in den', d: ['in die', 'im'], t: 'Estamos en la montaña.', e: 'Wo? + plural → in den Bergen.' }
    ],
    orders: [
      { sol: ['Ich', 'fahre', 'im', 'Sommer', 'ans', 'Meer'], t: 'En verano voy al mar.', e: 'Wohin? → ans Meer.' },
      { sol: ['Wir', 'gehen', 'heute', 'Abend', 'ins', 'Kino'], t: 'Esta tarde vamos al cine.', e: 'Wohin? → ins Kino.' },
      { sol: ['Das', 'Buch', 'liegt', 'auf', 'dem', 'Tisch'], t: 'El libro está sobre la mesa.', e: 'Wo? → auf dem Tisch.' },
      { sol: ['Häng', 'das', 'Bild', 'bitte', 'an', 'die', 'Wand!'], t: '¡Cuelga el cuadro en la pared, por favor!', e: 'Wohin? → an die Wand.' }
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
      { s: 'Stell die Kartons bitte zwischen ___ Schrank und das Bett.', a: 'den', d: ['dem', 'der'], t: 'Pon las cajas entre el armario y la cama.', e: 'Wohin? + masculino → acusativo den.' }
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
      { s: 'Die Jacke hängt in ___ Schrank.', a: 'dem', d: ['den', 'der'], t: 'La chaqueta está colgada en el armario.', e: 'hängen (posición) → dativo.' }
    ],
    orders: [
      { sol: ['Stell', 'die', 'Kartons', 'bitte', 'in', 'den', 'Flur'], t: 'Pon las cajas en el pasillo, por favor.', e: 'Imperativo + movimiento → acusativo: in den Flur.' },
      { sol: ['Der', 'Hund', 'liegt', 'unter', 'dem', 'Tisch'], t: 'El perro está tumbado bajo la mesa.', e: '"liegen" (posición) con dativo (unter dem Tisch).' },
      { sol: ['Ich', 'lege', 'das', 'Buch', 'auf', 'den', 'Tisch'], t: 'Pongo el libro sobre la mesa.', e: 'legen + acusativo.' },
      { sol: ['Die', 'Bücher', 'stehen', 'schon', 'im', 'Regal'], t: 'Los libros ya están en la estantería.', e: 'stehen + dativo.' }
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
      { s: 'Bring die Schachtel bitte ___!', a: 'rauf', d: ['oben', 'vorn'], t: '¡Sube la caja, por favor!', e: 'Aquí hay movimiento, así que toca "rauf", no "oben".' }
    ],
    orders: [
      { sol: ['Die', 'Kartons', 'stehen', 'unten', 'im', 'Keller'], t: 'Las cajas están abajo en el sótano.', e: 'unten = posición.' },
      { sol: ['Der', 'Wäschekorb', 'ist', 'hinten', 'im', 'Bad'], t: 'El cesto está al fondo del baño.', e: 'hinten = posición.' },
      { sol: ['Die', 'Handtücher', 'liegen', 'oben', 'im', 'Schrank'], t: 'Las toallas están arriba en el armario.', e: 'oben = posición.' },
      { sol: ['Das', 'Werkzeug', 'liegt', 'da', 'unten'], t: 'Las herramientas están ahí abajo.', e: 'da unten.' }
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
      { s: 'Komm ___, das Essen ist fertig!', a: 'runter', d: ['unten', 'rüber'], t: '¡Baja, la comida está lista!', e: 'Movimiento hacia abajo → runter.' }
    ],
    orders: [
      { sol: ['Trag', 'die', 'Schachtel', 'bitte', 'rauf!'], t: '¡Sube la caja, por favor!', e: 'rauf = movimiento hacia arriba.' },
      { sol: ['Komm', 'rein,', 'die', 'Tür', 'ist', 'offen'], t: 'Pasa, la puerta está abierta.', e: 'rein = hacia dentro.' },
      { sol: ['Bringst', 'du', 'bitte', 'den', 'Müll', 'raus?'], t: '¿Sacas la basura, por favor?', e: 'raus = hacia fuera.' },
      { sol: ['Trag', 'die', 'Kisten', 'bitte', 'runter'], t: 'Baja las cajas, por favor.', e: 'runter = hacia abajo.' }
    ]
  }
};
