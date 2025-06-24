
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Code, Rocket, Star, GitBranch } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      <Navigation />
      
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] animate-[drift_20s_ease-in-out_infinite]" />
      </div>

      {/* Floating Cursor Light */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-10 opacity-30 dark:opacity-20"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(0,0,0,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transition: 'all 0.1s ease-out',
        }}
      />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        <div className="container relative z-20 px-4 text-center max-w-6xl">
          {/* Animated Badge */}
          <div className="mb-16 animate-[fadeInUp_1s_ease-out_0.2s_both]">
            <Badge 
              variant="outline" 
              className="border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-sm text-black dark:text-white text-sm font-light px-6 py-3 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:border-black/20 dark:hover:border-white/20"
            >
              <span className="animate-pulse mr-2">✨</span>
              Lightning Fast HTTP Client
            </Badge>
          </div>
          
          {/* Main Title with Stagger Animation */}
          <div className="mb-20">
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-extralight tracking-[-0.05em] mb-12 text-black dark:text-white relative">
              <span className="inline-block animate-[slideInLeft_1.2s_ease-out_0.4s_both] hover:animate-[shake_0.5s_ease-in-out] cursor-default">s</span>
              <span className="inline-block animate-[slideInLeft_1.2s_ease-out_0.5s_both] hover:animate-[shake_0.5s_ease-in-out] cursor-default">e</span>
              <span className="inline-block animate-[slideInLeft_1.2s_ease-out_0.6s_both] hover:animate-[shake_0.5s_ease-in-out] cursor-default">t</span>
              <span className="inline-block animate-[slideInLeft_1.2s_ease-out_0.7s_both] hover:animate-[shake_0.5s_ease-in-out] cursor-default">u</span>
              <span className="inline-block animate-[slideInLeft_1.2s_ease-out_0.8s_both] hover:animate-[shake_0.5s_ease-in-out] cursor-default text-black/40 dark:text-white/40">.</span>
              <span className="inline-block animate-[slideInLeft_1.2s_ease-out_0.9s_both] hover:animate-[shake_0.5s_ease-in-out] cursor-default">j</span>
              <span className="inline-block animate-[slideInLeft_1.2s_ease-out_1s_both] hover:animate-[shake_0.5s_ease-in-out] cursor-default">s</span>
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl text-black/70 dark:text-white/70 mb-16 font-extralight leading-relaxed max-w-4xl mx-auto animate-[fadeInUp_1s_ease-out_1.2s_both]">
              Lightweight & blazing-fast HTTP client for modern JavaScript applications
            </div>
          </div>
          
          {/* Magnetic CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24 animate-[fadeInUp_1s_ease-out_1.4s_both]">
            <Button 
              asChild 
              size="lg" 
              className="bg-black hover:bg-black/90 dark:bg-white dark:hover:bg-white/90 text-white dark:text-black border-0 px-10 py-7 text-lg font-light rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 group magnetic-btn"
            >
              <Link to="/docs" className="flex items-center">
                Get Started
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-black/80 px-10 py-7 text-lg font-light rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/20 group magnetic-btn"
            >
              <a href="https://github.com/chaitanyaabhade/setu.js" target="_blank" rel="noreferrer" className="flex items-center">
                <GitBranch className="mr-3 h-5 w-5 group-hover:-rotate-12 transition-transform duration-300" />
                GitHub
              </a>
            </Button>
          </div>
          
          {/* Floating Code Preview */}
          <div className="max-w-3xl mx-auto animate-[fadeInUp_1s_ease-out_1.6s_both]">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-black/5 to-transparent dark:from-white/5 rounded-2xl blur-xl animate-pulse" />
              <div className="relative bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-8 font-mono text-left hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-black/20 dark:hover:border-white/20 group">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-black/20 dark:bg-white/20 rounded-full group-hover:bg-red-500/60 transition-colors duration-300" />
                  <div className="w-3 h-3 bg-black/20 dark:bg-white/20 rounded-full group-hover:bg-yellow-500/60 transition-colors duration-300" />
                  <div className="w-3 h-3 bg-black/20 dark:bg-white/20 rounded-full group-hover:bg-green-500/60 transition-colors duration-300" />
                  <span className="text-black/40 dark:text-white/40 text-sm ml-4 font-light">setu.js</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="text-black/80 dark:text-white/80 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                    <span className="text-black/40 dark:text-white/40">import</span> <span className="text-black dark:text-white">setu</span> <span className="text-black/40 dark:text-white/40">from</span> <span className="text-black/60 dark:text-white/60">'setu.js'</span>
                  </div>
                  <div className="text-black/80 dark:text-white/80 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                    <span className="text-black/40 dark:text-white/40">const</span> <span className="text-black dark:text-white">response</span> <span className="text-black/40 dark:text-white/40">=</span> <span className="text-black/40 dark:text-white/40">await</span> <span className="text-black dark:text-white">setu</span><span className="text-black/40 dark:text-white/40">.</span><span className="text-black dark:text-white">get</span><span className="text-black/40 dark:text-white/40">(</span><span className="text-black/60 dark:text-white/60">'/api/data'</span><span className="text-black/40 dark:text-white/40">)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="animate-pulse text-black/60 dark:text-white/60">▋</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Parallax */}
      <section className="py-40 relative">
        <div className="container px-4">
          <div className="text-center mb-32">
            <h2 className="text-5xl sm:text-6xl font-extralight tracking-tight mb-8 text-black dark:text-white animate-[fadeInUp_0.8s_ease-out] hover:tracking-wide transition-all duration-700 cursor-default">
              Built for performance
            </h2>
            <p className="text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto font-extralight animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              Everything you need in an HTTP client, nothing you don't.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {[
              { icon: Zap, title: "Lightning Fast", description: "Optimized for performance with minimal overhead and zero dependencies.", delay: "0s" },
              { icon: Code, title: "Developer First", description: "Intuitive API design with excellent TypeScript support and error handling.", delay: "0.1s" },
              { icon: Shield, title: "Type Safe", description: "Built with TypeScript for compile-time error checking and IntelliSense.", delay: "0.2s" },
              { icon: Rocket, title: "Modern Standards", description: "Promise-based architecture with ESM support and web standards.", delay: "0.3s" },
              { icon: Star, title: "Lightweight", description: "Minimal bundle size perfect for applications where every byte matters.", delay: "0.4s" },
              { icon: GitBranch, title: "Configurable", description: "Flexible configuration with interceptors, timeouts, and custom headers.", delay: "0.5s" }
            ].map((feature, index) => (
              <Card 
                key={feature.title} 
                className="group border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-black/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-black/20 dark:hover:border-white/20 cursor-pointer animate-[fadeInUp_0.6s_ease-out] floating-card"
                style={{ animationDelay: feature.delay }}
              >
                <CardHeader className="pb-4">
                  <div className="h-14 w-14 border border-black/10 dark:border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:border-black/20 dark:group-hover:border-white/20 group-hover:shadow-lg">
                    <feature.icon className="h-6 w-6 text-black dark:text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl font-light text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-black/60 dark:text-white/60 font-extralight text-base leading-relaxed group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="py-40 relative">
        <div className="container px-4 text-center">
          <div className="grid grid-cols-3 gap-16 max-w-4xl mx-auto">
            {[
              { value: "5kb", label: "Bundle Size", delay: "0s" },
              { value: "0", label: "Dependencies", delay: "0.2s" },
              { value: "100%", label: "TypeScript", delay: "0.4s" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="group cursor-default animate-[fadeInUp_0.8s_ease-out] hover:scale-110 transition-all duration-500"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-6xl font-extralight mb-4 text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-all duration-500 group-hover:scale-125">
                  {stat.value}
                </div>
                <div className="text-sm text-black/60 dark:text-white/60 font-light tracking-wider uppercase group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Magnetic Effect */}
      <section className="py-40 relative border-t border-black/5 dark:border-white/5">
        <div className="container px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-5xl sm:text-6xl font-extralight tracking-tight mb-8 text-black dark:text-white animate-[fadeInUp_0.8s_ease-out] hover:tracking-wide transition-all duration-700 cursor-default">
              Ready to build?
            </h2>
            <p className="text-xl text-black/60 dark:text-white/60 mb-16 font-extralight animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              Join thousands of developers using setu.js in production.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
              <Button 
                asChild 
                size="lg" 
                className="bg-black hover:bg-black/90 dark:bg-white dark:hover:bg-white/90 text-white dark:text-black px-12 py-8 text-lg font-light rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group magnetic-btn"
              >
                <Link to="/docs">
                  Read Documentation
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-black/80 px-12 py-8 text-lg font-light rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 hover:border-black/20 dark:hover:border-white/20 magnetic-btn"
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
