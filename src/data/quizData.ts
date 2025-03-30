
import { QuizQuestion, QuizTopic } from "../types/quiz";

export const quizTopics: QuizTopic[] = [
  {
    id: "rag",
    title: "RAG Systems",
    description: "Test your knowledge on Retrieval Augmented Generation systems and how they enhance LLM outputs.",
    icon: "database",
    questionCount: 100,
  },
  {
    id: "vector-db",
    title: "Vector Databases",
    description: "Explore your understanding of vector databases and how they enable semantic search capabilities.",
    icon: "database-backup",
    questionCount: 100,
  },
  {
    id: "verification",
    title: "Verification Tools",
    description: "Challenge yourself on tools and techniques for verifying and evaluating AI outputs.",
    icon: "check",
    questionCount: 100,
  },
  {
    id: "fine-tuning",
    title: "LLM Fine Tuning",
    description: "Test your knowledge on methods for fine-tuning large language models for specific tasks.",
    icon: "settings",
    questionCount: 100,
  },
  {
    id: "orchestration",
    title: "AI Orchestration",
    description: "Assess your understanding of AI orchestration frameworks and how they manage AI workflows.",
    icon: "layers",
    questionCount: 100,
  },
];

export const quizQuestions: QuizQuestion[] = [
  // RAG Systems Questions
  {
    id: "rag-1",
    question: "What is the primary purpose of a RAG (Retrieval Augmented Generation) system?",
    options: [
      "To reduce the size of language models",
      "To enhance LLM outputs with retrieved information from external sources",
      "To generate training data automatically",
      "To replace vector databases entirely"
    ],
    correctAnswer: 1,
    explanation: "RAG systems enhance LLM outputs by retrieving relevant information from external knowledge sources before generating responses, combining the benefits of retrieval-based and generation-based approaches.",
    topicId: "rag"
  },
  {
    id: "rag-6",
    question: "What type of index is commonly used in RAG systems for efficient retrieval?",
    options: [
      "B-tree index",
      "Vector index",
      "Hash index",
      "Binary search tree"
    ],
    correctAnswer: 1,
    explanation: "Vector indices are essential in RAG systems as they enable efficient similarity search over embedded documents.",
    topicId: "rag"
  },
  {
    id: "rag-7",
    question: "How does RAG help with knowledge cutoff issues in LLMs?",
    options: [
      "By training the model on newer data",
      "By retrieving up-to-date information during inference",
      "By reducing model size",
      "By increasing context window"
    ],
    correctAnswer: 1,
    explanation: "RAG systems can access current information through their retrieval component, helping overcome the knowledge cutoff limitation of pre-trained LLMs.",
    topicId: "rag"
  },
  {
    id: "rag-2",
    question: "Which of these is NOT a typical component of a RAG system?",
    options: [
      "Document indexer",
      "Vector database",
      "Query reformulator",
      "Gradient descent optimizer"
    ],
    correctAnswer: 3,
    explanation: "Gradient descent optimizers are used for training neural networks, not as a standard component in RAG systems. RAG typically involves document indexing, vector storage, and various query processing components.",
    topicId: "rag"
  },
  {
    id: "rag-3",
    question: "What problem does RAG primarily help solve for Large Language Models?",
    options: [
      "Training speed",
      "Hallucination reduction",
      "Code generation",
      "Multi-language translation"
    ],
    correctAnswer: 1,
    explanation: "RAG systems help reduce hallucinations in LLMs by grounding responses in retrieved facts rather than relying solely on parametric knowledge, improving factual accuracy.",
    topicId: "rag"
  },
  {
    id: "rag-4",
    question: "In a RAG system, what typically happens before the generation phase?",
    options: [
      "Fine-tuning the model",
      "Retrieving relevant documents based on the query",
      "Generating multiple candidate responses",
      "Converting text to images"
    ],
    correctAnswer: 1,
    explanation: "In RAG, before generation occurs, the system retrieves relevant documents or information based on the user query, which are then used to inform and enhance the generation process.",
    topicId: "rag"
  },
  {
    id: "rag-5",
    question: "Which metric is commonly used to evaluate the retrieval component of a RAG system?",
    options: [
      "BLEU score",
      "Recall@k",
      "Perplexity",
      "FLOPS"
    ],
    correctAnswer: 1,
    explanation: "Recall@k measures how often the relevant documents are within the top k retrieved documents, making it a common metric for evaluating retrieval performance in RAG systems.",
    topicId: "rag"
  },

  // Vector Database Questions
  {
    id: "vector-db-1",
    question: "What is the primary purpose of a vector database in AI applications?",
    options: [
      "Storing raw text documents",
      "Efficient storage and retrieval of vector embeddings",
      "Training neural networks",
      "Running SQL queries"
    ],
    correctAnswer: 1,
    explanation: "Vector databases are specialized for storing, indexing, and efficiently retrieving vector embeddings, which represent semantic information in a multidimensional space.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-2",
    question: "Which algorithm is commonly used for approximate nearest neighbor search in vector databases?",
    options: [
      "Gradient descent",
      "HNSW (Hierarchical Navigable Small World)",
      "Backpropagation",
      "Decision trees"
    ],
    correctAnswer: 1,
    explanation: "HNSW is a popular algorithm used in vector databases for efficient approximate nearest neighbor search, offering a good balance between search speed and accuracy.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-3",
    question: "What metric is commonly used to measure similarity between vectors in a vector database?",
    options: [
      "Euclidean distance",
      "Jaccard similarity",
      "Cosine similarity",
      "Manhattan distance"
    ],
    correctAnswer: 2,
    explanation: "Cosine similarity is widely used in vector databases as it measures the cosine of the angle between vectors, which is effective for comparing semantic similarity regardless of vector magnitude.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-4",
    question: "Which of these is NOT a common vector database?",
    options: [
      "Pinecone",
      "Weaviate",
      "MongoDB Vector Search",
      "VectorSQL"
    ],
    correctAnswer: 3,
    explanation: "VectorSQL is not a well-known vector database. Pinecone, Weaviate, and MongoDB Vector Search are established vector database solutions used in production environments.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-5",
    question: "What is the 'curse of dimensionality' in the context of vector databases?",
    options: [
      "The difficulty in visualizing high-dimensional data",
      "The exponential increase in computational requirements as dimensions increase",
      "The tendency of ML models to overfit in high dimensions",
      "The inability to store vectors with more than 1024 dimensions"
    ],
    correctAnswer: 1,
    explanation: "The curse of dimensionality refers to how the computational and storage requirements grow exponentially as vector dimensions increase, making efficient similarity search challenging in high-dimensional spaces.",
    topicId: "vector-db"
  },

  // Verification Tools Questions
  {
    id: "verification-1",
    question: "What is the primary purpose of AI verification tools?",
    options: [
      "To speed up AI model training",
      "To ensure AI outputs meet quality, safety, and factual standards",
      "To convert AI models to different frameworks",
      "To encrypt AI model weights"
    ],
    correctAnswer: 1,
    explanation: "Verification tools are designed to validate that AI outputs meet desired standards for quality, safety, factual accuracy, and compliance with guidelines or regulations.",
    topicId: "verification"
  },
  {
    id: "verification-2",
    question: "Which verification approach involves comparing AI outputs against a known ground truth?",
    options: [
      "A/B testing",
      "Red teaming",
      "Benchmark evaluation",
      "User feedback analysis"
    ],
    correctAnswer: 2,
    explanation: "Benchmark evaluation involves testing AI outputs against established ground truth datasets to measure performance metrics like accuracy, precision, and recall.",
    topicId: "verification"
  },
  {
    id: "verification-3",
    question: "What is 'red teaming' in the context of AI verification?",
    options: [
      "Using a separate AI to verify outputs",
      "Intentionally attacking an AI system to find vulnerabilities",
      "Testing AI performance on red-colored inputs",
      "Running verification on dedicated 'red' servers"
    ],
    correctAnswer: 1,
    explanation: "Red teaming involves having specialists intentionally attack or probe an AI system to identify vulnerabilities, biases, or harmful outputs before deployment.",
    topicId: "verification"
  },
  {
    id: "verification-4",
    question: "Which of the following is NOT a common verification technique for AI outputs?",
    options: [
      "Fact-checking against reliable sources",
      "Consistency checking across multiple outputs",
      "Quantum verification protocols",
      "Human evaluation panels"
    ],
    correctAnswer: 2,
    explanation: "Quantum verification protocols are not a standard AI verification technique. The other options represent common approaches used to verify AI outputs for quality and accuracy.",
    topicId: "verification"
  },
  {
    id: "verification-5",
    question: "What is a common challenge in verifying outputs from large language models?",
    options: [
      "The models change their weights during verification",
      "Verification can only be done with proprietary tools",
      "Distinguishing between factual errors and creative content",
      "Models cannot be verified without source code access"
    ],
    correctAnswer: 2,
    explanation: "A significant challenge in LLM verification is determining whether departures from factual accuracy represent errors or appropriate creative content, especially in contexts where creativity is expected.",
    topicId: "verification"
  },

  // LLM Fine Tuning Questions
  {
    id: "fine-tuning-1",
    question: "What is fine-tuning in the context of Large Language Models?",
    options: [
      "The process of reducing model size",
      "Training a pre-trained model on a specific dataset for a particular task",
      "Manually editing model weights",
      "Converting a model to a different programming language"
    ],
    correctAnswer: 1,
    explanation: "Fine-tuning involves taking a pre-trained language model and further training it on a specific dataset to adapt it for particular tasks or domains, leveraging transfer learning.",
    topicId: "fine-tuning"
  },
  {
    id: "fine-tuning-2",
    question: "Which technique helps prevent catastrophic forgetting during fine-tuning?",
    options: [
      "Gradient descent",
      "Parameter-Efficient Fine-Tuning (PEFT)",
      "Increasing learning rate",
      "Using larger batch sizes"
    ],
    correctAnswer: 1,
    explanation: "Parameter-Efficient Fine-Tuning (PEFT) techniques like LoRA modify only a small subset of model parameters, helping to preserve the knowledge from pre-training while adapting to new tasks.",
    topicId: "fine-tuning"
  },
  {
    id: "fine-tuning-3",
    question: "What is LoRA in the context of LLM fine-tuning?",
    options: [
      "Low-Rank Adaptation - a technique that adds trainable low-rank matrices",
      "Logarithmic Reasoning Approach - a method for improving logical reasoning",
      "Long Range Attention - an extension of the attention mechanism",
      "Learning on Reinforced Applications - a reinforcement learning technique"
    ],
    correctAnswer: 0,
    explanation: "LoRA (Low-Rank Adaptation) is a parameter-efficient fine-tuning technique that adds trainable low-rank decomposition matrices to existing weights, reducing the number of parameters that need to be updated.",
    topicId: "fine-tuning"
  },
  {
    id: "fine-tuning-4",
    question: "What is typically more important than the size of the fine-tuning dataset?",
    options: [
      "The learning rate used",
      "The quality and relevance of the dataset",
      "The number of training epochs",
      "The hardware used for training"
    ],
    correctAnswer: 1,
    explanation: "While having adequate data is important, the quality and relevance of the fine-tuning dataset to the target task is generally more important than its size for achieving good performance.",
    topicId: "fine-tuning"
  },
  {
    id: "fine-tuning-5",
    question: "Which of these is NOT a common challenge in LLM fine-tuning?",
    options: [
      "Overfitting on small datasets",
      "High computational requirements",
      "Automating the fine-tuning without human oversight",
      "Evaluating the fine-tuned model's performance"
    ],
    correctAnswer: 2,
    explanation: "Fully automating fine-tuning without human oversight is not typically considered a primary challenge. The other options represent genuine challenges in the fine-tuning process.",
    topicId: "fine-tuning"
  },

  // AI Orchestration Questions
  {
    id: "orchestration-1",
    question: "What is AI orchestration?",
    options: [
      "The process of training multiple AI models simultaneously",
      "Coordinating multiple AI components to work together in a workflow",
      "Converting AI models to work on various hardware",
      "The arrangement of AI-generated music"
    ],
    correctAnswer: 1,
    explanation: "AI orchestration involves coordinating and managing the interactions between multiple AI components, services, and systems to create cohesive workflows that accomplish complex tasks.",
    topicId: "orchestration"
  },
  {
    id: "orchestration-2",
    question: "Which is NOT typically a component managed by AI orchestration platforms?",
    options: [
      "API calls to various AI services",
      "Data flow between components",
      "Error handling and retries",
      "Hardware power management"
    ],
    correctAnswer: 3,
    explanation: "Hardware power management is typically handled at the infrastructure level, not by AI orchestration platforms, which focus on workflow, data flow, and service coordination aspects.",
    topicId: "orchestration"
  },
  {
    id: "orchestration-3",
    question: "What is an 'agent' in the context of AI orchestration?",
    options: [
      "A human supervisor overseeing AI systems",
      "An autonomous AI component that can make decisions and take actions",
      "A software license for commercial AI use",
      "A testing environment for AI models"
    ],
    correctAnswer: 1,
    explanation: "In AI orchestration, an agent typically refers to an autonomous AI component that can make decisions, take actions, and interact with other components or the environment based on its goals and observations.",
    topicId: "orchestration"
  },
  {
    id: "orchestration-4",
    question: "Which pattern is commonly used in AI orchestration for handling sequential tasks?",
    options: [
      "Observer pattern",
      "Factory pattern",
      "Pipeline pattern",
      "Singleton pattern"
    ],
    correctAnswer: 2,
    explanation: "The pipeline pattern is commonly used in AI orchestration to handle sequential processing tasks, where the output of one component becomes the input to the next in a chain or workflow.",
    topicId: "orchestration"
  },
  {
    id: "orchestration-5",
    question: "Which of these is a popular open-source AI orchestration framework?",
    options: [
      "TensorFlow",
      "LangChain",
      "ResNet",
      "BERT"
    ],
    correctAnswer: 1,
    explanation: "LangChain is a popular open-source framework for orchestrating language model applications, providing tools for chaining together various components into cohesive applications.",
    topicId: "orchestration"
  }
];

export const getQuizQuestionsByTopic = (topicId: string): QuizQuestion[] => {
  return quizQuestions.filter(question => question.topicId === topicId);
};

export const getTopicById = (topicId: string): QuizTopic | undefined => {
  return quizTopics.find(topic => topic.id === topicId);
};
