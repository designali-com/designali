import {
  History as HistoryIcon,
  MessageCircle as MessageCircleIcon,
} from "@designali/icons"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const events = [
  { who: "Sara Khan", what: "changed priority to High", when: "10:42" },
  { who: "Ali Imam", what: "assigned the ticket to Sara", when: "09:15" },
  { who: "System", what: "created ticket from email", when: "08:58" },
]

export default function ActivityTimelineTabs() {
  return (
    <Tabs defaultValue="history" className="w-full max-w-sm">
      <TabsList variant="line">
        <TabsTrigger value="comments">
          <MessageCircleIcon data-icon="inline-start" />
          Comments
        </TabsTrigger>
        <TabsTrigger value="history">
          <HistoryIcon data-icon="inline-start" />
          History
        </TabsTrigger>
      </TabsList>
      <TabsContent value="comments" className="border p-3">
        <p className="font-medium">Sara Khan</p>
        <p className="text-muted-foreground">
          Reproduced the Designali template bug on Safari 18, looking into it now.
        </p>
      </TabsContent>
      <TabsContent value="history">
        <ol className="relative ms-1.5 border-s">
          {events.map((e) => (
            <li key={e.when} className="ms-4 pb-3 last:pb-0">
              <span className="absolute -start-1 mt-1 size-2 rounded-full bg-muted-foreground" />
              <p>
                <span className="font-medium">{e.who}</span> {e.what}
              </p>
              <p className="text-muted-foreground">{e.when}</p>
            </li>
          ))}
        </ol>
      </TabsContent>
    </Tabs>
  )
}
