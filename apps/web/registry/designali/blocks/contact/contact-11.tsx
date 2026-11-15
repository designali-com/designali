import { ArrowRight, Plus } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"

const faqs = [
  {
    q: "How quickly will I hear back?",
    a: "Weekdays we reply within four working hours. Messages sent on the weekend are answered first thing Monday, Lisbon time.",
  },
  {
    q: "Can I change or cancel a booking?",
    a: "Yes. Changes are free up to 72 hours before your stay. Use the link in your confirmation email or reply to it and we'll handle it.",
  },
  {
    q: "Do you host group retreats?",
    a: "Our two farmhouses sleep up to 28 guests combined. Mention dates and group size in the form and we'll send a custom quote.",
  },
  {
    q: "Is there parking and EV charging?",
    a: "Free on-site parking for 14 cars and two 22kW chargers. Let us know your arrival time so we can reserve one.",
  },
]

export default function Contact11() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Before you write
          </h2>
          <p className="mt-4 text-muted-foreground">
            Most questions about Quinta do Sobreiro are answered here.
          </p>
          <Accordion className="mt-10 border-t" defaultValue={[0]}>
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={index} className="border-b">
                <AccordionTrigger className="items-center py-5 text-base hover:no-underline">
                  {faq.q}
                  <Plus className="ms-4 size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="border bg-muted/40 p-8 md:p-10 lg:self-start">
          <p className="text-sm font-medium">Still need help?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Send us a note and Inês from the guest team will get back to you.
          </p>
          <form className="mt-8 space-y-3">
            <Input placeholder="Name" className="h-11 bg-background" />
            <Input type="email" placeholder="Email" className="h-11 bg-background" />
            <div className="grid grid-cols-2 gap-3">
              <Input type="date" aria-label="Check-in" className="h-11 bg-background" />
              <Input type="date" aria-label="Check-out" className="h-11 bg-background" />
            </div>
            <Textarea placeholder="Your question" className="min-h-32 bg-background" />
            <Button type="submit" size="lg" className="w-full">
              Send question
              <ArrowRight />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
