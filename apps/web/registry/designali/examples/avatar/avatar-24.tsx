import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
} from "@workspace/ui/components/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const attendees = [
  { initials: "AI", name: "Ali Imam", rsvp: "yes" },
  { initials: "SA", name: "Sara", rsvp: "yes" },
  { initials: "OM", name: "Omar", rsvp: "maybe" },
  { initials: "CL", name: "Client", rsvp: "no" },
]

const rsvpStyle: Record<string, string> = {
  yes: "bg-emerald-500",
  maybe: "bg-amber-500",
  no: "bg-red-500",
}

export default function MeetingAttendeesCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Designali brand review</CardTitle>
        <CardDescription>Thu, Sep 12 · 10:00 - 11:00 AM</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {attendees.map((person) => (
          <div key={person.initials} className="flex items-center gap-3">
            <Avatar size="sm">
              <AvatarFallback>{person.initials}</AvatarFallback>
              <AvatarBadge className={rsvpStyle[person.rsvp]} />
            </Avatar>
            <span className="flex-1 text-sm">{person.name}</span>
            <span className="text-xs text-muted-foreground capitalize">
              {person.rsvp === "yes"
                ? "Going"
                : person.rsvp === "no"
                  ? "Declined"
                  : "Maybe"}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
