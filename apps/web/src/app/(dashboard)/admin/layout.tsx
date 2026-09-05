import { auth } from "@/src/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // 1. Agar logged-in nahi hai, to login page par redirect karo
  if (!session) {
    redirect("/login");
  }

  // 2. Agar logged-in hai par admin nahi hai, to dashboard par redirect karo
  if (session.user.role !== "admin") {
    redirect("/dashboard");
  }

  return <div>{children}</div>;
}