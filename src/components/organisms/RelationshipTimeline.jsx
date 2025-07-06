import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Text from '@/components/atoms/Text'
import TimelineItem from '@/components/molecules/TimelineItem'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { milestoneService } from '@/services/api/milestoneService'

const RelationshipTimeline = () => {
  const [milestones, setMilestones] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadMilestones = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await milestoneService.getAll()
      setMilestones(data)
    } catch (err) {
      setError('Failed to load our timeline of love')
      console.error('Error loading milestones:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadMilestones()
  }, [])

  if (loading) {
    return (
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-4">
          <Loading message="Loading our love story timeline..." />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-4">
          <Error message={error} onRetry={loadMilestones} />
        </div>
      </section>
    )
  }

  if (milestones.length === 0) {
    return (
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-4">
          <Empty
            title="No milestones yet"
            message="Every relationship has its special moments. Let's start documenting our journey together!"
            icon="Calendar"
          />
        </div>
      </section>
    )
  }

  return (
    <section className="section-spacing bg-gradient-to-br from-surface/50 to-primary/10">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Text variant="display" size="4xl" weight="bold" color="gradient" className="mb-4 glow-text">
            Our Love Story Timeline
          </Text>
          <Text variant="body" size="lg" color="muted">
            Every milestone that brought us closer together
          </Text>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mt-4" />
        </motion.div>
        
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-50" />
          
          {milestones.map((milestone, index) => (
            <TimelineItem
              key={milestone.Id}
              milestone={milestone}
              index={index}
              isLast={index === milestones.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelationshipTimeline