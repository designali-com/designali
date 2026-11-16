import {
  Mic as MicIcon,
  PhoneOff as PhoneOffIcon,
  Video as VideoIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { cn } from "@workspace/ui/lib/utils"

const participants = ["Ali Imam", "Jonas", "Priya", "Luca"]

export default function VideoCallWithChat() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-72 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="68%" minSize="50%">
        <div className="flex h-full flex-col gap-2 bg-foreground p-2">
          <div className="grid flex-1 grid-cols-2 gap-2">
            {participants.map((name, i) => (
              <div
                key={name}
                className={cn(
                  "relative flex items-center justify-center bg-foreground",
                  i === 0 && "ring-2 ring-primary"
                )}
              >
                <Avatar>
                  <AvatarFallback>
                    {name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="absolute bottom-1 left-1 truncate text-[10px] text-white/80">
                  {name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1">
            <Button size="icon-sm" variant="secondary" aria-label="Mute">
              <MicIcon />
            </Button>
            <Button size="icon-sm" variant="secondary" aria-label="Camera">
              <VideoIcon />
            </Button>
            <Button size="icon-sm" variant="destructive" aria-label="Leave">
              <PhoneOffIcon />
            </Button>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="32%" minSize="25%" maxSize="45%">
        <div className="flex h-full flex-col">
          <span className="border-b px-3 py-2 text-xs font-medium">
            In-call messages
          </span>
          <div className="flex flex-1 flex-col gap-2 p-3 text-xs">
            <p>
              <span className="font-medium">Jonas:</span> Sharing my screen next
            </p>
            <p>
              <span className="font-medium">Priya:</span> Link to the Figma file is in
              the agenda
            </p>
          </div>
          <Input
            aria-label="Message"
            placeholder="Send a message"
            className="rounded-none border-x-0 border-b-0 text-xs"
          />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
