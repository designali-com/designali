import { BlockDisplay } from "@/src/components/templates/blocks/block-display"
 
export const dynamic = process.env.NODE_ENV === "production" ? "force-static" : "auto"
export const revalidate = process.env.NODE_ENV === "production" ? false : 0

const FEATURED_PAGES = ["landing-01"]

export default function PagesPage() {
  return (
    <div className="mb-20 mt-10"> 
      <div className="flex m-3 flex-col gap-12 md:gap-24">
        {FEATURED_PAGES.map((name) => (
          <BlockDisplay key={name} name={name} />
        ))}
      </div>
    </div>
  )
}
