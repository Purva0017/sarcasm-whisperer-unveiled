
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
      "bg-[rgb(57,62,70)] border-[rgb(0,173,181)] text-[rgb(238,238,238)]"
    )}>
      <h3 className="text-xl font-semibold text-[rgb(0,173,181)]">
        Convert to Sarcasm
      </h3>
      <div className="space-y-4">
        <Input
          placeholder="Enter text to convert to sarcasm..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-[rgb(57,62,70)] border-[rgb(0,173,181)] text-[rgb(238,238,238)] placeholder:text-[rgb(238,238,238)]/50"
        />
        <Button
          onClick={convertToSarcasm}
          className="w-full bg-[rgb(0,173,181)] hover:bg-[rgb(0,153,161)] text-[rgb(238,238,238)]"
        >
          Convert to Sarcasm
        </Button>
      </div>
      {output && (
        <div className="pt-4 border-t border-[rgb(0,173,181)]/30">
          <p className="text-[rgb(238,238,238)]">{output}</p>
        </div>
      )}
    </Card>
  );
};
