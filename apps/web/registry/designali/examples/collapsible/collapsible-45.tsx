import { ChevronRightIcon, EyeIcon, PlusIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const vars = [
  { key: "DATABASE_URL", value: "postgres://app:••••@db.internal:5432/app" },
  { key: "PAYMENTS_SECRET", value: "key_demo_••••••••••••3f9a" },
  { key: "NEXT_PUBLIC_REGION", value: "eu-central" },
]

export default function EnvironmentVariables() {
  return (
    <Collapsible defaultOpen className="w-full max-w-md border">
      <div className="flex items-center gap-2 px-3 py-2">
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              size="sm"
              className="-ml-1 flex-1 justify-start"
            >
              <ChevronRightIcon className="transition-transform group-data-panel-open/button:rotate-90" />
              Environment variables
              <Badge variant="outline">{vars.length}</Badge>
            </Button>
          }
        />
        <Button size="xs" variant="outline">
          <PlusIcon />
          Add
        </Button>
      </div>
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
        <div className="divide-y border-t">
          {vars.map((v) => (
            <div key={v.key} className="flex items-center gap-2 px-3 py-2">
              <code className="w-32 shrink-0 truncate text-xs font-semibold sm:w-40">
                {v.key}
              </code>
              <code className="flex-1 truncate text-xs text-muted-foreground">
                {v.value}
              </code>
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label={"Reveal " + v.key}
              >
                <EyeIcon />
              </Button>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
