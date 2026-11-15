"use client"

import * as React from "react"
import { CreditCardIcon, ShieldIcon, UserIcon } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const sections = [
  {
    value: "profile",
    label: "Profile",
    icon: UserIcon,
    text: "Name, avatar initials and public bio.",
  },
  {
    value: "security",
    label: "Security",
    icon: ShieldIcon,
    text: "Password, passkeys and active sessions.",
  },
  {
    value: "billing",
    label: "Billing",
    icon: CreditCardIcon,
    text: "Plan, invoices and payment methods.",
  },
]

export default function VerticalSettingsToggleGroup() {
  const [section, setSection] = React.useState("profile")
  const active = sections.find((s) => s.value === section)!

  return (
    <div className="flex w-full max-w-md gap-4 border p-3">
      <ToggleGroup
        orientation="vertical"
        spacing={1}
        value={[section]}
        onValueChange={(next) => next[0] && setSection(next[0])}
        className="w-32 shrink-0"
      >
        {sections.map((s) => (
          <ToggleGroupItem
            key={s.value}
            value={s.value}
            className="justify-start"
          >
            <s.icon data-icon="inline-start" />
            {s.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex flex-col gap-1 border-s ps-4">
        <span className="text-sm font-medium">{active.label}</span>
        <span className="text-xs text-muted-foreground">{active.text}</span>
      </div>
    </div>
  )
}
