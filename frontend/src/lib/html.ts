/**
 * Journal content comes from the admin panel (see backend/src/public/admin),
 * not from site visitors — but it still travels through fetch() → innerHTML
 * on the public site, so it gets escaped like any other untrusted string.
 * A stray "<" or "&" typed into the admin form should never be able to
 * break markup or, worse, inject a tag.
 */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
