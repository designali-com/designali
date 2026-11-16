import {
  ArrowUpRight,
  Clock,
  Users,
  Globe,
  MessageCircle,
  Phone,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

export default function Contact10() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Support
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Every way to reach Designali
          </h2>
        </div>

        <div className="grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-4">
          <div className="relative flex flex-col justify-between overflow-hidden border bg-primary p-8 text-primary-foreground md:col-span-2 md:row-span-2">
            <div className="absolute -end-16 -top-16 size-64 rounded-full border-[40px] border-primary-foreground/10" />
            <MessageCircle className="size-8" />
            <div className="relative space-y-4">
              <h3 className="text-3xl font-semibold tracking-tight">
                Live chat with the studio
              </h3>
              <p className="max-w-sm text-primary-foreground/80">
                Support comes from the people who design and build Designali.
                Median first reply: 4 minutes.
              </p>
              <Button variant="secondary" size="lg" nativeButton={false} render={<a href="#" />}>
                Start a conversation
              </Button>
            </div>
          </div>

          <a href="https://x.com/designali_com" className="group flex flex-col justify-between border bg-card p-6 transition-colors hover:bg-muted md:col-span-2">
            <div className="flex items-center justify-between">
              <Users className="size-5" />
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <div>
              <p className="font-medium">Designali community</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Designers and developers sharing blocks, icons and fixes on X.
              </p>
            </div>
          </a>

          <div className="flex flex-col justify-between border bg-card p-6">
            <Phone className="size-5" />
            <div>
              <p className="font-medium">Book a call</p>
              <p className="mt-1 text-sm text-muted-foreground">30 minutes with Ali Imam</p>
            </div>
          </div>

          <div className="flex flex-col justify-between border bg-card p-6">
            <Clock className="size-5" />
            <div>
              <p className="font-medium">Mon&ndash;Fri, studio hours</p>
              <p className="mt-1 text-sm text-muted-foreground">Weekend replies for Designali Pro</p>
            </div>
          </div>

          <div className="flex flex-col justify-between border bg-muted/50 p-6 md:col-span-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              All systems operational
            </div>
            <div className="mt-6 flex h-8 items-end gap-0.5">
              {Array.from({ length: 60 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i === 41
                      ? "h-5 flex-1 bg-primary"
                      : "h-8 flex-1 bg-primary/70 dark:bg-primary/60"
                  }
                />
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              designali.com: 99.98% uptime over the last 60 days
            </p>
          </div>

          <div className="flex flex-col justify-between border bg-card p-6">
            <Globe className="size-5" />
            <div>
              <p className="font-medium">www.designali.com</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Docs, templates, blocks and icons
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
