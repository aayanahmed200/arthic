import "./styles/main.css";
import { API_BASE, hasApiBase } from "./lib/config";
import { initCommon } from "./lib/common-init";
import { JOURNAL_ENTRIES, type JournalEntry } from "./lib/journal-entries";
import { escapeHtml } from "./lib/html";

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

function paragraphs(body: string): string {
  return body
    .split(/\n\s*\n/)
    .map((p) => `<p>${escapeHtml(p.trim())}</p>`)
    .join("");
}

async function fetchAllEntries(): Promise<JournalEntry[]> {
  if (hasApiBase) {
    try {
      const res = await fetch(`${API_BASE}/api/journal`, { signal: AbortSignal.timeout(4000) });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) return data;
      }
    } catch {
      // fall through to static list
    }
  }
  return JOURNAL_ENTRIES;
}

async function fetchOneEntry(slug: string): Promise<JournalEntry | undefined> {
  if (hasApiBase) {
    try {
      const res = await fetch(`${API_BASE}/api/journal/${encodeURIComponent(slug)}`, {
        signal: AbortSignal.timeout(4000),
      });
      if (res.ok) return await res.json();
    } catch {
      // fall through to static list
    }
  }
  return JOURNAL_ENTRIES.find((e) => e.slug === slug);
}

function renderIndex(content: HTMLElement, entries: JournalEntry[]): void {
  content.innerHTML = `
    <header class="entry__head">
      <p class="eyebrow">journal</p>
      <h1 class="entry__title">notes from the build.</h1>
    </header>
    <ol class="journal__list">
      ${entries
        .map(
          (e) => `
        <li class="journal__row is-in">
          <a href="/journal.html?slug=${encodeURIComponent(e.slug)}">
            <span class="journal__date">${escapeHtml(formatDate(e.published_at))}</span>
            <span class="journal__text">
              <span class="journal__title">${escapeHtml(e.title)}</span>
              <span class="journal__excerpt">${escapeHtml(e.excerpt)}</span>
            </span>
            <svg class="journal__arrow" width="16" height="11" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M0 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" />
            </svg>
          </a>
        </li>`,
        )
        .join("")}
    </ol>`;
}

function renderEntry(content: HTMLElement, entry: JournalEntry): void {
  document.title = `${entry.title} — arthic journal`;
  content.innerHTML = `
    <header class="entry__head">
      <span class="entry__date">${escapeHtml(formatDate(entry.published_at))}</span>
      <h1 class="entry__title">${escapeHtml(entry.title)}</h1>
    </header>
    <div class="entry__body">${paragraphs(entry.body)}</div>
    <div class="entry__foot">
      <a class="link-arrow link-arrow--large" href="/journal.html">
        <span>all entries</span>
        <svg class="arrow-glyph" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" />
        </svg>
      </a>
    </div>`;
}

function renderMissing(content: HTMLElement): void {
  content.innerHTML = `
    <div class="entry__missing">
      <p class="eyebrow">journal</p>
      <h1>this entry doesn't exist. yet.</h1>
      <p class="entry__missing-body">It might have moved, or the link might just be wrong. Here's the full list instead.</p>
      <a class="link-arrow link-arrow--large" href="/journal.html">
        <span>all entries</span>
        <svg class="arrow-glyph" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" />
        </svg>
      </a>
    </div>`;
}

async function init(): Promise<void> {
  initCommon();

  const content = document.querySelector<HTMLElement>("[data-journal-content]");
  const backLink = document.querySelector<HTMLAnchorElement>("[data-journal-back]");
  if (!content) return;

  const slug = new URLSearchParams(window.location.search).get("slug");

  if (!slug) {
    backLink?.remove();
    renderIndex(content, await fetchAllEntries());
    return;
  }

  const entry = await fetchOneEntry(slug);
  if (entry) renderEntry(content, entry);
  else renderMissing(content);
}

void init();
