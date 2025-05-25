"use client";

import { useEffect } from 'react';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const reportMetric = (name: string, value: number) => {
      // Send to analytics service (Google Analytics, etc.)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'performance_metric', {
          event_category: 'Performance',
          event_label: name,
          value: Math.round(value),
          non_interaction: true,
        });
      }

      // Log to console
      console.log(`Performance Metric - ${name}:`, value);
    };

    // Measure basic performance metrics
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigationEntry) {
          // First Contentful Paint (FCP)
          const fcp = navigationEntry.domContentLoadedEventEnd - navigationEntry.fetchStart;
          reportMetric('FCP', fcp);

          // Largest Contentful Paint approximation
          const lcp = navigationEntry.loadEventEnd - navigationEntry.fetchStart;
          reportMetric('LCP_approx', lcp);

          // Time to Interactive approximation
          const tti = navigationEntry.domInteractive - navigationEntry.fetchStart;
          reportMetric('TTI_approx', tti);

          // Total page load time
          const pageLoadTime = navigationEntry.loadEventEnd - navigationEntry.fetchStart;
          reportMetric('PageLoadTime', pageLoadTime);
        }

        // Resource loading times
        const resourceEntries = performance.getEntriesByType('resource');
        const imageResources = resourceEntries.filter(entry => 
          entry.name.includes('.webp') || entry.name.includes('.jpg') || entry.name.includes('.png')
        );

        if (imageResources.length > 0) {
          const avgImageLoadTime = imageResources.reduce((sum, entry) => 
            sum + entry.duration, 0) / imageResources.length;
          reportMetric('AvgImageLoadTime', avgImageLoadTime);
        }

        // JavaScript bundle size estimation
        const jsResources = resourceEntries.filter(entry => 
          entry.name.includes('.js') && !entry.name.includes('node_modules')
        ) as PerformanceResourceTiming[];
        
        if (jsResources.length > 0) {
          const totalJSSize = jsResources.reduce((sum, entry) => 
            sum + (entry.transferSize || 0), 0);
          reportMetric('TotalJSSize', totalJSSize);
        }
      }
    };

    // Run measurements after page load
    if (document.readyState === 'complete') {
      setTimeout(measurePerformance, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(measurePerformance, 1000);
      });
    }

  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor; 