import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { cn } from "@workspace/ui/lib/utils"

const themes = [
  {
    value: "light",
    label: "Light",
    bg: "bg-white",
    bar: "bg-muted",
    line: "bg-border",
  },
  {
    value: "dark",
    label: "Dark",
    bg: "bg-foreground",
    bar: "bg-foreground",
    line: "bg-muted-foreground",
  },
  {
    value: "system",
    label: "System",
    bg: "bg-gradient-to-r from-white to-foreground",
    bar: "bg-muted-foreground",
    line: "bg-muted-foreground",
  },
]

export default function ThemePreviewChoiceCards() {
  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend>Appearance</FieldLegend>
      <FieldDescription>
        Choose how designali.com looks on this device.
      </FieldDescription>
      <RadioGroup defaultValue="system" className="grid grid-cols-3 gap-2">
        {themes.map((t) => (
          <FieldLabel key={t.value} htmlFor={"theme-" + t.value}>
            <Field className="gap-2">
              <div
                className={cn("flex h-14 flex-col gap-1 border p-1.5", t.bg)}
              >
                <span className={cn("h-1.5 w-2/3", t.bar)} />
                <span className={cn("h-1 w-full", t.line)} />
                <span className={cn("h-1 w-4/5", t.line)} />
              </div>
              <div className="flex items-center justify-between">
                <FieldTitle>{t.label}</FieldTitle>
                <RadioGroupItem value={t.value} id={"theme-" + t.value} />
              </div>
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}
