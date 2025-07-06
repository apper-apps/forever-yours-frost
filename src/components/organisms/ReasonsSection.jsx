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
    <section className="section-spacing bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Romantic background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-decoration"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              fontSize: `${Math.random() * 16 + 12}px`,
            }}
          >
            {i % 4 === 0 ? '💕' : i % 4 === 1 ? '✨' : i % 4 === 2 ? '🌸' : '💖'}
          </div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Text variant="cursive" size="4xl" weight="bold" color="gradient" className="mb-4 glow-text romantic-text-shadow">
            Why I Love You
          </Text>
          <Text variant="cursive" size="lg" color="muted" className="text-xl">
            Hover over each card to reveal a reason why you're amazing
          </Text>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 mx-auto rounded-full mt-4 romantic-glow" />
        </motion.div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.Id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ReasonCard
                reason={reason}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReasonsSection