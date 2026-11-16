import {
  KeyRound as KeyRoundIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

const resources = ["Templates", "Blocks", "Icons"]

export default function ApiKeyScopes() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="key-name">Key name</Label>
        <Input id="key-name" defaultValue="Designali CLI" />
      </div>
      <div className="border">
        <div className="grid grid-cols-[1fr_3rem_3rem] items-center gap-2 border-b bg-muted/50 px-3 py-2 text-xs font-medium text-muted-foreground">
          <span>Resource</span>
          <span className="text-center">Read</span>
          <span className="text-center">Write</span>
        </div>
        {resources.map((resource, index) => (
          <div
            key={resource}
            className="grid grid-cols-[1fr_3rem_3rem] items-center gap-2 border-b px-3 py-2 last:border-b-0"
          >
            <span className="text-sm">{resource}</span>
            <div className="flex justify-center">
              <Switch
                size="sm"
                defaultChecked
                aria-label={resource + " read"}
              />
            </div>
            <div className="flex justify-center">
              <Switch
                size="sm"
                defaultChecked={index === 0}
                aria-label={resource + " write"}
              />
            </div>
          </div>
        ))}
      </div>
      <Button size="sm">
        <KeyRoundIcon data-icon="inline-start" />
        Create key
      </Button>
    </div>
  )
}
