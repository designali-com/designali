"use client"

import { useState } from "react"
import { Eye, Heart, Send, Share2, Signal } from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

type Msg = { user: string; text: string; color: string; host?: boolean }

const initial: Msg[] = [
  {
    user: "tomasz_b",
    text: "audio is crisp today",
    color: "text-primary dark:text-primary",
  },
  {
    user: "hana.k",
    text: "will the template be shared after?",
    color: "text-primary dark:text-primary",
  },
  {
    user: "Designali",
    text: "Yes! The template link goes out to everyone at the end.",
    color: "text-foreground",
    host: true,
  },
  {
    user: "ravi_codes",
    text: "joining from Pune, morning all",
    color: "text-primary dark:text-primary",
  },
  {
    user: "mel_w",
    text: "can you zoom in on the config panel?",
    color: "text-primary dark:text-primary",
  },
  {
    user: "oskar",
    text: "that keyboard shortcut just saved me an hour",
    color: "text-primary dark:text-primary",
  },
]

export default function Media10() {
  const [messages, setMessages] = useState(initial)
  const [draft, setDraft] = useState("")
  const [hearts, setHearts] = useState(2381)

  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 lg:grid-cols-[1fr_340px]">
        <div className="min-w-0">
          <div className="relative aspect-video w-full overflow-hidden border border-border bg-black">
            <img
              src="/img/dashboard-1-dark.jpg"
              alt="Ali Imam sharing his screen on Designali Live"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="flex items-center gap-1.5 bg-destructive px-2 py-0.5 text-xs font-semibold text-white">
                <span className="size-1.5 animate-pulse rounded-full bg-white" />{" "}
                LIVE
              </span>
              <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 text-xs text-white backdrop-blur">
                <Eye className="size-3" /> 4,912
              </span>
            </div>
            <span className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 px-2 py-0.5 text-xs text-white backdrop-blur">
              <Signal className="size-3" /> 1080p
            </span>
            <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-2 text-white backdrop-blur">
              <p className="text-xs text-white/70">Now presenting</p>
              <p className="text-sm font-medium">
                Ali Imam - Building a design system in a weekend
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
                DA
              </span>
              <div>
                <p className="font-medium">Designali Live</p>
                <p className="text-xs text-muted-foreground">
                  Started 42 minutes ago - 38.1k followers
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setHearts((h) => h + 1)}>
                <Heart className="text-primary" /> {hearts.toLocaleString()}
              </Button>
              <Button variant="outline">
                <Share2 /> Share
              </Button>
              <Button>Follow</Button>
            </div>
          </div>
        </div>
        <aside className="flex h-[480px] flex-col border border-border lg:h-auto">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="text-sm font-medium">Live chat</p>
            <span className="text-xs text-muted-foreground">
              {messages.length + 812} messages
            </span>
          </div>
          <ul className="flex flex-1 flex-col-reverse gap-3 overflow-y-auto p-4 text-sm">
            {[...messages].reverse().map((m, i) => (
              <li key={messages.length - i} className="break-words">
                <span className={`font-medium ${m.color}`}>{m.user}</span>
                {m.host && (
                  <span className="ml-1.5 bg-foreground px-1 py-px text-[10px] font-semibold text-background uppercase">
                    Host
                  </span>
                )}
                <span className="ml-1.5 text-muted-foreground">{m.text}</span>
              </li>
            ))}
          </ul>
          <form
            className="flex gap-2 border-t border-border p-3"
            onSubmit={(e) => {
              e.preventDefault()
              if (!draft.trim()) return
              setMessages((ms) => [
                ...ms,
                { user: "you", text: draft.trim(), color: "text-foreground" },
              ])
              setDraft("")
            }}
          >
            <Input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Say something..."
              aria-label="Chat message"
            />
            <Button type="submit" size="icon-lg" aria-label="Send">
              <Send />
            </Button>
          </form>
        </aside>
      </div>
    </section>
  )
}
