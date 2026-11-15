"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const keys = [
  {
    name: "Production server",
    prefix: "key_demo_4f9a",
    created: "Aug 2",
    lastUsed: "2 min ago",
  },
  {
    name: "CI pipeline",
    prefix: "key_demo_b21c",
    created: "Sep 18",
    lastUsed: "1 day ago",
  },
  {
    name: "Local testing",
    prefix: "key_demo_77de",
    created: "Oct 30",
    lastUsed: "Never",
  },
]

export default function ApiKeysTable() {
  const [copied, setCopied] = React.useState<string | null>(null)

  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Key</TableHead>
            <TableHead>Last used</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {keys.map((key) => (
            <TableRow key={key.prefix}>
              <TableCell>
                <p className="font-medium">{key.name}</p>
                <p className="text-muted-foreground">Created {key.created}</p>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <code className="bg-muted px-1.5 py-0.5 font-mono">
                    {key.prefix}••••••••
                  </code>
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    aria-label={"Copy " + key.name}
                    onClick={() => setCopied(key.prefix)}
                  >
                    {copied === key.prefix ? <CheckIcon /> : <CopyIcon />}
                  </Button>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {key.lastUsed}
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="xs" className="text-destructive">
                  Revoke
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
