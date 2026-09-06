"use server"

import { randomUUID } from "node:crypto"

import { db } from "@/src/db/drizzle"
import { download } from "@/src/db/schema"
import { auth } from "@/src/lib/auth/auth"
import { headers } from "next/headers"

export async function recordDownload(
  templateId: string,
  organizationId?: string
) {
  try {
    const session =
      await auth.api.getSession({
        headers: await headers(),
      })

    const userId = session?.user?.id

    if (!userId) {
      return {
        success: true,
        guest: true,
      }
    }

    await db.insert(download).values({
      id: randomUUID(),
      userId,
      templateId,
      licenseKey: `LIC-${randomUUID()
        .slice(0, 8)
        .toUpperCase()}`,
      organizationId:
        organizationId || null,
      downloadedAt: new Date(),
    })

    return {
      success: true,
    }
  } catch (error) {
    console.error(
      "Error logging download activity:",
      error
    )

    return {
      success: true,
      warning: "Log failed",
    }
  }
}