import {
  Activity as ActivityIcon,
  Key as KeyIcon,
  LogIn as LogInIcon,
  ShieldCheck as ShieldCheckIcon,
  UserPlus as UserPlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const events = [
  { icon: LogInIcon, text: "Signed in to designali.com", when: "Today, 08:12" },
  {
    icon: KeyIcon,
    text: 'Created API key "ci-runner"',
    when: "Yesterday, 17:40",
  },
  {
    icon: UserPlusIcon,
    text: "Invited dana@designali.com",
    when: "Mar 3, 11:05",
  },
  {
    icon: ShieldCheckIcon,
    text: "Enabled two-factor authentication",
    when: "Mar 1, 09:30",
  },
]

export default function ActivityTimelineSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <ActivityIcon data-icon="inline-start" />
        Activity log
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Account activity</SheetTitle>
          <SheetDescription>
            Security-relevant events for the last 30 days.
          </SheetDescription>
        </SheetHeader>
        <ol className="flex flex-col px-4">
          {events.map((event, i) => (
            <li key={event.text} className="relative flex gap-3 pb-5">
              {i < events.length - 1 && (
                <span className="absolute start-3.5 top-7 bottom-0 w-px bg-border" />
              )}
              <span className="flex size-7 shrink-0 items-center justify-center border bg-muted">
                <event.icon className="size-3.5" />
              </span>
              <div className="flex flex-col">
                <span>{event.text}</span>
                <span className="text-muted-foreground">{event.when}</span>
              </div>
            </li>
          ))}
        </ol>
      </SheetContent>
    </Sheet>
  )
}
