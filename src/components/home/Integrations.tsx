import Image from 'next/image'
import clsx from 'clsx'
import { Divider } from '@/components/shared/Divider'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'
import { StarField } from '@/components/shared/StarField'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

import spaceSpotlight from '@/images/space-spotlight-2.png'
import slack from '@/images/logos/icons/slack.png'
import paypal from '@/images/logos/icons/paypal.png'
import shopify from '@/images/logos/icons/shopify.png'
import dropbox from '@/images/logos/icons/dropbox.png'
import yelp from '@/images/logos/icons/yelp.png'
import google from '@/images/logos/icons/google.png'
import whatsapp from '@/images/logos/icons/whatsapp.png'
import instagram from '@/images/logos/icons/instagram.png'
import messenger from '@/images/logos/icons/messenger.png'

const integrations = [
  [
    { name: 'Slack', image: slack },
    { name: 'Paypal', image: paypal },
    { name: 'Shopify', image: shopify },
  ],
  [
    { name: 'Dropbox', image: dropbox },
    { name: 'Yelp', image: yelp },
    { name: 'Google', image: google },
  ],
  [
    { name: 'Whatsapp', image: whatsapp },
    { name: 'Instagram', image: instagram },
    { name: 'Messenger', image: messenger },
  ],
]

export function Integrations() {
  return (
    <section className='overflow-hidden bg-[linear-gradient(rgba(24,24,27,0.95),rgba(24,24,27,0.95)),linear-gradient(#2E106525,#2E106525)]'>
      <Container className='relative'>
        <div className='mx-auto w-full max-w-xl md:mx-0 md:grid md:max-w-none md:grid-cols-11'>
          <div className='flex items-center py-14 md:col-span-5 md:py-20 lg:col-span-5 lg:py-32'>
            <div className='relative z-10 flex flex-col'>
              <h1 className='text-4xl font-bold leading-extratight text-violet-100 sm:text-[2.75rem] sm:leading-extratight lg:text-5xl lg:leading-extratight'>
                Bring all your tools together
              </h1>

              <p className='mt-6 text-lg leading-8 text-zinc-300 md:text-[17px] md:leading-8 lg:text-lg lg:leading-8'>
                That robust shop as rich siphon in organic french so acerbic
                plunger. Au foam strong irish press go body and sugar kopi
                viennese percolator beans coffee.
              </p>

              <div className='mt-8'>
                <Button href='#' variant='secondary'>
                  <span>View all integrations</span>
                  <ChevronRightIcon className='h-4 w-4' />
                </Button>
              </div>
            </div>
          </div>
          <div className='relative md:col-span-6 md:pl-12 xl:pl-36'>
            <div className='relative flex h-96 items-center justify-center sm:h-[500px] md:h-full lg:items-start'>
              <div className='absolute -bottom-12 -left-96 -right-96'>
                <Image
                  src={spaceSpotlight}
                  alt=''
                  className='h-full w-full object-contain'
                />
              </div>

              {/* Stars */}
              <div
                className='absolute bottom-0 left-0 right-0 h-36 sm:-left-6 sm:-right-6 lg:-left-12 lg:-right-12'
                aria-hidden='true'
              >
                <StarField density='high' maxRadius={2.5} minRadius={1.25} />
              </div>
              <div className='z-10 lg:mt-16'>
                <div className='flex w-full space-x-7 sm:space-x-12 md:space-x-7 lg:space-x-12'>
                  {integrations.map((col, colIndex) => (
                    <div
                      key={`integrations-col-${colIndex}`}
                      className={clsx(
                        'relative flex flex-col space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-8',
                        (colIndex + 1) % 2 !== 0 &&
                          'translate-y-14 md:translate-y-12 lg:translate-y-20'
                      )}
                    >
                      {col.map((integration) => (
                        <div
                          key={`integrations-${integration.name}`}
                          className='h-24 w-24 rounded-2xl bg-zinc-700/15 shadow-[inset_0_0_50px_50px_rgba(30,13,73,0.05),_0_1px_0_0_rgba(0,0,0,0.2),_0_4px_25px_1px_rgba(139,92,246,0.1)] sm:h-32 sm:w-32 md:h-24 md:w-24 lg:h-32 lg:w-32'
                        >
                          <div className='flex h-full w-full items-center justify-center rounded-2xl border border-violet-200/[.06]'>
                            <Image
                              src={integration.image}
                              alt={integration.name}
                              className='h-9 w-9 sm:h-12 sm:w-12 md:h-9 md:w-9 lg:h-12 lg:w-12'
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Divider />
    </section>
  )
}
