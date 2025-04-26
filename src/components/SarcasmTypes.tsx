
import { Card } from "@/components/ui/card";
import { sarcasmTypes } from "@/data/sarcasmTypes";
import { SarcasmTypeItem } from "./SarcasmTypeItem";

export const SarcasmTypes = () => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-10 w-[300px]">
      <Card className="bg-[rgb(57,62,70)] border-[rgb(0,173,181)] p-4 space-y-4">
        <h2 className="text-xl font-bold text-[rgb(0,173,181)]">Types of Sarcasm</h2>
        <div className="space-y-2">
          {sarcasmTypes.map((item) => (
            <SarcasmTypeItem
              key={item.type}
              type={item.type}
              description={item.description}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};
