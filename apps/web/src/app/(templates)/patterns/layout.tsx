import { Metadata } from "next"
import {
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"
import { ThemeSelectorPattern } from "@/src/components/common/synced-theme-selector"
import { ThemeListenerPattern } from "@/src/components/common/theme-listener" 
import { PatternSidebar } from "@/src/components/templates/pattern/pattern-sidebar"

const title = "Patterns"
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

interface GraphicMarketingLayoutProps {
  children: React.ReactNode
}

export default async function GraphicMarketingLayout({
  children,
}: GraphicMarketingLayoutProps) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <ThemeListenerPattern />
      
      <div className="flex min-h-0 flex-1">
        <SidebarProvider
          style={
            {
              "--sidebar-width": "12rem",
              "--sidebar-width-mobile": "12rem",
            } as React.CSSProperties
          }
        >
          <main className="flex min-w-0 flex-1 flex-col overflow-y-auto">
            <SidebarTrigger className="absolute top-12 right-2 z-10 opacity-60 md:hidden" />
            {children}
          </main>
          <PatternSidebar side="right" />
        </SidebarProvider>
      </div>
    </div>
  )
}