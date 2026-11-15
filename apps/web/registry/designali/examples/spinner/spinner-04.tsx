import { Spinner } from "@workspace/ui/components/spinner"
import { cn } from "@workspace/ui/lib/utils"

const colors = [
  { label: "Foreground", className: "" },
  { label: "Muted", className: "text-muted-foreground" },
  { label: "Primary", className: "text-primary" },
  { label: "Success", className: "text-emerald-600 dark:text-emerald-400" },
  { label: "Warning", className: "text-amber-600 dark:text-amber-400" },
  { label: "Danger", className: "text-destructive" },
]

export default function SpinnerColors() {
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-4">
      {colors.map((color) => (
        <div
          key={color.label}
          className="flex flex-col items-center gap-2 border py-4"
        >
          <Spinner className={cn("size-5", color.className)} />
          <span className="text-xs text-muted-foreground">{color.label}</span>
        </div>
      ))}
    </div>
  )
}
