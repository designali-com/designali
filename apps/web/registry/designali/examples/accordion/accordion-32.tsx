import { ArrowUpRightIcon, ChevronDownIcon, MapPinIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

const roles = [
  {
    value: "pd",
    title: "Senior Product Designer",
    team: "Design",
    location: "Remote, Europe",
    type: "Full-time",
    summary:
      "Own the end-to-end experience of our invoicing product, from discovery to polished UI.",
  },
  {
    value: "fe",
    title: "Frontend Engineer",
    team: "Engineering",
    location: "Lisbon",
    type: "Full-time",
    summary:
      "Build fast, accessible interfaces in React and help shape our component library.",
  },
  {
    value: "cs",
    title: "Customer Success Lead",
    team: "Operations",
    location: "Remote, US",
    type: "Contract",
    summary:
      "Guide new customers through onboarding and turn their feedback into product insight.",
  },
]

export default function AccordionJobOpenings() {
  return (
    <Accordion className="w-full max-w-md border-y">
      {roles.map((role) => (
        <AccordionItem key={role.value} value={role.value}>
          <AccordionTrigger className="items-center py-3 hover:no-underline">
            <span className="flex flex-col gap-0.5">
              <span className="text-sm">{role.title}</span>
              <span className="flex items-center gap-1 font-normal text-muted-foreground">
                <MapPinIcon className="size-3" />
                {role.location} &middot; {role.team}
              </span>
            </span>
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent className="space-y-3">
            <Badge variant="outline">{role.type}</Badge>
            <p className="text-muted-foreground">{role.summary}</p>
            <Button size="sm">
              Apply for this role
              <ArrowUpRightIcon data-icon="inline-end" />
            </Button>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
