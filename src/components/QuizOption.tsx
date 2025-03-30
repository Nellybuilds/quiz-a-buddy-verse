
import React from "react";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface QuizOptionProps {
  text: string;
  index: number;
  isSelected: boolean;
  isCorrect?: boolean;
  isChecked: boolean;
  onClick: () => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({
  text,
  index,
  isSelected,
  isCorrect,
  isChecked,
  onClick,
}) => {
  const letterMap = ["A", "B", "C", "D"];
  const letter = letterMap[index];

  let optionClass = "quiz-option";
  if (isSelected) {
    optionClass = cn(optionClass, "selected");
    if (isChecked) {
      optionClass = cn(
        optionClass,
        isCorrect ? "correct" : "incorrect"
      );
    }
  } else if (isChecked && isCorrect) {
    optionClass = cn(optionClass, "correct");
  }

  return (
    <div
      className={cn(optionClass, "flex items-center gap-3")}
      onClick={isChecked ? undefined : onClick}
    >
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-muted font-medium">
        {letter}
      </div>
      <div className="flex-grow">{text}</div>
      {isChecked && isSelected && (
        isCorrect ? (
          <Check className="flex-shrink-0 h-5 w-5 text-quiz-correct" />
        ) : (
          <X className="flex-shrink-0 h-5 w-5 text-quiz-incorrect" />
        )
      )}
    </div>
  );
};

export default QuizOption;
