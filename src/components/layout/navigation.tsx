
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, GitBranch } from "lucide-react";

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-xl dark:bg-gray-950/80 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <Link className="flex items-center space-x-3" to="/">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                setu.js
              </div>
              <Badge variant="outline" className="border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs px-2 py-0">
                v1.0
              </Badge>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link
              to="/"
              className={`transition-colors hover:text-purple-600 dark:hover:text-purple-400 relative ${
                location.pathname === "/" 
                  ? "text-purple-600 dark:text-purple-400" 
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Home
              {location.pathname === "/" && (
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
              )}
            </Link>
            <Link
              to="/docs"
              className={`transition-colors hover:text-purple-600 dark:hover:text-purple-400 relative ${
                location.pathname === "/docs" 
                  ? "text-purple-600 dark:text-purple-400" 
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Documentation
              {location.pathname === "/docs" && (
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
              )}
            </Link>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Link to="/" className="font-bold text-lg">
              setu.js
            </Link>
          </div>
          
          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/20"
            >
              <a
                href="https://github.com/chaitanyaabhade/setu.js"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2"
              >
                <GitBranch className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/20"
            >
              <a
                href="https://www.npmjs.com/package/setu.js"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2"
              >
                <Star className="h-4 w-4" />
                <span>npm</span>
              </a>
            </Button>
          </div>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
