import {
  SquarePen as SquarePenIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const history = [
  {
    group: "Today",
    chats: ["Refactor billing webhook", "Write onboarding email"],
  },
  {
    group: "Yesterday",
    chats: [
      "SQL for churn cohort",
      "Summarize user interviews",
      "Name ideas for beta",
    ],
  },
  {
    group: "Previous 7 days",
    chats: [
      "Regex for invoice IDs",
      "Pricing page copy",
      "Explain OAuth PKCE",
      "Plan team offsite",
    ],
  },
  {
    group: "Older",
    chats: [
      "Migrate to Postgres 16",
      "Draft privacy policy",
      "Unit tests for cart",
    ],
  },
]

export default function ChatHistorySidebar() {
  return (
    <div className="flex w-full max-w-60 flex-col border bg-muted/30">
      <div className="p-2">
        <Button variant="outline" className="w-full justify-start">
          <SquarePenIcon data-icon="inline-start" />
          New chat
        </Button>
      </div>
      <ScrollArea className="h-72">
        <div className="flex flex-col gap-3 p-2">
          {history.map((h) => (
            <div key={h.group} className="flex flex-col gap-0.5">
              <span className="px-2 text-[10px] font-medium text-muted-foreground">
                {h.group}
              </span>
              {h.chats.map((c, i) => (
                <a
                  key={c}
                  href="#"
                  className={cn(
                    "truncate px-2 py-1.5 text-xs hover:bg-muted",
                    h.group === "Today" && i === 0 && "bg-muted"
                  )}
                >
                  {c}
                </a>
              ))}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
