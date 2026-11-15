"use client"

import * as React from "react"
import { Columns3Icon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const columns = [
  { id: "email", label: "Email" },
  { id: "role", label: "Role" },
  { id: "lastSeen", label: "Last seen" },
]

const rows = [
  {
    name: "Ines Duarte",
    email: "ines@quill.dev",
    role: "Owner",
    lastSeen: "Now",
  },
  {
    name: "Kofi Mensah",
    email: "kofi@quill.dev",
    role: "Member",
    lastSeen: "2h ago",
  },
  {
    name: "Aiko Mori",
    email: "aiko@quill.dev",
    role: "Member",
    lastSeen: "Yesterday",
  },
]

export default function ColumnVisibilityPopover() {
  const [visible, setVisible] = React.useState<string[]>(["email", "role"])

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex justify-end">
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>
            <Columns3Icon data-icon="inline-start" /> Columns
          </PopoverTrigger>
          <PopoverContent className="w-48" align="end">
            <PopoverTitle>Toggle columns</PopoverTitle>
            {columns.map((column) => (
              <Label
                key={column.id}
                className="flex items-center gap-2 font-normal"
              >
                <Checkbox
                  checked={visible.includes(column.id)}
                  onCheckedChange={(checked) =>
                    setVisible((prev) =>
                      checked
                        ? [...prev, column.id]
                        : prev.filter((c) => c !== column.id)
                    )
                  }
                />
                {column.label}
              </Label>
            ))}
          </PopoverContent>
        </Popover>
      </div>
      <div className="border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              {columns
                .filter((c) => visible.includes(c.id))
                .map((c) => (
                  <TableHead key={c.id}>{c.label}</TableHead>
                ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="font-medium">{row.name}</TableCell>
                {columns
                  .filter((c) => visible.includes(c.id))
                  .map((c) => (
                    <TableCell key={c.id} className="text-muted-foreground">
                      {row[c.id as keyof typeof row]}
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
