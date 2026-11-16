"use client"

import * as React from "react"
import {
  SlidersHorizontal as SlidersHorizontalIcon,
  X as XIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Slider } from "@workspace/ui/components/slider"

export default function NonModalInspectorDrawer() {
  const [radius, setRadius] = React.useState(12)
  const [opacity, setOpacity] = React.useState(100)

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4">
      <div className="flex h-40 w-full items-center justify-center border bg-muted/30">
        <div
          className="size-20 bg-gradient-to-br from-sky-400 to-indigo-500"
          style={{ borderRadius: radius, opacity: opacity / 100 }}
        />
      </div>
      <Drawer modal={false} disablePointerDismissal swipeDirection="right">
        <DrawerTrigger render={<Button variant="outline" />}>
          <SlidersHorizontalIcon data-icon="inline-start" />
          Inspect layer
        </DrawerTrigger>
        <DrawerContent className="shadow-lg">
          <DrawerHeader className="flex-row items-center justify-between">
            <div>
              <DrawerTitle>Rectangle 4</DrawerTitle>
              <DrawerDescription>Frame / Hero</DrawerDescription>
            </div>
            <DrawerClose
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Close inspector"
                />
              }
            >
              <XIcon />
            </DrawerClose>
          </DrawerHeader>
          <FieldGroup className="p-4">
            <div className="grid grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="ins-w">W</FieldLabel>
                <Input id="ins-w" defaultValue="80" />
              </Field>
              <Field>
                <FieldLabel htmlFor="ins-h">H</FieldLabel>
                <Input id="ins-h" defaultValue="80" />
              </Field>
            </div>
            <Field>
              <div className="flex justify-between">
                <FieldLabel>Corner radius</FieldLabel>
                <span className="tabular-nums">{radius}px</span>
              </div>
              <Slider
                value={[radius]}
                max={40}
                onValueChange={(value) =>
                  setRadius(typeof value === "number" ? value : (value[0] ?? 0))
                }
                aria-label="Corner radius"
              />
            </Field>
            <Field>
              <div className="flex justify-between">
                <FieldLabel>Opacity</FieldLabel>
                <span className="tabular-nums">{opacity}%</span>
              </div>
              <Slider
                value={[opacity]}
                max={100}
                onValueChange={(value) =>
                  setOpacity(
                    typeof value === "number" ? value : (value[0] ?? 0)
                  )
                }
                aria-label="Opacity"
              />
            </Field>
          </FieldGroup>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
