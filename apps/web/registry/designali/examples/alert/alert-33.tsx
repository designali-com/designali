import { SendIcon, ShieldAlertIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

export default function AlertChatModeration() {
  return (
    <div className="w-full max-w-sm border">
      <div className="space-y-2 p-3 text-xs">
        <div className="flex gap-2">
          <Avatar size="sm">
            <AvatarFallback>KO</AvatarFallback>
          </Avatar>
          <p className="bg-muted px-2.5 py-1.5">
            Does anyone have the venue address for Friday?
          </p>
        </div>
      </div>
      <div className="space-y-2 border-t p-3">
        <Alert variant="warning">
          <ShieldAlertIcon />
          <AlertTitle>Message held for review</AlertTitle>
          <AlertDescription>
            It looks like it contains a phone number. Community rules don&apos;t
            allow sharing personal contact details.
          </AlertDescription>
        </Alert>
        <div className="flex gap-2">
          <Input defaultValue="Call me on 06 1234 5678" aria-label="Message" />
          <Button size="icon" aria-label="Send" disabled>
            <SendIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}
