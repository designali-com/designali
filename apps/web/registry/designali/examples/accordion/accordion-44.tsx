import {
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { cn } from "@workspace/ui/lib/utils"

const incidents = [
  {
    value: "i1",
    title: "designali.com downloads slow",
    date: "Nov 14",
    severity: "major",
    updates: [
      {
        time: "14:52",
        label: "Resolved",
        text: "Error rates are back to normal.",
      },
      {
        time: "14:20",
        label: "Monitoring",
        text: "A fix has been deployed to all regions.",
      },
      {
        time: "13:58",
        label: "Investigating",
        text: "Template downloads are timing out for some users.",
      },
    ],
  },
  {
    value: "i2",
    title: "Delayed order emails",
    date: "Nov 3",
    severity: "minor",
    updates: [
      {
        time: "09:40",
        label: "Resolved",
        text: "All order confirmation emails have been sent.",
      },
      {
        time: "09:05",
        label: "Identified",
        text: "A queue worker stalled after a config change.",
      },
    ],
  },
]

export default function AccordionIncidentHistory() {
  return (
    <Accordion defaultValue={["i1"]} className="w-full max-w-md border px-3">
      {incidents.map((incident) => (
        <AccordionItem key={incident.value} value={incident.value}>
          <AccordionTrigger className="items-center">
            <span className="flex items-center gap-2">
              <span
                className={cn(
                  "size-2 rounded-full",
                  incident.severity === "major"
                    ? "bg-orange-500"
                    : "bg-amber-400"
                )}
              />
              {incident.title}
            </span>
            <span className="ms-auto me-2 font-normal text-muted-foreground">
              {incident.date}
            </span>
            <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="space-y-2.5 ps-4">
            {incident.updates.map((update) => (
              <div key={update.time}>
                <p>
                  <span className="font-medium">{update.label}</span>
                  <span className="text-muted-foreground">
                    {" "}
                    &middot; {update.time} UTC
                  </span>
                </p>
                <p className="text-muted-foreground">{update.text}</p>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
