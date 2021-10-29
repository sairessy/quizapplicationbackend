const biologia = require('./subjects/biologia');
const filosofia = require('./subjects/filosofia');

const allQuestions = [
  ...biologia,
  ...filosofia
];

module.exports = allQuestions;