import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"

const people = [
  { id: "as-1", name: "Ali Imam", role: "Design", initials: "AI" },
  { id: "as-2", name: "Studio Developer", role: "Frontend", initials: "SD" },
  { id: "as-3", name: "Brand Designer", role: "Brand", initials: "BD" },
]

export default function AssigneeCheckboxLabels() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1 border p-2">
      <span className="px-2 py-1 text-xs font-medium text-muted-foreground">
        Assign to
      </span>
      {people.map((person, i) => (
        <Label
          key={person.id}
          htmlFor={person.id}
          className="gap-3 p-2 hover:bg-muted"
        >
          <Checkbox id={person.id} defaultChecked={i === 0} />
          <Avatar size="sm">
            <AvatarFallback>{person.initials}</AvatarFallback>
          </Avatar>
          <span className="flex-1">{person.name}</span>
          <span className="text-muted-foreground">{person.role}</span>
        </Label>
      ))}
    </div>
  )
}
