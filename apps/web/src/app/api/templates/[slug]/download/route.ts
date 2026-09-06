import fs from "node:fs/promises"
import path from "node:path"
import JSZip from "jszip"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  // Prevent path traversal
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) {
    return new Response("Invalid template", {
      status: 400,
    })
  }

  const templatesDir = path.resolve(
    process.cwd(),
    "../../templates"
  )

  const templateDir = path.resolve(
    templatesDir,
    slug
  )

  console.log("Template directory:", templateDir)

  try {
    // Check template exists
    const stat = await fs.stat(templateDir)

    if (!stat.isDirectory()) {
      return new Response("Template not found", {
        status: 404,
      })
    }

    const zip = new JSZip()

    const ignoredDirectories = new Set([
      "node_modules",
      ".next",
      ".git",
    ])

    const ignoredFiles = new Set([
      ".DS_Store",
    ])

    async function addDirectory(
      directory: string,
      zipFolder: JSZip
    ): Promise<void> {
      const entries = await fs.readdir(directory, {
        withFileTypes: true,
      })

      for (const entry of entries) {
        const fullPath = path.join(
          directory,
          entry.name
        )

        // Ignore directories
        if (
          entry.isDirectory() &&
          ignoredDirectories.has(entry.name)
        ) {
          continue
        }

        // Ignore files
        if (
          entry.isFile() &&
          (
            ignoredFiles.has(entry.name) ||
            entry.name.endsWith(".zip")
          )
        ) {
          continue
        }

        // Recursive directory
        if (entry.isDirectory()) {
          const folder = zipFolder.folder(entry.name)

          if (folder) {
            await addDirectory(
              fullPath,
              folder
            )
          }

          continue
        }

        // Add file
        if (entry.isFile()) {
          const file = await fs.readFile(fullPath)

          zipFolder.file(
            entry.name,
            file
          )
        }
      }
    }

    // Add template files
    await addDirectory(
      templateDir,
      zip
    )

    // Generate ZIP
    const zipBuffer = await zip.generateAsync({
      type: "uint8array",
      compression: "DEFLATE",
      compressionOptions: {
        level: 9,
      },
    })

    // Convert Uint8Array -> ArrayBuffer
    const arrayBuffer = new ArrayBuffer(
      zipBuffer.byteLength
    )

    new Uint8Array(arrayBuffer).set(
      zipBuffer
    )

    const zipName = `${slug}.zip`

    return new Response(arrayBuffer, {
      status: 200,

      headers: {
        "Content-Type": "application/zip",

        "Content-Disposition":
          `attachment; filename="${zipName}"`,

        "Content-Length":
          String(zipBuffer.byteLength),

        "Cache-Control":
          "no-store",
      },
    })
  } catch (error) {
    console.error(
      "Template download error:",
      error
    )

    return new Response(
      "Template download failed",
      {
        status: 500,

        headers: {
          "Content-Type": "text/plain",
        },
      }
    )
  }
}