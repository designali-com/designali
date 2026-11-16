"use client"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

export default function KeepMountedFormTabs() {
  return (
    <form
      className="w-full max-w-sm border p-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <Tabs defaultValue="event">
        <TabsList className="w-full">
          <TabsTrigger value="event">Event</TabsTrigger>
          <TabsTrigger value="venue">Venue</TabsTrigger>
          <TabsTrigger value="tickets">Tickets</TabsTrigger>
        </TabsList>
        <TabsContent value="event" keepMounted className="flex flex-col gap-2">
          <Input
            name="title"
            placeholder="Designali workshop title"
            aria-label="Event title"
          />
          <Input name="date" type="date" aria-label="Date" />
        </TabsContent>
        <TabsContent value="venue" keepMounted className="flex flex-col gap-2">
          <Input
            name="venue"
            placeholder="Venue name"
            aria-label="Venue name"
          />
          <Input
            name="capacity"
            type="number"
            placeholder="Capacity"
            aria-label="Capacity"
          />
        </TabsContent>
        <TabsContent
          value="tickets"
          keepMounted
          className="flex flex-col gap-2"
        >
          <Input
            name="price"
            placeholder="Price (USD)"
            aria-label="Ticket price"
          />
          <p className="text-muted-foreground">
            Values in other tabs are kept while you switch.
          </p>
        </TabsContent>
      </Tabs>
      <Button type="submit" size="sm" className="mt-4 w-full">
        Publish event
      </Button>
    </form>
  )
}
