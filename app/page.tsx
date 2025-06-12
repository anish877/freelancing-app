'use client';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart2, ImageIcon, Code, Lightbulb, FileText, MoreHorizontal, ArrowUpIcon } from "lucide-react"
import Navbar from "@/components/layout/navBar"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { tokenManager } from "@/service/tokenService";
import { apiService } from "@/service/apiService";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = tokenManager.getToken();
        if (token) {
          const userData = await apiService.getProfile(token);
          if (userData.success) {
            setUser(userData.data.user);
          } else {
            tokenManager.removeToken();
            setUser(null);
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        tokenManager.removeToken();
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const handleLoginClick = () => {
    router.push('/auth/login');
  };

  const handleSignupClick = () => {
    router.push('/auth/signup');
  };

  const handleLogout = () => {
    tokenManager.removeToken();
    setUser(null);
    // Stay on the same page (home)
  };

  const handleSearch = () => {
    // Check if user is authenticated
    if (!user) {
      router.push('/auth/signup');
      return;
    }

    // If authenticated, proceed with search logic
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Add your search logic here
      // For example: router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleQuickAction = (action: string) => {
    // Check if user is authenticated for quick actions too
    if (!user) {
      router.push('/auth/signup');
      return;
    }

    console.log('Quick action:', action);
    // Add your quick action logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        brandName="futurejob"
        user={user}
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
        onLogout={handleLogout}
      />

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-medium mb-12">
            Who do you want to hire or what task needs to be done?
          </h1>

          <div className="relative mb-8">
            <Input 
              type="text" 
              placeholder="Ask anything" 
              className="pr-12 py-8 text-thin shadow-lg rounded-full px-5"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 mx-3"
              aria-label="Search"
              onClick={handleSearch}
            >
              <ArrowUpIcon className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => handleQuickAction('analyze-data')}
            >
              <BarChart2 className="mr-2 h-4 w-4" />
              Analyze data
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => handleQuickAction('analyze-images')}
            >
              <ImageIcon className="mr-2 h-4 w-4" />
              Analyze images
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => handleQuickAction('code')}
            >
              <Code className="mr-2 h-4 w-4" />
              Code
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => handleQuickAction('make-plan')}
            >
              <Lightbulb className="mr-2 h-4 w-4" />
              Make a plan
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => handleQuickAction('summarize-text')}
            >
              <FileText className="mr-2 h-4 w-4" />
              Summarize text
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => handleQuickAction('more')}
            >
              <MoreHorizontal className="mr-2 h-4 w-4" />
              More
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}