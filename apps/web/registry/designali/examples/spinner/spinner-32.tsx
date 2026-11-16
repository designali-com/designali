import {
  DollarSign as DollarSignIcon,
  TrendingDown as TrendingDownIcon,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
} from "@designali/icons"

import { Spinner } from "@workspace/ui/components/spinner"

const stats = [
  { label: "Template downloads", value: "12,483", icon: UsersIcon },
  { label: "Conversion", value: null, icon: TrendingUpIcon },
  { label: "MRR", value: "$84.2k", icon: DollarSignIcon },
  { label: "Churn", value: null, icon: TrendingDownIcon },
]

export default function KpiCardsPartialLoading() {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-2">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-2 border p-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            {stat.label}
            <stat.icon className="size-3.5" />
          </div>
          <div className="flex h-7 items-center">
            {stat.value ? (
              <span className="text-xl font-semibold tabular-nums">
                {stat.value}
              </span>
            ) : (
              <Spinner className="text-muted-foreground" />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
