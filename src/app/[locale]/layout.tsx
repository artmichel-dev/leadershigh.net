import clsx from 'clsx'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { getDictionary, type Locale, languages, isValidLocale, defaultLocale } from '@/lib/i18n'
import { redirect } from 'next/navigation'
import '@/styles/globals.css'

type Props = {
  children: React.ReactNode
  params: {
    locale: string // Cambiado a string para validar después
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Validar locale antes de usarlo
  const validLocale: Locale = isValidLocale(params.locale) ? params.locale as Locale : defaultLocale
  
  const dictionary = await getDictionary(validLocale)
  const language = languages[validLocale]
  
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
  
  return (
    <html
      lang={validLocale}
      dir={language.dir}
      className={clsx('scroll-smooth', GeistSans.variable, GeistMono.variable)}
    >
      <body className='bg-zinc-900'>{children}</body>
    </html>
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