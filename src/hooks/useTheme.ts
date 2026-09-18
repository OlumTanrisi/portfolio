import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark'
  return window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark')

  return { theme, toggleTheme }
}
