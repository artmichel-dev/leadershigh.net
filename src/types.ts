import type { ImageMetadata } from 'astro'

export type Site = {
  website: string
  author: string
  description: string
  title: string
  ogImage: string
}

export type SocialObjects = {
  name: SocialMedia
  href: string
  label: string
  ariaLabel: string
}[]

export type SocialMedia =
  | 'github'
  | 'dribbble'
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'mail'
  | 'x'
  | 'twitch'
  | 'whatsApp'
  | 'snapchat'
  | 'pinterest'
  | 'tikTok'
  | 'codePen'
  | 'discord'
  | 'gitLab'
  | 'reddit'
  | 'skype'
  | 'steam'
  | 'telegram'
  | 'mastodon'
  | 'twitter'
  | 'youtube'

export type Clients = {
  name: string
  logo: ImageMetadata
}[]