"use client"

interface PatternEmptyStateProps {
  activeTab: string
  theme: "light" | "dark"
}

export default function PatternEmptyState({
  theme,
}: PatternEmptyStateProps) {
  const isPatternDark = theme === "dark"

  return (
    <div className="py-12 text-center">
      <h3
        className={`mb-2 text-lg font-semibold ${
          isPatternDark ? "text-gray-200" : "text-gray-600 dark:text-gray-200"
        }`}
      >
        No patterns found
      </h3>
      <p
        className={`${
          isPatternDark ? "text-gray-200" : "text-gray-600 dark:text-gray-200"
        }`}
      >
        No patterns available in this category yet.
      </p>
    </div>
  )
}