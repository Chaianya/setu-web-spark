
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Code, Rocket, Star, GitBranch } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Minimal Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="container relative z-10 px-4 text-center max-w-4xl">
          {/* Badge */}
          <div className="mb-12 animate-fade-in">
            <Badge 
              variant="outline" 
              className="border-black/20 dark:border-white/20 bg-transparent text-black dark:text-white text-sm font-normal px-4 py-2"
            >
              HTTP Client Library
            </Badge>
          </div>
          
          {/* Main Title */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight mb-8 text-black dark:text-white">
              setu.js
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl text-black/60 dark:text-white/60 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              Lightweight & blazing-fast HTTP client for modern JavaScript applications
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              asChild 
              size="lg" 
              className="bg-black hover:bg-black/90 dark:bg-white dark:hover:bg-white/90 text-white dark:text-black border-0 px-8 py-6 text-base font-normal rounded-lg transition-all duration-200 hover:scale-[1.02]"
            >
              <Link to="/docs" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="border-black/20 dark:border-white/20 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 px-8 py-6 text-base font-normal rounded-lg transition-all duration-200 hover:scale-[1.02]"
            >
              <a href="https://github.com/chaitanyaabhade/setu.js" target="_blank" rel="noreferrer" className="flex items-center">
                <GitBranch className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
          
          {/* Terminal UI */}
          <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-black dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg p-6 font-mono text-left backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500/80 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500/80 rounded-full" />
                <div className="w-3 h-3 bg-green-500/80 rounded-full" />
                <span className="text-white/60 dark:text-white/40 text-sm ml-4">Terminal</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="text-white/80 dark:text-white/60">
                  <span className="text-green-400">$</span> npm install setu.js
                </div>
                <div className="text-white/60 dark:text-white/40">
                  <span className="text-blue-400">+</span> setu.js@1.0.0
                </div>
                <div className="text-white/80 dark:text-white/60">
                  <span className="text-green-400">$</span> <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6 text-black dark:text-white">
              Built for performance
            </h2>
            <p className="text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto font-light">
              Everything you need in an HTTP client, nothing you don't.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for performance with minimal overhead and zero dependencies."
              },
              {
                icon: Code,
                title: "Developer First",
                description: "Intuitive API design with excellent TypeScript support and error handling."
              },
              {
                icon: Shield,
                title: "Type Safe",
                description: "Built with TypeScript for compile-time error checking and IntelliSense."
              },
              {
                icon: Rocket,
                title: "Modern Standards",
                description: "Promise-based architecture with ESM support and web standards."
              },
              {
                icon: Star,
                title: "Lightweight",
                description: "Minimal bundle size perfect for applications where every byte matters."
              },
              {
                icon: GitBranch,
                title: "Configurable",
                description: "Flexible configuration with interceptors, timeouts, and custom headers."
              }
            ].map((feature, index) => (
              <Card key={feature.title} className="group border-black/10 dark:border-white/10 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="h-12 w-12 border border-black/10 dark:border-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-5 w-5 text-black dark:text-white" />
                  </div>
                  <CardTitle className="text-xl font-normal text-black dark:text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-black/60 dark:text-white/60 font-light">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative">
        <div className="container px-4 text-center">
          <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-light mb-2 text-black dark:text-white">5kb</div>
              <div className="text-sm text-black/60 dark:text-white/60 font-light">Bundle Size</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-light mb-2 text-black dark:text-white">0</div>
              <div className="text-sm text-black/60 dark:text-white/60 font-light">Dependencies</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-light mb-2 text-black dark:text-white">100%</div>
              <div className="text-sm text-black/60 dark:text-white/60 font-light">TypeScript</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative border-t border-black/10 dark:border-white/10">
        <div className="container px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6 text-black dark:text-white">
              Ready to build?
            </h2>
            <p className="text-xl text-black/60 dark:text-white/60 mb-12 font-light">
              Join thousands of developers using setu.js in production.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-black hover:bg-black/90 dark:bg-white dark:hover:bg-white/90 text-white dark:text-black px-8 py-6 text-base font-normal rounded-lg transition-all duration-200 hover:scale-[1.02]"
              >
                <Link to="/docs">
                  Read Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="border-black/20 dark:border-white/20 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 px-8 py-6 text-base font-normal rounded-lg transition-all duration-200 hover:scale-[1.02]"
              >
                <a href="https://www.npmjs.com/package/setu.js" target="_blank" rel="noreferrer">
                  npm install setu.js
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
