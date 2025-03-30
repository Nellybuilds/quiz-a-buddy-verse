
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

  let optionClass = "p-4 border rounded-lg transition-all cursor-pointer hover:bg-muted/50";
  
  if (isSelected) {
    optionClass = cn(optionClass, "border-primary");
    if (isChecked) {
      optionClass = cn(
        optionClass,
        isCorrect ? "bg-green-50 border-green-500" : "bg-red-50 border-red-500"
      );
    }
  } else if (isChecked && isCorrect) {
    optionClass = cn(optionClass, "bg-green-50 border-green-500");
  }

  // Disable clicking only if answer is already checked
  const handleClick = isChecked ? undefined : onClick;

  return (
    <div
      className={cn(optionClass, "flex items-center gap-3")}
      onClick={handleClick}
      role="button"
      tabIndex={isChecked ? -1 : 0}
    >
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-muted font-medium">
        {letter}
      </div>
      <div className="flex-grow">{text}</div>
      {isChecked && isSelected && (
        isCorrect ? (
          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
        ) : (
          <X className="flex-shrink-0 h-5 w-5 text-red-500" />
        )
      )}
    </div>
  );
};

export default QuizOption;
