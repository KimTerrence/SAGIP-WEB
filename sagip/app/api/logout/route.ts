// /app/api/logout/route.ts (App Router)

import { NextResponse, NextRequest } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set("token", "", {
    maxAge: 0, // Clear the cookie
    path: "/",
  });
  return response;
}
