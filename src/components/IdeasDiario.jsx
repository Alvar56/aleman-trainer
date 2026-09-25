import React, { useState } from 'react';
import { t } from '../lib/i18n.js';

// Ideas para arrancar una entrada del diario.
//
// Van en aleman porque aqui se escribe EN aleman: una sugerencia en castellano
// habria que traducirla mentalmente antes de empezar, que es justo el trabajo
// que uno esta evitando cuando no sabe por donde empezar.
//
// Eran cinco y siempre las mismas, dentro del editor. Pero cuando no sabes que
// escribir todavia no has entrado en el editor: estas mirando la lista vacia.
// Por eso el componente sale de DiaryEntry y se usa en los dos sitios.
const IDEAS = [
  'Was hast du heute gemacht?',
  'Wie war dein Wochenende?',
  'Was hat dich heute geärgert?',
  'Beschreib eine Person, die du getroffen hast.',
  'Was willst du diese Woche schaffen?',
  'Was hast du heute gegessen?',
  'Wie bist du heute zur Arbeit gekommen?',
  'Was war das Beste am heutigen Tag?',
  'Mit wem hast du heute gesprochen?',
  'Was hat dich diese Woche überrascht?',
  'Beschreib dein Zimmer.',
  'Was machst du am liebsten am Samstagmorgen?',
  'Wo warst du letzten Sommer im Urlaub?',
  'Was würdest du ändern, wenn du Zeit hättest?',
  'Erzähl von einem Film oder einer Serie, die du gesehen hast.',
  'Was nervt dich an deiner Stadt? Und was liebst du daran?',
  'Wie war dein erster Tag in Österreich?',
  'Was hast du als Kind am liebsten gespielt?',
  'Beschreib deinen Weg zur Arbeit oder zum Kurs.',
  'Was kochst du am besten? Erklär das Rezept.',
  'Was hast du dir zuletzt gekauft und warum?',
  'Wofür hast du diese Woche keine Zeit gehabt?',
  'Wenn du morgen frei hättest: was würdest du machen?',
  'Was möchtest du auf Deutsch sagen können, aber noch nicht?'
];

function barajar(n) {
  const a = [...IDEAS];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

// `onElegir` solo lo pasa el editor: alli pulsar una idea la escribe en el
// cuadro. En la lista no hay cuadro donde escribirla, asi que se quedan como
// ejemplos y no fingen ser botones.
// `accion` es un botón que se pinta a la derecha del título. Lo usa el editor
// para el "pídele un tema a la IA": antes ese botón vivía fuera, con su propia
// copia del título al lado, así que "¿No sabes por dónde empezar?" salía DOS
// veces seguidas. El título es de aquí y el hueco para el botón también.
export default function IdeasDiario({ cuantas = 5, onElegir, accion }) {
  const [ideas, setIdeas] = useState(() => barajar(cuantas));

  return (
    <div className="stack" style={{ gap: 10 }}>
      <div className="row spread" style={{ alignItems: 'center', gap: 12 }}>
        <div className="muted ideas-tit">{t('tb.ideas')}</div>
        {accion}
      </div>
      <div className="nb-chips">
        {ideas.map((i) =>
          onElegir ? (
            <button className="nb-chip voc nb-chip-clic" key={i} onClick={() => onElegir(i)}>
              {i}
            </button>
          ) : (
            <span className="nb-chip voc" key={i}>{i}</span>
          )
        )}
        <button
          className="nb-chip nb-chip-otras"
          onClick={() => setIdeas(barajar(cuantas))}
          title={t('tb.ideasMore')}
        >
          🔄
        </button>
      </div>
    </div>
  );
}
