"use client"

import { useState } from "react"
import {
  ArrowLeftRight,
  Calendar,
  Contact,
  FileText,
  Info,
  Mail,
  ShieldCheck,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { cn } from "@workspace/ui/lib/utils"

const scopes = [
  { id: "profile", icon: Contact, label: "View your name and profile photo", required: true },
  { id: "email", icon: Mail, label: "View your email address", required: true },
  { id: "calendar", icon: Calendar, label: "Read and update your Designali projects", required: false },
  { id: "files", icon: FileText, label: "Read templates and UI kits you choose to share", required: false },
]

export default function Authentication16() {
  const [granted, setGranted] = useState<string[]>(scopes.map((scope) => scope.id))

  function toggle(id: string) {
    setGranted((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]))
  }

  return (
    <section className="flex min-h-[720px] w-full items-center justify-center bg-muted/40 px-6 py-16">
      <div className="w-full max-w-md border bg-background">
        <div className="flex items-center justify-center gap-4 border-b px-6 py-8">
          <span className="flex size-14 items-center justify-center bg-gradient-to-br from-orange-400 to-pink-500 text-lg font-bold text-white">
            Fg
          </span>
          <ArrowLeftRight className="size-5 text-muted-foreground" />
          <span className="flex size-14 items-center justify-center bg-foreground text-lg font-bold text-background">
            da
          </span>
        </div>
        <div className="space-y-6 p-6 sm:p-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold tracking-tight">Figma Sync wants to access your Designali account</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Signed in as <span className="text-foreground">ali@designali.com</span>{" "}
              <a href="#" className="underline underline-offset-4">Not you?</a>
            </p>
          </div>

          <ul className="divide-y border">
            {scopes.map((scope) => (
              <li key={scope.id}>
                <label
                  className={cn(
                    "flex items-center gap-3 p-4 text-sm",
                    !scope.required && "cursor-pointer hover:bg-muted/40"
                  )}
                >
                  <scope.icon className="size-4 shrink-0 text-muted-foreground" />
                  <span className="flex-1">{scope.label}</span>
                  {scope.required ? (
                    <span className="text-xs text-muted-foreground">Required</span>
                  ) : (
                    <Checkbox checked={granted.includes(scope.id)} onCheckedChange={() => toggle(scope.id)} />
                  )}
                </label>
              </li>
            ))}
          </ul>

          <div className="flex gap-3 bg-muted/50 p-4 text-xs text-muted-foreground">
            <Info className="size-4 shrink-0" />
            <p>
              Meetmix is a verified app. You can revoke access anytime from{" "}
              <a href="#" className="text-foreground underline underline-offset-4">Connected apps</a>. Review its{" "}
              <a href="#" className="text-foreground underline underline-offset-4">privacy policy</a>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" size="lg">Cancel</Button>
            <Button size="lg">Allow</Button>
          </div>
        </div>
        <p className="flex items-center justify-center gap-1.5 border-t p-4 text-xs text-muted-foreground">
          <ShieldCheck className="size-3.5" />
          You&apos;ll be redirected to figma-sync.example.com
        </p>
      </div>
    </section>
  )
}
