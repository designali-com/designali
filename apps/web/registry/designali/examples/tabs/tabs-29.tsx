import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

export default function NestedTabs() {
  return (
    <Tabs defaultValue="production" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="production">Production</TabsTrigger>
        <TabsTrigger value="staging">Staging</TabsTrigger>
      </TabsList>
      {["production", "staging"].map((env) => (
        <TabsContent key={env} value={env} className="border p-3">
          <Tabs defaultValue="logs">
            <TabsList variant="line">
              <TabsTrigger value="logs">Logs</TabsTrigger>
              <TabsTrigger value="env">Variables</TabsTrigger>
              <TabsTrigger value="domains">Domains</TabsTrigger>
            </TabsList>
            <TabsContent
              value="logs"
              className="font-sans text-muted-foreground"
            >
              [{env}] GET /api/health 200 12ms
            </TabsContent>
            <TabsContent
              value="env"
              className="font-sans text-muted-foreground"
            >
              DATABASE_URL, REDIS_URL, SENTRY_DSN
            </TabsContent>
            <TabsContent value="domains" className="text-muted-foreground">
              {env === "production" ? "www.designali.com" : "staging.designali.com"}
            </TabsContent>
          </Tabs>
        </TabsContent>
      ))}
    </Tabs>
  )
}
