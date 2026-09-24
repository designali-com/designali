import type { Metadata } from "next";
import { and, eq, ne } from "drizzle-orm";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ImageIcon } from "lucide-react";

import { db } from "@/src/db/drizzle";
import { tool } from "@/src/db/schema";
import { ToolPreview } from "@/src/components/others/tool-preview";  

import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getTool(slug: string) {
  return db.query.tool.findFirst({
    where: eq(tool.slug, slug),
  });
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const currentTool = await getTool(slug);

  if (!currentTool) {
    return {
      title: "Tool Not Found",
    };
  }

  return {
    title: currentTool.title,
    description: currentTool.description,
  };
}

async function getSimilarTools(category: string, currentId: string) {
  return db.query.tool.findMany({
    where: and(
      eq(tool.category, category),
      ne(tool.id, currentId),
      eq(tool.isPublished, true)
    ),
    limit: 3,
  });
}

export default async function ToolDetailPage({
  params,
}: Props) {
  const { slug } = await params;
  const currentTool = await getTool(slug);

  if (!currentTool || !currentTool.isPublished) {
    notFound();
  }

  const similarTools = await getSimilarTools(currentTool.category, currentTool.id);

  return (
    <main className="p-3">
      <div>
        <div className="mt-10 overflow-hidden border">
          
          {/* Interactive Preview Section */}
          <ToolPreview
            coverImage={currentTool.coverImage}
            link={currentTool.link}
            title={currentTool.title}
          />

          {/* Content */}
          <div className="p-6 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <Badge variant="secondary">
                  {currentTool.category}
                </Badge>

                <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  {currentTool.title}
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                  Made by {currentTool.madeBy}
                </p>
              </div>

              <Button render={<a
                href={currentTool.link}
                target="_blank"
                rel="noopener noreferrer"
              />} >
                Visit Tool
                <ExternalLink className="size-4" />
              </Button>
            </div>

            {/* Description */}
            <div className="mt-10 border-t pt-8">
              <h2 className="text-lg font-medium">About this tool</h2>
              <p className="mt-4 max-w-3xl whitespace-pre-line leading-7 text-muted-foreground">
                {currentTool.description}
              </p>
            </div>

            {/* Tags */}
            {currentTool.tags.length > 0 && (
              <div className="mt-10 border-t pt-8">
                <h2 className="text-lg font-medium">Tags</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {currentTool.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Similar Tools */}
          {similarTools.length > 0 && (
            <div className="mt-16 border-t p-10">
              <h2 className="text-xl font-semibold tracking-tight">Similar Tools</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Explore other tools in {currentTool.category}
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {similarTools.map((item) => (
                  <Link
                    key={item.id}
                    href={`/tools/${item.slug}`}
                    className="group"
                  >
                    <article className="flex h-full flex-col overflow-hidden border transition-all hover:border-foreground/20 hover:bg-muted/40">
                      <div className="relative aspect-video w-full overflow-hidden bg-muted">
                        {item.coverImage ? (
                          <img
                            src={item.coverImage}
                            alt={item.title}
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
                          {item.title}
                        </h2>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            by {item.madeBy}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}