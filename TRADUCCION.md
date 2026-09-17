# Traducir la app a otro idioma

Todo lo que hay que saber para añadir un idioma sin ir descubriendo los
problemas pantalla por pantalla. Está escrito después de hacer el inglés, así
que los sustos que vienen aquí ya han pasado de verdad.

---

## 1. La regla de oro

> **El alemán NUNCA se traduce. Todo lo demás, sí.**

El alumno está aprendiendo alemán: las frases de ejemplo, los enunciados del
libro, los nombres de las reglas (*Personalpronomen*, *Wechselpräpositionen*) y
los bloques de vocabulario (*Zahlen 0–20*) son el material de estudio. Si los
traduces, rompes la app.

Lo que sí se traduce es todo lo que **explica** ese alemán: la glosa de cada
palabra, la traducción de cada frase, el por-qué de cada respuesta, la teoría de
gramática y la interfaz entera.

---

## 2. Las dos capas

Hay dos sistemas de traducción y **no son intercambiables**.

| | `src/lib/i18n.js` | `src/lib/contenido/` |
|---|---|---|
| Qué traduce | La **interfaz**: botones, títulos, avisos | El **contenido**: el libro, la teoría, el vocabulario, los ejercicios |
| Cómo se llama | `t('clave')`, `pick(es, en)` | `tc(texto)` |
| Cómo es la clave | Un id inventado: `'voc.deckStats'` | El propio castellano |
| Cuántas hay | ~700 escritas a mano | ~9.300 |
| Admite huecos | Sí: `t('x', { n: 5 })` | No |

**Cuál usar:** si el texto lo escribiste tú como parte de la app (un botón, un
aviso, un enunciado), va en `i18n.js`. Si es material de estudio (una palabra
del libro, la explicación de una regla, la traducción de una frase), va por
`tc()`.

`tc()` devuelve el original si no encuentra traducción. Eso es a propósito: más
vale leer una frase en castellano que ver un hueco o una clave suelta.

---

## 3. Cómo añadir un idioma

1. **Crea el diccionario.** Copia `src/lib/contenido/en.js` a `fr.js` y traduce
   los valores. Las claves (el castellano) **no se tocan nunca**.

2. **Regístralo** en `src/lib/contenido/index.js`:

   ```js
   import { FR } from './fr.js';
   const IDIOMAS = { en: EN, fr: FR };
   ```

3. **Añade el idioma a la interfaz** en `src/lib/i18n.js`:
   - mete `'fr'` en `setLang()` y en `detect()`
   - añádelo a `LANGS` (para el selector)
   - en `langName()`, devuelve el nombre **en castellano** (`'francés'`): los
     prompts de la IA están escritos en castellano
   - en `localeFecha()`, devuelve el locale (`'fr-FR'`)
   - en el diccionario `DICT`, cada clave pasa de `[es, en]` a `[es, en, fr]`, y
     `t()` tiene que leer el índice que toque

4. **Mide.** `node scripts/extraer-textos.mjs` te dice qué falta.

5. **Traduce por lotes** con las herramientas de la sección 6.

---

## 4. Dónde se traduce: en la frontera, no al pintar

La traducción se aplica **en el sitio donde nace el dato**, no en las cuarenta
pantallas que lo enseñan. Si añades contenido nuevo, mételo por uno de estos
sitios y ya queda traducido en todas partes:

| Contenido | Frontera |
|---|---|
| El libro (Kursbuch) | `lektionTopic()`, `lektionDecks()`, `lektionKommunikation()`, `lektionWoerter()`, `bandLabel()` en `src/lib/kursbuch/index.js` |
| Plantillas de ejercicios del libro | `framesDeRegla()` en `src/lib/kursbuch/frames/_motor.js` |
| Gramática general | `traducirTopic()` en `src/topics/index.js` |
| Vocabulario de arranque | `traducirDeck()` en `src/lib/vocab.js` |
| Examen | `teiles()` y `fallen()` en `src/lib/pruefung.js` |
| Preguntas del zorro | `preguntaFuchs()` en `src/lib/fuchs.js` |
| Piezas de teoría (tablas, ejemplos) | `tcTabla()`, `tcEjemplos()`, `tcLista()`, `tcMas()` en `src/lib/contenido/index.js` |

**Regla:** si te ves escribiendo `tc()` dentro de un `.jsx`, casi siempre es
señal de que falta un accesor en `lib/`.

---

## 5. Los seis errores que dan problemas

Ninguno de estos lo pilla el build. Todos han pasado.

### 5.1 Una constante de módulo congela el idioma

```js
const SYSTEM = `... ${idiomaAlumno()} ...`;   // ✗ se evalúa al cargar
const SYSTEM = () => `... ${idiomaAlumno()} ...`;  // ✓ al llamar
```

Si el texto depende del idioma, tiene que ser **función**. Si es constante, se
fija al cargar la página y cambiar de idioma no hace nada hasta recargar.

Vale igual para arrays de la interfaz: `VOCAB_MODES` era constante y pasó a ser
`vocabModes()`.

### 5.2 Las frases que se arman por trozos

Muchos ejercicios construyen la frase a partir de piezas:

```js
translation: `${cap(subj.es)} ${v.es} ${v.midEs}.`   // ✗
```

Eso no se puede traducir como unidad: hay **miles de combinaciones**. Se parte
en dos: el molde va a `i18n.js` con huecos, y cada pieza pasa por `tc()`.

```js
translation: t('tp.glossPlain', { s: cap(tc(subj.es)), v: tc(v.es), m: tc(v.midEs) })
```

La gramática del idioma del alumno (conjugar el auxiliar, por ejemplo) va por
persona en `i18n.js` (`tp.perfAux.ich`), no por diccionario: en castellano son
cinco formas y en inglés dos.

### 5.3 Campos llamados `es` que llevan alemán

En la teoría de verbos irregulares la columna izquierda es el patrón y la
derecha un ejemplo **alemán**, y el ejemplo vive en el campo `es`:

```js
{ de: 'sehen: du siehst, er sieht', es: 'Er sieht abends fern.' }
```

Son unas 20. Se declaran en el diccionario apuntando a sí mismas, para que
conste que es intencionado y no vuelvan a contarse como pendientes.

### 5.4 La IA: dos cosas, no una

- **En qué idioma escribe.** Los prompts piden "traducción", "explicación"… La
  regla vive en `SYSTEM()` (`src/lib/ai.js`), que reciben *todas* las llamadas,
  incluidas las que escribas mañana. Muchos esquemas dicen solo `"es":
  "traducción"`, sin idioma; viendo un campo llamado `es` y un prompt en
  castellano, el modelo contesta en castellano.
- **De qué idioma viene el alumno.** Los prompts decían *"para
  hispanohablantes"*. Eso cambia los errores típicos que la IA vigila: un
  inglés no confunde *ser* y *estar*. Va también por `idiomaAlumno()`.

Los resultados de la IA **no se cachean**: al cambiar de idioma, lo que ya
estaba en pantalla sigue como estaba, pero lo siguiente sale bien.

### 5.5 Las fechas

`toLocaleDateString('es')` estaba fijo en cinco sitios y el calendario decía
*Septiembre de 2026* con la app en inglés. Usa siempre `localeFecha()`.

### 5.6 Los rótulos de dirección

`DE → ES` estaba escrito a mano. Va por `codigoIdioma()`. Y las claves
`voc.deToEs` / `voc.esToDe` dicen el idioma del alumno, no "español".

---

## 6. Las herramientas

### Medir

```bash
node scripts/extraer-textos.mjs
```

Monta el contenido **dos veces**, una en cada idioma, y compara lo que vería el
alumno. No mira el diccionario: mira la app. Da dos números distintos:

- **sin traducir** — el contenido lo pide y el diccionario no lo tiene. Se
  arregla traduciendo.
- **sin cablear** — sale igual en los dos idiomas y **nunca pasó por `tc()`**.
  Eso no lo arregla ninguna traducción: es texto que no está conectado. Este
  número solo es fiable cuando el otro está a cero.

### Sacar lo que falta

```bash
node scripts/extraer-textos.mjs --pendientes 250 > pend.json
node scripts/extraer-textos.mjs --origen topics      # solo una parte
node scripts/extraer-textos.mjs --claves             # antes de fusionar
```

### Fusionar un lote

```bash
node scripts/extraer-textos.mjs --claves
python scripts/_fusionar.py lote.json
```

Avisa si una clave no casa con ningún texto real: sería trabajo tirado.

**Para textos largos**, no vuelvas a teclear el original (un acento distinto y
la clave no casa). Empareja por posición con un fichero `{"0": "traducción"}` y
el script `porindice.py` del historial, o escribe uno equivalente.

### Comprobar de verdad

El contador no basta. Monta las dos versiones y compara a ojo:

```js
import { setLang } from '../src/lib/i18n.js';
setLang('en');
// …y pinta lo que te interese
```

Así salió el fallo de la sección 7.

---

## 7. El contador mintió una vez

El detector de castellano (`pareceCastellano`) existe para decidir si una celda
de tabla está en alemán o en castellano. Busca acentos o palabras corrientes
(*el*, *la*, *de*…).

Lo estaba aplicando a **toda** la lista de pendientes. Y esta frase:

> «Textos cotidianos: correos, anuncios, carteles y foros.»

no tiene ni acentos ni ninguna de esas palabras. El contador la dio por
traducida. **424 cadenas escondidas**, media pantalla de Prüfung incluida, con
el marcador diciendo 100%.

Ahora el orden es: si el recorrido vio la cadena, sabe de qué campo viene y se
fía de eso; el detector queda solo para los trozos sueltos que `tc()` pide por
su cuenta y el recorrido no llega a ver.

**La lección:** un detector heurístico vale para desempatar casos ambiguos, no
para decidir el total.

---

## 8. Checklist

Antes de dar un idioma por terminado:

- [ ] `node scripts/extraer-textos.mjs` → **sin traducir: 0** y **sin cablear: 0**
- [ ] `npm run build` pasa
- [ ] `node scripts/revision.mjs`, `validar-plantillas.mjs`, `smoke-sesiones.mjs` pasan
- [ ] Con la app en el idioma nuevo, mirar a ojo:
  - [ ] Startseite (el saludo del zorro y el calendario de la racha)
  - [ ] Grammatik → teoría de una lección, con sus tablas y errores típicos
  - [ ] Wortschatz → un mazo, los nombres de los minijuegos y una partida entera
  - [ ] Kommunikation → las frases y su glosa
  - [ ] Prüfung → las cuatro partes, las trampas y un simulacro
  - [ ] Tagebuch → generar tema y corregir una entrada (IA)
  - [ ] Notizbuch → pasar a limpio y generar ejercicios (IA)
- [ ] Las fechas salen en el idioma correcto (racha, diario, Notizbuch, clasificación)
- [ ] Lo que escribe la IA sale en el idioma correcto **y** sus consejos de
      errores típicos son los de ese idioma, no los del castellano
