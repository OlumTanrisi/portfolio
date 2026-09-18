import { useAmbientLighting } from './hooks/useAmbientLighting'
import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import AboutPreview from './components/home/AboutPreview'
import ProjectsSection from './components/home/ProjectsSection'
import ExperienceSection from './components/home/ExperienceSection'
import ContactSection from './components/home/ContactSection'
import { useTheme } from './hooks/useTheme'

function App() {
  const { period, style: lightingStyle } = useAmbientLighting()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="ambient-shell" data-lighting={period} style={lightingStyle}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AboutPreview />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className="sr-only">João — Full Stack Developer</footer>
    </div>
  )
}

export default App
