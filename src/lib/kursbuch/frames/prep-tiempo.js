// TEMA: preposiciones de tiempo.
// am/um/im, von…bis, vor/nach, seit/ab, für/über. Casi todas piden dativo;
// las excepciones (für, über) piden acusativo y conviene tenerlas fichadas.

export const PREP_TIEMPO = {
  // ---------- A1.1 L5: am / um / von … bis ----------
  'temporale-prapositionen-am-um-von-bis': {
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
      { s: 'Wann kommst du? – ___ acht.', a: 'Um', d: ['Am', 'Im'], t: '¿Cuándo vienes? – A las ocho.', e: 'Hora → um.' }
    ],
    orders: [
      { sol: ['Am', 'Freitag', 'um', 'achtzehn', 'Uhr', 'habe', 'ich', 'Zeit'], t: 'El viernes a las 18 tengo tiempo.', e: 'Primero el día (am), luego la hora (um).' },
      { sol: ['Ich', 'arbeite', 'von', 'Montag', 'bis', 'Freitag'], t: 'Trabajo de lunes a viernes.', e: 'von … bis.' },
      { sol: ['Der', 'Kurs', 'beginnt', 'um', 'neun', 'Uhr'], t: 'El curso empieza a las nueve.', e: 'um + hora.' },
      { sol: ['Am', 'Wochenende', 'stehe', 'ich', 'später', 'auf'], t: 'El fin de semana me levanto más tarde.', e: 'am Wochenende al principio → inversión.' }
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
      { s: 'Und ___ acht Uhr fängt er an.', a: 'um', d: ['im', 'am'], t: 'Y empieza a las ocho.', e: 'Las horas llevan "um".' }
    ],
    orders: [
      { sol: ['Im', 'Sommer', 'ist', 'es', 'in', 'Wien', 'sehr', 'heiß'], t: 'En verano hace mucho calor en Viena.', e: 'im + estación al principio → inversión.' },
      { sol: ['Ich', 'habe', 'im', 'Mai', 'Geburtstag'], t: 'Cumplo años en mayo.', e: 'im + mes.' },
      { sol: ['Im', 'Winter', 'trage', 'ich', 'immer', 'einen', 'Schal'], t: 'En invierno llevo siempre bufanda.', e: 'im Winter (estación).' },
      { sol: ['Im', 'Jänner', 'schneit', 'es', 'sehr', 'oft'], t: 'En enero nieva muy a menudo.', e: 'im + mes.' }
    ]
  },

  // ---------- A1.2 L12: vor / nach / in ----------
  'temporale-prapositionen-vor-nach-in-dati': {
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
      { s: '___ einem Jahr habe ich hier angefangen.', a: 'Vor', d: ['In', 'Nach'], t: 'Hace un año empecé aquí.', e: 'Ojo: "vor" + dativo también significa "hace" (pasado).' }
    ],
    orders: [
      { sol: ['Nach', 'der', 'Arbeit', 'gehe', 'ich', 'einkaufen'], t: 'Después del trabajo voy a comprar.', e: 'nach + dativo; complemento inicial → inversión.' },
      { sol: ['In', 'einer', 'Woche', 'habe', 'ich', 'den', 'Termin'], t: 'Dentro de una semana tengo la cita.', e: 'in + dativo (futuro).' },
      { sol: ['Vor', 'dem', 'Essen', 'wasche', 'ich', 'mir', 'die', 'Hände'], t: 'Antes de comer me lavo las manos.', e: 'vor + dativo.' },
      { sol: ['Ich', 'rufe', 'dich', 'nach', 'der', 'Besprechung', 'an'], t: 'Te llamo después de la reunión.', e: 'nach der Besprechung dentro de la frase.' }
    ]
  },

  // ---------- A1.2 L12: ab / bis ----------
  'temporale-prapositionen-ab-bis': {
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
      { s: 'Ich wohne ___ drei Jahren in Wien.', a: 'seit', d: ['ab', 'bis'], t: 'Vivo en Viena desde hace tres años.', e: 'Algo que empezó en el pasado y sigue → seit, no "ab".' }
    ],
    orders: [
      { sol: ['Ab', 'Montag', 'bin', 'ich', 'wieder', 'im', 'Büro'], t: 'A partir del lunes vuelvo a estar en la oficina.', e: 'ab + día al principio → inversión.' },
      { sol: ['Das', 'Amt', 'hat', 'bis', 'fünfzehn', 'Uhr', 'offen'], t: 'La oficina abre hasta las 15.', e: 'bis + hora.' },
      { sol: ['Ich', 'bleibe', 'bis', 'Freitag', 'in', 'Wien'], t: 'Me quedo en Viena hasta el viernes.', e: 'bis Freitag.' },
      { sol: ['Ab', 'nächster', 'Woche', 'habe', 'ich', 'Urlaub'], t: 'A partir de la semana que viene tengo vacaciones.', e: 'ab + dativo.' }
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
      { s: 'Ich brauche das Auto nur ___ einen Tag.', a: 'für', d: ['seit', 'ab'], t: 'Solo necesito el coche un día.', e: 'für einen Tag.' }
    ],
    orders: [
      { sol: ['Ich', 'bin', 'für', 'ein', 'Jahr', 'in', 'dieser', 'Abteilung'], t: 'Estoy un año en este departamento.', e: 'für + acusativo.' },
      { sol: ['Über', 'die', 'Feiertage', 'ist', 'das', 'Büro', 'geschlossen'], t: 'Durante las fiestas la oficina está cerrada.', e: 'über + acusativo, al principio → inversión.' },
      { sol: ['Der', 'Vertrag', 'gilt', 'für', 'sechs', 'Monate'], t: 'El contrato es válido por seis meses.', e: 'für sechs Monate.' },
      { sol: ['Wir', 'bleiben', 'über', 'das', 'Wochenende', 'in', 'Graz'], t: 'Pasamos el fin de semana en Graz.', e: 'über das Wochenende.' }
    ]
  },

  // ---------- A2.1 L4: repaso vor / nach / von … bis ----------
  'praep-vor-nach': {
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
      { s: 'Ich lerne ___ 18 bis 20 Uhr.', a: 'von', d: ['ab', 'seit'], t: 'Estudio de 18 a 20.', e: 'von … bis.' }
    ],
    orders: [
      { sol: ['Nach', 'der', 'Besprechung', 'rufe', 'ich', 'dich', 'an'], t: 'Después de la reunión te llamo.', e: 'nach + dativo, inversión y verbo separable.' },
      { sol: ['Ich', 'arbeite', 'von', 'Montag', 'bis', 'Freitag'], t: 'Trabajo de lunes a viernes.', e: 'von … bis.' },
      { sol: ['Vor', 'dem', 'Vorstellungsgespräch', 'war', 'ich', 'sehr', 'nervös'], t: 'Antes de la entrevista estaba muy nervioso.', e: 'vor + dativo.' },
      { sol: ['Nach', 'dem', 'Mittagessen', 'mache', 'ich', 'eine', 'Pause'], t: 'Después de comer hago una pausa.', e: 'nach dem Mittagessen.' }
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
      { s: 'Sie lernt ___ zwei Jahren Deutsch.', a: 'seit', d: ['für', 'ab'], t: 'Lleva dos años estudiando alemán.', e: 'seit + dativo plural: zwei Jahren.' }
    ],
    orders: [
      { sol: ['Ich', 'arbeite', 'seit', 'einem', 'Monat', 'in', 'dieser', 'Firma'], t: 'Trabajo en esta empresa desde hace un mes.', e: 'seit + dativo.' },
      { sol: ['Ab', 'nächster', 'Woche', 'habe', 'ich', 'einen', 'neuen', 'Vertrag'], t: 'A partir de la semana que viene tengo un contrato nuevo.', e: 'ab + dativo al principio → inversión.' },
      { sol: ['Die', 'Pause', 'ist', 'zwischen', 'zwölf', 'und', 'dreizehn', 'Uhr'], t: 'La pausa es entre las 12 y las 13.', e: 'zwischen … und.' },
      { sol: ['Seit', 'wann', 'lernst', 'du', 'Deutsch?'], t: '¿Desde cuándo estudias alemán?', e: 'Seit wann + verbo en 2ª posición.' }
    ]
  }
};
