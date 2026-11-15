"use client"

import * as React from "react"
import {
  CircleAlertIcon,
  MinusIcon,
  SignalHighIcon,
  SignalLowIcon,
  SignalMediumIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@workspace/ui/components/combobox"

const priorities = [
  { value: "urgent", label: "Urgent", icon: CircleAlertIcon },
  { value: "high", label: "High", icon: SignalHighIcon },
  { value: "medium", label: "Medium", icon: SignalMediumIcon },
  { value: "low", label: "Low", icon: SignalLowIcon },
]

type Priority = (typeof priorities)[number]

const issues = [
  { id: "DES-88", title: "Empty state for search", priority: priorities[1]! },
  { id: "DES-91", title: "Dark mode chart colours", priority: priorities[2]! },
  {
    id: "DES-93",
    title: "Broken focus ring on tabs",
    priority: priorities[0]!,
  },
]

function PriorityCell({ initial }: { initial: Priority }) {
  const [value, setValue] = React.useState<Priority | null>(initial)
  return (
    <Combobox
      items={priorities}
      value={value}
      onValueChange={setValue}
      itemToStringLabel={(p: Priority) => p.label}
    >
      <ComboboxTrigger
        render={
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={"Priority: " + (value?.label ?? "none")}
            className="[&>svg:last-child]:hidden"
          />
        }
      >
        {value ? <value.icon /> : <MinusIcon />}
      </ComboboxTrigger>
      <ComboboxContent className="w-40">
        <ComboboxList>
          {(p: Priority) => (
            <ComboboxItem key={p.value} value={p}>
              <p.icon />
              {p.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export default function PriorityIconOnly() {
  return (
    <ul className="w-full max-w-sm divide-y border">
      {issues.map((issue) => (
        <li key={issue.id} className="flex items-center gap-2 px-2 py-1">
          <PriorityCell initial={issue.priority} />
          <span className="font-mono text-xs text-muted-foreground">
            {issue.id}
          </span>
          <span className="truncate text-sm">{issue.title}</span>
        </li>
      ))}
    </ul>
  )
}
