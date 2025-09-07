'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Navigation } from "@/components/Navigation"
import { useEffect } from "react"
import { initBrowserCompat } from "@/lib/browser-compat"

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize browser compatibility on client side
    initBrowserCompat()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-background browser-compat firefox-fix">
          <Navigation />
          {children}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  )
}
