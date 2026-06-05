# Requirements

| # | Feature | Method | Endpoint | Component |
|---|---------|--------|----------|-----------|
| 1 | Display all articles | GET | `/articles` | `ArticleList.jsx` |
| 2 | View article details | GET | `/articles/:id` | `ArticleViewer.jsx` |
| 3 | Create a new article | POST | `/articles` | `CreateArticleForm.jsx` |
| 4 | Update an article | PUT | `/articles/:id` | `UpdateArticleForm.jsx` |
| 5 | Delete an article | DELETE | `/articles/:id` | `ArticleList.jsx` |

**Fields:** `title`, `content`, `journalistId`, `categoryId`

**Tech stack:** React 19, Vite, react-router-dom, axios, REST API at `http://localhost:5000`
