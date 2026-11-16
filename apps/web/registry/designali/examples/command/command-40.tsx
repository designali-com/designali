import * as React from "react"
import {
  Calendar as CalendarIcon,
  ChevronRight as ChevronRightIcon,
  Coins as CoinsIcon,
  Mail as MailIcon,
  MonitorSmartphone as MonitorSmartphoneIcon,
  ShieldCheck as ShieldCheckIcon,
} from "@designali/icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

const settings = [
  {
    label: "Two-factor authentication",
    path: ["Security", "Sign-in"],
    icon: ShieldCheckIcon,
  },
  {
    label: "Active sessions",
    path: ["Security", "Devices"],
    icon: MonitorSmartphoneIcon,
  },
  {
    label: "Weekly summary email",
    path: ["Notifications", "Email"],
    icon: MailIcon,
  },
  {
    label: "Default currency",
    path: ["Workspace", "Billing"],
    icon: CoinsIcon,
  },
  {
    label: "Date format",
    path: ["Workspace", "Localization"],
    icon: CalendarIcon,
  },
]

export default function SettingsDeepLinkSearch() {
  return (
    <Command className="w-full max-w-sm border">
      <CommandInput placeholder="Search all settings..." />
      <CommandList>
        <CommandEmpty>No setting found.</CommandEmpty>
        <CommandGroup heading="Settings">
          {settings.map((setting) => (
            <CommandItem
              key={setting.label}
              value={setting.label}
              keywords={setting.path}
            >
              <setting.icon />
              <div className="flex min-w-0 flex-col">
                <span>{setting.label}</span>
                <span className="flex items-center gap-0.5 text-[11px] text-muted-foreground">
                  {setting.path.map((part, index) => (
                    <React.Fragment key={part}>
                      {index > 0 ? (
                        <ChevronRightIcon className="size-3" />
                      ) : null}
                      {part}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
