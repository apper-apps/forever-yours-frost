import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

const Button = React.forwardRef(({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  ...props 
}, ref) => {
const variants = {
    primary: 'bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white shadow-lg hover:shadow-xl romantic-glow',
    secondary: 'bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg hover:shadow-xl romantic-glow',
    outline: 'border-2 border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white romantic-glow',
    ghost: 'text-rose-400 hover:bg-rose-400/10 font-cursive',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
className={cn(
        'rounded-full font-medium transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-rose-400/50 disabled:opacity-50 disabled:cursor-not-allowed hover:animate-gentle-sway',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  )
})

Button.displayName = 'Button'

export default Button