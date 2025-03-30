
import { VectorData } from '../types/vector';

export const ragDataset: VectorData[] = [
  {
    id: 'rag-1',
    content: 'RAG systems combine retrieval mechanisms with generative models to enhance the quality and factual accuracy of AI-generated content.',
    embedding: [],
    metadata: {
      title: 'RAG Basics',
      category: 'architecture',
      source: 'lesson-plans'
    }
  },
  {
    id: 'rag-2',
    content: 'Components of RAG systems include Vector Databases for storing embeddings, Embedding Models for converting text into vectors, and Large Language Models for generating responses.',
    embedding: [],
    metadata: {
      title: 'RAG Components',
      category: 'components',
      source: 'lesson-plans'
    }
  },
  {
    id: 'rag-3',
    content: 'Benefits of RAG include improved factual accuracy, reduced hallucinations, better knowledge grounding, and more up-to-date responses.',
    embedding: [],
    metadata: {
      title: 'RAG Benefits',
      category: 'advantages',
      source: 'lesson-plans'
    }
  }
];
