"use client"

import * as React from "react"
import {
  AtSign as AtSignIcon,
  Calendar as CalendarIcon,
  GripVertical as GripVerticalIcon,
  Paperclip as PaperclipIcon,
  SquareCheck as SquareCheckIcon,
  Type as TypeIcon,
} from "@designali/icons"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

const fieldTypes = [
  { type: "Short text", icon: TypeIcon },
  { type: "Email", icon: AtSignIcon },
  { type: "Date", icon: CalendarIcon },
  { type: "Checkbox", icon: SquareCheckIcon },
  { type: "File upload", icon: PaperclipIcon },
]

export default function FormBuilderInsertMenubar() {
  const [fields, setFields] = React.useState(["Short text", "Email"])

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Insert</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarLabel>Field type</MenubarLabel>
              {fieldTypes.map((f) => (
                <MenubarItem
                  key={f.type}
                  onClick={() => setFields((prev) => [...prev, f.type])}
                >
                  <f.icon /> {f.type}
                </MenubarItem>
              ))}
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Form</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Preview</MenubarItem>
              <MenubarItem
                variant="destructive"
                disabled={fields.length === 0}
                onClick={() => setFields([])}
              >
                Remove all fields
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex flex-col gap-1.5 border p-2">
        {fields.length === 0 && (
          <p className="py-4 text-center text-xs text-muted-foreground">
            Use Insert to add a field.
          </p>
        )}
        {fields.map((field, i) => (
          <div
            key={i}
            className="flex items-center gap-2 border border-dashed px-2 py-1.5 text-xs"
          >
            <GripVerticalIcon className="size-3.5 text-muted-foreground" />
            {field}
          </div>
        ))}
      </div>
    </div>
  )
}
