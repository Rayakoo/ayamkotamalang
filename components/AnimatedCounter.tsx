'use client'

import { useEffect, useRef, useState } from 'react'

export default function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1500
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setDisplay(value)
              clearInterval(timer)
            } else {
              setDisplay(current)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  const formatNumber = (num: number) => {
    if (Number.isInteger(num)) return num.toString()
    return num.toFixed(num < 10 ? 1 : 0)
  }

  return <span ref={ref}>{prefix}{formatNumber(display)}{suffix}</span>
}
