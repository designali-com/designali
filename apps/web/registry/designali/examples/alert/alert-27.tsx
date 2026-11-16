"use client"

import {
  Check as CheckIcon,
  RefreshCw as RefreshCwIcon,
  Sparkles as SparklesIcon,
} from "@designali/icons"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

const highlights = [
  "Faster search across 4000+ icons",
  "New Abstract vector shapes",
  "Copy blocks straight into Next.js",
]

export default function AlertUpdateAvailable() {
  return (
    <Alert variant="info" className="max-w-md">
      <SparklesIcon />
      <AlertTitle>Designali 4.2 is ready</AlertTitle>
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
