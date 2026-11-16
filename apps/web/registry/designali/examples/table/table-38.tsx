"use client"

import * as React from "react"
import {
  Pause as PauseIcon,
  Play as PlayIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const initialSubs = [
  {
    id: "s1",
    customer: "Sara Khan",
    plan: "Annual Pro",
    renews: "Mar 3, 2027",
    status: "Active",
  },
  {
    id: "s2",
    customer: "Omar Ali",
    plan: "Monthly Basic",
    renews: "Dec 1, 2026",
    status: "Paused",
  },
  {
    id: "s3",
    customer: "Priya Shah",
    plan: "Monthly Pro",
    renews: "Nov 28, 2026",
    status: "Active",
  },
]

export default function SubscriptionsActionsTable() {
  const [subs, setSubs] = React.useState(initialSubs)
  const setStatus = (id: string, status: string) =>
    setSubs((list) => list.map((s) => (s.id === id ? { ...s, status } : s)))

  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subs.map((sub) => (
            <TableRow key={sub.id}>
              <TableCell>
                <p className="font-medium">{sub.customer}</p>
                <p className="text-muted-foreground">Renews {sub.renews}</p>
              </TableCell>
              <TableCell>{sub.plan}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    sub.status === "Active"
                      ? "default"
                      : sub.status === "Canceled"
                        ? "destructive"
                        : "secondary"
                  }
                >
                  {sub.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                {sub.status === "Canceled" ? (
                  <span className="text-muted-foreground">—</span>
                ) : (
                  <div className="flex justify-end gap-1">
                    <Button
                      variant="outline"
                      size="xs"
                      onClick={() =>
                        setStatus(
                          sub.id,
                          sub.status === "Active" ? "Paused" : "Active"
                        )
                      }
                    >
                      {sub.status === "Active" ? (
                        <PauseIcon data-icon="inline-start" />
                      ) : (
                        <PlayIcon data-icon="inline-start" />
                      )}
                      {sub.status === "Active" ? "Pause" : "Resume"}
                    </Button>
                    <Button
                      variant="ghost"
                      size="xs"
                      className="text-destructive"
                      onClick={() => setStatus(sub.id, "Canceled")}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
