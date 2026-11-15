import { RefreshCwIcon, WebhookIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

const attempts = [
  { time: "14:02:11", code: 503 },
  { time: "13:57:09", code: 503 },
  { time: "13:52:04", code: 504 },
]

export default function AlertWebhookFailing() {
  return (
    <Alert variant="error" className="max-w-md">
      <WebhookIcon />
      <AlertTitle>Endpoint failing for 12 minutes</AlertTitle>
      <AlertDescription>
        <p className="truncate font-mono">
          https://hooks.parcelpoint.example/orders
        </p>
        <ul className="my-1.5 border bg-background font-mono">
          {attempts.map((attempt) => (
            <li
              key={attempt.time}
              className="flex justify-between border-b px-2 py-1 last:border-0"
            >
              <span>{attempt.time}</span>
              <span className="text-destructive">{attempt.code}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-1.5">
          <Button size="xs" variant="outline">
            <RefreshCwIcon data-icon="inline-start" />
            Retry now
          </Button>
          <Button size="xs" variant="ghost">
            Disable endpoint
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}
