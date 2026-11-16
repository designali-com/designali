import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const notes = [
  {
    id: 1,
    title: "Kickoff notes",
    body: "Agreed on a six-week timeline for the brand identity and Next.js site, with weekly demos on Thursdays.",
    author: "Ali",
  },
  {
    id: 2,
    title: "Research synthesis",
    body: "Users struggle to find SVG export on /icons and expect copy actions to live in the toolbar, not the overflow menu.",
    author: "Sara",
  },
  {
    id: 3,
    title: "Retro",
    body: "Ship smaller PRs, add Vercel previews for every branch, and rotate on-call more evenly across the team.",
    author: "Omar",
  },
]

export default function TruncatedCellsTable() {
  return (
    <TooltipProvider>
      <div className="w-full max-w-lg border">
        <Table className="table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="w-32">Title</TableHead>
              <TableHead>Summary</TableHead>
              <TableHead className="w-20">Author</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notes.map((note) => (
              <TableRow key={note.id}>
                <TableCell className="truncate font-medium">
                  {note.title}
                </TableCell>
                <TableCell>
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <span className="block cursor-default truncate text-muted-foreground" />
                      }
                    >
                      {note.body}
                    </TooltipTrigger>
                    <TooltipContent className="max-w-64">
                      {note.body}
                    </TooltipContent>
                  </Tooltip>
                </TableCell>
                <TableCell>{note.author}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TooltipProvider>
  )
}
