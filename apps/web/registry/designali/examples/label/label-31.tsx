import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function ShippingAddressLabels() {
  return (
    <div className="grid w-full max-w-md grid-cols-6 gap-3">
      <div className="col-span-6 grid gap-2">
        <Label htmlFor="addr-street">Ship Designali merch to</Label>
        <Input id="addr-street" defaultValue="218 Willow Bend Rd" />
      </div>
      <div className="col-span-3 grid gap-2">
        <Label htmlFor="addr-city">City</Label>
        <Input id="addr-city" defaultValue="Portland" />
      </div>
      <div className="col-span-1 grid gap-2">
        <Label htmlFor="addr-state">State</Label>
        <Input id="addr-state" defaultValue="OR" />
      </div>
      <div className="col-span-2 grid gap-2">
        <Label htmlFor="addr-zip">ZIP</Label>
        <Input id="addr-zip" defaultValue="97205" />
      </div>
    </div>
  )
}
