"use client"

import * as React from "react"
import {
  ChevronDown as ChevronDownIcon,
  ThumbsDown as ThumbsDownIcon,
  ThumbsUp as ThumbsUpIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"

const answers = [
  {
    value: "late",
    q: "My template sale payout is late. What should I do?",
    a: "Payouts can take up to 3 business days after the scheduled date. Check your bank details under Settings, Payouts.",
  },
  {
    value: "fees",
    q: "What fees are deducted?",
    a: "Designali deducts a 2.9% processing fee plus 30 cents per sale before each payout.",
  },
  {
    value: "currency",
    q: "Can I be paid in another currency?",
    a: "You can add up to three payout currencies. Conversion uses the mid-market rate on the payout date.",
  },
]

export default function AccordionHelpfulFeedback() {
  const [votes, setVotes] = React.useState<Record<string, "up" | "down">>({})

  return (
    <Accordion defaultValue={["late"]} className="w-full max-w-md border px-3">
      {answers.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>
            {item.q}
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent className="space-y-3">
            <p className="text-muted-foreground">{item.a}</p>
            <div className="flex items-center gap-2 border-t pt-2">
              {votes[item.value] ? (
                <span className="text-muted-foreground">
                  Thanks for your feedback.
                </span>
              ) : (
                <>
                  <span className="text-muted-foreground">
                    Was this helpful?
                  </span>
                  <Button
                    size="icon-xs"
                    variant="outline"
                    aria-label="Yes"
                    onClick={() =>
                      setVotes((v) => ({ ...v, [item.value]: "up" }))
                    }
                  >
                    <ThumbsUpIcon />
                  </Button>
                  <Button
                    size="icon-xs"
                    variant="outline"
                    aria-label="No"
                    onClick={() =>
                      setVotes((v) => ({ ...v, [item.value]: "down" }))
                    }
                  >
                    <ThumbsDownIcon />
                  </Button>
                </>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
