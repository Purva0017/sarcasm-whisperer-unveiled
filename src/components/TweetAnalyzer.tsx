
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const TweetAnalyzer = () => {
  const [tweet, setTweet] = useState("");
  const [result, setResult] = useState<{
    isSarcastic: boolean;
    confidence: number;
    highlights: string[];
  } | null>(null);

  const analyzeTweet = () => {
    // Mockup analysis for demonstration
    const mockResult = {
      isSarcastic: Math.random() > 0.5,
      confidence: Math.random() * 100,
      highlights: ["great", "amazing", "!!!"],
    };
    setResult(mockResult);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="space-y-4">
        <Input
          placeholder="Enter your tweet for analysis..."
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          className="bg-white/10 border-white/20 text-light placeholder:text-accent"
        />
        <Button
          onClick={analyzeTweet}
          className="w-full bg-secondary hover:bg-secondary/90 text-light"
        >
          Analyze Sarcasm
        </Button>
      </div>

      {result && (
        <Card className={cn(
          "p-6 space-y-4 backdrop-blur-lg",
          "bg-white/10 border-white/20"
        )}>
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">
              {result.isSarcastic ? "Sarcastic" : "Genuine"}
            </h3>
            <div className="text-sm">
              Confidence: {result.confidence.toFixed(1)}%
            </div>
          </div>
          <div className="text-sm opacity-80">
            Key indicators:
            <div className="mt-2 flex gap-2 flex-wrap">
              {result.highlights.map((word) => (
                <span
                  key={word}
                  className="px-2 py-1 rounded-full bg-secondary/50 text-xs"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
