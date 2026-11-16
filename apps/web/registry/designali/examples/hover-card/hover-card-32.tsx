import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const reports = [
  {
    name: "Studio Developer",
    initials: "SD",
    title: "Design Engineer",
    dept: "Web development",
    office: "Remote",
  },
  {
    name: "Brand Designer",
    initials: "BD",
    title: "Design Lead",
    dept: "Brand identity",
    office: "Remote",
  },
]

export default function OrgChartHoverCard() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="border bg-muted/50 px-3 py-2 text-center text-sm">
        <p className="font-medium">Ali Imam</p>
        <p className="text-xs text-muted-foreground">Founder, Designali</p>
      </div>
      <div className="h-4 w-px bg-border" />
      <div className="flex gap-3">
        {reports.map((r) => (
          <HoverCard key={r.name}>
            <HoverCardTrigger
              render={
                <div className="flex cursor-default items-center gap-2 border px-3 py-2 text-sm" />
              }
            >
              <Avatar size="sm">
                <AvatarFallback>{r.initials}</AvatarFallback>
              </Avatar>
              <span>{r.name}</span>
            </HoverCardTrigger>
            <HoverCardContent className="w-52">
              <p className="font-medium">{r.title}</p>
              <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5">
                <dt className="text-muted-foreground">Department</dt>
                <dd>{r.dept}</dd>
                <dt className="text-muted-foreground">Reports to</dt>
                <dd>Ali Imam</dd>
                <dt className="text-muted-foreground">Office</dt>
                <dd>{r.office}</dd>
              </dl>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  )
}
