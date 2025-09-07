'use client'

export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  const userAgent = window.navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isSmallScreen = window.innerWidth <= 768;
  
  return isMobile || (isTouchDevice && isSmallScreen);
}

export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';
  
  const width = window.innerWidth;
  const isMobile = isMobileDevice();
  
  if (isMobile && width <= 768) return 'mobile';
  if (width <= 1024) return 'tablet';
  return 'desktop';
}

export function isIPhone(): boolean {
  if (typeof window === 'undefined') return false;
  return /iPhone/i.test(window.navigator.userAgent);
}

export function isAndroid(): boolean {
  if (typeof window === 'undefined') return false;
  return /Android/i.test(window.navigator.userAgent);
}

export function getIPhoneModel(): string | null {
  if (typeof window === 'undefined' || !isIPhone()) return null;
  
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  // iPhone model detection based on screen dimensions
  if (width === 393 && height === 852) return 'iPhone 16'; // iPhone 16
  if (width === 430 && height === 932) return 'iPhone 16 Pro Max'; // iPhone 16 Pro Max
  if (width === 375 && height === 812) return 'iPhone 12/13/14'; // iPhone 12/13/14
  if (width === 414 && height === 896) return 'iPhone 12/13/14 Pro Max'; // iPhone 12/13/14 Pro Max
  if (width === 320 && height === 568) return 'iPhone SE'; // iPhone SE
  
  return 'iPhone';
}
