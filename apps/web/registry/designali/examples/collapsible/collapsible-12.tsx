import {
  ChevronDown as ChevronDownIcon,
  Lock as LockIcon,
  Users as UsersIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

export default function LockedSectionDisabled() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Collapsible className="border" defaultOpen>
        <CollapsibleTrigger
          render={
            <Button variant="ghost" className="w-full justify-start">
              <UsersIcon />
              Team members
              <ChevronDownIcon className="ml-auto transition-transform group-data-panel-open/button:rotate-180" />
            </Button>
          }
        />
        <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
          <p className="border-t px-4 py-3 text-sm text-muted-foreground">
            5 of 10 seats in use.
          </p>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible disabled className="border border-dashed">
        <CollapsibleTrigger
          render={
            <Button variant="ghost" className="w-full justify-start">
              <LockIcon />
              Audit log
              <Badge variant="secondary" className="ml-auto">
                Business
              </Badge>
            </Button>
          }
        />
        <CollapsibleContent>
          <p className="px-4 py-3 text-sm">Hidden content</p>
        </CollapsibleContent>
      </Collapsible>
      <p className="text-xs text-muted-foreground">
        Upgrade to the Business plan to review every change made in your
        workspace.
      </p>
    </div>
  )
}
