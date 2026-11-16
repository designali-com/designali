"use client"

import * as React from "react"
import {
  ArrowDownLeft as ArrowDownLeftIcon,
  ArrowUpRight as ArrowUpRightIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const points = [32, 40, 36, 52, 48, 60, 58, 72, 66, 80, 78, 92]

export default function WalletBalanceCard() {
  const [hidden, setHidden] = React.useState(false)
  const max = Math.max(...points)
  const path = points
    .map(
      (p, i) =>
        (i === 0 ? "M" : "L") +
        (i * 100) / (points.length - 1) +
        " " +
        (40 - (p / max) * 36)
    )
    .join(" ")

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardDescription>Designali studio · EUR</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums">
          {hidden ? "€ ••••••" : "€ 12,840.55"}
        </CardTitle>
        <CardAction>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={hidden ? "Show balance" : "Hide balance"}
            onClick={() => setHidden(!hidden)}
          >
            {hidden ? <EyeIcon /> : <EyeOffIcon />}
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-1">
        <svg
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          className="h-14 w-full text-emerald-500"
          aria-hidden="true"
        >
          <path
            d={path + " L100 40 L0 40 Z"}
            className="fill-current opacity-10"
          />
          <path
            d={path}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <span className="text-emerald-600 dark:text-emerald-400">
          +€1,920.10 this month
        </span>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-2">
        <Button>
          <ArrowUpRightIcon data-icon="inline-start" />
          Send
        </Button>
        <Button variant="outline">
          <ArrowDownLeftIcon data-icon="inline-start" />
          Receive
        </Button>
      </CardFooter>
    </Card>
  )
}
