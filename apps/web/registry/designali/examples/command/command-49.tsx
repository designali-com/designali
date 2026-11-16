"use client"

import * as React from "react"
import {
  Table as TableIcon,
} from "@designali/icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

const schemas = [
  {
    schema: "public",
    tables: [
      { name: "users", rows: "48.2k" },
      { name: "templates", rows: "3.1k" },
      { name: "licenses", rows: "5.7k" },
    ],
  },
  {
    schema: "analytics",
    tables: [
      { name: "events", rows: "12.4M" },
      { name: "icon_downloads", rows: "8.9M" },
    ],
  },
  {
    schema: "billing",
    tables: [
      { name: "invoices", rows: "61.0k" },
      { name: "payments", rows: "59.3k" },
    ],
  },
]

export default function DatabaseTablePicker() {
  const [table, setTable] = React.useState("public.users")

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <code className="border bg-muted/40 px-2 py-1.5 text-[11px]">
        SELECT * FROM {table} LIMIT 50;
      </code>
      <Command className="border">
        <CommandInput placeholder="Search tables..." />
        <CommandList className="max-h-60">
          <CommandEmpty>No table found.</CommandEmpty>
          {schemas.map((s) => (
            <CommandGroup key={s.schema} heading={s.schema}>
              {s.tables.map((t) => (
                <CommandItem
                  key={t.name}
                  value={s.schema + "." + t.name}
                  data-checked={table === s.schema + "." + t.name}
                  onSelect={() => setTable(s.schema + "." + t.name)}
                >
                  <TableIcon />
                  <span className="font-sans">{t.name}</span>
                  <span className="text-[11px] text-muted-foreground">
                    {t.rows}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </div>
  )
}
