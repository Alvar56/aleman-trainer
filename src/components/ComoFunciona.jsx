import React, { useState } from 'react';
import { pick } from '../lib/i18n.js';
import { SIN_IA } from '../lib/modo.js';
import Desplegable from './Desplegable.jsx';

// Lo que la app hace y no cuenta en ninguna parte.
//
// Hay bastantes reglas metidas por dentro —de dónde sale cada porcentaje, qué
// pinta los colores del vocabulario, cuándo se gasta un congelador— que solo
// se sabían leyendo el código. Y los atajos de teclado, que no se ven por
// ningún lado: un atajo que no se anuncia no lo usa nadie.
//
// Va en Ajustes porque es donde se viene a mirar cómo funciona algo, y va
// plegado porque es para consultarlo una vez, no para leerlo cada día.
//
// Los textos van con pick() y no por el diccionario: son párrafos de ayuda,
// uno solo en toda la app, y así el castellano y el inglés se ven juntos y no
// se queda uno sin traducir sin que nadie se entere.

function Bloque({ titulo, children }) {
  const [abierto, setAbierto] = useState(false);
  return (
    <div className={'card cf-bloque' + (abierto ? ' abierta' : '')}>
      <button className="komm-head" onClick={() => setAbierto((x) => !x)}>
        <span className="lk-block-title" style={{ margin: 0 }}>{titulo}</span>
        <span className="komm-cuenta">{abierto ? '▴' : '▾'}</span>
      </button>
      <Desplegable abierto={abierto}>
        <div className="cf-cuerpo">{children}</div>
      </Desplegable>
    </div>
  );
}

// Una tecla, pintada como tecla.
function K({ children }) {
  return <kbd className="cf-tecla">{children}</kbd>;
}

export default function ComoFunciona() {
  return (
    <div className="panel">
      <h2>{pick('Cómo funciona', 'How it works')}</h2>
      <p className="muted" style={{ fontSize: '0.9rem', marginBottom: 14 }}>
        {pick(
          'Las reglas que la app aplica por dentro y no dice en ninguna parte.',
          'The rules the app applies under the hood and never tells you about.'
        )}
      </p>

      <div className="stack" style={{ gap: 10 }}>
        {/* Los atajos solo tienen sentido con teclado. En el móvil el bloque
            entero se esconde por css, que enseñar teclas a quien no las tiene
            es ruido. */}
        <div className="cf-solo-teclado">
          <Bloque titulo={pick('⌨️ Atajos de teclado', '⌨️ Keyboard shortcuts')}>
            <p>
              {pick(
                'En los ejercicios no hace falta el ratón. Los números salen pintados en los propios botones.',
                'You do not need the mouse in the exercises. The numbers are printed on the buttons themselves.'
              )}
            </p>
            <table className="cf-tabla">
              <tbody>
                <tr>
                  <td>{pick('Tests (gramática, vocabulario y Blitz)', 'Quizzes (grammar, vocabulary and Blitz)')}</td>
                  <td><K>1</K>–<K>5</K> {pick('eligen la opción', 'pick the option')}</td>
                </tr>
                <tr>
                  <td>{pick('Juego der / die / das', 'der / die / das game')}</td>
                  <td>
                    <K>1</K> <K>2</K> <K>3</K> = der, die, das · <K>P</K>{' '}
                    {pick('pide la pista', 'asks for the hint')}
                  </td>
                </tr>
                <tr>
                  <td>Kasus Trainer</td>
                  <td>
                    <K>1</K>–<K>4</K> {pick('artículos ·', 'articles ·')}{' '}
                    <K>P</K> {pick('pista ·', 'hint ·')}{' '}
                    <K>G</K> {pick('género ·', 'gender ·')}{' '}
                    <K>K</K> {pick('caso ·', 'case ·')}{' '}
                    <K>T</K> {pick('ver tabla', 'show table')}
                  </td>
                </tr>
                <tr>
                  <td>{pick('Tarjetas', 'Flashcards')}</td>
                  <td>
                    <K>{pick('espacio', 'space')}</K> {pick('gira la tarjeta', 'flips the card')} ·{' '}
                    <K>1</K> {pick('no la sabía', 'did not know it')} · <K>2</K>{' '}
                    {pick('sí', 'knew it')}
                  </td>
                </tr>
                <tr>
                  <td>{pick('Ahorcado', 'Hangman')}</td>
                  <td>
                    {pick('Escribe la letra directamente ·', 'Type the letter directly ·')}{' '}
                    <K>1</K> <K>2</K> <K>3</K> {pick('pistas (traducción, inicial, vocal)', 'hints (meaning, initial, vowel)')}
                  </td>
                </tr>
                <tr>
                  <td>{pick('Ordenar frases', 'Sentence order')}</td>
                  <td>
                    <K>Ctrl</K> {pick('enfoca una palabra y', 'focuses a word and')}{' '}
                    <K>←</K> <K>→</K> {pick('la mueven de sitio ·', 'move it along ·')}{' '}
                    <K>Enter</K> {pick('comprueba', 'checks')}
                  </td>
                </tr>
                <tr>
                  <td>{pick('Emparejar', 'Match')}</td>
                  <td>
                    <K>1</K>–<K>6</K> {pick('columna alemana ·', 'German column ·')}{' '}
                    <K>Q</K> <K>W</K> <K>E</K> <K>R</K> <K>T</K> <K>Y</K> {pick('tu idioma ·', 'your language ·')}{' '}
                    <K>P</K> {pick('pista', 'hint')}
                  </td>
                </tr>
                <tr>
                  <td>Wortsalat</td>
                  <td>
                    <K>1</K>–<K>9</K> {pick('mueven fichas de letras ·', 'move letter tiles ·')}{' '}
                    <K>P</K> {pick('pista de letra', 'letter hint')}
                  </td>
                </tr>
                <tr>
                  <td>{pick('Escribir, huecos y traducir frases', 'Type it, gap-fill and translating')}</td>
                  <td>
                    <K>Enter</K> {pick('comprueba ·', 'checks ·')}{' '}
                    <K>P</K> {pick('pide pista progresiva', 'asks for progressive hint')}
                  </td>
                </tr>
                <tr>
                  <td>{pick('Después de contestar', 'After answering')}</td>
                  <td>
                    <K>Enter</K> {pick('o', 'or')} <K>{pick('espacio', 'space')}</K>{' '}
                    {pick('pasan sin esperar', 'move on without waiting')}
                  </td>
                </tr>
                <tr>
                  <td>{pick('Salir y cerrar ventanas', 'Exit and close windows')}</td>
                  <td>
                    <K>Esc</K> {pick('sale del juego, de la tienda o cierra tablas y modales', 'exits game, shop or closes tables and modals')}
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="muted">
              {pick(
                'Mientras escribes en un campo de texto los atajos se apartan: ahí la tecla es del campo.',
                'While you are typing in a text field the shortcuts step aside: there the key belongs to the field.'
              )}
            </p>
          </Bloque>
        </div>

        <Bloque titulo={pick('🎮 Los ejercicios y juegos', '🎮 Exercises and games')}>
          <p>
            {pick(
              'Organizados en tres grandes áreas. El número en negrita indica las monedas (🪙) que otorga cada acierto según su dificultad y exigencia:',
              'Organized into three main areas. The bold number indicates the coins (🪙) awarded for each correct answer based on difficulty:'
            )}
          </p>

          <h3 style={{ margin: '14px 0 6px', fontSize: '0.95rem', color: 'var(--accent)' }}>📖 Grammatik</h3>
          <table className="cf-tabla cf-tabla-juegos">
            <tbody>
              <tr>
                <td>🧭 Kasus Trainer <b>1–2</b></td>
                <td>{pick('El artículo dentro de la frase según el caso (Nominativ, Akkusativ, Dativ). Con pistas de género, caso y tabla.', 'The article inside the sentence according to case (Nominativ, Akkusativ, Dativ). With gender, case, and table hints.')}</td>
              </tr>
              <tr>
                <td>✅ {pick('Test', 'Quiz')} <b>1</b></td>
                <td>{pick('Elegir la opción correcta entre cuatro para aplicar la regla gramatical.', 'Pick the correct option among four to apply the grammar rule.')}</td>
              </tr>
              <tr>
                <td>⌨️ {pick('Escribir', 'Type it')} <b>1–4</b></td>
                <td>{pick('Completar el hueco de la frase escribiendo la palabra de memoria, con pistas de letras.', 'Fill in the sentence blank by typing the word from memory, with letter hints.')}</td>
              </tr>
              <tr>
                <td>🔀 {pick('Ordenar frases', 'Sentence order')} <b>2</b></td>
                <td>{pick('Ordenar los bloques de palabras para construir la frase con la sintaxis correcta (posición del verbo).', 'Order the word tiles into proper German syntax and verb placement.')}</td>
              </tr>
              <tr>
                <td>⚖️ {pick('¿Correcto o no?', 'Correct or not?')} <b>1</b></td>
                <td>{pick('Detectar si la frase alemana mostrada es correcta o contiene algún fallo gramatical.', 'Judge whether the given German sentence is correct or has a grammatical mistake.')}</td>
              </tr>
            </tbody>
          </table>

          <h3 style={{ margin: '18px 0 6px', fontSize: '0.95rem', color: 'var(--accent)' }}>📗 Wortschatz</h3>
          <table className="cf-tabla cf-tabla-juegos">
            <tbody>
              <tr>
                <td>🎯 {pick('Juego der / die / das', 'der / die / das game')} <b>1–2</b></td>
                <td>{pick('Identificar el artículo determinado de cada sustantivo, con pistas de reglas y terminaciones.', 'Identify the definite article for each noun, with rule and ending hints.')}</td>
              </tr>
              <tr>
                <td>✅ {pick('Test', 'Quiz')} <b>1</b></td>
                <td>{pick('Elegir la traducción correcta entre cuatro opciones.', 'Pick the correct translation among four options.')}</td>
              </tr>
              <tr>
                <td>⌨️ {pick('Escribir', 'Type it')} <b>1–4</b></td>
                <td>{pick('Teclear la palabra alemana completa de memoria, con pistas de letras si las necesitas.', 'Type the full German word from memory, with letter hints if needed.')}</td>
              </tr>
              <tr>
                <td>🧩 {pick('Emparejar', 'Match')} <b>1</b></td>
                <td>{pick('Unir parejas de palabras en alemán y su traducción contrarreloj.', 'Match German and translation pairs against the clock.')}</td>
              </tr>
              <tr>
                <td>🔤 Wortsalat <b>2</b></td>
                <td>{pick('Ordenar las letras desordenadas para formar la palabra alemana.', 'Unscramble the jumbled letters to form the German word.')}</td>
              </tr>
              <tr>
                <td>⚡ Blitz <b>1</b></td>
                <td>{pick('Treinta segundos para acertar todas las palabras posibles.', 'Thirty seconds to get as many words right as you can.')}</td>
              </tr>
              <tr>
                <td>🪢 {pick('Ahorcado', 'Hangman')} <b>1–3</b></td>
                <td>{pick('Adivinar la palabra letra a letra con tres pistas (traducción, inicial y vocal).', 'Guess the word letter by letter with three hints (meaning, initial, and vowel).')}</td>
              </tr>
            </tbody>
          </table>

          <h3 style={{ margin: '18px 0 6px', fontSize: '0.95rem', color: 'var(--accent)' }}>💬 Kommunikation</h3>
          <table className="cf-tabla cf-tabla-juegos">
            <tbody>
              <tr>
                <td>🔁 {pick('Traducir frases', 'Translate sentences')} <b>1–4</b></td>
                <td>{pick('Traducir frases completas en ambas direcciones con tres pistas y teclado especial.', 'Translate full sentences in both directions with three hints and special characters.')}</td>
              </tr>
              <tr>
                <td>🗣️ {pick('Elegir la frase', 'Pick the phrase')} <b>1</b></td>
                <td>{pick('Elegir entre varias opciones cómo formularías una idea o afirmación en alemán según la situación.', 'Pick how to formulate a given idea or statement in German from multiple choices.')}</td>
              </tr>
              <tr>
                <td>💭 {pick('¿Qué significa?', 'What does it mean?')} <b>1</b></td>
                <td>{pick('Comprender y traducir el sentido de una frase del diálogo del alemán a tu idioma.', 'Understand and translate the meaning of a dialogue sentence from German.')}</td>
              </tr>
              <tr>
                <td>💬 {pick('Contestar', 'Reply')} <b>1</b></td>
                <td>{pick('Elegir la respuesta adecuada y natural a lo que te acaban de decir en la conversación.', 'Pick the natural and appropriate response to what was just said in the conversation.')}</td>
              </tr>
              <tr>
                <td>📝 {pick('La palabra que falta', 'The missing word')} <b>1–4</b></td>
                <td>{pick('Teclear de memoria la palabra clave que completa el turno del diálogo, con pistas de letras.', 'Type the missing dialogue keyword from memory, with letter hints.')}</td>
              </tr>
            </tbody>
          </table>

          <h3 style={{ margin: '18px 0 6px', fontSize: '0.95rem', color: 'var(--accent)' }}>🎓 {pick('Exámenes oficiales A2 y destrezas avanzadas', 'Official A2 exams and advanced skills')}</h3>
          <table className="cf-tabla cf-tabla-juegos">
            <tbody>
              <tr>
                <td>📋 {pick('Prüfung A2 (Simulacro)', 'Prüfung A2 (Mock Exam)')} <b>hasta 30</b></td>
                <td>{pick('Simulacro oficial de 4 destrezas (Lesen, Hören, Schreiben, Sprechen) en formato estándar ÖSD / Goethe / telc.', 'Official 4-skill mock exam (Reading, Listening, Writing, Speaking) standard ÖSD / Goethe / telc format.')}</td>
              </tr>
              <tr>
                <td>🗣️ {pick('Sprechen con Felix', 'Speaking with Felix')} <b>2–10</b></td>
                <td>{pick('Práctica oral en 3 partes: presentación personal, conversación sobre un tema cotidiano y planificación conjunta.', 'Oral practice in 3 parts: self-introduction, discussion on a daily topic, and joint planning.')}</td>
              </tr>
              <tr>
                <td>📔 {pick('Tagebuch (Diario)', 'Tagebuch (Diary)')} <b>25</b></td>
                <td>{pick('Redacción libre diaria en alemán con corrección gramatical detallada frase a frase y recomendación de lección.', 'Daily free writing in German with detailed sentence-by-sentence grammar correction and lesson recommendations.')}</td>
              </tr>
              <tr>
                <td>📓 {pick('Cuaderno de notas', 'Notebook')} <b>15</b></td>
                <td>{pick('Tus propios apuntes organizados por lección con fotografías adjuntas y ejemplos de uso.', 'Your personal notes organized by lesson with attached photos and usage examples.')}</td>
              </tr>
            </tbody>
          </table>

          <p className="muted" style={{ marginTop: 12 }}>
            {pick(
              'En los ejercicios con pistas (Ahorcado, der / die / das, Kasus Trainer, Escribir, Traducir y La palabra que falta), las monedas se van reduciendo con cada pista gastada, pero siempre te llevas al menos 1 moneda al acertar.',
              'In exercises with hints (Hangman, der / die / das, Kasus Trainer, Typing, Translating, and Missing Word), coins decrease with each hint used, but you will always earn at least 1 coin when you get it right.'
            )}
          </p>
        </Bloque>

        <Bloque titulo={pick('👑 Las coronas y los desbloqueos', '👑 Crowns and unlocks')}>
          <p>
            {pick(
              'A medida que avanzas en el aprendizaje desbloqueas elementos exclusivos para personalizar a Felix:',
              'As you progress in your learning, you unlock exclusive items to customise Felix:'
            )}
          </p>
          <ul className="cf-lista">
            <li>
              <strong>👑 {pick('Coronas (Kronen)', 'Crowns (Kronen)')}:</strong>{' '}
              {pick(
                'Ganas 1 corona por cada lección completada al 100% en sus tres áreas (Gramática, Vocabulario y Comunicación). Las coronas desbloquean la colección de la realeza en la tienda de Felix (corona real, tiara, cetro, orbe, capa real, túnica de rey, vestido de reina, monóculo, zapatillas de cristal...).',
                'You earn 1 crown for each lesson completed to 100% across all three areas (Grammar, Vocabulary, and Communication). Crowns unlock the royal collection in Felix’s shop (royal crown, tiara, sceptre, orb, royal cape, king’s robe, queen’s gown, monocle, glass slippers...).'
              )}
            </li>
            <li>
              <strong>✨ {pick('Auras y efectos de partículas', 'Particle auras & effects')}:</strong>{' '}
              {pick(
                'Se desbloquean alcanzando hitos de racha de días seguidos (lluvia de estrellas, chispas doradas, burbujas flotantes...).',
                'Unlocked by achieving day streak milestones (stardust, golden sparks, floating bubbles...).'
              )}
            </li>
            <li>
              <strong>🏞️ {pick('Fondos y escenarios', 'Backgrounds & scenes')}:</strong>{' '}
              {pick(
                'Los fondos para la habitación de Felix (Pradera, Playa, Desierto, Glaciar de hielo, Aula de clase, Espacio exterior) se compran con las monedas acumuladas.',
                'Backgrounds for Felix’s room (Meadow, Beach, Desert, Ice glacier, Classroom, Outer space) are purchased with your accumulated coins.'
              )}
            </li>
            <li>
              <strong>🏷️ {pick('Nombre de Felix', 'Felix’s name')}:</strong>{' '}
              {pick(
                'Si quieres cambiarle el nombre a tu mascota zorro, puedes hacerlo desde su panel por 100 monedas.',
                'If you want to change your pet fox’s name, you can do so in his panel for 100 coins.'
              )}
            </li>
          </ul>
        </Bloque>

        <Bloque titulo={pick('📊 De dónde sale cada porcentaje', '📊 Where each percentage comes from')}>
          <p>
            {pick(
              'Ninguno baja nunca. Los tres cuentan aciertos acumulados: fallar no resta, solo no suma. Las tres áreas están perfectamente equilibradas a 240 aciertos por lección para llegar al 100 %. El progreso total de una lección es la media de sus tres partes.',
              'None of them ever goes down. All three count accumulated hits: missing does not subtract, it just does not add. All three areas are perfectly balanced to 240 hits per lesson to reach 100%. A lesson’s total progress is the average of its three parts.'
            )}
          </p>
          <ul className="cf-lista">
            <li>
              <strong>{pick('Vocabulario', 'Vocabulary')}:</strong>{' '}
              {pick(
                '120 palabras × 2 aciertos = 240 aciertos. Cada palabra pide dos aciertos para consolidarse. La barra de la lección y la del mazo dicen siempre lo mismo.',
                '120 words × 2 hits = 240 hits. Each word requires two hits to consolidate. The lesson bar and the deck bar always agree.'
              )}
            </li>
            <li>
              <strong>{pick('Gramática', 'Grammar')}:</strong>{' '}
              {pick(
                '8 reglas × 30 aciertos = 240 aciertos. Cada regla pide 30 aciertos para llenarse, avanzando exactamente a la par que el vocabulario.',
                '8 rules × 30 hits = 240 hits. Each rule requires 30 hits to fill up, advancing at the exact same pace as vocabulary.'
              )}
            </li>
            <li>
              <strong>Kommunikation:</strong>{' '}
              {pick(
                '8 funciones × 30 aciertos = 240 aciertos. Cada apartado pide 30 respuestas acertadas en sus diálogos y turnos de conversación.',
                '8 functions × 30 hits = 240 hits. Each section needs 30 correct answers across its dialogues and conversation turns.'
              )}
            </li>
          </ul>
          <p className="muted">
            {pick(
              'En la lección inicial (Start: Wie geht\'s?) hay 150 palabras (300 aciertos), 12 reglas (360 aciertos) y 12 funciones (360 aciertos). Fallar no resta porcentaje: solo hace que esa palabra o regla vuelva a salirte antes.',
              'In the intro lesson (Start: Wie geht\'s?) there are 150 words (300 hits), 12 rules (360 hits) and 12 functions (360 hits). Missing does not subtract percentage: it just brings that word or rule back to you sooner.'
            )}
          </p>
        </Bloque>

        <Bloque titulo={pick('🏆 ¿Qué significa "Dominadas"?', '🏆 What does "Mastered" mean?')}>
          <p>
            {pick(
              'En los juegos (der / die / das, Kasus Trainer y Traducir frases) verás dos cifras: "empezadas" y "dominadas". No son lo mismo:',
              'In the games (der / die / das, Kasus Trainer and Translating) you see two numbers: "started" and "mastered". They are not the same:'
            )}
          </p>
          <ul className="cf-lista">
            <li>
              <strong>{pick('Empezadas', 'Started')}:</strong>{' '}
              {pick(
                'El total de elementos que has practicado al menos una vez.',
                'The total items you have encountered and answered at least once.'
              )}
            </li>
            <li>
              <strong>{pick('der / die / das y Vocabulario', 'der / die / das and Vocabulary')}:</strong>{' '}
              {pick(
                'Una palabra se considera dominada cuando alcanza nivel 3 o más de fuerza en repetición espaciada (al menos 3 aciertos netos). Fallar reduce la fuerza, por lo que no basta con acertarla una vez de casualidad.',
                'A word is mastered when it reaches strength level 3 or higher in spaced repetition (at least 3 net hits). Missing lowers its strength, so guessing right once does not master it.'
              )}
            </li>
            <li>
              <strong>Kasus Trainer:</strong>{' '}
              {pick(
                'Una frase está dominada cuando alcanza fuerza 3 o más (al menos 3 aciertos netos donde los aciertos superan a los fallos).',
                'A sentence is mastered when it reaches strength level 3 or higher (at least 3 net hits where correct answers exceed misses).'
              )}
            </li>
            <li>
              <strong>{pick('Traducir frases', 'Translate sentences')}:</strong>{' '}
              {pick(
                'Una frase está dominada cuando alcanza fuerza 2 o más (incluso usando pistas, y aceptando respuestas con una coincidencia del 90% o superior con la original).',
                'A phrase is mastered when it reaches strength level 2 or higher (including using hints, and accepting answers with 90% or higher match with the original).'
              )}
            </li>
          </ul>
          <p className="muted">
            {pick(
              'El porcentaje que ves en la tarjeta refleja tus elementos dominados frente al total de más de 2.000 palabras y frases del temario.',
              'The percentage shown on each card reflects your mastered items out of the 2,000+ words and phrases in the curriculum.'
            )}
          </p>
        </Bloque>

        <Bloque titulo={pick('🎨 Los colores de las palabras', '🎨 The colours on the words')}>
          <p>
            {pick(
              'Cada palabra lleva un punto de color que se pinta solo al usar las tarjetas. El sentido en que la practicas decide hasta dónde puede llegar:',
              'Every word has a colour dot that paints itself when you use the flashcards. The direction you practise in decides how far it can get:'
            )}
          </p>
          <ul className="cf-lista">
            <li>
              <span className="cf-punto" style={{ background: '#ef4444' }} />{' '}
              {pick('la has fallado.', 'you got it wrong.')}
            </li>
            <li>
              <span className="cf-punto" style={{ background: '#f59e0b' }} />{' '}
              {pick(
                'la reconoces. Es el techo si practicas alemán → tu idioma.',
                'you recognise it. That is the ceiling if you practise German → your language.'
              )}
            </li>
            <li>
              <span className="cf-punto" style={{ background: '#10b981' }} />{' '}
              {pick(
                'te sale sola en alemán. Solo se gana en el sentido difícil, tu idioma → alemán.',
                'it comes out by itself in German. Only earned the hard way, your language → German.'
              )}
            </li>
          </ul>
          <p className="muted">
            {pick(
              'Un verde ganado no lo tira un fallo reconociéndola: que te salga sola sigue siendo cierto. Fallar produciéndola sí baja un escalón.',
              'A green you earned is not undone by missing it on the easy side: it still comes out by itself. Missing it on the producing side does drop it one step.'
            )}
          </p>
        </Bloque>

        <Bloque titulo={pick('🪙 Monedas y XP', '🪙 Coins and XP')}>
          <ul className="cf-lista">
            <li>
              {pick(
                'Paga lo que el ejercicio te exige: 1 si eliges entre opciones que ya tienes delante, 2 si te dan las piezas y las colocas (ordenar, anagrama, ahorcado) y 3 si lo escribes de cero (escribir la palabra, traducir la frase).',
                'It pays what the exercise demands of you: 1 if you pick from options already in front of you, 2 if you are given the pieces and place them (sentence order, anagram, hangman) and 3 if you write it from scratch (write the word, translate the sentence).'
              )}
            </li>
            <li>
              {pick(
                'Cada pista gastada resta una moneda. Con todas gastadas ya no paga, pero el acierto cuenta igual para el progreso, la XP y la racha.',
                'Each hint you spend costs one coin. With all of them spent it stops paying, but the hit still counts for progress, XP and the streak.'
              )}
            </li>
            <li>
              {pick(
                'Fallar no quita nada. Y las tarjetas pagan 1 aunque parezcan duras: allí la nota te la pones tú.',
                'Missing costs nothing. And flashcards pay 1 even though they feel hard: there you are the one grading yourself.'
              )}
            </li>
            {!SIN_IA && (
              <li>
                {pick(
                  'Las cosas largas pagan más: una entrada del diario 25, unos apuntes 15, una parte del examen hasta 30 — y esa en proporción a lo que aciertes, que terminarla a boleo no da nada.',
                  'Longer things pay more: a diary entry 25, a set of notes 15, an exam part up to 30 — and that one in proportion to what you get right, because finishing it at random pays nothing.'
                )}
              </li>
            )}
            <li>
              {pick(
                'La XP es otra cosa: 10 por acierto, 2 por fallo, y 5 de propina si la tanda pasa del 90 %. Es la que sube de nivel.',
                'XP is a different thing: 10 per hit, 2 per miss, and 5 extra if the round beats 90 %. That is what levels you up.'
              )}
            </li>
            <li>
              {pick(
                'Y hay dos propinas gordas: 10 monedas por cada día que sumas a la racha, y otras 10 por cada nivel que subes.',
                'And there are two big bonuses: 10 coins for each day you add to the streak, and another 10 for every level you gain.'
              )}
            </li>
          </ul>
          <p className="muted">
            {pick(
              'Las monedas se gastan en la ropa, complementos, animales de compañía y fondos / escenarios de Felix. No sirven para nada más, a propósito.',
              'Coins are spent on Felix’s clothes, accessories, companion animals, and backgrounds / scenes. They are good for nothing else, on purpose.'
            )}
          </p>
        </Bloque>

        <Bloque titulo={pick('⭐ La racha y los congeladores', '⭐ The streak and the freezes')}>
          <p>
            {pick(
              'La racha cuenta días seguidos con al menos un ejercicio. Empiezas con dos congeladores ❄️.',
              'The streak counts days in a row with at least one exercise. You start with two freezes ❄️.'
            )}
          </p>
          <ul className="cf-lista">
            <li>
              {pick(
                'Cada día que te saltas gasta un congelador solo, y la racha sigue.',
                'Each day you skip spends one freeze automatically, and the streak carries on.'
              )}
            </li>
            <li>
              {pick(
                'Con tres congeladores puedes faltar hasta tres días. Al cuarto, vuelta a empezar.',
                'With three freezes you can miss up to three days. On the fourth, back to the start.'
              )}
            </li>
            <li>
              {pick(
                'Cada 5 días seguidos te dan uno, hasta un máximo de tres.',
                'Every 5 days in a row you get one back, up to three.'
              )}
            </li>
          </ul>
        </Bloque>

        <Bloque titulo={pick('💡 Las pistas', '💡 The hints')}>
          <p>
            {pick(
              'El juego de der / die / das y el Kasus Trainer dan pista, y ninguna dice el artículo:',
              'The der / die / das game and the Kasus Trainer both offer a hint, and neither gives you the article:'
            )}
          </p>
          <ul className="cf-lista">
            <li>
              {pick(
                'Si la palabra tiene una terminación que manda (-ung, -chen, -keit…), la pista es esa regla, que sirve para las otras doscientas palabras que acaban igual.',
                'If the word has an ending that decides (-ung, -chen, -keit…), the hint is that rule — which works for the other two hundred words ending the same way.'
              )}
            </li>
            <li>
              {pick(
                'Si no hay regla —cuatro de cada cinco veces—, te descarta uno de los artículos y te deja la duda en dos.',
                'If there is no rule — four times out of five — it rules one article out and leaves you choosing between two.'
              )}
            </li>
          </ul>
          <p className="muted">
            {pick(
              'Solo están las terminaciones que se cumplen de verdad, comprobadas una a una contra todo el vocabulario oficial de los niveles A1 y A2 de la app. Una pista que falla es peor que no tenerla.',
              'Only endings that really hold are included, checked one by one against all official A1 and A2 vocabulary in the app. A hint that fails is worse than no hint.'
            )}
          </p>
        </Bloque>

        <Bloque titulo={pick('🔊 Audio y síntesis de voz', '🔊 Audio and speech synthesis')}>
          <p>
            {pick(
              'Los audios de examen (Hören), lecturas y pronunciaciones de palabras y frases utilizan el sintetizador de voz (TTS) en alemán nativo del navegador.',
              'Exam audio (Hören), readings, and vocabulary/phrase pronunciations use native German speech synthesis (TTS) provided by your browser.'
            )}
          </p>
          <ul className="cf-lista">
            <li>
              {pick(
                'En ordenador, Windows, macOS y Linux ofrecen voces neuronales fluidas y nítidas de forma automática.',
                'On desktop, Windows, macOS, and Linux provide natural, crisp speech voices automatically.'
              )}
            </li>
            <li>
              {pick(
                'En teléfonos móviles, la app aprovecha la voz en alemán instalada en el sistema operativo. Si no se oye, asegúrate de tener el paquete de voz en alemán descargado en los ajustes de idioma de tu dispositivo.',
                'On mobile phones, the app utilizes the German voice installed on your OS. If no sound plays, ensure you have the German speech pack downloaded in your device’s language settings.'
              )}
            </li>
          </ul>
        </Bloque>

        <Bloque titulo={pick('💾 Dónde se guarda tu progreso', '💾 Where your progress is kept')}>
          <p>
            {pick(
              'Se guarda solo, sin botón de guardar, en el navegador con el que abres la app. No viaja a ningún sitio.',
              'It saves itself, with no save button, in the browser you open the app with. It travels nowhere.'
            )}
          </p>
          <ul className="cf-lista">
            <li>
              {pick(
                'Cada navegador es un mundo: lo de Chrome no está en Firefox aunque sea el mismo ordenador.',
                'Each browser is its own world: what is in Chrome is not in Firefox, even on the same computer.'
              )}
            </li>
            <li>
              {pick(
                'Borrar los datos del navegador se lo lleva todo. En ventana privada se borra al cerrarla.',
                'Clearing your browser data wipes it. In a private window it is gone when you close it.'
              )}
            </li>
            <li>
              {pick(
                'Aquí abajo tienes Exportar e Importar: eso sí es una copia de verdad (incluyendo tus apuntes y fotografías), y sirve para llevártelo a otro ordenador o guardarlo como respaldo seguro.',
                'Export and Import are right below: that is a real backup (including your notebook notes and photos), and it is how you move it to another computer or keep a safe backup.'
              )}
            </li>
          </ul>
        </Bloque>
      </div>
    </div>
  );
}
