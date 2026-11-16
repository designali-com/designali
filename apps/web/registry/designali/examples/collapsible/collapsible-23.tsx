import {
  ChevronRight as ChevronRightIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

type Person = { name: string; role: string; reports?: Person[] }

const org: Person = {
  name: "Ali Imam",
  role: "Founder & Design Engineer",
  reports: [
    {
      name: "Omar",
      role: "Development Lead",
      reports: [
        { name: "Rohan", role: "Next.js Developer" },
        { name: "Leo", role: "Creative Developer" },
      ],
    },
    {
      name: "Sara",
      role: "Design Lead",
      reports: [{ name: "Nina", role: "Motion Designer" }],
    },
  ],
}

function PersonRow({ person }: { person: Person }) {
  const label = (
    <>
      <Avatar size="sm">
        <AvatarFallback>
          {person.name
            .split(" ")
            .map((p) => p[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <span className="text-left">
        <span className="block text-xs font-medium">{person.name}</span>
        <span className="block text-[11px] font-normal text-muted-foreground">
          {person.role}
        </span>
      </span>
    </>
  )
  if (!person.reports) {
    return <div className="flex items-center gap-2 py-1.5 pl-7">{label}</div>
  }
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger
        render={
          <Button
            variant="ghost"
            className="h-auto w-full justify-start gap-2 px-1 py-1.5"
          >
            <ChevronRightIcon className="transition-transform group-data-panel-open/button:rotate-90" />
            {label}
            <Badge variant="outline" className="ml-auto">
              {person.reports.length}
            </Badge>
          </Button>
        }
      />
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
        <div className="ml-3 border-l pl-3">
          {person.reports.map((report) => (
            <PersonRow key={report.name} person={report} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default function TeamHierarchy() {
  return (
    <div className="w-full max-w-xs border p-2">
      <PersonRow person={org} />
    </div>
  )
}
