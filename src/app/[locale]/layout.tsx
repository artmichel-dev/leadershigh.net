import type { Metadata } from 'next'
import { getDictionary, type Locale, languages, isValidLocale, defaultLocale } from '@/lib/i18n'
import { redirect } from 'next/navigation'
import { LocaleProvider } from '@/components/shared/LocaleProvider'
// ❌ REMOVIDO PERMANENTEMENTE: import '@/styles/globals.css'
// CSS global SOLO debe importarse en el layout raíz (src/app/layout.tsx)

type Props = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Validar locale antes de usarlo
  const validLocale: Locale = isValidLocale(params.locale) ? params.locale as Locale : defaultLocale
  
  const dictionary = await getDictionary(validLocale)
  
  return {
    title: {
      template: '%s - Nebula',
      default: dictionary.metadata.title,
    },
    description: dictionary.metadata.description,
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      locale: validLocale,
    },
  }
}

export default function LocaleLayout({ children, params }: Props) {
  // Validar locale y redirigir si no es válido
  if (!isValidLocale(params.locale)) {
    console.warn(`Invalid locale: ${params.locale}, redirecting to default`)
    redirect('/')
  }
  
  const validLocale = params.locale as Locale
  const language = languages[validLocale]
  
  // ❌ SOLUCIÓN: Solo renderizar children, NO crear nuevos elementos html/body
  // El layout raíz ya proporciona la estructura html/body
  return (
    <LocaleProvider locale={validLocale} language={language}>
      {children}
    </LocaleProvider>
  )
}

// Generar rutas estáticas para todos los locales soportados
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'zh' },
    { locale: 'ja' },
    { locale: 'vi' },
    { locale: 'es' },
  ]
} 