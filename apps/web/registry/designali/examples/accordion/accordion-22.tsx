"use client"

import * as React from "react"
import {
  ChevronDownIcon,
  MailIcon,
  MessageSquareIcon,
  SmartphoneIcon,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Label } from "@workspace/ui/components/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const channels = [
  { value: "email", icon: MailIcon, title: "Email", current: "daily" },
  {
    value: "slack",
    icon: MessageSquareIcon,
    title: "Chat app",
    current: "instant",
  },
  {
    value: "mobile",
    icon: SmartphoneIcon,
    title: "Mobile push",
    current: "off",
  },
]

const frequencies = [
  { value: "instant", label: "Instantly" },
  { value: "daily", label: "Daily summary" },
  { value: "off", label: "Off" },
]

export default function AccordionNotificationChannels() {
  const [prefs, setPrefs] = React.useState<Record<string, string>>(
    Object.fromEntries(channels.map((c) => [c.value, c.current]))
  )

  return (
    <Accordion defaultValue={["email"]} className="w-full max-w-sm border px-3">
      {channels.map((channel) => (
        <AccordionItem key={channel.value} value={channel.value}>
          <AccordionTrigger className="items-center">
            <span className="flex items-center gap-2">
              <channel.icon className="size-4 text-muted-foreground" />
              {channel.title}
            </span>
            <span className="ms-auto me-2 font-normal text-muted-foreground">
              {frequencies.find((f) => f.value === prefs[channel.value])?.label}
            </span>
            <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup
              value={prefs[channel.value]}
              onValueChange={(value) =>
                setPrefs((prev) => ({
                  ...prev,
                  [channel.value]: value as string,
                }))
              }
              className="gap-2 ps-6"
            >
              {frequencies.map((frequency) => {
                const id = channel.value + "-" + frequency.value
                return (
                  <div
                    key={frequency.value}
                    className="flex items-center gap-2"
                  >
                    <RadioGroupItem id={id} value={frequency.value} />
                    <Label htmlFor={id} className="font-normal">
                      {frequency.label}
                    </Label>
                  </div>
                )
              })}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
