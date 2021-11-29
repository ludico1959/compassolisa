const Chance = require('chance');

const dataFaker = new Chance();

Object.assign(dataFaker, {
  string: () => new Chance().string({ alpha: true }),
  array: (array) => array[dataFaker.integer({ min: 0, max: array.length - 1 })]
});

module.exports = dataFaker;
