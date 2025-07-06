import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Text from '@/components/atoms/Text'

const ReasonCard = ({ reason, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flip-card h-48 surprise-reveal"
      onViewportEnter={() => {
        setTimeout(() => {
          document.querySelectorAll('.surprise-reveal')[index]?.classList.add('revealed')
        }, index * 100)
      }}
    >
      <div className="flip-card-inner h-full">
        {/* Front of card */}
        <div className="flip-card-front">
<div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ApperIcon name="Heart" className="w-12 h-12 text-rose-500 mb-4 animate-pulse-heart" />
            </motion.div>
            <Text variant="cursive" size="lg" weight="semibold" color="romantic" className="romantic-text-shadow">
              Reason #{index + 1}
            </Text>
            <Text variant="cursive" size="sm" color="muted" className="mt-2">
              Hover to reveal
            </Text>
          </div>
        </div>
        
        {/* Back of card */}
<div className="flip-card-back">
          <div className="text-center h-full flex flex-col justify-center">
            <Text variant="cursive" size="md" weight="medium" color="white" className="leading-relaxed text-lg">
              {reason.text}
            </Text>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ReasonCard