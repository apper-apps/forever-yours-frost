import React, { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import Card from "@/components/atoms/Card";
import Text from "@/components/atoms/Text";

const PhotoCard = ({ photo, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
  }

return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Card className="overflow-hidden p-0 hover:shadow-2xl transition-all duration-300 romantic-border">
        <div className="relative aspect-square overflow-hidden">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
          )}
          
          {imageError ? (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <Text variant="body" size="sm" color="muted">
                Image unavailable
              </Text>
            </div>
) : (
            <>
              <img
                src={photo.url}
                alt={photo.caption}
                onLoad={handleImageLoad}
                onError={handleImageError}
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {/* Sparkle overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="sparkle-effect"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.2}s`,
                    fontSize: '16px',
                  }}
                >
                  ✨
                </div>
              ))}
</div>
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Text variant="cursive" size="sm" weight="medium" color="white" className="mb-1">
              {photo.caption}
            </Text>
            <Text variant="cursive" size="xs" color="white" className="opacity-80">
              {format(new Date(photo.date), 'MMMM d, yyyy')}
            </Text>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default PhotoCard