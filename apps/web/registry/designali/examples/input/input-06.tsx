import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const sizes = [
  { label: "Small", input: "h-7", button: "sm" as const },
  { label: "Default", input: "h-8", button: "default" as const },
  { label: "Medium", input: "h-9 text-sm md:text-sm", button: "md" as const },
  {
    label: "Large",
    input: "h-12 px-4 text-base md:text-base",
    button: "lg" as const,
  },
]

export default function InputSizeScale() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {sizes.map((s) => (
        <div key={s.label} className="flex gap-2">
          <Input
            aria-label={s.label + " input"}
            placeholder={s.label + " - search designali.com"}
            className={s.input}
          />
          <Button size={s.button}>Go</Button>
        </div>
      ))}
    </div>
  )
}
