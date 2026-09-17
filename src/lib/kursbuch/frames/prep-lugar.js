// TEMA: preposiciones de lugar y de compañía/medio con caso fijo.
// aus, in, bei, mit, nach, zu, von + Dativ · für, ohne, durch + Akkusativ.
// Aquí el caso no depende de si hay movimiento: cada preposición lleva el suyo
// siempre, así que lo práctico es aprenderlas en bloque.

export const PREP_LUGAR = {
  // ---------- A1.1 L1: aus / in ----------
  'lokale-prapositionen-aus-in': {
    picks: [
      { s: 'Ich komme ___ Spanien.', a: 'aus', d: ['in', 'von'], t: 'Vengo de España.', e: '"aus" para el país de origen.' },
      { s: 'Ich wohne ___ Wien.', a: 'in', d: ['aus', 'nach'], t: 'Vivo en Viena.', e: '"in" para el sitio donde vives.' },
      { s: 'Sie kommt ___ der Schweiz.', a: 'aus', d: ['in', 'von'], t: 'Ella viene de Suiza.', e: 'Los países con artículo llevan dativo: aus der Schweiz.' },
      { s: 'Wir leben ___ Graz.', a: 'in', d: ['aus', 'zu'], t: 'Vivimos en Graz.', e: 'Ciudad sin artículo: in Graz.' },
      { s: 'Er kommt ___ der Türkei.', a: 'aus', d: ['in', 'nach'], t: 'Viene de Turquía.', e: 'die Türkei → aus der Türkei.' },
      { s: 'Woher kommst du? – ___ Peru.', a: 'Aus', d: ['In', 'Nach'], t: '¿De dónde vienes? – De Perú.', e: 'Procedencia → aus.' },
      { s: 'Meine Familie wohnt ___ Madrid.', a: 'in', d: ['aus', 'nach'], t: 'Mi familia vive en Madrid.', e: 'Residencia → in.' },
      { s: 'Sie kommt ___ dem Iran.', a: 'aus', d: ['in', 'von'], t: 'Ella viene de Irán.', e: 'der Iran → aus dem Iran.' },
      { s: 'Ich arbeite ___ einem Büro.', a: 'in', d: ['aus', 'nach'], t: 'Trabajo en una oficina.', e: 'in + dativo para el lugar.' },
      { s: 'Kommt ihr ___ Deutschland?', a: 'aus', d: ['in', 'zu'], t: '¿Sois de Alemania?', e: 'Origen → aus.' },
      { s: 'Wohnst du ___ Österreich?', a: 'in', d: ['aus', 'nach'], t: '¿Vives en Austria?', e: 'Residencia → in.' },
      { s: 'Das Wort kommt ___ dem Lateinischen.', a: 'aus', d: ['in', 'von'], t: 'La palabra viene del latín.', e: 'Procedencia → aus + dativo.' }
    ],
    orders: [
      { sol: ['Ich', 'komme', 'aus', 'Spanien', 'und', 'wohne', 'in', 'Wien'], t: 'Soy de España y vivo en Viena.', e: 'aus para el origen, in para la residencia.' },
      { sol: ['Sie', 'kommt', 'aus', 'der', 'Schweiz'], t: 'Ella viene de Suiza.', e: 'País con artículo → dativo.' },
      { sol: ['Wir', 'leben', 'seit', 'zwei', 'Jahren', 'in', 'Graz'], t: 'Vivimos en Graz desde hace dos años.', e: 'in + ciudad.' },
      { sol: ['Woher', 'kommen', 'Sie?'], t: '¿De dónde es usted?', e: 'La pregunta por el origen.' }
    ]
  },

  // ---------- A1.1 L3: bei ----------
  'praposition-bei': {
    picks: [
      { s: 'Sie arbeitet ___ Siemens.', a: 'bei', d: ['in', 'zu'], t: 'Ella trabaja en Siemens.', e: '"bei" + nombre de empresa.' },
      { s: 'Ich arbeite ___ einer Bank.', a: 'bei', d: ['in', 'nach'], t: 'Trabajo en un banco.', e: 'bei + dativo.' },
      { s: 'Er wohnt ___ seinen Eltern.', a: 'bei', d: ['mit', 'zu'], t: 'Vive con sus padres.', e: '"bei" + persona: en casa de.' },
      { s: 'Ich war gestern ___ Arzt.', a: 'beim', d: ['bei', 'zum'], t: 'Ayer estuve en el médico.', e: 'bei dem = beim.' },
      { s: 'Sie arbeitet ___ der Post.', a: 'bei', d: ['in', 'nach'], t: 'Trabaja en correos.', e: 'bei + dativo femenino: bei der Post.' },
      { s: 'Wir übernachten ___ Freunden.', a: 'bei', d: ['mit', 'zu'], t: 'Dormimos en casa de unos amigos.', e: 'bei + dativo plural.' },
      { s: 'Mein Bruder arbeitet ___ einer Firma in Linz.', a: 'bei', d: ['in', 'auf'], t: 'Mi hermano trabaja en una empresa de Linz.', e: 'bei + empresa.' },
      { s: 'Ich wohne vorübergehend ___ meiner Schwester.', a: 'bei', d: ['mit', 'zu'], t: 'Vivo temporalmente en casa de mi hermana.', e: 'bei meiner Schwester (dativo femenino).' },
      { s: 'Er ist gerade ___ der Arbeit.', a: 'bei', d: ['in', 'zu'], t: 'Ahora mismo está en el trabajo.', e: 'bei der Arbeit (fórmula fija).' },
      { s: 'Wo arbeitest du? – ___ einem Café.', a: 'In', d: ['Bei', 'Zu'], t: '¿Dónde trabajas? – En una cafetería.', e: 'Con el edificio concreto se usa "in": in einem Café.' },
      { s: 'Sie ist Kellnerin ___ einem Restaurant.', a: 'in', d: ['bei', 'zu'], t: 'Es camarera en un restaurante.', e: 'Lugar físico → in.' },
      { s: 'Ich habe einen Termin ___ der Ärztin.', a: 'bei', d: ['in', 'zu'], t: 'Tengo cita con la médica.', e: 'bei + persona.' }
    ],
    orders: [
      { sol: ['Sie', 'arbeitet', 'bei', 'einer', 'großen', 'Firma'], t: 'Trabaja en una empresa grande.', e: 'bei + dativo.' },
      { sol: ['Ich', 'wohne', 'im', 'Moment', 'bei', 'meiner', 'Schwester'], t: 'Ahora mismo vivo en casa de mi hermana.', e: 'bei + persona en dativo.' },
      { sol: ['Er', 'war', 'gestern', 'beim', 'Arzt'], t: 'Ayer estuvo en el médico.', e: 'bei dem = beim.' },
      { sol: ['Wir', 'übernachten', 'bei', 'Freunden'], t: 'Dormimos en casa de unos amigos.', e: 'bei + dativo plural.' }
    ]
  },

  // ---------- A1.1 L6: mit / ohne ----------
  'prapositionen-mit-ohne': {
    picks: [
      { s: 'Einen Kaffee ___ Milch, bitte.', a: 'mit', d: ['ohne', 'für'], t: 'Un café con leche, por favor.', e: '"mit" + dativo.' },
      { s: 'Ein Wasser ___ Kohlensäure, bitte.', a: 'ohne', d: ['mit', 'für'], t: 'Un agua sin gas, por favor.', e: '"ohne" + acusativo.' },
      { s: 'Ich möchte eine Pizza ___ Käse.', a: 'ohne', d: ['mit', 'von'], t: 'Quiero una pizza sin queso.', e: 'ohne + acusativo.' },
      { s: 'Ein Brot ___ Butter, bitte.', a: 'mit', d: ['ohne', 'für'], t: 'Un pan con mantequilla, por favor.', e: 'mit + dativo.' },
      { s: 'Ich trinke den Tee ___ Zucker.', a: 'ohne', d: ['mit', 'von'], t: 'Tomo el té sin azúcar.', e: 'ohne + acusativo masculino: ohne Zucker.' },
      { s: 'Kommst du ___ mir?', a: 'mit', d: ['ohne', 'für'], t: '¿Vienes conmigo?', e: 'mit + dativo: mit mir.' },
      { s: 'Ich gehe heute ___ dich.', a: 'ohne', d: ['mit', 'von'], t: 'Hoy voy sin ti.', e: 'ohne + acusativo: ohne dich.' },
      { s: 'Einen Salat ___ Dressing, bitte.', a: 'mit', d: ['ohne', 'für'], t: 'Una ensalada con aliño, por favor.', e: 'mit + dativo.' },
      { s: 'Ein Sandwich ___ Fleisch, bitte.', a: 'ohne', d: ['mit', 'von'], t: 'Un sándwich sin carne, por favor.', e: 'ohne + acusativo.' },
      { s: 'Wir fahren ___ dem Auto.', a: 'mit', d: ['ohne', 'für'], t: 'Vamos en coche.', e: 'mit + dativo también para el medio de transporte.' },
      { s: 'Er kommt ___ seinen Kindern.', a: 'mit', d: ['ohne', 'für'], t: 'Viene con sus hijos.', e: 'mit + dativo plural (-n en el sustantivo).' },
      { s: 'Ich kann ___ Brille nichts lesen.', a: 'ohne', d: ['mit', 'von'], t: 'Sin gafas no puedo leer nada.', e: 'ohne + acusativo, normalmente sin artículo.' }
    ],
    orders: [
      { sol: ['Einen', 'Kaffee', 'mit', 'Milch,', 'bitte'], t: 'Un café con leche, por favor.', e: 'mit + dativo.' },
      { sol: ['Ein', 'Wasser', 'ohne', 'Kohlensäure,', 'bitte'], t: 'Un agua sin gas, por favor.', e: 'ohne + acusativo.' },
      { sol: ['Ich', 'trinke', 'den', 'Tee', 'immer', 'ohne', 'Zucker'], t: 'Siempre tomo el té sin azúcar.', e: 'ohne Zucker.' },
      { sol: ['Kommst', 'du', 'mit', 'uns', 'ins', 'Kino?'], t: '¿Vienes al cine con nosotros?', e: 'mit uns (dativo).' }
    ]
  },

  // ---------- A1.2 L10: zu + Dativ ----------
  'praposition-zu-dativ': {
    picks: [
      { s: 'Wie komme ich ___ Bahnhof?', a: 'zum', d: ['zur', 'zu'], t: '¿Cómo llego a la estación?', e: 'zu dem = zum (Bahnhof es masculino).' },
      { s: 'Ich gehe ___ Post.', a: 'zur', d: ['zum', 'zu'], t: 'Voy a correos.', e: 'zu der = zur (Post es femenino).' },
      { s: 'Er fährt ___ Arbeit.', a: 'zur', d: ['zum', 'zu'], t: 'Va al trabajo.', e: 'die Arbeit → zur Arbeit.' },
      { s: 'Wir gehen ___ Arzt.', a: 'zum', d: ['zur', 'zu'], t: 'Vamos al médico.', e: 'der Arzt → zum Arzt.' },
      { s: 'Kommst du ___ Party?', a: 'zur', d: ['zum', 'zu'], t: '¿Vienes a la fiesta?', e: 'die Party → zur Party.' },
      { s: 'Ich muss ___ Supermarkt.', a: 'zum', d: ['zur', 'zu'], t: 'Tengo que ir al supermercado.', e: 'der Supermarkt → zum.' },
      { s: 'Sie geht ___ Schule.', a: 'zur', d: ['zum', 'zu'], t: 'Va al colegio.', e: 'die Schule → zur Schule.' },
      { s: 'Wie komme ich ___ Rathaus?', a: 'zum', d: ['zur', 'zu'], t: '¿Cómo llego al ayuntamiento?', e: 'das Rathaus → zum Rathaus.' },
      { s: 'Ich fahre ___ meiner Freundin.', a: 'zu', d: ['zum', 'zur'], t: 'Voy a casa de mi amiga.', e: 'Con un posesivo se deja "zu" + dativo: zu meiner Freundin.' },
      { s: 'Gehen wir ___ Apotheke?', a: 'zur', d: ['zum', 'zu'], t: '¿Vamos a la farmacia?', e: 'die Apotheke → zur.' },
      { s: 'Er geht jeden Tag ___ Fitnessstudio.', a: 'ins', d: ['zum', 'zur'], t: 'Va todos los días al gimnasio.', e: 'Si entras en el edificio se usa "in": ins Fitnessstudio.' },
      { s: 'Wir müssen ___ Amt gehen.', a: 'zum', d: ['zur', 'zu'], t: 'Tenemos que ir a la oficina.', e: 'das Amt → zum Amt.' }
    ],
    orders: [
      { sol: ['Wie', 'komme', 'ich', 'zum', 'Bahnhof?'], t: '¿Cómo llego a la estación?', e: 'zu dem = zum.' },
      { sol: ['Ich', 'gehe', 'jetzt', 'zur', 'Post'], t: 'Ahora voy a correos.', e: 'zu der = zur.' },
      { sol: ['Sie', 'fährt', 'jeden', 'Tag', 'zur', 'Arbeit'], t: 'Va todos los días al trabajo.', e: 'zur Arbeit.' },
      { sol: ['Wir', 'gehen', 'morgen', 'zum', 'Arzt'], t: 'Mañana vamos al médico.', e: 'zum Arzt.' }
    ]
  },

  // ---------- A1.2 L10: mit + Dativ ----------
  'mit-dativ': {
    picks: [
      { s: 'Ich fahre ___ der U-Bahn.', a: 'mit', d: ['in', 'zu'], t: 'Voy en metro.', e: 'El medio de transporte va con "mit" + dativo.' },
      { s: 'Er kommt mit ___ Bruder.', a: 'seinem', d: ['seinen', 'sein'], t: 'Viene con su hermano.', e: 'mit + dativo masculino → seinem.' },
      { s: 'Wir fahren mit ___ Bus.', a: 'dem', d: ['den', 'der'], t: 'Vamos en autobús.', e: 'der Bus → mit dem Bus.' },
      { s: 'Fährst du mit ___ Straßenbahn?', a: 'der', d: ['die', 'dem'], t: '¿Vas en tranvía?', e: 'die Straßenbahn → mit der.' },
      { s: 'Ich gehe mit ___ Freunden ins Kino.', a: 'meinen', d: ['meine', 'meiner'], t: 'Voy al cine con mis amigos.', e: 'Dativo plural → meinen Freunden.' },
      { s: 'Sie spricht mit ___ Lehrerin.', a: 'der', d: ['die', 'den'], t: 'Habla con la profesora.', e: 'mit + dativo femenino.' },
      { s: 'Wir fahren mit ___ Auto nach Italien.', a: 'dem', d: ['das', 'den'], t: 'Vamos a Italia en coche.', e: 'das Auto → mit dem Auto.' },
      { s: 'Kommst du mit ___?', a: 'mir', d: ['mich', 'ich'], t: '¿Vienes conmigo?', e: 'mit + dativo del pronombre → mir.' },
      { s: 'Er fährt mit ___ Fahrrad zur Arbeit.', a: 'dem', d: ['das', 'den'], t: 'Va en bici al trabajo.', e: 'das Fahrrad → mit dem Fahrrad.' },
      { s: 'Ich fliege mit ___ Flugzeug.', a: 'dem', d: ['das', 'den'], t: 'Voy en avión.', e: 'das Flugzeug → mit dem.' },
      { s: 'Aber ich gehe ___ Fuß.', a: 'zu', d: ['mit', 'in'], t: 'Pero voy a pie.', e: 'Excepción: "zu Fuß", no "mit dem Fuß".' },
      { s: 'Sie wohnt mit ___ Freundin zusammen.', a: 'einer', d: ['eine', 'einen'], t: 'Vive con una amiga.', e: 'mit + dativo femenino → einer.' }
    ],
    orders: [
      { sol: ['Ich', 'fahre', 'jeden', 'Tag', 'mit', 'der', 'U-Bahn'], t: 'Voy todos los días en metro.', e: 'mit + dativo femenino.' },
      { sol: ['Er', 'kommt', 'mit', 'seinem', 'Bruder'], t: 'Viene con su hermano.', e: 'mit seinem Bruder.' },
      { sol: ['Wir', 'fahren', 'mit', 'dem', 'Zug', 'nach', 'Salzburg'], t: 'Vamos a Salzburgo en tren.', e: 'mit dem Zug.' },
      { sol: ['Gehst', 'du', 'mit', 'mir', 'ins', 'Kino?'], t: '¿Vienes al cine conmigo?', e: 'mit mir.' }
    ]
  },

  // ---------- A1.2 L15: nach + Dativ ----------
  'nach-dativ': {
    picks: [
      { s: 'Wir fliegen ___ Spanien.', a: 'nach', d: ['in', 'zu'], t: 'Volamos a España.', e: 'Los países sin artículo llevan "nach".' },
      { s: 'Ich fahre ___ Wien.', a: 'nach', d: ['in', 'zu'], t: 'Voy a Viena.', e: 'Las ciudades llevan "nach".' },
      { s: 'Sie fährt ___ die Türkei.', a: 'in', d: ['nach', 'zu'], t: 'Ella va a Turquía.', e: 'Los países CON artículo llevan "in" + acusativo: in die Türkei.' },
      { s: 'Gehst du schon ___ Hause?', a: 'nach', d: ['zu', 'in'], t: '¿Ya te vas a casa?', e: 'Fórmula fija: nach Hause (movimiento).' },
      { s: 'Er fährt morgen ___ Italien.', a: 'nach', d: ['in', 'zu'], t: 'Mañana va a Italia.', e: 'País sin artículo → nach.' },
      { s: 'Wir ziehen ___ Graz.', a: 'nach', d: ['in', 'zu'], t: 'Nos mudamos a Graz.', e: 'Ciudad → nach.' },
      { s: 'Ich bin schon ___ Hause.', a: 'zu', d: ['nach', 'in'], t: 'Ya estoy en casa.', e: 'Estar en casa es "zu Hause"; ir a casa es "nach Hause".' },
      { s: 'Fährst du ___ Schweiz?', a: 'in die', d: ['nach', 'zu der'], t: '¿Vas a Suiza?', e: 'die Schweiz lleva artículo → in die Schweiz.' },
      { s: 'Der Zug fährt ___ München.', a: 'nach', d: ['in', 'zu'], t: 'El tren va a Múnich.', e: 'Ciudad → nach.' },
      { s: 'Sie reist ___ Japan.', a: 'nach', d: ['in', 'zu'], t: 'Viaja a Japón.', e: 'País sin artículo → nach.' },
      { s: 'Wir fahren ___ Norden.', a: 'nach', d: ['in', 'zu'], t: 'Vamos hacia el norte.', e: 'Los puntos cardinales llevan "nach".' },
      { s: 'Ich gehe jetzt ___ Bäcker.', a: 'zum', d: ['nach', 'in'], t: 'Ahora voy a la panadería.', e: 'Con personas y tiendas se usa "zu": zum Bäcker.' }
    ],
    orders: [
      { sol: ['Wir', 'fliegen', 'im', 'Sommer', 'nach', 'Spanien'], t: 'En verano volamos a España.', e: 'nach + país sin artículo.' },
      { sol: ['Ich', 'fahre', 'morgen', 'nach', 'Wien'], t: 'Mañana voy a Viena.', e: 'nach + ciudad.' },
      { sol: ['Gehst', 'du', 'schon', 'nach', 'Hause?'], t: '¿Ya te vas a casa?', e: 'nach Hause (movimiento).' },
      { sol: ['Der', 'Zug', 'fährt', 'nach', 'Salzburg'], t: 'El tren va a Salzburgo.', e: 'nach + ciudad.' }
    ]
  },

  // ---------- A1.2 L14: für + Akkusativ ----------
  'fur-akkusativ': {
    picks: [
      { s: 'Das Geschenk ist ___ dich.', a: 'für', d: ['zu', 'mit'], t: 'El regalo es para ti.', e: '"für" siempre con acusativo: für dich.' },
      { s: 'Ich suche etwas für ___ Bruder.', a: 'meinen', d: ['mein', 'meinem'], t: 'Busco algo para mi hermano.', e: 'für + acusativo masculino → meinen.' },
      { s: 'Das ist ein Buch für ___ Kinder.', a: 'die', d: ['den', 'dem'], t: 'Es un libro para niños.', e: 'Plural en acusativo → die.' },
      { s: 'Ich kaufe eine Karte für ___ Freundin.', a: 'meine', d: ['meiner', 'meinen'], t: 'Compro una postal para mi amiga.', e: 'für + acusativo femenino → meine.' },
      { s: 'Was kann ich für ___ tun?', a: 'Sie', d: ['Ihnen', 'Ihr'], t: '¿Qué puedo hacer por usted?', e: 'für + acusativo formal → Sie.' },
      { s: 'Der Kuchen ist für ___.', a: 'uns', d: ['wir', 'unser'], t: 'El pastel es para nosotros.', e: 'Acusativo de wir → uns.' },
      { s: 'Ich habe ein Geschenk für ___ Mutter.', a: 'meine', d: ['meiner', 'meinen'], t: 'Tengo un regalo para mi madre.', e: 'Femenino en acusativo → meine.' },
      { s: 'Das ist zu teuer für ___.', a: 'mich', d: ['mir', 'ich'], t: 'Eso es demasiado caro para mí.', e: 'für mich (acusativo).' },
      { s: 'Er arbeitet für ___ Firma.', a: 'eine', d: ['einer', 'einen'], t: 'Trabaja para una empresa.', e: 'Femenino en acusativo → eine.' },
      { s: 'Ich habe eine Frage für ___.', a: 'dich', d: ['dir', 'du'], t: 'Tengo una pregunta para ti.', e: 'für dich.' },
      { s: 'Das Zimmer ist für ___ Gast.', a: 'einen', d: ['ein', 'einem'], t: 'La habitación es para un invitado.', e: 'Masculino en acusativo → einen.' },
      { s: 'Danke für ___ Hilfe!', a: 'die', d: ['der', 'dem'], t: '¡Gracias por la ayuda!', e: 'für + acusativo femenino → die Hilfe.' }
    ],
    orders: [
      { sol: ['Das', 'Geschenk', 'ist', 'für', 'dich'], t: 'El regalo es para ti.', e: 'für + acusativo.' },
      { sol: ['Ich', 'suche', 'etwas', 'für', 'meinen', 'Bruder'], t: 'Busco algo para mi hermano.', e: 'für meinen Bruder.' },
      { sol: ['Vielen', 'Dank', 'für', 'die', 'Einladung!'], t: '¡Muchas gracias por la invitación!', e: 'Danke für + acusativo.' },
      { sol: ['Das', 'ist', 'ein', 'Buch', 'für', 'Kinder'], t: 'Es un libro para niños.', e: 'für + plural en acusativo.' }
    ]
  },

  // ---------- A2.1 L7: repaso de preposiciones de lugar ----------
  'lokale-praep-wdh': {
    picks: [
      { s: 'Wir ziehen nächsten Monat ___ Graz.', a: 'nach', d: ['zu', 'in'], t: 'El mes que viene nos mudamos a Graz.', e: 'Ciudad como destino → nach.' },
      { s: 'Ich wohne vorübergehend ___ meiner Schwester.', a: 'bei', d: ['mit', 'zu'], t: 'Vivo temporalmente en casa de mi hermana.', e: 'bei + persona.' },
      { s: 'Der Schlüssel ist ___ Vermieter.', a: 'vom', d: ['von', 'zum'], t: 'La llave es del casero.', e: 'von dem = vom (masculino).' },
      { s: 'Ich komme gerade ___ der Arbeit.', a: 'von', d: ['aus', 'zu'], t: 'Vengo ahora mismo del trabajo.', e: 'von + dativo para la procedencia desde una actividad.' },
      { s: 'Wir fahren ___ dem Zug.', a: 'mit', d: ['in', 'bei'], t: 'Vamos en tren.', e: 'mit + dativo para el medio de transporte.' },
      { s: 'Er kommt ___ Italien.', a: 'aus', d: ['von', 'nach'], t: 'Es de Italia.', e: 'Origen (país) → aus.' },
      { s: 'Gehen wir ___ Bäcker?', a: 'zum', d: ['nach', 'in'], t: '¿Vamos a la panadería?', e: 'zu dem = zum.' },
      { s: 'Sie arbeitet ___ einer Schule.', a: 'in', d: ['bei', 'zu'], t: 'Trabaja en un colegio.', e: 'Edificio concreto → in + dativo.' },
      { s: 'Ich fahre ___ meinen Eltern.', a: 'zu', d: ['bei', 'nach'], t: 'Voy a casa de mis padres.', e: 'Movimiento hacia personas → zu + dativo.' },
      { s: 'Wir kommen gerade ___ dem Kino.', a: 'aus', d: ['von', 'zu'], t: 'Acabamos de salir del cine.', e: 'Salir de dentro de un sitio → aus.' },
      { s: 'Der Bus fährt ___ Bahnhof.', a: 'zum', d: ['nach', 'in'], t: 'El autobús va a la estación.', e: 'zum Bahnhof.' },
      { s: 'Sie wohnt ___ Wien.', a: 'in', d: ['nach', 'zu'], t: 'Vive en Viena.', e: 'Residencia → in.' }
    ],
    orders: [
      { sol: ['Wir', 'ziehen', 'nächsten', 'Monat', 'nach', 'Graz'], t: 'El mes que viene nos mudamos a Graz.', e: 'nach + ciudad.' },
      { sol: ['Ich', 'wohne', 'im', 'Moment', 'bei', 'meiner', 'Schwester'], t: 'Ahora mismo vivo en casa de mi hermana.', e: 'bei + persona.' },
      { sol: ['Der', 'Schlüssel', 'ist', 'vom', 'Vermieter'], t: 'La llave es del casero.', e: 'von dem = vom.' },
      { sol: ['Wir', 'fahren', 'mit', 'dem', 'Zug', 'nach', 'Linz'], t: 'Vamos a Linz en tren.', e: 'mit + medio, nach + destino.' }
    ]
  },

  // ---------- A2.1 L8: gegenüber / bis zu / an … vorbei ----------
  'gegenueber-biszu': {
    picks: [
      { s: 'Das Hotel ist ___ dem Bahnhof.', a: 'gegenüber', d: ['durch', 'entlang'], t: 'El hotel está enfrente de la estación.', e: '"gegenüber" + dativo.' },
      { s: 'Gehen Sie ___ Ampel und dann links.', a: 'bis zur', d: ['bis zum', 'bis'], t: 'Vaya hasta el semáforo y luego a la izquierda.', e: 'die Ampel → bis zur Ampel.' },
      { s: 'Fahren Sie an der Kirche ___.', a: 'vorbei', d: ['entlang', 'durch'], t: 'Pase por delante de la iglesia.', e: '"an … vorbei": vorbei va al final.' },
      { s: 'Gehen Sie ___ Kreuzung.', a: 'bis zur', d: ['bis zum', 'bis'], t: 'Vaya hasta el cruce.', e: 'die Kreuzung → bis zur.' },
      { s: 'Die Apotheke ist ___ der Post.', a: 'gegenüber', d: ['entlang', 'durch'], t: 'La farmacia está enfrente de correos.', e: 'gegenüber + dativo femenino.' },
      { s: 'Fahren Sie ___ Supermarkt und dann rechts.', a: 'bis zum', d: ['bis zur', 'bis'], t: 'Vaya hasta el supermercado y luego a la derecha.', e: 'der Supermarkt → bis zum.' },
      { s: 'Gehen Sie an dem Park ___.', a: 'vorbei', d: ['entlang', 'gegenüber'], t: 'Pase por delante del parque.', e: 'an dem Park vorbei.' },
      { s: 'Das Café liegt ___ meiner Wohnung.', a: 'gegenüber', d: ['durch', 'bis zu'], t: 'La cafetería está enfrente de mi casa.', e: 'gegenüber + dativo.' },
      { s: 'Fahren Sie ___ Ende der Straße.', a: 'bis zum', d: ['bis zur', 'bis'], t: 'Vaya hasta el final de la calle.', e: 'das Ende → bis zum Ende.' },
      { s: 'Gehen Sie am Rathaus ___.', a: 'vorbei', d: ['entlang', 'durch'], t: 'Pase por delante del ayuntamiento.', e: 'an … vorbei.' },
      { s: 'Die Bank ist ___ der Schule.', a: 'gegenüber', d: ['entlang', 'bis zu'], t: 'El banco está enfrente del colegio.', e: 'gegenüber + dativo.' },
      { s: 'Fahren Sie ___ dritten Ampel.', a: 'bis zur', d: ['bis zum', 'bis'], t: 'Vaya hasta el tercer semáforo.', e: 'die Ampel → bis zur.' }
    ],
    orders: [
      { sol: ['Das', 'Hotel', 'ist', 'gegenüber', 'dem', 'Bahnhof'], t: 'El hotel está enfrente de la estación.', e: 'gegenüber + dativo.' },
      { sol: ['Gehen', 'Sie', 'bis', 'zur', 'Ampel', 'und', 'dann', 'links'], t: 'Vaya hasta el semáforo y luego a la izquierda.', e: 'bis zur Ampel.' },
      { sol: ['Fahren', 'Sie', 'an', 'der', 'Kirche', 'vorbei'], t: 'Pase por delante de la iglesia.', e: 'an … vorbei, con vorbei al final.' },
      { sol: ['Die', 'Apotheke', 'ist', 'gegenüber', 'der', 'Post'], t: 'La farmacia está enfrente de correos.', e: 'gegenüber der Post.' }
    ]
  },

  // ---------- A2.1 L8: durch / entlang ----------
  'durch-entlang': {
    picks: [
      { s: 'Gehen Sie ___ den Park, dann sehen Sie das Hotel.', a: 'durch', d: ['entlang', 'gegenüber'], t: 'Vaya por el parque y verá el hotel.', e: '"durch" + acusativo y va DELANTE del sustantivo.' },
      { s: 'Gehen Sie die Straße ___.', a: 'entlang', d: ['durch', 'bis zu'], t: 'Siga la calle.', e: '"entlang" va DETRÁS del sustantivo, con acusativo: die Straße entlang.' },
      { s: 'Das Hotel ist ___ dem Bahnhof.', a: 'gegenüber', d: ['durch', 'entlang'], t: 'El hotel está enfrente de la estación.', e: '"gegenüber" + dativo.' },
      { s: 'Fahren Sie ___ zur Ampel und dann links.', a: 'bis', d: ['durch', 'entlang'], t: 'Vaya hasta el semáforo y luego a la izquierda.', e: '"bis zu" + dativo: bis zur Ampel.' },
      { s: 'Gehen Sie den Fluss ___.', a: 'entlang', d: ['durch', 'bis'], t: 'Vaya a lo largo del río.', e: 'entlang va después (den Fluss entlang).' },
      { s: 'Der Zug fährt ___ den Tunnel.', a: 'durch', d: ['entlang', 'bis'], t: 'El tren va por el túnel.', e: 'Atravesando algo → durch.' },
      { s: 'Wir gehen ___ die Stadt spazieren.', a: 'durch', d: ['entlang', 'gegenüber'], t: 'Paseamos por la ciudad.', e: 'durch + acusativo femenino: durch die Stadt.' },
      { s: 'Fahren Sie den Ring ___.', a: 'entlang', d: ['durch', 'bis'], t: 'Siga por el Ring.', e: 'entlang detrás del sustantivo.' },
      { s: 'Gehen Sie ___ das Tor.', a: 'durch', d: ['entlang', 'gegenüber'], t: 'Pase por la puerta.', e: 'durch + acusativo neutro: durch das Tor.' },
      { s: 'Der Weg geht ___ den Wald.', a: 'durch', d: ['entlang', 'bis'], t: 'El camino atraviesa el bosque.', e: 'durch den Wald (acusativo masculino).' },
      { s: 'Gehen Sie diese Gasse ___.', a: 'entlang', d: ['durch', 'gegenüber'], t: 'Siga por esta callejuela.', e: 'diese Gasse entlang.' },
      { s: 'Wir laufen ___ den Garten.', a: 'durch', d: ['entlang', 'bis'], t: 'Cruzamos el jardín andando.', e: 'durch + acusativo.' }
    ],
    orders: [
      { sol: ['Gehen', 'Sie', 'durch', 'den', 'Park'], t: 'Vaya por el parque.', e: 'durch + acusativo, delante del sustantivo.' },
      { sol: ['Gehen', 'Sie', 'die', 'Straße', 'entlang'], t: 'Siga la calle.', e: 'entlang va detrás del sustantivo.' },
      { sol: ['Der', 'Zug', 'fährt', 'durch', 'einen', 'langen', 'Tunnel'], t: 'El tren pasa por un túnel largo.', e: 'durch einen Tunnel.' },
      { sol: ['Wir', 'gehen', 'den', 'Fluss', 'entlang'], t: 'Vamos a lo largo del río.', e: 'den Fluss entlang.' }
    ]
  }
};
