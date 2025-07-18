import Link from 'next/link'
import Image from 'next/image'
import { NavbarPill } from '@/components/header/NavbarPill'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher'

import logo from '@/images/logo.png'

export const Header = () => {
  return (
    <header className='relative h-20'>
      <Container className='flex h-full items-center'>
        <nav className='relative z-50 flex w-full items-center justify-between'>
          {/* Logo */}
          <div className='relative z-10 hidden shrink-0 items-center md:flex'>
            <Link
              href='/'
              aria-label='Home'
              className='flex flex-shrink-0 items-center'
            >
              <Image src={logo} alt='' className='h-7 w-auto lg:h-8' />
            </Link>
          </div>

          <NavbarPill />

          <div className='hidden items-center gap-3 md:flex lg:gap-4'>
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            <Button
              href='/signin'
              variant='tertiary'
              size='sm'
              className='overflow-hidden'
            >
              Sign in
            </Button>

            {/* Call to action */}
            <Button href='/signup' size='sm'>
              Sign up
            </Button>
          </div>
        </nav>
        <hr className='absolute inset-x-0 bottom-0 h-px border-0 bg-gradient-to-r from-transparent via-violet-200/15 to-transparent' />
      </Container>
    </header>
  )
}
