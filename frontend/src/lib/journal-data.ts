import { API_BASE } from "./config";
import { escapeHtml } from "./html";

interface JournalEntry {
  slug: string;
  title: string;
  excerpt: string;
  published_at: string;
}

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

function renderRow(entry: JournalEntry): string {
  return `
    <li class="journal__row is-in">
      <a href="/journal.html?slug=${encodeURIComponent(entry.slug)}">
        <span class="journal__date">${escapeHtml(formatDate(entry.published_at))}</span>
        <span class="journal__text">
          <span class="journal__title">${escapeHtml(entry.title)}</span>
          <span class="journal__excerpt">${escapeHtml(entry.excerpt)}</span>
        </span>
        <svg class="journal__arrow" width="16" height="11" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" />
        </svg>
      </a>
    </li>`;
}

/**
 * The homepage ships with three real journal entries baked into the
 * static markup, so the section is always complete even with no backend
 * deployed. If a backend IS configured and reachable, we quietly swap in
 * the live list — same markup shape, just authoritative.
 */
export async function initJournalData(): Promise<void> {
  const list = document.querySelector<HTMLOListElement>("[data-journal-list]");
  if (!list) return;

  try {
    const response = await fetch(`${API_BASE}/api/journal`, { signal: AbortSignal.timeout(4000) });
    if (!response.ok) return;
    const entries: JournalEntry[] = await response.json();
    if (!Array.isArray(entries) || entries.length === 0) return;

    list.innerHTML = entries.slice(0, 6).map(renderRow).join("");
  } catch {
    // Static fallback already in the DOM — nothing to do.
  }
}
