import {
  Download as DownloadIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Button } from "@workspace/ui/components/button"

export default function InvoiceDetailBreadcrumb() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3 border p-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Billing</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Invoices</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-mono">INV-2026-0117</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold">$1,240.00</span>
          <Badge variant="secondary">Paid</Badge>
        </div>
        <Button variant="outline" size="sm">
          <DownloadIcon data-icon="inline-start" />
          PDF
        </Button>
      </div>
    </div>
  )
}
