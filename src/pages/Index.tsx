
import { AuthWrapper } from "@/components/AuthWrapper";
import { TweetAnalyzer } from "@/components/TweetAnalyzer";
import { UserButton } from "@clerk/clerk-react";
import { SarcasmTypes } from "@/components/SarcasmTypes";

const Index = () => {
  return (
    <AuthWrapper>
      <div className="min-h-screen p-6 bg-[rgb(34,40,49)]">
        <header className="flex justify-between items-center max-w-2xl mx-auto mb-12">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(0,173,181)] to-[rgb(238,238,238)]">
              Sarcasm Whisperer
            </h1>
            <p className="text-[rgb(238,238,238)]/70">
              Unraveling the art of digital sarcasm, one tweet at a time
            </p>
          </div>
          <UserButton />
        </header>
        <div className="relative">
          <TweetAnalyzer />
          <SarcasmTypes />
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Index;
