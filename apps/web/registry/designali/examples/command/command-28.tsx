import { ExternalLinkIcon, FileQuestionIcon, LifeBuoyIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

const topics = [
  {
    topic: "Account",
    articles: [
      "Change your email address",
      "Enable two-step verification",
      "Delete your account",
    ],
  },
  {
    topic: "Billing",
    articles: [
      "Update a payment method",
      "Download past invoices",
      "Request a refund",
    ],
  },
]

export default function HelpCenterSearch() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex flex-col gap-0.5">
        <h3 className="text-sm font-semibold">How can we help?</h3>
        <p className="text-xs text-muted-foreground">
          Search 120+ articles from our help center.
        </p>
      </div>
      <Command className="border">
        <CommandInput placeholder="Describe your issue..." />
        <CommandList>
          <CommandEmpty className="flex flex-col items-center gap-2 py-5">
            <LifeBuoyIcon className="size-5 text-muted-foreground" />
            Can&apos;t find an answer?
            <Button size="sm" variant="outline">
              Contact support
            </Button>
          </CommandEmpty>
          {topics.map((t) => (
            <CommandGroup key={t.topic} heading={t.topic}>
              {t.articles.map((article) => (
                <CommandItem key={article}>
                  <FileQuestionIcon />
                  <span>{article}</span>
                  <ExternalLinkIcon className="ms-auto opacity-50" />
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </div>
  )
}
