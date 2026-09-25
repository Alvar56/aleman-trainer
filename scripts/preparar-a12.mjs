// Mapeo de Kommunikation para A1.2 (lecciones 9 a 16).
// 8 funciones de 10 frases exactamente por lección.
import fs from 'node:fs';

export const a12data = {
  "a12-l9": [
    {
      "funktion": "über den Tagesablauf berichten",
      "es": "Contar la rutina del día",
      "esEn": "Reporting on the daily routine",
      "toma": [
        "Wie war dein Tag? – Ganz gut, danke.",
        "Zuerst habe ich … und dann bin ich …",
        "Was hast du am Wochenende gemacht?",
        "Gestern war ich beim Arzt.",
        "Was hast du gestern Abend gemacht?",
        "Ich bin heute viel zu spät aufgestanden.",
        "Ich habe den ganzen Tag gearbeitet.",
        "Der Tag war anstrengend, aber schön.",
        "Wie war es denn gestern auf der Feier?",
        "Was ist danach passiert?"
      ]
    },
    {
      "funktion": "über besondere Erlebnisse im Alltag berichten",
      "es": "Contar anécdotas y experiencias cotidianas",
      "esEn": "Sharing everyday experiences and anecdotes",
      "toma": [
        "Ich habe den Zug verpasst.",
        "Vorhin hat deine Mutter angerufen.",
        "Wir waren letztes Wochenende in Salzburg.",
        "Vorhin hat dein Chef angerufen.",
        "Im Sommer bin ich zum ersten Mal geflogen.",
        "Wir haben uns im Kurs kennengelernt.",
        "Gestern war ich zum ersten Mal beim Zahnarzt hier.",
        "Ich habe letztes Jahr meinen Führerschein gemacht.",
        "Plötzlich ist der Strom ausgefallen.",
        "Wir hatten gestern eine Panne auf der Autobahn."
      ]
    },
    {
      "funktion": "Interesse und Erstaunen signalisieren",
      "es": "Mostrar interés y sorpresa",
      "esEn": "Signaling interest and astonishment",
      "toma": [
        "Echt? · Wirklich? · Ach so!",
        "Das ist ja interessant!",
        "Ach wirklich?",
        "Im Ernst?",
        "Das tut mir leid.",
        "Das ist ja unglaublich!",
        "Was für ein Zufall!",
        "Erzähl weiter, das klingt spannend!",
        "Das freut mich wirklich für dich!",
        "Wie ist das denn passiert?"
      ]
    },
    {
      "funktion": "überrascht reagieren und nachhaken",
      "es": "Reaccionar con sorpresa e indagar",
      "esEn": "Reacting with surprise and following up",
      "toma": [
        "Im Ernst? Das wusste ich gar nicht.",
        "Oje, das tut mir leid.",
        "Ach so, jetzt verstehe ich.",
        "Das hätte ich nicht gedacht.",
        "So ein Zufall, das glaube ich kaum!",
        "Das hätte ich nie von ihm gedacht.",
        "Erzähl mir mehr, das klingt spannend.",
        "Da bin ich jetzt wirklich überrascht.",
        "Erzähl mir mehr davon!",
        "Im Ernst? Das ist ja unglaublich."
      ]
    },
    {
      "funktion": "Smalltalk führen",
      "es": "Hacer conversación informal (Smalltalk)",
      "esEn": "Making small talk",
      "toma": [
        "Wie war dein Wochenende?",
        "Schönes Wetter heute, oder?",
        "Viel los heute, oder?",
        "Warten Sie auch auf den Bus?",
        "Arbeiten Sie auch in diesem Haus?",
        "Der Kaffee hier ist gar nicht schlecht.",
        "Ist hier noch frei?",
        "Wohnen Sie schon lange in diesem Viertel?",
        "Die Tage werden schon wieder kürzer.",
        "Kennen wir uns nicht von irgendwoher?"
      ]
    },
    {
      "funktion": "Wartezeiten und Situationen kommentieren",
      "es": "Comentar situaciones y tiempos de espera",
      "esEn": "Commenting on wait times and situations",
      "toma": [
        "Kommen Sie oft hierher?",
        "Endlich wird es wieder heller draußen.",
        "Warten Sie schon lange?",
        "Der Verkehr war heute besonders schlimm.",
        "Kennen Sie sich hier gut aus?",
        "Haben Sie es weit nach Hause?",
        "Schönes Wetter heute, nicht wahr?",
        "Damals war ich noch keine zwanzig.",
        "Ich habe mich gestern richtig erschrocken.",
        "Wir haben den ganzen Abend gelacht."
      ]
    },
    {
      "funktion": "über Lebensstationen und Migration sprechen",
      "es": "Hablar de etapas de la vida y migración",
      "esEn": "Talking about life stages and migration",
      "toma": [
        "2015 bin ich nach Österreich gekommen.",
        "Am Anfang war alles neu für mich.",
        "Die ersten Monate waren wirklich hart.",
        "Am Anfang habe ich fast nichts verstanden.",
        "Meine Familie ist ein Jahr später nachgekommen.",
        "Ich habe zuerst in einer Fabrik gearbeitet.",
        "Mit der Zeit wurde alles leichter.",
        "Den Papierkram fand ich am schwierigsten.",
        "Ich habe hier viele nette Leute kennengelernt.",
        "Manchmal denke ich ans Zurückgehen."
      ]
    },
    {
      "funktion": "Gespräche ablehnen oder vertagen",
      "es": "Rechazar o posponer una conversación",
      "esEn": "Declining or postponing a conversation",
      "toma": [
        "Ich möchte lieber nicht darüber sprechen.",
        "Entschuldigung, ich habe es eilig.",
        "Darüber möchte ich jetzt nicht reden.",
        "Das ist mir zu privat, entschuldige.",
        "Können wir später weiterreden?",
        "Ich habe es gerade wirklich eilig.",
        "Lass uns bitte das Thema wechseln.",
        "Ich bin heute nicht besonders gesprächig.",
        "Ich möchte mich darüber nicht aufregen.",
        "Ich brauche gerade einen Moment für mich."
      ]
    }
  ],
  "a12-l10": [
    {
      "funktion": "nach dem Weg fragen",
      "es": "Preguntar por el camino",
      "esEn": "Asking for directions",
      "toma": [
        "Entschuldigung, wie komme ich zum Rathaus?",
        "Wie komme ich zum Schwimmbad?",
        "Entschuldigung, wo ist die Post?",
        "Ist das weit von hier?",
        "Kann ich zu Fuß gehen?",
        "Entschuldigung, wie komme ich zum Museum?",
        "Wo ist der nächste Supermarkt?",
        "Ich suche die Bibliothek.",
        "Bin ich hier richtig zum Bahnhof?",
        "Wie weit ist es bis ins Zentrum?"
      ]
    },
    {
      "funktion": "den Fußweg beschreiben",
      "es": "Describir el camino a pie",
      "esEn": "Describing the way on foot",
      "toma": [
        "Gehen Sie geradeaus und dann die zweite Straße rechts.",
        "Ist es weit von hier? – Nein, fünf Minuten zu Fuß.",
        "Ist das zu Fuß zu schaffen?",
        "Gibt es hier eine Abkürzung?",
        "Muss ich über die Brücke?",
        "Kann ich hier über die Straße?",
        "Ist die Post hier in der Nähe?",
        "Können Sie mir das auf der Karte zeigen?",
        "Wie lange brauche ich ungefähr?",
        "Können Sie mir die Richtung kurz zeigen?"
      ]
    },
    {
      "funktion": "nach Haltestellen und Linien im Nahverkehr fragen",
      "es": "Preguntar por paradas y líneas de transporte público",
      "esEn": "Asking about stops and public transport routes",
      "toma": [
        "Welche Linie muss ich nehmen?",
        "Wo muss ich umsteigen?",
        "Wie viele Stationen sind das?",
        "Wann fährt der letzte Bus?",
        "Fährt der Zug pünktlich?",
        "Welche Linie fährt zum Flughafen?",
        "Muss ich irgendwo umsteigen?",
        "Fährt dieser Bus zum Krankenhaus?",
        "Wann fährt die letzte U-Bahn?",
        "Fährt die Straßenbahn bis zum Prater?"
      ]
    },
    {
      "funktion": "im Nahverkehr den Weg erklären",
      "es": "Explicar la ruta en transporte público",
      "esEn": "Explaining the route in public transit",
      "toma": [
        "Nehmen Sie die U3 und steigen Sie bei Stephansplatz um.",
        "Sie müssen drei Stationen fahren.",
        "Wo kann ich eine Fahrkarte kaufen?",
        "Muss ich das Ticket entwerten?",
        "Der Zug hat zwanzig Minuten Verspätung.",
        "Von welchem Gleis fährt der Zug?",
        "Ist das die richtige Richtung?",
        "Fährt am Sonntag auch die Straßenbahn?",
        "Fahren Sie lieber öffentlich oder mit dem Auto?",
        "Wie lange dauert es bis zum Flughafen?"
      ]
    },
    {
      "funktion": "Tickets und Fahrkarten kaufen",
      "es": "Comprar billetes y abonos",
      "esEn": "Buying tickets and transit passes",
      "toma": [
        "Wo kaufe ich eine Fahrkarte?",
        "Lohnt sich eine Monatskarte für mich?",
        "Brauche ich ein extra Ticket?",
        "Ist das Ticket auch im Vorort gültig?",
        "Gilt mein Ticket auch im Nachtbus?",
        "Muss ich den Sitzplatz reservieren?",
        "Die Fahrkarten, bitte.",
        "Der Automat nimmt meine Karte nicht.",
        "Mein Ticket funktioniert nicht.",
        "Der Automat hat mein Geld geschluckt."
      ]
    },
    {
      "funktion": "im Zug und am Bahnsteig nachfragen",
      "es": "Preguntar en el tren y en el andén",
      "esEn": "Asking on the train and platform",
      "toma": [
        "Ist dieser Platz noch frei?",
        "Entschuldigung, das ist mein reservierter Platz.",
        "Hält dieser Zug in Wels?",
        "Wo ist der Speisewagen?",
        "Gibt es hier WLAN?",
        "Können Sie mir mit dem Koffer helfen?",
        "Wann kommen wir in Graz an?",
        "Ich habe meinen Anschluss verpasst.",
        "Wo finde ich die Gepäckaufbewahrung?",
        "Von welchem Bahnsteig fährt der Zug?"
      ]
    },
    {
      "funktion": "Orientierungsprobleme äußern",
      "es": "Expresar problemas de orientación",
      "esEn": "Expressing orientation problems",
      "toma": [
        "Ich habe mich verlaufen.",
        "Ich glaube, ich habe mich verlaufen.",
        "Ich habe mich total verfahren.",
        "Weißt du, wo wir gerade sind?",
        "Wegen der Umleitung sind wir falsch gefahren.",
        "Ich glaube, ich bin falsch eingestiegen.",
        "Ich habe mich total verlaufen.",
        "Hier ist eine Baustelle, die Straße ist gesperrt.",
        "Ist das hier eine Einbahnstraße?",
        "Wo kann ich mein Rad abstellen?"
      ]
    },
    {
      "funktion": "Probleme unterwegs lösen",
      "es": "Resolver percances en el camino",
      "esEn": "Solving transit troubles on the road",
      "toma": [
        "Wir stehen seit einer Stunde im Stau.",
        "Mein Handyakku ist leer.",
        "Ich habe meine Fahrkarte verloren.",
        "Der Bus ist einfach vorbeigefahren.",
        "Ich komme bestimmt zu spät zum Termin.",
        "Sollen wir ein Taxi nehmen?",
        "Wir haben kein Benzin mehr.",
        "Ich habe meinen Führerschein zu Hause vergessen.",
        "Hier ist die Geschwindigkeit stark begrenzt.",
        "Der Parkplatz ist komplett voll."
      ]
    }
  ],
  "a12-l11": [
    {
      "funktion": "über Wohnungsmerkmale sprechen",
      "es": "Hablar de las características de la vivienda",
      "esEn": "Talking about apartment features",
      "toma": [
        "Die Wohnung hat 60 m² und zwei Zimmer.",
        "Unsere Wohnung hat fünfzig Quadratmeter.",
        "Die Wohnung ist leider nicht möbliert.",
        "Von der Terrasse hat man eine tolle Aussicht.",
        "Altbau oder Neubau, was ist dir lieber?",
        "In der Wohngemeinschaft spare ich viel Geld.",
        "Die Wohnfläche ist kleiner als im Inserat.",
        "Wohnst du zur Miete oder im Eigentum?",
        "Ist die Gegend ruhig?",
        "Wie weit ist die nächste U-Bahn?"
      ]
    },
    {
      "funktion": "nach Mietkosten und Bedingungen fragen",
      "es": "Preguntar por gastos de alquiler y condiciones",
      "esEn": "Asking about rental costs and conditions",
      "toma": [
        "Wie hoch ist die Miete?",
        "Der Strom ist in der Miete nicht dabei.",
        "Im Winter sind die Heizkosten sehr hoch.",
        "Was kostet die Wohnung im Monat?",
        "Wie viel Kaution muss ich zahlen?",
        "Ab wann ist die Wohnung frei?",
        "Wie hoch ist die Kaution?",
        "Sind die Betriebskosten schon dabei?",
        "Wie lange läuft der Mietvertrag?",
        "Wie hoch sind die Betriebskosten?"
      ]
    },
    {
      "funktion": "Wohnungsdetails und Ausstattung erfragen",
      "es": "Preguntar por detalles del piso y equipamiento",
      "esEn": "Asking about apartment details and equipment",
      "toma": [
        "Die Küche ist klein, aber hell.",
        "Sie liegt im dritten Stock.",
        "Wie groß ist die Wohnung?",
        "Gibt es einen Aufzug?",
        "Ist die Wohnung möbliert?",
        "Sind Haustiere erlaubt?",
        "Gibt es einen Stellplatz für das Auto?",
        "Darf ich die Wände streichen?",
        "Gibt es einen Keller oder einen Dachboden?",
        "Gibt es einen Balkon?"
      ]
    },
    {
      "funktion": "Wohnungsbesichtigung und Einzug planen",
      "es": "Planificar visitas al piso y mudanza",
      "esEn": "Planning apartment viewing and move-in",
      "toma": [
        "Wir suchen seit drei Monaten eine Wohnung.",
        "Wir ziehen im Mai um.",
        "Wir wollen zuerst das Bad renovieren.",
        "Wir ziehen nächsten Monat endlich ein.",
        "Wann kann ich sie besichtigen?",
        "Wann kann ich die Wohnung besichtigen?",
        "Wer kümmert sich um Reparaturen?",
        "Ab wann kann ich einziehen?",
        "Wie viele Zimmer hat die Wohnung?",
        "Ist eine Küche schon eingebaut?"
      ]
    },
    {
      "funktion": "Gefallen und Missfallen ausdrücken",
      "es": "Expresar agrado o desagrado",
      "esEn": "Expressing liking or disliking",
      "toma": [
        "Das gefällt mir (nicht).",
        "Ich finde das Zimmer sehr gemütlich.",
        "Das Wohnzimmer gefällt mir sehr gut.",
        "Die Küche finde ich zu dunkel.",
        "Diese Farbe gefällt mir überhaupt nicht.",
        "Das Zimmer ist wirklich gemütlich.",
        "Der Schrank passt hier gar nicht.",
        "Mir gefällt die Aussicht am besten.",
        "Ich finde die Lage perfekt.",
        "Die hohen Decken finde ich wunderbar."
      ]
    },
    {
      "funktion": "Möbel und Einrichtung bewerten",
      "es": "Valorar muebles y decoración",
      "esEn": "Evaluating furniture and decoration",
      "toma": [
        "Das ist mir zu modern.",
        "Der Schimmel im Bad gefällt mir gar nicht.",
        "Der Innenhof gefällt mir am besten.",
        "Diese Jalousien sehen sehr altmodisch aus.",
        "Wie findest du die neue Küche?",
        "Das Sofa ist nicht mein Geschmack.",
        "Mir gefällt der Boden ausgesprochen gut.",
        "Haben Sie dieses Regal auch in Weiß?",
        "Ist das Sofa auch als Bett verwendbar?",
        "Haben Sie den Tisch auch in Weiß?"
      ]
    },
    {
      "funktion": "im Möbelhaus nach Produkten fragen",
      "es": "Preguntar por productos en la tienda de muebles",
      "esEn": "Asking about products in the furniture store",
      "toma": [
        "Haben Sie auch Regale?",
        "Was kostet dieser Schrank?",
        "Was kostet dieser Tisch?",
        "Muss ich den Schrank selbst aufbauen?",
        "Liefern Sie auch nach Hause?",
        "Haben Sie etwas Günstigeres?",
        "Wie lange ist die Garantie?",
        "Kann ich das zurückgeben, wenn es nicht passt?",
        "Passt das Regal in einen normalen Kofferraum?",
        "Wie lange dauert die Lieferung?"
      ]
    },
    {
      "funktion": "mit Nachbarn und Mitbewohnern sprechen",
      "es": "Hablar con vecinos y compañeros de piso",
      "esEn": "Talking with neighbors and flatmates",
      "toma": [
        "Guten Tag, wir sind neu eingezogen.",
        "Entschuldigung, war es gestern zu laut?",
        "Wann wird der Müll abgeholt?",
        "Wo ist die Waschküche?",
        "Gibt es im Haus eine Hausordnung?",
        "Könnten Sie ein Paket für mich annehmen?",
        "Wir machen am Samstag eine kleine Feier.",
        "Haben Sie zufällig Werkzeug?",
        "Darf man im Innenhof grillen?",
        "Wir sind Ihre neuen Nachbarn von oben."
      ]
    }
  ],
  "a12-l12": [
    {
      "funktion": "sich im Amt informieren",
      "es": "Informarse en la administración",
      "esEn": "Getting information at the administrative office",
      "toma": [
        "Ich habe eine Frage: Wo muss ich das abgeben?",
        "Können Sie mir bitte helfen?",
        "Welche Unterlagen brauche ich?",
        "Bis wann muss ich das abgeben?",
        "Wie lange muss ich warten?",
        "Zu welchem Schalter muss ich?",
        "Fehlt noch etwas?",
        "Entschuldigung, bin ich hier richtig?",
        "Ich möchte einen Ausweis beantragen.",
        "Welche Unterlagen muss ich mitbringen?"
      ]
    },
    {
      "funktion": "Verfahren und Formalitäten klären",
      "es": "Aclarar trámites y formalidades",
      "esEn": "Clarifying procedures and formalities",
      "toma": [
        "Kann ich den Antrag auch per Post schicken?",
        "Wer ist für diesen Fall zuständig?",
        "Wie lange dauert die Bearbeitung?",
        "Fehlt noch etwas in meinem Antrag?",
        "Muss ich noch einmal persönlich kommen?",
        "Könnten Sie mir das bitte erklären?",
        "Muss die Übersetzung beglaubigt sein?",
        "Wann bekomme ich den Bescheid?",
        "Kann ich das auch online erledigen?",
        "Wird mir der Bescheid zugeschickt?"
      ]
    },
    {
      "funktion": "ein formelles Telefonat beenden",
      "es": "Terminar una llamada formal",
      "esEn": "Ending a formal telephone call",
      "toma": [
        "Vielen Dank für Ihre Hilfe.",
        "Auf Wiederhören!",
        "Vielen Dank für Ihre Auskunft.",
        "Dann bleiben wir so verblieben.",
        "Ich melde mich nächste Woche wieder.",
        "Entschuldigen Sie die Störung.",
        "Auf Wiederhören und danke nochmals.",
        "Könnten Sie mir das schriftlich bestätigen?",
        "Ich bedanke mich für Ihre Geduld.",
        "Dann verbleiben wir so, danke schön."
      ]
    },
    {
      "funktion": "um Erlaubnis bitten",
      "es": "Pedir permiso",
      "esEn": "Asking for permission",
      "toma": [
        "Darf ich hier parken?",
        "Darf ich hier kurz stehen bleiben?",
        "Ist es erlaubt, hier zu fotografieren?",
        "Dürfen die Kinder im Hof spielen?",
        "Kann ich das Fenster aufmachen?",
        "Muss ich vorher um Erlaubnis fragen?",
        "Darf ich das kopieren?",
        "Darf mein Mann das für mich abgeben?",
        "Darf ich hier während der Wartezeit telefonieren?",
        "Darf ich mich hier kurz hinsetzen?"
      ]
    },
    {
      "funktion": "Erlaubnis und Verbot ausdrücken",
      "es": "Expresar permiso y prohibición",
      "esEn": "Expressing permission and prohibition",
      "toma": [
        "Ja, das dürfen Sie. / Nein, das ist verboten.",
        "Darf man hier mit dem Rad fahren?",
        "Rauchen ist hier leider verboten.",
        "Sie dürfen das gern mitnehmen.",
        "Ist das hier ein Parkplatz?",
        "Ist diese Angabe verpflichtend?",
        "Kann ich gegen den Bescheid etwas machen?",
        "Darf man hier fotografieren?",
        "Dürfen wir hier kurz stehen bleiben?",
        "Ist es erlaubt, das mitzunehmen?"
      ]
    },
    {
      "funktion": "Auskunft über Gewohnheiten geben",
      "es": "Informar sobre rutinas y hábitos",
      "esEn": "Giving information about routines and habits",
      "toma": [
        "Normalerweise arbeite ich bis 17 Uhr.",
        "Normalerweise fange ich um acht an.",
        "Meistens esse ich mittags in der Kantine.",
        "Am Wochenende stehe ich nie vor neun auf.",
        "Ich lese jeden Abend eine Stunde Deutsch.",
        "Normalerweise mache ich das am Freitag.",
        "Ich telefoniere lieber, als zu schreiben.",
        "Ich vereinbare Termine immer online.",
        "Steuererklärungen mache ich immer im Februar.",
        "Wichtige Papiere hebe ich in einem Ordner auf."
      ]
    },
    {
      "funktion": "Vorschläge machen und darauf reagieren",
      "es": "Hacer propuestas y responder a ellas",
      "esEn": "Making suggestions and responding to them",
      "toma": [
        "Sollen wir das zusammen machen?",
        "Ja, gern. / Lieber nicht.",
        "Sollen wir gleich anfangen?",
        "Wollen wir kurz Pause machen?",
        "Ich schlage Freitag vor.",
        "Kannst du das übernehmen?",
        "Sollen wir den Bericht zusammen schreiben?",
        "Wie wäre es, wenn wir früher anfangen?",
        "Einverstanden, das machen wir so.",
        "Hast du einen besseren Vorschlag?"
      ]
    },
    {
      "funktion": "schriftliche Anträge und Schreiben formulieren",
      "es": "Formular solicitudes por escrito",
      "esEn": "Drafting written applications and letters",
      "toma": [
        "Hiermit beantrage ich …",
        "Ich bitte um eine Bestätigung.",
        "Hiermit beantrage ich eine Verlängerung.",
        "Ich bitte Sie um eine schriftliche Bestätigung.",
        "Anbei sende ich Ihnen die Unterlagen.",
        "Leider kann ich die Frist nicht einhalten.",
        "Sehr geehrte Damen und Herren, ich wende mich an Sie wegen meines Antrags.",
        "Mit freundlichen Grüßen und vielen Dank im Voraus.",
        "Wie beginne ich so ein Schreiben?",
        "Bis wann muss ich den Antrag einreichen?"
      ]
    }
  ],
  "a12-l13": [
    {
      "funktion": "Warnungen und Anweisungen aussprechen",
      "es": "Dar avisos e instrucciones médicas",
      "esEn": "Giving warnings and medical instructions",
      "toma": [
        "Vorsicht! · Pass auf!",
        "Nehmen Sie bitte Platz.",
        "Vorsicht, der Boden ist nass!",
        "Pass auf, das Wasser ist heiß.",
        "Nehmen Sie bitte im Wartezimmer Platz.",
        "Bitte bewegen Sie den Arm nicht.",
        "Achtung, hier ist eine Stufe.",
        "Könnten Sie bitte einen Moment warten?",
        "Bitte nehmen Sie die Tabletten nicht auf leeren Magen.",
        "Fassen Sie die Wunde bitte nicht an."
      ]
    },
    {
      "funktion": "Verhaltensregeln bei Krankheit beachten",
      "es": "Seguir recomendaciones de salud",
      "esEn": "Following health recommendations",
      "toma": [
        "Atmen Sie bitte ruhig weiter.",
        "Vorsicht, die Wunde darf nicht nass werden.",
        "Bitte rauchen Sie vor der Operation nicht.",
        "Achtung, diese Tablette hat Nebenwirkungen.",
        "Pass auf, die Stufe ist sehr hoch!",
        "Nehmen Sie die Tabletten bitte regelmäßig.",
        "Heben Sie bitte nichts Schweres.",
        "Wo genau tut es weh?",
        "Seit wann haben Sie die Beschwerden?",
        "Ist der Schmerz eher stechend oder dumpf?"
      ]
    },
    {
      "funktion": "Schmerzen und Symptome beschreiben",
      "es": "Describir dolores y síntomas",
      "esEn": "Describing pain and symptoms",
      "toma": [
        "Mein Kopf tut weh.",
        "Ich habe Halsschmerzen und Fieber.",
        "Mir tut der Rücken weh.",
        "Ich habe seit Tagen Kopfschmerzen.",
        "Ich fühle mich nicht gut.",
        "Ich habe Fieber.",
        "Ich habe seit drei Tagen Rückenschmerzen.",
        "Mein Knie tut beim Gehen weh.",
        "Mir ist seit heute Morgen übel.",
        "Ich fühle mich schwach und müde."
      ]
    },
    {
      "funktion": "körperliche Beschwerden schildern",
      "es": "Detallar problemas físicos",
      "esEn": "Describing physical ailments",
      "toma": [
        "Der Hals tut beim Schlucken weh.",
        "Mir ist plötzlich schwindlig geworden.",
        "Ich habe Fieber, achtunddreißig fünf.",
        "Der Bauch tut mir seit gestern weh.",
        "Ich habe mich beim Sport verletzt.",
        "Die Schmerzen kommen und gehen.",
        "Der Schmerz ist scharf, nicht dumpf.",
        "Ich kann kaum tief atmen.",
        "Die Wunde blutet immer wieder.",
        "Meine Haut juckt seit Tagen."
      ]
    },
    {
      "funktion": "über das Befinden sprechen",
      "es": "Hablar de cómo te encuentras",
      "esEn": "Talking about how you feel",
      "toma": [
        "Wie geht es dir? – Nicht so gut.",
        "Heute fühle ich mich schon viel besser.",
        "Mir geht es leider gar nicht gut.",
        "Ich war zwei Wochen im Krankenstand.",
        "Die Diagnose war zum Glück harmlos.",
        "Nach der Operation geht es mir besser.",
        "Mein Vater ist im Krankenhaus.",
        "Ich schlafe seit Wochen schlecht.",
        "Wie geht es dir nach der Operation?",
        "Das klingt gar nicht gut."
      ]
    },
    {
      "funktion": "Mitgefühl ausdrücken und Hilfe anbieten",
      "es": "Mostrar empatía y ofrecer ayuda",
      "esEn": "Expressing empathy and offering help",
      "toma": [
        "Gute Besserung! · Das tut mir leid.",
        "Gute Besserung, werde schnell gesund!",
        "Das tut mir wirklich leid für dich.",
        "Wie geht es deiner Mutter jetzt?",
        "Brauchst du irgendetwas aus der Apotheke?",
        "Ruh dich aus, die Arbeit läuft nicht weg.",
        "Melde dich, wenn du etwas brauchst.",
        "Gute Besserung, ruh dich gut aus!",
        "Was soll ich tun?",
        "Du solltest zum Arzt gehen."
      ]
    },
    {
      "funktion": "ärztlichen Rat einholen und Ratschläge geben",
      "es": "Pedir consejo médico y dar recomendaciones",
      "esEn": "Seeking and giving medical advice",
      "toma": [
        "Was würden Sie mir raten?",
        "Was hilft gegen Husten?",
        "Soll ich eine Tablette nehmen?",
        "Brauche ich ein Rezept?",
        "Wie lange soll ich zu Hause bleiben?",
        "Kann ich morgen wieder arbeiten?",
        "Was hilft am besten gegen Husten?",
        "Soll ich zum Arzt gehen oder warten?",
        "Brauche ich für die Salbe ein Rezept?",
        "Du solltest weniger Kaffee trinken."
      ]
    },
    {
      "funktion": "eine Krankmeldung mitteilen",
      "es": "Notificar una baja por enfermedad",
      "esEn": "Reporting sick leave",
      "toma": [
        "Ich bin krank und kann heute nicht kommen.",
        "Die Bestätigung schicke ich Ihnen morgen.",
        "Ich bin voraussichtlich bis Freitag im Krankenstand.",
        "Könnte jemand meine Termine übernehmen?",
        "Entschuldigen Sie die kurzfristige Absage.",
        "Mein Sohn ist krank, ich bleibe zu Hause.",
        "Ich war heute beim Hausarzt.",
        "Nach der Operation bin ich vier Wochen weg.",
        "Die Bestätigung schickt die Ordination direkt.",
        "Wem muss ich die Krankmeldung schicken?"
      ]
    }
  ],
  "a12-l14": [
    {
      "funktion": "nach Kleidung und Größen fragen",
      "es": "Preguntar por prendas y tallas",
      "esEn": "Asking about clothes and sizes",
      "toma": [
        "Ich suche eine Hose in Größe 40.",
        "Kann ich das anprobieren?",
        "Welche Größe haben Sie?",
        "Haben Sie das auch in Blau?",
        "Das ist mir zu eng.",
        "Wo ist die Umkleidekabine?",
        "Ich suche einen Pullover aus Wolle.",
        "Haben Sie das eine Nummer größer?",
        "Diese Hose ist mir zu weit.",
        "Wo kann ich das anprobieren?"
      ]
    },
    {
      "funktion": "Passform und Material beschreiben",
      "es": "Describir el corte y el material",
      "esEn": "Describing fit and material",
      "toma": [
        "Der Stoff fühlt sich sehr angenehm an.",
        "Diese Schuhe sind endlich bequem.",
        "Was trägt man hier zu einer Hochzeit?",
        "Der Mantel ist mir zu altmodisch.",
        "Ich brauche etwas Warmes für den Winter.",
        "An der Jacke fehlt ein Knopf.",
        "Haben Sie das Hemd auch einfarbig?",
        "Der Ärmel ist mir viel zu lang.",
        "Hat die Jacke ein warmes Futter?",
        "Der Reißverschluss geht kaum zu."
      ]
    },
    {
      "funktion": "Gefallen und Missfallen bei Kleidung äußern",
      "es": "Expresar gusto o disgusto sobre ropa",
      "esEn": "Expressing like or dislike regarding clothing",
      "toma": [
        "Das steht dir gut!",
        "Die Farbe gefällt mir nicht.",
        "Das Kleid steht dir wirklich gut.",
        "Die Farbe gefällt mir überhaupt nicht.",
        "Das ist genau mein Stil.",
        "Ehrlich gesagt gefällt mir das nicht.",
        "Das sieht sehr elegant aus.",
        "Mir gefällt die schlichte Variante besser.",
        "Diese Kette gefällt mir wirklich gut.",
        "Das Muster ist mir zu auffällig."
      ]
    },
    {
      "funktion": "Vorlieben vergleichen und bewerten",
      "es": "Comparar y valorar preferencias",
      "esEn": "Comparing and evaluating preferences",
      "toma": [
        "Ich mag lieber die blaue Jacke.",
        "Die ist billiger als die andere.",
        "Die blaue Jacke gefällt mir besser als die schwarze.",
        "Leder hält länger als Stoff.",
        "Ich trage lieber bequeme Schuhe.",
        "Am liebsten kaufe ich im Ausverkauf.",
        "Dieses Geschäft ist teurer als das andere.",
        "Online bestelle ich lieber nicht.",
        "Ich trage lieber einfarbig als kariert.",
        "Welches gefällt dir besser?"
      ]
    },
    {
      "funktion": "Wünsche beim Einkauf äußern",
      "es": "Expresar peticiones en la tienda",
      "esEn": "Expressing wishes while shopping",
      "toma": [
        "Ich hätte gern einen Termin.",
        "Gern, wann passt es Ihnen?",
        "Ich hätte gern einen Termin beim Friseur.",
        "Ich würde gern noch etwas anderes sehen.",
        "Am liebsten hätte ich es bis Freitag.",
        "Könnte ich das bitte eingepackt bekommen?",
        "Ich wünsche mir etwas Praktisches.",
        "Ich hätte gern die Rechnung getrennt.",
        "Ich hätte gern einen Gutschein statt Geld.",
        "Am liebsten hätte ich den Ring eine Nummer größer."
      ]
    },
    {
      "funktion": "Reklamation und Umtausch abwickeln",
      "es": "Gestionar cambios y reclamaciones",
      "esEn": "Handling returns and complaints",
      "toma": [
        "Ich möchte das umtauschen. Hier ist der Kassenbon.",
        "Wann ist es fertig?",
        "Der Reißverschluss ist kaputt.",
        "Kann ich das zurückgeben?",
        "Zahlen Sie bar oder mit Karte?",
        "Bis wann kann ich es abholen?",
        "Ich möchte das umtauschen, es passt nicht.",
        "Ab wann ist es abholbereit?",
        "Bekomme ich das Geld zurück?",
        "Auf dem Hemd ist ein Fleck."
      ]
    },
    {
      "funktion": "Kundendienst und Service anfragen",
      "es": "Consultar servicios al cliente",
      "esEn": "Inquiring about customer services",
      "toma": [
        "Wie lange dauert die Änderung?",
        "Wann kommt die Lieferung?",
        "Können Sie die Schuhe reparieren?",
        "Ich habe online bestellt, aber nichts bekommen.",
        "Bis wann ist der Umtausch möglich?",
        "Ich möchte eine Beschwerde einreichen.",
        "Die Sohle hat sich nach zwei Wochen gelöst.",
        "Kann ich das umtauschen?",
        "Fällt die Größe eher klein aus?",
        "Ist auf das Teil noch Garantie?"
      ]
    },
    {
      "funktion": "Meinung begründen und einschätzen",
      "es": "Dar opiniones razonadas y valoraciones",
      "esEn": "Giving reasoned opinions and assessments",
      "toma": [
        "Ich finde das zu teuer.",
        "Das schaffen wir!",
        "Ich finde das zu teuer für die Qualität.",
        "Meiner Meinung nach ist das Angebot gut.",
        "Ich glaube, wir schaffen das zusammen.",
        "Für mich ist Qualität wichtiger als der Preis.",
        "Ich bin überzeugt, dass sich das lohnt.",
        "Das sehe ich anders, und zwar deshalb:",
        "Ich finde Mode ziemlich überbewertet.",
        "Ein Gutschein ist für mich keine Lösung."
      ]
    }
  ],
  "a12-l15": [
    {
      "funktion": "um Unterstützung und Erklärung bitten",
      "es": "Pedir ayuda y explicaciones",
      "esEn": "Asking for support and explanations",
      "toma": [
        "Könntest du mir kurz helfen?",
        "Wie geht das? Kannst du mir das zeigen?",
        "Kannst du mir zeigen, wie das geht?",
        "Ich komme mit dem Formular nicht weiter.",
        "Könntest du das noch einmal erklären?",
        "Hast du kurz Zeit für eine Frage?",
        "Ich brauche jemanden, der mit mir übt.",
        "Kannst du kurz drüberschauen?",
        "Ich verstehe die Anleitung nicht.",
        "Mit wem kann ich darüber sprechen?"
      ]
    },
    {
      "funktion": "bei praktischen Aufgaben um Mithilfe bitten",
      "es": "Pedir colaboración en tareas prácticas",
      "esEn": "Asking for assistance with practical tasks",
      "toma": [
        "Kannst du mir zeigen, wie ich das hochlade?",
        "Mein Speicher ist voll, was mache ich?",
        "Hilfst du mir beim Buchen der Ferienwohnung?",
        "Könntest du meine Vokabeln abfragen?",
        "Könntest du mir beim Brief helfen?",
        "Würdest du das kurz gegenlesen?",
        "Kannst du mich morgen daran erinnern?",
        "Hättest du kurz Zeit für mich?",
        "Hoffentlich klappt alles wie geplant.",
        "Ich gebe mein Bestes, versprochen."
      ]
    },
    {
      "funktion": "etwas versprechen und Hoffnung ausdrücken",
      "es": "Prometer algo y expresar esperanza",
      "esEn": "Making a promise and expressing hope",
      "toma": [
        "Ich verspreche es dir.",
        "Ich hoffe, dass es klappt.",
        "Ich verspreche dir, ich melde mich morgen.",
        "Ich hoffe, dass alles gut geht.",
        "Hoffentlich klappt es diesmal.",
        "Ich kümmere mich darum, versprochen.",
        "Ich hoffe, wir sehen uns bald wieder.",
        "Darauf kannst du dich verlassen.",
        "Ich hoffe, das Visum kommt rechtzeitig.",
        "Ich verspreche, ich lerne jeden Tag zehn Vokabeln."
      ]
    },
    {
      "funktion": "über Urlaubsziele sprechen",
      "es": "Hablar de destinos de vacaciones",
      "esEn": "Talking about holiday destinations",
      "toma": [
        "Im Sommer fahren wir ans Meer.",
        "Wohin würdest du gern reisen?",
        "Wohin fährst du im Urlaub?",
        "Warst du schon mal in Italien?",
        "Wie lange bleibt ihr dort?",
        "Was kann man dort machen?",
        "Habt ihr schon eine Unterkunft?",
        "Fahrt ihr mit dem Auto oder mit dem Zug?",
        "Warst du schon einmal in Kroatien?",
        "Was empfiehlt der Reiseführer?"
      ]
    },
    {
      "funktion": "Reisevorbereitung und Transport planen",
      "es": "Planificar viajes y transporte",
      "esEn": "Planning travel preparations and transportation",
      "toma": [
        "Nimmst du viel Gepäck mit?",
        "Ist die Reise teuer geworden?",
        "Wann fahrt ihr los?",
        "Lieber Strand oder lieber Berge?",
        "Schläfst du im Zelt oder in der Jugendherberge?",
        "Braucht man für dieses Land ein Visum?",
        "Wie lang ist der Wanderweg zum Gipfel?",
        "Wohin fährst du dieses Jahr?",
        "Warst du schon einmal in Tirol?",
        "Lohnt sich die Reise wirklich?"
      ]
    },
    {
      "funktion": "Vorlieben und Interesse äußern",
      "es": "Expresar preferencias e intereses",
      "esEn": "Expressing preferences and interest",
      "toma": [
        "Ich interessiere mich für Technik.",
        "Das finde ich spannend.",
        "Ich interessiere mich sehr für Geschichte.",
        "Technik finde ich wirklich spannend.",
        "Kochen interessiert mich überhaupt nicht.",
        "Am liebsten lese ich über andere Länder.",
        "Sport interessiert mich mehr als Musik.",
        "Das finde ich nicht so interessant.",
        "Mich interessiert vor allem die Grammatik.",
        "Vokabeln auswendig lernen mag ich nicht."
      ]
    },
    {
      "funktion": "über Lernziele und Fortschritte sprechen",
      "es": "Hablar de metas de estudio y progreso",
      "esEn": "Talking about study goals and progress",
      "toma": [
        "Mein Ziel ist die B1-Prüfung.",
        "Ich möchte flüssiger sprechen.",
        "Warum lernst du Deutsch?",
        "Was fällt dir am schwersten?",
        "Wie oft übst du?",
        "Was ist dein Ziel?",
        "Machst du Fortschritte?",
        "Hast du die Hausaufgabe gemacht?",
        "Ich will endlich ohne Pausen sprechen.",
        "Merkst du selbst Fortschritte?"
      ]
    },
    {
      "funktion": "über Lernmethoden und Schwierigkeiten austauschen",
      "es": "Compartir métodos de estudio y dificultades",
      "esEn": "Sharing study methods and difficulties",
      "toma": [
        "Ohne Wiederholung vergesse ich alles wieder.",
        "Ich lerne am besten mit Musik und Serien.",
        "Die Aussprache ist mein größtes Problem.",
        "Warum lernst du eigentlich Deutsch?",
        "Woher nimmst du die Motivation?",
        "Wie viele Vokabeln lernst du pro Woche?",
        "Kannst du die Regeln auswendig?",
        "Was willst du als Nächstes erreichen?",
        "Wie lernst du am effektivsten?",
        "Was hilft dir beim Vokabelnlernen?"
      ]
    }
  ],
  "a12-l16": [
    {
      "funktion": "über Feste und Bräuche berichten",
      "es": "Hablar de fiestas y tradiciones",
      "esEn": "Talking about celebrations and customs",
      "toma": [
        "Bei uns feiert man Weihnachten am 24.",
        "Bei uns isst man am 24. erst spät am Abend.",
        "In Spanien feiert man bis in die Nacht.",
        "Zu Ostern versteckt man bei uns Eier.",
        "Normalerweise bringt man Blumen oder Wein mit.",
        "Bei uns gratuliert man nicht vor dem Geburtstag.",
        "Silvester verbringen wir immer zu Hause.",
        "Bei uns gibt es zu Silvester ein Feuerwerk im Dorf.",
        "Den Christbaum schmücken wir erst am Vierundzwanzigsten.",
        "Feiert ihr Geburtstage immer so groß?"
      ]
    },
    {
      "funktion": "eine Einladung aussprechen",
      "es": "Hacer una invitación",
      "esEn": "Extending an invitation",
      "toma": [
        "Ich lade dich zu meinem Geburtstag ein.",
        "Passt dir Samstag um acht?",
        "Ich feiere am Samstag, kommst du?",
        "Kommst du zur Hochzeit im Juni?",
        "Kommst du zur Taufe am Sonntag?",
        "Wir feiern unser Jubiläum im September.",
        "Wir würden uns sehr freuen, wenn du kommst.",
        "Wollen wir uns für Samstag etwas ausmachen?",
        "Passt dir 19 Uhr?",
        "Machen wir uns für Freitag etwas aus?"
      ]
    },
    {
      "funktion": "auf eine Einladung reagieren",
      "es": "Responder a una invitación",
      "esEn": "Responding to an invitation",
      "toma": [
        "Sehr gern, ich komme!",
        "Leider kann ich nicht.",
        "Soll ich etwas mitbringen?",
        "Kann ich etwas beisteuern?",
        "Leider kann ich am Samstag nicht.",
        "Darf ich jemanden mitbringen?",
        "Um wie viel Uhr soll ich da sein?",
        "Vielen Dank für die Einladung!",
        "Muss ich mich verkleiden?",
        "Ich sage dir bis Mittwoch Bescheid."
      ]
    },
    {
      "funktion": "Treffen vereinbaren und abstimmen",
      "es": "Acordar y coordinar un encuentro",
      "esEn": "Arranging and coordinating a meet-up",
      "toma": [
        "Wo machen wir uns aus?",
        "Bleibt es bei unserer Ausmachung?",
        "Können wir das auf nächsten Monat verschieben?",
        "Ich melde mich am Vortag noch einmal.",
        "Machen wir uns für den Jahreswechsel etwas aus?",
        "Passt es dir, wenn wir gemeinsam hinfahren?",
        "Passt es dir, wenn wir es so ausmachen?",
        "Wir haben uns für halb acht ausgemacht.",
        "Bring bitte nichts mit, wir haben alles.",
        "Wir müssen leider kurzfristig absagen."
      ]
    },
    {
      "funktion": "ein Kompliment machen",
      "es": "Hacer un cumplido",
      "esEn": "Giving a compliment",
      "toma": [
        "Das sieht toll aus!",
        "Das schmeckt super!",
        "Die Wohnung sieht wunderschön aus!",
        "Das Essen schmeckt fantastisch.",
        "Du hast das toll organisiert.",
        "Deine Rede war wirklich schön.",
        "Der Kuchen ist der beste, den ich kenne.",
        "Du siehst heute richtig gut aus.",
        "Die Tischdecke und die Kerzen sehen festlich aus.",
        "Das Kleid steht dir ausgezeichnet."
      ]
    },
    {
      "funktion": "Essen und Trinken anbieten",
      "es": "Ofrecer comida y bebida",
      "esEn": "Offering food and drinks",
      "toma": [
        "Möchtest du noch etwas?",
        "Nimm dir doch! · Greif zu!",
        "Möchtest du noch ein Stück Torte?",
        "Greif bitte zu, es ist genug da!",
        "Was möchtest du trinken?",
        "Soll ich dir nachschenken?",
        "Nimm dir doch noch etwas Salat.",
        "Magst du einen Kaffee zum Kuchen?",
        "Stoßen wir gemeinsam an?",
        "Vom Buffet ist noch viel übrig."
      ]
    },
    {
      "funktion": "sich entschuldigen und Fehler eingestehen",
      "es": "Disculparse y admitir un error",
      "esEn": "Apologizing and admitting a mistake",
      "toma": [
        "Entschuldige die Verspätung!",
        "Tut mir leid, der Bus hatte Verspätung.",
        "Tut mir leid, ich habe es völlig vergessen.",
        "Entschuldigung, das war nicht so gemeint.",
        "Es tut mir leid, dass ich nicht geantwortet habe.",
        "Verzeihung, ich habe Sie unterbrochen.",
        "Das war mein Fehler, ich mache es neu.",
        "Entschuldige, ich habe das Geschenk vergessen.",
        "Es tut mir leid, dass wir so spät gratulieren.",
        "Entschuldige, dass ich mich nicht gemeldet habe."
      ]
    },
    {
      "funktion": "Gäste vorstellen und beschreiben",
      "es": "Presentar y describir a los invitados",
      "esEn": "Introducing and describing guests",
      "toma": [
        "Das ist Pekka. Er kommt aus Finnland.",
        "Sie ist sehr nett und hilfsbereit.",
        "Das ist Pekka, er arbeitet mit mir im Labor.",
        "Sie ist sehr hilfsbereit und immer gut gelaunt.",
        "Mein Bruder ist ziemlich ruhig.",
        "Sie kommt aus Rumänien und lebt seit zehn Jahren hier.",
        "Er ist der Gastgeber und hat alles vorbereitet.",
        "Wir kennen uns schon aus der Schule.",
        "Das ist Jonas, mein Trauzeuge.",
        "Sie hat das ganze Fest organisiert."
      ]
    }
  ]
};

fs.writeFileSync('scripts/k-a12.json', JSON.stringify(a12data, null, 2));
console.log('k-a12.json generado con éxito.');
