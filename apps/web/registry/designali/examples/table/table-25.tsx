"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const customers = [
  { id: "c1", name: "Sara Khan", plan: "Pro", seats: 12, since: "2023" },
  { id: "c2", name: "Omar Ali", plan: "Team", seats: 48, since: "2021" },
  { id: "c3", name: "Priya Shah", plan: "Starter", seats: 3, since: "2025" },
]

export default function ClickableRowsDetailTable() {
  const [activeId, setActiveId] = React.useState("c2")
  const active = customers.find((c) => c.id === activeId)!

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead className="text-right">Seats</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((c) => (
              <TableRow
                key={c.id}
                tabIndex={0}
                data-state={c.id === activeId ? "selected" : undefined}
                className="cursor-pointer"
                onClick={() => setActiveId(c.id)}
                onKeyDown={(e) => e.key === "Enter" && setActiveId(c.id)}
              >
                <TableCell className="font-medium">{c.name}</TableCell>
                <TableCell>{c.plan}</TableCell>
                <TableCell className="text-right tabular-nums">
                  {c.seats}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center gap-3 border p-3">
        <Avatar>
          <AvatarFallback>
            {active.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="text-xs">
          <p className="font-medium">{active.name}</p>
          <p className="text-muted-foreground">
            {active.plan} plan · {active.seats} seats · customer since{" "}
            {active.since}
          </p>
        </div>
      </div>
    </div>
  )
}
