import {
  LaptopIcon,
  MonitorSmartphoneIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const sessions = [
  {
    device: "MacBook Pro · Safari",
    place: "Lisbon",
    current: true,
    icon: LaptopIcon,
  },
  {
    device: "Pixel 9 · App",
    place: "Porto",
    current: false,
    icon: SmartphoneIcon,
  },
]

export default function SecuritySettingsTabs() {
  return (
    <Tabs defaultValue="2fa" className="w-full max-w-sm">
      <TabsList variant="line">
        <TabsTrigger value="2fa">
          <ShieldCheckIcon data-icon="inline-start" />
          Two-factor
        </TabsTrigger>
        <TabsTrigger value="sessions">
          <MonitorSmartphoneIcon data-icon="inline-start" />
          Sessions
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="2fa"
        className="flex items-center justify-between gap-3 border p-3"
      >
        <div>
          <p className="font-medium">Authenticator app</p>
          <p className="text-muted-foreground">Enabled on Oct 2, 2026</p>
        </div>
        <Badge variant="secondary">On</Badge>
      </TabsContent>
      <TabsContent value="sessions" className="divide-y border">
        {sessions.map((s) => (
          <div key={s.device} className="flex items-center gap-3 px-3 py-2.5">
            <s.icon className="size-4 text-muted-foreground" />
            <div className="flex-1">
              <p className="font-medium">{s.device}</p>
              <p className="text-muted-foreground">
                {s.place}
                {s.current ? " · This device" : ""}
              </p>
            </div>
            {!s.current && (
              <Button variant="destructive" size="xs">
                Sign out
              </Button>
            )}
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}
