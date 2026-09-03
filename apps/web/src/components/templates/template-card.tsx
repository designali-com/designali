"use client"

import * as React from "react"
import Link from "next/link"
import { Download } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"

export interface TemplateCardProps {
  name: string
  slug: string
  url: string
  image?: string
  video?: string
  className?: string
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
    <div
      className={cn(
        "group relative overflow-hidden border border-dotted bg-muted",
        className
      )}
    >
      {/* Preview */}
      <Link
        href={`/templates/${slug}`}
        className="group block"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : video ? (
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
            <div className="flex size-full items-center justify-center">
              <span className="text-sm font-medium text-muted-foreground">
                {name}
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Bottom Actions */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0",
          "mx-auto flex max-w-60 items-center justify-between gap-3",
          "border-t bg-background/70 p-1 backdrop-blur-md",
          "translate-y-full transition-transform duration-300 ease-out",
          "group-hover:translate-y-0"
        )}
      >
        <div className="flex min-w-0">
          <h3 className="truncate pl-2 text-sm font-medium">
            {name}
          </h3>
        </div>

        <Link
          href={url}
          className={cn(
            "inline-flex h-8 shrink-0 items-center justify-center gap-2",
            "bg-primary px-3 text-sm font-medium text-primary-foreground",
            "transition-colors hover:bg-primary/90"
          )}
        >
          <Download className="size-4" />
          Download
        </Link>
      </div>
    </div>
  )
}