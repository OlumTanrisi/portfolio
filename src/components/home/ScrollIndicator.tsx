import { Mouse } from 'lucide-react'

function ScrollIndicator() {
  return <a className="scroll-indicator" href="#about" aria-label="Scroll to About section"><Mouse size={18} strokeWidth={1.25} /><span>Scroll to explore</span></a>
}

export default ScrollIndicator
