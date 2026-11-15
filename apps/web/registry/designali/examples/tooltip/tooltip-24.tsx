import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const terms: Record<string, string> = {
  MRR: "Monthly recurring revenue: predictable revenue normalized to one month.",
  churn: "The share of customers who cancel within a period.",
  LTV: "Lifetime value: expected revenue from a customer over the relationship.",
}

function Term({ id }: { id: string }) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <abbr
            tabIndex={0}
            className="cursor-help text-foreground [text-decoration-line:underline] no-underline decoration-dotted underline-offset-4"
          />
        }
      >
        {id}
      </TooltipTrigger>
      <TooltipContent className="max-w-56">{terms[id]}</TooltipContent>
    </Tooltip>
  )
}

export default function GlossaryTermTooltips() {
  return (
    <TooltipProvider>
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
        Our <Term id="MRR" /> grew 14% this quarter while <Term id="churn" />{" "}
        held at 2.1%, pushing average <Term id="LTV" /> above $4,800.
      </p>
    </TooltipProvider>
  )
}
