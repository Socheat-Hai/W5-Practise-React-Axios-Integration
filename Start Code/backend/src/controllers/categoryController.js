const categoryService = require('../services/categoryService');

function list(req, res) {
  res.json(categoryService.getAll());
}

module.exports = { list };
