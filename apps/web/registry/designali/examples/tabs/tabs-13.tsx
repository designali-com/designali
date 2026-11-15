import { StarIcon } from "lucide-react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import { cn } from "@workspace/ui/lib/utils"

const specs = [
  ["Weight", "1.2 kg"],
  ["Capacity", "22 L"],
  ["Material", "Recycled nylon"],
  ["Warranty", "Lifetime"],
]

export default function ProductDetailTabs() {
  return (
    <Tabs defaultValue="specs" className="w-full max-w-md">
      <TabsList variant="line">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="specs">Specifications</TabsTrigger>
        <TabsTrigger value="reviews">Reviews (86)</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="text-muted-foreground">
        The Trailhead 22 is a lightweight daypack with a padded laptop sleeve
        and weatherproof zips.
      </TabsContent>
      <TabsContent value="specs">
        <dl className="divide-y border">
          {specs.map(([k, v]) => (
            <div key={k} className="flex justify-between px-3 py-2">
              <dt className="text-muted-foreground">{k}</dt>
              <dd className="font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      </TabsContent>
      <TabsContent value="reviews" className="flex items-center gap-2">
        <div className="flex">
          {[0, 1, 2, 3, 4].map((i) => (
            <StarIcon
              key={i}
              className={cn(
                "size-4",
                i < 4 ? "fill-foreground" : "text-muted-foreground"
              )}
            />
          ))}
        </div>
        <span className="text-muted-foreground">
          4.6 average from 86 reviews
        </span>
      </TabsContent>
    </Tabs>
  )
}
