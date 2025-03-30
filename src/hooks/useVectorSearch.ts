
import { useState } from 'react';
import { searchQuestions } from '../services/vectorDb';

export function useVectorSearch() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = async (query: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const searchResults = await searchQuestions(query);
      setResults(searchResults);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { search, results, isLoading, error };
}
