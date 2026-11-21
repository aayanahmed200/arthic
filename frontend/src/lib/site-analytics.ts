const TRACKED_PUBLIC_PATHS = new Set([
  "/",
  "/study-preview.html",
  "/pricing.html",
  "/careers.html",
  "/waitlist.html",
  "/apply.html",
  "/method.html",
  "/subjects.html",
  "/privacy.html",
  "/terms.html",
  "/cookies.html",
]);

/**
 * Sends a route-only event to Arthic's first-party aggregate counter.
 * No account ID, cookie, referrer, query string or browser fingerprint is sent.
 * Private account/admin/callback routes are intentionally excluded.
 */
export function trackPublicPageView(): void {
  const path = window.location.pathname;
  if (!TRACKED_PUBLIC_PATHS.has(path)) return;

  void fetch("/api/metrics/page-view", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ path }),
    cache: "no-store",
    keepalive: true,
  }).catch(() => {
    // Analytics is non-essential and must never affect page navigation.
  });
}
