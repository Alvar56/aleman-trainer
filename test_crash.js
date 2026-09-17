const { renderToString } = require('react-dom/server');
const React = require('react');

// Mock components
function ClozeTest({ item }) {
  const { clozeText = '', clozeAnswers = [], clozeChoices = [] } = item;
  const numGaps = clozeAnswers.length;
  const parts = clozeText.split('___');
  return React.createElement('div', null, parts.length);
}

const itemCloze = {
  type: 'cloze',
  clozeText: 'Gestern bin ich in ___ Stadt gegangen.',
  clozeAnswers: ['die']
};

const itemOpen = {
  type: 'open',
  sentence: 'Responde'
};

console.log(renderToString(React.createElement(ClozeTest, { item: itemCloze })));
