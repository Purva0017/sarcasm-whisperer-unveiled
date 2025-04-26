
import { AuthWrapper } from "@/components/AuthWrapper";
import { TweetAnalyzer } from "@/components/TweetAnalyzer";
import { SarcasmConverter } from "@/components/SarcasmConverter";
import { UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";
import { SarcasmTypes } from "@/components/SarcasmTypes";
import { Button } from "@/components/ui/button";
import { Code, Search } from "lucide-react";

const Index = () => {
  return (
    <AuthWrapper>
      <div className="min-h-screen p-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="flex justify-between items-center mb-12">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Sarcasm Whisperer
              </h1>
              <p className="text-text/70">
                Unraveling the art of digital sarcasm, one tweet at a time
              </p>
            </div>
            <div className="flex gap-4">
              <SignInButton mode="modal">
                <Button variant="outline" className="text-text border-primary hover:bg-primary/20">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="bg-primary hover:bg-primary/80 text-background">
                  Sign Up
                </Button>
              </SignUpButton>
              <UserButton afterSignOutUrl="/" />
            </div>
          </header>

          {/* Main Content */}
          <div className="relative flex justify-center gap-8">
            <div className="flex-1 max-w-2xl space-y-6">
              <div className="flex gap-4 justify-center mb-8">
                <Button 
                  className="bg-secondary hover:bg-secondary/80 text-background gap-2"
                  onClick={() => document.getElementById('tweet-analyzer')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Search className="w-4 h-4" />
                  Detect Sarcasm
                </Button>
                <Button 
                  className="bg-primary hover:bg-primary/80 text-background gap-2"
                  onClick={() => document.getElementById('sarcasm-converter')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Code className="w-4 h-4" />
                  Convert to Sarcasm
                </Button>
              </div>
              
              <div id="tweet-analyzer">
                <TweetAnalyzer />
              </div>
              <div id="sarcasm-converter">
                <SarcasmConverter />
              </div>
              
              {/* Decorative Images */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img
                  src="photo-1526374965328-7f61d4dc18c5"
                  alt="Tech Theme"
                  className="w-full h-48 object-cover rounded-lg opacity-30 hover:opacity-50 transition-opacity"
                />
                <img
                  src="photo-1486312338219-ce68d2c6f44d"
                  alt="Digital Theme"
                  className="w-full h-48 object-cover rounded-lg opacity-30 hover:opacity-50 transition-opacity"
                />
              </div>
            </div>
            
            {/* Side Panel */}
            <SarcasmTypes />
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Index;
