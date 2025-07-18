import clsx from 'clsx'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { getDictionary, type Locale, languages } from '@/lib/i18n'
import '@/styles/globals.css'

type Props = {
  children: React.ReactNode
  params: {
    locale: Locale
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dictionary = await getDictionary(params.locale)
  const language = languages[params.locale]
  
  return {
    title: {
      template: '%s - Nebula',
      default: dictionary.metadata.title,
    },
    description: dictionary.metadata.description,
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      locale: params.locale,
    },
  }
}

export default function LocaleLayout({ children, params }: Props) {
  const language = languages[params.locale]
  
  return (
    <html
      lang={params.locale}
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