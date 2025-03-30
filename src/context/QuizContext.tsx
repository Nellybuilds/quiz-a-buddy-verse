
import React, { createContext, useContext, useState, ReactNode } from "react";
import { QuizQuestion, QuizResult, QuizTopic } from "../types/quiz";
import { getQuizQuestionsByTopic, getTopicById } from "../data/quizData";

interface QuizContextType {
  currentTopic: QuizTopic | null;
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  selectedAnswer: number | null;
  userAnswers: number[];
  quizResult: QuizResult | null;
  isAnswerChecked: boolean;
  isQuizCompleted: boolean;
  startQuiz: (topicId: string) => void;
  selectAnswer: (answerIndex: number) => void;
  checkAnswer: () => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTopic, setCurrentTopic] = useState<QuizTopic | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const startQuiz = (topicId: string) => {
    const topic = getTopicById(topicId);
    if (!topic) return;
    
    const allTopicQuestions = getQuizQuestionsByTopic(topicId);
    // If we have fewer questions than needed, use all available questions
    const questionsToUse = allTopicQuestions.length <= 100 ? allTopicQuestions : 
      [...allTopicQuestions].sort(() => Math.random() - 0.5).slice(0, 100);
      
    setCurrentTopic(topic);
    setQuestions(questionsToUse);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setUserAnswers([]);
    setQuizResult(null);
    setIsAnswerChecked(false);
    setIsQuizCompleted(false);
  };

  const selectAnswer = (answerIndex: number) => {
    if (isAnswerChecked) return;
    setSelectedAnswer(answerIndex);
  };

  const checkAnswer = () => {
    if (selectedAnswer === null) return;
    setIsAnswerChecked(true);
  };

  const nextQuestion = () => {
    if (selectedAnswer === null) return;
    
    // Save the answer
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(newUserAnswers);
    
    // Check if quiz is completed
    if (currentQuestionIndex === questions.length - 1) {
      completeQuiz(newUserAnswers);
    } else {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
    }
  };

  const completeQuiz = (answers: number[]) => {
    if (!currentTopic) return;
    
    let correctCount = 0;
    const answeredQuestions = questions.map((question, index) => {
      const selectedAnswer = answers[index] !== undefined ? answers[index] : -1;
      const isCorrect = selectedAnswer === question.correctAnswer;
      if (isCorrect) correctCount++;
      
      return {
        question,
        selectedAnswer,
        isCorrect
      };
    });
    
    const result: QuizResult = {
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      incorrectAnswers: questions.length - correctCount,
      score: (correctCount / questions.length) * 100,
      topic: currentTopic,
      answeredQuestions
    };
    
    setQuizResult(result);
    setIsQuizCompleted(true);
  };

  const resetQuiz = () => {
    setCurrentTopic(null);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setUserAnswers([]);
    setQuizResult(null);
    setIsAnswerChecked(false);
    setIsQuizCompleted(false);
  };

  const value = {
    currentTopic,
    questions,
    currentQuestionIndex,
    selectedAnswer,
    userAnswers,
    quizResult,
    isAnswerChecked,
    isQuizCompleted,
    startQuiz,
    selectAnswer,
    checkAnswer,
    nextQuestion,
    resetQuiz
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
