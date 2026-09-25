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
      { s: 'Welches Wort hat den harten „ch“-Laut? ___', a: 'Nacht', d: ['Licht', 'Küche'], t: '¿Cuál lleva la "ch" fuerte?', e: 'Nacht: la "ch" va detrás de "a".' },
      { s: 'Welches Wort hat den weichen „ch“-Laut? ___', a: 'München', d: ['Woche', 'Kuchen'], t: '¿Cuál lleva la "ch" suave?', e: 'München: detrás de "ü". Woche y Kuchen van detrás de o y u.' },
      { s: '„Chef“ spricht man mit ___ am Anfang.', a: 'sch', d: ['ch wie ich', 'k'], t: '«Chef» empieza con el sonido «sch».', e: 'Las palabras de origen francés suenan «schef».' },
      { s: '„Chor“ spricht man mit ___ am Anfang.', a: 'k', d: ['sch', 'ch wie ich'], t: '«Chor» empieza con «k».', e: 'De origen griego: «kor».' },
      { s: 'In „sechs“ klingt „chs“ wie ___.', a: 'ks', d: ['ch', 'sch'], t: 'En «sechs», «chs» suena «ks».', e: 'sechs suena «seks». Igual en Fuchs y wachsen.' },
      { s: 'Welches Wort reimt sich NICHT auf die anderen? ___', a: 'Buch', d: ['nicht', 'Licht'], t: '¿Cuál no rima con las otras?', e: 'nicht y Licht llevan la ch suave; Buch, la fuerte.' },
      { s: 'Der Diminutiv „-chen“ hat immer den ___ Laut.', a: 'weichen', d: ['harten', 'k-'], t: 'El diminutivo «-chen» lleva siempre el sonido suave.', e: 'Mädchen, Brötchen: siempre suave, venga la vocal que venga antes.' },
      { s: 'In „auch“ klingt „ch“ ___.', a: 'hart', d: ['weich', 'wie k'], t: 'En «auch», la "ch" suena fuerte.', e: 'Detrás de "au" siempre va la fuerte.' }
    ]
  },

  // ---------- A1.1 L2 ----------
  'aussprache-sch-sp-st': {
    picks: [
      { s: '„Schule“ beginnt mit dem Laut ___.', a: 'sch', d: ['s', 'ch'], t: '«Schule» empieza con el sonido «sch».', e: 'Las tres letras juntas son un solo sonido, el de «show» en inglés.' },
      { s: 'Am Wortanfang spricht man „sp“ wie ___.', a: 'schp', d: ['sp', 'sb'], t: 'Al principio de palabra, «sp» suena «schp».', e: 'sprechen suena «schprechen». Spanien, «Schpanien».' },
      { s: 'Am Wortanfang spricht man „st“ wie ___.', a: 'scht', d: ['st', 'sd'], t: 'Al principio de palabra, «st» suena «scht».', e: 'Stadt suena «Schtadt». Straße, «Schtraße».' },
      { s: 'In der Wortmitte bleibt „st“ ___.', a: 'st', d: ['scht', 'sch'], t: 'A mitad de palabra, «st» se queda «st».', e: 'Fenster y kosten suenan con "st" normal, no con «scht».' },
      { s: 'Welches Wort beginnt mit „scht“? ___', a: 'Student', d: ['Fenster', 'Osten'], t: '¿Cuál empieza sonando «scht»?', e: 'Student: la "st" abre la palabra.' },
      { s: 'Welches Wort beginnt mit „schp“? ___', a: 'Sport', d: ['Wespe', 'Kaspar'], t: '¿Cuál empieza sonando «schp»?', e: 'Sport suena «Schport».' },
      { s: '„Spaß“ spricht man ___.', a: 'Schpaß', d: ['Spaß wie im Spanischen', 'Sbaß'], t: '«Spaß» se pronuncia «Schpaß».', e: 'sp inicial: siempre «schp».' },
      { s: 'Ein „s“ vor einem Vokal klingt ___ wie in „Sonne“.', a: 'stimmhaft', d: ['wie ß', 'wie sch'], t: 'Una "s" antes de vocal suena sonora, como en «Sonne».', e: 'Es la "s" zumbada del inglés "zoo": Sonne, sagen, lesen.' },
      { s: 'Wie viele Laute hat „sch“? ___', a: 'einen', d: ['zwei', 'drei'], t: '¿Cuántos sonidos tiene «sch»?', e: 'Uno solo, aunque se escriban tres letras.' },
      { s: 'In „verstehen“ klingt das „st“ ___.', a: 'wie scht', d: ['wie st', 'wie sd'], t: 'En «verstehen», la «st» suena «scht».', e: 'Porque "stehen" empieza ahí dentro: ver-stehen. Cuenta como principio de palabra.' }
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
      { s: 'Welches Wort beginnt mit dem Laut „ts“? ___', a: 'Zimmer', d: ['Sommer', 'Suppe'], t: '¿Cuál empieza con el sonido «ts»?', e: 'Zimmer: «tsimmer».' },
      { s: '„Salz“ endet mit ___.', a: 'ts', d: ['s', 'sch'], t: '«Salz» acaba en «ts».', e: 'La "z" suena «ts» también al final.' },
      { s: 'In „müssen“ ist der Vokal ___.', a: 'kurz', d: ['lang', 'egal'], t: 'En «müssen» la vocal es corta.', e: 'La doble "ss" acorta la vocal de delante.' },
      { s: '„sitzen“ hat wie viele „ts“-Laute? ___', a: 'einen', d: ['zwei', 'keinen'], t: '¿Cuántos sonidos «ts» tiene «sitzen»?', e: 'Uno: el de la "tz". La "s" del principio es sonora.' },
      { s: 'Welches Wort hat KEIN „ts“? ___', a: 'sehen', d: ['zahlen', 'Katze'], t: '¿Cuál no tiene «ts»?', e: 'sehen empieza con "s" sonora, no con "z".' }
    ]
  },

  // ---------- A1.1 L4 ----------
  'aussprache-umlaute': {
    picks: [
      { s: '„ä“ klingt wie ___.', a: 'e', d: ['a', 'i'], t: 'La "ä" suena como una "e".', e: 'Mädchen suena «medchen», spät «schpet».' },
      { s: 'Für „ö“ formt man die Lippen wie bei ___ und sagt „e“.', a: 'o', d: ['u', 'a'], t: 'Para la "ö" se ponen los labios de "o" y se dice "e".', e: 'schön, hören. No existe en español: hay que fabricarla.' },
      { s: 'Für „ü“ formt man die Lippen wie bei ___ und sagt „i“.', a: 'u', d: ['o', 'e'], t: 'Para la "ü" se ponen los labios de "u" y se dice "i".', e: 'müde, über, Tür. Como la "u" francesa.' },
      { s: 'Welches Wort hat den „e“-Laut? ___', a: 'Käse', d: ['Kasse', 'Küche'], t: '¿Cuál lleva el sonido "e"?', e: 'Käse: la "ä" suena "e".' },
      { s: '„schon“ und „schön“ sind ___.', a: 'zwei Wörter', d: ['dasselbe Wort', 'beide falsch'], t: '«schon» y «schön» son dos palabras distintas.', e: 'schon = ya; schön = bonito. El Umlaut cambia el significado.' },
      { s: 'Ohne Umlaut kann man „ü“ auch ___ schreiben.', a: 'ue', d: ['uh', 'u'], t: 'Sin Umlaut, la "ü" se puede escribir "ue".', e: 'Muenchen = München. Se usa en direcciones de correo y dominios.' },
      { s: 'Der Plural von „Buch“ ist „Bücher“: der Umlaut ___ den Laut.', a: 'ändert', d: ['verlängert', 'löscht'], t: 'El plural de «Buch» es «Bücher»: el Umlaut cambia el sonido.', e: 'Muchos plurales se hacen justo así.' },
      { s: 'Welches Wort hat KEINEN Umlaut-Laut? ___', a: 'Sommer', d: ['Mütter', 'Läden'], t: '¿Cuál no tiene sonido de Umlaut?', e: 'Sommer lleva una "o" normal.' },
      { s: '„Tür“ reimt sich mit ___.', a: 'für', d: ['Tor', 'Tier'], t: '«Tür» rima con «für».', e: 'Las dos con "ü".' },
      { s: 'In „hören“ ist der Laut ___.', a: 'ö', d: ['o', 'e'], t: 'En «hören» el sonido es "ö".', e: 'Distinto de "horen", que no existe.' }
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
      { s: 'Welches Wort beginnt mit dem „f“-Laut? ___', a: 'viel', d: ['wie', 'Bier'], t: '¿Cuál empieza con el sonido "f"?', e: 'viel suena «fil».' },
      { s: '„wer“ und „Verkehr“ beginnen ___.', a: 'unterschiedlich', d: ['gleich', 'beide mit f'], t: '«wer» y «Verkehr» no empiezan igual.', e: 'wer con "v"; Verkehr con "f".' },
      { s: '„Wein“ spricht man ___.', a: 'vain', d: ['bain', 'fain'], t: '«Wein» se pronuncia «vain».', e: 'w = v, y "ei" = ai.' },
      { s: 'Welches Wort hat den „v“-Laut? ___', a: 'Wohnung', d: ['Vater', 'Familie'], t: '¿Cuál tiene el sonido "v"?', e: 'Wohnung, con "w".' },
      { s: '„vier“ und „wir“ klingen ___.', a: 'unterschiedlich', d: ['gleich', 'beide mit b'], t: '«vier» y «wir» no suenan igual.', e: 'vier = «fir», wir = «vir». Una sola letra los separa.' }
    ]
  },

  // ---------- A1.1 L6 ----------
  'aussprache-eu-au': {
    picks: [
      { s: '„eu“ spricht man wie ___.', a: 'oi', d: ['eu', 'au'], t: 'El diptongo "eu" se pronuncia «oi».', e: 'neu suena «noi», Freund «Froind», Deutsch «Doitsch».' },
      { s: '„äu“ spricht man wie ___.', a: 'oi', d: ['äu', 'ai'], t: 'El diptongo "äu" también suena «oi».', e: 'Häuser suena «Hoiser». Igual que "eu".' },
      { s: '„au“ spricht man wie ___.', a: 'au', d: ['oi', 'ou'], t: 'El diptongo "au" suena «au», igual que en español.', e: 'Haus, Frau, auch. Este es el fácil.' },
      { s: '„Deutschland“ beginnt mit dem Laut ___.', a: 'doi', d: ['deu', 'dau'], t: '«Deutschland» empieza sonando «doi».', e: 'eu = oi.' },
      { s: 'Welches Wort klingt mit „oi“? ___', a: 'heute', d: ['Haus', 'heiß'], t: '¿Cuál suena con «oi»?', e: 'heute: «hoite».' },
      { s: '„Häuser“ ist der Plural von „Haus“: der Laut ___.', a: 'ändert sich', d: ['bleibt gleich', 'verschwindet'], t: '«Häuser» es el plural de «Haus»: el sonido cambia.', e: 'au = «au», äu = «oi». El plural se oye.' },
      { s: '„Leute“ reimt sich mit ___.', a: 'heute', d: ['Laute', 'Leiter'], t: '«Leute» rima con «heute».', e: 'Las dos con "eu" = «oi».' },
      { s: 'Welches Wort hat KEIN „oi“? ___', a: 'auch', d: ['neun', 'Bäume'], t: '¿Cuál no tiene «oi»?', e: 'auch lleva "au", que suena «au».' },
      { s: '„neun“ spricht man ___.', a: 'noin', d: ['neun', 'naun'], t: '«neun» se pronuncia «noin».', e: 'eu = oi, también en los números.' },
      { s: '„ie“ ist kein Diphthong, sondern ___.', a: 'ein langes i', d: ['i und e', 'oi'], t: '"ie" no es diptongo, es una "i" larga.', e: 'Bier, viel, wie: una sola vocal, estirada.' }
    ]
  },

  // ---------- A1.1 L7 ----------
  'aussprache-h': {
    picks: [
      { s: 'Am Wortanfang wird „h“ ___.', a: 'gesprochen', d: ['nicht gesprochen', 'wie ch gesprochen'], t: 'Al principio de palabra, la "h" se pronuncia.', e: 'Haus, Hund, heute: se sopla, no es muda como en español.' },
      { s: 'Nach einem Vokal ist „h“ ___.', a: 'stumm', d: ['hart', 'wie ch'], t: 'Detrás de una vocal, la "h" es muda.', e: 'gehen, Uhr, ihm: no se oye, solo alarga la vocal de delante.' },
      { s: 'In „gehen“ hört man das „h“ ___.', a: 'nicht', d: ['deutlich', 'wie ch'], t: 'En «gehen» la "h" no se oye.', e: 'Suena «geen», con la "e" larga.' },
      { s: 'Das „h“ in „Uhr“ macht den Vokal ___.', a: 'lang', d: ['kurz', 'nasal'], t: 'La "h" de «Uhr» alarga la vocal.', e: 'Por eso se llama Dehnungs-h: h de alargar.' },
      { s: 'Welches Wort hat ein hörbares „h“? ___', a: 'Hund', d: ['sehen', 'nehmen'], t: '¿Cuál tiene una "h" que se oye?', e: 'Hund: la "h" abre la palabra.' },
      { s: 'Welches „h“ ist stumm? ___', a: 'das in „ihn“', d: ['das in „hier“', 'das in „hat“'], t: '¿Cuál es muda?', e: 'En «ihn» va detrás de vocal.' },
      { s: 'In „Hotel“ spricht man das „h“ ___.', a: 'mit Luft', d: ['gar nicht', 'wie j'], t: 'En «Hotel» la "h" se pronuncia soplando.', e: 'No es como el español «otel».' },
      { s: '„Ihnen“ beginnt mit ___.', a: 'einem langen i', d: ['einem h-Laut', 'einem ch-Laut'], t: '«Ihnen» empieza con una "i" larga.', e: 'La "h" solo alarga: «inen».' },
      { s: 'Wie viele hörbare „h“ hat „Hochhaus“? ___', a: 'zwei', d: ['eins', 'drei'], t: '¿Cuántas "h" se oyen en «Hochhaus»?', e: 'La del principio y la de "Haus", porque es palabra compuesta.' },
      { s: '„sehr“ spricht man ___.', a: 'mit langem e', d: ['mit h-Laut', 'mit ch'], t: '«sehr» se pronuncia con "e" larga.', e: 'La "h" no se oye: «ser».' }
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
      { s: 'Welches Wort endet mit dem „a“-Laut? ___', a: 'Wasser', d: ['Wasso', 'Wasse'], t: '¿Cuál acaba con el sonido "a"?', e: 'Wasser: «wassa».' },
      { s: '„aber“ und „Aba“ klingen ___.', a: 'fast gleich', d: ['ganz anders', 'gleich geschrieben'], t: '«aber» suena casi como «aba».', e: 'La "-er" final se come la r.' },
      { s: 'Ein „r“ VOR einem Vokal wird ___.', a: 'gesprochen', d: ['stumm', 'wie a'], t: 'Una "r" delante de vocal sí se pronuncia.', e: 'rot, Frau, hören: ahí la "r" está y se oye.' },
      { s: 'Welches Wort hat ein hörbares „r“? ___', a: 'Frau', d: ['Vater', 'Mutter'], t: '¿Cuál tiene una "r" que se oye?', e: 'Frau: la "r" va antes de vocal.' },
      { s: '„lustig“ endet mit ___.', a: 'dem ich-Laut', d: ['dem ach-Laut', 'einem g'], t: '«lustig» acaba con el sonido de «ich».', e: '-ig siempre con la ch suave.' }
    ]
  },
  // ---------- A1.1 Start: el acento de la palabra ----------
  wortakzent: {
    picks: [
      { s: 'Der Akzent liegt meistens auf der ___ Silbe.', a: 'ersten', d: ['zweiten', 'letzten'], t: 'El acento cae casi siempre en la primera sílaba.', e: 'ARbeiten, LEHrerin, FRAge. Al revés que en español, que tira a la penúltima.' },
      { s: 'Wo liegt der Akzent in „Lehrerin“? ___', a: 'auf der ersten Silbe', d: ['auf der zweiten Silbe', 'auf der letzten Silbe'], t: '¿Dónde cae el acento en «Lehrerin»?', e: 'En la primera. La terminación -in no se acentúa.' },
      { s: 'Wo liegt der Akzent in „Student“? ___', a: 'auf der letzten Silbe', d: ['auf der ersten Silbe', 'auf beiden gleich'], t: '¿Dónde cae el acento en «Student»?', e: 'Es una palabra de origen extranjero: esas van al final.' },
      { s: 'Wo liegt der Akzent in „verstehen“? ___', a: 'auf „-ste-“', d: ['auf „ver-“', 'auf „-hen“'], t: '¿Dónde cae el acento en «verstehen»?', e: 'Los prefijos be-, ver-, er-, ent-, ge- nunca se acentúan.' },
      { s: 'Wo liegt der Akzent in „aufstehen“? ___', a: 'auf „auf-“', d: ['auf „-ste-“', 'auf „-hen“'], t: '¿Dónde cae el acento en «aufstehen»?', e: 'En los verbos separables el acento va en el prefijo. Así se oye si es separable o no.' },
      { s: 'Welches Wort wird auf der letzten Silbe betont? ___', a: 'Restaurant', d: ['Wohnung', 'Fenster'], t: '¿Cuál se acentúa en la última sílaba?', e: 'Restaurant, del francés: «restoRANG».' },
      { s: 'Wo liegt der Akzent in „Computer“? ___', a: 'auf „-pu-“', d: ['auf „Com-“', 'auf „-ter“'], t: '¿Dónde cae el acento en «Computer»?', e: 'Palabra prestada del inglés: mantiene su acento.' },
      { s: 'In Komposita liegt der Akzent auf dem ___ Wort.', a: 'ersten', d: ['zweiten', 'längsten'], t: 'En las palabras compuestas el acento va en la primera parte.', e: 'DEUTSCHkurs, HAUStür: manda la primera palabra.' },
      { s: 'Wo liegt der Akzent in „bezahlen“? ___', a: 'auf „-zah-“', d: ['auf „be-“', 'auf „-len“'], t: '¿Dónde cae el acento en «bezahlen»?', e: 'be- es prefijo átono: el acento salta a la raíz.' },
      { s: 'Wörter auf „-ei“ betont man ___.', a: 'am Ende', d: ['am Anfang', 'in der Mitte'], t: 'Las palabras acabadas en «-ei» se acentúan al final.', e: 'PolizEI, BäckerEI, TürkEI.' }
    ]
  },

  // ---------- A1.1 Start: vocales largas y cortas ----------
  'vokal-laenge': {
    picks: [
      { s: 'Ein doppelter Vokal ist immer ___.', a: 'lang', d: ['kurz', 'stumm'], t: 'Una vocal doble es siempre larga.', e: 'Boot, Tee, Saal: se alarga, no se dicen dos vocales.' },
      { s: 'Zwei Konsonanten nach dem Vokal: der Vokal ist ___.', a: 'kurz', d: ['lang', 'stumm'], t: 'Con dos consonantes detrás, la vocal es corta.', e: 'kommen, Mutter, Stadt. Es la pista más fiable al leer.' },
      { s: 'In „Name“ ist das „a“ ___.', a: 'lang', d: ['kurz', 'stumm'], t: 'En «Name» la "a" es larga.', e: 'Una sola consonante detrás: vocal larga.' },
      { s: 'In „Mann“ ist das „a“ ___.', a: 'kurz', d: ['lang', 'stumm'], t: 'En «Mann» la "a" es corta.', e: 'Doble "n": vocal corta y seca.' },
      { s: 'Welches Wort hat einen kurzen Vokal? ___', a: 'offen', d: ['Ofen', 'Ohr'], t: '¿Cuál tiene la vocal corta?', e: 'offen, con dos efes. Ofen (el horno) es larga.' },
      { s: '„Stadt“ und „Staat“: welches ist lang? ___', a: 'Staat', d: ['Stadt', 'beide'], t: '«Stadt» y «Staat»: ¿cuál es larga?', e: 'Staat (el Estado) lleva vocal doble; Stadt (la ciudad) es corta.' },
      { s: '„ihn“ und „in“: welches ist lang? ___', a: 'ihn', d: ['in', 'beide'], t: '«ihn» e «in»: ¿cuál es larga?', e: 'La "h" no se oye, solo alarga la "i".' },
      { s: 'Ein „h“ nach dem Vokal macht ihn ___.', a: 'lang', d: ['kurz', 'stimmlos'], t: 'Una "h" detrás de la vocal la hace larga.', e: 'Uhr, gehen, Jahr: la h es muda y solo estira.' },
      { s: 'Die Länge kann die Bedeutung ___.', a: 'ändern', d: ['nie ändern', 'verstärken'], t: 'La duración puede cambiar el significado.', e: 'Stadt / Staat, Ofen / offen: es una diferencia de verdad, no un detalle.' },
      { s: 'In „Bier“ ist das „ie“ ___.', a: 'lang', d: ['kurz', 'zwei Laute'], t: 'En «Bier» la «ie» es larga.', e: 'Es una "i" larga, no un diptongo: «bir».' }
    ]
  },

  // ---------- A1.1 Start: b, d, g al final ----------
  'auslaut-b-d-g': {
    picks: [
      { s: 'Am Wortende klingt „d“ wie ___.', a: 't', d: ['d', 'ts'], t: 'Al final de palabra, la "d" suena como "t".', e: 'Hund se dice «hunt», Kind «kint».' },
      { s: 'Am Wortende klingt „g“ wie ___.', a: 'k', d: ['g', 'ch'], t: 'Al final de palabra, la "g" suena como "k".', e: 'Tag se dice «tak», Berg «berk».' },
      { s: 'Am Wortende klingt „b“ wie ___.', a: 'p', d: ['b', 'f'], t: 'Al final de palabra, la "b" suena como "p".', e: 'halb se dice «halp», Dieb «dip».' },
      { s: 'Wie spricht man „Hund“? ___', a: 'hunt', d: ['hund', 'hunk'], t: '¿Cómo se pronuncia «Hund»?', e: 'Se escribe con d, se dice con t.' },
      { s: 'Und wie spricht man „Hunde“? ___', a: 'hun-de', d: ['hun-te', 'hunt'], t: '¿Y cómo se pronuncia «Hunde»?', e: 'En plural la "d" vuelve a sonar porque ya no está al final.' },
      { s: 'Du hörst «tak». Wie schreibt man das? ___', a: 'Tag', d: ['Tak', 'Tack'], t: 'Oyes «tak». ¿Cómo se escribe?', e: 'Con g. Se comprueba con el plural: die Tage, ahí se oye.' },
      { s: 'Welcher Plural verrät den Buchstaben? ___', a: 'Kinder', d: ['Kind', 'Kinds'], t: '¿Qué plural delata la letra?', e: 'die Kinder suena con "d" clara: por eso el singular se escribe Kind.' },
      { s: 'In „Freundin“ klingt das „d“ wie ___.', a: 'd', d: ['t', 'p'], t: 'En «Freundin» la "d" suena "d".', e: 'Delante de vocal se salva; en "Freund" a secas, no.' },
      { s: 'Wie spricht man „gelb“? ___', a: 'gelp', d: ['gelb', 'gelf'], t: '¿Cómo se pronuncia «gelb»?', e: 'Con p. Pero "gelbe Blumen" recupera la b.' },
      { s: 'Passiert das auch am Silbenende? ___', a: 'ja', d: ['nein', 'nur bei d'], t: '¿Pasa también al final de sílaba?', e: 'Sí: en "Abfahrt" la b suena «p» porque cierra la sílaba.' }
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
      { s: 'Woran hört man eine Ja-/Nein-Frage? ___', a: 'an der Melodie', d: ['am Fragezeichen', 'am Akzent'], t: '¿Por dónde se reconoce una pregunta de sí o no?', e: 'Al hablar no hay signo de interrogación: lo lleva la melodía.' },
      { s: 'Ein freundliches „Danke schön!“ endet ___.', a: 'steigend', d: ['fallend', 'monoton'], t: 'Un «Danke schön!» amable acaba subiendo.', e: 'La melodía plana suena seca; subir un poco suena amable.' },
      { s: 'Vor einem Komma geht die Stimme ___.', a: 'leicht rauf', d: ['runter', 'weg'], t: 'Antes de una coma la voz sube un poco.', e: 'Señala que la frase sigue.' },
      { s: 'In „Und du?“ geht die Stimme ___.', a: 'rauf', d: ['runter', 'gleich'], t: 'En «¿Y tú?» la voz sube.', e: 'Devuelve la pregunta: melodía ascendente.' },
      { s: 'Deutsch klingt für spanische Ohren oft ___.', a: 'fallender', d: ['steigender', 'gleich'], t: 'Para un oído español el alemán suena más descendente.', e: 'Las preguntas con W caen, y eso hace que suene más tajante de lo que es.' }
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
      { s: 'Das -e in „eine“ spricht man ___.', a: 'leise und kurz', d: ['laut und lang', 'wie ein i'], t: 'La -e de «eine» se dice floja y corta.', e: 'Igual que en Name, Frage y bitte.' }
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
      { s: 'In „Anfang“ hört man am Ende ___.', a: 'kein g', d: ['ein g', 'ein k'], t: 'En «Anfang» no se oye g al final.', e: 'Otra vez el grupo ng.' }
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
      { s: 'Wörter auf -tion haben den Artikel ___.', a: 'die', d: ['der', 'das'], t: 'Las palabras en «-tion» llevan «die».', e: 'die Information, die Situation.' }
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
      { s: 'Wörter mit ps am Anfang sind meistens ___.', a: 'Fremdwörter', d: ['Verben', 'Adjektive'], t: 'Las palabras que empiezan por «ps» suelen ser extranjerismos.', e: 'Psychologe, Psychiater.' }
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
      { s: 'Fremdwörter lernt man am besten ___.', a: 'mit dem Akzent', d: ['ohne Akzent', 'nur geschrieben'], t: 'Los extranjerismos se aprenden mejor con su acento.', e: 'Cambiarlo después cuesta mucho.' }
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
      { s: 'Der Satzakzent ist ___ als die Wortbetonung.', a: 'beweglicher', d: ['fester', 'gleich'], t: 'El acento de frase es más móvil que el de palabra.', e: 'El de palabra no cambia; el de frase sí.' }
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
      { s: 'In „Uhr“ ist das r am Ende ___.', a: 'schwach', d: ['stark', 'ein h'], t: 'En «Uhr» la r final es floja.', e: 'Suena casi como «úa».' }
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
      { s: '„sechs“ und „Sex“ klingen ___.', a: 'fast gleich', d: ['ganz anders', 'gleich'], t: '«sechs» y «Sex» suenan casi igual.', e: 'Solo cambia la vocal.' }
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
      { s: '„Freund“ spricht man mit ___.', a: 'oi', d: ['eu', 'ai'], t: '«Freund» se pronuncia con «oi».', e: 'eu = oi, siempre.' }
    ]
  }
};
