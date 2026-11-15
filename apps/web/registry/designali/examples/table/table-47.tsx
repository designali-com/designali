import { ArrowRightIcon } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"

const changes = [
  { setting: "Session timeout", before: "30 min", after: "15 min" },
  { setting: "Password length", before: "8", after: "12" },
  { setting: "Allowed domains", before: "orbit.dev", after: "orbit.dev" },
  { setting: "MFA required", before: "Admins only", after: "Everyone" },
]

export default function ComparisonDiffTable() {
  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Setting</TableHead>
            <TableHead>Current</TableHead>
            <TableHead className="w-6" />
            <TableHead>Proposed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {changes.map((c) => {
            const changed = c.before !== c.after
            return (
              <TableRow key={c.setting}>
                <TableCell className="font-medium">{c.setting}</TableCell>
                <TableCell
                  className={cn(
                    changed
                      ? "text-muted-foreground line-through"
                      : "text-muted-foreground"
                  )}
                >
                  {c.before}
                </TableCell>
                <TableCell>
                  <ArrowRightIcon className="size-3 text-muted-foreground" />
                </TableCell>
                <TableCell>
                  <span
                    className={cn(
                      changed &&
                        "bg-emerald-500/15 px-1 font-medium text-emerald-700 dark:text-emerald-300"
                    )}
                  >
                    {c.after}
                  </span>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
