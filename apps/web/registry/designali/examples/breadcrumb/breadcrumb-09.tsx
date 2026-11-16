import { Fragment } from "react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

const trail = ["Designali", "Templates", "Portfolio"]

export default function StoreCategoryBreadcrumb() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Breadcrumb>
        <BreadcrumbList>
          {trail.map((item) => (
            <Fragment key={item}>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">{item}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </Fragment>
          ))}
          <BreadcrumbItem>
            <BreadcrumbPage>Minimal</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-baseline justify-between gap-2">
        <h2 className="text-lg font-semibold">Minimal portfolio templates</h2>
        <span className="text-xs text-muted-foreground">24 results</span>
      </div>
    </div>
  )
}
