import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'primary' | 'secondary' }>

function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  return <a className={`button button--${variant} ${className}`} {...props}>{children}</a>
}

export default Button
