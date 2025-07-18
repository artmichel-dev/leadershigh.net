'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/16/solid'
import { languages, getLocaleFromPathname, getLocalizedPath, type Locale, locales } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const currentLocale = getLocaleFromPathname(pathname)
  
  const handleLanguageChange = (newLocale: Locale) => {
    // Obtener la ruta base sin el locale actual
    let basePath = '/'
    
    // Si la URL actual tiene un prefijo de locale, removerlo para obtener la ruta base
    const segments = pathname.split('/').filter(Boolean)
    
    if (segments.length > 0 && locales.includes(segments[0] as any)) {
      // Tenemos un prefijo de locale, removerlo
      const pathSegments = segments.slice(1)
      basePath = pathSegments.length > 0 ? `/${pathSegments.join('/')}` : '/'
    } else {
      // No hay prefijo de locale (estamos en coreano), usar la ruta completa
      basePath = pathname
    }
    
    // Generar la nueva URL con el locale seleccionado
    const newPath = getLocalizedPath(basePath, newLocale)
    
    // Navegar a la nueva ruta
    router.push(newPath)
  }

  const currentLanguage = languages[currentLocale]

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex items-center gap-2 rounded-md bg-zinc-800/50 px-3 py-2 text-sm font-medium text-violet-100 hover:bg-zinc-800/70 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors">
        <GlobeAltIcon className="h-4 w-4" />
        <span>{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <ChevronDownIcon className="h-4 w-4" />
      </MenuButton>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {Object.entries(languages).map(([locale, language]) => (
              <MenuItem key={locale}>
                {({ active }) => (
                  <button
                    onClick={() => handleLanguageChange(locale as Locale)}
                    className={cn(
                      'group flex w-full items-center gap-3 px-4 py-2 text-sm transition-colors',
                      active ? 'bg-zinc-700 text-violet-100' : 'text-zinc-300',
                      currentLocale === locale && 'bg-violet-600 text-white'
                    )}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <span className="font-medium">{language.name}</span>
                    {currentLocale === locale && (
                      <div className="ml-auto h-2 w-2 rounded-full bg-white" />
                    )}
                  </button>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
} 