import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/atoms/Card'
import Text from '@/components/atoms/Text'
import ApperIcon from '@/components/ApperIcon'
import { settingsService } from '@/services/api/settingsService'

const FinalMessage = () => {
  const [settings, setSettings] = useState(null)
  const [showMessage, setShowMessage] = useState(false)
  const [showHearts, setShowHearts] = useState(false)

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const data = await settingsService.getSettings()
        setSettings(data)
        // Delay message appearance for dramatic effect
        setTimeout(() => setShowMessage(true), 1000)
        setTimeout(() => setShowHearts(true), 2000)
      } catch (error) {
        console.error('Failed to load settings:', error)
      }
    }

    loadSettings()
  }, [])

return (
    <section className="section-spacing bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 relative overflow-hidden">
      {/* Romantic decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating flowers */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`flower-${i}`}
            className="absolute animate-flower-bloom"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              fontSize: `${Math.random() * 20 + 20}px`,
            }}
          >
            🌸
          </div>
        ))}
        
        {/* Floating gift boxes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`gift-${i}`}
            className="absolute animate-gift-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              fontSize: `${Math.random() * 15 + 15}px`,
            }}
          >
            🎁
          </div>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Card variant="elevated" className="relative overflow-hidden text-center py-16 romantic-border">
            {/* Animated background hearts */}
            {showHearts && (
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 0.3, 0],
                      scale: [0, 1, 0],
                      x: [0, (Math.random() - 0.5) * 100],
                      y: [0, (Math.random() - 0.5) * 100]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      repeatDelay: 2
                    }}
                    className="absolute"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  >
                    <ApperIcon name="Heart" className="w-8 h-8 text-primary/30" />
                  </motion.div>
                ))}
              </div>
            )}
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
>
                <Text variant="display" size="4xl" weight="bold" color="gradient" className="mb-4 glow-text font-cursive romantic-text-shadow">
                  Forever Yours
                </Text>
                <div className="w-40 h-1 bg-gradient-to-r from-gold-400 via-rose-400 to-purple-400 mx-auto rounded-full romantic-glow" />
              </motion.div>
              
              {settings && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showMessage ? 1 : 0 }}
                  transition={{ duration: 1.5 }}
                  className="max-w-3xl mx-auto mb-8"
                >
                  <Text variant="body" size="lg" color="muted" className="leading-relaxed">
                    {settings.finalMessage}
                  </Text>
                </motion.div>
              )}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex justify-center space-x-4"
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 360, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  >
                    <ApperIcon name="Heart" className="w-10 h-10 text-accent" />
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-8"
>
                <Text variant="display" size="2xl" weight="semibold" color="gradient" className="font-cursive romantic-text-shadow">
                  Happy Birthday, My Love! 🎉✨💕
                </Text>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalMessage