import {
  Clock as ClockIcon,
  MessageCircle as MessageCircleIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

export default function MentionCardPopover() {
  return (
    <div className="flex w-full max-w-sm gap-2 border p-3">
      <Avatar size="sm">
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <p className="text-xs leading-relaxed">
        <span className="font-medium">Lucia</span>
        <br />
        Can{" "}
        <Popover>
          <PopoverTrigger
            render={
              <button
                type="button"
                className="bg-primary/10 px-0.5 font-medium text-primary hover:bg-primary/20"
              />
            }
          >
            @aliimam
          </PopoverTrigger>
          <PopoverContent className="w-64" align="start">
            <div className="flex items-center gap-2.5">
              <Avatar size="lg">
                <AvatarImage src="/ali.jpg" alt="Ali Imam" />
                <AvatarFallback>AI</AvatarFallback>
                <AvatarBadge className="bg-emerald-500" />
              </Avatar>
              <div className="flex flex-col">
                <PopoverTitle>Ali Imam</PopoverTitle>
                <PopoverDescription>
                  Founder &amp; design engineer · Designali
                </PopoverDescription>
              </div>
            </div>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <ClockIcon className="size-3.5" /> 4:12 PM local time
            </p>
            <Button size="sm" variant="outline">
              <MessageCircleIcon data-icon="inline-start" /> Message
            </Button>
          </PopoverContent>
        </Popover>{" "}
        take a look at the flaky deploy step before Friday?
      </p>
    </div>
  )
}
