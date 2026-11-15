"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Lock } from "lucide-react"

function useClock() {
  const [now, setNow] = useState<Date | null>(null)
  useEffect(() => {
    const first = setTimeout(() => setNow(new Date()), 0)
    const timer = setInterval(() => setNow(new Date()), 30000)
    return () => {
      clearTimeout(first)
      clearInterval(timer)
    }
  }, [])
  return now
}

export default function Authentication14() {
  const now = useClock()
  const [password, setPassword] = useState("")

  const time = now ? now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "--:--"
  const date = now ? now.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" }) : ""

  return (
    <section className="relative flex min-h-[680px] w-full flex-col items-center justify-between overflow-hidden bg-zinc-950 px-6 py-14 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.35),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.25),transparent_45%)]"
      />
      <div className="relative text-center">
        <p className="text-6xl font-light tracking-tight tabular-nums md:text-7xl">{time}</p>
        <p className="mt-2 text-sm text-white/60">{date}</p>
      </div>

      <form className="relative flex w-full max-w-xs flex-col items-center" onSubmit={(event) => event.preventDefault()}>
        <span className="flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-rose-500 text-2xl font-semibold text-zinc-950 ring-4 ring-white/10">
          KO
        </span>
        <p className="mt-4 text-lg font-medium">Kofi Owusu</p>
        <p className="flex items-center gap-1.5 text-xs text-white/60">
          <Lock className="size-3" />
          Locked after 15 minutes of inactivity
        </p>
        <label className="mt-6 flex h-11 w-full items-center border border-white/20 bg-white/10 backdrop-blur focus-within:border-white/50">
          <span className="sr-only">Password</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
            className="h-full w-full bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/40"
          />
          <button
            type="submit"
            aria-label="Unlock"
            disabled={!password}
            className="flex size-11 shrink-0 items-center justify-center border-s border-white/20 transition-colors hover:bg-white/10 disabled:opacity-40"
          >
            <ArrowRight className="size-4" />
          </button>
        </label>
        <p className="mt-3 text-xs text-white/50">Your unsaved drafts in Ledgerline are kept while locked.</p>
      </form>

      <div className="relative flex gap-6 text-xs text-white/60">
        <a href="#" className="hover:text-white">Switch user</a>
        <a href="#" className="hover:text-white">Sign out</a>
        <a href="#" className="hover:text-white">Forgot password</a>
      </div>
    </section>
  )
}
