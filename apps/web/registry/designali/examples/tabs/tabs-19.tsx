import {
  MapPin as MapPinIcon,
  Store as StoreIcon,
  Truck as TruckIcon,
} from "@designali/icons"

import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

export default function CheckoutDeliveryTabs() {
  return (
    <Tabs defaultValue="delivery" className="w-full max-w-sm">
      <TabsList className="w-full">
        <TabsTrigger value="delivery">
          <TruckIcon data-icon="inline-start" />
          Delivery
        </TabsTrigger>
        <TabsTrigger value="pickup">
          <StoreIcon data-icon="inline-start" />
          Pickup
        </TabsTrigger>
      </TabsList>
      <TabsContent value="delivery" className="flex flex-col gap-3 border p-3">
        <div className="grid gap-1.5">
          <Label htmlFor="co-street">Street address</Label>
          <Input id="co-street" placeholder="12 Orchard Lane" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Input placeholder="City" aria-label="City" />
          <Input placeholder="Postcode" aria-label="Postcode" />
        </div>
        <p className="text-muted-foreground">Arrives Tue, Nov 18 · $4.90</p>
      </TabsContent>
      <TabsContent value="pickup" className="flex items-start gap-3 border p-3">
        <MapPinIcon className="mt-0.5 size-4" />
        <div>
          <p className="font-medium">Designali studio</p>
          <p className="text-muted-foreground">Ready in 2 hours · Free</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}
