
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Code, Rocket, Star, GitBranch, Play, CheckCircle, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white overflow-hidden relative">
      <Navigation />
      
      {/* Animated Background Grid with Parallax */}
      <div className="fixed inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
      </div>

      {/* Floating Cursor Light with Trail */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-10 opacity-20 dark:opacity-10 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(0,0,0,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Hero Section with Crazy Animations */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-black/10 dark:bg-white/10 rounded-full animate-float"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i}s`
              }}
            />
          ))}
        </div>

        <div className="container relative z-20 px-4 text-center max-w-6xl">
          {/* Animated Badge */}
          <div className="mb-16 animate-[fadeInUp_1s_ease-out_0.2s_both]">
            <Badge 
              variant="outline" 
              className="border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-sm text-black dark:text-white text-sm font-light px-6 py-3 hover:scale-110 transition-all duration-700 hover:shadow-2xl hover:border-black/20 dark:hover:border-white/20 group"
            >
              <span className="animate-pulse mr-2 group-hover:animate-bounce">✨</span>
              Lightning Fast HTTP Client
            </Badge>
          </div>
          
          {/* Main Title with Crazy Letter Animation */}
          <div className="mb-20">
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-extralight tracking-[-0.05em] mb-12 text-black dark:text-white relative">
              {['s', 'e', 't', 'u', '.', 'j', 's'].map((letter, index) => (
                <span 
                  key={index}
                  className="inline-block animate-[slideInLeft_1.2s_ease-out_both] hover:animate-[rubberBand_0.8s_ease-in-out] cursor-default transition-all duration-300 hover:text-black/70 dark:hover:text-white/70"
                  style={{ 
                    animationDelay: `${0.4 + index * 0.1}s`,
                    transform: letter === '.' ? 'scale(0.7)' : 'scale(1)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = `translateY(-20px) rotate(${Math.random() * 20 - 10}deg) scale(1.1)`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = letter === '.' ? 'scale(0.7)' : 'scale(1)';
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl text-black/70 dark:text-white/70 mb-16 font-extralight leading-relaxed max-w-4xl mx-auto animate-[fadeInUp_1s_ease-out_1.2s_both]">
              Lightweight & blazing-fast HTTP client for modern JavaScript applications
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24 animate-[fadeInUp_1s_ease-out_1.4s_both]">
            <Button 
              asChild 
              size="lg" 
              className="bg-black hover:bg-black/90 dark:bg-white dark:hover:bg-white/90 text-white dark:text-black border-0 px-10 py-7 text-lg font-light rounded-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 group magnetic-btn relative overflow-hidden"
            >
              <Link to="/docs" className="flex items-center relative z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                Get Started
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-sm hover:bg-white dark:hover:bg-black px-10 py-7 text-lg font-light rounded-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 hover:border-black/20 dark:hover:border-white/20 group magnetic-btn relative overflow-hidden"
            >
              <a href="https://github.com/chaitanyaabhade/setu.js" target="_blank" rel="noreferrer" className="flex items-center relative z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <GitBranch className="mr-3 h-5 w-5 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Code Preview Section */}
      <section className="py-32 relative">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extralight mb-6 text-black dark:text-white">
                Simple. Powerful. Elegant.
              </h2>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-r from-black/5 to-transparent dark:from-white/5 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
              <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-3xl p-12 font-mono text-left hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:border-black/20 dark:hover:border-white/20 group cursor-pointer">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-4 h-4 bg-red-500/60 rounded-full group-hover:animate-pulse" />
                  <div className="w-4 h-4 bg-yellow-500/60 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.1s' }} />
                  <div className="w-4 h-4 bg-green-500/60 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <span className="text-black/40 dark:text-white/40 text-sm ml-6 font-light">setu.js</span>
                </div>
                <div className="space-y-4 text-lg">
                  <div className="text-black/80 dark:text-white/80 group-hover:text-black dark:group-hover:text-white transition-colors duration-500">
                    <span className="text-black/40 dark:text-white/40">import</span> <span className="text-black dark:text-white font-medium">setu</span> <span className="text-black/40 dark:text-white/40">from</span> <span className="text-black/60 dark:text-white/60">'setu.js'</span>
                  </div>
                  <div className="text-black/80 dark:text-white/80 group-hover:text-black dark:group-hover:text-white transition-colors duration-500">
                    <span className="text-black/40 dark:text-white/40">const</span> <span className="text-black dark:text-white font-medium">response</span> <span className="text-black/40 dark:text-white/40">=</span> <span className="text-black/40 dark:text-white/40">await</span> <span className="text-black dark:text-white font-medium">setu</span><span className="text-black/40 dark:text-white/40">.</span><span className="text-black dark:text-white font-medium">get</span><span className="text-black/40 dark:text-white/40">(</span><span className="text-black/60 dark:text-white/60">'/api/data'</span><span className="text-black/40 dark:text-white/40">)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="animate-pulse text-black/60 dark:text-white/60 text-xl">▋</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crazy Stats Section with Morphing Numbers */}
      <section className="py-32 relative">
        <div className="container px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight tracking-tight mb-8 text-black dark:text-white hover:tracking-wide transition-all duration-700 cursor-default">
              Numbers that matter
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
            {[
              { value: "5kb", label: "Bundle Size", suffix: "", delay: "0s" },
              { value: "0", label: "Dependencies", suffix: "", delay: "0.2s" },
              { value: "100", label: "TypeScript", suffix: "%", delay: "0.4s" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="group cursor-default text-center animate-[fadeInUp_0.8s_ease-out] hover:scale-110 transition-all duration-700 relative"
                style={{ animationDelay: stat.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 dark:via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative p-8">
                  <div className="text-8xl font-extralight mb-6 text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-all duration-700 group-hover:scale-125 tabular-nums">
                    {stat.value}<span className="text-6xl">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-black/60 dark:text-white/60 font-light tracking-wider uppercase group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors duration-500">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Premium Cards */}
      <section className="py-32 relative">
        <div className="container px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight tracking-tight mb-8 text-black dark:text-white hover:tracking-wide transition-all duration-700 cursor-default">
              Built for performance
            </h2>
            <p className="text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto font-extralight">
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
                className="group border-black/5 dark:border-white/5 bg-white/80 dark:bg-black/80 backdrop-blur-sm hover:bg-white dark:hover:bg-black transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:border-black/20 dark:hover:border-white/20 cursor-pointer animate-[fadeInUp_0.6s_ease-out] floating-card relative overflow-hidden"
                style={{ animationDelay: feature.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 dark:via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <CardHeader className="pb-4 relative z-10">
                  <div className="h-16 w-16 border border-black/10 dark:border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 group-hover:border-black/20 dark:group-hover:border-white/20 group-hover:shadow-lg bg-white/50 dark:bg-black/50">
                    <feature.icon className="h-6 w-6 text-black dark:text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <CardTitle className="text-xl font-light text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors duration-500">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-black/60 dark:text-white/60 font-extralight text-base leading-relaxed group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors duration-500">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-32 relative border-t border-black/5 dark:border-white/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-extralight tracking-tight mb-8 text-black dark:text-white hover:tracking-wide transition-all duration-700 cursor-default">
              See it in action
            </h2>
            <p className="text-xl text-black/60 dark:text-white/60 mb-16 font-extralight">
              Experience the simplicity and power of setu.js
            </p>
            
            <div className="relative group">
              <Button 
                size="lg" 
                className="bg-black hover:bg-black/90 dark:bg-white dark:hover:bg-white/90 text-white dark:text-black px-16 py-8 text-xl font-light rounded-2xl transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 group magnetic-btn relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Play className="mr-4 h-6 w-6 group-hover:scale-125 transition-transform duration-500" />
                <span className="relative z-10">Interactive Demo</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Enhanced Animations */}
      <section className="py-32 relative border-t border-black/5 dark:border-white/5">
        <div className="container px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-6xl font-extralight tracking-tight mb-8 text-black dark:text-white hover:tracking-wide transition-all duration-700 cursor-default">
              Ready to build?
            </h2>
            <p className="text-xl text-black/60 dark:text-white/60 mb-16 font-extralight">
              Join thousands of developers using setu.js in production.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-black hover:bg-black/90 dark:bg-white dark:hover:bg-white/90 text-white dark:text-black px-12 py-8 text-lg font-light rounded-xl transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 group magnetic-btn relative overflow-hidden"
              >
                <Link to="/docs">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10">Read Documentation</span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500 relative z-10" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-sm hover:bg-white dark:hover:bg-black px-12 py-8 text-lg font-light rounded-xl transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 hover:border-black/20 dark:hover:border-white/20 magnetic-btn relative overflow-hidden group"
              >
                <a href="https://www.npmjs.com/package/setu.js" target="_blank" rel="noreferrer">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10">npm install setu.js</span>
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
