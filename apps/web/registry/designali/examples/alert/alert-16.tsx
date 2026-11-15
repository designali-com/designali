import { CircleCheckIcon, CircleXIcon, TriangleAlertIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"

const checks = [
  {
    variant: "success" as const,
    icon: CircleCheckIcon,
    title: "Build passed",
    body: "Compiled in 48s with no warnings.",
  },
  {
    variant: "warning" as const,
    icon: TriangleAlertIcon,
    title: "Bundle size grew 14%",
    body: "The checkout route is now 212 kB gzipped.",
  },
  {
    variant: "error" as const,
    icon: CircleXIcon,
    title: "2 tests failing",
    body: "auth/session.test.ts and billing/tax.test.ts",
  },
]

export default function AlertDeployChecks() {
  return (
    <div className="w-full max-w-md space-y-2">
      <p className="text-sm font-medium">Pre-deploy checks</p>
      {checks.map((check) => (
        <Alert key={check.title} variant={check.variant}>
          <check.icon />
          <AlertTitle>{check.title}</AlertTitle>
          <AlertDescription>{check.body}</AlertDescription>
        </Alert>
      ))}
    </div>
  )
}
