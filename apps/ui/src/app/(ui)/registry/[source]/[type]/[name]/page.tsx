import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getRegistryConfigItem,
  getRegistryItems,
} from "@/src/lib/registry";

import RegistryDetailClient from "@/src/components/registry/registry-detail-client";

type PageProps = {
  params: Promise<{
    source: string;
    type: string;
    name: string;
  }>;
};

export const revalidate = 3600;

export async function generateStaticParams() {
  const items = await getRegistryItems();

  return items.map((item) => ({
    source: item.source,
    type: item.type,
    name: item.name,
  }));
}

export default async function RegistryDetailPage({
  params,
}: PageProps) {
  const { source, type, name } = await params;

  const item = await getRegistryConfigItem(source, name);

  if (!item || item.type !== type) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <Link
        href="/registry"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← All components
      </Link>

      <header className="mb-8 mt-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span>{item.source}</span>
          <span>/</span>
          <span>{item.type}</span>
          {item.category && (
            <>
              <span>/</span>
              <span>{item.category}</span>
            </>
          )}
        </div>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          {item.title || item.name}
        </h1>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          {item.description}
        </p>

        {item.githubUrl && (
          <a
            href={item.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex text-sm underline underline-offset-4"
          >
            View original repository ↗
          </a>
        )}
      </header>

      <RegistryDetailClient
        source={source}
        name={name}
      />
    </main>
  );
}