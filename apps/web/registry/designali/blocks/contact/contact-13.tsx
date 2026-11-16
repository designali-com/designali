"use client"

import { useState } from "react"
import {
  SendHorizontal,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

type Message = { from: "bot" | "user"; text: string }

const flow = [
  {
    question: "Hi there! I'm Ali's assistant at Designali. What are you hoping to build?",
    options: ["Brand identity", "Website", "UI/UX design", "Something custom"],
  },
  {
    question: "Lovely. Roughly what is your budget?",
    options: ["Under $2k", "$2k - $5k", "$5k - $15k", "$15k+"],
  },
  {
    question: "And when do you need it live?",
    options: ["This week", "Within 2 weeks", "Next month", "Flexible"],
  },
]

export default function Contact13() {
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: flow[0]!.question },
  ])
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState("")

  function answer(option: string) {
    const next = step + 1
    const reply: Message[] = [{ from: "user", text: option }]
    if (flow[next]) reply.push({ from: "bot", text: flow[next].question })
    else
      reply.push({
        from: "bot",
        text: "Perfect. Where should I send your quote? Ali Imam checks it before it goes out.",
      })
    setMessages((m) => [...m, ...reply])
    setStep(next)
  }

  function submit(event: React.FormEvent) {
    event.preventDefault()
    if (!email) return
    setMessages((m) => [
      ...m,
      { from: "user", text: email },
      {
        from: "bot",
        text: "Thanks! Your quote will land in your inbox within the hour.",
      },
    ])
    setEmail("")
    setStep(flow.length + 1)
  }

  const options = flow[step]?.options

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Instant quote
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Three questions. One honest price.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Answer a few quick prompts and we&apos;ll put together a Designali
            quote with scope, timeline and deliverables included.
          </p>
        </div>

        <div className="flex h-[520px] flex-col border bg-card">
          <div className="flex items-center gap-3 border-b px-5 py-4">
            <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-chart-1 to-primary text-xs font-semibold text-black/80">
              P
            </span>
            <div className="text-sm">
              <p className="font-medium">Designali</p>
              <p className="text-xs text-muted-foreground">Ali&apos;s assistant &middot; online</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col-reverse overflow-y-auto p-5">
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex",
                    message.from === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <p
                    className={cn(
                      "max-w-[80%] px-4 py-2.5 text-sm",
                      message.from === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    {message.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t p-4">
            {options ? (
              <div className="flex flex-wrap gap-2">
                {options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => answer(option)}
                    className="border px-3 py-2 text-sm transition-colors hover:border-foreground hover:bg-muted"
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : step === flow.length ? (
              <form onSubmit={submit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="h-10 min-w-0 flex-1 border bg-background px-3 text-sm outline-none focus:border-ring"
                />
                <button
                  type="submit"
                  aria-label="Send"
                  className="flex size-10 items-center justify-center bg-primary text-primary-foreground"
                >
                  <SendHorizontal className="size-4" />
                </button>
              </form>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setMessages([{ from: "bot", text: flow[0]!.question }])
                  setStep(0)
                }}
                className="text-sm text-muted-foreground underline underline-offset-4"
              >
                Start a new quote
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
