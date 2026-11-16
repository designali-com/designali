import {
  Paperclip as PaperclipIcon,
  Send as SendIcon,
  Trash2 as Trash2Icon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"

export default function EmailComposerTextarea() {
  return (
    <div className="w-full max-w-md border">
      <div className="flex items-center gap-2 border-b px-3 py-1.5 text-xs">
        <span className="text-muted-foreground">To</span>
        <Badge variant="secondary">client@example.com</Badge>
      </div>
      <Input
        placeholder="Subject"
        aria-label="Subject"
        className="border-0 border-b focus-visible:ring-0"
        defaultValue="Revised quote for your brand identity project"
      />
      <Textarea
        aria-label="Message"
        className="min-h-32 border-0 focus-visible:ring-0"
        defaultValue={
          "Hi there,\n\nAttached is the revised Designali quote. The main change is a shorter UI/UX design phase before we start the Next.js build.\n\nBest,\nAli Imam"
        }
      />
      <div className="flex items-center justify-between border-t p-2">
        <div className="flex gap-1">
          <Button variant="ghost" size="icon-sm" aria-label="Attach">
            <PaperclipIcon />
          </Button>
          <Button variant="ghost" size="icon-sm" aria-label="Discard">
            <Trash2Icon />
          </Button>
        </div>
        <Button size="sm">
          <SendIcon data-icon="inline-start" />
          Send
        </Button>
      </div>
    </div>
  )
}
