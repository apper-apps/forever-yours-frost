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
    <section className="section-spacing bg-gradient-to-br from-rose-50 via-pink-50 to-lavender-50 relative overflow-hidden">
      {/* Sparkle background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="sparkle-effect"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 10 + 10}px`,
            }}
          >
            ✨
          </div>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Text variant="display" size="4xl" weight="bold" color="gradient" className="mb-4 glow-text font-cursive romantic-text-shadow">
            Our Love Story Timeline
          </Text>
          <Text variant="body" size="lg" color="muted" className="font-cursive text-xl">
            Every milestone that brought us closer together
          </Text>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 mx-auto rounded-full mt-4 romantic-glow" />
        </motion.div>
<div className="relative timeline-romantic">
          {/* Decorative floating elements */}
          <div className="floating-decoration" style={{ left: '10%', top: '10%' }}>💕</div>
          <div className="floating-decoration" style={{ right: '10%', top: '20%', animationDelay: '2s' }}>💖</div>
          <div className="floating-decoration" style={{ left: '15%', bottom: '15%', animationDelay: '4s' }}>💗</div>
          <div className="floating-decoration" style={{ right: '15%', bottom: '25%', animationDelay: '6s' }}>💝</div>
          
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