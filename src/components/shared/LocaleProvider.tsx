'use client'

import { useEffect } from 'react'
import { type Locale } from '@/lib/i18n'

interface LocaleProviderProps {
  children: React.ReactNode
  locale: Locale
  language: {
    name: string
    flag: string
    dir: 'ltr' | 'rtl'
  }
}

export function LocaleProvider({ children, locale, language }: LocaleProviderProps) {
  useEffect(() => {
    // Actualizar dinámicamente el atributo lang del elemento html
    const htmlElement = document.documentElement
    if (htmlElement) {
      htmlElement.lang = locale
      htmlElement.dir = language.dir
    }
  }, [locale, language.dir])

  return <>{children}</>
} 