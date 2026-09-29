// Miteinander A1.2 (Tomo 2) — Lektionen 9–16.

export const A12 = {
  id: 'a12',
  name: 'A1.2',
  label: 'Tomo 2 · A1.2',
  lektionen: [
    {
      id: 'a12-l9',
      nr: 9,
      name: 'Wie war dein Tag?',
      woerter: [
        {
          thema: 'Bewegungsverben',
          items: [
            { de: 'gehen', es: 'ir (a pie)', ex: 'Ich gehe jeden Morgen zu Fuß ins Büro.', exEs: 'Todas las mañanas voy andando a la oficina.' },
            { de: 'kommen', es: 'venir', ex: 'Kommst du heute Abend zu uns?', exEs: '¿Vienes esta noche a casa?' },
            { de: 'laufen', es: 'correr / andar', ex: 'Der Bus war weg, also bin ich gelaufen.', exEs: 'El autobús se había ido, así que fui corriendo.' },
            { de: 'fahren', es: 'ir (en vehículo)', ex: 'Am Wochenende fahren wir nach Salzburg.', exEs: 'El fin de semana vamos a Salzburgo.' },
            { de: 'fliegen', es: 'volar', ex: 'Im Sommer fliegen wir nach Spanien.', exEs: 'En verano volamos a España.' },
            { de: 'ankommen', es: 'llegar', ex: 'Der Zug kommt um halb acht in Wien an.', exEs: 'El tren llega a Viena a las siete y media.' },
            { de: 'abfahren', es: 'salir (un transporte)', ex: 'Der Zug fährt in fünf Minuten ab.', exEs: 'El tren sale en cinco minutos.' },
            { de: 'umsteigen', es: 'hacer transbordo', ex: 'In Linz müssen wir umsteigen.', exEs: 'En Linz tenemos que hacer transbordo.' },
            { de: 'zurückkommen', es: 'volver', ex: 'Wann kommst du zurück?', exEs: '¿Cuándo vuelves?' }
          ]
        },
        {
          thema: 'Stimmung',
          items: [
            { de: 'fröhlich', es: 'alegre', ex: 'Heute bist du aber fröhlich!', exEs: '¡Qué alegre estás hoy!' },
            { de: 'traurig', es: 'triste', ex: 'Der Film war am Ende ziemlich traurig.', exEs: 'La película acababa bastante triste.' },
            { de: 'müde', es: 'cansado/a', ex: 'Nach der Arbeit bin ich immer müde.', exEs: 'Después del trabajo siempre estoy cansado.' },
            { de: 'nervös', es: 'nervioso/a', ex: 'Bei Telefonaten auf Deutsch werde ich nervös.', exEs: 'Con las llamadas en alemán me pongo nervioso.' },
            { de: 'ruhig', es: 'tranquilo/a', ex: 'Die Straße ist abends sehr ruhig.', exEs: 'Por la noche la calle está muy tranquila.' },
            { de: 'gestresst', es: 'estresado/a', ex: 'Am Monatsende bin ich immer gestresst.', exEs: 'A final de mes siempre estoy estresado.' },
            { de: 'zufrieden', es: 'satisfecho/a', ex: 'Mit meiner neuen Wohnung bin ich sehr zufrieden.', exEs: 'Estoy muy contento con mi piso nuevo.' },
            { de: 'wütend', es: 'enfadado/a', ex: 'Wenn der Bus nicht kommt, werde ich wütend.', exEs: 'Cuando el autobús no llega me pongo furioso.' }
          ]
        },
        {
          thema: 'Orte',
          items: [
            { de: 'die Arbeit', es: 'el trabajo', ex: 'Zur Arbeit brauche ich zwanzig Minuten.', exEs: 'Al trabajo tardo veinte minutos.' },
            { de: 'die Schule', es: 'la escuela', ex: 'Die Schule fängt um acht an.', exEs: 'El colegio empieza a las ocho.' },
            { de: 'der Kurs', es: 'el curso', ex: 'Der Kurs ist dienstags und donnerstags.', exEs: 'El curso es los martes y los jueves.' },
            { de: 'das Büro', es: 'la oficina', ex: 'Mein Büro ist im dritten Stock.', exEs: 'Mi oficina está en la tercera planta.' },
            { de: 'der Park', es: 'el parque', ex: 'Im Park gibt es einen großen Spielplatz.', exEs: 'En el parque hay un parque infantil grande.' },
            { de: 'der Supermarkt', es: 'el supermercado', ex: 'Der Supermarkt hat bis acht offen.', exEs: 'El supermercado abre hasta las ocho.' },
            { de: 'das Krankenhaus / das Spital (AT)', es: 'el hospital', ex: 'Das Krankenhaus ist zwei Stationen weiter.', exEs: 'El hospital está dos paradas más allá.' },
            { de: 'die Uni', es: 'la universidad', ex: 'An der Uni habe ich viele Freunde gefunden.', exEs: 'En la universidad hice muchos amigos.' }
          ]
        },
        {
          thema: 'Zeitangaben und Jahreszahlen',
          items: [
            { de: 'gestern / vorgestern', es: 'ayer / anteayer', ex: 'Gestern war ich den ganzen Tag zu Hause.', exEs: 'Ayer estuve todo el día en casa.' },
            { de: 'letzte Woche', es: 'la semana pasada', ex: 'Letzte Woche hatte ich viel zu tun.', exEs: 'La semana pasada tuve mucho que hacer.' },
            { de: 'letztes Jahr', es: 'el año pasado', ex: 'Letztes Jahr waren wir in Italien.', exEs: 'El año pasado estuvimos en Italia.' },
            { de: 'vor zwei Jahren', es: 'hace dos años', ex: 'Vor zwei Jahren bin ich nach Wien gezogen.', exEs: 'Hace dos años me mudé a Viena.' },
            { de: '1998 = neunzehnhundertachtundneunzig', es: 'año 1998', ex: 'Ich bin neunzehnhundertachtundneunzig geboren.', exEs: 'Nací en mil novecientos noventa y ocho.' },
            { de: '2015 = zweitausendfünfzehn', es: 'año 2015', ex: 'Zweitausendfünfzehn habe ich Deutsch angefangen.', exEs: 'En dos mil quince empecé con el alemán.' }
          ]
        },
        {
          thema: 'Längenangaben',
          items: [
            { de: 'der Meter / der Kilometer', es: 'el metro / el kilómetro', ex: 'Bis zum Bahnhof sind es zwei Kilometer.', exEs: 'Hasta la estación hay dos kilómetros.' },
            { de: 'lang / kurz', es: 'largo / corto', ex: 'Der Weg ist kürzer, als ich dachte.', exEs: 'El camino es más corto de lo que pensaba.' },
            { de: 'weit', es: 'lejos', ex: 'Ist es noch weit bis zum Museum?', exEs: '¿Queda mucho hasta el museo?' },
            { de: 'in der Nähe', es: 'cerca', ex: 'In der Nähe gibt es eine gute Bäckerei.', exEs: 'Cerca hay una panadería buena.' }
          ]
        },
        {
          thema: 'Der Tagesrückblick',
          items: [
            { de: 'gestern Abend', es: 'ayer por la noche', ex: 'Gestern Abend war ich sehr müde.', exEs: 'Ayer por la noche estaba muy cansado.' },
            { de: 'vorgestern', es: 'anteayer', ex: 'Vorgestern war ich noch gesund.', exEs: 'Anteayer todavía estaba bien.' },
            { de: 'vorhin', es: 'hace un rato', ex: 'Vorhin hat deine Schwester angerufen.', exEs: 'Hace un rato llamó tu hermana.' },
            { de: 'der Termin absagen', es: 'cancelar la cita', ex: 'Ich musste den Termin absagen.', exEs: 'Tuve que cancelar la cita.' },
            { de: 'passieren', es: 'pasar, ocurrir', ex: 'Was ist denn passiert?', exEs: '¿Qué ha pasado?' },
            { de: 'erzählen', es: 'contar', ex: 'Erzähl mal, wie war dein Tag?', exEs: 'Cuenta, ¿qué tal el día?' },
            { de: 'sich freuen', es: 'alegrarse', ex: 'Ich freue mich, dass du da bist.', exEs: 'Me alegro de que estés aquí.' },
            { de: 'sich ärgern', es: 'enfadarse', ex: 'Ich ärgere mich über den Chef.', exEs: 'Me enfado con el jefe.' },
            { de: 'anstrengend', es: 'agotador', ex: 'Der Tag war ziemlich anstrengend.', exEs: 'El día fue bastante agotador.' },
            { de: 'entspannt', es: 'relajado', ex: 'Am Wochenende bin ich viel entspannter.', exEs: 'El fin de semana estoy mucho más relajado.' }
          ]
        },
        {
          thema: 'Erlebnisse & Gefühle',
          items: [
            { de: 'das Erlebnis', es: 'la experiencia vivida', ex: 'Das war ein tolles Erlebnis.', exEs: 'Fue una experiencia estupenda.' },
            { de: 'die Erinnerung', es: 'el recuerdo', ex: 'Diese Erinnerung bleibt für immer.', exEs: 'Ese recuerdo se queda para siempre.' },
            { de: 'der Unfall', es: 'el accidente', ex: 'Zum Glück war es nur ein kleiner Unfall.', exEs: 'Por suerte fue solo un accidente pequeño.' },
            { de: 'der Stau', es: 'el atasco', ex: 'Wir standen eine Stunde im Stau.', exEs: 'Estuvimos una hora en el atasco.' },
            { de: 'verpassen', es: 'perder (un transporte)', ex: 'Ich habe den Bus verpasst.', exEs: 'He perdido el autobús.' },
            { de: 'sich verspäten', es: 'retrasarse', ex: 'Der Zug hat sich um zwanzig Minuten verspätet.', exEs: 'El tren se ha retrasado veinte minutos.' },
            { de: 'sich beeilen', es: 'darse prisa', ex: 'Beeil dich, wir kommen zu spät.', exEs: 'Date prisa, vamos a llegar tarde.' },
            { de: 'sich erinnern', es: 'acordarse', ex: 'Ich erinnere mich gut an den Tag.', exEs: 'Me acuerdo bien de ese día.' },
            { de: 'sich langweilen', es: 'aburrirse', ex: 'Im Kurs langweile ich mich nie.', exEs: 'En clase no me aburro nunca.' },
            { de: 'aufregend', es: 'emocionante', ex: 'Der erste Tag war sehr aufregend.', exEs: 'El primer día fue muy emocionante.' },
            { de: 'langweilig', es: 'aburrido', ex: 'Der Film war ziemlich langweilig.', exEs: 'La película fue bastante aburrida.' },
            { de: 'enttäuscht', es: 'decepcionado', ex: 'Ich war von dem Ergebnis enttäuscht.', exEs: 'Estaba decepcionado con el resultado.' },
            { de: 'überrascht', es: 'sorprendido', ex: 'Alle waren von der Nachricht überrascht.', exEs: 'Todos estaban sorprendidos por la noticia.' },
            { de: 'stolz', es: 'orgulloso', ex: 'Meine Eltern sind sehr stolz auf mich.', exEs: 'Mis padres están muy orgullosos de mí.' },
            { de: 'neugierig', es: 'curioso', ex: 'Die Kinder sind sehr neugierig.', exEs: 'Los niños son muy curiosos.' },
            { de: 'der Zufall', es: 'la casualidad', ex: 'Was für ein Zufall, dich hier zu treffen!', exEs: '¡Qué casualidad encontrarte aquí!' },
            { de: 'plötzlich', es: 'de repente', ex: 'Plötzlich hat es angefangen zu regnen.', exEs: 'De repente empezó a llover.' },
            { de: 'schließlich', es: 'finalmente', ex: 'Schließlich sind wir doch noch angekommen.', exEs: 'Finalmente llegamos, a pesar de todo.' }
          ]
        },
        {
          thema: 'Erzählen & Reagieren',
          items: [
            { de: 'das Ereignis', es: 'el acontecimiento', ex: 'Das war das wichtigste Ereignis des Jahres.', exEs: 'Fue el acontecimiento más importante del año.' },
            { de: 'die Vergangenheit', es: 'el pasado', ex: 'Über die Vergangenheit spricht er nicht gern.', exEs: 'Del pasado no le gusta hablar.' },
            { de: 'die Gegenwart', es: 'el presente', ex: 'In der Gegenwart geht es ihm viel besser.', exEs: 'En el presente le va mucho mejor.' },
            { de: 'der Ablauf', es: 'el desarrollo', ex: 'Der Ablauf des Tages war genau geplant.', exEs: 'El desarrollo del día estaba planificado al detalle.' },
            { de: 'berichten', es: 'informar, contar', ex: 'Sie berichtet gerade von ihrer Reise.', exEs: 'Está contando su viaje.' },
            { de: 'beschreiben', es: 'describir', ex: 'Kannst du den Mann genauer beschreiben?', exEs: '¿Puedes describir al hombre con más detalle?' },
            { de: 'zuhören', es: 'escuchar', ex: 'Ich höre dir wirklich gern zu.', exEs: 'De verdad que me gusta escucharte.' },
            { de: 'unterbrechen', es: 'interrumpir', ex: 'Bitte unterbrich mich nicht ständig.', exEs: 'No me interrumpas constantemente, por favor.' },
            { de: 'schweigen', es: 'callar', ex: 'Nach dem Streit hat er lange geschwiegen.', exEs: 'Después de la discusión estuvo mucho tiempo callado.' },
            { de: 'lachen', es: 'reír', ex: 'Wir haben den ganzen Abend gelacht.', exEs: 'Nos reímos toda la noche.' },
            { de: 'weinen', es: 'llorar', ex: 'Sie hat vor Freude geweint.', exEs: 'Lloró de alegría.' },
            { de: 'sich aufregen', es: 'alterarse', ex: 'Über so etwas rege ich mich nicht mehr auf.', exEs: 'Por algo así ya no me altero.' },
            { de: 'sich beruhigen', es: 'calmarse', ex: 'Beruhige dich, es ist nichts passiert.', exEs: 'Cálmate, no ha pasado nada.' },
            { de: 'erschrecken', es: 'asustarse', ex: 'Ich bin richtig erschrocken.', exEs: 'Me he asustado de verdad.' },
            { de: 'die Panne', es: 'la avería', ex: 'Wir hatten auf der Autobahn eine Panne.', exEs: 'Tuvimos una avería en la autopista.' },
            { de: 'der Ärger', es: 'el disgusto, los problemas', ex: 'Zu Hause gab es deswegen großen Ärger.', exEs: 'En casa hubo un buen lío por eso.' },
            { de: 'der Schreck', es: 'el susto', ex: 'Das war ein ordentlicher Schreck.', exEs: 'Fue un buen susto.' },
            { de: 'dankbar', es: 'agradecido', ex: 'Ich bin dir wirklich sehr dankbar.', exEs: 'Te estoy muy agradecido de verdad.' },
            { de: 'zufällig', es: 'por casualidad', ex: 'Wir haben uns zufällig im Supermarkt getroffen.', exEs: 'Nos encontramos por casualidad en el supermercado.' },
            { de: 'damals', es: 'entonces', ex: 'Damals war alles viel billiger.', exEs: 'Entonces todo era mucho más barato.' }
          ]
        },
        {
          thema: 'Ursache & Gefühl',
          items: [
            { de: 'das Tagebuch', es: 'el diario', ex: 'Früher habe ich ein Tagebuch geführt.', exEs: 'Antes llevaba un diario.' },
            { de: 'die Geschichte', es: 'la historia', ex: 'Erzähl mir bitte die ganze Geschichte.', exEs: 'Cuéntame la historia entera, por favor.' },
            { de: 'der Moment', es: 'el momento', ex: 'In dem Moment habe ich nichts gesagt.', exEs: 'En ese momento no dije nada.' },
            { de: 'der Anlass', es: 'el motivo', ex: 'Der Anlass war ein kleiner Streit.', exEs: 'El motivo fue una pequeña discusión.' },
            { de: 'der Grund', es: 'la razón', ex: 'Den Grund kenne ich bis heute nicht.', exEs: 'La razón la desconozco hasta hoy.' },
            { de: 'die Ursache', es: 'la causa', ex: 'Die Ursache war ein technischer Fehler.', exEs: 'La causa fue un fallo técnico.' },
            { de: 'die Wirkung', es: 'el efecto', ex: 'Die Wirkung kam erst viel später.', exEs: 'El efecto llegó mucho después.' },
            { de: 'die Reaktion', es: 'la reacción', ex: 'Seine Reaktion hat mich sehr überrascht.', exEs: 'Su reacción me sorprendió mucho.' },
            { de: 'die Nervosität', es: 'el nerviosismo', ex: 'Die Nervosität war deutlich zu sehen.', exEs: 'El nerviosismo se veía claramente.' },
            { de: 'die Müdigkeit', es: 'el cansancio', ex: 'Die Müdigkeit kam erst am Nachmittag.', exEs: 'El cansancio llegó por la tarde.' },
            { de: 'das Glück', es: 'la suerte', ex: 'Zum Glück ist niemandem etwas passiert.', exEs: 'Por suerte no le pasó nada a nadie.' },
            { de: 'das Pech', es: 'la mala suerte', ex: 'Das war einfach Pech, mehr nicht.', exEs: 'Fue mala suerte, nada más.' },
            { de: 'die Ausnahme', es: 'la excepción', ex: 'Das war eine Ausnahme, keine Regel.', exEs: 'Eso fue una excepción, no la norma.' },
            { de: 'der Rückblick', es: 'la mirada atrás', ex: 'Im Rückblick war alles halb so schlimm.', exEs: 'Mirando atrás, no fue para tanto.' },
            { de: 'die Zukunft', es: 'el futuro', ex: 'Die Zukunft macht mir keine Angst.', exEs: 'El futuro no me da miedo.' },
            { de: 'der Wunsch', es: 'el deseo', ex: 'Mein größter Wunsch war eine eigene Wohnung.', exEs: 'Mi mayor deseo era un piso propio.' },
            { de: 'die Absicht', es: 'la intención', ex: 'Das war wirklich nicht meine Absicht.', exEs: 'De verdad que no era mi intención.' },
            { de: 'der Zweifel', es: 'la duda', ex: 'Zweifel hatte ich nur ganz am Anfang.', exEs: 'Dudas tuve solo al principio del todo.' }
          ]
        },
        {
          thema: 'Der Tagesablauf',
          items: [
            { de: 'aufwachen', es: 'despertarse', ex: 'Heute bin ich schon um fünf aufgewacht.', exEs: 'Hoy me he despertado ya a las cinco.' },
            { de: 'sich duschen', es: 'ducharse', ex: 'Nach dem Sport dusche ich mich sofort.', exEs: 'Después del deporte me ducho enseguida.' },
            { de: 'sich anziehen', es: 'vestirse', ex: 'Ich ziehe mich an und gehe gleich los.', exEs: 'Me visto y salgo enseguida.' },
            { de: 'sich waschen', es: 'lavarse', ex: 'Morgens wasche ich mich mit kaltem Wasser.', exEs: 'Por la mañana me lavo con agua fría.' },
            { de: 'sich die Zähne putzen', es: 'lavarse los dientes', ex: 'Nach dem Frühstück putze ich mir die Zähne.', exEs: 'Después de desayunar me lavo los dientes.' },
            { de: 'heimkommen', es: 'volver a casa', ex: 'Gestern bin ich erst um neun heimgekommen.', exEs: 'Ayer no volví a casa hasta las nueve.' },
            { de: 'sich ausruhen', es: 'descansar', ex: 'Am Sonntag ruhe ich mich richtig aus.', exEs: 'El domingo descanso de verdad.' },
            { de: 'das Bett machen', es: 'hacer la cama', ex: 'Ich mache das Bett, bevor ich gehe.', exEs: 'Hago la cama antes de irme.' },
            { de: 'die Wäsche waschen', es: 'lavar la ropa', ex: 'Samstags wasche ich die Wäsche.', exEs: 'Los sábados lavo la ropa.' },
            { de: 'abspülen', es: 'fregar los platos', ex: 'Du kochst und ich spüle ab.', exEs: 'Tú cocinas y yo friego.' }
          ]
        },
        {
          thema: 'Gefühle & Reaktionen',
          items: [
            { de: 'glücklich', es: 'feliz', ex: 'Nach der Prüfung war ich richtig glücklich.', exEs: 'Después del examen estaba de verdad feliz.' },
            { de: 'froh', es: 'contento, aliviado', ex: 'Ich bin froh, dass der Tag vorbei ist.', exEs: 'Me alegro de que el día haya terminado.' },
            { de: 'böse', es: 'enfadado', ex: 'Sei mir bitte nicht böse.', exEs: 'No te enfades conmigo, por favor.' },
            { de: 'aufgeregt', es: 'nervioso (por algo que viene)', ex: 'Vor dem Gespräch war ich sehr aufgeregt.', exEs: 'Antes de la entrevista estaba muy nervioso.' },
            { de: 'erleichtert', es: 'aliviado', ex: 'Als alles gut ging, war ich erleichtert.', exEs: 'Cuando todo salió bien me sentí aliviado.' },
            { de: 'genervt', es: 'harto, irritado', ex: 'Nach zwei Stunden Warten war ich genervt.', exEs: 'Después de dos horas esperando estaba harto.' },
            { de: 'erschöpft', es: 'agotado', ex: 'Am Freitagabend bin ich immer erschöpft.', exEs: 'Los viernes por la noche estoy siempre agotado.' },
            { de: 'sauer', es: 'cabreado', ex: 'Er war sauer, weil ich zu spät kam.', exEs: 'Estaba cabreado porque llegué tarde.' },
            { de: 'gespannt', es: 'expectante, con ganas de saber', ex: 'Ich bin gespannt, wie es weitergeht.', exEs: 'Tengo ganas de saber cómo sigue.' }
          ]
        }
      ],
      grammatik: [
        {
          regel: 'Präteritum von haben und sein',
          erklaerung: 'sein: war, warst, war, waren, wart, waren. haben: hatte, hattest, hatte, hatten, hattet, hatten. Se usa en pasado en vez del Perfekt.',
          beispiele: [
            { de: 'Gestern war ich sehr müde.', es: 'Ayer estaba muy cansado.' },
            { de: 'Wir hatten keine Zeit.', es: 'No teníamos tiempo.' }
          ]
        },
        {
          regel: 'Perfekt mit haben und sein',
          erklaerung: 'La mayoría con haben. Con SEIN: verbos de movimiento (gehen, fahren, kommen, fliegen) y de cambio de estado (aufstehen, einschlafen), más sein y bleiben.',
          beispiele: [
            { de: 'Ich habe viel gearbeitet.', es: 'He trabajado mucho.' },
            { de: 'Ich bin nach Wien gefahren.', es: 'He ido a Viena.' }
          ]
        },
        {
          regel: 'Satzklammer bei Perfekt',
          erklaerung: 'El auxiliar (haben/sein) va en 2ª posición y el participio al FINAL.',
          beispiele: [
            { de: 'Am Montag habe ich meine Familie besucht.', es: 'El lunes visité a mi familia.' },
            { de: 'Wann bist du nach Hause gekommen?', es: '¿Cuándo llegaste a casa?' }
          ]
        },
        {
          regel: 'Adjektive letzt-, nächst-',
          erklaerung: 'letzte Woche, letztes Jahr, letzten Monat · nächste Woche, nächstes Jahr, nächsten Montag.',
          beispiele: [
            { de: 'Letzten Sommer war ich in Kroatien.', es: 'El verano pasado estuve en Croacia.' },
            { de: 'Nächste Woche habe ich Urlaub.', es: 'La semana que viene tengo vacaciones.' }
          ]
        },
        {
          key: 'partizip-ii-regelmaessig',
          regel: 'Partizip II: die Formen',
          erklaerung: 'Los regulares hacen ge- + raíz + -t: machen → gemacht. Los irregulares hacen ge- + raíz (a veces cambiada) + -en: sehen → gesehen, gehen → gegangen. Los que acaban en -ieren NO llevan ge-: telefonieren → telefoniert.',
          beispiele: [
            { de: 'Gestern habe ich viel gearbeitet.', es: 'Ayer trabajé mucho.' },
            { de: 'Am Abend habe ich einen Film gesehen.', es: 'Por la noche vi una película.' },
            { de: 'Ich habe mit dem Chef telefoniert.', es: 'Hablé por teléfono con el jefe.' }
          ]
        },
        {
          key: 'reflexive-verben-akkusativ',
          regel: 'Reflexive Verben im Akkusativ',
          erklaerung: 'Muchos verbos del día a día llevan pronombre: mich, dich, sich, uns, euch, sich. El pronombre va justo detrás del verbo conjugado: Ich wasche MICH. Ojo: en alemán son reflexivos verbos que en español no lo son, y al revés.',
          beispiele: [
            { de: 'Ich dusche mich jeden Morgen.', es: 'Me ducho todas las mañanas.' },
            { de: 'Wir haben uns sehr gefreut.', es: 'Nos alegramos mucho.' }
          ]
        },
        {
          key: 'zeitadverbien-reihenfolge',
          regel: 'zuerst, dann, danach, schließlich',
          erklaerung: 'Para contar un día en orden: zuerst, dann, danach, später, schließlich. Si van al principio de la frase ocupan la posición 1, así que el verbo pasa delante del sujeto: DANN BIN ICH nach Hause gegangen.',
          beispiele: [
            { de: 'Zuerst habe ich gefrühstückt.', es: 'Primero desayuné.' },
            { de: 'Dann bin ich in die Arbeit gefahren.', es: 'Luego fui al trabajo.' }
          ]
        },
        {
          key: 'perfekt-oder-praeteritum',
          regel: 'Perfekt oder Präteritum?',
          erklaerung: 'Hablando, el pasado normal es el Perfekt: Ich habe gearbeitet. El Präteritum se guarda para sein, haben y los modales, que suenan raros en Perfekt: Ich WAR müde (no «ich bin müde gewesen»), ich HATTE keine Zeit, ich MUSSTE arbeiten.',
          beispiele: [
            { de: 'Gestern habe ich lange geschlafen.', es: 'Ayer dormí hasta tarde.' },
            { de: 'Ich war den ganzen Tag müde.', es: 'Estuve cansado todo el día.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'über den Tagesablauf berichten',
          es: 'Contar la rutina del día',
          wendungen: [
            { de: 'Wie war dein Tag? – Ganz gut, danke.', es: '¿Qué tal tu día? – Bastante bien, gracias.' }
          ]
        },
        {
          funktion: 'über besondere Erlebnisse im Alltag berichten',
          es: 'Contar anécdotas y experiencias cotidianas',
          wendungen: [
            { de: 'Ich habe den Zug verpasst.', es: 'He perdido el tren.' }
          ]
        },
        {
          funktion: 'Interesse und Erstaunen signalisieren',
          es: 'Mostrar interés y sorpresa',
          wendungen: [
            { de: 'Echt? · Wirklich? · Ach so!', es: '¿En serio? · ¿De verdad? · ¡Ah, vale!' }
          ]
        },
        {
          funktion: 'überrascht reagieren und nachhaken',
          es: 'Reaccionar con sorpresa e indagar',
          wendungen: [
            { de: 'Im Ernst? Das wusste ich gar nicht.', es: '¿En serio? No lo sabía.' }
          ]
        },
        {
          funktion: 'Smalltalk führen',
          es: 'Hacer conversación informal (Smalltalk)',
          wendungen: [
            { de: 'Schönes Wetter heute, oder?', es: 'Buen tiempo hoy, ¿no?' }
          ]
        },
        {
          funktion: 'Wartezeiten und Situationen kommentieren',
          es: 'Comentar situaciones y tiempos de espera',
          wendungen: [
            { de: 'Warten Sie schon lange?', es: '¿Lleva mucho esperando?' }
          ]
        },
        {
          funktion: 'über Lebensstationen und Migration sprechen',
          es: 'Hablar de etapas de la vida y migración',
          wendungen: [
            { de: '2015 bin ich nach Österreich gekommen.', es: 'En 2015 vine a Austria.' }
          ]
        },
        {
          funktion: 'Gespräche ablehnen oder vertagen',
          es: 'Rechazar o posponer una conversación',
          wendungen: [
            { de: 'Ich möchte lieber nicht darüber sprechen.', es: 'Prefiero no hablar de eso.' }
          ]
        }
      ]
    },

    {
      id: 'a12-l10',
      nr: 10,
      name: 'Was ist denn WIN?',
      woerter: [
        {
          thema: 'Orte in der Stadt',
          items: [
            { de: 'das Rathaus', es: 'el ayuntamiento', ex: 'Das Rathaus steht mitten am Platz.', exEs: 'El ayuntamiento está en medio de la plaza.' },
            { de: 'die Post', es: 'la oficina de correos', ex: 'Auf der Post war heute eine lange Schlange.', exEs: 'Hoy en correos había mucha cola.' },
            { de: 'die Bank', es: 'el banco', ex: 'Die Bank macht um halb fünf zu.', exEs: 'El banco cierra a las cuatro y media.' },
            { de: 'die Apotheke', es: 'la farmacia', ex: 'In der Apotheke habe ich nach etwas gegen Husten gefragt.', exEs: 'En la farmacia pregunté por algo para la tos.' },
            { de: 'der Bahnhof', es: 'la estación de tren', ex: 'Der Hauptbahnhof ist zehn Minuten zu Fuß.', exEs: 'La estación central está a diez minutos a pie.' },
            { de: 'die Bibliothek', es: 'la biblioteca', ex: 'In der Bibliothek lerne ich besser als zu Hause.', exEs: 'En la biblioteca estudio mejor que en casa.' },
            { de: 'das Museum', es: 'el museo', ex: 'Am ersten Sonntag ist das Museum gratis.', exEs: 'El primer domingo el museo es gratis.' },
            { de: 'der Markt', es: 'el mercado', ex: 'Am Markt kaufe ich Obst und Gemüse.', exEs: 'En el mercado compro fruta y verdura.' },
            { de: 'die Kirche', es: 'la iglesia', ex: 'Neben der Kirche ist ein kleines Café.', exEs: 'Al lado de la iglesia hay una cafetería pequeña.' },
            { de: 'das Amt', es: 'la oficina pública', ex: 'Für die Anmeldung muss ich aufs Amt.', exEs: 'Para el empadronamiento tengo que ir a la oficina pública.' },
            { de: 'das Standesamt', es: 'el registro civil', ex: 'Die Hochzeit ist im Standesamt.', exEs: 'La boda es en el registro civil.' },
            { de: 'die Polizei', es: 'la policía', ex: 'Die Polizei ist gleich um die Ecke.', exEs: 'La policía está a la vuelta de la esquina.' },
            { de: 'das Schwimmbad', es: 'la piscina', ex: 'Das Schwimmbad hat bis zehn offen.', exEs: 'La piscina abre hasta las diez.' },
            { de: 'das Krankenhaus', es: 'el hospital', ex: 'Das Krankenhaus ist hinter dem Park.', exEs: 'El hospital está detrás del parque.' },
            { de: 'das Kino', es: 'el cine', ex: 'Das Kino zeigt Filme im Original.', exEs: 'Ese cine pone las películas en versión original.' },
            { de: 'der Park', es: 'el parque', ex: 'Im Park sitzen wir oft nach der Arbeit.', exEs: 'Después del trabajo nos sentamos muchas veces en el parque.' }
          ]
        },
        {
          thema: 'Verkehrsmittel',
          items: [
            { de: 'der Bus', es: 'el autobús', ex: 'Der Bus kommt alle zehn Minuten.', exEs: 'El autobús pasa cada diez minutos.' },
            { de: 'die Straßenbahn / die Bim (AT)', es: 'el tranvía', ex: 'Mit der Bim bin ich in zehn Minuten da.', exEs: 'Con el tranvía llego en diez minutos.' },
            { de: 'die U-Bahn', es: 'el metro', ex: 'Die U-Bahn fährt bis nach Mitternacht.', exEs: 'El metro funciona hasta pasada la medianoche.' },
            { de: 'der Zug', es: 'el tren', ex: 'Der Zug nach Graz fährt stündlich.', exEs: 'El tren a Graz sale cada hora.' },
            { de: 'das Auto', es: 'el coche', ex: 'In der Stadt brauche ich kein Auto.', exEs: 'En la ciudad no necesito coche.' },
            { de: 'das Fahrrad / das Rad', es: 'la bicicleta', ex: 'Mein Fahrrad steht im Keller.', exEs: 'Mi bici está en el sótano.' },
            { de: 'das Taxi', es: 'el taxi', ex: 'Um diese Zeit nehme ich lieber ein Taxi.', exEs: 'A estas horas prefiero coger un taxi.' },
            { de: 'zu Fuß', es: 'a pie', ex: 'Zu Fuß sind es nur fünf Minuten.', exEs: 'Andando son solo cinco minutos.' }
          ]
        },
        {
          thema: 'öffentlicher Nahverkehr',
          items: [
            { de: 'die Haltestelle', es: 'la parada', ex: 'Die Haltestelle ist gleich vor dem Haus.', exEs: 'La parada está justo delante del edificio.' },
            { de: 'die Station', es: 'la estación', ex: 'Wir fahren noch drei Stationen.', exEs: 'Nos quedan tres paradas.' },
            { de: 'die Linie', es: 'la línea', ex: 'Nimm die Linie zwei Richtung Zentrum.', exEs: 'Coge la línea dos dirección centro.' },
            { de: 'die Fahrkarte / das Ticket', es: 'el billete', ex: 'Eine Fahrkarte für eine Person, bitte.', exEs: 'Un billete para una persona, por favor.' },
            { de: 'einsteigen / aussteigen / umsteigen', es: 'subir / bajar / hacer transbordo', ex: 'Wir steigen hier ein und am Stephansplatz aus.', exEs: 'Subimos aquí y bajamos en Stephansplatz.' },
            { de: 'der Fahrplan', es: 'el horario', ex: 'Am Fahrplan sieht man, wann der Letzte fährt.', exEs: 'En el horario se ve cuándo pasa el último.' }
          ]
        },
        {
          thema: 'Richtungsangaben',
          items: [
            { de: 'geradeaus', es: 'todo recto', ex: 'Gehen Sie immer geradeaus bis zur Kirche.', exEs: 'Siga todo recto hasta la iglesia.' },
            { de: 'nach links / nach rechts', es: 'a la izquierda / a la derecha', ex: 'An der Kirche gehen Sie nach links.', exEs: 'En la iglesia gire a la izquierda.' },
            { de: 'an der Ecke', es: 'en la esquina', ex: 'An der Ecke ist eine Bäckerei.', exEs: 'En la esquina hay una panadería.' },
            { de: 'über die Straße', es: 'al otro lado de la calle', ex: 'Gehen Sie über die Straße und dann geradeaus.', exEs: 'Cruce la calle y siga recto.' },
            { de: 'bis zur Kreuzung', es: 'hasta el cruce', ex: 'Gehen Sie bis zur Kreuzung und dann rechts.', exEs: 'Vaya hasta el cruce y luego a la derecha.' },
            { de: 'die erste Straße links', es: 'la primera calle a la izquierda', ex: 'Nehmen Sie die erste Straße links.', exEs: 'Coja la primera calle a la izquierda.' }
          ]
        },
        {
          thema: 'Unterwegs in der Stadt',
          items: [
            { de: 'der Weg', es: 'el camino', ex: 'Kennst du den Weg zum Bahnhof?', exEs: '¿Sabes el camino a la estación?' },
            { de: 'die Richtung', es: 'la dirección', ex: 'Fahren Sie Richtung Zentrum.', exEs: 'Vaya en dirección al centro.' },
            { de: 'die Ampel', es: 'el semáforo', ex: 'An der Ampel links abbiegen.', exEs: 'En el semáforo, gire a la izquierda.' },
            { de: 'abbiegen', es: 'girar', ex: 'Biegen Sie an der Post rechts ab.', exEs: 'Gire a la derecha en correos.' },
            { de: 'zu Fuß gehen', es: 'ir andando', ex: 'Zum Markt gehe ich immer zu Fuß.', exEs: 'Al mercado voy siempre andando.' },
            { de: 'umsteigen', es: 'hacer transbordo', ex: 'In Linz müssen wir umsteigen.', exEs: 'En Linz tenemos que hacer transbordo.' },
            { de: 'die Verspätung', es: 'el retraso', ex: 'Der Zug hat zehn Minuten Verspätung.', exEs: 'El tren lleva diez minutos de retraso.' },
            { de: 'der Ausgang', es: 'la salida', ex: 'Wo ist bitte der Ausgang?', exEs: '¿Dónde está la salida, por favor?' },
            { de: 'entwerten', es: 'validar (el billete)', ex: 'Vergiss nicht, das Ticket zu entwerten!', exEs: '¡No olvides validar el billete!' },
            { de: 'die Fahrt', es: 'el trayecto', ex: 'Die Fahrt dauert eine halbe Stunde.', exEs: 'El trayecto dura media hora.' },
            { de: 'die Kreuzung', es: 'el cruce', ex: 'An der Kreuzung müssen Sie links abbiegen.', exEs: 'En el cruce tiene que girar a la izquierda.' },
            { de: 'die Brücke', es: 'el puente', ex: 'Gehen Sie über die Brücke.', exEs: 'Cruce el puente.' },
            { de: 'die Unterführung', es: 'el paso subterráneo', ex: 'Nehmen Sie die Unterführung unter den Gleisen.', exEs: 'Coja el paso subterráneo por debajo de las vías.' },
            { de: 'der Gehsteig', es: 'la acera', ex: 'Bleiben Sie bitte auf dem Gehsteig.', exEs: 'Quédese en la acera, por favor.' },
            { de: 'der Zebrastreifen', es: 'el paso de cebra', ex: 'Am Zebrastreifen darf man über die Straße.', exEs: 'En el paso de cebra se puede cruzar la calle.' },
            { de: 'das Gleis', es: 'la vía', ex: 'Der Zug fährt von Gleis drei ab.', exEs: 'El tren sale de la vía tres.' },
            { de: 'der Bahnsteig', es: 'el andén', ex: 'Wir warten am Bahnsteig auf den Zug.', exEs: 'Esperamos el tren en el andén.' },
            { de: 'der Automat', es: 'la máquina expendedora', ex: 'Am Automaten kannst du Tickets kaufen.', exEs: 'En la máquina puedes comprar billetes.' },
            { de: 'die Monatskarte', es: 'el abono mensual', ex: 'Mit der Monatskarte fahre ich überall hin.', exEs: 'Con el abono mensual voy a todas partes.' },
            { de: 'der Schaffner / die Schaffnerin', es: 'el revisor / la revisora', ex: 'Der Schaffner kontrolliert die Fahrkarten.', exEs: 'El revisor controla los billetes.' },
            { de: 'die Auskunft', es: 'la información', ex: 'An der Auskunft fragen wir nach dem Fahrplan.', exEs: 'En información preguntamos por el horario.' },
            { de: 'der Anschluss', es: 'el enlace', ex: 'In Linz haben wir einen guten Anschluss.', exEs: 'En Linz tenemos un buen enlace.' },
            { de: 'die Strecke', es: 'el trayecto', ex: 'Die Strecke dauert vierzig Minuten.', exEs: 'El trayecto dura cuarenta minutos.' },
            { de: 'der Umweg', es: 'el rodeo', ex: 'Wir haben einen kleinen Umweg gemacht.', exEs: 'Hemos dado un pequeño rodeo.' },
            { de: 'die Abkürzung', es: 'el atajo', ex: 'Durch den Park gibt es eine Abkürzung.', exEs: 'Por el parque hay un atajo.' },
            { de: 'sich verfahren', es: 'perderse conduciendo', ex: 'Wir haben uns im Auto verfahren.', exEs: 'Nos hemos perdido con el coche.' },
            { de: 'gegenüber', es: 'enfrente', ex: 'Die Apotheke ist gegenüber vom Bahnhof.', exEs: 'La farmacia está enfrente de la estación.' }
          ]
        },
        {
          thema: 'Verkehr & Orientierung',
          items: [
            { de: 'der Kreisverkehr', es: 'la rotonda', ex: 'Am Kreisverkehr nehmen Sie die zweite Ausfahrt.', exEs: 'En la rotonda coja la segunda salida.' },
            { de: 'die Einbahnstraße', es: 'la calle de sentido único', ex: 'Das ist eine Einbahnstraße, da darfst du nicht rein.', exEs: 'Es una calle de sentido único, no puedes entrar.' },
            { de: 'das Verkehrsschild', es: 'la señal de tráfico', ex: 'Das Verkehrsschild habe ich glatt übersehen.', exEs: 'La señal de tráfico no la vi.' },
            { de: 'der Parkplatz', es: 'el aparcamiento', ex: 'Einen Parkplatz findet man hier nie.', exEs: 'Aquí nunca se encuentra aparcamiento.' },
            { de: 'die Tankstelle', es: 'la gasolinera', ex: 'An der Tankstelle gibt es auch Kaffee.', exEs: 'En la gasolinera también hay café.' },
            { de: 'das Benzin', es: 'la gasolina', ex: 'Das Benzin ist wieder teurer geworden.', exEs: 'La gasolina ha vuelto a subir.' },
            { de: 'der Führerschein', es: 'el carné de conducir', ex: 'Ohne Führerschein darfst du nicht fahren.', exEs: 'Sin carné no puedes conducir.' },
            { de: 'die Umleitung', es: 'el desvío', ex: 'Wegen der Baustelle gibt es eine Umleitung.', exEs: 'Por las obras hay un desvío.' },
            { de: 'die Geschwindigkeit', es: 'la velocidad', ex: 'Hier ist die Geschwindigkeit auf dreißig begrenzt.', exEs: 'Aquí la velocidad está limitada a treinta.' },
            { de: 'der Radweg', es: 'el carril bici', ex: 'Der Radweg ist hier sehr breit.', exEs: 'Aquí el carril bici es muy ancho.' },
            { de: 'der Fahrgast', es: 'el pasajero', ex: 'Jeder Fahrgast braucht ein gültiges Ticket.', exEs: 'Cada pasajero necesita un billete válido.' },
            { de: 'die Rolltreppe', es: 'la escalera mecánica', ex: 'Die Rolltreppe ist schon wieder kaputt.', exEs: 'La escalera mecánica está rota otra vez.' },
            { de: 'der Notausgang', es: 'la salida de emergencia', ex: 'Der Notausgang ist hinten links.', exEs: 'La salida de emergencia está al fondo a la izquierda.' },
            { de: 'das Schild', es: 'el cartel', ex: 'Auf dem Schild steht die Öffnungszeit.', exEs: 'En el cartel pone el horario.' },
            { de: 'der Vorort', es: 'las afueras', ex: 'Wir wohnen in einem Vorort von Wien.', exEs: 'Vivimos en las afueras de Viena.' },
            { de: 'das Zentrum', es: 'el centro', ex: 'Vom Zentrum bis hierher sind es zehn Minuten.', exEs: 'Del centro hasta aquí hay diez minutos.' },
            { de: 'die Entfernung', es: 'la distancia', ex: 'Die Entfernung beträgt zwölf Kilometer.', exEs: 'La distancia es de doce kilómetros.' },
            { de: 'abstellen', es: 'aparcar, dejar', ex: 'Wo kann ich das Rad abstellen?', exEs: '¿Dónde puedo dejar la bici?' },
            { de: 'überqueren', es: 'cruzar', ex: 'Überqueren Sie die Straße bei Grün.', exEs: 'Cruce la calle en verde.' },
            { de: 'öffentlich', es: 'público', ex: 'Ich fahre nur mit öffentlichen Verkehrsmitteln.', exEs: 'Solo viajo en transporte público.' }
          ]
        },
        {
          thema: 'Auto & Nahverkehr',
          items: [
            { de: 'der Schwarzfahrer', es: 'el que viaja sin billete', ex: 'Der Schwarzfahrer musste hundert Euro zahlen.', exEs: 'El que viajaba sin billete tuvo que pagar cien euros.' },
            { de: 'die Geldstrafe', es: 'la multa', ex: 'Die Geldstrafe beträgt hundert Euro.', exEs: 'La multa es de cien euros.' },
            { de: 'der Berufsverkehr', es: 'la hora punta', ex: 'Im Berufsverkehr dauert alles doppelt so lang.', exEs: 'En hora punta todo tarda el doble.' },
            { de: 'das Navi', es: 'el navegador', ex: 'Ohne Navi finde ich hier gar nichts.', exEs: 'Sin navegador aquí no encuentro nada.' },
            { de: 'der Reifen', es: 'el neumático', ex: 'Der Reifen hat zu wenig Luft.', exEs: 'El neumático tiene poco aire.' },
            { de: 'die Bremse', es: 'el freno', ex: 'Die Bremse quietscht seit gestern.', exEs: 'El freno chirría desde ayer.' },
            { de: 'der Motor', es: 'el motor', ex: 'Der Motor springt bei Kälte schlecht an.', exEs: 'El motor arranca mal con frío.' },
            { de: 'der Stehplatz', es: 'el sitio de pie', ex: 'Am Morgen bleibt nur ein Stehplatz.', exEs: 'Por la mañana solo queda sitio de pie.' },
            { de: 'die Endstation', es: 'la última parada', ex: 'Bei der Endstation müssen alle aussteigen.', exEs: 'En la última parada se baja todo el mundo.' },
            { de: 'die Nachtlinie', es: 'la línea nocturna', ex: 'Die Nachtlinie fährt nur am Wochenende.', exEs: 'La línea nocturna solo funciona el fin de semana.' },
            { de: 'das Einzelticket', es: 'el billete sencillo', ex: 'Ein Einzelticket kostet zwei Euro vierzig.', exEs: 'Un billete sencillo cuesta dos euros cuarenta.' },
            { de: 'die Jahreskarte', es: 'el abono anual', ex: 'Die Jahreskarte lohnt sich für mich wirklich.', exEs: 'El abono anual me compensa de verdad.' },
            { de: 'der Kinderwagen', es: 'el carrito de bebé', ex: 'Mit dem Kinderwagen nehme ich den Lift.', exEs: 'Con el carrito cojo el ascensor.' },
            { de: 'barrierefrei', es: 'accesible', ex: 'Diese Station ist zum Glück barrierefrei.', exEs: 'Por suerte esta estación es accesible.' },
            { de: 'die Treppe', es: 'la escalera', ex: 'Die Treppe ist oft schneller als der Lift.', exEs: 'La escalera suele ser más rápida que el ascensor.' },
            { de: 'der Fußgänger', es: 'el peatón', ex: 'Der Fußgänger hat hier immer Vorrang.', exEs: 'Aquí el peatón siempre tiene preferencia.' },
            { de: 'der Radfahrer', es: 'el ciclista', ex: 'Der Radfahrer ist bei Rot gefahren.', exEs: 'El ciclista se saltó el semáforo en rojo.' },
            { de: 'die Vorfahrt', es: 'la preferencia', ex: 'An dieser Kreuzung hat der Bus Vorfahrt.', exEs: 'En este cruce el autobús tiene preferencia.' }
          ]
        },
        {
          thema: 'Geschäfte & Dienstleistungen',
          items: [
            { de: 'die Trafik (AT)', es: 'el estanco, el quiosco', ex: 'Fahrscheine bekommst du auch in der Trafik.', exEs: 'Los billetes los venden también en el estanco.' },
            { de: 'die Drogerie', es: 'la droguería, la perfumería', ex: 'Zahnpasta kaufe ich in der Drogerie.', exEs: 'La pasta de dientes la compro en la droguería.' },
            { de: 'das Einkaufszentrum', es: 'el centro comercial', ex: 'Am Samstag ist das Einkaufszentrum voll.', exEs: 'El sábado el centro comercial está lleno.' },
            { de: 'der Baumarkt', es: 'la tienda de bricolaje', ex: 'Für die Regale fahren wir in den Baumarkt.', exEs: 'Para las estanterías vamos a la tienda de bricolaje.' },
            { de: 'die Reinigung', es: 'la tintorería', ex: 'Den Mantel bringe ich in die Reinigung.', exEs: 'Llevo el abrigo a la tintorería.' },
            { de: 'der Friseursalon', es: 'la peluquería', ex: 'Der Friseursalon an der Ecke ist günstig.', exEs: 'La peluquería de la esquina es barata.' },
            { de: 'das Schuhgeschäft', es: 'la zapatería', ex: 'Im Schuhgeschäft hatten sie meine Größe nicht.', exEs: 'En la zapatería no tenían mi número.' },
            { de: 'die Buchhandlung', es: 'la librería', ex: 'In der Buchhandlung gibt es auch deutsche Lernbücher.', exEs: 'En la librería hay también libros para aprender alemán.' },
            { de: 'das Café', es: 'la cafetería', ex: 'Wir treffen uns im Café neben der Bank.', exEs: 'Quedamos en la cafetería al lado del banco.' },
            { de: 'das Geschäft', es: 'la tienda', ex: 'Das Geschäft hat bis achtzehn Uhr offen.', exEs: 'La tienda abre hasta las seis.' }
          ]
        },
        {
          thema: 'Wege & Auskunft',
          items: [
            { de: 'sich verlaufen', es: 'perderse (andando)', ex: 'In der Altstadt verlaufe ich mich jedes Mal.', exEs: 'En el casco antiguo me pierdo cada vez.' },
            { de: 'vorbeigehen', es: 'pasar por delante', ex: 'Sie gehen am Rathaus vorbei und dann links.', exEs: 'Pasa por delante del ayuntamiento y luego a la izquierda.' },
            { de: 'weitergehen', es: 'seguir andando', ex: 'Gehen Sie bitte bis zur Ampel weiter.', exEs: 'Siga andando hasta el semáforo.' },
            { de: 'umkehren', es: 'dar la vuelta', ex: 'Wir müssen umkehren, das war falsch.', exEs: 'Tenemos que dar la vuelta, era por el otro lado.' },
            { de: 'die Wegbeschreibung', es: 'las indicaciones', ex: 'Schick mir bitte eine kurze Wegbeschreibung.', exEs: 'Mándame unas indicaciones breves, por favor.' },
            { de: 'der Stadtplan', es: 'el plano de la ciudad', ex: 'Am Bahnhof gibt es einen Stadtplan gratis.', exEs: 'En la estación hay un plano de la ciudad gratis.' },
            { de: 'die Sehenswürdigkeit', es: 'el lugar de interés', ex: 'Der Stephansdom ist die bekannteste Sehenswürdigkeit.', exEs: 'La catedral de San Esteban es el lugar más conocido.' },
            { de: 'der Platz', es: 'la plaza', ex: 'Der Markt ist auf dem Platz hinter der Kirche.', exEs: 'El mercado está en la plaza detrás de la iglesia.' },
            { de: 'die Gasse (AT)', es: 'la calle estrecha, la callejuela', ex: 'Wir wohnen in einer ruhigen Gasse.', exEs: 'Vivimos en una calle tranquila.' }
          ]
        }
      ],
      grammatik: [
        {
          regel: 'Perfekt bei trennbaren Verben und -ieren',
          erklaerung: 'Separables: el -ge- va EN MEDIO (eingekauft). Verbos en -ieren: SIN ge- (telefoniert).',
          beispiele: [
            { de: 'Ich habe im Supermarkt eingekauft.', es: 'He hecho la compra en el súper.' },
            { de: 'Er hat mit dem Amt telefoniert.', es: 'Ha hablado por teléfono con la oficina.' }
          ]
        },
        {
          regel: 'es gibt + Akkusativ',
          erklaerung: '"es gibt" = hay. Siempre con acusativo.',
          beispiele: [
            { de: 'In der Stadt gibt es einen Markt.', es: 'En la ciudad hay un mercado.' },
            { de: 'Gibt es hier eine Apotheke?', es: '¿Hay una farmacia por aquí?' }
          ]
        },
        {
          regel: 'definiter Artikel im Dativ',
          erklaerung: 'der → dem, die → der, das → dem, plural die → den (+ -n en el sustantivo).',
          beispiele: [
            { de: 'Ich fahre mit dem Bus.', es: 'Voy en autobús.' },
            { de: 'Sie kommt aus der Bibliothek.', es: 'Ella viene de la biblioteca.' }
          ]
        },
        {
          regel: 'Präposition zu + Dativ',
          erklaerung: 'zu dem = zum, zu der = zur. Indica destino (personas, edificios).',
          beispiele: [
            { de: 'Wie komme ich zum Bahnhof?', es: '¿Cómo llego a la estación?' },
            { de: 'Ich gehe zur Post.', es: 'Voy a correos.' }
          ]
        },
        {
          regel: 'mit + Dativ',
          erklaerung: 'Medio de transporte y compañía.',
          beispiele: [
            { de: 'Ich fahre mit der U-Bahn.', es: 'Voy en metro.' },
            { de: 'Er kommt mit seinem Bruder.', es: 'Viene con su hermano.' }
          ]
        },
        {
          key: 'wechselpraep-akkusativ-wohin',
          regel: 'Wechselpräpositionen + Akkusativ (Wohin?)',
          erklaerung: 'Las mismas preposiciones (in, auf, an, über, unter, vor, hinter, neben, zwischen) piden ACUSATIVO cuando hay movimiento hacia un sitio: Ich gehe IN DIE Stadt. Con dativo dirían dónde estás, no adónde vas.',
          beispiele: [
            { de: 'Ich gehe in die Stadt.', es: 'Voy al centro.' },
            { de: 'Stell die Tasche bitte auf den Tisch.', es: 'Pon la bolsa en la mesa, por favor.' }
          ]
        },
        {
          key: 'imperativ-wegbeschreibung',
          regel: 'Imperativ für den Weg',
          erklaerung: 'Para indicar un camino se usa el imperativo de Sie: verbo + Sie. Con verbos separables, el prefijo se va al final: Biegen Sie rechts AB. Gehen Sie geradeaus.',
          beispiele: [
            { de: 'Gehen Sie geradeaus bis zur Ampel.', es: 'Siga recto hasta el semáforo.' },
            { de: 'Biegen Sie an der Kreuzung rechts ab.', es: 'Gire a la derecha en el cruce.' }
          ]
        },
        {
          key: 'praeposition-nach-zu-in-richtung',
          regel: 'nach, zu oder in?',
          erklaerung: 'nach = ciudades y países sin artículo, y nach Hause. zu = personas, tiendas y sitios concretos: zum Arzt, zur Post. in = cuando entras dentro: ins Kino, in die Stadt.',
          beispiele: [
            { de: 'Am Freitag fahre ich nach Graz.', es: 'El viernes voy a Graz.' },
            { de: 'Ich muss noch zur Post.', es: 'Todavía tengo que ir a correos.' },
            { de: 'Gehen wir heute ins Kino?', es: '¿Vamos hoy al cine?' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'nach dem Weg fragen',
          es: 'Preguntar por el camino',
          wendungen: [
            { de: 'Entschuldigung, wie komme ich zum Rathaus?', es: 'Perdone, ¿cómo llego al ayuntamiento?' }
          ]
        },
        {
          funktion: 'den Fußweg beschreiben',
          es: 'Describir el camino a pie',
          wendungen: [
            { de: 'Ist es weit von hier? – Nein, fünf Minuten zu Fuß.', es: '¿Está lejos? – No, cinco minutos a pie.' }
          ]
        },
        {
          funktion: 'nach Haltestellen und Linien im Nahverkehr fragen',
          es: 'Preguntar por paradas y líneas de transporte público',
          wendungen: [
            { de: 'Welche Linie muss ich nehmen?', es: '¿Qué línea tengo que coger?' }
          ]
        },
        {
          funktion: 'im Nahverkehr den Weg erklären',
          es: 'Explicar la ruta en transporte público',
          wendungen: [
            { de: 'Nehmen Sie die U3 und steigen Sie bei Stephansplatz um.', es: 'Coja la U3 y haga transbordo en Stephansplatz.' }
          ]
        },
        {
          funktion: 'Tickets und Fahrkarten kaufen',
          es: 'Comprar billetes y abonos',
          wendungen: [
            { de: 'Die Fahrkarten, bitte.', es: 'Los billetes, por favor.' }
          ]
        },
        {
          funktion: 'im Zug und am Bahnsteig nachfragen',
          es: 'Preguntar en el tren y en el andén',
          wendungen: [
            { de: 'Ist dieser Platz noch frei?', es: '¿Está libre este sitio?' }
          ]
        },
        {
          funktion: 'Orientierungsprobleme äußern',
          es: 'Expresar problemas de orientación',
          wendungen: [
            { de: 'Ich habe mich verlaufen.', es: 'Me he perdido.' }
          ]
        },
        {
          funktion: 'Probleme unterwegs lösen',
          es: 'Resolver percances en el camino',
          wendungen: [
            { de: 'Wir stehen seit einer Stunde im Stau.', es: 'Llevamos una hora en el atasco.' }
          ]
        }
      ]
    },

    {
      id: 'a12-l11',
      nr: 11,
      name: 'Gefällt dir das Zimmer?',
      woerter: [
        {
          thema: 'Wohnungsanzeige',
          items: [
            { de: 'die Wohnung', es: 'el piso', ex: 'Unsere Wohnung hat zwei Zimmer und einen Balkon.', exEs: 'Nuestro piso tiene dos habitaciones y un balcón.' },
            { de: 'die Miete', es: 'el alquiler', ex: 'Die Miete zahle ich immer am Monatsanfang.', exEs: 'El alquiler lo pago siempre a principios de mes.' },
            { de: 'die Kaution', es: 'la fianza', ex: 'Die Kaution bekommt man am Ende zurück.', exEs: 'La fianza se devuelve al final.' },
            { de: 'die Betriebskosten', es: 'los gastos comunes', ex: 'Die Betriebskosten sind nicht im Preis.', exEs: 'Los gastos comunes no están en el precio.' },
            { de: 'möbliert', es: 'amueblado', ex: 'Die Wohnung ist komplett möbliert.', exEs: 'El piso está completamente amueblado.' },
            { de: 'frei ab', es: 'disponible desde', ex: 'Die Wohnung ist frei ab dem ersten Oktober.', exEs: 'El piso está libre desde el uno de octubre.' }
          ]
        },
        {
          thema: 'Wohnhaus und Zimmer',
          items: [
            { de: 'das Wohnzimmer', es: 'el salón', ex: 'Im Wohnzimmer steht ein großes Sofa.', exEs: 'En el salón hay un sofá grande.' },
            { de: 'das Schlafzimmer', es: 'el dormitorio', ex: 'Mein Schlafzimmer geht nach hinten hinaus.', exEs: 'Mi dormitorio da al patio.' },
            { de: 'die Küche', es: 'la cocina', ex: 'Die Küche ist klein, aber praktisch.', exEs: 'La cocina es pequeña pero práctica.' },
            { de: 'das Bad', es: 'el baño', ex: 'Das Bad hat leider kein Fenster.', exEs: 'El baño no tiene ventana, por desgracia.' },
            { de: 'der Flur / der Vorraum (AT)', es: 'el pasillo / recibidor', ex: 'Im Vorraum hängen die Jacken.', exEs: 'En el recibidor están colgadas las chaquetas.' },
            { de: 'der Balkon', es: 'el balcón', ex: 'Auf dem Balkon frühstücke ich im Sommer.', exEs: 'En verano desayuno en el balcón.' },
            { de: 'der Keller', es: 'el sótano', ex: 'Die Fahrräder stehen im Keller.', exEs: 'Las bicis están en el sótano.' },
            { de: 'der Lift (AT) / der Aufzug', es: 'el ascensor', ex: 'Der Lift ist seit gestern kaputt.', exEs: 'El ascensor está roto desde ayer.' }
          ]
        },
        {
          thema: 'Einrichtung und Möbel',
          items: [
            { de: 'das Bett', es: 'la cama', ex: 'Mein Bett ist zu weich.', exEs: 'Mi cama es demasiado blanda.' },
            { de: 'der Schrank', es: 'el armario', ex: 'In den Schrank passt nicht mehr viel.', exEs: 'En el armario ya no cabe mucho más.' },
            { de: 'das Sofa', es: 'el sofá', ex: 'Auf dem Sofa schlafe ich manchmal ein.', exEs: 'A veces me quedo dormido en el sofá.' },
            { de: 'der Sessel', es: 'el sillón', ex: 'Der Sessel am Fenster ist mein Lieblingsplatz.', exEs: 'El sillón de la ventana es mi sitio favorito.' },
            { de: 'das Regal', es: 'la estantería', ex: 'Im Regal stehen nur Bücher auf Spanisch.', exEs: 'En la estantería solo hay libros en español.' },
            { de: 'der Teppich', es: 'la alfombra', ex: 'Der Teppich im Wohnzimmer ist neu.', exEs: 'La alfombra del salón es nueva.' },
            { de: 'die Lampe', es: 'la lámpara', ex: 'Über dem Tisch hängt eine kleine Lampe.', exEs: 'Encima de la mesa hay una lámpara pequeña.' },
            { de: 'der Spiegel', es: 'el espejo', ex: 'Im Flur hängt ein großer Spiegel.', exEs: 'En el pasillo hay un espejo grande.' }
          ]
        },
        {
          thema: 'Elektrogeräte',
          items: [
            { de: 'der Kühlschrank', es: 'la nevera', ex: 'Der Kühlschrank ist fast leer.', exEs: 'La nevera está casi vacía.' },
            { de: 'der Herd', es: 'la cocina (fogones)', ex: 'Der Herd ist neu, der Backofen nicht.', exEs: 'La cocina es nueva, el horno no.' },
            { de: 'die Waschmaschine', es: 'la lavadora', ex: 'Die Waschmaschine läuft schon zwei Stunden.', exEs: 'La lavadora lleva ya dos horas.' },
            { de: 'der Geschirrspüler', es: 'el lavavajillas', ex: 'Räumst du den Geschirrspüler aus?', exEs: '¿Vacías el lavavajillas?' },
            { de: 'die Mikrowelle', es: 'el microondas', ex: 'In der Mikrowelle geht es schneller.', exEs: 'En el microondas va más rápido.' },
            { de: 'der Fernseher', es: 'la tele', ex: 'Der Fernseher läuft bei uns kaum.', exEs: 'La tele en casa casi no se enciende.' },
            { de: 'der Staubsauger', es: 'la aspiradora', ex: 'Der Staubsauger macht einen Lärm!', exEs: '¡Qué ruido hace la aspiradora!' }
          ]
        },
        {
          thema: 'Adjektive zur Beschreibung',
          items: [
            { de: 'groß / klein', es: 'grande / pequeño', ex: 'Die Wohnung ist kleiner, als sie auf den Fotos aussah.', exEs: 'El piso es más pequeño de lo que parecía en las fotos.' },
            { de: 'hell / dunkel', es: 'luminoso / oscuro', ex: 'Das Zimmer ist morgens sehr hell.', exEs: 'La habitación por la mañana es muy luminosa.' },
            { de: 'modern / alt', es: 'moderno / viejo', ex: 'Das Haus ist alt, aber gut renoviert.', exEs: 'La casa es vieja pero está bien reformada.' },
            { de: 'gemütlich', es: 'acogedor', ex: 'Mit der Lampe wird es gleich gemütlich.', exEs: 'Con la lámpara se vuelve acogedor enseguida.' },
            { de: 'ruhig / laut', es: 'tranquilo / ruidoso', ex: 'Die Straße ist tagsüber ziemlich laut.', exEs: 'Durante el día la calle es bastante ruidosa.' },
            { de: 'günstig / teuer', es: 'económico / caro', ex: 'Für die Lage ist die Miete günstig.', exEs: 'Para la zona el alquiler está bien de precio.' }
          ]
        },
        {
          thema: 'Maßangaben',
          items: [
            { de: 'der Quadratmeter (m²)', es: 'el metro cuadrado', ex: 'Die Wohnung hat fünfundfünfzig Quadratmeter.', exEs: 'El piso tiene cincuenta y cinco metros cuadrados.' },
            { de: 'der Stock / die Etage', es: 'la planta', ex: 'Wir wohnen im vierten Stock ohne Lift.', exEs: 'Vivimos en el cuarto sin ascensor.' },
            { de: 'die Größe', es: 'el tamaño', ex: 'Die Größe passt uns gut.', exEs: 'El tamaño nos va bien.' }
          ]
        },
        {
          thema: 'Wohnung und Umzug',
          items: [
            { de: 'der Quadratmeter', es: 'el metro cuadrado', ex: 'Die Wohnung hat sechzig Quadratmeter.', exEs: 'El piso tiene sesenta metros cuadrados.' },
            { de: 'der Vermieter / die Vermieterin', es: 'el casero / la casera', ex: 'Der Vermieter wohnt im selben Haus.', exEs: 'El casero vive en la misma casa.' },
            { de: 'der Mietvertrag', es: 'el contrato de alquiler', ex: 'Den Mietvertrag unterschreiben wir morgen.', exEs: 'El contrato lo firmamos mañana.' },
            { de: 'die Nebenkosten', es: 'los gastos de comunidad', ex: 'Die Nebenkosten sind nicht inklusive.', exEs: 'Los gastos no están incluidos.' },
            { de: 'die Besichtigung', es: 'la visita (al piso)', ex: 'Die Besichtigung ist am Donnerstag.', exEs: 'La visita es el jueves.' },
            { de: 'der Nachbar / die Nachbarin', es: 'el vecino / la vecina', ex: 'Unsere Nachbarn sind sehr ruhig.', exEs: 'Nuestros vecinos son muy tranquilos.' },
            { de: 'der Aufzug / der Lift', es: 'el ascensor', ex: 'Der Aufzug ist heute kaputt.', exEs: 'Hoy el ascensor está averiado.' },
            { de: 'der Stellplatz', es: 'la plaza de aparcamiento', ex: 'Zur Wohnung gehört ein Stellplatz.', exEs: 'Con el piso va una plaza de aparcamiento.' },
            { de: 'die Waschküche', es: 'el cuarto de lavado', ex: 'Die Waschküche ist im Erdgeschoss.', exEs: 'El cuarto de lavado está en la planta baja.' },
            { de: 'die Terrasse', es: 'la terraza', ex: 'Im Sommer essen wir auf der Terrasse.', exEs: 'En verano comemos en la terraza.' }
          ]
        },
        {
          thema: 'Wohnung suchen & einrichten',
          items: [
            { de: 'die Wohnungssuche', es: 'la búsqueda de piso', ex: 'Die Wohnungssuche dauert oft Monate.', exEs: 'La búsqueda de piso suele durar meses.' },
            { de: 'die Anzeige', es: 'el anuncio', ex: 'Ich habe die Anzeige im Internet gefunden.', exEs: 'He encontrado el anuncio en internet.' },
            { de: 'der Grundriss', es: 'el plano', ex: 'Auf dem Grundriss sieht man alle Zimmer.', exEs: 'En el plano se ven todas las habitaciones.' },
            { de: 'die Heizkosten', es: 'los gastos de calefacción', ex: 'Die Heizkosten sind im Winter hoch.', exEs: 'Los gastos de calefacción son altos en invierno.' },
            { de: 'der Strom', es: 'la electricidad', ex: 'Der Strom wird jedes Jahr teurer.', exEs: 'La electricidad se encarece cada año.' },
            { de: 'die Abstellkammer', es: 'el trastero', ex: 'In der Abstellkammer steht das Fahrrad.', exEs: 'En el trastero está la bicicleta.' },
            { de: 'der Dachboden', es: 'el desván', ex: 'Auf dem Dachboden lagern wir die Koffer.', exEs: 'En el desván guardamos las maletas.' },
            { de: 'die Garage', es: 'el garaje', ex: 'Die Garage kostet extra.', exEs: 'El garaje se paga aparte.' },
            { de: 'der Garten', es: 'el jardín', ex: 'Hinter dem Haus gibt es einen kleinen Garten.', exEs: 'Detrás de la casa hay un jardín pequeño.' },
            { de: 'die Aussicht', es: 'las vistas', ex: 'Von oben hat man eine schöne Aussicht.', exEs: 'Desde arriba hay unas vistas bonitas.' },
            { de: 'der Vorhang', es: 'la cortina', ex: 'Der Vorhang im Wohnzimmer ist neu.', exEs: 'La cortina del salón es nueva.' },
            { de: 'das Kissen', es: 'el cojín', ex: 'Auf dem Sofa liegen vier Kissen.', exEs: 'En el sofá hay cuatro cojines.' },
            { de: 'die Decke', es: 'la manta', ex: 'Im Winter brauche ich eine warme Decke.', exEs: 'En invierno necesito una manta caliente.' },
            { de: 'das Werkzeug', es: 'la herramienta', ex: 'Für das Regal brauche ich Werkzeug.', exEs: 'Para la estantería necesito herramientas.' },
            { de: 'aufbauen', es: 'montar', ex: 'Wir bauen den Schrank am Samstag auf.', exEs: 'Montamos el armario el sábado.' },
            { de: 'renovieren', es: 'reformar', ex: 'Wir wollen das Bad renovieren.', exEs: 'Queremos reformar el baño.' },
            { de: 'streichen', es: 'pintar (paredes)', ex: 'Die Wände streichen wir weiß.', exEs: 'Las paredes las pintamos de blanco.' }
          ]
        },
        {
          thema: 'Haus & Instandhaltung',
          items: [
            { de: 'die Wohngemeinschaft', es: 'el piso compartido', ex: 'Ich wohne in einer Wohngemeinschaft.', exEs: 'Vivo en un piso compartido.' },
            { de: 'der Mitbewohner', es: 'el compañero de piso', ex: 'Mein Mitbewohner kocht fast jeden Abend.', exEs: 'Mi compañero de piso cocina casi todas las noches.' },
            { de: 'die Hausverwaltung', es: 'la administración de la finca', ex: 'Die Hausverwaltung antwortet immer spät.', exEs: 'La administración siempre contesta tarde.' },
            { de: 'der Hausmeister', es: 'el conserje', ex: 'Der Hausmeister hat einen Zweitschlüssel.', exEs: 'El conserje tiene una segunda llave.' },
            { de: 'die Klingel', es: 'el timbre', ex: 'Die Klingel funktioniert seit gestern nicht.', exEs: 'El timbre no funciona desde ayer.' },
            { de: 'das Schloss', es: 'la cerradura', ex: 'Das Schloss muss ausgetauscht werden.', exEs: 'Hay que cambiar la cerradura.' },
            { de: 'der Zaun', es: 'la valla', ex: 'Der Zaun im Garten ist ganz neu.', exEs: 'La valla del jardín es nueva.' },
            { de: 'der Innenhof', es: 'el patio interior', ex: 'Im Innenhof spielen die Kinder.', exEs: 'En el patio interior juegan los niños.' },
            { de: 'die Jalousie', es: 'la persiana', ex: 'Am Abend lasse ich die Jalousie herunter.', exEs: 'Por la tarde bajo la persiana.' },
            { de: 'der Wasserhahn', es: 'el grifo', ex: 'Der Wasserhahn tropft die ganze Nacht.', exEs: 'El grifo gotea toda la noche.' },
            { de: 'der Abfluss', es: 'el desagüe', ex: 'Der Abfluss in der Dusche ist verstopft.', exEs: 'El desagüe de la ducha está atascado.' },
            { de: 'die Feuchtigkeit', es: 'la humedad', ex: 'An der Wand sieht man deutlich Feuchtigkeit.', exEs: 'En la pared se ve claramente la humedad.' },
            { de: 'der Schimmel', es: 'el moho', ex: 'Im Bad wächst Schimmel an der Decke.', exEs: 'En el baño crece moho en el techo.' },
            { de: 'die Isolierung', es: 'el aislamiento', ex: 'Die Isolierung ist bei Altbauten schlecht.', exEs: 'El aislamiento en los edificios antiguos es malo.' },
            { de: 'der Altbau', es: 'el edificio antiguo', ex: 'Im Altbau sind die Decken sehr hoch.', exEs: 'En el edificio antiguo los techos son muy altos.' },
            { de: 'der Neubau', es: 'el edificio nuevo', ex: 'Der Neubau ist fertig, aber sehr teuer.', exEs: 'El edificio nuevo está terminado, pero es muy caro.' },
            { de: 'die Wohnfläche', es: 'la superficie habitable', ex: 'Die Wohnfläche beträgt achtzig Quadratmeter.', exEs: 'La superficie habitable es de ochenta metros cuadrados.' },
            { de: 'einziehen', es: 'mudarse a', ex: 'Wir ziehen im Juni ein.', exEs: 'Nos mudamos en junio.' },
            { de: 'ausziehen', es: 'mudarse de', ex: 'Die alten Mieter ziehen Ende Mai aus.', exEs: 'Los inquilinos anteriores se van a finales de mayo.' }
          ]
        },
        {
          thema: 'Bad, Technik & Haus',
          items: [
            { de: 'der Einbauschrank', es: 'el armario empotrado', ex: 'Der Einbauschrank spart sehr viel Platz.', exEs: 'El armario empotrado ahorra mucho espacio.' },
            { de: 'die Arbeitsplatte', es: 'la encimera', ex: 'Die Arbeitsplatte ist aus Holz.', exEs: 'La encimera es de madera.' },
            { de: 'die Spüle', es: 'el fregadero', ex: 'Die Spüle ist schon wieder verstopft.', exEs: 'El fregadero está atascado otra vez.' },
            { de: 'die Badewanne', es: 'la bañera', ex: 'Eine Badewanne wäre hier ein Luxus.', exEs: 'Una bañera aquí sería un lujo.' },
            { de: 'das Waschbecken', es: 'el lavabo', ex: 'Das Waschbecken ist viel zu klein.', exEs: 'El lavabo es demasiado pequeño.' },
            { de: 'die Toilette', es: 'el váter', ex: 'Die Toilette ist getrennt vom Bad.', exEs: 'El váter está separado del baño.' },
            { de: 'der Heizkörper', es: 'el radiador', ex: 'Der Heizkörper wird gar nicht warm.', exEs: 'El radiador no calienta nada.' },
            { de: 'der Boiler', es: 'el termo', ex: 'Der Boiler ist über zwanzig Jahre alt.', exEs: 'El termo tiene más de veinte años.' },
            { de: 'die Sicherung', es: 'el fusible', ex: 'Die Sicherung ist wieder rausgesprungen.', exEs: 'Ha saltado otra vez el fusible.' },
            { de: 'der Stromzähler', es: 'el contador de la luz', ex: 'Der Stromzähler hängt unten im Keller.', exEs: 'El contador de la luz está abajo en el sótano.' },
            { de: 'der Fahrradkeller', es: 'el trastero de bicicletas', ex: 'Im Fahrradkeller ist noch ein Platz frei.', exEs: 'En el trastero de bicis queda un sitio libre.' },
            { de: 'die Gegensprechanlage', es: 'el portero automático', ex: 'Die Gegensprechanlage funktioniert seit Wochen nicht.', exEs: 'El portero automático lleva semanas sin funcionar.' },
            { de: 'das Dach', es: 'el tejado', ex: 'Das Dach wurde letztes Jahr neu gemacht.', exEs: 'El tejado se rehízo el año pasado.' },
            { de: 'die Fassade', es: 'la fachada', ex: 'Die Fassade wird im Frühling gestrichen.', exEs: 'La fachada se pinta en primavera.' },
            { de: 'das Stiegenhaus', es: 'la caja de escalera', ex: 'Im Stiegenhaus ist es im Winter eiskalt.', exEs: 'En la escalera hace un frío helador en invierno.' },
            { de: 'die Mieterhöhung', es: 'la subida del alquiler', ex: 'Die Mieterhöhung kam gestern per Brief.', exEs: 'La subida del alquiler llegó ayer por carta.' },
            { de: 'die Wohnbeihilfe', es: 'la ayuda al alquiler', ex: 'Für die Wohnbeihilfe braucht man einen Antrag.', exEs: 'Para la ayuda al alquiler hace falta una solicitud.' }
          ]
        },
        {
          thema: 'Hausarbeit',
          items: [
            { de: 'putzen', es: 'limpiar', ex: 'Samstags putze ich die ganze Wohnung.', exEs: 'Los sábados limpio todo el piso.' },
            { de: 'staubsaugen', es: 'pasar la aspiradora', ex: 'Kannst du bitte im Wohnzimmer staubsaugen?', exEs: '¿Puedes pasar la aspiradora en el salón?' },
            { de: 'abwaschen', es: 'fregar', ex: 'Ich koche und du wäschst ab, abgemacht?', exEs: 'Yo cocino y tú friegas, ¿trato hecho?' },
            { de: 'lüften', es: 'ventilar', ex: 'Nach dem Duschen muss man gut lüften.', exEs: 'Después de ducharse hay que ventilar bien.' },
            { de: 'den Müll rausbringen', es: 'sacar la basura', ex: 'Bringst du bitte den Müll raus?', exEs: '¿Sacas la basura, por favor?' },
            { de: 'wischen', es: 'fregar el suelo', ex: 'Den Boden wische ich einmal pro Woche.', exEs: 'El suelo lo friego una vez por semana.' },
            { de: 'bügeln', es: 'planchar', ex: 'Hemden bügeln mag ich überhaupt nicht.', exEs: 'Planchar camisas no me gusta nada.' },
            { de: 'Ordnung machen', es: 'ordenar', ex: 'Vor dem Besuch mache ich schnell Ordnung.', exEs: 'Antes de la visita ordeno rápido.' },
            { de: 'den Tisch decken', es: 'poner la mesa', ex: 'Deckst du den Tisch, das Essen ist fertig?', exEs: '¿Pones la mesa? La comida está lista.' },
            { de: 'aufhängen', es: 'tender, colgar', ex: 'Die Wäsche hänge ich auf dem Balkon auf.', exEs: 'La ropa la tiendo en el balcón.' }
          ]
        },
        {
          thema: 'Geschirr & Haushalt',
          items: [
            { de: 'der Teller', es: 'el plato', ex: 'Stell die Teller bitte auf den Tisch.', exEs: 'Pon los platos en la mesa, por favor.' },
            { de: 'das Glas', es: 'el vaso', ex: 'Ein Glas ist heute leider kaputtgegangen.', exEs: 'Hoy se ha roto un vaso.' },
            { de: 'das Messer', es: 'el cuchillo', ex: 'Das Messer ist stumpf, es schneidet nicht.', exEs: 'El cuchillo está romo, no corta.' },
            { de: 'die Gabel', es: 'el tenedor', ex: 'Mir fehlt noch eine Gabel.', exEs: 'Me falta un tenedor.' },
            { de: 'der Löffel', es: 'la cuchara', ex: 'Für die Suppe brauchst du einen Löffel.', exEs: 'Para la sopa necesitas una cuchara.' },
            { de: 'das Handtuch', es: 'la toalla', ex: 'Im Bad hängt ein frisches Handtuch.', exEs: 'En el baño hay una toalla limpia.' },
            { de: 'die Seife', es: 'el jabón', ex: 'Die Seife ist alle, ich kaufe neue.', exEs: 'Se ha acabado el jabón, compro más.' },
            { de: 'der Mülleimer', es: 'el cubo de la basura', ex: 'Der Mülleimer steht unter der Spüle.', exEs: 'El cubo de la basura está debajo del fregadero.' },
            { de: 'die Bettwäsche', es: 'la ropa de cama', ex: 'Die Bettwäsche wechsle ich alle zwei Wochen.', exEs: 'Cambio la ropa de cama cada dos semanas.' }
          ]
        }
      ],
      grammatik: [
        {
          regel: 'gefallen',
          erklaerung: 'Funciona como "gustar" en español: la cosa es el sujeto y la persona va en DATIVO.',
          beispiele: [
            { de: 'Gefällt dir das Zimmer? – Ja, es gefällt mir sehr.', es: '¿Te gusta la habitación? – Sí, me gusta mucho.' },
            { de: 'Die Möbel gefallen mir nicht.', es: 'Los muebles no me gustan.' }
          ]
        },
        {
          regel: 'gefallen, gehören, danken, helfen + Dativ',
          erklaerung: 'Estos verbos exigen dativo (no acusativo). Hay que memorizarlos.',
          beispiele: [
            { de: 'Das Buch gehört meiner Schwester.', es: 'El libro es de mi hermana.' },
            { de: 'Kannst du mir helfen?', es: '¿Me puedes ayudar?' }
          ]
        },
        {
          regel: 'Demonstrativartikel dieser/diese/dieses',
          erklaerung: 'Señala algo concreto. Se declina como el artículo definido.',
          beispiele: [
            { de: 'Dieses Sofa ist sehr bequem.', es: 'Este sofá es muy cómodo.' },
            { de: 'Nehmen wir diese Lampe?', es: '¿Nos llevamos esta lámpara?' }
          ]
        },
        {
          regel: 'Personalpronomen im Dativ',
          erklaerung: 'mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen.',
          beispiele: [
            { de: 'Das gefällt uns gut.', es: 'Eso nos gusta.' },
            { de: 'Ich danke Ihnen.', es: 'Le doy las gracias.' }
          ]
        },
        {
          regel: 'Wechselpräpositionen + Dativ (Wo?)',
          erklaerung: 'an, auf, hinter, in, neben, über, unter, vor, zwischen. Con DATIVO cuando indican POSICIÓN (Wo?).',
          beispiele: [
            { de: 'Das Bett steht im Schlafzimmer.', es: 'La cama está en el dormitorio.' },
            { de: 'Die Lampe hängt über dem Tisch.', es: 'La lámpara cuelga sobre la mesa.' }
          ]
        },
        {
          key: 'adjektiv-nach-bestimmtem-artikel',
          regel: 'Adjektive nach der, die, das',
          erklaerung: 'Detrás de der/die/das el adjetivo lleva casi siempre -e en singular nominativo: der große Balkon, die neue Küche, das helle Zimmer. En plural y en los demás casos, -en: die neuen Möbel.',
          beispiele: [
            { de: 'Die neue Küche gefällt mir sehr.', es: 'La cocina nueva me gusta mucho.' },
            { de: 'Das helle Zimmer geht nach hinten raus.', es: 'La habitación luminosa da al patio.' }
          ]
        },
        {
          key: 'wechselpraep-stellen-legen-haengen',
          regel: 'stellen, legen, hängen: wohin?',
          erklaerung: 'Estos tres verbos dicen que pones algo en un sitio, así que llevan ACUSATIVO: Ich stelle die Lampe AUF DEN Tisch. Sus parejas stehen, liegen, hängen dicen dónde ESTÁ y van con dativo.',
          beispiele: [
            { de: 'Ich stelle die Lampe auf den Tisch.', es: 'Pongo la lámpara en la mesa.' },
            { de: 'Die Lampe steht auf dem Tisch.', es: 'La lámpara está en la mesa.' }
          ]
        },
        {
          key: 'zu-teuer-zu-klein',
          regel: 'zu + Adjektiv',
          erklaerung: 'zu delante de un adjetivo significa demasiado, y siempre en sentido negativo: zu teuer, zu klein, zu laut. No confundir con sehr (muy), que no critica nada.',
          beispiele: [
            { de: 'Die Wohnung ist leider zu teuer.', es: 'El piso es, por desgracia, demasiado caro.' },
            { de: 'Das Zimmer ist sehr schön, aber zu klein.', es: 'La habitación es muy bonita, pero demasiado pequeña.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'über Wohnungsmerkmale sprechen',
          es: 'Hablar de las características de la vivienda',
          wendungen: [
            { de: 'Die Wohnung hat 60 m² und zwei Zimmer.', es: 'El piso tiene 60 m² y dos habitaciones.' }
          ]
        },
        {
          funktion: 'nach Mietkosten und Bedingungen fragen',
          es: 'Preguntar por gastos de alquiler y condiciones',
          wendungen: [
            { de: 'Wie hoch ist die Miete?', es: '¿Cuánto es el alquiler?' }
          ]
        },
        {
          funktion: 'Wohnungsdetails und Ausstattung erfragen',
          es: 'Preguntar por detalles del piso y equipamiento',
          wendungen: [
            { de: 'Wie groß ist die Wohnung?', es: '¿Cuántos metros tiene el piso?' }
          ]
        },
        {
          funktion: 'Wohnungsbesichtigung und Einzug planen',
          es: 'Planificar visitas al piso y mudanza',
          wendungen: [
            { de: 'Wir suchen seit drei Monaten eine Wohnung.', es: 'Llevamos tres meses buscando piso.' }
          ]
        },
        {
          funktion: 'Gefallen und Missfallen ausdrücken',
          es: 'Expresar agrado o desagrado',
          wendungen: [
            { de: 'Das gefällt mir (nicht).', es: 'Eso (no) me gusta.' }
          ]
        },
        {
          funktion: 'Möbel und Einrichtung bewerten',
          es: 'Valorar muebles y decoración',
          wendungen: [
            { de: 'Wie findest du die neue Küche?', es: '¿Qué te parece la cocina nueva?' }
          ]
        },
        {
          funktion: 'im Möbelhaus nach Produkten fragen',
          es: 'Preguntar por productos en la tienda de muebles',
          wendungen: [
            { de: 'Haben Sie auch Regale?', es: '¿Tienen también estanterías?' }
          ]
        },
        {
          funktion: 'mit Nachbarn und Mitbewohnern sprechen',
          es: 'Hablar con vecinos y compañeros de piso',
          wendungen: [
            { de: 'Guten Tag, wir sind neu eingezogen.', es: 'Buenos días, nos acabamos de mudar aquí.' }
          ]
        }
      ]
    },

    {
      id: 'a12-l12',
      nr: 12,
      name: 'Danke für die Hilfe!',
      woerter: [
        {
          thema: '(Büro-)Tätigkeiten',
          items: [
            { de: 'telefonieren', es: 'hablar por teléfono', ex: 'Ich telefoniere gerade, einen Moment bitte.', exEs: 'Estoy hablando por teléfono, un momento.' },
            { de: 'eine E-Mail schreiben', es: 'escribir un correo', ex: 'Ich schreibe ihm gleich eine E-Mail.', exEs: 'Le escribo un correo ahora mismo.' },
            { de: 'kopieren', es: 'fotocopiar', ex: 'Können Sie mir das bitte kopieren?', exEs: '¿Me lo puede fotocopiar, por favor?' },
            { de: 'ausdrucken', es: 'imprimir', ex: 'Den Vertrag drucke ich zweimal aus.', exEs: 'El contrato lo imprimo por duplicado.' },
            { de: 'ein Formular ausfüllen', es: 'rellenar un formulario', ex: 'Füllen Sie bitte dieses Formular aus.', exEs: 'Rellene este formulario, por favor.' },
            { de: 'unterschreiben', es: 'firmar', ex: 'Unterschreiben Sie bitte hier unten.', exEs: 'Firme aquí abajo, por favor.' },
            { de: 'einen Termin vereinbaren', es: 'concertar una cita', ex: 'Ich möchte einen Termin vereinbaren.', exEs: 'Querría concertar una cita.' }
          ]
        },
        {
          thema: 'Behörden und Anträge',
          items: [
            { de: 'das Amt / die Behörde', es: 'la oficina pública / la administración', ex: 'Beim Amt braucht man immer Geduld.', exEs: 'En la administración siempre hace falta paciencia.' },
            { de: 'der Antrag', es: 'la solicitud', ex: 'Den Antrag habe ich online gestellt.', exEs: 'La solicitud la presenté por internet.' },
            { de: 'das Formular', es: 'el formulario', ex: 'Das Formular gibt es auch auf Englisch.', exEs: 'El formulario está también en inglés.' },
            { de: 'der Ausweis', es: 'el documento de identidad', ex: 'Ohne Ausweis kann ich Sie nicht eintragen.', exEs: 'Sin documento de identidad no puedo inscribirle.' },
            { de: 'der Reisepass', es: 'el pasaporte', ex: 'Mein Reisepass läuft im Mai ab.', exEs: 'Mi pasaporte caduca en mayo.' },
            { de: 'die Meldebestätigung (AT)', es: 'el certificado de empadronamiento', ex: 'Für die Bank brauche ich eine Meldebestätigung.', exEs: 'Para el banco necesito el certificado de empadronamiento.' },
            { de: 'die Anmeldung', es: 'el alta / la inscripción', ex: 'Die Anmeldung muss innerhalb von drei Tagen sein.', exEs: 'El alta hay que hacerla en tres días.' },
            { de: 'die Gebühr', es: 'la tasa', ex: 'Die Gebühr beträgt fünfzehn Euro.', exEs: 'La tasa es de quince euros.' },
            { de: 'der Termin beim Amt', es: 'la cita en la oficina', ex: 'Für den Termin beim Amt muss man online buchen.', exEs: 'Para la cita en la oficina hay que reservar por internet.' },
            { de: 'die Bestätigung', es: 'el justificante', ex: 'Ich brauche eine Bestätigung für die Firma.', exEs: 'Necesito un justificante para la empresa.' },
            { de: 'die Unterlagen', es: 'la documentación', ex: 'Bringen Sie bitte alle Unterlagen mit.', exEs: 'Traiga toda la documentación, por favor.' },
            { de: 'die Frist', es: 'el plazo', ex: 'Die Frist endet am 30. Juni.', exEs: 'El plazo termina el 30 de junio.' },
            { de: 'die Wartezeit', es: 'el tiempo de espera', ex: 'Die Wartezeit beträgt etwa zwanzig Minuten.', exEs: 'El tiempo de espera es de unos veinte minutos.' },
            { de: 'die Kopie', es: 'la copia', ex: 'Machen Sie bitte eine Kopie vom Ausweis.', exEs: 'Haga una copia del documento, por favor.' },
            { de: 'der Stempel', es: 'el sello', ex: 'Ohne Stempel gilt das nicht.', exEs: 'Sin sello no vale.' },
            { de: 'der Schalter', es: 'la ventanilla', ex: 'Gehen Sie bitte zu Schalter drei.', exEs: 'Vaya a la ventanilla tres, por favor.' }
          ]
        },
        {
          thema: 'formeller Brief',
          items: [
            { de: 'Sehr geehrte Damen und Herren,', es: 'Estimados señores:', ex: 'Sehr geehrte Damen und Herren, ich schreibe Ihnen wegen der Wohnung.', exEs: 'Estimados señores: les escribo por el piso.' },
            { de: 'Mit freundlichen Grüßen', es: 'Atentamente', ex: 'Mit freundlichen Grüßen, Álvaro García', exEs: 'Atentamente, Álvaro García' },
            { de: 'der Betreff', es: 'el asunto', ex: 'Im Betreff steht die Nummer des Antrags.', exEs: 'En el asunto va el número de la solicitud.' },
            { de: 'die Anlage / der Anhang', es: 'el archivo adjunto', ex: 'Im Anhang finden Sie meinen Lebenslauf.', exEs: 'Adjunto encontrará mi currículum.' }
          ]
        },
        {
          thema: 'Geschlecht und Nationalitäten',
          items: [
            { de: 'männlich / weiblich / divers', es: 'masculino / femenino / diverso', ex: 'Im Formular muss man männlich, weiblich oder divers ankreuzen.', exEs: 'En el formulario hay que marcar masculino, femenino o diverso.' },
            { de: 'österreichisch', es: 'austriaco/a', ex: 'Meine Nachbarin ist österreichisch.', exEs: 'Mi vecina es austriaca.' },
            { de: 'deutsch', es: 'alemán/a', ex: 'Sein Vater ist deutsch, seine Mutter Italienerin.', exEs: 'Su padre es alemán y su madre italiana.' },
            { de: 'spanisch', es: 'español/a', ex: 'Ich bin spanisch und wohne seit drei Jahren hier.', exEs: 'Soy español y vivo aquí desde hace tres años.' },
            { de: 'türkisch', es: 'turco/a', ex: 'In meinem Kurs sind zwei türkische Kollegen.', exEs: 'En mi clase hay dos compañeros turcos.' },
            { de: 'polnisch', es: 'polaco/a', ex: 'Unsere Hausmeisterin ist polnisch.', exEs: 'Nuestra portera es polaca.' },
            { de: 'syrisch', es: 'sirio/a', ex: 'Mein syrischer Freund kocht fantastisch.', exEs: 'Mi amigo sirio cocina fenomenal.' }
          ]
        },
        {
          thema: 'Im Büro',
          items: [
            { de: 'die Besprechung', es: 'la reunión', ex: 'Die Besprechung ist um zehn.', exEs: 'La reunión es a las diez.' },
            { de: 'der Bericht', es: 'el informe', ex: 'Den Bericht schicke ich heute noch.', exEs: 'El informe lo mando hoy mismo.' },
            { de: 'der Drucker', es: 'la impresora', ex: 'Der Drucker ist schon wieder kaputt.', exEs: 'La impresora está otra vez rota.' },
            { de: 'die Unterschrift', es: 'la firma', ex: 'Hier fehlt noch eine Unterschrift.', exEs: 'Aquí falta una firma.' },
            { de: 'weiterleiten', es: 'reenviar', ex: 'Ich leite die Mail an die Chefin weiter.', exEs: 'Le reenvío el correo a la jefa.' },
            { de: 'die Kollegin vertreten', es: 'sustituir a la compañera', ex: 'Diese Woche vertrete ich meine Kollegin.', exEs: 'Esta semana sustituyo a mi compañera.' },
            { de: 'der Feierabend', es: 'el fin de la jornada', ex: 'Um fünf ist bei mir Feierabend.', exEs: 'A las cinco termino la jornada.' },
            { de: 'die Pause machen', es: 'hacer una pausa', ex: 'Wir machen um halb eins Pause.', exEs: 'Hacemos la pausa a las doce y media.' }
          ]
        },
        {
          thema: 'Behörden & Aufgaben',
          items: [
            { de: 'der Beamte / die Beamtin', es: 'el funcionario / la funcionaria', ex: 'Der Beamte war heute sehr freundlich.', exEs: 'El funcionario ha sido hoy muy amable.' },
            { de: 'die Wartenummer', es: 'el número de espera', ex: 'Zieh bitte eine Wartenummer.', exEs: 'Coge un número de espera, por favor.' },
            { de: 'der Nachweis', es: 'el justificante', ex: 'Als Nachweis reicht die Rechnung.', exEs: 'Como justificante basta la factura.' },
            { de: 'die Vollmacht', es: 'el poder, la autorización', ex: 'Ohne Vollmacht darf ich das nicht machen.', exEs: 'Sin autorización no puedo hacerlo.' },
            { de: 'beantragen', es: 'solicitar', ex: 'Ich möchte einen Pass beantragen.', exEs: 'Quiero solicitar un pasaporte.' },
            { de: 'abgeben', es: 'entregar', ex: 'Die Unterlagen gebe ich morgen ab.', exEs: 'La documentación la entrego mañana.' },
            { de: 'einreichen', es: 'presentar', ex: 'Den Antrag muss man online einreichen.', exEs: 'La solicitud hay que presentarla por internet.' },
            { de: 'verlängern', es: 'renovar, prolongar', ex: 'Ich muss meinen Ausweis verlängern.', exEs: 'Tengo que renovar mi documento.' },
            { de: 'bearbeiten', es: 'tramitar', ex: 'Der Antrag wird gerade bearbeitet.', exEs: 'La solicitud se está tramitando.' },
            { de: 'ablehnen', es: 'rechazar', ex: 'Sie haben meinen Antrag abgelehnt.', exEs: 'Han rechazado mi solicitud.' },
            { de: 'genehmigen', es: 'aprobar', ex: 'Der Urlaub ist schon genehmigt.', exEs: 'Las vacaciones ya están aprobadas.' },
            { de: 'zuständig', es: 'competente, encargado', ex: 'Wer ist für diesen Fall zuständig?', exEs: '¿Quién se encarga de este caso?' },
            { de: 'erlaubt', es: 'permitido', ex: 'Rauchen ist hier nicht erlaubt.', exEs: 'Aquí no está permitido fumar.' },
            { de: 'verboten', es: 'prohibido', ex: 'Das Parken ist hier verboten.', exEs: 'Aquí está prohibido aparcar.' },
            { de: 'die Regel', es: 'la norma', ex: 'Im Haus gibt es klare Regeln.', exEs: 'En la casa hay normas claras.' },
            { de: 'der Vorschlag', es: 'la propuesta', ex: 'Dein Vorschlag gefällt mir.', exEs: 'Tu propuesta me gusta.' },
            { de: 'die Aufgabe', es: 'la tarea', ex: 'Diese Aufgabe übernehme ich.', exEs: 'De esta tarea me encargo yo.' },
            { de: 'übernehmen', es: 'encargarse de', ex: 'Kannst du das Projekt übernehmen?', exEs: '¿Te puedes encargar del proyecto?' },
            { de: 'erledigen', es: 'resolver, despachar', ex: 'Das erledige ich noch heute.', exEs: 'Eso lo resuelvo hoy mismo.' },
            { de: 'die Verantwortung', es: 'la responsabilidad', ex: 'Er trägt die Verantwortung für das Team.', exEs: 'Él tiene la responsabilidad del equipo.' },
            { de: 'der Briefkasten', es: 'el buzón', ex: 'Der Brief liegt im Briefkasten.', exEs: 'La carta está en el buzón.' },
            { de: 'das Schreiben', es: 'el escrito, la carta oficial', ex: 'Das Schreiben vom Amt kam gestern.', exEs: 'El escrito de la administración llegó ayer.' }
          ]
        },
        {
          thema: 'Papiere & Beratung',
          items: [
            { de: 'die Geburtsurkunde', es: 'la partida de nacimiento', ex: 'Für die Hochzeit brauchen Sie eine Geburtsurkunde.', exEs: 'Para la boda necesita una partida de nacimiento.' },
            { de: 'die Heiratsurkunde', es: 'el certificado de matrimonio', ex: 'Die Heiratsurkunde liegt im Safe.', exEs: 'El certificado de matrimonio está en la caja fuerte.' },
            { de: 'die Steuer', es: 'el impuesto', ex: 'Die Steuer zahlt man einmal im Jahr.', exEs: 'El impuesto se paga una vez al año.' },
            { de: 'das Finanzamt', es: 'la agencia tributaria', ex: 'Das Finanzamt hat mir geschrieben.', exEs: 'La agencia tributaria me ha escrito.' },
            { de: 'die Sozialversicherung', es: 'la seguridad social', ex: 'Die Sozialversicherungsnummer steht auf der E-Card.', exEs: 'El número de la seguridad social está en la tarjeta sanitaria.' },
            { de: 'der Zuschuss', es: 'la ayuda económica', ex: 'Für den Kurs gibt es einen Zuschuss.', exEs: 'Para el curso hay una ayuda económica.' },
            { de: 'die Beratung', es: 'el asesoramiento', ex: 'Die Beratung ist völlig kostenlos.', exEs: 'El asesoramiento es totalmente gratuito.' },
            { de: 'der Dolmetscher', es: 'el intérprete', ex: 'Beim Termin war ein Dolmetscher dabei.', exEs: 'En la cita había un intérprete.' },
            { de: 'die Übersetzung', es: 'la traducción', ex: 'Die Übersetzung muss beglaubigt sein.', exEs: 'La traducción tiene que estar certificada.' },
            { de: 'die Verlängerung', es: 'la prórroga', ex: 'Die Verlängerung wurde gestern genehmigt.', exEs: 'La prórroga se aprobó ayer.' },
            { de: 'der Einspruch', es: 'el recurso', ex: 'Gegen den Bescheid kann man Einspruch erheben.', exEs: 'Contra la resolución se puede presentar recurso.' },
            { de: 'der Bescheid', es: 'la resolución', ex: 'Der Bescheid kommt in zwei Wochen.', exEs: 'La resolución llega en dos semanas.' },
            { de: 'die Unterstützung', es: 'el apoyo', ex: 'Ohne Unterstützung schafft man das nicht.', exEs: 'Sin apoyo eso no se consigue.' },
            { de: 'verpflichtet', es: 'obligado', ex: 'Dazu bin ich gesetzlich verpflichtet.', exEs: 'A eso estoy obligado por ley.' },
            { de: 'freiwillig', es: 'voluntario', ex: 'Diese Angabe ist völlig freiwillig.', exEs: 'Este dato es totalmente voluntario.' },
            { de: 'kostenlos', es: 'gratuito', ex: 'Die erste Beratung ist kostenlos.', exEs: 'El primer asesoramiento es gratuito.' },
            { de: 'gebührenpflichtig', es: 'de pago', ex: 'Der Antrag ist leider gebührenpflichtig.', exEs: 'La solicitud es de pago, por desgracia.' },
            { de: 'vereinbaren', es: 'acordar, concertar', ex: 'Wir vereinbaren einen Termin für Montag.', exEs: 'Concertamos una cita para el lunes.' },
            { de: 'der Vertreter', es: 'el sustituto', ex: 'Mein Vertreter ist heute im Büro.', exEs: 'Mi sustituto está hoy en la oficina.' }
          ]
        },
        {
          thema: 'Recht & Verwaltung',
          items: [
            { de: 'der Parteienverkehr', es: 'el horario de atención al público', ex: 'Der Parteienverkehr ist nur bis zwölf Uhr.', exEs: 'La atención al público es solo hasta las doce.' },
            { de: 'der Magistrat', es: 'el ayuntamiento', ex: 'Zum Magistrat gehe ich morgen früh.', exEs: 'Al ayuntamiento voy mañana por la mañana.' },
            { de: 'die Erklärung', es: 'la declaración', ex: 'Die Erklärung muss unterschrieben sein.', exEs: 'La declaración tiene que estar firmada.' },
            { de: 'der Fall', es: 'el caso', ex: 'In diesem Fall gilt eine Ausnahme.', exEs: 'En este caso rige una excepción.' },
            { de: 'das Recht', es: 'el derecho', ex: 'Darauf haben Sie ein Recht.', exEs: 'A eso tiene usted derecho.' },
            { de: 'das Gesetz', es: 'la ley', ex: 'So steht es im Gesetz.', exEs: 'Así lo dice la ley.' },
            { de: 'die Verwaltung', es: 'la administración', ex: 'Die Verwaltung arbeitet leider sehr langsam.', exEs: 'La administración trabaja muy lenta.' },
            { de: 'der Beleg', es: 'el comprobante', ex: 'Heben Sie den Beleg gut auf.', exEs: 'Guarde bien el comprobante.' },
            { de: 'die Aktenzahl', es: 'el número de expediente', ex: 'Bitte geben Sie immer die Aktenzahl an.', exEs: 'Indique siempre el número de expediente.' },
            { de: 'die Vorlage', es: 'el modelo, la plantilla', ex: 'Für diesen Brief gibt es eine Vorlage.', exEs: 'Para esta carta hay una plantilla.' },
            { de: 'die Genehmigung', es: 'la autorización', ex: 'Ohne Genehmigung darf man nicht bauen.', exEs: 'Sin autorización no se puede construir.' },
            { de: 'die Ablehnung', es: 'la denegación', ex: 'Gegen die Ablehnung kann man Einspruch erheben.', exEs: 'Contra la denegación se puede recurrir.' },
            { de: 'die Zustimmung', es: 'la aprobación', ex: 'Für die Reise braucht das Kind Ihre Zustimmung.', exEs: 'Para el viaje el niño necesita su consentimiento.' },
            { de: 'der Zeitraum', es: 'el periodo', ex: 'In diesem Zeitraum war ich im Ausland.', exEs: 'En ese periodo estuve en el extranjero.' },
            { de: 'die Mitteilung', es: 'la comunicación', ex: 'Die Mitteilung kam gestern per E-Mail.', exEs: 'La comunicación llegó ayer por correo.' },
            { de: 'der Hinweis', es: 'la indicación', ex: 'Vielen Dank für den Hinweis.', exEs: 'Muchas gracias por la indicación.' },
            { de: 'die Rückmeldung', es: 'la respuesta', ex: 'Eine Rückmeldung kommt in zwei Wochen.', exEs: 'La respuesta llega en dos semanas.' },
            { de: 'amtlich', es: 'oficial', ex: 'Dieser Brief ist amtlich.', exEs: 'Esta carta es oficial.' }
          ]
        },
        {
          thema: 'Um Hilfe bitten & danken',
          items: [
            { de: 'die Hilfe', es: 'la ayuda', ex: 'Ohne deine Hilfe hätte ich das nie geschafft.', exEs: 'Sin tu ayuda no lo habría conseguido nunca.' },
            { de: 'um Hilfe bitten', es: 'pedir ayuda', ex: 'Man muss sich trauen, um Hilfe zu bitten.', exEs: 'Hay que atreverse a pedir ayuda.' },
            { de: 'der Gefallen', es: 'el favor', ex: 'Darf ich dich um einen Gefallen bitten?', exEs: '¿Te puedo pedir un favor?' },
            { de: 'sich bedanken', es: 'dar las gracias', ex: 'Ich möchte mich für alles bedanken.', exEs: 'Quiero dar las gracias por todo.' },
            { de: 'der Dank', es: 'el agradecimiento', ex: 'Als Dank habe ich ihr Blumen gebracht.', exEs: 'Como agradecimiento le llevé flores.' },
            { de: 'der Rat', es: 'el consejo', ex: 'Dein Rat hat mir wirklich weitergeholfen.', exEs: 'Tu consejo me ha servido de verdad.' },
            { de: 'raten', es: 'aconsejar', ex: 'Was rätst du mir in dieser Situation?', exEs: '¿Qué me aconsejas en esta situación?' },
            { de: 'anbieten', es: 'ofrecer', ex: 'Sie bietet mir ihre Hilfe an.', exEs: 'Me ofrece su ayuda.' },
            { de: 'zeigen', es: 'enseñar, mostrar', ex: 'Zeigst du mir, wie das Formular geht?', exEs: '¿Me enseñas cómo se hace el formulario?' },
            { de: 'erklären', es: 'explicar', ex: 'Können Sie mir das noch einmal erklären?', exEs: '¿Me lo puede explicar otra vez?' }
          ]
        },
        {
          thema: 'Am Telefon',
          items: [
            { de: 'zurückrufen', es: 'devolver la llamada', ex: 'Ich rufe Sie heute Nachmittag zurück.', exEs: 'Le devuelvo la llamada esta tarde.' },
            { de: 'das Telefongespräch', es: 'la llamada telefónica', ex: 'Das Telefongespräch hat eine halbe Stunde gedauert.', exEs: 'La llamada duró media hora.' },
            { de: 'die Leitung', es: 'la línea', ex: 'Die Leitung ist sehr schlecht, ich höre Sie kaum.', exEs: 'La línea está muy mal, apenas le oigo.' },
            { de: 'verbinden', es: 'pasar (una llamada)', ex: 'Einen Moment, ich verbinde Sie.', exEs: 'Un momento, le paso.' },
            { de: 'ausrichten', es: 'dar un recado', ex: 'Kann ich ihm etwas ausrichten?', exEs: '¿Le doy algún recado?' },
            { de: 'die Nachricht', es: 'el mensaje, el recado', ex: 'Ich habe Ihnen eine Nachricht hinterlassen.', exEs: 'Le he dejado un mensaje.' },
            { de: 'besetzt', es: 'comunicando, ocupado', ex: 'Die Nummer ist seit einer Stunde besetzt.', exEs: 'El número lleva una hora comunicando.' },
            { de: 'abheben', es: 'descolgar, contestar', ex: 'Niemand hebt ab, ich versuche es später.', exEs: 'No contesta nadie, lo intento más tarde.' },
            { de: 'auflegen', es: 'colgar', ex: 'Bitte legen Sie nicht auf, es dauert kurz.', exEs: 'No cuelgue, por favor, será un momento.' }
          ]
        }
      ],
      grammatik: [
        {
          regel: 'Modalverben müssen / dürfen',
          erklaerung: 'müssen = tener que (obligación). dürfen = poder (permiso). "nicht dürfen" = estar prohibido.',
          beispiele: [
            { de: 'Ich muss das Formular ausfüllen.', es: 'Tengo que rellenar el formulario.' },
            { de: 'Hier darf man nicht rauchen.', es: 'Aquí no se puede fumar.' }
          ]
        },
        {
          regel: 'temporale Präpositionen vor, nach, in + Dativ',
          erklaerung: 'vor = antes de, nach = después de, in = dentro de (futuro). Siempre con dativo.',
          beispiele: [
            { de: 'Nach der Arbeit gehe ich einkaufen.', es: 'Después del trabajo voy a comprar.' },
            { de: 'In einer Woche habe ich den Termin.', es: 'Dentro de una semana tengo la cita.' }
          ]
        },
        {
          regel: 'temporale Präpositionen ab, bis',
          erklaerung: 'ab = a partir de, bis = hasta.',
          beispiele: [
            { de: 'Ab Montag bin ich wieder im Büro.', es: 'A partir del lunes vuelvo a estar en la oficina.' },
            { de: 'Das Amt hat bis 15 Uhr offen.', es: 'La oficina abre hasta las 15.' }
          ]
        },
        {
          key: 'nicht-duerfen-nicht-muessen',
          regel: 'nicht dürfen oder nicht müssen?',
          erklaerung: 'No significan lo mismo y se confunden mucho. nicht dürfen = está PROHIBIDO (Sie dürfen hier nicht rauchen). nicht müssen = no hace falta, puedes si quieres (Sie müssen nicht kommen).',
          beispiele: [
            { de: 'Hier dürfen Sie nicht parken.', es: 'Aquí no se puede aparcar.' },
            { de: 'Sie müssen das Formular nicht heute abgeben.', es: 'No hace falta que entregue el formulario hoy.' }
          ]
        },
        {
          key: 'hoefliche-bitte-koennten-wuerden',
          regel: 'könnten und würden: die höfliche Bitte',
          erklaerung: 'könnten y würden son la versión educada de können y werden, y es la forma normal de pedir algo en una oficina o por teléfono: Könnten Sie mir helfen? Würden Sie das bitte unterschreiben?',
          beispiele: [
            { de: 'Könnten Sie mir bitte helfen?', es: '¿Me podría ayudar, por favor?' },
            { de: 'Würden Sie das bitte noch einmal erklären?', es: '¿Me lo explicaría otra vez, por favor?' }
          ]
        },
        {
          key: 'indirekte-frage-ob',
          regel: 'Indirekte Frage mit ob',
          erklaerung: 'Para repetir una pregunta de sí o no dentro de otra frase se usa ob, y el verbo se va al final: Ich weiß nicht, OB das Amt heute OFFEN IST. Para las preguntas con W- se usa esa misma W-: …, wann das Amt öffnet.',
          beispiele: [
            { de: 'Ich weiß nicht, ob das Amt heute offen ist.', es: 'No sé si la oficina está abierta hoy.' },
            { de: 'Können Sie mir sagen, wann der Termin ist?', es: '¿Me puede decir cuándo es la cita?' }
          ]
        },
        {
          key: 'dativ-und-akkusativ-zusammen',
          regel: 'Wem und was: Dativ vor Akkusativ',
          erklaerung: 'Algunos verbos llevan dos complementos: a quién (dativo) y qué (acusativo). El orden normal es dativo primero: Ich gebe DEM BEAMTEN DAS FORMULAR. Pero si el qué es un pronombre, va delante: Ich gebe ES ihm.',
          beispiele: [
            { de: 'Ich gebe dem Beamten das Formular.', es: 'Le doy el formulario al funcionario.' },
            { de: 'Ich gebe es ihm morgen.', es: 'Se lo doy mañana.' }
          ]
        },
        {
          key: 'aussprache-tion-ung',
          regel: 'Aussprache: -tion und -ung',
          erklaerung: 'La terminación -tion suena «-tsión» y lleva el acento: die Information, die Situation. La terminación -ung nunca lleva el acento y suena floja: die Anmeldung, die Bestätigung.',
          beispiele: [
            { de: 'Ich brauche eine Information über die Anmeldung.', es: 'Necesito información sobre el registro.' },
            { de: 'Die Bestätigung kommt per Post.', es: 'La confirmación llega por correo.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'sich im Amt informieren',
          es: 'Informarse en la administración',
          wendungen: [
            { de: 'Entschuldigung, bin ich hier richtig?', es: 'Perdone, ¿es aquí?' }
          ]
        },
        {
          funktion: 'Verfahren und Formalitäten klären',
          es: 'Aclarar trámites y formalidades',
          wendungen: [
            { de: 'Wer ist für diesen Fall zuständig?', es: '¿Quién se encarga de este caso?' }
          ]
        },
        {
          funktion: 'ein formelles Telefonat beenden',
          es: 'Terminar una llamada formal',
          wendungen: [
            { de: 'Vielen Dank für Ihre Hilfe.', es: 'Muchas gracias por su ayuda.' }
          ]
        },
        {
          funktion: 'um Erlaubnis bitten',
          es: 'Pedir permiso',
          wendungen: [
            { de: 'Darf ich hier parken?', es: '¿Puedo aparcar aquí?' }
          ]
        },
        {
          funktion: 'Erlaubnis und Verbot ausdrücken',
          es: 'Expresar permiso y prohibición',
          wendungen: [
            { de: 'Ja, das dürfen Sie. / Nein, das ist verboten.', es: 'Sí, puede. / No, está prohibido.' }
          ]
        },
        {
          funktion: 'Auskunft über Gewohnheiten geben',
          es: 'Informar sobre rutinas y hábitos',
          wendungen: [
            { de: 'Normalerweise arbeite ich bis 17 Uhr.', es: 'Normalmente trabajo hasta las 17.' }
          ]
        },
        {
          funktion: 'Vorschläge machen und darauf reagieren',
          es: 'Hacer propuestas y responder a ellas',
          wendungen: [
            { de: 'Sollen wir das zusammen machen?', es: '¿Lo hacemos juntos?' }
          ]
        },
        {
          funktion: 'schriftliche Anträge und Schreiben formulieren',
          es: 'Formular solicitudes por escrito',
          wendungen: [
            { de: 'Wie beginne ich so ein Schreiben?', es: '¿Cómo empiezo una carta así?' }
          ]
        }
      ]
    },

    {
      id: 'a12-l13',
      nr: 13,
      name: 'Gesundheit!',
      woerter: [
        {
          thema: 'Verkehr',
          items: [
            { de: 'der Unfall', es: 'el accidente', ex: 'Auf der Kreuzung gab es einen Unfall.', exEs: 'Hubo un accidente en el cruce.' },
            { de: 'die Ampel', es: 'el semáforo', ex: 'An der Ampel links.', exEs: 'En el semáforo, a la izquierda.' },
            { de: 'der Zebrastreifen', es: 'el paso de cebra', ex: 'Am Zebrastreifen halten die Autos meistens.', exEs: 'En el paso de cebra los coches suelen parar.' },
            { de: 'vorsichtig', es: 'con cuidado', ex: 'Fahr bitte vorsichtig, es ist glatt.', exEs: 'Conduce con cuidado, que está resbaladizo.' },
            { de: 'schnell / langsam', es: 'rápido / despacio', ex: 'Fahr bitte langsamer, das ist mir zu schnell.', exEs: 'Ve más despacio, eso es demasiado rápido para mí.' },
            { de: 'der Helm', es: 'el casco', ex: 'Ohne Helm fahre ich nicht Rad.', exEs: 'Sin casco no voy en bici.' },
            { de: 'der Gurt', es: 'el cinturón', ex: 'Vergiss den Gurt nicht!', exEs: '¡No te olvides del cinturón!' }
          ]
        },
        {
          thema: 'Körperteile',
          items: [
            { de: 'der Kopf', es: 'la cabeza', ex: 'Mir tut seit gestern der Kopf weh.', exEs: 'Me duele la cabeza desde ayer.' },
            { de: 'das Auge', es: 'el ojo', ex: 'Mein linkes Auge ist ganz rot.', exEs: 'Tengo el ojo izquierdo muy rojo.' },
            { de: 'das Ohr', es: 'la oreja', ex: 'Beim Fliegen tun mir die Ohren weh.', exEs: 'Cuando vuelo me duelen los oídos.' },
            { de: 'die Nase', es: 'la nariz', ex: 'Meine Nase ist seit Tagen zu.', exEs: 'Llevo días con la nariz tapada.' },
            { de: 'der Mund', es: 'la boca', ex: 'Machen Sie bitte den Mund auf.', exEs: 'Abra la boca, por favor.' },
            { de: 'der Zahn', es: 'el diente', ex: 'Dieser Zahn tut beim Kauen weh.', exEs: 'Este diente me duele al masticar.' },
            { de: 'der Hals', es: 'el cuello / la garganta', ex: 'Ich habe seit gestern Halsweh.', exEs: 'Me duele la garganta desde ayer.' },
            { de: 'der Arm / die Hand', es: 'el brazo / la mano', ex: 'Ich habe mir den Arm gebrochen.', exEs: 'Me he roto el brazo.' },
            { de: 'der Bauch', es: 'la barriga', ex: 'Nach dem Essen tut mir der Bauch weh.', exEs: 'Después de comer me duele la barriga.' },
            { de: 'der Rücken', es: 'la espalda', ex: 'Vom Sitzen tut mir der Rücken weh.', exEs: 'De estar sentado me duele la espalda.' },
            { de: 'das Bein / der Fuß', es: 'la pierna / el pie', ex: 'Mein rechter Fuß ist geschwollen.', exEs: 'Tengo el pie derecho hinchado.' },
            { de: 'das Knie', es: 'la rodilla', ex: 'Beim Laufen schmerzt mein Knie.', exEs: 'Corriendo me duele la rodilla.' }
          ]
        },
        {
          thema: 'Krankheiten und Schmerzen',
          items: [
            { de: 'die Erkältung', es: 'el resfriado', ex: 'Ich habe eine Erkältung und bleibe zu Hause.', exEs: 'Tengo un resfriado y me quedo en casa.' },
            { de: 'die Grippe', es: 'la gripe', ex: 'Mit Grippe soll man im Bett bleiben.', exEs: 'Con gripe hay que quedarse en la cama.' },
            { de: 'das Fieber', es: 'la fiebre', ex: 'Sie hat achtunddreißig Grad Fieber.', exEs: 'Tiene treinta y ocho de fiebre.' },
            { de: 'der Husten', es: 'la tos', ex: 'Der Husten geht seit zwei Wochen nicht weg.', exEs: 'La tos no se me va desde hace dos semanas.' },
            { de: 'der Schnupfen', es: 'el catarro', ex: 'Bei Schnupfen hilft mir heißer Tee.', exEs: 'Con catarro me va bien el té caliente.' },
            { de: 'die Kopfschmerzen', es: 'el dolor de cabeza', ex: 'Gegen die Kopfschmerzen nehme ich eine Tablette.', exEs: 'Para el dolor de cabeza tomo una pastilla.' },
            { de: 'die Halsschmerzen', es: 'el dolor de garganta', ex: 'Die Halsschmerzen sind heute schlimmer.', exEs: 'Hoy el dolor de garganta es peor.' },
            { de: 'krank / gesund', es: 'enfermo / sano', ex: 'Nach einer Woche war ich wieder gesund.', exEs: 'Al cabo de una semana ya estaba bien.' },
            { de: 'wehtun', es: 'doler', ex: 'Wo tut es weh?', exEs: '¿Dónde le duele?' }
          ]
        },
        {
          thema: 'beim Arzt',
          items: [
            { de: 'die Ordination (AT) / die Praxis', es: 'la consulta', ex: 'Die Ordination hat am Montag zu.', exEs: 'La consulta cierra los lunes.' },
            { de: 'der Termin', es: 'la cita', ex: 'Haben Sie einen Termin?', exEs: '¿Tiene cita?' },
            { de: 'die Untersuchung', es: 'el reconocimiento', ex: 'Die Untersuchung dauert nur ein paar Minuten.', exEs: 'El reconocimiento dura solo unos minutos.' },
            { de: 'das Rezept', es: 'la receta', ex: 'Für dieses Medikament brauchen Sie ein Rezept.', exEs: 'Para este medicamento necesita receta.' },
            { de: 'das Medikament / die Tablette', es: 'el medicamento / la pastilla', ex: 'Die Tabletten nehme ich morgens und abends.', exEs: 'Las pastillas las tomo por la mañana y por la noche.' },
            { de: 'die Krankmeldung', es: 'la baja médica', ex: 'Die Krankmeldung schicke ich der Firma per Mail.', exEs: 'La baja se la mando a la empresa por correo.' },
            { de: 'die E-Card (AT)', es: 'la tarjeta sanitaria', ex: 'Ohne E-Card müssen Sie bar zahlen.', exEs: 'Sin tarjeta sanitaria tiene que pagar en efectivo.' }
          ]
        },
        {
          thema: 'Gesund bleiben',
          items: [
            { de: 'die Gesundheit', es: 'la salud', ex: 'Auf deine Gesundheit!', exEs: '¡Por tu salud!' },
            { de: 'sich erholen', es: 'recuperarse', ex: 'Erhol dich gut!', exEs: '¡Que te mejores!' },
            { de: 'die Beschwerden', es: 'las molestias', ex: 'Welche Beschwerden haben Sie?', exEs: '¿Qué molestias tiene?' },
            { de: 'die Tablette', es: 'la pastilla', ex: 'Nimm eine Tablette nach dem Essen.', exEs: 'Toma una pastilla después de comer.' },
            { de: 'die Vorsorge', es: 'la revisión preventiva', ex: 'Einmal im Jahr gehe ich zur Vorsorge.', exEs: 'Una vez al año voy a la revisión.' },
            { de: 'die Versicherung', es: 'el seguro', ex: 'Haben Sie eine Versicherung?', exEs: '¿Tiene seguro?' },
            { de: 'sich verletzen', es: 'hacerse daño', ex: 'Ich habe mich beim Sport verletzt.', exEs: 'Me hice daño haciendo deporte.' },
            { de: 'die Apotheke', es: 'la farmacia', ex: 'In der Apotheke gibt es das ohne Rezept.', exEs: 'En la farmacia lo dan sin receta.' },
            { de: 'gesund / krank werden', es: 'ponerse bueno / enfermar', ex: 'Nach einer Woche wurde ich wieder gesund.', exEs: 'Al cabo de una semana me puse bueno.' },
            { de: 'der Notruf', es: 'el número de emergencias', ex: 'Bei einem Unfall wählt man den Notruf.', exEs: 'Si hay un accidente se llama a emergencias.' }
          ]
        },
        {
          thema: 'Beim Arzt & Gesundheit',
          items: [
            { de: 'die Überweisung', es: 'el volante, la derivación', ex: 'Für den Facharzt brauche ich eine Überweisung.', exEs: 'Para el especialista necesito un volante.' },
            { de: 'der Facharzt / die Fachärztin', es: 'el especialista / la especialista', ex: 'Der Facharzt hat erst im Mai einen Termin.', exEs: 'El especialista no tiene cita hasta mayo.' },
            { de: 'das Wartezimmer', es: 'la sala de espera', ex: 'Im Wartezimmer saßen zehn Leute.', exEs: 'En la sala de espera había diez personas.' },
            { de: 'die Spritze', es: 'la inyección', ex: 'Vor der Spritze habe ich ein bisschen Angst.', exEs: 'La inyección me da un poco de miedo.' },
            { de: 'die Impfung', es: 'la vacuna', ex: 'Die Impfung war überhaupt nicht schlimm.', exEs: 'La vacuna no fue nada del otro mundo.' },
            { de: 'der Blutdruck', es: 'la tensión', ex: 'Der Arzt misst zuerst den Blutdruck.', exEs: 'El médico mide primero la tensión.' },
            { de: 'die Salbe', es: 'la pomada', ex: 'Die Salbe hilft gegen die Schmerzen.', exEs: 'La pomada ayuda con los dolores.' },
            { de: 'der Tropfen', es: 'la gota', ex: 'Nimm drei Tropfen vor dem Schlafen.', exEs: 'Toma tres gotas antes de dormir.' },
            { de: 'der Verband', es: 'la venda', ex: 'Der Verband muss täglich gewechselt werden.', exEs: 'La venda hay que cambiarla a diario.' },
            { de: 'sich ausruhen', es: 'descansar', ex: 'Du musst dich ein paar Tage ausruhen.', exEs: 'Tienes que descansar unos días.' },
            { de: 'sich anstecken', es: 'contagiarse', ex: 'Im Büro habe ich mich angesteckt.', exEs: 'Me he contagiado en la oficina.' },
            { de: 'schwindlig', es: 'mareado', ex: 'Mir ist plötzlich schwindlig geworden.', exEs: 'De repente me he mareado.' },
            { de: 'übel', es: 'con náuseas', ex: 'Mir ist übel seit heute Morgen.', exEs: 'Tengo náuseas desde esta mañana.' },
            { de: 'die Allergie', es: 'la alergia', ex: 'Ich habe eine Allergie gegen Nüsse.', exEs: 'Tengo alergia a los frutos secos.' },
            { de: 'der Notarzt', es: 'el médico de urgencias', ex: 'Ruf sofort den Notarzt!', exEs: '¡Llama enseguida al médico de urgencias!' },
            { de: 'die Krankenkasse', es: 'la mutua, la seguridad social', ex: 'Die Krankenkasse zahlt die Behandlung.', exEs: 'La seguridad social paga el tratamiento.' },
            { de: 'die Behandlung', es: 'el tratamiento', ex: 'Die Behandlung dauert drei Wochen.', exEs: 'El tratamiento dura tres semanas.' },
            { de: 'der Krankenstand', es: 'la baja por enfermedad', ex: 'Ich bin bis Freitag im Krankenstand.', exEs: 'Estoy de baja hasta el viernes.' },
            { de: 'sich fühlen', es: 'sentirse', ex: 'Heute fühle ich mich schon besser.', exEs: 'Hoy ya me siento mejor.' }
          ]
        },
        {
          thema: 'Körper & Behandlung',
          items: [
            { de: 'der Hausarzt', es: 'el médico de cabecera', ex: 'Mein Hausarzt kennt mich seit Jahren.', exEs: 'Mi médico de cabecera me conoce desde hace años.' },
            { de: 'die Sprechstunde', es: 'la consulta', ex: 'Die Sprechstunde ist bis achtzehn Uhr.', exEs: 'La consulta es hasta las seis.' },
            { de: 'die Diagnose', es: 'el diagnóstico', ex: 'Die Diagnose war zum Glück harmlos.', exEs: 'El diagnóstico fue por suerte inofensivo.' },
            { de: 'die Operation', es: 'la operación', ex: 'Die Operation dauert etwa eine Stunde.', exEs: 'La operación dura una hora aproximadamente.' },
            { de: 'das Röntgenbild', es: 'la radiografía', ex: 'Auf dem Röntgenbild sieht man den Bruch.', exEs: 'En la radiografía se ve la fractura.' },
            { de: 'der Bruch', es: 'la fractura', ex: 'Der Bruch muss sechs Wochen ruhen.', exEs: 'La fractura tiene que estar seis semanas en reposo.' },
            { de: 'die Wunde', es: 'la herida', ex: 'Die Wunde heilt nur langsam.', exEs: 'La herida cura despacio.' },
            { de: 'heilen', es: 'curar, sanar', ex: 'Solche Verletzungen heilen meistens von allein.', exEs: 'Esas lesiones suelen curarse solas.' },
            { de: 'bluten', es: 'sangrar', ex: 'Der Finger blutet noch ein bisschen.', exEs: 'El dedo todavía sangra un poco.' },
            { de: 'der Schmerz', es: 'el dolor', ex: 'Der Schmerz kommt und geht.', exEs: 'El dolor va y viene.' },
            { de: 'atmen', es: 'respirar', ex: 'Atmen Sie bitte tief ein.', exEs: 'Respire hondo, por favor.' },
            { de: 'das Herz', es: 'el corazón', ex: 'Das Herz schlägt heute zu schnell.', exEs: 'Hoy el corazón late demasiado rápido.' },
            { de: 'die Lunge', es: 'el pulmón', ex: 'Der Arzt hört jetzt die Lunge ab.', exEs: 'El médico ausculta ahora los pulmones.' },
            { de: 'die Haut', es: 'la piel', ex: 'Meine Haut ist im Winter sehr trocken.', exEs: 'En invierno tengo la piel muy seca.' },
            { de: 'das Blut', es: 'la sangre', ex: 'Beim Arzt nehmen sie mir Blut ab.', exEs: 'En el médico me sacan sangre.' },
            { de: 'der Impfpass', es: 'la cartilla de vacunación', ex: 'Bringen Sie bitte den Impfpass mit.', exEs: 'Traiga la cartilla de vacunación, por favor.' },
            { de: 'rauchen', es: 'fumar', ex: 'Seit einem Jahr rauche ich nicht mehr.', exEs: 'Desde hace un año ya no fumo.' },
            { de: 'der Schlaf', es: 'el sueño', ex: 'Guter Schlaf ist die beste Medizin.', exEs: 'Dormir bien es la mejor medicina.' },
            { de: 'das Gewicht', es: 'el peso', ex: 'Mein Gewicht ist seit Jahren stabil.', exEs: 'Mi peso lleva años estable.' },
            { de: 'die Nebenwirkung', es: 'el efecto secundario', ex: 'Diese Nebenwirkung ist zum Glück selten.', exEs: 'Ese efecto secundario es por suerte raro.' }
          ]
        },
        {
          thema: 'Beschwerden & Medikamente',
          items: [
            { de: 'die Krankheit', es: 'la enfermedad', ex: 'Die Krankheit ist zum Glück nicht ansteckend.', exEs: 'Por suerte la enfermedad no es contagiosa.' },
            { de: 'das Symptom', es: 'el síntoma', ex: 'Fieber ist nur ein Symptom.', exEs: 'La fiebre es solo un síntoma.' },
            { de: 'die Übelkeit', es: 'las náuseas', ex: 'Gegen die Übelkeit hilft Ingwertee.', exEs: 'Contra las náuseas ayuda el té de jengibre.' },
            { de: 'der Durchfall', es: 'la diarrea', ex: 'Nach dem Essen hatte ich Durchfall.', exEs: 'Después de comer tuve diarrea.' },
            { de: 'die Migräne', es: 'la migraña', ex: 'Bei Migräne brauche ich völlige Dunkelheit.', exEs: 'Con migraña necesito oscuridad total.' },
            { de: 'der Heuschnupfen', es: 'la alergia al polen', ex: 'Im Mai habe ich immer Heuschnupfen.', exEs: 'En mayo siempre tengo alergia al polen.' },
            { de: 'das Asthma', es: 'el asma', ex: 'Er hat seit der Kindheit Asthma.', exEs: 'Tiene asma desde la infancia.' },
            { de: 'die Physiotherapie', es: 'la fisioterapia', ex: 'Nach der Operation brauche ich Physiotherapie.', exEs: 'Después de la operación necesito fisioterapia.' },
            { de: 'die Massage', es: 'el masaje', ex: 'Eine Massage tut dem Rücken gut.', exEs: 'Un masaje le viene bien a la espalda.' },
            { de: 'der Hustensaft', es: 'el jarabe para la tos', ex: 'Der Hustensaft schmeckt wirklich furchtbar.', exEs: 'El jarabe para la tos sabe fatal.' },
            { de: 'die Schmerztablette', es: 'el analgésico', ex: 'Eine Schmerztablette reicht meistens.', exEs: 'Con un analgésico suele bastar.' },
            { de: 'die Packungsbeilage', es: 'el prospecto', ex: 'Die Packungsbeilage ist unglaublich lang.', exEs: 'El prospecto es increíblemente largo.' },
            { de: 'die Dosis', es: 'la dosis', ex: 'Die Dosis steht auf der Schachtel.', exEs: 'La dosis está en la caja.' },
            { de: 'nüchtern', es: 'en ayunas', ex: 'Zur Blutabnahme müssen Sie nüchtern sein.', exEs: 'Para el análisis de sangre tiene que venir en ayunas.' },
            { de: 'ansteckend', es: 'contagioso', ex: 'Die Grippe ist sehr ansteckend.', exEs: 'La gripe es muy contagiosa.' },
            { de: 'chronisch', es: 'crónico', ex: 'Die Beschwerden sind leider chronisch.', exEs: 'Las molestias son crónicas, por desgracia.' },
            { de: 'die Genesung', es: 'la recuperación', ex: 'Ich wünsche Ihnen gute Genesung.', exEs: 'Le deseo una buena recuperación.' }
          ]
        },
        {
          thema: 'Symptome zeigen',
          items: [
            { de: 'husten', es: 'toser', ex: 'Ich huste schon seit einer Woche.', exEs: 'Llevo una semana tosiendo.' },
            { de: 'niesen', es: 'estornudar', ex: 'Wenn ich niese, sagt man Gesundheit.', exEs: 'Cuando estornudo, dicen Gesundheit.' },
            { de: 'sich übergeben', es: 'vomitar', ex: 'Dem Kind war schlecht und es hat sich übergeben.', exEs: 'El niño se encontraba mal y vomitó.' },
            { de: 'Fieber messen', es: 'tomar la temperatura', ex: 'Messen Sie bitte zweimal am Tag Fieber.', exEs: 'Tómese la temperatura dos veces al día.' },
            { de: 'sich hinlegen', es: 'tumbarse', ex: 'Leg dich eine Stunde hin, das hilft.', exEs: 'Túmbate una hora, eso ayuda.' },
            { de: 'sich schonen', es: 'cuidarse, no forzar', ex: 'Sie müssen sich noch eine Woche schonen.', exEs: 'Tiene que cuidarse una semana más.' },
            { de: 'sich verkühlen (AT)', es: 'resfriarse', ex: 'Zieh dich warm an, sonst verkühlst du dich.', exEs: 'Abrígate o te vas a resfriar.' },
            { de: 'jucken', es: 'picar', ex: 'Die Haut juckt seit gestern.', exEs: 'La piel me pica desde ayer.' },
            { de: 'schlucken', es: 'tragar', ex: 'Beim Schlucken tut mir der Hals weh.', exEs: 'Al tragar me duele la garganta.' },
            { de: 'einnehmen', es: 'tomar (un medicamento)', ex: 'Nehmen Sie die Tabletten nach dem Essen ein.', exEs: 'Tome las pastillas después de comer.' }
          ]
        },
        {
          thema: 'Gesund leben',
          items: [
            { de: 'sich bewegen', es: 'moverse, hacer ejercicio', ex: 'Ich sollte mich mehr bewegen.', exEs: 'Debería moverme más.' },
            { de: 'Sport treiben', es: 'hacer deporte', ex: 'Er treibt dreimal pro Woche Sport.', exEs: 'Hace deporte tres veces por semana.' },
            { de: 'sich gesund ernähren', es: 'comer sano', ex: 'Seit Jänner ernähre ich mich gesünder.', exEs: 'Desde enero como más sano.' },
            { de: 'abnehmen', es: 'adelgazar', ex: 'Ich möchte bis zum Sommer drei Kilo abnehmen.', exEs: 'Quiero adelgazar tres kilos para el verano.' },
            { de: 'zunehmen', es: 'engordar', ex: 'Im Winter nehme ich immer ein bisschen zu.', exEs: 'En invierno siempre engordo un poco.' },
            { de: 'das Rauchen aufgeben', es: 'dejar de fumar', ex: 'Mein Bruder hat das Rauchen aufgegeben.', exEs: 'Mi hermano ha dejado de fumar.' },
            { de: 'ausreichend schlafen', es: 'dormir lo suficiente', ex: 'Wer ausreichend schläft, wird seltener krank.', exEs: 'Quien duerme lo suficiente se pone enfermo menos.' },
            { de: 'die Bewegung', es: 'el ejercicio, el movimiento', ex: 'Ein bisschen Bewegung am Tag reicht schon.', exEs: 'Con un poco de ejercicio al día basta.' },
            { de: 'die Ernährung', es: 'la alimentación', ex: 'Die Ernährung ist die halbe Miete.', exEs: 'La alimentación es media batalla.' }
          ]
        }
      ],
      grammatik: [
        {
          regel: 'Modalverb sollen',
          erklaerung: 'Expresa un consejo o una orden de otra persona. ich soll, du sollst, er soll.',
          beispiele: [
            { de: 'Was soll ich machen?', es: '¿Qué debo hacer?' },
            { de: 'Du sollst viel trinken, sagt der Arzt.', es: 'Dice el médico que debes beber mucho.' }
          ]
        },
        {
          regel: 'Imperativ',
          erklaerung: 'du: raíz sin -st (Geh!). ihr: forma de ihr (Geht!). Sie: verbo + Sie (Gehen Sie!).',
          beispiele: [
            { de: 'Nimm die Tabletten dreimal am Tag!', es: '¡Toma las pastillas tres veces al día!' },
            { de: 'Bleiben Sie bitte im Bett!', es: '¡Quédese en la cama, por favor!' }
          ]
        },
        {
          key: 'wehtun-dativ',
          regel: 'wehtun + Dativ',
          erklaerung: 'Para decir qué te duele, la persona va en DATIVO y la parte del cuerpo es el sujeto: MIR tut der Kopf weh. Si duelen varias, el verbo va en plural: mir tun die Füße weh.',
          beispiele: [
            { de: 'Mir tut der Kopf weh.', es: 'Me duele la cabeza.' },
            { de: 'Tut dir der Hals weh?', es: '¿Te duele la garganta?' },
            { de: 'Ihr tun die Füße weh.', es: 'Le duelen los pies.' }
          ]
        },
        {
          key: 'schmerzen-haben',
          regel: 'Schmerzen haben',
          erklaerung: 'La otra forma de decirlo: parte del cuerpo + -schmerzen, con haben. Kopfschmerzen, Halsschmerzen, Bauchschmerzen, Rückenschmerzen. Van siempre en plural: Ich HABE Kopfschmerzen.',
          beispiele: [
            { de: 'Ich habe seit gestern Kopfschmerzen.', es: 'Tengo dolor de cabeza desde ayer.' },
            { de: 'Sie hat starke Rückenschmerzen.', es: 'Tiene un fuerte dolor de espalda.' }
          ]
        },
        {
          key: 'reflexive-verben-dativ',
          regel: 'Reflexive Verben im Dativ',
          erklaerung: 'Cuando además del pronombre hay un complemento directo, el pronombre pasa a dativo: mir, dir, sich, uns, euch, sich. Es lo que pasa con las partes del cuerpo: Ich putze MIR die Zähne (me lavo los dientes).',
          beispiele: [
            { de: 'Ich putze mir die Zähne.', es: 'Me lavo los dientes.' },
            { de: 'Er hat sich den Arm gebrochen.', es: 'Se ha roto el brazo.' }
          ]
        },
        {
          key: 'koerperteile-plural',
          regel: 'Körperteile im Plural',
          erklaerung: 'Las partes del cuerpo suelen ir en pareja, así que su plural se usa mucho y conviene sabérselo: das Auge → die Augen, das Ohr → die Ohren, der Arm → die Arme, das Bein → die Beine, die Hand → die Hände, der Fuß → die Füße, der Zahn → die Zähne.',
          beispiele: [
            { de: 'Meine Augen sind müde.', es: 'Tengo los ojos cansados.' },
            { de: 'Nach dem Lauf tun mir die Füße weh.', es: 'Después de correr me duelen los pies.' }
          ]
        },
        {
          key: 'sollte-ratschlag',
          regel: 'sollte: der Ratschlag',
          erklaerung: 'sollte es la forma suave de sollen y es LA manera de dar un consejo: Du SOLLTEST mehr schlafen. No es una orden; es lo que harías tú en su lugar.',
          beispiele: [
            { de: 'Du solltest mehr schlafen.', es: 'Deberías dormir más.' },
            { de: 'Sie sollten zwei Tage zu Hause bleiben.', es: 'Debería quedarse dos días en casa.' }
          ]
        },
        {
          key: 'aussprache-pf-kn-ps',
          regel: 'Aussprache: pf, kn und ps',
          erklaerung: 'En alemán se pronuncian LAS DOS letras, aunque en español eso no pase: Pflaster suena «pf-láster», Knie suena «k-ní», Psychologe «ps-ychológe». Callarse la primera es un error que se oye enseguida.',
          beispiele: [
            { de: 'Brauchen Sie ein Pflaster?', es: '¿Necesita una tirita?' },
            { de: 'Mein Knie tut beim Laufen weh.', es: 'Me duele la rodilla al correr.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'Warnungen und Anweisungen aussprechen',
          es: 'Dar avisos e instrucciones médicas',
          wendungen: [
            { de: 'Vorsicht! · Pass auf!', es: '¡Cuidado! · ¡Ten cuidado!' }
          ]
        },
        {
          funktion: 'Verhaltensregeln bei Krankheit beachten',
          es: 'Seguir recomendaciones de salud',
          wendungen: [
            { de: 'Wo genau tut es weh?', es: '¿Dónde exactamente le duele?' }
          ]
        },
        {
          funktion: 'Schmerzen und Symptome beschreiben',
          es: 'Describir dolores y síntomas',
          wendungen: [
            { de: 'Mein Kopf tut weh.', es: 'Me duele la cabeza.' }
          ]
        },
        {
          funktion: 'körperliche Beschwerden schildern',
          es: 'Detallar problemas físicos',
          wendungen: [
            { de: 'Der Hals tut beim Schlucken weh.', es: 'Me duele la garganta al tragar.' }
          ]
        },
        {
          funktion: 'über das Befinden sprechen',
          es: 'Hablar de cómo te encuentras',
          wendungen: [
            { de: 'Wie geht es dir? – Nicht so gut.', es: '¿Cómo estás? – No muy bien.' }
          ]
        },
        {
          funktion: 'Mitgefühl ausdrücken und Hilfe anbieten',
          es: 'Mostrar empatía y ofrecer ayuda',
          wendungen: [
            { de: 'Gute Besserung! · Das tut mir leid.', es: '¡Que te mejores! · Lo siento.' }
          ]
        },
        {
          funktion: 'ärztlichen Rat einholen und Ratschläge geben',
          es: 'Pedir consejo médico y dar recomendaciones',
          wendungen: [
            { de: 'Was würden Sie mir raten?', es: '¿Qué me aconsejaría?' }
          ]
        },
        {
          funktion: 'eine Krankmeldung mitteilen',
          es: 'Notificar una baja por enfermedad',
          wendungen: [
            { de: 'Ich bin krank und kann heute nicht kommen.', es: 'Estoy enfermo y hoy no puedo ir.' }
          ]
        }
      ]
    },

    {
      id: 'a12-l14',
      nr: 14,
      name: 'Das schaffen wir!',
      woerter: [
        {
          thema: 'Kleidung',
          items: [
            { de: 'die Hose', es: 'el pantalón', ex: 'Diese Hose ist mir zu eng.', exEs: 'Este pantalón me queda estrecho.' },
            { de: 'das Hemd', es: 'la camisa', ex: 'Zum Vorstellungsgespräch trage ich ein weißes Hemd.', exEs: 'Para la entrevista me pongo una camisa blanca.' },
            { de: 'die Bluse', es: 'la blusa', ex: 'Die Bluse muss in die Reinigung.', exEs: 'La blusa hay que llevarla a la tintorería.' },
            { de: 'der Rock', es: 'la falda', ex: 'Der Rock ist mir zu kurz.', exEs: 'La falda me queda corta.' },
            { de: 'das Kleid', es: 'el vestido', ex: 'Für die Hochzeit habe ich ein Kleid gekauft.', exEs: 'Para la boda me he comprado un vestido.' },
            { de: 'der Pullover', es: 'el jersey', ex: 'Nimm einen Pullover mit, abends wird es kalt.', exEs: 'Llévate un jersey, por la noche refresca.' },
            { de: 'die Jacke', es: 'la chaqueta', ex: 'Meine Jacke hängt im Vorraum.', exEs: 'Mi chaqueta está en el recibidor.' },
            { de: 'der Mantel', es: 'el abrigo', ex: 'Im Winter brauchst du hier einen warmen Mantel.', exEs: 'En invierno aquí necesitas un abrigo de abrigo.' },
            { de: 'die Schuhe', es: 'los zapatos', ex: 'Die neuen Schuhe drücken noch.', exEs: 'Los zapatos nuevos aún me aprietan.' },
            { de: 'die Socken', es: 'los calcetines', ex: 'Ich finde nie zwei gleiche Socken.', exEs: 'Nunca encuentro dos calcetines iguales.' },
            { de: 'der Schal / die Mütze', es: 'la bufanda / el gorro', ex: 'Ohne Mütze gehe ich im Winter nicht raus.', exEs: 'En invierno no salgo sin gorro.' },
            { de: 'die Größe', es: 'la talla', ex: 'Die Größe passt uns gut.', exEs: 'El tamaño nos va bien.' },
            { de: 'die Schuhgröße', es: 'el número de zapato', ex: 'Welche Schuhgröße hast du?', exEs: '¿Qué número calzas?' },
            { de: 'anprobieren', es: 'probarse', ex: 'Kann ich das anprobieren?', exEs: '¿Me lo puedo probar?' },
            { de: 'passen', es: 'quedar bien (de talla)', ex: 'Die Hose passt mir nicht.', exEs: 'El pantalón no me queda bien.' },
            { de: 'stehen', es: 'quedar bien (de aspecto)', ex: 'Das Blau steht dir wirklich gut.', exEs: 'El azul te queda muy bien.' },
            { de: 'die Umkleidekabine', es: 'el probador', ex: 'Die Umkleidekabine ist da hinten.', exEs: 'El probador está al fondo.' },
            { de: 'eng / weit', es: 'estrecho / ancho', ex: 'Der Rock ist mir zu eng.', exEs: 'La falda me queda estrecha.' },
            { de: 'die Baumwolle', es: 'el algodón', ex: 'Das Hemd ist aus Baumwolle.', exEs: 'La camisa es de algodón.' },
            { de: 'der Preis / der Rabatt', es: 'el precio / el descuento', ex: 'Auf die Mäntel gibt es 20 % Rabatt.', exEs: 'En los abrigos hay un 20 % de descuento.' }
          ]
        },
        {
          thema: 'Dienstleistungen und Geschäfte',
          items: [
            { de: 'das Geschäft / der Laden', es: 'la tienda', ex: 'Das Geschäft an der Ecke hat sonntags offen.', exEs: 'La tienda de la esquina abre los domingos.' },
            { de: 'die Reinigung', es: 'la tintorería', ex: 'Den Mantel bringe ich in die Reinigung.', exEs: 'El abrigo lo llevo a la tintorería.' },
            { de: 'die Reparatur', es: 'la reparación', ex: 'Die Reparatur kostet mehr als das Gerät.', exEs: 'La reparación cuesta más que el aparato.' },
            { de: 'der Friseur', es: 'la peluquería', ex: 'Beim Friseur war ich zuletzt im März.', exEs: 'Al peluquero fui por última vez en marzo.' },
            { de: 'umtauschen', es: 'cambiar (un producto)', ex: 'Kann ich das ohne Bon umtauschen?', exEs: '¿Puedo cambiarlo sin el tique?' },
            { de: 'reklamieren', es: 'reclamar', ex: 'Ich möchte diese Hose reklamieren.', exEs: 'Quiero reclamar por este pantalón.' },
            { de: 'die Rechnung', es: 'la factura', ex: 'Die Rechnung habe ich leider verloren.', exEs: 'He perdido la factura, por desgracia.' },
            { de: 'der Kassenbon', es: 'el tique', ex: 'Heb den Kassenbon gut auf.', exEs: 'Guarda bien el tique.' }
          ]
        },
        {
          thema: 'Datum und Termine',
          items: [
            { de: 'das Datum', es: 'la fecha', ex: 'Schreiben Sie bitte das Datum dazu.', exEs: 'Ponga también la fecha, por favor.' },
            { de: 'Der Wievielte ist heute?', es: '¿A cuántos estamos hoy?', ex: 'Der Wievielte ist heute? – Der zwölfte.', exEs: '¿A cuántos estamos hoy? – A doce.' },
            { de: 'am ersten Mai', es: 'el uno de mayo', ex: 'Am ersten Mai haben alle Geschäfte zu.', exEs: 'El uno de mayo cierran todas las tiendas.' },
            { de: 'vom 3. bis zum 10. Juni', es: 'del 3 al 10 de junio', ex: 'Ich habe vom dritten bis zum zehnten Juni Urlaub.', exEs: 'Tengo vacaciones del tres al diez de junio.' }
          ]
        },
        {
          thema: 'Einkaufen und Dienstleistungen',
          items: [
            { de: 'die Kasse', es: 'la caja', ex: 'An der Kasse ist eine lange Schlange.', exEs: 'En la caja hay mucha cola.' },
            { de: 'bar / mit Karte zahlen', es: 'pagar en efectivo / con tarjeta', ex: 'Zahlen Sie bar oder mit Karte?', exEs: '¿Paga en efectivo o con tarjeta?' },
            { de: 'die Garantie', es: 'la garantía', ex: 'Auf das Gerät sind zwei Jahre Garantie.', exEs: 'El aparato tiene dos años de garantía.' },
            { de: 'kaputt', es: 'roto', ex: 'Der Reißverschluss ist kaputt.', exEs: 'La cremallera está rota.' },
            { de: 'zurückgeben', es: 'devolver', ex: 'Kann ich das zurückgeben?', exEs: '¿Puedo devolverlo?' },
            { de: 'das Angebot', es: 'la oferta', ex: 'Diese Woche sind die Schuhe im Angebot.', exEs: 'Esta semana los zapatos están de oferta.' },
            { de: 'der Termin', es: 'la cita', ex: 'Ich hätte gern einen Termin für Freitag.', exEs: 'Quería una cita para el viernes.' },
            { de: 'abholen', es: 'recoger', ex: 'Wann kann ich die Jacke abholen?', exEs: '¿Cuándo puedo recoger la chaqueta?' }
          ]
        },
        {
          thema: 'Kleidung & Dienstleistungen',
          items: [
            { de: 'das T-Shirt', es: 'la camiseta', ex: 'Im Sommer trage ich meistens ein T-Shirt.', exEs: 'En verano llevo casi siempre una camiseta.' },
            { de: 'die Jeans', es: 'los vaqueros', ex: 'Meine Jeans ist schon ziemlich alt.', exEs: 'Mis vaqueros ya están bastante viejos.' },
            { de: 'der Anzug', es: 'el traje', ex: 'Zum Vorstellungsgespräch trage ich einen Anzug.', exEs: 'A la entrevista voy con traje.' },
            { de: 'die Krawatte', es: 'la corbata', ex: 'Die Krawatte passt nicht zum Hemd.', exEs: 'La corbata no pega con la camisa.' },
            { de: 'der Gürtel', es: 'el cinturón', ex: 'Der Gürtel ist mir zu lang.', exEs: 'El cinturón me queda largo.' },
            { de: 'der Stoff', es: 'la tela', ex: 'Der Stoff fühlt sich sehr weich an.', exEs: 'La tela es muy suave al tacto.' },
            { de: 'die Wolle', es: 'la lana', ex: 'Der Pullover ist aus reiner Wolle.', exEs: 'El jersey es de pura lana.' },
            { de: 'das Leder', es: 'el cuero', ex: 'Die Schuhe sind aus echtem Leder.', exEs: 'Los zapatos son de cuero auténtico.' },
            { de: 'die Farbe', es: 'el color', ex: 'Welche Farbe gefällt dir besser?', exEs: '¿Qué color te gusta más?' },
            { de: 'gestreift', es: 'de rayas', ex: 'Mein Lieblingshemd ist gestreift.', exEs: 'Mi camisa favorita es de rayas.' },
            { de: 'bequem', es: 'cómodo', ex: 'Diese Schuhe sind wirklich bequem.', exEs: 'Estos zapatos son muy cómodos.' },
            { de: 'altmodisch', es: 'anticuado', ex: 'Der Mantel ist mir zu altmodisch.', exEs: 'El abrigo me parece demasiado anticuado.' },
            { de: 'der Ausverkauf', es: 'las rebajas', ex: 'Im Ausverkauf war alles halb so teuer.', exEs: 'En las rebajas todo costaba la mitad.' },
            { de: 'die Quittung', es: 'el recibo', ex: 'Ohne Quittung kann ich nichts umtauschen.', exEs: 'Sin recibo no puedo cambiar nada.' },
            { de: 'reparieren', es: 'reparar', ex: 'Können Sie die Schuhe reparieren?', exEs: '¿Puede reparar los zapatos?' },
            { de: 'die Änderung', es: 'el arreglo', ex: 'Die Änderung kostet fünfzehn Euro.', exEs: 'El arreglo cuesta quince euros.' },
            { de: 'nähen', es: 'coser', ex: 'Meine Mutter näht die Hose kürzer.', exEs: 'Mi madre cose el pantalón más corto.' },
            { de: 'der Knopf', es: 'el botón', ex: 'An der Jacke fehlt ein Knopf.', exEs: 'A la chaqueta le falta un botón.' },
            { de: 'der Fleck', es: 'la mancha', ex: 'Auf dem Hemd ist ein Fleck.', exEs: 'En la camisa hay una mancha.' },
            { de: 'waschen', es: 'lavar', ex: 'Den Pullover darf man nicht heiß waschen.', exEs: 'El jersey no se puede lavar con agua caliente.' },
            { de: 'bügeln', es: 'planchar', ex: 'Ich bügle die Hemden am Sonntag.', exEs: 'Plancho las camisas los domingos.' },
            { de: 'die Lieferung', es: 'la entrega', ex: 'Die Lieferung kommt am Donnerstag.', exEs: 'La entrega llega el jueves.' }
          ]
        },
        {
          thema: 'Mode & Reklamation',
          items: [
            { de: 'die Mode', es: 'la moda', ex: 'Mode interessiert mich überhaupt nicht.', exEs: 'La moda no me interesa nada.' },
            { de: 'das Muster', es: 'el estampado', ex: 'Das Muster ist mir zu bunt.', exEs: 'El estampado me parece demasiado llamativo.' },
            { de: 'einfarbig', es: 'liso', ex: 'Mein Lieblingshemd ist einfarbig.', exEs: 'Mi camisa favorita es lisa.' },
            { de: 'kariert', es: 'de cuadros', ex: 'Die Hose ist kariert.', exEs: 'El pantalón es de cuadros.' },
            { de: 'der Ärmel', es: 'la manga', ex: 'Der Ärmel ist mir zu lang.', exEs: 'La manga me queda larga.' },
            { de: 'der Kragen', es: 'el cuello (de camisa)', ex: 'Der Kragen drückt am Hals.', exEs: 'El cuello me aprieta.' },
            { de: 'der Reißverschluss', es: 'la cremallera', ex: 'Der Reißverschluss klemmt schon wieder.', exEs: 'La cremallera se atasca otra vez.' },
            { de: 'das Futter', es: 'el forro', ex: 'Die Jacke hat ein warmes Futter.', exEs: 'La chaqueta tiene un forro cálido.' },
            { de: 'die Sohle', es: 'la suela', ex: 'Die Sohle ist schon ganz dünn.', exEs: 'La suela ya está muy fina.' },
            { de: 'der Absatz', es: 'el tacón', ex: 'Der Absatz ist mir zu hoch.', exEs: 'El tacón me parece demasiado alto.' },
            { de: 'die Handtasche', es: 'el bolso', ex: 'Die Handtasche passt farblich zu den Schuhen.', exEs: 'El bolso pega de color con los zapatos.' },
            { de: 'der Schmuck', es: 'las joyas', ex: 'Sie trägt fast nie Schmuck.', exEs: 'Ella casi nunca lleva joyas.' },
            { de: 'die Kette', es: 'la cadena, el collar', ex: 'Die Kette war ein Geschenk von meiner Oma.', exEs: 'El collar fue un regalo de mi abuela.' },
            { de: 'der Ring', es: 'el anillo', ex: 'Der Ring ist mir zu eng geworden.', exEs: 'El anillo me ha quedado estrecho.' },
            { de: 'die Wäsche', es: 'la ropa (para lavar)', ex: 'Die Wäsche hängt schon im Hof.', exEs: 'La ropa ya está tendida en el patio.' },
            { de: 'der Trockner', es: 'la secadora', ex: 'Im Trockner wird alles kleiner.', exEs: 'En la secadora todo encoge.' },
            { de: 'der Umtausch', es: 'el cambio', ex: 'Der Umtausch ist innerhalb von dreißig Tagen möglich.', exEs: 'El cambio es posible dentro de treinta días.' },
            { de: 'die Beschwerde', es: 'la reclamación', ex: 'Ich möchte eine Beschwerde einreichen.', exEs: 'Quiero presentar una reclamación.' },
            { de: 'der Gutschein', es: 'el vale', ex: 'Statt Geld gab es nur einen Gutschein.', exEs: 'En vez de dinero solo dieron un vale.' }
          ]
        },
        {
          thema: 'Wäsche & Reparatur',
          items: [
            { de: 'das Kaufhaus', es: 'los grandes almacenes', ex: 'Im Kaufhaus gibt es alles unter einem Dach.', exEs: 'En los grandes almacenes hay de todo bajo un techo.' },
            { de: 'der Bügel', es: 'la percha', ex: 'Häng die Bluse bitte auf einen Bügel.', exEs: 'Cuelga la blusa en una percha, por favor.' },
            { de: 'die Schneiderin', es: 'la modista', ex: 'Die Schneiderin macht die Hose kürzer.', exEs: 'La modista acorta el pantalón.' },
            { de: 'der Schuster', es: 'el zapatero', ex: 'Der Schuster wechselt mir die Sohle.', exEs: 'El zapatero me cambia la suela.' },
            { de: 'der Fleckenentferner', es: 'el quitamanchas', ex: 'Der Fleckenentferner wirkt sofort.', exEs: 'El quitamanchas funciona enseguida.' },
            { de: 'das Waschmittel', es: 'el detergente', ex: 'Dieses Waschmittel ist speziell für Wolle.', exEs: 'Este detergente es especial para lana.' },
            { de: 'der Weichspüler', es: 'el suavizante', ex: 'Weichspüler benutze ich eigentlich nie.', exEs: 'Suavizante no uso nunca.' },
            { de: 'die Wäscheleine', es: 'el tendedero', ex: 'Die Wäscheleine hängt unten im Hof.', exEs: 'El tendedero está abajo en el patio.' },
            { de: 'das Bügeleisen', es: 'la plancha', ex: 'Vorsicht, das Bügeleisen ist noch heiß.', exEs: 'Cuidado, la plancha todavía está caliente.' },
            { de: 'die Naht', es: 'la costura', ex: 'Die Naht ist an der Seite aufgegangen.', exEs: 'La costura se ha abierto por el lado.' },
            { de: 'der Saum', es: 'el dobladillo', ex: 'Der Saum muss neu genäht werden.', exEs: 'Hay que volver a coser el dobladillo.' },
            { de: 'der Faden', es: 'el hilo', ex: 'Der Faden hat leider die falsche Farbe.', exEs: 'El hilo es del color equivocado.' },
            { de: 'die Nadel', es: 'la aguja', ex: 'Die Nadel liegt im Nähkorb.', exEs: 'La aguja está en el costurero.' },
            { de: 'der Schnitt', es: 'el corte', ex: 'Der Schnitt steht dir wirklich gut.', exEs: 'Ese corte te queda muy bien.' },
            { de: 'die Marke', es: 'la marca', ex: 'Die Marke ist mir ehrlich gesagt egal.', exEs: 'Sinceramente, la marca me da igual.' },
            { de: 'das Etikett', es: 'la etiqueta', ex: 'Auf dem Etikett steht die Waschtemperatur.', exEs: 'En la etiqueta está la temperatura de lavado.' },
            { de: 'die Umtauschfrist', es: 'el plazo de cambio', ex: 'Die Umtauschfrist beträgt dreißig Tage.', exEs: 'El plazo de cambio es de treinta días.' },
            { de: 'die Kundenkarte', es: 'la tarjeta de cliente', ex: 'Mit der Kundenkarte gibt es zehn Prozent.', exEs: 'Con la tarjeta de cliente hay un diez por ciento.' },
            { de: 'sich umziehen', es: 'cambiarse de ropa', ex: 'Ich ziehe mich schnell um.', exEs: 'Me cambio rápido.' }
          ]
        },
        {
          thema: 'Farben',
          items: [
            { de: 'rot', es: 'rojo', ex: 'Der rote Mantel gefällt mir besser.', exEs: 'El abrigo rojo me gusta más.' },
            { de: 'blau', es: 'azul', ex: 'Ich suche ein blaues Hemd in Größe M.', exEs: 'Busco una camisa azul de la talla M.' },
            { de: 'grün', es: 'verde', ex: 'Die grüne Jacke ist leider ausverkauft.', exEs: 'La chaqueta verde está agotada.' },
            { de: 'gelb', es: 'amarillo', ex: 'Gelb steht dir wirklich gut.', exEs: 'El amarillo te queda muy bien.' },
            { de: 'schwarz', es: 'negro', ex: 'Schwarz passt einfach zu allem.', exEs: 'El negro pega con todo.' },
            { de: 'weiß', es: 'blanco', ex: 'Ein weißes Hemd braucht jeder.', exEs: 'Una camisa blanca la necesita todo el mundo.' },
            { de: 'grau', es: 'gris', ex: 'Im Winter trage ich meistens Grau.', exEs: 'En invierno suelo vestir de gris.' },
            { de: 'braun', es: 'marrón', ex: 'Die braunen Schuhe sind bequemer.', exEs: 'Los zapatos marrones son más cómodos.' },
            { de: 'orange', es: 'naranja', ex: 'Der Schal ist mir zu orange.', exEs: 'La bufanda me resulta demasiado naranja.' },
            { de: 'rosa', es: 'rosa', ex: 'Meine Tochter will alles in Rosa.', exEs: 'Mi hija lo quiere todo en rosa.' },
            { de: 'lila', es: 'morado, lila', ex: 'Das lila Kleid war im Ausverkauf.', exEs: 'El vestido morado estaba de rebajas.' }
          ]
        },
        {
          thema: 'Geld & Bezahlen',
          items: [
            { de: 'das Bargeld', es: 'el efectivo', ex: 'Hier kann man nur mit Bargeld zahlen.', exEs: 'Aquí solo se puede pagar en efectivo.' },
            { de: 'die Bankomatkarte (AT)', es: 'la tarjeta de débito', ex: 'Ich zahle lieber mit Bankomatkarte.', exEs: 'Prefiero pagar con tarjeta.' },
            { de: 'der Bankomat (AT)', es: 'el cajero automático', ex: 'Wo ist hier der nächste Bankomat?', exEs: '¿Dónde está el cajero más cercano?' },
            { de: 'überweisen', es: 'hacer una transferencia', ex: 'Die Miete überweise ich am Monatsanfang.', exEs: 'El alquiler lo transfiero a principios de mes.' },
            { de: 'das Konto', es: 'la cuenta bancaria', ex: 'Das Geld ist schon auf meinem Konto.', exEs: 'El dinero ya está en mi cuenta.' },
            { de: 'sparen', es: 'ahorrar', ex: 'Wir sparen für einen neuen Kühlschrank.', exEs: 'Ahorramos para una nevera nueva.' },
            { de: 'ausgeben', es: 'gastar', ex: 'Diesen Monat habe ich zu viel ausgegeben.', exEs: 'Este mes he gastado demasiado.' },
            { de: 'das Wechselgeld', es: 'el cambio, la vuelta', ex: 'Sie haben mir zu wenig Wechselgeld gegeben.', exEs: 'Me han dado mal la vuelta.' },
            { de: 'die Mehrwertsteuer', es: 'el IVA', ex: 'Der Preis ist inklusive Mehrwertsteuer.', exEs: 'El precio incluye el IVA.' }
          ]
        }
      ],
      grammatik: [
        {
          regel: 'Fragepronomen welch- und dies-',
          erklaerung: '"welch-" pregunta (¿cuál?), "dies-" responde señalando. Mismas terminaciones que der/die/das.',
          beispiele: [
            { de: 'Welche Jacke nimmst du? – Diese hier.', es: '¿Qué chaqueta te llevas? – Esta.' },
            { de: 'Welchen Pullover meinst du?', es: '¿Qué jersey dices?' }
          ]
        },
        {
          regel: 'Personalpronomen im Akkusativ',
          erklaerung: 'mich, dich, ihn, sie, es, uns, euch, sie, Sie.',
          beispiele: [
            { de: 'Der Mantel? Ich nehme ihn.', es: '¿El abrigo? Me lo llevo.' },
            { de: 'Ich rufe dich morgen an.', es: 'Te llamo mañana.' }
          ]
        },
        {
          regel: 'für + Akkusativ',
          erklaerung: '"für" siempre exige acusativo.',
          beispiele: [
            { de: 'Das Geschenk ist für dich.', es: 'El regalo es para ti.' },
            { de: 'Ich suche etwas für meinen Bruder.', es: 'Busco algo para mi hermano.' }
          ]
        },
        {
          regel: 'Komparativ / Superlativ: gut, viel, gern',
          erklaerung: 'gut – besser – am besten · viel – mehr – am meisten · gern – lieber – am liebsten.',
          beispiele: [
            { de: 'Diese Jacke gefällt mir besser.', es: 'Esta chaqueta me gusta más.' },
            { de: 'Am liebsten trage ich Jeans.', es: 'Lo que más me gusta es llevar vaqueros.' }
          ]
        },
        {
          key: 'ordinalzahlen-datum',
          regel: 'Ordinalzahlen: erste, zweite, dritte …',
          erklaerung: 'Primero, segundo, tercero: se fabrican con el número normal y una terminación. Del 1 al 19 se añade -te (vier → der vierte); del 20 en adelante, -ste (zwanzig → der zwanzigste).',
          detail:
            'Solo cuatro se salen del patrón, y son justo las que más se usan: eins → erste, drei → dritte, sieben → siebte (se come la -en) y acht → achte (una sola t, no "achtte").\n\nEscritos con cifra llevan un punto detrás, y ese punto significa exactamente «-te»: 1. Mai se lee "der erste Mai". Por eso las fechas se escriben 5.10.2026, día primero.\n\nSon adjetivos, así que llevan la terminación que les toque por el caso: der erste Tag, am ersten Tag, den zehnten Juli, mein zweites Buch. Con "am" (para decir en qué día pasa algo) acaban siempre en -ten.',
          beispiele: [
            { de: 'der erste, der zweite, der dritte', es: 'el primero, el segundo, el tercero' },
            { de: 'Heute ist der fünfte Mai.', es: 'Hoy es cinco de mayo.' },
            { de: 'Ich habe am zwanzigsten Juni Geburtstag.', es: 'Cumplo años el veinte de junio. (am + -sten)' },
            { de: 'Das ist mein zweites Buch.', es: 'Este es mi segundo libro. (como adjetivo)' }
          ],
          tabelle: {
            title: 'Cómo se forman',
            headers: ['Cifra', 'Número', 'Ordinal', 'Por qué'],
            rows: [
              ['1.', 'eins', 'erste', 'irregular'],
              ['2.', 'zwei', 'zweite', '+ te'],
              ['3.', 'drei', 'dritte', 'irregular'],
              ['4.', 'vier', 'vierte', '+ te'],
              ['7.', 'sieben', 'siebte', 'irregular: pierde la -en'],
              ['8.', 'acht', 'achte', 'irregular: una sola t'],
              ['19.', 'neunzehn', 'neunzehnte', '+ te (hasta el 19)'],
              ['20.', 'zwanzig', 'zwanzigste', '+ ste (del 20 en adelante)'],
              ['100.', 'hundert', 'hundertste', '+ ste']
            ]
          }
        },
        {
          key: 'adjektiv-nach-unbestimmtem-artikel',
          regel: 'Adjektive nach ein, kein, mein',
          erklaerung: 'Detrás de ein- el adjetivo tiene que decir el género, porque ein no lo dice: ein blauER Mantel (m), eine blauE Jacke (f), ein blauES Hemd (n). En acusativo masculino: einen blauEN Mantel.',
          beispiele: [
            { de: 'Ich suche einen blauen Mantel.', es: 'Busco un abrigo azul.' },
            { de: 'Das ist eine schöne Jacke.', es: 'Es una chaqueta bonita.' }
          ]
        },
        {
          key: 'passen-stehen-gefallen',
          regel: 'passen, stehen, gefallen',
          erklaerung: 'Los tres van con dativo y dicen cosas distintas. passen = ser de tu talla (Die Hose passt mir). stehen = sentarte bien, quedarte bien (Blau steht dir). gefallen = gustarte cómo es (Das Kleid gefällt mir).',
          beispiele: [
            { de: 'Die Hose passt mir nicht, sie ist zu eng.', es: 'El pantalón no me vale, es muy estrecho.' },
            { de: 'Blau steht dir wirklich gut.', es: 'El azul te queda muy bien.' }
          ]
        },
        {
          key: 'welche-groesse-akkusativ',
          regel: 'Welche Größe? Welche Farbe?',
          erklaerung: 'welch- pregunta por cuál de varios y cambia como der/die/das: welcher Mantel, welche Größe, welches Hemd. En acusativo masculino: welchen Mantel nehmen Sie?',
          beispiele: [
            { de: 'Welche Größe haben Sie?', es: '¿Qué talla tiene?' },
            { de: 'Welchen Mantel nehmen Sie?', es: '¿Qué abrigo se lleva?' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'nach Kleidung und Größen fragen',
          es: 'Preguntar por prendas y tallas',
          wendungen: [
            { de: 'Ich suche eine Hose in Größe 40.', es: 'Busco un pantalón de la talla 40.' },
            { de: 'Kann ich das anprobieren?', es: '¿Me lo puedo probar?' },
            { de: 'Welche Größe haben Sie?', es: '¿Qué talla tiene?' },
            { de: 'Haben Sie das auch in Blau?', es: '¿Lo tienen también en azul?' },
            { de: 'Das ist mir zu eng.', es: 'Me queda estrecho.' },
            { de: 'Wo ist die Umkleidekabine?', es: '¿Dónde está el probador?' },
            { de: 'Ich suche einen Pullover aus Wolle.', es: 'Busco un jersey de lana.' },
            { de: 'Haben Sie das eine Nummer größer?', es: '¿Lo tienen una talla más grande?' },
            { de: 'Diese Hose ist mir zu weit.', es: 'Este pantalón me queda ancho.' },
            { de: 'Wo kann ich das anprobieren?', es: '¿Dónde me lo puedo probar?' }
          ]
        },
        {
          funktion: 'Passform und Material beschreiben',
          es: 'Describir el corte y el material',
          wendungen: [
            { de: 'Der Stoff fühlt sich sehr angenehm an.', es: 'La tela es muy agradable al tacto.' },
            { de: 'Diese Schuhe sind endlich bequem.', es: 'Estos zapatos por fin son cómodos.' },
            { de: 'Was trägt man hier zu einer Hochzeit?', es: '¿Qué se lleva aquí a una boda?' },
            { de: 'Der Mantel ist mir zu altmodisch.', es: 'El abrigo me parece demasiado anticuado.' },
            { de: 'Ich brauche etwas Warmes für den Winter.', es: 'Necesito algo de abrigo para el invierno.' },
            { de: 'An der Jacke fehlt ein Knopf.', es: 'A la chaqueta le falta un botón.' },
            { de: 'Haben Sie das Hemd auch einfarbig?', es: '¿Tienen la camisa también lisa?' },
            { de: 'Der Ärmel ist mir viel zu lang.', es: 'La manga me queda demasiado larga.' },
            { de: 'Hat die Jacke ein warmes Futter?', es: '¿La chaqueta tiene un forro cálido?' },
            { de: 'Der Reißverschluss geht kaum zu.', es: 'La cremallera casi no cierra.' }
          ]
        },
        {
          funktion: 'Gefallen und Missfallen bei Kleidung äußern',
          es: 'Expresar gusto o disgusto sobre ropa',
          wendungen: [
            { de: 'Das steht dir gut!', es: '¡Te queda bien!' },
            { de: 'Die Farbe gefällt mir nicht.', es: 'El color no me gusta.' },
            { de: 'Das Kleid steht dir wirklich gut.', es: 'Ese vestido te queda muy bien.' },
            { de: 'Die Farbe gefällt mir überhaupt nicht.', es: 'El color no me gusta nada.' },
            { de: 'Das ist genau mein Stil.', es: 'Ese es justo mi estilo.' },
            { de: 'Ehrlich gesagt gefällt mir das nicht.', es: 'Sinceramente, eso no me gusta.' },
            { de: 'Das sieht sehr elegant aus.', es: 'Eso queda muy elegante.' },
            { de: 'Mir gefällt die schlichte Variante besser.', es: 'Me gusta más la versión sencilla.' },
            { de: 'Diese Kette gefällt mir wirklich gut.', es: 'Este collar me gusta mucho.' },
            { de: 'Das Muster ist mir zu auffällig.', es: 'El estampado me parece demasiado llamativo.' }
          ]
        },
        {
          funktion: 'Vorlieben vergleichen und bewerten',
          es: 'Comparar y valorar preferencias',
          wendungen: [
            { de: 'Ich mag lieber die blaue Jacke.', es: 'Prefiero la chaqueta azul.' },
            { de: 'Die ist billiger als die andere.', es: 'Esa es más barata que la otra.' },
            { de: 'Die blaue Jacke gefällt mir besser als die schwarze.', es: 'La chaqueta azul me gusta más que la negra.' },
            { de: 'Leder hält länger als Stoff.', es: 'El cuero dura más que la tela.' },
            { de: 'Ich trage lieber bequeme Schuhe.', es: 'Prefiero llevar zapatos cómodos.' },
            { de: 'Am liebsten kaufe ich im Ausverkauf.', es: 'Lo que más me gusta es comprar en rebajas.' },
            { de: 'Dieses Geschäft ist teurer als das andere.', es: 'Esta tienda es más cara que la otra.' },
            { de: 'Online bestelle ich lieber nicht.', es: 'Por internet prefiero no pedir.' },
            { de: 'Ich trage lieber einfarbig als kariert.', es: 'Prefiero liso a cuadros.' },
            { de: 'Welches gefällt dir besser?', es: '¿Cuál te gusta más?' }
          ]
        },
        {
          funktion: 'Wünsche beim Einkauf äußern',
          es: 'Expresar peticiones en la tienda',
          wendungen: [
            { de: 'Ich hätte gern einen Termin.', es: 'Quisiera una cita.' },
            { de: 'Gern, wann passt es Ihnen?', es: 'Claro, ¿cuándo le va bien?' },
            { de: 'Ich hätte gern einen Termin beim Friseur.', es: 'Quisiera una cita en la peluquería.' },
            { de: 'Ich würde gern noch etwas anderes sehen.', es: 'Me gustaría ver algo más.' },
            { de: 'Am liebsten hätte ich es bis Freitag.', es: 'Lo querría idealmente para el viernes.' },
            { de: 'Könnte ich das bitte eingepackt bekommen?', es: '¿Me lo podría envolver, por favor?' },
            { de: 'Ich wünsche mir etwas Praktisches.', es: 'Me gustaría algo práctico.' },
            { de: 'Ich hätte gern die Rechnung getrennt.', es: 'Quisiera la factura por separado.' },
            { de: 'Ich hätte gern einen Gutschein statt Geld.', es: 'Quisiera un vale en vez del dinero.' },
            { de: 'Am liebsten hätte ich den Ring eine Nummer größer.', es: 'Lo ideal sería el anillo una talla más grande.' }
          ]
        },
        {
          funktion: 'Reklamation und Umtausch abwickeln',
          es: 'Gestionar cambios y reclamaciones',
          wendungen: [
            { de: 'Ich möchte das umtauschen. Hier ist der Kassenbon.', es: 'Quiero cambiar esto. Aquí está el tique.' },
            { de: 'Wann ist es fertig?', es: '¿Cuándo estará listo?' },
            { de: 'Der Reißverschluss ist kaputt.', es: 'La cremallera está rota.' },
            { de: 'Kann ich das zurückgeben?', es: '¿Puedo devolverlo?' },
            { de: 'Zahlen Sie bar oder mit Karte?', es: '¿Paga en efectivo o con tarjeta?' },
            { de: 'Bis wann kann ich es abholen?', es: '¿Hasta cuándo puedo recogerlo?' },
            { de: 'Ich möchte das umtauschen, es passt nicht.', es: 'Quiero cambiar esto, no me queda bien.' },
            { de: 'Ab wann ist es abholbereit?', es: '¿A partir de cuándo está listo para recoger?' },
            { de: 'Bekomme ich das Geld zurück?', es: '¿Me devuelven el dinero?' },
            { de: 'Auf dem Hemd ist ein Fleck.', es: 'En la camisa hay una mancha.' }
          ]
        },
        {
          funktion: 'Kundendienst und Service anfragen',
          es: 'Consultar servicios al cliente',
          wendungen: [
            { de: 'Wie lange dauert die Änderung?', es: '¿Cuánto tarda el arreglo?' },
            { de: 'Wann kommt die Lieferung?', es: '¿Cuándo llega la entrega?' },
            { de: 'Können Sie die Schuhe reparieren?', es: '¿Puede reparar los zapatos?' },
            { de: 'Ich habe online bestellt, aber nichts bekommen.', es: 'He pedido por internet y no me ha llegado nada.' },
            { de: 'Bis wann ist der Umtausch möglich?', es: '¿Hasta cuándo se puede cambiar?' },
            { de: 'Ich möchte eine Beschwerde einreichen.', es: 'Quiero presentar una reclamación.' },
            { de: 'Die Sohle hat sich nach zwei Wochen gelöst.', es: 'La suela se ha despegado a las dos semanas.' },
            { de: 'Kann ich das umtauschen?', es: '¿Puedo cambiarlo?' },
            { de: 'Fällt die Größe eher klein aus?', es: '¿La talla tira a pequeña?' },
            { de: 'Ist auf das Teil noch Garantie?', es: '¿Esta prenda todavía tiene garantía?' }
          ]
        },
        {
          funktion: 'Meinung begründen und einschätzen',
          es: 'Dar opiniones razonadas y valoraciones',
          wendungen: [
            { de: 'Ich finde das zu teuer.', es: 'Me parece demasiado caro.' },
            { de: 'Das schaffen wir!', es: '¡Esto lo conseguimos!' },
            { de: 'Ich finde das zu teuer für die Qualität.', es: 'Me parece demasiado caro para la calidad que tiene.' },
            { de: 'Meiner Meinung nach ist das Angebot gut.', es: 'En mi opinión la oferta es buena.' },
            { de: 'Ich glaube, wir schaffen das zusammen.', es: 'Creo que lo conseguimos juntos.' },
            { de: 'Für mich ist Qualität wichtiger als der Preis.', es: 'Para mí la calidad importa más que el precio.' },
            { de: 'Ich bin überzeugt, dass sich das lohnt.', es: 'Estoy convencido de que merece la pena.' },
            { de: 'Das sehe ich anders, und zwar deshalb:', es: 'Yo lo veo distinto, y por esto:' },
            { de: 'Ich finde Mode ziemlich überbewertet.', es: 'Creo que la moda está bastante sobrevalorada.' },
            { de: 'Ein Gutschein ist für mich keine Lösung.', es: 'Un vale para mí no es solución.' }
          ]
        }
      ]
    },

    {
      id: 'a12-l15',
      nr: 15,
      name: 'Wie geht das?',
      woerter: [
        {
          thema: 'Medien und Technik',
          items: [
            { de: 'das Handy', es: 'el móvil', ex: 'Mein Handy ist schon wieder leer.', exEs: 'Se me ha vuelto a quedar sin batería el móvil.' },
            { de: 'die App', es: 'la aplicación', ex: 'Diese App gibt es auch auf Deutsch.', exEs: 'Esta aplicación también está en alemán.' },
            { de: 'das Internet', es: 'internet', ex: 'Ohne Internet kann ich nicht arbeiten.', exEs: 'Sin internet no puedo trabajar.' },
            { de: 'die Webseite', es: 'la página web', ex: 'Auf der Webseite steht alles genau.', exEs: 'En la página web lo explican todo.' },
            { de: 'das Passwort', es: 'la contraseña', ex: 'Mein Passwort habe ich wieder vergessen.', exEs: 'Se me ha vuelto a olvidar la contraseña.' },
            { de: 'das Konto', es: 'la cuenta', ex: 'Für die App brauchst du ein Konto.', exEs: 'Para la aplicación necesitas una cuenta.' },
            { de: 'herunterladen', es: 'descargar', ex: 'Ich lade mir das Formular herunter.', exEs: 'Me descargo el formulario.' },
            { de: 'installieren', es: 'instalar', ex: 'Das Update installiert sich von allein.', exEs: 'La actualización se instala sola.' },
            { de: 'speichern / löschen', es: 'guardar / borrar', ex: 'Speichere das, bevor du zumachst.', exEs: 'Guárdalo antes de cerrar.' },
            { de: 'der Akku / das Ladegerät', es: 'la batería / el cargador', ex: 'Hast du ein Ladegerät dabei?', exEs: '¿Llevas un cargador?' }
          ]
        },
        {
          thema: 'Reisen',
          items: [
            { de: 'die Reise', es: 'el viaje', ex: 'Die Reise hat zwölf Stunden gedauert.', exEs: 'El viaje duró doce horas.' },
            { de: 'der Urlaub', es: 'las vacaciones', ex: 'Im August nehme ich drei Wochen Urlaub.', exEs: 'En agosto cojo tres semanas de vacaciones.' },
            { de: 'das Hotel / die Unterkunft', es: 'el hotel / el alojamiento', ex: 'Die Unterkunft war sauber und günstig.', exEs: 'El alojamiento estaba limpio y era barato.' },
            { de: 'buchen', es: 'reservar', ex: 'Die Flüge habe ich schon gebucht.', exEs: 'Los vuelos ya los he reservado.' },
            { de: 'der Koffer / packen', es: 'la maleta / hacer la maleta', ex: 'Meinen Koffer packe ich immer am Vorabend.', exEs: 'La maleta la hago siempre la víspera.' },
            { de: 'die Reservierung', es: 'la reserva', ex: 'Ich habe eine Reservierung auf den Namen García.', exEs: 'Tengo una reserva a nombre de García.' }
          ]
        },
        {
          thema: 'Naturorte',
          items: [
            { de: 'der Berg', es: 'la montaña', ex: 'Im Winter fahren wir oft in die Berge.', exEs: 'En invierno vamos mucho a la montaña.' },
            { de: 'der See', es: 'el lago', ex: 'Der See ist im August warm genug zum Schwimmen.', exEs: 'En agosto el lago está bastante templado para bañarse.' },
            { de: 'das Meer', es: 'el mar', ex: 'Das Meer fehlt mir hier am meisten.', exEs: 'Lo que más echo de menos aquí es el mar.' },
            { de: 'der Wald', es: 'el bosque', ex: 'Hinter dem Haus fängt gleich der Wald an.', exEs: 'Justo detrás de la casa empieza el bosque.' },
            { de: 'der Fluss', es: 'el río', ex: 'Am Fluss kann man gut spazieren gehen.', exEs: 'Junto al río se pasea muy bien.' },
            { de: 'die Wiese', es: 'el prado', ex: 'Auf der Wiese liegen im Sommer alle in der Sonne.', exEs: 'En verano todo el mundo se tumba al sol en el prado.' },
            { de: 'die Insel', es: 'la isla', ex: 'Auf der Insel gibt es keine Autos.', exEs: 'En la isla no hay coches.' }
          ]
        },
        {
          thema: 'Himmelsrichtungen',
          items: [
            { de: 'der Norden / im Norden', es: 'el norte / en el norte', ex: 'Im Norden ist das Wetter kühler.', exEs: 'En el norte el tiempo es más fresco.' },
            { de: 'der Süden / im Süden', es: 'el sur / en el sur', ex: 'Meine Familie wohnt im Süden von Spanien.', exEs: 'Mi familia vive en el sur de España.' },
            { de: 'der Osten / im Osten', es: 'el este / en el este', ex: 'Im Osten des Landes spricht man auch Ungarisch.', exEs: 'En el este del país también se habla húngaro.' },
            { de: 'der Westen / im Westen', es: 'el oeste / en el oeste', ex: 'Im Westen sind die Berge am höchsten.', exEs: 'En el oeste las montañas son más altas.' }
          ]
        },
        {
          thema: 'Kurse und Weiterbildung',
          items: [
            { de: 'der Kurs', es: 'el curso', ex: 'Der Kurs ist dienstags und donnerstags.', exEs: 'El curso es los martes y los jueves.' },
            { de: 'die Weiterbildung', es: 'la formación continua', ex: 'Die Firma zahlt mir eine Weiterbildung.', exEs: 'La empresa me paga una formación.' },
            { de: 'der Kursleiter / die Kursleiterin', es: 'el/la docente', ex: 'Unsere Kursleiterin spricht sehr deutlich.', exEs: 'Nuestra profesora habla muy claro.' },
            { de: 'das Zertifikat', es: 'el certificado', ex: 'Am Ende bekommt man ein Zertifikat.', exEs: 'Al final te dan un certificado.' },
            { de: 'die Prüfung', es: 'el examen', ex: 'Die Prüfung ist im Juni, schriftlich und mündlich.', exEs: 'El examen es en junio, escrito y oral.' },
            { de: 'sich anmelden', es: 'inscribirse', ex: 'Für den Kurs muss man sich vorher anmelden.', exEs: 'Para el curso hay que inscribirse antes.' }
          ]
        },
        {
          thema: 'Reisen planen',
          items: [
            { de: 'die Unterkunft', es: 'el alojamiento', ex: 'Die Unterkunft haben wir schon gebucht.', exEs: 'El alojamiento ya lo tenemos reservado.' },
            { de: 'der Flug', es: 'el vuelo', ex: 'Der Flug geht um sechs Uhr früh.', exEs: 'El vuelo sale a las seis de la mañana.' },
            { de: 'die Grenze', es: 'la frontera', ex: 'An der Grenze wurde nicht kontrolliert.', exEs: 'En la frontera no controlaron.' },
            { de: 'der Ausflug', es: 'la excursión', ex: 'Am Sonntag machen wir einen Ausflug.', exEs: 'El domingo hacemos una excursión.' },
            { de: 'die Sehenswürdigkeit', es: 'el monumento', ex: 'Wien hat viele Sehenswürdigkeiten.', exEs: 'Viena tiene muchos monumentos.' },
            { de: 'der Rucksack packen', es: 'hacer la mochila', ex: 'Ich packe den Rucksack am Vorabend.', exEs: 'La mochila la hago la víspera.' },
            { de: 'die Wanderung', es: 'la caminata', ex: 'Die Wanderung dauert vier Stunden.', exEs: 'La caminata dura cuatro horas.' },
            { de: 'das Zelt', es: 'la tienda de campaña', ex: 'Wir schlafen im Zelt am See.', exEs: 'Dormimos en la tienda junto al lago.' }
          ]
        },
        {
          thema: 'Lernen und Kurse',
          items: [
            { de: 'der Sprachkurs', es: 'el curso de idiomas', ex: 'Mein Sprachkurs ist zweimal pro Woche.', exEs: 'Mi curso de idiomas es dos veces por semana.' },
            { de: 'das Ziel setzen', es: 'ponerse una meta', ex: 'Ich habe mir ein klares Ziel gesetzt.', exEs: 'Me he puesto una meta clara.' },
            { de: 'die Aussprache', es: 'la pronunciación', ex: 'Die Aussprache ist für mich das Schwerste.', exEs: 'La pronunciación es lo más difícil para mí.' },
            { de: 'der Fortschritt', es: 'el progreso', ex: 'Ich mache langsam Fortschritte.', exEs: 'Voy haciendo progresos poco a poco.' },
            { de: 'wiederholen', es: 'repasar', ex: 'Am Wochenende wiederhole ich den Wortschatz.', exEs: 'El fin de semana repaso el vocabulario.' },
            { de: 'die Hausaufgabe', es: 'los deberes', ex: 'Die Hausaufgabe ist bis Donnerstag.', exEs: 'Los deberes son para el jueves.' },
            { de: 'der Fehler', es: 'el error', ex: 'Aus Fehlern lernt man am meisten.', exEs: 'De los errores es de lo que más se aprende.' }
          ]
        },
        {
          thema: 'Technik & Reisen',
          items: [
            { de: 'der Bildschirm', es: 'la pantalla', ex: 'Der Bildschirm ist zu klein zum Lesen.', exEs: 'La pantalla es demasiado pequeña para leer.' },
            { de: 'die Datei', es: 'el archivo', ex: 'Die Datei ist zu groß für eine E-Mail.', exEs: 'El archivo es demasiado grande para un correo.' },
            { de: 'die Nachricht', es: 'el mensaje', ex: 'Ich habe dir eine Nachricht geschickt.', exEs: 'Te he mandado un mensaje.' },
            { de: 'aktualisieren', es: 'actualizar', ex: 'Du musst die App aktualisieren.', exEs: 'Tienes que actualizar la aplicación.' },
            { de: 'sich abmelden', es: 'cerrar sesión', ex: 'Vergiss nicht, dich abzumelden.', exEs: 'No olvides cerrar sesión.' },
            { de: 'die Verbindung', es: 'la conexión', ex: 'Die Verbindung ist heute sehr schlecht.', exEs: 'Hoy la conexión es muy mala.' },
            { de: 'der Anbieter', es: 'el proveedor', ex: 'Mein Anbieter ist ziemlich teuer.', exEs: 'Mi proveedor es bastante caro.' },
            { de: 'der Vertrag', es: 'el contrato', ex: 'Der Vertrag läuft zwei Jahre.', exEs: 'El contrato dura dos años.' },
            { de: 'die Rückfahrt', es: 'la vuelta', ex: 'Die Rückfahrt ist am Sonntagabend.', exEs: 'La vuelta es el domingo por la tarde.' },
            { de: 'die Hinfahrt', es: 'la ida', ex: 'Die Hinfahrt war sehr ruhig.', exEs: 'La ida fue muy tranquila.' },
            { de: 'der Aufenthalt', es: 'la estancia', ex: 'Der Aufenthalt dauert eine Woche.', exEs: 'La estancia dura una semana.' },
            { de: 'die Halbpension', es: 'la media pensión', ex: 'Wir haben Halbpension gebucht.', exEs: 'Hemos reservado media pensión.' },
            { de: 'das Reisebüro', es: 'la agencia de viajes', ex: 'Im Reisebüro haben wir alles gebucht.', exEs: 'En la agencia lo reservamos todo.' },
            { de: 'der Reiseführer', es: 'la guía de viaje', ex: 'Der Reiseführer empfiehlt dieses Museum.', exEs: 'La guía recomienda este museo.' },
            { de: 'die Landschaft', es: 'el paisaje', ex: 'Die Landschaft dort ist wunderschön.', exEs: 'El paisaje de allí es precioso.' },
            { de: 'das Gepäck', es: 'el equipaje', ex: 'Das Gepäck ist schon im Auto.', exEs: 'El equipaje ya está en el coche.' },
            { de: 'die Wiederholung', es: 'el repaso', ex: 'Ohne Wiederholung vergisst man alles.', exEs: 'Sin repaso se olvida todo.' }
          ]
        },
        {
          thema: 'Digital & Unterwegs lernen',
          items: [
            { de: 'der Speicher', es: 'la memoria', ex: 'Der Speicher auf dem Handy ist voll.', exEs: 'La memoria del móvil está llena.' },
            { de: 'der Link', es: 'el enlace', ex: 'Klick bitte auf den Link in der Mail.', exEs: 'Haz clic en el enlace del correo, por favor.' },
            { de: 'hochladen', es: 'subir', ex: 'Ich lade die Fotos gleich hoch.', exEs: 'Subo las fotos enseguida.' },
            { de: 'die Suchmaschine', es: 'el buscador', ex: 'In der Suchmaschine finde ich fast alles.', exEs: 'En el buscador encuentro casi todo.' },
            { de: 'der Benutzername', es: 'el nombre de usuario', ex: 'Mein Benutzername ist meine E-Mail-Adresse.', exEs: 'Mi nombre de usuario es mi correo electrónico.' },
            { de: 'anklicken', es: 'hacer clic', ex: 'Bitte das grüne Feld anklicken.', exEs: 'Haga clic en el campo verde, por favor.' },
            { de: 'die Reiseversicherung', es: 'el seguro de viaje', ex: 'Eine Reiseversicherung ist bei Fernreisen sinnvoll.', exEs: 'Un seguro de viaje tiene sentido en viajes largos.' },
            { de: 'das Visum', es: 'el visado', ex: 'Für dieses Land braucht man ein Visum.', exEs: 'Para este país hace falta visado.' },
            { de: 'die Ferienwohnung', es: 'el apartamento turístico', ex: 'Wir haben eine Ferienwohnung am See gemietet.', exEs: 'Hemos alquilado un apartamento en el lago.' },
            { de: 'die Jugendherberge', es: 'el albergue juvenil', ex: 'In der Jugendherberge ist es billig und laut.', exEs: 'En el albergue es barato y ruidoso.' },
            { de: 'der Campingplatz', es: 'el camping', ex: 'Der Campingplatz liegt direkt am Fluss.', exEs: 'El camping está justo al lado del río.' },
            { de: 'der Strand', es: 'la playa', ex: 'Am Strand war es angenehm windig.', exEs: 'En la playa corría un aire agradable.' },
            { de: 'der Wanderweg', es: 'la ruta de senderismo', ex: 'Der Wanderweg ist gut markiert.', exEs: 'La ruta está bien señalizada.' },
            { de: 'die Höhe', es: 'la altitud', ex: 'Auf dieser Höhe ist die Luft schon dünn.', exEs: 'A esta altitud el aire ya es fino.' },
            { de: 'der Gipfel', es: 'la cumbre', ex: 'Vom Gipfel sieht man drei Länder.', exEs: 'Desde la cumbre se ven tres países.' },
            { de: 'die Vokabel', es: 'el vocablo', ex: 'Jede neue Vokabel schreibe ich auf.', exEs: 'Cada palabra nueva la apunto.' },
            { de: 'die Grammatik', es: 'la gramática', ex: 'Die Grammatik ist logischer, als alle sagen.', exEs: 'La gramática es más lógica de lo que dicen.' },
            { de: 'auswendig', es: 'de memoria', ex: 'Diese Liste kann ich auswendig.', exEs: 'Esta lista me la sé de memoria.' },
            { de: 'die Motivation', es: 'la motivación', ex: 'Ohne Motivation lernt man gar nichts.', exEs: 'Sin motivación no se aprende nada.' }
          ]
        },
        {
          thema: 'Geräte & Flughafen',
          items: [
            { de: 'der Stecker', es: 'el enchufe', ex: 'Der Stecker passt hier leider nicht.', exEs: 'El enchufe no encaja aquí.' },
            { de: 'der Adapter', es: 'el adaptador', ex: 'Für England brauchst du einen Adapter.', exEs: 'Para Inglaterra necesitas un adaptador.' },
            { de: 'das WLAN', es: 'el wifi', ex: 'Das WLAN im Hotel ist ziemlich langsam.', exEs: 'El wifi del hotel es bastante lento.' },
            { de: 'die Cloud', es: 'la nube', ex: 'Die Fotos liegen alle in der Cloud.', exEs: 'Las fotos están todas en la nube.' },
            { de: 'die Sicherheitskopie', es: 'la copia de seguridad', ex: 'Mach bitte vorher eine Sicherheitskopie.', exEs: 'Haz antes una copia de seguridad.' },
            { de: 'das Update', es: 'la actualización', ex: 'Das Update dauert ungefähr zehn Minuten.', exEs: 'La actualización tarda unos diez minutos.' },
            { de: 'die Bordkarte', es: 'la tarjeta de embarque', ex: 'Die Bordkarte habe ich auf dem Handy.', exEs: 'La tarjeta de embarque la tengo en el móvil.' },
            { de: 'der Zoll', es: 'la aduana', ex: 'Am Zoll wurde nichts kontrolliert.', exEs: 'En la aduana no controlaron nada.' },
            { de: 'die Sicherheitskontrolle', es: 'el control de seguridad', ex: 'Die Sicherheitskontrolle dauerte eine Stunde.', exEs: 'El control de seguridad duró una hora.' },
            { de: 'die Ankunftshalle', es: 'la sala de llegadas', ex: 'Wir warten in der Ankunftshalle auf euch.', exEs: 'Os esperamos en la sala de llegadas.' },
            { de: 'der Mietwagen', es: 'el coche de alquiler', ex: 'Den Mietwagen holen wir am Flughafen ab.', exEs: 'El coche de alquiler lo recogemos en el aeropuerto.' },
            { de: 'die Route', es: 'la ruta', ex: 'Die Route führt über die Berge.', exEs: 'La ruta pasa por la montaña.' },
            { de: 'die Rundreise', es: 'el viaje circular', ex: 'Wir machen eine Rundreise durch Kroatien.', exEs: 'Hacemos un viaje circular por Croacia.' },
            { de: 'die Karteikarte', es: 'la ficha', ex: 'Für Vokabeln nutze ich Karteikarten.', exEs: 'Para el vocabulario uso fichas.' },
            { de: 'der Lernpartner', es: 'el compañero de estudio', ex: 'Ein Lernpartner hilft mehr als jede App.', exEs: 'Un compañero de estudio ayuda más que cualquier aplicación.' },
            { de: 'die Sprachschule', es: 'la escuela de idiomas', ex: 'Die Sprachschule liegt direkt im Zentrum.', exEs: 'La escuela de idiomas está en el centro.' },
            { de: 'das Niveau', es: 'el nivel', ex: 'Mein Niveau ist jetzt ungefähr A2.', exEs: 'Mi nivel ahora es más o menos A2.' }
          ]
        },
        {
          thema: 'Am Handy & Computer',
          items: [
            { de: 'tippen', es: 'teclear, escribir', ex: 'Auf dem Handy tippe ich viel langsamer.', exEs: 'En el móvil escribo mucho más lento.' },
            { de: 'scrollen', es: 'desplazarse, hacer scroll', ex: 'Scroll bitte ganz nach unten.', exEs: 'Baja del todo, por favor.' },
            { de: 'schicken', es: 'enviar', ex: 'Ich schicke dir gleich den Link.', exEs: 'Ahora te envío el enlace.' },
            { de: 'teilen', es: 'compartir', ex: 'Kannst du das Foto mit mir teilen?', exEs: '¿Me puedes compartir la foto?' },
            { de: 'ausschalten', es: 'apagar', ex: 'Im Kurs schalten wir die Handys aus.', exEs: 'En clase apagamos los móviles.' },
            { de: 'einschalten', es: 'encender', ex: 'Schalt bitte den Computer ein.', exEs: 'Enciende el ordenador, por favor.' },
            { de: 'aufladen', es: 'cargar', ex: 'Mein Handy muss ich dringend aufladen.', exEs: 'Tengo que cargar el móvil urgentemente.' },
            { de: 'abstürzen', es: 'colgarse, bloquearse', ex: 'Das Programm ist schon wieder abgestürzt.', exEs: 'El programa se ha vuelto a colgar.' },
            { de: 'funktionieren', es: 'funcionar', ex: 'Das WLAN funktioniert heute nicht.', exEs: 'Hoy el wifi no funciona.' },
            { de: 'die Einstellungen', es: 'los ajustes', ex: 'Die Sprache änderst du in den Einstellungen.', exEs: 'El idioma se cambia en los ajustes.' }
          ]
        },
        {
          thema: 'Beim Lernen',
          items: [
            { de: 'sich konzentrieren', es: 'concentrarse', ex: 'Bei Lärm kann ich mich nicht konzentrieren.', exEs: 'Con ruido no me puedo concentrar.' },
            { de: 'vergessen', es: 'olvidar', ex: 'Die Artikel vergesse ich immer wieder.', exEs: 'Los artículos se me olvidan una y otra vez.' },
            { de: 'sich merken', es: 'retener, quedarse con algo', ex: 'Mit einem Bild merke ich mir Wörter besser.', exEs: 'Con una imagen retengo mejor las palabras.' },
            { de: 'nachschlagen', es: 'buscar (en el diccionario)', ex: 'Unbekannte Wörter schlage ich sofort nach.', exEs: 'Las palabras que no conozco las busco enseguida.' },
            { de: 'der Tipp', es: 'el truco, el consejo', ex: 'Hast du einen Tipp gegen das Vergessen?', exEs: '¿Tienes algún truco contra los olvidos?' },
            { de: 'die Geduld', es: 'la paciencia', ex: 'Eine Sprache lernt man nur mit Geduld.', exEs: 'Un idioma solo se aprende con paciencia.' },
            { de: 'die Anstrengung', es: 'el esfuerzo', ex: 'Die Anstrengung hat sich am Ende gelohnt.', exEs: 'Al final el esfuerzo mereció la pena.' },
            { de: 'der Lernstoff', es: 'la materia, el temario', ex: 'Der Lernstoff für die Prüfung ist überschaubar.', exEs: 'El temario del examen es abarcable.' },
            { de: 'dranbleiben', es: 'seguir, no abandonar', ex: 'Wichtig ist, jeden Tag dranzubleiben.', exEs: 'Lo importante es no abandonar ningún día.' }
          ]
        }
      ],
      grammatik: [
        {
          regel: 'Konjunktiv II mit würd-',
          erklaerung: 'würde + infinitivo al final. Para deseos y peticiones corteses: ich würde, du würdest, er würde …',
          beispiele: [
            { de: 'Ich würde gern nach Italien fahren.', es: 'Me gustaría ir a Italia.' },
            { de: 'Würdest du mir bitte helfen?', es: '¿Me ayudarías, por favor?' }
          ]
        },
        {
          regel: 'nach + Dativ',
          erklaerung: 'Con ciudades y países SIN artículo indica destino.',
          beispiele: [
            { de: 'Wir fliegen nach Spanien.', es: 'Volamos a España.' }
          ]
        },
        {
          regel: 'Wechselpräpositionen in, auf, an + Dativ / Akkusativ',
          erklaerung: 'Wohin? (movimiento) → Akkusativ. Wo? (posición) → Dativ.',
          beispiele: [
            { de: 'Ich fahre ans Meer. (Wohin? → Akk.)', es: 'Voy al mar.' },
            { de: 'Ich bin am Meer. (Wo? → Dat.)', es: 'Estoy en el mar.' }
          ]
        },
        {
          key: 'futur-mit-werden',
          regel: 'Futur mit werden',
          erklaerung: 'werden + infinitivo al final. No se usa tanto como el futuro español: para planes basta el presente. Se reserva para lo que suena a promesa o a pronóstico: Ich WERDE dir schreiben.',
          beispiele: [
            { de: 'Ich werde dir aus dem Urlaub schreiben.', es: 'Te escribiré desde las vacaciones.' },
            { de: 'Morgen wird es regnen.', es: 'Mañana lloverá.' }
          ]
        },
        {
          key: 'zu-infinitiv',
          regel: 'Infinitiv mit zu',
          erklaerung: 'Detrás de verbos como versuchen, vergessen, anfangen, Lust haben y Zeit haben, el segundo verbo va con zu y al final: Ich habe vergessen, das Ticket ZU BUCHEN. Con los modales NO se pone zu.',
          beispiele: [
            { de: 'Ich habe vergessen, das Hotel zu buchen.', es: 'Se me olvidó reservar el hotel.' },
            { de: 'Hast du Lust, mitzukommen?', es: '¿Te apetece venir?' }
          ]
        },
        {
          key: 'um-zu-final',
          regel: 'um … zu: der Zweck',
          erklaerung: 'um … zu dice PARA QUÉ haces algo: Ich fahre nach Wien, UM Deutsch ZU LERNEN. Solo vale si el sujeto es el mismo en las dos partes; si cambia, hay que usar damit.',
          beispiele: [
            { de: 'Ich lerne Deutsch, um hier zu arbeiten.', es: 'Estudio alemán para trabajar aquí.' },
            { de: 'Wir fahren früher los, um den Zug zu erreichen.', es: 'Salimos antes para coger el tren.' }
          ]
        },
        {
          key: 'moegen-moechten-wollen',
          regel: 'mögen, möchten oder wollen?',
          erklaerung: 'mögen = gustar algo en general (Ich mag Kaffee). möchten = querer ahora, con educación (Ich möchte einen Kaffee). wollen = querer con decisión, suena más fuerte y en una tienda queda brusco.',
          beispiele: [
            { de: 'Ich mag Bergwandern sehr.', es: 'Me gusta mucho el senderismo de montaña.' },
            { de: 'Ich möchte ein Zimmer für zwei Nächte.', es: 'Querría una habitación para dos noches.' }
          ]
        },
        {
          key: 'aussprache-fremdwoerter-betonung',
          regel: 'Betonung bei Fremdwörtern',
          erklaerung: 'En las palabras alemanas el acento va casi siempre en la primera sílaba, pero en las de fuera no: Hotél, Compúter, Apparát, Restauránt, Musík. Vale la pena aprenderlas ya con su acento.',
          beispiele: [
            { de: 'Das Hotel liegt direkt am Bahnhof.', es: 'El hotel está justo en la estación.' },
            { de: 'Mein Computer ist schon wieder abgestürzt.', es: 'Mi ordenador se ha colgado otra vez.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'um Unterstützung und Erklärung bitten',
          es: 'Pedir ayuda y explicaciones',
          wendungen: [
            { de: 'Könntest du mir kurz helfen?', es: '¿Me podrías echar una mano?' },
            { de: 'Wie geht das? Kannst du mir das zeigen?', es: '¿Cómo se hace? ¿Me lo puedes enseñar?' },
            { de: 'Kannst du mir zeigen, wie das geht?', es: '¿Me puedes enseñar cómo se hace?' },
            { de: 'Ich komme mit dem Formular nicht weiter.', es: 'No avanzo con el formulario.' },
            { de: 'Könntest du das noch einmal erklären?', es: '¿Podrías explicarlo otra vez?' },
            { de: 'Hast du kurz Zeit für eine Frage?', es: '¿Tienes un momento para una pregunta?' },
            { de: 'Ich brauche jemanden, der mit mir übt.', es: 'Necesito a alguien para practicar.' },
            { de: 'Kannst du kurz drüberschauen?', es: '¿Le puedes echar un vistazo?' },
            { de: 'Ich verstehe die Anleitung nicht.', es: 'No entiendo las instrucciones.' },
            { de: 'Mit wem kann ich darüber sprechen?', es: '¿Con quién puedo hablar de esto?' }
          ]
        },
        {
          funktion: 'bei praktischen Aufgaben um Mithilfe bitten',
          es: 'Pedir colaboración en tareas prácticas',
          wendungen: [
            { de: 'Kannst du mir zeigen, wie ich das hochlade?', es: '¿Me enseñas cómo subo esto?' },
            { de: 'Mein Speicher ist voll, was mache ich?', es: 'Tengo la memoria llena, ¿qué hago?' },
            { de: 'Hilfst du mir beim Buchen der Ferienwohnung?', es: '¿Me ayudas a reservar el apartamento?' },
            { de: 'Könntest du meine Vokabeln abfragen?', es: '¿Me podrías preguntar el vocabulario?' },
            { de: 'Könntest du mir beim Brief helfen?', es: '¿Me podrías ayudar con la carta?' },
            { de: 'Würdest du das kurz gegenlesen?', es: '¿Le echarías un vistazo?' },
            { de: 'Kannst du mich morgen daran erinnern?', es: '¿Me lo puedes recordar mañana?' },
            { de: 'Hättest du kurz Zeit für mich?', es: '¿Tendrías un momento para mí?' },
            { de: 'Hoffentlich klappt alles wie geplant.', es: 'Ojalá salga todo según lo previsto.' },
            { de: 'Ich gebe mein Bestes, versprochen.', es: 'Doy lo mejor de mí, prometido.' }
          ]
        },
        {
          funktion: 'etwas versprechen und Hoffnung ausdrücken',
          es: 'Prometer algo y expresar esperanza',
          wendungen: [
            { de: 'Ich verspreche es dir.', es: 'Te lo prometo.' },
            { de: 'Ich hoffe, dass es klappt.', es: 'Espero que salga bien.' },
            { de: 'Ich verspreche dir, ich melde mich morgen.', es: 'Te prometo que mañana te aviso.' },
            { de: 'Ich hoffe, dass alles gut geht.', es: 'Espero que todo vaya bien.' },
            { de: 'Hoffentlich klappt es diesmal.', es: 'Ojalá salga esta vez.' },
            { de: 'Ich kümmere mich darum, versprochen.', es: 'Me ocupo de ello, prometido.' },
            { de: 'Ich hoffe, wir sehen uns bald wieder.', es: 'Espero que nos veamos pronto.' },
            { de: 'Darauf kannst du dich verlassen.', es: 'Puedes contar con ello.' },
            { de: 'Ich hoffe, das Visum kommt rechtzeitig.', es: 'Espero que el visado llegue a tiempo.' },
            { de: 'Ich verspreche, ich lerne jeden Tag zehn Vokabeln.', es: 'Prometo aprender diez palabras cada día.' }
          ]
        },
        {
          funktion: 'über Urlaubsziele sprechen',
          es: 'Hablar de destinos de vacaciones',
          wendungen: [
            { de: 'Im Sommer fahren wir ans Meer.', es: 'En verano vamos al mar.' },
            { de: 'Wohin würdest du gern reisen?', es: '¿Adónde te gustaría viajar?' },
            { de: 'Wohin fährst du im Urlaub?', es: '¿Adónde vas de vacaciones?' },
            { de: 'Warst du schon mal in Italien?', es: '¿Has estado alguna vez en Italia?' },
            { de: 'Wie lange bleibt ihr dort?', es: '¿Cuánto os quedáis allí?' },
            { de: 'Was kann man dort machen?', es: '¿Qué se puede hacer allí?' },
            { de: 'Habt ihr schon eine Unterkunft?', es: '¿Ya tenéis alojamiento?' },
            { de: 'Fahrt ihr mit dem Auto oder mit dem Zug?', es: '¿Vais en coche o en tren?' },
            { de: 'Warst du schon einmal in Kroatien?', es: '¿Has estado alguna vez en Croacia?' },
            { de: 'Was empfiehlt der Reiseführer?', es: '¿Qué recomienda la guía?' }
          ]
        },
        {
          funktion: 'Reisevorbereitung und Transport planen',
          es: 'Planificar viajes y transporte',
          wendungen: [
            { de: 'Nimmst du viel Gepäck mit?', es: '¿Llevas mucho equipaje?' },
            { de: 'Ist die Reise teuer geworden?', es: '¿Ha salido caro el viaje?' },
            { de: 'Wann fahrt ihr los?', es: '¿Cuándo salís?' },
            { de: 'Lieber Strand oder lieber Berge?', es: '¿Prefieres playa o montaña?' },
            { de: 'Schläfst du im Zelt oder in der Jugendherberge?', es: '¿Duermes en tienda o en el albergue?' },
            { de: 'Braucht man für dieses Land ein Visum?', es: '¿Para este país hace falta visado?' },
            { de: 'Wie lang ist der Wanderweg zum Gipfel?', es: '¿Qué distancia tiene la ruta hasta la cumbre?' },
            { de: 'Wohin fährst du dieses Jahr?', es: '¿Adónde vas este año?' },
            { de: 'Warst du schon einmal in Tirol?', es: '¿Has estado alguna vez en el Tirol?' },
            { de: 'Lohnt sich die Reise wirklich?', es: '¿Merece la pena el viaje?' }
          ]
        },
        {
          funktion: 'Vorlieben und Interesse äußern',
          es: 'Expresar preferencias e intereses',
          wendungen: [
            { de: 'Ich interessiere mich für Technik.', es: 'Me interesa la tecnología.' },
            { de: 'Das finde ich spannend.', es: 'Eso me parece interesante.' },
            { de: 'Ich interessiere mich sehr für Geschichte.', es: 'Me interesa mucho la historia.' },
            { de: 'Technik finde ich wirklich spannend.', es: 'La tecnología me parece muy interesante.' },
            { de: 'Kochen interessiert mich überhaupt nicht.', es: 'La cocina no me interesa nada.' },
            { de: 'Am liebsten lese ich über andere Länder.', es: 'Lo que más me gusta es leer sobre otros países.' },
            { de: 'Sport interessiert mich mehr als Musik.', es: 'Me interesa más el deporte que la música.' },
            { de: 'Das finde ich nicht so interessant.', es: 'Eso no me parece tan interesante.' },
            { de: 'Mich interessiert vor allem die Grammatik.', es: 'A mí me interesa sobre todo la gramática.' },
            { de: 'Vokabeln auswendig lernen mag ich nicht.', es: 'Aprender vocabulario de memoria no me gusta.' }
          ]
        },
        {
          funktion: 'über Lernziele und Fortschritte sprechen',
          es: 'Hablar de metas de estudio y progreso',
          wendungen: [
            { de: 'Mein Ziel ist die B1-Prüfung.', es: 'Mi meta es el examen B1.' },
            { de: 'Ich möchte flüssiger sprechen.', es: 'Quiero hablar con más fluidez.' },
            { de: 'Warum lernst du Deutsch?', es: '¿Por qué aprendes alemán?' },
            { de: 'Was fällt dir am schwersten?', es: '¿Qué es lo que más te cuesta?' },
            { de: 'Wie oft übst du?', es: '¿Cada cuánto practicas?' },
            { de: 'Was ist dein Ziel?', es: '¿Cuál es tu meta?' },
            { de: 'Machst du Fortschritte?', es: '¿Vas avanzando?' },
            { de: 'Hast du die Hausaufgabe gemacht?', es: '¿Has hecho los deberes?' },
            { de: 'Ich will endlich ohne Pausen sprechen.', es: 'Quiero hablar por fin sin pausas.' },
            { de: 'Merkst du selbst Fortschritte?', es: '¿Notas tú mismo que progresas?' }
          ]
        },
        {
          funktion: 'über Lernmethoden und Schwierigkeiten austauschen',
          es: 'Compartir métodos de estudio y dificultades',
          wendungen: [
            { de: 'Ohne Wiederholung vergesse ich alles wieder.', es: 'Sin repaso se me vuelve a olvidar todo.' },
            { de: 'Ich lerne am besten mit Musik und Serien.', es: 'Aprendo mejor con música y series.' },
            { de: 'Die Aussprache ist mein größtes Problem.', es: 'La pronunciación es mi mayor problema.' },
            { de: 'Warum lernst du eigentlich Deutsch?', es: '¿Y por qué aprendes alemán?' },
            { de: 'Woher nimmst du die Motivation?', es: '¿De dónde sacas la motivación?' },
            { de: 'Wie viele Vokabeln lernst du pro Woche?', es: '¿Cuántas palabras aprendes por semana?' },
            { de: 'Kannst du die Regeln auswendig?', es: '¿Te sabes las reglas de memoria?' },
            { de: 'Was willst du als Nächstes erreichen?', es: '¿Qué quieres conseguir a continuación?' },
            { de: 'Wie lernst du am effektivsten?', es: '¿Cómo aprendes de manera más eficaz?' },
            { de: 'Was hilft dir beim Vokabelnlernen?', es: '¿Qué te ayuda a aprender vocabulario?' }
          ]
        }
      ]
    },

    {
      id: 'a12-l16',
      nr: 16,
      name: 'Glückwunsch!',
      woerter: [
        {
          thema: 'Feste und Einladungen',
          items: [
            { de: 'das Fest / die Feier', es: 'la fiesta / la celebración', ex: 'Die Feier war bis drei Uhr morgens.', exEs: 'La fiesta duró hasta las tres de la mañana.' },
            { de: 'der Geburtstag', es: 'el cumpleaños', ex: 'Am Freitag habe ich Geburtstag.', exEs: 'El viernes es mi cumpleaños.' },
            { de: 'die Hochzeit', es: 'la boda', ex: 'Zur Hochzeit kommen achtzig Leute.', exEs: 'A la boda vienen ochenta personas.' },
            { de: 'Weihnachten', es: 'la Navidad', ex: 'Weihnachten verbringe ich bei meinen Eltern.', exEs: 'La Navidad la paso en casa de mis padres.' },
            { de: 'Ostern', es: 'la Pascua', ex: 'Zu Ostern haben wir eine Woche frei.', exEs: 'En Pascua tenemos una semana libre.' },
            { de: 'Silvester', es: 'la Nochevieja', ex: 'Silvester feiern wir bei Freunden.', exEs: 'La Nochevieja la celebramos en casa de unos amigos.' },
            { de: 'die Einladung / einladen', es: 'la invitación / invitar', ex: 'Die Einladung kam per WhatsApp.', exEs: 'La invitación llegó por WhatsApp.' },
            { de: 'feiern', es: 'celebrar', ex: 'Wir feiern klein, nur mit der Familie.', exEs: 'Lo celebramos en pequeño, solo con la familia.' },
            { de: 'der Gast', es: 'el invitado', ex: 'Wir haben am Wochenende Gäste.', exEs: 'El fin de semana tenemos invitados.' },
            { de: 'der Gastgeber / die Gastgeberin', es: 'el anfitrión / la anfitriona', ex: 'Dem Gastgeber bringt man etwas mit.', exEs: 'Al anfitrión se le lleva algo.' },
            { de: 'die Überraschung', es: 'la sorpresa', ex: 'Das Fest soll eine Überraschung sein.', exEs: 'La fiesta tiene que ser una sorpresa.' },
            { de: 'die Party', es: 'la fiesta', ex: 'Die Party geht bis spät in die Nacht.', exEs: 'La fiesta dura hasta tarde.' },
            { de: 'absagen', es: 'cancelar', ex: 'Ich muss leider absagen.', exEs: 'Por desgracia tengo que cancelar.' },
            { de: 'zusagen', es: 'confirmar que vas', ex: 'Ich habe schon zugesagt.', exEs: 'Ya he dicho que voy.' },
            { de: 'der Termin passt mir', es: 'me va bien la fecha', ex: 'Samstag passt mir gut.', exEs: 'El sábado me viene bien.' },
            { de: 'sich freuen auf', es: 'hacer ilusión', ex: 'Ich freue mich schon auf das Fest.', exEs: 'Ya tengo ganas de la fiesta.' },
            { de: 'gratulieren', es: 'felicitar', ex: 'Wir gratulieren dir zum Geburtstag!', exEs: '¡Te felicitamos por tu cumpleaños!' },
            { de: 'das Getränk', es: 'la bebida', ex: 'Bringt jeder ein Getränk mit?', exEs: '¿Cada uno trae una bebida?' }
          ]
        },
        {
          thema: 'Gastgeschenke',
          items: [
            { de: 'die Blumen', es: 'las flores', ex: 'Blumen sind hier ein klassisches Gastgeschenk.', exEs: 'Aquí las flores son el regalo clásico.' },
            { de: 'die Pralinen', es: 'los bombones', ex: 'Ich bringe eine Schachtel Pralinen mit.', exEs: 'Llevo una caja de bombones.' },
            { de: 'der Wein', es: 'el vino', ex: 'Zum Essen trinken wir einen Wein aus der Gegend.', exEs: 'Con la comida bebemos un vino de la zona.' },
            { de: 'das Geschenk', es: 'el regalo', ex: 'Das Geschenk habe ich noch nicht eingepackt.', exEs: 'El regalo todavía no lo he envuelto.' },
            { de: 'mitbringen', es: 'llevar (algo consigo)', ex: 'Soll ich etwas mitbringen?', exEs: '¿Llevo algo?' }
          ]
        },
        {
          thema: 'Essen und Trinken (II)',
          items: [
            { de: 'das Buffet', es: 'el bufé', ex: 'Am Buffet gab es auch etwas Vegetarisches.', exEs: 'En el bufé había también algo vegetariano.' },
            { de: 'der Kuchen / die Torte', es: 'el bizcocho / la tarta', ex: 'Den Kuchen hat meine Schwester gebacken.', exEs: 'El bizcocho lo hizo mi hermana.' },
            { de: 'der Sekt', es: 'el cava', ex: 'Um Mitternacht stoßen wir mit Sekt an.', exEs: 'A medianoche brindamos con cava.' },
            { de: 'anstoßen', es: 'brindar', ex: 'Um zwölf stoßen wir an.', exEs: 'A las doce brindamos.' },
            { de: 'Prost! · Zum Wohl!', es: '¡Salud!', ex: 'Zum Wohl! Auf dein neues Jahr!', exEs: '¡Salud! ¡Por tu nuevo año!' }
          ]
        },
        {
          thema: 'Pünktlichkeit',
          items: [
            { de: 'pünktlich', es: 'puntual', ex: 'In Österreich heißt pünktlich wirklich pünktlich.', exEs: 'En Austria puntual significa puntual de verdad.' },
            { de: 'zu spät / zu früh', es: 'tarde / pronto', ex: 'Lieber zu früh als zu spät.', exEs: 'Mejor pronto que tarde.' },
            { de: 'die Verspätung', es: 'el retraso', ex: 'Entschuldige die Verspätung, der Bus war weg.', exEs: 'Perdona el retraso, se me fue el autobús.' },
            { de: 'sich verspäten', es: 'retrasarse', ex: 'Wenn ich mich verspäte, schreibe ich dir.', exEs: 'Si me retraso, te escribo.' }
          ]
        },
        {
          thema: 'Bei Gastgebern zu Besuch',
          items: [
            { de: 'klingeln', es: 'llamar al timbre', ex: 'Klingel einfach zweimal.', exEs: 'Llama dos veces al timbre.' },
            { de: 'die Garderobe', es: 'el perchero', ex: 'Häng die Jacke an die Garderobe.', exEs: 'Cuelga la chaqueta en el perchero.' },
            { de: 'sich setzen', es: 'sentarse', ex: 'Setz dich doch, wir essen gleich.', exEs: 'Siéntate, que enseguida comemos.' },
            { de: 'schmecken', es: 'estar bueno', ex: 'Das Essen schmeckt wirklich super.', exEs: 'La comida está buenísima.' },
            { de: 'satt sein', es: 'estar lleno', ex: 'Danke, ich bin schon satt.', exEs: 'Gracias, ya estoy lleno.' },
            { de: 'sich bedanken', es: 'dar las gracias', ex: 'Ich möchte mich für den schönen Abend bedanken.', exEs: 'Quiero daros las gracias por la velada.' },
            { de: 'sich verabschieden', es: 'despedirse', ex: 'Wir müssen uns leider verabschieden.', exEs: 'Por desgracia tenemos que despedirnos.' },
            { de: 'noch ein Stück', es: 'un trozo más', ex: 'Möchtest du noch ein Stück Kuchen?', exEs: '¿Quieres otro trozo de tarta?' }
          ]
        },
        {
          thema: 'Feste & Tisch',
          items: [
            { de: 'das Jubiläum', es: 'el aniversario', ex: 'Die Firma feiert ihr Jubiläum.', exEs: 'La empresa celebra su aniversario.' },
            { de: 'die Taufe', es: 'el bautizo', ex: 'Am Sonntag ist die Taufe meiner Nichte.', exEs: 'El domingo es el bautizo de mi sobrina.' },
            { de: 'der Fasching', es: 'el carnaval', ex: 'Im Fasching verkleiden sich alle.', exEs: 'En carnaval todo el mundo se disfraza.' },
            { de: 'das Kostüm', es: 'el disfraz', ex: 'Mein Kostüm ist schon fertig.', exEs: 'Mi disfraz ya está listo.' },
            { de: 'die Dekoration', es: 'la decoración', ex: 'Die Dekoration hat meine Schwester gemacht.', exEs: 'La decoración la ha hecho mi hermana.' },
            { de: 'die Kerze', es: 'la vela', ex: 'Auf der Torte stehen dreißig Kerzen.', exEs: 'En la tarta hay treinta velas.' },
            { de: 'die Serviette', es: 'la servilleta', ex: 'Die Servietten liegen neben den Tellern.', exEs: 'Las servilletas están al lado de los platos.' },
            { de: 'der Teller', es: 'el plato', ex: 'Stell bitte noch einen Teller dazu.', exEs: 'Pon otro plato, por favor.' },
            { de: 'das Glas', es: 'el vaso', ex: 'Dein Glas ist leer, soll ich nachschenken?', exEs: 'Tienes el vaso vacío, ¿te sirvo más?' },
            { de: 'die Gabel', es: 'el tenedor', ex: 'Die Gabel ist heruntergefallen.', exEs: 'Se ha caído el tenedor.' },
            { de: 'das Messer', es: 'el cuchillo', ex: 'Das Messer ist nicht scharf genug.', exEs: 'El cuchillo no corta bastante.' },
            { de: 'der Löffel', es: 'la cuchara', ex: 'Für die Suppe brauchst du einen Löffel.', exEs: 'Para la sopa necesitas una cuchara.' },
            { de: 'die Rede', es: 'el discurso', ex: 'Der Vater hält eine kurze Rede.', exEs: 'El padre da un discurso corto.' },
            { de: 'das Lied', es: 'la canción', ex: 'Am Ende singen alle ein Lied.', exEs: 'Al final todos cantan una canción.' },
            { de: 'die Stimmung', es: 'el ambiente', ex: 'Die Stimmung war richtig gut.', exEs: 'El ambiente estuvo muy bien.' },
            { de: 'sich verkleiden', es: 'disfrazarse', ex: 'Die Kinder verkleiden sich gern.', exEs: 'A los niños les gusta disfrazarse.' },
            { de: 'der Abschied', es: 'la despedida', ex: 'Der Abschied war ein bisschen traurig.', exEs: 'La despedida fue un poco triste.' },
            { de: 'der Glückwunsch', es: 'la felicitación', ex: 'Herzlichen Glückwunsch zum Geburtstag!', exEs: '¡Feliz cumpleaños!' },
            { de: 'die Karte', es: 'la tarjeta de felicitación', ex: 'Ich schreibe ihr eine Karte.', exEs: 'Le escribo una tarjeta.' },
            { de: 'vorbereiten', es: 'preparar', ex: 'Wir bereiten die Feier gemeinsam vor.', exEs: 'Preparamos la fiesta juntos.' },
            { de: 'einpacken', es: 'envolver', ex: 'Ich packe das Geschenk noch ein.', exEs: 'Todavía tengo que envolver el regalo.' },
            { de: 'die Verwandtschaft', es: 'la parentela', ex: 'Die ganze Verwandtschaft kommt.', exEs: 'Viene toda la parentela.' }
          ]
        },
        {
          thema: 'Feiern & Bräuche',
          items: [
            { de: 'die Tischdecke', es: 'el mantel', ex: 'Die Tischdecke ist aus Leinen.', exEs: 'El mantel es de lino.' },
            { de: 'die Vase', es: 'el jarrón', ex: 'Stell die Blumen bitte in die Vase.', exEs: 'Pon las flores en el jarrón, por favor.' },
            { de: 'der Strauß', es: 'el ramo', ex: 'Der Strauß ist wirklich wunderschön.', exEs: 'El ramo es realmente precioso.' },
            { de: 'das Geschenkpapier', es: 'el papel de regalo', ex: 'Das Geschenkpapier ist schon aus.', exEs: 'Se ha acabado el papel de regalo.' },
            { de: 'die Schleife', es: 'el lazo', ex: 'Mach bitte noch eine Schleife darum.', exEs: 'Ponle un lazo, por favor.' },
            { de: 'anzünden', es: 'encender', ex: 'Wir zünden die Kerzen erst später an.', exEs: 'Encendemos las velas más tarde.' },
            { de: 'der Tanz', es: 'el baile', ex: 'Der erste Tanz war für das Brautpaar.', exEs: 'El primer baile fue para los novios.' },
            { de: 'das Brautpaar', es: 'los novios', ex: 'Das Brautpaar kommt erst um sieben.', exEs: 'Los novios no llegan hasta las siete.' },
            { de: 'der Trauzeuge', es: 'el testigo de boda', ex: 'Mein Bruder ist mein Trauzeuge.', exEs: 'Mi hermano es mi testigo de boda.' },
            { de: 'die Tischordnung', es: 'la distribución de las mesas', ex: 'Die Tischordnung hängt am Eingang.', exEs: 'La distribución de las mesas está en la entrada.' },
            { de: 'der Toast', es: 'el brindis', ex: 'Der Toast auf die Gastgeber war kurz und schön.', exEs: 'El brindis por los anfitriones fue corto y bonito.' },
            { de: 'das Feuerwerk', es: 'los fuegos artificiales', ex: 'Um Mitternacht gibt es ein Feuerwerk.', exEs: 'A medianoche hay fuegos artificiales.' },
            { de: 'der Jahreswechsel', es: 'el cambio de año', ex: 'Den Jahreswechsel feiern wir zu Hause.', exEs: 'El cambio de año lo celebramos en casa.' },
            { de: 'der Adventkranz', es: 'la corona de Adviento', ex: 'Auf dem Adventkranz brennt die zweite Kerze.', exEs: 'En la corona de Adviento arde la segunda vela.' },
            { de: 'der Christbaum', es: 'el árbol de Navidad', ex: 'Der Christbaum steht schon im Wohnzimmer.', exEs: 'El árbol de Navidad ya está en el salón.' },
            { de: 'das Osterei', es: 'el huevo de Pascua', ex: 'Im Garten liegt noch ein Osterei.', exEs: 'En el jardín queda todavía un huevo de Pascua.' },
            { de: 'die Tradition', es: 'la tradición', ex: 'Diese Tradition kenne ich aus Spanien.', exEs: 'Esta tradición la conozco de España.' },
            { de: 'der Brauch', es: 'la costumbre popular', ex: 'Das ist ein sehr alter Brauch in Tirol.', exEs: 'Es una costumbre muy antigua del Tirol.' },
            { de: 'gemeinsam', es: 'juntos, en común', ex: 'Den Abend verbringen wir gemeinsam.', exEs: 'La tarde la pasamos juntos.' },
            { de: 'die Vorfreude', es: 'la ilusión anticipada', ex: 'Die Vorfreude ist oft das Schönste.', exEs: 'La ilusión de esperarlo suele ser lo mejor.' }
          ]
        },
        {
          thema: 'Feste im Jahr',
          items: [
            { de: 'die Gastfreundschaft', es: 'la hospitalidad', ex: 'Die Gastfreundschaft hier ist wirklich groß.', exEs: 'La hospitalidad aquí es muy grande.' },
            { de: 'die Veranstaltung', es: 'el evento', ex: 'Die Veranstaltung beginnt pünktlich um acht.', exEs: 'El evento empieza puntual a las ocho.' },
            { de: 'der Saal', es: 'la sala de fiestas', ex: 'Der Saal ist für hundert Leute gedacht.', exEs: 'La sala es para cien personas.' },
            { de: 'die Kapelle', es: 'la banda de música', ex: 'Die Kapelle spielt alte Lieder.', exEs: 'La banda toca canciones antiguas.' },
            { de: 'der DJ', es: 'el pinchadiscos', ex: 'Der DJ legt bis zwei Uhr auf.', exEs: 'El pinchadiscos pincha hasta las dos.' },
            { de: 'das Gebäck', es: 'los dulces, la bollería', ex: 'Zum Kaffee gibt es frisches Gebäck.', exEs: 'Con el café hay bollería fresca.' },
            { de: 'der Punsch', es: 'el ponche', ex: 'Am Christkindlmarkt trinkt man Punsch.', exEs: 'En el mercado navideño se bebe ponche.' },
            { de: 'der Christkindlmarkt', es: 'el mercado navideño', ex: 'Der Christkindlmarkt öffnet Ende November.', exEs: 'El mercado navideño abre a finales de noviembre.' },
            { de: 'die Bescherung', es: 'el reparto de regalos', ex: 'Die Bescherung ist bei uns um sechs.', exEs: 'En casa el reparto de regalos es a las seis.' },
            { de: 'der Nikolaus', es: 'San Nicolás', ex: 'Am sechsten Dezember kommt der Nikolaus.', exEs: 'El seis de diciembre viene San Nicolás.' },
            { de: 'das Neujahr', es: 'el Año Nuevo', ex: 'Zu Neujahr rufen wir die ganze Familie an.', exEs: 'En Año Nuevo llamamos a toda la familia.' },
            { de: 'der Muttertag', es: 'el Día de la Madre', ex: 'Zum Muttertag schenke ich immer Blumen.', exEs: 'Para el Día de la Madre regalo siempre flores.' },
            { de: 'der Namenstag', es: 'el santo', ex: 'In Spanien feiert man auch den Namenstag.', exEs: 'En España también se celebra el santo.' },
            { de: 'die Gratulation', es: 'la felicitación', ex: 'Herzliche Gratulation zum Jubiläum!', exEs: '¡Felicidades por el aniversario!' },
            { de: 'die Ansprache', es: 'el discurso breve', ex: 'Die Ansprache war zum Glück kurz.', exEs: 'El discurso fue por suerte corto.' },
            { de: 'das Gastgeschenk', es: 'el regalo para el anfitrión', ex: 'Als Gastgeschenk bringe ich immer Wein mit.', exEs: 'Como regalo al anfitrión llevo siempre vino.' },
            { de: 'die Einladungskarte', es: 'la tarjeta de invitación', ex: 'Die Einladungskarte kam gestern per Post.', exEs: 'La tarjeta de invitación llegó ayer por correo.' },
            { de: 'ausgelassen', es: 'desenfadado, animado', ex: 'Die Stimmung war richtig ausgelassen.', exEs: 'El ambiente estaba muy animado.' }
          ]
        },
        {
          thema: 'Gute Wünsche',
          items: [
            { de: 'Alles Gute!', es: '¡Que vaya todo bien!', ex: 'Alles Gute zum Geburtstag!', exEs: '¡Feliz cumpleaños!' },
            { de: 'Frohe Weihnachten!', es: '¡Feliz Navidad!', ex: 'Frohe Weihnachten und einen guten Rutsch!', exEs: '¡Feliz Navidad y buena entrada de año!' },
            { de: 'Frohe Ostern!', es: '¡Felices Pascuas!', ex: 'Frohe Ostern euch allen!', exEs: '¡Felices Pascuas a todos!' },
            { de: 'Gute Besserung!', es: '¡Que te mejores!', ex: 'Gute Besserung, ruh dich aus!', exEs: '¡Que te mejores, descansa!' },
            { de: 'Viel Erfolg!', es: '¡Mucho éxito!', ex: 'Viel Erfolg bei der Prüfung morgen!', exEs: '¡Mucha suerte en el examen de mañana!' },
            { de: 'Guten Rutsch!', es: '¡Feliz entrada de año!', ex: 'Guten Rutsch, wir sehen uns im Jänner!', exEs: '¡Feliz entrada de año, nos vemos en enero!' },
            { de: 'Schöne Feiertage!', es: '¡Felices fiestas!', ex: 'Schöne Feiertage und gute Erholung!', exEs: '¡Felices fiestas y buen descanso!' },
            { de: 'Gute Reise!', es: '¡Buen viaje!', ex: 'Gute Reise und melde dich, wenn du da bist.', exEs: 'Buen viaje y avisa cuando llegues.' },
            { de: 'Viel Spaß!', es: '¡Que te diviertas!', ex: 'Viel Spaß heute Abend auf der Party!', exEs: '¡Que te lo pases bien esta noche en la fiesta!' },
            { de: 'Alles Liebe!', es: '¡Un abrazo, con cariño!', ex: 'Alles Liebe zum Muttertag!', exEs: '¡Felicidades por el día de la madre!' },
            { de: 'Herzliches Beileid!', es: 'Mi más sentido pésame.', ex: 'Herzliches Beileid, es tut mir sehr leid.', exEs: 'Mi más sentido pésame, lo siento mucho.' }
          ]
        },
        {
          thema: 'Einladen & reagieren',
          items: [
            { de: 'annehmen', es: 'aceptar', ex: 'Ich nehme die Einladung gern an.', exEs: 'Acepto la invitación encantado.' },
            { de: 'Bescheid geben', es: 'avisar', ex: 'Gib mir bitte bis Freitag Bescheid.', exEs: 'Avísame antes del viernes, por favor.' },
            { de: 'sich verabreden', es: 'quedar', ex: 'Wir haben uns für Samstag verabredet.', exEs: 'Hemos quedado para el sábado.' },
            { de: 'vorbeikommen', es: 'pasarse', ex: 'Komm doch am Sonntag kurz vorbei.', exEs: 'Pásate un rato el domingo.' },
            { de: 'begleiten', es: 'acompañar', ex: 'Soll ich dich zur Feier begleiten?', exEs: '¿Te acompaño a la fiesta?' },
            { de: 'aufbleiben', es: 'quedarse despierto', ex: 'An Silvester bleiben wir bis früh auf.', exEs: 'En Nochevieja nos quedamos despiertos hasta la madrugada.' },
            { de: 'der Heimweg', es: 'el camino de vuelta a casa', ex: 'Auf dem Heimweg habe ich noch eingekauft.', exEs: 'De camino a casa hice la compra.' },
            { de: 'ein Taxi rufen', es: 'pedir un taxi', ex: 'Um zwei haben wir ein Taxi gerufen.', exEs: 'A las dos pedimos un taxi.' },
            { de: 'sich amüsieren', es: 'pasárselo bien', ex: 'Wir haben uns großartig amüsiert.', exEs: 'Nos lo pasamos genial.' }
          ]
        }
      ],
      grammatik: [
        {
          regel: 'Possessivartikel Nominativ / Akkusativ: sein, ihr',
          erklaerung: '"sein" = de él, "ihr" = de ella. En acusativo masculino: seinen / ihren.',
          beispiele: [
            { de: 'Das ist seine Schwester.', es: 'Esa es su hermana (de él).' },
            { de: 'Sie lädt ihren Chef ein.', es: 'Ella invita a su jefe.' }
          ]
        },
        {
          regel: 'Konjunktion denn',
          erklaerung: '= porque. NO cambia el orden: sujeto + verbo normal (a diferencia de "weil").',
          beispiele: [
            { de: 'Ich komme später, denn ich muss noch arbeiten.', es: 'Llego más tarde, porque todavía tengo que trabajar.' }
          ]
        },
        {
          key: 'dativ-bei-gratulieren-danken',
          regel: 'gratulieren und danken + Dativ',
          erklaerung: 'A quien felicitas o das las gracias va en DATIVO, aunque en español sea complemento directo: Ich gratuliere DIR. Ich danke IHNEN. Igual que gefallen, helfen y gehören.',
          beispiele: [
            { de: 'Ich gratuliere dir zum Geburtstag!', es: '¡Te felicito por tu cumpleaños!' },
            { de: 'Wir danken Ihnen für die Einladung.', es: 'Le agradecemos la invitación.' }
          ]
        },
        {
          key: 'praeposition-zu-bei-anlaessen',
          regel: 'zu + Anlass',
          erklaerung: 'Las felicitaciones llevan zu + dativo para decir por qué motivo: zum Geburtstag, zur Hochzeit, zum neuen Job. Y las fiestas del año llevan zu o an: zu Weihnachten, zu Ostern.',
          beispiele: [
            { de: 'Alles Gute zum Geburtstag!', es: '¡Felicidades por tu cumpleaños!' },
            { de: 'Zu Weihnachten fahren wir zu meinen Eltern.', es: 'Por Navidad vamos a casa de mis padres.' }
          ]
        },
        {
          key: 'moechten-anbieten-nehmen',
          regel: 'Anbieten und annehmen',
          erklaerung: 'Para ofrecer se usa una pregunta con Möchten Sie…? o Nehmen Sie…?, y se contesta con gern, bitte o danke a secas. Ojo: danke solo, sin más, significa NO gracias. Para decir que sí hay que añadir gern o ja, bitte.',
          beispiele: [
            { de: 'Möchten Sie noch ein Stück Kuchen?', es: '¿Quiere otro trozo de tarta?' },
            { de: 'Ja, gern, aber nur ein kleines.', es: 'Sí, gracias, pero pequeño.' }
          ]
        },
        {
          key: 'wortstellung-nebensatz-wdh',
          regel: 'Nebensatz: das Verb ganz hinten',
          erklaerung: 'En toda subordinada (weil, dass, wenn, ob, obwohl) el verbo conjugado se va AL FINAL. Si hay dos verbos, el conjugado va el último de todos: …, weil ich nicht kommen KANN.',
          beispiele: [
            { de: 'Schade, dass du nicht kommen kannst.', es: 'Qué pena que no puedas venir.' },
            { de: 'Ich freue mich, weil alle da sind.', es: 'Me alegro porque están todos.' }
          ]
        },
        {
          key: 'obwohl-gegensatz',
          regel: 'obwohl: der Gegensatz',
          erklaerung: 'obwohl = aunque. Es subordinada, así que el verbo se va al final. Dice lo mismo que trotzdem, pero al revés en el orden: OBWOHL es spät war, sind wir geblieben = Es war spät, TROTZDEM sind wir geblieben.',
          beispiele: [
            { de: 'Obwohl es spät war, sind wir geblieben.', es: 'Aunque era tarde, nos quedamos.' },
            { de: 'Er ist gekommen, obwohl er krank war.', es: 'Vino aunque estaba enfermo.' }
          ]
        },
        {
          key: 'aussprache-satzakzent',
          regel: 'Satzakzent: das wichtigste Wort',
          erklaerung: 'En cada frase hay una palabra que se dice más fuerte, y es la que lleva la información nueva. Cambiar el acento cambia el sentido: ICH komme morgen (yo, no otro) / Ich komme MORGEN (mañana, no hoy).',
          beispiele: [
            { de: 'Ich komme morgen, nicht heute.', es: 'Vengo mañana, no hoy.' },
            { de: 'Das Geschenk ist für dich, nicht für mich.', es: 'El regalo es para ti, no para mí.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'über Feste und Bräuche berichten',
          es: 'Hablar de fiestas y tradiciones',
          wendungen: [
            { de: 'Bei uns feiert man Weihnachten am 24.', es: 'Nosotros celebramos la Navidad el 24.' },
            { de: 'Bei uns isst man am 24. erst spät am Abend.', es: 'Donde yo vivo el día 24 se cena tarde.' },
            { de: 'In Spanien feiert man bis in die Nacht.', es: 'En España se celebra hasta la madrugada.' },
            { de: 'Zu Ostern versteckt man bei uns Eier.', es: 'En Pascua en mi tierra se esconden huevos.' },
            { de: 'Normalerweise bringt man Blumen oder Wein mit.', es: 'Normalmente se llevan flores o vino.' },
            { de: 'Bei uns gratuliert man nicht vor dem Geburtstag.', es: 'En mi tierra no se felicita antes del cumpleaños.' },
            { de: 'Silvester verbringen wir immer zu Hause.', es: 'La Nochevieja siempre la pasamos en casa.' },
            { de: 'Bei uns gibt es zu Silvester ein Feuerwerk im Dorf.', es: 'En mi pueblo hay fuegos artificiales en Nochevieja.' },
            { de: 'Den Christbaum schmücken wir erst am Vierundzwanzigsten.', es: 'El árbol lo decoramos el veinticuatro.' },
            { de: 'Feiert ihr Geburtstage immer so groß?', es: '¿Siempre celebráis los cumpleaños a lo grande?' }
          ]
        },
        {
          funktion: 'eine Einladung aussprechen',
          es: 'Hacer una invitación',
          wendungen: [
            { de: 'Ich lade dich zu meinem Geburtstag ein.', es: 'Te invito a mi cumpleaños.' },
            { de: 'Passt dir Samstag um acht?', es: '¿Te va bien el sábado a las ocho?' },
            { de: 'Ich feiere am Samstag, kommst du?', es: 'Lo celebro el sábado, ¿vienes?' },
            { de: 'Kommst du zur Hochzeit im Juni?', es: '¿Vienes a la boda de junio?' },
            { de: 'Kommst du zur Taufe am Sonntag?', es: '¿Vienes al bautizo del domingo?' },
            { de: 'Wir feiern unser Jubiläum im September.', es: 'Celebramos nuestro aniversario en septiembre.' },
            { de: 'Wir würden uns sehr freuen, wenn du kommst.', es: 'Nos encantaría que vinieras.' },
            { de: 'Wollen wir uns für Samstag etwas ausmachen?', es: '¿Quedamos para el sábado?' },
            { de: 'Passt dir 19 Uhr?', es: '¿Te va bien a las 19?' },
            { de: 'Machen wir uns für Freitag etwas aus?', es: '¿Quedamos para el viernes?' }
          ]
        },
        {
          funktion: 'auf eine Einladung reagieren',
          es: 'Responder a una invitación',
          wendungen: [
            { de: 'Sehr gern, ich komme!', es: '¡Con mucho gusto, voy!' },
            { de: 'Leider kann ich nicht.', es: 'Lo siento, no puedo.' },
            { de: 'Soll ich etwas mitbringen?', es: '¿Llevo algo?' },
            { de: 'Kann ich etwas beisteuern?', es: '¿Puedo aportar algo?' },
            { de: 'Leider kann ich am Samstag nicht.', es: 'El sábado no puedo.' },
            { de: 'Darf ich jemanden mitbringen?', es: '¿Puedo llevar a alguien?' },
            { de: 'Um wie viel Uhr soll ich da sein?', es: '¿A qué hora tengo que estar allí?' },
            { de: 'Vielen Dank für die Einladung!', es: '¡Muchas gracias por la invitación!' },
            { de: 'Muss ich mich verkleiden?', es: '¿Tengo que disfrazarme?' },
            { de: 'Ich sage dir bis Mittwoch Bescheid.', es: 'Te confirmo antes del miércoles.' }
          ]
        },
        {
          funktion: 'Treffen vereinbaren und abstimmen',
          es: 'Acordar y coordinar un encuentro',
          wendungen: [
            { de: 'Wo machen wir uns aus?', es: '¿Dónde nos vemos?' },
            { de: 'Bleibt es bei unserer Ausmachung?', es: '¿Sigue en pie lo que quedamos?' },
            { de: 'Können wir das auf nächsten Monat verschieben?', es: '¿Podemos pasarlo al mes que viene?' },
            { de: 'Ich melde mich am Vortag noch einmal.', es: 'Te aviso otra vez el día antes.' },
            { de: 'Machen wir uns für den Jahreswechsel etwas aus?', es: '¿Quedamos en algo para Nochevieja?' },
            { de: 'Passt es dir, wenn wir gemeinsam hinfahren?', es: '¿Te va bien si vamos juntos?' },
            { de: 'Passt es dir, wenn wir es so ausmachen?', es: '¿Te parece bien si lo dejamos así?' },
            { de: 'Wir haben uns für halb acht ausgemacht.', es: 'Hemos quedado a las siete y media.' },
            { de: 'Bring bitte nichts mit, wir haben alles.', es: 'No traigas nada, tenemos de todo.' },
            { de: 'Wir müssen leider kurzfristig absagen.', es: 'Tenemos que cancelar a última hora.' }
          ]
        },
        {
          funktion: 'ein Kompliment machen',
          es: 'Hacer un cumplido',
          wendungen: [
            { de: 'Das sieht toll aus!', es: '¡Tiene una pinta estupenda!' },
            { de: 'Das schmeckt super!', es: '¡Está buenísimo!' },
            { de: 'Die Wohnung sieht wunderschön aus!', es: '¡El piso está precioso!' },
            { de: 'Das Essen schmeckt fantastisch.', es: 'La comida está buenísima.' },
            { de: 'Du hast das toll organisiert.', es: 'Lo has organizado estupendamente.' },
            { de: 'Deine Rede war wirklich schön.', es: 'Tu discurso ha sido muy bonito.' },
            { de: 'Der Kuchen ist der beste, den ich kenne.', es: 'Es la mejor tarta que conozco.' },
            { de: 'Du siehst heute richtig gut aus.', es: 'Hoy estás muy guapo.' },
            { de: 'Die Tischdecke und die Kerzen sehen festlich aus.', es: 'El mantel y las velas dan un aire de fiesta.' },
            { de: 'Das Kleid steht dir ausgezeichnet.', es: 'El vestido te queda excelente.' }
          ]
        },
        {
          funktion: 'Essen und Trinken anbieten',
          es: 'Ofrecer comida y bebida',
          wendungen: [
            { de: 'Möchtest du noch etwas?', es: '¿Quieres un poco más?' },
            { de: 'Nimm dir doch! · Greif zu!', es: '¡Sírvete! · ¡Coge!' },
            { de: 'Möchtest du noch ein Stück Torte?', es: '¿Quieres otro trozo de tarta?' },
            { de: 'Greif bitte zu, es ist genug da!', es: '¡Sírvete, hay de sobra!' },
            { de: 'Was möchtest du trinken?', es: '¿Qué quieres beber?' },
            { de: 'Soll ich dir nachschenken?', es: '¿Te sirvo más?' },
            { de: 'Nimm dir doch noch etwas Salat.', es: 'Sírvete más ensalada.' },
            { de: 'Magst du einen Kaffee zum Kuchen?', es: '¿Quieres un café con la tarta?' },
            { de: 'Stoßen wir gemeinsam an?', es: '¿Brindamos juntos?' },
            { de: 'Vom Buffet ist noch viel übrig.', es: 'Del bufé queda todavía mucho.' }
          ]
        },
        {
          funktion: 'sich entschuldigen und Fehler eingestehen',
          es: 'Disculparse y admitir un error',
          wendungen: [
            { de: 'Entschuldige die Verspätung!', es: '¡Perdona el retraso!' },
            { de: 'Tut mir leid, der Bus hatte Verspätung.', es: 'Lo siento, el bus venía con retraso.' },
            { de: 'Tut mir leid, ich habe es völlig vergessen.', es: 'Lo siento, se me ha olvidado por completo.' },
            { de: 'Entschuldigung, das war nicht so gemeint.', es: 'Perdona, no lo decía en ese sentido.' },
            { de: 'Es tut mir leid, dass ich nicht geantwortet habe.', es: 'Siento no haber contestado.' },
            { de: 'Verzeihung, ich habe Sie unterbrochen.', es: 'Disculpe, le he interrumpido.' },
            { de: 'Das war mein Fehler, ich mache es neu.', es: 'Fue error mío, lo hago otra vez.' },
            { de: 'Entschuldige, ich habe das Geschenk vergessen.', es: 'Perdona, se me ha olvidado el regalo.' },
            { de: 'Es tut mir leid, dass wir so spät gratulieren.', es: 'Sentimos felicitar tan tarde.' },
            { de: 'Entschuldige, dass ich mich nicht gemeldet habe.', es: 'Perdona que no te haya escrito.' }
          ]
        },
        {
          funktion: 'Gäste vorstellen und beschreiben',
          es: 'Presentar y describir a los invitados',
          wendungen: [
            { de: 'Das ist Pekka. Er kommt aus Finnland.', es: 'Este es Pekka. Es de Finlandia.' },
            { de: 'Sie ist sehr nett und hilfsbereit.', es: 'Ella es muy simpática y servicial.' },
            { de: 'Das ist Pekka, er arbeitet mit mir im Labor.', es: 'Este es Pekka, trabaja conmigo en el laboratorio.' },
            { de: 'Sie ist sehr hilfsbereit und immer gut gelaunt.', es: 'Es muy servicial y siempre está de buen humor.' },
            { de: 'Mein Bruder ist ziemlich ruhig.', es: 'Mi hermano es bastante callado.' },
            { de: 'Sie kommt aus Rumänien und lebt seit zehn Jahren hier.', es: 'Es de Rumanía y vive aquí desde hace diez años.' },
            { de: 'Er ist der Gastgeber und hat alles vorbereitet.', es: 'Él es el anfitrión y lo ha preparado todo.' },
            { de: 'Wir kennen uns schon aus der Schule.', es: 'Nos conocemos ya del colegio.' },
            { de: 'Das ist Jonas, mein Trauzeuge.', es: 'Este es Jonas, mi testigo de boda.' },
            { de: 'Sie hat das ganze Fest organisiert.', es: 'Ella ha organizado toda la fiesta.' }
          ]
        }
      ]
    }
  ]
};
