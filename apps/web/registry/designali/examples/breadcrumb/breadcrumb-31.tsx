import { ClockIcon, CreditCardIcon, LifeBuoyIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

export default function HelpCenterBreadcrumb() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="flex items-center gap-1.5">
              <LifeBuoyIcon className="size-3.5" />
              Help center
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="flex items-center gap-1.5">
              <CreditCardIcon className="size-3.5" />
              Payments
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Request a refund</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
        <ClockIcon className="size-3" />
        Updated 3 days ago · 4 min read
      </p>
    </div>
  )
}
