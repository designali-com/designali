import {
  CreditCardIcon,
  SettingsIcon,
  ShieldIcon,
  UsersIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const sections = [
  {
    value: "general",
    label: "General",
    icon: SettingsIcon,
    text: "Workspace name, URL and default language.",
  },
  {
    value: "members",
    label: "Members",
    icon: UsersIcon,
    text: "Invite people and manage their roles.",
  },
  {
    value: "billing",
    label: "Billing",
    icon: CreditCardIcon,
    text: "Plan, invoices and payment methods.",
  },
  {
    value: "security",
    label: "Security",
    icon: ShieldIcon,
    text: "SSO, two-factor and session policies.",
  },
]

export default function VerticalSettingsTabs() {
  return (
    <Tabs
      defaultValue="general"
      orientation="vertical"
      className="w-full max-w-md gap-4"
    >
      <TabsList className="w-36 shrink-0">
        {sections.map((s) => (
          <TabsTrigger key={s.value} value={s.value}>
            <s.icon data-icon="inline-start" />
            {s.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {sections.map((s) => (
        <TabsContent key={s.value} value={s.value} className="border p-4">
          <h3 className="text-sm font-medium">{s.label}</h3>
          <p className="mt-1 text-muted-foreground">{s.text}</p>
          <Button variant="outline" size="sm" className="mt-4">
            Manage {s.label.toLowerCase()}
          </Button>
        </TabsContent>
      ))}
    </Tabs>
  )
}
