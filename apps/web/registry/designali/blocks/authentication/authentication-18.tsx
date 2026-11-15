"use client"

import { useState } from "react"
import { Fingerprint, Globe, KeyRound, Laptop, ShieldCheck, Smartphone, Tablet } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Switch } from "@workspace/ui/components/switch"

const initialSessions = [
  { id: 1, icon: Laptop, device: "Chrome on macOS", location: "Toronto, CA", ip: "142.112.8.20", seen: "Active now", current: true },
  { id: 2, icon: Smartphone, device: "Brindle app on iPhone", location: "Toronto, CA", ip: "142.112.8.41", seen: "2 hours ago", current: false },
  { id: 3, icon: Tablet, device: "Safari on iPad", location: "Montreal, CA", ip: "70.81.3.112", seen: "4 days ago", current: false },
  { id: 4, icon: Globe, device: "Firefox on Windows", location: "Lisbon, PT", ip: "85.240.19.7", seen: "12 days ago", current: false },
]

export default function Authentication18() {
  const [sessions, setSessions] = useState(initialSessions)
  const [twoFactor, setTwoFactor] = useState(true)
  const [alerts, setAlerts] = useState(true)

  const others = sessions.filter((session) => !session.current).length

  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-2 border-b pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Settings / Security</p>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight">Sign-in and security</h2>
          </div>
          <p className="flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-400">
            <ShieldCheck className="size-4" />
            Security checkup complete
          </p>
        </div>

        <div className="grid gap-px border-b bg-border sm:grid-cols-3">
          {[
            { icon: KeyRound, title: "Password", value: "Changed 3 months ago", action: "Change" },
            { icon: Fingerprint, title: "Passkeys", value: "2 registered", action: "Manage" },
            { icon: ShieldCheck, title: "Recovery codes", value: "8 of 10 remaining", action: "View" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 bg-background py-6 sm:px-6 sm:first:ps-0">
              <item.icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </div>
              <a href="#" className="text-sm underline underline-offset-4">{item.action}</a>
            </div>
          ))}
        </div>

        <div className="divide-y border-b">
          <label className="flex items-center justify-between gap-6 py-5">
            <span>
              <span className="block text-sm font-medium">Require two-factor authentication</span>
              <span className="block text-sm text-muted-foreground">Ask for an authenticator code on new devices.</span>
            </span>
            <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
          </label>
          <label className="flex items-center justify-between gap-6 py-5">
            <span>
              <span className="block text-sm font-medium">Email me about new sign-ins</span>
              <span className="block text-sm text-muted-foreground">Get an alert when a device we don&apos;t recognize signs in.</span>
            </span>
            <Switch checked={alerts} onCheckedChange={setAlerts} />
          </label>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-medium">Where you&apos;re signed in</h3>
            <p className="text-sm text-muted-foreground">{sessions.length} active sessions</p>
          </div>
          <Button
            variant="outline"
            disabled={others === 0}
            onClick={() => setSessions(sessions.filter((session) => session.current))}
          >
            Sign out of {others} other {others === 1 ? "session" : "sessions"}
          </Button>
        </div>

        <div className="mt-4 overflow-x-auto border">
          <table className="w-full min-w-[560px] text-sm">
            <thead className="bg-muted/50 text-start text-xs text-muted-foreground">
              <tr>
                <th className="p-3 text-start font-medium">Device</th>
                <th className="p-3 text-start font-medium">Location</th>
                <th className="p-3 text-start font-medium">Last active</th>
                <th className="p-3" />
              </tr>
            </thead>
            <tbody className="divide-y">
              {sessions.map((session) => (
                <tr key={session.id}>
                  <td className="p-3">
                    <span className="flex items-center gap-3">
                      <session.icon className="size-4 text-muted-foreground" />
                      <span>
                        {session.device}
                        {session.current && (
                          <span className="ms-2 border px-1.5 text-[10px] text-muted-foreground uppercase">This device</span>
                        )}
                      </span>
                    </span>
                  </td>
                  <td className="p-3 text-muted-foreground">
                    {session.location}
                    <span className="block font-mono text-xs">{session.ip}</span>
                  </td>
                  <td className="p-3 text-muted-foreground">{session.seen}</td>
                  <td className="p-3 text-end">
                    {!session.current && (
                      <button
                        type="button"
                        onClick={() => setSessions(sessions.filter((item) => item.id !== session.id))}
                        className="text-sm text-red-600 hover:underline dark:text-red-400"
                      >
                        Revoke
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
