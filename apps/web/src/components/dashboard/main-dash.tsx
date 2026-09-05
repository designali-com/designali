import React from "react";
import { eq, desc } from "drizzle-orm";
import { download, subscription } from "@/src/db/schema";
import { db } from "@/src/db/drizzle";

interface DashboardProps {
  userId: string; // Dynamic Auth session se milega
}

export default async function UserDashboard({ userId }: DashboardProps) {
  // Fetch Recent Downloads
  const userDownloads = await db.query.download.findMany({
    where: eq(download.userId, userId),
    orderBy: [desc(download.downloadedAt)],
    with: {
      template: true,
    },
  });

  // Fetch Active Subscription Status
  const sub = await db.query.subscription.findFirst({
    where: eq(subscription.userId, userId),
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Top Banner / Stats */}
      <div className="flex justify-between items-center bg-zinc-900 text-white p-6 rounded-xl border border-zinc-800">
        <div>
          <h1 className="text-2xl font-bold">Welcome back! 👋</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Access your downloaded Pro templates and license keys anytime.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-zinc-800 px-4 py-2 rounded-lg text-center">
            <span className="text-xs text-zinc-400 block">Current Plan</span>
            <span className="text-sm font-semibold capitalize text-emerald-400">
              {sub?.status === "active" ? sub.plan : "Free Tier"}
            </span>
          </div>
          <div className="bg-zinc-800 px-4 py-2 rounded-lg text-center">
            <span className="text-xs text-zinc-400 block">Total Downloads</span>
            <span className="text-sm font-semibold">{userDownloads.length}</span>
          </div>
        </div>
      </div>

      {/* Downloads Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Your Recent Downloads</h2>
        {userDownloads.length === 0 ? (
          <div className="text-center py-12 bg-zinc-50 rounded-xl border border-dashed border-zinc-300">
            <p className="text-zinc-500">You haven't downloaded any templates yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userDownloads.map(({ id, template, licenseKey, downloadedAt }) => (
              <div
                key={id}
                className="border rounded-xl overflow-hidden shadow-sm bg-white border-zinc-200"
              >
                <img
                  src={template.thumbnail}
                  alt={template.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg">{template.title}</h3>
                    <span className="text-xs bg-zinc-100 text-zinc-600 px-2 py-1 rounded">
                      {template.category}
                    </span>
                  </div>
                  
                  <div className="text-xs text-zinc-500 space-y-1">
                    <p>License: <code className="bg-zinc-100 px-1 py-0.5 rounded font-mono">{licenseKey}</code></p>
                    <p>Downloaded: {new Date(downloadedAt).toLocaleDateString()}</p>
                  </div>

                  <div className="pt-2 flex gap-2">
                    <a
                      href={template.downloadUrl}
                      className="flex-1 text-center bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition"
                    >
                      Download Assets
                    </a>
                    {template.figmaUrl && (
                      <a
                        href={template.figmaUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 border border-zinc-300 text-zinc-700 rounded-lg text-sm hover:bg-zinc-50"
                      >
                        Figma
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}