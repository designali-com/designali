import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area"

const code = [
  "import { createClient } from '@fieldnote/sdk'",
  "",
  "const client = createClient({ apiKey: process.env.FIELDNOTE_API_KEY, region: 'eu-west-1', timeout: 10_000 })",
  "",
  "export async function syncOrders(since: Date) {",
  "  const orders = await client.orders.list({ updatedAfter: since.toISOString(), limit: 100, expand: ['customer', 'items'] })",
  "  for (const order of orders.data) {",
  "    await db.orders.upsert({ where: { id: order.id }, create: order, update: order })",
  "  }",
  "  return orders.data.length",
  "}",
  "",
  "syncOrders(new Date(Date.now() - 86_400_000)).then((count) => console.log('synced', count))",
]

export default function CodeSnippetBothAxes() {
  return (
    <ScrollArea className="h-56 w-full max-w-md border bg-muted/30">
      <pre className="w-max p-4 font-mono text-xs">
        {code.map((line, i) => (
          <div key={i} className="flex gap-4">
            <span className="w-5 text-right text-muted-foreground select-none">
              {i + 1}
            </span>
            <span>{line}</span>
          </div>
        ))}
      </pre>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
