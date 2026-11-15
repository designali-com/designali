import { Progress, ProgressLabel } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const categories = [
  { name: "Groceries", spent: 412, budget: 500 },
  { name: "Dining out", spent: 265, budget: 200 },
  { name: "Transport", spent: 88, budget: 150 },
  { name: "Subscriptions", spent: 54, budget: 60 },
]

export default function BudgetCategorySpending() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <p className="text-sm font-medium">November budget</p>
      {categories.map((c) => {
        const over = c.spent > c.budget
        return (
          <Progress
            key={c.name}
            value={Math.min(c.spent, c.budget)}
            max={c.budget}
            className={cn(
              over && "[&_[data-slot=progress-indicator]]:bg-destructive"
            )}
          >
            <ProgressLabel className="text-sm">{c.name}</ProgressLabel>
            <span
              className={cn(
                "ms-auto text-xs tabular-nums",
                over ? "text-destructive" : "text-muted-foreground"
              )}
            >
              {"$" + c.spent} / {"$" + c.budget}
            </span>
          </Progress>
        )
      })}
    </div>
  )
}
