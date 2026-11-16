import {
  KeyRound as KeyRoundIcon,
  LogIn as LogInIcon,
  Mail as MailIcon,
  UserPlus as UserPlusIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const events = [
  {
    actor: "Ali Imam",
    action: "Signed in",
    icon: LogInIcon,
    ip: "203.0.113.24",
    time: "10:42",
  },
  {
    actor: "Ali Imam",
    action: "Changed billing email",
    icon: MailIcon,
    ip: "203.0.113.24",
    time: "10:45",
  },
  {
    actor: "Sara Khan",
    action: "Invited 3 members",
    icon: UserPlusIcon,
    ip: "198.51.100.7",
    time: "11:03",
  },
  {
    actor: "Sara Khan",
    action: "Deleted API key",
    icon: KeyRoundIcon,
    ip: "198.51.100.7",
    time: "11:20",
  },
]

export default function AuditLogTable() {
  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Actor</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>IP address</TableHead>
            <TableHead className="text-right">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event, i) => (
            <TableRow key={i}>
              <TableCell>
                <span className="flex items-center gap-2">
                  <Avatar size="sm">
                    <AvatarFallback>
                      {event.actor
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {event.actor}
                </span>
              </TableCell>
              <TableCell>
                <span className="flex items-center gap-1.5">
                  <event.icon className="size-3.5 text-muted-foreground" />
                  {event.action}
                </span>
              </TableCell>
              <TableCell className="font-sans text-muted-foreground">
                {event.ip}
              </TableCell>
              <TableCell className="text-right text-muted-foreground tabular-nums">
                {event.time}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
