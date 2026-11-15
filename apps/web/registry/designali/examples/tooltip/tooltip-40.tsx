import {
  MicIcon,
  PaperclipIcon,
  SendHorizontalIcon,
  SmileIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Kbd } from "@workspace/ui/components/kbd"
import { Textarea } from "@workspace/ui/components/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function ChatComposerTooltips() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-md flex-col gap-2 border p-2">
        <Textarea
          placeholder="Message #design-review"
          className="min-h-14 resize-none border-0 shadow-none focus-visible:ring-0"
        />
        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Attach file"
                />
              }
            >
              <PaperclipIcon />
            </TooltipTrigger>
            <TooltipContent>Attach file</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="ghost" size="icon-sm" aria-label="Emoji" />
              }
            >
              <SmileIcon />
            </TooltipTrigger>
            <TooltipContent>Emoji</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Record voice clip"
                />
              }
            >
              <MicIcon />
            </TooltipTrigger>
            <TooltipContent>Record voice clip</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button size="icon-sm" className="ms-auto" aria-label="Send" />
              }
            >
              <SendHorizontalIcon />
            </TooltipTrigger>
            <TooltipContent>
              Send
              <Kbd>Enter</Kbd>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  )
}
