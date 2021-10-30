const biologia = require('./subjects/biologia');
const filosofia = require('./subjects/filosofia');
const historia = require('./subjects/historia');
const geografia = require('./subjects/geografia');

const allQuestions = [
  ...biologia,
  ...filosofia,
  ...historia,
  ...geografia
];

module.exports = allQuestions;