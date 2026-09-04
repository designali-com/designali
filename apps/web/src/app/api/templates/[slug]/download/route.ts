import fs from "node:fs/promises"
import path from "node:path"
import { execFile } from "node:child_process"
import { promisify } from "node:util"

const execFileAsync = promisify(execFile)

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) {
    return new Response("Invalid template", { status: 400 })
  }

  const templatesDir = path.join(process.cwd(), "../../templates")
  const templateDir = path.join(templatesDir, slug)

  console.log("Template directory:", templateDir)

  try {
    const stat = await fs.stat(templateDir)

    if (!stat.isDirectory()) {
      return new Response("Template not found", { status: 404 })
    }

    const zipName = `${slug}.zip`
    const zipPath = path.join("/tmp", zipName)

    // Remove previous ZIP if it exists
    await fs.rm(zipPath, {
      force: true,
    })

    // Create ZIP directly from template directory
    await execFileAsync(
      "zip",
      [
        "-r",
        zipPath,
        ".",
        "-x",
        "node_modules/*",
        "node_modules/**/*",
        ".next/*",
        ".next/**/*",
        ".git/*",
        ".git/**/*",
        "*.zip",
      ],
      {
        cwd: templateDir,
        maxBuffer: 10 * 1024 * 1024,
      }
    )

    const file = await fs.readFile(zipPath)

    // Cleanup
    await fs.rm(zipPath, {
      force: true,
    })

    return new Response(file, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${zipName}"`,
        "Content-Length": file.length.toString(),
        "Cache-Control": "no-store",
      },
    })
  } catch (error) {
    console.error("Template download error:", error)

    return new Response("Template download failed", {
      status: 500,
    })
  }
}