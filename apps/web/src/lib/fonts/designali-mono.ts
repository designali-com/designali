import localFont from "next/font/local"

export const designaliMono = localFont({
  src: "../../assets/fonts/DesignaliMono-Variable.woff2",
  weight: "100 800",
  style: "normal",
  display: "swap",
  variable: "--font-designali-mono",
})

export const DESIGNALI_MONO_WEIGHTS = [
  { name: "Thin", value: 100 },
  { name: "ExtraLight", value: 200 },
  { name: "Light", value: 300 },
  { name: "Regular", value: 400 },
  { name: "Medium", value: 500 },
  { name: "SemiBold", value: 600 },
  { name: "Bold", value: 700 },
  { name: "ExtraBold", value: 800 },
] as const
