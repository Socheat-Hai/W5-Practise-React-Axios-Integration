const { categories } = require('../data/data');


function getAll() {
  return categories;
}

module.exports = { getAll };
