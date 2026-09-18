import { ArrowUpRight } from 'lucide-react'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionLabel from '../ui/SectionLabel'
import { experience } from '../../data/portfolio'

function ExperienceSection() {
  return (
    <Section id="experience" className="experience-section">
      <Container>
        <div className="section-heading-row experience-heading">
          <div><SectionLabel>Experiência</SectionLabel><h2>Construindo com<br /><em>consistência.</em></h2></div>
          <p className="section-intro">Mais do que acumular ferramentas, minha jornada é sobre evoluir a forma de pensar e entregar soluções.</p>
        </div>
        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-item" key={item.title}>
              <span className="experience-period">{item.period}</span>
              <div className="experience-item-content"><span className="experience-index">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div>
              <ArrowUpRight className="experience-arrow" size={19} strokeWidth={1.4} />
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default ExperienceSection
