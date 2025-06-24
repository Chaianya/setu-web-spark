
import { useState, useEffect } from "react";

const codeExample = `import setu from 'setu.js';

// Initialize with base configuration
const api = setu.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Authorization': 'Bearer token'
  }
});

// Make requests with ease
const response = await api.get('/users');
const user = await api.post('/users', {
  name: 'John Doe',
  email: 'john@example.com'
});

// Built-in error handling
try {
  const data = await api.get('/protected');
} catch (error) {
  console.log('Request failed:', error.message);
}`;

export function CodeBlock() {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < codeExample.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(codeExample.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden rounded-lg border bg-muted/50 p-6 font-mono text-sm animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-xs text-muted-foreground">setu.js</span>
      </div>
      <pre className="text-xs leading-relaxed">
        <code className="text-foreground/90">{displayedCode}</code>
        <span className="animate-pulse">|</span>
      </pre>
    </div>
  );
}
