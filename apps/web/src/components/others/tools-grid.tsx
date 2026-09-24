"use client";

import Link from "next/link";
import { Search, Image as ImageIcon } from "lucide-react";
import { useMemo, useState } from "react";

import type { Tool } from "@/src/db/schema";

import { Input } from "@workspace/ui/components/input"; 

type Props = {
  tools: Tool[];
};

export function ToolsGrid({ tools }: Props) {
  const [search, setSearch] = useState("");

  const filteredTools = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return tools;

    return tools.filter((tool) => {
      return (
        tool.title.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.madeBy.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query) ||
        tool.tags.some((tag) =>
          tag.toLowerCase().includes(query)
        )
      );
    });
  }, [tools, search]);

  return (
    <div className="space-y-3">
      <div className="relative max-w-60">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          placeholder="Search tools..."
          className="pl-9"
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTools.map((tool) => (
          <Link
            key={tool.id}
            href={`/tools/${tool.slug}`}
            className="group"
          >
            <article className="flex h-full flex-col overflow-hidden border transition-all hover:border-foreground/20 hover:bg-muted/40">
              {/* Cover Image Section */}
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                {tool.coverImage ? (
                  <img
                    src={tool.coverImage}
                    alt={tool.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                    <ImageIcon className="size-8 opacity-40" />
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between px-2 py-2">
                 
                <h2 className="font-medium tracking-tight">
                  {tool.title}
                </h2>
  
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    by {tool.madeBy}
                  </span> 
                </div>
              </div>
            </article>
          </Link>
        ))}

        {filteredTools.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-muted-foreground">
              No tools found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}