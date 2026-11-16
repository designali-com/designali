import {
  Globe,
  Smartphone,
  TabletSmartphone,
} from "@designali/icons"

const columns = [
  { title: "Products", links: ["Templates", "Blocks", "UI Designs", "Landing Pages", "Pricing"] },
  { title: "Assets", links: ["Icons", "Logos", "Illustration", "Bento", "Marquee"] },
  { title: "Services", links: ["Brand identity", "UI/UX design", "Web development", "Design systems", "CGI & motion"] },
  { title: "Studio", links: ["Work", "Ali Imam", "Blogs", "Dalim projects", "Contact"] },
  { title: "Support", links: ["Docs", "Getting started", "Licensing", "Email support", "Contact"] },
  { title: "Legal", links: ["Terms", "Privacy", "License", "Refunds", "Cookies"] },
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
              iPhone mockups
            </a>
            <a href="#" className="flex items-center gap-2 border bg-background px-3 py-2 text-xs hover:bg-muted">
              <TabletSmartphone className="size-4" />
              iPad mockups
            </a>
          </div>
          <label className="flex w-fit items-center gap-2 border bg-background px-3 py-2 text-xs">
            <Globe className="size-4 text-muted-foreground" />
            <select aria-label="Region and language" className="bg-transparent outline-none">
              <option>Global / English</option>
              <option>India / English</option>
            </select>
          </label>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <span className="font-semibold text-foreground">designali</span>
            © 2026 Designali
          </p>
          <p>Designed and built by Ali Imam. Design se code tak.</p>
        </div>
      </div>
    </footer>
  )
}
