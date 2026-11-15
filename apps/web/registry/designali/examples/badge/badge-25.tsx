import { Badge } from "@workspace/ui/components/badge"

const variants = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
] as const

export default function PillShapeBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {variants.map((variant) => (
        <Badge
          key={variant}
          variant={variant}
          className="rounded-full px-2.5 capitalize"
        >
          {variant}
        </Badge>
      ))}
    </div>
  )
}
