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
  { id: "1", name: "Ali Imam", email: "ali@designali.com", initials: "AI" },
  {
    id: "2",
    name: "Sara Designer",
    email: "sara@designali.com",
    initials: "SD",
  },
  {
    id: "3",
    name: "Omar Developer",
    email: "omar@designali.com",
    initials: "OD",
  },
  {
    id: "4",
    name: "Nina Motion",
    email: "nina@designali.com",
    initials: "NM",
  },
  { id: "5", name: "Leo Brand", email: "leo@designali.com", initials: "LB" },
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
