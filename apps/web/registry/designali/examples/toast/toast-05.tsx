"use client"

import { UploadCloudIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

function fakeUpload() {
  return new Promise<string>((resolve) =>
    setTimeout(() => resolve("brand-guidelines.pdf"), 2000)
  )
}

export default function PromiseUploadToast() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col items-center gap-3 border border-dashed p-6 text-center">
        <UploadCloudIcon className="size-8 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          brand-guidelines.pdf - 4.2 MB
        </p>
        <Button
          onClick={() =>
            notify.promise(fakeUpload(), {
              loading: {
                title: "Uploading...",
                description: "Sending file to Shared Drive",
              },
              success: (file: string) => ({
                title: "Upload complete",
                description: file + " is ready to share.",
              }),
              error: "Upload failed",
            })
          }
        >
          Upload file
        </Button>
      </div>
    </Toaster>
  )
}
