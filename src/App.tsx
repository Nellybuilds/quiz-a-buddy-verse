import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import MatchingGamePage from "./pages/MatchingGamePage";
import LessonPlansPage from "./pages/LessonPlansPage";
import NotFound from "./pages/NotFound";
import './App.css'; // Added CSS import
import { VectorSearch } from './components/VectorSearch'; // Added import for VectorSearch

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <QuizProvider>
        <BrowserRouter>
          <div className="App"> {/* Added div for VectorSearch */}
            <h1>Welcome to the Quiz App</h1>
            <VectorSearch /> {/* Added VectorSearch component */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz/:topicId" element={<QuizPage />} />
              <Route path="/matching-game/:topicId?" element={<MatchingGamePage />} />
              <Route path="/lessons" element={<LessonPlansPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div> {/* Closing div */}
        </BrowserRouter>
      </QuizProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


// Minimal VectorSearch component (replace with your actual implementation)
export const VectorSearch = () => {
  return (
    <div>
      <h2>Search (Placeholder)</h2>
      <input type="text" placeholder="Enter search query" />
      <button>Search</button>
      <ul>
        {/* Results would go here */}
      </ul>
    </div>
  );
};