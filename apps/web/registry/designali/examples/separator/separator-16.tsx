import { CheckIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"

const features = [
  "Unlimited projects",
  "10 GB storage",
  "Version history",
  "Priority support",
]

export default function PricingCardSeparator() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 border p-5">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">Studio</span>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-semibold">$18</span>
          <span className="text-sm text-muted-foreground">/ month</span>
        </div>
        <span className="text-xs text-muted-foreground">
          For freelancers and small teams.
        </span>
      </div>
      <Button className="w-full">Start free trial</Button>
      <Separator />
      <ul className="flex flex-col gap-2 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <CheckIcon className="size-4 text-primary" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
