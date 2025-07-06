import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

const Card = React.forwardRef(({ 
  children, 
  className, 
  variant = 'default',
  hover = true,
  ...props 
}, ref) => {
  const variants = {
    default: 'bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg',
    elevated: 'bg-white/90 backdrop-blur-sm border border-white/30 shadow-xl',
    gradient: 'bg-gradient-to-br from-surface to-white/80 backdrop-blur-sm border border-white/20 shadow-lg',
  }

  const CardComponent = hover ? motion.div : 'div'
  const motionProps = hover ? {
    whileHover: { scale: 1.02, y: -2 },
    transition: { duration: 0.2 }
  } : {}

  return (
    <CardComponent
      ref={ref}
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        variants[variant],
        hover && 'hover:shadow-2xl',
        className
      )}
      {...motionProps}
      {...props}
    >
      {children}
    </CardComponent>
  )
})

Card.displayName = 'Card'

export default Card