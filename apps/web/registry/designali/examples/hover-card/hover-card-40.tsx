import {
  Building2 as Building2Icon,
  Mail as MailIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const emails = [
  {
    from: "Ali Imam",
    initials: "AI",
    org: "Designali",
    subject: "Brand identity concepts attached",
    threads: ["Logo feedback", "Q2 retainer"],
  },
  {
    from: "Designali Support",
    initials: "DS",
    org: "support@designali.com",
    subject: "Your Templates Pro download is ready",
    threads: ["Order #5521", "License"],
  },
]

export default function InboxSenderHoverCard() {
  return (
    <div className="w-full max-w-sm divide-y border text-sm">
      {emails.map((e) => (
        <div key={e.from} className="flex flex-col gap-0.5 px-3 py-2">
          <HoverCard>
            <HoverCardTrigger
              href="#"
              className="w-fit font-medium hover:underline"
            >
              {e.from}
            </HoverCardTrigger>
            <HoverCardContent align="start" className="w-64">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>{e.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{e.from}</p>
                  <p className="flex items-center gap-1 text-muted-foreground">
                    <Building2Icon className="size-3" />
                    {e.org}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-muted-foreground">Recent threads</p>
              <ul className="mt-1 flex flex-col gap-0.5">
                {e.threads.map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <MailIcon className="size-3 text-muted-foreground" />
                    {t}
                  </li>
                ))}
              </ul>
            </HoverCardContent>
          </HoverCard>
          <span className="truncate text-muted-foreground">{e.subject}</span>
        </div>
      ))}
    </div>
  )
}
