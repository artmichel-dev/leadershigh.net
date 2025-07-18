import clsx from 'clsx'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { getDictionary, defaultLocale, languages } from '@/lib/i18n'
import '@/styles/globals.css'

// Generar metadata para el idioma coreano (principal)
export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(defaultLocale)
  
  return {
    title: {
      template: '%s - Nebula',
      default: dictionary.metadata.title,
    },
    description: dictionary.metadata.description,
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      locale: defaultLocale,
    },
    other: {
      // DNS prefetch for external resources
      'dns-prefetch': '//www.youtube.com, //fonts.googleapis.com',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const language = languages[defaultLocale]
  
  return (
    <html
      lang={defaultLocale}
      dir={language.dir}
      className={clsx('scroll-smooth', GeistSans.variable, GeistMono.variable)}
    >
      <body className='bg-zinc-900'>{children}</body>
    </html>
  )
}
