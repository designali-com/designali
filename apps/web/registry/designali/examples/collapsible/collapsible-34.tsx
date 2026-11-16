import {
  FileText as FileTextIcon,
  Search as SearchIcon,
  User as UserIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

const groups = [
  {
    label: "Documents",
    icon: FileTextIcon,
    results: [
      "Designali product roadmap",
      "Brand identity proposal",
      "Icon grid & rotation guide",
      "Prototype handoff notes",
      "Rounded logo marks",
    ],
  },
  {
    label: "People",
    icon: UserIcon,
    results: ["Rohan · Designer", "Rosa · Client", "Ronit · Developer", "Rory · Motion"],
  },
]

export default function SearchResultGroups() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput defaultValue="ro" aria-label="Search" />
      </InputGroup>
      {groups.map((group) => (
        <Collapsible key={group.label}>
          <p className="mb-1 text-xs font-medium text-muted-foreground">
            {group.label}
          </p>
          <ul>
            {group.results.slice(0, 2).map((result) => (
              <li
                key={result}
                className="flex items-center gap-2 px-2 py-1.5 text-sm hover:bg-muted"
              >
                <group.icon className="size-4 text-muted-foreground" />
                {result}
              </li>
            ))}
          </ul>
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <ul>
              {group.results.slice(2).map((result) => (
                <li
                  key={result}
                  className="flex items-center gap-2 px-2 py-1.5 text-sm hover:bg-muted"
                >
                  <group.icon className="size-4 text-muted-foreground" />
                  {result}
                </li>
              ))}
            </ul>
          </CollapsibleContent>
          <CollapsibleTrigger
            render={
              <Button variant="link" size="xs" className="group/more px-2" />
            }
          >
            <span className="group-data-panel-open/more:hidden">
              Show {group.results.length - 2} more
            </span>
            <span className="hidden group-data-panel-open/more:inline">
              Show fewer
            </span>
          </CollapsibleTrigger>
        </Collapsible>
      ))}
    </div>
  )
}
