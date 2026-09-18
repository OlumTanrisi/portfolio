import type { LucideIcon } from 'lucide-react'

function SocialLink({ label, href, icon: Icon }: { label: string; href: string; icon: LucideIcon }) {
  const external = href.startsWith('http')
  return <a className="social-link" href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} aria-label={label}><Icon size={17} strokeWidth={1.55} /><span>{label}</span></a>
}

export default SocialLink
