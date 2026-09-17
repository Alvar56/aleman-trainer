import React from 'react';
import BookNav from './BookNav.jsx';
import GrammarAsk from './GrammarAsk.jsx';
import { KURSBUCH } from '../lib/kursbuch/index.js';
import { t } from '../lib/i18n.js';

export default function Grammar({ onOpen, onPractise }) {
  return (
    <BookNav
      title="Grammatik"
      subtitle={t('gr.sub', { libro: KURSBUCH.title })}
      count={(l) => l.grammatik.length}
      unit={[t('rule'), t('rules')]}
      onOpen={(l) => onOpen('kb-' + l.id)}
      progressKey="grammatik"
      extra={<GrammarAsk niveau="A2" onPractise={onPractise} />}
    />
  );
}
