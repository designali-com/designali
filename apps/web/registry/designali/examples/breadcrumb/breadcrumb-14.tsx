"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const workspaces = [
  { name: "Harbor Labs", initials: "HL" },
  { name: "Quill & Co", initials: "QC" },
  { name: "Orbit Health", initials: "OH" },
]

export default function WorkspaceSwitcherBreadcrumb() {
  const [workspace, setWorkspace] = React.useState(workspaces[0]!)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="ghost" size="sm" className="gap-1.5 px-1.5">
                  <Avatar size="sm">
                    <AvatarFallback>{workspace.initials}</AvatarFallback>
                  </Avatar>
                  {workspace.name}
                  <ChevronsUpDownIcon data-icon="inline-end" />
                </Button>
              }
            />
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
                {workspaces.map((item) => (
                  <DropdownMenuItem
                    key={item.name}
                    onClick={() => setWorkspace(item)}
                  >
                    <Avatar size="sm">
                      <AvatarFallback>{item.initials}</AvatarFallback>
                    </Avatar>
                    {item.name}
                    {item.name === workspace.name && (
                      <CheckIcon className="ml-auto" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Projects</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Mobile app</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
