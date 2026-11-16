"use client"

import * as React from "react"
import {
  ChevronRight as ChevronRightIcon,
  Settings as SettingsIcon,
} from "@designali/icons"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Switch } from "@workspace/ui/components/switch"

export default function DialogNestedViewBreadcrumb() {
  const [view, setView] = React.useState<"notifications" | "email">(
    "notifications"
  )

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <SettingsIcon data-icon="inline-start" />
        Preferences
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  render={<button type="button" />}
                  onClick={() => setView("notifications")}
                >
                  Notifications
                </BreadcrumbLink>
              </BreadcrumbItem>
              {view === "email" && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Email</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
          <DialogTitle>
            {view === "email" ? "Email notifications" : "Notifications"}
          </DialogTitle>
          <DialogDescription>
            {view === "email"
              ? "Choose which updates arrive in your inbox."
              : "Pick a channel to configure."}
          </DialogDescription>
        </DialogHeader>
        {view === "notifications" ? (
          <div className="flex flex-col gap-1">
            <Button
              variant="ghost"
              className="justify-between"
              onClick={() => setView("email")}
            >
              Email
              <ChevronRightIcon data-icon="inline-end" />
            </Button>
            <Button variant="ghost" className="justify-between" disabled>
              Push
              <ChevronRightIcon data-icon="inline-end" />
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-3 text-xs">
            {["Weekly digest", "Mentions", "Billing alerts"].map((item) => (
              <label key={item} className="flex items-center justify-between">
                {item}
                <Switch defaultChecked />
              </label>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
