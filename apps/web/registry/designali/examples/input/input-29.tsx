"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Input } from "@workspace/ui/components/input"

const people = [
  "Ada Morales",
  "Bram de Vries",
  "Chen Wei",
  "Dalia Haddad",
  "Eitan Cohen",
  "Freya Lind",
]

export default function LiveFilterListInput() {
  const [q, setQ] = React.useState("")
  const results = people.filter((p) =>
    p.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div className="w-full max-w-xs border">
      <div className="border-b p-2">
        <Input
          aria-label="Filter members"
          placeholder="Filter members..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <ul className="max-h-48 overflow-auto p-1 text-sm">
        {results.map((p) => (
          <li
            key={p}
            className="flex items-center gap-2 px-2 py-1.5 hover:bg-muted"
          >
            <Avatar size="sm">
              <AvatarFallback>
                {p
                  .split(" ")
                  .map((s) => s[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            {p}
          </li>
        ))}
        {results.length === 0 && (
          <li className="px-2 py-6 text-center text-xs text-muted-foreground">
            No members match &ldquo;{q}&rdquo;
          </li>
        )}
      </ul>
    </div>
  )
}
