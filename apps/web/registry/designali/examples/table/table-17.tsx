import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const projects = [
  { name: "designali.com redesign", owner: "Ali", progress: 82, due: "Dec 4" },
  { name: "Icons 4000+ release", owner: "Sara", progress: 45, due: "Dec 18" },
  { name: "Logos library", owner: "Omar", progress: 20, due: "Jan 9" },
  { name: "Docs site", owner: "Priya", progress: 100, due: "Nov 20" },
]

export default function ProgressColumnTable() {
  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead className="w-40">Progress</TableHead>
            <TableHead className="text-right">Due</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.name}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>{project.owner}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 flex-1 bg-muted">
                    <div
                      className="h-full bg-primary"
                      style={{ width: project.progress + "%" }}
                    />
                  </div>
                  <span className="w-8 text-right text-muted-foreground tabular-nums">
                    {project.progress}%
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-right text-muted-foreground">
                {project.due}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
