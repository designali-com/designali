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
    project: "Mobile app",
    owner: "Rhea Kapoor",
    initials: "RK",
    updated: "2h ago",
  },
  {
    project: "Marketing site",
    owner: "Gus Lindgren",
    initials: "GL",
    updated: "Yesterday",
  },
  {
    project: "Data pipeline",
    owner: "Amara Obi",
    initials: "AO",
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
