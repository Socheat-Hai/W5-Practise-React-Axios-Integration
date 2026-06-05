# Roadmap — API Integration for Articles

## Phase 0 — Project Setup

- [x] install `axios` and `react-router-dom` (if missing)
- [ ] Verify Express.js API is running at `http://localhost:5000`
- [ ] Confirm `main.jsx` wraps `<App />` inside `<BrowserRouter>`
- [ ] Confirm `App.jsx` defines routes for `/`, `/add`, `/update/:id`, `/articles/:id`
- [ ] Create `context/` folder with `mission.md`, `requirement.md`, `roadmap.md`

---

## Phase 1 — Display All Articles (Q1)

**Goal:** Fetch and render a list of articles on the home page.

### Tasks

- [ ] Import `useEffect`, `useState` from React in `ArticleList.jsx`
- [ ] Import `axios` and declare `API = 'http://localhost:5000/articles'`
- [ ] Initialize `articles` state as an empty array
- [ ] Call `axios.get(API)` inside a `useEffect` on mount
- [ ] On success: `setArticles(res.data)`
- [ ] On error: `console.error(err)`
- [ ] Map over `articles` state and render each article's title, journalistId, and categoryId
- [ ] Add navigation links (`<Link to="/">`, `<Link to="/add">`)
- [ ] Verify page loads and displays articles from the API

---

## Phase 2 — View Article Details (Q2)

**Goal:** Show full article content on a dynamic route `/articles/:id`.

### Tasks

- [ ] Import `useParams` from react-router-dom in `ArticleViewer.jsx`
- [ ] Extract `id` from URL params: `const { id } = useParams()`
- [ ] Add `loading` and `error` state alongside `article` state
- [ ] Call `axios.get(\`${API}/${id}\`)` inside `useEffect` with `[id]` dependency
- [ ] On success: set article data, set loading to false
- [ ] On error: set error message, set loading to false
- [ ] Render loading, error, and "no article" guard clauses
- [ ] Display `article.title`, `article.content`, `article.journalistId`, `article.categoryId`
- [ ] Add navigation link back to home page
- [ ] Verify clicking "View" on an article navigates and displays details

---

## Phase 3 — Add New Article (Q3)

**Goal:** Submit a form to create a new article via `POST /articles`.

### Tasks

- [ ] Import `useNavigate` from react-router-dom in `CreateArticleForm.jsx`
- [ ] Initialize `form` state with fields: `title`, `content`, `journalistId`, `categoryId`
- [ ] Implement `handleChange` updating the corresponding form field via `e.target.name`
- [ ] Implement `handleSubmit`:
  - [ ] Call `e.preventDefault()`
  - [ ] Call `await axios.post(API, form)`
  - [ ] On success: navigate to `'/'`
  - [ ] On error: `console.error(err)`
- [ ] Wire inputs with `name`, `value`, `onChange`, and `required` attributes
- [ ] Use `<textarea>` for content
- [ ] Add navigation links
- [ ] Verify submitting the form creates an article and redirects to the list

---

## Phase 4 — Update Existing Article (Q4)

**Goal:** Prefill a form with existing article data and submit updates.

### Tasks

- [ ] Import `useParams` and `useNavigate` in `UpdateArticleForm.jsx`
- [ ] Extract `id` from URL params
- [ ] Initialize `form` state with same four fields
- [ ] Inside `useEffect` with `[id]` dependency:
  - [ ] Call `axios.get(\`${API}/${id}\`)`
  - [ ] On success: `setForm(res.data)` to prefill the form
- [ ] Implement `handleChange` (same pattern as create)
- [ ] Implement `handleSubmit`:
  - [ ] Call `e.preventDefault()`
  - [ ] Call `await axios.put(\`${API}/${id}\`, form)`
  - [ ] On success: navigate to `'/'`
  - [ ] On error: `console.error(err)`
- [ ] Wire inputs same as create form
- [ ] Add navigation links
- [ ] Verify the form prefills and submitting updates the article

---

## Phase 5 — Delete Article (bonus, in ArticleList)

**Goal:** Remove an article and refresh the list without a page reload.

### Tasks

- [ ] Implement `deleteArticle(id)` in `ArticleList.jsx`
- [ ] Call `await axios.delete(\`${API}/${id}\`)`
- [ ] On success: call `fetchArticles()` to re-fetch the list
- [ ] Wire the Delete button's `onClick`
- [ ] Verify deleting an article removes it from the displayed list

---

## Phase 6 — Reflection

- [ ] Answer: How did `useEffect()` and axios help separate logic from UI?
- [ ] Answer: What state challenges did you face managing form input and API response?
- [ ] Answer: How does REST structure help React developers write cleaner frontend code?

---

## Phase 7 — Polish & Verify

- [ ] Run `npm run lint` — fix any ESLint warnings or errors
- [ ] Run `npm run build` — ensure production build succeeds
- [ ] Confirm all navigation flows work: list → view → back, list → add → redirect, list → update → redirect
- [ ] Confirm delete refreshes the list correctly
