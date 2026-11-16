"use client"

import { useState } from "react"
import {
  Check,
  Clock,
  Users,
  X,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const members = [
  { initials: "AI", color: "from-rose-400 to-orange-400" },
  { initials: "SD", color: "from-sky-400 to-blue-600" },
  { initials: "DV", color: "from-emerald-400 to-teal-600" },
  { initials: "CL", color: "from-violet-400 to-fuchsia-500" },
]

export default function Authentication08() {
  const [status, setStatus] = useState<"pending" | "accepted" | "declined">("pending")

  return (
    <section className="flex min-h-[640px] w-full items-center justify-center bg-muted/40 px-6 py-16">
      <div className="w-full max-w-md border bg-background">
        <div className="relative h-28 overflow-hidden border-b bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(white 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          />
        </div>
        <div className="-mt-10 px-6 pb-8 sm:px-8">
          <span className="relative flex size-20 items-center justify-center border-4 border-background bg-foreground text-2xl font-bold text-background">
            da
          </span>

          {status === "pending" && (
            <>
              <p className="mt-5 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Ali Imam</span> invited you to join
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">Designali Studio workspace</h2>

              <dl className="mt-6 grid grid-cols-2 border text-sm">
                <div className="border-e p-4">
                  <dt className="text-xs text-muted-foreground">Your role</dt>
                  <dd className="mt-1 font-medium">Editor</dd>
                </div>
                <div className="p-4">
                  <dt className="text-xs text-muted-foreground">Invited as</dt>
                  <dd className="mt-1 truncate font-medium">you@designali.com</dd>
                </div>
              </dl>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {members.map((member) => (
                    <span
                      key={member.initials}
                      className={`flex size-8 items-center justify-center rounded-full bg-gradient-to-br ${member.color} text-[10px] font-semibold text-white ring-2 ring-background`}
                    >
                      {member.initials}
                    </span>
                  ))}
                </div>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Users className="size-4" />
                  18 studio members
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row-reverse">
                <Button size="lg" className="flex-1" onClick={() => setStatus("accepted")}>
                  Accept invitation
                </Button>
                <Button size="lg" variant="outline" onClick={() => setStatus("declined")}>
                  Decline
                </Button>
              </div>
              <p className="mt-6 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="size-3.5" />
                This invitation expires in 6 days.
              </p>
            </>
          )}

          {status !== "pending" && (
            <div className="mt-6 space-y-4">
              <span className="flex size-10 items-center justify-center border">
                {status === "accepted" ? <Check className="size-5" /> : <X className="size-5" />}
              </span>
              <h2 className="text-2xl font-semibold tracking-tight">
                {status === "accepted" ? "You're in" : "Invitation declined"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {status === "accepted"
                  ? "Designali Studio is now in your workspace switcher. We've let Ali know you joined."
                  : "Ali won't be notified. You can ask for a new invite any time."}
              </p>
              <div className="flex gap-3">
                {status === "accepted" && <Button>Open workspace</Button>}
                <Button variant="ghost" onClick={() => setStatus("pending")}>
                  Undo
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
