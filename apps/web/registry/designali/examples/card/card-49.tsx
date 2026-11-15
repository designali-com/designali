import { LockIcon, SparklesIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default function LockedPremiumCard() {
  return (
    <Card className="relative w-full max-w-sm" aria-disabled="true">
      <CardHeader>
        <CardTitle>Cohort retention</CardTitle>
        <CardDescription>Weekly cohorts · last 8 weeks</CardDescription>
      </CardHeader>
      <CardContent
        className="pointer-events-none grid grid-cols-8 gap-1 blur-[3px] select-none"
        aria-hidden="true"
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="aspect-square bg-primary"
            style={{
              opacity: Math.max(
                0.1,
                1 - (i % 8) * 0.12 - Math.floor(i / 8) * 0.05
              ),
            }}
          />
        ))}
      </CardContent>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background/60 p-6 text-center backdrop-blur-[1px]">
        <span className="flex size-9 items-center justify-center border bg-card">
          <LockIcon className="size-4" />
        </span>
        <span className="text-sm font-medium">Available on Growth</span>
        <span className="text-xs text-muted-foreground">
          See where users drop off and which cohorts stick around.
        </span>
        <Button size="sm" className="mt-1">
          <SparklesIcon data-icon="inline-start" />
          Upgrade
        </Button>
      </div>
    </Card>
  )
}
