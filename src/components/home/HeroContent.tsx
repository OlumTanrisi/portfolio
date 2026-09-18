import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ArrowDownToLine, ArrowUpRight } from 'lucide-react'
import Button from '../ui/Button'
import SocialLink from '../ui/SocialLink'
import { socialLinks } from '../../data/socialLinks'

const passingCharacters = ['.', '0', '1', '/', '_', '>']

function PassingCharacter() {
  const reduceMotion = useReducedMotion()
  const [characterIndex, setCharacterIndex] = useState(0)

  useEffect(() => {
    if (reduceMotion) return

    const interval = window.setInterval(() => {
      setCharacterIndex((current) => (current + 1) % passingCharacters.length)
    }, 420)

    return () => window.clearInterval(interval)
  }, [reduceMotion])

  return <span className="character-pass" aria-hidden="true">{reduceMotion ? '.' : passingCharacters[characterIndex]}</span>
}

function HeroContent() {
  const basePath = import.meta.env.BASE_URL

  return (
    <div className="hero-content">
      <div className="hero-eyebrow"><span className="status-dot" />Olá, eu sou</div>
      <h1>João<PassingCharacter /></h1>
      <p className="hero-role">Full Stack Developer</p>
      <p className="hero-description">Transformo ideias em soluções digitais de alto impacto, combinando tecnologia, design e estratégia para criar experiências que realmente fazem a diferença.</p>
      <div className="hero-actions">
        <Button href={`${basePath}cv.pdf`} download variant="primary">Download CV <ArrowDownToLine size={16} /></Button>
        <Button href="#projects" variant="secondary">My Projects <ArrowUpRight size={16} /></Button>
      </div>
      <div className="social-links" aria-label="Social links">{socialLinks.map((link) => <SocialLink key={link.label} {...link} />)}</div>
    </div>
  )
}

export default HeroContent
