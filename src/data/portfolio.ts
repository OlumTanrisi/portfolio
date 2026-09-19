import type { LucideIcon } from 'lucide-react'
import { Atom, Braces, Code2, Database, FileCode2, Palette, Server, Triangle, Wind } from 'lucide-react'

export const stacks: Array<{ name: string; icon: LucideIcon }> = [
  { name: 'HTML5', icon: Code2 },
  { name: 'CSS3', icon: Palette },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'TypeScript', icon: Braces },
  { name: 'JavaScript', icon: FileCode2 },
  { name: 'Next.js', icon: Triangle },
  { name: 'Node.js', icon: Server },
  { name: 'PostgreSQL', icon: Database },
  { name: 'React', icon: Atom },
]

export const projects = [
  {
    number: '01',
    title: 'Processos de Rescisão',
    description: 'Projeto desenvolvido para ter o controle de processos de cada atendente, onde cada processo tem suas checklist, prazos e históricos de atendimento. Alem de facilitar o acompanhamento do gestor onde ele tem acesso a todas as demandas dos atendentes, podendo também realizar a cobrança caso seja necessario.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Google Apps Script','Google Sheets'],
  },
  {
    number: '02',
    title: 'Visionary',
    description: 'Projeto pessoal criado com intuito de servir como um portal de cliente de uma otica para empresas parceiras, onde os funcionarios teriam acesso aos descontos, agendamento de exames com parceiros e acesso antecipado as coleções dos produtos.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Node.js', 'TypeScript'],
  },
  {
    number: '03',
    title: 'Em desenvolvimento',
    description: 'Em breve...',
    tags: [],
  },
]

export const experience = [
  {
    period: '05/2024 - Presente',
    title: 'Auxiliar T.I Imobiliária Santamérica',
    description: 'Responsavel por auxiliar usuarios com problemas de hardwere e softwere. Alem de gerenciar rede, servidores e sistemas que são desenvolvido internamente.',
  },
  {
    period: '01/2023 - Presente ',
    title: 'Freelancer',
    description: 'Atuando na parte de solução de problemas de computadores desktop e notebooks, montagem e manutenção de computadores, formatação e instalação de sistemas. Com pensamento de expanção para atuar na area de desenvolvimento de software front-end', 
  },
  {
    period: '10/2022 - 10/2023 ',
    title: 'Estagiario',
    description: 'Atuei como desenvolvedor low code usando scriptcase, alem de PHP e Power BI, onde desenvolvia sistemas para dashboards de apresentação empresarial.', 
  },
]
