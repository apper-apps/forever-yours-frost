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
      className="flip-card h-48"
    >
      <div className="flip-card-inner h-full">
        {/* Front of card */}
        <div className="flip-card-front">
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ApperIcon name="Heart" className="w-12 h-12 text-accent mb-4" />
            </motion.div>
            <Text variant="display" size="lg" weight="semibold" color="default">
              Reason #{index + 1}
            </Text>
            <Text variant="body" size="sm" color="muted" className="mt-2">
              Hover to reveal
            </Text>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="flip-card-back">
          <div className="text-center h-full flex flex-col justify-center">
            <Text variant="body" size="md" weight="medium" color="white" className="leading-relaxed">
              {reason.text}
            </Text>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ReasonCard