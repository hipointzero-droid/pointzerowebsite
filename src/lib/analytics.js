// Lightweight analytics shim — pushes to GA4 (`window.gtag`) and to GTM's
// `window.dataLayer` if either is present. No-op when neither is loaded, so
// it is safe to call before/without the GA snippet being added to index.html.
//
// When the GA4/GTM tag is later wired into index.html, every CTA already
// fires the right event with no further code change. Stripe, Linear and
// Vercel all front-end-instrument the same way.

const isBrowser = typeof window !== 'undefined';

function pushDataLayer(name, params) {
  if (!isBrowser) return;
  // GTM container: always push so historical events are captured once GTM
  // boots. Safe even when GTM is not installed (just an unused array).
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
  // GA4 gtag: send directly if the global is present.
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}

/**
 * Generic event — use sparingly. Prefer the named helpers below so event
 * names stay consistent across the codebase.
 */
export function trackEvent(name, params = {}) {
  pushDataLayer(name, params);
}

/**
 * CTA click — any prominent call-to-action button. `label` is what the user
 * sees on the button; `location` is the page/section so we can attribute
 * conversions to the page that drove them.
 */
export function trackCTAClick(label, location) {
  pushDataLayer('cta_click', { cta_label: label, cta_location: location });
}

/** Contact form submit attempt — fires regardless of validation outcome. */
export function trackContactSubmit(payload = {}) {
  pushDataLayer('contact_submit', payload);
}

/** Contact form successfully delivered (server 2xx or mailto fallback). */
export function trackContactSuccess(payload = {}) {
  pushDataLayer('generate_lead', { ...payload, currency: 'USD', value: 1 });
}

/** Contact form failed — server error, validation error, network error. */
export function trackContactError(reason) {
  pushDataLayer('contact_error', { reason });
}

/** Phone tap / email tap — counts as a soft conversion. */
export function trackPhoneClick(location) {
  pushDataLayer('phone_click', { cta_location: location });
}

export function trackEmailClick(location) {
  pushDataLayer('email_click', { cta_location: location });
}
