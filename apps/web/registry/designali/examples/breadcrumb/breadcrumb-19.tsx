import { Fragment } from "react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const items = [
  "Quarterly planning for the customer success organization",
  "Retention experiments and onboarding improvements",
]

export default function TruncatedTooltipBreadcrumb() {
  return (
    <Breadcrumb className="w-full max-w-sm">
      <BreadcrumbList className="flex-nowrap">
        {items.map((item) => (
          <Fragment key={item}>
            <BreadcrumbItem className="min-w-0">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <BreadcrumbLink
                      href="#"
                      className="block max-w-28 truncate"
                    >
                      {item}
                    </BreadcrumbLink>
                  }
                />
                <TooltipContent>{item}</TooltipContent>
              </Tooltip>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbItem className="min-w-0">
          <BreadcrumbPage className="block truncate">
            Week 3 notes
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
