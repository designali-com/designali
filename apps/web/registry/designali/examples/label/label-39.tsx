import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const users = [
  { id: "u1", name: "Grace Holloway", role: "Owner" },
  { id: "u2", name: "Marcus Bell", role: "Editor" },
  { id: "u3", name: "Tomoko Arai", role: "Viewer" },
]

export default function TableRowSelectLabels() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8">
              <Label htmlFor="select-all" className="sr-only">
                Select all members
              </Label>
              <Checkbox id="select-all" />
            </TableHead>
            <TableHead>Member</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Label htmlFor={"row-" + user.id} className="sr-only">
                  Select {user.name}
                </Label>
                <Checkbox id={"row-" + user.id} />
              </TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell className="text-muted-foreground">
                {user.role}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
