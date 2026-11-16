"use client"

import * as React from "react"
import {
  CircleQuestionMark as CircleHelpIcon,
  MessagesSquare as MessagesSquareIcon,
  Search as SearchIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

const faqs = [
  {
    q: "How do I reset my password?",
    a: "Go to Settings → Security and choose Reset password. We'll email you a secure link.",
  },
  {
    q: "Can I change my billing date?",
    a: "Yes. Billing admins can move the renewal date once per cycle from the Billing page.",
  },
  {
    q: "Where can I find my invoices?",
    a: "Invoices live under Billing → History and can be downloaded as PDF.",
  },
  {
    q: "How do I install Designali icons?",
    a: "Follow the install guide in /docs, then import icons from @designali/icons.",
  },
]

export default function HelpCenterDrawer() {
  const [query, setQuery] = React.useState("")
  const visible = faqs.filter((faq) =>
    faq.q.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={<Button variant="outline" size="icon" aria-label="Help" />}
      >
        <CircleHelpIcon />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Help center</DrawerTitle>
          <DrawerDescription>Answers to common questions</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
          <InputGroup>
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Search articles"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </InputGroup>
          {visible.length ? (
            <Accordion>
              {visible.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="py-6 text-center text-muted-foreground">
              No articles found.
            </p>
          )}
        </div>
        <DrawerFooter className="border-t pt-4">
          <p className="text-muted-foreground">
            Still stuck? Email support@designali.com.
          </p>
          <Button>
            <MessagesSquareIcon data-icon="inline-start" />
            Contact support
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
