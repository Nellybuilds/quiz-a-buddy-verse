
export interface QuizTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
  questionCount: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topicId: string;
}

export interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  score: number;
  topic: QuizTopic;
  answeredQuestions: {
    question: QuizQuestion;
    selectedAnswer: number;
    isCorrect: boolean;
  }[];
}
