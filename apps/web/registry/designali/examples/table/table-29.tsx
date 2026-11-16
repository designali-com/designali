"use client"

import * as React from "react"
import {
  Columns3 as Columns3Icon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const columns = [
  { key: "email", label: "Email" },
  { key: "country", label: "Country" },
  { key: "plan", label: "Plan" },
] as const

const users = [
  {
    name: "Sara Khan",
    email: "sara@example.com",
    country: "Canada",
    plan: "Pro",
  },
  {
    name: "Omar Ali",
    email: "omar@example.com",
    country: "Norway",
    plan: "Free",
  },
  {
    name: "Priya Shah",
    email: "priya@example.com",
    country: "Lebanon",
    plan: "Team",
  },
]

export default function ColumnVisibilityTable() {
  const [visible, setVisible] = React.useState<Record<string, boolean>>({
    email: true,
    country: true,
    plan: false,
  })

  return (
    <div className="flex w-full max-w-lg flex-col gap-2">
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
            <Columns3Icon data-icon="inline-start" />
            Columns
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {columns.map((col) => (
              <DropdownMenuCheckboxItem
                key={col.key}
                checked={visible[col.key]}
                onCheckedChange={(checked) =>
                  setVisible((v) => ({ ...v, [col.key]: checked }))
                }
              >
                {col.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              {columns
                .filter((c) => visible[c.key])
                .map((c) => (
                  <TableHead key={c.key}>{c.label}</TableHead>
                ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.email}>
                <TableCell className="font-medium">{user.name}</TableCell>
                {columns
                  .filter((c) => visible[c.key])
                  .map((c) => (
                    <TableCell key={c.key} className="text-muted-foreground">
                      {user[c.key]}
                    </TableCell>
                  ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
