import {
  Bell,
  Mail,
  MessageSquare,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"

const channels = [
  { id: "email", label: "Email", icon: Mail },
  { id: "push", label: "Push", icon: Bell },
  { id: "sms", label: "SMS", icon: MessageSquare },
]

const groups = [
  {
    title: "Activity",
    rows: [
      { id: "mentions", label: "Comments on my Designali projects", defaults: ["email", "push"] },
      { id: "assigned", label: "Design reviews from Ali Imam", defaults: ["email", "push", "sms"] },
      { id: "status", label: "Project status changes", defaults: ["push"] },
    ],
  },
  {
    title: "Workspace",
    rows: [
      { id: "invites", label: "New teammates join", defaults: ["email"] },
      { id: "billing", label: "Billing and invoices", defaults: ["email"] },
      { id: "security", label: "New sign-in from unknown device", defaults: ["email", "sms"] },
    ],
  },
  {
    title: "From Designali",
    rows: [
      { id: "product", label: "New templates and blocks", defaults: [] as string[] },
      { id: "tips", label: "Design se code tak tips", defaults: [] as string[] },
    ],
  },
]

export default function Forms18() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight">Notification preferences</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Choose where each kind of update reaches you. Security alerts by email cannot be turned off.
        </p>

        <form className="mt-10">
          <div className="border border-border">
            <div className="grid grid-cols-[1fr_repeat(3,56px)] border-b border-border bg-muted/50 text-xs font-medium sm:grid-cols-[1fr_repeat(3,96px)]">
              <div className="p-3 sm:p-4">Event</div>
              {channels.map((channel) => (
                <div key={channel.id} className="flex flex-col items-center justify-center gap-1 border-l border-border p-2 sm:flex-row sm:gap-2">
                  <channel.icon className="size-3.5 text-muted-foreground" />
                  <span className="hidden sm:inline">{channel.label}</span>
                  <span className="sr-only sm:hidden">{channel.label}</span>
                </div>
              ))}
            </div>
            {groups.map((group) => (
              <div key={group.title}>
                <div className="border-b border-border px-3 py-2 font-mono text-[10px] tracking-wider text-muted-foreground uppercase sm:px-4">
                  {group.title}
                </div>
                {group.rows.map((row) => (
                  <div
                    key={row.id}
                    className="grid grid-cols-[1fr_repeat(3,56px)] border-b border-border text-sm last:border-b-0 sm:grid-cols-[1fr_repeat(3,96px)]"
                  >
                    <div className="p-3 leading-5 sm:p-4">{row.label}</div>
                    {channels.map((channel) => {
                      const locked = row.id === "security" && channel.id === "email"
                      return (
                        <div key={channel.id} className="flex items-center justify-center border-l border-border">
                          <Checkbox
                            defaultChecked={row.defaults.includes(channel.id)}
                            disabled={locked}
                            aria-label={`${row.label} via ${channel.label}`}
                          />
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button type="button" className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
              Pause all notifications for 24 hours
            </button>
            <Button type="submit">Save preferences</Button>
          </div>
        </form>
      </div>
    </section>
  )
}
