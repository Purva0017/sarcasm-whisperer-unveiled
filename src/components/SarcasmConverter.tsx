
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  analyzedTweet?: string;
};

export const SarcasmConverter = ({ analyzedTweet }: Props) => {
  const [input, setInput] = useState(analyzedTweet || "");
  const [output, setOutput] = useState("");

  const convertToSarcasm = () => {
    // Mock conversion - in real app, this would use an API
    const sarcastic = input
      .split(" ")
      .map((word, i) => i % 2 === 0 ? word.toUpperCase() : word.toLowerCase())
      .join(" ") + " 😏";
    setOutput(sarcastic);
  };

  return (
    <Card className={cn(
      "p-6 space-y-4",
      "bg-background/50 border-primary text-text"
    )}>
      <h3 className="text-xl font-semibold text-secondary">
        Convert to Sarcasm
      </h3>
      <div className="space-y-4">
        <Input
          placeholder="Enter text to convert to sarcasm..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-background/50 border-primary text-text placeholder:text-text/50"
        />
        <Button
          onClick={convertToSarcasm}
          className="w-full bg-primary hover:bg-primary/80 text-background"
        >
          Convert to Sarcasm
        </Button>
      </div>
      {output && (
        <div className="pt-4 border-t border-primary/30">
          <p className="text-text">{output}</p>
        </div>
      )}
    </Card>
  );
};
