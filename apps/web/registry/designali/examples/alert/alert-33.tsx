import {
  Send as SendIcon,
  ShieldAlert as ShieldAlertIcon,
} from "@designali/icons"

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
            <AvatarFallback>SK</AvatarFallback>
          </Avatar>
          <p className="bg-muted px-2.5 py-1.5">
            Is there a Figma file for the Designali dashboard blocks?
          </p>
        </div>
      </div>
      <div className="space-y-2 border-t p-3">
        <Alert variant="warning">
          <ShieldAlertIcon />
          <AlertTitle>Message held for review</AlertTitle>
          <AlertDescription>
            It looks like it contains a phone number. Designali community rules
            don&apos;t allow sharing personal contact details.
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
