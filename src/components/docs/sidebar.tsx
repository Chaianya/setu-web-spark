
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const navigationItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "#introduction" },
      { title: "Installation", href: "#installation" },
      { title: "Quick Start", href: "#quick-start" },
    ]
  },
  {
    title: "API Reference",
    items: [
      { title: "setu.create()", href: "#create" },
      { title: "Request Methods", href: "#methods" },
      { title: "Configuration", href: "#configuration" },
      { title: "Interceptors", href: "#interceptors" },
    ]
  },
  {
    title: "Examples",
    items: [
      { title: "Basic Usage", href: "#basic-usage" },
      { title: "Error Handling", href: "#error-handling" },
      { title: "Authentication", href: "#authentication" },
      { title: "File Uploads", href: "#file-uploads" },
    ]
  },
  {
    title: "Advanced",
    items: [
      { title: "Custom Adapters", href: "#adapters" },
      { title: "TypeScript", href: "#typescript" },
      { title: "Best Practices", href: "#best-practices" },
    ]
  }
];

export function DocsSidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Getting Started": true,
    "API Reference": true,
    "Examples": false,
    "Advanced": false,
  });
  const location = useLocation();

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const filteredItems = navigationItems.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center border-b px-4 py-2">
        <h2 className="text-lg font-semibold">Documentation</h2>
      </div>
      
      <div className="border-b px-4 py-3">
        <Input
          placeholder="Search docs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-8"
        />
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">
          {filteredItems.map((section) => (
            <Collapsible
              key={section.title}
              open={openSections[section.title]}
              onOpenChange={() => toggleSection(section.title)}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between font-medium h-8 px-2"
                >
                  {section.title}
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      openSections[section.title] ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1">
                {section.items.map((item) => (
                  <Button
                    key={item.href}
                    asChild
                    variant="ghost"
                    className={`w-full justify-start h-8 px-4 text-sm ${
                      location.hash === item.href
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <a href={item.href}>{item.title}</a>
                  </Button>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
