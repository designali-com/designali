import {
  ChevronDown as ChevronDownIcon,
  Trash2 as Trash2Icon,
  TriangleAlert as TriangleAlertIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

export default function DangerZoneSettings() {
  return (
    <Collapsible className="w-full max-w-md border border-destructive/40">
      <CollapsibleTrigger
        render={
          <Button
            variant="ghost"
            className="w-full justify-start text-destructive hover:text-destructive"
          >
            <TriangleAlertIcon />
            Danger zone
            <ChevronDownIcon className="ml-auto transition-transform group-data-panel-open/button:rotate-180" />
          </Button>
        }
      />
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
        <div className="divide-y border-t border-destructive/40">
          <div className="flex items-center justify-between gap-4 p-4">
            <div>
              <p className="text-sm font-medium">Transfer ownership</p>
              <p className="text-xs text-muted-foreground">
                Hand this workspace to another admin.
              </p>
            </div>
            <Button variant="outline" size="sm">
              Transfer
            </Button>
          </div>
          <div className="flex items-center justify-between gap-4 p-4">
            <div>
              <p className="text-sm font-medium">Delete workspace</p>
              <p className="text-xs text-muted-foreground">
                Permanently remove all projects and data.
              </p>
            </div>
            <Button variant="destructive" size="sm">
              <Trash2Icon data-icon="inline-start" />
              Delete
            </Button>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
