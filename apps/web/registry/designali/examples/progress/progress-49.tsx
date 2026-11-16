import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

const tables = [
  { name: "users", value: 100 },
  { name: "orders", value: 64 },
  { name: "invoices", value: 0 },
]

export default function MigrationStepsWithSubProgress() {
  const overall = Math.round(
    tables.reduce((s, t) => s + t.value, 0) / tables.length
  )

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <Progress value={overall} className="[&_[data-slot=progress-track]]:h-2">
        <ProgressLabel className="text-sm font-medium">
          Migrating to new region
        </ProgressLabel>
        <ProgressValue />
      </Progress>
      <div className="flex flex-col gap-3 border-s ps-3">
        {tables.map((table) => (
          <Progress
            key={table.name}
            value={table.value}
            className="gap-1.5 [&_[data-slot=progress-indicator]]:bg-primary/60"
          >
            <ProgressLabel className="font-sans text-muted-foreground">
              {table.name}
            </ProgressLabel>
            <ProgressValue />
          </Progress>
        ))}
      </div>
    </div>
  )
}
