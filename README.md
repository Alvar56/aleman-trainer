# Deutsch Trainer A2–B1

App local (React + Vite) para practicar gramática alemana con juegos, corrección
razonada en español, resumen de fallos + tiempo, leaderboard y rachas estilo Duolingo.

## Arrancar

```bash
npm install
npm run dev
```

Abre http://localhost:5180

## Pasarle la app a alguien

```bash
npm run portable
```

Deja un **`Deutsch Trainer.html`** de unos 2 MB con todo dentro: se abre con
doble clic, sin servidor, sin instalar nada y sin internet. El progreso se
guarda en el navegador de quien lo abra.

Lo que ese fichero NO lleva es la IA (Felix, las noticias, corregir el diario,
generar el examen): eso necesita un servidor detrás. El resto —gramática,
vocabulario, los minijuegos, Kommunikation, la racha— funciona igual.

## Idiomas

La app está en castellano e inglés; el alemán que se practica nunca se traduce.
Para añadir un idioma (o entender cómo funciona el que hay), lee
[TRADUCCION.md](TRADUCCION.md): están la arquitectura, las herramientas de
medición y los errores que ya se han cometido una vez.

## Qué hay en la v1 (gramática)

- **Interfaz** con barra lateral (estilo panel), tema claro. Selector de "Motor de ejercicios" en la barra: Plantillas / IA Gemini / IA OpenAI.
- **Temas**: Verbos modales · Partizip II / Perfekt · sein oder haben · Preposiciones y casos · Verbos irregulares.
- **Cada tema se divide en Teoría y Ejercicios** (pestañas). La teoría explica las reglas en español con ejemplos DE→ES, una tabla resumen y los errores típicos.
- **Tipos de ejercicio**: elegir la opción correcta (3 opciones, con distractores plausibles) y ordenar la frase.
- **Siempre distinto**: cada ejercicio se genera desde plantillas con huecos + bancos de vocabulario. La sesión mezcla ejercicios nuevos con repaso automático de los conceptos donde fallas (repetición espaciada simple).
- **Corrección**: tras cada respuesta, la frase completa, su traducción al español y la explicación del porqué. Con IA activa, botón "✨ Que lo explique la IA" para una explicación más detallada y personalizada.
- **Cierre de sesión**: precisión, aciertos, tiempo, XP y repaso de todos los fallos agrupados por regla.
- **Leaderboard local**: ranking de tus mejores sesiones (precisión penalizando el tiempo).
- **Rachas**: días consecutivos, objetivo diario de XP, congeladores que perdonan un día.
- **IA integrada** (Ajustes → API key de Gemini capa gratuita o compatible OpenAI): el modo "Reto con IA" y el "Repaso inteligente" del inicio generan ejercicios nuevos al momento centrados en tus puntos débiles. Sin key, todo funciona con las plantillas.

## Estructura

```
src/
  lib/        storage (abstraída para migrar a web), streak, progress (SRS), leaderboard, settings, ai
  engine/     helpers (formato de item), generator (montaje de la sesión)
  topics/     un módulo por tema: theory + concepts + "frames" que generan ejercicios
  components/ Sidebar, Dashboard, Grammar, TopicDetail (Teoría/Ejercicios),
              Session, MultipleChoice, WordOrder, Feedback, Summary, Leaderboard, Settings
```

Añadir un tema = crear `src/topics/xxx.js` con `theory`, `concepts` y `frames`, y registrarlo en `src/topics/index.js`.

## Roadmap

- v2: sección de vocabulario (tarjetas, modo aleatorio, imágenes en vez de traducción, animaciones) e importación de Excel (p. ej. exportado de Language Reactor).
- Futuro: versión web con cuenta y progreso sincronizado (la capa `lib/storage.js` ya aísla esa parte).
