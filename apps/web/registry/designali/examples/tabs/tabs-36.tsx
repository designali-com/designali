import { Button } from "@workspace/ui/components/button"
import { Switch } from "@workspace/ui/components/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const connected = [
  { name: "Slack", desc: "Post designali.com deploy updates to #releases" },
  { name: "GitHub", desc: "Sync Designali pull request status" },
]
const available = [
  { name: "Linear", desc: "Create issues from client feedback" },
  { name: "PagerDuty", desc: "Escalate failed health checks" },
]

export default function IntegrationsTabs() {
  return (
    <Tabs defaultValue="connected" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="connected">Connected</TabsTrigger>
        <TabsTrigger value="available">Available</TabsTrigger>
      </TabsList>
      <TabsContent value="connected" className="divide-y border">
        {connected.map((i) => (
          <div
            key={i.name}
            className="flex items-center justify-between gap-3 px-3 py-2.5"
          >
            <div>
              <p className="font-medium">{i.name}</p>
              <p className="text-muted-foreground">{i.desc}</p>
            </div>
            <Switch defaultChecked aria-label={"Enable " + i.name} />
          </div>
        ))}
      </TabsContent>
      <TabsContent value="available" className="divide-y border">
        {available.map((i) => (
          <div
            key={i.name}
            className="flex items-center justify-between gap-3 px-3 py-2.5"
          >
            <div>
              <p className="font-medium">{i.name}</p>
              <p className="text-muted-foreground">{i.desc}</p>
            </div>
            <Button size="xs" variant="outline">
              Connect
            </Button>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}
