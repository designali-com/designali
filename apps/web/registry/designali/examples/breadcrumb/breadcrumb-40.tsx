import { Fragment } from "react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { cn } from "@workspace/ui/lib/utils"

const levels = [
  { label: "vercel-prod", status: "bg-emerald-500" },
  { label: "designali-web", status: "bg-amber-500" },
]

export default function InfrastructureStatusBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="font-mono">
        {levels.map((level) => (
          <Fragment key={level.label}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="flex items-center gap-1.5">
                <span className={cn("size-1.5 rounded-full", level.status)} />
                {level.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage className="flex items-center gap-1.5">
            <span className="size-1.5 animate-pulse rounded-full bg-destructive" />
            blocks-build-7d9f
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
