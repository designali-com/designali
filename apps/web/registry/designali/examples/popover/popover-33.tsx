import * as React from "react"
import { FileTextIcon, InfoIcon, UsersIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Separator } from "@workspace/ui/components/separator"

const details = [
  { label: "Type", value: "PDF document" },
  { label: "Size", value: "4.2 MB" },
  { label: "Owner", value: "Noor Haddad" },
  { label: "Modified", value: "Nov 12, 2026" },
  { label: "Location", value: "Marketing / Launch" },
]

export default function FileDetailsPopover() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2 border p-2.5">
      <FileTextIcon className="size-5 text-muted-foreground" />
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-xs font-medium">
          brand-guidelines.pdf
        </span>
        <span className="text-[11px] text-muted-foreground">
          Edited 3 days ago
        </span>
      </div>
      <Popover>
        <PopoverTrigger
          render={
            <Button variant="ghost" size="icon-sm" aria-label="File details" />
          }
        >
          <InfoIcon />
        </PopoverTrigger>
        <PopoverContent className="w-64" align="end">
          <PopoverTitle>File details</PopoverTitle>
          <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-xs">
            {details.map((d) => (
              <React.Fragment key={d.label}>
                <dt className="text-muted-foreground">{d.label}</dt>
                <dd className="truncate text-end">{d.value}</dd>
              </React.Fragment>
            ))}
          </dl>
          <Separator />
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <UsersIcon className="size-3.5" /> Shared with 6 people
            </span>
            <Button variant="link" size="xs">
              Manage
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
