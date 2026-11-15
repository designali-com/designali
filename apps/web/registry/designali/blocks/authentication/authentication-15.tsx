"use client"

import { useState } from "react"
import { ArrowLeft, ChevronDown, MessageSquare, Phone } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

const countries = [
  { code: "US", dial: "+1", flag: "US" },
  { code: "GB", dial: "+44", flag: "GB" },
  { code: "IN", dial: "+91", flag: "IN" },
  { code: "BR", dial: "+55", flag: "BR" },
  { code: "NG", dial: "+234", flag: "NG" },
  { code: "DE", dial: "+49", flag: "DE" },
]

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10)
  const parts = [digits.slice(0, 3), digits.slice(3, 6), digits.slice(6)]
  return parts.filter(Boolean).join(" ")
}

export default function Authentication15() {
  const [country, setCountry] = useState(countries[0])
  const [phone, setPhone] = useState("")
  const [sent, setSent] = useState(false)
  const [code, setCode] = useState("")

  const valid = phone.replace(/\D/g, "").length >= 9

  return (
    <section className="w-full bg-background">
      <div className="mx-auto grid min-h-[640px] max-w-6xl md:grid-cols-2">
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-lime-300 via-emerald-400 to-teal-600 md:block">
          <div className="absolute inset-x-12 top-16 bottom-0 border-8 border-b-0 border-zinc-950 bg-white p-5 text-zinc-950">
            <p className="text-xs text-zinc-500">Messages &middot; now</p>
            <div className="mt-4 max-w-[85%] bg-zinc-100 p-3 text-sm">
              Your Sprout code is <span className="font-mono font-semibold">482 913</span>. It expires in 5 minutes. Don&apos;t share it with anyone.
            </div>
            <div className="mt-3 max-w-[60%] bg-zinc-100 p-3 text-sm">Sprout will never call you for this code.</div>
          </div>
        </div>

        <div className="flex items-center px-6 py-16 md:px-16">
          <div className="w-full max-w-sm space-y-8">
            {!sent ? (
              <form
                className="space-y-6"
                onSubmit={(event) => {
                  event.preventDefault()
                  if (valid) setSent(true)
                }}
              >
                <Phone className="size-6" />
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight">Sign in with your phone</h2>
                  <p className="mt-2 text-sm text-muted-foreground">We&apos;ll text you a one-time code. No password needed.</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="auth-15-phone">Mobile number</Label>
                  <div className="flex h-11 border focus-within:border-foreground">
                    <label className="relative flex shrink-0 items-center border-e">
                      <span className="sr-only">Country code</span>
                      <select
                        value={country.code}
                        onChange={(event) => setCountry(countries.find((item) => item.code === event.target.value) ?? countries[0])}
                        className="h-full appearance-none bg-transparent ps-3 pe-8 text-sm outline-none"
                      >
                        {countries.map((item) => (
                          <option key={item.code} value={item.code}>
                            {item.flag} {item.dial}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute end-2.5 size-3.5 text-muted-foreground" />
                    </label>
                    <input
                      id="auth-15-phone"
                      type="tel"
                      inputMode="tel"
                      value={phone}
                      onChange={(event) => setPhone(formatPhone(event.target.value))}
                      placeholder="415 555 0132"
                      className="w-full min-w-0 bg-transparent px-3 text-sm tabular-nums outline-none placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={!valid}>
                  <MessageSquare />
                  Text me a code
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Prefer email? <a href="#" className="text-foreground underline underline-offset-4">Use email instead</a>
                </p>
              </form>
            ) : (
              <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
                <button type="button" onClick={() => setSent(false)} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="size-4" />
                  Change number
                </button>
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight">Enter the code</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Sent to <span className="text-foreground tabular-nums">{country.dial} {phone}</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="auth-15-code">6-digit code</Label>
                  <Input
                    id="auth-15-code"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    value={code}
                    onChange={(event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 6))}
                    className="h-12 font-mono text-lg tracking-[0.4em]"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={code.length !== 6}>
                  Verify and sign in
                </Button>
                <p className="text-sm text-muted-foreground">
                  Didn&apos;t get it? <button type="button" className="text-foreground underline underline-offset-4">Resend</button> or{" "}
                  <button type="button" className="text-foreground underline underline-offset-4">call me instead</button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
