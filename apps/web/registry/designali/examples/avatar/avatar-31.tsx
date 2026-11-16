import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { cn } from "@workspace/ui/lib/utils"

const gradients = [
  { initials: "AI", className: "from-pink-500 to-orange-400" },
  { initials: "DA", className: "from-cyan-500 to-blue-600" },
  { initials: "SA", className: "from-lime-400 to-emerald-600" },
  { initials: "OM", className: "from-violet-500 to-indigo-700" },
  { initials: "ZA", className: "from-yellow-400 to-red-500" },
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
