import { HardDriveIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"
import { Progress } from "@workspace/ui/components/progress"

export default function AlertStorageUsage() {
  const used = 9.2
  const limit = 10

  return (
    <Alert variant="warning" className="max-w-md">
      <HardDriveIcon />
      <AlertTitle>You&apos;re almost out of storage</AlertTitle>
      <AlertDescription className="space-y-2">
        <p>
          {used} GB of {limit} GB used. Uploads will pause when you reach the
          limit.
        </p>
        <Progress value={(used / limit) * 100} aria-label="Storage used" />
        <Button size="xs" variant="outline">
          Upgrade storage
        </Button>
      </AlertDescription>
    </Alert>
  )
}
