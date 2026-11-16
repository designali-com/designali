import {
  Play as PlayIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const rows = [
  { id: 1042, email: "kai@example.com", plan: "Pro" },
  { id: 1043, email: "rosa@example.com", plan: "Team" },
  { id: 1044, email: "omar@example.com", plan: "Free" },
]

export default function QueryAndResultsVertical() {
  return (
    <ResizablePanelGroup
      orientation="vertical"
      className="h-80 w-full max-w-xl border"
    >
      <ResizablePanel defaultSize="40%" minSize="20%">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b px-3 py-1.5">
            <span className="text-xs font-medium">query.sql</span>
            <Button size="xs">
              <PlayIcon data-icon="inline-start" />
              Run
            </Button>
          </div>
          <pre className="flex-1 p-3 font-mono text-xs">
            {
              "SELECT id, email, plan\nFROM customers\nWHERE created_at > now() - interval '7 days';"
            }
          </pre>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="60%" minSize="25%">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>id</TableHead>
              <TableHead>email</TableHead>
              <TableHead>plan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-sans">{row.id}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.plan}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
