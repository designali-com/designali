"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight, Download } from "lucide-react"
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
      <Link href={`/templates/${slug}`} className="group block">
        <div className="relative aspect-[16/9] overflow-hidden">
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
          <h3 className="truncate pl-2 text-sm font-medium">{name}</h3>
        </div>

        <Link
          target="_blank"
          href={url}
          className={cn(
            "inline-flex h-8 w-8 shrink-0 items-center justify-center gap-2",
            "bg-primary text-sm font-medium text-primary-foreground",
            "transition-colors hover:bg-primary/90"
          )}
        >
          <ArrowUpRight className="size-4" />

        </Link>
      </div>
    </div>
  )
}

export interface TemplateCardProgressProps {
  name: string
  image?: string
  className?: string
}


export function TemplateCardProgress({
  name,
  image,
  className,
}: TemplateCardProgressProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden border border-dotted bg-muted",
        className
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="absolute inset-0 size-full object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <span className="text-sm text-muted-foreground">
              {name}
            </span>
          </div>
        )}

        {/* Hover Progress */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center",
            "bg-background/70 backdrop-blur-sm",
            "opacity-0 transition-opacity duration-300",
            "group-hover:opacity-100"
          )}
        >
          <div className="w-full max-w-48 px-4 text-center">
            <p className="text-sm font-medium">
              Design in process
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}