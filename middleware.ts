import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale, isValidLocale } from '@/lib/i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Early return for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/assets')
  ) {
    return NextResponse.next()
  }
  
  // Early return for root path
  if (pathname === '/') {
    return NextResponse.next()
  }
  
  // Extract segments efficiently
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length === 0) {
    return NextResponse.next()
  }
  
  const firstSegment = segments[0]
  
  // Check if first segment is a valid locale
  if (isValidLocale(firstSegment)) {
    return NextResponse.next()
  }
  
  // Handle very short segments that might be errors
  if (firstSegment.length <= 2 && !firstSegment.match(/^[a-zA-Z0-9-_]+$/)) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  // For routes without locale, serve in Korean
  return NextResponse.next()
}

export const config = {
  matcher: [
    // More specific matcher to reduce unnecessary processing
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
} 