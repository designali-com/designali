import {
  ArrowDownLeft,
  ArrowUpRight,
  Briefcase,
  Car,
  Coffee,
  ShoppingBag,
  Wifi,
} from "@designali/icons"

import type * as React from "react"

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number }>

type Txn = { merchant: string; category: string; icon: IconComponent; amount: number; method: string; pending?: boolean }

const ledger: { date: string; items: Txn[] }[] = [
  {
    date: "Today, Nov 15",
    items: [
      { merchant: "Studio coffee", category: "Coffee", icon: Coffee, amount: -4.8, method: "•• 4021", pending: true },
      { merchant: "Designali client, brand identity", category: "Client payment", icon: Briefcase, amount: 3200, method: "Transfer" },
    ],
  },
  {
    date: "Thu, Nov 13",
    items: [
      { merchant: "Template sales, designali.com", category: "Sales", icon: ShoppingBag, amount: 86.42, method: "•• 4021" },
      { merchant: "Travel to client workshop", category: "Transport", icon: Car, amount: -18.5, method: "•• 4021" },
      { merchant: "Studio broadband", category: "Utilities", icon: Wifi, amount: -42, method: "Direct debit" },
    ],
  },
  {
    date: "Tue, Nov 11",
    items: [
      { merchant: "Transfer from Savings", category: "Internal", icon: ArrowDownLeft, amount: 500, method: "Pot" },
      { merchant: "Studio rent", category: "Workspace", icon: ArrowUpRight, amount: -1450, method: "Standing order" },
    ],
  },
]

function money(n: number) {
  const value = Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  return `${n < 0 ? "-" : "+"}$${value}`
}

export default function Lists20() {
  const all = ledger.flatMap((day) => day.items)
  const income = all.filter((t) => t.amount > 0).reduce((s, t) => s + t.amount, 0)
  const spent = all.filter((t) => t.amount < 0).reduce((s, t) => s + t.amount, 0)

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="border border-border">
          <div className="grid grid-cols-2 divide-x divide-border border-b border-border">
            <div className="p-5">
              <p className="text-xs text-muted-foreground">Money in</p>
              <p className="mt-1 font-mono text-xl font-semibold text-emerald-600 dark:text-emerald-400">{money(income)}</p>
            </div>
            <div className="p-5">
              <p className="text-xs text-muted-foreground">Money out</p>
              <p className="mt-1 font-mono text-xl font-semibold">{money(spent)}</p>
            </div>
          </div>

          {ledger.map((day) => {
            const net = day.items.reduce((s, t) => s + t.amount, 0)
            return (
              <div key={day.date}>
                <div className="flex items-center justify-between bg-muted/50 px-5 py-2 text-xs">
                  <span className="font-medium">{day.date}</span>
                  <span className="font-mono text-muted-foreground">{money(net)}</span>
                </div>
                <ul className="divide-y divide-border">
                  {day.items.map((txn) => (
                    <li key={txn.merchant} className="flex items-center gap-4 px-5 py-4 hover:bg-muted/30">
                      <span className="flex size-10 shrink-0 items-center justify-center border border-border bg-background">
                        <txn.icon className="size-4 text-muted-foreground" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium">{txn.merchant}</span>
                        <span className="block truncate text-xs text-muted-foreground">
                          {txn.category} · {txn.method}
                        </span>
                      </span>
                      <span className="text-right">
                        <span
                          className={`block font-mono text-sm ${
                            txn.amount > 0 ? "text-emerald-600 dark:text-emerald-400" : ""
                          }`}
                        >
                          {money(txn.amount)}
                        </span>
                        {txn.pending && (
                          <span className="text-[10px] tracking-wider text-amber-600 uppercase dark:text-amber-400">
                            Pending
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}

          <a href="#" className="block border-t border-border py-3 text-center text-xs text-muted-foreground hover:bg-muted/40 hover:text-foreground">
            View all transactions
          </a>
        </div>
      </div>
    </section>
  )
}
