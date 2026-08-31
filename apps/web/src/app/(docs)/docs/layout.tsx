import { DocsSidebar } from "@/src/components/docs/docs-sidebar"
import { AppSidebar } from "@/src/components/layout/app-sidebar"
import { source } from "@/src/lib/source"
import {
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container-wrapper flex w-full min-w-0 flex-1 flex-col overflow-x-hidden">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "12rem",
            "--sidebar-width-mobile": "12rem",
          } as React.CSSProperties
        }
        className="flex h-full min-h-0 w-full min-w-0"
      >
        <DocsSidebar tree={source.pageTree} />
        <main className="flex min-w-0 flex-1 flex-col overflow-x-hidden">
          <SidebarTrigger className={"absolute z-10 opacity-60 md:hidden"} />
          <div className="h-full w-full min-w-0 flex-1">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  )
}
