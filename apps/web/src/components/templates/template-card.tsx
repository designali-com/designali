"use client";

import * as React from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { Button } from "@workspace/ui/components/button";

export interface TemplateCardProps {
  name: string;
  slug: string;
  url: string;
  image?: string;
  video?: string;
  className?: string;
}

export function TemplateCard({
  name,
  slug,
  url,
  image,
  video,
  className,
}: TemplateCardProps) {
  return (
    <Link
      href={`/templates/${slug}`}
      className={cn("group block", className)}
    >
      {/* Preview */}
      <div className="relative aspect-[16/10] overflow-hidden border bg-muted">
        {/* Image */}
        {image ? (
          <img
            src={image}
            alt={name}
            className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : video ? (
          /* Video */
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          /* Fallback */
          <div className="flex size-full items-center justify-center">
            <span className="text-sm font-medium text-muted-foreground">
              {name}
            </span>
          </div>
        )}


        <div
          className={cn(
            "absolute inset-x-0 bottom-0",
            "flex items-center max-w-60 mx-auto justify-between gap-3",
            "border-t bg-background/70 p-1 backdrop-blur-md",
            "translate-y-full transition-transform duration-300 ease-out",
            "group-hover:translate-y-0"
          )}
        >
          <div className="min-w-0 flex">
            <h3 className="truncate pl-2 text-sm font-medium">
              {name}
            </h3>

          </div>

          <Button size={"sm"}
            render={<Link href={url} />}>
            <Download />
            Download
          </Button>
        </div>

      </div>
    </Link>
  );
}