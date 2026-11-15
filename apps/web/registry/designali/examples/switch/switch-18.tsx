import { BuildingIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

export default function AdminManagedReadOnly() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <Alert>
        <BuildingIcon />
        <AlertTitle>Managed by Northwind IT</AlertTitle>
        <AlertDescription>
          These settings are set by your organization.
        </AlertDescription>
      </Alert>
      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="disk-encryption">Disk encryption</Label>
        <Switch id="disk-encryption" defaultChecked readOnly />
      </div>
      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="usb-storage">Allow USB storage</Label>
        <Switch id="usb-storage" readOnly />
      </div>
    </div>
  )
}
