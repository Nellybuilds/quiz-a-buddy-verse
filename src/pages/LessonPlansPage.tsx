
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Check, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample lesson data - in a real app, this would come from your API or database
const lessonPlans = [
  {
    id: "lesson-1",
    title: "Introduction to AI Fundamentals",
    description: "Learn the basic concepts and terminology of artificial intelligence.",
    duration: "30 min",
    difficulty: "Beginner",
    topics: ["AI Basics", "Machine Learning", "Neural Networks"],
    content: `
      <h2>What is Artificial Intelligence?</h2>
      <p>Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.</p>
      
      <h3>Key Concepts:</h3>
      <ul>
        <li><strong>Machine Learning:</strong> A subset of AI that focuses on developing systems that can learn from data.</li>
        <li><strong>Neural Networks:</strong> Computing systems inspired by biological neural networks that can learn to perform tasks by considering examples.</li>
        <li><strong>Deep Learning:</strong> A type of machine learning based on artificial neural networks with multiple layers.</li>
      </ul>
      
      <h3>Applications of AI:</h3>
      <ul>
        <li>Natural Language Processing</li>
        <li>Computer Vision</li>
        <li>Robotics</li>
        <li>Expert Systems</li>
      </ul>
    `,
    relatedQuizzes: ["ai-basics"]
  },
  {
    id: "lesson-2",
    title: "Retrieval-Augmented Generation (RAG)",
    description: "Understand how RAG systems combine retrieval mechanisms with generative models.",
    duration: "45 min",
    difficulty: "Intermediate",
    topics: ["RAG", "Vector Databases", "Embeddings"],
    content: `
      <h2>What is Retrieval-Augmented Generation?</h2>
      <p>Retrieval-Augmented Generation (RAG) is an approach that combines retrieval-based methods with generative models to enhance the quality and factual accuracy of AI-generated content.</p>
      
      <h3>How RAG Works:</h3>
      <ol>
        <li><strong>Information Retrieval:</strong> The system first retrieves relevant documents or passages from a knowledge base.</li>
        <li><strong>Content Generation:</strong> A language model then generates responses based on both the query and the retrieved information.</li>
      </ol>
      
      <h3>Components of RAG Systems:</h3>
      <ul>
        <li><strong>Vector Databases:</strong> Store embeddings for efficient similarity search</li>
        <li><strong>Embedding Models:</strong> Convert text into vector representations</li>
        <li><strong>Large Language Models:</strong> Generate coherent responses based on context</li>
      </ul>
      
      <h3>Benefits of RAG:</h3>
      <ul>
        <li>Improved factual accuracy</li>
        <li>Reduced hallucinations</li>
        <li>Better knowledge grounding</li>
        <li>More up-to-date responses</li>
      </ul>
    `,
    relatedQuizzes: ["rag-systems"]
  },
  {
    id: "lesson-3",
    title: "Vector Databases and Similarity Search",
    description: "Explore how vector databases enable efficient similarity search for AI applications.",
    duration: "40 min",
    difficulty: "Intermediate",
    topics: ["Vector Databases", "Embeddings", "Similarity Search"],
    content: `
      <h2>Vector Databases and Similarity Search</h2>
      <p>Vector databases are specialized database systems designed to store, index, and query high-dimensional vector embeddings efficiently.</p>
      
      <h3>Key Concepts:</h3>
      <ul>
        <li><strong>Embeddings:</strong> Dense numerical representations that capture semantic meaning</li>
        <li><strong>Vector Similarity:</strong> Measuring how close vectors are in the embedding space (cosine similarity, Euclidean distance)</li>
        <li><strong>Approximate Nearest Neighbor (ANN):</strong> Algorithms that find similar vectors efficiently</li>
      </ul>
      
      <h3>Popular Vector Database Systems:</h3>
      <ul>
        <li>Pinecone</li>
        <li>Weaviate</li>
        <li>Milvus</li>
        <li>Qdrant</li>
        <li>Chroma</li>
      </ul>
      
      <h3>Applications:</h3>
      <ul>
        <li>Semantic search</li>
        <li>Recommendation systems</li>
        <li>Anomaly detection</li>
        <li>Image and audio similarity</li>
      </ul>
    `,
    relatedQuizzes: ["vector-databases"]
  }
];

const LessonPlansPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  
  const toggleLessonCompletion = (lessonId: string) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter(id => id !== lessonId));
    } else {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };
  
  const currentLesson = selectedLesson 
    ? lessonPlans.find(lesson => lesson.id === selectedLesson) 
    : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container py-8 flex-1">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>
          <h1 className="text-2xl font-bold ml-4">Lesson Plans</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-6">
            {lessonPlans.map((lesson) => (
              <Card key={lesson.id} className={`
                cursor-pointer transition-all hover:shadow-md
                ${selectedLesson === lesson.id ? 'border-primary ring-1 ring-primary' : ''}
              `} onClick={() => setSelectedLesson(lesson.id)}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{lesson.title}</CardTitle>
                    {completedLessons.includes(lesson.id) && (
                      <div className="flex-shrink-0 bg-green-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                    )}
                  </div>
                  <CardDescription className="line-clamp-2">{lesson.description}</CardDescription>
                </CardHeader>
                <CardFooter className="pt-2 flex justify-between items-center text-sm">
                  <Badge variant="outline">{lesson.difficulty}</Badge>
                  <span className="text-muted-foreground">{lesson.duration}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="md:col-span-2">
            {currentLesson ? (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>{currentLesson.title}</CardTitle>
                      <CardDescription>{currentLesson.description}</CardDescription>
                    </div>
                    <Button 
                      variant={completedLessons.includes(currentLesson.id) ? "outline" : "default"}
                      size="sm"
                      onClick={() => toggleLessonCompletion(currentLesson.id)}
                    >
                      {completedLessons.includes(currentLesson.id) ? 'Mark Incomplete' : 'Mark Complete'}
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {currentLesson.topics.map((topic, idx) => (
                      <Badge key={idx} variant="secondary">{topic}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="content">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="content">Lesson Content</TabsTrigger>
                      <TabsTrigger value="resources">Resources</TabsTrigger>
                    </TabsList>
                    <TabsContent value="content" className="mt-4">
                      <div 
                        className="prose prose-sm max-w-none" 
                        dangerouslySetInnerHTML={{ __html: currentLesson.content }}
                      />
                    </TabsContent>
                    <TabsContent value="resources" className="mt-4">
                      <div className="space-y-4">
                        <h3 className="font-medium">Related Quizzes</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {currentLesson.relatedQuizzes.map((quizId, idx) => (
                            <Button 
                              key={idx}
                              variant="outline" 
                              className="justify-start"
                              onClick={() => navigate(`/quiz/${quizId}`)}
                            >
                              <BookOpen className="mr-2 h-4 w-4" />
                              Take Quiz: {quizId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </Button>
                          ))}
                        </div>
                        
                        <h3 className="font-medium mt-6">External Resources</h3>
                        <div className="grid grid-cols-1 gap-2">
                          <Button variant="link" className="justify-start">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Understanding AI Applications
                          </Button>
                          <Button variant="link" className="justify-start">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Introduction to Vector Embeddings
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ) : (
              <div className="h-full flex items-center justify-center bg-muted/30 rounded-lg p-12 text-center">
                <div>
                  <BookOpen className="h-12 w-12 text-muted mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-1">Select a Lesson</h3>
                  <p className="text-muted-foreground">
                    Choose a lesson from the list to view its content
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LessonPlansPage;
