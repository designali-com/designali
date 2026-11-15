import {
  LogOutIcon,
  MicIcon,
  MonitorUpIcon,
  PhoneOffIcon,
  VideoIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"

export default function LeaveMeetingDialog() {
  return (
    <div className="flex items-center gap-2 border bg-muted/40 p-2">
      <Button variant="outline" size="icon" aria-label="Mute">
        <MicIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Turn off camera">
        <VideoIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Share screen">
        <MonitorUpIcon />
      </Button>
      <Dialog>
        <DialogTrigger
          render={
            <Button variant="destructive" size="icon" aria-label="Leave call" />
          }
        >
          <PhoneOffIcon />
        </DialogTrigger>
        <DialogContent className="sm:max-w-xs">
          <DialogHeader>
            <DialogTitle>Leave &quot;Sprint planning&quot;?</DialogTitle>
            <DialogDescription>
              You&apos;re the host. 6 people are still in the call.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <DialogClose
              render={<Button variant="outline" className="justify-start" />}
            >
              <LogOutIcon data-icon="inline-start" />
              Leave and keep meeting running
            </DialogClose>
            <DialogClose
              render={
                <Button variant="destructive" className="justify-start" />
              }
            >
              <PhoneOffIcon data-icon="inline-start" />
              End meeting for everyone
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
