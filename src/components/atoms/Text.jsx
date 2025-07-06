import React from 'react'
import { cn } from '@/utils/cn'

const Text = React.forwardRef(({ 
  children, 
  className, 
  variant = 'body',
  size = 'md',
  weight = 'normal',
  color = 'default',
  ...props 
}, ref) => {
  const variants = {
    display: 'font-display',
    body: 'font-body',
    mono: 'font-mono',
  }

  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
  }

  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  }

  const colors = {
    default: 'text-gray-900',
    muted: 'text-gray-600',
    light: 'text-gray-500',
    primary: 'text-primary',
    accent: 'text-accent',
    white: 'text-white',
    gradient: 'bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent',
  }

  return (
    <span
      ref={ref}
      className={cn(
        variants[variant],
        sizes[size],
        weights[weight],
        colors[color],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
})

Text.displayName = 'Text'

export default Text