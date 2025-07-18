import type { Site, SocialObjects, Clients } from './types'
import dailyNews from './images/logos/daily-news.svg'
import netflix from './images/logos/netflix.svg'
import github from './images/logos/github.svg'
import tinder from './images/logos/tinder.svg'
import apple from './images/logos/apple.svg'
import ticketmaster from './images/logos/ticketmaster.svg'
import amazon from './images/logos/amazon.svg'
import stripe from './images/logos/stripe.svg'
import facebook from './images/logos/facebook.svg'
import oracle from './images/logos/oracle.svg'

export const SITE: Site = {
  website: 'https://nebula-astro.tailwindawesome.com', // replace this with your deployed domain
  author: 'Rodrigo Aguilar',
  description:
    "Unlock the potential of remote work with Nebula's advanced collaboration ecosystem. Designed for modern teams, Nebula streamlines communication, simplifies projects, and secures your data.",
  title: 'Nebula',
  ogImage: 'nebula-og.png',
}

export const SOCIALS: SocialObjects = [
  {
    name: 'twitter',
    href: '#',
    label: 'See what’s new',
    ariaLabel: 'Follow on Twitter',
  },
  {
    name: 'github',
    href: '#',
    label: 'See how it’s done',
    ariaLabel: 'Follow on Github',
  },
  {
    name: 'youtube',
    href: '#',
    label: 'Watch tutorials',
    ariaLabel: 'Follow on Youtube',
  },
  {
    name: 'discord',
    href: '#',
    label: 'Talk to us',
    ariaLabel: 'Join our Discord',
  },
  {
    name: 'instagram',
    href: '#',
    label: 'Life at Nebula',
    ariaLabel: 'Follow on Instagram',
  },
]

export const CLIENTS: Clients = [
  { name: 'Daily News', logo: dailyNews },
  { name: 'Netflix', logo: netflix },
  { name: 'Github', logo: github },
  { name: 'Tinder', logo: tinder },
  { name: 'Facebook', logo: facebook },
  { name: 'Ticketmaster', logo: ticketmaster },
  { name: 'Amazon', logo: amazon },
  { name: 'Stripe', logo: stripe },
  { name: 'Apple', logo: apple },
  { name: 'Oracle', logo: oracle },
]
