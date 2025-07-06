import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/atoms/Card'
import Text from '@/components/atoms/Text'
import ApperIcon from '@/components/ApperIcon'
import { settingsService } from '@/services/api/settingsService'

const PersonalMessage = () => {
  const [settings, setSettings] = useState(null)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const data = await settingsService.getSettings()
        setSettings(data)
        // Delay message appearance for typewriter effect
        setTimeout(() => setShowMessage(true), 500)
      } catch (error) {
        console.error('Failed to load settings:', error)
      }
    }

    loadSettings()
  }, [])

  return (
    <section className="section-spacing">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card variant="elevated" className="relative overflow-hidden">
            {/* Decorative hearts */}
            <div className="absolute top-4 left-4">
              <ApperIcon name="Heart" className="w-6 h-6 text-primary/30" />
            </div>
            <div className="absolute top-4 right-4">
              <ApperIcon name="Heart" className="w-6 h-6 text-primary/30" />
            </div>
            <div className="absolute bottom-4 left-4">
              <ApperIcon name="Heart" className="w-6 h-6 text-primary/30" />
            </div>
            <div className="absolute bottom-4 right-4">
              <ApperIcon name="Heart" className="w-6 h-6 text-primary/30" />
            </div>
            
            <div className="text-center py-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Text variant="display" size="3xl" weight="bold" color="gradient" className="mb-4">
                  A Message From My Heart
                </Text>
                <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />
              </motion.div>
              
              {settings && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showMessage ? 1 : 0 }}
                  transition={{ duration: 1 }}
                  className="max-w-3xl mx-auto"
                >
                  <Text variant="body" size="lg" color="muted" className="leading-relaxed">
                    {settings.personalMessage}
                  </Text>
                </motion.div>
              )}
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-8 flex justify-center"
              >
                <div className="flex space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    >
                      <ApperIcon name="Heart" className="w-5 h-5 text-accent" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default PersonalMessage