import {
  Reply as ReplyIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

const threads = [
  {
    value: "t1",
    author: "Ali Imam",
    topic: "Blocks launch copy review",
    unread: 2,
    replies: [
      {
        author: "Sara Khan",
        text: "Headline works. Can we shorten the subhead?",
      },
      { author: "Ali Imam", text: "Updated. Take a look at v3 in Figma." },
    ],
  },
  {
    value: "t2",
    author: "Zaid Ahmed",
    topic: "Preview deploy is down",
    unread: 0,
    replies: [
      {
        author: "Ali Imam",
        text: "Redeployed on Vercel, should be back now.",
      },
    ],
  },
]

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")

export default function AccordionChatThreads() {
  return (
    <Accordion defaultValue={["t1"]} className="w-full max-w-sm border">
      {threads.map((thread) => (
        <AccordionItem key={thread.value} value={thread.value}>
          <AccordionTrigger className="items-center gap-2.5 px-3 hover:bg-muted/50 hover:no-underline">
            <Avatar>
              <AvatarFallback>{initials(thread.author)}</AvatarFallback>
            </Avatar>
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="truncate"># {thread.topic}</span>
              <span className="font-normal text-muted-foreground">
                {thread.replies.length}{" "}
                {thread.replies.length === 1 ? "reply" : "replies"}
              </span>
            </span>
            {thread.unread > 0 && <Badge>{thread.unread}</Badge>}
          </AccordionTrigger>
          <AccordionContent className="space-y-2 px-3">
            {thread.replies.map((reply) => (
              <div key={reply.text} className="flex gap-2 border-s ps-3">
                <div>
                  <p className="font-medium">{reply.author}</p>
                  <p className="text-muted-foreground">{reply.text}</p>
                </div>
              </div>
            ))}
            <Button size="xs" variant="ghost">
              <ReplyIcon data-icon="inline-start" />
              Reply in thread
            </Button>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
