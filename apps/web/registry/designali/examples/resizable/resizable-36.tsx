import { BellIcon, CreditCardIcon, ShieldIcon, UserIcon } from "lucide-react"

import { Label } from "@workspace/ui/components/label"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

const sections = [
  { label: "Profile", icon: UserIcon },
  { label: "Notifications", icon: BellIcon },
  { label: "Security", icon: ShieldIcon },
  { label: "Billing", icon: CreditCardIcon },
]

export default function SettingsNavLayout() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-72 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="28%" minSize="20%" maxSize="40%">
        <nav className="flex h-full flex-col gap-0.5 p-2">
          {sections.map((s) => (
            <a
              key={s.label}
              href="#"
              className={cn(
                "flex items-center gap-2 px-2 py-1.5 text-xs hover:bg-muted",
                s.label === "Notifications" && "bg-muted font-medium"
              )}
            >
              <s.icon className="size-3.5 shrink-0" />
              <span className="truncate">{s.label}</span>
            </a>
          ))}
        </nav>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="72%" minSize="50%">
        <div className="flex h-full flex-col gap-4 p-4">
          <div>
            <h3 className="text-sm font-semibold">Notifications</h3>
            <p className="text-xs text-muted-foreground">
              Choose what we email you about.
            </p>
          </div>
          {["Product updates", "Weekly digest", "Security alerts"].map(
            (label, i) => (
              <div
                key={label}
                className="flex items-center justify-between gap-2"
              >
                <Label htmlFor={"notify-" + i} className="text-xs">
                  {label}
                </Label>
                <Switch id={"notify-" + i} defaultChecked={i !== 1} />
              </div>
            )
          )}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
