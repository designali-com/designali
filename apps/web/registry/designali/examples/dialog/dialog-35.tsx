import { BellIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const events = ["New comment", "Mention", "Task assigned", "Weekly report"]
const channels = ["Email", "Push", "SMS"]

export default function NotificationChannelsDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <BellIcon data-icon="inline-start" />
        Notification channels
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Where should we reach you?</DialogTitle>
          <DialogDescription>
            Choose channels for each type of activity.
          </DialogDescription>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event</TableHead>
              {channels.map((channel) => (
                <TableHead key={channel} className="text-center">
                  {channel}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event, row) => (
              <TableRow key={event}>
                <TableCell>{event}</TableCell>
                {channels.map((channel, col) => (
                  <TableCell key={channel} className="text-center">
                    <Checkbox
                      aria-label={event + " via " + channel}
                      defaultChecked={col === 0 || (col === 1 && row < 2)}
                      disabled={channel === "SMS" && row === 3}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <DialogFooter>
          <DialogClose render={<Button />}>Save preferences</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
