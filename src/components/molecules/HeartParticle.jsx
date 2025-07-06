import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const HeartParticle = ({ id, onComplete }) => {
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: window.innerHeight + 20,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(id)
    }, 6000)

    return () => clearTimeout(timer)
  }, [id, onComplete])

  return (
    <motion.div
      initial={{ 
        x: position.x, 
        y: position.y,
        opacity: 0,
        scale: 0.5,
        rotate: Math.random() * 360
      }}
      animate={{ 
        y: -100,
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1, 0.5],
        rotate: Math.random() * 360 + 180
      }}
      transition={{ 
        duration: 6,
        ease: "easeOut",
        times: [0, 0.1, 0.9, 1]
      }}
      className="fixed pointer-events-none z-10"
      style={{ left: 0, top: 0 }}
    >
      <ApperIcon 
        name="Heart" 
        className="w-4 h-4 text-primary/70"
        style={{ filter: 'drop-shadow(0 0 8px rgba(255, 182, 193, 0.4))' }}
      />
    </motion.div>
  )
}

export default HeartParticle