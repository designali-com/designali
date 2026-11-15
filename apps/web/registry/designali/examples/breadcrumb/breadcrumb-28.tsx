import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@workspace/ui/components/breadcrumb"
import { cn } from "@workspace/ui/lib/utils"

const segments = ["Leads", "Qualified", "Proposal"]

export default function ArrowSegmentBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-0">
        {segments.map((segment, index) => (
          <BreadcrumbItem key={segment} className={cn(index > 0 && "-ml-2")}>
            <BreadcrumbLink
              href="#"
              className="bg-muted py-1.5 ps-5 pe-4 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_50%,calc(100%-8px)_100%,0_100%,8px_50%)] first:ps-3 hover:bg-muted/70"
            >
              {segment}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
        <BreadcrumbItem className="-ml-2">
          <BreadcrumbPage className="bg-primary py-1.5 ps-5 pe-4 text-primary-foreground [clip-path:polygon(0_0,calc(100%-8px)_0,100%_50%,calc(100%-8px)_100%,0_100%,8px_50%)]">
            Closed won
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
