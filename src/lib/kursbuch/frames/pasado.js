// TEMA: hablar del pasado.
// Präteritum de haben y sein (el pasado que se usa con esos dos verbos) y el
// Perfekt en todas sus variantes: con haben o con sein, con verbos separables,
// con prefijo inseparable y con los verbos en -ieren.

export const PASADO = {
  // ---------- A1.2 L9: Präteritum de haben y sein ----------
  'prateritum-von-haben-und-sein': {
    picks: [
      { s: 'Gestern ___ ich sehr müde.', a: 'war', d: ['bin', 'hatte'], t: 'Ayer estaba muy cansado.', e: 'Präteritum de sein con ich: war.' },
      { s: 'Wir ___ keine Zeit.', a: 'hatten', d: ['haben', 'waren'], t: 'No teníamos tiempo.', e: 'Präteritum de haben con wir: hatten.' },
      { s: '___ du gestern zu Hause?', a: 'Warst', d: ['Hattest', 'Bist'], t: '¿Estuviste ayer en casa?', e: 'sein en Präteritum con du: warst.' },
      { s: 'Ich ___ als Kind einen Hund.', a: 'hatte', d: ['war', 'habe'], t: 'De niño tenía un perro.', e: 'haben en Präteritum con ich: hatte.' },
      { s: 'Meine Eltern ___ damals sehr jung.', a: 'waren', d: ['hatten', 'sind'], t: 'Mis padres eran entonces muy jóvenes.', e: 'Plural de sein en Präteritum: waren.' },
      { s: '___ ihr gestern im Kino?', a: 'Wart', d: ['Hattet', 'Seid'], t: '¿Estuvisteis ayer en el cine?', e: 'sein en Präteritum con ihr: wart.' },
      { s: 'Das Wetter ___ letzte Woche furchtbar.', a: 'war', d: ['hatte', 'ist'], t: 'El tiempo fue horrible la semana pasada.', e: 'Describir cómo fue algo → sein: es war.' },
      { s: '___ Sie früher lange Haare?', a: 'Hatten', d: ['Waren', 'Haben'], t: '¿Tenía usted antes el pelo largo?', e: 'haben en Präteritum, forma formal: Hatten Sie.' },
      { s: 'Ich ___ gestern Kopfschmerzen.', a: 'hatte', d: ['war', 'bin'], t: 'Ayer me dolía la cabeza.', e: '"Kopfschmerzen haben" en pasado: ich hatte.' },
      { s: 'Wo ___ du am Wochenende?', a: 'warst', d: ['hattest', 'bist'], t: '¿Dónde estuviste el fin de semana?', e: 'Estar en un sitio → sein: du warst.' },
      { s: 'Wir ___ gestern viel Spaß.', a: 'hatten', d: ['waren', 'haben'], t: 'Ayer nos divertimos mucho.', e: '"Spaß haben" en pasado: wir hatten.' },
      { s: 'Mein Opa ___ Lehrer von Beruf.', a: 'war', d: ['hatte', 'ist'], t: 'Mi abuelo era profesor.', e: 'Las profesiones van con sein: er war.' },
      { s: 'Als Kind ___ ich oft bei meiner Oma.', a: 'war', d: ['hatte', 'bin'], t: 'De niño estaba a menudo en casa de mi abuela.', e: 'Estar en un sitio en pasado → sein: ich war.' },
      { s: '___ ihr gestern viel Arbeit?', a: 'Hattet', d: ['Wart', 'Habt'], t: '¿Tuvisteis ayer mucho trabajo?', e: 'haben en Präteritum con ihr: hattet.' },
      { s: 'Das Konzert ___ wirklich toll.', a: 'war', d: ['hatte', 'ist'], t: 'El concierto estuvo genial.', e: 'Valorar algo pasado → war.' },
      { s: 'Wir ___ gestern keinen Strom.', a: 'hatten', d: ['waren', 'haben'], t: 'Ayer no tuvimos luz.', e: 'haben en Präteritum con wir: hatten.' },
      { s: '___ du schon mal in Berlin?', a: 'Warst', d: ['Hattest', 'Bist'], t: '¿Has estado alguna vez en Berlín?', e: 'Con sein se prefiere el Präteritum: warst du.' },
      { s: 'Meine Kollegin ___ letzte Woche krank.', a: 'war', d: ['hatte', 'ist'], t: 'Mi compañera estuvo enferma la semana pasada.', e: 'Estado en pasado → war.' },
      { s: 'Ich ___ als Kind viele Freunde.', a: 'hatte', d: ['war', 'habe'], t: 'De niño tenía muchos amigos.', e: 'Tener en pasado → hatte.' },
      { s: '___ Sie gestern im Büro?', a: 'Waren', d: ['Hatten', 'Sind'], t: '¿Estuvo usted ayer en la oficina?', e: 'Forma de cortesía de sein en Präteritum: Waren Sie.' },
      { s: 'Nach der Arbeit ___ ich gestern sehr müde.', a: 'war', d: ['bin', 'hatte'], t: 'Ayer después del trabajo estaba muy cansado.', e: 'sein en Präteritum: ich war.' },
      { s: 'Wir ___ letzte Woche keine Zeit.', a: 'hatten', d: ['haben', 'waren'], t: 'La semana pasada no tuvimos tiempo.', e: 'haben en Präteritum, plural: hatten.' },
      { s: '___ du gestern im Kurs?', a: 'Warst', d: ['Bist', 'Hattest'], t: '¿Estuviste ayer en clase?', e: 'du warst.' },
      { s: 'Meine Eltern ___ bei der Hochzeit sehr jung.', a: 'waren', d: ['sind', 'hatten'], t: 'Mis padres eran muy jóvenes en la boda.', e: 'sein en plural: waren.' },
      { s: 'Er ___ gestern starke Kopfschmerzen.', a: 'hatte', d: ['hat', 'war'], t: 'Ayer le dolía mucho la cabeza.', e: 'haben en Präteritum: er hatte.' }
    ],
    orders: [
      { sol: ['Gestern', 'war', 'ich', 'sehr', 'müde'], alt: [['Ich', 'war', 'gestern', 'sehr', 'müde']], t: 'Ayer estaba muy cansado.', e: 'Complemento (1), verbo (2), sujeto (3).' },
      { sol: ['Wir', 'hatten', 'letztes', 'Jahr', 'kein', 'Auto'], t: 'El año pasado no teníamos coche.', e: 'hatten en 2ª posición.' },
      { sol: ['Wo', 'warst', 'du', 'am', 'Wochenende?'], t: '¿Dónde estuviste el fin de semana?', e: 'W-Frage con warst.' },
      { sol: ['Als', 'Kind', 'hatte', 'ich', 'einen', 'Hund'], t: 'De niño tenía un perro.', e: 'Complemento inicial → inversión (hatte ich).' }
    ],
    clozes: [
      { txt: 'Gestern ___ ich sehr müde, denn ich ___ viel Arbeit. Meine Kollegen ___ auch im Büro, aber sie ___ mehr Zeit als ich.', a: ['war', 'hatte', 'waren', 'hatten'], extra: ['bin', 'habe', 'sind'], t: 'Ayer estaba muy cansado, porque tenía mucho trabajo. Mis compañeros también estaban en la oficina, pero tenían más tiempo que yo.', e: 'sein y haben en Präteritum, en singular y en plural: war/waren frente a hatte/hatten.' }
    ]
  },

  // ---------- A2.1 L1: Präteritum de haben y sein (repaso) ----------
  'praeteritum-haben-sein': {
    picks: [
      { s: 'Gestern ___ ich sehr müde und bin früh ins Bett gegangen.', a: 'war', d: ['bin', 'hatte'], t: 'Ayer estaba muy cansado y me fui pronto a la cama.', e: 'Präteritum de "sein" en 1ª persona: ich war. Con "sein" y "haben" se prefiere el Präteritum al Perfekt.' },
      { s: 'Wir ___ letztes Jahr kein Auto.', a: 'hatten', d: ['haben', 'waren'], t: 'El año pasado no teníamos coche.', e: 'Präteritum de "haben" con wir: hatten.' },
      { s: '___ du gestern auf der Party?', a: 'Warst', d: ['Hattest', 'Bist'], t: '¿Estuviste ayer en la fiesta?', e: '"sein" en Präteritum, 2ª persona: du warst.' },
      { s: 'Am Anfang ___ ich großes Heimweh.', a: 'hatte', d: ['war', 'habe'], t: 'Al principio echaba mucho de menos mi tierra.', e: '"Heimweh haben" → "haben" en Präteritum: ich hatte.' },
      { s: 'Meine Eltern ___ damals sehr jung.', a: 'waren', d: ['hatten', 'sind'], t: 'Mis padres eran entonces muy jóvenes.', e: 'Plural de "sein" en Präteritum: waren.' },
      { s: '___ ihr gestern im Kino?', a: 'Wart', d: ['Hattet', 'Seid'], t: '¿Estuvisteis ayer en el cine?', e: '"sein" en Präteritum con ihr: wart.' },
      { s: 'Ich ___ als Kind einen Hund.', a: 'hatte', d: ['war', 'habe'], t: 'De niño tenía un perro.', e: 'Pasado de tener: ich hatte.' },
      { s: 'Das Wetter ___ letzte Woche furchtbar.', a: 'war', d: ['hatte', 'wurde'], t: 'El tiempo fue horrible la semana pasada.', e: '"sein" para describir cómo fue algo: es war.' },
      { s: '___ Sie früher lange Haare?', a: 'Hatten', d: ['Waren', 'Haben'], t: '¿Tenía usted antes el pelo largo?', e: 'Pasado formal de tener: Hatten Sie.' },
      { s: 'Der Film ___ wirklich spannend.', a: 'war', d: ['hatte', 'wurde'], t: 'La película estuvo realmente emocionante.', e: 'Pasado de sein: er war.' },
      { s: 'Wir ___ gestern viel Spaß auf dem Fest.', a: 'hatten', d: ['waren', 'haben'], t: 'Ayer nos divertimos mucho en la fiesta.', e: 'Spaß haben en pasado: wir hatten Spaß.' },
      { s: 'Warum ___ du gestern nicht in der Schule?', a: 'warst', d: ['hattest', 'bist'], t: '¿Por qué no estuviste ayer en el colegio?', e: 'Estar en un sitio en pasado: du warst.' },
      { s: 'Mein Opa ___ früher Lehrer.', a: 'war', d: ['hatte', 'ist'], t: 'Mi abuelo era maestro.', e: 'Profesiones en el pasado usan sein: er war.' },
      { s: 'Ich ___ keine Zeit für Hausaufgaben.', a: 'hatte', d: ['war', 'habe'], t: 'No tuve tiempo para los deberes.', e: 'Pasado de Zeit haben: ich hatte.' },
      { s: 'Es ___ einmal ein König...', a: 'war', d: ['hatte', 'ist'], t: 'Érase una vez un rey...', e: 'Así empiezan los cuentos de hadas en alemán: Es war einmal...' },
      { s: 'Im ersten Winter ___ ich großes Heimweh.', a: 'hatte', d: ['habe', 'war'], t: 'El primer invierno tenía mucha morriña.', e: 'haben en Präteritum: ich hatte.' },
      { s: 'Damals ___ hier alles sehr fremd.', a: 'war', d: ['ist', 'hatte'], t: 'Entonces aquí todo era muy extraño.', e: 'sein en Präteritum: es war.' },
      { s: 'Wir ___ am Anfang keine Freunde hier.', a: 'hatten', d: ['haben', 'waren'], t: 'Al principio no teníamos amigos aquí.', e: 'Plural en Präteritum: hatten.' }
    ],
    orders: [
      { sol: ['Ich', 'war', 'gestern', 'Abend', 'sehr', 'müde'], t: 'Ayer por la noche estaba muy cansado.', e: 'Verbo "war" en segunda posición.' },
      { sol: ['Wir', 'hatten', 'damals', 'eine', 'kleine', 'Wohnung'], t: 'En aquel entonces teníamos un piso pequeño.', e: 'Verbo "hatten" en segunda posición.' },
      { sol: ['Warst', 'du', 'schon', 'einmal', 'in', 'Wien?'], t: '¿Has estado alguna vez en Viena?', e: 'Pregunta de sí/no con warst.' },
      { sol: ['Am', 'Anfang', 'hatte', 'ich', 'großes', 'Heimweh'], alt: [['Ich', 'hatte', 'am', 'Anfang', 'großes', 'Heimweh']], t: 'Al principio echaba mucho de menos mi tierra.', e: 'Complemento inicial → hatte ich.' }
    ]
  },

  // ---------- A1.2 L9: Perfekt con haben o sein ----------
  'perfekt-mit-haben-und-sein': {
    reserva: ['war', 'hatte', 'seid'],
    picks: [
      { s: 'Ich ___ viel gearbeitet.', a: 'habe', d: ['bin', 'war'], t: 'He trabajado mucho.', e: 'La mayoría de los verbos forman el Perfekt con haben.' },
      { s: 'Ich ___ nach Wien gefahren.', a: 'bin', d: ['habe', 'war'], t: 'He ido a Viena.', e: 'fahren es movimiento → auxiliar sein.' },
      { s: 'Wir ___ gestern einen Film gesehen.', a: 'haben', d: ['sind', 'waren'], t: 'Ayer vimos una película.', e: 'sehen va con haben.' },
      { s: 'Er ___ um sieben aufgestanden.', a: 'ist', d: ['hat', 'war'], t: 'Se levantó a las siete.', e: 'aufstehen es cambio de estado → sein.' },
      { s: 'Sie ___ nach Berlin geflogen.', a: 'ist', d: ['hat', 'war'], t: 'Ha volado a Berlín.', e: 'fliegen es movimiento → sein.' },
      { s: '___ du schon gegessen?', a: 'Hast', d: ['Bist', 'Warst'], t: '¿Ya has comido?', e: 'essen va con haben.' },
      { s: 'Wann ___ ihr nach Hause gekommen?', a: 'seid', d: ['habt', 'wart'], t: '¿Cuándo llegasteis a casa?', e: 'kommen es movimiento → sein.' },
      { s: 'Ich ___ gestern sehr gut geschlafen.', a: 'habe', d: ['bin', 'war'], t: 'Ayer dormí muy bien.', e: 'schlafen va con haben, aunque suene a estado.' },
      { s: 'Wir ___ am Sonntag zu Hause geblieben.', a: 'sind', d: ['haben', 'waren'], t: 'El domingo nos quedamos en casa.', e: 'bleiben es una excepción: siempre con sein.' },
      { s: 'Was ___ du am Wochenende gemacht?', a: 'hast', d: ['bist', 'warst'], t: '¿Qué hiciste el fin de semana?', e: 'machen va con haben.' },
      { s: 'Das Kind ___ sofort eingeschlafen.', a: 'ist', d: ['hat', 'war'], t: 'El niño se durmió enseguida.', e: 'einschlafen es cambio de estado → sein.' },
      { s: 'Ich ___ gestern noch nie so viel gelacht.', a: 'habe', d: ['bin', 'war'], t: 'Ayer nunca me había reído tanto.', e: 'lachen va con haben.' },
      { s: 'Wir ___ gestern zwei Stunden spazieren gegangen.', a: 'sind', d: ['haben', 'waren'], t: 'Ayer estuvimos dos horas paseando.', e: 'gehen es movimiento con cambio de lugar → sein.' },
      { s: 'Ich ___ den ganzen Nachmittag gelernt.', a: 'habe', d: ['bin', 'war'], t: 'He estudiado toda la tarde.', e: 'lernen no es movimiento → haben.' },
      { s: 'Der Zug ___ pünktlich angekommen.', a: 'ist', d: ['hat', 'war'], t: 'El tren ha llegado puntual.', e: 'ankommen es llegar a un sitio → sein.' },
      { s: '___ du gestern ferngesehen?', a: 'Hast', d: ['Bist', 'Warst'], t: '¿Viste ayer la tele?', e: 'fernsehen → haben.' },
      { s: 'Meine Eltern ___ letztes Jahr nach Wien gezogen.', a: 'sind', d: ['haben', 'waren'], t: 'Mis padres se mudaron a Viena el año pasado.', e: 'umziehen implica cambio de lugar → sein.' },
      { s: 'Ich ___ heute früh aufgewacht.', a: 'bin', d: ['habe', 'war'], t: 'Hoy me he despertado pronto.', e: 'aufwachen es cambio de estado → sein.' },
      { s: 'Wir ___ gestern Abend Pizza bestellt.', a: 'haben', d: ['sind', 'waren'], t: 'Ayer por la noche pedimos pizza.', e: 'bestellen → haben.' },
      { s: 'Der Unfall ___ am Morgen passiert.', a: 'ist', d: ['hat', 'war'], t: 'El accidente ocurrió por la mañana.', e: 'passieren siempre con sein.' },
      { s: 'Am Freitag ___ ich ins Kino gegangen.', a: 'bin', d: ['habe', 'war'], t: 'El viernes fui al cine.', e: 'Los verbos de movimiento forman el Perfekt con sein.' },
      { s: 'Wir ___ den ganzen Tag gearbeitet.', a: 'haben', d: ['sind', 'waren'], t: 'Hemos trabajado todo el día.', e: 'arbeiten forma el Perfekt con haben.' },
      { s: '___ du schon gefrühstückt?', a: 'Hast', d: ['Bist', 'Warst'], t: '¿Ya has desayunado?', e: 'frühstücken va con haben.' },
      { s: 'Der Zug ___ ausnahmsweise pünktlich angekommen.', a: 'ist', d: ['hat', 'war'], t: 'El tren ha llegado puntual por una vez.', e: 'ankommen es verbo de movimiento: con sein.' },
      { s: 'Sie ___ mir gestern geschrieben.', a: 'hat', d: ['ist', 'war'], t: 'Ella me escribió ayer.', e: 'schreiben va con haben.' }
    ],
    orders: [
      { sol: ['Ich', 'habe', 'gestern', 'viel', 'gearbeitet'], t: 'Ayer trabajé mucho.', e: 'haben (2) + participio (final).' },
      { sol: ['Wir', 'sind', 'am', 'Samstag', 'nach', 'Wien', 'gefahren'], t: 'El sábado fuimos a Viena.', e: 'Movimiento → sein.' },
      { sol: ['Hast', 'du', 'den', 'Film', 'schon', 'gesehen?'], t: '¿Ya has visto la película?', e: 'Auxiliar primero en la pregunta.' },
      { sol: ['Sie', 'ist', 'sehr', 'früh', 'aufgestanden'], t: 'Se levantó muy pronto.', e: 'aufstehen con sein.' },
      { sol: ['Gestern', 'bin', 'ich', 'früh', 'aufgestanden'], alt: [['Ich', 'bin', 'gestern', 'früh', 'aufgestanden']], t: 'Ayer me levanté pronto.', e: 'Auxiliar en 2ª posición y participio al final.' },
      { sol: ['Wir', 'haben', 'den', 'ganzen', 'Tag', 'gearbeitet'], t: 'Hemos trabajado todo el día.', e: 'haben + participio al final.' },
      { sol: ['Der', 'Zug', 'ist', 'pünktlich', 'angekommen'], t: 'El tren ha llegado puntual.', e: 'ankommen va con sein.' }
    ],
    clozes: [
      { txt: 'Gestern ___ ich lange geschlafen, dann ___ ich in die Stadt gefahren. Dort ___ ich meine Freundin getroffen und wir ___ ins Kino gegangen.', a: ['habe', 'bin', 'habe', 'sind'], extra: ['hat', 'ist', 'war'], t: 'Ayer dormí hasta tarde, luego fui a la ciudad. Allí me encontré con mi amiga y fuimos al cine.', e: 'Los verbos de movimiento con cambio de lugar (fahren, gehen) van con "sein"; los demás con "haben".' }
    ]
  },

  // ---------- A1.2 L10: Perfekt de separables y de -ieren ----------
  'perfekt-bei-trennbaren-verben-und-ieren': {
    picks: [
      { s: 'Ich habe im Supermarkt ___.', a: 'eingekauft', d: ['gekauft ein', 'einkaufen'], t: 'He hecho la compra en el súper.', e: 'En los separables el -ge- va EN MEDIO: ein + ge + kauft.' },
      { s: 'Er hat mit dem Amt ___.', a: 'telefoniert', d: ['getelefoniert', 'telefonieren'], t: 'Ha hablado por teléfono con la oficina.', e: 'Los verbos en -ieren NO llevan ge-.' },
      { s: 'Wir haben den Termin ___.', a: 'vereinbart', d: ['gevereinbart', 'vereinbaren'], t: 'Hemos concertado la cita.', e: 'Prefijo inseparable ver- → sin ge-.' },
      { s: 'Hast du das Formular ___?', a: 'ausgefüllt', d: ['gefüllt aus', 'ausfüllen'], t: '¿Has rellenado el formulario?', e: 'ausfüllen → aus + ge + füllt.' },
      { s: 'Sie hat in Wien Medizin ___.', a: 'studiert', d: ['gestudiert', 'studieren'], t: 'Ha estudiado medicina en Viena.', e: 'studieren acaba en -ieren → sin ge-.' },
      { s: 'Ich habe dich gestern ___.', a: 'angerufen', d: ['gerufen an', 'anrufen'], t: 'Ayer te llamé.', e: 'anrufen → an + ge + rufen.' },
      { s: 'Der Zug ist pünktlich ___.', a: 'abgefahren', d: ['gefahren ab', 'abfahren'], t: 'El tren salió puntual.', e: 'abfahren es movimiento (sein) y separable: ab + ge + fahren.' },
      { s: 'Wir haben das Zimmer online ___.', a: 'reserviert', d: ['gereserviert', 'reservieren'], t: 'Hemos reservado la habitación por internet.', e: 'reservieren → reserviert, sin ge-.' },
      { s: 'Wann bist du heute ___?', a: 'aufgestanden', d: ['gestanden auf', 'aufstehen'], t: '¿A qué hora te has levantado hoy?', e: 'aufstehen: auf + ge + standen, con sein.' },
      { s: 'Er hat den Brief ___.', a: 'mitgebracht', d: ['gebracht mit', 'mitbringen'], t: 'Ha traído la carta.', e: 'mitbringen → mit + ge + bracht.' },
      { s: 'Ich habe die Wohnung ___.', a: 'aufgeräumt', d: ['geräumt auf', 'aufräumen'], t: 'He ordenado la casa.', e: 'aufräumen → auf + ge + räumt.' },
      { s: 'Sie haben das Projekt gut ___.', a: 'organisiert', d: ['georganisiert', 'organisieren'], t: 'Han organizado bien el proyecto.', e: 'organisieren → organisiert, sin ge-.' },
      { s: 'Ich habe die Kollegin gestern ___.', a: 'angerufen', d: ['anrufen', 'geanrufen'], t: 'Ayer llamé a la compañera.', e: 'Los separables llevan ge- en medio: angerufen.' },
      { s: 'Wir haben den Vertrag schon ___.', a: 'unterschrieben', d: ['geunterschrieben', 'unterschreiben'], t: 'Ya hemos firmado el contrato.', e: 'Los prefijos inseparables no llevan ge-.' },
      { s: 'Er hat mich über alles ___.', a: 'informiert', d: ['geinformiert', 'informieren'], t: 'Me informó de todo.', e: 'Los verbos en -ieren no llevan ge-.' },
      { s: 'Sie ist gestern Abend hier ___.', a: 'angekommen', d: ['ankommen', 'geankommen'], t: 'Llegó aquí ayer por la tarde.', e: 'ankommen: participio angekommen, con sein.' },
      { s: 'Ich habe den letzten Zug ___.', a: 'verpasst', d: ['geverpasst', 'verpassen'], t: 'He perdido el último tren.', e: 'ver- es inseparable: sin ge-.' }
    ],
    orders: [
      { sol: ['Ich', 'habe', 'heute', 'im', 'Supermarkt', 'eingekauft'], t: 'Hoy he hecho la compra en el súper.', e: 'El participio del separable cierra la frase.' },
      { sol: ['Er', 'hat', 'gestern', 'mit', 'dem', 'Amt', 'telefoniert'], t: 'Ayer habló por teléfono con la oficina.', e: 'telefoniert, sin ge-.' },
      { sol: ['Hast', 'du', 'das', 'Formular', 'schon', 'ausgefüllt?'], t: '¿Ya has rellenado el formulario?', e: 'ausgefüllt al final de la pregunta.' },
      { sol: ['Ich', 'habe', 'dich', 'gestern', 'Abend', 'angerufen'], t: 'Ayer por la tarde te llamé.', e: 'angerufen cierra la frase.' }
    ],
    clozes: [
      { txt: 'Gestern bin ich um sechs ___ (aufstehen) und habe schnell ___ (frühstücken). Dann habe ich meine Kollegin ___ (anrufen) und wir haben den Termin ___ (organisieren).', a: ['aufgestanden', 'gefrühstückt', 'angerufen', 'organisiert'], extra: ['aufgestehen', 'frühstückt', 'geanrufen', 'georganisiert'], t: 'Ayer me levanté a las seis y desayuné rápido. Luego llamé a mi compañera y organizamos la cita.', e: 'Tres reglas en un texto: el separable mete el -ge- en medio (aufgestanden, angerufen), el regular lo pone delante (gefrühstückt) y los verbos en -ieren NO llevan ge- (organisiert).' }
    ]
  },

  // ---------- A2.1 L1: repaso del Perfekt ----------
  'perfekt-wdh': {
    picks: [
      { s: 'Ich habe meine Familie ___.', a: 'besucht', d: ['gebesucht', 'besuchen'], t: 'He visitado a mi familia.', e: 'besuchen empieza por be-: el participio no lleva ge-.' },
      { s: 'Wir haben viel Deutsch ___.', a: 'gelernt', d: ['lernt', 'lernen'], t: 'Hemos aprendido mucho alemán.', e: 'Participio regular: ge + lern + t.' },
      { s: 'Sie ___ um sieben aufgestanden.', a: 'ist', d: ['hat', 'war'], t: 'Ella se ha levantado a las siete.', e: 'aufstehen va con sein.' },
      { s: '___ ihr schon gegessen?', a: 'Habt', d: ['Seid', 'Wart'], t: '¿Ya habéis comido?', e: 'essen va con haben.' },
      { s: 'Ich ___ gestern ins Kino gegangen.', a: 'bin', d: ['habe', 'war'], t: 'Ayer fui al cine.', e: 'gehen es movimiento → sein.' },
      { s: 'Was hast du am Wochenende ___?', a: 'gemacht', d: ['machen', 'macht'], t: '¿Qué hiciste el fin de semana?', e: 'machen → gemacht.' },
      { s: 'Er hat den Bus ___.', a: 'genommen', d: ['nehmen', 'nimmt'], t: 'Cogió el autobús.', e: 'nehmen → genommen (participio irregular).' },
      { s: 'Wir sind mit dem Zug ___.', a: 'gefahren', d: ['fahren', 'fährt'], t: 'Fuimos en tren.', e: 'fahren → gefahren, con sein.' },
      { s: 'Ich habe das Buch schon ___.', a: 'gelesen', d: ['lesen', 'liest'], t: 'Ya he leído el libro.', e: 'lesen → gelesen.' },
      { s: 'Sie hat mir alles ___.', a: 'erklärt', d: ['geerklärt', 'erklären'], t: 'Me lo ha explicado todo.', e: 'erklären lleva prefijo er-: sin ge-.' },
      { s: 'Wann ___ du gestern nach Hause gekommen?', a: 'bist', d: ['hast', 'warst'], t: '¿Cuándo llegaste ayer a casa?', e: 'kommen va con sein.' },
      { s: 'Wir haben den ganzen Tag ___.', a: 'gearbeitet', d: ['arbeiten', 'arbeitet'], t: 'Hemos trabajado todo el día.', e: 'arbeiten → gearbeitet (raíz en -t: se añade -et).' },
      { s: 'Ich ___ gestern meine Sachen gepackt.', a: 'habe', d: ['bin', 'war'], t: 'Ayer hice las maletas.', e: 'packen no es movimiento → haben.' },
      { s: 'Wir ___ im Mai umgezogen.', a: 'sind', d: ['haben', 'waren'], t: 'Nos mudamos en mayo.', e: 'umziehen es cambio de lugar → sein.' },
      { s: '___ du dich schon eingelebt?', a: 'Hast', d: ['Bist', 'Warst'], t: '¿Ya te has adaptado?', e: 'Los reflexivos van con haben.' },
      { s: 'Meine Familie ___ mich im Sommer besucht.', a: 'hat', d: ['ist', 'war'], t: 'Mi familia me visitó en verano.', e: 'besuchen → haben.' },
      { s: 'Der Brief ___ gestern angekommen.', a: 'ist', d: ['hat', 'war'], t: 'La carta llegó ayer.', e: 'ankommen → sein.' },
      { s: 'Ich ___ am Anfang viel geweint.', a: 'habe', d: ['bin', 'war'], t: 'Al principio lloré mucho.', e: 'weinen → haben.' },
      { s: 'Wir ___ lange in Spanien geblieben.', a: 'sind', d: ['haben', 'waren'], t: 'Nos quedamos mucho tiempo en España.', e: 'bleiben va con sein aunque no haya movimiento.' },
      { s: '___ ihr euch schon an das Wetter gewöhnt?', a: 'Habt', d: ['Seid', 'Wart'], t: '¿Os habéis acostumbrado ya al tiempo?', e: 'sich gewöhnen → haben.' },
      { s: 'Ich ___ mich erstaunlich schnell eingelebt.', a: 'habe', d: ['bin', 'war'], t: 'Me adapté sorprendentemente rápido.', e: 'sich einleben va con haben.' },
      { s: 'Sie ___ vor fünf Jahren ausgewandert.', a: 'ist', d: ['hat', 'war'], t: 'Emigró hace cinco años.', e: 'auswandern es de movimiento: con sein.' },
      { s: 'Wir ___ viel über das Land gelernt.', a: 'haben', d: ['sind', 'waren'], t: 'Hemos aprendido mucho sobre el país.', e: 'lernen va con haben.' }
    ],
    orders: [
      { sol: ['Ich', 'habe', 'am', 'Wochenende', 'meine', 'Familie', 'besucht'], t: 'El fin de semana visité a mi familia.', e: 'Auxiliar (2) + participio (final).' },
      { sol: ['Wir', 'sind', 'gestern', 'ins', 'Kino', 'gegangen'], t: 'Ayer fuimos al cine.', e: 'gehen con sein.' },
      { sol: ['Habt', 'ihr', 'schon', 'gegessen?'], t: '¿Ya habéis comido?', e: 'Auxiliar primero en la pregunta.' },
      { sol: ['Sie', 'ist', 'um', 'sieben', 'Uhr', 'aufgestanden'], t: 'Se ha levantado a las siete.', e: 'Separable: aufgestanden.' }
    ],
    clozes: [
      { txt: 'Vor drei Jahren ___ ich nach Wien gekommen. Am Anfang ___ ich fast niemanden gekannt und ___ oft allein geblieben. Dann ___ ich einen Kurs gemacht und dort ___ ich viele Leute kennengelernt.', a: ['bin', 'habe', 'bin', 'habe', 'habe'], extra: ['habe', 'bin', 'war', 'war'], t: 'Hace tres años vine a Viena. Al principio no conocía casi a nadie y me quedaba mucho solo. Luego hice un curso y allí conocí a mucha gente.', e: 'kommen y bleiben van con sein; kennen, machen y kennenlernen van con haben. Los cinco en el mismo relato.' }
    ]
  },

  // ---------- A2.1 L1: bleiben, sein, passieren ----------
  'perfekt-bleiben-sein-passieren': {
    picks: [
      { s: 'Am Wochenende ___ ich zu Hause geblieben.', a: 'bin', d: ['habe', 'war'], t: 'El fin de semana me quedé en casa.', e: '"bleiben" forma el Perfekt con SEIN aunque no sea movimiento: ich bin geblieben.' },
      { s: 'Was ___ denn passiert?', a: 'ist', d: ['hat', 'war'], t: '¿Qué ha pasado?', e: '"passieren" va siempre con SEIN: es ist passiert.' },
      { s: 'Ich ___ noch nie in Wien gewesen.', a: 'bin', d: ['habe', 'war'], t: 'Nunca he estado en Viena.', e: '"sein" forma su propio Perfekt con sein: ich bin gewesen.' },
      { s: 'Wie lange ___ ihr in Salzburg geblieben?', a: 'seid', d: ['habt', 'wart'], t: '¿Cuánto tiempo os quedasteis en Salzburgo?', e: '"bleiben" + sein; con "ihr": seid.' },
      { s: 'Wir ___ gestern im Park gewesen.', a: 'sind', d: ['haben', 'waren'], t: 'Ayer estuvimos en el parque.', e: 'Perfekt de sein: wir sind gewesen.' },
      { s: 'Der Unfall ___ gestern passiert.', a: 'ist', d: ['hat', 'war'], t: 'El accidente ocurrió ayer.', e: 'passieren + sein: ist passiert.' },
      { s: '___ Sie lange dort geblieben?', a: 'Sind', d: ['Haben', 'Waren'], t: '¿Se quedó usted mucho tiempo allí?', e: 'bleiben + sein (forma formal Sind).' },
      { s: 'Nichts Schlimmes ___ passiert.', a: 'ist', d: ['hat', 'wird'], t: 'No ha pasado nada malo.', e: 'passieren usa siempre auxiliar sein.' },
      { s: 'Bist du gestern lange wach ___?', a: 'geblieben', d: ['gebleibt', 'bleiben'], t: '¿Te quedaste despierto hasta tarde ayer?', e: 'Participio de bleiben: geblieben.' },
      { s: 'Er ___ schon in Berlin gewesen.', a: 'ist', d: ['hat', 'war'], t: 'Él ya ha estado en Berlín.', e: 'Perfekt de sein con er: ist gewesen.' },
      { s: 'Wo ___ du letzten Sommer gewesen?', a: 'bist', d: ['hast', 'warst'], t: '¿Dónde estuviste el verano pasado?', e: 'sein en Perfekt: bist … gewesen.' },
      { s: 'Auf der Autobahn ___ ein Unfall passiert.', a: 'ist', d: ['hat', 'war'], t: 'En la autopista ha ocurrido un accidente.', e: 'passieren siempre con sein.' },
      { s: 'Ich ___ gestern zu Hause geblieben.', a: 'bin', d: ['habe', 'war'], t: 'Ayer me quedé en casa.', e: 'bleiben siempre con sein, aunque no haya movimiento.' },
      { s: 'Wo ___ du gestern gewesen?', a: 'bist', d: ['hast', 'warst'], t: '¿Dónde estuviste ayer?', e: 'sein en Perfekt: bist … gewesen.' },
      { s: 'Was ___ denn hier passiert?', a: 'ist', d: ['hat', 'war'], t: '¿Qué ha pasado aquí?', e: 'passieren siempre con sein.' },
      { s: 'Wir ___ nur eine Stunde geblieben.', a: 'sind', d: ['haben', 'waren'], t: 'Nos quedamos solo una hora.', e: 'bleiben → sein.' },
      { s: 'Sie ___ letztes Jahr in Italien gewesen.', a: 'ist', d: ['hat', 'war'], t: 'Estuvo el año pasado en Italia.', e: 'sein en Perfekt lleva sein.' },
      { s: 'Mir ___ nichts passiert, keine Sorge.', a: 'ist', d: ['hat', 'war'], t: 'No me ha pasado nada, tranquilo.', e: 'passieren → sein.' },
      { s: '___ ihr lange auf der Party geblieben?', a: 'Seid', d: ['Habt', 'Wart'], t: '¿Os quedasteis mucho en la fiesta?', e: 'bleiben con ihr: seid … geblieben.' },
      { s: 'Der Unfall ___ am Morgen geschehen.', a: 'ist', d: ['hat', 'war'], t: 'El accidente ocurrió por la mañana.', e: 'geschehen, como passieren, va con sein.' },
      { s: 'Ich ___ drei Jahre in Graz geblieben.', a: 'bin', d: ['habe', 'war'], t: 'Me quedé tres años en Graz.', e: 'bleiben forma el Perfekt con sein.' },
      { s: 'Was ___ denn gestern passiert?', a: 'ist', d: ['hat', 'war'], t: '¿Qué pasó ayer?', e: 'passieren siempre con sein.' },
      { s: 'Er ___ noch nie in Spanien gewesen.', a: 'ist', d: ['hat', 'war'], t: 'Él nunca ha estado en España.', e: 'sein forma su propio Perfekt con sein: ist gewesen.' },
      { s: 'Was ist gestern Abend eigentlich ___?', a: 'passiert', d: ['gepassiert', 'passierte'], t: '¿Qué pasó anoche, en realidad?', e: 'passieren no lleva ge-: passiert, y va con sein.' },
      { s: 'Wir ___ am Wochenende einfach zu Hause geblieben.', a: 'sind', d: ['haben', 'waren'], t: 'El fin de semana nos quedamos en casa sin más.', e: 'bleiben forma el Perfekt con sein.' },
      { s: 'Ich ___ noch nie in Berlin gewesen, stell dir vor.', a: 'bin', d: ['habe', 'war'], t: 'Nunca he estado en Berlín, fíjate.', e: 'sein forma su Perfekt con sein: bin gewesen.' },
      { s: 'Sie ist zwei Stunden im Café ___ und hat gelesen.', a: 'geblieben', d: ['gebleibt', 'bleibte'], t: 'Se quedó dos horas en la cafetería leyendo.', e: 'Participio irregular: geblieben.' },
      { s: 'Auf der Autobahn ___ heute früh ein Unfall passiert.', a: 'ist', d: ['hat', 'war'], t: 'Esta mañana ha habido un accidente en la autopista.', e: 'passieren va con sein: ist passiert.' },
      { s: 'Wo ___ ihr letzten Sommer gewesen?', a: 'seid', d: ['habt', 'wart'], t: '¿Dónde estuvisteis el verano pasado?', e: 'gewesen va con sein: seid gewesen.' },
      { s: 'Alle sind gegangen, nur er ___ bis zum Schluss geblieben.', a: 'ist', d: ['hat', 'war'], t: 'Se fueron todos, solo él se quedó hasta el final.', e: 'bleiben con sein.' },
      { s: 'Mir ___ heute etwas ziemlich Komisches passiert.', a: 'ist', d: ['hat', 'war'], t: 'Hoy me ha pasado algo bastante raro.', e: 'passieren con sein, también con dativo de persona.' }
    ],
    orders: [
      { sol: ['Der', 'Unfall', 'ist', 'gestern', 'Abend', 'passiert'], t: 'El accidente ocurrió ayer por la tarde.', e: '"passieren" con SEIN: ist … passiert, con el participio al final.' },
      { sol: ['Wir', 'sind', 'den', 'ganzen', 'Tag', 'zu', 'Hause', 'geblieben'], t: 'Nos quedamos en casa todo el día.', e: 'Satzklammer: "sind" en 2ª posición y "geblieben" al final.' },
      { sol: ['Bist', 'du', 'schon', 'einmal', 'in', 'München', 'gewesen?'], t: '¿Has estado alguna vez en Múnich?', e: 'Auxiliar sein (bist) al principio por ser pregunta, participio al final.' },
      { sol: ['Ich', 'bin', 'gestern', 'lange', 'im', 'Büro', 'geblieben'], t: 'Ayer me quedé mucho tiempo en la oficina.', e: 'Auxiliar bin en posición 2, participio geblieben al final.' }
    ]
  },

  // ---------- A2.1 L1: participios sin ge- ----------
  'perfekt-untrennbar': {
    picks: [
      { s: 'Ich habe deine Nachricht gestern ___.', a: 'bekommen', d: ['gebekommen', 'bekommt'], t: 'Recibí tu mensaje ayer.', e: 'Los prefijos inseparables (be-, er-, ge-, ver-, ent-, emp-, zer-) NO llevan ge-: bekommen → bekommen.' },
      { s: 'Hast du die Frage ___?', a: 'verstanden', d: ['geverstanden', 'verstehen'], t: '¿Has entendido la pregunta?', e: '"verstehen" es inseparable: Partizip II = verstanden, sin ge-.' },
      { s: 'Sie hat in Österreich viel ___.', a: 'erlebt', d: ['geerlebt', 'erleben'], t: 'Ella ha vivido muchas cosas en Austria.', e: '"erleben" → erlebt (prefijo er-, sin ge-).' },
      { s: 'Wir haben das Auto letzte Woche ___.', a: 'verkauft', d: ['geverkauft', 'verkaufen'], t: 'Vendimos el coche la semana pasada.', e: '"verkaufen" → verkauft, sin ge-.' },
      { s: 'Der Film hat mir gut ___.', a: 'gefallen', d: ['gefallt', 'gefällt'], t: 'La película me gustó.', e: '"gefallen" ya empieza por ge-: el Partizip II es igual que el infinitivo.' },
      { s: 'Hast du den Fehler ___?', a: 'bemerkt', d: ['gebemerkt', 'bemerken'], t: '¿Te has dado cuenta del error?', e: '"bemerken" es inseparable (empieza por be-).' },
      { s: 'Wer hat die Kontinente ___?', a: 'entdeckt', d: ['geentdeckt', 'entdecken'], t: '¿Quién descubrió los continentes?', e: '"entdecken" es inseparable (empieza por ent-).' },
      { s: 'Er hat mir ein Geheimnis ___.', a: 'erzählt', d: ['geerzählt', 'erzählen'], t: 'Me ha contado un secreto.', e: '"erzählen" es inseparable (empieza por er-).' },
      { s: 'Die Vase ist leider ___.', a: 'zerbrochen', d: ['gezerbrochen', 'zerbrechen'], t: 'Por desgracia, el jarrón se ha roto.', e: '"zerbrechen" es inseparable (empieza por zer-).' },
      { s: 'Habt ihr den Termin ___?', a: 'vergessen', d: ['gevergessen', 'vergisst'], t: '¿Habéis olvidado la cita?', e: '"vergessen" es inseparable y fuerte (Partizip igual que Infinitiv).' },
      { s: 'Ich habe den Bus leider ___.', a: 'verpasst', d: ['geverpasst', 'verpassen'], t: 'Por desgracia he perdido el autobús.', e: 'verpassen → verpasst, sin ge-.' },
      { s: 'Sie hat die Prüfung ___.', a: 'bestanden', d: ['gebestanden', 'bestehen'], t: 'Ha aprobado el examen.', e: 'bestehen → bestanden (prefijo be-).' },
      { s: 'Ich habe das Wort nicht ___.', a: 'verstanden', d: ['verstehen', 'gestanden'], t: 'No he entendido la palabra.', e: 'Los verbos con ver- no llevan ge-.' },
      { s: 'Er hat die Rechnung schon ___.', a: 'bezahlt', d: ['gezahlt', 'bezahlen'], t: 'Ya ha pagado la factura.', e: 'be- es prefijo inseparable: sin ge-.' },
      { s: 'Wir haben zwei Nächte im Hotel ___.', a: 'übernachtet', d: ['geübernachtet', 'übernachten'], t: 'Hemos pasado dos noches en el hotel.', e: 'über- aquí es inseparable: sin ge-.' },
      { s: 'Sie hat mir den Weg genau ___.', a: 'beschrieben', d: ['geschrieben', 'beschreiben'], t: 'Me describió el camino con detalle.', e: 'be- es inseparable: beschrieben, sin ge-.' },
      { s: 'Der Brief ist gestern ___.', a: 'angekommen', d: ['ankommen', 'gekommen an'], t: 'La carta llegó ayer.', e: 'ankommen es separable: el ge- va en medio.' },
      { s: 'Ich habe den Schlüssel ___.', a: 'verloren', d: ['geloren', 'verlieren'], t: 'He perdido la llave.', e: 'verlieren pasa a verloren, sin ge-.' },
      { s: 'Wie erkennt man ein untrennbares Verb?', a: 'am Präfix', d: ['an der Länge', 'am Artikel'], t: '¿Cómo se reconoce un verbo inseparable?', e: 'be-, er-, ver-, ent-, emp-, ge-, miss-, zer-.' },
      { s: 'Er hat die Arbeit gestern ___.', a: 'begonnen', d: ['gebegonnen', 'beginnen'], t: 'Empezó el trabajo ayer.', e: 'beginnen pasa a begonnen, sin ge-.' }
    ],
    orders: [
      { sol: ['Ich', 'habe', 'die', 'E-Mail', 'noch', 'nicht', 'bekommen'], t: 'Todavía no he recibido el correo.', e: 'Participio inseparable "bekommen" (sin ge-) al final de la frase.' },
      { sol: ['Hast', 'du', 'meine', 'Frage', 'nicht', 'verstanden?'], t: '¿No has entendido mi pregunta?', e: 'Participio "verstanden" al final.' },
      { sol: ['Er', 'hat', 'mir', 'die', 'Regel', 'genau', 'erklärt'], t: 'Me ha explicado la regla con detalle.', e: '"erklärt" (sin ge-) al final.' },
      { sol: ['Wir', 'haben', 'das', 'Auto', 'letzte', 'Woche', 'verkauft'], t: 'Vendimos el coche la semana pasada.', e: 'verkauft cierra la frase.' }
    ],
    clozes: [
      { txt: 'Ich ___ die Stelle ___ (bekommen) und habe sofort ___ (telefonieren) mit meinen Eltern. Sie ___ mich sehr ___ (verstehen).', a: ['habe', 'bekommen', 'telefoniert', 'haben', 'verstanden'], extra: ['bin', 'gebekommen', 'getelefoniert', 'sind'], t: 'Conseguí el puesto y llamé enseguida a mis padres. Me entendieron muy bien.', e: 'Ni los prefijos inseparables (be-, ver-) ni los verbos en -ieren llevan ge-.' },
      { txt: 'Ich ___ die Wohnung ___ (bekommen) und sofort meine Eltern ___ (informieren). Sie ___ mich gut ___ (verstehen).', a: ['habe', 'bekommen', 'informiert', 'haben', 'verstanden'], extra: ['bin', 'gebekommen', 'geinformiert', 'sind'], t: 'Conseguí el piso e informé enseguida a mis padres. Me entendieron bien.', e: 'Ni los prefijos inseparables (be-, ver-) ni los verbos en -ieren llevan ge- en el participio.' }
    ]
  },
  'partizip-ii-regelmaessig': {
    picks: [
      { s: 'Gestern habe ich viel ___.', a: 'gearbeitet', d: ['arbeitet', 'gearbeitetet'], t: 'Ayer trabajé mucho.', e: 'Regular: ge- + raíz + -t.' },
      { s: 'Am Abend habe ich einen Film ___.', a: 'gesehen', d: ['gesehet', 'geseht'], t: 'Por la noche vi una película.', e: 'sehen es irregular: gesehen, con -en.' },
      { s: 'Ich habe mit dem Chef ___.', a: 'telefoniert', d: ['getelefoniert', 'telefonierte'], t: 'Hablé por teléfono con el jefe.', e: 'Los verbos en -ieren no llevan ge-.' },
      { s: 'Wir haben das Zimmer ___.', a: 'aufgeräumt', d: ['geaufräumt', 'aufräumt'], t: 'Ordenamos la habitación.', e: 'En los separables el ge- va DENTRO.' },
      { s: 'Sie hat den ganzen Tag ___.', a: 'geschlafen', d: ['geschlaft', 'schlafen'], t: 'Durmió todo el día.', e: 'schlafen es irregular: geschlafen.' },
      { s: 'Was hast du gestern ___?', a: 'gemacht', d: ['machte', 'gemachtet'], t: '¿Qué hiciste ayer?', e: 'machen es regular: gemacht.' },
      { s: 'Er hat das Formular ___.', a: 'unterschrieben', d: ['geunterschrieben', 'unterschriebt'], t: 'Firmó el formulario.', e: 'Los inseparables (unter-, be-, ver-) no llevan ge-.' },
      { s: 'Ich habe die Tabletten ___.', a: 'genommen', d: ['genehmt', 'genommt'], t: 'Me tomé las pastillas.', e: 'nehmen → genommen, irregular.' },
      { s: 'Wir haben lange ___.', a: 'gewartet', d: ['wartet', 'gewartetet'], t: 'Esperamos mucho rato.', e: 'warten es regular pero pide -et: gewartet.' },
      { s: 'Sie hat die Wohnung ___.', a: 'renoviert', d: ['gerenoviert', 'renovierte'], t: 'Reformó el piso.', e: 'renovieren acaba en -ieren: sin ge-.' },
      { s: 'Wie bildet man das Partizip II von einem regelmäßigen Verb?', a: 'ge- + raíz + -t', d: ['ge- + raíz + -en', 'raíz + -t'], t: 'Con «ge-» delante, la raíz y «-t» al final.', e: 'machen → gemacht.' },
      { s: 'Und de uno irregular?', a: 'ge- + raíz + -en', d: ['ge- + raíz + -t', 'raíz + -en'], t: 'Con «ge-», la raíz y «-en».', e: 'sehen → gesehen. Y la vocal suele cambiar.' },
      { s: 'Welche Verben bekommen KEIN ge-?', a: 'los de -ieren y los inseparables', d: ['los largos', 'los de movimiento'], t: 'No llevan «ge-» los acabados en «-ieren» y los inseparables.', e: 'telefoniert, verstanden, bezahlt.' },
      { s: 'Wo steht das ge- bei trennbaren Verben?', a: 'en medio', d: ['delante del todo', 'no lo llevan'], t: 'En los separables el «ge-» va en medio.', e: 'aufräumen → aufgeräumt.' },
      { s: 'Wo steht das Partizip II im Satz?', a: 'al final', d: ['detrás del sujeto', 'en la posición dos'], t: 'El participio va al final de la frase.', e: 'Ich habe gestern viel gearbeitet.' },
      { s: 'Warum ist „studiert“ ohne ge-?', a: 'porque acaba en -ieren', d: ['porque es inseparable', 'es una excepción suelta'], t: 'Porque es un verbo en «-ieren».', e: 'studieren, telefonieren, renovieren.' },
      { s: 'Was ist das Partizip II von „arbeiten“?', a: 'gearbeitet', d: ['gearbeit', 'arbeitet'], t: 'El participio de «arbeiten» es «gearbeitet».', e: 'Con e extra, porque la raíz acaba en -t.' },
      { s: 'Und von „besuchen“?', a: 'besucht', d: ['gebesucht', 'besuchen'], t: 'El de «besuchen» es «besucht».', e: 'be- es inseparable: sin ge-.' },
      { s: 'Und von „einkaufen“?', a: 'eingekauft', d: ['gekauft ein', 'geeinkauft'], t: 'El de «einkaufen» es «eingekauft».', e: 'El ge- se mete detrás del prefijo.' },
      { s: 'Wie erkennt man ein regelmäßiges Verb en el participio?', a: 'acaba en -t y no cambia la vocal', d: ['acaba en -en', 'lleva Umlaut'], t: 'Acaba en «-t» y la vocal no cambia.', e: 'machen → gemacht, no «gemocht».' }
    ]
  },
  'perfekt-oder-praeteritum': {
    picks: [
      { s: 'Gestern ___ ich lange geschlafen.', a: 'habe', d: ['war', 'hatte'], t: 'Ayer dormí hasta tarde.', e: 'Un verbo normal en pasado: Perfekt.' },
      { s: 'Ich ___ den ganzen Tag müde.', a: 'war', d: ['bin gewesen', 'habe gewesen'], t: 'Estuve cansado todo el día.', e: 'sein se dice en Präteritum: war.' },
      { s: 'Wir ___ leider keine Zeit.', a: 'hatten', d: ['haben gehabt', 'sind gehabt'], t: 'No tuvimos tiempo.', e: 'haben también en Präteritum: hatten.' },
      { s: 'Am Montag ___ ich zum Arzt gegangen.', a: 'bin', d: ['habe', 'war'], t: 'El lunes fui al médico.', e: 'gehen forma el Perfekt con sein.' },
      { s: 'Ich ___ gestern arbeiten.', a: 'musste', d: ['habe gemusst', 'bin gemusst'], t: 'Ayer tuve que trabajar.', e: 'Los modales van en Präteritum.' },
      { s: 'Sie ___ das Formular ausgefüllt.', a: 'hat', d: ['war', 'ist'], t: 'Rellenó el formulario.', e: 'Perfekt normal con haben.' },
      { s: 'Wo ___ du gestern?', a: 'warst', d: ['bist gewesen', 'hast gewesen'], t: '¿Dónde estuviste ayer?', e: 'sein en pasado: warst.' },
      { s: 'Er ___ nach Hause fahren.', a: 'wollte', d: ['hat gewollt', 'ist gewollt'], t: 'Quería irse a casa.', e: 'wollen en Präteritum: wollte.' },
      { s: 'Wir ___ am Wochenende zu Hause geblieben.', a: 'sind', d: ['haben', 'waren'], t: 'El fin de semana nos quedamos en casa.', e: 'bleiben con sein en el Perfekt.' },
      { s: 'Die Stimmung ___ gestern ausgezeichnet.', a: 'war', d: ['ist gewesen', 'hat gewesen'], t: 'El ambiente de ayer fue excelente.', e: 'Otra vez sein: war.' },
      { s: 'Welche Vergangenheit benutzt man beim Sprechen?', a: 'el Perfekt', d: ['el Präteritum', 'las dos igual'], t: 'Al hablar se usa el Perfekt.', e: 'Ich habe gearbeitet.' },
      { s: 'Welche Verben gehen trotzdem im Präteritum?', a: 'sein, haben y los modales', d: ['los separables', 'los reflexivos'], t: 'Van en Präteritum «sein», «haben» y los modales.', e: 'war, hatte, musste, konnte.' },
      { s: 'Warum se dice „Ich war müde“ y no „Ich bin müde gewesen“?', a: 'porque sein va en Präteritum', d: ['porque es más corto', 'porque es informal'], t: 'Porque «sein» va en Präteritum al hablar.', e: 'Lo otro no es incorrecto, pero suena raro.' },
      { s: 'Womit se forma el Perfekt?', a: 'haben o sein + participio', d: ['werden + participio', 'sólo el participio'], t: 'Con «haben» o «sein» más el participio.', e: 'Y el participio al final.' },
      { s: 'Welche Verben nehmen „sein“?', a: 'los de movimiento y cambio de estado', d: ['los reflexivos', 'los separables'], t: 'Los de movimiento y los de cambio de estado.', e: 'gehen, fahren, kommen, bleiben, werden.' },
      { s: 'Ich ___ gestern keine Lust.', a: 'hatte', d: ['habe gehabt', 'bin gewesen'], t: 'Ayer no tenía ganas.', e: 'haben → hatte.' },
      { s: 'Wir ___ um sieben aufgestanden.', a: 'sind', d: ['haben', 'waren'], t: 'Nos levantamos a las siete.', e: 'aufstehen es movimiento → sein.' },
      { s: 'Er ___ letzte Woche krank.', a: 'war', d: ['ist gewesen', 'hat gewesen'], t: 'La semana pasada estuvo enfermo.', e: 'sein → war.' },
      { s: 'Ich ___ gestern früher gehen.', a: 'musste', d: ['habe gemusst', 'bin gemusst'], t: 'Ayer me tuve que ir antes.', e: 'Los modales, en Präteritum.' },
      { s: 'Was benutzt man en un texto escrito, un cuento por ejemplo?', a: 'el Präteritum', d: ['el Perfekt', 'el presente'], t: 'En un texto escrito se usa el Präteritum.', e: 'Al revés que al hablar.' }
    ]
  }
};
