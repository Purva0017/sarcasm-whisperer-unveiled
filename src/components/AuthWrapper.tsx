
import { SignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { cn } from "@/lib/utils";

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 text-text">
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className={cn(
            "backdrop-blur-lg bg-background/30 p-8 rounded-lg",
            "border border-primary/20 shadow-xl",
            "animate-in fade-in-50 slide-in-from-bottom-5"
          )}>
            <SignIn />
          </div>
        </div>
      </SignedOut>
    </div>
  );
};
