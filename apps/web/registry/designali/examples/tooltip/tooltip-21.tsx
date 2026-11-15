import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function CursorTrackingTooltip() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <span className="text-sm font-medium">Session replay</span>
      <Tooltip trackCursorAxis="x">
        <TooltipTrigger
          render={
            <div
              tabIndex={0}
              className="relative h-10 w-full cursor-crosshair border bg-muted/40"
            />
          }
        >
          <div className="absolute inset-y-0 start-0 w-2/5 bg-primary/15" />
          <div className="absolute inset-y-3 start-[18%] w-1 bg-amber-500" />
          <div className="absolute inset-y-3 start-[63%] w-1 bg-rose-500" />
        </TooltipTrigger>
        <TooltipContent>Hover to scrub the 04:32 recording</TooltipContent>
      </Tooltip>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>00:00</span>
        <span>04:32</span>
      </div>
    </div>
  )
}
