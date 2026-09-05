 
import { Logout } from "@/src/components/layout/logout";
import { getOrganizationBySlug } from "@/src/server/organizations";
import { getUsers } from "@/src/server/users";

type Params = Promise<{ slug: string }>;

export default async function OrganizationPage({ params }: { params: Params }) {
  const { slug } = await params;

  const organization = await getOrganizationBySlug(slug);
  const users = await getUsers(organization?.id || "");

  return (
    <div className="mx-auto items-center flex max-w-3xl flex-col gap-4 py-20">
      <h1 className="font-bold text-2xl">{organization?.name}</h1> 
       
      <Logout/>
    </div>
  );
}