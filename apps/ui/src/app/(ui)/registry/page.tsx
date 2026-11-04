import Link from "next/link";

import { getRegistryItems } from "@/src/lib/registry";

export const revalidate = 3600;

export default async function RegistryPage() {
  const items = await getRegistryItems();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10">
        <p className="text-sm text-muted-foreground">
          DESIGNALI REGISTRY
        </p>

        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Open source components
        </h1>

        <p className="mt-3 text-muted-foreground">
          Explore components, preview implementations and copy code.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={`${item.source}/${item.name}`}
            href={`/registry/${item.source}/${item.type}/${item.name}`}
            className="group rounded-xl border p-5 transition-colors hover:bg-muted/40"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="rounded-md bg-muted px-2 py-1 text-xs">
                {item.source}
              </span>

              <span className="text-xs text-muted-foreground">
                {item.type}
              </span>
            </div>

            <h2 className="font-semibold group-hover:underline">
              {item.title || item.name}
            </h2>

            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {item.description || "Open source component"}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {(item.tags ?? []).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border px-2 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 text-sm font-medium">
              View component →
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}