import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { cn } from "@workspace/ui/lib/utils"

const themes = [
  {
    value: "light",
    label: "Light",
    preview: "bg-white",
    bar: "bg-muted",
  },
  {
    value: "dark",
    label: "Dark",
    preview: "bg-foreground",
    bar: "bg-foreground",
  },
  {
    value: "system",
    label: "System",
    preview: "bg-gradient-to-r from-white from-50% to-foreground to-50%",
    bar: "bg-muted-foreground",
  },
]

export default function ThemePreviewRadio() {
  return (
    <RadioGroup
      defaultValue="system"
      className="grid w-full max-w-sm grid-cols-3 gap-3"
    >
      {themes.map((theme) => (
        <label
          key={theme.value}
          htmlFor={"theme-" + theme.value}
          className="flex cursor-pointer flex-col gap-2"
        >
          <div
            className={cn(
              "flex h-16 flex-col gap-1.5 border p-2 ring-offset-2 ring-offset-background",
              theme.preview
            )}
          >
            <span className={cn("h-1.5 w-2/3", theme.bar)} />
            <span className={cn("h-1.5 w-1/2", theme.bar)} />
          </div>
          <span className="flex items-center gap-2 text-sm">
            <RadioGroupItem value={theme.value} id={"theme-" + theme.value} />
            {theme.label}
          </span>
        </label>
      ))}
    </RadioGroup>
  )
}
