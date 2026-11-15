import { UploadCloudIcon } from "lucide-react"

import { Label } from "@workspace/ui/components/label"

export default function FileDropzoneLabel() {
  return (
    <Label
      htmlFor="invoice-upload"
      className="flex w-full max-w-sm cursor-pointer flex-col gap-2 border border-dashed p-6 text-center transition-colors hover:bg-muted/50"
    >
      <UploadCloudIcon className="size-6 text-muted-foreground" />
      <span className="text-sm font-medium">Upload invoices</span>
      <span className="text-muted-foreground">
        PDF or PNG, up to 10 MB each
      </span>
      <input id="invoice-upload" type="file" multiple className="sr-only" />
    </Label>
  )
}
