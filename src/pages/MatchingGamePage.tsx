
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import MatchingGame from "@/components/MatchingGame";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award } from "lucide-react";
import { quizTopics } from "@/data/quizData";

// Sample matching pairs data (in a real app, this would come from your data source)
const sampleMatchingPairs = [
  {
    id: "rag1",
    term: "RAG",
    definition: "Retrieval-Augmented Generation, combines LLMs with external knowledge retrieval"
  },
  {
    id: "vector1",
    term: "Vector Database",
    definition: "Specialized database that stores data as high-dimensional vectors for similarity search"
  },
  {
    id: "embedding1",
    term: "Embeddings",
    definition: "Dense vector representations of text that capture semantic meaning"
  },
  {
    id: "llm1",
    term: "Large Language Model",
    definition: "Neural network trained on vast text data to generate human-like text responses"
  },
  {
    id: "fineTuning1",
    term: "Fine-tuning",
    definition: "Process of further training a pre-trained model on a specific dataset"
  },
  {
    id: "token1",
    term: "Tokens",
    definition: "Chunks of text (words or subwords) that LLMs process as individual units"
  }
];

const MatchingGamePage: React.FC = () => {
  const navigate = useNavigate();
  const { topicId } = useParams<{ topicId: string }>();
  const [gameCompleted, setGameCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  
  const topic = topicId ? quizTopics.find(topic => topic.id === topicId) : null;
  
  const handleGameComplete = (matchCount: number, totalTime: number) => {
    setGameCompleted(true);
    setScore(matchCount);
    setTime(Math.round(totalTime));
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container py-8 flex-1">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
            <h1 className="text-xl font-bold">{topic ? `${topic.title} Matching Game` : 'AI Concepts Matching Game'}</h1>
          </div>
          
          <div className="bg-white rounded-lg border p-6 shadow-sm">
            <MatchingGame pairs={sampleMatchingPairs} onComplete={handleGameComplete} />
          </div>
          
          {gameCompleted && (
            <div className="mt-8 bg-quiz-accent p-6 rounded-lg animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8 text-quiz-primary" />
                <h2 className="text-xl font-bold">Game Complete!</h2>
              </div>
              <p className="mb-4">You matched all {score} pairs in {time} seconds.</p>
              <div className="flex gap-3">
                <Button onClick={() => navigate("/")} variant="outline">
                  Back to Topics
                </Button>
                <Button onClick={() => navigate(`/quiz/${topicId || "ai-basics"}`)} className="bg-quiz-primary hover:bg-quiz-primary/90">
                  Try a Quiz
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MatchingGamePage;
