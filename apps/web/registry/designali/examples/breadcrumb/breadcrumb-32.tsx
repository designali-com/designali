import { Fragment } from "react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

const path = [
  "Company",
  "Engineering",
  "Platform",
  "Observability",
  "Dashboards",
  "Alerts",
  "Paging rules",
]

export default function ScrollableBreadcrumb() {
  return (
    <div className="w-full max-w-xs overflow-x-auto border px-3 py-2 [scrollbar-width:thin]">
      <Breadcrumb>
        <BreadcrumbList className="flex-nowrap whitespace-nowrap">
          {path.map((item, index) => (
            <Fragment key={item}>
              <BreadcrumbItem>
                {index === path.length - 1 ? (
                  <BreadcrumbPage>{item}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href="#">{item}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < path.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
