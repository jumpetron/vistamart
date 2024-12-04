import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const { pathname } = request.nextUrl

  // Skip authentication check for login route
  if (pathname.startsWith('/auth/login')) {
    return NextResponse.next()
  }

  const userInfo = await getToken({
    req: request,
  })

  if (!userInfo) {
    return NextResponse.redirect(new URL(`/auth/login`, request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/user/:path*',
    '/order/:path*',
    '/checkout/:path*',
    '/auth/login/:path*', // Matcher still includes login for potential other uses
  ],
}
