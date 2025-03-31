import { QuizQuestion, QuizTopic } from "../types/quiz";

export const quizTopics: QuizTopic[] = [
  {
    id: "rag",
    title: "RAG Systems",
    description: "Test your knowledge on Retrieval Augmented Generation systems and how they enhance LLM outputs.",
    icon: "database",
    questionCount: 25,
  },
  {
    id: "vector-db",
    title: "Vector Databases",
    description: "Explore your understanding of vector databases and how they enable semantic search capabilities.",
    icon: "database-backup",
    questionCount: 25,
  },
  {
    id: "verification",
    title: "Verification Tools",
    description: "Challenge yourself on tools and techniques for verifying and evaluating AI outputs.",
    icon: "check",
    questionCount: 25,
  },
  {
    id: "fine-tuning",
    title: "LLM Fine Tuning",
    description: "Test your knowledge on methods for fine-tuning large language models for specific tasks.",
    icon: "settings",
    questionCount: 25,
  },
  {
    id: "orchestration",
    title: "AI Orchestration",
    description: "Assess your understanding of AI orchestration frameworks and how they manage AI workflows.",
    icon: "layers",
    questionCount: 25,
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
    id: "vector-db-8",
    question: "What is vector quantization in the context of vector databases?",
    options: [
      "Converting continuous vectors to discrete values",
      "Increasing vector dimensions",
      "Measuring vector magnitude",
      "Calculating vector averages"
    ],
    correctAnswer: 0,
    explanation: "Vector quantization is a technique that reduces vector storage requirements by mapping continuous vectors to a discrete set of values while maintaining similarity relationships.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-9",
    question: "What is the purpose of dimension reduction in vector databases?",
    options: [
      "To save disk space",
      "To improve search efficiency while maintaining similarity relationships",
      "To make vectors easier to visualize",
      "To reduce database maintenance costs"
    ],
    correctAnswer: 1,
    explanation: "Dimension reduction helps improve search efficiency by reducing vector dimensions while preserving the essential similarity relationships between vectors.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-10",
    question: "What is data sharding in vector databases?",
    options: [
      "Splitting vectors across multiple servers",
      "Breaking vectors into smaller dimensions",
      "Compressing vector data",
      "Converting vectors to binary format"
    ],
    correctAnswer: 0,
    explanation: "Data sharding involves distributing vector data across multiple servers to improve scalability and performance in large vector databases.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-11",
    question: "What is the role of clustering in vector databases?",
    options: [
      "To group similar vectors together for efficient retrieval",
      "To reduce database size",
      "To convert vectors to clusters",
      "To create backup copies"
    ],
    correctAnswer: 0,
    explanation: "Clustering helps organize similar vectors together, making retrieval more efficient by limiting the search space to relevant clusters.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-12",
    question: "What is vector pruning?",
    options: [
      "Removing outdated vectors",
      "Eliminating unnecessary vector dimensions",
      "Reducing search space during query",
      "Deleting duplicate vectors"
    ],
    correctAnswer: 2,
    explanation: "Vector pruning is a technique that reduces the search space during query time by eliminating unlikely candidates early in the search process.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-13",
    question: "What is the primary challenge in scaling vector databases?",
    options: [
      "Storage costs",
      "Network bandwidth",
      "Maintaining search accuracy with growing data",
      "User authentication"
    ],
    correctAnswer: 2,
    explanation: "As vector databases grow, maintaining high search accuracy while keeping query times low becomes increasingly challenging.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-14",
    question: "What is vector indexing?",
    options: [
      "Numbering vectors sequentially",
      "Creating data structures for efficient similarity search",
      "Converting vectors to indexes",
      "Sorting vectors by value"
    ],
    correctAnswer: 1,
    explanation: "Vector indexing involves creating specialized data structures that enable efficient similarity search operations on vector data.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-15",
    question: "What is the purpose of metadata in vector databases?",
    options: [
      "To store vector dimensions",
      "To provide additional context about stored vectors",
      "To compress vector data",
      "To calculate vector similarities"
    ],
    correctAnswer: 1,
    explanation: "Metadata provides additional context and information about stored vectors, enabling filtering and organization beyond vector similarity.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-16",
    question: "What is vector normalization?",
    options: [
      "Converting vectors to normal distribution",
      "Scaling vectors to unit length",
      "Standardizing vector format",
      "Averaging vector values"
    ],
    correctAnswer: 1,
    explanation: "Vector normalization involves scaling vectors to unit length, which is often useful for consistent similarity comparisons.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-17",
    question: "What is the purpose of batch processing in vector databases?",
    options: [
      "To process vectors in groups for better efficiency",
      "To create vector backups",
      "To compress multiple vectors",
      "To delete vectors in bulk"
    ],
    correctAnswer: 0,
    explanation: "Batch processing allows vector databases to handle multiple vectors simultaneously, improving overall throughput and efficiency.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-18",
    question: "What is vector database replication?",
    options: [
      "Copying vectors multiple times",
      "Creating backup databases",
      "Maintaining synchronized copies across multiple servers",
      "Duplicating vector dimensions"
    ],
    correctAnswer: 2,
    explanation: "Replication involves maintaining synchronized copies of vector data across multiple servers for improved availability and fault tolerance.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-19",
    question: "What is the role of caching in vector databases?",
    options: [
      "Storing temporary vectors",
      "Improving query performance for frequent searches",
      "Backing up vector data",
      "Compressing vector storage"
    ],
    correctAnswer: 1,
    explanation: "Caching helps improve query performance by storing frequently accessed vectors or search results in faster memory.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-20",
    question: "What is vector database partitioning?",
    options: [
      "Dividing vectors into smaller parts",
      "Organizing vectors into distinct sections",
      "Breaking down vector dimensions",
      "Separating vector metadata"
    ],
    correctAnswer: 1,
    explanation: "Partitioning involves organizing vectors into distinct sections to improve manageability and query performance.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-21",
    question: "What is approximate nearest neighbor (ANN) search?",
    options: [
      "Finding exact vector matches",
      "Finding similar vectors quickly with some accuracy trade-off",
      "Searching for neighboring servers",
      "Approximating vector values"
    ],
    correctAnswer: 1,
    explanation: "ANN search finds similar vectors quickly by trading off some accuracy for improved search speed.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-22",
    question: "What is vector database consistency?",
    options: [
      "Keeping vectors unchanged",
      "Ensuring all database copies have the same data",
      "Maintaining vector dimensions",
      "Standardizing vector format"
    ],
    correctAnswer: 1,
    explanation: "Consistency ensures that all copies of the vector database maintain the same data state across distributed systems.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-23",
    question: "What is the purpose of vector database backup?",
    options: [
      "Creating duplicate vectors",
      "Protecting against data loss",
      "Improving search speed",
      "Reducing storage space"
    ],
    correctAnswer: 1,
    explanation: "Vector database backup protects against data loss by maintaining separate copies of vector data and metadata.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-24",
    question: "What is vector database monitoring?",
    options: [
      "Watching vector changes",
      "Tracking database performance and health metrics",
      "Observing vector dimensions",
      "Checking vector accuracy"
    ],
    correctAnswer: 1,
    explanation: "Monitoring involves tracking various metrics to ensure the vector database is performing optimally and remains healthy.",
    topicId: "vector-db"
  },
  {
    id: "vector-db-25",
    question: "What is the role of filtering in vector databases?",
    options: [
      "Removing invalid vectors",
      "Limiting search results based on metadata conditions",
      "Cleaning vector data",
      "Reducing vector dimensions"
    ],
    correctAnswer: 1,
    explanation: "Filtering allows refinement of search results based on metadata conditions, combining vector similarity with traditional database queries.",
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
  {
    id: "verification-8",
    question: "What is 'explainability' in AI verification?",
    options: [
      "Making AI models smaller and faster",
      "The ability to understand and interpret AI decisions and outputs",
      "Explaining AI concepts to non-technical users",
      "Creating documentation for AI systems"
    ],
    correctAnswer: 1,
    explanation: "Explainability in AI verification refers to methods and techniques that make AI decisions and outputs transparent and interpretable to humans, which is crucial for building trust and enabling effective verification.",
    topicId: "verification"
  },
  {
    id: "verification-9",
    question: "What is 'counterfactual testing' in AI verification?",
    options: [
      "Testing against fictional scenarios",
      "Examining what an AI would output if inputs were slightly different",
      "Testing AI on historical data",
      "Verifying AI against untrue statements"
    ],
    correctAnswer: 1,
    explanation: "Counterfactual testing involves examining how AI outputs change when inputs are slightly altered, helping identify causal relationships and verify robustness in decision-making.",
    topicId: "verification"
  },
  {
    id: "verification-10",
    question: "What is 'model-graded evaluation' in AI verification?",
    options: [
      "Humans grading model outputs",
      "Using one AI to evaluate the outputs of another AI",
      "Automatically grading based on predefined metrics",
      "Giving letter grades to AI models"
    ],
    correctAnswer: 1,
    explanation: "Model-graded evaluation uses one AI system (often a more capable one) to evaluate the outputs of another AI system, providing scalable assessment capabilities.",
    topicId: "verification"
  },
  {
    id: "verification-11",
    question: "What is 'bias detection' in AI verification?",
    options: [
      "Finding unfair preferences in AI outputs based on protected attributes",
      "Detecting tilted cameras in computer vision",
      "Identifying political leanings in content",
      "Finding monetary incentives in AI development"
    ],
    correctAnswer: 0,
    explanation: "Bias detection focuses on identifying and measuring unfair patterns or preferences in AI outputs, particularly those related to protected characteristics like race, gender, or age.",
    topicId: "verification"
  },
  {
    id: "verification-12",
    question: "What is 'adversarial testing' in AI verification?",
    options: [
      "Testing AI by competing with another AI",
      "Deliberately providing challenging inputs to find weaknesses",
      "Testing in hostile network environments",
      "Training two AIs against each other"
    ],
    correctAnswer: 1,
    explanation: "Adversarial testing involves deliberately providing difficult or challenging inputs to AI systems in order to identify weaknesses, edge cases, or potential failure modes.",
    topicId: "verification"
  },
  {
    id: "verification-13",
    question: "What is 'automated verification' in AI systems?",
    options: [
      "Manual checking by experts",
      "Using software tools to systematically check AI outputs",
      "Self-verification by the AI system",
      "Verification done without human involvement"
    ],
    correctAnswer: 1,
    explanation: "Automated verification involves using specialized software tools and techniques to systematically check AI outputs for issues, errors, or compliance with requirements.",
    topicId: "verification"
  },
  {
    id: "verification-14",
    question: "What is 'ground truth' in AI verification?",
    options: [
      "The lowest error rate achievable",
      "Facts known to be absolutely true",
      "The correct or validated information against which AI outputs are compared",
      "The physical world as opposed to virtual simulations"
    ],
    correctAnswer: 2,
    explanation: "Ground truth refers to the correct or validated information that serves as a reference standard against which AI outputs are compared during verification.",
    topicId: "verification"
  },
  {
    id: "verification-15",
    question: "What is 'uncertainty quantification' in AI verification?",
    options: [
      "Making AI systems more certain",
      "Measuring how confident an AI is in its predictions",
      "The uncertainty of AI development timelines",
      "Quantifying doubt in verification processes"
    ],
    correctAnswer: 1,
    explanation: "Uncertainty quantification methods measure and report how confident an AI system is in its predictions, helping users understand when outputs may be less reliable.",
    topicId: "verification"
  },
  {
    id: "verification-16",
    question: "What is 'domain-specific verification' in AI systems?",
    options: [
      "Verifying AI domains are properly registered",
      "Tailoring verification methods to the specific field the AI operates in",
