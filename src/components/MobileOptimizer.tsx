'use client'

import { useEffect, useState } from 'react'
import { isMobileDevice, getDeviceType, isIPhone, getIPhoneModel } from '@/lib/device-detection'

export default function MobileOptimizer() {
  const [isMobile, setIsMobile] = useState(false)
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')
  const [isIPhoneDevice, setIsIPhoneDevice] = useState(false)
  const [iPhoneModel, setIPhoneModel] = useState<string | null>(null)

  useEffect(() => {
    const mobile = isMobileDevice()
    const type = getDeviceType()
    const iPhone = isIPhone()
    const model = getIPhoneModel()

    setIsMobile(mobile)
    setDeviceType(type)
    setIsIPhoneDevice(iPhone)
    setIPhoneModel(model)

    // Add device-specific classes to body
    document.body.classList.add(`device-${type}`)
    if (mobile) {
      document.body.classList.add('mobile-device')
    }
    if (iPhone) {
      document.body.classList.add('iphone-device')
      if (model) {
        document.body.classList.add(`iphone-${model.toLowerCase().replace(/\s+/g, '-')}`)
      }
    }

    // Load mobile CSS if mobile device
    if (mobile) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = '/mobile.css'
      link.id = 'mobile-styles'
      document.head.appendChild(link)
    }

    return () => {
      // Cleanup
      document.body.classList.remove(`device-${type}`, 'mobile-device', 'iphone-device')
      if (model) {
        document.body.classList.remove(`iphone-${model.toLowerCase().replace(/\s+/g, '-')}`)
      }
      
      const mobileStyles = document.getElementById('mobile-styles')
      if (mobileStyles) {
        mobileStyles.remove()
      }
    }
  }, [])

  return null
}
