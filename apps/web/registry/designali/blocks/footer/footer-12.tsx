import { Globe, Smartphone, TabletSmartphone } from "lucide-react"

const columns = [
  { title: "Product", links: ["Flights", "Hotels", "Car rental", "Trains", "Gift cards"] },
  { title: "Explore", links: ["City guides", "Weekend deals", "Travel insurance", "Visa checker", "Price alerts"] },
  { title: "Business", links: ["Wayfare for teams", "Expense sync", "Travel policy", "Partners", "Affiliates"] },
  { title: "Company", links: ["About", "Careers", "Press", "Sustainability", "Investors"] },
  { title: "Support", links: ["Help centre", "Manage booking", "Refunds", "Accessibility", "Contact"] },
  { title: "Legal", links: ["Terms", "Privacy", "Cookies", "Modern slavery", "Imprint"] },
]

export default function Footer12() {
  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            <a href="#" className="flex items-center gap-2 border bg-background px-3 py-2 text-xs hover:bg-muted">
              <Smartphone className="size-4" />
              Get the iOS app
            </a>
            <a href="#" className="flex items-center gap-2 border bg-background px-3 py-2 text-xs hover:bg-muted">
              <TabletSmartphone className="size-4" />
              Get the Android app
            </a>
          </div>
          <label className="flex w-fit items-center gap-2 border bg-background px-3 py-2 text-xs">
            <Globe className="size-4 text-muted-foreground" />
            <select aria-label="Region and language" className="bg-transparent outline-none">
              <option>United Kingdom / English</option>
              <option>Deutschland / Deutsch</option>
              <option>France / Francais</option>
              <option>Espana / Espanol</option>
            </select>
          </label>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <span className="font-semibold text-foreground">Wayfare</span>
            © 2026 Wayfare Travel Group B.V.
          </p>
          <p>Prices shown include taxes and fees. Package holidays are financially protected.</p>
        </div>
      </div>
    </footer>
  )
}
