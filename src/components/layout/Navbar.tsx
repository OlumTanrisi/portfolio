import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navigation } from '../../data/navigation'
import Container from './Container'
import type { Theme } from '../../hooks/useTheme'

const getLocalTime = () => new Intl.DateTimeFormat('pt-BR', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
}).format(new Date())

function Navbar({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [localTime, setLocalTime] = useState(getLocalTime)
  const logoPath = `${import.meta.env.BASE_URL}images/joao-victor-logo${theme === 'light' ? '-light' : ''}.png`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => setLocalTime(getLocalTime()), 1_000)
    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleSection) setActiveSection(visibleSection.target.id)
      },
      { rootMargin: '-30% 0px -58% 0px', threshold: [0, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <Container className="navbar-inner">
        <a className="wordmark" href="#home" aria-label="João home" onClick={closeMenu}>
          <img className="brand-logo" src={logoPath} alt="João Victor — Full Stack Developer" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => {
            const sectionId = item.href.slice(1)
            const isActive = activeSection === sectionId
            return <a key={item.href} href={item.href} className={isActive ? 'nav-link nav-link--active' : 'nav-link'} aria-current={isActive ? 'page' : undefined} onClick={() => setActiveSection(sectionId)}>{item.label}</a>
          })}
        </nav>
        <div className="navbar-tools">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'} title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}>
            {theme === 'dark' ? <Sun size={15} strokeWidth={1.6} /> : <Moon size={15} strokeWidth={1.6} />}
          </button>
          <div className="local-clock" aria-label={`Horário local: ${localTime}`}>
            <span className="local-clock-label">Horário -</span>
            <time>{localTime}</time>
          </div>
          <a className="nav-cta" href="mailto:hello@joao.dev">Fale comigo</a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={21} strokeWidth={1.7} /> : <Menu size={21} strokeWidth={1.7} />}
          </button>
        </div>
      </Container>
      <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'mobile-nav--open' : ''}`} aria-label="Mobile navigation">
        <Container>
          {navigation.map((item) => <a key={item.href} href={item.href} className={activeSection === item.href.slice(1) ? 'mobile-nav-link--active' : undefined} onClick={() => { setActiveSection(item.href.slice(1)); closeMenu() }}>{item.label}</a>)}
          <a href="mailto:hello@joao.dev" onClick={closeMenu}>Fale Comigo <span>↗</span></a>
        </Container>
      </nav>
    </header>
  )
}

export default Navbar
