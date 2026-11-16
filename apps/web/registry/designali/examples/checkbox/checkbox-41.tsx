"use client"

import * as React from "react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import { cn } from "@workspace/ui/lib/utils"

export default function AccessibilityPreviewToggles() {
  const [prefs, setPrefs] = React.useState({
    large: false,
    contrast: false,
    underline: true,
  })
  const set = (key: keyof typeof prefs) => (value: boolean) =>
    setPrefs((p) => ({ ...p, [key]: value }))

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <FieldGroup className="gap-3">
        <Field orientation="horizontal">
          <Checkbox
            id="a11y-large"
            checked={prefs.large}
            onCheckedChange={set("large")}
          />
          <FieldLabel htmlFor="a11y-large">Larger text</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="a11y-contrast"
            checked={prefs.contrast}
            onCheckedChange={set("contrast")}
          />
          <FieldLabel htmlFor="a11y-contrast">High contrast</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="a11y-underline"
            checked={prefs.underline}
            onCheckedChange={set("underline")}
          />
          <FieldLabel htmlFor="a11y-underline">Underline links</FieldLabel>
        </Field>
      </FieldGroup>
      <div
        className={cn(
          "border p-4 transition-all",
          prefs.large ? "text-base" : "text-xs",
          prefs.contrast ? "bg-foreground text-background" : "bg-muted/40"
        )}
      >
        <p className="font-medium">Preview</p>
        <p className={cn(!prefs.contrast && "text-muted-foreground")}>
          Your Designali template is ready.{" "}
          <a
            href="#"
            className={cn("font-medium", prefs.underline && "underline")}
          >
            Download files
          </a>
        </p>
      </div>
    </div>
  )
}
