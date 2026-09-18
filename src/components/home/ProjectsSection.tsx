import { ArrowUpRight } from 'lucide-react'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionLabel from '../ui/SectionLabel'
import { projects } from '../../data/portfolio'

function ProjectsSection() {
  return (
    <Section id="projects" className="projects-section">
      <Container>
        <div className="section-heading-row">
          <div><SectionLabel>Projetos selecionados</SectionLabel><h2>Ideias que viraram<br /><em>experiências.</em></h2></div>
          <p className="section-intro">Uma seleção de possibilidades construídas com tecnologia, intenção e atenção a cada detalhe.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top"><span>{project.number}</span><ArrowUpRight size={19} strokeWidth={1.4} /></div>
              <div className="project-card-body"><h3>{project.title}</h3><p>{project.description}</p></div>
              <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default ProjectsSection
