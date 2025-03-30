
import React from "react";
import { Brain } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-quiz-primary" />
          <span className="font-bold text-xl">QuizAI Buddy</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Your AI Study Companion</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
