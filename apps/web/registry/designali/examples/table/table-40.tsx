"use client"

import * as React from "react"
import {
  Star as StarIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"

const initialMail = [
  {
    id: "m1",
    from: "Ali Imam",
    subject: "Brand identity proposal for review",
    label: "Legal",
    time: "9:14 AM",
    unread: true,
    starred: true,
  },
  {
    id: "m2",
    from: "Designali Billing",
    subject: "Your November receipt",
    label: "Finance",
    time: "8:02 AM",
    unread: true,
    starred: false,
  },
  {
    id: "m3",
    from: "Sara Khan",
    subject: "Re: Homepage hero options",
    label: "Team",
    time: "Yesterday",
    unread: false,
    starred: false,
  },
]

export default function EmailInboxTable() {
  const [mail, setMail] = React.useState(initialMail)
  const toggleStar = (id: string) =>
    setMail((m) =>
      m.map((x) => (x.id === id ? { ...x, starred: !x.starred } : x))
    )

  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableBody>
          {mail.map((msg) => (
            <TableRow
              key={msg.id}
              className={cn(
                msg.unread ? "font-semibold" : "text-muted-foreground"
              )}
            >
              <TableCell className="w-8">
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label={msg.starred ? "Unstar" : "Star"}
                  onClick={() => toggleStar(msg.id)}
                >
                  <StarIcon
                    className={cn(
                      msg.starred && "fill-amber-400 text-amber-400"
                    )}
                  />
                </Button>
              </TableCell>
              <TableCell className="w-32">{msg.from}</TableCell>
              <TableCell>
                <span className="flex items-center gap-2">
                  <Badge variant="outline" className="font-normal">
                    {msg.label}
                  </Badge>
                  {msg.subject}
                </span>
              </TableCell>
              <TableCell className="text-right font-normal">
                {msg.time}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
