"use client"

import * as React from "react"
import { MailCheckIcon, MailIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
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
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

const topics = ["Product updates", "Design deep dives", "Hiring news"]

export default function NewsletterSignupDrawer() {
  const [subscribed, setSubscribed] = React.useState(false)

  return (
    <Drawer onOpenChange={(open) => open && setSubscribed(false)}>
      <DrawerTrigger render={<Button variant="secondary" />}>
        <MailIcon data-icon="inline-start" />
        Subscribe
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          {subscribed ? (
            <div className="flex flex-col items-center gap-3 p-6 text-center">
              <MailCheckIcon className="size-8" />
              <DrawerTitle>Check your inbox</DrawerTitle>
              <DrawerDescription>
                Confirm your email to start receiving The Field Notes.
              </DrawerDescription>
              <DrawerClose
                render={<Button variant="outline" className="mt-2" />}
              >
                Close
              </DrawerClose>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                setSubscribed(true)
              }}
            >
              <DrawerHeader>
                <DrawerTitle>The Field Notes</DrawerTitle>
                <DrawerDescription>
                  One thoughtful email every other Tuesday. No spam.
                </DrawerDescription>
              </DrawerHeader>
              <FieldGroup className="p-4">
                <Field>
                  <FieldLabel htmlFor="nl-email">Email</FieldLabel>
                  <Input
                    id="nl-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                </Field>
                <FieldSet>
                  <FieldLegend variant="label">Topics</FieldLegend>
                  {topics.map((topic) => (
                    <Field key={topic} orientation="horizontal">
                      <Checkbox
                        id={"nl-" + topic}
                        defaultChecked={topic !== "Hiring news"}
                      />
                      <FieldLabel htmlFor={"nl-" + topic}>{topic}</FieldLabel>
                    </Field>
                  ))}
                </FieldSet>
              </FieldGroup>
              <DrawerFooter>
                <Button type="submit">Subscribe</Button>
              </DrawerFooter>
            </form>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
