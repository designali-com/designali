import {
  ArrowUpRight as ArrowUpRightIcon,
  ChevronDown as ChevronDownIcon,
  MapPin as MapPinIcon,
} from "@designali/icons"

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
    title: "UI/UX Designer",
    team: "Design",
    location: "Remote",
    type: "Full-time",
    summary:
      "Design client websites and Designali blocks, from first sketch in Figma to polished UI.",
  },
  {
    value: "fe",
    title: "Next.js Developer",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
    summary:
      "Turn Designali designs into fast, accessible Next.js and Tailwind CSS code.",
  },
  {
    value: "cs",
    title: "Motion & 3D Designer",
    team: "Creative",
    location: "Remote",
    type: "Contract",
    summary:
      "Create CGI, 3D and motion work for Designali client projects and launches.",
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
