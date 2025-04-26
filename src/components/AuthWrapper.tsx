
import { SignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { cn } from "@/lib/utils";

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-primary text-light">
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <div className="flex min-h-screen items-center justify-center">
          <div className={cn(
            "backdrop-blur-lg bg-white/10 p-8 rounded-lg",
            "border border-white/20 shadow-xl"
          )}>
            <SignIn />
          </div>
        </div>
      </SignedOut>
    </div>
  );
};
