// Browser compatibility utilities
export const isBrowser = typeof window !== 'undefined';

export const isFirefox = isBrowser && /Firefox/.test(navigator.userAgent);
export const isSafari = isBrowser && /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
export const isChrome = isBrowser && /Chrome/.test(navigator.userAgent) && !/Edge/.test(navigator.userAgent);
export const isEdge = isBrowser && /Edge/.test(navigator.userAgent);

// Cross-browser scroll position detection
export const getScrollPosition = () => {
  if (!isBrowser) return 0;
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};

// Cross-browser viewport dimensions
export const getViewportDimensions = () => {
  if (!isBrowser) return { width: 0, height: 0 };
  
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  };
};

// Add browser-specific classes to body
export const addBrowserClasses = () => {
  if (!isBrowser) return;
  
  const body = document.body;
  
  if (isFirefox) {
    body.classList.add('firefox');
  }
  if (isSafari) {
    body.classList.add('safari');
  }
  if (isChrome) {
    body.classList.add('chrome');
  }
  if (isEdge) {
    body.classList.add('edge');
  }
  
  // Add mobile detection
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) {
    body.classList.add('mobile');
  }
};

// Initialize browser compatibility
export const initBrowserCompat = () => {
  if (!isBrowser) return;
  
  addBrowserClasses();
  
  // Add passive event listeners for better performance
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function(type, listener, options) {
    if (type === 'scroll' || type === 'touchstart' || type === 'touchmove') {
      options = options || {};
      if (typeof options === 'boolean') {
        options = { capture: options };
      }
      options.passive = true;
    }
    return originalAddEventListener.call(this, type, listener, options);
  };
};
