import {
  TrendingUp as TrendingUpIcon,
} from "@designali/icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

const stats = [
  { label: "Control", value: "3.8%" },
  { label: "Variant B", value: "4.6%" },
  { label: "Confidence", value: "97%" },
]

export default function AlertExperimentResult() {
  return (
    <Alert variant="success" className="max-w-md">
      <TrendingUpIcon />
      <AlertTitle>Variant B is winning: +21% template checkout conversion</AlertTitle>
      <AlertDescription>
        <div className="my-1.5 grid grid-cols-3 border bg-background">
          {stats.map((stat) => (
            <div key={stat.label} className="border-e p-2 last:border-0">
              <p>{stat.label}</p>
              <p className="text-sm font-semibold text-foreground">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
        <Button size="xs">Roll out to 100%</Button>
      </AlertDescription>
    </Alert>
  )
}
