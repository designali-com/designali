"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is Designali and who is it for?",
    answer:
      "Designali is a design and development studio by Ali Imam. Alongside client work, designali.com offers templates, 460+ blocks, 240+ landing pages and 4000+ icons for designers, developers and design engineers who want to ship polished interfaces faster.",
  },
  {
    question: "How does Designali improve my design workflow?",
    answer:
      "Every block is designed in Figma and built in Next.js, React, TypeScript and Tailwind CSS, so what you see is what you copy. Design se code tak: structured layouts, reusable components and consistent spacing without starting from a blank file.",
  },
  {
    question: "Can Designali blocks fit into my existing design system?",
    answer:
      "Yes. Blocks use semantic design tokens like background, foreground, muted and primary, so your brand colors, typography and radius carry through automatically once your tokens are set.",
  },
  {
    question: "Is it suitable for larger teams?",
    answer:
      "Absolutely. Shared components, @designali/icons and @designali/logos give designers and developers one vocabulary, which keeps handoff smooth and predictable across projects.",
  },
  {
    question: "Are the blocks responsive?",
    answer:
      "Yes. Every block is built mobile-first and tested across phone, tablet and desktop widths, with light and dark themes included.",
  },
  {
    question: "How do I get started?",
    answer:
      "Browse /blocks or /templates on designali.com, copy what you need into your project and adjust the tokens. The /docs cover installation, and hello@designali.com is always open for questions.",
  },
]

export function FAQs() {
  return (
    <div className="overflow-auto h-screen flex justify-center items-center max-w-xl mx-auto border-x px-6 py-10">
      <div className="mx-auto flex-1 flex-col gap-6 lg:flex-row">
        <div className="flex w-full flex-col gap-4 lg:flex-1 py-5">
          <h2 className="text-4xl leading-tight font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base leading-7">
            Everything about Designali blocks, templates and icons,
            <br className="hidden md:block" />
            design se code tak.
          </p>
        </div>

        <div className="w-full lg:flex-1">
          <Accordion defaultValue={["item-2"]} className="w-full rounded-sm">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="p-5 text-sm leading-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
