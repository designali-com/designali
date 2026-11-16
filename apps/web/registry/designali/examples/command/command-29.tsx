import {
  MessageCircle as MessageCircleIcon,
} from "@designali/icons"

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
    name: "Ali Imam",
    email: "ali@designali.com",
    dept: "Design",
    online: true,
  },
  {
    name: "Omar",
    email: "omar@designali.com",
    dept: "Engineering",
    online: false,
  },
  {
    name: "Sara",
    email: "support@designali.com",
    dept: "Support",
    online: true,
  },
  {
    name: "Kabir",
    email: "kabir@designali.com",
    dept: "Engineering",
    online: true,
  },
  {
    name: "Zara",
    email: "billing@designali.com",
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
                      <span className="absolute -end-0.5 -bottom-0.5 size-2.5 rounded-full bg-primary ring-2 ring-popover" />
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
