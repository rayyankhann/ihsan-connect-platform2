'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Target, Users } from 'lucide-react'

interface FundraisingProgressProps {
  currentAmount: number
  goalAmount: number
  className?: string
}

const FundraisingProgress = ({ 
  currentAmount, 
  goalAmount, 
  className = '' 
}: FundraisingProgressProps) => {
  const [animatedProgress, setAnimatedProgress] = useState(0)
  const progressPercentage = Math.min((currentAmount / goalAmount) * 100, 100)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progressPercentage)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [progressPercentage])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 ${className}`}
    >
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-3">
          <Target className="w-6 h-6 text-white mr-2" />
          <h3 className="text-2xl font-bold text-white">Annual Fundraising Goal</h3>
        </div>
        <p className="text-white/80 text-sm">Help us reach our {formatCurrency(goalAmount)} goal for 2025</p>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between text-white text-sm mb-3">
          <span className="flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            Current Progress
          </span>
          <span className="font-semibold">{formatCurrency(currentAmount)} / {formatCurrency(goalAmount)}</span>
        </div>
        
        <div className="w-full bg-white/20 rounded-full h-5 overflow-hidden relative">
          <motion.div 
            className="h-full bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: `${animatedProgress}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          </motion.div>
          
          {/* Progress indicator */}
          <motion.div
            className="absolute top-0 right-0 w-2 h-5 bg-white rounded-full shadow-lg"
            initial={{ x: 0 }}
            animate={{ x: `${animatedProgress}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transform: 'translateX(50%)' }}
          />
        </div>
      </div>
      
      <div className="text-center">
        <motion.p 
          className="text-white/90 text-lg mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="font-bold text-green-400 text-xl">{Math.round(progressPercentage)}%</span> of our goal reached!
        </motion.p>
        
        <div className="flex items-center justify-center text-white/70 text-xs mb-3">
          <Users className="w-3 h-3 mr-1" />
          <span>Every donation supports students and community programs</span>
        </div>
        
        {progressPercentage >= 100 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="bg-green-500/20 border border-green-400/30 rounded-lg p-2"
          >
            <p className="text-green-400 text-sm font-semibold">🎉 Goal Achieved! Thank you for your support!</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default FundraisingProgress
