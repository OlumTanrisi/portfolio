import { motion, useReducedMotion } from 'framer-motion'
import Container from '../layout/Container'
import Section from '../layout/Section'
import HeroContent from './HeroContent'
import HeroPortrait from './HeroPortrait'
import ScrollIndicator from './ScrollIndicator'

function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <Section id="home" className="hero-section">
      <Container className="hero-grid">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: 'easeOut' }}><HeroContent /></motion.div>
        <motion.div className="portrait-column" initial={reduceMotion ? false : { opacity: 0 }} animate={reduceMotion ? undefined : { opacity: 1 }} transition={{ duration: 0.9, delay: 0.12, ease: 'easeOut' }}><HeroPortrait /></motion.div>
      </Container>
      <ScrollIndicator />
    </Section>
  )
}

export default Hero
