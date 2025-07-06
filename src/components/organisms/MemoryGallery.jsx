import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Text from '@/components/atoms/Text'
import PhotoCard from '@/components/molecules/PhotoCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { photoService } from '@/services/api/photoService'

const MemoryGallery = () => {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadPhotos = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await photoService.getAll()
      setPhotos(data)
    } catch (err) {
      setError('Failed to load our beautiful memories')
      console.error('Error loading photos:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPhotos()
  }, [])

  if (loading) {
    return (
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-4">
          <Loading message="Loading our precious memories..." />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-4">
          <Error message={error} onRetry={loadPhotos} />
        </div>
      </section>
    )
  }

  if (photos.length === 0) {
    return (
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-4">
          <Empty
            title="No memories captured yet"
            message="Every moment with you is worth remembering. Let's start creating beautiful memories together!"
            icon="Camera"
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
            Our Memory Gallery
          </Text>
          <Text variant="body" size="lg" color="muted">
            Every picture tells a story of our love
          </Text>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mt-4" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <PhotoCard
              key={photo.Id}
              photo={photo}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MemoryGallery