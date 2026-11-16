import {
  FileCode as FileCodeIcon,
  GitMerge as GitMergeIcon,
} from "@designali/icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

const files = ["app/templates/page.tsx", "registry/blocks/pricing.tsx"]

export default function AlertMergeConflict() {
  return (
    <Alert variant="error" className="max-w-md">
      <GitMergeIcon />
      <AlertTitle>This branch has conflicts that must be resolved</AlertTitle>
      <AlertDescription>
        <ul className="my-1 space-y-0.5 font-sans text-foreground">
          {files.map((file) => (
            <li key={file} className="flex items-center gap-1.5">
              <FileCodeIcon className="size-3" />
              {file}
            </li>
          ))}
        </ul>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Button size="xs">Resolve in editor</Button>
          <Button size="xs" variant="outline">
            Use command line
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}
