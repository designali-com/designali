import { Slider } from "@workspace/ui/components/slider"

const thresholds = [
  {
    label: "CPU alert",
    value: 45,
    range: "[&_[data-slot=slider-range]]:bg-primary",
    note: "Healthy",
  },
  {
    label: "Memory alert",
    value: 72,
    range: "[&_[data-slot=slider-range]]:bg-primary",
    note: "Warning",
  },
  {
    label: "Disk alert",
    value: 91,
    range: "[&_[data-slot=slider-range]]:bg-destructive",
    note: "Critical",
  },
]

export default function StatusColorSliders() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5 border p-4">
      {thresholds.map((t) => (
        <div key={t.label} className="flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <span>{t.label}</span>
            <span className="text-xs text-muted-foreground">
              {t.value}% &middot; {t.note}
            </span>
          </div>
          <Slider
            aria-label={t.label}
            className={t.range}
            defaultValue={[t.value]}
          />
        </div>
      ))}
    </div>
  )
}
