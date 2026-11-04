import { NextResponse } from "next/server";

import {
  buildRegistryPreview,
  getRegistryConfigItem,
} from "@/src/lib/registry";

export const revalidate = 3600;

type RouteContext = {
  params: Promise<{
    source: string;
    name: string;
  }>;
};

export async function GET(
  _request: Request,
  { params }: RouteContext,
) {
  try {
    const { source, name } = await params;

    const item = await getRegistryConfigItem(source, name);

    if (!item) {
      return NextResponse.json(
        { error: "Registry item not found." },
        { status: 404 },
      );
    }

    const result = await buildRegistryPreview(item);

    return NextResponse.json(result, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("[registry API]", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to load registry item.",
      },
      { status: 502 },
    );
  }
}