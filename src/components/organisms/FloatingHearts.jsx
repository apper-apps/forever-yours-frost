import React, { useState, useEffect, useCallback } from 'react'
import HeartParticle from '@/components/molecules/HeartParticle'

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([])
  const [heartId, setHeartId] = useState(0)

  const addHeart = useCallback(() => {
    const newHeart = {
      id: heartId,
      createdAt: Date.now(),
    }
    setHearts(prev => [...prev, newHeart])
    setHeartId(prev => prev + 1)
  }, [heartId])

  const removeHeart = useCallback((id) => {
    setHearts(prev => prev.filter(heart => heart.id !== id))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.3) { // 30% chance every 2 seconds
        addHeart()
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [addHeart])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map(heart => (
        <HeartParticle
          key={heart.id}
          id={heart.id}
          onComplete={removeHeart}
        />
      ))}
    </div>
  )
}

export default FloatingHearts