import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const categories = [
  "All",
  "Pizza",
  "Sushi",
  "Burgers",
  "Salads",
  "Tacos",
  "Ramen",
  "Desserts",
  "Drinks",
]

export default function ScrollableCategoryTabs() {
  return (
    <Tabs defaultValue="All" className="w-full max-w-sm">
      <div className="overflow-x-auto">
        <TabsList variant="line" className="w-max">
          {categories.map((c) => (
            <TabsTrigger key={c} value={c} className="flex-none">
              {c}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {categories.map((c) => (
        <TabsContent
          key={c}
          value={c}
          className="border p-3 text-muted-foreground"
        >
          Showing{" "}
          {c === "All" ? "every restaurant" : c.toLowerCase() + " places"} near
          you.
        </TabsContent>
      ))}
    </Tabs>
  )
}
