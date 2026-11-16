import { Spinner } from "@workspace/ui/components/spinner"
import { cn } from "@workspace/ui/lib/utils"

const colors = [
  { label: "Foreground", className: "" },
  { label: "Muted", className: "text-muted-foreground" },
  { label: "Primary", className: "text-primary" },
  { label: "Success", className: "text-primary dark:text-primary" },
  { label: "Warning", className: "text-primary dark:text-primary" },
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
