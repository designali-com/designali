import type { Point } from "@/src/types/gradient"

export interface GradientTemplate {
  id: string
  name: string
  base: string
  blur: number
  points: Omit<Point, "id">[]
}

export const GRADIENT_TEMPLATES: GradientTemplate[] = [
  {
    id: "sexy-blue",
    name: "Sexy Blue",
    base: "#ffffff",
    blur: 60,
    points: [
      { x: 50, y: 50, color: "#d6f0ff" },
      { x: 5, y: 10, color: "#007bff" },
      { x: 95, y: 20, color: "#0a8cff" },
      { x: 90, y: 90, color: "#7fcdeb" },
      { x: 8, y: 88, color: "#00a3ff" },
    ],
  },
  {
    id: "azure-mist",
    name: "Azure Mist",
    base: "#eaf6ff",
    blur: 70,
    points: [
      { x: 10, y: 15, color: "#007bff" },
      { x: 85, y: 25, color: "#4db8f5" },
      { x: 60, y: 85, color: "#b0e0e6" },
      { x: 15, y: 80, color: "#00a3ff" },
    ],
  },
  {
    id: "sunset",
    name: "Sunset",
    base: "#ffe8d6",
    blur: 64,
    points: [
      { x: 12, y: 18, color: "#ff7a59" },
      { x: 85, y: 15, color: "#ff3d81" },
      { x: 75, y: 85, color: "#ffb347" },
      { x: 15, y: 82, color: "#f9d423" },
    ],
  },
  {
    id: "aurora",
    name: "Aurora",
    base: "#0b1020",
    blur: 80,
    points: [
      { x: 20, y: 20, color: "#22d3ee" },
      { x: 80, y: 25, color: "#7c5cff" },
      { x: 60, y: 80, color: "#34d399" },
      { x: 10, y: 85, color: "#3b82f6" },
    ],
  },
  {
    id: "cotton-candy",
    name: "Cotton Candy",
    base: "#fff5fb",
    blur: 72,
    points: [
      { x: 15, y: 20, color: "#ffb3d9" },
      { x: 85, y: 20, color: "#b3d9ff" },
      { x: 70, y: 85, color: "#d9b3ff" },
      { x: 18, y: 82, color: "#ffe0f0" },
    ],
  },
  {
    id: "mint-fresh",
    name: "Mint Fresh",
    base: "#f0fff8",
    blur: 64,
    points: [
      { x: 12, y: 15, color: "#5eead4" },
      { x: 88, y: 20, color: "#a7f3d0" },
      { x: 70, y: 85, color: "#22d3ee" },
      { x: 15, y: 80, color: "#bef264" },
    ],
  },
  {
    id: "midnight",
    name: "Midnight",
    base: "#05060f",
    blur: 90,
    points: [
      { x: 15, y: 15, color: "#1e3a8a" },
      { x: 85, y: 30, color: "#5b21b6" },
      { x: 60, y: 90, color: "#0e7490" },
      { x: 10, y: 80, color: "#312e81" },
    ],
  },
  {
    id: "peach-fizz",
    name: "Peach Fizz",
    base: "#fff1e6",
    blur: 60,
    points: [
      { x: 20, y: 20, color: "#ffb199" },
      { x: 85, y: 15, color: "#ff6b9d" },
      { x: 80, y: 80, color: "#ffd08a" },
      { x: 15, y: 85, color: "#ffc4d6" },
    ],
  },
  {
    id: "lavender-dream",
    name: "Lavender Dream",
    base: "#f6f0ff",
    blur: 75,
    points: [
      { x: 15, y: 20, color: "#c4b5fd" },
      { x: 85, y: 15, color: "#f0abfc" },
      { x: 70, y: 85, color: "#93c5fd" },
      { x: 20, y: 80, color: "#e9d5ff" },
    ],
  },
  {
    id: "ocean-deep",
    name: "Ocean Deep",
    base: "#031b34",
    blur: 80,
    points: [
      { x: 15, y: 15, color: "#0077b6" },
      { x: 85, y: 25, color: "#00b4d8" },
      { x: 65, y: 88, color: "#023e8a" },
      { x: 12, y: 82, color: "#48cae4" },
    ],
  },
  {
    id: "golden-hour",
    name: "Golden Hour",
    base: "#fff8e1",
    blur: 68,
    points: [
      { x: 15, y: 18, color: "#fbbf24" },
      { x: 85, y: 20, color: "#fb923c" },
      { x: 75, y: 85, color: "#f87171" },
      { x: 18, y: 82, color: "#fde68a" },
    ],
  },
  {
    id: "berry-blast",
    name: "Berry Blast",
    base: "#1a0b1f",
    blur: 76,
    points: [
      { x: 15, y: 20, color: "#e11d48" },
      { x: 85, y: 15, color: "#a21caf" },
      { x: 70, y: 85, color: "#7c3aed" },
      { x: 15, y: 82, color: "#f472b6" },
    ],
  },
]