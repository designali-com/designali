import {
  Lock as LockIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

export default function DisabledPlanTab() {
  return (
    <Tabs defaultValue="basic" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="basic">Basic</TabsTrigger>
        <TabsTrigger value="funnels">Funnels</TabsTrigger>
        <TabsTrigger value="cohorts" disabled>
          <LockIcon data-icon="inline-start" />
          Cohorts
        </TabsTrigger>
      </TabsList>
      <TabsContent value="basic" className="border p-3">
        Page views, visitors and bounce rate.
      </TabsContent>
      <TabsContent value="funnels" className="border p-3">
        Signup → Activation → Paid conversion.
      </TabsContent>
      <p className="text-muted-foreground">
        Cohort analysis is available on the Designali Pro plan.{" "}
        <Button variant="link" size="xs" className="h-auto p-0">
          Upgrade
        </Button>
      </p>
    </Tabs>
  )
}
