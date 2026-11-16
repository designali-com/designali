import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

const lines = [
  "resolving dependencies...",
  "fetched 214 packages",
  "linking binaries",
  "building native module: image-codec",
]

export default function PackageInstallLog() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border bg-muted/30 p-4">
      <Progress value={68}>
        <ProgressLabel className="font-sans">
          Installing dependencies
        </ProgressLabel>
        <ProgressValue className="font-sans" />
      </Progress>
      <pre className="overflow-x-auto bg-background p-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
        {lines.map((line) => "> " + line).join("\n")}
      </pre>
    </div>
  )
}
