import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@workspace/ui/components/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import { cn } from "@workspace/ui/lib/utils"

const team = [
  {
    name: "Ali Imam",
    initials: "AI",
    role: "Founder · Design Engineer",
    status: "Available",
    online: true,
  },
  {
    name: "Studio Developer",
    initials: "SD",
    role: "Frontend Engineer",
    status: "In a meeting until 3 PM",
    online: false,
  },
  {
    name: "Brand Designer",
    initials: "BD",
    role: "Brand identity",
    status: "Available",
    online: true,
  },
  {
    name: "Motion Designer",
    initials: "MD",
    role: "CGI & motion",
    status: "Out of office",
    online: false,
  },
]

export default function TeamAvatarStackHoverCards() {
  return (
    <div className="flex flex-col items-center gap-2">
      <AvatarGroup>
        {team.map((member) => (
          <HoverCard key={member.name}>
            <HoverCardTrigger
              delay={150}
              render={<span className="cursor-pointer" />}
            >
              <Avatar>
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
            </HoverCardTrigger>
            <HoverCardContent className="w-56">
              <p className="text-sm font-medium">{member.name}</p>
              <p className="text-muted-foreground">{member.role}</p>
              <div className="mt-2 flex items-center gap-1.5">
                <span
                  className={cn(
                    "size-2 rounded-full",
                    member.online ? "bg-primary" : "bg-muted-foreground"
                  )}
                />
                <span>{member.status}</span>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </AvatarGroup>
      <p className="text-xs text-muted-foreground">Designali studio</p>
    </div>
  )
}
