import {
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const releases = [
  {
    version: "v3.2.0",
    date: "Nov 12",
    changes: [
      { type: "New", text: "120 new Designali blocks" },
      { type: "Fix", text: "Icon search now matches @designali/icons aliases" },
    ],
  },
  {
    version: "v3.1.4",
    date: "Oct 28",
    changes: [{ type: "Fix", text: "Template previews no longer jump on resize" }],
  },
  {
    version: "v3.1.0",
    date: "Oct 09",
    changes: [
      { type: "New", text: "Saved filters on /ui examples" },
      { type: "Improved", text: "Faster designali.com page loads" },
    ],
  },
]

export default function ChangelogReleases() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      {releases.map((release, index) => (
        <Collapsible
          key={release.version}
          defaultOpen={index === 0}
          className="border"
        >
          <CollapsibleTrigger
            render={
              <Button variant="ghost" className="w-full justify-start px-3">
                <span className="font-mono">{release.version}</span>
                {index === 0 && <Badge>Latest</Badge>}
                <span className="ml-auto text-xs text-muted-foreground">
                  {release.date}
                </span>
                <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
              </Button>
            }
          />
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <ul className="flex flex-col gap-2 border-t px-3 py-3 text-sm">
              {release.changes.map((change) => (
                <li key={change.text} className="flex items-center gap-2">
                  <Badge
                    variant={change.type === "Fix" ? "secondary" : "outline"}
                  >
                    {change.type}
                  </Badge>
                  {change.text}
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}
