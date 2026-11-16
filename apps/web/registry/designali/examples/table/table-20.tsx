import {
  Check as CheckIcon,
  Minus as MinusIcon,
} from "@designali/icons"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"

const plans = ["Free", "Pro", "Team"]
const features = [
  { name: "Blocks", values: ["50", "460+", "460+"] },
  { name: "Figma source files", values: [false, true, true] },
  { name: "Template updates", values: ["7 days", "90 days", "Unlimited"] },
  { name: "SSO", values: [false, false, true] },
  { name: "Priority support", values: [false, true, true] },
]

export default function PricingComparisonTable() {
  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Feature</TableHead>
            {plans.map((plan) => (
              <TableHead
                key={plan}
                className={cn("text-center", plan === "Pro" && "bg-muted/50")}
              >
                {plan}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature.name}>
              <TableCell className="font-medium">{feature.name}</TableCell>
              {feature.values.map((value, i) => (
                <TableCell
                  key={plans[i]}
                  className={cn(
                    "text-center",
                    plans[i] === "Pro" && "bg-muted/50"
                  )}
                >
                  {value === true ? (
                    <CheckIcon
                      className="mx-auto size-4"
                      aria-label="Included"
                    />
                  ) : value === false ? (
                    <MinusIcon
                      className="mx-auto size-4 text-muted-foreground"
                      aria-label="Not included"
                    />
                  ) : (
                    value
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
