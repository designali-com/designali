import { Progress, ProgressValue } from "@workspace/ui/components/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const projects = [
  { name: "Mobile app redesign", owner: "Lena Ortiz", value: 82 },
  { name: "Billing migration", owner: "Sam Okafor", value: 45 },
  { name: "Help center", owner: "Priya Nair", value: 20 },
]

export default function ProjectsTableProgress() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead className="w-32">Progress</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.name}>
              <TableCell>
                <p className="font-medium">{project.name}</p>
                <p className="text-xs text-muted-foreground">{project.owner}</p>
              </TableCell>
              <TableCell>
                <Progress
                  value={project.value}
                  aria-label={project.name + " progress"}
                  className="flex-nowrap items-center gap-2"
                >
                  <ProgressValue className="order-last w-8 text-end" />
                </Progress>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
