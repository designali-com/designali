import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { cn } from "@workspace/ui/lib/utils"

const gradients = [
  { initials: "AI", className: "from-primary to-primary" },
  { initials: "DA", className: "from-primary to-chart-2" },
  { initials: "SA", className: "from-primary to-chart-2" },
  { initials: "OM", className: "from-primary to-chart-3" },
  { initials: "ZA", className: "from-primary to-destructive" },
]

export default function GradientAvatarSet() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {gradients.map((item) => (
        <Avatar key={item.initials} size="lg">
          <AvatarFallback
            className={cn(
              "bg-gradient-to-br font-semibold text-white",
              item.className
            )}
          >
            {item.initials}
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
}
