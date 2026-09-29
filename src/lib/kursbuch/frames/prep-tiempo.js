// TEMA: preposiciones de tiempo.
// am/um/im, von…bis, vor/nach, seit/ab, für/über. Casi todas piden dativo;
// las excepciones (für, über) piden acusativo y conviene tenerlas fichadas.

export const PREP_TIEMPO = {
  // ---------- A1.1 L5: am / um / von … bis ----------
  'temporale-prapositionen-am-um-von-bis': {
    reserva: ['im', 'seit', 'ab'],
    picks: [
      { s: '___ Freitag habe ich Zeit.', a: 'Am', d: ['Um', 'In'], t: 'El viernes tengo tiempo.', e: 'Con los días de la semana se usa "am": am Freitag.' },
      { s: 'Der Kurs beginnt ___ 18 Uhr.', a: 'um', d: ['am', 'im'], t: 'El curso empieza a las 18.', e: 'Con la hora exacta: um.' },
      { s: 'Ich arbeite ___ Montag bis Freitag.', a: 'von', d: ['am', 'um'], t: 'Trabajo de lunes a viernes.', e: 'Intervalo: von … bis.' },
      { s: 'Wir treffen uns ___ halb acht.', a: 'um', d: ['am', 'im'], t: 'Quedamos a las siete y media.', e: 'Hora → um.' },
      { s: '___ Wochenende schlafe ich lange.', a: 'Am', d: ['Um', 'In'], t: 'El fin de semana duermo hasta tarde.', e: 'am Wochenende (fórmula fija).' },
      { s: 'Das Geschäft ist von 9 ___ 18 Uhr offen.', a: 'bis', d: ['zu', 'nach'], t: 'La tienda abre de 9 a 18.', e: 'von … bis para el horario.' },
      { s: '___ Samstag gehe ich einkaufen.', a: 'Am', d: ['Um', 'Im'], t: 'El sábado voy a comprar.', e: 'Día de la semana → am.' },
      { s: 'Ich stehe ___ sieben Uhr auf.', a: 'um', d: ['am', 'im'], t: 'Me levanto a las siete.', e: 'Hora exacta → um.' },
      { s: '___ Abend sehe ich fern.', a: 'Am', d: ['Um', 'In'], t: 'Por la tarde veo la tele.', e: 'Partes del día: am Abend, am Morgen, am Nachmittag.' },
      { s: 'Der Unterricht ist ___ 9 bis 13 Uhr.', a: 'von', d: ['am', 'um'], t: 'La clase es de 9 a 13.', e: 'von … bis.' },
      { s: '___ Mittwoch habe ich einen Termin.', a: 'Am', d: ['Um', 'Im'], t: 'El miércoles tengo una cita.', e: 'am + día.' },
      { s: 'Wann kommst du? – ___ acht.', a: 'Um', d: ['Am', 'Im'], t: '¿Cuándo vienes? – A las ocho.', e: 'Hora → um.' },
      { s: '___ Mittwoch habe ich frei.', a: 'Am', d: ['Um', 'Im'], t: 'El miércoles tengo libre.', e: 'Días → am.' },
      { s: 'Der Film beginnt ___ zwanzig Uhr.', a: 'um', d: ['am', 'im'], t: 'La película empieza a las ocho.', e: 'Hora exacta → um.' },
      { s: 'Ich arbeite ___ acht ___ sechzehn Uhr.', a: 'von … bis', d: ['um … bis', 'am … von'], t: 'Trabajo de ocho a cuatro.', e: 'Un periodo con dos horas → von … bis.' },
      { s: '___ Abend bin ich meistens zu Hause.', a: 'Am', d: ['Um', 'In'], t: 'Por la noche suelo estar en casa.', e: 'Partes del día → am.' },
      { s: 'Der Kurs geht ___ September ___ Juni.', a: 'von … bis', d: ['am … bis', 'um … von'], t: 'El curso va de septiembre a junio.', e: 'von … bis también con meses.' },
      { s: 'Der Zug fährt ___ Viertel nach sieben.', a: 'um', d: ['am', 'im'], t: 'El tren sale a las siete y cuarto.', e: 'Hora → um.' },
      { s: 'Wir treffen uns ___ Donnerstag.', a: 'am', d: ['um', 'im'], t: 'Quedamos el jueves.', e: 'am + día de la semana.' },
      { s: 'Der Kurs beginnt ___ neun Uhr.', a: 'um', d: ['am', 'von'], t: 'El curso empieza a las nueve.', e: 'um + hora.' },
      { s: 'Ich arbeite von acht ___ sechzehn Uhr.', a: 'bis', d: ['am', 'um'], t: 'Trabajo de ocho a cuatro.', e: 'von … bis marca el principio y el final.' },
      { s: '___ Wochenende habe ich frei.', a: 'Am', d: ['Um', 'In'], t: 'El fin de semana libro.', e: 'am Wochenende, una expresión fija.' },
      { s: 'Die Bank hat ___ Montag bis Freitag offen.', a: 'von', d: ['am', 'um'], t: 'El banco abre de lunes a viernes.', e: 'von … bis con los días de la semana.' },
      { s: 'Der Film fängt ___ halb neun an.', a: 'um', d: ['am', 'von'], t: 'La película empieza a las ocho y media.', e: 'um + hora exacta.' },
      { s: '___ Samstag arbeite ich nie.', a: 'Am', d: ['Um', 'Von'], t: 'Los sábados no trabajo nunca.', e: 'am + día de la semana.' }
    ],
    orders: [
      { sol: ['Am', 'Freitag', 'um', 'achtzehn', 'Uhr', 'habe', 'ich', 'Zeit'], alt: [['Ich', 'habe', 'am', 'Freitag', 'um', 'achtzehn', 'Uhr', 'Zeit']], t: 'El viernes a las 18 tengo tiempo.', e: 'Primero el día (am), luego la hora (um).' },
      { sol: ['Ich', 'arbeite', 'von', 'Montag', 'bis', 'Freitag'], t: 'Trabajo de lunes a viernes.', e: 'von … bis.' },
      { sol: ['Der', 'Kurs', 'beginnt', 'um', 'neun', 'Uhr'], t: 'El curso empieza a las nueve.', e: 'um + hora.' },
      { sol: ['Am', 'Wochenende', 'stehe', 'ich', 'später', 'auf'], alt: [['Ich', 'stehe', 'am', 'Wochenende', 'später', 'auf']], t: 'El fin de semana me levanto más tarde.', e: 'am Wochenende al principio → inversión.' }
    ],
    clozes: [
      { txt: '___ Montag habe ich Kurs, und zwar ___ neun ___ elf. ___ Nachmittag arbeite ich, ___ Wochenende habe ich frei.', a: ['Am', 'von', 'bis', 'Am', 'am'], extra: ['Um', 'um', 'von', 'Im', 'im'], t: 'El lunes tengo clase, de nueve a once. Por la tarde trabajo y el fin de semana tengo libre.', e: 'Días y partes del día con "am", la hora con "um", y el periodo con "von … bis".' }
    ]
  },

  // ---------- A1.1 L7: im ----------
  'temporale-praposition-im': {
    picks: [
      { s: '___ Sommer ist es heiß.', a: 'Im', d: ['Am', 'Um'], t: 'En verano hace calor.', e: 'Con las estaciones: im Sommer.' },
      { s: '___ Jänner schneit es oft.', a: 'Im', d: ['Am', 'Um'], t: 'En enero nieva a menudo.', e: 'Con los meses: im Jänner (en Austria) / im Januar.' },
      { s: '___ Winter trage ich einen Mantel.', a: 'Im', d: ['Am', 'Um'], t: 'En invierno llevo abrigo.', e: 'Estación → im.' },
      { s: 'Ich habe ___ Mai Geburtstag.', a: 'im', d: ['am', 'um'], t: 'Cumplo años en mayo.', e: 'Mes → im.' },
      { s: '___ Frühling blüht alles.', a: 'Im', d: ['Am', 'In'], t: 'En primavera florece todo.', e: 'im Frühling.' },
      { s: 'Wir fahren ___ August ans Meer.', a: 'im', d: ['am', 'um'], t: 'En agosto vamos al mar.', e: 'Mes → im.' },
      { s: '___ Herbst regnet es viel.', a: 'Im', d: ['Am', 'Um'], t: 'En otoño llueve mucho.', e: 'Estación → im.' },
      { s: 'Aber ___ Montag habe ich frei.', a: 'am', d: ['im', 'um'], t: 'Pero el lunes tengo libre.', e: 'Cuidado: los días llevan "am", no "im".' },
      { s: '___ Dezember ist es sehr kalt.', a: 'Im', d: ['Am', 'Um'], t: 'En diciembre hace mucho frío.', e: 'Mes → im.' },
      { s: 'Was machst du ___ Sommer?', a: 'im', d: ['am', 'um'], t: '¿Qué haces en verano?', e: 'Estación → im.' },
      { s: 'Der Kurs endet ___ Juni.', a: 'im', d: ['am', 'um'], t: 'El curso termina en junio.', e: 'Mes → im.' },
      { s: 'Und ___ acht Uhr fängt er an.', a: 'um', d: ['im', 'am'], t: 'Y empieza a las ocho.', e: 'Las horas llevan "um".' },
      { s: '___ Oktober werden die Tage kürzer.', a: 'Im', d: ['Am', 'Um'], t: 'En octubre los días se acortan.', e: 'Meses → "im".' },
      { s: 'Wir sehen uns ___ Wochenende.', a: 'am', d: ['im', 'um'], t: 'Nos vemos el fin de semana.', e: '"das Wochenende" y los días llevan "am", no "im".' },
      { s: 'Der Zug fährt ___ halb acht.', a: 'um', d: ['im', 'am'], t: 'El tren sale a las siete y media.', e: 'Las horas exactas → "um".' },
      { s: '___ Sommer haben die Kinder frei.', a: 'Im', d: ['Am', 'Um'], t: 'En verano los niños tienen vacaciones.', e: 'Estaciones → "im".' },
      { s: '___ Freitag gehe ich immer schwimmen.', a: 'Am', d: ['Im', 'Um'], t: 'Los viernes voy siempre a nadar.', e: 'Días de la semana → "am".' },
      { s: '___ Februar ist es hier noch kalt.', a: 'Im', d: ['Am', 'Um'], t: 'En febrero aquí todavía hace frío.', e: 'Meses → "im".' },
      { s: 'Die Party beginnt ___ acht.', a: 'um', d: ['im', 'am'], t: 'La fiesta empieza a las ocho.', e: 'Hora → "um".' },
      { s: '___ Abend lese ich meistens.', a: 'Am', d: ['Im', 'Um'], t: 'Por la noche suelo leer.', e: 'Las partes del día llevan "am" (menos "in der Nacht").' },
      { s: '___ Juli fahren wir immer ans Meer.', a: 'Im', d: ['Am', 'Um'], t: 'En julio vamos siempre al mar.', e: 'Meses → "im".' },
      { s: 'Wann hast du Geburtstag? ___ März.', a: 'Im', d: ['Am', 'Um'], t: '¿Cuándo es tu cumpleaños? En marzo.', e: 'Mes solo → "im".' },
      { s: '___ Dienstag habe ich einen Termin.', a: 'Am', d: ['Im', 'Um'], t: 'El martes tengo cita.', e: 'Día → "am".' },
      { s: '___ Winter schneit es hier oft.', a: 'Im', d: ['Am', 'In'], t: 'En invierno aquí nieva a menudo.', e: 'im + estación del año.' },
      { s: '___ August fliegen wir nach Spanien.', a: 'Im', d: ['Am', 'Um'], t: 'En agosto volamos a España.', e: 'im + mes.' },
      { s: '___ Frühling wird es endlich wärmer.', a: 'Im', d: ['Am', 'Um'], t: 'En primavera por fin hace más calor.', e: 'im + estación.' },
      { s: '___ Oktober regnet es hier fast täglich.', a: 'Im', d: ['Am', 'In'], t: 'En octubre aquí llueve casi a diario.', e: 'im + mes.' },
      { s: '___ Sommer bleibt es bis neun hell.', a: 'Im', d: ['Am', 'Um'], t: 'En verano hay luz hasta las nueve.', e: 'im + estación.' },
      { s: '___ Februar ist es am kältesten.', a: 'Im', d: ['Am', 'Um'], t: 'En febrero es cuando más frío hace.', e: 'im + mes.' },
      { s: '___ Herbst sind die Wälder besonders schön.', a: 'Im', d: ['Am', 'In'], t: 'En otoño los bosques están especialmente bonitos.', e: 'im + estación.' },
      { s: 'Wir treffen uns ___ Freitag im Café.', a: 'am', d: ['im', 'um'], t: 'Quedamos el viernes en el café.', e: 'am + día de la semana; im es para meses y estaciones.' },
      { s: 'Der Kurs fängt ___ neun Uhr an.', a: 'um', d: ['im', 'am'], t: 'El curso empieza a las nueve.', e: 'um + hora exacta.' },
      { s: '___ Sommer fahren wir immer ans Meer.', a: 'Im', d: ['Am', 'Um'], t: 'En verano vamos siempre al mar.', e: 'im + estación del año.' },
      { s: '___ Wochenende schlafe ich länger.', a: 'Am', d: ['Im', 'Um'], t: 'El fin de semana duermo más.', e: 'am Wochenende es fijo; aquí no va im.' },
      { s: '___ Mai ist meine große Prüfung.', a: 'Im', d: ['Am', 'Um'], t: 'En mayo es mi examen importante.', e: 'im + mes.' },
      { s: 'Der Film beginnt ___ halb acht.', a: 'um', d: ['im', 'am'], t: 'La película empieza a las siete y media.', e: 'um + hora.' },
      { s: '___ Abend bin ich meistens müde.', a: 'Am', d: ['Im', 'Um'], t: 'Por la tarde suelo estar cansado.', e: 'Las partes del día llevan am, no im.' },
      { s: '___ Winter wird es sehr früh dunkel.', a: 'Im', d: ['Am', 'Um'], t: 'En invierno oscurece muy pronto.', e: 'im + estación.' },
      { s: '___ vierzehnten Mai habe ich Geburtstag.', a: 'Am', d: ['Im', 'Um'], t: 'El catorce de mayo es mi cumpleaños.', e: 'Con una fecha exacta: am 14. Mai.' },
      { s: 'Der Kurs geht ___ Oktober bis Februar.', a: 'von', d: ['im', 'am'], t: 'El curso va de octubre a febrero.', e: 'von … bis para un periodo con principio y final.' },
      { s: 'Wir sehen uns ___ einer Woche wieder.', a: 'in', d: ['im', 'am'], t: 'Nos vemos dentro de una semana.', e: 'in + dativo para algo dentro de un plazo.' },
      { s: '___ Nachmittag habe ich leider zwei Termine.', a: 'Am', d: ['Im', 'Um'], t: 'Por la tarde tengo, por desgracia, dos citas.', e: 'Las partes del día llevan am.' },
      { s: 'Der Zug geht ___ Viertel nach acht.', a: 'um', d: ['im', 'am'], t: 'El tren sale a las ocho y cuarto.', e: 'um + hora.' },
      { s: '___ Januar war es hier wochenlang eiskalt.', a: 'Im', d: ['Am', 'Um'], t: 'En enero hizo aquí un frío helador durante semanas.', e: 'im + mes.' },
      { s: '___ Frühling blüht bei uns der ganze Hof.', a: 'Im', d: ['Am', 'Um'], t: 'En primavera florece todo el patio.', e: 'im + estación.' },
      { s: 'Der Laden macht schon ___ acht Uhr auf.', a: 'um', d: ['im', 'am'], t: 'La tienda abre ya a las ocho.', e: 'um + hora exacta.' },
      { s: '___ Dienstag habe ich leider gar keine Zeit.', a: 'Am', d: ['Im', 'Um'], t: 'El martes no tengo nada de tiempo.', e: 'am + día de la semana.' },
      { s: '___ Sommer 2019 bin ich nach Wien gezogen.', a: 'Im', d: ['Am', 'Um'], t: 'En el verano de 2019 me mudé a Viena.', e: 'im + estación, también con el año detrás.' }
    ],
    orders: [
      { sol: ['Im', 'Sommer', 'ist', 'es', 'in', 'Wien', 'sehr', 'heiß'], alt: [['Es', 'ist', 'im', 'Sommer', 'in', 'Wien', 'sehr', 'heiß']], t: 'En verano hace mucho calor en Viena.', e: 'im + estación al principio → inversión.' },
      { sol: ['Ich', 'habe', 'im', 'Mai', 'Geburtstag'], t: 'Cumplo años en mayo.', e: 'im + mes.' },
      { sol: ['Im', 'Winter', 'trage', 'ich', 'immer', 'einen', 'Schal'], alt: [['Ich', 'trage', 'im', 'Winter', 'immer', 'einen', 'Schal']], t: 'En invierno llevo siempre bufanda.', e: 'im Winter (estación).' },
      { sol: ['Im', 'Jänner', 'schneit', 'es', 'sehr', 'oft'], alt: [['Es', 'schneit', 'im', 'Jänner', 'sehr', 'oft']], t: 'En enero nieva muy a menudo.', e: 'im + mes.' },
      { sol: ['Im', 'Sommer', 'fahren', 'wir', 'ans', 'Meer'], alt: [['Wir', 'fahren', 'im', 'Sommer', 'ans', 'Meer']], t: 'En verano vamos al mar.', e: 'El complemento de tiempo abre y el verbo va segundo.' },
      { sol: ['Am', 'Montag', 'fängt', 'der', 'Kurs', 'an'], t: 'El lunes empieza el curso.', e: 'Separable: fängt … an.' },
      { sol: ['Am', 'Wochenende', 'schlafe', 'ich', 'immer', 'länger'], alt: [['Ich', 'schlafe', 'am', 'Wochenende', 'immer', 'länger']], t: 'Los fines de semana siempre duermo más.', e: '"am Wochenende" abre la frase, así que el verbo va segundo.' }
    ],
    clozes: [
      { txt: '___ Sommer stehe ich früher auf. ___ Montag fängt mein Kurs an, und zwar ___ neun Uhr. ___ Wochenende schlafe ich dafür lange.', a: ['Im', 'Am', 'um', 'Am'], extra: ['In', 'An', 'Bei'], t: 'En verano me levanto antes. El lunes empieza mi curso, y además a las nueve. En cambio el fin de semana duermo hasta tarde.', e: 'Las tres preposiciones de tiempo en cuatro huecos: "im" para estaciones y meses, "am" para días y el fin de semana, "um" para la hora.' }
    ]
  },

  // ---------- A1.2 L12: vor / nach / in ----------
  'temporale-prapositionen-vor-nach-in-dati': {
    reserva: ['seit', 'ab', 'bis'],
    picks: [
      { s: '___ der Arbeit gehe ich einkaufen.', a: 'Nach', d: ['Vor', 'In'], t: 'Después del trabajo voy a comprar.', e: '"nach" = después de; siempre con dativo.' },
      { s: '___ einer Woche habe ich den Termin.', a: 'In', d: ['Vor', 'Nach'], t: 'Dentro de una semana tengo la cita.', e: '"in" + dativo indica un momento futuro.' },
      { s: '___ dem Essen trinke ich einen Kaffee.', a: 'Nach', d: ['Vor', 'Ab'], t: 'Después de comer tomo un café.', e: 'nach + dativo.' },
      { s: '___ dem Frühstück putze ich mir die Zähne.', a: 'Nach', d: ['Vor', 'In'], t: 'Después del desayuno me lavo los dientes.', e: 'nach + dem Frühstück.' },
      { s: 'Ich war ___ dem Termin sehr nervös.', a: 'vor', d: ['nach', 'in'], t: 'Antes de la cita estaba muy nervioso.', e: '"vor" = antes de, con dativo.' },
      { s: '___ zwei Stunden bin ich zurück.', a: 'In', d: ['Vor', 'Nach'], t: 'Vuelvo dentro de dos horas.', e: 'in + dativo para el futuro.' },
      { s: '___ dem Kurs treffe ich meine Freundin.', a: 'Nach', d: ['Vor', 'Ab'], t: 'Después del curso quedo con mi amiga.', e: 'nach + dativo.' },
      { s: 'Bitte kommen Sie ___ der Besprechung.', a: 'vor', d: ['nach', 'in'], t: 'Venga antes de la reunión, por favor.', e: 'vor + dativo femenino: vor der Besprechung.' },
      { s: '___ einem Monat ziehen wir um.', a: 'In', d: ['Vor', 'Seit'], t: 'Dentro de un mes nos mudamos.', e: 'Futuro → in + dativo.' },
      { s: '___ dem Urlaub muss ich viel arbeiten.', a: 'Vor', d: ['Nach', 'In'], t: 'Antes de las vacaciones tengo que trabajar mucho.', e: 'vor + dem Urlaub.' },
      { s: 'Was machst du ___ der Schule?', a: 'nach', d: ['vor', 'in'], t: '¿Qué haces después del colegio?', e: 'nach + der Schule (femenino).' },
      { s: '___ einem Jahr habe ich hier angefangen.', a: 'Vor', d: ['In', 'Nach'], t: 'Hace un año empecé aquí.', e: 'Ojo: "vor" + dativo también significa "hace" (pasado).' },
      { s: '___ dem Konzert gehen wir noch etwas trinken.', a: 'Nach', d: ['Vor', 'In'], t: 'Después del concierto vamos a tomar algo.', e: '"nach" + dativo: lo que viene después.' },
      { s: '___ drei Tagen fahre ich nach Hause.', a: 'In', d: ['Nach', 'Vor'], t: 'Dentro de tres días me voy a casa.', e: '"in" + dativo mira al futuro: dentro de.' },
      { s: '___ dem Unterricht wiederhole ich immer den Wortschatz.', a: 'Vor', d: ['Nach', 'In'], t: 'Antes de clase repaso siempre el vocabulario.', e: '"vor" + dativo: lo anterior.' },
      { s: 'Wir treffen uns ___ dem Kino.', a: 'vor', d: ['in', 'nach'], t: 'Quedamos antes del cine.', e: '"vor" + dativo.' },
      { s: '___ einer halben Stunde bin ich fertig.', a: 'In', d: ['Nach', 'Vor'], t: 'Dentro de media hora he terminado.', e: '"in" para un plazo futuro.' },
      { s: '___ dem Mittagessen mache ich eine Pause.', a: 'Nach', d: ['Vor', 'In'], t: 'Después de comer hago una pausa.', e: '"nach" + dativo.' },
      { s: 'Er hat ___ einem Jahr geheiratet.', a: 'vor', d: ['in', 'nach'], t: 'Se casó hace un año.', e: '"vor" + dativo también sirve para "hace": vor einem Jahr.' },
      { s: '___ zwei Wochen fängt der neue Kurs an.', a: 'In', d: ['Vor', 'Nach'], t: 'Dentro de dos semanas empieza el curso nuevo.', e: '"in" → futuro.' },
      { s: 'Ruf mich bitte ___ dem Termin an.', a: 'nach', d: ['in', 'vor'], t: 'Llámame después de la cita.', e: '"nach" + dativo.' },
      { s: '___ der Prüfung konnte ich nicht schlafen.', a: 'Vor', d: ['Nach', 'In'], t: 'Antes del examen no podía dormir.', e: '"vor" para lo anterior.' },
      { s: '___ einem Monat sind wir umgezogen.', a: 'Vor', d: ['In', 'Nach'], t: 'Nos mudamos hace un mes.', e: '"vor einem Monat" = hace un mes.' },
      { s: '___ dem Sport bin ich immer hungrig.', a: 'Nach', d: ['Vor', 'In'], t: 'Después de hacer deporte siempre tengo hambre.', e: '«nach» + dativo.' },
      { s: 'Der Bus kommt ___ fünf Minuten.', a: 'in', d: ['vor', 'nach'], t: 'El autobús llega dentro de cinco minutos.', e: '"in" para lo que falta.' },
      { s: '___ dem Frühstück lese ich die Nachrichten.', a: 'Nach', d: ['Vor', 'In'], t: 'Después de desayunar leo las noticias.', e: '"nach" + dativo.' },
      { s: 'Wir sind ___ einer Stunde angekommen.', a: 'vor', d: ['in', 'nach'], t: 'Llegamos hace una hora.', e: 'Con pasado, "vor" = hace.' },
      { s: '___ dem Essen mache ich einen Kaffee.', a: 'Nach', d: ['Vor', 'In'], t: 'Después de comer me hago un café.', e: 'nach + dativo para lo que viene después.' },
      { s: '___ der Besprechung schreibe ich das Protokoll.', a: 'Nach', d: ['Vor', 'Ab'], t: 'Después de la reunión escribo el acta.', e: 'nach + dativo.' },
      { s: '___ dem Termin war ich sehr nervös.', a: 'Vor', d: ['Nach', 'In'], t: 'Antes de la cita estaba muy nervioso.', e: 'vor + dativo para lo anterior.' },
      { s: '___ zwei Wochen fahren wir weg.', a: 'In', d: ['Vor', 'Nach'], t: 'Dentro de dos semanas nos vamos.', e: 'in + dativo para el futuro.' },
      { s: '___ einem Jahr bin ich hergezogen.', a: 'Vor', d: ['In', 'Nach'], t: 'Hace un año me mudé aquí.', e: 'vor + dativo también sirve para el pasado.' },
      { s: '___ dem Kurs gehen wir immer essen.', a: 'Nach', d: ['Vor', 'Bis'], t: 'Después del curso siempre vamos a comer.', e: 'nach + dativo.' }
    ],
    orders: [
      { sol: ['Nach', 'der', 'Arbeit', 'gehe', 'ich', 'einkaufen'], alt: [['Ich', 'gehe', 'nach', 'der', 'Arbeit', 'einkaufen']], t: 'Después del trabajo voy a comprar.', e: 'nach + dativo; complemento inicial → inversión.' },
      { sol: ['In', 'einer', 'Woche', 'habe', 'ich', 'den', 'Termin'], alt: [['Ich', 'habe', 'in', 'einer', 'Woche', 'den', 'Termin']], t: 'Dentro de una semana tengo la cita.', e: 'in + dativo (futuro).' },
      { sol: ['Vor', 'dem', 'Essen', 'wasche', 'ich', 'mir', 'die', 'Hände'], alt: [['Ich', 'wasche', 'mir', 'vor', 'dem', 'Essen', 'die', 'Hände']], t: 'Antes de comer me lavo las manos.', e: 'vor + dativo.' },
      { sol: ['Ich', 'rufe', 'dich', 'nach', 'der', 'Besprechung', 'an'], t: 'Te llamo después de la reunión.', e: 'nach der Besprechung dentro de la frase.' },
      { sol: ['Nach', 'dem', 'Konzert', 'gehen', 'wir', 'etwas', 'trinken'], alt: [['Wir', 'gehen', 'nach', 'dem', 'Konzert', 'etwas', 'trinken']], t: 'Después del concierto vamos a tomar algo.', e: 'El complemento abre y el verbo va segundo.' },
      { sol: ['In', 'zwei', 'Wochen', 'fängt', 'der', 'Kurs', 'an'], t: 'Dentro de dos semanas empieza el curso.', e: 'Separable: fängt … an.' },
      { sol: ['Vor', 'dem', 'Termin', 'war', 'ich', 'sehr', 'nervös'], alt: [['Ich', 'war', 'vor', 'dem', 'Termin', 'sehr', 'nervös']], t: 'Antes de la cita estaba muy nervioso.', e: '"vor" + dativo al principio → inversión.' }
    ],
    clozes: [
      { txt: '___ einem Jahr bin ich nach Wien gekommen. ___ dem ersten Kurs hatte ich Angst, aber ___ zwei Wochen war alles normal. ___ dem Unterricht gehe ich jetzt oft mit Kolleginnen einen Kaffee trinken.', a: ['Vor', 'Vor', 'nach', 'Nach'], extra: ['In', 'Nach', 'vor', 'Vor'], t: 'Hace un año vine a Viena. Antes del primer curso tenía miedo, pero al cabo de dos semanas todo era normal. Después de clase ahora voy muchas veces a tomar café con mis compañeras.', e: 'El mismo "vor" hace dos cosas: con un periodo significa "hace" y con un suceso significa "antes de". Y el tercero es "nach" porque mira hacia atrás desde el presente, no hacia delante.' }
    ]
  },

  // ---------- A1.2 L12: ab / bis ----------
  'temporale-prapositionen-ab-bis': {
    reserva: ['seit', 'von', 'in', 'am'],
    picks: [
      { s: '___ Montag bin ich wieder im Büro.', a: 'Ab', d: ['Bis', 'Seit'], t: 'A partir del lunes vuelvo a estar en la oficina.', e: '"ab" = a partir de (mira al futuro).' },
      { s: 'Das Amt hat ___ 15 Uhr offen.', a: 'bis', d: ['ab', 'seit'], t: 'La oficina abre hasta las 15.', e: '"bis" marca el final.' },
      { s: '___ nächster Woche habe ich Urlaub.', a: 'Ab', d: ['Bis', 'Seit'], t: 'A partir de la semana que viene tengo vacaciones.', e: 'ab + dativo.' },
      { s: 'Ich bleibe ___ Freitag in Wien.', a: 'bis', d: ['ab', 'seit'], t: 'Me quedo en Viena hasta el viernes.', e: 'bis + día, sin artículo.' },
      { s: '___ morgen rauche ich nicht mehr.', a: 'Ab', d: ['Bis', 'Seit'], t: 'A partir de mañana no fumo más.', e: 'Futuro → ab.' },
      { s: 'Der Kurs geht ___ Ende Juni.', a: 'bis', d: ['ab', 'seit'], t: 'El curso dura hasta finales de junio.', e: 'bis marca el límite final.' },
      { s: '___ wann bleibst du hier?', a: 'Bis', d: ['Ab', 'Seit'], t: '¿Hasta cuándo te quedas aquí?', e: 'Preguntar por el final: Bis wann?' },
      { s: '___ heute gilt der neue Preis.', a: 'Ab', d: ['Bis', 'Seit'], t: 'Desde hoy rige el nuevo precio.', e: 'ab heute (a partir de hoy).' },
      { s: 'Ich arbeite ___ 17 Uhr.', a: 'bis', d: ['ab', 'seit'], t: 'Trabajo hasta las 17.', e: 'bis + hora.' },
      { s: '___ dem ersten Mai ist alles anders.', a: 'Ab', d: ['Bis', 'Seit'], t: 'A partir del uno de mayo todo es distinto.', e: 'ab + dativo cuando lleva artículo.' },
      { s: 'Warte bitte ___ morgen.', a: 'bis', d: ['ab', 'seit'], t: 'Espera hasta mañana, por favor.', e: 'bis morgen.' },
      { s: 'Ich wohne ___ drei Jahren in Wien.', a: 'seit', d: ['ab', 'bis'], t: 'Vivo en Viena desde hace tres años.', e: 'Algo que empezó en el pasado y sigue → seit, no "ab".' },
      { s: 'Das Geschäft ist ___ 20 Uhr geöffnet.', a: 'bis', d: ['ab', 'seit'], t: 'La tienda abre hasta las 20:00.', e: '"bis" marca el final de un periodo.' },
      { s: '___ Januar habe ich einen neuen Job.', a: 'Ab', d: ['Bis', 'Seit'], t: 'A partir de enero tengo trabajo nuevo.', e: '"ab" marca el comienzo, mirando al futuro.' },
      { s: 'Ich lerne Deutsch ___ zwei Jahren.', a: 'seit', d: ['ab', 'bis'], t: 'Llevo dos años aprendiendo alemán.', e: 'Algo que empezó en el pasado y sigue → "seit".' },
      { s: 'Der Kurs dauert ___ Juli.', a: 'bis', d: ['ab', 'seit'], t: 'El curso dura hasta julio.', e: '"bis" para el final.' },
      { s: '___ nächstem Montag gilt der neue Fahrplan.', a: 'Ab', d: ['Bis', 'Seit'], t: 'A partir del lunes que viene entra el horario nuevo.', e: '"ab" + comienzo futuro.' },
      { s: '___ wann hast du Zeit?', a: 'Bis', d: ['Ab', 'Seit'], t: '¿Hasta cuándo tienes tiempo?', e: 'Preguntar por el final → Bis wann?' },
      { s: 'Wir wohnen ___ 2019 in dieser Wohnung.', a: 'seit', d: ['ab', 'bis'], t: 'Vivimos en este piso desde 2019.', e: 'Desde un punto del pasado hasta hoy → "seit".' },
      { s: 'Die Praxis hat ___ acht Uhr offen.', a: 'ab', d: ['bis', 'seit'], t: 'La consulta abre a partir de las ocho.', e: '"ab" para el momento en que empieza.' },
      { s: 'Ich bleibe ___ Sonntag bei meinen Eltern.', a: 'bis', d: ['ab', 'seit'], t: 'Me quedo hasta el domingo en casa de mis padres.', e: '"bis" + final.' },
      { s: '___ heute Abend muss der Bericht fertig sein.', a: 'Bis', d: ['Ab', 'Seit'], t: 'El informe tiene que estar listo para esta noche.', e: 'Plazo límite → "bis".' },
      { s: '___ wann arbeitest du hier schon?', a: 'Seit', d: ['Ab', 'Bis'], t: '¿Desde cuándo trabajas aquí?', e: 'Preguntar por el comienzo de algo que sigue → Seit wann?' },
      { s: '___ dem Sommer fahre ich mit dem Rad zur Arbeit.', a: 'Seit', d: ['Ab', 'Bis'], t: 'Desde el verano voy al trabajo en bici.', e: 'Empezó en verano y sigue → "seit".' },
      { s: 'Die Anmeldung ist ___ Freitag möglich.', a: 'bis', d: ['ab', 'seit'], t: 'La inscripción está abierta hasta el viernes.', e: '"bis" cierra el plazo.' },
      { s: '___ morgen gibt es eine neue Regel.', a: 'Ab', d: ['Bis', 'Seit'], t: 'A partir de mañana hay una norma nueva.', e: '"ab" + comienzo.' },
      { s: 'Er ist ___ einer Woche krank.', a: 'seit', d: ['ab', 'bis'], t: 'Lleva una semana enfermo.', e: 'Duración que llega hasta hoy → "seit".' },
      { s: '___ Montag bin ich wieder da.', a: 'Ab', d: ['Bis', 'Von'], t: 'A partir del lunes vuelvo a estar.', e: 'ab marca el principio.' },
      { s: 'Ich warte hier ___ sechs Uhr.', a: 'bis', d: ['ab', 'von'], t: 'Espero aquí hasta las seis.', e: 'bis marca el final.' },
      { s: '___ nächster Woche gilt der neue Preis.', a: 'Ab', d: ['Bis', 'Nach'], t: 'A partir de la semana que viene rige el precio nuevo.', e: 'ab + dativo.' },
      { s: 'Der Antrag muss ___ Freitag da sein.', a: 'bis', d: ['ab', 'von'], t: 'La solicitud tiene que estar el viernes.', e: 'bis marca la fecha límite.' },
      { s: '___ wann haben Sie geöffnet?', a: 'Bis', d: ['Ab', 'Nach'], t: '¿Hasta qué hora abren?', e: 'bis wann pregunta por el final.' },
      { s: '___ wann kann ich kommen?', a: 'Ab', d: ['Bis', 'In'], t: '¿A partir de cuándo puedo venir?', e: 'ab wann pregunta por el principio.' }
    ],
    orders: [
      { sol: ['Ab', 'Montag', 'bin', 'ich', 'wieder', 'im', 'Büro'], t: 'A partir del lunes vuelvo a estar en la oficina.', e: 'ab + día al principio → inversión.' },
      { sol: ['Das', 'Amt', 'hat', 'bis', 'fünfzehn', 'Uhr', 'offen'], t: 'La oficina abre hasta las 15.', e: 'bis + hora.' },
      { sol: ['Ich', 'bleibe', 'bis', 'Freitag', 'in', 'Wien'], t: 'Me quedo en Viena hasta el viernes.', e: 'bis Freitag.' },
      { sol: ['Ab', 'nächster', 'Woche', 'habe', 'ich', 'Urlaub'], t: 'A partir de la semana que viene tengo vacaciones.', e: 'ab + dativo.' },
      { sol: ['Ab', 'Januar', 'habe', 'ich', 'einen', 'neuen', 'Job'], t: 'A partir de enero tengo trabajo nuevo.', e: 'El complemento de tiempo abre y el verbo va segundo.' },
      { sol: ['Das', 'Amt', 'hat', 'bis', '15', 'Uhr', 'geöffnet'], t: 'La oficina abre hasta las 15:00.', e: '"bis" cierra el periodo, al final de la frase.' },
      { sol: ['Ich', 'wohne', 'seit', 'drei', 'Jahren', 'in', 'Wien'], t: 'Vivo en Viena desde hace tres años.', e: '"seit" + dativo, y en alemán va en presente.' }
    ],
    clozes: [
      { txt: '___ zwei Jahren arbeite ich in derselben Firma. ___ September mache ich einen Abendkurs, und ___ Ende Juni habe ich jeden Dienstag Unterricht. ___ dann bleibt wenig Freizeit.', a: ['Seit', 'Ab', 'bis', 'Bis'], extra: ['von', 'für', 'nach'], t: 'Llevo dos años trabajando en la misma empresa. A partir de septiembre hago un curso de tarde, y hasta finales de junio tengo clase todos los martes. Hasta entonces me queda poco tiempo libre.', e: 'Los tres se confunden: "seit" es desde el pasado hasta hoy, "ab" es desde un momento hacia delante, y "bis" es el final del plazo.' }
    ]
  },

  // ---------- A2.1 L4: für / über + acusativo ----------
  'praep-fuer-ueber': {
    picks: [
      { s: 'Ich bin ___ ein Jahr in dieser Abteilung.', a: 'für', d: ['seit', 'in'], t: 'Estoy un año en este departamento.', e: '"für" = duración prevista, con acusativo (ein Jahr).' },
      { s: '___ die Feiertage ist das Büro geschlossen.', a: 'Über', d: ['Für', 'Seit'], t: 'Durante las fiestas la oficina está cerrada.', e: '"über" = a lo largo de, con acusativo.' },
      { s: 'Der Vertrag gilt ___ sechs Monate.', a: 'für', d: ['seit', 'ab'], t: 'El contrato es válido por seis meses.', e: 'Duración prevista → für + acusativo.' },
      { s: 'Wir bleiben ___ das Wochenende in Graz.', a: 'über', d: ['für', 'seit'], t: 'Pasamos el fin de semana en Graz.', e: 'über das Wochenende (acusativo).' },
      { s: 'Ich fahre ___ eine Woche nach Spanien.', a: 'für', d: ['seit', 'in'], t: 'Me voy una semana a España.', e: 'für + acusativo.' },
      { s: '___ den Sommer arbeite ich im Café.', a: 'Über', d: ['Für', 'Ab'], t: 'Durante el verano trabajo en la cafetería.', e: 'über + acusativo masculino: den Sommer.' },
      { s: 'Die Wohnung ist ___ zwei Jahre vermietet.', a: 'für', d: ['seit', 'ab'], t: 'El piso está alquilado por dos años.', e: 'Duración prevista → für.' },
      { s: 'Ich arbeite hier ___ zwei Jahren.', a: 'seit', d: ['für', 'über'], t: 'Trabajo aquí desde hace dos años.', e: 'Cuidado: algo que sigue desde el pasado lleva "seit" + dativo.' },
      { s: 'Das Projekt läuft ___ drei Monate.', a: 'für', d: ['seit', 'ab'], t: 'El proyecto dura tres meses.', e: 'für + acusativo.' },
      { s: '___ die Ferien fahren wir ans Meer.', a: 'Über', d: ['Für', 'Seit'], t: 'Durante las vacaciones vamos al mar.', e: 'über + acusativo plural: die Ferien.' },
      { s: 'Kannst du ___ einen Moment warten?', a: 'für', d: ['seit', 'über'], t: '¿Puedes esperar un momento?', e: 'für einen Moment (acusativo masculino).' },
      { s: 'Ich brauche das Auto nur ___ einen Tag.', a: 'für', d: ['seit', 'ab'], t: 'Solo necesito el coche un día.', e: 'für einen Tag.' },
      { s: 'Das Geschenk ist ___ dich.', a: 'für', d: ['über', 'von'], t: 'El regalo es para ti.', e: '"für" siempre con acusativo: für dich.' },
      { s: 'Wir sprechen morgen ___ das Projekt.', a: 'über', d: ['für', 'von'], t: 'Mañana hablamos del proyecto.', e: '"sprechen über" + acusativo.' },
      { s: 'Danke ___ die Einarbeitung!', a: 'für', d: ['über', 'an'], t: '¡Gracias por la formación inicial!', e: '"danken für" + acusativo.' },
      { s: 'Der Chef hat ___ die neuen Regeln informiert.', a: 'über', d: ['für', 'von'], t: 'El jefe informó sobre las normas nuevas.', e: '"informieren über" + acusativo.' },
      { s: 'Ich arbeite hier ___ einen Monat.', a: 'für', d: ['über', 'seit'], t: 'Trabajo aquí por un mes.', e: '"für" + periodo previsto, en acusativo.' },
      { s: 'Was denkst du ___ den neuen Kollegen?', a: 'über', d: ['für', 'an'], t: '¿Qué piensas del compañero nuevo?', e: '"denken über" + acusativo.' },
      { s: 'Diese Unterlagen sind ___ die Besprechung.', a: 'für', d: ['über', 'zu'], t: 'Estos documentos son para la reunión.', e: 'für + acusativo femenino: für die.' },
      { s: 'Wir haben lange ___ das Gehalt gesprochen.', a: 'über', d: ['für', 'von'], t: 'Hablamos mucho rato del sueldo.', e: 'über + acusativo neutro: über das.' },
      { s: 'Ich bleibe ___ zwei Wochen in Berlin.', a: 'für', d: ['seit', 'über'], t: 'Me quedo dos semanas en Berlín.', e: 'für + acusativo para un periodo previsto.' },
      { s: 'Die Besprechung dauerte ___ zwei Stunden.', a: 'über', d: ['für', 'seit'], t: 'La reunión duró más de dos horas.', e: 'über + acusativo para más de.' },
      { s: 'Der Vertrag gilt zunächst ___ ein Jahr.', a: 'für', d: ['seit', 'ab'], t: 'El contrato vale de momento un año.', e: 'für + acusativo.' },
      { s: 'Wir arbeiten schon ___ eine Woche daran.', a: 'über', d: ['für', 'bis'], t: 'Llevamos más de una semana con eso.', e: 'über + acusativo.' },
      { s: 'Ich fahre ___ drei Tage auf Dienstreise.', a: 'für', d: ['seit', 'über'], t: 'Me voy tres días de viaje de trabajo.', e: 'für marca la duración prevista.' },
      { s: 'Das Päckchen da ist für ___ Schwester, nicht für mich.', a: 'meine', d: ['meiner', 'meinem'], t: 'Ese paquete es para mi hermana, no para mí.', e: 'für + acusativo: meine Schwester.' },
      { s: 'Wir haben den halben Abend über ___ Film diskutiert.', a: 'den', d: ['dem', 'der'], t: 'Nos pasamos media noche discutiendo sobre la película.', e: 'über + acusativo masculino: den Film.' },
      { s: 'Seit dem Praktikum interessiert er sich für ___ Thema.', a: 'dieses', d: ['diesem', 'dieser'], t: 'Desde las prácticas le interesa este tema.', e: 'für + acusativo neutro: dieses Thema.' },
      { s: 'Sie hat zwei Stunden lang über ___ Reise erzählt.', a: 'ihre', d: ['ihrer', 'ihrem'], t: 'Estuvo dos horas contando cosas de su viaje.', e: 'über + acusativo femenino: ihre Reise.' },
      { s: '___ wen ist eigentlich der ganze Kuchen?', a: 'Für', d: ['Über', 'Um'], t: '¿Para quién es toda esa tarta?', e: 'für + acusativo también en la pregunta: für wen.' },
      { s: 'Über ___ müssen wir noch mal in Ruhe reden.', a: 'das Problem', d: ['dem Problem', 'des Problems'], t: 'Del problema tenemos que volver a hablar con calma.', e: 'über + acusativo neutro: über das Problem.' },
      { s: 'Tausend Dank für ___ Hilfe gestern!', a: 'die', d: ['der', 'dem'], t: '¡Mil gracias por la ayuda de ayer!', e: 'für + acusativo femenino: die Hilfe.' },
      { s: 'Was denkst du über ___ Vorschlag von Tom?', a: 'den', d: ['dem', 'der'], t: '¿Qué te parece la propuesta de Tom?', e: 'über + acusativo masculino: den Vorschlag.' }
    ],
    orders: [
      { sol: ['Ich', 'bin', 'für', 'ein', 'Jahr', 'in', 'dieser', 'Abteilung'], t: 'Estoy un año en este departamento.', e: 'für + acusativo.' },
      { sol: ['Über', 'die', 'Feiertage', 'ist', 'das', 'Büro', 'geschlossen'], t: 'Durante las fiestas la oficina está cerrada.', e: 'über + acusativo, al principio → inversión.' },
      { sol: ['Der', 'Vertrag', 'gilt', 'für', 'sechs', 'Monate'], t: 'El contrato es válido por seis meses.', e: 'für sechs Monate.' },
      { sol: ['Wir', 'bleiben', 'über', 'das', 'Wochenende', 'in', 'Graz'], t: 'Pasamos el fin de semana en Graz.', e: 'über das Wochenende.' }
    ],
    clozes: [
      { txt: 'Danke ___ die Einarbeitung! Morgen sprechen wir ___ den neuen Vertrag, und der Chef informiert uns ___ die Änderungen.', a: ['für', 'über', 'über'], extra: ['von', 'an', 'mit'], t: '¡Gracias por la formación inicial! Mañana hablamos del contrato nuevo, y el jefe nos informa sobre los cambios.', e: 'Las tres van con acusativo, pero cada verbo pide una: danken für, sprechen über, informieren über.' }
    ]
  },

  // ---------- A2.1 L4: repaso vor / nach / von … bis ----------
  'praep-vor-nach': {
    reserva: ['seit', 'bei', 'ab'],
    picks: [
      { s: '___ der Besprechung rufe ich dich an.', a: 'Nach', d: ['Vor', 'Seit'], t: 'Después de la reunión te llamo.', e: 'nach + dativo femenino: nach der Besprechung.' },
      { s: 'Ich arbeite ___ Montag bis Freitag.', a: 'von', d: ['ab', 'seit'], t: 'Trabajo de lunes a viernes.', e: 'von … bis para el intervalo.' },
      { s: '___ dem Vorstellungsgespräch war ich sehr nervös.', a: 'Vor', d: ['Nach', 'Seit'], t: 'Antes de la entrevista estaba muy nervioso.', e: 'vor + dativo neutro: vor dem Gespräch.' },
      { s: '___ dem Mittagessen habe ich eine Pause.', a: 'Nach', d: ['Vor', 'Ab'], t: 'Después de comer tengo una pausa.', e: 'nach + dativo.' },
      { s: 'Die Sitzung dauert ___ 9 bis 11 Uhr.', a: 'von', d: ['ab', 'nach'], t: 'La reunión dura de 9 a 11.', e: 'von … bis.' },
      { s: 'Bitte kommen Sie zehn Minuten ___ dem Termin.', a: 'vor', d: ['nach', 'seit'], t: 'Venga diez minutos antes de la cita.', e: 'vor + dativo.' },
      { s: '___ der Arbeit bin ich immer müde.', a: 'Nach', d: ['Vor', 'In'], t: 'Después del trabajo siempre estoy cansado.', e: 'nach der Arbeit.' },
      { s: 'Ich habe ___ einer Stunde angefangen.', a: 'vor', d: ['nach', 'ab'], t: 'Empecé hace una hora.', e: '"vor" + dativo también significa "hace".' },
      { s: 'Der Laden ist ___ 8 bis 20 Uhr offen.', a: 'von', d: ['ab', 'nach'], t: 'La tienda abre de 8 a 20.', e: 'von … bis.' },
      { s: '___ dem Kurs gehe ich nach Hause.', a: 'Nach', d: ['Vor', 'Ab'], t: 'Después del curso me voy a casa.', e: 'nach dem Kurs.' },
      { s: 'Wir treffen uns ___ dem Büro.', a: 'vor', d: ['nach', 'seit'], t: 'Quedamos delante de la oficina.', e: '"vor" también vale para el lugar: delante de.' },
      { s: 'Ich lerne ___ 18 bis 20 Uhr.', a: 'von', d: ['ab', 'seit'], t: 'Estudio de 18 a 20.', e: 'von … bis.' },
      { s: '___ der Besprechung trinke ich immer einen Kaffee.', a: 'Vor', d: ['Nach', 'In'], t: 'Antes de la reunión siempre me tomo un café.', e: '"vor" + dativo para lo anterior.' },
      { s: '___ der Arbeit gehe ich ins Fitnessstudio.', a: 'Nach', d: ['Vor', 'Seit'], t: 'Después del trabajo voy al gimnasio.', e: '"nach" + dativo.' },
      { s: 'Ich habe ___ zwei Wochen angefangen.', a: 'vor', d: ['nach', 'in'], t: 'Empecé hace dos semanas.', e: '"vor" + periodo = hace.' },
      { s: '___ der Schicht bin ich immer müde.', a: 'Nach', d: ['Vor', 'Seit'], t: 'Después del turno siempre estoy cansado.', e: '«nach» + dativo.' },
      { s: '___ der Probezeit bekomme ich mehr Gehalt.', a: 'Nach', d: ['Vor', 'Seit'], t: 'Después del periodo de prueba cobraré más.', e: '"nach" + dativo.' },
      { s: 'Wir treffen uns ___ dem Mittagessen.', a: 'nach', d: ['vor', 'seit'], t: 'Quedamos después de comer.', e: 'nach + dativo neutro: dem Mittagessen.' },
      { s: '___ einem Jahr habe ich den Vertrag unterschrieben.', a: 'Vor', d: ['Nach', 'In'], t: 'Firmé el contrato hace un año.', e: 'Con pasado, "vor" = hace.' },
      { s: 'Bitte melden Sie sich ___ dem Termin.', a: 'vor', d: ['nach', 'seit'], t: 'Avise antes de la cita, por favor.', e: 'vor + dativo.' },
      { s: '___ der Präsentation war ich sehr nervös.', a: 'Vor', d: ['Nach', 'Ab'], t: 'Antes de la presentación estaba muy nervioso.', e: 'vor + dativo para lo anterior.' },
      { s: '___ der Dienstreise brauche ich einen Tag frei.', a: 'Nach', d: ['Vor', 'Seit'], t: 'Después del viaje de trabajo necesito un día libre.', e: 'nach + dativo.' },
      { s: 'Ich arbeite ___ acht bis siebzehn Uhr.', a: 'von', d: ['ab', 'seit'], t: 'Trabajo de ocho a cinco.', e: 'von … bis marca principio y final.' },
      { s: '___ der Probezeit bekommst du mehr Urlaub.', a: 'Nach', d: ['Vor', 'Ab'], t: 'Después del periodo de prueba tienes más vacaciones.', e: 'nach + dativo.' },
      { s: '___ dem Gespräch habe ich alles noch einmal gelesen.', a: 'Vor', d: ['Nach', 'Seit'], t: 'Antes de la entrevista lo leí todo otra vez.', e: 'vor + dativo.' }
    ],
    orders: [
      { sol: ['Nach', 'der', 'Besprechung', 'rufe', 'ich', 'dich', 'an'], alt: [['Ich', 'rufe', 'dich', 'nach', 'der', 'Besprechung', 'an']], t: 'Después de la reunión te llamo.', e: 'nach + dativo, inversión y verbo separable.' },
      { sol: ['Ich', 'arbeite', 'von', 'Montag', 'bis', 'Freitag'], t: 'Trabajo de lunes a viernes.', e: 'von … bis.' },
      { sol: ['Vor', 'dem', 'Vorstellungsgespräch', 'war', 'ich', 'sehr', 'nervös'], alt: [['Ich', 'war', 'vor', 'dem', 'Vorstellungsgespräch', 'sehr', 'nervös']], t: 'Antes de la entrevista estaba muy nervioso.', e: 'vor + dativo.' },
      { sol: ['Nach', 'dem', 'Mittagessen', 'mache', 'ich', 'eine', 'Pause'], alt: [['Ich', 'mache', 'nach', 'dem', 'Mittagessen', 'eine', 'Pause']], t: 'Después de comer hago una pausa.', e: 'nach dem Mittagessen.' }
    ],
    clozes: [
      { txt: '___ einem Monat habe ich hier angefangen. ___ der Einarbeitung war alles neu, aber ___ zwei Wochen ging es schon besser. ___ der Probezeit bekomme ich einen festen Vertrag.', a: ['Vor', 'Vor', 'nach', 'Nach'], extra: ['Nach', 'Seit', 'vor', 'Vor'], t: 'Empecé aquí hace un mes. Antes de la formación inicial todo era nuevo, pero al cabo de dos semanas ya iba mejor. Después del periodo de prueba me darán contrato fijo.', e: 'El mismo "vor" con dos sentidos: con un periodo es "hace", con un suceso es "antes de".' }
    ]
  },

  // ---------- A2.1 L4: seit / ab / zwischen ----------
  'praep-seit-ab-zwischen': {
    picks: [
      { s: 'Ich arbeite ___ einem Monat in dieser Firma.', a: 'seit', d: ['ab', 'für'], t: 'Trabajo en esta empresa desde hace un mes.', e: '"seit" = algo que empezó en el pasado y sigue; rige dativo (einem Monat).' },
      { s: '___ nächster Woche habe ich einen neuen Vertrag.', a: 'Ab', d: ['Seit', 'Vor'], t: 'A partir de la semana que viene tengo un contrato nuevo.', e: '"ab" apunta al futuro; con dativo (nächster Woche).' },
      { s: 'Die Pause ist ___ 12 und 13 Uhr.', a: 'zwischen', d: ['seit', 'für'], t: 'La pausa es entre las 12 y las 13.', e: '"zwischen" + dativo para un intervalo.' },
      { s: 'Wir wohnen ___ drei Jahren in Wien.', a: 'seit', d: ['für', 'ab'], t: 'Vivimos en Viena desde hace tres años.', e: 'Duración que continúa hasta hoy → "seit" + dativo.' },
      { s: '___ morgen rauche ich nicht mehr.', a: 'Ab', d: ['Seit', 'Für'], t: 'A partir de mañana no fumo más.', e: 'Futuro → "ab".' },
      { s: 'Ich kenne ihn ___ 2010.', a: 'seit', d: ['ab', 'zwischen'], t: 'Lo conozco desde 2010.', e: 'Pasado que continúa → "seit".' },
      { s: 'Der Termin ist ___ Montag und Mittwoch.', a: 'zwischen', d: ['seit', 'ab'], t: 'La cita es entre el lunes y el miércoles.', e: 'Intervalo → "zwischen".' },
      { s: '___ wann lernst du Deutsch?', a: 'Seit', d: ['Ab', 'Zwischen'], t: '¿Desde cuándo estudias alemán?', e: 'Pregunta por algo que empezó en el pasado y sigue → "Seit wann".' },
      { s: 'Ich bin ___ einer Woche krank.', a: 'seit', d: ['ab', 'für'], t: 'Llevo una semana enfermo.', e: 'seit + dativo.' },
      { s: '___ dem ersten September gilt der neue Plan.', a: 'Ab', d: ['Seit', 'Zwischen'], t: 'A partir del uno de septiembre rige el nuevo plan.', e: 'Futuro → ab + dativo.' },
      { s: 'Wir sind ___ acht und zehn Uhr erreichbar.', a: 'zwischen', d: ['seit', 'ab'], t: 'Estamos localizables entre las ocho y las diez.', e: 'zwischen + dativo.' },
      { s: 'Sie lernt ___ zwei Jahren Deutsch.', a: 'seit', d: ['für', 'ab'], t: 'Lleva dos años estudiando alemán.', e: 'seit + dativo plural: zwei Jahren.' },
      { s: '___ Montag habe ich einen neuen Vertrag.', a: 'Ab', d: ['Seit', 'Zwischen'], t: 'A partir del lunes tengo contrato nuevo.', e: '"ab" para algo que empieza en el futuro.' },
      { s: 'Ich arbeite hier ___ drei Jahren.', a: 'seit', d: ['ab', 'zwischen'], t: 'Trabajo aquí desde hace tres años.', e: '"seit" para algo que empezó antes y sigue.' },
      { s: 'Die Besprechung ist ___ zehn und elf.', a: 'zwischen', d: ['seit', 'ab'], t: 'La reunión es entre las diez y las once.', e: '"zwischen" para el hueco entre dos momentos.' },
      { s: '___ nächster Woche bin ich im Homeoffice.', a: 'Ab', d: ['Seit', 'Zwischen'], t: 'A partir de la semana que viene trabajo desde casa.', e: '"ab" + comienzo futuro.' },
      { s: '___ der Probezeit läuft alles gut.', a: 'Seit', d: ['Ab', 'Zwischen'], t: 'Desde el periodo de prueba va todo bien.', e: '"seit" + dativo, mirando al pasado.' },
      { s: 'Die Pause ist ___ zwölf und halb eins.', a: 'zwischen', d: ['ab', 'seit'], t: 'La pausa es entre las doce y las doce y media.', e: '"zwischen" con dos horas.' },
      { s: '___ wann arbeitest du in dieser Firma?', a: 'Seit', d: ['Ab', 'Zwischen'], t: '¿Desde cuándo trabajas en esta empresa?', e: 'Preguntar por el comienzo de algo que sigue.' },
      { s: '___ heute gilt die neue Regelung.', a: 'Ab', d: ['Seit', 'Zwischen'], t: 'A partir de hoy rige la nueva norma.', e: '"ab" marca el comienzo.' },
      { s: 'Ich arbeite in dieser Abteilung ___ drei Jahren.', a: 'seit', d: ['für', 'ab'], t: 'Trabajo en este departamento desde hace tres años.', e: 'seit + dativo para algo que sigue.' },
      { s: '___ Montag habe ich Gleitzeit.', a: 'Ab', d: ['Seit', 'Für'], t: 'A partir del lunes tengo horario flexible.', e: 'ab marca el principio en el futuro.' },
      { s: 'Der Termin liegt ___ zehn und elf.', a: 'zwischen', d: ['seit', 'für'], t: 'La cita es entre las diez y las once.', e: 'zwischen + dativo enmarca dos horas.' },
      { s: '___ der Beförderung hat er mehr Verantwortung.', a: 'Seit', d: ['Ab', 'Für'], t: 'Desde el ascenso tiene más responsabilidad.', e: 'seit + dativo para algo que empezó y sigue.' },
      { s: '___ nächstem Jahr gibt es Homeoffice.', a: 'Ab', d: ['Seit', 'Zwischen'], t: 'A partir del año que viene hay teletrabajo.', e: 'ab + dativo.' },
      { s: '___ morgen gilt der neue Fahrplan.', a: 'Ab', d: ['Seit', 'Vor'], t: 'A partir de mañana rige el horario nuevo.', e: 'ab para algo que empieza a partir de un momento.' },
      { s: 'Wir kennen uns ___ der Schulzeit.', a: 'seit', d: ['ab', 'vor'], t: 'Nos conocemos desde el colegio.', e: 'seit para algo que empezó y sigue.' },
      { s: 'Der Termin ist irgendwann ___ zwei und vier.', a: 'zwischen', d: ['seit', 'ab'], t: 'La cita es en algún momento entre las dos y las cuatro.', e: 'zwischen … und para un hueco entre dos puntos.' },
      { s: '___ zwei Wochen warte ich auf eine Antwort.', a: 'Seit', d: ['Ab', 'In'], t: 'Llevo dos semanas esperando una respuesta.', e: 'seit para el tiempo que llevas haciendo algo.' },
      { s: 'Der Preis liegt ___ 40 und 60 Euro.', a: 'zwischen', d: ['seit', 'ab'], t: 'El precio está entre 40 y 60 euros.', e: 'zwischen también con cantidades.' },
      { s: '___ nächstem Semester unterrichtet sie in Graz.', a: 'Ab', d: ['Seit', 'Zwischen'], t: 'A partir del semestre que viene da clase en Graz.', e: 'ab mira hacia delante; seit, hacia atrás.' },
      { s: 'Ich habe ihn ___ Weihnachten nicht mehr gesehen.', a: 'seit', d: ['ab', 'zwischen'], t: 'No lo he visto desde Navidad.', e: 'seit + un punto del pasado.' },
      { s: 'Wir sind ___ zehn und elf sicher zu Hause.', a: 'zwischen', d: ['seit', 'ab'], t: 'Entre las diez y las once seguro que estamos en casa.', e: 'zwischen para la franja entre dos horas.' }
    ],
    orders: [
      { sol: ['Ich', 'arbeite', 'seit', 'einem', 'Monat', 'in', 'dieser', 'Firma'], t: 'Trabajo en esta empresa desde hace un mes.', e: 'seit + dativo.' },
      { sol: ['Ab', 'nächster', 'Woche', 'habe', 'ich', 'einen', 'neuen', 'Vertrag'], t: 'A partir de la semana que viene tengo un contrato nuevo.', e: 'ab + dativo al principio → inversión.' },
      { sol: ['Die', 'Pause', 'ist', 'zwischen', 'zwölf', 'und', 'dreizehn', 'Uhr'], t: 'La pausa es entre las 12 y las 13.', e: 'zwischen … und.' },
      { sol: ['Seit', 'wann', 'lernst', 'du', 'Deutsch?'], t: '¿Desde cuándo estudias alemán?', e: 'Seit wann + verbo en 2ª posición.' },
      { sol: ['Seit', 'drei', 'Jahren', 'arbeite', 'ich', 'in', 'dieser', 'Firma'], alt: [['Ich', 'arbeite', 'seit', 'drei', 'Jahren', 'in', 'dieser', 'Firma']], t: 'Llevo tres años trabajando en esta empresa.', e: '"seit" abre la frase, así que el verbo va segundo.' },
      { sol: ['Die', 'Besprechung', 'ist', 'zwischen', 'zehn', 'und', 'elf'], t: 'La reunión es entre las diez y las once.', e: '"zwischen" enmarca las dos horas.' }
    ]
  },
  'praeposition-zu-bei-anlaessen': {
    picks: [
      { s: 'Alles Gute ___ Geburtstag!', a: 'zum', d: ['zur', 'am'], t: '¡Felicidades por tu cumpleaños!', e: 'zu dem → zum Geburtstag.' },
      { s: 'Herzlichen Glückwunsch ___ Hochzeit!', a: 'zur', d: ['zum', 'an der'], t: '¡Enhorabuena por la boda!', e: 'die Hochzeit: zu der → zur.' },
      { s: '___ Weihnachten fahren wir zu meinen Eltern.', a: 'Zu', d: ['Im', 'Am'], t: 'Por Navidad vamos a casa de mis padres.', e: 'Las fiestas llevan zu.' },
      { s: 'Gratuliere ___ neuen Job!', a: 'zum', d: ['zur', 'am'], t: '¡Enhorabuena por el trabajo nuevo!', e: 'der Job: zum.' },
      { s: '___ Ostern gibt es Eier und Schinken.', a: 'Zu', d: ['Im', 'An der'], t: 'En Pascua hay huevos y jamón.', e: 'zu Ostern.' },
      { s: 'Alles Liebe ___ Muttertag!', a: 'zum', d: ['zur', 'im'], t: '¡Felicidades por el día de la madre!', e: 'der Muttertag: zum.' },
      { s: 'Was schenkst du ihr ___ Namenstag?', a: 'zum', d: ['zur', 'am'], t: '¿Qué le regalas por su santo?', e: 'der Namenstag: zum.' },
      { s: '___ Silvester bleiben wir zu Hause.', a: 'Zu', d: ['Im', 'An dem'], t: 'En Nochevieja nos quedamos en casa.', e: 'zu Silvester.' },
      { s: 'Herzlichen Glückwunsch ___ Prüfung!', a: 'zur', d: ['zum', 'an die'], t: '¡Enhorabuena por el examen!', e: 'die Prüfung: zur.' },
      { s: '___ Taufe kommen alle Verwandten.', a: 'Zur', d: ['Zum', 'Im'], t: 'Al bautizo vienen todos los parientes.', e: 'die Taufe: zur.' },
      { s: '___ meinem Geburtstag kommen alle Freunde.', a: 'Zu', d: ['An', 'In'], t: 'A mi cumpleaños vienen todos los amigos.', e: 'zu para las celebraciones.' },
      { s: 'Alles Gute ___ neuen Jahr!', a: 'zum', d: ['zur', 'am'], t: '¡Feliz año nuevo!', e: 'zu dem se junta en zum.' },
      { s: 'Herzlichen Glückwunsch ___ Führerschein!', a: 'zum', d: ['zur', 'am'], t: '¡Enhorabuena por el carné!', e: 'der Führerschein pasa a zum.' },
      { s: '___ Pfingsten haben wir frei.', a: 'Zu', d: ['An', 'Im'], t: 'En Pentecostés tenemos fiesta.', e: 'Las fiestas van con zu.' },
      { s: 'Was wünschst du dir ___ Weihnachten?', a: 'zu', d: ['an', 'in'], t: '¿Qué quieres por Navidad?', e: 'zu Weihnachten, sin artículo.' },
      { s: 'Alles Gute ___ Hochzeitstag!', a: 'zum', d: ['zur', 'am'], t: '¡Feliz aniversario de boda!', e: 'der Hochzeitstag pasa a zum.' },
      { s: 'Glückwunsch ___ bestandenen Prüfung!', a: 'zur', d: ['zum', 'an der'], t: '¡Enhorabuena por el examen aprobado!', e: 'zu der se junta en zur.' },
      { s: '___ seinem Abschluss gab es eine große Feier.', a: 'Zu', d: ['An', 'In'], t: 'Por su graduación hubo una gran fiesta.', e: 'Motivo de la celebración con zu.' },
      { s: 'Ich schenke ihr ___ Namenstag Blumen.', a: 'zum', d: ['zur', 'am'], t: 'Le regalo flores por su santo.', e: 'der Namenstag pasa a zum.' },
      { s: 'Bei Glückwünschen benutzt man fast immer ___.', a: 'zu', d: ['an', 'für'], t: 'En las felicitaciones se usa casi siempre «zu».', e: 'zum Geburtstag, zur Hochzeit, zum Erfolg.' }
    ]
  },
  'seit-dauer-praesens': {
    picks: [
      { s: 'Ich laufe ___ zwei Jahren regelmäßig.', a: 'seit', d: ['vor', 'für'], t: 'Llevo dos años corriendo con regularidad.', e: 'Empezó antes y sigue: seit.' },
      { s: 'Seit dem Winter ___ sie im Studio.', a: 'trainiert', d: ['trainierte', 'hat trainiert'], t: 'Desde el invierno entrena en el gimnasio.', e: 'Con seit el verbo va en PRESENTE.' },
      { s: 'Seit ___ Monaten mache ich Yoga.', a: 'drei', d: ['dreien', 'dritten'], t: 'Llevo tres meses haciendo yoga.', e: 'seit + dativo plural: Monaten.' },
      { s: '___ zwei Wochen habe ich Muskelkater.', a: 'Seit', d: ['Vor', 'In'], t: 'Llevo dos semanas con agujetas.', e: 'Duración que sigue: seit.' },
      { s: 'Er spielt seit ___ Kindheit Fußball.', a: 'der', d: ['die', 'den'], t: 'Juega al fútbol desde pequeño.', e: 'seit + dativo femenino: der Kindheit.' },
      { s: '___ einem Jahr gehe ich schwimmen.', a: 'Seit', d: ['Vor', 'Für'], t: 'Llevo un año yendo a nadar.', e: 'seit + dativo: einem Jahr.' },
      { s: 'Vor zwei Jahren ___ ich mit dem Laufen angefangen.', a: 'habe', d: ['bin', 'war'], t: 'Hace dos años empecé a correr.', e: 'vor + pasado: la acción terminó.' },
      { s: 'Seit dem Unfall ___ er keinen Sport mehr.', a: 'macht', d: ['machte', 'hat gemacht'], t: 'Desde el accidente ya no hace deporte.', e: 'Presente con seit.' },
      { s: 'Wie lange trainierst du schon? – ___ Mai.', a: 'Seit', d: ['Vor', 'Ab'], t: '¿Cuánto llevas entrenando? – Desde mayo.', e: 'seit + un punto del pasado.' },
      { s: 'Seit ___ Verletzung ist er vorsichtiger.', a: 'der', d: ['die', 'den'], t: 'Desde la lesión es más cuidadoso.', e: 'die Verletzung en dativo: der.' }
    ]
  }
};
