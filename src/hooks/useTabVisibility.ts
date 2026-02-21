import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if the browser tab is visible
 * Returns true when tab is visible, false when hidden
 * Use this to pause expensive animations when user switches tabs
 */
export function useTabVisibility(): boolean {
  const [isVisible, setIsVisible] = useState(!document.hidden);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return isVisible;
}
