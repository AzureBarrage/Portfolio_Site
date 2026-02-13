type AnalyticsProperties = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: AnalyticsProperties }) => void;
  }
}

export const trackEvent = (eventName: string, props?: AnalyticsProperties): void => {
  if (typeof window === 'undefined') {
    return;
  }

  if (typeof window.plausible === 'function') {
    window.plausible(eventName, props ? { props } : undefined);
  }
};
