import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const deploys = [
  {
    sha: "a3f91c2",
    message: "Cache pricing blocks on the edge",
    author: "Ali Imam",
    initials: "AI",
    when: "12 min ago",
    env: "Production",
  },
  {
    sha: "7be02d4",
    message: "Bump image optimizer to v3",
    author: "Studio Developer",
    initials: "SD",
    when: "1 hr ago",
    env: "Preview",
  },
]

export default function CommitHashHoverCard() {
  return (
    <div className="w-full max-w-sm divide-y border text-sm">
      {deploys.map((d) => (
        <div key={d.sha} className="flex items-center gap-3 px-3 py-2">
          <span className="size-2 rounded-full bg-primary" />
          <span className="flex-1">{d.env}</span>
          <HoverCard>
            <HoverCardTrigger
              href="#"
              className="bg-muted px-1.5 py-0.5 font-sans text-xs hover:underline"
            >
              {d.sha}
            </HoverCardTrigger>
            <HoverCardContent align="end" className="w-64">
              <p className="font-medium">{d.message}</p>
              <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                <Avatar size="sm">
                  <AvatarFallback>{d.initials}</AvatarFallback>
                </Avatar>
                {d.author} committed {d.when}
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      ))}
    </div>
  )
}
