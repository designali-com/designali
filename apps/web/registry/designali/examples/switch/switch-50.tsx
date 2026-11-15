import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

export default function TabbedSettingsSwitches() {
  return (
    <Tabs defaultValue="general" className="w-full max-w-sm">
      <TabsList className="w-full">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="privacy">Privacy</TabsTrigger>
      </TabsList>
      <TabsContent value="general" className="flex flex-col gap-3 border p-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="tab-startup">Open on startup</Label>
          <Switch id="tab-startup" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="tab-updates">Install updates automatically</Label>
          <Switch id="tab-updates" defaultChecked />
        </div>
      </TabsContent>
      <TabsContent value="privacy" className="flex flex-col gap-3 border p-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="tab-telemetry">Share usage data</Label>
          <Switch id="tab-telemetry" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="tab-crash">Send crash reports</Label>
          <Switch id="tab-crash" defaultChecked />
        </div>
      </TabsContent>
    </Tabs>
  )
}
