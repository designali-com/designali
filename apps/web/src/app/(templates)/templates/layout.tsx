
import { TemplateSidebar } from "@/src/components/templates/template-sidebar";

import {
    SidebarProvider,
    SidebarTrigger,
} from "@workspace/ui/components/sidebar";

interface MarketingLayoutProps {
    children: React.ReactNode;
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    return (
        <div className="flex h-full flex-col overflow-hidden">
            <div className="flex min-h-0 flex-1">
                <SidebarProvider
                    style={
                        {
                            "--sidebar-width": "12rem",
                            "--sidebar-width-mobile": "12rem",
                        } as React.CSSProperties
                    } >
                    <main className="flex min-w-0 flex-1 flex-col overflow-y-auto">
                    <SidebarTrigger className={"absolute opacity-60 right-2 top-12 md:hidden z-10"} />
                        {children} 
                    </main>
                    <TemplateSidebar side="right" />
                </SidebarProvider>
            </div>
        </div>
    );
}