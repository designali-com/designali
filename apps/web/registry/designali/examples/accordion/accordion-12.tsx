import { ChevronDownIcon, ShoppingBagIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const lines = [
  { name: "Linen overshirt", meta: "Sand / M", qty: 1, price: 89 },
  { name: "Merino crew socks", meta: "Charcoal", qty: 3, price: 14 },
  { name: "Canvas tote", meta: "Natural", qty: 1, price: 24 },
]

export default function AccordionCheckoutOrderSummary() {
  const subtotal = lines.reduce((sum, line) => sum + line.qty * line.price, 0)
  const shipping = 6
  const total = subtotal + shipping

  return (
    <Accordion className="w-full max-w-sm border bg-muted/40 px-3">
      <AccordionItem value="summary">
        <AccordionTrigger className="items-center py-3">
          <span className="flex items-center gap-2">
            <ShoppingBagIcon className="size-4" />
            Show order summary
          </span>
          <span className="ms-auto me-2 text-sm font-semibold">
            ${total.toFixed(2)}
          </span>
          <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-3 border-t pt-3">
            {lines.map((line) => (
              <li key={line.name} className="flex items-center gap-3">
                <span className="relative flex size-10 shrink-0 items-center justify-center border bg-background text-[10px] text-muted-foreground">
                  {line.name.slice(0, 2).toUpperCase()}
                  <span className="absolute -end-1.5 -top-1.5 flex size-4 items-center justify-center bg-foreground text-[9px] text-background">
                    {line.qty}
                  </span>
                </span>
                <span className="flex-1">
                  <span className="block font-medium">{line.name}</span>
                  <span className="text-muted-foreground">{line.meta}</span>
                </span>
                <span>${(line.qty * line.price).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-3 space-y-1 border-t pt-3">
            <div className="flex justify-between text-muted-foreground">
              <dt>Subtotal</dt>
              <dd>${subtotal.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <dt>Shipping</dt>
              <dd>${shipping.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between text-sm font-semibold">
              <dt>Total</dt>
              <dd>${total.toFixed(2)}</dd>
            </div>
          </dl>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
