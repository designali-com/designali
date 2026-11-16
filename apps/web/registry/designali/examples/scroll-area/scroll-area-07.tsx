"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const clauses = [
  "Accounts. You are responsible for safeguarding your password and all activity under your account.",
  "Acceptable use. Do not misuse the service, interfere with it, or access it using automated means.",
  "Billing. Paid plans renew automatically until cancelled from the billing settings page.",
  "Content. You retain ownership of the files you upload and grant us a license to host them.",
  "Termination. We may suspend accounts that violate these terms after reasonable notice.",
  "Liability. The service is provided as is, to the extent permitted by applicable law.",
  "Changes. We will notify you by email at least 30 days before material changes take effect.",
]

export default function TermsAcceptGate() {
  const endRef = React.useRef<null | HTMLDivElement>(null)
  const [reachedEnd, setReachedEnd] = React.useState(false)
  const [agreed, setAgreed] = React.useState(false)

  React.useEffect(() => {
    const node = endRef.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) setReachedEnd(true)
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <ScrollArea className="h-56 border">
        <div className="flex flex-col gap-3 p-4 text-xs leading-relaxed">
          <h3 className="text-sm font-semibold">Designali Terms of Service</h3>
          {clauses.map((clause, i) => (
            <p key={i}>
              <span className="font-medium">{i + 1}.</span> {clause}
            </p>
          ))}
          <div ref={endRef} className="h-px" />
        </div>
      </ScrollArea>
      <Label className="flex items-center gap-2 text-xs">
        <Checkbox
          checked={agreed}
          disabled={!reachedEnd}
          onCheckedChange={(v) => setAgreed(v === true)}
        />
        I have read and agree to the terms
      </Label>
      <Button disabled={!agreed}>
        {reachedEnd ? "Continue" : "Scroll to the end to continue"}
      </Button>
    </div>
  )
}
