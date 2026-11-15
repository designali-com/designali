import { Building2Icon, MailIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const emails = [
  {
    from: "Elena Petrova",
    initials: "EP",
    org: "Brightwater Legal",
    subject: "Contract redlines attached",
    threads: ["NDA follow-up", "Q2 retainer"],
  },
  {
    from: "Sam Whitfield",
    initials: "SW",
    org: "Ironleaf Supply",
    subject: "Shipment ETA moved to Monday",
    threads: ["PO #5521", "Pallet count"],
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
