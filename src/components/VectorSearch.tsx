
import React, { useState } from 'react';
import { useVectorSearch } from '../hooks/useVectorSearch';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function VectorSearch() {
  const [query, setQuery] = useState('');
  const { search, results, isLoading, error } = useVectorSearch();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      await search(query);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your search query..."
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </Button>
      </form>

      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      <div className="space-y-2">
        {results.map((result: any, index: number) => (
          <div key={index} className="p-4 border rounded-lg">
            <div className="font-medium">{result.metadata?.title}</div>
            <div className="text-sm text-gray-600">{result.metadata?.content}</div>
            <div className="text-xs text-gray-400">Score: {result.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
