'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

const Odometer = dynamic(() => import('react-odometerjs'), { 
  ssr: false,
  loading: () => <span className="animate-pulse">---</span>
})

export const Stats = () => {
  const [stats, setStats] = useState({
    activeUsers: 1415500,
    companiesManaged: 10310,
    projectsCreated: 69420,
  })

  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef(stats)
  statsRef.current = stats

  const statsSectionRef = useRef<HTMLDListElement | null>(null)

  useEffect(() => {
    const fetchMockStats = (): Promise<typeof statsRef.current> => {
      return new Promise((resolve) => {
        // Reduced timeout for faster initial load
        setTimeout(() => {
          resolve({
            activeUsers:
              statsRef.current.activeUsers + Math.floor(Math.random() * 200),
            companiesManaged:
              statsRef.current.companiesManaged + Math.floor(Math.random() * 5),
            projectsCreated:
              statsRef.current.projectsCreated + Math.floor(Math.random() * 15),
          })
        }, 200) // Reduced from 500ms
      })
    }

    const updateStats = () => {
      fetchMockStats().then((data) => {
        setStats(data)
      })
    }

    let interval: NodeJS.Timeout

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            updateStats()
            // Reduced update frequency from 7000ms to 10000ms
            interval = setInterval(updateStats, 10000)
          }
        })
      },
      {
        root: null,
        threshold: 0.1, // Reduced threshold for earlier triggering
        rootMargin: '50px', // Start loading 50px before entering viewport
      }
    )

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current)
    }

    return () => {
      clearInterval(interval)
      observer.disconnect()
    }
  }, [isVisible])

  return (
    <dl
      ref={statsSectionRef}
      className='mt-16 grid gap-14 sm:mt-20 sm:grid-cols-3 sm:gap-3 lg:mt-24 xl:mt-28'
    >
      <div className='flex flex-col items-center justify-center'>
        <dt className='text-center text-xs font-extrabold uppercase tracking-widest text-violet-50/80'>
          Active users
        </dt>
        <dd className='odometer mt-4 !font-mono text-3xl font-bold text-white'>
          <Odometer value={stats.activeUsers} />
        </dd>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <dt className='text-center text-xs font-extrabold uppercase tracking-widest text-violet-50/80'>
          Companies managed
        </dt>
        <dd className='odometer mt-4 text-center !font-mono text-3xl font-bold text-white'>
          <Odometer value={stats.companiesManaged} />
        </dd>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <dt className='text-center text-xs font-extrabold uppercase tracking-widest text-violet-50/80'>
          Projects created
        </dt>
        <dd className='odometer mt-4 text-center !font-mono text-3xl font-bold text-white'>
          <Odometer value={stats.projectsCreated} />
        </dd>
      </div>
    </dl>
  )
}
