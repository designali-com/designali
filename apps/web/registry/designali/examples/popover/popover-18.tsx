import { CheckIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const features = [
  "Unlimited projects",
  "10 GB file storage",
  "Version history (90 days)",
  "Priority email support",
  "SAML single sign-on",
]

export default function PlanFeaturesPopover() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium">Growth</span>
        <span className="text-lg font-semibold">
          $24
          <span className="text-xs font-normal text-muted-foreground">
            /seat/mo
          </span>
        </span>
      </div>
      <p className="text-xs text-muted-foreground">
        For teams scaling their workflows.
      </p>
      <div className="flex items-center gap-2">
        <Button size="sm" className="flex-1">
          Choose Growth
        </Button>
        <Popover>
          <PopoverTrigger render={<Button variant="link" size="sm" />}>
            What&apos;s included
          </PopoverTrigger>
          <PopoverContent className="w-60" side="top">
            <PopoverTitle>Growth includes</PopoverTitle>
            <ul className="flex flex-col gap-1.5">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-xs">
                  <CheckIcon className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
