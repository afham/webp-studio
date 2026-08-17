// lib/gtag.ts

// Helper to safely send custom events to Google Analytics
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, string | number | boolean>,
) => {
  if (
    typeof window !== "undefined" &&
    (window as unknown as { gtag?: Function }).gtag
  ) {
    (window as unknown as { gtag: Function }).gtag(
      "event",
      eventName,
      eventParams,
    );
  }
};
