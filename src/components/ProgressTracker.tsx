
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";

interface ProgressTrackerProps {
  correctAnswers: number;
  totalQuestions: number;
  averageScore?: number;
  completedQuizzes?: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  correctAnswers,
  totalQuestions,
  averageScore = 0,
  completedQuizzes = 0
}) => {
  const currentProgress = totalQuestions > 0 
    ? Math.round((correctAnswers / totalQuestions) * 100) 
    : 0;
    
  const getProgressColor = (value: number): string => {
    if (value >= 80) return "bg-green-500";
    if (value >= 60) return "bg-yellow-500";
    return "bg-quiz-primary";
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Your Progress</h3>
        <div className="flex items-center gap-1 text-yellow-500">
          <Star className="h-4 w-4 fill-yellow-500" />
          <span className="text-sm font-medium">{currentProgress}%</span>
        </div>
      </div>
      
      <Progress 
        value={currentProgress} 
        className={`h-2 ${getProgressColor(currentProgress)}`} 
      />
      
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-muted p-3 rounded-lg">
          <div className="text-sm text-muted-foreground">Correct</div>
          <div className="text-lg font-bold text-quiz-correct">{correctAnswers}</div>
        </div>
        <div className="bg-muted p-3 rounded-lg">
          <div className="text-sm text-muted-foreground">Total</div>
          <div className="text-lg font-bold">{totalQuestions}</div>
        </div>
      </div>
      
      {completedQuizzes > 0 && (
        <div className="bg-muted/50 p-3 rounded-lg text-center">
          <div className="text-sm text-muted-foreground">Average Score</div>
          <div className="text-lg font-bold">{averageScore.toFixed(1)}%</div>
          <div className="text-xs text-muted-foreground">
            across {completedQuizzes} completed quizzes
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressTracker;
