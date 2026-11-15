import { Badge } from "@workspace/ui/components/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const tasks = [
  { title: "Draft Q1 OKRs", assignee: "Hiro", due: "Dec 2", priority: "High" },
  {
    title: "Review vendor contract",
    assignee: "Ana",
    due: "Dec 5",
    priority: "Medium",
  },
  {
    title: "Plan offsite agenda",
    assignee: "Kofi",
    due: "Dec 12",
    priority: "Low",
  },
]

export default function ResponsiveStackedTable() {
  return (
    <div className="@container w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Task</TableHead>
            <TableHead className="hidden @md:table-cell">Assignee</TableHead>
            <TableHead className="hidden @md:table-cell">Due</TableHead>
            <TableHead className="text-right">Priority</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.title}>
              <TableCell>
                <p className="font-medium">{task.title}</p>
                <p className="text-muted-foreground @md:hidden">
                  {task.assignee} · Due {task.due}
                </p>
              </TableCell>
              <TableCell className="hidden @md:table-cell">
                {task.assignee}
              </TableCell>
              <TableCell className="hidden text-muted-foreground @md:table-cell">
                {task.due}
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="outline">{task.priority}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
