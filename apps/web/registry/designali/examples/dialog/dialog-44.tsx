import { CodeIcon, CopyIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Switch } from "@workspace/ui/components/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import { Textarea } from "@workspace/ui/components/textarea"

export default function TabbedEmbedDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <CodeIcon data-icon="inline-start" />
        Embed chart
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share &quot;Monthly active users&quot;</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="link">
          <TabsList className="w-full">
            <TabsTrigger value="link">Link</TabsTrigger>
            <TabsTrigger value="embed">Embed</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
          </TabsList>
          <TabsContent value="link" className="flex flex-col gap-3 pt-3">
            <Input
              readOnly
              value="https://charts.metricly.io/s/mau-q4"
              aria-label="Public link"
            />
            <Field orientation="horizontal">
              <FieldLabel htmlFor="embed-public">
                Anyone with the link can view
              </FieldLabel>
              <Switch id="embed-public" defaultChecked />
            </Field>
          </TabsContent>
          <TabsContent value="embed" className="flex flex-col gap-3 pt-3">
            <pre className="overflow-x-auto border bg-muted p-3 font-mono text-[11px]">
              {
                '<iframe src="https://charts.metricly.io/e/mau-q4" width="600" height="400"></iframe>'
              }
            </pre>
            <Button variant="outline" size="sm" className="self-start">
              <CopyIcon data-icon="inline-start" />
              Copy snippet
            </Button>
          </TabsContent>
          <TabsContent value="email" className="flex flex-col gap-3 pt-3">
            <Input
              type="email"
              placeholder="colleague@company.com"
              aria-label="Recipient"
            />
            <Textarea placeholder="Add a note (optional)" aria-label="Note" />
            <Button className="self-end">Send</Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
