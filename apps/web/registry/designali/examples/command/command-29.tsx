import { MessageCircleIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

const contacts = [
  {
    name: "Ava Thompson",
    email: "ava@northwind.dev",
    dept: "Sales",
    online: true,
  },
  {
    name: "Leo Martins",
    email: "leo@northwind.dev",
    dept: "Engineering",
    online: false,
  },
  {
    name: "Noor Haddad",
    email: "noor@northwind.dev",
    dept: "Support",
    online: true,
  },
  {
    name: "Kai Okafor",
    email: "kai@northwind.dev",
    dept: "Engineering",
    online: true,
  },
  {
    name: "Ines Moreau",
    email: "ines@northwind.dev",
    dept: "Finance",
    online: false,
  },
]

export default function ContactsDirectory() {
  const departments = [...new Set(contacts.map((c) => c.dept))]

  return (
    <Command className="w-full max-w-sm border">
      <CommandInput placeholder="Search people or email..." />
      <CommandList>
        <CommandEmpty>No one found.</CommandEmpty>
        {departments.map((dept) => (
          <CommandGroup key={dept} heading={dept}>
            {contacts
              .filter((c) => c.dept === dept)
              .map((contact) => (
                <CommandItem
                  key={contact.email}
                  value={contact.name + " " + contact.email}
                >
                  <div className="relative">
                    <Avatar className="size-7">
                      <AvatarFallback className="text-[10px]">
                        {contact.name
                          .split(" ")
                          .map((p) => p[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {contact.online ? (
                      <span className="absolute -end-0.5 -bottom-0.5 size-2.5 rounded-full bg-emerald-500 ring-2 ring-popover" />
                    ) : null}
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <span>{contact.name}</span>
                    <span className="truncate text-[11px] text-muted-foreground">
                      {contact.email}
                    </span>
                  </div>
                  <MessageCircleIcon className="ms-auto opacity-60" />
                </CommandItem>
              ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  )
}
