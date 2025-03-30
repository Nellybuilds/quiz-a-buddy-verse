
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
  {
    id: "rag-8",
    question: "What is the role of document chunking in RAG systems?",
    options: [
      "To reduce storage costs",
      "To break documents into smaller, manageable pieces for retrieval",
      "To compress documents",
      "To encrypt sensitive information"
    ],
    correctAnswer: 1,
    explanation: "Document chunking breaks large documents into smaller pieces that can be effectively embedded and retrieved, ensuring relevant context is captured.",
    topicId: "rag"
  },
  {
    id: "rag-9",
    question: "What is the purpose of re-ranking in RAG systems?",
    options: [
      "To sort documents by date",
      "To improve retrieval accuracy by applying additional relevance criteria",
      "To reduce database size",
      "To organize documents alphabetically"
    ],
    correctAnswer: 1,
    explanation: "Re-ranking helps improve retrieval accuracy by applying additional relevance criteria to the initial set of retrieved documents.",
    topicId: "rag"
  },
  {
    id: "rag-10",
    question: "Which embedding model characteristic is most important for RAG systems?",
    options: [
      "Model size",
      "Semantic understanding capacity",
      "Training speed",
      "Memory usage"
    ],
    correctAnswer: 1,
    explanation: "The embedding model's ability to capture and represent semantic meaning is crucial for effective retrieval in RAG systems.",
    topicId: "rag"
  },
  {
    id: "rag-11",
    question: "What is query expansion in RAG systems?",
    options: [
      "Making queries longer",
      "Generating multiple variations of the query to improve retrieval",
      "Expanding the database",
      "Increasing query processing time"
    ],
    correctAnswer: 1,
    explanation: "Query expansion involves generating multiple variations or reformulations of the original query to improve retrieval effectiveness.",
    topicId: "rag"
  },
  {
    id: "rag-12",
    question: "What is the role of context window size in RAG systems?",
    options: [
      "Screen display size",
      "Maximum amount of context that can be processed at once",
      "Database storage limit",
      "Network packet size"
    ],
    correctAnswer: 1,
    explanation: "Context window size determines how much retrieved information can be processed together by the language model.",
    topicId: "rag"
  },
  {
    id: "rag-13",
    question: "What is hybrid search in RAG systems?",
    options: [
      "Combining multiple databases",
      "Using both keyword and semantic search methods",
      "Searching across different languages",
      "Using multiple GPUs"
    ],
    correctAnswer: 1,
    explanation: "Hybrid search combines traditional keyword-based search with semantic search to improve retrieval accuracy.",
    topicId: "rag"
  },
  {
    id: "rag-14",
    question: "What is the purpose of document metadata in RAG systems?",
    options: [
      "To reduce file size",
      "To provide additional context and filtering capabilities",
      "To encrypt documents",
      "To compress storage"
    ],
    correctAnswer: 1,
    explanation: "Document metadata provides additional context and enables filtering capabilities during retrieval.",
    topicId: "rag"
  },
  {
    id: "rag-15",
    question: "What is chunk overlap in RAG systems?",
    options: [
      "Network congestion",
      "Shared content between adjacent document chunks",
      "Database conflicts",
      "Memory overflow"
    ],
    correctAnswer: 1,
    explanation: "Chunk overlap refers to the shared content between adjacent document chunks, helping maintain context across chunk boundaries.",
    topicId: "rag"
  },
  {
    id: "rag-16",
    question: "Which metric measures the diversity of retrieved documents in RAG?",
    options: [
      "Precision",
      "Coverage",
      "Latency",
      "Throughput"
    ],
    correctAnswer: 1,
    explanation: "Coverage measures how well the retrieved documents represent different aspects or perspectives of the query.",
    topicId: "rag"
  },
  {
    id: "rag-17",
    question: "What is the role of document preprocessing in RAG systems?",
    options: [
      "Reducing storage costs",
      "Cleaning and standardizing text for better retrieval",
      "Encrypting sensitive data",
      "Compressing files"
    ],
    correctAnswer: 1,
    explanation: "Document preprocessing involves cleaning and standardizing text to improve retrieval quality.",
    topicId: "rag"
  },
  {
    id: "rag-18",
    question: "What is retrieval augmented distillation?",
    options: [
      "A cooling system",
      "Training smaller models using retrieved knowledge",
      "Data compression technique",
      "Network optimization"
    ],
    correctAnswer: 1,
    explanation: "Retrieval augmented distillation involves training smaller models using knowledge retrieved from larger models or knowledge bases.",
    topicId: "rag"
  },
  {
    id: "rag-19",
    question: "What is the purpose of document ranking in RAG systems?",
    options: [
      "Alphabetical ordering",
      "Ordering documents by relevance to the query",
      "File size organization",
      "Date-based sorting"
    ],
    correctAnswer: 1,
    explanation: "Document ranking orders retrieved documents based on their relevance to the query, ensuring most relevant information is used first.",
    topicId: "rag"
  },
  {
    id: "rag-20",
    question: "What is cross-encoder reranking in RAG?",
    options: [
      "Video encoding",
      "Using a separate model to improve ranking accuracy",
      "Data compression",
      "Network routing"
    ],
    correctAnswer: 1,
    explanation: "Cross-encoder reranking uses a separate model to improve the accuracy of document ranking after initial retrieval.",
    topicId: "rag"
  },
  {
    id: "rag-21",
    question: "What is the role of embeddings cache in RAG systems?",
    options: [
      "Temporary storage",
      "Improving retrieval speed by storing frequent embeddings",
      "Data backup",
      "Security feature"
    ],
    correctAnswer: 1,
    explanation: "Embeddings cache improves retrieval speed by storing frequently used embeddings in memory.",
    topicId: "rag"
  },
  {
    id: "rag-22",
    question: "What is adaptive retrieval in RAG systems?",
    options: [
      "Random selection",
      "Adjusting retrieval strategy based on query complexity",
      "Hardware adaptation",
      "Network optimization"
    ],
    correctAnswer: 1,
    explanation: "Adaptive retrieval adjusts the retrieval strategy based on the complexity and requirements of each query.",
    topicId: "rag"
  },
  {
    id: "rag-23",
    question: "What is the purpose of citation tracking in RAG systems?",
    options: [
      "Academic references",
      "Tracking source documents for generated responses",
      "Legal compliance",
      "Version control"
    ],
    correctAnswer: 1,
    explanation: "Citation tracking helps maintain transparency by tracking which source documents were used to generate responses.",
    topicId: "rag"
  },
  {
    id: "rag-24",
    question: "What is incremental indexing in RAG systems?",
    options: [
      "Partial updates",
      "Updating the index with new documents without full reindexing",
      "Progress tracking",
      "Performance monitoring"
    ],
    correctAnswer: 1,
    explanation: "Incremental indexing allows updating the search index with new documents without requiring a complete reindex.",
    topicId: "rag"
  },
  {
    id: "rag-25",
    question: "What is the role of query routing in RAG systems?",
    options: [
      "Network routing",
      "Directing queries to appropriate knowledge sources",
      "Traffic management",
      "Load balancing"
    ],
    correctAnswer: 1,
    explanation: "Query routing directs queries to the most appropriate knowledge sources or retrieval strategies.",
    topicId: "rag"
  },

  // Vector Database Questions
  {
    id: "vector-db-6",
    question: "What is the benefit of using vector databases over traditional databases for semantic search?",
    options: [
      "They are faster at processing SQL queries",
      "They enable similarity-based search using vector embeddings",
      "They use less storage space",
      "They are easier to maintain"
    ],
    correctAnswer: 1,
    explanation: "Vector databases are specifically designed to handle similarity-based search using vector embeddings, making them ideal for semantic search applications where exact matches aren't required.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-7",
    question: "What is 'index optimization' in vector databases?",
    options: [
      "Reducing the size of stored vectors",
      "Improving search speed by organizing vectors efficiently",
      "Converting vectors to SQL format",
      "Compressing the database"
    ],
    correctAnswer: 1,
    explanation: "Index optimization in vector databases involves organizing vectors in a way that enables faster similarity search, often using techniques like clustering or tree-based structures.",
    topicId: "vector-db"
  },
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
    id: "verification-6",
    question: "What is 'prompt injection testing' in AI verification?",
    options: [
      "Testing different prompts for better results",
      "Checking if AI can be manipulated through malicious inputs",
      "Injecting new training data",
      "Testing prompt response speed"
    ],
    correctAnswer: 1,
    explanation: "Prompt injection testing involves checking if an AI system can be manipulated or made to behave unexpectedly through carefully crafted malicious inputs.",
    topicId: "verification"
  },
  {
    id: "verification-7",
    question: "What is the role of 'baseline testing' in AI verification?",
    options: [
      "Testing AI on simple tasks",
      "Comparing AI performance against established standards",
      "Testing basic system functionality",
      "Setting up initial configurations"
    ],
    correctAnswer: 1,
    explanation: "Baseline testing establishes a reference point for AI performance by comparing outputs against known standards or previous versions.",
    topicId: "verification"
  },
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
  {
    id: "fine-tuning-6",
    question: "What is 'few-shot learning' in the context of LLM fine-tuning?",
    options: [
      "Training a model with very little data",
      "Providing examples in the prompt to guide the model's behavior",
      "Using multiple GPUs for training",
      "Reducing model parameters"
    ],
    correctAnswer: 1,
    explanation: "Few-shot learning in LLMs refers to providing example patterns in the prompt to guide the model's behavior, without actually modifying the model weights.",
    topicId: "fine-tuning"
  },
  {
    id: "fine-tuning-7",
    question: "What is gradient checkpointing in LLM fine-tuning?",
    options: [
      "Saving model checkpoints regularly",
      "A technique to reduce memory usage during training",
      "Checking gradient values for errors",
      "A way to validate model performance"
    ],
    correctAnswer: 1,
    explanation: "Gradient checkpointing is a technique that trades computation time for memory by recomputing intermediate activations during the backward pass instead of storing them.",
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
  },
  {
    id: "orchestration-6",
    question: "What is a 'chain' in AI orchestration frameworks?",
    options: [
      "A series of linked AI components that process data sequentially",
      "A physical connection between servers",
      "A blockchain implementation",
      "A security measure"
    ],
    correctAnswer: 0,
    explanation: "In AI orchestration, a chain is a sequence of connected components that process data in order, where each component's output feeds into the next component.",
    topicId: "orchestration"
  },
  {
    id: "orchestration-7",
    question: "What is the purpose of memory systems in AI orchestration?",
    options: [
      "To store model weights",
      "To maintain context and state between interactions",
      "To cache API responses",
      "To save user preferences"
    ],
    correctAnswer: 1,
    explanation: "Memory systems in AI orchestration help maintain context and state information between interactions, allowing for more coherent and contextually aware responses.",
    topicId: "orchestration"
  }
];

export const getQuizQuestionsByTopic = (topicId: string): QuizQuestion[] => {
  return quizQuestions.filter(question => question.topicId === topicId);
};

export const getTopicById = (topicId: string): QuizTopic | undefined => {
  return quizTopics.find(topic => topic.id === topicId);
};
