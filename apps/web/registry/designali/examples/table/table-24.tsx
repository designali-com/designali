import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const groups = [
  {
    department: "Engineering",
    people: [
      ["Arjun Mehta", "Staff engineer"],
      ["Lena Novak", "Frontend engineer"],
    ],
  },
  { department: "Design", people: [["Sara Kim", "Design lead"]] },
  {
    department: "Support",
    people: [
      ["Owen Price", "Support specialist"],
      ["Maya Patel", "Support manager"],
    ],
  },
]

export default function GroupedRowsTable() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Title</TableHead>
          </TableRow>
        </TableHeader>
        {groups.map((group) => (
          <TableBody
            key={group.department}
            className="[&_tr:last-child]:border-b"
          >
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableCell
                colSpan={2}
                className="py-1.5 font-medium text-muted-foreground"
              >
                {group.department}{" "}
                <span className="font-normal">({group.people.length})</span>
              </TableCell>
            </TableRow>
            {group.people.map(([name, title]) => (
              <TableRow key={name}>
                <TableCell className="font-medium">{name}</TableCell>
                <TableCell>{title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        ))}
      </Table>
    </div>
  )
}
