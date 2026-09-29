// TEMA: cómo suena lo que lees.
//
// El libro no traía nada de pronunciación, y es la mitad del problema al
// empezar: el alemán se lee casi siempre igual, pero las reglas no son las del
// castellano y hasta que no te las dicen lees "Wein" como «vein» y "Vater"
// como «vater».
//
// Una regla por lección de A1.1, repartidas de lo que más se usa a lo que
// menos, y cuatro más en la Start con lo que vale para toda palabra:
//
//   Start  acento, vocales largas y cortas, b/d/g finales, melodía
//          (y "ei und ie", que está en start.js)
//
//   L1  ch          L5  v y w
//   L2  sch, sp, st L6  eu, äu, au
//   L3  z, s, ß     L7  la h
//   L4  ä, ö, ü     L8  -er y -ig finales
//
// Solo `picks`: ordenar palabras no mide cómo suena nada, y un ejercicio que
// no mide lo que dice medir es peor que no estar.

export const PRONUNCIACION = {
  // ---------- A1.1 L1 ----------
  'aussprache-ch': {
    picks: [
      { s: 'Nach i, e, ä, ö, ü und Konsonant klingt „ch“ wie in ___.', a: 'ich', d: ['Buch', 'acht'], t: 'Tras i, e, ä, ö, ü y consonante, "ch" suena como en «ich».', e: 'Es el sonido suave, parecido a una "h" muy marcada: ich, mich, rechts.' },
      { s: 'Nach a, o, u und au klingt „ch“ wie in ___.', a: 'Buch', d: ['ich', 'nicht'], t: 'Tras a, o, u y au, "ch" suena como en «Buch».', e: 'Es el sonido fuerte, el de la "j" española: Buch, acht, auch.' },
      { s: 'Welches Wort hat den harten „ch“-Laut?', a: 'Nacht', d: ['Licht', 'Küche'], t: '¿Cuál lleva la "ch" fuerte?', e: 'Nacht: la "ch" va detrás de "a".' },
      { s: 'Welches Wort hat den weichen „ch“-Laut?', a: 'München', d: ['Woche', 'Kuchen'], t: '¿Cuál lleva la "ch" suave?', e: 'München: detrás de "ü". Woche y Kuchen van detrás de o y u.' },
      { s: '„Chef“ spricht man mit ___ am Anfang.', a: 'sch', d: ['ch wie ich', 'k'], t: '«Chef» empieza con el sonido «sch».', e: 'Las palabras de origen francés suenan «schef».' },
      { s: '„Chor“ spricht man mit ___ am Anfang.', a: 'k', d: ['sch', 'ch wie ich'], t: '«Chor» empieza con «k».', e: 'De origen griego: «kor».' },
      { s: 'In „sechs“ klingt „chs“ wie ___.', a: 'ks', d: ['ch', 'sch'], t: 'En «sechs», «chs» suena «ks».', e: 'sechs suena «seks». Igual en Fuchs y wachsen.' },
      { s: 'Welches Wort reimt sich NICHT auf die anderen?', a: 'Buch', d: ['nicht', 'Licht'], t: '¿Cuál no rima con las otras?', e: 'nicht y Licht llevan la ch suave; Buch, la fuerte.' },
      { s: 'Der Diminutiv „-chen“ hat immer den ___ Laut.', a: 'weichen', d: ['harten', 'k-'], t: 'El diminutivo «-chen» lleva siempre el sonido suave.', e: 'Mädchen, Brötchen: siempre suave, venga la vocal que venga antes.' },
      { s: 'In „auch“ klingt „ch“ ___.', a: 'hart', d: ['weich', 'wie k'], t: 'En «auch», la "ch" suena fuerte.', e: 'Detrás de "au" siempre va la fuerte.' },
      { s: 'Welches dieser Wörter hat den harten „ch“-Laut?', a: 'Koch', d: ['Küche', 'Milch'], t: '«Koch» lleva el ch duro.', e: 'Detrás de o.' },
      { s: 'Und welches tiene el weichen „ch“-Laut?', a: 'Bücher', d: ['Buch', 'Tochter'], t: '«Bücher» lleva el ch suave.', e: 'El Umlaut cambia el sonido.' },
      { s: 'In „Mädchen“ klingt „ch“ ___.', a: 'weich', d: ['hart', 'wie k'], t: 'En «Mädchen» el ch es suave.', e: '-chen siempre suave.' },
      { s: 'In „Tochter“ klingt „ch“ ___.', a: 'hart', d: ['weich', 'wie sch'], t: 'En «Tochter» el ch es duro.', e: 'Detrás de o.' },
      { s: '„Buch“ und „Bücher“ klingen ___.', a: 'verschieden', d: ['gleich', 'beide hart'], t: '«Buch» y «Bücher» suenan distinto.', e: 'u duro, ü suave.' },
      { s: 'Nach „r“ klingt „ch“ meistens ___.', a: 'weich', d: ['hart', 'wie k'], t: 'Detrás de «r» el ch suele ser suave.', e: 'durch, Kirche.' },
      { s: '„Christkind“ spricht man am Anfang mit ___.', a: 'k', d: ['sch', 'ch'], t: '«Christkind» empieza con sonido k.', e: 'Como Chor y Charakter.' },
      { s: '„Chance“ spricht man am Anfang mit ___.', a: 'sch', d: ['k', 'ch'], t: '«Chance» empieza con sonido sch.', e: 'Viene del francés.' },
      { s: 'Welcher Laut fehlt im Spanischen ganz?', a: 'das weiche ch', d: ['das harte ch', 'das k'], t: 'El que no existe en español es el ch suave.', e: 'El duro se parece a la jota.' },
      { s: 'In „richtig“ hört man am Ende ___.', a: 'den weichen ch-Laut', d: ['ein k', 'ein g'], t: 'En «richtig» al final se oye el ch suave.', e: '-ig se pronuncia como -ich.' }
    ]
  },

  // ---------- A1.1 L2 ----------
  'aussprache-sch-sp-st': {
    picks: [
      { s: '„Schule“ beginnt mit dem Laut ___.', a: 'sch', d: ['s', 'ch'], t: '«Schule» empieza con el sonido «sch».', e: 'Las tres letras juntas son un solo sonido, el de «show» en inglés.' },
      { s: 'Am Wortanfang spricht man „sp“ wie ___.', a: 'schp', d: ['sp', 'sb'], t: 'Al principio de palabra, «sp» suena «schp».', e: 'sprechen suena «schprechen». Spanien, «Schpanien».' },
      { s: 'Am Wortanfang spricht man „st“ wie ___.', a: 'scht', d: ['st', 'sd'], t: 'Al principio de palabra, «st» suena «scht».', e: 'Stadt suena «Schtadt». Straße, «Schtraße».' },
      { s: 'In der Wortmitte bleibt „st“ ___.', a: 'st', d: ['scht', 'sch'], t: 'A mitad de palabra, «st» se queda «st».', e: 'Fenster y kosten suenan con "st" normal, no con «scht».' },
      { s: 'Welches Wort beginnt mit „scht“?', a: 'Student', d: ['Fenster', 'Osten'], t: '¿Cuál empieza sonando «scht»?', e: 'Student: la "st" abre la palabra.' },
      { s: 'Welches Wort beginnt mit „schp“?', a: 'Sport', d: ['Wespe', 'Kaspar'], t: '¿Cuál empieza sonando «schp»?', e: 'Sport suena «Schport».' },
      { s: '„Spaß“ spricht man ___.', a: 'Schpaß', d: ['Spaß wie im Spanischen', 'Sbaß'], t: '«Spaß» se pronuncia «Schpaß».', e: 'sp inicial: siempre «schp».' },
      { s: 'Ein „s“ vor einem Vokal klingt ___ wie in „Sonne“.', a: 'stimmhaft', d: ['wie ß', 'wie sch'], t: 'Una "s" antes de vocal suena sonora, como en «Sonne».', e: 'Es la "s" zumbada del inglés "zoo": Sonne, sagen, lesen.' },
      { s: 'Wie viele Laute hat „sch“?', a: 'einen', d: ['zwei', 'drei'], t: '¿Cuántos sonidos tiene «sch»?', e: 'Uno solo, aunque se escriban tres letras.' },
      { s: 'In „verstehen“ klingt das „st“ ___.', a: 'wie scht', d: ['wie st', 'wie sd'], t: 'En «verstehen», la «st» suena «scht».', e: 'Porque "stehen" empieza ahí dentro: ver-stehen. Cuenta como principio de palabra.' },
      { s: 'Warum klingt „sp“ am Wortanfang anders als in der Mitte?', a: 'nur am Anfang wird es schp', d: ['es klingt überall gleich', 'nur in der Mitte wird es schp'], t: 'Porque solo a principio de palabra «sp» suena «schp».', e: 'Sport = Schport, pero Wespe = Wes-pe.' },
      { s: 'Wie viele Buchstaben und wie viele Laute hat „sch“?', a: 'drei Buchstaben, ein Laut', d: ['drei Buchstaben, drei Laute', 'ein Buchstabe, ein Laut'], t: '«sch» son tres letras y un solo sonido.', e: 'Como la sh del inglés.' },
      { s: 'In welchem Wort bleibt „st“ ein normales st?', a: 'Fenster', d: ['Stadt', 'Stuhl'], t: 'En «Fenster» el «st» se queda como st normal.', e: 'Porque no está al principio de palabra.' },
      { s: 'Wie klingt ein „s“ vor einem Vokal?', a: 'stimmhaft, wie ein z', d: ['stimmlos, wie ein ss', 'stumm'], t: 'La «s» ante vocal suena sonora, como una z inglesa.', e: 'Sonne, sagen, Sofa.' },
      { s: 'Was ist in „Gespräch“ mit dem sp?', a: 'es klingt schp', d: ['es klingt sp', 'es ist stumm'], t: 'En «Gespräch» el «sp» suena «schp».', e: 'Ge- es prefijo: la palabra empieza de verdad en «spräch».' },
      { s: '„Stadt“ und „Staat“ beginnen beide mit ___.', a: 'scht', d: ['st', 's'], t: '«Stadt» y «Staat» empiezan las dos con «scht».', e: 'Lo que cambia es la vocal, no el comienzo.' },
      { s: 'Welches Wort beginnt NICHT mit schp oder scht?', a: 'Sonne', d: ['Spiel', 'Straße'], t: '«Sonne» no empieza con schp ni scht.', e: 'Es una s sola delante de vocal.' },
      { s: '„Straße“ spricht man ___.', a: 'Schtraße', d: ['Straße mit s', 'Sraße'], t: '«Straße» se pronuncia «Schtraße».', e: 'st al principio → scht.' },
      { s: 'In „Angst“ klingt das st ___.', a: 'wie st', d: ['wie scht', 'wie schp'], t: 'En «Angst» el «st» suena st normal.', e: 'Está al final, no al principio.' },
      { s: 'Was hört ein spanisches Ohr in „Spanisch“ am Anfang?', a: 'einen sch-Laut', d: ['ein einfaches s', 'gar nichts'], t: 'Un oído español oye un «sch» al principio de «Spanisch».', e: 'Y por eso cuesta decirlo: nosotros diríamos «spanish».' }
    ],
    clozes: [
      { txt: 'Am Wortanfang klingt „sp“ wie ___ und „st“ wie ___. Aber in der Mitte, zum Beispiel in „Fenster“, bleibt das „s“ ein ___ „s“.', a: ['schp', 'scht', 'normales'], extra: ['sp', 'st', 'stummes'], t: 'Al principio de palabra «sp» suena «schp» y «st» suena «scht». Pero en medio, por ejemplo en «Fenster», la «s» sigue siendo una «s» normal.', e: 'La regla vale solo al principio de palabra o de raíz: sprechen, Straße, aber Fenster.' }
    ]
  },

  // ---------- A1.1 L3 ----------
  'aussprache-z-s-ss': {
    picks: [
      { s: '„z“ spricht man immer wie ___.', a: 'ts', d: ['s', 'z wie im Spanischen'], t: 'La "z" se pronuncia siempre «ts».', e: 'Zeit suena «tsait», zehn «tsen». Nunca como la z española.' },
      { s: '„ß“ ist immer ___.', a: 'stimmlos', d: ['stimmhaft', 'wie z'], t: 'La "ß" es siempre sorda.', e: 'Como la "s" de «casa» en español: Straße, groß.' },
      { s: 'Vor „ß“ ist der Vokal ___.', a: 'lang', d: ['kurz', 'egal'], t: 'Antes de "ß" la vocal es larga.', e: 'Straße, groß, Fuß. Con "ss" en cambio es corta: Fluss, muss.' },
      { s: 'In „Sonne“ klingt das „s“ ___.', a: 'stimmhaft', d: ['stimmlos', 'wie ts'], t: 'En «Sonne» la "s" suena sonora.', e: 's + vocal = sonora, como el zumbido de una abeja.' },
      { s: 'In „das“ klingt das „s“ ___.', a: 'stimmlos', d: ['stimmhaft', 'wie ts'], t: 'En «das» la "s" suena sorda.', e: 'Al final de palabra la "s" se ensordece.' },
      { s: 'Welches Wort beginnt mit dem Laut „ts“?', a: 'Zimmer', d: ['Sommer', 'Suppe'], t: '¿Cuál empieza con el sonido «ts»?', e: 'Zimmer: «tsimmer».' },
      { s: '„Salz“ endet mit ___.', a: 'ts', d: ['s', 'sch'], t: '«Salz» acaba en «ts».', e: 'La "z" suena «ts» también al final.' },
      { s: 'In „müssen“ ist der Vokal ___.', a: 'kurz', d: ['lang', 'egal'], t: 'En «müssen» la vocal es corta.', e: 'La doble "ss" acorta la vocal de delante.' },
      { s: '„sitzen“ hat wie viele „ts“-Laute?', a: 'einen', d: ['zwei', 'keinen'], t: '¿Cuántos sonidos «ts» tiene «sitzen»?', e: 'Uno: el de la "tz". La "s" del principio es sonora.' },
      { s: 'Welches Wort hat KEIN „ts“?', a: 'sehen', d: ['zahlen', 'Katze'], t: '¿Cuál no tiene «ts»?', e: 'sehen empieza con "s" sonora, no con "z".' },
      { s: 'In „Reise“ klingt das „s“ ___.', a: 'stimmhaft', d: ['stimmlos', 'wie ts'], t: 'En «Reise» la "s" suena sonora.', e: 'Entre vocales la s es sonora.' },
      { s: '„Zug“ beginnt mit ___.', a: 'ts', d: ['s', 'sch'], t: '«Zug» empieza con «ts».', e: 'La z inicial suena ts.' },
      { s: 'In „ist“ klingt das „s“ ___.', a: 'stimmlos', d: ['stimmhaft', 'wie ts'], t: 'En «ist» la "s" suena sorda.', e: 'Delante de consonante la s se ensordece.' },
      { s: 'In „Fluss“ ist der Vokal ___.', a: 'kurz', d: ['lang', 'egal'], t: 'En «Fluss» la vocal es corta.', e: 'La doble ss va detrás de vocal corta.' },
      { s: 'In „Fuß“ ist der Vokal ___.', a: 'lang', d: ['kurz', 'egal'], t: 'En «Fuß» la vocal es larga.', e: 'La ß va detrás de vocal larga.' },
      { s: '„Platz“ endet mit ___.', a: 'ts', d: ['s', 'z wie im Spanischen'], t: '«Platz» acaba en «ts».', e: 'El grupo tz también suena ts.' },
      { s: 'Am Wortanfang vor einem Vokal ist „s“ ___.', a: 'stimmhaft', d: ['stimmlos', 'wie ts'], t: 'A principio de palabra y ante vocal, la "s" es sonora.', e: 'sagen, sehen, Sonne.' },
      { s: 'Wie viele „ts“-Laute hat „zwanzig“?', a: 'zwei', d: ['einen', 'keinen'], t: '¿Cuántos sonidos «ts» tiene «zwanzig»?', e: 'Dos: la z del principio y la de -zig.' },
      { s: '„heißen“ schreibt man mit ___.', a: 'ß', d: ['ss', 's'], t: '«heißen» se escribe con "ß".', e: 'La vocal de delante (ei) es larga.' },
      { s: '„Straße“ und „Strasse“ klingen ___.', a: 'gleich', d: ['verschieden', 'gar nicht ähnlich'], t: '«Straße» y «Strasse» suenan igual.', e: 'En Suiza se escribe ss; la pronunciación no cambia.' }
    ]
  },

  // ---------- A1.1 L4 ----------
  'aussprache-umlaute': {
    picks: [
      { s: '„ä“ klingt wie ___.', a: 'e', d: ['a', 'i'], t: 'La "ä" suena como una "e".', e: 'Mädchen suena «medchen», spät «schpet».' },
      { s: 'Für „ö“ formt man die Lippen wie bei ___ und sagt „e“.', a: 'o', d: ['u', 'a'], t: 'Para la "ö" se ponen los labios de "o" y se dice "e".', e: 'schön, hören. No existe en español: hay que fabricarla.' },
      { s: 'Für „ü“ formt man die Lippen wie bei ___ und sagt „i“.', a: 'u', d: ['o', 'e'], t: 'Para la "ü" se ponen los labios de "u" y se dice "i".', e: 'müde, über, Tür. Como la "u" francesa.' },
      { s: 'Welches Wort hat den „e“-Laut?', a: 'Käse', d: ['Kasse', 'Küche'], t: '¿Cuál lleva el sonido "e"?', e: 'Käse: la "ä" suena "e".' },
      { s: '„schon“ und „schön“ sind ___.', a: 'zwei Wörter', d: ['dasselbe Wort', 'beide falsch'], t: '«schon» y «schön» son dos palabras distintas.', e: 'schon = ya; schön = bonito. El Umlaut cambia el significado.' },
      { s: 'Ohne Umlaut kann man „ü“ auch ___ schreiben.', a: 'ue', d: ['uh', 'u'], t: 'Sin Umlaut, la "ü" se puede escribir "ue".', e: 'Muenchen = München. Se usa en direcciones de correo y dominios.' },
      { s: 'Der Plural von „Buch“ ist „Bücher“: der Umlaut ___ den Laut.', a: 'ändert', d: ['verlängert', 'löscht'], t: 'El plural de «Buch» es «Bücher»: el Umlaut cambia el sonido.', e: 'Muchos plurales se hacen justo así.' },
      { s: 'Welches Wort hat KEINEN Umlaut-Laut?', a: 'Sommer', d: ['Mütter', 'Läden'], t: '¿Cuál no tiene sonido de Umlaut?', e: 'Sommer lleva una "o" normal.' },
      { s: '„Tür“ reimt sich mit ___.', a: 'für', d: ['Tor', 'Tier'], t: '«Tür» rima con «für».', e: 'Las dos con "ü".' },
      { s: 'In „hören“ ist der Laut ___.', a: 'ö', d: ['o', 'e'], t: 'En «hören» el sonido es "ö".', e: 'Distinto de "horen", que no existe.' },
      { s: 'Was ändert ein Umlaut an einem Wort?', a: 'den Laut und oft la palabra', d: ['sólo cómo se escribe', 'nada, es decorativo'], t: 'El Umlaut cambia el sonido y muchas veces la palabra entera.', e: 'Mutter → Mütter, schon → schön.' },
      { s: 'Wie kommt man vom „u“ zum „ü“?', a: 'Lippen wie bei u, Zunge wie bei i', d: ['se dice u más corto', 'se dice i más largo'], t: 'Labios como para «u», lengua como para «i».', e: 'Es el truco que hace el sonido.' },
      { s: 'Welche drei Umlaute gibt es?', a: 'ä, ö, ü', d: ['ä, ö, ï', 'á, é, í'], t: 'Los tres Umlaut son «ä», «ö» y «ü».', e: 'No hay más.' },
      { s: 'Wie schreibt man Umlaute ohne die Punkte?', a: 'ae, oe, ue', d: ['a, o, u', 'à, ò, ù'], t: 'Sin los puntos se escriben «ae», «oe», «ue».', e: 'Muller = Müller en un formulario viejo.' },
      { s: 'Wo sieht man den Umlaut sehr oft?', a: 'im Plural', d: ['en el infinitivo', 'en los adjetivos'], t: 'Donde más se ve es en el plural.', e: 'Buch → Bücher, Haus → Häuser.' },
      { s: 'Welches Wortpaar unterscheidet sich NUR durch den Umlaut?', a: 'Mutter / Mütter', d: ['Vater / Vetter', 'Hund / Hand'], t: 'El par que solo se distingue por el Umlaut es «Mutter / Mütter».', e: 'Singular y plural.' },
      { s: 'Welches Wort hat den „ö“-Laut?', a: 'können', d: ['kommen', 'kaufen'], t: 'El que lleva sonido «ö» es «können».', e: 'können frente a kommen: cambia el verbo entero.' },
      { s: 'Warum ist der Umlaut kein Detail?', a: 'cambia el significado', d: ['sólo suena más fino', 'es cosa del norte'], t: 'Porque cambia el significado.', e: 'Decir «schon» por «schön» es decir otra cosa.' },
      { s: '„fünf“ spricht man mit ___.', a: 'ü', d: ['u', 'i'], t: '«fünf» se pronuncia con «ü».', e: 'Ni «funf» ni «finf».' },
      { s: 'Welcher Umlaut fehlt im Spanischen am meisten?', a: 'ü', d: ['ä', 'ninguno'], t: 'El que más se echa en falta en español es la «ü».', e: 'La «ä» se parece a nuestra e.' }
    ]
  },

  // ---------- A1.1 L5 ----------
  'aussprache-v-w': {
    picks: [
      { s: '„w“ spricht man wie das spanische ___.', a: 'v von „vaca“', d: ['b von „bota“', 'u'], t: 'La "w" se pronuncia como una "v" labiodental.', e: 'Wien, Wasser, wohnen: labio de abajo contra los dientes de arriba.' },
      { s: '„v“ spricht man meistens wie ___.', a: 'f', d: ['w', 'b'], t: 'La "v" se pronuncia casi siempre como "f".', e: 'Vater suena «fater», vier «fir», von «fon».' },
      { s: '„Vater“ klingt wie ___.', a: 'Fater', d: ['Water', 'Bater'], t: '«Vater» suena «fater».', e: 'La "v" alemana es "f".' },
      { s: '„Wasser“ klingt wie ___.', a: 'Wasser mit v-Laut', d: ['Basser', 'Fasser'], t: '«Wasser» suena con el sonido "v".', e: 'La "w" es "v", nunca "b".' },
      { s: 'In Fremdwörtern wie „Video“ klingt „v“ wie ___.', a: 'w', d: ['f', 'b'], t: 'En extranjerismos como «Video», la "v" suena "w".', e: 'Video, Vase, Klavier: ahí sí es sonora.' },
      { s: 'Welches Wort beginnt mit dem „f“-Laut?', a: 'viel', d: ['wie', 'Bier'], t: '¿Cuál empieza con el sonido "f"?', e: 'viel suena «fil».' },
      { s: '„wer“ und „Verkehr“ beginnen ___.', a: 'unterschiedlich', d: ['gleich', 'beide mit f'], t: '«wer» y «Verkehr» no empiezan igual.', e: 'wer con "v"; Verkehr con "f".' },
      { s: '„Wein“ spricht man ___.', a: 'vain', d: ['bain', 'fain'], t: '«Wein» se pronuncia «vain».', e: 'w = v, y "ei" = ai.' },
      { s: 'Welches Wort hat den „v“-Laut?', a: 'Wohnung', d: ['Vater', 'Familie'], t: '¿Cuál tiene el sonido "v"?', e: 'Wohnung, con "w".' },
      { s: '„vier“ und „wir“ klingen ___.', a: 'unterschiedlich', d: ['gleich', 'beide mit b'], t: '«vier» y «wir» no suenan igual.', e: 'vier = «fir», wir = «vir». Una sola letra los separa.' },
      { s: 'Wie klingt das deutsche „w“?', a: 'como la v inglesa de very', d: ['como la b española', 'como una u'], t: 'La «w» alemana suena como la v inglesa de «very».', e: 'Los dientes tocan el labio.' },
      { s: 'Wie klingt das deutsche „v“ meistens?', a: 'como una f', d: ['como una w', 'como una b'], t: 'La «v» alemana suena casi siempre como una «f».', e: 'Vater, vier, von.' },
      { s: 'Wann klingt „v“ wie „w“?', a: 'en extranjerismos', d: ['al principio de palabra', 'nunca'], t: 'La «v» suena como «w» en los extranjerismos.', e: 'Video, Vase, Vitamin.' },
      { s: 'Warum ist esto difícil para un español?', a: 'confundimos b y v y no tenemos ese sonido', d: ['porque la v no existe', 'porque la w es muda'], t: 'Porque en español b y v suenan igual y ese sonido no existe.', e: 'En alemán son dos sonidos distintos y ninguno es nuestra b.' },
      { s: '„Wein“ und „fein“ beginnen ___.', a: 'unterschiedlich', d: ['gleich', 'beide mit f'], t: '«Wein» y «fein» empiezan distinto.', e: 'Wein con v inglesa, fein con f.' },
      { s: '„viel“ und „wie viel“: wie klingt das v?', a: 'wie f', d: ['wie w', 'stumm'], t: 'En los dos, la «v» suena «f».', e: 'fiel, wie fiel.' },
      { s: 'Welches Wort beginnt mit dem w-Laut?', a: 'Wasser', d: ['Vater', 'vergessen'], t: 'El que empieza con el sonido «w» es «Wasser».', e: 'Los otros dos empiezan con f.' },
      { s: 'Was passiert, wenn man „w“ wie eine spanische b sagt?', a: 'suena a acento extranjero', d: ['no se nota', 'cambia la palabra'], t: 'Se nota enseguida el acento extranjero.', e: 'Es de las cosas que más delatan.' },
      { s: '„Vase“ spricht man mit ___.', a: 'w-Laut', d: ['f-Laut', 'b-Laut'], t: '«Vase» se pronuncia con sonido «w».', e: 'Extranjerismo.' },
      { s: '„Wetter“ und „Vetter“ sind ___.', a: 'zwei Wörter', d: ['dasselbe Wort', 'dos formas del mismo'], t: '«Wetter» y «Vetter» son dos palabras distintas.', e: 'El tiempo y el primo.' }
    ]
  },

  // ---------- A1.1 L6 ----------
  'aussprache-eu-au': {
    picks: [
      { s: '„eu“ spricht man wie ___.', a: 'oi', d: ['eu', 'au'], t: 'El diptongo "eu" se pronuncia «oi».', e: 'neu suena «noi», Freund «Froind», Deutsch «Doitsch».' },
      { s: '„äu“ spricht man wie ___.', a: 'oi', d: ['äu', 'ai'], t: 'El diptongo "äu" también suena «oi».', e: 'Häuser suena «Hoiser». Igual que "eu".' },
      { s: '„au“ spricht man wie ___.', a: 'au', d: ['oi', 'ou'], t: 'El diptongo "au" suena «au», igual que en español.', e: 'Haus, Frau, auch. Este es el fácil.' },
      { s: '„Deutschland“ beginnt mit dem Laut ___.', a: 'doi', d: ['deu', 'dau'], t: '«Deutschland» empieza sonando «doi».', e: 'eu = oi.' },
      { s: 'Welches Wort klingt mit „oi“?', a: 'heute', d: ['Haus', 'heiß'], t: '¿Cuál suena con «oi»?', e: 'heute: «hoite».' },
      { s: '„Häuser“ ist der Plural von „Haus“: der Laut ___.', a: 'ändert sich', d: ['bleibt gleich', 'verschwindet'], t: '«Häuser» es el plural de «Haus»: el sonido cambia.', e: 'au = «au», äu = «oi». El plural se oye.' },
      { s: '„Leute“ reimt sich mit ___.', a: 'heute', d: ['Laute', 'Leiter'], t: '«Leute» rima con «heute».', e: 'Las dos con "eu" = «oi».' },
      { s: 'Welches Wort hat KEIN „oi“?', a: 'auch', d: ['neun', 'Bäume'], t: '¿Cuál no tiene «oi»?', e: 'auch lleva "au", que suena «au».' },
      { s: '„neun“ spricht man ___.', a: 'noin', d: ['neun', 'naun'], t: '«neun» se pronuncia «noin».', e: 'eu = oi, también en los números.' },
      { s: '„ie“ ist kein Diphthong, sondern ___.', a: 'ein langes i', d: ['i und e', 'oi'], t: '"ie" no es diptongo, es una "i" larga.', e: 'Bier, viel, wie: una sola vocal, estirada.' },
      { s: 'Wie viele Vokale hört man in einem Diphthong?', a: 'uno solo, deslizado', d: ['dos separados', 'ninguno'], t: 'En un diptongo se oye un solo sonido que se desliza.', e: 'No son dos vocales seguidas.' },
      { s: 'Welche drei Diphthonge hat das Deutsche?', a: 'ei, au, eu', d: ['ie, ei, ai', 'au, ou, eu'], t: 'Los tres diptongos alemanes son «ei», «au» y «eu».', e: 'Con sus gemelos ai y äu.' },
      { s: 'Warum ist „ie“ kein Diphthong?', a: 'porque es una i larga', d: ['porque lleva e', 'porque es corto'], t: 'Porque no es un deslizamiento: es una i larga.', e: 'Liebe, Bier, vier.' },
      { s: '„Bäume“ spricht man mit ___.', a: 'oi', d: ['äu como ä', 'au'], t: '«Bäume» se pronuncia con «oi».', e: 'äu = eu.' },
      { s: 'Welches Paar klingt gleich?', a: 'eu und äu', d: ['ei und ie', 'au und äu'], t: 'El par que suena igual es «eu» y «äu».', e: 'Leute / Häuser.' },
      { s: 'Was passiert mit „au“ im Plural?', a: 'oft wird es äu, also oi', d: ['no cambia nunca', 'se alarga'], t: 'En plural muchas veces pasa a «äu», o sea «oi».', e: 'Haus → Häuser, Baum → Bäume.' },
      { s: '„Europa“ beginnt mit ___.', a: 'oi', d: ['eu como e-u', 'au'], t: '«Europa» empieza con «oi».', e: 'Oiropa.' },
      { s: 'Welches Wort hat den au-Laut?', a: 'kaufen', d: ['Käufer', 'Leute'], t: 'El que lleva el sonido «au» es «kaufen».', e: 'Käufer ya lleva Umlaut y suena oi.' },
      { s: 'Was ist für uns das raro de „eu“?', a: 'que se escribe e+u y suena oi', d: ['que es muy largo', 'que no se pronuncia'], t: 'Lo raro es que se escribe «e+u» y suena «oi».', e: 'Leerlo como en español lo estropea.' },
      { s: '„Freundin“ spricht man ___.', a: 'Froindin', d: ['Freundin con e-u', 'Frandin'], t: '«Freundin» se pronuncia «fróindin».', e: 'eu = oi.' }
    ]
  },

  // ---------- A1.1 L7 ----------
  'aussprache-h': {
    picks: [
      { s: 'Am Wortanfang wird „h“ ___.', a: 'gesprochen', d: ['nicht gesprochen', 'wie ch gesprochen'], t: 'Al principio de palabra, la "h" se pronuncia.', e: 'Haus, Hund, heute: se sopla, no es muda como en español.' },
      { s: 'Nach einem Vokal ist „h“ ___.', a: 'stumm', d: ['hart', 'wie ch'], t: 'Detrás de una vocal, la "h" es muda.', e: 'gehen, Uhr, ihm: no se oye, solo alarga la vocal de delante.' },
      { s: 'In „gehen“ hört man das „h“ ___.', a: 'nicht', d: ['deutlich', 'wie ch'], t: 'En «gehen» la "h" no se oye.', e: 'Suena «geen», con la "e" larga.' },
      { s: 'Das „h“ in „Uhr“ macht den Vokal ___.', a: 'lang', d: ['kurz', 'nasal'], t: 'La "h" de «Uhr» alarga la vocal.', e: 'Por eso se llama Dehnungs-h: h de alargar.' },
      { s: 'Welches Wort hat ein hörbares „h“?', a: 'Hund', d: ['sehen', 'nehmen'], t: '¿Cuál tiene una "h" que se oye?', e: 'Hund: la "h" abre la palabra.' },
      { s: 'Welches „h“ ist stumm?', a: 'das in „ihn“', d: ['das in „hier“', 'das in „hat“'], t: '¿Cuál es muda?', e: 'En «ihn» va detrás de vocal.' },
      { s: 'In „Hotel“ spricht man das „h“ ___.', a: 'mit Luft', d: ['gar nicht', 'wie j'], t: 'En «Hotel» la "h" se pronuncia soplando.', e: 'No es como el español «otel».' },
      { s: '„Ihnen“ beginnt mit ___.', a: 'einem langen i', d: ['einem h-Laut', 'einem ch-Laut'], t: '«Ihnen» empieza con una "i" larga.', e: 'La "h" solo alarga: «inen».' },
      { s: 'Wie viele hörbare „h“ hat „Hochhaus“?', a: 'zwei', d: ['eins', 'drei'], t: '¿Cuántas "h" se oyen en «Hochhaus»?', e: 'La del principio y la de "Haus", porque es palabra compuesta.' },
      { s: '„sehr“ spricht man ___.', a: 'mit langem e', d: ['mit h-Laut', 'mit ch'], t: '«sehr» se pronuncia con "e" larga.', e: 'La "h" no se oye: «ser».' },
      { s: 'Welche zwei Aufgaben hat das „h“ im Deutschen?', a: 'sonar al principio o alargar la vocal', d: ['sólo sonar', 'sólo alargar'], t: 'El «h» o suena al principio de palabra o alarga la vocal.', e: 'Hund frente a Uhr.' },
      { s: 'Wie heißt ese „h“ que no suena?', a: 'Dehnungs-h', d: ['Stumm-h', 'Lang-h'], t: 'Ese «h» mudo se llama «Dehnungs-h».', e: 'h de alargar.' },
      { s: 'Was ist der Fehler típico de un español?', a: 'no pronunciar el h inicial', d: ['pronunciar el h mudo', 'cambiar la vocal'], t: 'El fallo típico es no pronunciar el «h» inicial.', e: 'En español la hache no suena nunca.' },
      { s: 'Wie spricht man das „h“ am Wortanfang?', a: 'con un soplo de aire', d: ['como una j', 'como una g'], t: 'Con un soplo de aire.', e: 'No es nuestra jota: es más suave.' },
      { s: 'Warum ist „Haus“ und „aus“ ein guter Test?', a: 'sólo cambia el h', d: ['cambian las vocales', 'son la misma palabra'], t: 'Porque lo único que cambia es el «h».', e: 'Si no lo pronuncias, dices otra palabra.' },
      { s: 'In „ziehen“ ist das h ___.', a: 'stumm', d: ['hörbar', 'wie ein k'], t: 'En «ziehen» el «h» es mudo.', e: 'Va detrás de vocal.' },
      { s: 'In „Hilfe“ ist das h ___.', a: 'hörbar', d: ['stumm', 'wie ein j'], t: 'En «Hilfe» el «h» se oye.', e: 'Principio de palabra.' },
      { s: 'Welches Wort hat ein stummes h?', a: 'Jahr', d: ['Hand', 'Herz'], t: 'El que lleva «h» muda es «Jahr».', e: 'Alarga la a.' },
      { s: 'Was macht das h in „Zahn“?', a: 'alarga la a', d: ['suena', 'no hace nada'], t: 'Alarga la «a».', e: 'Tsaan.' },
      { s: 'Gibt es ein h mitten im Wort, das suena?', a: 'sí, en palabras compuestas', d: ['no, nunca', 'siempre'], t: 'Sí, en las palabras compuestas.', e: 'Hochhaus: el segundo h sí suena.' }
    ]
  },

  // ---------- A1.1 L8 ----------
  'aussprache-er-ig': {
    picks: [
      { s: 'Am Wortende klingt „-er“ wie ___.', a: 'ein schwaches a', d: ['er mit rollendem r', 'ä'], t: 'Al final de palabra, "-er" suena como una "a" débil.', e: 'Vater suena «fata», Mutter «muta», besser «bessa».' },
      { s: '„Kinder“ endet mit dem Laut ___.', a: 'a', d: ['er', 'r'], t: '«Kinder» acaba en un sonido "a".', e: '«Kinda». El alemán no arrastra la "r" final.' },
      { s: 'Am Wortende klingt „-ig“ wie ___.', a: 'ich', d: ['ig', 'ik'], t: 'Al final de palabra, "-ig" suena como «ich».', e: 'wichtig suena «wichtich», billig «billich».' },
      { s: '„zwanzig“ endet wie ___.', a: 'ich', d: ['ig', 'ick'], t: '«zwanzig» acaba sonando «ich».', e: 'Todos los números en -zig: «tsvantsich».' },
      { s: 'In Süddeutschland und Österreich sagt man „-ig“ oft wie ___.', a: 'ik', d: ['isch', 'i'], t: 'En el sur de Alemania y en Austria, "-ig" suena a menudo «ik».', e: 'Las dos formas se entienden; en Viena oirás «tsvantsik».' },
      { s: 'Welches Wort endet mit dem „a“-Laut?', a: 'Wasser', d: ['Wasso', 'Wasse'], t: '¿Cuál acaba con el sonido "a"?', e: 'Wasser: «wassa».' },
      { s: '„aber“ und „Aba“ klingen ___.', a: 'fast gleich', d: ['ganz anders', 'gleich geschrieben'], t: '«aber» suena casi como «aba».', e: 'La "-er" final se come la r.' },
      { s: 'Ein „r“ VOR einem Vokal wird ___.', a: 'gesprochen', d: ['stumm', 'wie a'], t: 'Una "r" delante de vocal sí se pronuncia.', e: 'rot, Frau, hören: ahí la "r" está y se oye.' },
      { s: 'Welches Wort hat ein hörbares „r“?', a: 'Frau', d: ['Vater', 'Mutter'], t: '¿Cuál tiene una "r" que se oye?', e: 'Frau: la "r" va antes de vocal.' },
      { s: '„lustig“ endet mit ___.', a: 'dem ich-Laut', d: ['dem ach-Laut', 'einem g'], t: '«lustig» acaba con el sonido de «ich».', e: '-ig siempre con la ch suave.' },
      { s: 'Was passiert mit dem „r“ am Wortende?', a: 'se convierte en una a floja', d: ['se pronuncia fuerte', 'es mudo'], t: 'La «r» final se convierte en una «a» floja.', e: 'Vater suena «fáta».' },
      { s: 'Und wenn el „r“ va antes de vocal?', a: 'se pronuncia', d: ['se calla', 'suena como a'], t: 'Delante de vocal sí se pronuncia.', e: 'Frau, Brot, drei.' },
      { s: 'Wie klingt die Endung „-ig“ im Hochdeutschen?', a: 'como -ich', d: ['como -ik', 'como -ig'], t: 'En alemán estándar «-ig» suena como «-ich».', e: 'richtig → «ríchtich».' },
      { s: 'Und en Austria y el sur?', a: 'como -ik', d: ['como -ich', 'no se pronuncia'], t: 'En Austria y el sur suena «-ik».', e: 'Las dos valen; tú oirás la de aquí.' },
      { s: 'Was ist der Fehler típico de un español con la r final?', a: 'hacerla vibrar', d: ['no decirla', 'alargarla'], t: 'El fallo típico es hacerla vibrar.', e: '«Vaterrr» en vez de «fáta».' },
      { s: '„Lehrer“ endet con ___.', a: 'el sonido a', d: ['una r fuerte', 'una e clara'], t: '«Lehrer» acaba con sonido «a».', e: '«Léara».' },
      { s: 'Welches Wort endet con el ich-Laut?', a: 'wichtig', d: ['Kinder', 'Wasser'], t: 'El que acaba en el ich-Laut es «wichtig».', e: 'Los otros dos acaban en «a».' },
      { s: 'Was bleibt vom „r“ in „Uhr“?', a: 'casi nada, alarga la u', d: ['una r clara', 'una e'], t: 'Casi nada: alarga la «u».', e: '«Uuua».' },
      { s: '„richtig“ und „wichtig“ reimen sich ___.', a: 'sí', d: ['no', 'sólo por escrito'], t: 'Sí, riman.', e: 'Las dos acaban en el ich-Laut.' },
      { s: 'Warum se nota tanto esto al hablar?', a: 'porque -er y -ig salen en muchísimas palabras', d: ['porque son sonidos raros', 'porque van acentuados'], t: 'Porque «-er» y «-ig» aparecen en muchísimas palabras.', e: 'Plurales, comparativos, adjetivos.' }
    ]
  },
  // ---------- A1.1 Start: el acento de la palabra ----------
  wortakzent: {
    picks: [
      { s: 'Der Akzent liegt meistens auf der ___ Silbe.', a: 'ersten', d: ['zweiten', 'letzten'], t: 'El acento cae casi siempre en la primera sílaba.', e: 'ARbeiten, LEHrerin, FRAge. Al revés que en español, que tira a la penúltima.' },
      { s: 'Wo liegt der Akzent in „Lehrerin“?', a: 'auf der ersten Silbe', d: ['auf der zweiten Silbe', 'auf der letzten Silbe'], t: '¿Dónde cae el acento en «Lehrerin»?', e: 'En la primera. La terminación -in no se acentúa.' },
      { s: 'Wo liegt der Akzent in „Student“?', a: 'auf der letzten Silbe', d: ['auf der ersten Silbe', 'auf beiden gleich'], t: '¿Dónde cae el acento en «Student»?', e: 'Es una palabra de origen extranjero: esas van al final.' },
      { s: 'Wo liegt der Akzent in „verstehen“?', a: 'auf „-ste-“', d: ['auf „ver-“', 'auf „-hen“'], t: '¿Dónde cae el acento en «verstehen»?', e: 'Los prefijos be-, ver-, er-, ent-, ge- nunca se acentúan.' },
      { s: 'Wo liegt der Akzent in „aufstehen“?', a: 'auf „auf-“', d: ['auf „-ste-“', 'auf „-hen“'], t: '¿Dónde cae el acento en «aufstehen»?', e: 'En los verbos separables el acento va en el prefijo. Así se oye si es separable o no.' },
      { s: 'Welches Wort wird auf der letzten Silbe betont?', a: 'Restaurant', d: ['Wohnung', 'Fenster'], t: '¿Cuál se acentúa en la última sílaba?', e: 'Restaurant, del francés: «restoRANG».' },
      { s: 'Wo liegt der Akzent in „Computer“?', a: 'auf „-pu-“', d: ['auf „Com-“', 'auf „-ter“'], t: '¿Dónde cae el acento en «Computer»?', e: 'Palabra prestada del inglés: mantiene su acento.' },
      { s: 'In Komposita liegt der Akzent auf dem ___ Wort.', a: 'ersten', d: ['zweiten', 'längsten'], t: 'En las palabras compuestas el acento va en la primera parte.', e: 'DEUTSCHkurs, HAUStür: manda la primera palabra.' },
      { s: 'Wo liegt der Akzent in „bezahlen“?', a: 'auf „-zah-“', d: ['auf „be-“', 'auf „-len“'], t: '¿Dónde cae el acento en «bezahlen»?', e: 'be- es prefijo átono: el acento salta a la raíz.' },
      { s: 'Wörter auf „-ei“ betont man ___.', a: 'am Ende', d: ['am Anfang', 'in der Mitte'], t: 'Las palabras acabadas en «-ei» se acentúan al final.', e: 'PolizEI, BäckerEI, TürkEI.' },
      { s: 'Wo liegt der Akzent in „Wohnung“?', a: 'auf „Woh-“', d: ['auf „-nung“', 'auf beiden'], t: 'En «Wohnung» el acento va en «Woh-».', e: 'Palabra alemana normal: primera sílaba.' },
      { s: 'Wo liegt der Akzent in „Familie“?', a: 'auf „-mi-“', d: ['auf „Fa-“', 'auf „-lie“'], t: 'En «Familie» el acento va en «-mi-».', e: 'Palabra de origen latino: se sale de la regla.' },
      { s: 'Wo liegt der Akzent in „einkaufen“?', a: 'auf „ein-“', d: ['auf „-kau-“', 'auf „-fen“'], t: 'En «einkaufen» el acento va en «ein-».', e: 'En los separables, en el prefijo.' },
      { s: 'Wo liegt der Akzent in „verkaufen“?', a: 'auf „-kau-“', d: ['auf „ver-“', 'auf „-fen“'], t: 'En «verkaufen» el acento va en «-kau-».', e: 'ver- es inseparable y nunca lleva acento.' },
      { s: 'Welches Wort wird NICHT auf der ersten Silbe betont?', a: 'Kollege', d: ['Arbeit', 'Zimmer'], t: '«Kollege» no se acentúa en la primera sílaba.', e: 'Kol-LE-ge.' },
      { s: 'Wo liegt der Akzent in „Hausaufgabe“?', a: 'auf „Haus-“', d: ['auf „-auf-“', 'auf „-ga-“'], t: 'En «Hausaufgabe» el acento va en «Haus-».', e: 'En los compuestos, la primera palabra.' },
      { s: 'Wörter auf „-tion“ betont man ___.', a: 'am Ende', d: ['am Anfang', 'in der Mitte'], t: 'Las palabras en «-tion» se acentúan al final.', e: 'Sta-ti-ON, Lek-ti-ON.' },
      { s: 'Wo liegt der Akzent in „Telefon“?', a: 'auf „-fon“', d: ['auf „Te-“', 'auf „-le-“'], t: 'En «Telefon» el acento va en «-fon».', e: 'Extranjerismo: al final.' },
      { s: 'Was passiert mit der betonten Silbe?', a: 'sie klingt länger und lauter', d: ['sie klingt kürzer', 'sie klingt gleich'], t: 'La sílaba tónica suena más larga y más fuerte.', e: 'En alemán la diferencia se nota mucho.' },
      { s: 'Wo liegt der Akzent in „Entschuldigung“?', a: 'auf „-schul-“', d: ['auf „Ent-“', 'auf „-gung“'], t: 'En «Entschuldigung» el acento va en «-schul-».', e: 'Ent- es prefijo inseparable.' }
    ]
  },

  // ---------- A1.1 Start: vocales largas y cortas ----------
  'vokal-laenge': {
    picks: [
      { s: 'Ein doppelter Vokal ist immer ___.', a: 'lang', d: ['kurz', 'stumm'], t: 'Una vocal doble es siempre larga.', e: 'Boot, Tee, Saal: se alarga, no se dicen dos vocales.' },
      { s: 'Zwei Konsonanten nach dem Vokal: der Vokal ist ___.', a: 'kurz', d: ['lang', 'stumm'], t: 'Con dos consonantes detrás, la vocal es corta.', e: 'kommen, Mutter, Stadt. Es la pista más fiable al leer.' },
      { s: 'In „Name“ ist das „a“ ___.', a: 'lang', d: ['kurz', 'stumm'], t: 'En «Name» la "a" es larga.', e: 'Una sola consonante detrás: vocal larga.' },
      { s: 'In „Mann“ ist das „a“ ___.', a: 'kurz', d: ['lang', 'stumm'], t: 'En «Mann» la "a" es corta.', e: 'Doble "n": vocal corta y seca.' },
      { s: 'Welches Wort hat einen kurzen Vokal?', a: 'offen', d: ['Ofen', 'Ohr'], t: '¿Cuál tiene la vocal corta?', e: 'offen, con dos efes. Ofen (el horno) es larga.' },
      { s: '„Stadt“ und „Staat“: welches ist lang?', a: 'Staat', d: ['Stadt', 'beide'], t: '«Stadt» y «Staat»: ¿cuál es larga?', e: 'Staat (el Estado) lleva vocal doble; Stadt (la ciudad) es corta.' },
      { s: '„ihn“ und „in“: welches ist lang?', a: 'ihn', d: ['in', 'beide'], t: '«ihn» e «in»: ¿cuál es larga?', e: 'La "h" no se oye, solo alarga la "i".' },
      { s: 'Ein „h“ nach dem Vokal macht ihn ___.', a: 'lang', d: ['kurz', 'stimmlos'], t: 'Una "h" detrás de la vocal la hace larga.', e: 'Uhr, gehen, Jahr: la h es muda y solo estira.' },
      { s: 'Die Länge kann die Bedeutung ___.', a: 'ändern', d: ['nie ändern', 'verstärken'], t: 'La duración puede cambiar el significado.', e: 'Stadt / Staat, Ofen / offen: es una diferencia de verdad, no un detalle.' },
      { s: 'In „Bier“ ist das „ie“ ___.', a: 'lang', d: ['kurz', 'zwei Laute'], t: 'En «Bier» la «ie» es larga.', e: 'Es una "i" larga, no un diptongo: «bir».' },
      { s: 'In „Miete“ ist das „ie“ ___.', a: 'lang', d: ['kurz', 'stumm'], t: 'En «Miete» la «ie» es larga.', e: 'ie siempre es i larga.' },
      { s: 'In „Mitte“ ist das „i“ ___.', a: 'kurz', d: ['lang', 'stumm'], t: 'En «Mitte» la «i» es corta.', e: 'Doble consonante detrás: corta.' },
      { s: '„Ofen“ und „offen“: welches ist kurz?', a: 'offen', d: ['Ofen', 'beide'], t: '«offen» es la corta.', e: 'La doble f acorta la o.' },
      { s: 'Welches Wort hat einen langen Vokal?', a: 'Boot', d: ['Bett', 'Bank'], t: '«Boot» tiene vocal larga.', e: 'Vocal doble: larga.' },
      { s: 'In „Bahn“ ist das „a“ ___.', a: 'lang', d: ['kurz', 'stumm'], t: 'En «Bahn» la «a» es larga.', e: 'La h detrás la alarga y no se pronuncia.' },
      { s: '„Wahl“ und „Wall“: welches ist lang?', a: 'Wahl', d: ['Wall', 'beide'], t: '«Wahl» es la larga.', e: 'Con h larga, con doble l corta.' },
      { s: 'Ein Vokal am Silbenende ist meistens ___.', a: 'lang', d: ['kurz', 'stumm'], t: 'Una vocal al final de sílaba suele ser larga.', e: 'ge-hen, le-sen, ma-len.' },
      { s: 'In „Zimmer“ ist das „i“ ___.', a: 'kurz', d: ['lang', 'stumm'], t: 'En «Zimmer» la «i» es corta.', e: 'Doble m.' },
      { s: 'Warum ist die Länge wichtig?', a: 'sie kann das Wort ändern', d: ['sie klingt nur schöner', 'sie ändert nichts'], t: 'Importa porque puede cambiar la palabra.', e: 'Stadt no es Staat.' },
      { s: 'In „Straße“ ist das „a“ ___.', a: 'lang', d: ['kurz', 'stumm'], t: 'En «Straße» la «a» es larga.', e: 'La ß va detrás de vocal larga.' }
    ]
  },

  // ---------- A1.1 Start: b, d, g al final ----------
  'auslaut-b-d-g': {
    picks: [
      { s: 'Am Wortende klingt „d“ wie ___.', a: 't', d: ['d', 'ts'], t: 'Al final de palabra, la "d" suena como "t".', e: 'Hund se dice «hunt», Kind «kint».' },
      { s: 'Am Wortende klingt „g“ wie ___.', a: 'k', d: ['g', 'ch'], t: 'Al final de palabra, la "g" suena como "k".', e: 'Tag se dice «tak», Berg «berk».' },
      { s: 'Am Wortende klingt „b“ wie ___.', a: 'p', d: ['b', 'f'], t: 'Al final de palabra, la "b" suena como "p".', e: 'halb se dice «halp», Dieb «dip».' },
      { s: 'Wie spricht man „Hund“?', a: 'hunt', d: ['hund', 'hunk'], t: '¿Cómo se pronuncia «Hund»?', e: 'Se escribe con d, se dice con t.' },
      { s: 'Und wie spricht man „Hunde“?', a: 'hun-de', d: ['hun-te', 'hunt'], t: '¿Y cómo se pronuncia «Hunde»?', e: 'En plural la "d" vuelve a sonar porque ya no está al final.' },
      { s: 'Du hörst «tak». Wie schreibt man das?', a: 'Tag', d: ['Tak', 'Tack'], t: 'Oyes «tak». ¿Cómo se escribe?', e: 'Con g. Se comprueba con el plural: die Tage, ahí se oye.' },
      { s: 'Welcher Plural verrät den Buchstaben?', a: 'Kinder', d: ['Kind', 'Kinds'], t: '¿Qué plural delata la letra?', e: 'die Kinder suena con "d" clara: por eso el singular se escribe Kind.' },
      { s: 'In „Freundin“ klingt das „d“ wie ___.', a: 'd', d: ['t', 'p'], t: 'En «Freundin» la "d" suena "d".', e: 'Delante de vocal se salva; en "Freund" a secas, no.' },
      { s: 'Wie spricht man „gelb“?', a: 'gelp', d: ['gelb', 'gelf'], t: '¿Cómo se pronuncia «gelb»?', e: 'Con p. Pero "gelbe Blumen" recupera la b.' },
      { s: 'Passiert das auch am Silbenende?', a: 'ja', d: ['nein', 'nur bei d'], t: '¿Pasa también al final de sílaba?', e: 'Sí: en "Abfahrt" la b suena «p» porque cierra la sílaba.' },
      { s: 'Wie spricht man „Kind“?', a: 'kint', d: ['kind', 'kin'], t: '«Kind» se pronuncia «kint».', e: 'd al final suena t.' },
      { s: 'Und wie spricht man „Kinder“?', a: 'kin-der', d: ['kin-ter', 'kint-er'], t: '«Kinder» se pronuncia «kin-der».', e: 'Ya no está al final: vuelve la d.' },
      { s: 'Wie spricht man „Berg“?', a: 'berk', d: ['berg', 'berch'], t: '«Berg» se pronuncia «berk».', e: 'g al final suena k.' },
      { s: 'Wie spricht man „halb“?', a: 'halp', d: ['halb', 'half'], t: '«halb» se pronuncia «halp».', e: 'b al final suena p.' },
      { s: 'Du hörst «lant». Wie schreibt man das?', a: 'Land', d: ['Lant', 'Lannt'], t: 'Se escribe «Land».', e: 'El plural «Länder» delata la d.' },
      { s: 'Welches Wort verrät den letzten Buchstaben?', a: 'Tage', d: ['Tag', 'tags'], t: '«Tage» delata la letra final.', e: 'Al añadir la vocal, la g vuelve a sonar g.' },
      { s: 'In „Abend“ klingt das „b“ wie ___.', a: 'b', d: ['p', 'f'], t: 'En «Abend» la «b» suena b.', e: 'Está en medio, no al final.' },
      { s: 'Und das „d“ in „Abend“?', a: 'wie t', d: ['wie d', 'stumm'], t: 'La «d» de «Abend» suena t.', e: 'Esa sí está al final.' },
      { s: 'Wie spricht man „und“?', a: 'unt', d: ['und', 'un'], t: '«und» se pronuncia «unt».', e: 'La palabra más repetida del alemán.' },
      { s: 'Warum ist das für uns wichtig?', a: 'sonst klingt es spanisch', d: ['es ist nur Theorie', 'es ändert die Schrift'], t: 'Importa porque si no suena a español.', e: 'Nosotros decimos «Hund» con d y se nota.' }
    ]
  },

  // ---------- A1.1 Start: la melodía de la frase ----------
  satzmelodie: {
    picks: [
      { s: 'Die Aussage endet ___.', a: 'fallend', d: ['steigend', 'gleich'], t: 'La afirmación acaba bajando.', e: 'Ich wohne in Wien. ↘ La voz cae al final.' },
      { s: 'Die Ja-/Nein-Frage endet ___.', a: 'steigend', d: ['fallend', 'gleich'], t: 'La pregunta de sí o no acaba subiendo.', e: 'Wohnst du in Wien? ↗ Es lo único que la distingue al oído.' },
      { s: 'Die W-Frage endet ___.', a: 'fallend', d: ['steigend', 'gleich'], t: 'La pregunta con W acaba bajando.', e: 'Woher kommst du? ↘ Sorprende, porque en español subiría.' },
      { s: '„Wie heißen Sie?“ — die Stimme geht ___.', a: 'runter', d: ['rauf', 'gar nicht'], t: '«¿Cómo se llama usted?» — la voz baja.', e: 'Lleva W-Wort: melodía descendente.' },
      { s: '„Haben Sie Zeit?“ — die Stimme geht ___.', a: 'rauf', d: ['runter', 'gar nicht'], t: '«¿Tiene tiempo?» — la voz sube.', e: 'Pregunta cerrada: sube.' },
      { s: 'Woran hört man eine Ja-/Nein-Frage?', a: 'an der Melodie', d: ['am Fragezeichen', 'am Akzent'], t: '¿Por dónde se reconoce una pregunta de sí o no?', e: 'Al hablar no hay signo de interrogación: lo lleva la melodía.' },
      { s: 'Ein freundliches „Danke schön!“ endet ___.', a: 'steigend', d: ['fallend', 'monoton'], t: 'Un «Danke schön!» amable acaba subiendo.', e: 'La melodía plana suena seca; subir un poco suena amable.' },
      { s: 'Vor einem Komma geht die Stimme ___.', a: 'leicht rauf', d: ['runter', 'weg'], t: 'Antes de una coma la voz sube un poco.', e: 'Señala que la frase sigue.' },
      { s: 'In „Und du?“ geht die Stimme ___.', a: 'rauf', d: ['runter', 'gleich'], t: 'En «¿Y tú?» la voz sube.', e: 'Devuelve la pregunta: melodía ascendente.' },
      { s: 'Deutsch klingt für spanische Ohren oft ___.', a: 'fallender', d: ['steigender', 'gleich'], t: 'Para un oído español el alemán suena más descendente.', e: 'Las preguntas con W caen, y eso hace que suene más tajante de lo que es.' },
      { s: '„Woher kommst du?“ — die Stimme geht ___.', a: 'runter', d: ['rauf', 'gleich'], t: 'En «Woher kommst du?» la voz baja.', e: 'Pregunta con W: melodía descendente.' },
      { s: '„Kommst du aus Spanien?“ — die Stimme geht ___.', a: 'rauf', d: ['runter', 'gleich'], t: 'En «Kommst du aus Spanien?» la voz sube.', e: 'Pregunta de sí/no: ascendente.' },
      { s: 'Ein Befehl wie „Komm her!“ endet ___.', a: 'fallend', d: ['steigend', 'gleich'], t: 'Una orden como «Komm her!» acaba bajando.', e: 'Imperativo: siempre hacia abajo.' },
      { s: 'Wie klingt eine Aufzählung vor dem letzten Wort?', a: 'steigend', d: ['fallend', 'gleich'], t: 'En una enumeración, antes de la última palabra sube.', e: 'Brot, Käse, Milch — solo la última baja.' },
      { s: 'Woran merkt man, dass jemand noch weiterredet?', a: 'die Stimme bleibt oben', d: ['die Stimme fällt', 'an der Pause'], t: 'Se nota porque la voz se queda arriba.', e: 'Si baja, ha terminado.' },
      { s: '„Ach so!“ als Überraschung endet ___.', a: 'steigend', d: ['fallend', 'gleich'], t: '«Ach so!» de sorpresa acaba subiendo.', e: 'La misma frase baja si solo tomas nota.' },
      { s: 'Eine höfliche Bitte klingt ___.', a: 'eher steigend', d: ['hart fallend', 'ganz gleich'], t: 'Una petición cortés suena más bien ascendente.', e: 'Bajar mucho suena a orden.' },
      { s: 'Welcher Satz endet fallend?', a: 'Ich wohne in Wien.', d: ['Wohnst du in Wien?', 'Und du?'], t: '«Ich wohne in Wien.» acaba bajando.', e: 'Afirmación.' },
      { s: 'Was ändert die Melodie an „Du kommst mit.“?', a: 'sie macht daraus eine Frage', d: ['sie ändert nichts', 'sie ändert das Verb'], t: 'La melodía lo convierte en pregunta.', e: 'Sin cambiar ni una palabra.' },
      { s: 'Was ist für spanische Ohren ungewohnt?', a: 'das starke Fallen am Ende', d: ['die Pausen', 'die Lautstärke'], t: 'Lo raro para un oído español es lo mucho que baja al final.', e: 'En español la caída es más suave.' }
    ]
  },
  'aussprache-e-am-wortende': {
    picks: [
      { s: 'In „Name“ klingt das -e am Ende ___.', a: 'schwach', d: ['wie ein langes e', 'gar nicht'], t: 'En «Name» la -e final suena floja.', e: 'No es la e española: es un sonido apagado.' },
      { s: '„haben“ spricht man ungefähr ___.', a: 'habn', d: ['ha-ben', 'habén'], t: '«haben» se pronuncia más o menos «habn».', e: 'En -en final la e casi desaparece.' },
      { s: 'Das Wort „bitte“ hat am Ende ___.', a: 'ein schwaches e', d: ['ein langes e', 'kein e'], t: '«bitte» acaba en una e floja.', e: 'Se escribe pero apenas se oye.' },
      { s: 'In „Straße“ ist die letzte Silbe ___.', a: 'unbetont', d: ['betont', 'lang'], t: 'En «Straße» la última sílaba es átona.', e: 'El acento está en la primera sílaba.' },
      { s: '„Schreiben Sie“ klingt am Ende wie ___.', a: 'schreibn', d: ['schreibén', 'schrei-ben'], t: '«Schreiben» suena como «schreibn».', e: 'La -en final se come la e.' },
      { s: 'Die Endung -e ist in „Frage“ ___.', a: 'kurz und schwach', d: ['lang und klar', 'gar nicht da'], t: 'En «Frage» la -e es corta y floja.', e: 'Es el sonido más flojo del alemán.' },
      { s: 'In „Adresse“ liegt der Akzent auf ___.', a: 'der zweiten Silbe', d: ['der ersten Silbe', 'der letzten Silbe'], t: 'En «Adresse» el acento va en la segunda sílaba.', e: 'Es palabra de fuera: no sigue la regla alemana.' },
      { s: 'In „wohnen“ hört man ___ Silben.', a: 'zwei', d: ['drei', 'eine'], t: '¿Cuántas sílabas se oyen en «wohnen»? Dos.', e: 'woh-nen, con la segunda muy floja.' },
      { s: '„Entschuldigung“ betont man auf ___.', a: 'schul', d: ['Ent', 'digung'], t: '«Entschuldigung» se acentúa en «schul».', e: 'El prefijo ent- nunca lleva el acento.' },
      { s: 'Das -e in „eine“ spricht man ___.', a: 'leise und kurz', d: ['laut und lang', 'wie ein i'], t: 'La -e de «eine» se dice floja y corta.', e: 'Igual que en Name, Frage y bitte.' },
      { s: 'Wie heißt das schwache -e am Wortende?', a: 'Schwa', d: ['Umlaut', 'Diphthong'], t: 'La «e» débil del final se llama «Schwa».', e: 'Es el sonido más frecuente del alemán hablado.' },
      { s: 'Was passiert mit dem -e in der Endung -en?', a: 'es verschwindet fast', d: ['es wird betont', 'es klingt wie a'], t: 'En la terminación «-en» la e casi desaparece.', e: 'haben → habn, gehen → gehn.' },
      { s: 'Kann das schwache -e betont sein?', a: 'nie', d: ['manchmal', 'immer'], t: 'La «e» débil nunca lleva acento.', e: 'Si estuviera acentuada, ya no sería débil.' },
      { s: 'Was unterscheidet „Tag“ von „Tage“ im Klang?', a: 'die zweite Silbe mit schwachem e', d: ['der Akzent', 'das a'], t: 'Lo que cambia es la segunda sílaba con la e débil.', e: 'Y de paso la g vuelve a sonar g.' },
      { s: 'Warum hört man „Straße“ als zwei Silben?', a: 'das -e bildet eine eigene Silbe', d: ['es ist ein langes a', 'es sind zwei Wörter'], t: 'Porque la «-e» forma sílaba propia.', e: 'Stra-ße.' },
      { s: 'In welchem Wort ist das e am Ende NICHT schwach?', a: 'Kaffee', d: ['Lampe', 'Tasche'], t: 'En «Kaffee» la e final no es débil.', e: 'Es una e larga y acentuada.' },
      { s: 'Wie klingt die Endung -er am Wortende?', a: 'fast wie ein a', d: ['wie er', 'wie ä'], t: 'La terminación «-er» al final suena casi como una a.', e: 'Vater, Mutter, Lehrer.' },
      { s: 'Was ist der Unterschied zwischen -e und -er am Ende?', a: '-e suena e débil, -er casi a', d: ['suenan igual', '-er no se pronuncia'], t: '«-e» suena e débil y «-er» casi una a.', e: 'die Lampe frente a der Lehrer.' },
      { s: 'Warum ist dieses sonido difícil para nosotros?', a: 'en español no hay vocales débiles', d: ['no existe la e', 'es muy largo'], t: 'Porque en español todas las vocales suenan claras.', e: 'Nosotros decimos «lampe» con una e entera.' },
      { s: 'In „gefallen“ ist das erste e ___.', a: 'schwach', d: ['betont', 'lang'], t: 'En «gefallen» la primera e es débil.', e: 'El prefijo ge- nunca lleva acento.' }
    ]
  },
  'aussprache-ng-nk': {
    picks: [
      { s: 'In „Wohnung“ hört man am Ende ___.', a: 'kein g', d: ['ein klares g', 'ein k'], t: 'En «Wohnung» no se oye ninguna g al final.', e: 'ng es un solo sonido nasal.' },
      { s: 'In „danke“ hört man das k ___.', a: 'deutlich', d: ['gar nicht', 'wie ein g'], t: 'En «danke» la k se oye claramente.', e: 'En nk la k sí suena.' },
      { s: '„Frühling“ endet auf ___ Laut.', a: 'einem nasalen', d: ['einem harten g-', 'einem k-'], t: '«Frühling» acaba en un sonido nasal.', e: 'El grupo ng no se parte.' },
      { s: 'Der Buchstabengruppe „ng“ entspricht ___ Laut.', a: 'einen', d: ['zwei', 'drei'], t: '«ng» tiene un solo sonido.', e: 'Es nasal, como la n de «cinco» en español.' },
      { s: 'In „trinken“ spricht man ___.', a: 'n und k', d: ['nur n', 'nur k'], t: 'En «trinken» se pronuncian n y k.', e: 'nk sí lleva las dos.' },
      { s: '„Zeitung“ spricht man am Ende wie ___.', a: 'ung ohne g', d: ['un-g', 'unk'], t: '«Zeitung» acaba en «ung» sin g final.', e: 'La g no se articula aparte.' },
      { s: 'In „Bank“ ist der letzte Laut ___.', a: 'k', d: ['g', 'n'], t: 'En «Bank» el último sonido es una k.', e: 'nk termina en k.' },
      { s: 'Die Endung -ung trägt ___.', a: 'nie den Akzent', d: ['immer den Akzent', 'manchmal den Akzent'], t: 'La terminación -ung nunca lleva el acento.', e: 'Es una terminación átona.' },
      { s: '„singen“ und „sinken“ klingen ___.', a: 'verschieden', d: ['gleich', 'fast gleich'], t: '«singen» y «sinken» suenan distinto.', e: 'Uno acaba en nasal y el otro en k.' },
      { s: 'In „Anfang“ hört man am Ende ___.', a: 'kein g', d: ['ein g', 'ein k'], t: 'En «Anfang» no se oye g al final.', e: 'Otra vez el grupo ng.' },
      { s: 'Wie viele Laute sind „ng“?', a: 'uno solo', d: ['dos', 'tres'], t: '«ng» es un solo sonido.', e: 'Como la n de «tengo» en español.' },
      { s: 'Hört man das g in „ng“?', a: 'no', d: ['sí', 'sólo al final'], t: 'El «g» de «ng» no se oye.', e: 'Wohnung, no «Wohnun-g».' },
      { s: 'Und das k in „nk“?', a: 'sí se oye', d: ['no se oye', 'suena como g'], t: 'El «k» de «nk» sí se oye.', e: 'danke, Bank, trinken.' },
      { s: 'Wie heißt este sonido nasal?', a: 'velar', d: ['dental', 'labial'], t: 'Es una nasal velar.', e: 'Se hace al fondo de la boca.' },
      { s: 'Was ist der Unterschied zwischen „singen“ und „sinken“?', a: 'en sinken se oye la k', d: ['ninguno', 'el acento'], t: 'En «sinken» se oye la «k».', e: 'Y son dos verbos distintos.' },
      { s: 'Wo liegt der Akzent bei Wörtern auf -ung?', a: 'nunca en la terminación', d: ['siempre en -ung', 'en la última sílaba'], t: 'El acento nunca cae en «-ung».', e: 'WOHnung, ZEItung.' },
      { s: 'Welches Wort endet mit el sonido ng?', a: 'Ring', d: ['Rind', 'rings'], t: 'El que acaba en el sonido «ng» es «Ring».', e: 'Sin g final audible.' },
      { s: 'Was machen los españoles aquí mal?', a: 'pronunciar la g del final', d: ['no pronunciar la n', 'alargar la vocal'], t: 'Pronunciar la «g» del final.', e: 'Decimos «tsáitung» con g y suena raro.' },
      { s: '„Angst“ spricht man mit ___.', a: 'ng + st', d: ['n + g + st', 'nk + st'], t: '«Angst» se pronuncia con «ng» más «st».', e: 'La g no suena suelta.' },
      { s: '„Onkel“ spricht man mit ___.', a: 'n + k', d: ['ng', 'n sola'], t: '«Onkel» se pronuncia con «n» y «k».', e: 'nk siempre deja oír la k.' }
    ]
  },
  'aussprache-tion-ung': {
    picks: [
      { s: 'Die Endung -tion spricht man ___.', a: 'tsion', d: ['schion', 'tion wie im Spanischen'], t: 'La terminación -tion se pronuncia «tsión».', e: 'La t suena como ts.' },
      { s: 'Bei „Information“ liegt der Akzent auf ___.', a: 'tion', d: ['In', 'forma'], t: 'En «Information» el acento va en «tion».', e: '-tion siempre lleva el acento.' },
      { s: 'Die Endung -ung trägt den Akzent ___.', a: 'nie', d: ['immer', 'manchmal'], t: 'La terminación -ung nunca lleva el acento.', e: 'Es átona.' },
      { s: '„Anmeldung“ betont man auf ___.', a: 'An', d: ['mel', 'dung'], t: '«Anmeldung» se acentúa en «An».', e: 'El prefijo an- sí lleva el acento.' },
      { s: '„Situation“ hat den Akzent auf ___.', a: 'tion', d: ['Si', 'tua'], t: '«Situation» se acentúa en «tion».', e: 'Otra palabra en -tion.' },
      { s: 'Das -ung in „Bestätigung“ klingt ___.', a: 'schwach', d: ['betont', 'lang'], t: 'La «-ung» de «Bestätigung» suena floja.', e: 'Terminación átona.' },
      { s: 'Wörter auf -tion sind fast immer ___.', a: 'Fremdwörter', d: ['deutsche Wörter', 'Verben'], t: 'Las palabras en -tion son casi siempre extranjerismos.', e: 'Por eso llevan el acento al final.' },
      { s: '„Wohnung“ und „Meinung“ enden beide auf ___.', a: '-ung', d: ['-tion', '-ion'], t: '«Wohnung» y «Meinung» acaban las dos en «-ung».', e: 'Terminación alemana, átona.' },
      { s: 'Alle Wörter auf -ung sind ___.', a: 'feminin', d: ['maskulin', 'neutral'], t: 'Todas las palabras en «-ung» son femeninas.', e: 'die Wohnung, die Anmeldung, die Meinung.' },
      { s: 'Wörter auf -tion haben den Artikel ___.', a: 'die', d: ['der', 'das'], t: 'Las palabras en «-tion» llevan «die».', e: 'die Information, die Situation.' },
      { s: '„Station“ betont man auf ___.', a: 'tion', d: ['Sta', 'ti'], t: '«Station» se acentúa en «tion».', e: 'En -tion el acento va siempre al final.' },
      { s: 'Die Endung -ung bildet aus einem Verb ein ___.', a: 'Nomen', d: ['Verb', 'Adjektiv'], t: 'La terminación «-ung» convierte un verbo en un sustantivo.', e: 'wohnen pasa a die Wohnung.' },
      { s: 'Wie spricht man das „t“ in „Portion“?', a: 'wie ts', d: ['wie t', 'wie sch'], t: '¿Cómo se pronuncia la "t" de «Portion»?', e: 'La t de -tion suena ts.' },
      { s: 'Der Plural von „die Wohnung“ ist ___.', a: 'die Wohnungen', d: ['die Wohnunge', 'die Wohnungs'], t: 'El plural de «die Wohnung» es «die Wohnungen».', e: 'Las palabras en -ung hacen el plural en -en.' },
      { s: '„Rechnung“ kommt von ___.', a: 'rechnen', d: ['Rechner', 'recht'], t: '«Rechnung» viene de «rechnen».', e: 'Verbo más -ung.' },
      { s: 'In „Zeitung“ liegt der Akzent auf ___.', a: 'Zei', d: ['tung', 'ung'], t: 'En «Zeitung» el acento va en «Zei».', e: 'La raíz lleva el acento; -ung es átona.' },
      { s: '„Lektion“ hat den Artikel ___.', a: 'die', d: ['der', 'das'], t: '«Lektion» lleva «die».', e: 'Todas las palabras en -tion son femeninas.' },
      { s: 'Das „ti“ in „Nation“ klingt ___.', a: 'tsi', d: ['ti', 'schi'], t: 'El «ti» de «Nation» suena «tsi».', e: 'Igual que en Information.' },
      { s: '„Übung“ betont man auf ___.', a: 'Ü', d: ['bung', 'ung'], t: '«Übung» se acentúa en la «Ü».', e: 'La terminación -ung nunca lleva acento.' },
      { s: 'Wie viele Silben hat „Information“?', a: 'vier', d: ['drei', 'fünf'], t: '¿Cuántas sílabas tiene «Information»?', e: 'In-for-ma-tion, y el acento en la última.' }
    ]
  },
  'aussprache-pf-kn-ps': {
    picks: [
      { s: 'In „Pflaster“ spricht man ___.', a: 'p und f', d: ['nur f', 'nur p'], t: 'En «Pflaster» se pronuncian la p y la f.', e: 'pf es un solo golpe pero con las dos.' },
      { s: 'In „Knie“ hört man das k ___.', a: 'deutlich', d: ['gar nicht', 'wie ein g'], t: 'En «Knie» la k se oye claramente.', e: 'No es como en inglés, donde es muda.' },
      { s: '„Psychologe“ beginnt mit ___.', a: 'ps', d: ['s', 'p'], t: '«Psychologe» empieza por «ps».', e: 'Las dos letras suenan.' },
      { s: 'In „Apfel“ ist das pf ___.', a: 'ein Laut mit p und f', d: ['nur ein f', 'nur ein p'], t: 'En «Apfel» el «pf» es un sonido con p y f.', e: 'Muy típico del alemán.' },
      { s: '„Knoblauch“ spricht man mit ___ am Anfang.', a: 'k', d: ['n', 'g'], t: '«Knoblauch» empieza con k.', e: 'kn con las dos letras.' },
      { s: 'Das k in „Knochen“ ist ___.', a: 'hörbar', d: ['stumm', 'ein g'], t: 'La k de «Knochen» se oye.', e: 'En alemán nunca es muda.' },
      { s: 'In „Kopfschmerzen“ steckt der Laut ___.', a: 'pf', d: ['f', 'p'], t: 'En «Kopfschmerzen» está el sonido «pf».', e: 'Kopf acaba en pf.' },
      { s: '„Pflege“ beginnt wie ___.', a: 'Pflaster', d: ['Flasche', 'Lehrer'], t: '«Pflege» empieza como «Pflaster».', e: 'Las dos con pf.' },
      { s: 'Bei kn sagt man ___ zuerst.', a: 'das k', d: ['das n', 'gar nichts'], t: 'En «kn» se dice primero la k.', e: 'Y enseguida la n.' },
      { s: 'Wörter mit ps am Anfang sind meistens ___.', a: 'Fremdwörter', d: ['Verben', 'Adjektive'], t: 'Las palabras que empiezan por «ps» suelen ser extranjerismos.', e: 'Psychologe, Psychiater.' },
      { s: 'In „Pfanne“ hört man ___.', a: 'p und f', d: ['nur f', 'nur p'], t: 'En «Pfanne» se oyen la p y la f.', e: 'pf son los dos sonidos seguidos, muy pegados.' },
      { s: 'Das k in „Knopf“ ___.', a: 'spricht man', d: ['spricht man nicht', 'klingt wie g'], t: 'La k de «Knopf» sí se pronuncia.', e: 'En alemán kn se dice entero, no como en inglés.' },
      { s: '„Psychologie“ kommt aus dem ___.', a: 'Griechischen', d: ['Lateinischen', 'Englischen'], t: '«Psychologie» viene del griego.', e: 'Por eso conserva la escritura ps.' },
      { s: 'In „Knie“ ist der erste Laut ___.', a: 'k', d: ['n', 'ni'], t: 'En «Knie» el primer sonido es la k.', e: 'Se pronuncia k-nie, con la k bien clara.' },
      { s: 'Wie viele Laute hat „pf“?', a: 'zwei', d: ['einen', 'drei'], t: '¿Cuántos sonidos tiene «pf»?', e: 'Dos, muy pegados: p y luego f.' },
      { s: 'In „Kopf“ steht das pf ___.', a: 'am Ende', d: ['am Anfang', 'in der Mitte'], t: 'En «Kopf» el pf va al final.', e: 'También al final se pronuncia entero.' },
      { s: '„Pflanze“ und „Pflaster“ beginnen beide mit ___.', a: 'pf', d: ['f', 'p'], t: '«Pflanze» y «Pflaster» empiezan las dos con «pf».', e: 'Mismo grupo de sonidos al principio.' },
      { s: 'Das p in „Psychologe“ ___.', a: 'spricht man mit', d: ['lässt man weg', 'klingt wie b'], t: 'La p de «Psychologe» se pronuncia.', e: 'En alemán sí, a diferencia del inglés.' },
      { s: 'Welches Wort hat KEIN pf?', a: 'Kaffee', d: ['Apfel', 'Kopf'], t: '¿Cuál no tiene «pf»?', e: 'Kaffee lleva ff, no pf.' },
      { s: '„Knochen“ und „Knoblauch“ beginnen mit ___.', a: 'kn', d: ['n', 'k allein'], t: '«Knochen» y «Knoblauch» empiezan con «kn».', e: 'Los dos sonidos se oyen, uno detrás de otro.' }
    ]
  },
  'aussprache-fremdwoerter-betonung': {
    picks: [
      { s: '„Hotel“ betont man auf ___.', a: 'tel', d: ['Ho', 'beiden Silben'], t: '«Hotel» se acentúa en «tel».', e: 'Los extranjerismos no siguen la regla alemana.' },
      { s: '„Computer“ hat den Akzent auf ___.', a: 'pu', d: ['Com', 'ter'], t: '«Computer» se acentúa en «pu».', e: 'Acento en la sílaba del medio.' },
      { s: 'Deutsche Wörter betont man meistens auf ___.', a: 'der ersten Silbe', d: ['der letzten Silbe', 'der zweiten Silbe'], t: 'Las palabras alemanas se acentúan casi siempre en la primera sílaba.', e: 'Por eso los extranjerismos suenan raros.' },
      { s: '„Restaurant“ betont man auf ___.', a: 'rant', d: ['Res', 'tau'], t: '«Restaurant» se acentúa en «rant».', e: 'Acento al final, como en francés.' },
      { s: '„Musik“ hat den Akzent auf ___.', a: 'sik', d: ['Mu', 'beiden'], t: '«Musik» se acentúa en «sik».', e: 'No en la primera sílaba.' },
      { s: '„Apparat“ betont man auf ___.', a: 'rat', d: ['Ap', 'pa'], t: '«Apparat» se acentúa en «rat».', e: 'Última sílaba.' },
      { s: '„Kaffee“ betont man in Österreich auf ___.', a: 'fee', d: ['Kaf', 'beiden'], t: 'En Austria «Kaffee» se acentúa en «fee».', e: 'En Alemania se oye también Káffee.' },
      { s: '„Telefon“ hat den Akzent auf ___.', a: 'fon', d: ['Te', 'le'], t: '«Telefon» se acentúa en «fon».', e: 'Al final.' },
      { s: 'Bei „Universität“ liegt der Akzent auf ___.', a: 'tät', d: ['Uni', 'ver'], t: 'En «Universität» el acento va en «tät».', e: 'Las palabras en -tät se acentúan al final.' },
      { s: 'Fremdwörter lernt man am besten ___.', a: 'mit dem Akzent', d: ['ohne Akzent', 'nur geschrieben'], t: 'Los extranjerismos se aprenden mejor con su acento.', e: 'Cambiarlo después cuesta mucho.' },
      { s: '„Student“ betont man auf ___.', a: 'dent', d: ['Stu', 'tu'], t: '«Student» se acentúa en «dent».', e: 'Los extranjerismos suelen acentuarse al final.' },
      { s: '„Balkon“ hat den Akzent auf ___.', a: 'kon', d: ['Bal', 'beiden'], t: '«Balkon» lleva el acento en «kon».', e: 'Acento en la última sílaba.' },
      { s: '„Familie“ betont man auf ___.', a: 'mi', d: ['Fa', 'lie'], t: '«Familie» se acentúa en «mi».', e: 'Aquí el acento va en medio.' },
      { s: '„Büro“ hat den Akzent auf ___.', a: 'ro', d: ['Bü', 'beiden'], t: '«Büro» lleva el acento en «ro».', e: 'Del francés, con acento final.' },
      { s: '„Adresse“ betont man auf ___.', a: 'dres', d: ['A', 'se'], t: '«Adresse» se acentúa en «dres».', e: 'Acento en la sílaba del medio.' },
      { s: '„Salat“ hat den Akzent auf ___.', a: 'lat', d: ['Sa', 'beiden'], t: '«Salat» lleva el acento en «lat».', e: 'Acento en la última sílaba.' },
      { s: 'Wörter auf -ieren betont man auf ___.', a: 'ie', d: ['der ersten Silbe', 'ren'], t: 'Las palabras en «-ieren» se acentúan en «ie».', e: 'studieren, telefonieren, reparieren.' },
      { s: '„Zitrone“ betont man auf ___.', a: 'tro', d: ['Zi', 'ne'], t: '«Zitrone» se acentúa en «tro».', e: 'Acento en la sílaba del medio.' },
      { s: 'Ein falscher Akzent macht das Wort oft ___.', a: 'unverständlich', d: ['schöner', 'kürzer'], t: 'Un acento mal puesto hace la palabra difícil de entender.', e: 'Por eso conviene aprender el acento con la palabra.' },
      { s: '„Bibliothek“ hat den Akzent auf ___.', a: 'thek', d: ['Bi', 'blio'], t: '«Bibliothek» lleva el acento en «thek».', e: 'Extranjerismo con acento final.' }
    ]
  },
  'aussprache-satzakzent': {
    picks: [
      { s: 'In „Ich komme MORGEN“ liegt der Akzent auf ___.', a: 'morgen', d: ['ich', 'komme'], t: 'En «Ich komme MORGEN» el acento va en «morgen».', e: 'Lo nuevo es cuándo.' },
      { s: 'In „ICH komme morgen“ betont man ___.', a: 'ich', d: ['morgen', 'komme'], t: 'En «ICH komme morgen» se acentúa «ich».', e: 'Lo nuevo es quién.' },
      { s: 'Der Satzakzent liegt auf ___.', a: 'der neuen Information', d: ['dem Verb', 'dem Subjekt'], t: 'El acento de frase cae en la información nueva.', e: 'No hay una posición fija.' },
      { s: '„Das ist für DICH“ betont ___.', a: 'dich', d: ['das', 'ist'], t: '«Das ist für DICH» acentúa «dich».', e: 'Para quién es lo importante.' },
      { s: 'Wenn man den Akzent verschiebt, ändert sich ___.', a: 'die Bedeutung', d: ['nichts', 'die Grammatik'], t: 'Al cambiar el acento cambia el sentido.', e: 'Misma frase, mensaje distinto.' },
      { s: 'Wörter ohne Akzent im Satz sind meistens ___.', a: 'Artikel und Pronomen', d: ['Nomen', 'Verben'], t: 'Las palabras átonas suelen ser artículos y pronombres.', e: 'No llevan información nueva.' },
      { s: '„Nicht HEUTE, morgen“ betont ___.', a: 'heute', d: ['nicht', 'morgen'], t: '«Nicht HEUTE, morgen» acentúa «heute».', e: 'Se contrapone a morgen.' },
      { s: 'Bei einer Korrektur betont man ___.', a: 'das korrigierte Wort', d: ['das Verb', 'das ganze Ende'], t: 'Al corregir se acentúa la palabra corregida.', e: 'Es lo que quieres que se oiga.' },
      { s: 'In einer normalen Aussage liegt der Akzent oft ___.', a: 'am Ende', d: ['am Anfang', 'in der Mitte'], t: 'En una frase normal el acento suele ir al final.', e: 'Ahí va lo nuevo.' },
      { s: 'Der Satzakzent ist ___ als die Wortbetonung.', a: 'beweglicher', d: ['fester', 'gleich'], t: 'El acento de frase es más móvil que el de palabra.', e: 'El de palabra no cambia; el de frase sí.' },
      { s: 'In „Ich komme mit dem AUTO“ betont man ___.', a: 'Auto', d: ['Ich', 'komme'], t: 'En «Ich komme mit dem AUTO» se acentúa «Auto».', e: 'Se acentúa la información nueva.' },
      { s: 'Die wichtigste Information steht oft ___.', a: 'am Satzende', d: ['am Satzanfang', 'in der Mitte'], t: 'La información más importante suele ir al final.', e: 'Por eso el acento suele caer allí.' },
      { s: 'Artikel und Pronomen sind im Satz meistens ___.', a: 'unbetont', d: ['betont', 'am lautesten'], t: 'Los artículos y pronombres suelen ir átonos.', e: 'Llevan el acento los sustantivos y los verbos.' },
      { s: '„Ich habe es NICHT gesagt“ betont ___.', a: 'die Verneinung', d: ['das Subjekt', 'das Objekt'], t: '«Ich habe es NICHT gesagt» acentúa la negación.', e: 'Se acentúa nicht para dejarlo claro.' },
      { s: 'Fragewörter am Satzanfang sind oft ___.', a: 'betont', d: ['unbetont', 'stumm'], t: 'Las palabras interrogativas al principio suelen ir acentuadas.', e: 'WANN kommst du?' },
      { s: 'Ein Satz hat normalerweise ___ Hauptakzent.', a: 'einen', d: ['zwei', 'keinen'], t: 'Una frase tiene normalmente un acento principal.', e: 'Los demás acentos son más débiles.' },
      { s: 'Beim Widersprechen betont man ___.', a: 'stärker', d: ['schwächer', 'gar nicht'], t: 'Al contradecir se acentúa más fuerte.', e: 'DOCH, ich war da!' },
      { s: 'In „Das war SEHR gut“ liegt der Akzent auf ___.', a: 'sehr', d: ['Das', 'war'], t: 'En «Das war SEHR gut» el acento va en «sehr».', e: 'Se refuerza la palabra que intensifica.' },
      { s: 'Der Satzakzent macht den Satz ___.', a: 'verständlicher', d: ['länger', 'leiser'], t: 'El acento de frase hace la frase más comprensible.', e: 'Guía al oyente hacia lo importante.' },
      { s: 'Unbetonte Silben spricht man ___.', a: 'kürzer', d: ['länger', 'lauter'], t: 'Las sílabas átonas se pronuncian más cortas.', e: 'Por eso el alemán suena con ritmo marcado.' }
    ]
  },
  'aussprache-r-am-wortende': {
    picks: [
      { s: '„Bier“ spricht man am Ende wie ___.', a: 'ein schwaches a', d: ['ein spanisches r', 'ein k'], t: '«Bier» acaba con una a floja.', e: 'La r final casi no se oye.' },
      { s: '„Vater“ klingt ungefähr wie ___.', a: 'fáta', d: ['fáter', 'fatér'], t: '«Vater» suena más o menos «fáta».', e: 'En -er la r desaparece.' },
      { s: 'Am Silbenanfang macht man das r ___.', a: 'im Rachen', d: ['mit der Zungenspitze', 'gar nicht'], t: 'Al principio de sílaba la r se hace en la garganta.', e: 'No es la r vibrante española.' },
      { s: 'Das r in „Reis“ ist ___.', a: 'hörbar', d: ['stumm', 'wie ein l'], t: 'La r de «Reis» se oye.', e: 'Al principio sí suena.' },
      { s: 'In „Wasser“ hört man am Ende ___.', a: 'kein klares r', d: ['ein starkes r', 'ein s'], t: 'En «Wasser» no se oye una r clara al final.', e: 'Se convierte en una vocal floja.' },
      { s: '„Brot“ beginnt mit ___.', a: 'b und Rachen-r', d: ['b und spanischem r', 'nur b'], t: '«Brot» empieza con b y r de garganta.', e: 'Las dos consonantes suenan.' },
      { s: 'Die Endung -er spricht man wie ___.', a: 'a', d: ['er', 'ar'], t: 'La terminación «-er» suena como una a.', e: 'Kellner, Zimmer, Vater.' },
      { s: '„Kellner“ und „Keller“ enden ___.', a: 'fast gleich', d: ['ganz anders', 'mit r'], t: '«Kellner» y «Keller» acaban casi igual.', e: 'Las dos con esa a floja.' },
      { s: 'Ein spanisches r im Deutschen klingt ___.', a: 'auffällig', d: ['normal', 'besser'], t: 'Una r española en alemán se nota mucho.', e: 'Es de lo que más delata el acento.' },
      { s: 'In „Uhr“ ist das r am Ende ___.', a: 'schwach', d: ['stark', 'ein h'], t: 'En «Uhr» la r final es floja.', e: 'Suena casi como «úa».' },
      { s: '„Tür“ endet mit einem Laut wie ___.', a: 'a', d: ['r wie in Reis', 'e'], t: '«Tür» acaba con un sonido parecido a una «a».', e: 'La r final se vocaliza.' },
      { s: 'In „Mutter“ klingt die Endung wie ___.', a: 'a', d: ['er mit rollendem r', 'ä'], t: 'En «Mutter» la terminación suena como una «a».', e: 'La terminación -er suena casi como -a.' },
      { s: 'Das r in „braun“ spricht man ___.', a: 'deutlich', d: ['gar nicht', 'wie a'], t: 'La r de «braun» se pronuncia claramente.', e: 'Delante de vocal la r es consonante.' },
      { s: '„Jahr“ und „ja“ klingen am Ende ___.', a: 'ähnlich', d: ['ganz verschieden', 'gleich lang'], t: '«Jahr» y «ja» suenan parecido al final.', e: 'La r final apenas se oye como consonante.' },
      { s: 'Wo spricht man das r als Konsonant?', a: 'vor einem Vokal', d: ['am Wortende', 'nach einem Vokal'], t: '¿Dónde se pronuncia la r como consonante?', e: 'rot, Reis, braun, Frage.' },
      { s: '„Lehrer“ hat am Ende ___.', a: 'einen a-Laut', d: ['ein rollendes r', 'kein Geräusch'], t: '«Lehrer» acaba con un sonido de «a».', e: 'Las dos erres suenan distinto en la misma palabra.' },
      { s: 'Das deutsche r macht man ___.', a: 'hinten im Mund', d: ['mit der Zungenspitze', 'mit den Lippen'], t: 'La r alemana se hace atrás en la boca.', e: 'Por eso no suena como la r española.' },
      { s: 'In „Bier“ und „Tier“ endet das Wort ___.', a: 'gleich', d: ['verschieden', 'mit t'], t: '«Bier» y «Tier» acaban igual.', e: 'Las dos con r vocalizada.' },
      { s: 'Ein gerolltes r klingt im Deutschen ___.', a: 'fremd', d: ['richtig', 'besser'], t: 'Una r vibrante suena extranjera en alemán.', e: 'Se entiende, pero se nota el acento.' },
      { s: 'In „Uhr“ ist die Vokallänge ___.', a: 'lang', d: ['kurz', 'egal'], t: 'En «Uhr» la vocal es larga.', e: 'La h alarga la u, y la r se vocaliza.' }
    ]
  },
  'aussprache-chs-x': {
    picks: [
      { s: '„sechs“ spricht man wie ___.', a: 'seks', d: ['sech-s', 'seksch'], t: '«sechs» se pronuncia «seks».', e: 'chs suena ks, no como ch.' },
      { s: 'In „wachsen“ klingt chs wie ___.', a: 'ks', d: ['ch', 'sch'], t: 'En «wachsen» el chs suena «ks».', e: 'Igual que la x.' },
      { s: 'Der Buchstabe x klingt wie ___.', a: 'ks', d: ['ch', 's'], t: 'La letra x suena «ks».', e: 'Taxi, Text, Praxis.' },
      { s: 'In „Fuchs“ hört man ___.', a: 'ks', d: ['ch', 'sch'], t: 'En «Fuchs» se oye «ks».', e: 'Otro caso de chs.' },
      { s: '„nächste“ hat dagegen ___.', a: 'den ich-Laut', d: ['ks', 'sch'], t: '«nächste» en cambio lleva el ich-Laut.', e: 'Aquí chs no van juntas en la misma sílaba.' },
      { s: 'In „Erwachsene“ spricht man chs als ___.', a: 'ks', d: ['ch', 's'], t: 'En «Erwachsene» el chs se pronuncia «ks».', e: 'Regla constante.' },
      { s: 'chs ist einer der wenigen Fälle, wo ch ___.', a: 'nicht wie ch klingt', d: ['wie ch klingt', 'stumm ist'], t: 'chs es de los pocos casos en que ch no suena como ch.', e: 'Por eso conviene fijarse.' },
      { s: '„Praxis“ spricht man mit ___.', a: 'ks', d: ['chs', 'sch'], t: '«Praxis» se pronuncia con «ks».', e: 'La x normal.' },
      { s: 'Das chs in „Ochs“ klingt wie ___.', a: 'ks', d: ['ch', 'sch'], t: 'El chs de «Ochs» suena «ks».', e: 'Mismo caso.' },
      { s: '„sechs“ und „Sex“ klingen ___.', a: 'fast gleich', d: ['ganz anders', 'gleich'], t: '«sechs» y «Sex» suenan casi igual.', e: 'Solo cambia la vocal.' },
      { s: '„wechseln“ spricht man mit ___.', a: 'ks', d: ['ch plus s', 'sch'], t: '«wechseln» se pronuncia con «ks».', e: 'chs suena ks, como una x.' },
      { s: '„Taxi“ hat den Laut ___.', a: 'ks', d: ['ch', 'sch'], t: '«Taxi» tiene el sonido «ks».', e: 'La x suena siempre ks.' },
      { s: 'In „Büchse“ klingt chs wie ___.', a: 'ks', d: ['ch plus s', 'sch'], t: 'En «Büchse» el chs suena «ks».', e: 'Mismo caso que sechs y Fuchs.' },
      { s: 'In „du machst“ ist chs ___.', a: 'ch plus s', d: ['ks', 'sch'], t: 'En «du machst» el chs no suena «ks».', e: 'Aquí la s es la terminación del verbo.' },
      { s: 'Warum ist „machst“ anders als „Fuchs“?', a: 'die s gehört zur Endung', d: ['es ist ein Fehler', 'es ist ein Fremdwort'], t: '¿Por qué «machst» es distinto de «Fuchs»?', e: 'En Fuchs el chs es una sola raíz.' },
      { s: '„Achse“ spricht man wie ___.', a: 'Akse', d: ['Achse mit ch', 'Asche'], t: '«Achse» se pronuncia como «Akse».', e: 'Otro caso de chs igual a ks.' },
      { s: 'Der Buchstabe x ist im Deutschen ___.', a: 'selten', d: ['sehr häufig', 'verboten'], t: 'La letra x es rara en alemán.', e: 'Sale sobre todo en extranjerismos.' },
      { s: '„sechzehn“ spricht man mit ___.', a: 'ch', d: ['ks', 'sch'], t: '«sechzehn» se pronuncia con «ch».', e: 'Ojo: sechs lleva ks, pero sechzehn no.' },
      { s: 'In „Nächte“ hört man ___.', a: 'ch', d: ['ks', 'sch'], t: 'En «Nächte» se oye «ch».', e: 'No hay s detrás, así que ch normal.' },
      { s: '„Erwachsener“ und „Examen“ haben ___.', a: 'denselben Laut', d: ['verschiedene Laute', 'kein ks'], t: '«Erwachsener» y «Examen» tienen el mismo sonido.', e: 'Los dos llevan ks, escrito chs y x.' }
    ]
  },
  'aussprache-diphthonge': {
    picks: [
      { s: '„ei“ spricht man wie ___.', a: 'ai', d: ['ei', 'i'], t: '«ei» se pronuncia «ai».', e: 'nein suena «náin».' },
      { s: '„ie“ ist ___.', a: 'ein langes i', d: ['ai', 'ie getrennt'], t: '«ie» es una i larga.', e: 'Liebe suena «líbe».' },
      { s: '„eu“ und „äu“ klingen wie ___.', a: 'oi', d: ['eu', 'au'], t: '«eu» y «äu» suenan «oi».', e: 'heute, Häuser.' },
      { s: '„au“ spricht man wie ___.', a: 'au', d: ['ao', 'o'], t: '«au» se pronuncia «au».', e: 'Haus, Frau.' },
      { s: '„heute“ hat den Laut ___.', a: 'oi', d: ['eu', 'ai'], t: '«heute» lleva el sonido «oi».', e: 'eu siempre suena oi.' },
      { s: '„lieber“ spricht man mit ___.', a: 'langem i', d: ['ai', 'ie getrennt'], t: '«lieber» se pronuncia con i larga.', e: 'ie = i larga.' },
      { s: 'Der Unterschied zwischen ei und ie ___.', a: 'ändert das Wort', d: ['ändert nichts', 'ist nur Schrift'], t: 'La diferencia entre ei e ie cambia la palabra.', e: 'Beine y Biene no son lo mismo.' },
      { s: '„Häuser“ klingt wie ___.', a: 'Hoiser', d: ['Häuser mit ä', 'Hauser'], t: '«Häuser» suena «hóiser».', e: 'äu = oi.' },
      { s: 'In „Zeitung“ ist ei ___.', a: 'ai', d: ['ei', 'e-i'], t: 'En «Zeitung» el «ei» suena «ai».', e: '«tsáitung».' },
      { s: '„Freund“ spricht man mit ___.', a: 'oi', d: ['eu', 'ai'], t: '«Freund» se pronuncia con «oi».', e: 'eu = oi, siempre.' },
      { s: '„mein“ spricht man mit dem Laut ___.', a: 'ai', d: ['ei wie geschrieben', 'i'], t: '«mein» se pronuncia con el sonido «ai».', e: 'ei siempre suena ai.' },
      { s: '„viel“ spricht man mit ___.', a: 'langem i', d: ['ai', 'ie getrennt'], t: '«viel» se pronuncia con «i» larga.', e: 'ie es una i larga, no un diptongo.' },
      { s: '„Baum“ hat den Laut ___.', a: 'au', d: ['a plus u getrennt', 'o'], t: '«Baum» tiene el sonido «au».', e: 'Los dos sonidos se funden en uno.' },
      { s: '„neun“ spricht man wie ___.', a: 'noin', d: ['neun getrennt', 'nain'], t: '«neun» se pronuncia como «noin».', e: 'eu suena oi.' },
      { s: '„Bäume“ und „Räume“ haben den Laut ___.', a: 'oi', d: ['ai', 'au'], t: '«Bäume» y «Räume» tienen el sonido «oi».', e: 'äu suena igual que eu.' },
      { s: '„Wein“ und „Wien“ klingen ___.', a: 'verschieden', d: ['gleich', 'fast gleich'], t: '«Wein» y «Wien» suenan distinto.', e: 'Wein lleva ai, Wien una i larga.' },
      { s: 'Ein Diphthong ist ___.', a: 'ein Doppellaut', d: ['ein langer Vokal', 'ein Konsonant'], t: 'Un diptongo es un sonido doble.', e: 'Dos vocales en una sola sílaba.' },
      { s: 'In „heißen“ ist ei ___.', a: 'ein Diphthong', d: ['ein langes e', 'zwei Silben'], t: 'En «heißen» el «ei» es un diptongo.', e: 'Suena ai, en una sola sílaba.' },
      { s: '„Leute“ spricht man mit ___.', a: 'oi', d: ['ai', 'eu getrennt'], t: '«Leute» se pronuncia con «oi».', e: 'eu suena siempre oi.' },
      { s: 'Deutsche Diphthonge sind ___.', a: 'ei, au und eu', d: ['ie, ee und aa', 'ch, sch und st'], t: 'Los diptongos alemanes son «ei», «au» y «eu».', e: 'Con sus variantes ai y äu.' }
    ]
  }
};
