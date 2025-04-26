import { useState } from "react";
import { Card } from "@/components/ui/card";

const sarcasmTypes = [
  {
    type: "Self-Deprecating Sarcasm",
    description: "Humorous and often exaggerated self-criticism, typically used to show humility or make light of one's own flaws."
  },
  {
    type: "Deadpan Sarcasm",
    description: "Delivered without emotion or any indication that the speaker is being sarcastic, making it particularly effective and subtle."
  },
  {
    type: "Brooding Sarcasm",
    description: "Dark or cynical observations delivered with a moody or contemplative tone."
  },
  {
    type: "Polite Sarcasm",
    description: "Sarcastic remarks disguised as courteous comments, often making them more cutting due to their deceptive nature."
  },
  {
    type: "Obnoxious Sarcasm",
    description: "Over-the-top, obvious sarcasm that's intended to be noticed and often accompanied by exaggerated gestures or tone."
  },
  {
    type: "Raging Sarcasm",
    description: "Angry or frustrated sarcasm used to express strong disapproval or irritation."
  },
  {
    type: "Manic Sarcasm",
    description: "Energetic, rapid-fire sarcastic comments often delivered in a stream of consciousness style."
  }
];

export const SarcasmTypes = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-10 w-[300px]">
      <Card className="bg-[rgb(57,62,70)] border-[rgb(0,173,181)] p-4 space-y-4">
        <h2 className="text-xl font-bold text-[rgb(0,173,181)]">Types of Sarcasm</h2>
        <div className="space-y-2">
          {sarcasmTypes.map((item) => (
            <div key={item.type} className="cursor-pointer" onClick={() => setSelectedType(item.type)}>
              <h3 className="text-[rgb(238,238,238)] hover:text-[rgb(0,173,181)] transition-colors">
                {item.type}
              </h3>
              {selectedType === item.type && (
                <p className="text-sm text-[rgb(238,238,238)]/70 mt-1 pl-2 border-l-2 border-[rgb(0,173,181)]">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
