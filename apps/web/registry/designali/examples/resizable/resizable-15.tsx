"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const users = [
  { name: "Ava Lindqvist", role: "Owner", status: "Active" },
  { name: "Ben Okafor", role: "Admin", status: "Active" },
  { name: "Chloe Martin", role: "Member", status: "Invited" },
  { name: "Dev Raman", role: "Member", status: "Suspended" },
]

export default function TableWithInspector() {
  const [selected, setSelected] = React.useState(users[0]!)

  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-72 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="62%" minSize="45%">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.name}
                data-state={
                  selected.name === user.name ? "selected" : undefined
                }
                onClick={() => setSelected(user)}
                className="cursor-pointer"
              >
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="38%" minSize="25%">
        <div className="flex h-full flex-col gap-3 p-4">
          <Avatar>
            <AvatarFallback>
              {selected.name
                .split(" ")
                .map((p) => p[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{selected.name}</p>
            <p className="text-xs text-muted-foreground">{selected.role}</p>
          </div>
          <Badge
            variant={
              selected.status === "Suspended" ? "destructive" : "secondary"
            }
          >
            {selected.status}
          </Badge>
          <Button size="sm" variant="outline" className="mt-auto">
            Edit permissions
          </Button>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
