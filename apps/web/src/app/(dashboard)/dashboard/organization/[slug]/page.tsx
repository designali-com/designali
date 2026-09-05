import Link from "next/link";
import { notFound } from "next/navigation";
import { Logout } from "@/src/components/layout/logout";
import { getOrganizationBySlug } from "@/src/server/organizations";
import { getUsers } from "@/src/server/users";
import { db } from "@/src/db/drizzle";
import { download, invitation } from "@/src/db/schema";
import { eq, desc } from "drizzle-orm";
import { Button } from "@workspace/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { InviteMemberForm } from "@/src/components/auth/invite-member";

type Params = Promise<{ slug: string }>;

export default async function OrganizationPage({ params }: { params: Params }) {
  const { slug } = await params;

  // 1. Fetch Organization Details
  const organization = await getOrganizationBySlug(slug);

  if (!organization) {
    notFound();
  }

  // 2. Fetch Members & Pending Invites
  // `getUsers` directly User objects (`User[]`) return karta hai
  const members = await getUsers(organization.id);

  const pendingInvites = await db.query.invitation.findMany({
    where: eq(invitation.organizationId, organization.id),
  });

  // 3. Fetch Organization's Shared Downloads
  const teamDownloads = await db.query.download.findMany({
    where: eq(download.organizationId, organization.id),
    orderBy: [desc(download.downloadedAt)],
    limit: 5,
    with: {
      template: true,
      user: true,
    },
  });

  return (
    <div className="min-h-screen p-6 md:p-10 space-y-8">
      {/* 1. Header & Navigation */}
      <div className="flex flex-col my-10 sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <Link href="/dashboard" className="hover:text-zinc-300">
              Dashboard
            </Link>
            <span>/</span>
            <span className="text-zinc-300">Organizations</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-lg text-zinc-200">
              {organization.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{organization.name}</h1>
              <p className="text-xs text-zinc-500">Slug: /{organization.slug}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Dialog>
            <DialogTrigger render={<Button variant="outline" size={"sm"}>
              + Invite Member
            </Button>} />


            <DialogContent  >
              <DialogHeader>
                <DialogTitle>Invite Team Member</DialogTitle>
                <DialogDescription className="text-zinc-400">
                  Send an email invite to add a new member to {organization.name}.
                </DialogDescription>
              </DialogHeader>
              <InviteMemberForm organizationId={organization.id} />
            </DialogContent>
          </Dialog>

          <Logout />
        </div>
      </div>

      {/* 2. Quick Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 border space-y-1">
          <span className="text-xs text-zinc-400 font-medium">Total Team Members</span>
          <p className="text-xl font-bold">{members.length}</p>
        </div>

        <div className="p-5 border space-y-1">
          <span className="text-xs text-zinc-400 font-medium">Pending Invites</span>
          <p className="text-xl font-bold text-amber-400">{pendingInvites.length}</p>
        </div>

        <div className="p-5 border space-y-1">
          <span className="text-xs text-zinc-400 font-medium">Team Downloads</span>
          <p className="text-xl font-bold">{teamDownloads.length}</p>
        </div>
      </div>

      {/* 3. Team Members Section */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl tracking-tight">Active Members</h2>
          <span className="text-xs text-zinc-500">{members.length} Members</span>
        </div>

        <div className="border   divide-y divide-zinc-800 overflow-hidden">
          {members.map((member) => (
            <div key={member.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9   border flex items-center justify-center font-bold text-sm text-zinc-300">
                  {member.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <div>
                  <p className="font-medium text-sm text-zinc-200">{member.name}</p>
                  <p className="text-xs text-zinc-500">{member.email}</p>
                </div>
              </div>
              <span className="text-xs font-mono uppercase px-2.5 py-1 rounded border  ">
                {member.role || "member"}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Pending Invitations Section */}
      {pendingInvites.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-bold text-xl tracking-tight">Pending Invites</h2>
          <div className="border  divide-y  overflow-hidden">
            {pendingInvites.map((invite) => (
              <div key={invite.id} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm ">{invite.email}</p>
                  <p className="text-xs text-zinc-500">Role: {invite.role || "member"}</p>
                </div>
                <span className="text-xs font-mono capitalize  px-2 py-1 rounded">
                  {invite.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Team Shared Downloads Section */}
      <section className="space-y-4">
        <h2 className="font-bold text-xl tracking-tight">Team Downloads Activity</h2>

        {teamDownloads.length === 0 ? (
          <div className="p-6 text-center border">
            <p className="text-zinc-400 text-sm">No templates downloaded by the team yet.</p>
          </div>
        ) : (
          <div className="border divide-y  overflow-hidden">
            {teamDownloads.map(({ id, template, user: downloadedByUser, downloadedAt, licenseKey }) => (
              <div key={id} className="p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={template.thumbnail}
                    alt={template.title}
                    className="w-12 h-12 object-cover rounded-lg border border-zinc-800"
                  />
                  <div>
                    <p className="font-medium text-sm text-zinc-200">{template.title}</p>
                    <p className="text-xs text-zinc-500">
                      Downloaded by{" "}
                      <span className="text-zinc-300 font-medium">
                        {downloadedByUser.name}
                      </span>{" "}
                      on {new Date(downloadedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block text-xs font-mono bg-zinc-800 px-2 py-1 rounded border border-zinc-700 text-zinc-400">
                    {licenseKey}
                  </span>
                  <Button size="sm" variant="outline" className="border-zinc-700 text-xs">
                    <a href={template.downloadUrl} download>
                      Download
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