import { existsSync, mkdirSync, readFileSync } from "node:fs"
import path from "node:path"
import puppeteer from "puppeteer"

const REGISTRY_BLOCKS_PATH = path.join(
  process.cwd(),
  "public/r/blocks"
)

/**
 * registry/__index__.tsx se sirf
 * type: "registry:block" wale block IDs nikalta hai.
 */
function getBlockIds(): string[] {
  const primaryPath = path.join(
    process.cwd(),
    "registry/__index__.tsx"
  )

  const fallbackPath = path.join(
    process.cwd(),
    "src/registry/__index__.tsx"
  )

  const finalPath = existsSync(primaryPath)
    ? primaryPath
    : existsSync(fallbackPath)
      ? fallbackPath
      : null

  if (!finalPath) {
    console.error(
      "❌ Index file not found at registry/__index__.tsx"
    )
    return []
  }

  const fileContent = readFileSync(finalPath, "utf-8")

  /**
   * Example:
   *
   * "hero-1": {
   *   type: "registry:block",
   *   ...
   * }
   *
   * Sirf registry:block wale objects capture honge.
   */
  const blockIds: string[] = []

  const objectRegex =
    /"([^"]+)"\s*:\s*\{([\s\S]*?)(?=\n\s*"[^"]+"\s*:\s*\{|\n\s*\}\s*[,}])/g

  for (const match of fileContent.matchAll(objectRegex)) {
    const name = match[1]
    const content = match[2]

    if (!name || !content) {
      continue
    }

    const typeMatch = content.match(
      /type\s*:\s*["']registry:block["']/
    )

    if (typeMatch) {
      blockIds.push(name)
    }
  }

  return Array.from(new Set(blockIds)).filter(
    (name) => !name.startsWith("chart-")
  )
}

async function captureScreenshots() {
  const blockIds = getBlockIds()

  console.log(`Found ${blockIds.length} registry:block(s):`)
  console.log(blockIds)

  if (blockIds.length === 0) {
    console.log("⚠️ No registry:block found to capture.")
    return
  }

  /**
   * Make sure public/r/blocks exists
   */
  if (!existsSync(REGISTRY_BLOCKS_PATH)) {
    mkdirSync(REGISTRY_BLOCKS_PATH, {
      recursive: true,
    })
  }

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

  try {
    for (const block of blockIds) {
      const blockDir = path.join(
        REGISTRY_BLOCKS_PATH,
        block
      )

      const lightPath = path.join(
        blockDir,
        "light.webp"
      )

      const darkPath = path.join(
        blockDir,
        "dark.webp"
      )

      /**
       * Agar dono screenshots already exist hain
       * to block skip karo.
       */
      if (
        existsSync(lightPath) &&
        existsSync(darkPath)
      ) {
        console.log(`✓ ${block} already exists`)
        continue
      }

      if (!existsSync(blockDir)) {
        mkdirSync(blockDir, {
          recursive: true,
        })
      }

      /**
       * IMPORTANT:
       * Actual URL hona chahiye.
       */
      const pageUrl =
        `http://localhost:3000/view/${block}`

      const page = await browser.newPage()

      try {
        console.log(`- Capturing ${block}...`)
        console.log(`  URL: ${pageUrl}`)

        await page.goto(pageUrl, {
          waitUntil: "networkidle2",
        })

        /**
         * Light + Dark screenshots
         */
        for (const theme of ["light", "dark"] as const) {
          const screenshotPath = path.join(
            blockDir,
            `${theme}.webp`
          )

          if (existsSync(screenshotPath)) {
            console.log(
              `  ✓ ${theme}.webp already exists`
            )
            continue
          }

          /**
           * Set theme
           */
          await page.evaluate((currentTheme) => {
            document.documentElement.classList.remove(
              "light",
              "dark"
            )

            document.documentElement.classList.add(
              currentTheme
            )

            document.documentElement.setAttribute(
              "data-theme",
              currentTheme
            )

            localStorage.setItem(
              "theme",
              currentTheme
            )
          }, theme)

          /**
           * Theme apply hone ka wait
           */
          await new Promise((resolve) =>
            setTimeout(resolve, 300)
          )

          /**
           * Remove Tailwind indicator
           */
          await page.evaluate(() => {
            const indicator =
              document.querySelector(
                "[data-tailwind-indicator]"
              )

            if (indicator) {
              indicator.remove()
            }
          })

          /**
           * Charts / dashboards ke liye
           * extra rendering time
           */
          if (
            block.startsWith("chart") ||
            block.startsWith("dashboard")
          ) {
            await new Promise((resolve) =>
              setTimeout(resolve, 800)
            )
          }

          /**
           * Screenshot
           */
          await page.screenshot({
            path: screenshotPath,
            type: "webp",
            fullPage: false,
          })

          console.log(
            `  ✓ ${theme}.webp`
          )
        }
      } catch (error) {
        console.error(
          `❌ Failed to capture ${block}:`,
          error
        )
      } finally {
        await page.close()
      }
    }
  } finally {
    await browser.close()
  }
}

try {
  console.log(
    "🔍 Capturing only registry:block screenshots..."
  )

  await captureScreenshots()

  console.log("✅ Done!")
} catch (error) {
  console.error(
    "❌ Screenshot capture failed:",
    error
  )

  process.exit(1)
}