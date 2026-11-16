"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronsDownUp,
  ChevronsUpDown,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"

const faqs = [
  {
    q: "How fast is shipping?",
    a: "Orders placed before 2pm ship the same day. Standard delivery takes two to four working days; express arrives next day.",
  },
  {
    q: "Do you ship internationally?",
    a: "We ship to 34 countries. Duties and taxes are calculated at checkout, so there are no surprise fees on delivery.",
  },
  {
    q: "What is your return policy?",
    a: "Return unworn items within 60 days for a full refund. Print the prepaid label from your order page and drop it at any parcel point.",
  },
  {
    q: "How do I find my size?",
    a: "Each product page has a size guide with measurements in centimetres and inches. If you're between sizes, we suggest sizing up.",
  },
  {
    q: "Are your fabrics sustainable?",
    a: "Over 90% of our range uses organic cotton, recycled wool or European linen. Each product lists its exact materials and factory.",
  },
  {
    q: "Can I change or cancel my order?",
    a: "You have one hour after ordering to edit the address or cancel. After that, the order is packed and you can return it once it arrives.",
  },
  {
    q: "Do you offer gift wrapping?",
    a: "Add gift wrap at checkout for $4. We include a handwritten note and leave prices off the packing slip.",
  },
  {
    q: "How do I care for merino wool?",
    a: "Wash cold on a wool cycle or by hand and dry flat. Merino resists odour, so it rarely needs washing after every wear.",
  },
]

const allValues = faqs.map((_, index) => index)

export default function Faqs19() {
  const [open, setOpen] = useState<number[]>([0])
  const allOpen = open.length === faqs.length

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Shipping &amp; returns
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {faqs.length} questions &middot; {open.length} open
            </p>
          </div>
          <Button
            variant="outline"
            size="md"
            className="self-start sm:self-auto"
            onClick={() => setOpen(allOpen ? [] : allValues)}
          >
            {allOpen ? (
              <ChevronsDownUp data-icon="inline-start" />
            ) : (
              <ChevronsUpDown data-icon="inline-start" />
            )}
            {allOpen ? "Collapse all" : "Expand all"}
          </Button>
        </div>
        <Accordion
          multiple
          value={open}
          onValueChange={(value) => setOpen(value as number[])}
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.q}
              value={index}
              className="border-b border-border"
            >
              <AccordionTrigger className="group items-center gap-3 py-3.5 text-sm font-medium hover:no-underline">
                <ChevronDown className="size-4 shrink-0 -rotate-90 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-0" />
                <span className="flex-1">{faq.q}</span>
              </AccordionTrigger>
              <AccordionContent className="ps-7 pb-4 text-sm leading-6 text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-6 text-sm text-muted-foreground">
          Need help with an order?{" "}
          <a href="#" className="text-foreground underline underline-offset-4">
            Contact our care team
          </a>
        </p>
      </div>
    </section>
  )
}
