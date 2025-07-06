import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const ScrollIndicator = ({ onClick }) => {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col items-center space-y-2">
        <span className="text-sm font-body text-gray-600">Scroll to explore</span>
        <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
          <ApperIcon name="ChevronDown" className="w-5 h-5 text-accent" />
        </div>
      </div>
    </motion.div>
  )
}

export default ScrollIndicator