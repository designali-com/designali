"use client"

import * as React from "react"
import { DownloadIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Label } from "@workspace/ui/components/label"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

export default function ExportDataSheet() {
  const [progress, setProgress] = React.useState<number | null>(null)

  React.useEffect(() => {
    if (progress === null || progress >= 100) return
    const id = setTimeout(
      () => setProgress((p) => Math.min((p ?? 0) + 20, 100)),
      300
    )
    return () => clearTimeout(id)
  }, [progress])

  return (
    <Sheet onOpenChange={(open) => open && setProgress(null)}>
      <SheetTrigger render={<Button variant="outline" />}>
        <DownloadIcon data-icon="inline-start" />
        Export
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Export contacts</SheetTitle>
          <SheetDescription>
            4,812 contacts match your current filters.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-5 px-4">
          <div className="flex flex-col gap-2">
            <span className="font-medium">Format</span>
            <RadioGroup defaultValue="csv" className="flex gap-4">
              <Label className="gap-2 font-normal">
                <RadioGroupItem value="csv" />
                CSV
              </Label>
              <Label className="gap-2 font-normal">
                <RadioGroupItem value="xlsx" />
                Excel
              </Label>
              <Label className="gap-2 font-normal">
                <RadioGroupItem value="json" />
                JSON
              </Label>
            </RadioGroup>
          </div>
          <Field>
            <FieldLabel htmlFor="export-range">Date range</FieldLabel>
            <NativeSelect
              id="export-range"
              defaultValue="90"
              className="w-full"
            >
              <NativeSelectOption value="30">Last 30 days</NativeSelectOption>
              <NativeSelectOption value="90">Last 90 days</NativeSelectOption>
              <NativeSelectOption value="all">All time</NativeSelectOption>
            </NativeSelect>
          </Field>
          <div className="flex flex-col gap-2">
            <Label className="gap-2 font-normal">
              <Checkbox defaultChecked />
              Include custom fields
            </Label>
            <Label className="gap-2 font-normal">
              <Checkbox />
              Include archived contacts
            </Label>
          </div>
          {progress !== null && (
            <Progress value={progress}>
              <ProgressLabel>
                {progress < 100 ? "Preparing file…" : "Ready to download"}
              </ProgressLabel>
              <ProgressValue />
            </Progress>
          )}
        </div>
        <SheetFooter>
          {progress === 100 ? (
            <Button>
              <DownloadIcon data-icon="inline-start" />
              Download contacts.csv
            </Button>
          ) : (
            <Button disabled={progress !== null} onClick={() => setProgress(0)}>
              {progress !== null ? "Exporting…" : "Start export"}
            </Button>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
