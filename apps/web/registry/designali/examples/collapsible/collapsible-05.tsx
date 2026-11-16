import {
  Plus as PlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const faqs = [
  {
    q: "When will I be charged?",
    a: "Your card is charged on the first day of each billing cycle. Annual plans renew on the anniversary of your sign-up date.",
  },
  {
    q: "Can I switch plans mid-cycle?",
    a: "Yes. Upgrades take effect immediately and are prorated. Downgrades apply at the start of your next cycle.",
  },
  {
    q: "Do you offer refunds?",
    a: "We refund annual plans within 14 days of purchase. Monthly plans can be cancelled at any time.",
  },
]

export default function BillingFaqList() {
  return (
    <div className="w-full max-w-md divide-y border">
      {faqs.map((faq) => (
        <Collapsible key={faq.q}>
          <CollapsibleTrigger
            render={
              <Button
                variant="ghost"
                className="h-auto w-full justify-between px-4 py-3 text-left whitespace-normal"
              >
                {faq.q}
                <PlusIcon className="transition-transform group-data-panel-open/button:rotate-45" />
              </Button>
            }
          />
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <p className="px-4 pb-4 text-sm text-muted-foreground">{faq.a}</p>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}
