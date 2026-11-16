import Link from "next/link"
import { HelpCircle } from "lucide-react"
import { uiCategories, registryCategories } from "@/registry/registry-categories"
// Count from the registry metadata, not "@/registry/__index__": importing the
// index makes the bundler compile all ~3,000 registry components.
import { RegistryMeta } from "@/registry/__meta__"
import { getCategoryIcon } from "@/src/lib/category-icons"

const categoryCounts = new Map<string, number>()
for (const item of Object.values(RegistryMeta)) {
  for (const slug of (item.categories as string[]) ?? []) {
    categoryCounts.set(slug, (categoryCounts.get(slug) ?? 0) + 1)
  }
}

function getCategoryCount(categorySlug: string) {
  return categoryCounts.get(categorySlug) ?? 0
}

function CategoryIcon({ name }: { name: string }) {
  const IconComponent = getCategoryIcon(name) ?? HelpCircle
  return <IconComponent className="h-4 w-4 shrink-0 text-muted-foreground" />
}

export function UIDesignCategory() {

  return (
    <div className="">
      <div className="relative flex items-center justify-center border-x border-t border-dotted">
        <div className="w-full max-w-5xl p-6 lg:border-x border-dotted">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-2 lg:grid-cols-4">
            {uiCategories
              .filter((category) => !category.hidden)
              .map((category) => (
                <Link
                  key={category.slug}
                  href={`/ui/${category.slug}`}
                  className="block"
                >
                  <div className="flex w-full items-center justify-between border px-4 py-2 hover:text-background transition-colors hover:bg-foreground">
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Icon Render */}
                      <CategoryIcon name={category.iconName} />

                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{category.name}</p>
                      </div>

                      <span className="text-xs text-muted-foreground">
                        {getCategoryCount(category.slug)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function BlocksCategory() {


  return (
    <div className="">
      <div className="relative flex items-center justify-center border-x border-t border-dotted">
        <div className="w-full max-w-5xl p-6 lg:border-x border-dotted">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-2 lg:grid-cols-4">
            {registryCategories
              .filter((category) => !category.hidden)
              .map((category) => (
                <Link
                  key={category.slug}
                  href={`/blocks/${category.slug}`}
                  className="block"
                >
                  <div className="flex w-full items-center justify-between border px-4 py-2 hover:text-background transition-colors hover:bg-foreground">
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Icon Render */}
                      <CategoryIcon name={category.iconName} />

                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{category.name}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {getCategoryCount(category.slug)}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}