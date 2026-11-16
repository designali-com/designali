import {
  ChevronLeft as ChevronLeftIcon,
} from "@designali/icons"

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
          <BreadcrumbLink href="#">Designali</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden sm:block" />
        <BreadcrumbItem className="hidden sm:inline-flex">
          <BreadcrumbLink href="#">Team</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden sm:block" />
        <BreadcrumbItem className="hidden sm:inline-flex">
          <BreadcrumbPage>Ali Imam</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
