// Miteinander A2.1 (Tomo 3) — Lektionen 1–8.
// Cada regla: erklaerung (resumen), detail (explicación larga, párrafos con \n\n),
// tabelle (opcional), beispiele y mehr (más ejemplos al desplegar).

export const A21 = {
  id: 'a21',
  name: 'A2.1',
  label: 'Tomo 3 · A2.1',
  lektionen: [
    // ==================== LEKTION 1 ====================
    {
      id: 'a21-l1',
      legacyId: 'l1',
      nr: 1,
      name: 'Weggehen & Ankommen',
      woerter: [
        {
          thema: 'Gefühle',
          items: [
            { de: 'die Freude', es: 'la alegría' },
            { de: 'sich freuen (über + Akk.)', es: 'alegrarse (de algo)' },
            { de: 'die Angst, Angst haben (vor + Dat.)', es: 'el miedo, tener miedo (de)' },
            { de: 'die Wut, wütend', es: 'la rabia, enfadado' },
            { de: 'sich ärgern (über + Akk.)', es: 'enfadarse (por algo)' },
            { de: 'die Trauer, traurig', es: 'la tristeza, triste' },
            { de: 'die Aufregung, aufgeregt', es: 'los nervios, nervioso (por algo)' },
            { de: 'nervös', es: 'nervioso (de carácter)' },
            { de: 'glücklich', es: 'feliz' },
            { de: 'zufrieden', es: 'satisfecho, contento' },
            { de: 'enttäuscht (von + Dat.)', es: 'decepcionado (por)' },
            { de: 'stolz (auf + Akk.)', es: 'orgulloso (de)' },
            { de: 'erleichtert', es: 'aliviado' },
            { de: 'überrascht', es: 'sorprendido' },
            { de: 'einsam', es: 'solo, solitario' },
            { de: 'unsicher', es: 'inseguro' },
            { de: 'gestresst', es: 'estresado' },
            { de: 'entspannt', es: 'relajado' },
            { de: 'sich wohlfühlen', es: 'sentirse a gusto' },
            { de: 'sich Sorgen machen (um + Akk.)', es: 'preocuparse (por)' }
          ]
        },
        {
          thema: 'Ankommen und Weggehen',
          items: [
            { de: 'die Heimat', es: 'la tierra natal' },
            { de: 'das Heimweh, Heimweh haben', es: 'la morriña, echar de menos su tierra' },
            { de: 'auswandern', es: 'emigrar' },
            { de: 'ankommen', es: 'llegar' },
            { de: 'weggehen', es: 'irse, marcharse' },
            { de: 'sich verabschieden (von + Dat.)', es: 'despedirse (de)' },
            { de: 'der Abschied', es: 'la despedida' },
            { de: 'die Ankunft', es: 'la llegada' },
            { de: 'der Anfang, am Anfang', es: 'el principio, al principio' },
            { de: 'sich gewöhnen (an + Akk.)', es: 'acostumbrarse (a)' },
            { de: 'fremd', es: 'extraño, ajeno' },
            { de: 'vermissen', es: 'echar de menos' },
            { de: 'die Erinnerung', es: 'el recuerdo' },
            { de: 'erleben', es: 'vivir (una experiencia)' },
            { de: 'sich verändern', es: 'cambiar (uno mismo)' }
          ]
        },
        {
          thema: 'Adjektive mit un- und -los',
          items: [
            { de: 'unzufrieden', es: 'insatisfecho' },
            { de: 'unfreundlich', es: 'antipático' },
            { de: 'unglücklich', es: 'infeliz' },
            { de: 'ungeduldig', es: 'impaciente' },
            { de: 'unbekannt', es: 'desconocido' },
            { de: 'arbeitslos', es: 'en paro' },
            { de: 'sprachlos', es: 'sin palabras' },
            { de: 'hoffnungslos', es: 'sin esperanza' },
            { de: 'erfolglos', es: 'sin éxito' },
            { de: 'problemlos', es: 'sin problemas' }
          ]
        }
      ],
      pitfalls: [
        'Con "sein" y "haben" en pasado se usa el Präteritum (war / hatte), NO el Perfekt. "Ich bin müde gewesen" suena raro: di "Ich war müde".',
        'bleiben, sein y passieren forman el Perfekt con SEIN aunque no indiquen movimiento.',
        'Los prefijos be-, er-, ge-, ver-, ent-, emp-, zer- nunca llevan ge- en el participio: bekommen → bekommen (NO gebekommen).'
      ],
      grammatik: [
        {
          regel: 'Wiederholung: Präteritum von haben und sein',
          key: 'praeteritum-haben-sein',
          erklaerung: 'En pasado, "sein" y "haben" se usan casi siempre en Präteritum (war, hatte), no en Perfekt.',
          detail:
            'El alemán hablado prefiere el Perfekt para contar el pasado, PERO hay un grupo de verbos que se usan en Präteritum incluso al hablar: sein, haben y los modales (konnte, musste, wollte…). Por eso dices "Gestern war ich krank" y no "Gestern bin ich krank gewesen".\n\nFíjate en que la 1ª y la 3ª persona del singular son IGUALES (ich war / er war, ich hatte / er hatte). Eso pasa en todos los verbos en Präteritum, y es distinto del presente.\n\nEn una frase subordinada el verbo va al final: "…, weil ich müde war." / "…, obwohl wir kein Geld hatten."',
          tabelle: {
            title: 'sein y haben en Präteritum',
            headers: ['Persona', 'sein', 'haben'],
            rows: [
              ['ich', 'war', 'hatte'],
              ['du', 'warst', 'hattest'],
              ['er / sie / es', 'war', 'hatte'],
              ['wir', 'waren', 'hatten'],
              ['ihr', 'wart', 'hattet'],
              ['sie / Sie', 'waren', 'hatten']
            ]
          },
          beispiele: [
            { de: 'Am Anfang war ich sehr aufgeregt.', es: 'Al principio estaba muy nervioso.' },
            { de: 'Wir hatten großes Heimweh.', es: 'Echábamos mucho de menos nuestra tierra.' },
            { de: 'Warst du schon einmal in Wien?', es: '¿Has estado alguna vez en Viena?' },
            { de: 'Sie hatte damals noch keine Arbeit.', es: 'Entonces ella todavía no tenía trabajo.' }
          ],
          mehr: {
            title: 'En subordinada',
            examples: [
              { de: 'Ich bin nicht gekommen, weil ich krank war.', es: 'No fui porque estaba enfermo.' },
              { de: 'Obwohl wir wenig Geld hatten, waren wir glücklich.', es: 'Aunque teníamos poco dinero, éramos felices.' }
            ]
          }
        },
        {
          regel: 'Wiederholung: Perfekt',
          key: 'perfekt-wdh',
          erklaerung: 'haben o sein en 2ª posición + Partizip II al final de la frase (Satzklammer).',
          detail:
            'El Perfekt es el pasado normal al hablar. Se forma con el auxiliar (haben o sein) conjugado en 2ª posición y el participio (Partizip II) AL FINAL. A ese "abrazo" se le llama Satzklammer: "Ich habe gestern mit meiner Mutter telefoniert."\n\nCómo se forma el Partizip II: los verbos regulares hacen ge- + raíz + -t (machen → gemacht, lernen → gelernt). Los irregulares hacen ge- + raíz + -en y muchas veces cambian la vocal (sprechen → gesprochen, trinken → getrunken, gehen → gegangen). Los verbos en -ieren no llevan ge- (studieren → studiert). Los separables meten el -ge- en medio (einkaufen → eingekauft).\n\nLa mayoría usa haben. Usan SEIN los verbos de movimiento con cambio de lugar (gehen, fahren, kommen, fliegen, laufen), los de cambio de estado (aufstehen, einschlafen, aufwachen) y sein / bleiben / passieren / werden.',
          tabelle: {
            title: 'Formación del Partizip II',
            headers: ['Tipo', 'Infinitivo', 'Partizip II', 'Regla'],
            rows: [
              ['Regular', 'machen', 'gemacht', 'ge- + raíz + -t'],
              ['Irregular', 'sprechen', 'gesprochen', 'ge- + raíz + -en (+ cambio de vocal)'],
              ['Separable', 'einkaufen', 'eingekauft', '-ge- en medio'],
              ['Inseparable', 'verstehen', 'verstanden', 'sin ge-'],
              ['En -ieren', 'telefonieren', 'telefoniert', 'sin ge-']
            ]
          },
          beispiele: [
            { de: 'Ich habe meine Familie besucht.', es: 'He visitado a mi familia.' },
            { de: 'Wir haben viel Deutsch gelernt.', es: 'Hemos aprendido mucho alemán.' },
            { de: 'Sie ist um sieben aufgestanden.', es: 'Ella se ha levantado a las siete.' },
            { de: 'Habt ihr schon gegessen?', es: '¿Ya habéis comido?' }
          ]
        },
        {
          regel: 'Perfekt von bleiben, sein und passieren',
          key: 'perfekt-bleiben-sein-passieren',
          erklaerung: 'Estos tres van con SEIN aunque no expresen movimiento: ist geblieben, ist gewesen, ist passiert.',
          detail:
            'La regla general dice "sein para movimiento", pero hay tres excepciones muy frecuentes que hay que memorizar: bleiben (quedarse — justo lo contrario de moverse), sein (ser/estar) y passieren (ocurrir). También werden (ist geworden).\n\nOjo con "gewesen": es el participio de sein, así que el Perfekt de sein es "ich bin gewesen" (literalmente "soy sido"). En la práctica casi siempre dirás "ich war", pero necesitas reconocer la forma.',
          tabelle: {
            title: 'Verbos con SEIN',
            headers: ['Grupo', 'Ejemplos', 'Perfekt'],
            rows: [
              ['Movimiento (cambio de lugar)', 'gehen, fahren, kommen, fliegen, laufen', 'ich bin gegangen / gefahren'],
              ['Cambio de estado', 'aufstehen, einschlafen, aufwachen', 'ich bin aufgestanden'],
              ['Excepciones', 'sein, bleiben, passieren, werden', 'ich bin gewesen / geblieben']
            ]
          },
          beispiele: [
            { de: 'Ich bin am Wochenende zu Hause geblieben.', es: 'El fin de semana me quedé en casa.' },
            { de: 'Was ist denn passiert?', es: '¿Pero qué ha pasado?' },
            { de: 'Ich bin noch nie in Wien gewesen.', es: 'Nunca he estado en Viena.' },
            { de: 'Er ist Lehrer geworden.', es: 'Se ha hecho profesor.' }
          ]
        },
        {
          regel: 'Perfekt bei Verben mit nicht-trennbaren Vorsilben be-, er-, ge-, ver-',
          key: 'perfekt-untrennbar',
          erklaerung: 'Los prefijos inseparables (be-, er-, ge-, ver-, ent-, emp-, zer-) NO llevan ge- en el participio.',
          detail:
            'Hay dos familias de prefijos. Los SEPARABLES (an-, auf-, ein-, mit-, vor-, zu-, aus-…) se separan del verbo en presente y meten el -ge- en medio en el participio: "Ich kaufe ein" → "Ich habe eingekauft".\n\nLos INSEPARABLES (be-, er-, ge-, ver-, ent-, emp-, zer-, miss-) nunca se separan y nunca llevan ge-: "Ich verstehe" → "Ich habe verstanden". Un truco fonético: en los inseparables el acento cae en el VERBO (ver-STE-hen), en los separables cae en el PREFIJO (EIN-kaufen).\n\nCaso curioso: gefallen ya empieza por ge-, así que su participio es idéntico al infinitivo: "Der Film hat mir gefallen".',
          tabelle: {
            title: 'Separables vs. inseparables',
            headers: ['Prefijo', 'Tipo', 'Infinitivo', 'Partizip II'],
            rows: [
              ['ein-', 'separable', 'einkaufen', 'eingekauft'],
              ['auf-', 'separable', 'aufstehen', 'aufgestanden'],
              ['be-', 'inseparable', 'bekommen', 'bekommen'],
              ['er-', 'inseparable', 'erleben', 'erlebt'],
              ['ver-', 'inseparable', 'verstehen', 'verstanden'],
              ['ge-', 'inseparable', 'gefallen', 'gefallen']
            ]
          },
          beispiele: [
            { de: 'Ich habe deine Nachricht bekommen.', es: 'He recibido tu mensaje.' },
            { de: 'Hast du die Frage verstanden?', es: '¿Has entendido la pregunta?' },
            { de: 'Sie hat in Österreich viel erlebt.', es: 'Ella ha vivido muchas cosas en Austria.' },
            { de: 'Der Film hat mir sehr gefallen.', es: 'La película me ha gustado mucho.' }
          ],
          mehr: {
            title: 'Compara',
            examples: [
              { de: 'Ich habe im Supermarkt eingekauft. (separable)', es: 'He hecho la compra en el súper.' },
              { de: 'Ich habe ein Geschenk bekommen. (inseparable)', es: 'He recibido un regalo.' }
            ]
          }
        },
        {
          regel: 'Wortbildung: Adjektive mit un- und -los',
          key: 'wortbildung-un-los',
          erklaerung: 'un- delante niega el adjetivo; -los detrás de un sustantivo significa "sin".',
          detail:
            'Son dos recursos muy productivos para ampliar vocabulario sin aprender palabras nuevas de cero.\n\nun- + adjetivo = lo contrario: zufrieden → unzufrieden, freundlich → unfreundlich, geduldig → ungeduldig. El acento va siempre en UN-.\n\nsustantivo + -los = "sin eso": die Arbeit → arbeitslos (sin trabajo), die Sprache → sprachlos (sin palabras), die Hoffnung → hoffnungslos (sin esperanza). A veces se añade una -s- de unión: der Erfolg → erfolglos, das Problem → problemlos.\n\nNo todos los adjetivos admiten un-: no existe "unschön" ni "ungroß"; ahí se usa el antónimo (hässlich, klein).',
          tabelle: {
            title: 'Formar adjetivos',
            headers: ['Base', 'Con un-', 'Base', 'Con -los'],
            rows: [
              ['zufrieden', 'unzufrieden', 'die Arbeit', 'arbeitslos'],
              ['freundlich', 'unfreundlich', 'die Sprache', 'sprachlos'],
              ['geduldig', 'ungeduldig', 'die Hoffnung', 'hoffnungslos'],
              ['sicher', 'unsicher', 'das Problem', 'problemlos']
            ]
          },
          beispiele: [
            { de: 'Er ist seit einem Jahr arbeitslos.', es: 'Lleva un año en paro.' },
            { de: 'Ich bin mit dem Ergebnis unzufrieden.', es: 'No estoy satisfecho con el resultado.' },
            { de: 'Nach der Nachricht war sie sprachlos.', es: 'Tras la noticia se quedó sin palabras.' },
            { de: 'Der Umzug lief problemlos.', es: 'La mudanza fue sin problemas.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'Wünsche ausdrücken',
          es: 'Expresar deseos',
          wendungen: [
            { de: 'Ich hätte gern mehr Zeit für meine Familie.', es: 'Me gustaría tener más tiempo para mi familia.' },
            { de: 'Ich würde gern wieder nach Hause fahren.', es: 'Me gustaría volver a casa.' },
            { de: 'Am liebsten würde ich hierbleiben.', es: 'Lo que más me gustaría es quedarme aquí.' }
          ]
        },
        {
          funktion: 'über Vergangenes sprechen',
          es: 'Hablar del pasado',
          wendungen: [
            { de: 'Damals bin ich nach Österreich gekommen.', es: 'Entonces vine a Austria.' },
            { de: 'Am Anfang war alles fremd für mich.', es: 'Al principio todo me resultaba extraño.' },
            { de: 'Mit der Zeit habe ich mich daran gewöhnt.', es: 'Con el tiempo me acostumbré.' }
          ]
        },
        {
          funktion: 'nachfragen, Interesse und Mitgefühl zeigen',
          es: 'Preguntar, mostrar interés y empatía',
          wendungen: [
            { de: 'Und wie ging es dann weiter?', es: '¿Y cómo siguió la cosa?' },
            { de: 'Das kann ich gut verstehen.', es: 'Lo entiendo perfectamente.' },
            { de: 'Das tut mir leid für dich.', es: 'Lo siento mucho por ti.' },
            { de: 'Wie hast du dich dabei gefühlt?', es: '¿Cómo te sentiste?' }
          ]
        },
        {
          funktion: 'eigene Fehler korrigieren',
          es: 'Corregir los propios errores',
          wendungen: [
            { de: 'Entschuldigung, ich meine …', es: 'Perdón, quiero decir …' },
            { de: 'Nein, warte – das stimmt nicht ganz.', es: 'No, espera, eso no es del todo así.' },
            { de: 'Also, noch einmal von vorne.', es: 'Vale, otra vez desde el principio.' }
          ]
        }
      ]
    },

    // ==================== LEKTION 2 ====================
    {
      id: 'a21-l2',
      legacyId: 'l2',
      nr: 2,
      name: 'Die Einladung',
      woerter: [
        {
          thema: 'Obst und Gemüse',
          items: [
            { de: 'der Apfel, ¨-', es: 'la manzana' },
            { de: 'die Birne, -n', es: 'la pera' },
            { de: 'die Erdbeere, -n', es: 'la fresa' },
            { de: 'die Traube, -n', es: 'la uva' },
            { de: 'die Kirsche, -n', es: 'la cereza' },
            { de: 'die Marille (AT) / die Aprikose', es: 'el albaricoque' },
            { de: 'die Zitrone, -n', es: 'el limón' },
            { de: 'die Zwiebel, -n', es: 'la cebolla' },
            { de: 'der Knoblauch', es: 'el ajo' },
            { de: 'die Karotte (AT) / die Möhre', es: 'la zanahoria' },
            { de: 'der Paprika', es: 'el pimiento' },
            { de: 'die Gurke, -n', es: 'el pepino' },
            { de: 'der Salat', es: 'la lechuga' },
            { de: 'die Erdäpfel (AT) / die Kartoffeln', es: 'las patatas' },
            { de: 'die Paradeiser (AT) / die Tomaten', es: 'los tomates' },
            { de: 'der Kürbis', es: 'la calabaza' },
            { de: 'die Bohne, -n', es: 'la judía' },
            { de: 'der Pilz, -e', es: 'la seta' }
          ]
        },
        {
          thema: 'Essen',
          items: [
            { de: 'die Vorspeise, -n', es: 'el entrante' },
            { de: 'die Hauptspeise, -n', es: 'el plato principal' },
            { de: 'die Beilage, -n', es: 'la guarnición' },
            { de: 'die Nachspeise, -n', es: 'el postre' },
            { de: 'der Braten', es: 'el asado' },
            { de: 'das Schnitzel', es: 'el escalope' },
            { de: 'der Knödel (AT)', es: 'la bola de pan/patata' },
            { de: 'die Suppe, -n', es: 'la sopa' },
            { de: 'die Zutat, -en', es: 'el ingrediente' },
            { de: 'das Rezept, -e', es: 'la receta' },
            { de: 'vegetarisch / vegan', es: 'vegetariano / vegano' },
            { de: 'scharf', es: 'picante' },
            { de: 'salzig', es: 'salado' },
            { de: 'süß', es: 'dulce' },
            { de: 'sauer', es: 'ácido, agrio' },
            { de: 'fett', es: 'graso' },
            { de: 'frisch', es: 'fresco' },
            { de: 'schmecken', es: 'saber (a), gustar (comida)' },
            { de: 'probieren', es: 'probar' },
            { de: 'satt sein', es: 'estar lleno' }
          ]
        },
        {
          thema: 'Süßes und Getränke',
          items: [
            { de: 'der Kuchen', es: 'el bizcocho' },
            { de: 'die Torte, -n', es: 'la tarta' },
            { de: 'der Apfelstrudel (AT)', es: 'el strudel de manzana' },
            { de: 'die Sachertorte (AT)', es: 'la tarta Sacher' },
            { de: 'die Schokolade', es: 'el chocolate' },
            { de: 'das Eis', es: 'el helado' },
            { de: 'der Keks, -e', es: 'la galleta' },
            { de: 'der Kaffee', es: 'el café' },
            { de: 'die Melange (AT)', es: 'el café con leche vienés' },
            { de: 'der Tee', es: 'el té' },
            { de: 'der Saft, ¨-e', es: 'el zumo' },
            { de: 'das Mineralwasser', es: 'el agua mineral' },
            { de: 'der Wein', es: 'el vino' },
            { de: 'das Bier', es: 'la cerveza' },
            { de: 'der Sekt', es: 'el cava' }
          ]
        },
        {
          thema: 'Im Restaurant und zu Gast',
          items: [
            { de: 'die Speisekarte, -n', es: 'la carta' },
            { de: 'bestellen', es: 'pedir' },
            { de: 'die Rechnung, -en', es: 'la cuenta' },
            { de: 'getrennt / zusammen zahlen', es: 'pagar por separado / junto' },
            { de: 'das Trinkgeld', es: 'la propina' },
            { de: 'reservieren', es: 'reservar' },
            { de: 'die Einladung, -en', es: 'la invitación' },
            { de: 'einladen', es: 'invitar' },
            { de: 'der Gast, ¨-e', es: 'el invitado' },
            { de: 'mitbringen', es: 'llevar (algo consigo)' }
          ]
        }
      ],
      pitfalls: [
        '"weil" manda el verbo al final; "denn" NO cambia el orden. Ich komme nicht, weil ich arbeiten MUSS. / …, denn ich MUSS arbeiten.',
        'Después de "Was für" la terminación de ein- depende del caso y del género, no de "für": "Was für einen Wein?" (Akk.) pero "Was für ein Wein ist das?" (Nom.).',
        'Ojo con los austriacismos de comida: Erdäpfel (Kartoffeln), Paradeiser (Tomaten), Marille (Aprikose), Karfiol (Blumenkohl).'
      ],
      grammatik: [
        {
          regel: 'Konjunktion weil',
          key: 'konjunktion-weil',
          erklaerung: '"weil" = porque. Manda el verbo conjugado AL FINAL de la frase subordinada.',
          detail:
            '"weil" introduce la causa. Es una conjunción SUBORDINANTE, así que reordena la frase: todo lo demás va delante y el verbo conjugado cierra la subordinada. "Ich komme nicht, weil ich arbeiten muss."\n\nSi hay dos verbos (modal + infinitivo, o Perfekt), el orden final es: infinitivo/participio + verbo conjugado. "…, weil ich nicht kommen KANN." / "…, weil ich den Bus verpasst HABE."\n\nLa subordinada también puede ir primera. En ese caso ocupa la posición 1 de la frase entera, así que la principal invierte (verbo antes del sujeto): "Weil es regnet, BLEIBEN WIR zu Hause."\n\nNo confundas "weil" con "denn": significan lo mismo pero "denn" es coordinante y NO cambia el orden. Y "deshalb / deswegen" expresan la consecuencia, no la causa, y provocan inversión.',
          tabelle: {
            title: 'weil / denn / deshalb',
            headers: ['Conector', 'Significado', 'Orden', 'Ejemplo'],
            rows: [
              ['weil', 'porque (causa)', 'verbo AL FINAL', 'Ich bleibe, weil es regnet.'],
              ['denn', 'porque (causa)', 'orden normal', 'Ich bleibe, denn es regnet.'],
              ['deshalb / deswegen', 'por eso (consecuencia)', 'inversión', 'Es regnet, deshalb bleibe ich.']
            ]
          },
          beispiele: [
            { de: 'Ich komme nicht, weil ich arbeiten muss.', es: 'No voy porque tengo que trabajar.' },
            { de: 'Weil es regnet, bleiben wir zu Hause.', es: 'Como llueve, nos quedamos en casa.' },
            { de: 'Sie isst kein Fleisch, weil sie Vegetarierin ist.', es: 'No come carne porque es vegetariana.' },
            { de: 'Wir sind früher gegangen, weil das Essen kalt war.', es: 'Nos fuimos antes porque la comida estaba fría.' }
          ],
          mehr: {
            title: 'Con Perfekt y con modal',
            examples: [
              { de: '…, weil ich den Zug verpasst habe.', es: '…porque he perdido el tren.' },
              { de: '…, weil ich morgen früh arbeiten muss.', es: '…porque mañana tengo que trabajar temprano.' }
            ]
          }
        },
        {
          regel: 'Frage: Was für ein- + Akkusativ',
          key: 'was-fuer-ein',
          erklaerung: 'Pregunta por el TIPO de algo. La terminación de "ein-" sigue el género y el caso del sustantivo.',
          detail:
            '"Was für ein-…?" = ¿qué tipo de…? Pregunta por la clase o la característica, no por cuál de varios (eso sería "welch-").\n\nLa palabra "für" aquí NO rige acusativo: el caso lo decide el verbo de la frase. Con "möchten / nehmen / trinken" (que piden acusativo) dirás "Was für einen Wein möchtest du?"; pero con "sein" (nominativo) dirás "Was für ein Wein ist das?".\n\nEn plural y con sustantivos incontables desaparece el artículo: "Was für Musik hörst du gern?" / "Was für Wein trinkt ihr?"',
          tabelle: {
            title: 'Terminaciones de was für ein-',
            headers: ['Caso', 'masculino', 'femenino', 'neutro', 'plural'],
            rows: [
              ['Nominativ', 'was für ein', 'was für eine', 'was für ein', 'was für'],
              ['Akkusativ', 'was für einen', 'was für eine', 'was für ein', 'was für']
            ]
          },
          beispiele: [
            { de: 'Was für einen Wein möchtest du?', es: '¿Qué tipo de vino quieres?' },
            { de: 'Was für eine Suppe ist das?', es: '¿Qué clase de sopa es esta?' },
            { de: 'Was für ein Brot kaufen wir?', es: '¿Qué tipo de pan compramos?' },
            { de: 'Was für Musik hörst du gern?', es: '¿Qué tipo de música te gusta?' }
          ],
          mehr: {
            title: 'was für ein- vs. welch-',
            examples: [
              { de: 'Was für einen Kuchen magst du? – Schokoladenkuchen.', es: '¿Qué tipo de tarta te gusta? – De chocolate. (clase)' },
              { de: 'Welchen Kuchen nimmst du? – Den hier.', es: '¿Qué tarta te llevas? – Esta. (una concreta)' }
            ]
          }
        }
      ],
      kommunikation: [
        {
          funktion: 'jemanden beruhigen und Ratschläge geben',
          wendungen: [
            { de: 'Keine Sorge, das schaffst du!', es: 'No te preocupes, ¡lo consigues!' },
            { de: 'An deiner Stelle würde ich …', es: 'Yo en tu lugar …' },
            { de: 'Das ist doch halb so schlimm.', es: 'No es para tanto.' }
          ]
        },
        {
          funktion: 'mit dem Herkunftsland / einer anderen Region vergleichen',
          wendungen: [
            { de: 'Bei uns isst man das ganz anders.', es: 'En mi país eso se come de otra forma.' },
            { de: 'In Spanien gibt es das auch, aber mit Fisch.', es: 'En España también existe, pero con pescado.' },
            { de: 'Das kenne ich von zu Hause nicht.', es: 'Eso no lo conozco de mi tierra.' }
          ]
        },
        {
          funktion: 'Überraschung ausdrücken',
          wendungen: [
            { de: 'Wirklich? Das wusste ich nicht!', es: '¿En serio? ¡No lo sabía!' },
            { de: 'Das ist ja unglaublich!', es: '¡Es increíble!' },
            { de: 'Echt jetzt?', es: '¿En serio?' }
          ]
        },
        {
          funktion: 'private Einladungen',
          wendungen: [
            { de: 'Ich möchte dich zum Essen einladen.', es: 'Quiero invitarte a comer.' },
            { de: 'Soll ich etwas mitbringen?', es: '¿Llevo algo?' },
            { de: 'Sehr gern, ich komme!', es: '¡Con mucho gusto, voy!' }
          ]
        },
        {
          funktion: 'im Restaurant',
          wendungen: [
            { de: 'Wir hätten gern die Speisekarte.', es: 'Quisiéramos la carta.' },
            { de: 'Ich nehme das Schnitzel mit Erdäpfelsalat.', es: 'Yo tomo el escalope con ensalada de patata.' },
            { de: 'Zahlen, bitte! – Getrennt oder zusammen?', es: '¡La cuenta! – ¿Por separado o junto?' }
          ]
        }
      ]
    },

    // ==================== LEKTION 3 ====================
    {
      id: 'a21-l3',
      legacyId: 'l3',
      nr: 3,
      name: 'Joggen ist super!',
      woerter: [
        {
          thema: 'Mannschaftssportarten',
          items: [
            { de: 'der Fußball', es: 'el fútbol' },
            { de: 'der Handball', es: 'el balonmano' },
            { de: 'der Volleyball', es: 'el voleibol' },
            { de: 'der Basketball', es: 'el baloncesto' },
            { de: 'das Eishockey', es: 'el hockey sobre hielo' },
            { de: 'die Mannschaft, -en', es: 'el equipo' },
            { de: 'das Team, -s', es: 'el equipo' },
            { de: 'der Verein, -e', es: 'el club' },
            { de: 'das Tor, -e', es: 'el gol / la portería' },
            { de: 'gewinnen', es: 'ganar' },
            { de: 'verlieren', es: 'perder' },
            { de: 'der Sieg, -e', es: 'la victoria' },
            { de: 'die Niederlage, -n', es: 'la derrota' },
            { de: 'das Spiel, -e', es: 'el partido' },
            { de: 'der Trainer / die Trainerin', es: 'el entrenador / la entrenadora' }
          ]
        },
        {
          thema: 'Leichtathletik',
          items: [
            { de: 'laufen', es: 'correr' },
            { de: 'joggen', es: 'hacer footing' },
            { de: 'springen', es: 'saltar' },
            { de: 'der Weitsprung', es: 'el salto de longitud' },
            { de: 'der Hochsprung', es: 'el salto de altura' },
            { de: 'werfen', es: 'lanzar' },
            { de: 'die Strecke, -n', es: 'el recorrido' },
            { de: 'der Marathon', es: 'el maratón' },
            { de: 'das Stadion', es: 'el estadio' },
            { de: 'der Wettkampf, ¨-e', es: 'la competición' },
            { de: 'der Rekord, -e', es: 'el récord' }
          ]
        },
        {
          thema: 'Fitness und Individualsportarten',
          items: [
            { de: 'das Fitnessstudio, -s', es: 'el gimnasio' },
            { de: 'Yoga machen', es: 'hacer yoga' },
            { de: 'Rad fahren', es: 'ir en bici' },
            { de: 'schwimmen', es: 'nadar' },
            { de: 'klettern', es: 'escalar' },
            { de: 'Ski fahren', es: 'esquiar' },
            { de: 'wandern', es: 'hacer senderismo' },
            { de: 'tanzen', es: 'bailar' },
            { de: 'trainieren', es: 'entrenar' },
            { de: 'sich aufwärmen', es: 'calentar' },
            { de: 'sich bewegen', es: 'moverse, hacer ejercicio' },
            { de: 'fit sein', es: 'estar en forma' },
            { de: 'sportlich', es: 'deportista' },
            { de: 'anstrengend', es: 'agotador' },
            { de: 'die Ausdauer', es: 'la resistencia' },
            { de: 'die Verletzung, -en', es: 'la lesión' }
          ]
        }
      ],
      pitfalls: [
        'Tras un comparativo siempre va "als", nunca "wie": "größer ALS", no "größer wie" (error muy común incluso entre nativos).',
        'El superlativo con verbo lleva "am …-sten": "Er läuft am schnellsten" (no "der schnellste" salvo con sustantivo).',
        '"jemand" y "niemand" se declinan: jemanden (Akk.), jemandem (Dat.).'
      ],
      grammatik: [
        {
          regel: 'Wiederholung Komparativ und Superlativ: gut, viel, gern',
          key: 'komparativ-wdh',
          erklaerung: 'Tres formas irregulares que hay que saber de memoria: gut–besser–am besten, viel–mehr–am meisten, gern–lieber–am liebsten.',
          detail:
            'Son las tres irregularidades más frecuentes del alemán. No siguen la regla de -er / -sten, así que se memorizan como bloque.\n\n"gern / lieber / am liebsten" no describe cosas sino cuánto te gusta HACER algo, y acompaña al verbo: "Ich schwimme gern, aber ich laufe lieber, und am liebsten klettere ich."\n\nOjo: "lieber" (preferir hacer) no es lo mismo que "besser" (mejor de calidad). "Ich spiele lieber Tennis" = prefiero jugar al tenis. "Ich spiele besser Tennis" = juego mejor al tenis.',
          tabelle: {
            title: 'Las tres irregulares',
            headers: ['Positivo', 'Comparativo', 'Superlativo', 'Uso'],
            rows: [
              ['gut', 'besser', 'am besten', 'calidad'],
              ['viel', 'mehr', 'am meisten', 'cantidad'],
              ['gern', 'lieber', 'am liebsten', 'preferencia al hacer algo']
            ]
          },
          beispiele: [
            { de: 'Ich schwimme gern, aber ich laufe lieber.', es: 'Me gusta nadar, pero prefiero correr.' },
            { de: 'Am liebsten gehe ich klettern.', es: 'Lo que más me gusta es escalar.' },
            { de: 'Zofia spielt besser Volleyball als ich.', es: 'Zofia juega mejor al voleibol que yo.' },
            { de: 'Er trainiert am meisten von allen.', es: 'Él es el que más entrena de todos.' }
          ]
        },
        {
          regel: 'Komparativ und Superlativ',
          key: 'komparativ-superlativ',
          erklaerung: 'Comparativo: adjetivo + -er. Superlativo: am + adjetivo + -sten. Los monosílabos suelen añadir Umlaut.',
          detail:
            'Comparativo = adjetivo + -er (schnell → schneller, interessant → interessanter). Muchos adjetivos cortos de una sílaba añaden además Umlaut: alt → älter, jung → jünger, groß → größer, stark → stärker, lang → länger.\n\nSuperlativo con verbo = am + adjetivo + -sten: "Er läuft am schnellsten." Si el adjetivo acaba en -t, -d, -s, -ß, -z se mete una -e- para poder pronunciarlo: am ältesten, am interessantesten.\n\nSi el superlativo va DELANTE de un sustantivo, se usa el artículo + terminación: "der schnellste Läufer", "die beste Mannschaft".\n\nAlgunos adjetivos son irregulares: gut–besser–am besten, hoch–höher–am höchsten, nah–näher–am nächsten.',
          tabelle: {
            title: 'Formación',
            headers: ['Positivo', 'Comparativo', 'Superlativo', 'Nota'],
            rows: [
              ['schnell', 'schneller', 'am schnellsten', 'regular'],
              ['alt', 'älter', 'am ältesten', 'Umlaut + -e-'],
              ['groß', 'größer', 'am größten', 'Umlaut, irregular'],
              ['teuer', 'teurer', 'am teuersten', 'pierde la -e-'],
              ['hoch', 'höher', 'am höchsten', 'irregular'],
              ['gut', 'besser', 'am besten', 'irregular']
            ]
          },
          beispiele: [
            { de: 'Fußball ist populärer als Handball.', es: 'El fútbol es más popular que el balonmano.' },
            { de: 'Von allen läuft Zofia am schnellsten.', es: 'De todos, Zofia es la que corre más rápido.' },
            { de: 'Klettern ist anstrengender als Yoga.', es: 'Escalar es más agotador que el yoga.' },
            { de: 'Das ist die beste Mannschaft der Liga.', es: 'Es el mejor equipo de la liga.' }
          ]
        },
        {
          regel: 'Vergleichspartikel als, wie',
          key: 'als-wie',
          erklaerung: '"als" tras comparativo (desigualdad); "(so) … wie" para igualdad.',
          detail:
            'Regla sencilla y sin excepciones: si delante hay un COMPARATIVO (-er), la partícula es "als". Si comparas dos cosas IGUALES, usas "so … wie".\n\n"Schwimmen ist gesünder ALS Autofahren." (desigual)\n"Sie ist SO sportlich WIE ihr Bruder." (igual)\n\nPara reforzar la igualdad puedes usar "genauso … wie" (exactamente igual de) y para negarla "nicht so … wie": "Handball ist nicht so populär wie Fußball."\n\nEste es uno de los errores más frecuentes de los hispanohablantes porque en español usamos "que" y "como" de otra manera. Truco: -er → als.',
          tabelle: {
            title: 'Comparar',
            headers: ['Tipo', 'Estructura', 'Ejemplo'],
            rows: [
              ['Desigualdad', 'comparativo + als', 'Laufen ist anstrengender als Yoga.'],
              ['Igualdad', 'so + positivo + wie', 'Sie ist so schnell wie ich.'],
              ['Igualdad enfática', 'genauso + positivo + wie', 'Er trainiert genauso viel wie du.'],
              ['Desigualdad negada', 'nicht so + positivo + wie', 'Handball ist nicht so populär wie Fußball.']
            ]
          },
          beispiele: [
            { de: 'Schwimmen ist gesünder als Autofahren.', es: 'Nadar es más sano que ir en coche.' },
            { de: 'Sie ist so sportlich wie ihr Bruder.', es: 'Ella es tan deportista como su hermano.' },
            { de: 'Der Marathon war härter, als ich gedacht habe.', es: 'El maratón fue más duro de lo que pensaba.' },
            { de: 'Yoga ist nicht so anstrengend wie Klettern.', es: 'El yoga no es tan agotador como escalar.' }
          ]
        },
        {
          regel: 'Indefinitpronomen jemand, niemand',
          key: 'jemand-niemand',
          erklaerung: 'jemand = alguien, niemand = nadie. Se declinan: jemanden (Akk.), jemandem (Dat.).',
          detail:
            'Sustituyen a una persona indeterminada y funcionan como un sustantivo masculino singular: el verbo va siempre en 3ª persona del singular. "Niemand WEISS das."\n\nSe declinan igual que el artículo: nominativo jemand / niemand, acusativo jemanden / niemanden, dativo jemandem / niemandem. En el lenguaje hablado la terminación a veces se omite, pero en el examen conviene ponerla.\n\nNo se combinan con "nicht": "niemand" ya es negativo. Di "Ich kenne niemanden", no "Ich kenne nicht jemanden".\n\nPara cosas en vez de personas se usan "etwas" (algo) y "nichts" (nada), que NO se declinan.',
          tabelle: {
            title: 'Declinación',
            headers: ['Caso', 'jemand', 'niemand', 'Ejemplo'],
            rows: [
              ['Nominativ', 'jemand', 'niemand', 'Niemand kommt.'],
              ['Akkusativ', 'jemanden', 'niemanden', 'Ich sehe niemanden.'],
              ['Dativ', 'jemandem', 'niemandem', 'Ich helfe jemandem.']
            ]
          },
          beispiele: [
            { de: 'Kennst du jemanden im Verein?', es: '¿Conoces a alguien en el club?' },
            { de: 'Niemand wollte am Sonntag mitkommen.', es: 'Nadie quiso venir el domingo.' },
            { de: 'Ich habe mit niemandem darüber gesprochen.', es: 'No he hablado con nadie de eso.' },
            { de: 'Hat jemand meine Sporttasche gesehen?', es: '¿Alguien ha visto mi bolsa de deporte?' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'einen Vorschlag machen',
          wendungen: [
            { de: 'Wollen wir am Samstag joggen gehen?', es: '¿Salimos a correr el sábado?' },
            { de: 'Wie wäre es mit Schwimmen?', es: '¿Qué tal si nadamos?' },
            { de: 'Hättest du Lust, mitzukommen?', es: '¿Te apetecería venir?' }
          ]
        },
        {
          funktion: 'Vorschläge annehmen',
          wendungen: [
            { de: 'Super Idee, machen wir!', es: '¡Buenísima idea, hagámoslo!' },
            { de: 'Ja, gern. Wann treffen wir uns?', es: 'Sí, con gusto. ¿Cuándo quedamos?' },
            { de: 'Da bin ich dabei!', es: '¡Me apunto!' }
          ]
        },
        {
          funktion: 'Vorschläge ablehnen',
          wendungen: [
            { de: 'Das ist nichts für mich.', es: 'Eso no es lo mío.' },
            { de: 'Lieber ein anderes Mal.', es: 'Mejor en otra ocasión.' },
            { de: 'Tut mir leid, da kann ich nicht.', es: 'Lo siento, ese día no puedo.' }
          ]
        },
        {
          funktion: 'etwas bewerten',
          wendungen: [
            { de: 'Joggen ist super, aber das Fitnessstudio finde ich langweilig.', es: 'Correr es genial, pero el gimnasio me parece aburrido.' },
            { de: 'Das ist mir zu anstrengend.', es: 'Eso es demasiado agotador para mí.' },
            { de: 'Ich finde das ziemlich gesund.', es: 'Me parece bastante sano.' }
          ]
        },
        {
          funktion: 'Vorlieben ausdrücken',
          wendungen: [
            { de: 'Ich mag Mannschaftssport lieber als Einzelsport.', es: 'Me gusta más el deporte de equipo que el individual.' },
            { de: 'Am liebsten trainiere ich früh am Morgen.', es: 'Lo que más me gusta es entrenar por la mañana temprano.' }
          ]
        }
      ]
    },

    // ==================== LEKTION 4 ====================
    {
      id: 'a21-l4',
      legacyId: 'l4',
      nr: 4,
      name: 'Der erste Arbeitstag',
      woerter: [
        {
          thema: 'in der Firma',
          items: [
            { de: 'die Firma, Firmen', es: 'la empresa' },
            { de: 'das Unternehmen', es: 'la empresa' },
            { de: 'die Abteilung, -en', es: 'el departamento' },
            { de: 'der Chef / die Chefin', es: 'el jefe / la jefa' },
            { de: 'die Besprechung, -en', es: 'la reunión' },
            { de: 'der Arbeitsplatz, ¨-e', es: 'el puesto de trabajo' },
            { de: 'das Büro, -s', es: 'la oficina' },
            { de: 'die Kantine, -n', es: 'el comedor' },
            { de: 'die Pause, -n', es: 'la pausa' },
            { de: 'der Vertrag, ¨-e', es: 'el contrato' },
            { de: 'das Gehalt, ¨-er', es: 'el sueldo' },
            { de: 'die Arbeitszeit, -en', es: 'la jornada laboral' },
            { de: 'die Überstunde, -n', es: 'la hora extra' },
            { de: 'der Urlaub', es: 'las vacaciones' },
            { de: 'die Bewerbung, -en', es: 'la candidatura' },
            { de: 'das Vorstellungsgespräch', es: 'la entrevista de trabajo' }
          ]
        },
        {
          thema: 'Arbeit und Kolleginnen / Kollegen',
          items: [
            { de: 'der Kollege / die Kollegin', es: 'el compañero / la compañera' },
            { de: 'zusammenarbeiten', es: 'trabajar juntos' },
            { de: 'sich vorstellen', es: 'presentarse' },
            { de: 'sich kennenlernen', es: 'conocerse' },
            { de: 'freundlich', es: 'amable' },
            { de: 'hilfsbereit', es: 'servicial' },
            { de: 'zuverlässig', es: 'fiable' },
            { de: 'pünktlich', es: 'puntual' },
            { de: 'geduldig', es: 'paciente' },
            { de: 'die Einschulung (AT)', es: 'la formación inicial en el puesto' },
            { de: 'erklären', es: 'explicar' },
            { de: 'nachfragen', es: 'preguntar (para aclarar)' },
            { de: 'einen Fehler machen', es: 'cometer un error' },
            { de: 'Bescheid sagen', es: 'avisar' }
          ]
        }
      ],
      pitfalls: [
        '"seit" es DESDE HACE (algo que sigue) y va con dativo: "seit einem Monat". No lo traduzcas por "hace" (eso es "vor": "vor einem Monat" = hace un mes, ya terminado).',
        '"für" habla de la duración prevista y va con ACUSATIVO: "für ein Jahr".',
        '"wenn" manda el verbo al final. Si la frase con wenn va primera, la principal invierte: "Wenn ich Zeit habe, HELFE ICH dir."'
      ],
      grammatik: [
        {
          regel: 'temporale Präpositionen für, über + Akkusativ',
          key: 'praep-fuer-ueber',
          erklaerung: '"für" = duración prevista, "über" = a lo largo de. Ambas con acusativo.',
          detail:
            '"für + Akkusativ" indica el tiempo que algo va a durar, visto desde fuera: "Ich bin für ein Jahr in Wien" (mi estancia dura un año). Muy típico con contratos y estancias.\n\n"über + Akkusativ" indica que algo ocurre a lo largo de todo un periodo: "über das ganze Wochenende", "über die Feiertage", "übers Jahr".\n\nNo confundas "für" (duración futura o prevista) con "seit" (duración que ya lleva pasando). "Ich arbeite für ein Jahr hier" = mi contrato es de un año. "Ich arbeite seit einem Jahr hier" = llevo un año trabajando aquí.',
          tabelle: {
            title: 'Acusativo temporal',
            headers: ['Preposición', 'Significado', 'Ejemplo'],
            rows: [
              ['für', 'durante (previsto)', 'Ich bleibe für zwei Wochen.'],
              ['über', 'a lo largo de', 'Über das Wochenende arbeite ich nicht.'],
              ['um', 'a las (hora)', 'Die Besprechung ist um 10 Uhr.']
            ]
          },
          beispiele: [
            { de: 'Ich bin für ein Jahr in dieser Abteilung.', es: 'Estoy un año en este departamento.' },
            { de: 'Über die Feiertage ist das Büro geschlossen.', es: 'Durante las fiestas la oficina está cerrada.' },
            { de: 'Der Vertrag gilt für sechs Monate.', es: 'El contrato es válido por seis meses.' }
          ]
        },
        {
          regel: 'temporale Präpositionen seit, ab, zwischen + Dativ',
          key: 'praep-seit-ab-zwischen',
          erklaerung: 'seit = desde (y sigue), ab = a partir de (futuro), zwischen = entre. Las tres con dativo.',
          detail:
            '"seit + Dativ" marca el comienzo de algo que TODAVÍA dura. En alemán se usa presente, no pasado: "Ich arbeite seit einem Monat hier" = llevo un mes trabajando aquí. Este es un choque directo con el español, que diría "llevo trabajando" o "trabajo desde hace".\n\n"ab + Dativ" mira al futuro: a partir de ese momento. "Ab nächster Woche habe ich einen neuen Vertrag."\n\n"zwischen + Dativ" señala un intervalo entre dos puntos: "zwischen 12 und 13 Uhr".\n\nCuidado con "vor + Dativ", que significa "hace" y se refiere a algo terminado: "vor einem Jahr" = hace un año.',
          tabelle: {
            title: 'Dativo temporal',
            headers: ['Preposición', 'Significado', 'Ejemplo', 'Tiempo verbal'],
            rows: [
              ['seit', 'desde hace (sigue)', 'seit einem Monat', 'presente'],
              ['ab', 'a partir de', 'ab Montag', 'presente/futuro'],
              ['zwischen', 'entre', 'zwischen 12 und 13 Uhr', '—'],
              ['vor', 'hace (terminado)', 'vor einem Jahr', 'pasado'],
              ['nach', 'después de', 'nach der Arbeit', '—']
            ]
          },
          beispiele: [
            { de: 'Ich arbeite seit einem Monat in dieser Firma.', es: 'Trabajo en esta empresa desde hace un mes.' },
            { de: 'Ab nächster Woche habe ich einen neuen Vertrag.', es: 'A partir de la semana que viene tengo un contrato nuevo.' },
            { de: 'Die Pause ist zwischen 12 und 13 Uhr.', es: 'La pausa es entre las 12 y las 13.' },
            { de: 'Vor einem Jahr habe ich noch in Polen gearbeitet.', es: 'Hace un año todavía trabajaba en Polonia.' }
          ]
        },
        {
          regel: 'Wiederholung: vor, nach, von … bis',
          key: 'praep-vor-nach',
          erklaerung: 'vor / nach + Dativ (antes / después de), von … bis (de … a).',
          detail:
            '"vor + Dativ" y "nach + Dativ" ordenan dos hechos en el tiempo: "vor der Besprechung", "nach der Arbeit". Recuerda el artículo en dativo: vor DEM Kurs, nach DER Arbeit.\n\n"von … bis" delimita un tramo: "von Montag bis Freitag", "von 8 bis 16 Uhr". Con días y horas no se pone artículo. Si necesitas artículo, "bis" se combina con "zu": "bis zum 15. Mai".',
          tabelle: {
            title: 'Ordenar el tiempo',
            headers: ['Estructura', 'Ejemplo', 'Español'],
            rows: [
              ['vor + Dativ', 'vor der Besprechung', 'antes de la reunión'],
              ['nach + Dativ', 'nach der Arbeit', 'después del trabajo'],
              ['von … bis', 'von 8 bis 16 Uhr', 'de 8 a 16'],
              ['bis zu + Dativ', 'bis zum Wochenende', 'hasta el fin de semana']
            ]
          },
          beispiele: [
            { de: 'Nach der Besprechung rufe ich dich an.', es: 'Después de la reunión te llamo.' },
            { de: 'Ich arbeite von Montag bis Freitag.', es: 'Trabajo de lunes a viernes.' },
            { de: 'Vor dem Vorstellungsgespräch war ich sehr nervös.', es: 'Antes de la entrevista estaba muy nervioso.' }
          ]
        },
        {
          regel: 'Konjunktion wenn',
          key: 'konjunktion-wenn',
          erklaerung: '"wenn" = cuando (repetido o futuro) / si (condición). Manda el verbo al final.',
          detail:
            '"wenn" es subordinante, así que el verbo conjugado va al final: "Ruf mich an, wenn du Fragen HAST."\n\nTiene dos valores. Temporal repetido o futuro: "Immer wenn es regnet, nehme ich den Bus." Condicional: "Wenn du willst, helfe ich dir."\n\nSi la subordinada va delante, ocupa la posición 1 y la principal invierte: "Wenn ich Zeit habe, HELFE ICH dir." Un fallo típico es escribir "…, ich helfe dir".\n\nNo lo confundas con "als" (cuando, para UN momento del pasado: "Als ich klein war…") ni con "wann" (solo en preguntas: "Wann kommst du?").',
          tabelle: {
            title: 'wenn / als / wann',
            headers: ['Palabra', 'Uso', 'Ejemplo'],
            rows: [
              ['wenn', 'cuando (repetido / futuro), si', 'Wenn ich Zeit habe, komme ich.'],
              ['als', 'cuando (un momento del pasado)', 'Als ich in Wien ankam, regnete es.'],
              ['wann', 'solo en preguntas', 'Wann fängt die Besprechung an?']
            ]
          },
          beispiele: [
            { de: 'Ruf mich an, wenn du Fragen hast.', es: 'Llámame si tienes preguntas.' },
            { de: 'Wenn ich Zeit habe, helfe ich dir gern.', es: 'Cuando tengo tiempo, te ayudo con gusto.' },
            { de: 'Immer wenn es regnet, nehme ich den Bus.', es: 'Siempre que llueve cojo el autobús.' },
            { de: 'Sag mir Bescheid, wenn du fertig bist.', es: 'Avísame cuando hayas terminado.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'sich / jemanden formell vorstellen',
          wendungen: [
            { de: 'Darf ich mich vorstellen? Mein Name ist …', es: '¿Me permite presentarme? Mi nombre es …' },
            { de: 'Das ist Frau Berger, unsere neue Kollegin.', es: 'Esta es la Sra. Berger, nuestra nueva compañera.' },
            { de: 'Freut mich, Sie kennenzulernen.', es: 'Encantado de conocerle.' },
            { de: 'Ich bin für die Buchhaltung zuständig.', es: 'Yo me encargo de la contabilidad.' }
          ]
        },
        {
          funktion: 'etwas nicht verstehen und nachfragen',
          wendungen: [
            { de: 'Entschuldigung, das habe ich nicht verstanden.', es: 'Perdone, no lo he entendido.' },
            { de: 'Können Sie das bitte noch einmal erklären?', es: '¿Me lo puede explicar otra vez?' },
            { de: 'Was bedeutet das genau?', es: '¿Qué significa exactamente?' },
            { de: 'Habe ich das richtig verstanden: …?', es: '¿Lo he entendido bien: …?' }
          ]
        }
      ]
    },

    // ==================== LEKTION 5 ====================
    {
      id: 'a21-l5',
      legacyId: 'l5',
      nr: 5,
      name: 'In der Schule',
      woerter: [
        {
          thema: 'Schulfächer',
          items: [
            { de: 'Mathematik / Mathe', es: 'matemáticas' },
            { de: 'Deutsch', es: 'alemán' },
            { de: 'Englisch', es: 'inglés' },
            { de: 'Geschichte', es: 'historia' },
            { de: 'Geografie', es: 'geografía' },
            { de: 'Biologie', es: 'biología' },
            { de: 'Chemie', es: 'química' },
            { de: 'Physik', es: 'física' },
            { de: 'Turnen (AT) / Sport', es: 'educación física' },
            { de: 'Musik', es: 'música' },
            { de: 'Zeichnen', es: 'dibujo' },
            { de: 'Werken', es: 'trabajos manuales' }
          ]
        },
        {
          thema: 'Schularten',
          items: [
            { de: 'der Kindergarten', es: 'la guardería' },
            { de: 'die Volksschule (AT)', es: 'la escuela primaria' },
            { de: 'die Mittelschule (AT)', es: 'la secundaria' },
            { de: 'das Gymnasium', es: 'el instituto' },
            { de: 'die HTL (AT)', es: 'el instituto técnico' },
            { de: 'die Berufsschule', es: 'la escuela de FP' },
            { de: 'die Lehre (AT)', es: 'la formación dual / el aprendizaje' },
            { de: 'die Universität / die Uni', es: 'la universidad' },
            { de: 'die Matura (AT)', es: 'la selectividad / bachillerato' }
          ]
        },
        {
          thema: 'in der Schule',
          items: [
            { de: 'die Klasse, -n', es: 'la clase (grupo)' },
            { de: 'der Unterricht', es: 'las clases' },
            { de: 'die Stunde, -n', es: 'la hora de clase' },
            { de: 'die Note, -n', es: 'la nota' },
            { de: 'das Zeugnis, -se', es: 'el boletín de notas' },
            { de: 'die Prüfung, -en', es: 'el examen' },
            { de: 'der Test, -s', es: 'la prueba' },
            { de: 'die Hausübung (AT)', es: 'los deberes' },
            { de: 'der Schüler / die Schülerin', es: 'el alumno / la alumna' },
            { de: 'der Lehrer / die Lehrerin', es: 'el profesor / la profesora' },
            { de: 'der Direktor / die Direktorin', es: 'el director / la directora' },
            { de: 'der Elternabend', es: 'la reunión de padres' },
            { de: 'das Schuljahr', es: 'el curso escolar' },
            { de: 'die Pause, -n', es: 'el recreo' },
            { de: 'sitzenbleiben', es: 'repetir curso' },
            { de: 'bestehen', es: 'aprobar' },
            { de: 'durchfallen', es: 'suspender' }
          ]
        }
      ],
      pitfalls: [
        '"deswegen" NO es una conjunción: ocupa la posición 1 y detrás va el verbo. "…, deswegen WAR ER nicht in der Schule."',
        'Los posesivos se declinan como "ein-": en dativo femenino es "meiner" (mit meiner Lehrerin), en acusativo masculino "meinen" (ich hole meinen Sohn ab).',
        'En dativo plural el posesivo lleva -en y el sustantivo una -n: "mit meinen Kindern".'
      ],
      grammatik: [
        {
          regel: 'Verbindungsadverb deswegen',
          key: 'deswegen',
          erklaerung: '"deswegen" = por eso. Es un ADVERBIO: ocupa la posición 1 y el verbo va justo detrás.',
          detail:
            'Los conectores alemanes se dividen en tres grupos según lo que le hacen al verbo, y "deswegen" pertenece al de los adverbios conectores (también deshalb, darum, daher, trotzdem, dann).\n\nComo cualquier elemento en posición 1, empuja al sujeto detrás del verbo: "Mein Sohn war krank, deswegen WAR ER nicht in der Schule." Escribir "deswegen er war…" es el error clásico.\n\nOjo a la diferencia con "weil": "weil" da la CAUSA y manda el verbo al final; "deswegen" da la CONSECUENCIA y provoca inversión. Son dos formas de decir lo mismo del revés:\n"Er war krank, deswegen ist er zu Hause geblieben." = "Er ist zu Hause geblieben, weil er krank war."',
          tabelle: {
            title: 'Los tres tipos de conector',
            headers: ['Tipo', 'Ejemplos', 'Efecto en el verbo'],
            rows: [
              ['Coordinantes', 'und, aber, oder, denn, sondern', 'no cambian nada'],
              ['Adverbios conectores', 'deswegen, deshalb, trotzdem, dann', 'posición 1 → inversión'],
              ['Subordinantes', 'weil, dass, wenn, obwohl', 'verbo AL FINAL']
            ]
          },
          beispiele: [
            { de: 'Mein Sohn war krank, deswegen war er nicht in der Schule.', es: 'Mi hijo estaba enfermo, por eso no fue al colegio.' },
            { de: 'Ich habe den Bus verpasst. Deswegen komme ich zu spät.', es: 'He perdido el bus. Por eso llego tarde.' },
            { de: 'Sie hat keine Zeit, deswegen kommt sie nicht mit.', es: 'No tiene tiempo, por eso no viene.' }
          ],
          mehr: {
            title: 'La misma idea con weil',
            examples: [
              { de: 'Er ist zu Hause geblieben, weil er krank war.', es: 'Se quedó en casa porque estaba enfermo.' },
              { de: 'Er war krank, deswegen ist er zu Hause geblieben.', es: 'Estaba enfermo, por eso se quedó en casa.' }
            ]
          }
        },
        {
          regel: 'Possessivartikel im Nominativ, Akkusativ und Dativ',
          key: 'possessiv-nom-akk-dat',
          erklaerung: 'mein, dein, sein, ihr, unser, euer, ihr/Ihr. Se declinan como "ein-" / "kein-".',
          detail:
            'El posesivo tiene dos partes: la RAÍZ dice de quién es (mein = mío, sein = de él, ihr = de ella o de ellos) y la TERMINACIÓN dice el género y el caso del objeto poseído.\n\nEso es justo al revés que en español, donde "su" no distingue el poseedor. Fíjate: "sein Sohn" = el hijo DE ÉL, "ihr Sohn" = el hijo DE ELLA.\n\nLas terminaciones son las de "ein-/kein-": nominativo masculino y neutro sin terminación, femenino y plural con -e; acusativo igual salvo el masculino, que hace -en; dativo -em (m/n), -er (f), -en (pl, y el sustantivo añade -n).\n\nCuidado con "euer": pierde la -e- al declinarse (euer Sohn, pero eure Tochter, euren Sohn).',
          tabelle: {
            title: 'Terminaciones de mein-',
            headers: ['Caso', 'masculino', 'femenino', 'neutro', 'plural'],
            rows: [
              ['Nominativ', 'mein', 'meine', 'mein', 'meine'],
              ['Akkusativ', 'meinen', 'meine', 'mein', 'meine'],
              ['Dativ', 'meinem', 'meiner', 'meinem', 'meinen (+ -n)']
            ]
          },
          beispiele: [
            { de: 'Meine Tochter geht in die Volksschule.', es: 'Mi hija va a primaria.' },
            { de: 'Ich hole meinen Sohn von der Schule ab.', es: 'Recojo a mi hijo del colegio.' },
            { de: 'Ich spreche morgen mit meiner Lehrerin.', es: 'Mañana hablo con mi profesora.' },
            { de: 'Wir fahren mit unseren Kindern nach Graz.', es: 'Vamos a Graz con nuestros hijos.' }
          ],
          mehr: {
            title: 'sein o ihr',
            examples: [
              { de: 'Das ist Samir und das ist seine Schwester.', es: 'Este es Samir y esta es su hermana (de él).' },
              { de: 'Das ist Maria und das ist ihr Bruder.', es: 'Esta es Maria y este es su hermano (de ella).' }
            ]
          }
        }
      ],
      kommunikation: [
        {
          funktion: 'ein Gespräch abschließen',
          wendungen: [
            { de: 'Gut, dann machen wir das so.', es: 'Bien, pues lo hacemos así.' },
            { de: 'Danke für das Gespräch. Auf Wiedersehen!', es: 'Gracias por la conversación. ¡Adiós!' },
            { de: 'Dann bis zum nächsten Mal.', es: 'Hasta la próxima, entonces.' }
          ]
        },
        {
          funktion: 'Gleichgültigkeit ausdrücken',
          wendungen: [
            { de: 'Das ist mir egal.', es: 'Me da igual.' },
            { de: 'Mir ist beides recht.', es: 'Me vale cualquiera de las dos.' },
            { de: 'Wie du willst.', es: 'Como quieras.' }
          ]
        },
        {
          funktion: 'um Verständnis bitten und Verständnishilfen anbieten',
          wendungen: [
            { de: 'Können Sie bitte langsamer sprechen?', es: '¿Puede hablar más despacio?' },
            { de: 'Soll ich es Ihnen aufschreiben?', es: '¿Se lo escribo?' },
            { de: 'Ich erkläre es Ihnen gern noch einmal.', es: 'Se lo explico otra vez con gusto.' }
          ]
        },
        {
          funktion: 'Unsicherheit ausdrücken',
          wendungen: [
            { de: 'Ich bin mir nicht sicher.', es: 'No estoy seguro.' },
            { de: 'Ich glaube schon, aber ich weiß es nicht genau.', es: 'Creo que sí, pero no lo sé con exactitud.' },
            { de: 'Vielleicht, das kann ich nicht sagen.', es: 'Quizá, no lo sabría decir.' }
          ]
        }
      ]
    },

    // ==================== LEKTION 6 ====================
    {
      id: 'a21-l6',
      legacyId: 'l6',
      nr: 6,
      name: 'Feierabend',
      woerter: [
        {
          thema: 'Medien',
          items: [
            { de: 'die Nachrichten (Pl.)', es: 'las noticias' },
            { de: 'die Zeitung, -en', es: 'el periódico' },
            { de: 'die Zeitschrift, -en', es: 'la revista' },
            { de: 'das Radio', es: 'la radio' },
            { de: 'die Sendung, -en', es: 'el programa' },
            { de: 'der Podcast, -s', es: 'el pódcast' },
            { de: 'streamen', es: 'ver en streaming' },
            { de: 'der Kanal, ¨-e', es: 'el canal' },
            { de: 'die sozialen Medien', es: 'las redes sociales' },
            { de: 'posten', es: 'publicar' },
            { de: 'die Werbung', es: 'la publicidad' },
            { de: 'die Nachricht, -en', es: 'el mensaje / la noticia' }
          ]
        },
        {
          thema: 'Film und Fernsehen',
          items: [
            { de: 'der Film, -e', es: 'la película' },
            { de: 'die Serie, -n', es: 'la serie' },
            { de: 'die Komödie, -n', es: 'la comedia' },
            { de: 'der Krimi, -s', es: 'la película policíaca' },
            { de: 'der Actionfilm', es: 'la película de acción' },
            { de: 'die Dokumentation / die Doku', es: 'el documental' },
            { de: 'der Schauspieler / die Schauspielerin', es: 'el actor / la actriz' },
            { de: 'die Folge, -n', es: 'el capítulo' },
            { de: 'die Staffel, -n', es: 'la temporada' },
            { de: 'der Untertitel', es: 'los subtítulos' },
            { de: 'die Handlung', es: 'la trama' },
            { de: 'fernsehen', es: 'ver la tele' },
            { de: 'spannend', es: 'emocionante' },
            { de: 'langweilig', es: 'aburrido' },
            { de: 'lustig', es: 'divertido' },
            { de: 'gruselig', es: 'de miedo' }
          ]
        },
        {
          thema: 'Feierabend und Freizeit',
          items: [
            { de: 'der Feierabend', es: 'el fin de la jornada' },
            { de: 'sich entspannen', es: 'relajarse' },
            { de: 'faulenzen', es: 'holgazanear' },
            { de: 'sich treffen (mit + Dat.)', es: 'quedar (con)' },
            { de: 'ausgehen', es: 'salir' },
            { de: 'zu Hause bleiben', es: 'quedarse en casa' },
            { de: 'Zeit verbringen', es: 'pasar el tiempo' },
            { de: 'Lust haben (auf + Akk.)', es: 'tener ganas (de)' }
          ]
        }
      ],
      pitfalls: [
        '"dass" (conjunción, dos eses) no es lo mismo que "das" (artículo o pronombre, una ese).',
        'Tras "dass" el verbo va SIEMPRE al final: "Ich glaube, dass der Film gut IST."',
        '"trotzdem" provoca inversión (posición 1 + verbo); "obwohl" manda el verbo al final. No son intercambiables.'
      ],
      grammatik: [
        {
          regel: 'Konjunktion dass',
          key: 'konjunktion-dass',
          erklaerung: '"dass" = que. Introduce una subordinada completiva y manda el verbo AL FINAL.',
          detail:
            '"dass" enlaza una frase principal con lo que piensas, dices o sientes. Va detrás de verbos y expresiones como: ich glaube, ich denke, ich finde, ich hoffe, ich weiß, es ist gut/schade/wichtig.\n\nComo toda subordinada, lleva coma delante y el verbo conjugado al final: "Ich glaube, dass der Film sehr spannend IST." Con Perfekt o modal, el orden final es participio/infinitivo + verbo conjugado: "…, dass ich die Folge schon gesehen HABE."\n\nEl error de escritura más frecuente es confundir "dass" con "das". Truco: si puedes sustituirlo por "dieses" o "welches", es "das" (artículo/pronombre). Si es un "que" que introduce una frase entera, es "dass".\n\nEn el lenguaje hablado se puede omitir "dass", pero entonces el orden vuelve a ser normal: "Ich glaube, der Film ist gut."',
          tabelle: {
            title: 'dass o das',
            headers: ['Palabra', 'Función', 'Ejemplo'],
            rows: [
              ['dass', 'conjunción (que)', 'Ich weiß, dass er kommt.'],
              ['das', 'artículo neutro', 'Das Buch ist gut.'],
              ['das', 'pronombre (eso)', 'Das finde ich super.'],
              ['das', 'relativo (que)', 'Das Buch, das ich lese, …']
            ]
          },
          beispiele: [
            { de: 'Ich glaube, dass der Film sehr spannend ist.', es: 'Creo que la película es muy emocionante.' },
            { de: 'Er sagt, dass er lieber Dokus schaut.', es: 'Dice que prefiere ver documentales.' },
            { de: 'Ich finde, dass man zu viel fernsieht.', es: 'Creo que se ve demasiada tele.' },
            { de: 'Es ist schade, dass die Serie zu Ende ist.', es: 'Es una pena que la serie se haya acabado.' }
          ],
          mehr: {
            title: 'Con Perfekt y modal',
            examples: [
              { de: '…, dass ich die Folge schon gesehen habe.', es: '…que ya he visto el capítulo.' },
              { de: '…, dass wir morgen früh aufstehen müssen.', es: '…que mañana tenemos que madrugar.' }
            ]
          }
        },
        {
          regel: 'Verbindungsadverb trotzdem',
          key: 'trotzdem',
          erklaerung: '"trotzdem" = aun así. Adverbio: posición 1 y el verbo justo detrás.',
          detail:
            '"trotzdem" expresa que algo pasa CONTRA lo esperado. Como "deswegen", es un adverbio conector: va en posición 1 y provoca inversión. "Der Film war lang. Trotzdem HAT ER mir gefallen."\n\nLa idea contraria se puede decir también con "obwohl", pero ojo: "obwohl" es SUBORDINANTE y manda el verbo al final. Las dos frases significan lo mismo con estructuras opuestas:\n"Obwohl der Film lang WAR, hat er mir gefallen."\n"Der Film war lang, trotzdem HAT ER mir gefallen."\n\nNo confundas "trotzdem" (adverbio) con "trotz" (preposición + genitivo: "trotz des Regens").',
          tabelle: {
            title: 'obwohl / trotzdem',
            headers: ['Conector', 'Tipo', 'Posición del verbo', 'Ejemplo'],
            rows: [
              ['obwohl', 'subordinante', 'al final', 'Obwohl es spät war, blieben wir.'],
              ['trotzdem', 'adverbio', 'inversión', 'Es war spät. Trotzdem blieben wir.'],
              ['aber', 'coordinante', 'orden normal', 'Es war spät, aber wir blieben.']
            ]
          },
          beispiele: [
            { de: 'Der Film war lang. Trotzdem hat er mir gefallen.', es: 'La película era larga. Aun así me gustó.' },
            { de: 'Ich bin müde, trotzdem schaue ich noch eine Folge.', es: 'Estoy cansado, aun así veo otro capítulo.' },
            { de: 'Obwohl es spät war, haben wir weitergeschaut.', es: 'Aunque era tarde, seguimos viendo.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'jemanden überreden',
          wendungen: [
            { de: 'Komm schon, das wird bestimmt lustig!', es: '¡Venga, seguro que es divertido!' },
            { de: 'Nur eine Folge, bitte!', es: '¡Solo un capítulo, porfa!' },
            { de: 'Sei doch nicht so!', es: '¡No seas así!' }
          ]
        },
        {
          funktion: 'etwas versprechen und darauf reagieren',
          wendungen: [
            { de: 'Ich verspreche dir, dass ich morgen früh aufstehe.', es: 'Te prometo que mañana me levanto pronto.' },
            { de: 'Versprochen? – Versprochen!', es: '¿Prometido? – ¡Prometido!' },
            { de: 'Darauf kannst du dich verlassen.', es: 'Puedes contar con ello.' }
          ]
        },
        {
          funktion: 'eine Meinung äußern und wiedergeben',
          wendungen: [
            { de: 'Meiner Meinung nach ist die Serie überbewertet.', es: 'En mi opinión, la serie está sobrevalorada.' },
            { de: 'Ich finde, dass …', es: 'Yo creo que …' },
            { de: 'Er sagt, dass er lieber Dokus schaut.', es: 'Dice que prefiere ver documentales.' }
          ]
        },
        {
          funktion: 'sich über Mediengewohnheiten austauschen',
          wendungen: [
            { de: 'Wie viel Zeit verbringst du am Handy?', es: '¿Cuánto tiempo pasas con el móvil?' },
            { de: 'Ich schaue kaum fern, aber ich höre viele Podcasts.', es: 'Casi no veo la tele, pero escucho muchos pódcast.' },
            { de: 'Am Abend lese ich lieber.', es: 'Por la tarde prefiero leer.' }
          ]
        }
      ]
    },

    // ==================== LEKTION 7 ====================
    {
      id: 'a21-l7',
      legacyId: 'l7',
      nr: 7,
      name: 'Der Umzug',
      woerter: [
        {
          thema: 'Umzug und Renovierung: Tätigkeiten',
          items: [
            { de: 'umziehen', es: 'mudarse' },
            { de: 'packen / auspacken', es: 'empaquetar / desempaquetar' },
            { de: 'tragen', es: 'llevar, cargar' },
            { de: 'aufbauen / abbauen', es: 'montar / desmontar' },
            { de: 'streichen', es: 'pintar (paredes)' },
            { de: 'renovieren', es: 'reformar' },
            { de: 'bohren', es: 'taladrar' },
            { de: 'montieren', es: 'montar' },
            { de: 'aufräumen', es: 'ordenar' },
            { de: 'putzen', es: 'limpiar' },
            { de: 'einrichten', es: 'amueblar, decorar' },
            { de: 'reparieren', es: 'reparar' },
            { de: 'aufhängen', es: 'colgar' }
          ]
        },
        {
          thema: 'Umzug und Renovierung: Dinge',
          items: [
            { de: 'der Karton / die Schachtel (AT)', es: 'la caja' },
            { de: 'das Klebeband', es: 'la cinta adhesiva' },
            { de: 'der Pinsel', es: 'la brocha' },
            { de: 'die Farbe, -n', es: 'la pintura' },
            { de: 'die Bohrmaschine, -n', es: 'el taladro' },
            { de: 'der Hammer, ¨-', es: 'el martillo' },
            { de: 'der Schraubenzieher', es: 'el destornillador' },
            { de: 'die Schraube, -n', es: 'el tornillo' },
            { de: 'der Nagel, ¨-', es: 'el clavo' },
            { de: 'die Leiter, -n', es: 'la escalera de mano' },
            { de: 'das Werkzeug', es: 'la herramienta' }
          ]
        },
        {
          thema: 'Wohnen und Mieten',
          items: [
            { de: 'der Mieter / die Mieterin', es: 'el inquilino / la inquilina' },
            { de: 'der Vermieter / die Vermieterin', es: 'el casero / la casera' },
            { de: 'der Mietvertrag, ¨-e', es: 'el contrato de alquiler' },
            { de: 'die Miete', es: 'el alquiler' },
            { de: 'die Kaution', es: 'la fianza' },
            { de: 'die Übergabe', es: 'la entrega de llaves' },
            { de: 'kündigen', es: 'rescindir' },
            { de: 'der Nachbar / die Nachbarin', es: 'el vecino / la vecina' },
            { de: 'die Hausordnung', es: 'las normas de la comunidad' },
            { de: 'die Betriebskosten (Pl.)', es: 'los gastos comunes' }
          ]
        },
        {
          thema: 'Einrichtungs- und Gebrauchsgegenstände',
          items: [
            { de: 'das Regal, -e', es: 'la estantería' },
            { de: 'die Kommode, -n', es: 'la cómoda' },
            { de: 'der Vorhang, ¨-e', es: 'la cortina' },
            { de: 'das Kissen', es: 'el cojín' },
            { de: 'die Decke, -n', es: 'la manta' },
            { de: 'der Teppich, -e', es: 'la alfombra' },
            { de: 'der Spiegel', es: 'el espejo' },
            { de: 'die Lampe, -n', es: 'la lámpara' },
            { de: 'der Wäschekorb', es: 'el cesto de la ropa' },
            { de: 'der Mülleimer', es: 'el cubo de basura' },
            { de: 'die Steckdose, -n', es: 'el enchufe' },
            { de: 'das Bild, -er', es: 'el cuadro' }
          ]
        }
      ],
      pitfalls: [
        'Wechselpräpositionen: pregúntate Wohin? (movimiento → ACUSATIVO) o Wo? (posición → DATIVO). "Ich stelle die Lampe auf DEN Tisch" / "Die Lampe steht auf DEM Tisch".',
        'Los pares stellen/stehen, legen/liegen, hängen/hängen, setzen/sitzen: el primero es la ACCIÓN (regular, + acusativo), el segundo la POSICIÓN (irregular, + dativo).',
        'in + dem = im, in + das = ins, an + dem = am, an + das = ans.'
      ],
      grammatik: [
        {
          regel: 'Lokaladverbien: oben, unten, vorn, hinten',
          key: 'lokaladverbien',
          erklaerung: 'Indican POSICIÓN estática. Responden a Wo?',
          detail:
            'Son adverbios, así que no necesitan preposición ni artículo: dicen dónde está algo de forma general. Los más frecuentes: oben (arriba), unten (abajo), vorn(e) (delante), hinten (detrás), links (a la izquierda), rechts (a la derecha), drinnen (dentro), draußen (fuera), überall (por todas partes), nirgendwo (en ningún sitio).\n\nSe pueden combinar con "da" y "dort" para señalar: "da oben", "dort hinten".\n\nSi quieres precisar el lugar con un sustantivo, necesitas una preposición: "oben IM Keller", "hinten IM Bad".',
          tabelle: {
            title: 'Posición (Wo?)',
            headers: ['Adverbio', 'Español', 'Ejemplo'],
            rows: [
              ['oben / unten', 'arriba / abajo', 'Die Kartons sind oben.'],
              ['vorn(e) / hinten', 'delante / detrás', 'Der Wäschekorb steht hinten.'],
              ['links / rechts', 'izquierda / derecha', 'Das Regal steht links.'],
              ['drinnen / draußen', 'dentro / fuera', 'Die Farbe ist draußen.']
            ]
          },
          beispiele: [
            { de: 'Die Kartons stehen oben im Keller.', es: 'Las cajas están arriba en el sótano.' },
            { de: 'Der Wäschekorb ist hinten im Bad.', es: 'El cesto está al fondo del baño.' },
            { de: 'Das Werkzeug liegt da unten.', es: 'Las herramientas están ahí abajo.' }
          ]
        },
        {
          regel: 'Direktionaladverbien: rauf, runter, rein, raus, rüber',
          key: 'direktionaladverbien',
          erklaerung: 'Indican MOVIMIENTO. Son las formas coloquiales de hinauf, hinunter, hinein, hinaus, hinüber.',
          detail:
            'Mientras oben/unten dicen dónde está algo, rauf/runter dicen hacia dónde va. Son las versiones habladas y muy frecuentes en la vida diaria: rauf (hacia arriba), runter (hacia abajo), rein (hacia dentro), raus (hacia fuera), rüber (al otro lado).\n\nSe usan mucho con verbos separables: raufgehen, runterkommen, reinkommen, rausbringen, rübergehen. "Komm rein!" (¡Pasa!), "Bring bitte den Müll raus" (Saca la basura).\n\nEn lenguaje formal se escriben hinauf/herauf, hinunter/herunter, etc., donde hin- es alejarse del hablante y her- acercarse. En A2 basta con las formas cortas.',
          tabelle: {
            title: 'Posición vs. movimiento',
            headers: ['Wo? (posición)', 'Wohin? (movimiento)', 'Español'],
            rows: [
              ['oben', 'rauf', 'arriba / hacia arriba'],
              ['unten', 'runter', 'abajo / hacia abajo'],
              ['drinnen', 'rein', 'dentro / hacia dentro'],
              ['draußen', 'raus', 'fuera / hacia fuera'],
              ['drüben', 'rüber', 'al otro lado / hacia el otro lado']
            ]
          },
          beispiele: [
            { de: 'Trag die Schachtel bitte rauf!', es: '¡Sube la caja, por favor!' },
            { de: 'Komm rein, die Tür ist offen.', es: 'Pasa, la puerta está abierta.' },
            { de: 'Bringst du bitte den Müll raus?', es: '¿Sacas la basura, por favor?' }
          ]
        },
        {
          regel: 'Wiederholung: lokale Präpositionen',
          key: 'lokale-praep-wdh',
          erklaerung: 'Cada preposición de lugar rige un caso fijo: aus, bei, mit, nach, von, zu + Dativ.',
          detail:
            'Antes de las Wechselpräpositionen conviene tener claras las que llevan SIEMPRE dativo: aus (de, procedencia), bei (en casa de / en la empresa), mit (con), nach (a, con ciudades y países sin artículo), von (de, origen o posesión), zu (a, hacia personas y edificios), gegenüber (enfrente de).\n\nContracciones frecuentes: zu dem = zum, zu der = zur, von dem = vom, bei dem = beim.\n\n"nach" se usa con nombres propios de lugar sin artículo (nach Wien, nach Österreich) y "zu" con personas y edificios (zum Arzt, zur Post). Con países con artículo se usa "in": in die Schweiz, in die Türkei.',
          tabelle: {
            title: 'Preposiciones con dativo fijo',
            headers: ['Preposición', 'Uso', 'Ejemplo'],
            rows: [
              ['aus', 'procedencia', 'Ich komme aus Spanien.'],
              ['bei', 'en casa/empresa de', 'Ich wohne bei meiner Schwester.'],
              ['mit', 'compañía / medio', 'Ich fahre mit dem Bus.'],
              ['nach', 'destino sin artículo', 'Wir ziehen nach Graz.'],
              ['von', 'origen / posesión', 'Das ist der Schlüssel von der Wohnung.'],
              ['zu', 'destino con persona/edificio', 'Ich gehe zum Vermieter.']
            ]
          },
          beispiele: [
            { de: 'Wir ziehen nächsten Monat nach Graz.', es: 'El mes que viene nos mudamos a Graz.' },
            { de: 'Ich wohne vorübergehend bei meiner Schwester.', es: 'Vivo temporalmente en casa de mi hermana.' },
            { de: 'Der Schlüssel ist vom Vermieter.', es: 'La llave es del casero.' }
          ]
        },
        {
          regel: 'Wechselpräpositionen',
          key: 'wechselpraepositionen',
          erklaerung: 'Nueve preposiciones que rigen acusativo (Wohin? movimiento) o dativo (Wo? posición).',
          detail:
            'Son nueve: an, auf, hinter, in, neben, über, unter, vor, zwischen. A diferencia de las demás, NO tienen un caso fijo: depende de si hay desplazamiento hacia ese lugar o no.\n\nPregúntate siempre: ¿Wohin? (¿hacia dónde?) → ACUSATIVO. ¿Wo? (¿dónde?) → DATIVO.\n"Ich hänge das Bild an DIE Wand." (lo llevo hasta allí → Akk.)\n"Das Bild hängt an DER Wand." (ya está allí → Dat.)\n\nUn atajo práctico: mira el VERBO. Verbos de acción (stellen, legen, hängen, setzen, gehen, fahren, bringen) → acusativo. Verbos de estado (stehen, liegen, hängen, sitzen, sein, bleiben) → dativo.\n\nContracciones: in dem = im, in das = ins, an dem = am, an das = ans, auf das = aufs.',
          tabelle: {
            title: 'Las nueve Wechselpräpositionen',
            headers: ['Preposición', 'Español', 'Wohin? (Akk.)', 'Wo? (Dat.)'],
            rows: [
              ['an', 'a / en (contacto vertical)', 'an die Wand', 'an der Wand'],
              ['auf', 'sobre', 'auf den Tisch', 'auf dem Tisch'],
              ['in', 'en / dentro', 'in den Keller', 'im Keller'],
              ['hinter', 'detrás de', 'hinter das Sofa', 'hinter dem Sofa'],
              ['vor', 'delante de', 'vor die Tür', 'vor der Tür'],
              ['neben', 'al lado de', 'neben das Bett', 'neben dem Bett'],
              ['über', 'encima de', 'über den Tisch', 'über dem Tisch'],
              ['unter', 'debajo de', 'unter das Regal', 'unter dem Regal'],
              ['zwischen', 'entre', 'zwischen die Stühle', 'zwischen den Stühlen']
            ]
          },
          beispiele: [
            { de: 'Ich stelle die Lampe auf den Tisch. (Wohin?)', es: 'Pongo la lámpara sobre la mesa.' },
            { de: 'Die Lampe steht auf dem Tisch. (Wo?)', es: 'La lámpara está sobre la mesa.' },
            { de: 'Häng den Spiegel bitte an die Wand!', es: '¡Cuelga el espejo en la pared!' },
            { de: 'Die Kartons sind noch im Keller.', es: 'Las cajas todavía están en el sótano.' }
          ]
        },
        {
          regel: 'Verben mit Wechselpräpositionen',
          key: 'verben-wechselpraep',
          erklaerung: 'Pares acción/posición: stellen–stehen, legen–liegen, hängen–hängen, setzen–sitzen.',
          detail:
            'El alemán distingue entre poner algo en un sitio (acción, con acusativo) y estar en un sitio (posición, con dativo). Además elige el verbo según la forma del objeto:\n\nstellen / stehen → de pie, vertical (una botella, un libro en la estantería).\nlegen / liegen → tumbado, horizontal (un cojín, un papel).\nhängen / hängen → colgando (un cuadro, la ropa).\nsetzen / sitzen → sentado (una persona).\n\nLos de ACCIÓN son regulares (stellen, legen, setzen) y llevan acusativo. Los de POSICIÓN son irregulares (stand/gestanden, lag/gelegen, saß/gesessen) y llevan dativo. "hängen" existe en las dos versiones, con formas distintas en pasado: hängte (acción) / hing (posición).\n\nEn español todos se traducen por "poner" y "estar", por eso hay que fijarse en la forma del objeto.',
          tabelle: {
            title: 'Los cuatro pares',
            headers: ['Acción (+ Akk.)', 'Posición (+ Dat.)', 'Forma del objeto', 'Ejemplo'],
            rows: [
              ['stellen', 'stehen', 'de pie', 'Ich stelle das Glas auf den Tisch. → Es steht auf dem Tisch.'],
              ['legen', 'liegen', 'tumbado', 'Ich lege das Kissen aufs Sofa. → Es liegt auf dem Sofa.'],
              ['hängen (hängte)', 'hängen (hing)', 'colgando', 'Ich hänge das Bild an die Wand. → Es hängt an der Wand.'],
              ['setzen', 'sitzen', 'sentado', 'Ich setze mich auf den Stuhl. → Ich sitze auf dem Stuhl.']
            ]
          },
          beispiele: [
            { de: 'Ich lege das Kissen auf das Sofa.', es: 'Pongo el cojín en el sofá.' },
            { de: 'Das Kissen liegt auf dem Sofa.', es: 'El cojín está en el sofá.' },
            { de: 'Kannst du die Bücher ins Regal stellen?', es: '¿Puedes poner los libros en la estantería?' },
            { de: 'Die Bücher stehen schon im Regal.', es: 'Los libros ya están en la estantería.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'Vorschläge machen',
          wendungen: [
            { de: 'Sollen wir zuerst die Küche streichen?', es: '¿Pintamos primero la cocina?' },
            { de: 'Wie wäre es, wenn wir morgen weitermachen?', es: '¿Y si seguimos mañana?' }
          ]
        },
        {
          funktion: '(zögernd) zustimmen oder ablehnen',
          wendungen: [
            { de: 'Na gut, von mir aus.', es: 'Bueno, vale, por mí bien.' },
            { de: 'Hmm, ich weiß nicht so recht …', es: 'Mmm, no lo tengo muy claro …' },
            { de: 'Lieber nicht, ehrlich gesagt.', es: 'Mejor no, la verdad.' }
          ]
        },
        {
          funktion: 'einen Auftrag annehmen',
          wendungen: [
            { de: 'Klar, mache ich!', es: '¡Claro, lo hago!' },
            { de: 'Das übernehme ich.', es: 'De eso me encargo yo.' },
            { de: 'Geht in Ordnung.', es: 'De acuerdo.' }
          ]
        },
        {
          funktion: 'um Vorsicht bitten',
          wendungen: [
            { de: 'Vorsicht, das ist schwer!', es: '¡Cuidado, que pesa!' },
            { de: 'Pass auf, nicht fallen lassen!', es: '¡Ten cuidado, que no se caiga!' },
            { de: 'Langsam, langsam!', es: '¡Despacio, despacio!' }
          ]
        },
        {
          funktion: 'einen Raum einrichten',
          wendungen: [
            { de: 'Das Sofa kommt an die Wand und der Tisch in die Mitte.', es: 'El sofá va contra la pared y la mesa en el centro.' },
            { de: 'Stell das Regal bitte neben die Tür.', es: 'Pon la estantería al lado de la puerta.' }
          ]
        },
        {
          funktion: 'Wichtigkeit ausdrücken',
          wendungen: [
            { de: 'Das ist mir sehr wichtig.', es: 'Eso es muy importante para mí.' },
            { de: 'Hauptsache, es ist bis Freitag fertig.', es: 'Lo importante es que esté listo el viernes.' }
          ]
        }
      ]
    },

    // ==================== LEKTION 8 ====================
    {
      id: 'a21-l8',
      legacyId: 'l8',
      nr: 8,
      name: 'Unterwegs',
      woerter: [
        {
          thema: 'mit dem Zug unterwegs',
          items: [
            { de: 'der Bahnhof, ¨-e', es: 'la estación' },
            { de: 'der Bahnsteig, -e', es: 'el andén' },
            { de: 'das Gleis, -e', es: 'la vía' },
            { de: 'der Fahrplan, ¨-e', es: 'el horario' },
            { de: 'die Verbindung, -en', es: 'la conexión' },
            { de: 'die Fahrkarte, -n', es: 'el billete' },
            { de: 'umsteigen', es: 'hacer transbordo' },
            { de: 'einsteigen / aussteigen', es: 'subir / bajar' },
            { de: 'die Verspätung, -en', es: 'el retraso' },
            { de: 'der Schaffner / die Schaffnerin', es: 'el revisor / la revisora' },
            { de: 'der Sitzplatz, ¨-e', es: 'el asiento' },
            { de: 'reservieren', es: 'reservar' },
            { de: 'die Hin- und Rückfahrt', es: 'la ida y vuelta' },
            { de: 'der Speisewagen', es: 'el vagón restaurante' },
            { de: 'die Abfahrt / die Ankunft', es: 'la salida / la llegada' }
          ]
        },
        {
          thema: 'in der Stadt',
          items: [
            { de: 'die Innenstadt', es: 'el centro' },
            { de: 'die Sehenswürdigkeit, -en', es: 'el lugar de interés' },
            { de: 'der Stadtplan, ¨-e', es: 'el plano de la ciudad' },
            { de: 'die Fußgängerzone', es: 'la zona peatonal' },
            { de: 'das Denkmal, ¨-er', es: 'el monumento' },
            { de: 'die Brücke, -n', es: 'el puente' },
            { de: 'der Platz, ¨-e', es: 'la plaza' },
            { de: 'die Führung, -en', es: 'la visita guiada' },
            { de: 'die Ampel, -n', es: 'el semáforo' },
            { de: 'die Kreuzung, -en', es: 'el cruce' },
            { de: 'die Ecke, -n', es: 'la esquina' },
            { de: 'geradeaus', es: 'todo recto' }
          ]
        },
        {
          thema: 'Unterkunft / im Hotel',
          items: [
            { de: 'die Rezeption', es: 'la recepción' },
            { de: 'das Einzelzimmer', es: 'la habitación individual' },
            { de: 'das Doppelzimmer', es: 'la habitación doble' },
            { de: 'die Übernachtung, -en', es: 'la noche (alojamiento)' },
            { de: 'Frühstück inklusive', es: 'desayuno incluido' },
            { de: 'die Zimmerkarte', es: 'la tarjeta de la habitación' },
            { de: 'einchecken / auschecken', es: 'hacer el check-in / check-out' },
            { de: 'die Buchung, -en', es: 'la reserva' },
            { de: 'die Halbpension', es: 'la media pensión' },
            { de: 'der Aufenthalt', es: 'la estancia' }
          ]
        }
      ],
      pitfalls: [
        '"entlang" va DETRÁS del sustantivo: "die Straße entlang", no "entlang die Straße".',
        'Konjunktiv II con "würde" también forma Satzklammer: "Ich WÜRDE gern einen Platz RESERVIEREN" (infinitivo al final).',
        'Con sein y haben no se usa "würde": se dice "Ich wäre…" y "Ich hätte…", no "Ich würde sein/haben".'
      ],
      grammatik: [
        {
          regel: 'Konjunktiv II: wäre, hätte, würde',
          key: 'konjunktiv2-waere-haette-wuerde',
          erklaerung: 'Formas de cortesía e hipótesis: ich wäre, ich hätte, ich würde.',
          detail:
            'El Konjunktiv II sirve para dos cosas en A2: pedir con cortesía y hablar de situaciones irreales o deseadas.\n\nLa mayoría de los verbos lo forman con "würde + infinitivo". Pero sein, haben y los modales tienen forma propia y NO se usan con würde: wäre (sein), hätte (haben), könnte (können), müsste (müssen), sollte (sollen), dürfte (dürfen).\n\nEn la recepción de un hotel o en una tienda, el Konjunktiv II es lo que suena educado: "Hätten Sie noch ein Zimmer frei?" en lugar del más seco "Haben Sie…?". "Ich hätte gern…" es la fórmula estándar para pedir.\n\nFíjate en los Umlaut: war → wäre, hatte → hätte, konnte → könnte. Es la marca del Konjunktiv II.',
          tabelle: {
            title: 'Konjunktiv II',
            headers: ['Persona', 'sein → wäre', 'haben → hätte', 'werden → würde'],
            rows: [
              ['ich', 'wäre', 'hätte', 'würde'],
              ['du', 'wärst', 'hättest', 'würdest'],
              ['er / sie / es', 'wäre', 'hätte', 'würde'],
              ['wir', 'wären', 'hätten', 'würden'],
              ['ihr', 'wärt', 'hättet', 'würdet'],
              ['sie / Sie', 'wären', 'hätten', 'würden']
            ]
          },
          beispiele: [
            { de: 'Hätten Sie noch ein Doppelzimmer frei?', es: '¿Le quedaría una habitación doble libre?' },
            { de: 'Das wäre super!', es: '¡Eso sería genial!' },
            { de: 'Ich hätte gern ein Zimmer mit Frühstück.', es: 'Quisiera una habitación con desayuno.' },
            { de: 'Könnten Sie mir bitte helfen?', es: '¿Podría ayudarme, por favor?' }
          ],
          mehr: {
            title: 'Cortés vs. directo',
            examples: [
              { de: 'Haben Sie ein Zimmer? → Hätten Sie ein Zimmer?', es: '¿Tiene habitación? → ¿Tendría habitación?' },
              { de: 'Können Sie mir helfen? → Könnten Sie mir helfen?', es: '¿Puede ayudarme? → ¿Podría ayudarme?' }
            ]
          }
        },
        {
          regel: 'Wiederholung: Satzklammer mit würd-',
          key: 'satzklammer-wuerd',
          erklaerung: '"würde" en 2ª posición y el infinitivo AL FINAL de la frase.',
          detail:
            '"würde + infinitivo" funciona igual que un verbo modal: el conjugado ocupa la 2ª posición y el infinitivo cierra la frase. Todo lo demás queda "abrazado" en medio: "Ich WÜRDE gern einen Platz am Fenster RESERVIEREN."\n\nEn preguntas, "würde" va en 1ª posición: "WÜRDEN Sie mir bitte den Weg ZEIGEN?"\n\nY en subordinada, el conjugado se va al final, detrás del infinitivo: "…, dass ich gern mitfahren würde."\n\nRecuerda que con sein y haben no se usa würde: "Ich wäre gern dabei", no "Ich würde gern dabei sein" (aunque esta última se oye, la primera es la buena).',
          tabelle: {
            title: 'Posición del verbo',
            headers: ['Tipo de frase', 'Estructura', 'Ejemplo'],
            rows: [
              ['Afirmativa', 'würde (2ª) … infinitivo (final)', 'Ich würde gern reservieren.'],
              ['Pregunta', 'würde (1ª) … infinitivo (final)', 'Würden Sie mir helfen?'],
              ['Subordinada', '… infinitivo + würde (final)', '…, dass ich gern kommen würde.']
            ]
          },
          beispiele: [
            { de: 'Ich würde gern einen Sitzplatz reservieren.', es: 'Me gustaría reservar un asiento.' },
            { de: 'Würden Sie mir bitte den Weg zeigen?', es: '¿Me indicaría el camino, por favor?' },
            { de: 'Wir würden lieber mit dem Zug fahren.', es: 'Preferiríamos ir en tren.' }
          ]
        },
        {
          regel: 'lokale Präpositionen durch, entlang + Akkusativ',
          key: 'durch-entlang',
          erklaerung: '"durch" = a través de (va delante). "entlang" = a lo largo de (va DETRÁS del sustantivo).',
          detail:
            'Las dos rigen acusativo y sirven para describir un recorrido, pero se colocan de forma distinta.\n\n"durch" se antepone, como cualquier preposición normal: "durch den Park", "durch die Stadt", "durch den Tunnel". Indica atravesar algo.\n\n"entlang" es especial: cuando indica movimiento a lo largo de algo, va DETRÁS del sustantivo en acusativo: "die Straße entlang", "den Fluss entlang". Es una postposición. Decir "entlang die Straße" es un error típico.\n\nAmbas aparecen constantemente al dar indicaciones: "Gehen Sie durch den Park und dann die Hauptstraße entlang."',
          tabelle: {
            title: 'Recorrido (+ Akkusativ)',
            headers: ['Preposición', 'Posición', 'Ejemplo', 'Español'],
            rows: [
              ['durch', 'delante', 'durch den Park', 'por / a través del parque'],
              ['entlang', 'DETRÁS', 'die Straße entlang', 'a lo largo de la calle'],
              ['um … herum', 'alrededor', 'um den Platz herum', 'alrededor de la plaza'],
              ['über', 'delante', 'über die Brücke', 'por encima del puente']
            ]
          },
          beispiele: [
            { de: 'Gehen Sie durch den Park, dann sehen Sie das Hotel.', es: 'Vaya por el parque y verá el hotel.' },
            { de: 'Gehen Sie die Straße entlang bis zur Ampel.', es: 'Siga la calle hasta el semáforo.' },
            { de: 'Wir sind über die Brücke gegangen.', es: 'Cruzamos el puente.' }
          ]
        },
        {
          regel: 'lokale Präpositionen gegenüber, bis zu, an … vorbei + Dativ',
          key: 'gegenueber-biszu',
          erklaerung: '"gegenüber" = enfrente de, "bis zu" = hasta, "an … vorbei" = pasando por delante de. Con dativo.',
          detail:
            'Este trío completa el vocabulario para dar indicaciones, y las tres van con dativo.\n\n"gegenüber + Dativ" = enfrente de. Puede ir delante o detrás del sustantivo: "gegenüber dem Bahnhof" o "dem Bahnhof gegenüber". Con pronombre va siempre detrás: "mir gegenüber".\n\n"bis zu + Dativ" = hasta. "bis" solo no lleva artículo (bis Wien), pero con artículo necesita "zu": bis ZUR Ampel, bis ZUM Bahnhof.\n\n"an … vorbei + Dativ" = pasando por delante de. Es un marco: la preposición "an" abre y "vorbei" cierra detrás del sustantivo: "an der Kirche vorbei".',
          tabelle: {
            title: 'Indicaciones (+ Dativ)',
            headers: ['Estructura', 'Español', 'Ejemplo'],
            rows: [
              ['gegenüber + Dat.', 'enfrente de', 'gegenüber dem Bahnhof'],
              ['bis zu + Dat.', 'hasta', 'bis zur Ampel'],
              ['an … vorbei', 'pasando por delante de', 'an der Kirche vorbei'],
              ['neben + Dat.', 'al lado de', 'neben der Apotheke']
            ]
          },
          beispiele: [
            { de: 'Das Hotel ist gegenüber dem Bahnhof.', es: 'El hotel está enfrente de la estación.' },
            { de: 'Gehen Sie bis zur Ampel und dann links.', es: 'Vaya hasta el semáforo y luego a la izquierda.' },
            { de: 'Fahren Sie an der Kirche vorbei.', es: 'Pase por delante de la iglesia.' }
          ]
        }
      ],
      kommunikation: [
        {
          funktion: 'sich nach dem Fahrplan erkundigen / Auskunft geben',
          wendungen: [
            { de: 'Wann fährt der nächste Zug nach Salzburg?', es: '¿Cuándo sale el próximo tren a Salzburgo?' },
            { de: 'Muss ich umsteigen? – Ja, in Linz.', es: '¿Tengo que hacer transbordo? – Sí, en Linz.' },
            { de: 'Von welchem Gleis fährt der Zug ab?', es: '¿De qué vía sale el tren?' }
          ]
        },
        {
          funktion: 'höflich bitten und auf höfliche Bitten reagieren',
          wendungen: [
            { de: 'Könnten Sie mir bitte helfen?', es: '¿Podría ayudarme, por favor?' },
            { de: 'Aber gern! · Kein Problem.', es: '¡Con mucho gusto! · Sin problema.' },
            { de: 'Würden Sie so nett sein und …?', es: '¿Sería tan amable de …?' }
          ]
        },
        {
          funktion: 'nachfragen, ob der Platz noch frei ist',
          wendungen: [
            { de: 'Entschuldigung, ist der Platz noch frei?', es: 'Perdone, ¿está libre este asiento?' },
            { de: 'Ja, bitte sehr. / Nein, der ist leider besetzt.', es: 'Sí, adelante. / No, lo siento, está ocupado.' }
          ]
        },
        {
          funktion: 'gute Wünsche',
          wendungen: [
            { de: 'Gute Reise! · Gute Fahrt!', es: '¡Buen viaje!' },
            { de: 'Schönen Aufenthalt!', es: '¡Feliz estancia!' },
            { de: 'Kommen Sie gut an!', es: '¡Que llegue bien!' }
          ]
        },
        {
          funktion: 'einen Weg beschreiben',
          wendungen: [
            { de: 'Gehen Sie geradeaus bis zur Brücke, dann links.', es: 'Vaya recto hasta el puente y luego a la izquierda.' },
            { de: 'Das ist gleich um die Ecke.', es: 'Está a la vuelta de la esquina.' },
            { de: 'Es sind ungefähr zehn Minuten zu Fuß.', es: 'Son unos diez minutos a pie.' }
          ]
        },
        {
          funktion: 'an der Rezeption',
          wendungen: [
            { de: 'Ich habe ein Zimmer auf den Namen … reserviert.', es: 'Tengo una habitación reservada a nombre de …' },
            { de: 'Um wie viel Uhr gibt es Frühstück?', es: '¿A qué hora es el desayuno?' },
            { de: 'Ich würde gern auschecken.', es: 'Quisiera hacer el check-out.' }
          ]
        }
      ]
    }
  ]
};
