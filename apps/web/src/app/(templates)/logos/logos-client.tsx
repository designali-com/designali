"use client"

import { useEffect, useState } from "react"

import { useRouter, useSearchParams } from "next/navigation"

import {
  LogoPreview,
  LogoPreviewPhone,
} from "@/src/components/templates/logos/logo-preview"
import { LogoSearch } from "@/src/components/templates/logos/logo-search"
import { LogoGrid } from "@/src/components/templates/logos/main-logos"
import { useLogoFilter } from "@/src/components/templates/logos/logo-filter-context"
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

type VariantTab = "icon" | "wordmark" | "symbols"

const VARIANT_TABS: { value: VariantTab; label: string }[] = [
  { value: "icon", label: "Icon" },
  { value: "wordmark", label: "Wordmark" },
  { value: "symbols", label: "Symbols" },
]

export default function LogosClient() {
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null)

  const { variantTab, setVariantTab, setCategory } = useLogoFilter()

  const router = useRouter()
  const searchParams = useSearchParams()

  // Tab sync from ?tab=
  useEffect(() => {
    const tab = searchParams.get("tab") as VariantTab | null

    if (tab && VARIANT_TABS.some((t) => t.value === tab)) {
      setVariantTab(tab)
    } else {
      setVariantTab("icon")
    }

    setSelectedLogo(null)
  }, [searchParams, setVariantTab])

  // Category sync from #hash
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.replace("#", "") || null
      setCategory(hash)
    }

    sync()

    window.addEventListener("hashchange", sync)

    return () => {
      window.removeEventListener("hashchange", sync)
    }
  }, [setCategory])

  const handleTabChange = (value: string) => {
    const tab = value as VariantTab

    const params = new URLSearchParams()

    if (tab !== "icon") {
      params.set("tab", tab)
    }

    const hash = window.location.hash

    router.push(
      `/logos${params.size ? `?${params.toString()}` : ""}${hash}`,
      {
        scroll: false,
      }
    )
  }

  return (
    <div className="relative">
      <div className="sticky top-10 z-40 flex h-14 w-full items-center gap-2 border-b bg-background px-2">
        <div className="hidden md:block">
          <LogoSearch />
        </div>

        <Tabs
          className="ml-auto"
          value={variantTab}
          onValueChange={handleTabChange}
        >
          <TabsList>
            {VARIANT_TABS.map(({ value, label }) => (
              <TabsTrigger key={value} value={value}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="flex h-full w-full">
        <div className="flex h-full w-full flex-col p-2 md:flex-row">
          <div className="h-[92vh] flex-1 overflow-auto pt-10">
            <LogoGrid
              selectedLogo={selectedLogo}
              onSelectLogo={setSelectedLogo}
            />
          </div>

          <div
            className={`relative transition-all duration-300 ${
              selectedLogo
                ? "w-fit translate-x-0 opacity-100"
                : "w-0 translate-x-full opacity-0"
            }`}
          >
            {selectedLogo && (
              <LogoPreview
                selectedLogo={selectedLogo}
                onClearSelection={() => setSelectedLogo(null)}
              />
            )}
          </div>

          {selectedLogo && (
            <div className="fixed bottom-0 left-1/2 z-20 w-full -translate-x-1/2 border-t bg-background md:hidden">
              <LogoPreviewPhone
                selectedLogo={selectedLogo}
                onClearSelection={() => setSelectedLogo(null)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}