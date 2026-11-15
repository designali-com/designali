"use client"

import { useState } from "react"
import { Minus, Plus, ThumbsDown, ThumbsUp } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const faqs = [
  {
    q: "How do I connect my custom domain?",
    a: "Go to Settings, then Domains, and add your domain. Create the CNAME record we show you at your DNS provider. Most domains verify within ten minutes and SSL is issued automatically.",
  },
  {
    q: "Why is my site showing an old version?",
    a: "Published changes are cached at the edge for up to 60 seconds. If you still see an old version after that, use Purge cache from the Deployments page or check that you published to production rather than staging.",
  },
  {
    q: "Can I restore a deleted page?",
    a: "Deleted pages stay in Trash for 30 days. Open Trash from the sidebar, find the page and choose Restore. It returns with its full version history.",
  },
  {
    q: "How do I add a teammate as an editor?",
    a: "Open Members, choose Invite and pick the Editor role. Editors can change content and publish, but cannot manage billing or delete the workspace.",
  },
  {
    q: "Is there a limit on form submissions?",
    a: "Free workspaces store 100 submissions per month. Paid plans are unlimited, and you can forward every submission to email, Slack or a webhook.",
  },
]

type Vote = "up" | "down"

export default function Faqs12() {
  const [votes, setVotes] = useState<Record<number, Vote>>({})

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Troubleshooting
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Quick fixes for common issues
        </h2>
        <Accordion defaultValue={[0]} className="mt-10 gap-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.q}
              value={index}
              className="border border-border bg-card not-last:border-b"
            >
              <AccordionTrigger className="group items-center gap-4 px-5 py-4 text-sm font-medium hover:no-underline md:text-base">
                {faq.q}
                <span className="flex size-6 shrink-0 items-center justify-center border border-border">
                  <Plus className="size-3.5 group-aria-expanded/accordion-trigger:hidden" />
                  <Minus className="hidden size-3.5 group-aria-expanded/accordion-trigger:block" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5">
                <p className="text-sm leading-6 text-muted-foreground">
                  {faq.a}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
                  {votes[index] ? (
                    <span>
                      {votes[index] === "up"
                        ? "Thanks! Glad that helped."
                        : "Thanks. We'll improve this answer."}
                    </span>
                  ) : (
                    <>
                      <span>Was this helpful?</span>
                      {(["up", "down"] as const).map((vote) => (
                        <button
                          key={vote}
                          type="button"
                          onClick={() =>
                            setVotes((current) => ({ ...current, [index]: vote }))
                          }
                          className="flex items-center gap-1.5 border border-border px-2.5 py-1 transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {vote === "up" ? (
                            <ThumbsUp className="size-3.5" />
                          ) : (
                            <ThumbsDown className="size-3.5" />
                          )}
                          {vote === "up" ? "Yes" : "No"}
                        </button>
                      ))}
                    </>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
