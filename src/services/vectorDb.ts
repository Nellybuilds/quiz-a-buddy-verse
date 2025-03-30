
import { Pinecone } from '@pinecone-database/pinecone';

const pinecone = new Pinecone({
  apiKey: process.env.VITE_PINECONE_API_KEY || '',
  environment: process.env.VITE_PINECONE_ENVIRONMENT || ''
});

const getIndex = () => {
  try {
    return pinecone.Index(process.env.VITE_PINECONE_INDEX || '');
  } catch (error) {
    console.error('Failed to initialize Pinecone index:', error);
    return null;
  }
};

export const vectorIndex = getIndex();

export async function searchQuestions(query: string, topK: number = 5) {
  if (!vectorIndex) {
    throw new Error('Vector index not initialized');
  }

  try {
    const response = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.VITE_OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        input: query,
        model: "text-embedding-ada-002"
      })
    });

    if (!response.ok) {
      throw new Error('Failed to generate embeddings');
    }

    const { data } = await response.json();
    const queryEmbedding = data[0].embedding;

    const queryResponse = await vectorIndex.query({
      vector: queryEmbedding,
      topK,
      includeMetadata: true
    });

    return queryResponse.matches;
  } catch (error) {
    console.error('Search failed:', error);
    throw error;
  }
}
