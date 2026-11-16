import {
  Mail as MailIcon,
  MapPin as MapPinIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

const thread = [
  { me: false, text: "Hey! Is the new landing page build ready?" },
  { me: true, text: "Yes, the Next.js build is live on the preview link now." },
  { me: false, text: "Amazing. Can you ship it to staging today?" },
  { me: true, text: "Already there. Production goes out at 4pm." },
]

export default function ChatWithContactDetails() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-80 w-full max-w-xl border"
    >
      <ResizablePanel defaultSize="62%" minSize="40%">
        <div className="flex h-full flex-col">
          <div className="flex items-center gap-2 border-b p-3">
            <Avatar className="size-7">
              <AvatarFallback>N</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">Nadia</span>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-3">
            {thread.map((message, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] px-3 py-2 text-xs",
                  message.me
                    ? "self-end bg-primary text-primary-foreground"
                    : "self-start bg-muted"
                )}
              >
                {message.text}
              </div>
            ))}
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="38%" minSize="25%" maxSize="50%">
        <div className="flex h-full flex-col items-center gap-2 p-4 text-center">
          <Avatar className="size-14">
            <AvatarFallback className="text-base">N</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Nadia</p>
            <p className="text-xs text-muted-foreground">Designali client · Founder</p>
          </div>
          <Badge variant="secondary">Online</Badge>
          <Separator className="my-2" />
          <div className="flex w-full flex-col gap-1 text-left text-xs">
            <span className="flex items-center gap-2">
              <MailIcon className="size-3.5" />
              nadia@example.com
            </span>
            <span className="flex items-center gap-2">
              <MapPinIcon className="size-3.5" />
              Remote
            </span>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
