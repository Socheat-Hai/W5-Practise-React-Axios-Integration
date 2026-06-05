const { articles, getNextArticleId } = require('../data/data');

function getAll(query = {}) {
  let result = [...articles];
  const { journalistId, categoryId } = query;

  if (journalistId) {
    result = result.filter(a => a.journalistId === parseInt(journalistId));
  }
  if (categoryId) {
    result = result.filter(a => a.categoryId === parseInt(categoryId));
  }

  return result;
}

function getById(id) {
  return data.find(a => a.id === id) || null;
}

function create(articleData) {
  const article = { id: nextId++, ...articleData };
  data.push(article);
  return article;
}

function update(id, articleData) {
  const idx = data.findIndex(a => a.id === id);
  if (idx === -1) return null;

  articles[index] = {
    id,
    title: data.title,
    content: data.content,
    journalistId: parseInt(data.journalistId),
    categoryId: parseInt(data.categoryId),
  };

}

function remove(id) {
  const index = articles.findIndex(a => a.id === id);
  if (index === -1) return false;

  articles.splice(index, 1);
  return true;
}

function getByJournalist(journalistId) {
  return articles.filter(a => a.journalistId === parseInt(journalistId));
}

function getByCategory(categoryId) {
  return articles.filter(a => a.categoryId === parseInt(categoryId));
}

module.exports = { getAll, getById, create, update, remove, getByJournalist, getByCategory };
