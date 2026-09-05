"use server";

import { db } from "@/src/db/drizzle";
import { download } from "@/src/db/schema";
import { auth } from "@/src/lib/auth/auth";
import { headers } from "next/headers";

export async function recordDownload(templateId: string, organizationId?: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    const userId = session?.user?.id;

    // 1. Agar user logged-in nahi hai (Guest User), toh DB me log kiye bina success return karein
    if (!userId) {
      return { success: true, guest: true };
    }

    // 2. Logged-in user ke liye saare required non-null fields ke saath insert karein
    await db.insert(download).values({
      id: crypto.randomUUID(),                                                // Required Primary Key
      userId: userId,                                                         // Guaranteed string (not null)
      templateId: templateId,
      licenseKey: `LIC-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,    // Required Field
      organizationId: organizationId || null,
      downloadedAt: new Date(),                                               // Schema me 'downloadedAt' hai
    });

    return { success: true };
  } catch (error) {
    console.error("Error logging download activity:", error);
    // Logging fail hone par bhi client component me ZIP download ko na rokein
    return { success: true, warning: "Log failed" };
  }
}