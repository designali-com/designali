import { Fragment } from "react"
import { CopyIcon, DatabaseIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Button } from "@workspace/ui/components/button"

const prefixes = ["uploads", "2026", "11"]

export default function StorageBucketBreadcrumb() {
  return (
    <div className="flex w-full max-w-md items-center gap-2 border bg-muted/40 px-3 py-2">
      <DatabaseIcon className="size-3.5 shrink-0 text-muted-foreground" />
      <Breadcrumb className="min-w-0 flex-1">
        <BreadcrumbList className="font-mono">
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="font-medium text-foreground">
              media-assets
            </BreadcrumbLink>
          </BreadcrumbItem>
          {prefixes.map((prefix) => (
            <Fragment key={prefix}>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">{prefix}</BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          ))}
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>hero-banner.webp</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Button variant="ghost" size="icon-xs" aria-label="Copy path">
        <CopyIcon />
      </Button>
    </div>
  )
}
