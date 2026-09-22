import { redirect } from "next/navigation";
import { eq, count, desc } from "drizzle-orm";

import { headers } from "next/headers";

import { auth } from "@/src/lib/auth/auth";
import { db } from "@/src/db/drizzle";
import {
  user,
  organization,
  template,
  download,
  subscription,
} from "@/src/db/schema";

export default async function AdminPage() {
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

  const [
    usersResult,
    organizationsResult,
    templatesResult,
    downloadsResult,
    subscriptionsResult,
  ] = await Promise.all([
    db.select({ count: count() }).from(user),
    db.select({ count: count() }).from(organization),
    db.select({ count: count() }).from(template),
    db.select({ count: count() }).from(download),
    db
      .select({ count: count() })
      .from(subscription)
      .where(eq(subscription.status, "active")),
  ]);

  const stats = [
    {
      title: "Total Users",
      value: usersResult[0]?.count ?? 0,
    },
    {
      title: "Organizations",
      value: organizationsResult[0]?.count ?? 0,
    },
    {
      title: "Templates",
      value: templatesResult[0]?.count ?? 0,
    },
    {
      title: "Downloads",
      value: downloadsResult[0]?.count ?? 0,
    },
    {
      title: "Active Subscriptions",
      value: subscriptionsResult[0]?.count ?? 0,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="border-b px-6 py-5">
        <h1 className="text-2xl font-semibold">
          Admin Dashboard
        </h1>

        <p className="text-muted-foreground">
          Manage users, templates, downloads and subscriptions.
        </p>
      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl border bg-card p-5"
          >
            <p className="text-sm text-muted-foreground">
              {stat.title}
            </p>

            <p className="mt-2 text-3xl font-semibold">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 px-6 pb-6 lg:grid-cols-2">
        <div className="rounded-xl border p-6">
          <h2 className="font-semibold">Quick Actions</h2>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/admin/users"
              className="rounded-lg border px-4 py-2 text-sm"
            >
              Manage Users
            </a>

            <a
              href="/admin/templates"
              className="rounded-lg border px-4 py-2 text-sm"
            >
              Manage Templates
            </a>

            <a
              href="/admin/downloads"
              className="rounded-lg border px-4 py-2 text-sm"
            >
              View Downloads
            </a>

            <a
              href="/admin/subscriptions"
              className="rounded-lg border px-4 py-2 text-sm"
            >
              Subscriptions
            </a>
          </div>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="font-semibold">Admin</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Signed in as {currentUser.email}
          </p>
        </div>
      </div>
    </div>
  );
}