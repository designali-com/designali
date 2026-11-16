"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const users = [
  { name: "Ali Imam", email: "ali@designali.com", role: "Owner" },
  { name: "Sara", email: "sara@designali.com", role: "Admin" },
  { name: "Omar", email: "omar@designali.com", role: "Member" },
  { name: "Nina", email: "nina@designali.com", role: "Member" },
  { name: "Client", email: "client@example.com", role: "Guest" },
]
const roles = ["Owner", "Admin", "Member", "Guest"]

export default function AdminTableRoleFilter() {
  const [role, setRole] = React.useState<string | null>(null)
  const rows = role ? users.filter((user) => user.role === role) : users
  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-semibold">Members · {rows.length}</span>
        <Combobox items={roles} value={role} onValueChange={setRole}>
          <ComboboxInput placeholder="All roles" showClear className="w-36" />
          <ComboboxContent>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
      <div className="border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((user) => (
              <TableRow key={user.email}>
                <TableCell>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {user.email}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant={user.role === "Owner" ? "default" : "outline"}
                  >
                    {user.role}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
