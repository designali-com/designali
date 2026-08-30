"use client"

import { useEffect, useState } from "react"
import { PatternPreview } from "@/src/components/templates/pattern/pattern-preview"
import PatternShowcase from "@/src/components/templates/pattern/pattern-showcase"
import { gridPatterns } from "@/src/config/patterns/patterns"
import { useTheme } from "@/src/hooks/useTheme"

export default function Home() {
    const [activePattern, setActivePattern] = useState<string | null>(null)
    const { theme, updateThemeFromPattern } = useTheme()

    useEffect(() => {
        updateThemeFromPattern(activePattern, gridPatterns)
    }, [activePattern, updateThemeFromPattern])

    return (
        <>
            <div className="relative pt-10 z-10 overflow-hidden w-full h-full">
                <PatternPreview activePattern={activePattern} />
                <PatternShowcase
                    activePattern={activePattern}
                    setActivePattern={setActivePattern}
                    theme={theme}
                />
            </div>
        </>
    )
}