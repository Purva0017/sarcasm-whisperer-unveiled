
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SarcasmTypeItemProps {
  type: string;
  description: string;
}

export const SarcasmTypeItem = ({ type, description }: SarcasmTypeItemProps) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className="cursor-pointer rounded-lg bg-background/50 p-4 hover:bg-background/80 transition-all duration-200"
      onClick={() => setIsSelected(!isSelected)}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-primary hover:text-secondary transition-colors">
          {type}
        </h3>
        {isSelected ? (
          <ChevronUp className="text-secondary w-4 h-4" />
        ) : (
          <ChevronDown className="text-primary w-4 h-4" />
        )}
      </div>
      {isSelected && (
        <p className="text-sm text-text/70 mt-3 pl-3 border-l-2 border-secondary animate-in fade-in slide-in-from-top-1 duration-200">
          {description}
        </p>
      )}
    </div>
  );
};
