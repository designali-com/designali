import { ChevronDownIcon, LockIcon, SparklesIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

const features = [
  {
    value: "reports",
    title: "Scheduled reports",
    locked: false,
    body: "Send a PDF summary of your dashboards every Monday at 9:00.",
  },
  {
    value: "alerts",
    title: "Threshold alerts",
    locked: false,
    body: "Get notified when a metric crosses a value you define.",
  },
  { value: "sso", title: "Single sign-on", locked: true, body: "" },
  { value: "audit", title: "Audit log", locked: true, body: "" },
]

export default function AccordionDisabledItems() {
  return (
    <div className="w-full max-w-md space-y-3">
      <Accordion defaultValue={["reports"]} className="border px-3">
        {features.map((feature) => (
          <AccordionItem
            key={feature.value}
            value={feature.value}
            disabled={feature.locked}
          >
            <AccordionTrigger className="items-center">
              <span className="flex items-center gap-2">
                {feature.locked && (
                  <LockIcon className="size-3.5 text-muted-foreground" />
                )}
                {feature.title}
                {feature.locked && <Badge variant="outline">Pro</Badge>}
              </span>
              <ChevronDownIcon
                data-slot="accordion-trigger-icon"
                className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
              />
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {feature.body}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button size="sm" className="w-full">
        <SparklesIcon data-icon="inline-start" />
        Upgrade to unlock
      </Button>
    </div>
  )
}
