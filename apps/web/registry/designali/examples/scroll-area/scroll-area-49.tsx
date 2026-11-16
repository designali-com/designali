import { ScrollArea } from "@workspace/ui/components/scroll-area"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const events = [
  ["Ali I.", "Changed role", "Ben O. to Admin", "2m"],
  ["Ben O.", "Created API key", "ci-deploy", "18m"],
  ["System", "Rotated secret", "webhook signing", "1h"],
  ["Chloe M.", "Exported data", "customers.csv", "3h"],
  ["Ali I.", "Enabled SSO", "Okta SAML", "5h"],
  ["Dev R.", "Deleted project", "old-landing", "1d"],
  ["System", "Blocked login", "IP 203.0.113.9", "1d"],
  ["Elif H.", "Updated billing", "Visa ending 4242", "2d"],
  ["Ben O.", "Invited member", "gia@designali.com", "3d"],
]

export default function AuditLogTable() {
  return (
    <ScrollArea className="h-72 w-full max-w-md border">
      <Table>
        <TableHeader className="sticky top-0 z-10 bg-background">
          <TableRow>
            <TableHead>Actor</TableHead>
            <TableHead>Action</TableHead>
            <TableHead className="text-right">When</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map(([actor, action, target, when], i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{actor}</TableCell>
              <TableCell>
                <span className="block">{action}</span>
                <span className="block max-w-40 truncate text-muted-foreground">
                  {target}
                </span>
              </TableCell>
              <TableCell className="text-right text-muted-foreground">
                {when}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  )
}
