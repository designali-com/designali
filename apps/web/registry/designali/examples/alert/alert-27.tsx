"use client"

import { CheckIcon, RefreshCwIcon, SparklesIcon } from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

const highlights = [
  "Faster search across all workspaces",
  "Bulk edit for tasks",
  "New keyboard shortcuts panel",
]

export default function AlertUpdateAvailable() {
  return (
    <Alert variant="info" className="max-w-md">
      <SparklesIcon />
      <AlertTitle>Version 4.2 is ready</AlertTitle>
      <AlertDescription>
        <ul className="my-1 space-y-0.5">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <CheckIcon className="size-3" />
              {item}
            </li>
          ))}
        </ul>
      </AlertDescription>
      <AlertAction>
        <Button size="xs" onClick={() => window.location.reload()}>
          <RefreshCwIcon data-icon="inline-start" />
          Reload
        </Button>
      </AlertAction>
    </Alert>
  )
}
