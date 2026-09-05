"server action";
"use server";

import { db } from "@/src/db/drizzle";
import { invitation } from "@/src/db/schema";
import { headers } from "next/headers";
import { auth } from "@/src/lib/auth/auth"; 
import { revalidatePath } from "next/cache";

export async function inviteMember(prevState: any, formData: FormData) {
  try {
    // 1. Authenticate user
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      return { success: false, error: "Unauthorized access" };
    }

    const email = formData.get("email") as string;
    const role = (formData.get("role") as string) || "member";
    const organizationId = formData.get("organizationId") as string;

    if (!email || !organizationId) {
      return { success: false, error: "Email and Organization ID are required" };
    }

    // 2. Set expiration date (e.g., 7 days from now)
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    // 3. Insert invitation into Database
    await db.insert(invitation).values({
      id: crypto.randomUUID(),
      organizationId,
      email,
      role,
      status: "pending",
      expiresAt,
      inviterId: session.user.id,
    });

    // 4. Revalidate cache for the Organization page
    revalidatePath(`/dashboard/organization`);

    return { success: true, error: null };
  } catch (error: any) {
    return {
      success: false,
      error: error?.message || "Failed to send invitation. Please try again.",
    };
  }
}