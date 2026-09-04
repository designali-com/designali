import Link from "next/link"

import { uiCategories } from "@/registry/registry-categories"

export function UIDesignCategory() {
  return (
    <div className="">
      <div className="relative flex items-center justify-center border-x border-t border-dotted">
        <div className="w-full max-w-5xl p-6 lg:border-x">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            {uiCategories
              .filter((category) => !category.hidden)
              .map((category) => (
                <Link
                  key={category.slug}
                  href={`/ui/${category.slug}`}
                  className="block"
                >
                  <div className="flex w-full items-center justify-between border px-4 py-3 transition-colors hover:bg-muted">
                    <div className="min-w-0">
                      <p className="truncate font-medium">{category.name}</p>

                      <p className="truncate text-xs text-muted-foreground">
                        {category.description}
                      </p>
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
