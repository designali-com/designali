import { eq, desc, and } from "drizzle-orm";
import Link from "next/link";
import { X } from "lucide-react";

import { db } from "@/src/db/drizzle";
import { tool } from "@/src/db/schema";
import { ToolsGrid } from "@/src/components/others/tools-grid";
import { Button } from "@workspace/ui/components/button";
import { toolsCategory } from "@/src/components/others/tools-category"; // Apne path ke hisaab se import check kar lein

type Props = {
  searchParams: Promise<{
    category?: string;
  }>;
};

// Helper function to get the correct database category name from slug
function getCategoryName(slug?: string) {
  if (!slug) return null;
  const found = toolsCategory.find(
    (cat) => cat.slug.toLowerCase() === slug.toLowerCase()
  );
  // Agar list me mil jaye toh uska 'name' return karega, warna original slug ya capitalized version
  return found ? found.name : slug;
}

export async function generateMetadata({ searchParams }: Props) {
  const { category: slug } = await searchParams;
  const categoryName = getCategoryName(slug);

  if (categoryName) {
    return {
      title: `${categoryName} Tools`,
      description: `Explore useful ${categoryName} design, development, AI and productivity tools.`,
    };
  }

  return {
    title: "Tools",
    description: "Discover useful design, development, AI and productivity tools.",
  };
}

export default async function ToolsPage({ searchParams }: Props) {
  const { category: slug } = await searchParams;
  const categoryName = getCategoryName(slug);

  // Database query mein categoryName use hoga taaki database values se match ho sake
  const tools = await db.query.tool.findMany({
    where: categoryName
      ? and(eq(tool.isPublished, true), eq(tool.category, categoryName))
      : eq(tool.isPublished, true),
    orderBy: [desc(tool.createdAt)],
  });

  return (
    <main className="mt-10">
      {/* Header section with active category filter indicator if present */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b p-3">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight md:text-xl">
            {categoryName ? `${categoryName} Tools` : "All Tools"}
          </h1>

        </div>

        {categoryName && (
          <div>
            <Button variant="outline" size="sm" render={<Link href="/tools" />}>
              <X className="mr-2 size-4" />
              Clear Filter
            </Button>
          </div>
        )}
      </div>

      <div className="p-3">
        {tools.length > 0 ? (
          <ToolsGrid tools={tools} />
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
            <h3 className="text-lg font-medium">No tools found</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {categoryName
                ? `No published tools found in the "${categoryName}" category.`
                : "No tools available right now."}
            </p>
            {categoryName && (
              <div className="mt-6">
                <Button render={<Link href="/tools" />}>
                  View All Tools
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}