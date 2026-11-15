"use client"

import { CircleAlertIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

const errors = [
  { field: "email", message: "Enter a valid work email" },
  { field: "password", message: "Password must be at least 12 characters" },
]

export default function AlertFormErrorSummary() {
  return (
    <form
      className="w-full max-w-sm space-y-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <Alert variant="error">
        <CircleAlertIcon />
        <AlertTitle>Fix 2 fields to continue</AlertTitle>
        <AlertDescription>
          <ul className="list-disc ps-4">
            {errors.map((error) => (
              <li key={error.field}>
                <a href={"#" + error.field}>{error.message}</a>
              </li>
            ))}
          </ul>
        </AlertDescription>
      </Alert>
      <div className="space-y-1.5">
        <Label htmlFor="email">Work email</Label>
        <Input id="email" defaultValue="lena@" aria-invalid />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          defaultValue="short"
          aria-invalid
        />
      </div>
      <Button type="submit" className="w-full">
        Create account
      </Button>
    </form>
  )
}
