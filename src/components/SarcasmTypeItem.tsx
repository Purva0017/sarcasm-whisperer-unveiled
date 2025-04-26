
import { useState } from "react";

interface SarcasmTypeItemProps {
  type: string;
  description: string;
}

export const SarcasmTypeItem = ({ type, description }: SarcasmTypeItemProps) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className="cursor-pointer"
      onClick={() => setIsSelected(!isSelected)}
    >
      <h3 className="text-[rgb(238,238,238)] hover:text-[rgb(0,173,181)] transition-colors">
        {type}
      </h3>
      {isSelected && (
        <p className="text-sm text-[rgb(238,238,238)]/70 mt-1 pl-2 border-l-2 border-[rgb(0,173,181)]">
          {description}
        </p>
      )}
    </div>
  );
};
