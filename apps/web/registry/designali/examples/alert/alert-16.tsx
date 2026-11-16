import {
  CircleCheck as CircleCheckIcon,
  CircleX as CircleXIcon,
  TriangleAlert as TriangleAlertIcon,
} from "@designali/icons"

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
    body: "designali.com compiled on Vercel in 48s with no warnings.",
  },
  {
    variant: "warning" as const,
    icon: TriangleAlertIcon,
    title: "Bundle size grew 14%",
    body: "The /templates route is now 212 kB gzipped.",
  },
  {
    variant: "error" as const,
    icon: CircleXIcon,
    title: "2 tests failing",
    body: "blocks/pricing.test.ts and icons/export.test.ts",
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
