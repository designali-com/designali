"use client"

import * as React from "react"
import {
  Plus as PlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

export default function AddRowFormTable() {
  const [guests, setGuests] = React.useState([
    { name: "Sara Khan", meal: "Vegetarian" },
    { name: "Omar Ali", meal: "Fish" },
  ])
  const [name, setName] = React.useState("")
  const [meal, setMeal] = React.useState("Chicken")

  return (
    <form
      className="w-full max-w-md border"
      onSubmit={(e) => {
        e.preventDefault()
        if (!name.trim()) return
        setGuests((g) => [...g, { name: name.trim(), meal }])
        setName("")
      }}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Guest</TableHead>
            <TableHead>Meal</TableHead>
            <TableHead className="w-10" />
          </TableRow>
        </TableHeader>
        <TableBody className="[&_tr:last-child]:border-b">
          {guests.map((g) => (
            <TableRow key={g.name}>
              <TableCell className="font-medium">{g.name}</TableCell>
              <TableCell>{g.meal}</TableCell>
              <TableCell />
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableCell>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Guest name"
                className="h-7"
                aria-label="Guest name"
              />
            </TableCell>
            <TableCell>
              <NativeSelect
                size="sm"
                value={meal}
                onChange={(e) => setMeal(e.target.value)}
                aria-label="Meal"
              >
                <NativeSelectOption value="Chicken">Chicken</NativeSelectOption>
                <NativeSelectOption value="Fish">Fish</NativeSelectOption>
                <NativeSelectOption value="Vegetarian">
                  Vegetarian
                </NativeSelectOption>
              </NativeSelect>
            </TableCell>
            <TableCell>
              <Button type="submit" size="icon-sm" aria-label="Add guest">
                <PlusIcon />
              </Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </form>
  )
}
