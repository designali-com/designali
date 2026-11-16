import {
  ArrowRight,
  Plus,
} from "@designali/icons"

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
    a: "Weekdays Ali Imam replies within four working hours. Messages sent on the weekend are answered first thing Monday.",
  },
  {
    q: "Can I change the scope of a project?",
    a: "Yes. Scope changes are free before design starts. Reply to your project email and we'll update the plan and quote.",
  },
  {
    q: "Do you work with agencies and studios?",
    a: "Designali offers white-label brand identity, UI/UX, CGI, motion and Next.js builds. Mention your timeline in the form and we'll send a custom quote.",
  },
  {
    q: "Can I use Designali templates and blocks for client work?",
    a: "Yes. Templates, blocks and @designali/icons can be used in client projects. See /docs/legal/terms for the full license.",
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
            Most questions about working with Designali are answered here.
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
            Send us a note and Ali Imam will get back to you.
          </p>
          <form className="mt-8 space-y-3">
            <Input placeholder="Name" className="h-11 bg-background" />
            <Input type="email" placeholder="Email" className="h-11 bg-background" />
            <div className="grid grid-cols-2 gap-3">
              <Input type="date" aria-label="Project start" className="h-11 bg-background" />
              <Input type="date" aria-label="Launch date" className="h-11 bg-background" />
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
