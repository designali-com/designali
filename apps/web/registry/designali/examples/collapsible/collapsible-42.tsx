import {
  ChevronDown as ChevronDownIcon,
  Search as SearchIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const clauses = [
  {
    title: "1. Acceptable use",
    body: "You agree not to resell access, probe for vulnerabilities, or upload unlawful content.",
  },
  {
    title: "2. Data retention",
    body: "Deleted projects are kept for 30 days before permanent removal from backups.",
  },
  {
    title: "3. Termination",
    body: "Either party may terminate with 30 days written notice; prepaid fees are refunded pro rata.",
  },
]

export default function HiddenUntilFoundTerms() {
  return (
    <div className="w-full max-w-md space-y-2">
      <p className="flex items-center gap-2 text-xs text-muted-foreground">
        <SearchIcon className="size-3.5" />
        Try searching the page for &quot;backups&quot; to auto-open a clause.
      </p>
      <div className="divide-y border">
        {clauses.map((clause) => (
          <Collapsible key={clause.title}>
            <CollapsibleTrigger
              render={
                <Button variant="ghost" className="w-full justify-between">
                  {clause.title}
                  <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
                </Button>
              }
            />
            <CollapsibleContent
              hiddenUntilFound
              className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0 [&[hidden]:not([hidden='until-found'])]:hidden"
            >
              <p className="px-4 pb-3 text-sm text-muted-foreground">
                {clause.body}
              </p>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  )
}
