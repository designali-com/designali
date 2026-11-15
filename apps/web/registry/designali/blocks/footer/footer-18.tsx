import { CreditCard, Headphones, RotateCcw, ShieldCheck, Truck } from "lucide-react"

const perks = [
  { icon: Truck, title: "Free delivery", body: "On orders over $60" },
  { icon: RotateCcw, title: "100-night trial", body: "Return it, no questions" },
  { icon: ShieldCheck, title: "10-year warranty", body: "On every frame" },
  { icon: Headphones, title: "Sleep experts", body: "7 days a week, 8am to 10pm" },
]

const columns = [
  { title: "Shop", links: ["Mattresses", "Bed frames", "Pillows", "Bedding", "Bundles"] },
  { title: "Support", links: ["Track order", "Delivery", "Returns", "Warranty", "FAQ"] },
  { title: "About", links: ["Our materials", "Showrooms", "Reviews", "Careers"] },
]

const payments = ["Credit card", "Debit card", "Bank transfer", "Pay in 4", "Mobile wallet", "Gift card"]

export default function Footer18() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="border-b bg-muted/40">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-0 lg:grid-cols-4">
          {perks.map((perk) => (
            <li key={perk.title} className="flex items-center gap-3 px-6 py-6">
              <perk.icon className="size-6 shrink-0" strokeWidth={1.5} />
              <div className="min-w-0">
                <p className="text-sm font-medium">{perk.title}</p>
                <p className="text-xs text-muted-foreground">{perk.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <p className="text-2xl font-semibold tracking-tight">Drowse</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
            Mattresses made in North Carolina from natural latex, wool and
            organic cotton.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 border px-3 py-2 text-xs">
            <span className="flex gap-0.5 text-amber-500">{"★★★★★"}</span>
            4.8 from 21,400 reviews
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-medium">{column.title}</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">© 2026 Drowse Sleep Co. All prices in USD.</p>
          <ul className="flex flex-wrap items-center gap-2" aria-label="Accepted payment methods">
            <li className="text-muted-foreground">
              <CreditCard className="size-4" />
            </li>
            {payments.map((payment) => (
              <li key={payment} className="border bg-card px-2 py-1 text-[10px] font-medium text-muted-foreground">
                {payment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
