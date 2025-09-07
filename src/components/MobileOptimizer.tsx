'use client'

import { useEffect } from 'react'

export default function MobileOptimizer() {
  useEffect(() => {
    // Simplified mobile detection for better performance
    const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    if (isMobile) {
      // Add mobile class to body
      document.body.classList.add('mobile-device')
      
      // Load mobile CSS only if needed
      if (!document.getElementById('mobile-styles')) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = '/mobile.css'
        link.id = 'mobile-styles'
        document.head.appendChild(link)
      }
    }

    return () => {
      document.body.classList.remove('mobile-device')
    }
  }, [])

  return null
}
