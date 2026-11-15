import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const people = [
  { value: "dk", name: "Dara Kim", role: "Frontend", status: "Available" },
  {
    value: "lm",
    name: "Luca Moretti",
    role: "Platform",
    status: "2 reviews pending",
  },
  {
    value: "hs",
    name: "Hana Sato",
    role: "Design systems",
    status: "Out until Monday",
  },
]

export default function ReviewerAssigneePicker() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <p className="text-sm font-medium">Request review from</p>
      <RadioGroup defaultValue="dk" className="gap-0 border">
        {people.map((p) => {
          const away = p.status.startsWith("Out")
          return (
            <label
              key={p.value}
              htmlFor={"rev-" + p.value}
              className="flex cursor-pointer items-center gap-3 border-b p-2.5 last:border-b-0 has-disabled:cursor-not-allowed has-disabled:opacity-50"
            >
              <RadioGroupItem
                value={p.value}
                id={"rev-" + p.value}
                disabled={away}
              />
              <Avatar size="sm">
                <AvatarFallback>
                  {p.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{p.name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {p.role} &middot; {p.status}
                </p>
              </div>
            </label>
          )
        })}
      </RadioGroup>
    </div>
  )
}
