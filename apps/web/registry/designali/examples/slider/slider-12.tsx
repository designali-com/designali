"use client"

import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Slider } from "@workspace/ui/components/slider"

export default function LoanCalculatorSliders() {
  const [amount, setAmount] = React.useState([25000])
  const [months, setMonths] = React.useState([36])
  const rate = 0.069 / 12
  const n = months[0]!
  const payment = (amount[0]! * rate) / (1 - Math.pow(1 + rate, -n))

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Personal loan</CardTitle>
        <CardDescription>6.9% APR, fixed rate</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <span>Amount</span>
            <span className="tabular-nums">${amount[0]!.toLocaleString()}</span>
          </div>
          <Slider
            aria-label="Loan amount"
            value={amount}
            onValueChange={(value) => setAmount(value as number[])}
            min={1000}
            max={50000}
            step={500}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <span>Term</span>
            <span className="tabular-nums">{n} months</span>
          </div>
          <Slider
            aria-label="Loan term"
            value={months}
            onValueChange={(value) => setMonths(value as number[])}
            min={12}
            max={72}
            step={12}
          />
        </div>
      </CardContent>
      <CardFooter className="justify-between border-t">
        <span className="text-sm text-muted-foreground">Monthly payment</span>
        <span className="text-lg font-semibold tabular-nums">
          ${payment.toFixed(2)}
        </span>
      </CardFooter>
    </Card>
  )
}
