import {
  Mail as MailIcon,
  Phone as PhoneIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const customers = [
  {
    name: "Brand identity client",
    email: "brand@example.com",
    phone: "+1 415 555 0132",
    plan: "Business",
    mrr: "$480",
  },
  {
    name: "Templates customer",
    email: "templates@example.com",
    phone: "+44 20 7946 0012",
    plan: "Starter",
    mrr: "$29",
  },
  {
    name: "Icons Pro customer",
    email: "icons@example.com",
    phone: "+81 3 5550 1180",
    plan: "Pro",
    mrr: "$99",
  },
]

export default function CustomerTableHoverCard() {
  return (
    <Table className="w-full max-w-md">
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead>Plan</TableHead>
          <TableHead className="text-right">MRR</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.map((c) => (
          <TableRow key={c.email}>
            <TableCell>
              <HoverCard>
                <HoverCardTrigger
                  href="#"
                  className="font-medium hover:underline"
                >
                  {c.name}
                </HoverCardTrigger>
                <HoverCardContent
                  align="start"
                  className="flex flex-col gap-1.5"
                >
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      <AvatarFallback>
                        {c.name
                          .split(" ")
                          .map((p) => p[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{c.name}</span>
                  </div>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <MailIcon className="size-3.5" />
                    {c.email}
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <PhoneIcon className="size-3.5" />
                    {c.phone}
                  </span>
                </HoverCardContent>
              </HoverCard>
            </TableCell>
            <TableCell>
              <Badge variant="secondary">{c.plan}</Badge>
            </TableCell>
            <TableCell className="text-right">{c.mrr}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
