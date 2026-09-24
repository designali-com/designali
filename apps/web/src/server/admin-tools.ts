"use server";

import { eq, desc } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { db } from "@/src/db/drizzle";
import { tool, user } from "@/src/db/schema";
import { auth } from "@/src/lib/auth/auth";

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

async function requireAdmin() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const currentUser = await db.query.user.findFirst({
    where: eq(user.id, session.user.id),
  });

  if (!currentUser || currentUser.role !== "admin") {
    redirect("/");
  }

  return currentUser;
}

export async function getTools() {
  await requireAdmin();

  return db.query.tool.findMany({
    orderBy: [desc(tool.createdAt)],
  });
}

export async function createTool(data: {
  title: string;
  slug: string;
  description: string;
  link: string;
  madeBy: string;
  category: string;
  tags: string[]; 
  isPublished: boolean;
  coverImage?: string; // <-- Direct ImageKit URL aayega
}) {
  await requireAdmin();

  const id = crypto.randomUUID();
  const finalSlug = data.slug ? slugify(data.slug) : slugify(data.title);

  await db.insert(tool).values({
    id,
    title: data.title,
    slug: finalSlug,
    description: data.description,
    link: data.link,
    madeBy: data.madeBy,
    category: data.category,
    tags: data.tags, 
    coverImage: data.coverImage || "",
    isPublished: data.isPublished,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return {
    success: true,
    id,
    slug: finalSlug,
  };
}

export async function updateTool(
  id: string,
  data: {
    title: string;
    slug: string;
    description: string;
    link: string;
    madeBy: string;
    category: string;
    tags: string[]; 
    isPublished: boolean;
    coverImage?: string;
  }
) {
  await requireAdmin();

  const finalSlug = data.slug ? slugify(data.slug) : slugify(data.title);

  await db
    .update(tool)
    .set({
      title: data.title,
      slug: finalSlug,
      description: data.description,
      link: data.link,
      madeBy: data.madeBy,
      category: data.category,
      tags: data.tags, 
      coverImage: data.coverImage,
      isPublished: data.isPublished,
      updatedAt: new Date(),
    })
    .where(eq(tool.id, id));

  return {
    success: true,
    slug: finalSlug,
  };
}

export async function deleteTool(id: string) {
  await requireAdmin();
  await db.delete(tool).where(eq(tool.id, id));
  return { success: true };
}

export async function toggleToolPublished(id: string, isPublished: boolean) {
  await requireAdmin();
  await db.update(tool).set({ isPublished, updatedAt: new Date() }).where(eq(tool.id, id));
  return { success: true };
}