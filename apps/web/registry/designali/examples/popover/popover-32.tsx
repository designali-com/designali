import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const data = [
  { month: "Jun", signups: 320, churn: 2.1 },
  { month: "Jul", signups: 410, churn: 1.8 },
  { month: "Aug", signups: 380, churn: 2.4 },
  { month: "Sep", signups: 520, churn: 1.6 },
  { month: "Oct", signups: 610, churn: 1.4 },
  { month: "Nov", signups: 470, churn: 1.9 },
]

const max = Math.max(...data.map((d) => d.signups))

export default function ChartDataPointPopover() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
      <span className="text-sm font-medium">Monthly signups</span>
      <div className="flex h-36 items-end gap-2">
        {data.map((d) => (
          <Popover key={d.month}>
            <PopoverTrigger
              render={
                <button
                  type="button"
                  aria-label={d.month + " details"}
                  className="flex-1 bg-primary/70 transition-colors hover:bg-primary data-popup-open:bg-primary"
                  style={{ height: (d.signups / max) * 100 + "%" }}
                />
              }
            />
            <PopoverContent side="top" className="w-40">
              <PopoverTitle>{d.month} 2026</PopoverTitle>
              <div className="flex flex-col gap-1 text-xs">
                <span className="flex justify-between">
                  <span className="text-muted-foreground">Signups</span>
                  <span className="tabular-nums">{d.signups}</span>
                </span>
                <span className="flex justify-between">
                  <span className="text-muted-foreground">Churn</span>
                  <span className="tabular-nums">{d.churn}%</span>
                </span>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
      <div className="flex gap-2 text-[11px] text-muted-foreground">
        {data.map((d) => (
          <span key={d.month} className="flex-1 text-center">
            {d.month}
          </span>
        ))}
      </div>
    </div>
  )
}
