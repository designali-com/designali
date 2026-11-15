import * as React from "react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Separator } from "@workspace/ui/components/separator"

const members = [
  { name: "Ruth Achebe", role: "Engineering lead", initials: "RA" },
  { name: "Mateo Silva", role: "Product designer", initials: "MS" },
  { name: "Yuna Park", role: "Data analyst", initials: "YP" },
  { name: "Felix Brandt", role: "Support", initials: "FB" },
]

export default function TeamMembersInsetSeparators() {
  return (
    <div className="flex w-full max-w-xs flex-col">
      {members.map((member, index) => (
        <React.Fragment key={member.name}>
          {index > 0 && <Separator className="ms-11 data-horizontal:w-auto" />}
          <div className="flex items-center gap-3 py-2.5">
            <Avatar>
              <AvatarFallback>{member.initials}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-sm">
              <span className="font-medium">{member.name}</span>
              <span className="text-xs text-muted-foreground">
                {member.role}
              </span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
