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
    name: "Ava Patel",
    initials: "AP",
    role: "Product Manager",
    status: "Available",
    online: true,
  },
  {
    name: "Jonas Weber",
    initials: "JW",
    role: "Frontend Engineer",
    status: "In a meeting until 3 PM",
    online: false,
  },
  {
    name: "Lina Okafor",
    initials: "LO",
    role: "UX Researcher",
    status: "Available",
    online: true,
  },
  {
    name: "Marco Silva",
    initials: "MS",
    role: "Backend Engineer",
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
                    member.online ? "bg-emerald-500" : "bg-muted-foreground"
                  )}
                />
                <span>{member.status}</span>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </AvatarGroup>
      <p className="text-xs text-muted-foreground">Checkout redesign squad</p>
    </div>
  )
}
