import {
  ListFilter as ListFilterIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const statuses = [
  { label: "Any status", value: "any" },
  { label: "Open", value: "open" },
  { label: "In review", value: "review" },
  { label: "Closed", value: "closed" },
]

const owners = [
  { label: "Anyone", value: "anyone" },
  { label: "Me", value: "me" },
  { label: "Unassigned", value: "unassigned" },
]

const ranges = [
  { label: "This week", value: "week" },
  { label: "This month", value: "month" },
  { label: "This quarter", value: "quarter" },
]

export default function CompactFilterBar() {
  return (
    <div className="flex w-full max-w-md flex-wrap items-center gap-2 border bg-muted/30 p-2">
      <ListFilterIcon className="size-4 text-muted-foreground" />
      <Select items={statuses} defaultValue="any">
        <SelectTrigger size="sm" aria-label="Status">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {statuses.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select items={owners} defaultValue="me">
        <SelectTrigger size="sm" aria-label="Owner">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {owners.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select items={ranges} defaultValue="month">
        <SelectTrigger size="sm" aria-label="Date range">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {ranges.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button variant="ghost" size="sm" className="ms-auto">
        Reset
      </Button>
    </div>
  )
}
