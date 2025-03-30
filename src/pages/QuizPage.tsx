
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuiz } from "@/context/QuizContext";
import { Button } from "@/components/ui/button";
import ProgressBar from "@/components/ProgressBar";
import QuizOption from "@/components/QuizOption";
import ResultSummary from "@/components/ResultSummary";
import Header from "@/components/Header";
import { ArrowLeft, ArrowRight } from "lucide-react";

const QuizPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const {
    currentTopic,
    questions,
    currentQuestionIndex,
    selectedAnswer,
    quizResult,
    isAnswerChecked,
    isQuizCompleted,
    startQuiz,
    selectAnswer,
    checkAnswer,
    nextQuestion,
    resetQuiz,
  } = useQuiz();

  useEffect(() => {
    if (!topicId) {
      navigate("/");
      return;
    }
    
    startQuiz(topicId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicId, navigate]); // Removed startQuiz from dependency array to prevent infinite loops

  if (!currentTopic || questions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container py-16 flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Loading quiz...</h2>
            <Button onClick={() => navigate("/")} variant="outline">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (isQuizCompleted && quizResult) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container py-8 flex-1">
          <ResultSummary result={quizResult} onRetry={() => resetQuiz()} />
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container py-8 flex-1">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
            <h1 className="text-xl font-bold ml-4">{currentTopic.title} Quiz</h1>
          </div>
          
          <ProgressBar
            current={currentQuestionIndex}
            total={questions.length}
          />
          
          <div className="my-8 animate-fade-in">
            <h2 className="text-xl font-medium mb-6">
              {currentQuestion.question}
            </h2>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <QuizOption
                  key={index}
                  text={option}
                  index={index}
                  isSelected={selectedAnswer === index}
                  isCorrect={currentQuestion.correctAnswer === index}
                  isChecked={isAnswerChecked}
                  onClick={() => selectAnswer(index)}
                />
              ))}
            </div>
          </div>
          
          {isAnswerChecked && (
            <div className="p-4 bg-muted rounded-lg mb-6 animate-fade-in">
              <h3 className="font-medium mb-2">Explanation:</h3>
              <p>{currentQuestion.explanation}</p>
            </div>
          )}
          
          <div className="flex justify-end">
            {!isAnswerChecked ? (
              <Button
                className="bg-quiz-primary hover:bg-quiz-primary/90"
                disabled={selectedAnswer === null}
                onClick={checkAnswer}
              >
                Check Answer
              </Button>
            ) : (
              <Button
                className="bg-quiz-primary hover:bg-quiz-primary/90 flex items-center gap-2"
                onClick={nextQuestion}
              >
                {currentQuestionIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizPage;
