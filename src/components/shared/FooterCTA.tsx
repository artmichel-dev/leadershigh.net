import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'

import spaceSpotlight from '@/images/space-spotlight.png'

export function FooterCTA() {
  return (
    <>
      <Container className='py-16 sm:py-20 lg:py-24'>
        {/* Text content */}
        <div className='relative z-10 flex flex-col items-center'>
          <h1 className='max-w-5xl text-center text-4xl font-bold leading-extratight text-violet-100 sm:text-5xl sm:leading-tight'>
            Boost your productivity.
            <br />
            Start using our app&nbsp;
            <span className='relative inline-block text-nowrap'>
              <span className='relative z-10 bg-gradient-to-b from-violet-400 via-violet-400 to-violet-500 bg-clip-text text-transparent'>
                today.
              </span>
              <span className='absolute -top-px left-0 -z-10 text-violet-300'>
                today.
              </span>
            </span>
          </h1>
          <p className='mt-5 max-w-xl text-center text-[17px] leading-8 text-zinc-200 sm:text-lg sm:leading-8'>
            Iced pumpkin mug in ut shop a doppio panna milk press americano cup
            bar fair, lait that galão irish redeye galão.
          </p>
          <div className='mt-8 flex items-center justify-center space-x-3 sm:space-x-5'>
            <Button href='/signup'> Get started </Button>
          </div>
        </div>
      </Container>

      <Image
        src={spaceSpotlight}
        alt=''
        className='absolute -bottom-3/4 left-1/2 h-auto max-w-3xl -translate-x-1/2 object-contain opacity-90 sm:max-w-4xl md:-bottom-full lg:-bottom-[135%] lg:max-w-7xl'
      />
    </>
  )
}
