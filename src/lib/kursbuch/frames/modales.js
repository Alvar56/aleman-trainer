// TEMA: verbos modales y formas de cortesía.
// können/wollen, müssen/dürfen, sollen, y el Konjunktiv II (wäre, hätte,
// würde). Todos comparten la misma estructura: modal en 2ª posición y el
// segundo verbo en infinitivo al final.

export const MODALES = {
  // ---------- A1.1 L8: können / wollen ----------
  'modalverben-konnen-wollen': {
    picks: [
      { s: 'Ich ___ gut schwimmen.', a: 'kann', d: ['kannst', 'können'], t: 'Sé nadar bien.', e: 'können con ich: kann (la 1ª y la 3ª persona del singular no llevan terminación).' },
      { s: '___ du mitkommen?', a: 'Willst', d: ['Will', 'Wollt'], t: '¿Quieres venir?', e: 'wollen con du: willst.' },
      { s: 'Er ___ Fußballspieler werden.', a: 'will', d: ['willst', 'wollen'], t: 'Quiere ser futbolista.', e: 'wollen con er: will.' },
      { s: 'Wir ___ am Samstag grillen.', a: 'wollen', d: ['will', 'willst'], t: 'El sábado queremos hacer una barbacoa.', e: 'wollen con wir: wollen.' },
      { s: '___ ihr Gitarre spielen?', a: 'Könnt', d: ['Kannst', 'Können'], t: '¿Sabéis tocar la guitarra?', e: 'können con ihr: könnt.' },
      { s: 'Meine Tochter ___ schon lesen.', a: 'kann', d: ['kannst', 'könnt'], t: 'Mi hija ya sabe leer.', e: 'Sujeto singular → kann.' },
      { s: 'Was ___ du am Wochenende machen?', a: 'willst', d: ['will', 'wollt'], t: '¿Qué quieres hacer el fin de semana?', e: 'wollen con du: willst.' },
      { s: 'Ich ___ heute nicht ins Kino.', a: 'will', d: ['willst', 'wollen'], t: 'Hoy no quiero ir al cine.', e: 'wollen con ich: will.' },
      { s: '___ Sie mir helfen?', a: 'Können', d: ['Könnt', 'Kann'], t: '¿Puede ayudarme?', e: 'Forma formal: Können Sie.' },
      { s: 'Sie ___ sehr gut kochen.', a: 'kann', d: ['kannst', 'könnt'], t: 'Ella sabe cocinar muy bien.', e: 'er/sie/es → kann.' },
      { s: 'Wir ___ nächstes Jahr nach Wien ziehen.', a: 'wollen', d: ['will', 'wollt'], t: 'Queremos mudarnos a Viena el año que viene.', e: 'wollen con wir.' },
      { s: 'Du ___ wirklich gut Deutsch!', a: 'kannst', d: ['kann', 'könnt'], t: '¡Sabes muy bien alemán!', e: 'können con du: kannst.' }
    ],
    orders: [
      { sol: ['Ich', 'kann', 'sehr', 'gut', 'schwimmen'], t: 'Sé nadar muy bien.', e: 'Modal (2) + infinitivo (final).' },
      { sol: ['Willst', 'du', 'am', 'Samstag', 'mitkommen?'], t: '¿Quieres venir el sábado?', e: 'Pregunta: modal primero, infinitivo al final.' },
      { sol: ['Wir', 'wollen', 'im', 'Sommer', 'ans', 'Meer', 'fahren'], t: 'En verano queremos ir al mar.', e: 'wollen … fahren.' },
      { sol: ['Meine', 'Kinder', 'können', 'schon', 'Rad', 'fahren'], t: 'Mis hijos ya saben ir en bici.', e: 'können … fahren.' }
    ]
  },

  // ---------- A1.2 L12: müssen / dürfen ----------
  'modalverben-mussen-durfen': {
    picks: [
      { s: 'Ich ___ das Formular ausfüllen.', a: 'muss', d: ['musst', 'müssen'], t: 'Tengo que rellenar el formulario.', e: 'müssen con ich: muss.' },
      { s: 'Hier ___ man nicht rauchen.', a: 'darf', d: ['darfst', 'dürfen'], t: 'Aquí no se puede fumar.', e: '"nicht dürfen" = estar prohibido. Con man: darf.' },
      { s: '___ du heute arbeiten?', a: 'Musst', d: ['Muss', 'Müsst'], t: '¿Tienes que trabajar hoy?', e: 'müssen con du: musst.' },
      { s: 'Wir ___ um acht da sein.', a: 'müssen', d: ['muss', 'musst'], t: 'Tenemos que estar allí a las ocho.', e: 'müssen con wir: müssen.' },
      { s: '___ ich hier parken?', a: 'Darf', d: ['Darfst', 'Dürfen'], t: '¿Puedo aparcar aquí?', e: 'Pedir permiso con dürfen: Darf ich…?' },
      { s: 'Kinder ___ hier nicht spielen.', a: 'dürfen', d: ['darf', 'darfst'], t: 'Los niños no pueden jugar aquí.', e: 'Plural → dürfen.' },
      { s: 'Er ___ zum Arzt gehen.', a: 'muss', d: ['musst', 'müsst'], t: 'Tiene que ir al médico.', e: 'er muss.' },
      { s: 'Sie ___ das Formular nicht unterschreiben.', a: 'müssen', d: ['muss', 'müsst'], t: 'Usted no tiene que firmar el formulario.', e: 'Con Sie: müssen.' },
      { s: '___ ich Sie etwas fragen?', a: 'Darf', d: ['Muss', 'Dürft'], t: '¿Puedo preguntarle algo?', e: 'Pedir permiso con cortesía: Darf ich…?' },
      { s: 'Ihr ___ die Hausaufgaben machen.', a: 'müsst', d: ['muss', 'müssen'], t: 'Tenéis que hacer los deberes.', e: 'müssen con ihr: müsst.' },
      { s: 'Im Museum ___ man nicht fotografieren.', a: 'darf', d: ['muss', 'dürft'], t: 'En el museo no se puede fotografiar.', e: 'Prohibición → nicht dürfen.' },
      { s: 'Du ___ noch ein Jahr warten.', a: 'musst', d: ['muss', 'müsst'], t: 'Tienes que esperar un año más.', e: 'du musst.' }
    ],
    orders: [
      { sol: ['Ich', 'muss', 'heute', 'das', 'Formular', 'ausfüllen'], t: 'Hoy tengo que rellenar el formulario.', e: 'Modal (2) … infinitivo (final).' },
      { sol: ['Hier', 'darf', 'man', 'nicht', 'rauchen'], t: 'Aquí no se puede fumar.', e: '"nicht" justo delante del infinitivo.' },
      { sol: ['Musst', 'du', 'am', 'Wochenende', 'arbeiten?'], t: '¿Tienes que trabajar el fin de semana?', e: 'Pregunta: modal primero.' },
      { sol: ['Darf', 'ich', 'hier', 'parken?'], t: '¿Puedo aparcar aquí?', e: 'Permiso con dürfen.' }
    ]
  },

  // ---------- A1.2 L13: sollen ----------
  'modalverb-sollen': {
    picks: [
      { s: 'Was ___ ich machen?', a: 'soll', d: ['sollst', 'sollen'], t: '¿Qué debo hacer?', e: 'sollen con ich: soll.' },
      { s: 'Du ___ viel trinken, sagt der Arzt.', a: 'sollst', d: ['soll', 'sollt'], t: 'Dice el médico que debes beber mucho.', e: 'sollen con du: sollst. Es un consejo de otra persona.' },
      { s: 'Der Arzt sagt, ich ___ im Bett bleiben.', a: 'soll', d: ['sollst', 'sollen'], t: 'El médico dice que debo quedarme en la cama.', e: '"sollen" repite lo que otro te manda.' },
      { s: '___ wir dir helfen?', a: 'Sollen', d: ['Soll', 'Sollt'], t: '¿Te ayudamos?', e: 'Ofrecimiento con sollen: Sollen wir…?' },
      { s: 'Ihr ___ die Tabletten dreimal am Tag nehmen.', a: 'sollt', d: ['soll', 'sollen'], t: 'Debéis tomar las pastillas tres veces al día.', e: 'sollen con ihr: sollt.' },
      { s: 'Sie ___ mehr Sport machen.', a: 'soll', d: ['sollst', 'sollt'], t: 'Ella debería hacer más deporte.', e: 'Sujeto singular → soll.' },
      { s: 'Wann ___ ich wiederkommen?', a: 'soll', d: ['sollst', 'sollen'], t: '¿Cuándo debo volver?', e: 'ich soll.' },
      { s: 'Meine Mutter sagt, wir ___ früher schlafen gehen.', a: 'sollen', d: ['soll', 'sollt'], t: 'Mi madre dice que deberíamos acostarnos antes.', e: 'wir sollen.' },
      { s: '___ ich das Fenster aufmachen?', a: 'Soll', d: ['Sollst', 'Sollen'], t: '¿Abro la ventana?', e: 'Ofrecerse a hacer algo: Soll ich…?' },
      { s: 'Du ___ nicht so viel Kaffee trinken.', a: 'sollst', d: ['soll', 'sollen'], t: 'No deberías beber tanto café.', e: 'Consejo en negativo.' },
      { s: 'Der Chef sagt, ich ___ den Bericht heute schreiben.', a: 'soll', d: ['sollst', 'sollen'], t: 'El jefe dice que debo escribir el informe hoy.', e: 'Orden de otra persona → sollen.' },
      { s: 'Was ___ wir mitbringen?', a: 'sollen', d: ['soll', 'sollt'], t: '¿Qué llevamos?', e: 'wir sollen.' }
    ],
    orders: [
      { sol: ['Was', 'soll', 'ich', 'jetzt', 'machen?'], t: '¿Qué debo hacer ahora?', e: 'Modal (2), infinitivo al final.' },
      { sol: ['Du', 'sollst', 'viel', 'Wasser', 'trinken'], t: 'Debes beber mucha agua.', e: 'sollst … trinken.' },
      { sol: ['Soll', 'ich', 'das', 'Fenster', 'aufmachen?'], t: '¿Abro la ventana?', e: 'Ofrecimiento: el modal abre la pregunta.' },
      { sol: ['Der', 'Arzt', 'sagt,', 'ich', 'soll', 'im', 'Bett', 'bleiben'], t: 'El médico dice que debo quedarme en la cama.', e: 'La segunda frase mantiene modal (2) + infinitivo (final).' },
      { sol: ['Wir', 'sollen', 'mehr', 'Gemüse', 'essen'], t: 'Deberíamos comer más verdura.', e: 'wir sollen + infinitivo al final.' },
      { sol: ['Wann', 'soll', 'ich', 'wiederkommen?'], t: '¿Cuándo debo volver?', e: 'W-Frage con el modal en 2ª posición.' }
    ]
  },

  // ---------- A1.2 L15: Konjunktiv II con würd- ----------
  'konjunktiv-ii-mit-wurd': {
    picks: [
      { s: 'Ich ___ gern nach Italien fahren.', a: 'würde', d: ['werde', 'wäre'], t: 'Me gustaría ir a Italia.', e: 'Deseo: würde + infinitivo al final.' },
      { s: '___ du mir bitte helfen?', a: 'Würdest', d: ['Wirst', 'Wärst'], t: '¿Me ayudarías, por favor?', e: 'würden con du: würdest.' },
      { s: 'Wir ___ gern ein Zimmer reservieren.', a: 'würden', d: ['werden', 'wären'], t: 'Querríamos reservar una habitación.', e: 'Petición cortés en plural: würden.' },
      { s: 'Er ___ lieber zu Hause bleiben.', a: 'würde', d: ['wird', 'wäre'], t: 'Él preferiría quedarse en casa.', e: 'Sujeto singular → würde.' },
      { s: 'Was ___ ihr an meiner Stelle tun?', a: 'würdet', d: ['werdet', 'wärt'], t: '¿Qué haríais en mi lugar?', e: 'würden con ihr: würdet.' },
      { s: 'Ich würde gern einen Termin ___.', a: 'vereinbaren', d: ['vereinbare', 'vereinbart'], t: 'Me gustaría concertar una cita.', e: 'El infinitivo cierra la frase.' },
      { s: '___ Sie bitte kurz warten?', a: 'Würden', d: ['Werden', 'Wären'], t: '¿Esperaría un momento, por favor?', e: 'Forma cortés con Sie.' },
      { s: 'An deiner Stelle ___ ich zum Arzt gehen.', a: 'würde', d: ['werde', 'hätte'], t: 'Yo en tu lugar iría al médico.', e: 'Consejo: würde + infinitivo.' },
      { s: 'Ich ___ gern mehr Zeit haben.', a: 'würde', d: ['werde', 'wäre'], t: 'Me gustaría tener más tiempo.', e: 'Deseo con würde.' },
      { s: 'Sie ___ gern länger schlafen.', a: 'würden', d: ['werden', 'wären'], t: 'Les gustaría dormir más.', e: 'Plural / forma formal: würden.' },
      { s: 'Würdest du bitte das Licht ___?', a: 'ausmachen', d: ['ausmachst', 'ausgemacht'], t: '¿Apagarías la luz, por favor?', e: 'Verbo separable entero, en infinitivo, al final.' },
      { s: 'Wir ___ lieber morgen kommen.', a: 'würden', d: ['werden', 'wären'], t: 'Preferiríamos venir mañana.', e: 'würden + infinitivo final.' }
    ],
    orders: [
      { sol: ['Ich', 'würde', 'gern', 'nach', 'Italien', 'fahren'], t: 'Me gustaría ir a Italia.', e: 'würde (2) … fahren (final).' },
      { sol: ['Würdest', 'du', 'mir', 'bitte', 'helfen?'], t: '¿Me ayudarías, por favor?', e: 'El infinitivo cierra la petición.' },
      { sol: ['An', 'deiner', 'Stelle', 'würde', 'ich', 'zum', 'Arzt', 'gehen'], t: 'Yo en tu lugar iría al médico.', e: 'Complemento (1), würde (2), sujeto (3), infinitivo (final).' },
      { sol: ['Wir', 'würden', 'gern', 'ein', 'Zimmer', 'reservieren'], t: 'Querríamos reservar una habitación.', e: 'würden … reservieren.' }
    ]
  },

  // ---------- A2.1 L8: wäre / hätte / würde ----------
  'konjunktiv2-waere-haette-wuerde': {
    picks: [
      { s: '___ Sie noch ein Doppelzimmer frei?', a: 'Hätten', d: ['Haben', 'Wären'], t: '¿Le quedaría una habitación doble libre?', e: 'Konjunktiv II de "haben" para pedir con cortesía: hätten Sie …?' },
      { s: 'Das ___ super!', a: 'wäre', d: ['ist', 'hätte'], t: '¡Eso sería genial!', e: 'Konjunktiv II de "sein": wäre.' },
      { s: 'Ich ___ gern einen Sitzplatz reservieren.', a: 'würde', d: ['werde', 'wäre'], t: 'Me gustaría reservar un asiento.', e: 'würde + infinitivo al final para deseos y peticiones.' },
      { s: '___ Sie mir bitte den Weg zeigen?', a: 'Würden', d: ['Werden', 'Hätten'], t: '¿Me indicaría el camino, por favor?', e: 'Petición cortés: Würden Sie … + infinitivo al final.' },
      { s: 'Ich ___ jetzt lieber am Strand.', a: 'wäre', d: ['hätte', 'bin'], t: 'Preferiría estar ahora en la playa.', e: 'Desear estar en un sitio → wäre.' },
      { s: 'Wenn ich Zeit ___, würde ich lesen.', a: 'hätte', d: ['habe', 'wäre'], t: 'Si tuviera tiempo, leería.', e: 'Tener algo en condicional → hätte.' },
      { s: 'An deiner Stelle ___ ich mehr lernen.', a: 'würde', d: ['werde', 'hätte'], t: 'Yo en tu lugar estudiaría más.', e: 'Consejo con würde + infinitivo (lernen).' },
      { s: '___ du gern mehr Urlaub?', a: 'Hättest', d: ['Hast', 'Wärst'], t: '¿Te gustaría tener más vacaciones?', e: 'haben en Konjunktiv II con du: hättest.' },
      { s: 'Wenn ich du ___, würde ich nachfragen.', a: 'wäre', d: ['bin', 'hätte'], t: 'Si yo fuera tú, preguntaría.', e: '"Si yo fuera…" → wäre.' },
      { s: 'Wir ___ gern einen Tisch für zwei.', a: 'hätten', d: ['haben', 'wären'], t: 'Querríamos una mesa para dos.', e: 'Pedir en un restaurante: wir hätten gern.' },
      { s: 'Das ___ sehr nett von Ihnen.', a: 'wäre', d: ['ist', 'hätte'], t: 'Eso sería muy amable por su parte.', e: 'sein en Konjunktiv II: wäre.' },
      { s: 'Ich ___ gern ein Glas Wasser.', a: 'hätte', d: ['habe', 'wäre'], t: 'Querría un vaso de agua.', e: '"ich hätte gern" es la forma habitual de pedir algo.' }
    ],
    orders: [
      { sol: ['Ich', 'würde', 'gern', 'einen', 'Platz', 'am', 'Fenster', 'reservieren'], t: 'Me gustaría reservar un asiento junto a la ventana.', e: 'Satzklammer: "würde" en 2ª posición, el infinitivo "reservieren" al final.' },
      { sol: ['Würden', 'Sie', 'mir', 'bitte', 'helfen?'], t: '¿Me ayudaría usted, por favor?', e: 'Petición cortés: Würden Sie + infinitivo.' },
      { sol: ['Hätten', 'Sie', 'noch', 'ein', 'Zimmer', 'frei?'], t: '¿Le quedaría alguna habitación libre?', e: 'hätten + Sie para preguntar con cortesía.' },
      { sol: ['Ich', 'hätte', 'gern', 'einen', 'Kaffee'], t: 'Querría un café.', e: 'La fórmula más útil para pedir: ich hätte gern.' },
      { sol: ['Wenn', 'ich', 'mehr', 'Zeit', 'hätte,', 'würde', 'ich', 'reisen'], t: 'Si tuviera más tiempo, viajaría.', e: 'Condición con hätte al final; la principal empieza por würde.' }
    ]
  }
};
