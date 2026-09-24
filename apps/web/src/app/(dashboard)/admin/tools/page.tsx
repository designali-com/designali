import { ToolsAdmin } from "@/src/components/dashboard/admin/tools-admin";
import { getTools } from "@/src/server/admin-tools";

export default async function AdminToolsPage() {
  const tools = await getTools();

  return (
    <div className="mt-12 p-3">
      <ToolsAdmin tools={tools} />
    </div>
  );
}