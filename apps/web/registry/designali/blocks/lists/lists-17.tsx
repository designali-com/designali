"use client"

import { useState } from "react"
import { Archive, ArrowLeft, Reply, Star } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const messages = [
  { id: 1, from: "Hana Sato", initials: "HS", hue: 330, subject: "Crit notes: onboarding v3", preview: "Overall the flow is much tighter. Three things I'd still push on...", time: "09:42", unread: true, body: ["Overall the flow is much tighter than last week. Three things I'd still push on:", "1. The workspace name step feels optional but reads as required. Let's add a 'skip' link.", "2. The invite screen needs an empty state for people joining alone.", "3. Progress dots should reflect the real number of steps, not a fixed five.", "Happy to pair on any of these this afternoon."] },
  { id: 2, from: "Billing", initials: "B", hue: 160, subject: "Your November invoice is ready", preview: "Invoice #4021 for $1,240.00 is available to download.", time: "08:15", unread: true, body: ["Invoice #4021 for $1,240.00 is now available.", "It covers 31 seats on the Team plan from Nov 1 to Nov 30, 2026. Payment will be taken from the card ending 4242 on Dec 1."] },
  { id: 3, from: "Tomás Ibarra", initials: "TI", hue: 200, subject: "Re: canvas perf regression", preview: "Bisected it to the shadow change. Fix is in #2190, needs one review.", time: "Yesterday", unread: false, body: ["Bisected it to the shadow change in 4.2.0. Every layer was re-rasterising on zoom.", "Fix is in #2190. It needs one review and I'd like it in Thursday's release."] },
  { id: 4, from: "Priya Raman", initials: "PR", hue: 270, subject: "Q1 planning doc, first draft", preview: "Shared the draft. Comments open until Friday, then we lock scope.", time: "Mon", unread: false, body: ["I've shared the first draft of the Q1 planning doc.", "Comments are open until Friday. After that we lock scope and I'll send the summary to leadership."] },
]

export default function Lists17() {
  const [activeId, setActiveId] = useState(messages[0]!.id)
  const [showDetail, setShowDetail] = useState(false)
  const active = messages.find((m) => m.id === activeId) ?? messages[0]!

  return (
    <section className="w-full bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid min-h-[520px] border border-border bg-background md:grid-cols-[340px_1fr]">
          <div className={cn("border-border md:border-r", showDetail && "hidden md:block")}>
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="font-semibold">Inbox</h2>
              <span className="font-mono text-xs text-muted-foreground">
                {messages.filter((m) => m.unread).length} unread
              </span>
            </div>
            <ul className="divide-y divide-border">
              {messages.map((message) => (
                <li key={message.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveId(message.id)
                      setShowDetail(true)
                    }}
                    className={cn(
                      "flex w-full gap-3 px-5 py-4 text-left transition-colors",
                      activeId === message.id ? "bg-muted" : "hover:bg-muted/50"
                    )}
                  >
                    <span
                      className="flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: `oklch(0.55 0.14 ${message.hue})` }}
                    >
                      {message.initials}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2">
                        <span className={cn("truncate text-sm", message.unread && "font-semibold")}>{message.from}</span>
                        <span className="shrink-0 text-[10px] text-muted-foreground">{message.time}</span>
                      </span>
                      <span className={cn("block truncate text-sm", message.unread ? "text-foreground" : "text-muted-foreground")}>
                        {message.subject}
                      </span>
                      <span className="block truncate text-xs text-muted-foreground">{message.preview}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <article className={cn("flex flex-col", !showDetail && "hidden md:flex")}>
            <header className="flex items-center justify-between gap-4 border-b border-border px-5 py-3">
              <button
                type="button"
                onClick={() => setShowDetail(false)}
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground md:invisible"
              >
                <ArrowLeft className="size-3.5" /> Back
              </button>
              <div className="flex gap-1">
                {[Star, Archive, Reply].map((Icon, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={["Star", "Archive", "Reply"][index]}
                    className="flex size-8 items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    <Icon className="size-4" />
                  </button>
                ))}
              </div>
            </header>
            <div className="flex-1 p-6 md:p-8">
              <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{active.subject}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                From <span className="text-foreground">{active.from}</span> · {active.time}
              </p>
              <div className="mt-8 max-w-prose space-y-4 text-sm leading-7">
                {active.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
