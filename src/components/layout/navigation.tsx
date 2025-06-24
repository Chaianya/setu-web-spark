
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" to="/">
            <div className="font-bold text-xl">setu.js</div>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              to="/"
              className={`transition-colors hover:text-foreground/80 ${
                location.pathname === "/" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Home
            </Link>
            <Link
              to="/docs"
              className={`transition-colors hover:text-foreground/80 ${
                location.pathname === "/docs" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Documentation
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="md:hidden">
              <Link to="/" className="font-bold text-xl">
                setu.js
              </Link>
            </div>
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/chaitanyaabhade/setu.js"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://www.npmjs.com/package/setu.js"
                target="_blank"
                rel="noreferrer"
              >
                npm
              </a>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </nav>
  );
}
