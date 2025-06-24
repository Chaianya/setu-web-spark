
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Code, Rocket, Star, GitBranch } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 dark:from-purple-500/10 dark:via-blue-500/10 dark:to-indigo-500/10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="container relative z-10 px-4 text-center">
          <div className="mx-auto max-w-4xl">
            {/* Badge */}
            <div className="mb-8 animate-fade-in">
              <Badge 
                variant="outline" 
                className="mb-6 border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-300 backdrop-blur-sm px-4 py-2 text-sm font-medium"
              >
                <Star className="mr-2 h-3 w-3" />
                Open Source HTTP Client
              </Badge>
            </div>
            
            {/* Main Title */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-blue-600 dark:from-white dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                  setu.js
                </span>
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 font-light leading-relaxed">
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                  Lightweight & blazing-fast HTTP client
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                  for modern JavaScript apps
                </span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg font-medium shadow-2xl shadow-purple-500/25 transform hover:scale-105 transition-all duration-200"
              >
                <Link to="/docs" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="border-purple-500/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 px-8 py-6 text-lg font-medium transform hover:scale-105 transition-all duration-200"
              >
                <a href="https://github.com/chaitanyaabhade/setu.js" target="_blank" rel="noreferrer" className="flex items-center">
                  <GitBranch className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">5kb</div>
                <div className="text-sm text-muted-foreground">Bundle Size</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">0</div>
                <div className="text-sm text-muted-foreground">Dependencies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-muted-foreground">TypeScript</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 animate-float">
          <div className="w-4 h-4 bg-purple-500 rounded-full opacity-60" />
        </div>
        <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-6 h-6 bg-blue-500 rounded-full opacity-40" />
        </div>
        <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-3 h-3 bg-pink-500 rounded-full opacity-50" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/50 to-blue-50/50 dark:via-purple-950/20 dark:to-blue-950/20" />
        
        <div className="container relative z-10 px-4">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-300">
              Features
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Built for speed and simplicity
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need in an HTTP client, nothing you don't.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for performance with minimal overhead and zero dependencies.",
                gradient: "from-yellow-400 to-orange-500"
              },
              {
                icon: Code,
                title: "Developer First",
                description: "Intuitive API design with excellent TypeScript support and error handling.",
                gradient: "from-blue-400 to-purple-500"
              },
              {
                icon: Shield,
                title: "Type Safe",
                description: "Built with TypeScript for compile-time error checking and IntelliSense.",
                gradient: "from-green-400 to-blue-500"
              },
              {
                icon: Rocket,
                title: "Modern Standards",
                description: "Promise-based architecture with ESM support and web standards.",
                gradient: "from-purple-400 to-pink-500"
              },
              {
                icon: Star,
                title: "Lightweight",
                description: "Minimal bundle size perfect for applications where every byte matters.",
                gradient: "from-pink-400 to-red-500"
              },
              {
                icon: GitBranch,
                title: "Configurable",
                description: "Flexible configuration with interceptors, timeouts, and custom headers.",
                gradient: "from-indigo-400 to-purple-500"
              }
            ].map((feature, index) => (
              <Card key={feature.title} className="group border-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-900/80 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className={`h-12 w-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/90 to-indigo-900/90 dark:from-purple-500/20 dark:via-blue-500/20 dark:to-indigo-500/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        <div className="container relative z-10 px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to build something amazing?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of developers using setu.js in production.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg font-medium shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                <Link to="/docs">
                  Read Documentation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="border-white/20 bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-lg font-medium backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
              >
                <a href="https://www.npmjs.com/package/setu.js" target="_blank" rel="noreferrer">
                  npm install setu.js
                </a>
              </Button>
            </div>
            
            <div className="rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm p-6 font-mono text-left max-w-md mx-auto">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <code className="text-green-400 text-lg">
                npm install setu.js
              </code>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
