import Link from "next/link";
import { CreateOrganizationForm } from "@/src/components/auth/create-organization-form";
import { Button } from "@workspace/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { getOrganizations } from "@/src/server/organizations";
import { Logout } from "@/src/components/layout/logout";
import { db } from "@/src/db/drizzle";
import { download, subscription } from "@/src/db/schema";
import { eq, desc } from "drizzle-orm";
import { headers } from "next/headers";
import { auth } from "@/src/lib/auth/auth";

export default async function Dashboard() {
  // 1. Correct User Auth Session Fetching
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;
  const organizations = await getOrganizations();

  // 2. Safe Database Queries
  const userDownloads = userId
    ? await db.query.download.findMany({
      where: eq(download.userId, userId),
      orderBy: [desc(download.downloadedAt)],
      limit: 3,
      with: { template: true },
    })
    : [];

  const sub = userId
    ? await db.query.subscription.findFirst({
      where: eq(subscription.userId, userId),
    })
    : null;

  return (
    <div className="min-h-screen p-6 space-y-8">
      {/* 1. Header / Navbar */}
      <header className="flex  my-10 flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Overview Dashboard</h1>
          <p className="text-zinc-400 text-sm">
            Manage your organizations, templates, and team workspaces.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Dialog >
            <DialogTrigger
              render={
                <Button className={"hidden"} variant="outline" size={"sm"}>
                  + Create Organization
                </Button>
              } />

            <DialogContent >
              <DialogHeader>
                <DialogTitle>Create Organization</DialogTitle>
                <DialogDescription className="text-zinc-400">
                  Create a new organization to share templates with your team.
                </DialogDescription>
              </DialogHeader>
              <CreateOrganizationForm />
            </DialogContent>
          </Dialog>
          <Logout />
        </div>
      </header>

      {/* 2. Top Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 border space-y-1">
          <span className="text-xs text-zinc-400 font-medium">Subscription Plan</span>
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold capitalize text-emerald-400">
              {sub?.status === "active" ? sub.plan : "Free Tier"}
            </p>
            <Button size="sm" variant="ghost">
              Upgrade
            </Button>
          </div>
        </div>

        <div className="p-5 border hidden">
          <span className="text-xs text-zinc-400 font-medium">Total Organizations</span>
          <p className="text-xl font-bold">{organizations.length}</p>
        </div>

        <div className="p-5 border">
          <span className="text-xs text-zinc-400 font-medium">Recent Downloads</span>
          <p className="text-xl font-bold">{userDownloads.length} Templates</p>
        </div>
      </div>

      {/* 3. Organizations Grid Section */}
      <section className="space-y-4 hidden">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl tracking-tight">Your Workspaces</h2>
          <span className="text-xs text-zinc-500">{organizations.length} Active</span>
        </div>

        {organizations.length === 0 ? (
          <div className="p-8 text-center border">
            <p className="text-zinc-400 text-sm">No organizations found. Create one to get started.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {organizations.map((org) => (
              <div
                key={org.id}
                className="p-5 border transition flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border flex items-center justify-center font-bold">
                    {org.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold">{org.name}</h3>
                    <p className="text-xs text-zinc-500">/{org.slug}</p>
                  </div>
                </div>

                <Button render={<Link href={`/dashboard/organization/${org.slug}`} />}
                  variant="secondary" className="w-full">
                  Open Workspace
                </Button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Recent Template Downloads Preview */}
      <section className="space-y-4 pt-4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl tracking-tight">Recent Template Downloads</h2>
          <Link href="/dashboard/downloads" className="text-xs">
            View All
          </Link>
        </div>

        {userDownloads.length === 0 ? (
          <div className="p-8 text-center border">
            <p className="text-zinc-400">Aapne abhi tak koi template download nahi kiya hai.</p>
          </div>
        ) : (
          <div className="border divide-y divide-zinc-800 overflow-hidden">
            {userDownloads.map(({ id, template, downloadedAt, licenseKey }) => (
              <div key={id} className="p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {template.thumbnail && (
                    <img
                      src={template.thumbnail}
                      alt={template.title}
                      className="w-12 h-12 object-cover rounded-lg border border-zinc-800"
                    />
                  )}
                  <div>
                    <h3 className="font-medium text-sm text-zinc-100">{template.title}</h3>
                    <p className="text-xs text-zinc-500">
                      Downloaded on {new Date(downloadedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block text-xs border font-mono px-2 py-1 rounded">
                    {licenseKey}
                  </span>
                  <Button size="sm" variant="outline" >
                    <a href={template.downloadUrl} download>
                      Re-Download
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}