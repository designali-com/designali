"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  Copy as CopyIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  RefreshCw as RefreshCwIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

const key = "key_demo_35ae"

export default function ApiKeyCard() {
  const [visible, setVisible] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Designali API key</CardTitle>
        <CardDescription>
          Use this key on your server only. Never expose it in client code.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <InputGroup>
          <InputGroupInput
            readOnly
            value={visible ? key : "key_demo_" + "•".repeat(18)}
            className="font-sans"
            aria-label="API key"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              size="icon-xs"
              aria-label={visible ? "Hide key" : "Reveal key"}
              onClick={() => setVisible(!visible)}
            >
              {visible ? <EyeOffIcon /> : <EyeIcon />}
            </InputGroupButton>
            <InputGroupButton
              size="icon-xs"
              aria-label="Copy key"
              onClick={() => {
                void navigator.clipboard?.writeText(key)
                setCopied(true)
                setTimeout(() => setCopied(false), 1500)
              }}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-muted-foreground">
          Created Oct 2 · last used 3h ago
        </span>
        <Button variant="outline" size="sm">
          <RefreshCwIcon data-icon="inline-start" />
          Roll key
        </Button>
      </CardFooter>
    </Card>
  )
}
