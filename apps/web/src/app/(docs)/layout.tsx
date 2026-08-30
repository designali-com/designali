 
import { TemplateHeader } from "@/src/components/layout/header";
 

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
                
                {children}
            </div>
        </div>
    );
}