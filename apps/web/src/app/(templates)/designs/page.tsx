
import { FigmaFrameCard } from "@/src/components/templates/design/figma-card";
import { figmaDesigns } from "@/src/components/templates/design/figma-category";
import { Figma } from "@designali/logos";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export default function DesignPage() {
  return (
    <main className="mt-10 w-full">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b px-3 py-3">
        <div className="flex items-center gap-2">
          <Figma className="size-5" />
          <h1 className="text-base font-medium">
            Free Figma Resources
          </h1>
        </div>
      </header>

      <div className="grid gap-2 p-2">
        {figmaDesigns.map((design) => {
          const fileUrl =
            `https://www.figma.com/design/${design.fileKey}/${design.fileName}?node-id=${design.nodeId}`;

          return (
            <article
              key={design.fileKey}
              className="min-w-0"
            >
              <FigmaFrameCard
                fileKey={design.fileKey}
                nodeId={design.nodeId}
                frameName={design.name}
              />

              <div className="mt-2 flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">
                  {design.slug}
                </span>

                <Button
                  size="sm"
                  variant="outline"
                  render={
                    <Link
                      href={fileUrl}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                >
                  Open Figma
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
