import { Badge } from "@workspace/ui/components/badge"

const people = [
  { name: "Ali Imam", initials: "AI" },
  { name: "Sara", initials: "SA" },
  { name: "Omar", initials: "OM" },
]

export default function AssigneeChipBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {people.map((person) => (
        <Badge
          key={person.name}
          variant="outline"
          className="h-6 rounded-full ps-0.5 pe-2"
        >
          <span className="flex size-5 items-center justify-center rounded-full bg-muted text-[9px] font-semibold">
            {person.initials}
          </span>
          {person.name}
        </Badge>
      ))}
    </div>
  )
}
