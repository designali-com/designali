import {
  FileX as FileXIcon,
  Upload as UploadIcon,
} from "@designali/icons"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

export default function AlertUploadTooLarge() {
  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex flex-col items-center gap-1 border border-dashed py-6 text-center">
        <UploadIcon className="size-5 text-muted-foreground" />
        <p className="text-xs font-medium">Drop files to upload</p>
        <p className="text-xs text-muted-foreground">
          PDF, PNG or JPG up to 25 MB
        </p>
      </div>
      <Alert variant="error">
        <FileXIcon />
        <AlertTitle>Upload failed</AlertTitle>
        <AlertDescription>
          <span className="font-mono text-foreground">designali-brand-guide.pdf</span>{" "}
          is 61.4 MB, which is over the 25 MB limit.
        </AlertDescription>
        <AlertAction>
          <Button size="xs" variant="outline">
            Choose another
          </Button>
        </AlertAction>
      </Alert>
    </div>
  )
}
