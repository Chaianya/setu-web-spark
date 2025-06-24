
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { GitBranch, Star } from "lucide-react";

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <Link className="flex items-center space-x-3" to="/">
            <div className="font-light text-xl text-black dark:text-white">
              setu.js
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-normal">
            <Link
              to="/"
              className={`transition-colors hover:text-black dark:hover:text-white relative ${
                location.pathname === "/" 
                  ? "text-black dark:text-white" 
                  : "text-black/60 dark:text-white/60"
              }`}
            >
              Home
              {location.pathname === "/" && (
                <div className="absolute -bottom-2 left-0 right-0 h-px bg-black dark:bg-white" />
              )}
            </Link>
            <Link
              to="/docs"
              className={`transition-colors hover:text-black dark:hover:text-white relative ${
                location.pathname === "/docs" 
                  ? "text-black dark:text-white" 
                  : "text-black/60 dark:text-white/60"
              }`}
            >
              Documentation
              {location.pathname === "/docs" && (
                <div className="absolute -bottom-2 left-0 right-0 h-px bg-black dark:bg-white" />
              )}
            </Link>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
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
              className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
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
