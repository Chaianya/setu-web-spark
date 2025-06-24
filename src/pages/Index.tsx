
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { CodeBlock } from "@/components/hero/code-block";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Open Source
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                setu.js
              </span>
            </h1>
          </div>
          
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground mb-8 animate-slide-in">
            Lightweight & blazing-fast custom HTTP client for modern JavaScript apps.
            <br />
            Built for developers who value simplicity and performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Button asChild size="lg" className="font-medium">
              <Link to="/docs">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="font-medium">
              <a href="https://github.com/chaitanyaabhade/setu.js" target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <CodeBlock />
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-24 bg-muted/50">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why choose setu.js?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed for modern JavaScript applications with developer experience in mind.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-lg animate-fade-in">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle>Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Optimized for performance with minimal overhead. Built to handle high-frequency requests with ease.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <CardTitle>Highly Configurable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Flexible configuration options including interceptors, timeouts, and custom headers for any use case.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle>Type Safe</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Built with TypeScript for excellent IntelliSense support and compile-time error checking.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <CardTitle>Lightweight</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Minimal bundle size with zero dependencies. Perfect for applications where every byte matters.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <CardTitle>Developer Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Intuitive API design with excellent error handling and debugging capabilities built-in.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle>Modern Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Built on modern web standards with Promise-based architecture and ESM support.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Install setu.js and start building amazing applications today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="font-medium">
              <Link to="/docs">Read Documentation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="font-medium">
              <a href="https://www.npmjs.com/package/setu.js" target="_blank" rel="noreferrer">
                npm install setu.js
              </a>
            </Button>
          </div>
          
          <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm">
            <code>npm install setu.js</code>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
