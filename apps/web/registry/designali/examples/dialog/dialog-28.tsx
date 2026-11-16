import {
  Link as LinkIcon,
  Paperclip as PaperclipIcon,
  SquarePen as PenSquareIcon,
  Send as SendIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Textarea } from "@workspace/ui/components/textarea"

export default function FullscreenMobileComposeDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>
        <PenSquareIcon data-icon="inline-start" />
        New message
      </DialogTrigger>
      <DialogContent className="flex h-dvh max-w-none flex-col ring-0 sm:h-auto sm:max-w-lg sm:ring-1">
        <DialogHeader>
          <DialogTitle>New message</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col border-y">
          <label className="flex items-center gap-2 border-b py-2">
            <span className="w-10 text-muted-foreground">To</span>
            <input
              className="flex-1 bg-transparent outline-none"
              defaultValue="hello@designali.com"
            />
          </label>
          <label className="flex items-center gap-2 py-2">
            <span className="w-10 text-muted-foreground">Subject</span>
            <input
              className="flex-1 bg-transparent outline-none"
              placeholder="Brand identity project brief"
            />
          </label>
        </div>
        <Textarea
          className="min-h-40 flex-1 resize-none border-0 px-0 shadow-none focus-visible:ring-0"
          placeholder="Write your message..."
          aria-label="Message"
        />
        <DialogFooter className="flex-row items-center justify-between sm:justify-between">
          <div className="flex gap-1">
            <Button variant="ghost" size="icon-sm" aria-label="Attach file">
              <PaperclipIcon />
            </Button>
            <Button variant="ghost" size="icon-sm" aria-label="Insert link">
              <LinkIcon />
            </Button>
          </div>
          <DialogClose render={<Button />}>
            <SendIcon data-icon="inline-start" />
            Send
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
