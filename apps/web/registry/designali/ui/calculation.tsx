"use client"

import { cn } from "@workspace/ui/lib/utils"
import { useMemo, useState } from "react" 
 

export type Operation =
  | "sum"
  | "average"
  | "min"
  | "max"
  | "count"
  | "add"
  | "subtract"
  | "multiply"
  | "divide"
  | "percentage"
  | "percentage-change"
  | "remainder"
  | "power"
  | "sqrt"
  | "absolute"
  | "round"
  | "floor"
  | "ceil"
  | "factorial"
  | "gcd"
  | "lcm"

export interface CalculationProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOperation?: Operation
  defaultInput?: string
}

const operations: {
  label: string
  value: Operation
}[] = [
  { label: "Sum", value: "sum" },
  { label: "Average", value: "average" },
  { label: "Minimum", value: "min" },
  { label: "Maximum", value: "max" },
  { label: "Count", value: "count" },
  { label: "Add", value: "add" },
  { label: "Subtract", value: "subtract" },
  { label: "Multiply", value: "multiply" },
  { label: "Divide", value: "divide" },
  { label: "Percentage", value: "percentage" },
  { label: "Percentage Change", value: "percentage-change" },
  { label: "Remainder", value: "remainder" },
  { label: "Power", value: "power" },
  { label: "Square Root", value: "sqrt" },
  { label: "Absolute", value: "absolute" },
  { label: "Round", value: "round" },
  { label: "Floor", value: "floor" },
  { label: "Ceiling", value: "ceil" },
  { label: "Factorial", value: "factorial" },
  { label: "GCD", value: "gcd" },
  { label: "LCM", value: "lcm" },
]

function gcd(a: number, b: number): number {
  a = Math.abs(a)
  b = Math.abs(b)
  while (b) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

function factorial(n: number): number {
  if (n < 0 || !Number.isInteger(n)) return NaN
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}

function calculate(operation: Operation, values: number[]): number {
  const [a = 0, b = 0] = values

  switch (operation) {
    case "sum":
      return values.reduce((total, value) => total + value, 0)
    case "average":
      return values.length
        ? values.reduce((total, value) => total + value, 0) / values.length
        : 0
    case "min":
      return values.length ? Math.min(...values) : 0
    case "max":
      return values.length ? Math.max(...values) : 0
    case "count":
      return values.length
    case "add":
      return a + b
    case "subtract":
      return a - b
    case "multiply":
      return a * b
    case "divide":
      return b === 0 ? NaN : a / b
    case "percentage":
      return (a * b) / 100
    case "percentage-change":
      return a === 0 ? NaN : ((b - a) / a) * 100
    case "remainder":
      return b === 0 ? NaN : a % b
    case "power":
      return Math.pow(a, b)
    case "sqrt":
      return Math.sqrt(a)
    case "absolute":
      return Math.abs(a)
    case "round":
      return Math.round(a)
    case "floor":
      return Math.floor(a)
    case "ceil":
      return Math.ceil(a)
    case "factorial":
      return factorial(a)
    case "gcd":
      return gcd(a, b)
    case "lcm":
      return a && b ? Math.abs(a * b) / gcd(a, b) : 0
    default:
      return 0
  }
}

export function Calculation({
  defaultOperation = "sum",
  defaultInput = "100, 200, 300",
  className,
  ...props
}: CalculationProps) {
  const [operation, setOperation] = useState<Operation>(defaultOperation)
  const [input, setInput] = useState(defaultInput)

  const values = useMemo(
    () =>
      input
        .split(",")
        .map((value) => Number(value.trim()))
        .filter((value) => !Number.isNaN(value)),
    [input]
  )

  const result = calculate(operation, values)

  const formattedResult = Number.isNaN(result)
    ? "Invalid calculation"
    : Number.isFinite(result)
      ? Number(result.toFixed(6)).toLocaleString()
      : "Invalid calculation"

  return (
    <div
      className={cn(
        "w-full max-w-2xl rounded-xl border bg-background p-6 text-foreground shadow-sm",
        className
      )}
      {...props}
    >
       
      <div className="mt-6 flex flex-wrap gap-2">
        {operations.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => setOperation(item.value)}
            className={cn(
              "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
              operation === item.value
                ? "bg-primary text-primary-foreground shadow"
                : "hover:bg-accent hover:text-accent-foreground"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-2">
        <label className="text-sm font-medium leading-none">Values</label>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="100, 200, 300"
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
        <p className="text-xs text-muted-foreground">
          Enter numbers separated by commas.
        </p>
      </div>

      <div className="mt-6 rounded-lg bg-muted/50 p-5 border">
        <p className="text-sm font-medium text-muted-foreground">
          {operations.find((item) => item.value === operation)?.label}
        </p>
        <p className="mt-1 text-3xl font-bold tracking-tight">
          {formattedResult}
        </p>
      </div>
    </div>
  )
}