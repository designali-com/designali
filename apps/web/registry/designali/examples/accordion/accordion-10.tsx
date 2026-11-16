import {
  ChevronDown as ChevronDownIcon,
  Lock as LockIcon,
  Sparkles as SparklesIcon,
} from "@designali/icons"

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
    title: "Free blocks",
    locked: false,
    body: "Copy any free Designali block straight into your Next.js project.",
  },
  {
    value: "alerts",
    title: "Icons & logos",
    locked: false,
    body: "Use @designali/icons and @designali/logos in every project.",
  },
  { value: "sso", title: "Premium templates", locked: true, body: "" },
  { value: "audit", title: "Figma source files", locked: true, body: "" },
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
