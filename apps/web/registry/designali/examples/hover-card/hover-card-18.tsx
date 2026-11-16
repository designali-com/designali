import {
  Info as InfoIcon,
} from "@designali/icons"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

import { CounterNumber } from "@/registry/designali/ui/counter-number"

export default function MetricDefinitionHoverCard() {
  return (
    <div className="w-full max-w-xs border p-4">
      <HoverCard>
        <HoverCardTrigger
          render={
            <span className="inline-flex cursor-help items-center gap-1 text-sm text-muted-foreground" />
          }
        >
          Net revenue retention
          <InfoIcon className="size-3.5" />
        </HoverCardTrigger>
        <HoverCardContent align="start" className="flex w-72 flex-col gap-2">
          <p className="font-medium">How it&apos;s calculated</p>
          <code className="bg-muted px-2 py-1.5 font-mono">
            (Start MRR + expansion − contraction − churn) ÷ Start MRR
          </code>
          <p className="text-muted-foreground">
            Measured over the trailing 12 months for cohorts that started before
            March.
          </p>
        </HoverCardContent>
      </HoverCard>
      <p className="mt-1">
        <CounterNumber value={112} suffix="%" size="lg" className="font-semibold tracking-normal" />
      </p>
      <p className="text-xs text-primary">+4 pts vs last quarter</p>
    </div>
  )
}
