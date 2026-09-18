import type { LucideIcon } from 'lucide-react'
import { Github, Linkedin, Mail } from 'lucide-react'

export const socialLinks: Array<{ label: string; href: string; icon: LucideIcon }> = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/', icon: Github },
  { label: 'Email', href: 'mailto:hello@joao.dev', icon: Mail },
]
