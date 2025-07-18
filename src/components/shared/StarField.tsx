'use client'

import { useEffect, useRef, useState } from 'react'
import { Stars } from '@/lib/starfield'

interface StarFieldProps {
  maxRadius?: number
  minRadius?: number
  density?: 'low' | 'medium' | 'high'
}

export const StarField = ({
  maxRadius = 2, // Reduced from 3
  minRadius = 1,
  density = 'low',
}: StarFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const starfieldRef = useRef<Stars | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '100px',
      }
    )

    if (canvasRef.current) {
      observer.observe(canvasRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (isVisible && canvasRef.current && !starfieldRef.current) {
      starfieldRef.current = new Stars(
        canvasRef.current,
        maxRadius,
        minRadius,
        density
      )
    }

    return () => {
      if (starfieldRef.current) {
        starfieldRef.current.destroy()
        starfieldRef.current = null
      }
    }
  }, [isVisible, density, maxRadius, minRadius])

  return (
    <canvas
      ref={canvasRef}
      className='opacity-0 duration-1000 ease-in-out'
    ></canvas>
  )
}
