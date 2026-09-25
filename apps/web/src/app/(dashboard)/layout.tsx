 
import { AppSidebar } from "@/src/components/layout/app-sidebar"
import { DashboardHeader } from "@/src/components/layout/header"

import {
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <DashboardHeader />

      <div className="flex min-h-0 flex-1">
        <SidebarProvider
          style={
            {
              "--sidebar-width": "12rem",
              "--sidebar-width-mobile": "12rem",
            } as React.CSSProperties
          }
          className="flex h-full min-h-0 w-full"
        >
           
          <AppSidebar />
          <main className="flex min-w-0 flex-1 flex-col overflow-y-auto">
            <SidebarTrigger
              className={"absolute top-12 left-2 z-10 opacity-60 md:hidden"}
            />
            {children}
          </main>
        </SidebarProvider>
      </div>
    </div>
  )
}
