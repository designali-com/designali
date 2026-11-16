import {
  MessageSquare as MessageSquareIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const replies = [
  {
    name: "Sara Designer",
    time: "2h",
    text: "Agreed, the new spacing reads much better on mobile.",
  },
  {
    name: "Omar Developer",
    time: "1h",
    text: "Can we use the @designali/icons download icon for export?",
  },
  {
    name: "Ali Imam",
    time: "45m",
    text: "Updated the Figma file with both icon options.",
  },
]

export default function CommentReplies() {
  return (
    <div className="w-full max-w-md">
      <div className="flex gap-3">
        <Avatar>
          <AvatarFallback>NM</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <p className="text-sm">
            <span className="font-medium">Nina Motion</span>{" "}
            <span className="text-xs text-muted-foreground">3h</span>
          </p>
          <p className="text-sm">
            I tightened the card spacing on the designali.com pricing page.
            Thoughts before I ship?
          </p>
          <Collapsible>
            <CollapsibleTrigger
              render={
                <Button variant="link" size="xs" className="h-auto px-0" />
              }
            >
              <MessageSquareIcon />
              {replies.length} replies
            </CollapsibleTrigger>
            <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
              <div className="mt-3 flex flex-col gap-3 border-l pl-3">
                {replies.map((reply) => (
                  <div key={reply.name} className="flex gap-2">
                    <Avatar size="sm">
                      <AvatarFallback>
                        {reply.name
                          .split(" ")
                          .map((p) => p[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <span className="font-medium">{reply.name}</span>{" "}
                      <span className="text-xs text-muted-foreground">
                        {reply.time}
                      </span>
                      <p>{reply.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  )
}
