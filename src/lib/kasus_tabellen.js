// Tabla de paradigmas de artículos y determinantes para Kasus Trainer.
// Define casos y opciones dinámicas para cada tipo de artículo.

export const ARTIKEL_TABELLEN = {
  bestimmt: {
    m: { Nominativ: 'der', Akkusativ: 'den', Dativ: 'dem' },
    f: { Nominativ: 'die', Akkusativ: 'die', Dativ: 'der' },
    n: { Nominativ: 'das', Akkusativ: 'das', Dativ: 'dem' },
    p: { Nominativ: 'die', Akkusativ: 'die', Dativ: 'den' },
    options: ['der', 'die', 'das', 'den', 'dem']
  },
  ein: {
    m: { Nominativ: 'ein', Akkusativ: 'einen', Dativ: 'einem' },
    f: { Nominativ: 'eine', Akkusativ: 'eine', Dativ: 'einer' },
    n: { Nominativ: 'ein', Akkusativ: 'ein', Dativ: 'einem' },
    options: ['ein', 'eine', 'einen', 'einem', 'einer']
  },
  kein: {
    m: { Nominativ: 'kein', Akkusativ: 'keinen', Dativ: 'keinem' },
    f: { Nominativ: 'keine', Akkusativ: 'keine', Dativ: 'keiner' },
    n: { Nominativ: 'kein', Akkusativ: 'kein', Dativ: 'keinem' },
    p: { Nominativ: 'keine', Akkusativ: 'keine', Dativ: 'keinen' },
    options: ['kein', 'keine', 'keinen', 'keinem', 'keiner']
  },
  mein: {
    m: { Nominativ: 'mein', Akkusativ: 'meinen', Dativ: 'meinem' },
    f: { Nominativ: 'meine', Akkusativ: 'meine', Dativ: 'meiner' },
    n: { Nominativ: 'mein', Akkusativ: 'mein', Dativ: 'meinem' },
    p: { Nominativ: 'meine', Akkusativ: 'meine', Dativ: 'meinen' },
    options: ['mein', 'meine', 'meinen', 'meinem', 'meiner']
  },
  dein: {
    m: { Nominativ: 'dein', Akkusativ: 'deinen', Dativ: 'deinem' },
    f: { Nominativ: 'deine', Akkusativ: 'deine', Dativ: 'deiner' },
    n: { Nominativ: 'dein', Akkusativ: 'dein', Dativ: 'deinem' },
    p: { Nominativ: 'deine', Akkusativ: 'deine', Dativ: 'deinen' },
    options: ['dein', 'deine', 'deinen', 'deinem', 'deiner']
  },
  sein: {
    m: { Nominativ: 'sein', Akkusativ: 'seinen', Dativ: 'seinem' },
    f: { Nominativ: 'seine', Akkusativ: 'seine', Dativ: 'seiner' },
    n: { Nominativ: 'sein', Akkusativ: 'sein', Dativ: 'seinem' },
    p: { Nominativ: 'seine', Akkusativ: 'seine', Dativ: 'seinen' },
    options: ['sein', 'seine', 'seinen', 'seinem', 'seiner']
  },
  ihr: {
    m: { Nominativ: 'ihr', Akkusativ: 'ihren', Dativ: 'ihrem' },
    f: { Nominativ: 'ihre', Akkusativ: 'ihre', Dativ: 'ihrer' },
    n: { Nominativ: 'ihr', Akkusativ: 'ihr', Dativ: 'ihrem' },
    p: { Nominativ: 'ihre', Akkusativ: 'ihre', Dativ: 'ihren' },
    options: ['ihr', 'ihre', 'ihren', 'ihrem', 'ihrer']
  },
  unser: {
    m: { Nominativ: 'unser', Akkusativ: 'unseren', Dativ: 'unserem' },
    f: { Nominativ: 'unsere', Akkusativ: 'unsere', Dativ: 'unserer' },
    n: { Nominativ: 'unser', Akkusativ: 'unser', Dativ: 'unserem' },
    p: { Nominativ: 'unsere', Akkusativ: 'unsere', Dativ: 'unseren' },
    options: ['unser', 'unsere', 'unseren', 'unserem', 'unserer']
  },
  euer: {
    m: { Nominativ: 'euer', Akkusativ: 'euren', Dativ: 'eurem' },
    f: { Nominativ: 'eure', Akkusativ: 'eure', Dativ: 'eurer' },
    n: { Nominativ: 'euer', Akkusativ: 'euer', Dativ: 'eurem' },
    p: { Nominativ: 'eure', Akkusativ: 'eure', Dativ: 'euren' },
    options: ['euer', 'eure', 'euren', 'eurem', 'eurer']
  }
};
