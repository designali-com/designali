"use client"

import * as React from "react"
import { ArchiveIcon, Trash2Icon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const initialTickets = [
  { id: "T-1201", subject: "Can't reset password", priority: "High" },
  { id: "T-1202", subject: "Invoice shows wrong VAT", priority: "Medium" },
  { id: "T-1203", subject: "Feature request: dark mode", priority: "Low" },
  { id: "T-1204", subject: "Export stuck at 90%", priority: "High" },
]

export default function BulkActionsTable() {
  const [tickets, setTickets] = React.useState(initialTickets)
  const [selected, setSelected] = React.useState<string[]>([])
  const remove = () => {
    setTickets((t) => t.filter((x) => !selected.includes(x.id)))
    setSelected([])
  }

  return (
    <div className="w-full max-w-lg border">
      {selected.length > 0 && (
        <div className="flex items-center justify-between border-b bg-muted/50 px-3 py-2">
          <span className="text-xs font-medium">
            {selected.length} selected
          </span>
          <div className="flex gap-1">
            <Button variant="outline" size="xs" onClick={remove}>
              <ArchiveIcon data-icon="inline-start" />
              Archive
            </Button>
            <Button variant="destructive" size="xs" onClick={remove}>
              <Trash2Icon data-icon="inline-start" />
              Delete
            </Button>
          </div>
        </div>
      )}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8" />
            <TableHead>Ticket</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Priority</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map((ticket) => {
            const isSelected = selected.includes(ticket.id)
            return (
              <TableRow
                key={ticket.id}
                data-state={isSelected ? "selected" : undefined}
              >
                <TableCell>
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={(c) =>
                      setSelected((s) =>
                        c
                          ? [...s, ticket.id]
                          : s.filter((id) => id !== ticket.id)
                      )
                    }
                    aria-label={"Select " + ticket.id}
                  />
                </TableCell>
                <TableCell className="font-mono">{ticket.id}</TableCell>
                <TableCell>{ticket.subject}</TableCell>
                <TableCell>{ticket.priority}</TableCell>
              </TableRow>
            )
          })}
          {tickets.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={4}
                className="h-16 text-center text-muted-foreground"
              >
                Inbox zero. Nice work!
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
