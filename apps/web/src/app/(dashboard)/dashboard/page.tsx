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

export default async function Dashboard() {
  const organizations = await getOrganizations();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <Dialog>
        <DialogTrigger  >
          <Button variant="outline">Create Organization</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Organization</DialogTitle>
            <DialogDescription>
              Create a new organization to get started.
            </DialogDescription>
          </DialogHeader>
          <CreateOrganizationForm />
        </DialogContent>
      </Dialog>

      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-2xl">Organizations</h2>
        {organizations.map((organization) => (
          <Button key={organization.id} variant="outline">
            <Link href={`/dashboard/organization/${organization.slug}`}>
              {organization.name}
            </Link>
          </Button>
        ))}
      </div>
      <Logout/>
    </div>
  );
}