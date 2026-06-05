import { useEffect, useState } from 'react';
import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000' });

export default function ArticleFilterByJournalist() {
  const [articles, setArticles] = useState([]);
  const [journalists, setJournalists] = useState([]);
  const [selectedJournalistId, setSelectedJournalistId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles();
    fetchJournalists();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await api.get('/articles');
      setArticles(data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch articles');
    } finally {
      setLoading(false);
    }
  };

  const fetchJournalists = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await api.get('/journalists');
      setJournalists(data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch journalists');
    } finally {
      setLoading(false);
    }
  };

  const applyFilter = async () => {
    setLoading(true);
    setError(null);
    try {
      if (selectedJournalistId) {
        const { data } = await api.get(`/journalists/${selectedJournalistId}/articles`);
        setArticles(data);
      } else {
        await fetchArticles();
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to apply filter');
    } finally {
      setLoading(false);
    }
  };

  const resetFilter = () => {
    setSelectedJournalistId('');
    fetchArticles();
  };

  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (error) return <div className="error-banner">{error}</div>;

  return (
    <div>
      <h2>Articles</h2>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <label htmlFor="journalistFilter">Filter by Journalist:</label>
        <select id="journalistFilter" value={selectedJournalistId} onChange={e => setSelectedJournalistId(e.target.value)}>
          <option value="">All Journalists</option>
          {journalists.map(j => (
            <option key={j.id} value={j.id}>{j.name}</option>
          ))}
        </select>

        <button onClick={applyFilter}>Apply Filters</button>
        <button onClick={resetFilter}>Reset Filters</button>
      </div>

      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <strong>{article.title}</strong> <br />
            <small>By Journalist #{article.journalistId} | Category #{article.categoryId}</small><br />
            <button disabled>Delete</button>
            <button disabled>Update</button>
            <button disabled>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
