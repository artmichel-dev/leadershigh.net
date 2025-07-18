import dynamic from 'next/dynamic'
import { HeroContainer } from '@/components/shared/HeroContainer'
import { HomeHero } from '@/components/home/HomeHero'
import { Divider } from '@/components/shared/Divider'
import { Footer } from '@/components/shared/Footer'
import { LoadingPlaceholder } from '@/components/shared/LoadingPlaceholder'

// Lazy load heavy components
const BentoGridSection = dynamic(() => import('@/components/home/BentoGridSection').then(mod => ({ default: mod.BentoGridSection })), {
  loading: () => <LoadingPlaceholder />
})

const InteractiveCodeSection = dynamic(() => import('@/components/home/InteractiveCodeSection').then(mod => ({ default: mod.InteractiveCodeSection })), {
  loading: () => <LoadingPlaceholder />
})

const Integrations = dynamic(() => import('@/components/home/Integrations').then(mod => ({ default: mod.Integrations })), {
  loading: () => <LoadingPlaceholder />
})

const Features = dynamic(() => import('@/components/home/Features').then(mod => ({ default: mod.Features })), {
  loading: () => <LoadingPlaceholder />
})

const Testimonials = dynamic(() => import('@/components/home/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <LoadingPlaceholder />
})

export default function Home() {
  return (
    <>
      <HeroContainer>
        <HomeHero />
      </HeroContainer>
      <Divider />
      <BentoGridSection />
      <Divider />
      <InteractiveCodeSection />
      <Divider />
      <Integrations />
      <Features />
      <Divider />
      <Testimonials />
      <Divider />
      <Footer />
    </>
  )
}
