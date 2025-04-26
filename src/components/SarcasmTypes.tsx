
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Info } from "lucide-react"

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
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-10">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="bg-[rgb(0,173,181)] hover:bg-[rgb(0,153,161)] text-white">
            <Info className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] bg-[rgb(34,40,49)] text-[rgb(238,238,238)] border-l border-[rgb(57,62,70)]">
          <SheetHeader>
            <SheetTitle className="text-[rgb(238,238,238)]">Types of Sarcasm</SheetTitle>
            <SheetDescription className="text-[rgb(120,122,145)]">
              Click on each type to learn more about different forms of sarcasm.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            {sarcasmTypes.map((item) => (
              <div key={item.type} className="space-y-2">
                <h3 className="font-semibold text-[rgb(0,173,181)]">{item.type}</h3>
                <p className="text-sm text-[rgb(238,238,238)]/80">{item.description}</p>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
