
import { AuthWrapper } from "@/components/AuthWrapper";
import { TweetAnalyzer } from "@/components/TweetAnalyzer";
import { SarcasmConverter } from "@/components/SarcasmConverter";
import { UserButton } from "@clerk/clerk-react";
import { SarcasmTypes } from "@/components/SarcasmTypes";

const Index = () => {
  return (
    <AuthWrapper>
      <div className="min-h-screen p-6 bg-[rgb(34,40,49)]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="flex justify-between items-center mb-12">
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

          {/* Main Content */}
          <div className="relative flex justify-center gap-8">
            <div className="flex-1 max-w-2xl space-y-6">
              <TweetAnalyzer />
              <SarcasmConverter />
              
              {/* Decorative Images */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img
                  src="photo-1526374965328-7f61d4dc18c5"
                  alt="Tech Theme"
                  className="w-full h-48 object-cover rounded-lg opacity-50"
                />
                <img
                  src="photo-1486312338219-ce68d2c6f44d"
                  alt="Digital Theme"
                  className="w-full h-48 object-cover rounded-lg opacity-50"
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
