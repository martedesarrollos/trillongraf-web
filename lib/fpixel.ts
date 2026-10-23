export const FB_PIXEL_ID = "1721724529959121"

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
    _fbq?: any
  }
}

/**
 * Track standard Meta Pixel event (e.g. PageView, Contact, Lead, ViewContent)
 */
export const trackEvent = (eventName: string, options?: Record<string, any>) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", eventName, options)
  }
}

/**
 * Track custom Meta Pixel event
 */
export const trackCustomEvent = (eventName: string, options?: Record<string, any>) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, options)
  }
}

/**
 * Specifically tracks clicks to WhatsApp or quote inquiry buttons.
 * Fires both standard 'Contact'/'Lead' and custom 'ClickWhatsApp'
 * so Meta's ML algorithm and Custom Audiences receive the conversion signals.
 */
export const trackWhatsAppClick = (source: string, details?: Record<string, any>) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Contact", {
      content_name: "WhatsApp Click",
      content_category: source,
      ...details,
    })
    window.fbq("track", "Lead", {
      content_name: "Presupuesto WhatsApp",
      content_category: source,
      ...details,
    })
    window.fbq("trackCustom", "ClickWhatsApp", {
      button_location: source,
      ...details,
    })
  }
}
