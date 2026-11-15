"use client"

import { Plus } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"

const faqs = [
  {
    question: "What file formats are included?",
    answer:
      "Every asset ships as Figma, SVG and PNG. Icon sets also include a React package and an icon font, and 3D files include Blender and GLB sources.",
  },
  {
    question: "Can I use the assets in client work?",
    answer:
      "Yes. The standard licence covers unlimited personal and commercial projects, including work you deliver to clients. You just can't resell the raw files.",
  },
  {
    question: "How often do you release new resources?",
    answer:
      "We publish a new collection every two weeks and update existing packs whenever a platform or design tool changes. All updates are free for members.",
  },
  {
    question: "Do I keep access if I cancel?",
    answer:
      "Anything you downloaded while subscribed stays yours forever under the same licence. You'll only lose access to new releases and the members library.",
  },
  {
    question: "Is there a team licence?",
    answer:
      "Team licences start at five seats and include shared libraries, centralised billing and priority requests for new components.",
  },
]

export default function Faqs07() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[320px_1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Licensing, files and access.
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Can&apos;t find what you&apos;re looking for? Our team usually
            replies within a few hours.
          </p>
          <Button className="mt-8" variant="outline" nativeButton={false} render={<a href="#" />}>
            Email support
          </Button>
        </div>
        <Accordion defaultValue={[0]} className="border-t border-border">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={index}
              className="border-b border-border"
            >
              <AccordionTrigger className="group items-center gap-6 py-6 text-base font-medium hover:no-underline md:text-lg">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{faq.question}</span>
                <Plus className="size-5 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-45" />
              </AccordionTrigger>
              <AccordionContent className="ps-12 pb-6 text-sm leading-6 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
