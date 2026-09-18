import { useEffect, useState, type CSSProperties } from 'react'

type LightingPeriod = 'dawn' | 'morning' | 'afternoon' | 'sunset' | 'night'

export type AmbientLighting = {
  period: LightingPeriod
  style: CSSProperties
}

const getPeriod = (hour: number): LightingPeriod => {
  if (hour >= 5 && hour < 8) return 'dawn'
  if (hour >= 8 && hour < 12) return 'morning'
  if (hour >= 12 && hour < 16) return 'afternoon'
  if (hour >= 16 && hour < 19) return 'sunset'
  return 'night'
}

type LightingFrame = {
  hour: number
  x: number
  y: number
  red: number
  green: number
  blue: number
  alpha: number
}

const lightingFrames: LightingFrame[] = [
  { hour: 0, x: 76, y: 0, red: 79, green: 100, blue: 135, alpha: .18 },
  { hour: 5, x: 8, y: 32, red: 203, green: 84, blue: 45, alpha: .25 },
  { hour: 8, x: 4, y: 6, red: 184, green: 196, blue: 212, alpha: .21 },
  { hour: 12, x: 92, y: 9, red: 204, green: 137, blue: 76, alpha: .23 },
  { hour: 16, x: 96, y: 38, red: 197, green: 60, blue: 42, alpha: .26 },
  { hour: 19, x: 76, y: 0, red: 79, green: 100, blue: 135, alpha: .18 },
  { hour: 24, x: 76, y: 0, red: 79, green: 100, blue: 135, alpha: .18 },
]

const interpolate = (from: number, to: number, amount: number) => from + (to - from) * amount

const getAmbientGradient = (date: Date): string => {
  const exactHour = date.getHours() + date.getMinutes() / 60
  const nextFrameIndex = lightingFrames.findIndex((frame) => frame.hour > exactHour)
  const nextFrame = lightingFrames[nextFrameIndex === -1 ? lightingFrames.length - 1 : nextFrameIndex]
  const previousFrame = lightingFrames[Math.max(0, (nextFrameIndex === -1 ? lightingFrames.length - 1 : nextFrameIndex) - 1)]
  const range = nextFrame.hour - previousFrame.hour || 1
  const amount = Math.min(1, Math.max(0, (exactHour - previousFrame.hour) / range))
  const x = Math.round(interpolate(previousFrame.x, nextFrame.x, amount))
  const y = Math.round(interpolate(previousFrame.y, nextFrame.y, amount))
  const red = Math.round(interpolate(previousFrame.red, nextFrame.red, amount))
  const green = Math.round(interpolate(previousFrame.green, nextFrame.green, amount))
  const blue = Math.round(interpolate(previousFrame.blue, nextFrame.blue, amount))
  const alpha = interpolate(previousFrame.alpha, nextFrame.alpha, amount).toFixed(3)

  return `radial-gradient(circle at ${x}% ${y}%, rgba(${red}, ${green}, ${blue}, ${alpha}), transparent 54%), linear-gradient(120deg, rgba(${red}, ${green}, ${blue}, .025), transparent 62%)`
}

export function useAmbientLighting(): AmbientLighting {
  const [now, setNow] = useState(() => new Date())
  const period = getPeriod(now.getHours())

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(new Date())
    }, 60_000)

    return () => window.clearInterval(interval)
  }, [])

  return {
    period,
    style: { '--ambient-light': getAmbientGradient(now) } as CSSProperties,
  }
}
