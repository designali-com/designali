import { ArrowRightIcon } from "lucide-react"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const terms = {
  mrr: {
    term: "MRR",
    definition:
      "Monthly recurring revenue: the predictable revenue from all active subscriptions in a month.",
  },
  churn: {
    term: "Churn rate",
    definition:
      "The percentage of customers who cancel during a period, divided by customers at the start.",
  },
}

export default function GlossaryTermHoverCard() {
  return (
    <p className="max-w-sm text-sm leading-relaxed">
      Your{" "}
      <HoverCard>
        <HoverCardTrigger
          render={
            <span className="cursor-help underline decoration-dotted underline-offset-4" />
          }
        >
          {terms.mrr.term}
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="font-medium">{terms.mrr.term}</p>
          <p className="text-muted-foreground">{terms.mrr.definition}</p>
        </HoverCardContent>
      </HoverCard>{" "}
      grew 8% this month while{" "}
      <HoverCard>
        <HoverCardTrigger
          render={
            <span className="cursor-help underline decoration-dotted underline-offset-4" />
          }
        >
          {terms.churn.term.toLowerCase()}
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="font-medium">{terms.churn.term}</p>
          <p className="text-muted-foreground">{terms.churn.definition}</p>
          <a
            href="#"
            className="mt-2 inline-flex items-center gap-1 font-medium hover:underline"
          >
            Read the metrics guide
            <ArrowRightIcon className="size-3" />
          </a>
        </HoverCardContent>
      </HoverCard>{" "}
      held steady at 2.1%.
    </p>
  )
}
