import { existsSync, mkdirSync } from "fs"
import path from "path"
import puppeteer from "puppeteer"

import { getAllBlockIds } from "../src/lib/blocks"

// Path update: /public/r/blocks/
const REGISTRY_BLOCKS_PATH = path.join(process.cwd(), "public/r/blocks")

async function captureScreenshots() {
  const blockIds = await getAllBlockIds()

  const browser = await puppeteer.launch({
    executablePath:
      process.platform === "darwin"
        ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
        : undefined,
    headless: true,
    defaultViewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
    },
  })

  for (const block of blockIds) {
    // har block ke liye subfolder (e.g. public/r/blocks/hero-1)
    const blockDir = path.join(REGISTRY_BLOCKS_PATH, block)

    const lightPath = path.join(blockDir, "light.webp")
    const darkPath = path.join(blockDir, "dark.webp")

    if (existsSync(lightPath) && existsSync(darkPath)) {
      continue
    }

    if (!existsSync(blockDir)) {
      mkdirSync(blockDir, { recursive: true })
    }

    const pageUrl = `http://localhost:3000/view/${block}`
    const page = await browser.newPage()

    try {
      await page.goto(pageUrl, { waitUntil: "networkidle2" })
      console.log(`- Capturing ${block}...`)

      for (const theme of ["light", "dark"]) {
        const screenshotPath = path.join(blockDir, `${theme}.webp`)

        if (existsSync(screenshotPath)) {
          continue
        }

        await page.evaluate((currentTheme) => {
          document.documentElement.classList.remove("light", "dark")
          document.documentElement.classList.add(currentTheme)
          document.documentElement.setAttribute("data-theme", currentTheme)
          localStorage.setItem("theme", currentTheme)
        }, theme)

        await page.evaluate(() => {
          const indicator = document.querySelector("[data-tailwind-indicator]")
          if (indicator) indicator.remove()
        })

        if (block.startsWith("chart") || block.startsWith("dashboard")) {
          await new Promise((resolve) => setTimeout(resolve, 800))
        }

        await page.screenshot({ path: screenshotPath })
      }
    } catch (err) {
      console.error(`Failed to capture ${block}:`, err)
    } finally {
      await page.close()
    }
  }

  await browser.close()
}

try {
  console.log("🔍 Capturing screenshots into /public/r/blocks/[block]/...")
  await captureScreenshots()
  console.log("✅ Done!")
} catch (error) {
  console.error(error)
  process.exit(1)
}