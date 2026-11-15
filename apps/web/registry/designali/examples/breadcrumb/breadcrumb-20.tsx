import { ChevronLeftIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

export default function ResponsiveBackBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="sm:hidden">
          <BreadcrumbLink href="#" className="flex items-center gap-1">
            <ChevronLeftIcon className="size-3.5" />
            Back to Team
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem className="hidden sm:inline-flex">
          <BreadcrumbLink href="#">Company</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden sm:block" />
        <BreadcrumbItem className="hidden sm:inline-flex">
          <BreadcrumbLink href="#">Team</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden sm:block" />
        <BreadcrumbItem className="hidden sm:inline-flex">
          <BreadcrumbPage>Priya Raman</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
