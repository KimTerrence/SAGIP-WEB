// /app/api/login/route.ts (for App Router)
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  // Authenticate user here (DB or hardcoded check)
  if (email === 'test@gmail.com' && password === 'test123') {
    const response = NextResponse.json({ success: true });

    // Set auth token (cookie)
    response.cookies.set('token', 'your-token-value', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  } 

  return NextResponse.json({ success: false }, { status: 401 });
}
