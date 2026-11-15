"use client"

import * as React from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const users = [
  { name: "Ada Brooks", email: "ada@northwind.dev", status: "active" },
  { name: "Ben Ito", email: "ben@northwind.dev", status: "active" },
  { name: "Cleo Park", email: "cleo@northwind.dev", status: "invited" },
  { name: "Dev Raman", email: "dev@northwind.dev", status: "suspended" },
]

export default function AdminUserStatusTabs() {
  const [status, setStatus] = React.useState("active")
  const rows = users.filter((u) => u.status === status)

  return (
    <Tabs
      value={status}
      onValueChange={(v) => setStatus(v as string)}
      className="w-full max-w-md"
    >
      <TabsList>
        {["active", "invited", "suspended"].map((s) => (
          <TabsTrigger key={s} value={s} className="capitalize">
            {s}
            <span className="text-muted-foreground tabular-nums">
              {users.filter((u) => u.status === s).length}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={status}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((u) => (
              <TableRow key={u.email}>
                <TableCell className="font-medium">{u.name}</TableCell>
                <TableCell className="text-muted-foreground">
                  {u.email}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  )
}
