
import { Heart, ExternalLink, Github, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200/50 dark:border-gray-800/50 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-950/50">
      <div className="container px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                setu.js
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Lightweight & blazing-fast HTTP client for modern JavaScript applications. 
              Built with passion for developer experience and performance.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://github.com/chaitanyaabhade/setu.js"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
              >
                <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://www.npmjs.com/package/setu.js"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
              >
                <Star className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>npm</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/docs" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/chaitanyaabhade/setu.js/releases" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Releases
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-4">Community</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="https://github.com/chaitanyaabhade/setu.js" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/chaitanyaabhade/setu.js/issues" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Issues
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/chaitanyaabhade/setu.js/discussions" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Discussions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200/50 dark:border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>by</span>
              <span className="font-medium text-gray-900 dark:text-gray-100 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Chaitanya Abhade
              </span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 setu.js. Open source under MIT license.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
