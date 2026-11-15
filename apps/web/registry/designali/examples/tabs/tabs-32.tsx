import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

const links = [
  { value: "overview", label: "Overview" },
  { value: "deployments", label: "Deployments" },
  { value: "analytics", label: "Analytics" },
  { value: "settings", label: "Settings" },
]

export default function LinkNavigationTabs() {
  return (
    <Tabs defaultValue="deployments" className="w-full max-w-md">
      <TabsList variant="line" className="w-full justify-start border-b">
        {links.map((l) => (
          <TabsTrigger
            key={l.value}
            value={l.value}
            nativeButton={false}
            render={<a href={"#" + l.value} />}
            className="flex-none"
          >
            {l.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <p className="text-muted-foreground">
        Each tab is a real link, so it can be opened in a new tab.
      </p>
    </Tabs>
  )
}
