import { ChevronDownIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Badge } from "@workspace/ui/components/badge"

const releases = [
  {
    value: "3.4.0",
    date: "Nov 12, 2026",
    changes: [
      { type: "New", text: "Bulk edit for tasks across boards" },
      { type: "Improved", text: "Search results now load 40% faster" },
      { type: "Fixed", text: "Due dates shifting across time zones" },
    ],
  },
  {
    value: "3.3.2",
    date: "Oct 28, 2026",
    changes: [
      { type: "Fixed", text: "Attachments failing on files over 20 MB" },
      { type: "Fixed", text: "Sidebar flicker when switching workspaces" },
    ],
  },
  {
    value: "3.3.0",
    date: "Oct 14, 2026",
    changes: [
      { type: "New", text: "Timeline view with drag to reschedule" },
      { type: "Improved", text: "Keyboard navigation in the command menu" },
    ],
  },
]

const tone: Record<string, "default" | "secondary" | "outline"> = {
  New: "default",
  Improved: "secondary",
  Fixed: "outline",
}

export default function AccordionChangelog() {
  return (
    <Accordion defaultValue={["3.4.0"]} className="w-full max-w-md border px-3">
      {releases.map((release, index) => (
        <AccordionItem key={release.value} value={release.value}>
          <AccordionTrigger className="items-center">
            <span className="flex items-center gap-2">
              <span className="font-mono text-sm">v{release.value}</span>
              {index === 0 && <Badge variant="secondary">Latest</Badge>}
            </span>
            <span className="ms-auto me-2 font-normal text-muted-foreground">
              {release.date}
            </span>
            <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              {release.changes.map((change) => (
                <li key={change.text} className="flex items-start gap-2">
                  <Badge variant={tone[change.type]} className="w-16">
                    {change.type}
                  </Badge>
                  <span>{change.text}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
