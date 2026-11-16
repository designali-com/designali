/* eslint-disable @typescript-eslint/no-explicit-any */
import { allIcons } from "@designali/icons/all"
import { IconGlyph } from "./icon-glyph"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string
  size?: number
  color?: string
  strokeWidth?: number
  variant?: "default" | "outline" | "filled" | "doodle"
}

export function Icons({
  name,
  size = 24,
  strokeWidth = 1,
  color = "currentColor",
  variant,
  fill,
  stroke,
  strokeLinejoin = "round",
  strokeLinecap = "round",
  ...props
}: IconProps) {
  let match: any = null

  // 1. Exact id match
  outer: for (const icons of Object.values(allIcons) as Record<string, any>[]) {
    for (const entry of Object.values(icons)) {
      const e = entry as any
      if (e.metadata.id === name) {
        match = e
        break outer
      }
    }
  }

  // 2. baseId + variant strict match
  if (!match) {
    const targetVariant = variant ?? "default"
    outer: for (const icons of Object.values(allIcons) as Record<
      string,
      any
    >[]) {
      for (const entry of Object.values(icons)) {
        const e = entry as any
        const metaVariant = (e.metadata.variant ?? "").toLowerCase()
        const matches =
          e.metadata.baseId === name &&
          (metaVariant === targetVariant ||
            (targetVariant === "default" &&
              (metaVariant === "outline" || metaVariant === "")))
        if (matches) {
          match = e
          break outer
        }
      }
    }
  }

  // 3. Fallback: any matching baseId
  if (!match) {
    outer: for (const icons of Object.values(allIcons) as Record<
      string,
      any
    >[]) {
      for (const entry of Object.values(icons)) {
        const e = entry as any
        if (e.metadata.baseId === name) {
          match = e
          break outer
        }
      }
    }
  }

  if (!match) return null

  return (
    <IconGlyph
      {...props}
      entry={match}
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      fill={fill}
      stroke={stroke}
      strokeLinejoin={strokeLinejoin}
      strokeLinecap={strokeLinecap}
    />
  )
}
