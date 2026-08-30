"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"
import reactElementToJSXString from "react-element-to-jsx-string"

import { gridPatterns } from "@/src/config/patterns/patterns"
import { useFavorites } from "@/src/config/favourites-context"
import { useCopy } from "@/src/hooks/use-copy"
import { categories } from "@/src/lib/categories"


import PatternEmptyState from "./pattern-empty-state"
import PatternGrid from "./pattern-grid"
import { Button } from "@workspace/ui/components/button"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"

interface PatternShowcaseProps {
    activePattern: string | null
    setActivePattern: (pattern: string | null) => void
    theme: "light" | "dark"
}

export default function PatternShowcase({
    activePattern,
    setActivePattern,
    theme,
}: PatternShowcaseProps) {
    const [activeMobileCard, setActiveMobileCard] =
        useState<string | null>(null)

    const [activeTab, setActiveTab] = useState<string>("all")
    const [searchInput] = useState("")
    const [columns, setColumns] = useState(3)

    const { favourites } = useFavorites()
    const { copyToClipboard, isCopied } = useCopy()

    const isPatternDark = theme === "dark"

    // --------------------------------------------------------------------------
    // Hash / Tab
    // --------------------------------------------------------------------------

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace("#", "")
            const targetTab = hash || "all"

            setActiveTab((prev) => (prev !== targetTab ? targetTab : prev))
        }

        handleHashChange()

        window.addEventListener("hashchange", handleHashChange)

        return () => {
            window.removeEventListener("hashchange", handleHashChange)
        }
    }, [])

    // --------------------------------------------------------------------------
    // Copy Pattern
    // --------------------------------------------------------------------------

    const handleCopyActive = () => {
        if (!activePattern) return

        const pattern = gridPatterns.find(
            (pattern) => pattern.id === activePattern
        )

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
                ? gridPatterns.filter(
                    (pattern) => pattern.id !== activePattern
                )
                : gridPatterns

        const randomPattern =
            availablePatterns[
            Math.floor(Math.random() * availablePatterns.length)
            ]

        if (!randomPattern) return

        setActivePattern(randomPattern.id)
        setActiveTab("view")

        window.history.replaceState(null, "", "#view")

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
            window.history.replaceState(null, "", "/patterns")
            return
        }

        window.history.replaceState(null, "", `#${nextValue}`)
    }

    // --------------------------------------------------------------------------
    // Filter
    // --------------------------------------------------------------------------

    const getFilteredPatterns = () => {
        let patterns = gridPatterns

        if (activeTab === "favourites") {
            patterns = patterns.filter((pattern) =>
                favourites.includes(pattern.id)
            )
        }

        if (
            activeTab !== "all" &&
            activeTab !== "view" &&
            activeTab !== "favourites"
        ) {
            patterns = patterns.filter(
                (pattern) => pattern.category === activeTab
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
        ? gridPatterns.filter(
            (pattern) => pattern.id === activePattern
        )
        : []

    return (
        <section className="h-full w-full gap-2 px-2 pt-2">
            <div className="flex flex-col items-center justify-center">
                <div className="flex w-full flex-wrap items-center gap-2 lg:flex-nowrap">
                    <div className="w-full md:w-auto">
                        <div className="bg-background flex h-full w-full space-x-1 overflow-auto border p-1">
                            <SidebarTrigger className="md:hidden" />

                            <button
                                type="button"
                                onClick={() => handleTabChange("view")}
                                className={`
                  shrink-0 px-2 text-xs py-1 transition-all
                  ${activeTab === "view"
                                        ? "bg-foreground text-background"
                                        : "hover:text-foreground text-muted-foreground"
                                    }
                `}
                            >
                                <Eye className="size-4" />
                                <span className="sr-only">View</span>
                            </button>


                            {categories.map((category) => {
                                const catId = String(category.id)
                                const isActive = activeTab === catId

                                return (
                                    <button
                                        key={catId}
                                        type="button"
                                        onClick={() => handleTabChange(catId)}
                                        className={`
                      shrink-0 px-3 py-1 text-xs transition-all
                      ${isActive
                                                ? "bg-foreground text-background"
                                                : "hover:text-foreground text-muted-foreground"
                                            }
                    `}
                                    >
                                        {category.label}
                                    </button>
                                )
                            })}


                        </div>


                    </div>



                    <div className="flex flex-wrap gap-2 md:w-full md:flex-nowrap">

                        <Button
                            size="md"
                            onClick={handleRandomSelect}
                            disabled={gridPatterns.length === 0}

                        >
                            Random
                        </Button>


                        <Button
                            size="md"
                            onClick={handleCopyActive}
                            disabled={!activePattern}

                        >
                            {activePattern && isCopied(activePattern)
                                ? "Copied"
                                : "Copy"}
                        </Button>
                    </div>
                </div>


                <div className="mt-2 h-[90vh] w-full overflow-auto">

                    {activeTab === "view" ? (
                        <div className="flex h-full w-full items-center justify-center">
                            {activePatternData.length > 0 ? (
                                ""
                            ) : (
                                <div
                                    className={`text-center text-sm ${isPatternDark ? "text-gray-300" : "text-muted-foreground"
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
                        <PatternEmptyState
                            activeTab={activeTab}
                            theme={theme}
                        />
                    )}
                </div>

            </div>
        </section>
    )
}