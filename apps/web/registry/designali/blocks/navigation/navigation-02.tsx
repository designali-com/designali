import {
  Bell,
  CreditCard,
  Folder,
  House,
  Inbox,
  LogOut,
  Settings,
  Star,
  User,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const groups = [
  {
    title: "Workspace",
    links: [
      { icon: House, label: "Overview", active: true },
      { icon: Inbox, label: "Inbox", count: 12 },
      { icon: Folder, label: "Projects" },
      { icon: Star, label: "Favorites" },
    ],
  },
  {
    title: "Account",
    links: [
      { icon: User, label: "Profile" },
      { icon: Bell, label: "Notifications", count: 3 },
      { icon: CreditCard, label: "Billing" },
      { icon: Settings, label: "Settings" },
    ],
  },
]

const projects = [
  { name: "designali.com refresh", color: "bg-chart-1" },
  { name: "Dalim UI kit", color: "bg-chart-2" },
  { name: "Portfolio template", color: "bg-chart-3" },
]

export default function Navigation02() {
  return (
    <section className="flex min-h-[640px] w-full bg-background">
      <aside className="flex w-64 shrink-0 flex-col border-e bg-muted/30">
        <div className="flex h-14 items-center gap-2 border-b px-5 font-semibold">
          <span className="flex size-6 items-center justify-center bg-primary text-xs text-primary-foreground">
            D
          </span>
          Designali
        </div>
        <nav className="flex-1 space-y-6 p-3">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="px-3 pb-2 text-xs text-muted-foreground">{group.title}</p>
              <ul className="space-y-0.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href="#"
                      className={cn(
                        "flex h-9 items-center gap-3 px-3 text-sm transition-colors hover:bg-muted",
                        link.active
                          ? "border-s-2 border-foreground bg-background font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <link.icon className="size-4" />
                      {link.label}
                      {link.count && (
                        <span className="ms-auto bg-foreground px-1.5 text-[10px] leading-4 text-background">
                          {link.count}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="px-3 pb-2 text-xs text-muted-foreground">Pinned projects</p>
            <ul className="space-y-0.5">
              {projects.map((project) => (
                <li key={project.name}>
                  <a
                    href="#"
                    className="flex h-9 items-center gap-3 px-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    <span className={cn("size-2", project.color)} />
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="flex items-center gap-3 border-t p-4">
          <span className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-medium">
            AI
          </span>
          <div className="min-w-0 flex-1 text-sm">
            <p className="truncate font-medium">Ali Imam</p>
            <p className="truncate text-xs text-muted-foreground">ali@designali.com</p>
          </div>
          <a href="#" aria-label="Sign out" className="text-muted-foreground hover:text-foreground">
            <LogOut className="size-4" />
          </a>
        </div>
      </aside>
      <div className="hidden flex-1 flex-col sm:flex">
        <div className="flex h-14 items-center border-b px-8 text-sm font-medium">Overview</div>
        <div className="grid flex-1 grid-cols-3 gap-px bg-border p-px">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-background" />
          ))}
        </div>
      </div>
    </section>
  )
}
