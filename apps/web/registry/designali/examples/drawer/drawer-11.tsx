"use client"

import { UserPenIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"

export default function EditProfileSideDrawer() {
  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        <UserPenIcon data-icon="inline-start" />
        Edit profile
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            This is how others see you across the workspace.
          </DrawerDescription>
        </DrawerHeader>
        <form
          className="flex min-h-0 flex-1 flex-col"
          onSubmit={(event) => event.preventDefault()}
        >
          <FieldGroup className="flex-1 overflow-y-auto p-4">
            <div className="flex items-center gap-3">
              <Avatar size="lg">
                <AvatarFallback>LM</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm" type="button">
                Change
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="pf-first">First name</FieldLabel>
                <Input id="pf-first" defaultValue="Leila" />
              </Field>
              <Field>
                <FieldLabel htmlFor="pf-last">Last name</FieldLabel>
                <Input id="pf-last" defaultValue="Moradi" />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="pf-title">Job title</FieldLabel>
              <Input id="pf-title" defaultValue="Staff Product Designer" />
            </Field>
            <Field>
              <FieldLabel htmlFor="pf-bio">Bio</FieldLabel>
              <Textarea
                id="pf-bio"
                defaultValue="Designing calm software for busy teams. Based in Lisbon."
              />
              <FieldDescription>Max 160 characters.</FieldDescription>
            </Field>
          </FieldGroup>
          <DrawerFooter className="flex-row border-t pt-4">
            <DrawerClose
              render={
                <Button variant="outline" className="flex-1" type="button" />
              }
            >
              Cancel
            </DrawerClose>
            <Button type="submit" className="flex-1">
              Save
            </Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  )
}
