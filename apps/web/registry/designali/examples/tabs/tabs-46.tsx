import { CheckIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const plans = {
  starter: {
    price: "$0",
    features: ["3 projects", "1 GB storage", "Community support"],
  },
  team: {
    price: "$24",
    features: [
      "Unlimited projects",
      "100 GB storage",
      "Priority support",
      "SSO",
    ],
  },
  enterprise: {
    price: "Custom",
    features: [
      "Everything in Team",
      "Audit logs",
      "Dedicated manager",
      "99.99% SLA",
    ],
  },
}

export default function ComparePlanTabs() {
  return (
    <Tabs defaultValue="team" className="w-full max-w-sm">
      <TabsList className="w-full">
        <TabsTrigger value="starter">Starter</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
        <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
      </TabsList>
      {Object.entries(plans).map(([key, plan]) => (
        <TabsContent
          key={key}
          value={key}
          className="flex flex-col gap-3 border p-4"
        >
          <p className="text-2xl font-semibold">
            {plan.price}
            <span className="text-xs font-normal text-muted-foreground">
              {plan.price.startsWith("$") ? " / seat / month" : ""}
            </span>
          </p>
          <ul className="flex flex-col gap-1.5">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <CheckIcon className="size-3.5" />
                {f}
              </li>
            ))}
          </ul>
          <Button size="sm" variant={key === "team" ? "default" : "outline"}>
            Choose {key}
          </Button>
        </TabsContent>
      ))}
    </Tabs>
  )
}
