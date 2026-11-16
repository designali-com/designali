import {
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const agenda = [
  {
    id: "a1",
    title: "Review last sprint",
    owner: "AI",
    minutes: 10,
    notes: "Velocity up 12%. Two carry-over block tickets.",
  },
  {
    id: "a2",
    title: "designali.com pricing experiment",
    owner: "DR",
    minutes: 15,
    notes: "Variant B lifted trials by 6%. Decide on rollout.",
  },
  {
    id: "a3",
    title: "New blocks release",
    owner: "SL",
    minutes: 5,
    notes: "40 new blocks ready for /blocks next week.",
  },
]

export default function MeetingAgendaNotes() {
  return (
    <div className="w-full max-w-md border">
      <div className="flex items-center justify-between border-b px-3 py-2">
        <span className="text-sm font-semibold">Weekly Designali studio sync</span>
        <span className="text-xs text-muted-foreground">30 min</span>
      </div>
      {agenda.map((item) => (
        <Collapsible key={item.id} className="border-b last:border-b-0">
          <div className="flex items-center gap-2 px-3 py-1.5">
            <Checkbox
              id={item.id}
              aria-label={"Mark " + item.title + " done"}
            />
            <CollapsibleTrigger
              render={
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 justify-start"
                >
                  {item.title}
                  <span className="ml-auto text-xs font-normal text-muted-foreground">
                    {item.minutes}m
                  </span>
                  <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
                </Button>
              }
            />
            <Avatar size="sm">
              <AvatarFallback>{item.owner}</AvatarFallback>
            </Avatar>
          </div>
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <p className="mx-3 mb-3 ml-9 bg-muted px-3 py-2 text-xs text-muted-foreground">
              {item.notes}
            </p>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}
