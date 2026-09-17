import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return new NextResponse("Missing image URL", { status: 400 });
  }

  try {
    const parsedUrl = new URL(url);

    if (!parsedUrl.hostname.endsWith(".amazonaws.com")) {
      return new NextResponse("Invalid image host", { status: 400 });
    }

    const response = await fetch(url);

    if (!response.ok) {
      return new NextResponse("Failed to fetch image", { status: response.status });
    }

    const contentType = response.headers.get("content-type") || "image/png";
    const buffer = await response.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch {
    return new NextResponse("Failed to proxy image", { status: 500 });
  }
}