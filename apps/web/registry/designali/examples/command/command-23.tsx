import {
  Bell as BellIcon,
  CreditCard as CreditCardIcon,
  KeyRound as KeyRoundIcon,
  Shield as ShieldIcon,
  Users as UsersIcon,
} from "@designali/icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

const destinations = [
  {
    label: "Billing",
    icon: CreditCardIcon,
    keywords: ["invoice", "payment", "card", "plan"],
  },
  {
    label: "Security",
    icon: ShieldIcon,
    keywords: ["password", "2fa", "sessions"],
  },
  {
    label: "Notifications",
    icon: BellIcon,
    keywords: ["email", "alerts", "push"],
  },
  {
    label: "API keys",
    icon: KeyRoundIcon,
    keywords: ["token", "developer", "secret"],
  },
  { label: "Members", icon: UsersIcon, keywords: ["team", "invite", "roles"] },
]

export default function KeywordAliasSearch() {
  return (
    <Command className="w-full max-w-xs border">
      <CommandInput placeholder="Try “invoice” or “token”" />
      <CommandList>
        <CommandEmpty>No settings page found.</CommandEmpty>
        <CommandGroup heading="Settings">
          {destinations.map((item) => (
            <CommandItem
              key={item.label}
              value={item.label}
              keywords={item.keywords}
            >
              <item.icon />
              <span>{item.label}</span>
              <span className="ms-auto truncate text-[11px] text-muted-foreground">
                {item.keywords.slice(0, 2).join(", ")}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
