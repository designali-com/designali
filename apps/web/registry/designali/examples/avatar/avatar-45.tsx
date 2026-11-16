import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const projects = [
  {
    project: "Designali templates",
    owner: "Ali Imam",
    initials: "AI",
    updated: "2h ago",
  },
  {
    project: "designali.com",
    owner: "Sara",
    initials: "SA",
    updated: "Yesterday",
  },
  {
    project: "@designali/icons",
    owner: "Omar",
    initials: "OM",
    updated: "Mar 14",
  },
]

export default function AdminTableOwnerColumn() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead className="text-right">Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((row) => (
            <TableRow key={row.project}>
              <TableCell className="font-medium">{row.project}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <AvatarFallback>{row.initials}</AvatarFallback>
                  </Avatar>
                  <span>{row.owner}</span>
                </div>
              </TableCell>
              <TableCell className="text-right text-muted-foreground">
                {row.updated}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
