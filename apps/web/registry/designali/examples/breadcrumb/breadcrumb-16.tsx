import { Fragment } from "react"
import {
  CircleCheck as CircleCheckIcon,
} from "@designali/icons"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

const steps = [
  { label: "Cart", status: "done" },
  { label: "Shipping", status: "done" },
  { label: "Payment", status: "current" },
  { label: "Review", status: "upcoming" },
] as const

export default function CheckoutStepsBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-sm">
        {steps.map((step, index) => (
          <Fragment key={step.label}>
            <BreadcrumbItem>
              {step.status === "done" && (
                <BreadcrumbLink href="#" className="flex items-center gap-1">
                  <CircleCheckIcon className="size-3.5 text-emerald-600" />
                  {step.label}
                </BreadcrumbLink>
              )}
              {step.status === "current" && (
                <BreadcrumbPage className="font-medium">
                  {step.label}
                </BreadcrumbPage>
              )}
              {step.status === "upcoming" && (
                <span aria-disabled="true" className="text-muted-foreground/50">
                  {step.label}
                </span>
              )}
            </BreadcrumbItem>
            {index < steps.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
