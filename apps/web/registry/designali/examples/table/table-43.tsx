"use client"

import * as React from "react"
import { CheckIcon, ClockIcon, XIcon } from "lucide-react"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const students = [
  "Aiden Brooks",
  "Bianca Ortiz",
  "Caleb Nguyen",
  "Daria Ivanova",
]

export default function AttendanceCheckTable() {
  const [marks, setMarks] = React.useState<Record<string, string>>({
    "Aiden Brooks": "present",
  })
  const present = Object.values(marks).filter((m) => m === "present").length

  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableCaption className="mb-3">
          {present} present · {students.length - Object.keys(marks).length}{" "}
          unmarked
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            <TableHead className="text-right">Attendance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student}>
              <TableCell className="font-medium">{student}</TableCell>
              <TableCell>
                <ToggleGroup
                  size="sm"
                  variant="outline"
                  className="ms-auto"
                  value={marks[student] ? [marks[student]] : []}
                  onValueChange={(value) =>
                    setMarks((m) => ({ ...m, [student]: value[0] as string }))
                  }
                >
                  <ToggleGroupItem value="present" aria-label="Present">
                    <CheckIcon />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="late" aria-label="Late">
                    <ClockIcon />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="absent" aria-label="Absent">
                    <XIcon />
                  </ToggleGroupItem>
                </ToggleGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
