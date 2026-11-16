"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

export default function UnsavedChangesTabs() {
  const [store, setStore] = React.useState("Designali")
  const [email, setEmail] = React.useState("hello@designali.com")
  const storeDirty = store !== "Designali"
  const emailDirty = email !== "hello@designali.com"

  return (
    <Tabs defaultValue="store" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="store">
          Store{" "}
          {storeDirty && (
            <span className="size-1.5 rounded-full bg-primary" />
          )}
        </TabsTrigger>
        <TabsTrigger value="contact">
          Contact{" "}
          {emailDirty && (
            <span className="size-1.5 rounded-full bg-primary" />
          )}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="store" keepMounted className="grid gap-1.5">
        <Label htmlFor="uc-store">Store name</Label>
        <Input
          id="uc-store"
          value={store}
          onChange={(e) => setStore(e.target.value)}
        />
      </TabsContent>
      <TabsContent value="contact" keepMounted className="grid gap-1.5">
        <Label htmlFor="uc-email">Support email</Label>
        <Input
          id="uc-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </TabsContent>
      <div className="flex justify-end gap-2">
        <Button
          variant="ghost"
          size="sm"
          disabled={!storeDirty && !emailDirty}
          onClick={() => {
            setStore("Designali")
            setEmail("hello@designali.com")
          }}
        >
          Discard
        </Button>
        <Button size="sm" disabled={!storeDirty && !emailDirty}>
          Save
        </Button>
      </div>
    </Tabs>
  )
}
