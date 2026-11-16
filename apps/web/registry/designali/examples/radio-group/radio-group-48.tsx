import {
  Settings as SettingsIcon,
} from "@designali/icons"

import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const qualities = [
  { value: "auto", label: "Auto", note: "1080p" },
  { value: "2160", label: "2160p", note: "4K" },
  { value: "1080", label: "1080p", note: "HD" },
  { value: "720", label: "720p", note: "" },
  { value: "480", label: "480p", note: "Data saver" },
]

export default function VideoQualitySettings() {
  return (
    <div className="flex w-full max-w-56 flex-col bg-foreground p-2 text-background">
      <p className="flex items-center gap-2 px-2 pb-2 text-xs font-medium text-muted-foreground">
        <SettingsIcon className="size-3.5" />
        Quality
      </p>
      <RadioGroup defaultValue="auto" className="gap-0">
        {qualities.map((q) => (
          <label
            key={q.value}
            htmlFor={"vq-" + q.value}
            className="flex cursor-pointer items-center gap-3 px-2 py-1.5 text-sm hover:bg-white/10"
          >
            <RadioGroupItem
              value={q.value}
              id={"vq-" + q.value}
              className="border-border dark:bg-transparent data-checked:border-white data-checked:bg-white dark:data-checked:bg-white [&_[data-slot=radio-group-indicator]_span]:bg-foreground"
            />
            <span className="flex-1">{q.label}</span>
            {q.note && (
              <span className="text-[11px] text-muted-foreground">{q.note}</span>
            )}
          </label>
        ))}
      </RadioGroup>
    </div>
  )
}
