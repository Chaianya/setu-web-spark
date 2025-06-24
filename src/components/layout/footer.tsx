
import { ExternalLink, Github, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-white dark:bg-black">
      <div className="container px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-light text-xl text-black dark:text-white mb-4">
              setu.js
            </div>
            <p className="text-black/60 dark:text-white/60 text-sm font-light leading-relaxed max-w-md">
              Lightweight & blazing-fast HTTP client for modern JavaScript applications. 
              Built with passion for developer experience and performance.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://github.com/chaitanyaabhade/setu.js"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors group"
              >
                <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://www.npmjs.com/package/setu.js"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors group"
              >
                <Star className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>npm</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-normal text-sm text-black dark:text-white mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-light">
                  Home
                </a>
              </li>
              <li>
                <a href="/docs" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-light">
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/chaitanyaabhade/setu.js/releases" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-light"
                >
                  Releases
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-normal text-sm text-black dark:text-white mb-4">Community</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="https://github.com/chaitanyaabhade/setu.js" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-light"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/chaitanyaabhade/setu.js/issues" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-light"
                >
                  Issues
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/chaitanyaabhade/setu.js/discussions" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-light"
                >
                  Discussions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/10 dark:border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-sm text-black/60 dark:text-white/60 font-light">
              <span>Made by</span>
              <span className="font-normal text-black dark:text-white">
                Chaitanya Abhade
              </span>
            </div>
            
            <div className="text-sm text-black/60 dark:text-white/60 font-light">
              © 2024 setu.js. Open source under MIT license.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
