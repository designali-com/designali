"use client"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"

type Member = { id: string; name: string; email: string; initials: string }

const members: Member[] = [
  { id: "1", name: "Maya Chen", email: "maya@northwind.test", initials: "MC" },
  {
    id: "2",
    name: "Arjun Patel",
    email: "arjun@northwind.test",
    initials: "AP",
  },
  {
    id: "3",
    name: "Sofia Martins",
    email: "sofia@northwind.test",
    initials: "SM",
  },
  {
    id: "4",
    name: "Kwame Asante",
    email: "kwame@northwind.test",
    initials: "KA",
  },
  { id: "5", name: "Lina Berg", email: "lina@northwind.test", initials: "LB" },
]

export default function AssigneePicker() {
  return (
    <div className="w-full max-w-xs">
      <Combobox
        items={members}
        itemToStringLabel={(member: Member) => member.name}
      >
        <ComboboxInput placeholder="Assign to..." className="w-full" />
        <ComboboxContent>
          <ComboboxEmpty>No teammates found.</ComboboxEmpty>
          <ComboboxList>
            {(member: Member) => (
              <ComboboxItem key={member.id} value={member}>
                <Avatar size="sm">
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div className="flex min-w-0 flex-col">
                  <span className="truncate">{member.name}</span>
                  <span className="truncate text-[11px] text-muted-foreground">
                    {member.email}
                  </span>
                </div>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
