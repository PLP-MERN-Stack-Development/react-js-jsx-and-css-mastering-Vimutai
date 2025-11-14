import { useState, useEffect } from 'react';

const useApi = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`${url}?_page=${page}&_limit=10`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const result = await response.json();
        
        if (result.length === 0) {
          setHasMore(false);
        } else {
          setData(prev => page === 1 ? result : [...prev, ...result]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, page]);

  const loadMore = () => {
    if (hasMore && !loading) {
      setPage(prev => prev + 1);
    }
  };

  const reset = () => {
    setPage(1);
    setData([]);
    setHasMore(true);
  };

  return { data, loading, error, hasMore, loadMore, reset, setData };
};

export default useApi;