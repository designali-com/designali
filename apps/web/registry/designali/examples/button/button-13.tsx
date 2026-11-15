import { ArrowRightIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const plan = {
  plan: "Pro",
  price: "$24",
  note: "Per seat, billed annually",
  cta: "Start 14-day trial",
}

export default function PricingProCta() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium">{plan.plan}</span>
        <span className="text-2xl font-semibold">
          {plan.price}
          <span className="text-xs font-normal text-muted-foreground">/mo</span>
        </span>
      </div>
      <Button variant="default" className="w-full">
        {plan.cta}
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
      <p className="text-center text-xs text-muted-foreground">{plan.note}</p>
    </div>
  )
}
