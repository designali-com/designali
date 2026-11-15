import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const activity = [
  {
    who: "Iris Novak",
    what: "merged #482",
    ago: "3m ago",
    exact: "Jun 12, 2026, 14:07:33",
  },
  {
    who: "Kofi Mensah",
    what: "commented on #479",
    ago: "2h ago",
    exact: "Jun 12, 2026, 12:01:09",
  },
  {
    who: "Lea Fontaine",
    what: "opened #483",
    ago: "yesterday",
    exact: "Jun 11, 2026, 17:44:50",
  },
]

export default function RelativeTimestampTooltip() {
  return (
    <TooltipProvider>
      <ul className="flex w-full max-w-sm flex-col gap-3 text-sm">
        {activity.map((a) => (
          <li key={a.exact} className="flex items-center justify-between gap-2">
            <span>
              <span className="font-medium">{a.who}</span>{" "}
              <span className="text-muted-foreground">{a.what}</span>
            </span>
            <Tooltip>
              <TooltipTrigger
                render={
                  <time
                    tabIndex={0}
                    className="shrink-0 text-xs text-muted-foreground underline decoration-dotted underline-offset-4"
                  />
                }
              >
                {a.ago}
              </TooltipTrigger>
              <TooltipContent>{a.exact}</TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </TooltipProvider>
  )
}
