import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
const slots = [
  { time: "09:00", classes: ["Standup", "", "Standup", "", "Demo"] },
  { time: "12:00", classes: ["", "Design review", "", "Client call", ""] },
  { time: "18:00", classes: ["Build", "Code review", "Build", "Code review", "Ship"] },
]

export default function ScheduleTimetable() {
  return (
    <div className="w-full max-w-xl border">
      <Table className="table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-16" />
            {days.map((day) => (
              <TableHead key={day} className="text-center">
                {day}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {slots.map((slot) => (
            <TableRow key={slot.time} className="hover:bg-transparent">
              <TableCell className="font-mono text-muted-foreground">
                {slot.time}
              </TableCell>
              {slot.classes.map((name, i) => (
                <TableCell key={days[i]} className="p-1">
                  {name ? (
                    <div className="truncate bg-primary/10 px-1.5 py-1 text-center font-medium text-primary">
                      {name}
                    </div>
                  ) : (
                    <div className="h-6" />
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
