"use client"

import * as React from "react"
import {
  Sparkles as SparklesIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function PlanUpgradeToast() {
  const [plan, setPlan] = React.useState("Starter")

  function upgrade() {
    const request = new Promise<void>((resolve) => setTimeout(resolve, 1500))
    void notify.promise(request, {
      loading: "Upgrading your workspace...",
      success: {
        title: "Welcome to Pro",
        description: "All Designali templates, blocks and priority support are now on.",
      },
      error: "Upgrade failed",
    })
    void request.then(() => setPlan("Pro"))
  }

  return (
    <Toaster toastManager={notify}>
      <Card className="w-full max-w-xs">
        <CardHeader>
          <CardTitle>Current plan: {plan}</CardTitle>
          <CardDescription>
            Pro is $24 per seat, billed monthly.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button
            className="w-full"
            onClick={upgrade}
            disabled={plan === "Pro"}
          >
            <SparklesIcon data-icon="inline-start" />
            {plan === "Pro" ? "You are on Pro" : "Upgrade to Pro"}
          </Button>
        </CardFooter>
      </Card>
    </Toaster>
  )
}
