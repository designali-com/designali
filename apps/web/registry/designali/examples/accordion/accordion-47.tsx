import {
  ChevronDownIcon,
  CircleCheckIcon,
  ShieldAlertIcon,
  TriangleAlertIcon,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"

const checks = [
  {
    value: "password",
    title: "Strong password",
    ok: true,
    body: "Your password was changed 2 months ago and is not found in known breaches.",
  },
  {
    value: "2fa",
    title: "Two-factor authentication",
    ok: false,
    body: "Add an authenticator app so a stolen password alone cannot unlock your account.",
    action: "Enable 2FA",
  },
  {
    value: "sessions",
    title: "Active sessions",
    ok: false,
    body: "You are signed in on 4 devices, including one you have not used in 90 days.",
    action: "Review sessions",
  },
  {
    value: "recovery",
    title: "Recovery email",
    ok: true,
    body: "Recovery codes will be sent to r***@hollow.example.",
  },
]

export default function AccordionSecurityCheckup() {
  const issues = checks.filter((check) => !check.ok).length

  return (
    <div className="w-full max-w-md border">
      <div className="flex items-center gap-3 border-b p-3">
        <ShieldAlertIcon className="size-5 text-amber-600 dark:text-amber-400" />
        <div>
          <p className="text-sm font-medium">{issues} recommendations</p>
          <p className="text-xs text-muted-foreground">
            Fix these to keep your account safe.
          </p>
        </div>
      </div>
      <Accordion defaultValue={["2fa"]} className="px-3">
        {checks.map((check) => (
          <AccordionItem key={check.value} value={check.value}>
            <AccordionTrigger className="items-center">
              <span className="flex items-center gap-2">
                {check.ok ? (
                  <CircleCheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <TriangleAlertIcon className="size-4 text-amber-600 dark:text-amber-400" />
                )}
                {check.title}
              </span>
              <ChevronDownIcon
                data-slot="accordion-trigger-icon"
                className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
              />
            </AccordionTrigger>
            <AccordionContent className="space-y-2 ps-6">
              <p className="text-muted-foreground">{check.body}</p>
              {check.action && <Button size="xs">{check.action}</Button>}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
