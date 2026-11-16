import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const members = [
  {
    name: "Ali Imam",
    email: "ali@designali.com",
    role: "Owner",
    active: "Now",
  },
  {
    name: "Sara Khan",
    email: "sara@designali.com",
    role: "Admin",
    active: "2h ago",
  },
  {
    name: "Omar Ali",
    email: "omar@designali.com",
    role: "Editor",
    active: "Yesterday",
  },
  {
    name: "Priya Shah",
    email: "priya@designali.com",
    role: "Viewer",
    active: "5d ago",
  },
]

export default function TeamMembersTable() {
  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Member</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Last active</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.email}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-muted-foreground">{member.email}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={member.role === "Owner" ? "default" : "outline"}
                >
                  {member.role}
                </Badge>
              </TableCell>
              <TableCell className="text-right text-muted-foreground">
                {member.active}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
