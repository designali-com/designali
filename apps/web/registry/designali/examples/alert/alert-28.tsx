import {
  CircleCheck as CircleCheckIcon,
  CircleX as CircleXIcon,
  TriangleAlert as TriangleAlertIcon,
} from "@designali/icons"

import { Alert, AlertTitle } from "@workspace/ui/components/alert"

const services = [
  {
    name: "designali.com",
    status: "Operational",
    variant: "success" as const,
    icon: CircleCheckIcon,
  },
  {
    name: "Blocks registry",
    status: "Operational",
    variant: "success" as const,
    icon: CircleCheckIcon,
  },
  {
    name: "Template downloads",
    status: "Degraded performance",
    variant: "warning" as const,
    icon: TriangleAlertIcon,
  },
  {
    name: "Order emails",
    status: "Partial outage",
    variant: "error" as const,
    icon: CircleXIcon,
  },
]

export default function AlertServiceStatusStrip() {
  return (
    <div className="w-full max-w-sm space-y-1.5">
      {services.map((service) => (
        <Alert
          key={service.name}
          variant={service.variant}
          className="items-center py-1.5 *:[svg]:row-span-1"
        >
          <service.icon className="size-3.5" />
          <AlertTitle className="flex justify-between gap-2">
            {service.name}
            <span className="font-normal text-muted-foreground">
              {service.status}
            </span>
          </AlertTitle>
        </Alert>
      ))}
    </div>
  )
}
