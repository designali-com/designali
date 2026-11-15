import { GitBranchIcon } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"

const deployments = [
  {
    id: "dpl_8f2a",
    status: "Ready",
    commit: "Fix checkout tax rounding",
    branch: "main",
    duration: "48s",
    ago: "5m",
  },
  {
    id: "dpl_7c1d",
    status: "Building",
    commit: "Add bulk export endpoint",
    branch: "feat/export",
    duration: "—",
    ago: "1m",
  },
  {
    id: "dpl_6b90",
    status: "Error",
    commit: "Upgrade image pipeline",
    branch: "chore/deps",
    duration: "1m 12s",
    ago: "2h",
  },
  {
    id: "dpl_5a44",
    status: "Ready",
    commit: "Copy tweaks on pricing page",
    branch: "main",
    duration: "41s",
    ago: "1d",
  },
]

const dot: Record<string, string> = {
  Ready: "bg-emerald-500",
  Building: "bg-amber-500 animate-pulse",
  Error: "bg-destructive",
}

export default function DeploymentsTable() {
  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>Commit</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead className="text-right">Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deployments.map((d) => (
            <TableRow key={d.id}>
              <TableCell>
                <span className="flex items-center gap-2">
                  <span className={cn("size-2 rounded-full", dot[d.status])} />
                  {d.status}
                </span>
              </TableCell>
              <TableCell>
                <p className="font-medium">{d.commit}</p>
                <p className="flex items-center gap-1 text-muted-foreground">
                  <GitBranchIcon className="size-3" />
                  {d.branch}
                </p>
              </TableCell>
              <TableCell className="text-muted-foreground tabular-nums">
                {d.duration}
              </TableCell>
              <TableCell className="text-right text-muted-foreground">
                {d.ago}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
