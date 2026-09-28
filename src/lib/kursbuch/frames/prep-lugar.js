// TEMA: preposiciones de lugar y de compañía/medio con caso fijo.
// aus, in, bei, mit, nach, zu, von + Dativ · für, ohne, durch + Akkusativ.
// Aquí el caso no depende de si hay movimiento: cada preposición lleva el suyo
// siempre, así que lo práctico es aprenderlas en bloque.

export const PREP_LUGAR = {
  // ---------- A1.1 L1: aus / in ----------
  'lokale-prapositionen-aus-in': {
    reserva: ['nach', 'zu', 'von'],
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
      { s: 'Das Wort kommt ___ dem Lateinischen.', a: 'aus', d: ['in', 'von'], t: 'La palabra viene del latín.', e: 'Procedencia → aus + dativo.' },
      { s: 'Ich komme ___ Spanien und wohne ___ Wien.', a: 'aus … in', d: ['in … aus', 'aus … aus'], t: 'Soy de España y vivo en Viena.', e: '"aus" para el origen, "in" para el sitio donde vives.' },
      { s: 'Meine Kollegin kommt ___ der Türkei.', a: 'aus', d: ['in', 'von'], t: 'Mi compañera es de Turquía.', e: 'Países con artículo: aus der Türkei.' },
      { s: 'Wir wohnen jetzt ___ Graz.', a: 'in', d: ['aus', 'nach'], t: 'Ahora vivimos en Graz.', e: '"in" + ciudad para el lugar de residencia.' },
      { s: 'Woher kommst du? – ___ Polen.', a: 'Aus', d: ['In', 'Nach'], t: '¿De dónde eres? – De Polonia.', e: 'Responder a "woher" siempre con "aus".' },
      { s: 'Er arbeitet ___ der Schweiz.', a: 'in', d: ['aus', 'nach'], t: 'Trabaja en Suiza.', e: 'Lugar donde se trabaja → in + dativo.' },
      { s: 'Die Familie kommt ___ Syrien.', a: 'aus', d: ['in', 'von'], t: 'La familia es de Siria.', e: 'País sin artículo: aus Syrien.' },
      { s: 'Mein Bruder lebt ___ den USA.', a: 'in', d: ['aus', 'nach'], t: 'Mi hermano vive en Estados Unidos.', e: '"die USA" lleva artículo: in den USA.' },
      { s: 'Kommen Sie auch ___ Wien?', a: 'aus', d: ['in', 'nach'], t: '¿Usted también es de Viena?', e: 'Origen → aus.' },
      { s: 'Meine Nachbarin kommt ___ Rumänien.', a: 'aus', d: ['aus der', 'in'], t: 'Mi vecina es de Rumanía.', e: 'Rumänien no lleva artículo: aus Rumänien, sin nada en medio.' },
      { s: 'Er kommt ___ Iran.', a: 'aus dem', d: ['aus', 'aus der'], t: 'Es de Irán.', e: '"der Iran" es masculino y lleva artículo: aus dem Iran.' },
      { s: 'Wir kommen ___ Slowakei.', a: 'aus der', d: ['aus', 'aus dem'], t: 'Somos de Eslovaquia.', e: '"die Slowakei" es femenino: aus der Slowakei.' },
      { s: 'Sie arbeitet ___ Niederlanden.', a: 'in den', d: ['in', 'in der'], t: 'Trabaja en los Países Bajos.', e: '"die Niederlande" es plural: in den Niederlanden, con -n.' },
      { s: 'Mein Onkel lebt ___ Brasilien.', a: 'in', d: ['in dem', 'in der'], t: 'Mi tío vive en Brasil.', e: 'Brasilien sin artículo: in Brasilien.' },
      { s: 'Die Familie kommt ___ Marokko.', a: 'aus', d: ['aus dem', 'aus der'], t: 'La familia es de Marruecos.', e: 'Marokko sin artículo.' },
      { s: 'Wir waren letztes Jahr ___ Schweiz.', a: 'in der', d: ['in', 'in dem'], t: 'El año pasado estuvimos en Suiza.', e: '"die Schweiz" es femenino: in der Schweiz.' },
      { s: 'Mein Kollege kommt ___ Griechenland.', a: 'aus', d: ['aus der', 'aus dem'], t: 'Mi compañero es de Grecia.', e: 'Griechenland sin artículo.' },
      { s: 'Sie studiert ___ USA.', a: 'in den', d: ['in', 'in der'], t: 'Estudia en Estados Unidos.', e: '"die USA" es plural: in den USA.' },
      { s: 'Ich fliege morgen ___ Japan.', a: 'nach', d: ['in', 'aus'], t: 'Mañana vuelo a Japón.', e: 'Con movimiento y país sin artículo se usa "nach", no "in".' },
      { s: 'Er zieht ___ Türkei.', a: 'in die', d: ['nach', 'in der'], t: 'Se muda a Turquía.', e: 'Con artículo y movimiento: in die Türkei, en acusativo.' },
      { s: 'Meine Freundin kommt ___ Kroatien.', a: 'aus', d: ['aus der', 'aus dem'], t: 'Mi amiga es de Croacia.', e: 'Kroatien sin artículo.' },
      { s: 'Meine Kollegin kommt ___ der Slowakei.', a: 'aus', d: ['in', 'nach'], t: 'Mi compañera es de Eslovaquia.', e: 'Los países con artículo llevan aus + dativo: aus der Slowakei.' },
      { s: 'Seit März wohnen wir ___ Innsbruck.', a: 'in', d: ['aus', 'nach'], t: 'Desde marzo vivimos en Innsbruck.', e: 'in + ciudad para decir dónde vives.' },
      { s: 'Er kommt ___ Ägypten und lebt in Linz.', a: 'aus', d: ['in', 'bei'], t: 'Él es de Egipto y vive en Linz.', e: 'aus + país sin artículo: aus Ägypten.' },
      { s: 'Ich komme ___ Spanien, genauer gesagt aus Valencia.', a: 'aus', d: ['in', 'von'], t: 'Soy de España, más concretamente de Valencia.', e: 'El origen se dice con aus.' },
      { s: 'Meine Cousine wohnt seit zehn Jahren ___ Wien.', a: 'in', d: ['aus', 'nach'], t: 'Mi prima vive en Viena desde hace diez años.', e: 'El lugar donde se vive: in.' },
      { s: 'Der Zug um acht kommt ___ München und hat Verspätung.', a: 'aus', d: ['in', 'zu'], t: 'El tren de las ocho viene de Múnich y lleva retraso.', e: 'Procedencia: aus.' },
      { s: 'Wir arbeiten ___ einem winzigen Büro im dritten Stock.', a: 'in', d: ['aus', 'nach'], t: 'Trabajamos en una oficina diminuta del tercer piso.', e: 'in + dativo para decir dónde.' },
      { s: 'Meine Mutter kommt ___ der Türkei, mein Vater aus Graz.', a: 'aus', d: ['in', 'von'], t: 'Mi madre es de Turquía y mi padre de Graz.', e: 'Con países que llevan artículo: aus der Türkei.' },
      { s: 'Papa ist gerade ___ der Küche und flucht.', a: 'in', d: ['aus', 'nach'], t: 'Papá está ahora en la cocina, echando pestes.', e: 'in + dativo: in der Küche.' },
      { s: 'Dieser Käse kommt ___ Österreich, der da aus Frankreich.', a: 'aus', d: ['in', 'nach'], t: 'Este queso es de Austria; aquel, de Francia.', e: 'Procedencia: aus.' },
      { s: 'Die Kinder spielen ___ Garten, man hört sie bis hierher.', a: 'im', d: ['aus', 'aus dem'], t: 'Los niños juegan en el jardín, se les oye hasta aquí.', e: 'in dem se junta en im.' }
    ],
    orders: [
      { sol: ['Ich', 'komme', 'aus', 'Spanien', 'und', 'wohne', 'in', 'Wien'], t: 'Soy de España y vivo en Viena.', e: 'aus para el origen, in para la residencia.' },
      { sol: ['Sie', 'kommt', 'aus', 'der', 'Schweiz'], t: 'Ella viene de Suiza.', e: 'País con artículo → dativo.' },
      { sol: ['Wir', 'leben', 'seit', 'zwei', 'Jahren', 'in', 'Graz'], t: 'Vivimos en Graz desde hace dos años.', e: 'in + ciudad.' },
      { sol: ['Woher', 'kommen', 'Sie?'], t: '¿De dónde es usted?', e: 'La pregunta por el origen.' }
    ],
    clozes: [
      { txt: 'Ich komme ___ Spanien, aber ich wohne seit zwei Jahren ___ Wien. Meine Kollegin kommt ___ der Ukraine und arbeitet ___ einem Krankenhaus.', a: ['aus', 'in', 'aus', 'in'], extra: ['von', 'nach', 'bei', 'an'], t: 'Soy de España, pero vivo desde hace dos años en Viena. Mi compañera es de Ucrania y trabaja en un hospital.', e: '"aus" contesta a woher (el origen) y "in" a wo (dónde estás). Fíjate en el artículo: aus der Ukraine.' },
      { txt: 'Im Kurs sind wir aus aller Welt: Ana kommt ___ Portugal, Dragan ___ Slowakei, Reza ___ Iran und Mei ___ China. Wir alle wohnen jetzt ___ Wien.', a: ['aus', 'aus der', 'aus dem', 'aus', 'in'], extra: ['von', 'bei', 'nach'], t: 'En el curso somos de todo el mundo: Ana es de Portugal, Dragan de Eslovaquia, Reza de Irán y Mei de China. Ahora vivimos todos en Viena.', e: 'Los cuatro países en la misma frase: sin artículo va solo "aus"; die Slowakei pide "aus der" y der Iran pide "aus dem".' },
      { txt: 'Wohin fahrt ihr im Sommer? – Zuerst ___ Italien, dann ___ Schweiz und am Ende ___ Niederlande. Und ihr? – Wir bleiben ___ Österreich.', a: ['nach', 'in die', 'in die', 'in'], extra: ['aus', 'zu', 'an die'], t: '¿Adónde vais en verano? – Primero a Italia, luego a Suiza y al final a los Países Bajos. ¿Y vosotros? – Nosotros nos quedamos en Austria.', e: 'Con movimiento: "nach" si el país no lleva artículo, "in die" si lo lleva. Y sin movimiento, "in" a secas.' }
    ]
  },

  // ---------- A1.1 L3: bei ----------
  'praposition-bei': {
    reserva: ['von', 'aus', 'nach'],
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
      { s: 'Ich habe einen Termin ___ der Ärztin.', a: 'bei', d: ['in', 'zu'], t: 'Tengo cita con la médica.', e: 'bei + persona.' },
      { s: 'Dein Koffer steht noch bei ___ im Flur.', a: 'mir', d: ['mich', 'ich'], t: 'Tu maleta sigue en mi entrada.', e: 'bei + dativo del pronombre: bei mir.' },
      { s: 'Ich wohne noch bei ___ Eltern, aber ich suche schon.', a: 'meinen', d: ['meine', 'meiner'], t: 'Todavía vivo con mis padres, pero ya estoy buscando.', e: 'bei + dativo plural: meinen Eltern.' },
      { s: 'Sie hat drei Jahre ___ einer Wiener Bank gearbeitet.', a: 'bei', d: ['zu', 'in'], t: 'Trabajó tres años en un banco vienés.', e: 'La empresa donde uno trabaja va con bei.' },
      { s: 'Treffen wir uns um acht ___ mir?', a: 'bei', d: ['zu', 'in'], t: '¿Quedamos a las ocho en mi casa?', e: 'Estar en casa de alguien: bei mir.' },
      { s: 'Bei ___ Wetter gehe ich keinen Schritt vor die Tür.', a: 'diesem', d: ['dieses', 'diese'], t: 'Con este tiempo no doy ni un paso fuera de casa.', e: 'bei + dativo neutro: diesem Wetter.' },
      { s: 'Er war den ganzen Nachmittag bei ___ Zahnarzt.', a: 'seinem', d: ['seinen', 'seiner'], t: 'Estuvo toda la tarde en el dentista.', e: 'bei + dativo masculino: seinem Zahnarzt.' },
      { s: 'Sonntags sind wir immer bei ___ Großeltern zum Essen.', a: 'meinen', d: ['meine', 'meiner'], t: 'Los domingos comemos siempre en casa de mis abuelos.', e: 'bei + dativo plural: meinen Großeltern.' },
      { s: 'Bei ___ Firma hast du dich eigentlich beworben?', a: 'welcher', d: ['welche', 'welchen'], t: '¿En qué empresa te has presentado, por cierto?', e: 'bei + dativo femenino: welcher Firma.' },
      { s: '___ schönem Wetter frühstücken wir auf dem Balkon.', a: 'Bei', d: ['Mit', 'In'], t: 'Cuando hace bueno desayunamos en el balcón.', e: 'bei también sirve para las circunstancias: bei schönem Wetter.' },
      { s: 'Der Zweitschlüssel? Der liegt bei ___ Nachbarin.', a: 'der', d: ['die', 'dem'], t: '¿La copia de la llave? Está en casa de la vecina.', e: 'bei + dativo femenino: der Nachbarin.' }
    ],
    orders: [
      { sol: ['Sie', 'arbeitet', 'bei', 'einer', 'großen', 'Firma'], t: 'Trabaja en una empresa grande.', e: 'bei + dativo.' },
      { sol: ['Ich', 'wohne', 'im', 'Moment', 'bei', 'meiner', 'Schwester'], t: 'Ahora mismo vivo en casa de mi hermana.', e: 'bei + persona en dativo.' },
      { sol: ['Er', 'war', 'gestern', 'beim', 'Arzt'], t: 'Ayer estuvo en el médico.', e: 'bei dem = beim.' },
      { sol: ['Wir', 'übernachten', 'bei', 'Freunden'], t: 'Dormimos en casa de unos amigos.', e: 'bei + dativo plural.' }
    ],
    clozes: [
      { txt: 'Ich arbeite ___ einer Firma in Wien. Meine Schwester arbeitet ___ Arzt, und mein Vater war früher ___ der Post.', a: ['bei', 'beim', 'bei'], extra: ['in', 'bei dem', 'an'], t: 'Trabajo en una empresa de Viena. Mi hermana trabaja en la consulta de un médico, y mi padre trabajaba antes en correos.', e: '"bei" para el sitio donde trabajas, siempre con dativo; bei + dem se junta en "beim".' }
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
      { s: 'Ich kann ___ Brille nichts lesen.', a: 'ohne', d: ['mit', 'von'], t: 'Sin gafas no puedo leer nada.', e: 'ohne + acusativo, normalmente sin artículo.' },
      { s: 'Ich nehme den Kaffee ___ Milch.', a: 'mit', d: ['ohne', 'für'], t: 'Tomo el café con leche.', e: '"mit" + dativo: mit Milch.' },
      { s: 'Für mich bitte ___ Zucker.', a: 'ohne', d: ['mit', 'für'], t: 'Para mí sin azúcar, por favor.', e: '"ohne" + acusativo.' },
      { s: 'Ein Schnitzel ___ Salat, bitte.', a: 'mit', d: ['ohne', 'von'], t: 'Un escalope con ensalada, por favor.', e: 'mit + dativo.' },
      { s: 'Ich esse das Brot ___ Butter.', a: 'ohne', d: ['mit dem', 'für'], t: 'Me como el pan sin mantequilla.', e: 'ohne + acusativo, sin artículo aquí.' },
      { s: 'Fährst du ___ dem Auto oder zu Fuß?', a: 'mit', d: ['ohne', 'für'], t: '¿Vas en coche o a pie?', e: 'El medio de transporte va con "mit" + dativo.' },
      { s: 'Ich trinke den Kaffee ohne ___.', a: 'Zucker', d: ['Zuckers', 'dem Zucker'], t: 'Tomo el café sin azúcar.', e: 'ohne + acusativo; con incontables va sin artículo.' },
      { s: 'Ein Schnitzel mit ___ Salat, bitte.', a: 'einem', d: ['einen', 'ein'], t: 'Un escalope con ensalada, por favor.', e: 'mit pide dativo: einem Salat.' },
      { s: 'Ich nehme die Suppe ohne ___ Brot.', a: 'das', d: ['dem', 'der'], t: 'Tomo la sopa sin el pan.', e: 'ohne pide acusativo: das Brot.' },
      { s: 'Er kommt heute mit ___ Freundin.', a: 'seiner', d: ['seine', 'seinen'], t: 'Hoy viene con su novia.', e: 'mit + dativo femenino: seiner.' },
      { s: 'Einen Kaffee mit ___ Milch, bitte.', a: 'wenig', d: ['wenigem', 'weniger'], t: 'Un café con poca leche, por favor.', e: 'Delante de un incontable, wenig no cambia.' },
      { s: 'Ich esse den Salat ohne ___ Zwiebel.', a: 'die', d: ['der', 'den'], t: 'Me como la ensalada sin la cebolla.', e: 'ohne + acusativo: die Zwiebel.' },
      { s: 'Fahren wir mit ___ Auto oder mit dem Zug?', a: 'dem', d: ['das', 'den'], t: '¿Vamos en coche o en tren?', e: 'mit + dativo: dem Auto.' },
      { s: 'Ein Glas Wasser ohne ___, bitte.', a: 'Eis', d: ['dem Eis', 'Eises'], t: 'Un vaso de agua sin hielo, por favor.', e: 'ohne + acusativo, sin artículo en incontables.' }
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
      { s: 'Wir müssen ___ Amt gehen.', a: 'zum', d: ['zur', 'zu'], t: 'Tenemos que ir a la oficina.', e: 'das Amt → zum Amt.' },
      { s: 'Ich gehe ___ Bäckerei.', a: 'zur', d: ['zum', 'nach'], t: 'Voy a la panadería.', e: 'zu + der = zur, con establecimiento femenino.' },
      { s: 'Er fährt ___ Flughafen.', a: 'zum', d: ['zur', 'nach'], t: 'Va al aeropuerto.', e: 'zu + dem = zum.' },
      { s: 'Kommst du mit ___ Markt?', a: 'zum', d: ['zur', 'nach'], t: '¿Vienes al mercado?', e: 'der Markt → zum Markt.' },
      { s: 'Wir müssen noch ___ Bank.', a: 'zur', d: ['zum', 'nach'], t: 'Todavía tenemos que ir al banco.', e: 'die Bank → zur Bank.' },
      { s: 'Wie komme ich am besten ___ Post?', a: 'zur', d: ['zum', 'zu der'], t: '¿Cómo llego mejor a correos?', e: 'zu + der = zur, femenino.' },
      { s: 'Ich gehe morgen ___ Arzt.', a: 'zum', d: ['zur', 'zu dem'], t: 'Mañana voy al médico.', e: 'zu + dem = zum, masculino.' },
      { s: 'Fahren Sie bitte ___ Hauptbahnhof.', a: 'zum', d: ['zur', 'zu die'], t: 'Vaya a la estación central, por favor.', e: 'der Bahnhof → zum.' },
      { s: 'Sie geht seit September ___ Schule.', a: 'zur', d: ['zum', 'zu die'], t: 'Va al colegio desde septiembre.', e: 'die Schule → zur.' },
      { s: 'Der Weg ___ Museum ist sehr kurz.', a: 'zum', d: ['zur', 'zu das'], t: 'El camino al museo es muy corto.', e: 'das Museum → zum.' },
      { s: 'Ich muss morgen früh zu ___ Arzt, um sieben schon.', a: 'meinem', d: ['meinen', 'meiner'], t: 'Mañana tengo que ir al médico, ya a las siete.', e: 'zu + dativo masculino: meinem Arzt.' },
      { s: 'Kommst du am Samstag mit zu ___ Party von Lena?', a: 'der', d: ['die', 'dem'], t: '¿Te vienes el sábado a la fiesta de Lena?', e: 'zu + dativo femenino: der Party.' },
      { s: 'Am Wochenende fahren wir zu ___ Freunden nach Graz.', a: 'unseren', d: ['unsere', 'unserer'], t: 'El fin de semana vamos a Graz, a casa de nuestros amigos.', e: 'zu + dativo plural: unseren Freunden.' },
      { s: 'Sie muss gleich zu ___ Chefin, das klingt nicht gut.', a: 'ihrer', d: ['ihre', 'ihren'], t: 'Ahora tiene que ir a ver a su jefa, y eso no pinta bien.', e: 'zu + dativo femenino: ihrer Chefin.' },
      { s: '___ Frühstück gibt es bei uns immer Eier.', a: 'Zum', d: ['Nach dem', 'Im'], t: 'En casa siempre hay huevos para desayunar.', e: 'zu dem se junta en zum: zum Frühstück.' },
      { s: 'Ich bringe den Hund schnell zu ___ Nachbarin.', a: 'der', d: ['die', 'dem'], t: 'Llevo un momento el perro a la vecina.', e: 'zu + dativo femenino: der Nachbarin.' },
      { s: 'Gehst du heute noch ___ Kurs oder schwänzt du?', a: 'zum', d: ['nach', 'ins'], t: '¿Vas hoy al curso o haces pellas?', e: 'zu dem Kurs se contrae en zum Kurs.' },
      { s: 'Wir laden dich herzlich zu ___ Fest ein.', a: 'unserem', d: ['unser', 'unseren'], t: 'Te invitamos de corazón a nuestra fiesta.', e: 'zu + dativo neutro: unserem Fest.' }
    ],
    orders: [
      { sol: ['Wie', 'komme', 'ich', 'zum', 'Bahnhof?'], t: '¿Cómo llego a la estación?', e: 'zu dem = zum.' },
      { sol: ['Ich', 'gehe', 'jetzt', 'zur', 'Post'], t: 'Ahora voy a correos.', e: 'zu der = zur.' },
      { sol: ['Sie', 'fährt', 'jeden', 'Tag', 'zur', 'Arbeit'], t: 'Va todos los días al trabajo.', e: 'zur Arbeit.' },
      { sol: ['Wir', 'gehen', 'morgen', 'zum', 'Arzt'], t: 'Mañana vamos al médico.', e: 'zum Arzt.' }
    ],
    clozes: [
      { txt: 'Heute muss ich noch ___ Arzt, dann ___ Post und am Schluss ___ meiner Schwester. Danach fahre ich ___ Hause.', a: ['zum', 'zur', 'zu', 'nach'], extra: ['bei', 'aus', 'von'], t: 'Hoy todavía tengo que ir al médico, luego a correos y al final a casa de mi hermana. Después me voy a casa.', e: '"zu" siempre con dativo: zu dem = zum, zu der = zur. Pero "a casa" es la excepción: nach Hause.' }
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
      { s: 'Sie wohnt mit ___ Freundin zusammen.', a: 'einer', d: ['eine', 'einen'], t: 'Vive con una amiga.', e: 'mit + dativo femenino → einer.' },
      { s: 'Welchen Fall verlangt „mit“?', a: 'el dativo', d: ['el acusativo', 'el genitivo'], t: '«mit» rige dativo.', e: 'Siempre, sin excepciones.' },
      { s: 'Welche Präpositionen gehen auch immer mit Dativ?', a: 'aus, bei, nach, von, zu', d: ['für, ohne, gegen', 'in, an, auf'], t: 'También «aus, bei, nach, von, zu».', e: 'Se aprenden de carrerilla con «mit».' },
      { s: 'Was ist die Dativform von „der“?', a: 'dem', d: ['den', 'der'], t: 'El dativo de «der» es «dem».', e: 'mit dem Bus.' },
      { s: 'Und die von „die“ (femenino)?', a: 'der', d: ['die', 'dem'], t: 'El dativo de «die» femenino es «der».', e: 'mit der U-Bahn.' },
      { s: 'Was passiert im Dativ Plural?', a: 'der artículo es den y el nombre coge -n', d: ['no cambia nada', 'sólo cambia el artículo'], t: 'El artículo es «den» y el sustantivo coge una «-n».', e: 'mit den Kindern, mit den Freunden.' },
      { s: 'Wie sagt man „a pie“?', a: 'zu Fuß', d: ['mit Fuß', 'mit dem Fuß'], t: 'Se dice «zu Fuß».', e: 'Es la excepción: no lleva «mit».' },
      { s: 'Ich gehe mit ___ Kollegen essen.', a: 'den', d: ['die', 'der'], t: 'Voy a comer con los compañeros.', e: 'Dativo plural.' },
      { s: 'Sie spricht mit ___ Nachbarn.', a: 'dem', d: ['den', 'der'], t: 'Habla con el vecino.', e: 'der Nachbar → mit dem.' },
      { s: 'Kommst du heute Abend mit ___?', a: 'uns', d: ['wir', 'unser'], t: '¿Te vienes con nosotros?', e: 'wir → dativo uns.' },
      { s: 'Warum sale mal a los españoles?', a: 'en español «con» no cambia nada detrás', d: ['porque mit tiene dos sentidos', 'por el orden'], t: 'Porque en español «con» no cambia lo que va detrás.', e: 'En alemán obliga a poner dativo.' }
    ],
    orders: [
      { sol: ['Ich', 'fahre', 'jeden', 'Tag', 'mit', 'der', 'U-Bahn'], t: 'Voy todos los días en metro.', e: 'mit + dativo femenino.' },
      { sol: ['Er', 'kommt', 'mit', 'seinem', 'Bruder'], t: 'Viene con su hermano.', e: 'mit seinem Bruder.' },
      { sol: ['Wir', 'fahren', 'mit', 'dem', 'Zug', 'nach', 'Salzburg'], t: 'Vamos a Salzburgo en tren.', e: 'mit dem Zug.' },
      { sol: ['Gehst', 'du', 'mit', 'mir', 'ins', 'Kino?'], t: '¿Vienes al cine conmigo?', e: 'mit mir.' }
    ],
    clozes: [
      { txt: 'Ich fahre ___ dem Bus zur Arbeit, meine Frau ___ der Straßenbahn. Am Wochenende fahren wir ___ den Kindern aufs Land.', a: ['mit', 'mit', 'mit'], extra: ['bei', 'zu', 'nach'], t: 'Yo voy al trabajo en autobús y mi mujer en tranvía. El fin de semana vamos al campo con los niños.', e: '"mit" siempre lleva dativo, tanto para el medio de transporte como para la compañía: dem Bus, der Straßenbahn, den Kindern (plural con -n).' }
    ]
  },

  // ---------- A1.2 L15: nach + Dativ ----------
  'nach-dativ': {
    reserva: ['bei', 'von', 'aus'],
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
      { s: 'Ich gehe jetzt ___ Bäcker.', a: 'zum', d: ['nach', 'in'], t: 'Ahora voy a la panadería.', e: 'Con personas y tiendas se usa "zu": zum Bäcker.' },
      { s: 'Im August fliegen wir ___ Griechenland.', a: 'nach', d: ['in', 'zu'], t: 'En agosto volamos a Grecia.', e: 'Países sin artículo → "nach".' },
      { s: 'Sie fährt jedes Jahr ___ die USA.', a: 'in', d: ['nach', 'zu'], t: 'Va todos los años a Estados Unidos.', e: 'Países CON artículo (die USA) → "in".' },
      { s: 'Nach der Arbeit gehe ich direkt ___ Hause.', a: 'nach', d: ['zu', 'in'], t: 'Después del trabajo me voy directo a casa.', e: '"nach Hause" es la dirección; "zu Hause" es estar allí.' },
      { s: 'Wir fahren im Winter ___ die Berge.', a: 'in', d: ['nach', 'zu'], t: 'En invierno vamos a la montaña.', e: 'Con artículo → "in".' },
      { s: 'Der Bus fährt ___ Salzburg.', a: 'nach', d: ['in', 'zu'], t: 'El autobús va a Salzburgo.', e: 'Ciudades → "nach".' },
      { s: 'Ich muss noch ___ Arzt.', a: 'zum', d: ['nach', 'in'], t: 'Todavía tengo que ir al médico.', e: 'Con personas y sitios concretos → "zu".' },
      { s: 'Fährst du morgen ___ Ukraine?', a: 'in die', d: ['nach', 'zu der'], t: '¿Vas mañana a Ucrania?', e: '"die Ukraine" lleva artículo → in die.' },
      { s: 'Wir ziehen nächsten Monat ___ Hamburg.', a: 'nach', d: ['in', 'zu'], t: 'El mes que viene nos mudamos a Hamburgo.', e: 'Ciudad sin artículo → "nach".' },
      { s: 'Geh bitte ___ Post und hol das Paket.', a: 'zur', d: ['nach', 'in'], t: 'Ve a correos y recoge el paquete.', e: 'Edificio concreto → "zu" (zu der = zur).' },
      { s: 'Sie fliegt im Mai ___ Marokko.', a: 'nach', d: ['in', 'zu'], t: 'En mayo vuela a Marruecos.', e: 'País sin artículo → "nach".' },
      { s: 'Wir fahren am Wochenende ___ Süden.', a: 'nach', d: ['in', 'zu'], t: 'El fin de semana vamos al sur.', e: 'Puntos cardinales → "nach".' },
      { s: 'Kommst du mit ___ Supermarkt?', a: 'zum', d: ['nach', 'in'], t: '¿Vienes al supermercado?', e: 'Comercio concreto → "zu".' },
      { s: 'Er ist gerade ___ Hause und kocht.', a: 'zu', d: ['nach', 'in'], t: 'Está en casa cocinando.', e: 'Estar en casa → "zu Hause", sin movimiento.' },
      { s: 'Nächstes Jahr wollen wir ___ Schweiz.', a: 'in die', d: ['nach', 'zu der'], t: 'El año que viene queremos ir a Suiza.', e: '"die Schweiz" lleva artículo → in die.' },
      { s: 'Der Zug ___ Prag fährt um zehn.', a: 'nach', d: ['in', 'zu'], t: 'El tren a Praga sale a las diez.', e: 'Ciudad → "nach".' },
      { s: 'Ich gehe kurz ___ Nachbarin.', a: 'zur', d: ['nach', 'in die'], t: 'Me acerco un momento a casa de la vecina.', e: 'Con personas → "zu".' },
      { s: 'Wir fahren im Sommer ___ Italien.', a: 'nach', d: ['in', 'zu'], t: 'En verano vamos a Italia.', e: 'nach + país sin artículo.' },
      { s: 'Ich fahre nach dem Kurs ___ Hause.', a: 'nach', d: ['zu', 'in'], t: 'Después del curso me voy a casa.', e: 'nach Hause, una expresión fija.' },
      { s: 'Dieser Zug fährt ___ Salzburg.', a: 'nach', d: ['in', 'zu'], t: 'Este tren va a Salzburgo.', e: 'nach + ciudad.' },
      { s: '___ dem Urlaub bin ich wieder da.', a: 'Nach', d: ['Zu', 'In'], t: 'Después de las vacaciones vuelvo a estar.', e: 'nach + dativo para el tiempo.' },
      { s: 'Fliegt ihr ___ Kroatien oder in die Türkei?', a: 'nach', d: ['in', 'zu'], t: '¿Voláis a Croacia o a Turquía?', e: 'nach + país sin artículo; die Türkei lleva in.' },
      { s: 'Nach ___ Arbeit fahre ich meistens direkt ins Schwimmbad.', a: 'der', d: ['die', 'dem'], t: 'Después del trabajo suelo ir directo a la piscina.', e: 'nach + dativo femenino: der Arbeit.' },
      { s: 'Im Herbst fliegen wir zum ersten Mal ___ Japan.', a: 'nach', d: ['zu', 'in'], t: 'En otoño volamos a Japón por primera vez.', e: 'Con países sin artículo se usa nach.' },
      { s: 'Nach ___ dritten Kaffee konnte ich nicht mehr schlafen.', a: 'dem', d: ['das', 'der'], t: 'Después del tercer café ya no pude dormir.', e: 'nach + dativo masculino: dem Kaffee.' },
      { s: 'Ich bin fix und fertig, ich will nur noch ___ Hause.', a: 'nach', d: ['zu', 'ins'], t: 'Estoy hecho polvo, solo quiero irme a casa.', e: 'nach Hause es una expresión fija.' },
      { s: '___ dem Kurs gehen wir alle noch ein Bier trinken.', a: 'Nach', d: ['Zu', 'Bei'], t: 'Después del curso nos vamos todos a tomar una cerveza.', e: 'nach abre la frase y el verbo va justo detrás.' },
      { s: 'Nach ___ Ferien erkennt man die halbe Klasse nicht wieder.', a: 'den', d: ['die', 'der'], t: 'Después de las vacaciones a media clase no la reconoces.', e: 'nach + dativo plural: den Ferien.' },
      { s: 'Wenn das Fieber bleibt, geh bitte ___ Arzt.', a: 'zum', d: ['nach', 'ins'], t: 'Si sigue la fiebre, ve al médico, por favor.', e: 'Con personas se usa zu, nunca nach.' },
      { s: 'Nach ___ langen Pause hatte keiner mehr Lust.', a: 'einer', d: ['eine', 'einem'], t: 'Después de una pausa larga ya nadie tenía ganas.', e: 'nach + dativo femenino: einer Pause.' }
    ],
    orders: [
      { sol: ['Wir', 'fliegen', 'im', 'Sommer', 'nach', 'Spanien'], t: 'En verano volamos a España.', e: 'nach + país sin artículo.' },
      { sol: ['Ich', 'fahre', 'morgen', 'nach', 'Wien'], t: 'Mañana voy a Viena.', e: 'nach + ciudad.' },
      { sol: ['Gehst', 'du', 'schon', 'nach', 'Hause?'], t: '¿Ya te vas a casa?', e: 'nach Hause (movimiento).' },
      { sol: ['Der', 'Zug', 'fährt', 'nach', 'Salzburg'], t: 'El tren va a Salzburgo.', e: 'nach + ciudad.' },
      { sol: ['Im', 'August', 'fliegen', 'wir', 'nach', 'Griechenland'], alt: [['Wir', 'fliegen', 'im', 'August', 'nach', 'Griechenland']], t: 'En agosto volamos a Grecia.', e: 'El complemento de tiempo abre y el verbo va segundo.' },
      { sol: ['Nach', 'der', 'Arbeit', 'gehe', 'ich', 'nach', 'Hause'], alt: [['Ich', 'gehe', 'nach', 'der', 'Arbeit', 'nach', 'Hause']], t: 'Después del trabajo me voy a casa.', e: 'Dos "nach" distintos: tiempo el primero, dirección el segundo.' },
      { sol: ['Wir', 'fahren', 'im', 'Winter', 'in', 'die', 'Berge'], t: 'En invierno vamos a la montaña.', e: 'Con artículo → "in die".' },
      { sol: ['Ich', 'muss', 'noch', 'zum', 'Arzt', 'gehen'], t: 'Todavía tengo que ir al médico.', e: 'Modal en 2ª posición, infinitivo al final.' }
    ],
    clozes: [
      { txt: 'Diesen Sommer fahren wir zuerst ___ Italien, dann ___ die Schweiz und am Ende ___ Wien zurück. Vorher muss ich aber noch ___ Reisebüro, die Tickets abholen.', a: ['nach', 'in', 'nach', 'zum'], extra: ['an', 'bei', 'auf'], t: 'Este verano vamos primero a Italia, luego a Suiza y al final volvemos a Viena. Pero antes todavía tengo que pasar por la agencia a recoger los billetes.', e: 'La regla se ve de golpe: países y ciudades sin artículo con "nach", el que lleva artículo (die Schweiz) con "in", y un sitio concreto con "zu".' },
      { txt: 'Im Sommer fliegen wir ___ Portugal, im Winter fahren wir ___ die Berge. Und morgen muss ich noch ___ Arzt, danach gehe ich ___ Hause.', a: ['nach', 'in', 'zum', 'nach'], extra: ['in', 'nach', 'zur', 'zu'], t: 'En verano volamos a Portugal, en invierno vamos a la montaña. Y mañana todavía tengo que ir al médico, después me voy a casa.', e: 'País sin artículo → nach; con artículo → in die; sitio concreto → zu; y «a casa» es siempre nach Hause.' }
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
      { s: 'Danke für ___ Hilfe!', a: 'die', d: ['der', 'dem'], t: '¡Gracias por la ayuda!', e: 'für + acusativo femenino → die Hilfe.' },
      { s: 'Ich suche ein Geschenk ___ meine Schwester.', a: 'für', d: ['über', 'mit'], t: 'Busco un regalo para mi hermana.', e: 'für + acusativo: für meine Schwester.' },
      { s: 'Diese Jacke ist ___ den Winter zu dünn.', a: 'für', d: ['über', 'zu'], t: 'Esta chaqueta es muy fina para el invierno.', e: 'für + acusativo masculino: für den.' },
      { s: 'Ist das ___ mich?', a: 'für', d: ['über', 'zu'], t: '¿Es para mí?', e: 'für mich, no "für ich".' },
      { s: 'Wir kaufen etwas ___ das Kind.', a: 'für', d: ['über', 'mit'], t: 'Compramos algo para el niño.', e: 'für + acusativo neutro: für das.' },
      { s: 'Das Geschenk ist ___ meine Mutter.', a: 'für', d: ['mit', 'von'], t: 'El regalo es para mi madre.', e: 'für + acusativo.' },
      { s: 'Ich suche noch etwas ___ meinen Bruder.', a: 'für', d: ['mit', 'bei'], t: 'Todavía busco algo para mi hermano.', e: 'für pide acusativo: meinen Bruder.' },
      { s: 'Haben Sie das auch ___ Kinder?', a: 'für', d: ['mit', 'zu'], t: '¿Lo tienen también para niños?', e: 'für + acusativo plural.' },
      { s: 'Diese Größe ist ___ mich zu eng.', a: 'für', d: ['mit', 'bei'], t: 'Esta talla me queda estrecha.', e: 'für mich, en acusativo.' },
      { s: 'Das Zimmer ist ___ zwei Personen.', a: 'für', d: ['zu', 'mit'], t: 'La habitación es para dos personas.', e: 'für para decir a quién va destinado.' },
      { s: 'Ich habe eine kleine Überraschung für ___ dabei.', a: 'dich', d: ['dir', 'du'], t: 'Te traigo una sorpresita.', e: 'für + acusativo del pronombre: dich.' },
      { s: 'Sie hat das ___ uns gemacht, nicht für sich.', a: 'für', d: ['zu', 'mit'], t: 'Lo hizo por nosotros, no por ella.', e: 'für + acusativo: für uns.' },
      { s: 'Die Karten sind für ___ Kollegen aus Graz.', a: 'die', d: ['den', 'dem'], t: 'Las entradas son para los compañeros de Graz.', e: 'für + acusativo plural: die Kollegen.' },
      { s: 'Ist der Kaffee für ___ oder für mich?', a: 'ihn', d: ['ihm', 'er'], t: '¿El café es para él o para mí?', e: 'für + acusativo: ihn.' },
      { s: 'Wir brauchen noch ein Geschenk für ___ Onkel.', a: 'meinen', d: ['mein', 'meinem'], t: 'Nos falta un regalo para mi tío.', e: 'für + acusativo masculino: meinen Onkel.' },
      { s: '___ wen hast du den Kuchen gebacken?', a: 'Für', d: ['Zu', 'Mit'], t: '¿Para quién has hecho la tarta?', e: 'En la pregunta: für wen, en acusativo.' },
      { s: 'Er hat sich für ___ neuen Job entschieden.', a: 'den', d: ['dem', 'der'], t: 'Se ha decidido por el trabajo nuevo.', e: 'sich entscheiden für + acusativo: den Job.' }
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
      { s: 'Sie wohnt ___ Wien.', a: 'in', d: ['nach', 'zu'], t: 'Vive en Viena.', e: 'Residencia → in.' },
      { s: 'Die Kisten stehen ___ Flur.', a: 'im', d: ['ins', 'an den'], t: 'Las cajas están en el pasillo.', e: 'Sin movimiento → dativo: im.' },
      { s: 'Stell die Lampe bitte ___ Ecke.', a: 'in die', d: ['in der', 'an der'], t: 'Pon la lámpara en el rincón.', e: '"stellen" es movimiento → acusativo.' },
      { s: 'Der Umzugswagen steht ___ Haus.', a: 'vor dem', d: ['vor das', 'an das'], t: 'El camión de la mudanza está delante de la casa.', e: 'Estado → dativo.' },
      { s: 'Häng den Spiegel ___ Wand.', a: 'an die', d: ['an der', 'auf der'], t: 'Cuelga el espejo en la pared.', e: 'Movimiento → acusativo.' },
      { s: 'Die Fahrräder sind ___ Keller.', a: 'im', d: ['in den', 'in die'], t: 'Las bicis están en el trastero.', e: 'Estado → im.' },
      { s: 'Wir tragen das Sofa ___ Wohnzimmer.', a: 'ins', d: ['im', 'in dem'], t: 'Llevamos el sofá al salón.', e: 'Movimiento hacia dentro → ins.' },
      { s: 'Der Tisch steht ___ Fenster.', a: 'am', d: ['ans', 'an das'], t: 'La mesa está junto a la ventana.', e: 'Estado → am.' },
      { s: 'Leg die Schlüssel ___ Tisch.', a: 'auf den', d: ['auf dem', 'an dem'], t: 'Deja las llaves en la mesa.', e: '"legen" es movimiento → acusativo.' },
      { s: 'Der Karton steht ___ dem Regal.', a: 'auf', d: ['auf das', 'an das'], t: 'La caja está encima de la estantería.', e: 'Sin movimiento: auf + dativo.' },
      { s: 'Stell die Lampe bitte ___ das Sofa.', a: 'neben', d: ['neben dem', 'bei dem'], t: 'Pon la lámpara al lado del sofá, por favor.', e: 'Con movimiento: neben + acusativo.' },
      { s: 'Der Mülleimer steht ___ der Küche.', a: 'in', d: ['in die', 'an die'], t: 'El cubo de la basura está en la cocina.', e: 'Sin movimiento: in + dativo.' },
      { s: 'Häng das Bild bitte ___ das Sofa.', a: 'über', d: ['über dem', 'auf dem'], t: 'Cuelga el cuadro encima del sofá, por favor.', e: 'Con movimiento: über + acusativo.' }
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
      { s: 'Fahren Sie ___ dritten Ampel.', a: 'bis zur', d: ['bis zum', 'bis'], t: 'Vaya hasta el tercer semáforo.', e: 'die Ampel → bis zur.' },
      { s: 'Die Apotheke ist ___ dem Bahnhof.', a: 'gegenüber', d: ['durch', 'entlang'], t: 'La farmacia está enfrente de la estación.', e: '"gegenüber" siempre con dativo.' },
      { s: 'Fahren Sie ___ zur nächsten Kreuzung.', a: 'bis', d: ['durch', 'entlang'], t: 'Siga hasta el siguiente cruce.', e: '"bis zu" + dativo: bis zur Kreuzung.' },
      { s: 'Gehen Sie ___ der Kirche vorbei.', a: 'an', d: ['bis', 'durch'], t: 'Pase por delante de la iglesia.', e: '"an … vorbei" + dativo.' },
      { s: 'Das Café liegt ___ der Post.', a: 'gegenüber', d: ['bis', 'durch'], t: 'El café está enfrente de correos.', e: 'gegenüber + dativo femenino: der Post.' },
      { s: 'Der Bus fährt nur ___ zum Hauptplatz.', a: 'bis', d: ['durch', 'gegenüber'], t: 'El autobús solo llega hasta la plaza mayor.', e: 'bis zu marca el final del recorrido.' },
      { s: 'Wir wohnen ___ dem Park.', a: 'gegenüber', d: ['durch', 'bis'], t: 'Vivimos enfrente del parque.', e: 'gegenüber + dativo neutro: dem Park.' },
      { s: 'Die Haltestelle ist ___ der Schule.', a: 'gegenüber', d: ['bis', 'durch'], t: 'La parada está enfrente del colegio.', e: 'gegenüber + dativo.' },
      { s: 'Der Zug fährt nur ___ zum Hauptbahnhof.', a: 'bis', d: ['gegenüber', 'durch'], t: 'El tren solo llega hasta la estación central.', e: 'bis zu + dativo marca el final del trayecto.' },
      { s: 'Fahren Sie ___ dem Museum vorbei.', a: 'an', d: ['bis', 'gegenüber'], t: 'Pase por delante del museo.', e: 'an … vorbei + dativo.' },
      { s: 'Das Hotel liegt ___ dem Park.', a: 'gegenüber', d: ['bis', 'durch'], t: 'El hotel está enfrente del parque.', e: 'gegenüber + dativo neutro: dem Park.' },
      { s: 'Wir laufen ___ zur nächsten Station.', a: 'bis', d: ['gegenüber', 'an'], t: 'Vamos andando hasta la siguiente estación.', e: 'bis zu + dativo.' },
      { s: 'Der Bus fährt ___ der Kirche vorbei.', a: 'an', d: ['bis', 'gegenüber'], t: 'El autobús pasa por delante de la iglesia.', e: 'an … vorbei.' },
      { s: 'Das Hotel liegt genau ___ dem Bahnhof.', a: 'gegenüber', d: ['bis', 'durch'], t: 'El hotel está justo enfrente de la estación.', e: 'gegenüber + dativo.' },
      { s: 'Fahren Sie ___ zur nächsten Haltestelle.', a: 'bis', d: ['gegenüber', 'durch'], t: 'Vaya hasta la siguiente parada.', e: 'bis zu + dativo marca el final del trayecto.' },
      { s: 'Gehen Sie ___ dem Denkmal vorbei.', a: 'an', d: ['bis', 'gegenüber'], t: 'Pase por delante del monumento.', e: 'an … vorbei + dativo.' },
      { s: 'Der Souvenirladen ist ___ der Kirche.', a: 'gegenüber', d: ['bis', 'durch'], t: 'La tienda de recuerdos está enfrente de la iglesia.', e: 'gegenüber pide dativo.' },
      { s: 'Wir laufen ___ zum Hauptplatz.', a: 'bis', d: ['gegenüber', 'an'], t: 'Vamos andando hasta la plaza mayor.', e: 'bis zu + dativo.' }
    ],
    orders: [
      { sol: ['Das', 'Hotel', 'ist', 'gegenüber', 'dem', 'Bahnhof'], t: 'El hotel está enfrente de la estación.', e: 'gegenüber + dativo.' },
      { sol: ['Gehen', 'Sie', 'bis', 'zur', 'Ampel', 'und', 'dann', 'links'], t: 'Vaya hasta el semáforo y luego a la izquierda.', e: 'bis zur Ampel.' },
      { sol: ['Fahren', 'Sie', 'an', 'der', 'Kirche', 'vorbei'], t: 'Pase por delante de la iglesia.', e: 'an … vorbei, con vorbei al final.' },
      { sol: ['Die', 'Apotheke', 'ist', 'gegenüber', 'der', 'Post'], t: 'La farmacia está enfrente de correos.', e: 'gegenüber der Post.' },
      { sol: ['Die', 'Apotheke', 'ist', 'gegenüber', 'dem', 'Bahnhof'], t: 'La farmacia está enfrente de la estación.', e: 'gegenüber siempre con dativo.' },
      { sol: ['Fahren', 'Sie', 'bis', 'zur', 'nächsten', 'Kreuzung'], t: 'Siga hasta el siguiente cruce.', e: 'bis zu + dativo: bis zur.' }
    ],
    clozes: [
      { txt: 'Gehen Sie hier ___ den Park und dann die Hauptstraße ___. ___ der Kirche vorbei, und ___ zur Ampel. Die Apotheke ist ___ dem Bahnhof.', a: ['durch', 'entlang', 'An', 'bis', 'gegenüber'], extra: ['entlang', 'durch', 'Bis', 'an'], t: 'Cruce aquí el parque y luego siga la calle principal. Pase por delante de la iglesia y siga hasta el semáforo. La farmacia está enfrente de la estación.', e: 'Las cuatro en una ruta: durch y entlang piden acusativo; an … vorbei, bis zu y gegenüber piden dativo.' }
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
      { s: 'Wir laufen ___ den Garten.', a: 'durch', d: ['entlang', 'bis'], t: 'Cruzamos el jardín andando.', e: 'durch + acusativo.' },
      { s: 'Wir gehen ___ den Park.', a: 'durch', d: ['durchs', 'entlang'], t: 'Cruzamos el parque.', e: '"durch" siempre con acusativo: durch den Park.' },
      { s: 'Wir spazieren das Ufer ___.', a: 'entlang', d: ['durch', 'gegenüber'], t: 'Paseamos por la orilla.', e: '«entlang» va detrás del sustantivo, con acusativo.' },
      { s: 'Der Weg führt ___ den Wald.', a: 'durch', d: ['entlang', 'an'], t: 'El camino atraviesa el bosque.', e: 'Atravesar → durch + acusativo.' },
      { s: 'Fahren Sie den Fluss ___, dann links.', a: 'entlang', d: ['durch', 'bis'], t: 'Vaya siguiendo el río y luego a la izquierda.', e: 'entlang detrás del sustantivo.' },
      { s: 'Wir fahren ___ die Stadt.', a: 'durch', d: ['entlang', 'an'], t: 'Atravesamos la ciudad.', e: 'durch + acusativo femenino: durch die Stadt.' },
      { s: 'Der Bus fährt ___ den Tunnel.', a: 'durch', d: ['entlang', 'über'], t: 'El autobús pasa por el túnel.', e: 'durch + acusativo masculino: durch den Tunnel.' },
      { s: 'Der Zug fährt ___ einen langen Tunnel.', a: 'durch', d: ['entlang', 'bis'], t: 'El tren atraviesa un túnel largo.', e: 'durch + acusativo.' },
      { s: 'Gehen Sie den Bahnsteig ___ bis zum Ende.', a: 'entlang', d: ['durch', 'gegenüber'], t: 'Siga el andén hasta el final.', e: 'entlang va detrás del sustantivo, con acusativo.' },
      { s: 'Wir laufen ___ die Unterführung.', a: 'durch', d: ['entlang', 'an'], t: 'Cruzamos el paso subterráneo.', e: 'durch + acusativo femenino.' },
      { s: 'Fahr die Hauptstraße ___ und dann rechts.', a: 'entlang', d: ['durch', 'bis'], t: 'Sigue la calle principal y luego a la derecha.', e: 'entlang detrás del sustantivo.' },
      { s: 'Der Weg führt ___ den ganzen Park.', a: 'durch', d: ['entlang', 'gegenüber'], t: 'El camino atraviesa todo el parque.', e: 'durch + acusativo masculino.' },
      { s: 'Wir spazieren den See ___.', a: 'entlang', d: ['durch', 'bis'], t: 'Paseamos siguiendo el lago.', e: 'entlang, detrás y con acusativo.' },
      { s: 'Gehen Sie hier ___ die Unterführung.', a: 'durch', d: ['entlang', 'gegenüber'], t: 'Cruce aquí el paso subterráneo.', e: 'durch + acusativo.' },
      { s: 'Fahren Sie die Hauptstraße einfach ___.', a: 'entlang', d: ['durch', 'bis'], t: 'Siga simplemente la calle principal.', e: 'entlang va detrás del sustantivo, con acusativo.' },
      { s: 'Der Radweg führt ___ den Wald.', a: 'durch', d: ['entlang', 'an'], t: 'El carril bici atraviesa el bosque.', e: 'durch + acusativo masculino.' },
      { s: 'Wir spazieren den Fluss ___.', a: 'entlang', d: ['durch', 'bis'], t: 'Paseamos siguiendo el río.', e: 'entlang detrás del sustantivo.' },
      { s: 'Der Bus fährt ___ die Innenstadt.', a: 'durch', d: ['entlang', 'gegenüber'], t: 'El autobús atraviesa el centro.', e: 'durch + acusativo femenino.' },
      { s: 'Am schnellsten ist es zu Fuß durch ___ Park.', a: 'den', d: ['dem', 'der'], t: 'Lo más rápido es ir andando por el parque.', e: 'durch + acusativo masculino: den Park.' },
      { s: 'Die Straßenbahn fährt mitten durch ___ Innenstadt.', a: 'die', d: ['der', 'dem'], t: 'El tranvía pasa por el medio del centro.', e: 'durch + acusativo femenino: die Innenstadt.' },
      { s: 'Gehen Sie ___ Fluss entlang, dann sehen Sie die Brücke.', a: 'den', d: ['dem', 'der'], t: 'Vaya siguiendo el río y verá el puente.', e: 'entlang va detrás y pide acusativo: den Fluss entlang.' },
      { s: 'Wir sind bei Regen zwei Stunden durch ___ Wald gelaufen.', a: 'den', d: ['dem', 'des'], t: 'Estuvimos dos horas andando por el bosque bajo la lluvia.', e: 'durch + acusativo: den Wald.' },
      { s: 'Immer diese Straße ___, dann sind Sie gleich da.', a: 'entlang', d: ['durch', 'über'], t: 'Siga todo recto por esta calle y llega enseguida.', e: 'entlang va detrás del sustantivo, no delante.' },
      { s: 'Der Wanderweg führt direkt durch ___ Dorf.', a: 'das', d: ['dem', 'des'], t: 'El sendero pasa justo por el pueblo.', e: 'durch + acusativo neutro: das Dorf.' },
      { s: 'Fahren Sie ___ die Brücke und dann gleich links.', a: 'über', d: ['durch', 'entlang'], t: 'Cruce el puente y luego a la izquierda.', e: 'Para pasar por encima se usa über, no durch.' },
      { s: '___ das offene Fenster kam plötzlich eine Biene.', a: 'Durch', d: ['Entlang', 'Über'], t: 'Por la ventana abierta entró de pronto una abeja.', e: 'durch para atravesar una abertura; abre la frase y el verbo va detrás.' }
    ],
    orders: [
      { sol: ['Gehen', 'Sie', 'durch', 'den', 'Park'], t: 'Vaya por el parque.', e: 'durch + acusativo, delante del sustantivo.' },
      { sol: ['Gehen', 'Sie', 'die', 'Straße', 'entlang'], t: 'Siga la calle.', e: 'entlang va detrás del sustantivo.' },
      { sol: ['Der', 'Zug', 'fährt', 'durch', 'einen', 'langen', 'Tunnel'], t: 'El tren pasa por un túnel largo.', e: 'durch einen Tunnel.' },
      { sol: ['Wir', 'gehen', 'den', 'Fluss', 'entlang'], t: 'Vamos a lo largo del río.', e: 'den Fluss entlang.' },
      { sol: ['Wir', 'gehen', 'durch', 'den', 'Park', 'zum', 'Bahnhof'], t: 'Cruzamos el parque hasta la estación.', e: 'durch pide acusativo: durch den Park.' }
    ],
    clozes: [
      { txt: 'Gehen Sie hier ___ die Unterführung und dann den Bahnsteig ___. Der Zug fährt ___ zum Hauptbahnhof; die Information ist ___ dem Kiosk.', a: ['durch', 'entlang', 'bis', 'gegenüber'], extra: ['entlang', 'durch', 'an', 'von'], t: 'Cruce aquí el paso subterráneo y luego siga el andén. El tren llega hasta la estación central; la información está enfrente del quiosco.', e: 'Las cuatro seguidas: durch y entlang piden acusativo, bis zu y gegenüber piden dativo. Y entlang va detrás del sustantivo.' }
    ]
  },
  'herkunft-aus-wohnen-in': {
    picks: [
      { s: 'Ich komme ___ Valencia.', a: 'aus', d: ['in', 'nach'], t: 'Soy de Valencia.', e: 'El origen siempre con aus.' },
      { s: 'Seit zwei Jahren wohne ich ___ Wien.', a: 'in', d: ['aus', 'nach'], t: 'Desde hace dos años vivo en Viena.', e: 'Dónde vives: in + dativo.' },
      { s: 'Woher kommen Sie? – Ich komme ___ Polen.', a: 'aus', d: ['in', 'von'], t: '¿De dónde es? – Soy de Polonia.', e: 'A la pregunta woher se contesta con aus.' },
      { s: 'Wo wohnst du? – Ich wohne ___ der Ungargasse.', a: 'in', d: ['aus', 'nach'], t: '¿Dónde vives? – Vivo en la Ungargasse.', e: 'La dirección va con in + dativo.' },
      { s: 'Er kommt ___ Deutschland, wohnt aber in Graz.', a: 'aus', d: ['in', 'nach'], t: 'Es de Alemania, pero vive en Graz.', e: 'El origen no cambia aunque cambies de casa.' },
      { s: 'Meine Familie lebt ___ Spanien.', a: 'in', d: ['aus', 'nach'], t: 'Mi familia vive en España.', e: 'leben y wohnen van con in.' },
      { s: 'Die Kollegin kommt ___ Wien und ist nie weggezogen.', a: 'aus', d: ['in', 'bei'], t: 'La compañera es de Viena y nunca se ha mudado.', e: 'Ser de un sitio: aus.' },
      { s: 'Wir wohnen jetzt ___ einem kleinen Dorf.', a: 'in', d: ['aus', 'nach'], t: 'Ahora vivimos en un pueblo pequeño.', e: 'in + dativo para decir dónde.' },
      { s: 'Woher kommt dieser Käse? – ___ Österreich.', a: 'Aus', d: ['In', 'Nach'], t: '¿De dónde es este queso? – De Austria.', e: 'También para cosas: la procedencia va con aus.' },
      { s: 'Sie ist ___ der Türkei und wohnt in Linz.', a: 'aus', d: ['in', 'nach'], t: 'Es de Turquía y vive en Linz.', e: 'Las dos cosas en una frase: aus para el origen, in para el sitio.' },
      { s: 'Meine Großeltern kommen ___ Andalusien.', a: 'aus', d: ['in', 'nach'], t: 'Mis abuelos son de Andalucía.', e: 'Origen → aus.' },
      { s: 'Mein Bruder wohnt ___ Berlin.', a: 'in', d: ['aus', 'nach'], t: 'Mi hermano vive en Berlín.', e: 'Residencia → in.' },
      { s: 'Dieser Wein kommt ___ Italien.', a: 'aus', d: ['in', 'von'], t: 'Este vino viene de Italia.', e: 'Procedencia → aus.' },
      { s: 'Ich arbeite ___ einem Krankenhaus.', a: 'in', d: ['aus', 'nach'], t: 'Trabajo en un hospital.', e: 'in + dativo.' },
      { s: 'Woher kommst du ursprünglich? – ___ Rumänien.', a: 'Aus', d: ['In', 'Nach'], t: '¿De dónde eres originalmente? — De Rumanía.', e: 'aus para el origen.' },
      { s: 'Sie lebt schon lange ___ Österreich.', a: 'in', d: ['aus', 'nach'], t: 'Lleva mucho tiempo viviendo en Austria.', e: 'Vivir en un sitio → in.' },
      { s: '„Ich komme aus Wien“ heißt: ___', a: 'ich bin von dort', d: ['ich gehe dorthin', 'ich war dort'], t: '«Ich komme aus Wien» significa que eres de allí.', e: 'No es que vengas de camino.' },
      { s: 'Mein Vater kommt ___ einem kleinen Dorf.', a: 'aus', d: ['in', 'von'], t: 'Mi padre es de un pueblo pequeño.', e: 'aus + dativo.' },
      { s: 'Und wo wohnt er jetzt? – ___ Linz.', a: 'In', d: ['Aus', 'Nach'], t: '¿Y dónde vive ahora? — En Linz.', e: 'Ahora mismo → in.' },
      { s: 'Was ist der Unterschied?', a: 'aus = Herkunft, in = Wohnort', d: ['beide gleich', 'aus = Wohnort, in = Herkunft'], t: 'aus es de dónde eres, in dónde vives.', e: 'Se pueden dar los dos en la misma frase.' }
    ]
  },
  'wohnen-in-der-strasse': {
    picks: [
      { s: 'Ich wohne in ___ Ungargasse.', a: 'der', d: ['die', 'dem'], t: 'Vivo en la Ungargasse.', e: 'die Gasse es femenino: in + dativo es der.' },
      { s: 'Wir wohnen ___ vierten Stock.', a: 'im', d: ['in der', 'in den'], t: 'Vivimos en el cuarto piso.', e: 'in dem se junta en im: im vierten Stock.' },
      { s: 'Sie wohnt in ___ Mariahilfer Straße.', a: 'der', d: ['die', 'dem'], t: 'Vive en la Mariahilfer Straße.', e: 'die Straße es femenino: in der Straße.' },
      { s: 'Das Büro ist ___ Erdgeschoss.', a: 'im', d: ['in der', 'in dem der'], t: 'La oficina está en la planta baja.', e: 'das Erdgeschoss: in dem → im.' },
      { s: 'Er wohnt in ___ Bezirk fünfzehn.', a: 'dem', d: ['der', 'die'], t: 'Vive en el distrito quince.', e: 'der Bezirk es masculino: in dem Bezirk.' },
      { s: 'Meine Eltern wohnen in ___ Dorf bei Graz.', a: 'einem', d: ['einer', 'einen'], t: 'Mis padres viven en un pueblo cerca de Graz.', e: 'das Dorf en dativo: einem Dorf.' },
      { s: 'Die Praxis ist ___ zweiten Stock.', a: 'im', d: ['in die', 'in der'], t: 'La consulta está en el segundo piso.', e: 'Siempre im + ordinal + Stock.' },
      { s: 'Wohnst du noch in ___ alten Wohnung?', a: 'der', d: ['die', 'dem'], t: '¿Sigues viviendo en el piso viejo?', e: 'die Wohnung en dativo: der Wohnung.' },
      { s: 'Sie wohnt in ___ Haus mit Garten.', a: 'einem', d: ['einer', 'einen'], t: 'Vive en una casa con jardín.', e: 'das Haus en dativo: einem Haus.' },
      { s: 'Wir sind ___ dritten Stock, Tür acht.', a: 'im', d: ['in der', 'in den'], t: 'Estamos en el tercer piso, puerta ocho.', e: 'im dritten Stock, y el número de puerta va suelto.' },
      { s: 'Welchen Fall verlangt „in“, wenn man sagt DÓNDE se vive?', a: 'den Dativ', d: ['den Akkusativ', 'den Genitiv'], t: 'Para decir dónde se vive, «in» rige dativo.', e: 'Ich wohne in der Ungargasse.' },
      { s: 'Was ist „im“ die Abkürzung von?', a: 'in dem', d: ['in das', 'in der'], t: '«im» es la contracción de «in dem».', e: 'Por eso siempre es dativo.' },
      { s: 'Warum sagt man „in der Straße“ und no „in dem“?', a: 'die Straße ist feminin', d: ['Straße ist neutrum', 'es ist eine Ausnahme'], t: 'Porque «die Straße» es femenino y el dativo femenino es «der».', e: 'in + der Straße.' },
      { s: 'Ich wohne in ___ Hauptstraße.', a: 'der', d: ['dem', 'die'], t: 'Vivo en la Hauptstraße.', e: 'die Straße → in der.' },
      { s: 'Die Wohnung ist ___ fünften Stock.', a: 'im', d: ['in der', 'in dem der'], t: 'El piso está en la quinta planta.', e: 'der Stock → im.' },
      { s: 'Er wohnt in ___ ruhigen Gegend.', a: 'einer', d: ['einem', 'eine'], t: 'Vive en una zona tranquila.', e: 'die Gegend, dativo con ein → einer.' },
      { s: 'Wir wohnen ___ Erdgeschoss, gleich neben dem Eingang.', a: 'im', d: ['in der', 'in die'], t: 'Vivimos en la planta baja, al lado de la entrada.', e: 'das Erdgeschoss → im.' },
      { s: 'Sie ist in ___ Wohnung über uns gezogen.', a: 'die', d: ['der', 'dem'], t: 'Se ha mudado al piso de arriba.', e: 'Con movimiento («ziehen in») va acusativo: in die.' },
      { s: 'Und si ya vive allí: Sie wohnt in ___ Wohnung über uns.', a: 'der', d: ['die', 'dem'], t: 'Y si ya vive allí: vive en el piso de arriba.', e: 'Sin movimiento, dativo: in der.' },
      { s: 'Was ändert sich zwischen „in die Wohnung“ und „in der Wohnung“?', a: 'ob es Bewegung gibt', d: ['die Bedeutung von in', 'nichts'], t: 'Cambia si hay movimiento o no.', e: 'Entrar (acusativo) o estar (dativo).' }
    ]
  },
  'praeposition-nach-zu-in-richtung': {
    picks: [
      { s: 'Am Freitag fahre ich ___ Graz.', a: 'nach', d: ['zu', 'in'], t: 'El viernes voy a Graz.', e: 'Ciudades sin artículo: nach.' },
      { s: 'Ich muss noch ___ Post.', a: 'zur', d: ['nach', 'in'], t: 'Todavía tengo que ir a correos.', e: 'zu der se junta en zur.' },
      { s: 'Gehen wir heute ___ Kino?', a: 'ins', d: ['nach', 'zum'], t: '¿Vamos hoy al cine?', e: 'Entrar dentro: in das → ins.' },
      { s: 'Nach der Arbeit gehe ich ___ Hause.', a: 'nach', d: ['zu', 'in'], t: 'Después del trabajo me voy a casa.', e: 'nach Hause es fijo.' },
      { s: 'Morgen muss ich ___ Arzt.', a: 'zum', d: ['nach', 'ins'], t: 'Mañana tengo que ir al médico.', e: 'Con personas: zu dem → zum.' },
      { s: 'Im Sommer fliegen wir ___ Japan.', a: 'nach', d: ['zu', 'in'], t: 'En verano volamos a Japón.', e: 'País sin artículo: nach.' },
      { s: 'Wir gehen ___ Supermarkt.', a: 'zum', d: ['nach', 'ins'], t: 'Vamos al supermercado.', e: 'Tienda concreta: zum.' },
      { s: 'Fahren wir ___ die Türkei?', a: 'in', d: ['nach', 'zu'], t: '¿Vamos a Turquía?', e: 'País con artículo: in + acusativo.' },
      { s: 'Sie geht jeden Tag ___ Schule.', a: 'zur', d: ['nach', 'in'], t: 'Va al colegio todos los días.', e: 'zur Schule, expresión habitual.' },
      { s: 'Komm ___ mir, ich koche etwas.', a: 'zu', d: ['nach', 'in'], t: 'Vente a mi casa, cocino algo.', e: 'A casa de alguien: zu + dativo.' }
    ]
  },
  'praeposition-mit-verkehrsmittel': {
    picks: [
      { s: 'Ich fahre ___ dem Zug nach Salzburg.', a: 'mit', d: ['in', 'auf'], t: 'Voy en tren a Salzburgo.', e: 'Medio de transporte: mit + dativo.' },
      { s: 'Wir fliegen ___ dem Flugzeug.', a: 'mit', d: ['in', 'bei'], t: 'Vamos en avión.', e: 'También con avión: mit.' },
      { s: 'Sie fährt mit ___ Straßenbahn.', a: 'der', d: ['die', 'dem'], t: 'Va en tranvía.', e: 'die Straßenbahn → mit der.' },
      { s: 'Er kommt mit ___ Fahrrad.', a: 'dem', d: ['das', 'der'], t: 'Viene en bici.', e: 'das Fahrrad → mit dem.' },
      { s: 'Ich gehe ___ Fuß.', a: 'zu', d: ['mit', 'in'], t: 'Voy andando.', e: 'Excepción: zu Fuß, sin artículo.' },
      { s: 'Wir fahren mit ___ Auto.', a: 'dem', d: ['das', 'der'], t: 'Vamos en coche.', e: 'das Auto → mit dem.' },
      { s: 'Ich steige ___ den Bus ein.', a: 'in', d: ['mit', 'auf'], t: 'Me subo al autobús.', e: 'einsteigen in + acusativo.' },
      { s: 'Nach mit steht immer ___.', a: 'der Dativ', d: ['der Akkusativ', 'der Genitiv'], t: 'Después de «mit» va siempre dativo.', e: 'mit dem, mit der, mit den.' },
      { s: 'Sie fährt mit ___ U-Bahn zur Arbeit.', a: 'der', d: ['die', 'dem'], t: 'Va al trabajo en metro.', e: 'die U-Bahn → mit der.' },
      { s: 'Ich fahre mit ___ Kollegen ins Büro.', a: 'den', d: ['die', 'der'], t: 'Voy a la oficina con los compañeros.', e: 'Dativo plural: mit den + -n.' }
    ]
  }
};
