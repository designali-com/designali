import {
  Archive as ArchiveIcon,
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Badge } from "@workspace/ui/components/badge"

const groups = [
  {
    value: "active",
    title: "Active",
    projects: ["designali.com relaunch", "Icons v2", "Client brand identity"],
  },
  { value: "paused", title: "Paused", projects: ["Dalim Fonts revival"] },
  { value: "archived", title: "Archived", projects: [] as string[] },
]

export default function AccordionProjectGroupsEmpty() {
  return (
    <Accordion
      multiple
      defaultValue={["active", "archived"]}
      className="w-full max-w-sm border px-3"
    >
      {groups.map((group) => (
        <AccordionItem key={group.value} value={group.value}>
          <AccordionTrigger className="items-center">
            <span className="flex items-center gap-2">
              {group.title}
              <Badge variant="secondary">{group.projects.length}</Badge>
            </span>
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent>
            {group.projects.length > 0 ? (
              <ul className="space-y-1">
                {group.projects.map((project) => (
                  <li key={project} className="flex items-center gap-2 py-1">
                    <span className="size-2 bg-foreground/60" />
                    {project}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center gap-2 border border-dashed py-5 text-center">
                <ArchiveIcon className="size-4 text-muted-foreground" />
                <p className="text-muted-foreground">
                  No archived projects yet.
                </p>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
