const filosofia2017uem = require('./subjects/uem/2017/filosofia2017uem');
const filosofia2019up = require('./subjects/up/2019/filosofia2019up');
const geografia2014uem = require('./subjects/uem/2014/geografia2014uem');
const historia2014uem = require('./subjects/uem/2014/historia2014uem');
const biologia2017uem = require('./subjects/uem/2017/bilogia2017uem');
const biologia2014uem = require('./subjects/uem/2014/biologia2014uem');

const allQuestions = [
  ...filosofia2017uem,
  ...filosofia2019up,
  ...geografia2014uem,
  ...historia2014uem,
  ...biologia2017uem,
  ...biologia2014uem
];

module.exports = allQuestions;