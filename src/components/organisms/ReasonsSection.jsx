import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Text from '@/components/atoms/Text'
import ReasonCard from '@/components/molecules/ReasonCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { reasonService } from '@/services/api/reasonService'

const ReasonsSection = () => {
  const [reasons, setReasons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadReasons = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await reasonService.getAll()
      setReasons(data)
    } catch (err) {
      setError('Failed to load all the reasons I love you')
      console.error('Error loading reasons:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadReasons()
  }, [])

  if (loading) {
    return (
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-4">
          <Loading message="Loading all the reasons I love you..." />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-4">
          <Error message={error} onRetry={loadReasons} />
        </div>
      </section>
    )
  }

  if (reasons.length === 0) {
    return (
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-4">
          <Empty
            title="No reasons listed yet"
            message="There are infinite reasons to love someone special. Let's start counting them!"
            icon="Heart"
          />
        </div>
      </section>
    )
  }

  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Text variant="display" size="4xl" weight="bold" color="gradient" className="mb-4 glow-text">
            Why I Love You
          </Text>
          <Text variant="body" size="lg" color="muted">
            Hover over each card to reveal a reason why you're amazing
          </Text>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mt-4" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={reason.Id}
              reason={reason}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReasonsSection