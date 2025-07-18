import { usePathname } from 'next/navigation'
import { getLocaleFromPathname, type Locale } from '@/lib/i18n'

// Hook para obtener el locale actual desde la URL
export function useLocale(): Locale {
  const pathname = usePathname()
  return getLocaleFromPathname(pathname)
}

// Hook para generar funciones de traducción en componentes client-side
// Nota: Para componentes server-side, usar getDictionary directamente
export function useTranslations(dictionary: any) {
  return (key: string, fallback?: string): string => {
    const keys = key.split('.')
    let value = dictionary
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return fallback || key
      }
    }
    
    return typeof value === 'string' ? value : fallback || key
  }
} 