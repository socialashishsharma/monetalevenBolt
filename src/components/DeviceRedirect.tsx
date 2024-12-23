import React, { useEffect } from 'react';

export function DeviceRedirect() {
  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /iphone|ipad|ipod|android/.test(userAgent);
      
      // Check if it's a mobile device
      if (isMobile) {
        // Check if the app is installed (using custom URL scheme)
        const openApp = () => {
          window.location.href = 'monetaleven://app';
        };

        const openStore = () => {
          if (/iphone|ipad|ipod/.test(userAgent)) {
            window.location.href = 'https://apps.apple.com/app/monetaleven';
          } else {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.monetaleven';
          }
        };

        // Try to open the app, if not installed redirect to store
        setTimeout(openStore, 2500);
        openApp();
      } else {
        // For desktop users, check if they're not already on the web app
        if (!window.location.hostname.includes('app.monetaleven.com')) {
          window.location.href = 'https://app.monetaleven.com';
        }
      }
    };

    // Only redirect if explicitly requested (e.g., through a button click)
    // checkDevice();
  }, []);

  return null;
}