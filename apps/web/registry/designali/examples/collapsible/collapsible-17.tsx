import {
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { Label } from "@workspace/ui/components/label"

const facets = [
  {
    title: "Category",
    options: ["Templates", "Blocks", "Icons", "Logos"],
  },
  { title: "Stack", options: ["Next.js", "React", "TypeScript", "Tailwind", "Figma"] },
  { title: "License", options: ["Personal", "Commercial", "Team"] },
]

export default function ShopFilterFacets() {
  return (
    <aside className="w-full max-w-60 divide-y border">
      {facets.map((facet, index) => (
        <Collapsible key={facet.title} defaultOpen={index < 2}>
          <CollapsibleTrigger
            render={
              <Button
                variant="ghost"
                className="w-full justify-between px-3 font-semibold"
              >
                {facet.title}
                <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
              </Button>
            }
          />
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <div className="flex flex-col gap-2 px-3 pb-3">
              {facet.options.map((option) => {
                const id = facet.title + "-" + option
                return (
                  <div key={option} className="flex items-center gap-2">
                    <Checkbox id={id} />
                    <Label htmlFor={id} className="font-normal">
                      {option}
                    </Label>
                  </div>
                )
              })}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </aside>
  )
}
