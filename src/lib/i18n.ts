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

// Función para obtener el locale de una URL
export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/')
  const potentialLocale = segments[1]
  
  if (potentialLocale && locales.includes(potentialLocale as any)) {
    return potentialLocale as Locale
  }
  
  return defaultLocale
}

// Función para generar URLs con locale
export function getLocalizedPath(pathname: string, locale: Locale): string {
  // Si es el idioma por defecto (coreano), no agregar prefijo
  if (locale === defaultLocale) {
    return pathname
  }
  
  // Si el pathname ya tiene un locale, reemplazarlo
  const segments = pathname.split('/')
  if (segments[1] && locales.includes(segments[1] as any)) {
    segments[1] = locale
    return segments.join('/')
  }
  
  // Agregar el nuevo locale
  return `/${locale}${pathname}`
} 