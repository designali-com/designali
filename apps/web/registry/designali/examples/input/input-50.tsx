"use client"

import * as React from "react"
import {
  Trash2 as Trash2Icon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const PROJECT = "designali-website"

export default function DeleteConfirmationInput() {
  const [value, setValue] = React.useState("")

  return (
    <div className="w-full max-w-sm border border-destructive/40 p-4">
      <p className="text-sm font-medium text-destructive">Delete project</p>
      <p className="mt-1 text-xs text-muted-foreground">
        This permanently removes all deployments and domains. Type{" "}
        <span className="font-mono font-medium text-foreground">{PROJECT}</span>{" "}
        to confirm.
      </p>
      <Input
        aria-label="Project name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={PROJECT}
        className="mt-3 font-mono"
        autoComplete="off"
      />
      <Button
        variant="destructive"
        className="mt-3 w-full"
        disabled={value !== PROJECT}
      >
        <Trash2Icon data-icon="inline-start" />
        Delete this project
      </Button>
    </div>
  )
}
