import { NextResponse } from "next/server";
import { db } from "@/src/db/drizzle"; // Aapka drizzle instance
import { download, template, subscription } from "@/src/db/schema";
import { eq, and } from "drizzle-orm";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { userId, templateId, organizationId } = await req.json();

    if (!userId || !templateId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Check if Template exists
    const templateData = await db.query.template.findFirst({
      where: eq(template.id, templateId),
    });

    if (!templateData) {
      return NextResponse.json({ error: "Template not found" }, { status: 404 });
    }

    // 2. Check Pro Plan Access (agar template Pro hai)
    if (templateData.isPro) {
      const activeSub = await db.query.subscription.findFirst({
        where: and(
          organizationId 
            ? eq(subscription.organizationId, organizationId) 
            : eq(subscription.userId, userId),
          eq(subscription.status, "active")
        ),
      });

      if (!activeSub) {
        return NextResponse.json(
          { error: "Pro subscription required to download this template" },
          { status: 403 }
        );
      }
    }

    // 3. Generate License Key & Save Download Record
    const licenseKey = `LIC-${Math.random().toString(36).substring(2, 9).toUpperCase()}-${Date.now().toString().slice(-4)}`;

    await db.insert(download).values({
      id: crypto.randomUUID(),
      userId,
      organizationId: organizationId || null,
      templateId,
      licenseKey,
      downloadedAt: new Date(),
    });

    // 4. Return secure download & figma links
    return NextResponse.json({
      success: true,
      downloadUrl: templateData.downloadUrl,
      figmaUrl: templateData.figmaUrl,
      licenseKey,
    });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}