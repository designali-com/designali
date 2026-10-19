
"use client";

import { useEffect, useState } from "react";
import {
  Copy,
  Check,
  Loader2,
  Maximize2,
  X,
  ExternalLink,
} from "lucide-react";

import { cn } from "@workspace/ui/lib/utils";
import { Button } from "@workspace/ui/components/button";
import { Figma } from "@designali/logos";

interface FigmaFrameCardProps {
  fileKey: string;
  nodeId: string;
  imageUrl?: string | null;
  frameName?: string;
}

function formatFigmaNodeId(id: string) {
  if (!id) return "";
  if (id.includes(":")) return id;

  const index = id.indexOf("-");

  return index === -1
    ? id
    : `${id.slice(0, index)}:${id.slice(index + 1)}`;
}

export function FigmaFrameCard({
  fileKey,
  nodeId,
  frameName = "Figma Design",
}: FigmaFrameCardProps) {
  const [copied, setCopied] = useState(false);
  const [copyLoading, setCopyLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const formattedNodeId = formatFigmaNodeId(nodeId);

  const embedUrl =
    `https://embed.figma.com/design/${fileKey}/designali` +
    `?node-id=${encodeURIComponent(formattedNodeId)}` +
    "&embed-host=designali";

  const figmaUrl =
    `https://www.figma.com/design/${fileKey}/designali` +
    `?node-id=${encodeURIComponent(formattedNodeId)}`;

  const copyToFigmaCanvas = async () => {
    try {
      setCopyLoading(true);

      const params = new URLSearchParams({
        fileKey,
        nodeId: formattedNodeId,
      });

      const response = await fetch(`/api/figma/svg?${params}`);

      if (!response.ok) {
        throw new Error(`SVG request failed: ${response.status}`);
      }

      const data = await response.json();

      if (!data.svgContent) {
        throw new Error("No SVG content returned");
      }

      await navigator.clipboard.writeText(data.svgContent.trim());

      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Could not copy Figma frame:", error);
    } finally {
      setCopyLoading(false);
    }
  };

  useEffect(() => {
    if (!isFullscreen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen]);

  const renderActions = () => (
    <div className="flex items-center justify-between gap-2 border-t bg-background/90 p-2 backdrop-blur-md">
      <p className="min-w-0 flex-1 truncate text-sm font-medium">
        {frameName}
      </p>

      <div className="flex shrink-0 items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="size-8"
          render={
            <a
              href={figmaUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open design in Figma"
            />
          }
        >
          <ExternalLink className="size-4" />
        </Button> 
      </div>
    </div>
  );

  return (
    <>
      <article className="group relative w-full overflow-hidden border bg-background transition-colors hover:border-foreground/20">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/20">
          {!loaded && !failed && (
            <div className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="size-4 animate-spin" />
              Loading Figma preview...
            </div>
          )}

          {failed ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
              <Figma className="size-6 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Preview unavailable
              </p>
              <Button
                size="sm"
                variant="outline"
                render={
                  <a href={figmaUrl} target="_blank" rel="noreferrer" />
                }
              >
                Open in Figma
                <ExternalLink className="ml-2 size-3.5" />
              </Button>
            </div>
          ) : (
            <iframe
              key={embedUrl}
              src={embedUrl}
              title={frameName}
              className={cn(
                "absolute inset-0 size-full border-0 transition-opacity duration-300",
                loaded ? "opacity-100" : "opacity-0"
              )}
              allow="fullscreen"
              loading="lazy"
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
            />
          )}

          <Button
            size="icon"
            variant="secondary"
            className="absolute right-2 top-2 z-20 size-8 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
            onClick={() => setIsFullscreen(true)}
            aria-label="Expand preview"
            title="Expand preview"
          >
            <Maximize2 className="size-4" />
          </Button>
        </div>

        {renderActions()}
      </article>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm md:p-8"
          onClick={() => setIsFullscreen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label={`${frameName} preview`}
            className="relative z-10 flex h-[90vh] w-full max-w-7xl flex-col overflow-hidden border bg-background shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="flex h-12 shrink-0 items-center justify-between gap-3 border-b px-3">
              <div className="flex min-w-0 items-center gap-2">
                <Figma className="size-4 shrink-0" />
                <h2 className="truncate text-sm font-medium">
                  {frameName}
                </h2>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="size-8 shrink-0"
                onClick={() => setIsFullscreen(false)}
                aria-label="Close preview"
              >
                <X className="size-4" />
              </Button>
            </header>

            <div className="relative min-h-0 flex-1 bg-muted/10">
              <iframe
                src={embedUrl}
                title={`${frameName} fullscreen preview`}
                className="size-full border-0"
                allow="fullscreen"
              />
            </div>

            {renderActions()}
          </section>
        </div>
      )}
    </>
  );
}
