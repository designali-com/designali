import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Button } from "@workspace/ui/components/button"
import { ButtonGroup } from "@workspace/ui/components/button-group"

export default function CalendarDateBreadcrumb() {
  return (
    <div className="flex w-full max-w-md items-center justify-between gap-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="flex items-center gap-1.5">
              <CalendarIcon className="size-3.5" />
              2026
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">November</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Week 47</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Fri 20</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ButtonGroup>
        <Button variant="outline" size="icon-xs" aria-label="Previous day">
          <ChevronLeftIcon />
        </Button>
        <Button variant="outline" size="icon-xs" aria-label="Next day">
          <ChevronRightIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}
