// client/src/hooks/useApi.js
import { useState, useCallback } from 'react';

const useApi = (apiFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(
    async (...args) => {
      setLoading(true);
      setError(null);
      try {
        const result = await apiFunction(...args);
        setData(result);
        return result; // Return result for component use (e.g., redirect after POST)
      } catch (err) {
        // Handle network errors, status code errors, etc.
        const errorMessage = err.response?.data?.message || err.message || 'An unknown error occurred';
        setError(errorMessage);
        throw new Error(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [apiFunction]
  );

  return { data, loading, error, execute, setData };
};

export default useApi;