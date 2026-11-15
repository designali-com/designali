"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Check, Code2, Megaphone, Palette, Plus, X } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { cn } from "@workspace/ui/lib/utils"

const roles = [
  { id: "design", icon: Palette, label: "Design", text: "Mockups, prototypes, brand" },
  { id: "engineering", icon: Code2, label: "Engineering", text: "Specs, tickets, releases" },
  { id: "marketing", icon: Megaphone, label: "Marketing", text: "Campaigns and content" },
]

const sizes = ["Just me", "2-10", "11-50", "51-200", "200+"]

export default function Authentication09() {
  const [step, setStep] = useState(0)
  const [role, setRole] = useState("design")
  const [size, setSize] = useState("2-10")
  const [workspace, setWorkspace] = useState("Brightfold")
  const [invites, setInvites] = useState<string[]>(["maya@brightfold.co"])
  const [draft, setDraft] = useState("")

  const total = 3
  const slug = workspace.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "your-team"

  return (
    <section className="w-full bg-background">
      <div className="h-1 bg-muted">
        <div className="h-full bg-foreground transition-all duration-500" style={{ width: `${((step + 1) / total) * 100}%` }} />
      </div>
      <div className="mx-auto flex min-h-[680px] max-w-xl flex-col px-6 py-12">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Taskloom</span>
          <span className="tabular-nums">Step {step + 1} of {total}</span>
        </div>

        <div className="flex-1 py-12">
          {step === 0 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">What kind of work do you do?</h2>
                <p className="mt-2 text-muted-foreground">We&apos;ll set up templates that fit how you work.</p>
              </div>
              <div className="grid gap-3">
                {roles.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRole(item.id)}
                    aria-pressed={role === item.id}
                    className={cn(
                      "flex items-center gap-4 border p-4 text-start transition-colors",
                      role === item.id ? "border-foreground bg-muted/50" : "hover:bg-muted/30"
                    )}
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center border bg-background">
                      <item.icon className="size-4" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-medium">{item.label}</span>
                      <span className="block text-sm text-muted-foreground">{item.text}</span>
                    </span>
                    <span className={cn("flex size-5 items-center justify-center border", role === item.id && "border-foreground bg-foreground text-background")}>
                      {role === item.id && <Check className="size-3" />}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Name your workspace</h2>
                <p className="mt-2 text-muted-foreground">Usually your company or team name.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="auth-09-workspace">Workspace name</Label>
                <Input id="auth-09-workspace" value={workspace} onChange={(event) => setWorkspace(event.target.value)} className="h-11" />
                <p className="text-xs text-muted-foreground">
                  taskloom.app/<span className="text-foreground">{slug}</span>
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-medium">Team size</p>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSize(item)}
                      className={cn(
                        "h-9 border px-4 text-sm transition-colors",
                        size === item ? "border-foreground bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Invite your teammates</h2>
                <p className="mt-2 text-muted-foreground">Taskloom works best with your whole team. You can skip this.</p>
              </div>
              <form
                className="flex gap-2"
                onSubmit={(event) => {
                  event.preventDefault()
                  if (draft.includes("@") && !invites.includes(draft)) setInvites([...invites, draft])
                  setDraft("")
                }}
              >
                <Input type="email" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="name@company.com" className="h-11" />
                <Button type="submit" variant="outline" className="h-11">
                  <Plus />
                  Add
                </Button>
              </form>
              <ul className="divide-y border">
                {invites.length === 0 && <li className="p-4 text-sm text-muted-foreground">No invites yet.</li>}
                {invites.map((invite) => (
                  <li key={invite} className="flex items-center gap-3 p-3 text-sm">
                    <span className="flex size-8 items-center justify-center bg-muted text-xs font-medium uppercase">{invite[0]}</span>
                    <span className="min-w-0 flex-1 truncate">{invite}</span>
                    <span className="text-xs text-muted-foreground">Member</span>
                    <button type="button" aria-label={`Remove ${invite}`} onClick={() => setInvites(invites.filter((item) => item !== invite))} className="text-muted-foreground hover:text-foreground">
                      <X className="size-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t pt-6">
          <Button variant="ghost" disabled={step === 0} onClick={() => setStep(step - 1)}>
            <ArrowLeft />
            Back
          </Button>
          <div className="flex gap-2">
            {step === 2 && <Button variant="ghost">Skip</Button>}
            <Button onClick={() => setStep(Math.min(step + 1, total - 1))}>
              {step === total - 1 ? "Finish setup" : "Continue"}
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
