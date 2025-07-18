import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale, isValidLocale } from '@/lib/i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Verificar si ya tiene un locale en la URL
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  // Si ya tiene un locale válido, continuar
  if (pathnameHasLocale) {
    return NextResponse.next()
  }
  
  // Verificar si está accediendo a archivos estáticos
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }
  
  // Detectar idioma preferido del navegador
  const acceptLanguage = request.headers.get('accept-language') || ''
  let preferredLocale = defaultLocale
  
  // Buscar coincidencias con nuestros idiomas soportados
  for (const locale of locales) {
    if (acceptLanguage.includes(locale)) {
      preferredLocale = locale
      break
    }
  }
  
  // Solo redirigir si no es el idioma por defecto (coreano)
  // El coreano se sirve desde las rutas sin prefijo
  if (preferredLocale !== defaultLocale) {
    const redirectUrl = new URL(`/${preferredLocale}${pathname}`, request.url)
    return NextResponse.redirect(redirectUrl)
  }
  
  // Para rutas en coreano (idioma por defecto), continuar sin redirección
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