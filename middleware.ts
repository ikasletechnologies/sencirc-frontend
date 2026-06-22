import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Only protect /admin routes
  if (path.startsWith('/admin')) {
    // Exclude the login page itself
    if (path === '/admin/login') {
      return NextResponse.next();
    }

    // Check for the auth token
    const token = request.cookies.get('admin_token');
    
    // If no token exists, redirect to login
    if (!token || token.value !== 'authenticated') {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
