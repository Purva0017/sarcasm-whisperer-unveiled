
import { AuthWrapper } from "@/components/AuthWrapper";
import { TweetAnalyzer } from "@/components/TweetAnalyzer";
import { UserButton } from "@clerk/clerk-react";

const Index = () => {
  return (
    <AuthWrapper>
      <div className="min-h-screen p-6">
        <header className="flex justify-between items-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-light to-accent">
            Sarcasm Whisperer
          </h1>
          <UserButton />
        </header>
        <TweetAnalyzer />
      </div>
    </AuthWrapper>
  );
};

export default Index;
