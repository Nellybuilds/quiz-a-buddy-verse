
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";
import { cn } from "@/lib/utils";

interface MatchingPair {
  id: string;
  term: string;
  definition: string;
}

interface MatchingGameProps {
  pairs: MatchingPair[];
  onComplete?: (score: number, totalTime: number) => void;
}

const MatchingGame: React.FC<MatchingGameProps> = ({ pairs, onComplete }) => {
  const [terms, setTerms] = useState<(MatchingPair & { isSelected: boolean; isMatched: boolean })[]>([]);
  const [definitions, setDefinitions] = useState<(MatchingPair & { isSelected: boolean; isMatched: boolean })[]>([]);
  const [selectedTerm, setSelectedTerm] = useState<MatchingPair | null>(null);
  const [selectedDefinition, setSelectedDefinition] = useState<MatchingPair | null>(null);
  const [matches, setMatches] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [gameCompleted, setGameCompleted] = useState(false);

  // Initialize and shuffle the game
  const initializeGame = () => {
    // Reset states
    setMatches([]);
    setSelectedTerm(null);
    setSelectedDefinition(null);
    setGameCompleted(false);
    setStartTime(Date.now());

    // Shuffle terms and definitions
    const shuffledTerms = [...pairs].sort(() => Math.random() - 0.5).map(pair => ({
      ...pair,
      isSelected: false,
      isMatched: false
    }));
    
    const shuffledDefinitions = [...pairs].sort(() => Math.random() - 0.5).map(pair => ({
      ...pair,
      isSelected: false,
      isMatched: false
    }));

    setTerms(shuffledTerms);
    setDefinitions(shuffledDefinitions);
  };

  // Initialize the game on component mount
  useEffect(() => {
    initializeGame();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Check if the game is completed
  useEffect(() => {
    if (matches.length === pairs.length && !gameCompleted) {
      setGameCompleted(true);
      const totalTime = startTime ? (Date.now() - startTime) / 1000 : 0;
      if (onComplete) {
        onComplete(matches.length, totalTime);
      }
    }
  }, [matches, pairs.length, gameCompleted, onComplete, startTime]);

  // Handle term selection
  const handleTermClick = (term: MatchingPair & { isSelected: boolean; isMatched: boolean }) => {
    if (term.isMatched || (selectedTerm && selectedDefinition)) return;

    // Update term selection state
    setTerms(terms.map(t => 
      t.id === term.id ? { ...t, isSelected: true } : { ...t, isSelected: false }
    ));
    setSelectedTerm(term);

    // Check for a match if a definition is already selected
    if (selectedDefinition) {
      checkForMatch(term, selectedDefinition);
    }
  };

  // Handle definition selection
  const handleDefinitionClick = (definition: MatchingPair & { isSelected: boolean; isMatched: boolean }) => {
    if (definition.isMatched || (selectedTerm && selectedDefinition)) return;

    // Update definition selection state
    setDefinitions(definitions.map(d => 
      d.id === definition.id ? { ...d, isSelected: true } : { ...d, isSelected: false }
    ));
    setSelectedDefinition(definition);

    // Check for a match if a term is already selected
    if (selectedTerm) {
      checkForMatch(selectedTerm, definition);
    }
  };

  // Check if the selected term and definition match
  const checkForMatch = (term: MatchingPair, definition: MatchingPair) => {
    // Disable further selections briefly
    setSelectedTerm(term);
    setSelectedDefinition(definition);

    // Check if they match (same id)
    const isMatch = term.id === definition.id;

    setTimeout(() => {
      if (isMatch) {
        // Update matched pairs
        setMatches([...matches, term.id]);
        
        // Update UI state for matches
        setTerms(terms.map(t => 
          t.id === term.id ? { ...t, isMatched: true, isSelected: false } : t
        ));
        setDefinitions(definitions.map(d => 
          d.id === definition.id ? { ...d, isMatched: true, isSelected: false } : d
        ));
      } else {
        // Reset selections if no match
        setTerms(terms.map(t => ({ ...t, isSelected: false })));
        setDefinitions(definitions.map(d => ({ ...d, isSelected: false })));
      }
      
      // Clear selections
      setSelectedTerm(null);
      setSelectedDefinition(null);
    }, 1000); // Delay to show the selection before resolving
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Matching Game</h2>
        <Button onClick={initializeGame} variant="outline" size="sm" className="flex items-center gap-2">
          <Shuffle className="h-4 w-4" />
          Shuffle
        </Button>
      </div>
      
      <div className="p-2 bg-quiz-accent rounded-lg text-sm">
        Match each term with its correct definition by clicking on them.
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <h3 className="font-medium text-center py-2 bg-muted rounded-md">Terms</h3>
          <div className="space-y-2">
            {terms.map((term) => (
              <div
                key={`term-${term.id}`}
                className={cn(
                  "p-4 border rounded-lg transition-all cursor-pointer hover:bg-muted/50",
                  term.isSelected && "border-quiz-primary bg-quiz-accent/50",
                  term.isMatched && "border-green-500 bg-green-50 opacity-60",
                )}
                onClick={() => !term.isMatched && handleTermClick(term)}
                role="button"
                tabIndex={term.isMatched ? -1 : 0}
              >
                {term.term}
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium text-center py-2 bg-muted rounded-md">Definitions</h3>
          <div className="space-y-2">
            {definitions.map((definition) => (
              <div
                key={`def-${definition.id}`}
                className={cn(
                  "p-4 border rounded-lg transition-all cursor-pointer hover:bg-muted/50",
                  definition.isSelected && "border-quiz-primary bg-quiz-accent/50",
                  definition.isMatched && "border-green-500 bg-green-50 opacity-60",
                )}
                onClick={() => !definition.isMatched && handleDefinitionClick(definition)}
                role="button"
                tabIndex={definition.isMatched ? -1 : 0}
              >
                {definition.definition}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          Matches: <span className="font-medium">{matches.length} / {pairs.length}</span>
        </div>
        {gameCompleted && (
          <div className="p-2 px-4 bg-green-50 text-green-700 rounded-md font-medium animate-fade-in">
            All matches found! 🎉
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchingGame;
