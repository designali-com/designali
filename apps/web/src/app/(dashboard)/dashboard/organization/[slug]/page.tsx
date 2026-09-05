 
import { getOrganizationBySlug } from "@/src/server/organizations";
import { getUsers } from "@/src/server/users";

type Params = Promise<{ slug: string }>;

export default async function OrganizationPage({ params }: { params: Params }) {
  const { slug } = await params;

  const organization = await getOrganizationBySlug(slug);
  const users = await getUsers(organization?.id || "");

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4 py-10">
      <h1 className="font-bold text-2xl">{organization?.name}</h1>
       
    </div>
  );
}