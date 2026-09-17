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
      { s: 'Mein Opa ___ Lehrer von Beruf.', a: 'war', d: ['hatte', 'ist'], t: 'Mi abuelo era profesor.', e: 'Las profesiones van con sein: er war.' }
    ],
    orders: [
      { sol: ['Gestern', 'war', 'ich', 'sehr', 'müde'], t: 'Ayer estaba muy cansado.', e: 'Complemento (1), verbo (2), sujeto (3).' },
      { sol: ['Wir', 'hatten', 'letztes', 'Jahr', 'kein', 'Auto'], t: 'El año pasado no teníamos coche.', e: 'hatten en 2ª posición.' },
      { sol: ['Wo', 'warst', 'du', 'am', 'Wochenende?'], t: '¿Dónde estuviste el fin de semana?', e: 'W-Frage con warst.' },
      { sol: ['Als', 'Kind', 'hatte', 'ich', 'einen', 'Hund'], t: 'De niño tenía un perro.', e: 'Complemento inicial → inversión (hatte ich).' }
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
      { s: 'Es ___ einmal ein König...', a: 'war', d: ['hatte', 'ist'], t: 'Érase una vez un rey...', e: 'Así empiezan los cuentos de hadas en alemán: Es war einmal...' }
    ],
    orders: [
      { sol: ['Ich', 'war', 'gestern', 'Abend', 'sehr', 'müde'], t: 'Ayer por la noche estaba muy cansado.', e: 'Verbo "war" en segunda posición.' },
      { sol: ['Wir', 'hatten', 'damals', 'eine', 'kleine', 'Wohnung'], t: 'En aquel entonces teníamos un piso pequeño.', e: 'Verbo "hatten" en segunda posición.' },
      { sol: ['Warst', 'du', 'schon', 'einmal', 'in', 'Wien?'], t: '¿Has estado alguna vez en Viena?', e: 'Pregunta de sí/no con warst.' },
      { sol: ['Am', 'Anfang', 'hatte', 'ich', 'großes', 'Heimweh'], t: 'Al principio echaba mucho de menos mi tierra.', e: 'Complemento inicial → hatte ich.' }
    ]
  },

  // ---------- A1.2 L9: Perfekt con haben o sein ----------
  'perfekt-mit-haben-und-sein': {
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
      { s: 'Ich ___ gestern noch nie so viel gelacht.', a: 'habe', d: ['bin', 'war'], t: 'Ayer nunca me había reído tanto.', e: 'lachen va con haben.' }
    ],
    orders: [
      { sol: ['Ich', 'habe', 'gestern', 'viel', 'gearbeitet'], t: 'Ayer trabajé mucho.', e: 'haben (2) + participio (final).' },
      { sol: ['Wir', 'sind', 'am', 'Samstag', 'nach', 'Wien', 'gefahren'], t: 'El sábado fuimos a Viena.', e: 'Movimiento → sein.' },
      { sol: ['Hast', 'du', 'den', 'Film', 'schon', 'gesehen?'], t: '¿Ya has visto la película?', e: 'Auxiliar primero en la pregunta.' },
      { sol: ['Sie', 'ist', 'sehr', 'früh', 'aufgestanden'], t: 'Se levantó muy pronto.', e: 'aufstehen con sein.' }
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
      { s: 'Sie haben das Projekt gut ___.', a: 'organisiert', d: ['georganisiert', 'organisieren'], t: 'Han organizado bien el proyecto.', e: 'organisieren → organisiert, sin ge-.' }
    ],
    orders: [
      { sol: ['Ich', 'habe', 'heute', 'im', 'Supermarkt', 'eingekauft'], t: 'Hoy he hecho la compra en el súper.', e: 'El participio del separable cierra la frase.' },
      { sol: ['Er', 'hat', 'gestern', 'mit', 'dem', 'Amt', 'telefoniert'], t: 'Ayer habló por teléfono con la oficina.', e: 'telefoniert, sin ge-.' },
      { sol: ['Hast', 'du', 'das', 'Formular', 'schon', 'ausgefüllt?'], t: '¿Ya has rellenado el formulario?', e: 'ausgefüllt al final de la pregunta.' },
      { sol: ['Ich', 'habe', 'dich', 'gestern', 'Abend', 'angerufen'], t: 'Ayer por la tarde te llamé.', e: 'angerufen cierra la frase.' }
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
      { s: 'Wir haben den ganzen Tag ___.', a: 'gearbeitet', d: ['arbeiten', 'arbeitet'], t: 'Hemos trabajado todo el día.', e: 'arbeiten → gearbeitet (raíz en -t: se añade -et).' }
    ],
    orders: [
      { sol: ['Ich', 'habe', 'am', 'Wochenende', 'meine', 'Familie', 'besucht'], t: 'El fin de semana visité a mi familia.', e: 'Auxiliar (2) + participio (final).' },
      { sol: ['Wir', 'sind', 'gestern', 'ins', 'Kino', 'gegangen'], t: 'Ayer fuimos al cine.', e: 'gehen con sein.' },
      { sol: ['Habt', 'ihr', 'schon', 'gegessen?'], t: '¿Ya habéis comido?', e: 'Auxiliar primero en la pregunta.' },
      { sol: ['Sie', 'ist', 'um', 'sieben', 'Uhr', 'aufgestanden'], t: 'Se ha levantado a las siete.', e: 'Separable: aufgestanden.' }
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
      { s: 'Auf der Autobahn ___ ein Unfall passiert.', a: 'ist', d: ['hat', 'war'], t: 'En la autopista ha ocurrido un accidente.', e: 'passieren siempre con sein.' }
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
      { s: 'Sie hat die Prüfung ___.', a: 'bestanden', d: ['gebestanden', 'bestehen'], t: 'Ha aprobado el examen.', e: 'bestehen → bestanden (prefijo be-).' }
    ],
    orders: [
      { sol: ['Ich', 'habe', 'die', 'E-Mail', 'noch', 'nicht', 'bekommen'], t: 'Todavía no he recibido el correo.', e: 'Participio inseparable "bekommen" (sin ge-) al final de la frase.' },
      { sol: ['Hast', 'du', 'meine', 'Frage', 'nicht', 'verstanden?'], t: '¿No has entendido mi pregunta?', e: 'Participio "verstanden" al final.' },
      { sol: ['Er', 'hat', 'mir', 'die', 'Regel', 'genau', 'erklärt'], t: 'Me ha explicado la regla con detalle.', e: '"erklärt" (sin ge-) al final.' },
      { sol: ['Wir', 'haben', 'das', 'Auto', 'letzte', 'Woche', 'verkauft'], t: 'Vendimos el coche la semana pasada.', e: 'verkauft cierra la frase.' }
    ]
  }
};
