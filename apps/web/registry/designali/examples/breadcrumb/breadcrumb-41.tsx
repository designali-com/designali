"use client"

import * as React from "react"
import { BookOpenIcon, StarIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

export default function DocumentTopBarBreadcrumb() {
  const [starred, setStarred] = React.useState(false)

  return (
    <div className="flex w-full max-w-lg items-center justify-between gap-2 border-b px-2 py-1.5">
      <Breadcrumb className="min-w-0">
        <BreadcrumbList className="flex-nowrap">
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="flex items-center gap-1">
              <BookOpenIcon className="size-3.5" />
              Handbook
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="min-w-0">
            <BreadcrumbPage className="truncate">
              Remote work policy
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex shrink-0 items-center gap-1">
        <span className="hidden text-[11px] text-muted-foreground sm:inline">
          Edited 2m ago
        </span>
        <Button variant="ghost" size="xs">
          Share
        </Button>
        <Button
          variant="ghost"
          size="icon-xs"
          aria-label={starred ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={starred}
          onClick={() => setStarred(!starred)}
        >
          <StarIcon
            className={cn(starred && "fill-amber-400 text-amber-400")}
          />
        </Button>
      </div>
    </div>
  )
}
