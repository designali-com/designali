"use client"

import {
  Minus,
  Plus,
} from "@designali/icons"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const faqs = [
  {
    tag: "Setup",
    q: "How long does it take to get Ledgerly running?",
    a: "Most teams connect their bank feeds and import last year's transactions in under an hour. Our setup checklist walks you through chart of accounts, tax rates and invoice branding.",
  },
  {
    tag: "Billing",
    q: "Is there a setup fee?",
    a: "No. You only pay the monthly or annual subscription.",
  },
  {
    tag: "Security",
    q: "How is my financial data protected?",
    a: "Data is encrypted at rest with AES-256 and in transit with TLS 1.3. Bank connections are read-only, and every login can be protected with passkeys or an authenticator app. We are audited for SOC 2 Type II every year.",
  },
  {
    tag: "Accountants",
    q: "Can my accountant log in?",
    a: "Yes. Invite them as an Advisor at no extra cost. They can reconcile, file returns and leave notes without seeing payroll details unless you allow it.",
  },
  {
    tag: "Billing",
    q: "Can I switch between monthly and annual?",
    a: "Any time from Settings. Moving to annual saves two months and the unused part of your monthly plan is credited automatically.",
  },
  {
    tag: "Integrations",
    q: "Which apps does Ledgerly connect to?",
    a: "Over 80 integrations including popular payment processors, payroll tools, e-commerce platforms and CRMs. You can also push data anywhere with our webhooks and REST API.",
  },
  {
    tag: "Taxes",
    q: "Does it handle sales tax in multiple regions?",
    a: "Ledgerly calculates tax per customer location, tracks thresholds for each region and prepares returns ready for review.",
  },
  {
    tag: "Setup",
    q: "Can I import from a spreadsheet?",
    a: "Upload a CSV or Excel file and map the columns once. We remember the mapping for future imports.",
  },
  {
    tag: "Support",
    q: "What kind of support do I get?",
    a: "Every plan includes chat and email support from certified bookkeepers, seven days a week. Growth plans add a quarterly review call with a dedicated specialist who checks your books for errors before tax season.",
  },
]

export default function Faqs14() {
  return (
    <section className="w-full bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Questions about Ledgerly
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Tap any card to read the answer. Open as many as you like.
          </p>
        </div>
        <div className="mt-12 gap-4 sm:columns-2 lg:columns-3">
          {faqs.map((faq, index) => (
            <Collapsible
              key={faq.q}
              defaultOpen={index === 0 || index === 2}
              className="mb-4 break-inside-avoid border border-border bg-card"
            >
              <CollapsibleTrigger className="group flex w-full items-start justify-between gap-4 p-5 text-start outline-none focus-visible:ring-1 focus-visible:ring-ring">
                <span>
                  <span className="text-[11px] tracking-[0.15em] text-muted-foreground uppercase">
                    {faq.tag}
                  </span>
                  <span className="mt-2 block text-sm font-medium md:text-base">
                    {faq.q}
                  </span>
                </span>
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center border border-border">
                  <Plus className="size-3.5 group-data-panel-open:hidden" />
                  <Minus className="hidden size-3.5 group-data-panel-open:block" />
                </span>
              </CollapsibleTrigger>
              <CollapsibleContent className="overflow-hidden">
                <p className="border-t border-border px-5 py-4 text-sm leading-6 text-muted-foreground">
                  {faq.a}
                </p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  )
}
