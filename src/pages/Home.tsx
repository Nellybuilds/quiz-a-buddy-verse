
import React from "react";
import { quizTopics } from "@/data/quizData";
import TopicCard from "@/components/TopicCard";
import Header from "@/components/Header";
import { Brain } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container py-8 flex-1">
        <section className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center p-4 bg-quiz-accent rounded-full mb-4">
            <Brain className="h-8 w-8 text-quiz-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-3">Welcome to QuizAI Buddy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge of AI application stacks with interactive quizzes on RAG systems, 
            vector databases, verification tools, and more.
          </p>
        </section>
        
        <section className="animate-slide-up">
          <h2 className="text-2xl font-bold mb-6">Quiz Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </section>
      </main>
      
      <footer className="py-6 border-t">
        <div className="container text-center text-sm text-muted-foreground">
          © 2023 QuizAI Buddy. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
