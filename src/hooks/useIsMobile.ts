import { useState, useEffect } from 'react';
import { isMobile } from '@/utils/isMobile';

export const useIsMobile = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const updateMobileStatus = () => {
      setIsMobileView(isMobile());
    };

    updateMobileStatus();
    window.addEventListener('resize', updateMobileStatus);

    return () => window.removeEventListener('resize', updateMobileStatus);
  }, []);

  return isMobileView;
};
