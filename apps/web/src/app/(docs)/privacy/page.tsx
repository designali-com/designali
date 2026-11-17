import type { Metadata } from "next"
import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

import {
  PricingComparison,
  PricingPlans,
} from "@/src/components/pricing/pricing-plans"
import { siteConfig } from "@/src/config/site"

const title = "Pricing"
const description =
  "Simple pricing for blocks, landing pages, patterns and UI designs. Start free, upgrade when you ship."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

const stats = [
  { value: "200+", label: "Blocks" },
  { value: "100+", label: "Landing pages" },
  { value: "1,500+", label: "Patterns" },
  { value: "1,000+", label: "UI designs" },
]

const faqs = [
  {
    question: "Can I use the free resources in commercial projects?",
    answer:
      "Yes. Everything on the Free plan can be used in personal and commercial projects, including client work. You just can't resell or redistribute the resources as-is.",
  },
  {
    question: "What's the difference between Pro and Lifetime?",
    answer:
      "Pro gives you access to every premium resource while your subscription is active. Lifetime is a one-time payment that unlocks everything we have today and everything we release in the future.",
  },
  {
    question: "Do I keep using what I've already built if I cancel?",
    answer:
      "Yes. Anything you've copied or downloaded into your projects stays yours to use. Cancelling only stops access to new premium downloads and updates.",
  },
  {
    question: "How does the Team plan work?",
    answer:
      "Team includes up to 10 seats under one organization. You can invite and remove members from your dashboard at any time.",
  },
  {
    question: "Which tech stack are the components built with?",
    answer:
      "React, Next.js, Tailwind CSS and shadcn-style primitives. Every block and page is copy-paste ready and installable with the shadcn CLI.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "If something isn't right, reach out within 14 days of purchase and we'll make it right or refund you.",
  },
]

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pt-20 pb-24 md:px-8">
      <section className="flex flex-col items-center gap-5 text-center">
        <span className="border px-3 py-1 text-xs text-muted-foreground">
          Pricing
        </span>
        <h1
          className={cn(
            "max-w-3xl text-4xl tracking-tight text-balance md:text-5xl lg:text-6xl",
            "animate-in duration-500 ease-out fill-mode-backwards fade-in slide-in-from-bottom-10",
            "text-shadow-[0_0px_50px_theme(--color-foreground/.2)]"
          )}
        >
          Design faster. Ship sooner.
        </h1>
        <p className="max-w-xl text-sm text-balance text-muted-foreground md:text-base">
          {description}
        </p>
      </section>

      <section className="mt-12">
        <PricingPlans />
      </section>

      <section className="mt-16 grid grid-cols-2 border-t border-l md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border-r border-b p-6 text-center">
            <div className="text-3xl font-semibold tracking-tight">
              {stat.value}
            </div>
            <div className="mt-1 text-xs text-muted-foreground uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      <section className="mt-24">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">
          Compare plans
        </h2>
        <PricingComparison />
      </section>

      <section className="mt-24 grid gap-10 md:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Can&apos;t find what you&apos;re looking for? Reach out and
            we&apos;ll get back to you.
          </p>
        </div>
        <Accordion className="border-t">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question} className="border-b">
              <AccordionTrigger className="py-4 text-sm">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mt-24 flex flex-col items-center gap-5 border p-10 text-center md:p-16">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance">
          Need something custom?
        </h2>
        <p className="max-w-lg text-sm text-muted-foreground">
          {siteConfig.name} also designs and builds brands, websites and
          products end-to-end. Tell us what you&apos;re working on.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            size="lg"
            render={
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            Contact us
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/blocks" />}>
            Browse free blocks
          </Button>
        </div>
      </section>
    </div>
  )
}
