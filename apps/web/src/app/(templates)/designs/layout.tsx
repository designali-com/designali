 
import { FigmaSidebar } from "@/src/components/templates/design/figma-sidebar"
import {
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"
import { Suspense } from "react"

interface FigmaLayoutProps {
  children: React.ReactNode
}

export default function FigmaLayout({
  children,
}: FigmaLayoutProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden">
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
            <SidebarTrigger
              className="absolute top-12 right-2 z-10 opacity-60 md:hidden"
            />

            {children}
          </main>
          
        </SidebarProvider>
      </div>
    </div>
  )
}