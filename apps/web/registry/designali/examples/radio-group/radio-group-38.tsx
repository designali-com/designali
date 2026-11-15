import { AtSignIcon, InboxIcon, MailIcon, StarIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const filters = [
  { value: "all", label: "All messages", icon: InboxIcon, count: 128 },
  { value: "unread", label: "Unread", icon: MailIcon, count: 12 },
  { value: "mentions", label: "Mentions", icon: AtSignIcon, count: 3 },
  { value: "starred", label: "Starred", icon: StarIcon, count: 0 },
]

export default function InboxFilterCounts() {
  return (
    <RadioGroup
      defaultValue="unread"
      aria-label="Inbox filter"
      className="w-full max-w-60 gap-0.5"
    >
      {filters.map((f) => (
        <label
          key={f.value}
          htmlFor={"inbox-" + f.value}
          className="flex cursor-pointer items-center gap-2.5 px-2 py-1.5 text-sm hover:bg-muted/60 has-data-checked:bg-muted has-data-checked:font-medium"
        >
          <RadioGroupItem
            value={f.value}
            id={"inbox-" + f.value}
            className="sr-only"
          />
          <f.icon className="size-4 text-muted-foreground" />
          <span className="flex-1">{f.label}</span>
          {f.count > 0 && <Badge variant="secondary">{f.count}</Badge>}
        </label>
      ))}
    </RadioGroup>
  )
}
