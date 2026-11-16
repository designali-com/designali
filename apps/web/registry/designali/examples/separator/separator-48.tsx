import {
  Download as DownloadIcon,
  Plus as PlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"

export default function PageHeaderDivider() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Customers</h2>
          <p className="text-xs text-muted-foreground">
            1,482 designali.com customers
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <DownloadIcon data-icon="inline-start" />
            Export
          </Button>
          <Button size="sm">
            <PlusIcon data-icon="inline-start" />
            Add customer
          </Button>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((index) => (
          <div key={index} className="h-12 bg-muted" />
        ))}
      </div>
    </div>
  )
}
