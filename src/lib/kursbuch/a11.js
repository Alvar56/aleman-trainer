// Miteinander A1.1 (Tomo 1)
// Cada Lektion: woerter (temas con palabras), grammatik (reglas con ejemplos),
// kommunikation (funciones con frases hechas).

export const A11 = {
  id: 'a11',
  name: 'A1.1',
  label: 'Tomo 1 · A1.1',
  lektionen: [
    {
      id: 'a11-start',
      nr: 'Start',
      name: "Wie geht's?",
      woerter: [
        {
          thema: 'Länder (I)',
          items: [
            { de: 'Österreich', es: 'Austria' },
            { de: 'Deutschland', es: 'Alemania' },
            { de: 'die Schweiz', es: 'Suiza' },
            { de: 'Spanien', es: 'España' },
            { de: 'Italien', es: 'Italia' },
            { de: 'Frankreich', es: 'Francia' },
            { de: 'Polen', es: 'Polonia' },
            { de: 'Ungarn', es: 'Hungría' },
            { de: 'die Türkei', es: 'Turquía' },
            { de: 'Syrien', es: 'Siria' },
            { de: 'Kroatien', es: 'Croacia' },
            { de: 'Vietnam', es: 'Vietnam' }
          ]
        },
        {
          thema: 'Zahlen 0–20',
          items: [
            { de: 'null, eins, zwei, drei', es: '0, 1, 2, 3' },
            { de: 'vier, fünf, sechs, sieben', es: '4, 5, 6, 7' },
            { de: 'acht, neun, zehn', es: '8, 9, 10' },
            { de: 'elf, zwölf, dreizehn', es: '11, 12, 13' },
            { de: 'vierzehn, fünfzehn, sechzehn', es: '14, 15, 16' },
            { de: 'siebzehn, achtzehn, neunzehn, zwanzig', es: '17, 18, 19, 20' }
          ]
        },
        {
          thema: 'Farben',
          items: [
            { de: 'rot', es: 'rojo' },
            { de: 'blau', es: 'azul' },
            { de: 'gelb', es: 'amarillo' },
            { de: 'grün', es: 'verde' },
            { de: 'schwarz', es: 'negro' },
            { de: 'weiß', es: 'blanco' },
            { de: 'grau', es: 'gris' },
            { de: 'braun', es: 'marrón' },
            { de: 'orange', es: 'naranja' },
            { de: 'rosa', es: 'rosa' },
            { de: 'lila', es: 'lila / morado' }
          ]
        }
      ],
      grammatik: [],
      kommunikation: [
        {
          funktion: 'begrüßen und verabschieden',
          wendungen: [
            { de: 'Guten Morgen! / Guten Tag! / Guten Abend!', es: '¡Buenos días! / ¡Buenas tardes! / ¡Buenas noches!' },
            { de: 'Hallo! · Servus! · Grüß Gott! (AT)', es: '¡Hola! (informal / Austria)' },
            { de: 'Auf Wiedersehen! · Tschüss! · Bis bald!', es: '¡Adiós! · ¡Chao! · ¡Hasta pronto!' }
          ]
        },
        {
          funktion: 'sich vorstellen',
          wendungen: [
            { de: 'Ich heiße Maria.', es: 'Me llamo Maria.' },
            { de: 'Mein Name ist Maria López.', es: 'Mi nombre es Maria López.' },
            { de: 'Ich bin Ahmet. Und du?', es: 'Soy Ahmet. ¿Y tú?' }
          ]
        },
        {
          funktion: 'über die Herkunft sprechen',
          wendungen: [
            { de: 'Woher kommst du? – Ich komme aus Spanien.', es: '¿De dónde eres? – Soy de España.' },
            { de: 'Woher kommen Sie? – Aus Wien.', es: '¿De dónde es usted? – De Viena.' }
          ]
        },
        {
          funktion: 'buchstabieren',
          wendungen: [
            { de: 'Wie schreibt man das?', es: '¿Cómo se escribe eso?' },
            { de: 'Können Sie das bitte buchstabieren?', es: '¿Puede deletrearlo, por favor?' },
            { de: 'M wie Martha, A wie Anton.', es: 'M de Martha, A de Anton.' }
          ]
        }
      ]
    },

    {
      id: 'a11-l1',
      nr: 1,
      name: 'Woher kommen Sie?',
      woerter: [
        {
          thema: 'Kontinente',
          items: [
            { de: 'Europa', es: 'Europa' },
            { de: 'Afrika', es: 'África' },
            { de: 'Asien', es: 'Asia' },
            { de: 'Nordamerika', es: 'América del Norte' },
            { de: 'Südamerika', es: 'América del Sur' },
            { de: 'Australien', es: 'Australia' },
            { de: 'die Antarktis', es: 'la Antártida' }
          ]
        }
      ],
      grammatik: [
        {
          regel: 'lokale Präpositionen aus / in',
          erklaerung: '"aus" = procedencia (de dónde vienes), "in" = dónde vives. Países con artículo: aus der Schweiz, in der Türkei.',
          beispiele: [
            { de: 'Ich komme aus Spanien.', es: 'Vengo de España.' },
            { de: 'Ich wohne in Wien.', es: 'Vivo en Viena.' },
            { de: 'Sie kommt aus der Schweiz.', es: 'Ella viene de Suiza.' }
          ]
        },
        {
          regel: 'Personalpronomen',
          erklaerung: 'ich, du, er/sie/es, wir, ihr, sie/Sie. "Sie" (con mayúscula) = usted/ustedes, formal.',
          beispiele: [
            { de: 'Ich bin Maria, und er ist Ahmet.', es: 'Yo soy Maria y él es Ahmet.' },
            { de: 'Wie heißen Sie?', es: '¿Cómo se llama usted?' }
          ]
        },
        {
          regel: 'Präsens: wohnen, heißen, kommen, sein',
          erklaerung: 'Regulares: -e, -st, -t, -en, -t, -en. "sein" es irregular: bin, bist, ist, sind, seid, sind.',
          beispiele: [
            { de: 'Du wohnst in Graz und ich wohne in Linz.', es: 'Tú vives en Graz y yo vivo en Linz.' },
            { de: 'Er heißt Samir. Wir sind aus Syrien.', es: 'Él se llama Samir. Nosotros somos de Siria.' }
          ]
        },
        {
          regel: 'W-Fragen',
          erklaerung: 'wer, was, wie, wo, woher, wann. El verbo va en 2ª posición.',
          beispiele: [
            { de: 'Wo wohnst du?', es: '¿Dónde vives?' },
            { de: 'Woher kommt Zofia?', es: '¿De dónde viene Zofia?' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'nach dem Namen fragen / sich vorstellen',
          wendungen: [
            { de: 'Wie heißt du? – Ich heiße Luna.', es: '¿Cómo te llamas? – Me llamo Luna.' },
            { de: 'Wie heißen Sie, bitte?', es: '¿Cómo se llama usted, por favor?' }
          ]
        },
        {
          funktion: 'über Befinden sprechen',
          wendungen: [
            { de: "Wie geht's? – Danke, gut.", es: '¿Qué tal? – Bien, gracias.' },
            { de: 'Sehr gut. · Es geht. · Nicht so gut.', es: 'Muy bien. · Va tirando. · No muy bien.' }
          ]
        },
        {
          funktion: 'über Herkunft und Wohnort sprechen',
          wendungen: [
            { de: 'Woher kommst du? Wo wohnst du?', es: '¿De dónde eres? ¿Dónde vives?' },
            { de: 'Ich komme aus Polen, aber ich wohne in Wien.', es: 'Vengo de Polonia, pero vivo en Viena.' }
          ]
        },
        {
          funktion: 'etwas vermuten',
          wendungen: [
            { de: 'Du bist sicher Maria, oder?', es: 'Tú eres Maria, ¿no?' },
            { de: 'Kommst du aus Italien?', es: '¿Vienes de Italia?' }
          ]
        },
        {
          funktion: 'zustimmen',
          wendungen: [
            { de: 'Ja, genau. · Richtig. · Stimmt.', es: 'Sí, exacto. · Correcto. · Cierto.' }
          ]
        }
      ]
    },

    {
      id: 'a11-l2',
      nr: 2,
      name: 'Wohnen Sie auch da?',
      woerter: [
        {
          thema: 'persönliche Angaben und Familienstand (I)',
          items: [
            { de: 'der Vorname', es: 'el nombre' },
            { de: 'der Familienname / der Nachname', es: 'el apellido' },
            { de: 'das Alter', es: 'la edad' },
            { de: 'der Beruf', es: 'la profesión' },
            { de: 'ledig', es: 'soltero/a' },
            { de: 'verheiratet', es: 'casado/a' },
            { de: 'geschieden', es: 'divorciado/a' },
            { de: 'verwitwet', es: 'viudo/a' }
          ]
        },
        {
          thema: 'Adresse',
          items: [
            { de: 'die Straße', es: 'la calle' },
            { de: 'die Hausnummer', es: 'el número' },
            { de: 'die Postleitzahl (PLZ)', es: 'el código postal' },
            { de: 'der Ort / die Stadt', es: 'la localidad / la ciudad' },
            { de: 'das Land', es: 'el país' },
            { de: 'die Telefonnummer', es: 'el número de teléfono' },
            { de: 'die E-Mail-Adresse', es: 'el correo electrónico' }
          ]
        },
        {
          thema: 'Zahlen 20–1000',
          items: [
            { de: 'zwanzig, einundzwanzig, zweiundzwanzig', es: '20, 21, 22' },
            { de: 'dreißig, vierzig, fünfzig', es: '30, 40, 50' },
            { de: 'sechzig, siebzig, achtzig, neunzig', es: '60, 70, 80, 90' },
            { de: '(ein)hundert, zweihundert', es: '100, 200' },
            { de: '(ein)tausend', es: '1000' }
          ]
        },
        {
          thema: 'Sprachen',
          items: [
            { de: 'Deutsch', es: 'alemán' },
            { de: 'Englisch', es: 'inglés' },
            { de: 'Spanisch', es: 'español' },
            { de: 'Französisch', es: 'francés' },
            { de: 'Italienisch', es: 'italiano' },
            { de: 'Türkisch', es: 'turco' },
            { de: 'Arabisch', es: 'árabe' },
            { de: 'Polnisch', es: 'polaco' }
          ]
        }
      ],
      grammatik: [
        {
          regel: 'Personalpronomen wir / ihr',
          erklaerung: 'wir = nosotros (-en), ihr = vosotros (-t).',
          beispiele: [
            { de: 'Wir wohnen in Salzburg.', es: 'Vivimos en Salzburgo.' },
            { de: 'Woher kommt ihr?', es: '¿De dónde venís?' }
          ]
        },
        {
          regel: 'Ja-/Nein-Frage',
          erklaerung: 'El verbo va en la 1ª posición. Se responde con ja o nein.',
          beispiele: [
            { de: 'Wohnen Sie auch da? – Ja, ich wohne auch da.', es: '¿Usted también vive ahí? – Sí.' },
            { de: 'Sprichst du Deutsch? – Nein, nur ein bisschen.', es: '¿Hablas alemán? – No, solo un poco.' }
          ]
        },
        {
          regel: 'Verben leben, sprechen, haben, sein',
          erklaerung: '"sprechen" cambia la vocal: du sprichst, er spricht. "haben": ich habe, du hast, er hat.',
          beispiele: [
            { de: 'Er spricht Türkisch und Deutsch.', es: 'Él habla turco y alemán.' },
            { de: 'Ich habe eine Tochter.', es: 'Tengo una hija.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'über Persönliches sprechen',
          wendungen: [
            { de: 'Ich bin 32 Jahre alt und ledig.', es: 'Tengo 32 años y estoy soltero.' },
            { de: 'Sind Sie verheiratet?', es: '¿Está usted casado/a?' }
          ]
        },
        {
          funktion: 'um Wiederholung bitten',
          wendungen: [
            { de: 'Wie bitte?', es: '¿Cómo dice?' },
            { de: 'Können Sie das bitte wiederholen?', es: '¿Puede repetirlo, por favor?' },
            { de: 'Noch einmal, bitte. Langsamer, bitte.', es: 'Otra vez, por favor. Más despacio.' }
          ]
        },
        {
          funktion: 'über Sprachkenntnisse sprechen',
          wendungen: [
            { de: 'Ich spreche ein bisschen Deutsch.', es: 'Hablo un poco de alemán.' },
            { de: 'Sprechen Sie Englisch? – Ja, sehr gut.', es: '¿Habla inglés? – Sí, muy bien.' }
          ]
        },
        {
          funktion: 'nach dem Alter fragen',
          wendungen: [
            { de: 'Wie alt bist du? – Ich bin 25.', es: '¿Cuántos años tienes? – Tengo 25.' }
          ]
        },
        {
          funktion: 'Adresse und persönliche Angaben machen',
          wendungen: [
            { de: 'Ich wohne in der Hauptstraße 12, 1010 Wien.', es: 'Vivo en Hauptstraße 12, 1010 Viena.' },
            { de: 'Meine Telefonnummer ist 0664 1234567.', es: 'Mi teléfono es 0664 1234567.' }
          ]
        }
      ]
    },

    {
      id: 'a11-l3',
      nr: 3,
      name: 'Was sind Sie von Beruf?',
      woerter: [
        {
          thema: 'Alltagsgegenstände',
          items: [
            { de: 'der Tisch', es: 'la mesa' },
            { de: 'der Stuhl', es: 'la silla' },
            { de: 'das Buch', es: 'el libro' },
            { de: 'das Heft', es: 'el cuaderno' },
            { de: 'der Kugelschreiber / der Kuli', es: 'el bolígrafo' },
            { de: 'der Bleistift', es: 'el lápiz' },
            { de: 'die Tasche', es: 'el bolso / la bolsa' },
            { de: 'das Handy', es: 'el móvil' },
            { de: 'der Laptop', es: 'el portátil' },
            { de: 'die Brille', es: 'las gafas' },
            { de: 'der Schlüssel', es: 'la llave' },
            { de: 'die Uhr', es: 'el reloj' }
          ]
        },
        {
          thema: 'Berufe',
          items: [
            { de: 'der Arzt / die Ärztin', es: 'el médico / la médica' },
            { de: 'der Lehrer / die Lehrerin', es: 'el profesor / la profesora' },
            { de: 'der Kellner / die Kellnerin', es: 'el camarero / la camarera' },
            { de: 'der Verkäufer / die Verkäuferin', es: 'el vendedor / la vendedora' },
            { de: 'der Koch / die Köchin', es: 'el cocinero / la cocinera' },
            { de: 'der Krankenpfleger / die Krankenpflegerin', es: 'el enfermero / la enfermera' },
            { de: 'der Techniker / die Technikerin', es: 'el técnico / la técnica' },
            { de: 'der Student / die Studentin', es: 'el estudiante / la estudiante' },
            { de: 'der Friseur / die Friseurin', es: 'el peluquero / la peluquera' }
          ]
        }
      ],
      grammatik: [
        {
          regel: 'definiter Artikel Singular',
          erklaerung: 'der (masculino), die (femenino), das (neutro). Hay que aprender el artículo con la palabra.',
          beispiele: [
            { de: 'der Tisch, die Tasche, das Buch', es: 'la mesa, el bolso, el libro' }
          ]
        },
        {
          regel: 'Personalpronomen Singular (er/sie/es für Nomen)',
          erklaerung: 'El pronombre sigue el género del sustantivo: der → er, die → sie, das → es.',
          beispiele: [
            { de: 'Wo ist der Schlüssel? – Er ist hier.', es: '¿Dónde está la llave? – Está aquí.' },
            { de: 'Wo ist die Brille? – Sie ist da.', es: '¿Dónde están las gafas? – Están ahí.' }
          ]
        },
        {
          regel: 'arbeiten',
          erklaerung: 'Raíz en -t/-d: se añade una -e- antes de la terminación (du arbeitest, er arbeitet).',
          beispiele: [
            { de: 'Du arbeitest in einem Büro.', es: 'Trabajas en una oficina.' }
          ]
        },
        {
          regel: 'Wortbildung -in',
          erklaerung: 'El femenino de profesiones se forma con -in (a veces con Umlaut): Koch → Köchin.',
          beispiele: [
            { de: 'der Lehrer → die Lehrerin', es: 'el profesor → la profesora' }
          ]
        },
        {
          regel: 'als + Beziehungswort',
          erklaerung: 'Con "als" (= como) la profesión va SIN artículo.',
          beispiele: [
            { de: 'Ich arbeite als Kellner.', es: 'Trabajo de camarero.' }
          ]
        },
        {
          regel: 'Präposition bei',
          erklaerung: '"bei" + empresa/persona: dónde trabajas.',
          beispiele: [
            { de: 'Sie arbeitet bei Siemens.', es: 'Ella trabaja en Siemens.' }
          ]
        },
        {
          regel: 'Negation nicht',
          erklaerung: '"nicht" niega el verbo o toda la frase y va al final (o antes del complemento negado).',
          beispiele: [
            { de: 'Ich arbeite nicht.', es: 'No trabajo.' },
            { de: 'Das ist nicht mein Kuli.', es: 'Ese no es mi boli.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'fragen, wo etwas ist',
          wendungen: [
            { de: 'Wo ist der Kuli? – Hier. / Da drüben.', es: '¿Dónde está el boli? – Aquí. / Ahí enfrente.' }
          ]
        },
        {
          funktion: 'über den Beruf sprechen',
          wendungen: [
            { de: 'Was sind Sie von Beruf? – Ich bin Ärztin.', es: '¿A qué se dedica? – Soy médica.' },
            { de: 'Was machst du beruflich?', es: '¿En qué trabajas?' }
          ]
        },
        {
          funktion: 'zustimmen und widersprechen',
          wendungen: [
            { de: 'Ja, stimmt. · Genau.', es: 'Sí, es cierto. · Exacto.' },
            { de: 'Nein, das stimmt nicht. · Doch!', es: 'No, eso no es así. · ¡Que sí!' }
          ]
        }
      ]
    },

    {
      id: 'a11-l4',
      nr: 4,
      name: 'Das ist meine Familie.',
      woerter: [
        {
          thema: 'Familie',
          items: [
            { de: 'die Mutter', es: 'la madre' },
            { de: 'der Vater', es: 'el padre' },
            { de: 'die Eltern', es: 'los padres' },
            { de: 'die Tochter', es: 'la hija' },
            { de: 'der Sohn', es: 'el hijo' },
            { de: 'die Kinder', es: 'los hijos / los niños' },
            { de: 'die Schwester', es: 'la hermana' },
            { de: 'der Bruder', es: 'el hermano' },
            { de: 'die Geschwister', es: 'los hermanos' },
            { de: 'die Oma / die Großmutter', es: 'la abuela' },
            { de: 'der Opa / der Großvater', es: 'el abuelo' },
            { de: 'die Tante', es: 'la tía' },
            { de: 'der Onkel', es: 'el tío' },
            { de: 'die Cousine / der Cousin', es: 'la prima / el primo' }
          ]
        },
        {
          thema: 'Familienstand (II)',
          items: [
            { de: 'die Frau (Ehefrau)', es: 'la mujer / la esposa' },
            { de: 'der Mann (Ehemann)', es: 'el marido' },
            { de: 'die Partnerin / der Partner', es: 'la pareja' },
            { de: 'getrennt', es: 'separado/a' },
            { de: 'alleinerziehend', es: 'que cría en solitario' }
          ]
        }
      ],
      grammatik: [
        {
          regel: 'Genitiv bei Namen',
          erklaerung: 'Con nombres propios se añade -s (sin apóstrofo): Marias Bruder.',
          beispiele: [
            { de: 'Das ist Ahmets Familie.', es: 'Esta es la familia de Ahmet.' }
          ]
        },
        {
          regel: 'Possessivartikel Singular',
          erklaerung: 'mein/meine, dein/deine, sein/seine, ihr/ihre. Terminación -e ante femenino y plural.',
          beispiele: [
            { de: 'Das ist mein Bruder und meine Schwester.', es: 'Este es mi hermano y esta mi hermana.' },
            { de: 'Ist das dein Vater?', es: '¿Es ese tu padre?' }
          ]
        },
        {
          regel: 'indefiniter Artikel ein(e)',
          erklaerung: 'ein (der/das), eine (die). Se usa al mencionar algo por primera vez.',
          beispiele: [
            { de: 'Das ist ein Foto.', es: 'Esto es una foto.' },
            { de: 'Ich habe eine Schwester.', es: 'Tengo una hermana.' }
          ]
        },
        {
          regel: 'Negativartikel kein(e)',
          erklaerung: 'Niega sustantivos: kein Bruder, keine Kinder. (Con verbos se usa "nicht".)',
          beispiele: [
            { de: 'Ich habe keine Geschwister.', es: 'No tengo hermanos.' },
            { de: 'Das ist kein Problem.', es: 'Eso no es un problema.' }
          ]
        },
        {
          regel: 'Konjunktionen und / oder',
          erklaerung: 'Unen palabras o frases sin cambiar el orden del verbo.',
          beispiele: [
            { de: 'Ich habe einen Sohn und eine Tochter.', es: 'Tengo un hijo y una hija.' },
            { de: 'Kommst du heute oder morgen?', es: '¿Vienes hoy o mañana?' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'über die Familie sprechen',
          wendungen: [
            { de: 'Hast du Geschwister? – Ja, zwei Brüder.', es: '¿Tienes hermanos? – Sí, dos hermanos.' },
            { de: 'Meine Eltern wohnen in Polen.', es: 'Mis padres viven en Polonia.' }
          ]
        },
        {
          funktion: 'etwas vermuten',
          wendungen: [
            { de: 'Ist das deine Schwester?', es: '¿Es esa tu hermana?' },
            { de: 'Das ist sicher dein Opa.', es: 'Ese seguro que es tu abuelo.' }
          ]
        },
        {
          funktion: 'nach Sachen / Gegenständen fragen',
          wendungen: [
            { de: 'Was ist das? – Das ist ein Foto.', es: '¿Qué es esto? – Es una foto.' },
            { de: 'Wer ist das?', es: '¿Quién es ese/a?' }
          ]
        }
      ]
    },

    {
      id: 'a11-l5',
      nr: 5,
      name: 'Wann hast du Zeit?',
      woerter: [
        {
          thema: 'Wochentage',
          items: [
            { de: 'der Montag', es: 'el lunes' },
            { de: 'der Dienstag', es: 'el martes' },
            { de: 'der Mittwoch', es: 'el miércoles' },
            { de: 'der Donnerstag', es: 'el jueves' },
            { de: 'der Freitag', es: 'el viernes' },
            { de: 'der Samstag', es: 'el sábado' },
            { de: 'der Sonntag', es: 'el domingo' },
            { de: 'das Wochenende', es: 'el fin de semana' }
          ]
        },
        {
          thema: 'Tageszeiten',
          items: [
            { de: 'der Morgen', es: 'la mañana (temprano)' },
            { de: 'der Vormittag', es: 'la mañana' },
            { de: 'der Mittag', es: 'el mediodía' },
            { de: 'der Nachmittag', es: 'la tarde' },
            { de: 'der Abend', es: 'la tarde-noche' },
            { de: 'die Nacht', es: 'la noche' }
          ]
        },
        {
          thema: 'Uhrzeit',
          items: [
            { de: 'Wie spät ist es? / Wie viel Uhr ist es?', es: '¿Qué hora es?' },
            { de: 'Es ist acht Uhr.', es: 'Son las ocho.' },
            { de: 'Viertel nach acht (8:15)', es: 'las ocho y cuarto' },
            { de: 'halb neun (8:30)', es: 'las ocho y media' },
            { de: 'Viertel vor neun (8:45)', es: 'las nueve menos cuarto' },
            { de: 'zehn nach / zehn vor', es: 'y diez / menos diez' }
          ]
        },
        {
          thema: 'Alltagsaktivitäten',
          items: [
            { de: 'aufstehen', es: 'levantarse' },
            { de: 'frühstücken', es: 'desayunar' },
            { de: 'einkaufen', es: 'hacer la compra' },
            { de: 'kochen', es: 'cocinar' },
            { de: 'fernsehen', es: 'ver la tele' },
            { de: 'aufräumen', es: 'ordenar' },
            { de: 'anrufen', es: 'llamar por teléfono' },
            { de: 'schlafen gehen', es: 'irse a dormir' }
          ]
        }
      ],
      grammatik: [
        {
          regel: 'temporale Präpositionen am / um / von … bis',
          erklaerung: 'am + día (am Montag), um + hora (um 8 Uhr), von … bis (von 9 bis 17 Uhr).',
          beispiele: [
            { de: 'Am Freitag um 18 Uhr habe ich Zeit.', es: 'El viernes a las 18 tengo tiempo.' },
            { de: 'Ich arbeite von Montag bis Freitag.', es: 'Trabajo de lunes a viernes.' }
          ]
        },
        {
          regel: 'Verbposition im Satz',
          erklaerung: 'El verbo conjugado siempre en 2ª posición. Si empiezas con la hora, el sujeto va detrás.',
          beispiele: [
            { de: 'Ich stehe um 7 Uhr auf.', es: 'Me levanto a las 7.' },
            { de: 'Um 7 Uhr stehe ich auf.', es: 'A las 7 me levanto.' }
          ]
        },
        {
          regel: 'trennbare Verben und Vokalwechsel',
          erklaerung: 'El prefijo se separa y va al final: aufstehen → ich stehe … auf. Algunos cambian vocal: schlafen → du schläfst.',
          beispiele: [
            { de: 'Wann stehst du auf?', es: '¿Cuándo te levantas?' },
            { de: 'Er sieht am Abend fern.', es: 'Él ve la tele por la tarde.' }
          ]
        },
        {
          regel: 'Zeitadverbien zuerst, dann, nachher',
          erklaerung: 'Ordenan acciones. Si van al principio, el verbo va justo después.',
          beispiele: [
            { de: 'Zuerst frühstücke ich, dann fahre ich zur Arbeit.', es: 'Primero desayuno, luego voy al trabajo.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'über Uhrzeit und Zeitplanung sprechen',
          wendungen: [
            { de: 'Wann hast du Zeit? – Am Samstag.', es: '¿Cuándo tienes tiempo? – El sábado.' },
            { de: 'Um wie viel Uhr treffen wir uns?', es: '¿A qué hora quedamos?' }
          ]
        },
        {
          funktion: 'um etwas bitten',
          wendungen: [
            { de: 'Kannst du mir bitte helfen?', es: '¿Me puedes ayudar, por favor?' },
            { de: 'Einen Moment, bitte.', es: 'Un momento, por favor.' }
          ]
        },
        {
          funktion: 'über Öffnungszeiten sprechen',
          wendungen: [
            { de: 'Wann hat die Bank offen? – Von 9 bis 15 Uhr.', es: '¿Cuándo abre el banco? – De 9 a 15.' },
            { de: 'Am Sonntag ist geschlossen.', es: 'Los domingos está cerrado.' }
          ]
        },
        {
          funktion: 'sich verabreden',
          wendungen: [
            { de: 'Hast du am Freitag Zeit?', es: '¿Tienes tiempo el viernes?' },
            { de: 'Passt dir 18 Uhr? – Ja, das passt.', es: '¿Te va bien a las 18? – Sí, me va bien.' }
          ]
        },
        {
          funktion: 'etwas vorschlagen',
          wendungen: [
            { de: 'Wollen wir ins Kino gehen?', es: '¿Vamos al cine?' },
            { de: 'Gute Idee! · Ja, gern.', es: '¡Buena idea! · Sí, con gusto.' }
          ]
        }
      ]
    },

    {
      id: 'a11-l6',
      nr: 6,
      name: 'Haben Sie keine Kipferl?',
      woerter: [
        {
          thema: 'Lebensmittel',
          items: [
            { de: 'das Brot', es: 'el pan' },
            { de: 'die Semmel (AT)', es: 'el panecillo' },
            { de: 'das Kipferl (AT)', es: 'el cruasán pequeño' },
            { de: 'die Milch', es: 'la leche' },
            { de: 'der Käse', es: 'el queso' },
            { de: 'die Butter', es: 'la mantequilla' },
            { de: 'das Ei', es: 'el huevo' },
            { de: 'der Apfel', es: 'la manzana' },
            { de: 'die Tomate', es: 'el tomate' },
            { de: 'die Erdäpfel (AT) / die Kartoffeln', es: 'las patatas' },
            { de: 'das Fleisch', es: 'la carne' },
            { de: 'der Fisch', es: 'el pescado' },
            { de: 'der Reis', es: 'el arroz' },
            { de: 'die Nudeln', es: 'la pasta' }
          ]
        },
        {
          thema: 'Preise',
          items: [
            { de: 'der Preis', es: 'el precio' },
            { de: 'der Euro / der Cent', es: 'el euro / el céntimo' },
            { de: 'kosten', es: 'costar' },
            { de: 'billig / günstig', es: 'barato' },
            { de: 'teuer', es: 'caro' }
          ]
        },
        {
          thema: 'Mengenangaben',
          items: [
            { de: 'ein Kilo / ein halbes Kilo', es: 'un kilo / medio kilo' },
            { de: 'zehn Deka (AT) = 100 g', es: '100 gramos' },
            { de: 'ein Liter', es: 'un litro' },
            { de: 'eine Packung', es: 'un paquete' },
            { de: 'eine Flasche', es: 'una botella' },
            { de: 'ein Stück', es: 'una unidad / un trozo' }
          ]
        },
        {
          thema: 'Mahlzeiten und Speisen',
          items: [
            { de: 'das Frühstück', es: 'el desayuno' },
            { de: 'das Mittagessen', es: 'la comida' },
            { de: 'das Abendessen', es: 'la cena' },
            { de: 'die Suppe', es: 'la sopa' },
            { de: 'der Salat', es: 'la ensalada' },
            { de: 'das Schnitzel', es: 'el escalope' },
            { de: 'die Nachspeise', es: 'el postre' }
          ]
        }
      ],
      grammatik: [
        {
          regel: 'essen, nehmen, mögen, "möchte"',
          erklaerung: 'essen: du isst, er isst. nehmen: du nimmst, er nimmt. möchte: ich möchte, du möchtest.',
          beispiele: [
            { de: 'Was nimmst du? – Ich nehme die Suppe.', es: '¿Qué vas a tomar? – Tomo la sopa.' },
            { de: 'Ich möchte einen Kaffee, bitte.', es: 'Quisiera un café, por favor.' }
          ]
        },
        {
          regel: 'Artikel im Akkusativ Singular',
          erklaerung: 'Solo cambia el masculino: der → den, ein → einen. die/das no cambian.',
          beispiele: [
            { de: 'Ich nehme den Salat und das Brot.', es: 'Tomo la ensalada y el pan.' },
            { de: 'Ich möchte einen Apfel.', es: 'Quiero una manzana.' }
          ]
        },
        {
          regel: 'Negativartikel im Akkusativ',
          erklaerung: 'keinen (masc.), keine (fem./pl.), kein (neutro).',
          beispiele: [
            { de: 'Haben Sie keine Kipferl?', es: '¿No tienen Kipferl?' },
            { de: 'Ich esse keinen Fisch.', es: 'No como pescado.' }
          ]
        },
        {
          regel: 'Komposita',
          erklaerung: 'Palabra compuesta: el artículo es el de la ÚLTIMA palabra.',
          beispiele: [
            { de: 'der Apfel + der Saft = der Apfelsaft', es: 'el zumo de manzana' },
            { de: 'das Obst + der Salat = der Obstsalat', es: 'la macedonia' }
          ]
        },
        {
          regel: 'Präpositionen mit / ohne',
          erklaerung: '"mit" + Dativ, "ohne" + Akkusativ. A este nivel se usan como fórmulas fijas.',
          beispiele: [
            { de: 'Einen Kaffee mit Milch, bitte.', es: 'Un café con leche, por favor.' },
            { de: 'Ein Wasser ohne Kohlensäure.', es: 'Un agua sin gas.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'etwas bestellen',
          wendungen: [
            { de: 'Ich hätte gern eine Suppe.', es: 'Quisiera una sopa.' },
            { de: 'Einmal Schnitzel, bitte.', es: 'Un escalope, por favor.' }
          ]
        },
        {
          funktion: 'nach dem Preis fragen',
          wendungen: [
            { de: 'Was kostet das?', es: '¿Cuánto cuesta?' },
            { de: 'Wie viel macht das? – Das macht 8,50 Euro.', es: '¿Cuánto es? – Son 8,50 euros.' }
          ]
        },
        {
          funktion: 'über Vorlieben beim Essen sprechen',
          wendungen: [
            { de: 'Ich mag keinen Fisch.', es: 'No me gusta el pescado.' },
            { de: 'Ich esse gern Gemüse.', es: 'Me gusta comer verdura.' }
          ]
        },
        {
          funktion: 'sagen, was es gibt',
          wendungen: [
            { de: 'Heute gibt es Suppe und Salat.', es: 'Hoy hay sopa y ensalada.' }
          ]
        },
        {
          funktion: 'Bedauern ausdrücken',
          wendungen: [
            { de: 'Leider haben wir keine Kipferl mehr.', es: 'Por desgracia ya no nos quedan Kipferl.' },
            { de: 'Tut mir leid.', es: 'Lo siento.' }
          ]
        }
      ]
    },

    {
      id: 'a11-l7',
      nr: 7,
      name: 'Heute regnet es.',
      woerter: [
        {
          thema: 'Jahreszeiten',
          items: [
            { de: 'der Frühling', es: 'la primavera' },
            { de: 'der Sommer', es: 'el verano' },
            { de: 'der Herbst', es: 'el otoño' },
            { de: 'der Winter', es: 'el invierno' }
          ]
        },
        {
          thema: 'Monate',
          items: [
            { de: 'Jänner (AT) / Januar, Februar, März', es: 'enero, febrero, marzo' },
            { de: 'April, Mai, Juni', es: 'abril, mayo, junio' },
            { de: 'Juli, August, September', es: 'julio, agosto, septiembre' },
            { de: 'Oktober, November, Dezember', es: 'octubre, noviembre, diciembre' }
          ]
        },
        {
          thema: 'Wetter',
          items: [
            { de: 'die Sonne / sonnig', es: 'el sol / soleado' },
            { de: 'der Regen / regnen', es: 'la lluvia / llover' },
            { de: 'der Schnee / schneien', es: 'la nieve / nevar' },
            { de: 'der Wind / windig', es: 'el viento / con viento' },
            { de: 'bewölkt', es: 'nublado' },
            { de: 'das Gewitter', es: 'la tormenta' },
            { de: 'warm / heiß', es: 'templado / caluroso' },
            { de: 'kalt / kühl', es: 'frío / fresco' },
            { de: 'die Temperatur / der Grad', es: 'la temperatura / el grado' }
          ]
        }
      ],
      grammatik: [
        {
          regel: 'Plural',
          erklaerung: 'Terminaciones: -e (Tage), -en (Frauen), -er (Kinder), -s (Handys), o solo Umlaut (Väter). Se aprende con la palabra.',
          beispiele: [
            { de: 'der Tag → die Tage', es: 'el día → los días' },
            { de: 'das Kind → die Kinder', es: 'el niño → los niños' }
          ]
        },
        {
          regel: 'temporale Präposition im',
          erklaerung: '"im" + mes y + estación del año.',
          beispiele: [
            { de: 'Im Sommer ist es heiß.', es: 'En verano hace calor.' },
            { de: 'Im Jänner schneit es oft.', es: 'En enero nieva a menudo.' }
          ]
        },
        {
          regel: 'Pronomen man',
          erklaerung: 'Sujeto impersonal (= "se"). Siempre con verbo en 3ª persona singular.',
          beispiele: [
            { de: 'Im Winter trägt man einen Mantel.', es: 'En invierno se lleva abrigo.' },
            { de: 'Hier spricht man Deutsch.', es: 'Aquí se habla alemán.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'über das Wetter sprechen',
          wendungen: [
            { de: 'Wie ist das Wetter? – Es regnet.', es: '¿Qué tiempo hace? – Está lloviendo.' },
            { de: 'Es sind 20 Grad.', es: 'Hay 20 grados.' },
            { de: 'Heute ist es schön / schlecht.', es: 'Hoy hace bueno / malo.' }
          ]
        }
      ]
    },

    {
      id: 'a11-l8',
      nr: 8,
      name: 'Du spielst super Fußball!',
      woerter: [
        {
          thema: 'Zukunftspläne',
          items: [
            { de: 'der Plan / planen', es: 'el plan / planear' },
            { de: 'das Ziel', es: 'la meta' },
            { de: 'später', es: 'más tarde' },
            { de: 'nächstes Jahr', es: 'el año que viene' },
            { de: 'in Zukunft', es: 'en el futuro' }
          ]
        },
        {
          thema: 'Freizeitaktivitäten',
          items: [
            { de: 'schwimmen', es: 'nadar' },
            { de: 'wandern', es: 'hacer senderismo' },
            { de: 'tanzen', es: 'bailar' },
            { de: 'singen', es: 'cantar' },
            { de: 'malen', es: 'pintar' },
            { de: 'lesen', es: 'leer' },
            { de: 'Musik hören', es: 'escuchar música' },
            { de: 'Rad fahren', es: 'ir en bici' },
            { de: 'Fußball spielen', es: 'jugar al fútbol' },
            { de: 'ins Kino gehen', es: 'ir al cine' }
          ]
        },
        {
          thema: 'Hobbys',
          items: [
            { de: 'das Hobby', es: 'el hobby' },
            { de: 'der Sport', es: 'el deporte' },
            { de: 'die Musik', es: 'la música' },
            { de: 'das Kochen', es: 'la cocina' },
            { de: 'die Fotografie', es: 'la fotografía' },
            { de: 'der Verein', es: 'el club / la asociación' }
          ]
        }
      ],
      grammatik: [
        {
          regel: 'Modalverben können / wollen',
          erklaerung: 'ich kann, du kannst, er kann · ich will, du willst, er will. 1ª y 3ª persona sin terminación.',
          beispiele: [
            { de: 'Ich kann gut schwimmen.', es: 'Sé nadar bien.' },
            { de: 'Willst du mitkommen?', es: '¿Quieres venir?' }
          ]
        },
        {
          regel: 'Satzklammer',
          erklaerung: 'El modal va en 2ª posición y el infinitivo al FINAL de la frase.',
          beispiele: [
            { de: 'Ich kann am Wochenende Fußball spielen.', es: 'Puedo jugar al fútbol el fin de semana.' },
            { de: 'Wir wollen nächstes Jahr nach Wien ziehen.', es: 'Queremos mudarnos a Viena el año que viene.' }
          ]
        },
        {
          regel: 'Häufigkeitsangaben mit jed-',
          erklaerung: 'jeden Tag (masc. Akk.), jede Woche (fem.), jedes Wochenende (neutro).',
          beispiele: [
            { de: 'Ich gehe jeden Tag laufen.', es: 'Salgo a correr todos los días.' },
            { de: 'Jedes Wochenende spielen wir Fußball.', es: 'Cada fin de semana jugamos al fútbol.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'sagen, wie oft man etwas macht',
          wendungen: [
            { de: 'immer – oft – manchmal – selten – nie', es: 'siempre – a menudo – a veces – rara vez – nunca' },
            { de: 'Ich gehe zweimal pro Woche ins Fitnessstudio.', es: 'Voy al gimnasio dos veces por semana.' }
          ]
        },
        {
          funktion: 'widersprechen',
          wendungen: [
            { de: 'Das stimmt nicht.', es: 'Eso no es cierto.' },
            { de: 'Nein, überhaupt nicht.', es: 'No, en absoluto.' }
          ]
        },
        {
          funktion: 'über Fähigkeiten, Pläne, Vorlieben und Hobbys sprechen',
          wendungen: [
            { de: 'Du spielst super Fußball!', es: '¡Juegas al fútbol genial!' },
            { de: 'Mein Hobby ist Fotografieren.', es: 'Mi hobby es la fotografía.' },
            { de: 'Ich will einen Deutschkurs machen.', es: 'Quiero hacer un curso de alemán.' }
          ]
        }
      ]
    }
  ]
};
