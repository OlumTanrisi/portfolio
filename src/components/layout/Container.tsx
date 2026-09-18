import type { PropsWithChildren } from 'react'

function Container({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return <div className={`container-shell ${className}`}>{children}</div>
}

export default Container
