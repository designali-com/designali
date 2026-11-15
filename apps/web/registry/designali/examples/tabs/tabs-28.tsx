import { FilePenIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

export default function EmptyStateTabs() {
  return (
    <Tabs defaultValue="drafts" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="published">Published</TabsTrigger>
        <TabsTrigger value="drafts">Drafts</TabsTrigger>
        <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
      </TabsList>
      <TabsContent value="published" className="border p-3">
        How we cut build times by 60%
      </TabsContent>
      <TabsContent value="drafts">
        <Empty className="border">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FilePenIcon />
            </EmptyMedia>
            <EmptyTitle>No drafts</EmptyTitle>
            <EmptyDescription>
              Start writing and your drafts will be saved here.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm">New post</Button>
          </EmptyContent>
        </Empty>
      </TabsContent>
      <TabsContent value="scheduled" className="border p-3">
        Release notes v4.2 · Nov 20, 09:00
      </TabsContent>
    </Tabs>
  )
}
