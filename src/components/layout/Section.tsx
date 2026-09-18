import type { PropsWithChildren } from 'react'

function Section({ id, children, className = '' }: PropsWithChildren<{ id: string; className?: string }>) {
  return <section id={id} className={className}>{children}</section>
}

export default Section
