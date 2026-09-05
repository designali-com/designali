import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/src/lib/auth/auth";
import { TemplateHeader } from "@/src/components/layout/header";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <TemplateHeader />
      {children}
    </div>
  )
}