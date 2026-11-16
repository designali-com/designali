"use client"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const people = [
  {
    label: "Ali Imam",
    value: "maya",
    email: "ali@designali.com",
    initials: "AI",
  },
  {
    label: "Jonas",
    value: "jonas",
    email: "jonas@designali.com",
    initials: "J",
  },
  {
    label: "Priya",
    value: "priya",
    email: "priya@designali.com",
    initials: "P",
  },
  {
    label: "Diego",
    value: "diego",
    email: "diego@designali.com",
    initials: "D",
  },
]

export default function AssigneeAvatarSelect() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="assignee">Assignee</FieldLabel>
      <Select items={people} defaultValue="priya">
        <SelectTrigger id="assignee" className="h-10 w-full">
          <SelectValue>
            {(value: string) => {
              const person = people.find((item) => item.value === value)
              if (!person) return null
              return (
                <>
                  <Avatar size="sm">
                    <AvatarFallback>{person.initials}</AvatarFallback>
                  </Avatar>
                  {person.label}
                </>
              )
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {people.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <Avatar size="sm">
                <AvatarFallback>{item.initials}</AvatarFallback>
              </Avatar>
              <span className="flex flex-col">
                <span>{item.label}</span>
                <span className="text-muted-foreground">{item.email}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  )
}
