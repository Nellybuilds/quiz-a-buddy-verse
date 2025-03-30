
import { Pinecone } from '@pinecone-database/pinecone';

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY || '',
  environment: process.env.PINECONE_ENVIRONMENT || ''
});

export const vectorIndex = pinecone.Index(process.env.PINECONE_INDEX || '');

export async function searchQuestions(query: string, topK: number = 5) {
  // Get vector embedding from OpenAI
  const response = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      input: query,
      model: "text-embedding-ada-002"
    })
  });

  const { data } = await response.json();
  const queryEmbedding = data[0].embedding;

  // Search Pinecone
  const queryResponse = await vectorIndex.query({
    vector: queryEmbedding,
    topK,
    includeMetadata: true
  });

  return queryResponse.matches;
}
