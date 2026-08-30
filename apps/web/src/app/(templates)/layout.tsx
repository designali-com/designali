import { AppSidebar } from "@/src/components/layout/app-sidebar";
import { TemplateHeader } from "@/src/components/layout/header";

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
        <div className="flex h-screen flex-col overflow-hidden">
            <TemplateHeader />

            <div className="flex min-h-0 flex-1">
                <SidebarProvider
                    style={
                        {
                            "--sidebar-width": "12rem",
                            "--sidebar-width-mobile": "12rem",
                        } as React.CSSProperties
                    }
                    className="flex min-h-0 h-full w-full"
                >
                    <AppSidebar />

                    <main className="flex min-w-0 flex-1 flex-col overflow-y-auto">
                        <SidebarTrigger className={"absolute opacity-60  md:hidden z-10"} /> 
                        {children}
                    </main>
                </SidebarProvider>
            </div>
        </div>
    );
}