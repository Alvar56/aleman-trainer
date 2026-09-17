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
            { de: 'gehen', es: 'ir (a pie)' },
            { de: 'kommen', es: 'venir' },
            { de: 'laufen', es: 'correr / andar' },
            { de: 'fahren', es: 'ir (en vehículo)' },
            { de: 'fliegen', es: 'volar' },
            { de: 'ankommen', es: 'llegar' },
            { de: 'abfahren', es: 'salir (un transporte)' },
            { de: 'umsteigen', es: 'hacer transbordo' },
            { de: 'zurückkommen', es: 'volver' }
          ]
        },
        {
          thema: 'Stimmung',
          items: [
            { de: 'fröhlich', es: 'alegre' },
            { de: 'traurig', es: 'triste' },
            { de: 'müde', es: 'cansado/a' },
            { de: 'nervös', es: 'nervioso/a' },
            { de: 'ruhig', es: 'tranquilo/a' },
            { de: 'gestresst', es: 'estresado/a' },
            { de: 'zufrieden', es: 'satisfecho/a' },
            { de: 'wütend', es: 'enfadado/a' }
          ]
        },
        {
          thema: 'Orte',
          items: [
            { de: 'die Arbeit', es: 'el trabajo' },
            { de: 'die Schule', es: 'la escuela' },
            { de: 'der Kurs', es: 'el curso' },
            { de: 'das Büro', es: 'la oficina' },
            { de: 'der Park', es: 'el parque' },
            { de: 'der Supermarkt', es: 'el supermercado' },
            { de: 'das Krankenhaus / das Spital (AT)', es: 'el hospital' },
            { de: 'die Uni', es: 'la universidad' }
          ]
        },
        {
          thema: 'Zeitangaben und Jahreszahlen',
          items: [
            { de: 'gestern / vorgestern', es: 'ayer / anteayer' },
            { de: 'letzte Woche', es: 'la semana pasada' },
            { de: 'letztes Jahr', es: 'el año pasado' },
            { de: 'vor zwei Jahren', es: 'hace dos años' },
            { de: '1998 = neunzehnhundertachtundneunzig', es: 'año 1998' },
            { de: '2015 = zweitausendfünfzehn', es: 'año 2015' }
          ]
        },
        {
          thema: 'Längenangaben',
          items: [
            { de: 'der Meter / der Kilometer', es: 'el metro / el kilómetro' },
            { de: 'lang / kurz', es: 'largo / corto' },
            { de: 'weit', es: 'lejos' },
            { de: 'in der Nähe', es: 'cerca' }
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
        }
      ],
      kommunikation: [
        {
          funktion: 'über Vergangenes berichten',
          wendungen: [
            { de: 'Wie war dein Tag? – Ganz gut, danke.', es: '¿Qué tal tu día? – Bastante bien, gracias.' },
            { de: 'Zuerst habe ich … und dann bin ich …', es: 'Primero he … y luego he …' }
          ]
        },
        {
          funktion: 'Interesse / Erstaunen signalisieren',
          wendungen: [
            { de: 'Echt? · Wirklich? · Ach so!', es: '¿En serio? · ¿De verdad? · ¡Ah, vale!' },
            { de: 'Das ist ja interessant!', es: '¡Qué interesante!' }
          ]
        },
        {
          funktion: 'Smalltalk',
          wendungen: [
            { de: 'Wie war dein Wochenende?', es: '¿Qué tal el fin de semana?' },
            { de: 'Schönes Wetter heute, oder?', es: 'Buen tiempo hoy, ¿no?' }
          ]
        },
        {
          funktion: 'über Lebensstationen und Migrationserfahrung sprechen',
          wendungen: [
            { de: '2015 bin ich nach Österreich gekommen.', es: 'En 2015 vine a Austria.' },
            { de: 'Am Anfang war alles neu für mich.', es: 'Al principio todo era nuevo para mí.' }
          ]
        },
        {
          funktion: 'signalisieren, dass man nicht sprechen möchte',
          wendungen: [
            { de: 'Ich möchte lieber nicht darüber sprechen.', es: 'Prefiero no hablar de eso.' },
            { de: 'Entschuldigung, ich habe es eilig.', es: 'Perdona, tengo prisa.' }
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
            { de: 'das Rathaus', es: 'el ayuntamiento' },
            { de: 'die Post', es: 'la oficina de correos' },
            { de: 'die Bank', es: 'el banco' },
            { de: 'die Apotheke', es: 'la farmacia' },
            { de: 'der Bahnhof', es: 'la estación de tren' },
            { de: 'die Bibliothek', es: 'la biblioteca' },
            { de: 'das Museum', es: 'el museo' },
            { de: 'der Markt', es: 'el mercado' },
            { de: 'die Kirche', es: 'la iglesia' },
            { de: 'das Amt', es: 'la oficina pública' }
          ]
        },
        {
          thema: 'Verkehrsmittel',
          items: [
            { de: 'der Bus', es: 'el autobús' },
            { de: 'die Straßenbahn / die Bim (AT)', es: 'el tranvía' },
            { de: 'die U-Bahn', es: 'el metro' },
            { de: 'der Zug', es: 'el tren' },
            { de: 'das Auto', es: 'el coche' },
            { de: 'das Fahrrad / das Rad', es: 'la bicicleta' },
            { de: 'das Taxi', es: 'el taxi' },
            { de: 'zu Fuß', es: 'a pie' }
          ]
        },
        {
          thema: 'öffentlicher Nahverkehr',
          items: [
            { de: 'die Haltestelle', es: 'la parada' },
            { de: 'die Station', es: 'la estación' },
            { de: 'die Linie', es: 'la línea' },
            { de: 'die Fahrkarte / das Ticket', es: 'el billete' },
            { de: 'einsteigen / aussteigen / umsteigen', es: 'subir / bajar / hacer transbordo' },
            { de: 'der Fahrplan', es: 'el horario' }
          ]
        },
        {
          thema: 'Richtungsangaben',
          items: [
            { de: 'geradeaus', es: 'todo recto' },
            { de: 'nach links / nach rechts', es: 'a la izquierda / a la derecha' },
            { de: 'an der Ecke', es: 'en la esquina' },
            { de: 'über die Straße', es: 'al otro lado de la calle' },
            { de: 'bis zur Kreuzung', es: 'hasta el cruce' },
            { de: 'die erste Straße links', es: 'la primera calle a la izquierda' }
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
        }
      ],
      kommunikation: [
        {
          funktion: 'nach dem Weg fragen und den Fußweg beschreiben',
          wendungen: [
            { de: 'Entschuldigung, wie komme ich zum Rathaus?', es: 'Perdone, ¿cómo llego al ayuntamiento?' },
            { de: 'Gehen Sie geradeaus und dann die zweite Straße rechts.', es: 'Vaya todo recto y luego la segunda a la derecha.' },
            { de: 'Ist es weit von hier? – Nein, fünf Minuten zu Fuß.', es: '¿Está lejos? – No, cinco minutos a pie.' }
          ]
        },
        {
          funktion: 'den Weg im Nahverkehr beschreiben',
          wendungen: [
            { de: 'Nehmen Sie die U3 und steigen Sie bei Stephansplatz um.', es: 'Coja la U3 y haga transbordo en Stephansplatz.' },
            { de: 'Sie müssen drei Stationen fahren.', es: 'Tiene que ir tres paradas.' }
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
            { de: 'die Wohnung', es: 'el piso' },
            { de: 'die Miete', es: 'el alquiler' },
            { de: 'die Kaution', es: 'la fianza' },
            { de: 'die Betriebskosten', es: 'los gastos comunes' },
            { de: 'möbliert', es: 'amueblado' },
            { de: 'frei ab', es: 'disponible desde' }
          ]
        },
        {
          thema: 'Wohnhaus und Zimmer',
          items: [
            { de: 'das Wohnzimmer', es: 'el salón' },
            { de: 'das Schlafzimmer', es: 'el dormitorio' },
            { de: 'die Küche', es: 'la cocina' },
            { de: 'das Bad', es: 'el baño' },
            { de: 'der Flur / der Vorraum (AT)', es: 'el pasillo / recibidor' },
            { de: 'der Balkon', es: 'el balcón' },
            { de: 'der Keller', es: 'el sótano' },
            { de: 'der Lift (AT) / der Aufzug', es: 'el ascensor' }
          ]
        },
        {
          thema: 'Einrichtung und Möbel',
          items: [
            { de: 'das Bett', es: 'la cama' },
            { de: 'der Schrank', es: 'el armario' },
            { de: 'das Sofa', es: 'el sofá' },
            { de: 'der Sessel', es: 'el sillón' },
            { de: 'das Regal', es: 'la estantería' },
            { de: 'der Teppich', es: 'la alfombra' },
            { de: 'die Lampe', es: 'la lámpara' },
            { de: 'der Spiegel', es: 'el espejo' }
          ]
        },
        {
          thema: 'Elektrogeräte',
          items: [
            { de: 'der Kühlschrank', es: 'la nevera' },
            { de: 'der Herd', es: 'la cocina (fogones)' },
            { de: 'die Waschmaschine', es: 'la lavadora' },
            { de: 'der Geschirrspüler', es: 'el lavavajillas' },
            { de: 'die Mikrowelle', es: 'el microondas' },
            { de: 'der Fernseher', es: 'la tele' },
            { de: 'der Staubsauger', es: 'la aspiradora' }
          ]
        },
        {
          thema: 'Adjektive zur Beschreibung',
          items: [
            { de: 'groß / klein', es: 'grande / pequeño' },
            { de: 'hell / dunkel', es: 'luminoso / oscuro' },
            { de: 'modern / alt', es: 'moderno / viejo' },
            { de: 'gemütlich', es: 'acogedor' },
            { de: 'ruhig / laut', es: 'tranquilo / ruidoso' },
            { de: 'günstig / teuer', es: 'económico / caro' }
          ]
        },
        {
          thema: 'Maßangaben',
          items: [
            { de: 'der Quadratmeter (m²)', es: 'el metro cuadrado' },
            { de: 'der Stock / die Etage', es: 'la planta' },
            { de: 'die Größe', es: 'el tamaño' }
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
        }
      ],
      kommunikation: [
        {
          funktion: 'über die Wohnung sprechen',
          wendungen: [
            { de: 'Die Wohnung hat 60 m² und zwei Zimmer.', es: 'El piso tiene 60 m² y dos habitaciones.' },
            { de: 'Wie hoch ist die Miete?', es: '¿Cuánto es el alquiler?' }
          ]
        },
        {
          funktion: 'Auskunft über Wohnung / Haus geben',
          wendungen: [
            { de: 'Die Küche ist klein, aber hell.', es: 'La cocina es pequeña, pero luminosa.' },
            { de: 'Sie liegt im dritten Stock.', es: 'Está en la tercera planta.' }
          ]
        },
        {
          funktion: 'Gefallen / Missfallen ausdrücken',
          wendungen: [
            { de: 'Das gefällt mir (nicht).', es: 'Eso (no) me gusta.' },
            { de: 'Ich finde das Zimmer sehr gemütlich.', es: 'La habitación me parece muy acogedora.' }
          ]
        },
        {
          funktion: 'nach Möbeln / Produkten fragen',
          wendungen: [
            { de: 'Haben Sie auch Regale?', es: '¿Tienen también estanterías?' },
            { de: 'Was kostet dieser Schrank?', es: '¿Cuánto cuesta este armario?' }
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
            { de: 'telefonieren', es: 'hablar por teléfono' },
            { de: 'eine E-Mail schreiben', es: 'escribir un correo' },
            { de: 'kopieren', es: 'fotocopiar' },
            { de: 'ausdrucken', es: 'imprimir' },
            { de: 'ein Formular ausfüllen', es: 'rellenar un formulario' },
            { de: 'unterschreiben', es: 'firmar' },
            { de: 'einen Termin vereinbaren', es: 'concertar una cita' }
          ]
        },
        {
          thema: 'Behörden und Anträge',
          items: [
            { de: 'das Amt / die Behörde', es: 'la oficina pública / la administración' },
            { de: 'der Antrag', es: 'la solicitud' },
            { de: 'das Formular', es: 'el formulario' },
            { de: 'der Ausweis', es: 'el documento de identidad' },
            { de: 'der Reisepass', es: 'el pasaporte' },
            { de: 'die Meldebestätigung (AT)', es: 'el certificado de empadronamiento' },
            { de: 'die Anmeldung', es: 'el alta / la inscripción' },
            { de: 'die Gebühr', es: 'la tasa' }
          ]
        },
        {
          thema: 'formeller Brief',
          items: [
            { de: 'Sehr geehrte Damen und Herren,', es: 'Estimados señores:' },
            { de: 'Mit freundlichen Grüßen', es: 'Atentamente' },
            { de: 'der Betreff', es: 'el asunto' },
            { de: 'die Anlage / der Anhang', es: 'el archivo adjunto' }
          ]
        },
        {
          thema: 'Geschlecht und Nationalitäten',
          items: [
            { de: 'männlich / weiblich / divers', es: 'masculino / femenino / diverso' },
            { de: 'österreichisch', es: 'austriaco/a' },
            { de: 'deutsch', es: 'alemán/a' },
            { de: 'spanisch', es: 'español/a' },
            { de: 'türkisch', es: 'turco/a' },
            { de: 'polnisch', es: 'polaco/a' },
            { de: 'syrisch', es: 'sirio/a' }
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
        }
      ],
      kommunikation: [
        {
          funktion: 'sich informieren und um Hilfe bitten (Amt)',
          wendungen: [
            { de: 'Ich habe eine Frage: Wo muss ich das abgeben?', es: 'Tengo una pregunta: ¿dónde tengo que entregarlo?' },
            { de: 'Können Sie mir bitte helfen?', es: '¿Me puede ayudar, por favor?' }
          ]
        },
        {
          funktion: 'ein formelles Telefonat beenden',
          wendungen: [
            { de: 'Vielen Dank für Ihre Hilfe.', es: 'Muchas gracias por su ayuda.' },
            { de: 'Auf Wiederhören!', es: '¡Hasta luego! (por teléfono)' }
          ]
        },
        {
          funktion: 'um Erlaubnis bitten / Erlaubnis und Verbot aussprechen',
          wendungen: [
            { de: 'Darf ich hier parken?', es: '¿Puedo aparcar aquí?' },
            { de: 'Ja, das dürfen Sie. / Nein, das ist verboten.', es: 'Sí, puede. / No, está prohibido.' }
          ]
        },
        {
          funktion: 'Auskunft über Gewohnheiten geben',
          wendungen: [
            { de: 'Normalerweise arbeite ich bis 17 Uhr.', es: 'Normalmente trabajo hasta las 17.' }
          ]
        },
        {
          funktion: 'Vorschläge machen und darauf reagieren',
          wendungen: [
            { de: 'Sollen wir das zusammen machen?', es: '¿Lo hacemos juntos?' },
            { de: 'Ja, gern. / Lieber nicht.', es: 'Sí, con gusto. / Mejor no.' }
          ]
        },
        {
          funktion: 'schriftliche Anträge stellen',
          wendungen: [
            { de: 'Hiermit beantrage ich …', es: 'Por la presente solicito …' },
            { de: 'Ich bitte um eine Bestätigung.', es: 'Ruego un justificante.' }
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
            { de: 'der Unfall', es: 'el accidente' },
            { de: 'die Ampel', es: 'el semáforo' },
            { de: 'der Zebrastreifen', es: 'el paso de cebra' },
            { de: 'vorsichtig', es: 'con cuidado' },
            { de: 'schnell / langsam', es: 'rápido / despacio' },
            { de: 'der Helm', es: 'el casco' },
            { de: 'der Gurt', es: 'el cinturón' }
          ]
        },
        {
          thema: 'Körperteile',
          items: [
            { de: 'der Kopf', es: 'la cabeza' },
            { de: 'das Auge', es: 'el ojo' },
            { de: 'das Ohr', es: 'la oreja' },
            { de: 'die Nase', es: 'la nariz' },
            { de: 'der Mund', es: 'la boca' },
            { de: 'der Zahn', es: 'el diente' },
            { de: 'der Hals', es: 'el cuello / la garganta' },
            { de: 'der Arm / die Hand', es: 'el brazo / la mano' },
            { de: 'der Bauch', es: 'la barriga' },
            { de: 'der Rücken', es: 'la espalda' },
            { de: 'das Bein / der Fuß', es: 'la pierna / el pie' },
            { de: 'das Knie', es: 'la rodilla' }
          ]
        },
        {
          thema: 'Krankheiten und Schmerzen',
          items: [
            { de: 'die Erkältung', es: 'el resfriado' },
            { de: 'die Grippe', es: 'la gripe' },
            { de: 'das Fieber', es: 'la fiebre' },
            { de: 'der Husten', es: 'la tos' },
            { de: 'der Schnupfen', es: 'el catarro' },
            { de: 'die Kopfschmerzen', es: 'el dolor de cabeza' },
            { de: 'die Halsschmerzen', es: 'el dolor de garganta' },
            { de: 'krank / gesund', es: 'enfermo / sano' },
            { de: 'wehtun', es: 'doler' }
          ]
        },
        {
          thema: 'beim Arzt',
          items: [
            { de: 'die Ordination (AT) / die Praxis', es: 'la consulta' },
            { de: 'der Termin', es: 'la cita' },
            { de: 'die Untersuchung', es: 'el reconocimiento' },
            { de: 'das Rezept', es: 'la receta' },
            { de: 'das Medikament / die Tablette', es: 'el medicamento / la pastilla' },
            { de: 'die Krankmeldung', es: 'la baja médica' },
            { de: 'die E-Card (AT)', es: 'la tarjeta sanitaria' }
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
        }
      ],
      kommunikation: [
        {
          funktion: 'Warnungen und höfliche Aufforderungen',
          wendungen: [
            { de: 'Vorsicht! · Pass auf!', es: '¡Cuidado! · ¡Ten cuidado!' },
            { de: 'Nehmen Sie bitte Platz.', es: 'Tome asiento, por favor.' }
          ]
        },
        {
          funktion: 'Schmerzen beschreiben',
          wendungen: [
            { de: 'Mein Kopf tut weh.', es: 'Me duele la cabeza.' },
            { de: 'Ich habe Halsschmerzen und Fieber.', es: 'Tengo dolor de garganta y fiebre.' }
          ]
        },
        {
          funktion: 'über das Befinden sprechen und Mitgefühl ausdrücken',
          wendungen: [
            { de: 'Wie geht es dir? – Nicht so gut.', es: '¿Cómo estás? – No muy bien.' },
            { de: 'Gute Besserung! · Das tut mir leid.', es: '¡Que te mejores! · Lo siento.' }
          ]
        },
        {
          funktion: 'um Rat fragen und Ratschläge geben',
          wendungen: [
            { de: 'Was soll ich tun?', es: '¿Qué hago?' },
            { de: 'Du solltest zum Arzt gehen.', es: 'Deberías ir al médico.' }
          ]
        },
        {
          funktion: 'eine Krankmeldung schreiben',
          wendungen: [
            { de: 'Ich bin krank und kann heute nicht kommen.', es: 'Estoy enfermo y hoy no puedo ir.' },
            { de: 'Die Bestätigung schicke ich Ihnen morgen.', es: 'Le envío el justificante mañana.' }
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
            { de: 'die Hose', es: 'el pantalón' },
            { de: 'das Hemd', es: 'la camisa' },
            { de: 'die Bluse', es: 'la blusa' },
            { de: 'der Rock', es: 'la falda' },
            { de: 'das Kleid', es: 'el vestido' },
            { de: 'der Pullover', es: 'el jersey' },
            { de: 'die Jacke', es: 'la chaqueta' },
            { de: 'der Mantel', es: 'el abrigo' },
            { de: 'die Schuhe', es: 'los zapatos' },
            { de: 'die Socken', es: 'los calcetines' },
            { de: 'der Schal / die Mütze', es: 'la bufanda / el gorro' },
            { de: 'die Größe', es: 'la talla' }
          ]
        },
        {
          thema: 'Dienstleistungen und Geschäfte',
          items: [
            { de: 'das Geschäft / der Laden', es: 'la tienda' },
            { de: 'die Reinigung', es: 'la tintorería' },
            { de: 'die Reparatur', es: 'la reparación' },
            { de: 'der Friseur', es: 'la peluquería' },
            { de: 'umtauschen', es: 'cambiar (un producto)' },
            { de: 'reklamieren', es: 'reclamar' },
            { de: 'die Rechnung', es: 'la factura' },
            { de: 'der Kassenbon', es: 'el tique' }
          ]
        },
        {
          thema: 'Datum und Termine',
          items: [
            { de: 'das Datum', es: 'la fecha' },
            { de: 'Der Wievielte ist heute?', es: '¿A cuántos estamos hoy?' },
            { de: 'am ersten Mai', es: 'el uno de mayo' },
            { de: 'vom 3. bis zum 10. Juni', es: 'del 3 al 10 de junio' }
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
          regel: 'Ordinalzahlen: Datum',
          erklaerung: '1.–19. → -te (der dritte), a partir de 20. → -ste (der zwanzigste). Con fecha: "am" + -ten.',
          beispiele: [
            { de: 'Heute ist der fünfte Mai.', es: 'Hoy es cinco de mayo.' },
            { de: 'Ich habe am zwanzigsten Juni Geburtstag.', es: 'Cumplo años el veinte de junio.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'über Kleidung sprechen',
          wendungen: [
            { de: 'Ich suche eine Hose in Größe 40.', es: 'Busco un pantalón de la talla 40.' },
            { de: 'Kann ich das anprobieren?', es: '¿Me lo puedo probar?' }
          ]
        },
        {
          funktion: 'Gefallen / Missfallen ausdrücken',
          wendungen: [
            { de: 'Das steht dir gut!', es: '¡Te queda bien!' },
            { de: 'Die Farbe gefällt mir nicht.', es: 'El color no me gusta.' }
          ]
        },
        {
          funktion: 'Vorlieben und Vergleiche ausdrücken',
          wendungen: [
            { de: 'Ich mag lieber die blaue Jacke.', es: 'Prefiero la chaqueta azul.' },
            { de: 'Die ist billiger als die andere.', es: 'Esa es más barata que la otra.' }
          ]
        },
        {
          funktion: 'Wünsche äußern und darauf reagieren',
          wendungen: [
            { de: 'Ich hätte gern einen Termin.', es: 'Quisiera una cita.' },
            { de: 'Gern, wann passt es Ihnen?', es: 'Claro, ¿cuándo le va bien?' }
          ]
        },
        {
          funktion: 'Kunden- und Dienstleistungsgespräche',
          wendungen: [
            { de: 'Ich möchte das umtauschen. Hier ist der Kassenbon.', es: 'Quiero cambiar esto. Aquí está el tique.' },
            { de: 'Wann ist es fertig?', es: '¿Cuándo estará listo?' }
          ]
        },
        {
          funktion: 'Meinung äußern und begründen',
          wendungen: [
            { de: 'Ich finde das zu teuer.', es: 'Me parece demasiado caro.' },
            { de: 'Das schaffen wir!', es: '¡Esto lo conseguimos!' }
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
            { de: 'das Handy', es: 'el móvil' },
            { de: 'die App', es: 'la aplicación' },
            { de: 'das Internet', es: 'internet' },
            { de: 'die Webseite', es: 'la página web' },
            { de: 'das Passwort', es: 'la contraseña' },
            { de: 'das Konto', es: 'la cuenta' },
            { de: 'herunterladen', es: 'descargar' },
            { de: 'installieren', es: 'instalar' },
            { de: 'speichern / löschen', es: 'guardar / borrar' },
            { de: 'der Akku / das Ladegerät', es: 'la batería / el cargador' }
          ]
        },
        {
          thema: 'Reisen',
          items: [
            { de: 'die Reise', es: 'el viaje' },
            { de: 'der Urlaub', es: 'las vacaciones' },
            { de: 'das Hotel / die Unterkunft', es: 'el hotel / el alojamiento' },
            { de: 'buchen', es: 'reservar' },
            { de: 'der Koffer / packen', es: 'la maleta / hacer la maleta' },
            { de: 'die Reservierung', es: 'la reserva' }
          ]
        },
        {
          thema: 'Naturorte',
          items: [
            { de: 'der Berg', es: 'la montaña' },
            { de: 'der See', es: 'el lago' },
            { de: 'das Meer', es: 'el mar' },
            { de: 'der Wald', es: 'el bosque' },
            { de: 'der Fluss', es: 'el río' },
            { de: 'die Wiese', es: 'el prado' },
            { de: 'die Insel', es: 'la isla' }
          ]
        },
        {
          thema: 'Himmelsrichtungen',
          items: [
            { de: 'der Norden / im Norden', es: 'el norte / en el norte' },
            { de: 'der Süden / im Süden', es: 'el sur / en el sur' },
            { de: 'der Osten / im Osten', es: 'el este / en el este' },
            { de: 'der Westen / im Westen', es: 'el oeste / en el oeste' }
          ]
        },
        {
          thema: 'Kurse und Weiterbildung',
          items: [
            { de: 'der Kurs', es: 'el curso' },
            { de: 'die Weiterbildung', es: 'la formación continua' },
            { de: 'der Kursleiter / die Kursleiterin', es: 'el/la docente' },
            { de: 'das Zertifikat', es: 'el certificado' },
            { de: 'die Prüfung', es: 'el examen' },
            { de: 'sich anmelden', es: 'inscribirse' }
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
        }
      ],
      kommunikation: [
        {
          funktion: 'um Unterstützung bitten',
          wendungen: [
            { de: 'Könntest du mir kurz helfen?', es: '¿Me podrías echar una mano?' },
            { de: 'Wie geht das? Kannst du mir das zeigen?', es: '¿Cómo se hace? ¿Me lo puedes enseñar?' }
          ]
        },
        {
          funktion: 'etwas versprechen und Hoffnung ausdrücken',
          wendungen: [
            { de: 'Ich verspreche es dir.', es: 'Te lo prometo.' },
            { de: 'Ich hoffe, dass es klappt.', es: 'Espero que salga bien.' }
          ]
        },
        {
          funktion: 'über Reiseziele sprechen',
          wendungen: [
            { de: 'Im Sommer fahren wir ans Meer.', es: 'En verano vamos al mar.' },
            { de: 'Wohin würdest du gern reisen?', es: '¿Adónde te gustaría viajar?' }
          ]
        },
        {
          funktion: 'Vorlieben und Interesse äußern',
          wendungen: [
            { de: 'Ich interessiere mich für Technik.', es: 'Me interesa la tecnología.' },
            { de: 'Das finde ich spannend.', es: 'Eso me parece interesante.' }
          ]
        },
        {
          funktion: 'über individuelle Lernziele sprechen',
          wendungen: [
            { de: 'Mein Ziel ist die B1-Prüfung.', es: 'Mi meta es el examen B1.' },
            { de: 'Ich möchte flüssiger sprechen.', es: 'Quiero hablar con más fluidez.' }
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
            { de: 'das Fest / die Feier', es: 'la fiesta / la celebración' },
            { de: 'der Geburtstag', es: 'el cumpleaños' },
            { de: 'die Hochzeit', es: 'la boda' },
            { de: 'Weihnachten', es: 'la Navidad' },
            { de: 'Ostern', es: 'la Pascua' },
            { de: 'Silvester', es: 'la Nochevieja' },
            { de: 'die Einladung / einladen', es: 'la invitación / invitar' },
            { de: 'feiern', es: 'celebrar' },
            { de: 'der Gast', es: 'el invitado' }
          ]
        },
        {
          thema: 'Gastgeschenke',
          items: [
            { de: 'die Blumen', es: 'las flores' },
            { de: 'die Pralinen', es: 'los bombones' },
            { de: 'der Wein', es: 'el vino' },
            { de: 'das Geschenk', es: 'el regalo' },
            { de: 'mitbringen', es: 'llevar (algo consigo)' }
          ]
        },
        {
          thema: 'Essen und Trinken (II)',
          items: [
            { de: 'das Buffet', es: 'el bufé' },
            { de: 'der Kuchen / die Torte', es: 'el bizcocho / la tarta' },
            { de: 'der Sekt', es: 'el cava' },
            { de: 'anstoßen', es: 'brindar' },
            { de: 'Prost! · Zum Wohl!', es: '¡Salud!' }
          ]
        },
        {
          thema: 'Pünktlichkeit',
          items: [
            { de: 'pünktlich', es: 'puntual' },
            { de: 'zu spät / zu früh', es: 'tarde / pronto' },
            { de: 'die Verspätung', es: 'el retraso' },
            { de: 'sich verspäten', es: 'retrasarse' }
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
        }
      ],
      kommunikation: [
        {
          funktion: 'Auskunft über Gewohnheiten geben',
          wendungen: [
            { de: 'Bei uns feiert man Weihnachten am 24.', es: 'Nosotros celebramos la Navidad el 24.' }
          ]
        },
        {
          funktion: 'auf eine Einladung reagieren',
          wendungen: [
            { de: 'Sehr gern, ich komme!', es: '¡Con mucho gusto, voy!' },
            { de: 'Leider kann ich nicht.', es: 'Lo siento, no puedo.' }
          ]
        },
        {
          funktion: 'ein Kompliment machen',
          wendungen: [
            { de: 'Das sieht toll aus!', es: '¡Tiene una pinta estupenda!' },
            { de: 'Das schmeckt super!', es: '¡Está buenísimo!' }
          ]
        },
        {
          funktion: 'Essen und Trinken anbieten',
          wendungen: [
            { de: 'Möchtest du noch etwas?', es: '¿Quieres un poco más?' },
            { de: 'Nimm dir doch! · Greif zu!', es: '¡Sírvete! · ¡Coge!' }
          ]
        },
        {
          funktion: 'sich etwas ausmachen (AT)',
          wendungen: [
            { de: 'Wollen wir uns für Samstag etwas ausmachen?', es: '¿Quedamos para el sábado?' },
            { de: 'Passt dir 19 Uhr?', es: '¿Te va bien a las 19?' }
          ]
        },
        {
          funktion: 'sich entschuldigen',
          wendungen: [
            { de: 'Entschuldige die Verspätung!', es: '¡Perdona el retraso!' },
            { de: 'Tut mir leid, der Bus hatte Verspätung.', es: 'Lo siento, el bus venía con retraso.' }
          ]
        },
        {
          funktion: 'Auskunft über eine Person geben',
          wendungen: [
            { de: 'Das ist Pekka. Er kommt aus Finnland.', es: 'Este es Pekka. Es de Finlandia.' },
            { de: 'Sie ist sehr nett und hilfsbereit.', es: 'Ella es muy simpática y servicial.' }
          ]
        }
      ]
    }
  ]
};
