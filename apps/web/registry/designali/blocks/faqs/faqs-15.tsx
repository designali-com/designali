"use client"

import { useState } from "react"
import { CircleCheck, Clock, Plus, Send } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"

const faqs = [
  {
    q: "Do I need special hardware to use Tidepool?",
    a: "No. Tidepool runs in any modern browser and on iOS and Android. If you want to scan receipts in bulk, any document scanner that saves to PDF will work.",
  },
  {
    q: "Can I try it before committing?",
    a: "Every account starts with a 21-day trial of the Team plan. You can invite up to ten people during the trial and keep all your data when you choose a plan.",
  },
  {
    q: "How are seats counted?",
    a: "You pay for members who submit or approve expenses. Finance admins who only export reports and view dashboards are free.",
  },
  {
    q: "What happens to my data if I leave?",
    a: "You can export everything as CSV and PDF at any time. After cancelling, we keep your workspace for 60 days in case you change your mind, then delete it permanently.",
  },
  {
    q: "Do you offer discounts for nonprofits?",
    a: "Registered charities and schools get 40% off any annual plan. Send us your registration number and we will apply it to your next invoice.",
  },
]

export default function Faqs15() {
  const [sent, setSent] = useState(false)

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div>
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Support
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Frequently asked questions
          </h2>
          <Accordion defaultValue={[0]} className="mt-10 border-t border-border">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.q}
                value={index}
                className="border-b border-border"
              >
                <AccordionTrigger className="group items-center gap-4 py-5 text-sm font-medium hover:no-underline md:text-base">
                  <span className="flex-1">{faq.q}</span>
                  <Plus className="size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-6 text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="border border-border bg-card p-6 md:p-8 lg:self-start">
          {sent ? (
            <div className="flex flex-col items-center py-12 text-center">
              <CircleCheck className="size-10 text-muted-foreground" />
              <h3 className="mt-5 text-lg font-medium">Question received</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                Thanks for reaching out. Someone from our team will reply by
                email within one working day.
              </p>
              <Button
                variant="outline"
                size="md"
                className="mt-6"
                onClick={() => setSent(false)}
              >
                Ask another question
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                setSent(true)
              }}
            >
              <h3 className="text-lg font-medium">Ask us a question</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Didn&apos;t find what you need? Send it straight to our team.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="faqs-15-name" className="text-sm">
                    Name
                  </Label>
                  <Input
                    id="faqs-15-name"
                    required
                    placeholder="Jordan Ellis"
                    className="h-10 text-sm md:text-sm"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="faqs-15-email" className="text-sm">
                    Work email
                  </Label>
                  <Input
                    id="faqs-15-email"
                    type="email"
                    required
                    placeholder="jordan@company.com"
                    className="h-10 text-sm md:text-sm"
                  />
                </div>
              </div>
              <div className="mt-4 grid gap-2">
                <Label htmlFor="faqs-15-question" className="text-sm">
                  Your question
                </Label>
                <Textarea
                  id="faqs-15-question"
                  required
                  rows={5}
                  placeholder="Can we route approvals differently for each department?"
                  className="min-h-32 text-sm md:text-sm"
                />
              </div>
              <Button type="submit" className="mt-6 w-full">
                <Send data-icon="inline-start" />
                Send question
              </Button>
              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Clock className="size-3.5" />
                Average reply time: 3 hours
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
