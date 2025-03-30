
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Database, DatabaseBackup, Check, Settings, Layers } from "lucide-react";
import { QuizTopic } from "@/types/quiz";

interface TopicCardProps {
  topic: QuizTopic;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  const navigate = useNavigate();
  
  const getIcon = () => {
    switch (topic.icon) {
      case "database":
        return <Database className="h-6 w-6 text-quiz-primary" />;
      case "database-backup":
        return <DatabaseBackup className="h-6 w-6 text-quiz-primary" />;
      case "check":
        return <Check className="h-6 w-6 text-quiz-primary" />;
      case "settings":
        return <Settings className="h-6 w-6 text-quiz-primary" />;
      case "layers":
        return <Layers className="h-6 w-6 text-quiz-primary" />;
      default:
        return <Database className="h-6 w-6 text-quiz-primary" />;
    }
  };

  const handleStartQuiz = () => {
    navigate(`/quiz/${topic.id}`);
  };

  return (
    <Card className="card-hover overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          {getIcon()}
          <CardTitle>{topic.title}</CardTitle>
        </div>
        <CardDescription>{topic.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{topic.questionCount} questions</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-quiz-primary hover:bg-quiz-primary/90" onClick={handleStartQuiz}>
          Start Quiz
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TopicCard;
