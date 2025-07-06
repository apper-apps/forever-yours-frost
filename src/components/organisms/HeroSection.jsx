import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Text from '@/components/atoms/Text'
import ScrollIndicator from '@/components/molecules/ScrollIndicator'
import { settingsService } from '@/services/api/settingsService'

const HeroSection = ({ onScrollToNext }) => {
  const [settings, setSettings] = useState(null)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const data = await settingsService.getSettings()
        setSettings(data)
        // Delay text appearance for dramatic effect
        setTimeout(() => setShowText(true), 1000)
      } catch (error) {
        console.error('Failed to load settings:', error)
      }
    }

    loadSettings()
  }, [])

  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <ApperIcon name="Heart" className="w-24 h-24 text-accent mx-auto mb-6 animate-pulse-heart" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          <Text 
            variant="display" 
            size="5xl" 
            weight="bold" 
            color="gradient"
            className="glow-text"
          >
            Happy Birthday
          </Text>
          
          {settings && showText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Text 
                variant="display" 
                size="4xl" 
                weight="semibold" 
                color="accent"
                className="mb-8 glow-text"
              >
                {settings.girlfriendName}! 💕
              </Text>
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Text variant="body" size="xl" color="muted" className="max-w-2xl mx-auto leading-relaxed">
              Today we celebrate you, our love, and all the beautiful moments that brought us together. 
              Scroll down to journey through our story...
            </Text>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <ScrollIndicator onClick={onScrollToNext} />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection