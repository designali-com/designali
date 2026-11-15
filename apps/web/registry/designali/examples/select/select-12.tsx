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
    label: "Maya Chen",
    value: "maya",
    email: "maya@northwind.dev",
    initials: "MC",
  },
  {
    label: "Jonas Weber",
    value: "jonas",
    email: "jonas@northwind.dev",
    initials: "JW",
  },
  {
    label: "Priya Nair",
    value: "priya",
    email: "priya@northwind.dev",
    initials: "PN",
  },
  {
    label: "Diego Alvarez",
    value: "diego",
    email: "diego@northwind.dev",
    initials: "DA",
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
