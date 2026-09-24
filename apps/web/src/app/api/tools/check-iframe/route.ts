import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({ allowed: false });
  }

  try {
    const response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(3000),
    });

    const xFrameOptions = response.headers
      .get("x-frame-options")
      ?.toLowerCase();

    const csp = response.headers.get("content-security-policy");

    // X-Frame-Options
    if (
      xFrameOptions === "deny" ||
      xFrameOptions === "sameorigin"
    ) {
      return NextResponse.json({ allowed: false });
    }

    // CSP frame-ancestors
    if (csp?.includes("frame-ancestors")) {
      const frameAncestors = csp
        .split(";")
        .find((item) => item.trim().startsWith("frame-ancestors"));

      if (
        frameAncestors &&
        !frameAncestors.includes("*")
      ) {
        return NextResponse.json({ allowed: false });
      }
    }

    return NextResponse.json({ allowed: true });
  } catch {
    return NextResponse.json({ allowed: false });
  }
}