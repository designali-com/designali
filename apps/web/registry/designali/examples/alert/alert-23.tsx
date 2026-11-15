import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"

export default function AlertMentionWithAvatar() {
  return (
    <Alert className="max-w-md grid-cols-[auto_1fr] gap-x-2.5">
      <Avatar className="row-span-2">
        <AvatarFallback>PS</AvatarFallback>
      </Avatar>
      <AlertTitle className="col-start-2">Priya Shah mentioned you</AlertTitle>
      <AlertDescription className="col-start-2">
        &ldquo;Can you check the pricing table copy before we publish?&rdquo; in{" "}
        <span className="font-medium text-foreground">Launch plan</span>
      </AlertDescription>
      <AlertAction>
        <Button size="xs" variant="outline">
          Reply
        </Button>
      </AlertAction>
    </Alert>
  )
}
