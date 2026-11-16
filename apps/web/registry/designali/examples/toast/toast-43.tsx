"use client"

import {
  GitMerge as GitMergeIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function RichContentToast() {
  return (
    <Toaster toastManager={notify}>
      <Button
        variant="outline"
        onClick={() =>
          notify.add({
            title: "Pull request merged",
            description: (
              <span className="flex flex-wrap items-center gap-1.5">
                <Badge variant="secondary">#1287</Badge>
                <span>
                  <strong className="font-medium text-foreground">
                    Add Designali pricing blocks
                  </strong>{" "}
                  into
                </span>
                <code className="bg-muted px-1 font-mono text-xs">main</code>
              </span>
            ),
          })
        }
      >
        <GitMergeIcon data-icon="inline-start" />
        Merge pull request
      </Button>
    </Toaster>
  )
}
