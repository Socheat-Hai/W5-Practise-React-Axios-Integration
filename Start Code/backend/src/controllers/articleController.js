const articleService = require('../services/articleService');

function list(req, res) {
  const articles = articleService.getAll(res.query);
  res.json(articles);
}

function getById(req, res) {
  const article = articleService.getById(parseInt(req.params.id));
  if (!article) {
    return res.status(404).json({ error: 'Article not found' });
  }
  res.json(article);
}

function create(req, res) {
  const { title, content, journalistId, categoryId } = req.body;

  if (!title || !content || !journalistId || !categoryId) {
    return res.status(400).json({ error: 'All fields (title, content, journalistId, categoryId) are required' });
  }

  const article = articleService.create(req.body);
  res.status(201).json(article);
}

function update(req, res) {
  const { title, content, journalistId, categoryId } = req.body;

  const article = articleService.update(parseInt(req.params.id), req.body);

  if (!title || !content || !journalistId || !categoryId) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (!article) 
    return res.status(404).json({ error: 'Article not found' });

  res.json(article);
}

function remove(req, res) {
  const deleted = articleService.remove(parseInt(req.params.id));

  if (!deleted) return res.status(404).json({ error: 'Article not found' });
  res.status(204).send();
}

function getByCategory(req, res) {
  const articles = articleService.getByCategory(req.params.id);
  res.json(articles);
}


function getByJournalist(req, res) {
  const articles = articleService.getByJournalist(req.params.id);
  res.json(articles);
}


module.exports = {list, getById, create, update, remove, getByCategory, getByJournalist };
