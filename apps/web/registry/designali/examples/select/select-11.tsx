"use client"

import {
  MinusIcon,
  SignalHighIcon,
  SignalLowIcon,
  SignalMediumIcon,
  SirenIcon,
} from "lucide-react"

import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const priorities = [
  {
    label: "No priority",
    value: "none",
    icon: MinusIcon,
    tone: "text-muted-foreground",
  },
  { label: "Low", value: "low", icon: SignalLowIcon, tone: "text-sky-500" },
  {
    label: "Medium",
    value: "medium",
    icon: SignalMediumIcon,
    tone: "text-amber-500",
  },
  {
    label: "High",
    value: "high",
    icon: SignalHighIcon,
    tone: "text-orange-500",
  },
  { label: "Urgent", value: "urgent", icon: SirenIcon, tone: "text-red-500" },
]

export default function PrioritySelectIcons() {
  return (
    <Field className="w-full max-w-56">
      <FieldLabel htmlFor="priority">Priority</FieldLabel>
      <Select items={priorities} defaultValue="high">
        <SelectTrigger id="priority" className="w-full">
          <SelectValue>
            {(value: string) => {
              const priority = priorities.find((item) => item.value === value)
              if (!priority) return null
              return (
                <>
                  <priority.icon className={priority.tone} />
                  {priority.label}
                </>
              )
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {priorities.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <item.icon className={item.tone} />
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  )
}
