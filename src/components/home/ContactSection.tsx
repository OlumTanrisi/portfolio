import { ArrowUpRight, Mail } from 'lucide-react'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import { contactEmail, contactEmailLabel } from '../../data/socialLinks'

function ContactSection() {
  return (
    <Section id="contact" className="contact-section">
      <Container>
        <SectionLabel>Contato</SectionLabel>
        <div className="contact-heading-row"><h2>Vamos construir algo<br /><em>relevante juntos.</em></h2><p>Tem uma ideia, um desafio ou simplesmente quer trocar uma ideia sobre tecnologia? Minha caixa de entrada está aberta.</p></div>
<<<<<<< HEAD
        <div className="contact-actions"><Button href="mailto:subjvieira@gmail.com" variant="primary">Fale comigo <ArrowUpRight size={16} /></Button><a className="contact-email" href="mailto:subjvieira@gmail.com"><Mail size={17} strokeWidth={1.4} />subjvieira@gmail.com</a></div>
=======
        <div className="contact-actions"><Button href={contactEmail} variant="primary">Fale comigo <ArrowUpRight size={16} /></Button><a className="contact-email" href={contactEmail}><Mail size={17} strokeWidth={1.4} />{contactEmailLabel}</a></div>
>>>>>>> 005f7db (feat: ajust socialLinks)
        <div className="contact-footer"><span>João<span className="contact-dot">_</span></span><span>© 2026 — Feito por João Victor C. da Silva.</span></div>
      </Container>
    </Section>
  )
}

export default ContactSection
