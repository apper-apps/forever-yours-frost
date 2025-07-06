import React from 'react'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import Card from '@/components/atoms/Card'
import Text from '@/components/atoms/Text'

const TimelineItem = ({ milestone, index, isLast }) => {
  const isEven = index % 2 === 0

  return (
    <div className="relative">
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg z-10"
      />
      
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-4 w-0.5 h-24 bg-gradient-to-b from-primary to-secondary" />
      )}
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2 }}
        className={`flex ${isEven ? 'justify-start' : 'justify-end'} mb-12`}
      >
        <div className={`w-full max-w-md ${isEven ? 'mr-8' : 'ml-8'}`}>
          <Card variant="elevated" className="relative">
            {/* Arrow */}
            <div className={`absolute top-4 ${isEven ? 'right-0 translate-x-2' : 'left-0 -translate-x-2'} w-0 h-0 border-t-8 border-b-8 border-t-transparent border-b-transparent ${isEven ? 'border-l-8 border-l-white' : 'border-r-8 border-r-white'}`} />
            
            <div className="space-y-3">
              <Text variant="body" size="sm" weight="medium" color="accent">
                {format(new Date(milestone.date), 'MMMM d, yyyy')}
              </Text>
              
              <Text variant="display" size="xl" weight="semibold" color="default">
                {milestone.title}
              </Text>
              
              <Text variant="body" size="md" color="muted">
                {milestone.description}
              </Text>
              
              {milestone.photoUrl && (
                <div className="mt-4 rounded-lg overflow-hidden">
                  <img
                    src={milestone.photoUrl}
                    alt={milestone.title}
                    className="w-full h-32 object-cover"
                  />
                </div>
              )}
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}

export default TimelineItem