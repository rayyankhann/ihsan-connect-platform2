'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

const ScrollAnimation = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}: ScrollAnimationProps) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
        x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0,
        transition: {
          duration: 0.6,
          delay,
          ease: "easeOut",
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimation
