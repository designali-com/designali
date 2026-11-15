import { ChevronDownIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

const groups = [
  {
    value: "notifications",
    title: "Notifications",
    hint: "Email and push",
    options: [
      { id: "mentions", label: "Mentions and replies", on: true },
      { id: "digest", label: "Weekly digest", on: false },
      { id: "push", label: "Push notifications", on: true },
    ],
  },
  {
    value: "privacy",
    title: "Privacy",
    hint: "Visibility and data",
    options: [
      { id: "profile", label: "Public profile", on: false },
      { id: "status", label: "Show online status", on: true },
    ],
  },
  {
    value: "appearance",
    title: "Appearance",
    hint: "Motion and density",
    options: [
      { id: "motion", label: "Reduce motion", on: false },
      { id: "compact", label: "Compact mode", on: true },
    ],
  },
]

export default function AccordionSettingsToggles() {
  return (
    <Accordion
      defaultValue={["notifications"]}
      className="w-full max-w-md border px-3"
    >
      {groups.map((group) => (
        <AccordionItem key={group.value} value={group.value}>
          <AccordionTrigger className="items-center">
            <span className="flex flex-col">
              <span className="text-sm">{group.title}</span>
              <span className="font-normal text-muted-foreground">
                {group.hint}
              </span>
            </span>
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent className="space-y-3">
            {group.options.map((option) => (
              <div
                key={option.id}
                className="flex items-center justify-between gap-4"
              >
                <Label htmlFor={option.id} className="font-normal">
                  {option.label}
                </Label>
                <Switch id={option.id} defaultChecked={option.on} />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
