import {
  CreditCard,
  Headphones,
  RotateCcw,
  ShieldCheck,
  Download,
} from "@designali/icons"

const perks = [
  { icon: Download, title: "Instant download", body: "Right after checkout" },
  { icon: RotateCcw, title: "Regular updates", body: "New blocks and templates" },
  { icon: ShieldCheck, title: "Production-ready", body: "Next.js, React and Tailwind" },
  { icon: Headphones, title: "Direct support", body: "From Ali Imam and the studio" },
]

const columns = [
  { title: "Shop", links: ["Templates", "Blocks", "UI Designs", "Icons", "Logos"] },
  { title: "Support", links: ["Docs", "Downloads", "Licensing", "Pricing", "FAQ"] },
  { title: "About", links: ["Work", "Ali Imam", "Blogs", "Contact"] },
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
          <p className="text-2xl font-semibold tracking-tight">designali</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
            Templates, blocks and design resources crafted by Ali Imam. Design
            se code tak.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 border px-3 py-2 text-xs">
            <span className="flex gap-0.5 text-primary">{"★★★★★"}</span>
            Loved by designers and developers
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
          <p className="text-xs text-muted-foreground">© 2026 Designali. All prices in USD.</p>
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
