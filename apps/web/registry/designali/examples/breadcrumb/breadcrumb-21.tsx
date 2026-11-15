import { ArrowLeftIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Button } from "@workspace/ui/components/button"

export default function BackButtonBreadcrumb() {
  return (
    <div className="flex w-full max-w-sm items-center gap-3">
      <Button variant="outline" size="icon-sm" aria-label="Go back">
        <ArrowLeftIcon />
      </Button>
      <div className="flex min-w-0 flex-col gap-0.5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Orders</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>#10482</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2 className="truncate text-sm font-semibold">
          Order for Elena Vasquez
        </h2>
      </div>
    </div>
  )
}
