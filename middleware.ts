import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale, isValidLocale } from '@/lib/i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Verificar si está accediendo a archivos estáticos
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next()
  }
  
  console.log('Middleware processing:', pathname)
  
  // Extraer segmentos de la URL
  const segments = pathname.split('/').filter(Boolean)
  
  // Si no hay segmentos (ruta raíz), servir coreano
  if (segments.length === 0) {
    console.log('Root path, serving Korean')
    return NextResponse.next()
  }
  
  const firstSegment = segments[0]
  
  // Verificar si el primer segmento es un locale válido
  if (isValidLocale(firstSegment)) {
    console.log('Valid locale found:', firstSegment)
    return NextResponse.next()
  }
  
  // Si el primer segmento NO es un locale válido, verificar si es muy corto (posible error)
  if (firstSegment.length <= 2 && !firstSegment.match(/^[a-zA-Z0-9-_]+$/)) {
    console.log('Invalid/malformed segment detected:', firstSegment, 'redirecting to root')
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  // Para rutas sin locale (como /about, /pricing, etc.), servir en coreano
  console.log('No locale prefix, serving Korean for:', pathname)
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Coincidir con todas las rutas de solicitud excepto las que comienzan con:
     * - api (rutas de API)
     * - _next/static (archivos estáticos)
     * - _next/image (archivos de optimización de imágenes)
     * - favicon.ico (favicon)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 