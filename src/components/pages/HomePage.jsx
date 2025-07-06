import React, { useRef } from 'react'
import FloatingHearts from '@/components/organisms/FloatingHearts'
import HeroSection from '@/components/organisms/HeroSection'
import PersonalMessage from '@/components/organisms/PersonalMessage'
import MemoryGallery from '@/components/organisms/MemoryGallery'
import RelationshipTimeline from '@/components/organisms/RelationshipTimeline'
import ReasonsSection from '@/components/organisms/ReasonsSection'
import FinalMessage from '@/components/organisms/FinalMessage'

const HomePage = () => {
  const personalMessageRef = useRef(null)

  const scrollToPersonalMessage = () => {
    personalMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <FloatingHearts />
      
      <HeroSection onScrollToNext={scrollToPersonalMessage} />
      
      <div ref={personalMessageRef}>
        <PersonalMessage />
      </div>
      
      <MemoryGallery />
      
      <RelationshipTimeline />
      
      <ReasonsSection />
      
      <FinalMessage />
    </div>
  )
}

export default HomePage