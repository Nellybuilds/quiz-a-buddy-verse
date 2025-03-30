
import React from "react";
import { QuizResult } from "@/types/quiz";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { Home, RotateCcw } from "lucide-react";

interface ResultSummaryProps {
  result: QuizResult;
  onRetry: () => void;
}

const ResultSummary: React.FC<ResultSummaryProps> = ({ result, onRetry }) => {
  const navigate = useNavigate();
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-quiz-correct";
    if (score >= 60) return "text-yellow-500";
    return "text-quiz-incorrect";
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-quiz-primary to-quiz-secondary text-white">
          <CardTitle className="text-center">Quiz Completed!</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-1">
              Topic: {result.topic.title}
            </h2>
            <div className="flex justify-center mb-4">
              <div className="text-4xl font-bold mb-2 mt-4 relative inline-block">
                <span className={getScoreColor(result.score)}>
                  {Math.round(result.score)}%
                </span>
              </div>
            </div>
            <Progress value={result.score} className="h-3 w-48 mx-auto" />
          </div>

          <div className="grid grid-cols-2 gap-4 text-center mb-6">
            <div className="p-3 rounded-lg bg-muted">
              <div className="text-2xl font-bold text-quiz-correct">
                {result.correctAnswers}
              </div>
              <div className="text-sm text-muted-foreground">Correct</div>
            </div>
            <div className="p-3 rounded-lg bg-muted">
              <div className="text-2xl font-bold text-quiz-incorrect">
                {result.incorrectAnswers}
              </div>
              <div className="text-sm text-muted-foreground">Incorrect</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => navigate("/")}
            >
              <Home size={16} />
              <span>Home</span>
            </Button>
            <Button 
              className="bg-quiz-primary hover:bg-quiz-primary/90 flex items-center gap-2"
              onClick={onRetry}
            >
              <RotateCcw size={16} />
              <span>Retry Quiz</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Question Review</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {result.answeredQuestions.map((item, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <div className="flex items-start gap-2 mb-2">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${
                  item.isCorrect ? "bg-quiz-correct" : "bg-quiz-incorrect"
                }`}>
                  {item.isCorrect ? "✓" : "✗"}
                </div>
                <h4 className="font-medium">{item.question.question}</h4>
              </div>
              <div className="pl-8">
                <p className="text-sm mb-1">
                  <span className="font-medium">Your answer: </span>
                  {item.selectedAnswer >= 0 
                    ? item.question.options[item.selectedAnswer] 
                    : "No answer selected"}
                </p>
                {!item.isCorrect && (
                  <p className="text-sm mb-2">
                    <span className="font-medium">Correct answer: </span>
                    {item.question.options[item.question.correctAnswer]}
                  </p>
                )}
                <p className="text-sm text-muted-foreground mt-2 bg-muted p-2 rounded">
                  {item.question.explanation}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultSummary;
