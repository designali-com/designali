import { InfoIcon } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const kpis = [
  {
    label: "Activation",
    value: "62%",
    help: "Signed-up users who created a first project within 7 days.",
  },
  {
    label: "Net revenue",
    value: "$84.1k",
    help: "Gross revenue minus refunds and chargebacks, this month.",
  },
]

export default function KpiDefinitionTooltip() {
  return (
    <TooltipProvider>
      <div className="grid w-full max-w-md grid-cols-2 gap-3">
        {kpis.map((k) => (
          <div key={k.label} className="flex flex-col gap-1 border p-3">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              {k.label}
              <Tooltip>
                <TooltipTrigger
                  render={
                    <button type="button" aria-label={"Define " + k.label} />
                  }
                >
                  <InfoIcon className="size-3" />
                </TooltipTrigger>
                <TooltipContent className="max-w-52">{k.help}</TooltipContent>
              </Tooltip>
            </div>
            <span className="text-xl font-semibold">{k.value}</span>
          </div>
        ))}
      </div>
    </TooltipProvider>
  )
}
