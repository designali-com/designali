"use client"

import { ChevronDown } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const categories = [
  {
    id: "general",
    label: "General",
    items: [
      {
        q: "What exactly do I get?",
        a: "A library of production-ready React blocks, a matching Figma file and a CLI that copies any block straight into your project with its dependencies.",
      },
      {
        q: "Which frameworks are supported?",
        a: "Blocks are written for React 19 with Tailwind CSS v4. They work in Next.js, Remix, Vite and Astro with the React integration.",
      },
      {
        q: "Do I need to credit you?",
        a: "No attribution is required on anything you build. We only ask that you don't redistribute the source as a competing kit.",
      },
    ],
  },
  {
    id: "billing",
    label: "Billing",
    items: [
      {
        q: "Which payment methods do you accept?",
        a: "All major cards, Apple Pay and Google Pay. Annual Business plans can also pay by bank transfer against an invoice with 30-day terms.",
      },
      {
        q: "Can I get a VAT invoice?",
        a: "Yes. Add your company name and VAT ID under Billing and every future invoice will include them. Past invoices can be reissued on request.",
      },
      {
        q: "What happens when my trial ends?",
        a: "Your workspace switches to the free plan. Nothing is deleted, and you can upgrade later to unlock everything again.",
      },
    ],
  },
  {
    id: "technical",
    label: "Technical",
    items: [
      {
        q: "How do updates reach my code?",
        a: "Blocks are copied into your repo, so you own them. Run the CLI diff command to see upstream changes and pull in only what you want.",
      },
      {
        q: "Are the blocks accessible?",
        a: "Every interactive block is keyboard navigable, tested with VoiceOver and NVDA, and meets WCAG 2.2 AA contrast in light and dark themes.",
      },
      {
        q: "Can I use my own design tokens?",
        a: "Yes. Blocks only reference semantic tokens like background and primary, so changing your theme file restyles every block at once.",
      },
    ],
  },
]

export default function Faqs08() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Frequently asked questions
        </h2>
        <Tabs defaultValue="general" className="mt-8 gap-0">
          <TabsList variant="line" className="h-10 w-full justify-start border-b border-border">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex-none px-4 text-sm"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-4">
              <Accordion defaultValue={[0]}>
                {category.items.map((item, index) => (
                  <AccordionItem
                    key={item.q}
                    value={index}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="group items-center py-5 text-base font-medium hover:no-underline">
                      {item.q}
                      <ChevronDown className="ms-4 size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-6 text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
