# EXERCISE 2 – API Integration: Filter Articles by Journalist & Category

## Goals
- Use dropdown selections (`<select>`) to trigger filtered API requests
- Understand sub-resource routes in REST (`/journalists/:id/articles`, etc.)
- Dynamically render filtered content
- Manage dependent state and conditional rendering in React
- Practice clean UI/UX with form inputs

## Context
Your frontend application should now allow users to filter articles based on:
- A selected journalist
- A selected category

Each filter option will call a different API route and update the displayed list of articles accordingly. You will not filter client-side, but instead make API requests based on selection.

---

## Q1 – Fetch All Journalists & Categories for Select Inputs

**Task:** On component mount, fetch journalists and categories to populate two dropdown menus.

**APIs Used:**
- `GET /journalists`
- `GET /categories`

```jsx
useEffect(() => {
  axios.get('http://localhost:5000/journalists').then(res => setJournalists(res.data));
  axios.get('http://localhost:5000/categories').then(res => setCategories(res.data));
}, []);
```

---

## Q2 – Filter Articles by Selected Journalist

**Task:** When a journalist is selected from the dropdown, fetch articles written by that journalist.

**API Used:**
- `GET /journalists/:id/articles`

```jsx
axios.get(`http://localhost:5000/journalists/${selectedJournalistId}/articles`)
  .then(res => setArticles(res.data));
```

---

## Q3 – Filter Articles by Selected Category

**Task:** When a category is selected from the dropdown, fetch articles belonging to that category.

**API Used:**
- `GET /categories/:id/articles`

```jsx
axios.get(`http://localhost:5000/categories/${selectedCategoryId}/articles`)
  .then(res => setArticles(res.data));
```
