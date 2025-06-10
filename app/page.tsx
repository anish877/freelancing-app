'use client';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart2, ImageIcon, Code, Lightbulb, FileText, MoreHorizontal, ArrowUpIcon } from "lucide-react"
import Navbar from "@/components/layout/navBar" // Adjust path as needed
import { useState } from "react";
import AuthApp from "./auth/page";

export default function Home() {

  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  const handleLoginClick = () => {
    setAuthMode('login');
    setShowAuth(true);
  };

  const handleSignupClick = () => {
    setAuthMode('signup');
    setShowAuth(true);
  };

  if (showAuth) {
    return <AuthApp initialMode={authMode} onBack={() => setShowAuth(false)} />;
  }
  return (
    <div className="min-h-screen flex flex-col">
     <Navbar 
        brandName="futurejob"
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-medium mb-12">
            Who do you want to hire or what task needs to be done?
          </h1>

          <div className="relative mb-8">
            <Input type="text" placeholder="Ask anything" className="pr-12 py-8 text-thin shadow-lg rounded-full px-5" />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 mx-3"
              aria-label="Search"
            >
              <ArrowUpIcon className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <Button variant="outline" className="rounded-full">
              <BarChart2 className="mr-2 h-4 w-4" />
              Analyze data
            </Button>
            <Button variant="outline" className="rounded-full">
              <ImageIcon className="mr-2 h-4 w-4" />
              Analyze images
            </Button>
            <Button variant="outline" className="rounded-full">
              <Code className="mr-2 h-4 w-4" />
              Code
            </Button>
            <Button variant="outline" className="rounded-full">
              <Lightbulb className="mr-2 h-4 w-4" />
              Make a plan
            </Button>
            <Button variant="outline" className="rounded-full">
              <FileText className="mr-2 h-4 w-4" />
              Summarize text
            </Button>
            <Button variant="outline" className="rounded-full">
              <MoreHorizontal className="mr-2 h-4 w-4" />
              More
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}