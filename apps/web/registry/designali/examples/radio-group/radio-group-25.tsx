import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const members = [
  { id: "m1", name: "Ava Lindqvist", email: "ava@fernwood.io" },
  { id: "m2", name: "Jonah Mbeki", email: "jonah@fernwood.io" },
  { id: "m3", name: "Rosa Delgado", email: "rosa@fernwood.io" },
]

export default function PrimaryOwnerTable() {
  return (
    <div className="w-full max-w-md border">
      <RadioGroup defaultValue="m1" aria-label="Primary owner">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Owner</TableHead>
              <TableHead>Member</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((m) => (
              <TableRow key={m.id}>
                <TableCell>
                  <RadioGroupItem
                    value={m.id}
                    id={"owner-" + m.id}
                    aria-label={"Make " + m.name + " primary owner"}
                  />
                </TableCell>
                <TableCell>
                  <label
                    htmlFor={"owner-" + m.id}
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <Avatar size="sm">
                      <AvatarFallback>
                        {m.name
                          .split(" ")
                          .map((p) => p[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span>
                      <span className="block font-medium">{m.name}</span>
                      <span className="block text-xs text-muted-foreground">
                        {m.email}
                      </span>
                    </span>
                  </label>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </RadioGroup>
    </div>
  )
}
