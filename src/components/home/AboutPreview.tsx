import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionLabel from '../ui/SectionLabel'
import { stacks } from '../../data/portfolio'

function AboutPreview() {
  return (
    <Section id="about" className="about-section">
      <Container className="about-grid">
        <div><SectionLabel>Sobre mim</SectionLabel><h2>Mais do que código,<br /><em>soluções reais.</em></h2></div>
        <div className="about-detail"><p>Oi sou João, Desenvolvedor Full Stack que esta em constante evolução, apaixonado por tecnologia e resolver problemas reais. Acredito que com o código podemos transformar ideias em realidade. Assim trazendo aquele toque de modernidade que faltava na sua empresa ou projeto.</p>
        <div className="experience-mark"><strong>+2</strong><span>anos de<br />experiência</span></div>
        <div className="projetos"><strong>+5</strong><span>projetos<br />entregues</span></div>
        <div className="foco"><strong>100%</strong><span>foco<br />em evolução</span></div>
      </div>
      </Container>
      <Container className="stack-carousel-wrap">
        <div className="stack-carousel-heading"><SectionLabel>Stack</SectionLabel><span>Tecnologias que uso para transformar ideias em produtos.</span></div>
        <div className="stack-carousel" aria-label="Tecnologias utilizadas">
          <div className="stack-track">
            {[...stacks, ...stacks].map(({ name, icon: Icon }, index) => <div className="stack-item" key={`${name}-${index}`} aria-hidden={index >= stacks.length}><Icon size={22} strokeWidth={1.35} /><span>{name}</span></div>)}
          </div>
        </div>
      </Container>
  </Section>
  )
}

export default AboutPreview
