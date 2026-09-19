import type { LucideIcon } from 'lucide-react'
import { Github, Linkedin, Mail } from 'lucide-react'

export const socialLinks: Array<{ label: string; href: string; icon: LucideIcon }> = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joaovictor4233101ba/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/OlumTanrisi', icon: Github },
  { label: 'Email', href: 'mailto:subjvieira@gmail.com', icon: Mail },
]

const emailLink = socialLinks.find((link) => link.label === 'Email')

export const contactEmail = emailLink?.href ?? 'mailto:'
export const contactEmailLabel = contactEmail.replace(/^mailto:/, '')
