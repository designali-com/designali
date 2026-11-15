import {
  InboxIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  SparklesIcon,
  WorkflowIcon,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

const nav = [
  { label: "Dashboard", icon: LayoutDashboardIcon },
  {
    label: "Inbox",
    icon: InboxIcon,
    badge: "12",
    variant: "secondary" as const,
  },
  {
    label: "Automations",
    icon: WorkflowIcon,
    badge: "New",
    variant: "default" as const,
  },
  {
    label: "AI insights",
    icon: SparklesIcon,
    badge: "Beta",
    variant: "outline" as const,
  },
  { label: "Settings", icon: SettingsIcon },
]

export default function SidebarNavFeatureBadges() {
  return (
    <nav className="flex w-full max-w-56 flex-col gap-0.5 border p-2">
      {nav.map((item, index) => (
        <a
          key={item.label}
          href="#"
          className={cn(
            "flex items-center gap-2 px-2 py-1.5 text-sm hover:bg-muted",
            index === 0 && "bg-muted font-medium"
          )}
        >
          <item.icon className="size-4 text-muted-foreground" />
          <span className="flex-1">{item.label}</span>
          {item.badge && <Badge variant={item.variant}>{item.badge}</Badge>}
        </a>
      ))}
    </nav>
  )
}
