"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"
import reactElementToJSXString from "react-element-to-jsx-string"
import { useRouter } from "next/navigation"

import { gridPatterns } from "@/src/config/patterns/patterns"
import { useCopy } from "@/src/hooks/use-copy"

import PatternEmptyState from "./pattern-empty-state"
import PatternGrid from "./pattern-grid"
import { Button } from "@workspace/ui/components/button"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import { ThemeSelectorPattern } from "../../common/synced-theme-selector"

interface PatternShowcaseProps {
  activePattern: string | null
  setActivePattern: (pattern: string | null) => void
  theme: "light" | "dark"
  initialCategory?: string
}

export default function PatternShowcase({
  activePattern,
  setActivePattern,
  theme,
  initialCategory = "all",
}: PatternShowcaseProps) {
  const router = useRouter()
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null)

  const [activeTab, setActiveTab] = useState<string>(initialCategory)
  const [searchInput] = useState("")
  const [columns] = useState(3)

  const { copyToClipboard, isCopied } = useCopy()

  const isPatternDark = theme === "dark"

  // --------------------------------------------------------------------------
  // Hash / Tab sync
  // --------------------------------------------------------------------------

  useEffect(() => {
    if (initialCategory) {
      setActiveTab(initialCategory)
    }
  }, [initialCategory])

  // --------------------------------------------------------------------------
  // Copy Pattern
  // --------------------------------------------------------------------------

  const handleCopyActive = () => {
    if (!activePattern) return

    const pattern = gridPatterns.find((pattern) => pattern.id === activePattern)

    if (!pattern?.render) return

    const element = pattern.render()

    const jsxString = reactElementToJSXString(element, {
      showFunctions: false,
      useBooleanShorthandSyntax: true,
    })

    copyToClipboard(jsxString, pattern.id)
  }

  // --------------------------------------------------------------------------
  // Random Pattern
  // --------------------------------------------------------------------------

  const handleRandomSelect = () => {
    if (gridPatterns.length === 0) return

    const availablePatterns =
      gridPatterns.length > 1
        ? gridPatterns.filter((pattern) => pattern.id !== activePattern)
        : gridPatterns

    const randomPattern =
      availablePatterns[Math.floor(Math.random() * availablePatterns.length)]

    if (!randomPattern) return

    setActivePattern(randomPattern.id)
    setActiveTab("view")

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // --------------------------------------------------------------------------
  // Tab Change Handler
  // --------------------------------------------------------------------------

  const handleTabChange = (nextValue: string) => {
    if (nextValue === activeTab) return

    setActiveTab(nextValue)

    if (nextValue === "all") {
      router.push("/patterns")
      return
    }
  }

  // --------------------------------------------------------------------------
  // Filter Patterns based on Category & Search
  // --------------------------------------------------------------------------

  const getFilteredPatterns = () => {
    let patterns = gridPatterns

    // Agar activeTab "all" ya "view" nahi hai, toh ise ek category slug maankar filter karein
    if (activeTab && activeTab !== "all" && activeTab !== "view") {
      patterns = patterns.filter(
        (pattern) => pattern.category?.toLowerCase() === activeTab.toLowerCase()
      )
    }

    if (searchInput.trim()) {
      const query = searchInput.toLowerCase().trim()

      patterns = patterns.filter((pattern) => {
        return (
          pattern.id.toLowerCase().includes(query) ||
          pattern.category?.toLowerCase().includes(query)
        )
      })
    }

    return patterns
  }

  const filteredPatterns = getFilteredPatterns()

  const activePatternData = activePattern
    ? gridPatterns.filter((pattern) => pattern.id === activePattern)
    : []

  return (
    <section className="h-full w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="flex h-full w-full items-center gap-2 justify-between border-b bg-background p-2">

          <ThemeSelectorPattern />
          <div className="flex gap-1">
            <Button
              size="md"
              onClick={() => handleTabChange("view")}
              className={`flex shrink-0 items-center gap-1 px-2 py-1 text-xs transition-all ${
                activeTab === "view"
                  ? "bg-foreground text-background"
                  : " "
              }`}
            >
              <Eye className="size-4" />
              <span className="sr-only">View</span>
            </Button>

            <Button
              size="md"
              onClick={() => handleTabChange("all")}
              className={`shrink-0 px-3 py-1 text-xs whitespace-nowrap transition-all ${
                activeTab === "all"
                  ? "bg-foreground text-background"
                  : " "
              }`}
            >
              All Patterns
            </Button>
            <Button
              size="md"
              onClick={handleRandomSelect}
              disabled={gridPatterns.length === 0}
            >
              Random
            </Button>

            {/* Copy button sirf tab dikhega jab activeTab "view" hoga */}
            {activeTab === "view" && (
              <Button
                size="md"
                onClick={handleCopyActive}
                disabled={!activePattern}
              >
                {activePattern && isCopied(activePattern) ? "Copied" : "Copy"}
              </Button>
            )}
          </div>

        </div>

        <div className="m-2 px-2 h-[90vh] w-full overflow-auto">
          {activeTab === "view" ? (
            <div className="flex h-full w-full items-center justify-center">
              {activePatternData.length > 0 ? (
                ""
              ) : (
                <div
                  className={`text-center text-sm ${
                    isPatternDark ? "text-gray-300" : "text-muted-foreground"
                  }`}
                >
                  Select a pattern
                </div>
              )}
            </div>
          ) : filteredPatterns.length > 0 ? (
            <PatternGrid
              patterns={filteredPatterns}
              activePattern={activePattern}
              setActivePattern={setActivePattern}
              theme={theme}
              activeMobileCard={activeMobileCard}
              setActiveMobileCard={setActiveMobileCard}
              columns={columns}
            />
          ) : (
            <PatternEmptyState activeTab={activeTab} theme={theme} />
          )}
        </div>
      </div>
    </section>
  )
}