import { useState, useEffect } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const useDeviceDetect = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
      
      const mobile = Boolean(
        userAgent.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      );
      
      const tablet = Boolean(
        userAgent.match(/iPad|Tablet|Nexus 7|PlayBook|Kindle|Nook|KFAPWI/i)
      );
      
      const width = window.innerWidth;
      
      setDeviceInfo({
        isMobile: mobile && width < 768,
        isTablet: (tablet || width >= 768) && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    checkDevice();
    
    // Atualiza o estado quando a janela for redimensionada
    window.addEventListener('resize', checkDevice);
    
    // Limpeza
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return deviceInfo;
};

export default useDeviceDetect; 