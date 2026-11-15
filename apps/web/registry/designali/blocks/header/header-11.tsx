"use client"

import { useState } from "react"
import {
  BarChart3,
  ChevronDown,
  Database,
  LifeBuoy,
  Menu,
  Shield,
  Workflow,
  X,
  Zap,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const products = [
  { icon: Database, title: "Warehouse", body: "Serverless Postgres with branching" },
  { icon: Workflow, title: "Pipelines", body: "Sync 200+ sources on a schedule" },
  { icon: BarChart3, title: "Insights", body: "Dashboards your execs will read" },
  { icon: Shield, title: "Governance", body: "Lineage, PII tagging and audit logs" },
]

const resources = ["Documentation", "API reference", "Templates", "Community forum"]

const links = ["Customers", "Pricing", "Docs"]

export default function Header11() {
  const [menu, setMenu] = useState(false)
  const [mobile, setMobile] = useState(false)
  const [mobileProducts, setMobileProducts] = useState(false)

  return (
    <section className="w-full bg-background">
      <header className="relative border-b" onMouseLeave={() => setMenu(false)}>
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-6">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid size-6 grid-cols-2 gap-0.5">
              <span className="bg-foreground" />
              <span className="bg-foreground/40" />
              <span className="bg-foreground/40" />
              <span className="bg-foreground" />
            </span>
            Quarry
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <button
              type="button"
              aria-expanded={menu}
              onClick={() => setMenu(!menu)}
              onMouseEnter={() => setMenu(true)}
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground aria-expanded:text-foreground"
            >
              Products
              <ChevronDown className={`size-3.5 transition-transform ${menu ? "rotate-180" : ""}`} />
            </button>
            {links.map((link) => (
              <a
                key={link}
                href="#"
                onMouseEnter={() => setMenu(false)}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="ms-auto hidden items-center gap-2 md:flex">
            <Button variant="ghost" nativeButton={false} render={<a href="#" />}>
              Sign in
            </Button>
            <Button nativeButton={false} render={<a href="#" />}>
              Start building
            </Button>
          </div>
          <Button
            variant="outline"
            size="icon-lg"
            className="ms-auto md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobile}
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? <X /> : <Menu />}
          </Button>
        </div>

        {menu && (
          <div className="absolute inset-x-0 top-full z-20 hidden border-b bg-background shadow-lg md:block">
            <div className="mx-auto grid max-w-7xl grid-cols-[2fr_1fr_1fr] gap-10 px-6 py-8">
              <div className="grid grid-cols-2 gap-2">
                {products.map((product) => (
                  <a key={product.title} href="#" className="flex gap-3 p-3 transition-colors hover:bg-muted">
                    <span className="flex size-9 shrink-0 items-center justify-center border bg-background">
                      <product.icon className="size-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium">{product.title}</span>
                      <span className="block text-xs text-muted-foreground">{product.body}</span>
                    </span>
                  </a>
                ))}
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Resources</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {resources.map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#" className="flex flex-col justify-between bg-foreground p-5 text-background">
                <Zap className="size-5" />
                <span>
                  <span className="block text-sm font-medium">Quarry Live, June 12</span>
                  <span className="mt-1 block text-xs opacity-70">
                    Watch the keynote and product launches.
                  </span>
                </span>
              </a>
            </div>
          </div>
        )}

        {mobile && (
          <div className="border-t md:hidden">
            <nav className="flex flex-col px-6 py-2 text-sm">
              <button
                type="button"
                aria-expanded={mobileProducts}
                onClick={() => setMobileProducts(!mobileProducts)}
                className="flex items-center justify-between border-b py-3"
              >
                Products
                <ChevronDown className={`size-4 transition-transform ${mobileProducts ? "rotate-180" : ""}`} />
              </button>
              {mobileProducts && (
                <ul className="border-b py-2">
                  {products.map((product) => (
                    <li key={product.title}>
                      <a href="#" className="flex items-center gap-3 py-2 text-muted-foreground">
                        <product.icon className="size-4" />
                        {product.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {links.map((link) => (
                <a key={link} href="#" className="border-b py-3">
                  {link}
                </a>
              ))}
              <a href="#" className="flex items-center gap-2 py-3 text-muted-foreground">
                <LifeBuoy className="size-4" />
                Support
              </a>
            </nav>
            <div className="grid grid-cols-2 gap-2 px-6 pb-6">
              <Button variant="outline" nativeButton={false} render={<a href="#" />}>
                Sign in
              </Button>
              <Button nativeButton={false} render={<a href="#" />}>
                Start building
              </Button>
            </div>
          </div>
        )}
      </header>
    </section>
  )
}
