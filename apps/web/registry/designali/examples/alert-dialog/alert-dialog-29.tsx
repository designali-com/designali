"use client"

import * as React from "react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"
import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

export default function DeleteUserReassignChoice() {
  const [choice, setChoice] = React.useState("transfer")

  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>
        Offboard Sara Khan
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Offboard Sara Khan?</AlertDialogTitle>
          <AlertDialogDescription>
            Sara owns 27 Figma files and 4 client projects. Choose what happens to
            them.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <RadioGroup
          value={choice}
          onValueChange={(value) => setChoice(value as string)}
        >
          <Field orientation="horizontal">
            <RadioGroupItem value="transfer" id="offboard-transfer" />
            <FieldContent>
              <FieldLabel htmlFor="offboard-transfer">
                Transfer to me
              </FieldLabel>
              <FieldDescription>
                Keep everything and become the new owner.
              </FieldDescription>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="delete" id="offboard-delete" />
            <FieldContent>
              <FieldLabel htmlFor="offboard-delete">
                Delete all content
              </FieldLabel>
              <FieldDescription>
                Permanently remove her files and projects.
              </FieldDescription>
            </FieldContent>
          </Field>
        </RadioGroup>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            {choice === "delete"
              ? "Offboard and delete"
              : "Offboard and transfer"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
