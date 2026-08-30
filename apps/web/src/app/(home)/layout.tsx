import { Footer } from "@/src/components/layout/footer"
import { Header } from "@/src/components/layout/header"

 

interface MarketingLayoutProps {
    children: React.ReactNode
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    return (
        <>
          <Header /> 
            <main className="flex-1 border-b mt-10 border-dotted">{children}</main>
            <Footer />
        </>
    )
}