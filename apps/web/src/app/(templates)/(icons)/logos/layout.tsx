import { Suspense } from "react"
import type { Metadata } from "next"

import { LogoSidebar } from "@/src/components/templates/(icons)/all-sidebar"

import {
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"

const title = "Logos"
const description =
  "I create digital experiences that connect and inspire. I build apps, websites, brands, and products end-to-end."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function LogosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "12rem",
          "--sidebar-width-mobile": "12rem",
        } as React.CSSProperties
      }
    >
      <div className="flex h-full min-h-0 w-full overflow-hidden">
        <main className="flex min-w-0 flex-1 flex-col overflow-y-auto">
          <SidebarTrigger className="absolute top-12 right-2 z-10 opacity-60 md:hidden" />

          <Suspense
            fallback={
              <div className="flex h-[85vh] items-center justify-center p-4 text-sm text-muted-foreground">
                Loading logos...
              </div>
            }
          >
            {children}
          </Suspense>
        </main>

        <LogoSidebar side="right" />
      </div>
    </SidebarProvider>
  )
}