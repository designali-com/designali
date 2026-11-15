"use client"

import * as React from "react"
import {
  BellIcon,
  SettingsIcon,
  ShieldIcon,
  SlidersHorizontalIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Switch } from "@workspace/ui/components/switch"

const sections = [
  { id: "general", label: "General", icon: SlidersHorizontalIcon },
  { id: "notifications", label: "Notifications", icon: BellIcon },
  { id: "security", label: "Security", icon: ShieldIcon },
]

export default function SettingsSidebarDialog() {
  const [active, setActive] = React.useState("general")

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <SettingsIcon data-icon="inline-start" />
        Settings
      </DialogTrigger>
      <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-2xl">
        <DialogTitle className="sr-only">Settings</DialogTitle>
        <div className="flex min-h-80 flex-col sm:flex-row">
          <nav className="flex gap-1 border-b bg-muted/40 p-2 sm:w-44 sm:flex-col sm:border-e sm:border-b-0">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={active === section.id ? "secondary" : "ghost"}
                className="justify-start"
                onClick={() => setActive(section.id)}
              >
                <section.icon data-icon="inline-start" />
                {section.label}
              </Button>
            ))}
          </nav>
          <div className="flex flex-1 flex-col gap-4 p-4">
            {active === "general" && (
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="ws-name">Workspace name</FieldLabel>
                  <Input id="ws-name" defaultValue="Harbor Analytics" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="ws-url">Workspace URL</FieldLabel>
                  <Input id="ws-url" defaultValue="harbor" />
                </Field>
              </FieldGroup>
            )}
            {active === "notifications" && (
              <FieldGroup>
                {["Weekly summary", "New comments", "Failed payments"].map(
                  (label) => (
                    <Field key={label} orientation="horizontal">
                      <FieldLabel htmlFor={label}>{label}</FieldLabel>
                      <Switch
                        id={label}
                        defaultChecked={label !== "New comments"}
                      />
                    </Field>
                  )
                )}
              </FieldGroup>
            )}
            {active === "security" && (
              <FieldGroup>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldLabel htmlFor="sso">Require SSO</FieldLabel>
                    <FieldDescription>
                      Members must sign in with Okta.
                    </FieldDescription>
                  </FieldContent>
                  <Switch id="sso" />
                </Field>
                <Button variant="outline" className="self-start">
                  Sign out all sessions
                </Button>
              </FieldGroup>
            )}
            <DialogFooter className="mt-auto">
              <DialogClose render={<Button />}>Save changes</DialogClose>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
