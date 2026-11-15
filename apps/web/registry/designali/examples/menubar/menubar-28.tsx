"use client"

import * as React from "react"
import { LinkIcon, SignalIcon, UserPlusIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

const people = [
  { id: "mc", name: "Maya Chen" },
  { id: "or", name: "Omar Reyes" },
  { id: "lb", name: "Lena Brandt" },
]

export default function IssueTrackerMenubar() {
  const [priority, setPriority] = React.useState("high")
  const [assignee, setAssignee] = React.useState("or")
  const person = people.find((p) => p.id === assignee)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Issue</MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarSub>
                <MenubarSubTrigger>
                  <SignalIcon /> Priority
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarRadioGroup
                    value={priority}
                    onValueChange={setPriority}
                  >
                    <MenubarRadioItem value="urgent">Urgent</MenubarRadioItem>
                    <MenubarRadioItem value="high">High</MenubarRadioItem>
                    <MenubarRadioItem value="medium">Medium</MenubarRadioItem>
                    <MenubarRadioItem value="low">Low</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>
                  <UserPlusIcon /> Assignee
                </MenubarSubTrigger>
                <MenubarSubContent className="w-44">
                  <MenubarRadioGroup
                    value={assignee}
                    onValueChange={setAssignee}
                  >
                    {people.map((p) => (
                      <MenubarRadioItem key={p.id} value={p.id}>
                        <Avatar className="size-5">
                          <AvatarFallback className="text-[9px]">
                            {p.id.toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        {p.name}
                      </MenubarRadioItem>
                    ))}
                  </MenubarRadioGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                <LinkIcon /> Copy issue link{" "}
                <MenubarShortcut>⌘L</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex items-center gap-2 border p-3 text-xs">
        <span className="font-mono text-muted-foreground">ENG-412</span>
        <span className="flex-1 truncate">Checkout fails on saved cards</span>
        <Badge
          variant={priority === "urgent" ? "destructive" : "secondary"}
          className="capitalize"
        >
          {priority}
        </Badge>
        <Avatar className="size-5">
          <AvatarFallback className="text-[9px]">
            {person?.id.toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
