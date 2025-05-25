"use client";

import { Suspense, lazy, ComponentType } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
}

// Default loading skeleton
const DefaultSkeleton = () => (
  <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg" />
);

// Lazy wrapper that only loads content when it's in view
export const LazyWrapper: React.FC<LazyWrapperProps> = ({
  children,
  fallback = <DefaultSkeleton />,
  rootMargin = '100px',
  threshold = 0.1,
}) => {
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: true, // Only trigger once
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

// Higher-order component for lazy loading components
export function withLazyLoading<P extends object>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) {
  return function LazyComponent(props: P) {
    return (
      <LazyWrapper fallback={fallback}>
        <Component {...props} />
      </LazyWrapper>
    );
  };
}

export default LazyWrapper; 