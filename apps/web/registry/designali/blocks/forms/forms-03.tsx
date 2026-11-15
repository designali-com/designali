"use client"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"
import { Switch } from "@workspace/ui/components/switch"
import { Textarea } from "@workspace/ui/components/textarea"

const notifications = [
  {
    title: "Product updates",
    description: "Release notes and new features, once a month.",
    enabled: true,
  },
  {
    title: "Comment mentions",
    description: "When someone mentions you in a file or thread.",
    enabled: true,
  },
  {
    title: "Weekly digest",
    description: "A summary of activity across your projects.",
    enabled: false,
  },
]

export default function Forms03() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 border-b border-border pb-6">
          <h2 className="text-3xl font-semibold tracking-tight">Settings</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage your public profile and how we contact you.
          </p>
        </div>

        <form className="divide-y divide-border">
          <div className="grid gap-6 py-8 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-medium">Profile</h3>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                This information appears on your public portfolio page.
              </p>
            </div>
            <div className="space-y-5 md:col-span-2">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="f3-first">First name</Label>
                  <Input id="f3-first" defaultValue="Jonah" className="h-10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="f3-last">Last name</Label>
                  <Input id="f3-last" defaultValue="Okafor" className="h-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="f3-bio">Bio</Label>
                <Textarea
                  id="f3-bio"
                  rows={4}
                  defaultValue="Type designer and brand consultant based in Lagos. Currently working on a variable grotesk for West African languages."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="f3-timezone">Timezone</Label>
                <NativeSelect id="f3-timezone" className="w-full" defaultValue="wat">
                  <NativeSelectOption value="gmt">GMT (London)</NativeSelectOption>
                  <NativeSelectOption value="wat">WAT (Lagos)</NativeSelectOption>
                  <NativeSelectOption value="est">EST (New York)</NativeSelectOption>
                  <NativeSelectOption value="jst">JST (Tokyo)</NativeSelectOption>
                </NativeSelect>
              </div>
            </div>
          </div>

          <div className="grid gap-6 py-8 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-medium">Notifications</h3>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Choose which emails land in your inbox.
              </p>
            </div>
            <ul className="divide-y divide-border border border-border md:col-span-2">
              {notifications.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center justify-between gap-6 p-4"
                >
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <Switch defaultChecked={item.enabled} aria-label={item.title} />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end gap-2 py-8">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit">Save changes</Button>
          </div>
        </form>
      </div>
    </section>
  )
}
