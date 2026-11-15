"use client"

import * as React from "react"
import {
  CircleCheckIcon,
  CircleDashedIcon,
  CircleDotIcon,
  CircleIcon,
  CircleXIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@workspace/ui/components/combobox"

const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: CircleDashedIcon,
    color: "text-muted-foreground",
  },
  { value: "todo", label: "Todo", icon: CircleIcon, color: "text-foreground" },
  {
    value: "progress",
    label: "In progress",
    icon: CircleDotIcon,
    color: "text-amber-500",
  },
  {
    value: "done",
    label: "Done",
    icon: CircleCheckIcon,
    color: "text-emerald-500",
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CircleXIcon,
    color: "text-muted-foreground",
  },
]

type Status = (typeof statuses)[number]

export default function IssueStatusPicker() {
  const [status, setStatus] = React.useState<Status | null>(statuses[2]!)
  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-3">
      <span className="font-mono text-xs text-muted-foreground">ENG-412</span>
      <span className="flex-1 truncate text-sm">
        Retry failed webhook deliveries
      </span>
      <Combobox
        items={statuses}
        value={status}
        onValueChange={setStatus}
        itemToStringLabel={(s: Status) => s.label}
      >
        <ComboboxTrigger render={<Button variant="outline" size="xs" />}>
          {status && <status.icon className={status.color} />}
          {status?.label ?? "Status"}
        </ComboboxTrigger>
        <ComboboxContent className="w-44">
          <ComboboxInput showTrigger={false} placeholder="Change status" />
          <ComboboxList>
            {(s: Status) => (
              <ComboboxItem key={s.value} value={s}>
                <s.icon className={s.color} />
                {s.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
