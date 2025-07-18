// Configuración de idiomas soportados
export const locales = ['en', 'zh', 'ja', 'vi', 'es'] as const
export const defaultLocale = 'ko' // Coreano es el idioma principal (sin prefijo)

export type Locale = typeof locales[number] | 'ko'

// Configuración de idiomas con metadatos
export const languages = {
  ko: {
    name: '한국어',
    flag: '🇰🇷',
    dir: 'ltr',
    code: 'ko'
  },
  en: {
    name: 'English',
    flag: '🇺🇸',
    dir: 'ltr',
    code: 'en'
  },
  zh: {
    name: '中文',
    flag: '🇨🇳',
    dir: 'ltr',
    code: 'zh'
  },
  ja: {
    name: '日本語',
    flag: '🇯🇵',
    dir: 'ltr',
    code: 'ja'
  },
  vi: {
    name: 'Tiếng Việt',
    flag: '🇻🇳',
    dir: 'ltr',
    code: 'vi'
  },
  es: {
    name: 'Español',
    flag: '🇪🇸',
    dir: 'ltr',
    code: 'es'
  }
} as const

// Función para obtener diccionario de traducción
export async function getDictionary(locale: Locale) {
  try {
    const dictionary = await import(`@/dictionaries/${locale}.json`)
    return dictionary.default
  } catch (error) {
    console.warn(`Dictionary not found for locale: ${locale}, falling back to Korean`)
    const fallback = await import(`@/dictionaries/ko.json`)
    return fallback.default
  }
}

// Función para verificar si un locale es válido
export function isValidLocale(locale: string): locale is Locale {
  return [...locales, defaultLocale].includes(locale as Locale)
}

// Función para obtener el locale de una URL - MEJORADA
export function getLocaleFromPathname(pathname: string): Locale {
  // Limpiar pathname y dividir en segmentos
  const cleanPathname = pathname.startsWith('/') ? pathname.slice(1) : pathname
  const segments = cleanPathname.split('/').filter(Boolean)
  
  // Si no hay segmentos o el primer segmento no es un locale válido, retornar coreano
  if (segments.length === 0) {
    return defaultLocale
  }
  
  const potentialLocale = segments[0]
  
  // Verificar si es un locale válido y está en la lista de locales con prefijo
  if (potentialLocale && locales.includes(potentialLocale as any)) {
    return potentialLocale as Locale
  }
  
  // Si no es un locale válido, asumir que es coreano (sin prefijo)
  return defaultLocale
}

// Función para generar URLs con locale - MEJORADA
export function getLocalizedPath(pathname: string, locale: Locale): string {
  // Limpiar pathname
  let cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`
  
  // Si es coreano (idioma por defecto), remover cualquier prefijo de locale existente
  if (locale === defaultLocale) {
    // Si la ruta actual tiene un prefijo de locale, removerlo
    const segments = cleanPath.split('/').filter(Boolean)
    if (segments.length > 0 && locales.includes(segments[0] as any)) {
      // Remover el primer segmento (locale) y reconstruir la ruta
      const newSegments = segments.slice(1)
      return newSegments.length > 0 ? `/${newSegments.join('/')}` : '/'
    }
    // Si no tiene prefijo, devolver tal como está
    return cleanPath
  }
  
  // Para otros idiomas, agregar o reemplazar el prefijo
  const segments = cleanPath.split('/').filter(Boolean)
  
  // Si ya tiene un prefijo de locale, reemplazarlo
  if (segments.length > 0 && locales.includes(segments[0] as any)) {
    segments[0] = locale
    return `/${segments.join('/')}`
  }
  
  // Si no tiene prefijo, agregarlo
  if (segments.length === 0) {
    return `/${locale}`
  }
  
  return `/${locale}/${segments.join('/')}`
} 