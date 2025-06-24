
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { DocsSidebar } from "@/components/docs/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pr-6 lg:py-8">
            <DocsSidebar />
          </div>
        </aside>
        
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Docs</span>
              <span>/</span>
              <span>Getting Started</span>
            </div>
            
            <div className="space-y-8">
              <section id="introduction" className="scroll-mt-20">
                <div className="flex items-center gap-2 mb-4">
                  <h1 className="text-3xl font-bold">Introduction</h1>
                  <Badge variant="outline">v1.0.0</Badge>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  setu.js is a lightweight, blazing-fast HTTP client library designed for modern JavaScript applications. 
                  Built with performance and developer experience in mind, it provides a clean, intuitive API for making HTTP requests.
                </p>
                
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Promise-based API with async/await support
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Request and response interceptors
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Automatic request/response data transformation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Built-in error handling
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        TypeScript support
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <Separator />

              <section id="installation" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-4">Installation</h2>
                <p className="text-muted-foreground mb-4">
                  Install setu.js using your preferred package manager:
                </p>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">npm</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded bg-muted p-3 font-mono text-sm">
                        npm install setu.js
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">yarn</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded bg-muted p-3 font-mono text-sm">
                        yarn add setu.js
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <Separator />

              <section id="quick-start" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
                <p className="text-muted-foreground mb-4">
                  Get started with setu.js in just a few lines of code:
                </p>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Basic Example</CardTitle>
                    <CardDescription>
                      Here's how to make your first request with setu.js
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="rounded bg-muted p-4 font-mono text-sm overflow-x-auto">
{`import setu from 'setu.js';

// Create an instance
const api = setu.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000
});

// Make a GET request
const response = await api.get('/users');
console.log(response.data);

// Make a POST request
const newUser = await api.post('/users', {
  name: 'John Doe',
  email: 'john@example.com'
});`}
                    </pre>
                  </CardContent>
                </Card>
              </section>

              <Separator />

              <section id="create" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-4">setu.create()</h2>
                <p className="text-muted-foreground mb-4">
                  Create a new instance of setu with custom configuration.
                </p>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Configuration Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">baseURL</h4>
                        <p className="text-sm text-muted-foreground">Base URL for all requests</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">timeout</h4>
                        <p className="text-sm text-muted-foreground">Request timeout in milliseconds</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">headers</h4>
                        <p className="text-sm text-muted-foreground">Default headers for all requests</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <Separator />

              <section id="methods" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-4">Request Methods</h2>
                <p className="text-muted-foreground mb-4">
                  setu.js supports all standard HTTP methods with a simple, consistent API.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">GET</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <pre className="rounded bg-muted p-3 font-mono text-xs">
{`api.get('/users')
api.get('/users', { params: { page: 1 } })`}
                      </pre>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">POST</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <pre className="rounded bg-muted p-3 font-mono text-xs">
{`api.post('/users', { name: 'John' })
api.post('/upload', formData)`}
                      </pre>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">PUT</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <pre className="rounded bg-muted p-3 font-mono text-xs">
{`api.put('/users/1', { name: 'Jane' })`}
                      </pre>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">DELETE</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <pre className="rounded bg-muted p-3 font-mono text-xs">
{`api.delete('/users/1')`}
                      </pre>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>
          </div>
          
          <div className="hidden text-sm xl:block">
            <div className="sticky top-16 -mt-10 pt-4">
              <div className="pb-4">
                <h4 className="font-medium">On This Page</h4>
              </div>
              <div className="space-y-2">
                <a href="#introduction" className="block text-muted-foreground hover:text-foreground">
                  Introduction
                </a>
                <a href="#installation" className="block text-muted-foreground hover:text-foreground">
                  Installation
                </a>
                <a href="#quick-start" className="block text-muted-foreground hover:text-foreground">
                  Quick Start
                </a>
                <a href="#create" className="block text-muted-foreground hover:text-foreground">
                  setu.create()
                </a>
                <a href="#methods" className="block text-muted-foreground hover:text-foreground">
                  Request Methods
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Documentation;
