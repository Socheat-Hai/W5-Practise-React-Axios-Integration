const journalistService = require('../services/journalistService');

function list(req, res) {
  res.json(journalistService.getAll());
}

module.exports = { list };
