const articles = [
  { id: 1, title: 'Breaking News', content: 'Something happened today.', journalistId: 101, categoryId: 1 },
  { id: 2, title: 'Tech Update', content: 'New technology released.', journalistId: 102, categoryId: 2 },
  { id: 3, title: 'Sports Report', content: 'Team wins championship.', journalistId: 103, categoryId: 3 },
];

const categories = [
  { id: 1, name: 'Breaking News' },
  { id: 2, name: 'Technology' },
  { id: 3, name: 'Sports' },
];

const journalists = [
  { id: 101, name: 'John Doe' },
  { id: 102, name: 'Jane Smith' },
  { id: 103, name: 'Bob Johnson' },
];

let nextArticleId = 4;

module.exports = { journalists, categories, articles, getNextArticleId: () => nextArticleId++, resetArticleId: (v) => { nextArticleId = v; } };