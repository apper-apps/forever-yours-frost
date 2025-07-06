import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";
import Text from "@/components/atoms/Text";
import { settingsService } from "@/services/api/settingsService";

const PersonalMessage = () => {
  const [settings, setSettings] = useState(null)
  const [showMessage, setShowMessage] = useState(false)
  const [isLetterOpened, setIsLetterOpened] = useState(false)
  const [showLetterContent, setShowLetterContent] = useState(false)
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
loadSettings()
  }, [])

  const handleOpenLetter = () => {
    setIsLetterOpened(true)
    setTimeout(() => setShowLetterContent(true), 800)
  }

  return (
    <section
    className="section-spacing bg-gradient-to-br from-rose-50 via-pink-50 to-lavender-50 relative overflow-hidden">
    {/* Romantic background elements */}
    <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => <div
            key={i}
            className="absolute animate-gentle-sway"
            style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                fontSize: `${Math.random() * 16 + 16}px`
            }}>
            {i % 3 === 0 ? "💕" : i % 3 === 1 ? "✨" : "🌸"}
        </div>)}
    </div>
    <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
            initial={{
                opacity: 0,
                y: 50
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: true
            }}
            transition={{
                duration: 0.8
            }}>
            <Card
                variant="elevated"
                className={`relative overflow-hidden letter-envelope ${isLetterOpened ? "opened" : ""}`}>
                {!isLetterOpened && <div
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-50 to-yellow-50 z-20">
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.8
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        className="text-center">
                        <div className="text-6xl mb-4">💌</div>
                        <Text
                            variant="display"
                            size="2xl"
                            weight="bold"
                            color="gradient"
                            className="mb-4 font-cursive">A Letter for You
                                              </Text>
                        <motion.button
                            whileHover={{
                                scale: 1.1
                            }}
                            whileTap={{
                                scale: 0.9
                            }}
                            onClick={handleOpenLetter}
                            className="px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full font-cursive text-lg hover:from-rose-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl">Open Letter
                                              </motion.button>
                    </motion.div>
                </div>}
                {/* Letter content */}
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: showLetterContent ? 1 : 0
                    }}
                    transition={{
                        duration: 0.8
                    }}
                    className="text-center py-8 relative z-10">
                    {/* Decorative hearts */}
                    <div className="absolute top-4 left-4">
                        <ApperIcon name="Heart" className="w-6 h-6 text-rose-400/50 animate-pulse-heart" />
                    </div>
                    <div className="absolute top-4 right-4">
                        <ApperIcon name="Heart" className="w-6 h-6 text-pink-400/50 animate-pulse-heart" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                        <ApperIcon name="Heart" className="w-6 h-6 text-purple-400/50 animate-pulse-heart" />
                    </div>
                    <div className="absolute bottom-4 right-4">
                        <ApperIcon name="Heart" className="w-6 h-6 text-rose-400/50 animate-pulse-heart" />
                    </div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.8
                        }}
                        animate={{
                            opacity: showLetterContent ? 1 : 0,
                            scale: showLetterContent ? 1 : 0.8
                        }}
                        transition={{
                            duration: 0.6
                        }}
                        className="mb-8">
                        <Text
                            variant="display"
                            size="3xl"
                            weight="bold"
                            color="gradient"
                            className="mb-4 font-cursive romantic-text-shadow">A Message From My Heart
                                            </Text>
                        <div
                            className="w-32 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 mx-auto rounded-full romantic-glow" />
                        {settings && showLetterContent && <motion.div
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: showMessage ? 1 : 0
                            }}
                            transition={{
                                duration: 1
                            }}
                            className="max-w-3xl mx-auto">
                            <Text
                                variant="body"
                                size="lg"
                                color="muted"
                                className="leading-relaxed font-cursive text-xl">
                                {settings.personalMessage}
                            </Text>
                        </motion.div>}
                        {showLetterContent && <motion.div
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5
                            }}
                            className="mt-8 flex justify-center">
                            <div className="flex space-x-2">
                                {[...Array(5)].map((_, i) => <motion.div
                                    key={i}
                                    animate={{
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: i * 0.2
                                    }}>
                                    <ApperIcon name="Heart" className="w-5 h-5 text-rose-500" />
                                </motion.div>)}
                            </div>
                        </motion.div>}
                    </motion.div>
                </motion.div></Card>
        </motion.div>
    </div>
</section>
  )
}

export default PersonalMessage