import { API_BASE } from "./config";

/**
 * Arlo, the floating support chat. Injects its own markup into every
 * page (rather than duplicating it in ten HTML files) so there's one
 * source of truth for the widget. Conversation lives in memory only —
 * refreshing the page starts a fresh chat, on purpose, to keep this
 * simple and avoid storing chat content anywhere.
 */

type Role = "user" | "assistant";
interface ChatMessage {
  role: Role;
  content: string;
}

const GREETING = "hey, I'm Arlo — ask me anything about arthic: what it does, pricing, exams covered, or how to apply for a role.";

// Rounded-square eyes, not circles — the shape itself is the whole
// expressive element, same idea as Grok's bot character. One shared
// constant used everywhere the character appears (launcher, panel
// header, every message-bubble avatar), so it's identical by
// construction, not by convention.
const ARLO_MASCOT_SVG = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle class="arlo-blob" cx="16" cy="16" r="14.2" fill="currentColor" />
  <g class="arlo-eyes">
    <rect class="arlo-eye" x="8.4" y="11.6" width="5.6" height="7.8" rx="2.5" fill="#0a0a0a" />
    <rect class="arlo-eye" x="18" y="11.6" width="5.6" height="7.8" rx="2.5" fill="#0a0a0a" />
  </g>
</svg>`;

export function initArlo(): void {
  if (document.querySelector("[data-arlo-root]")) return; // guard against double-init

  const root = document.createElement("div");
  root.className = "arlo";
  root.setAttribute("data-arlo-root", "");
  root.innerHTML = `
    <div class="arlo__panel" data-arlo-panel hidden role="dialog" aria-label="Arlo, arthic support chat" aria-modal="false">
      <div class="arlo__head">
        <div class="arlo__head-identity">
          <span class="arlo__avatar" aria-hidden="true">${ARLO_MASCOT_SVG}</span>
          <div>
            <p class="arlo__head-name">Arlo</p>
            <p class="arlo__head-sub">arthic support</p>
          </div>
        </div>
        <button class="arlo__close" type="button" data-arlo-close aria-label="close chat">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" /></svg>
        </button>
      </div>
      <div class="arlo__log" data-arlo-log role="log" aria-live="polite"></div>
      <form class="arlo__foot" data-arlo-form>
        <textarea class="arlo__input" data-arlo-input rows="1" placeholder="ask arlo something…" aria-label="message"></textarea>
        <button class="arlo__send" type="submit" data-arlo-send aria-label="send">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11.5M8 2.5L13.5 8 8 13.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
      </form>
    </div>
    <button class="arlo__launcher" type="button" data-arlo-launcher aria-haspopup="dialog" aria-expanded="false" aria-label="chat with Arlo, arthic support">
      <span class="arlo__launcher-mark" aria-hidden="true">${ARLO_MASCOT_SVG}</span>
    </button>
  `;
  document.body.appendChild(root);

  const panel = root.querySelector<HTMLElement>("[data-arlo-panel]")!;
  const launcher = root.querySelector<HTMLButtonElement>("[data-arlo-launcher]")!;
  const closeBtn = root.querySelector<HTMLButtonElement>("[data-arlo-close]")!;
  const log = root.querySelector<HTMLElement>("[data-arlo-log]")!;
  const form = root.querySelector<HTMLFormElement>("[data-arlo-form]")!;
  const input = root.querySelector<HTMLTextAreaElement>("[data-arlo-input]")!;
  const sendBtn = root.querySelector<HTMLButtonElement>("[data-arlo-send]")!;

  const history: ChatMessage[] = [];
  let opened = false;
  let sending = false;
  let greeted = false;

  function appendMessage(role: Role | "error", text: string): HTMLElement {
    if (role === "user") {
      const bubble = document.createElement("p");
      bubble.className = "arlo__msg arlo__msg--user";
      bubble.textContent = text;
      log.appendChild(bubble);
      log.scrollTop = log.scrollHeight;
      return bubble;
    }

    // assistant + error replies both come "from Arlo's side" visually — avatar alongside the bubble
    const row = document.createElement("div");
    row.className = "arlo__row";
    row.innerHTML = `<span class="arlo__row-avatar" aria-hidden="true">${ARLO_MASCOT_SVG}</span>`;
    const bubble = document.createElement("p");
    bubble.className = `arlo__msg arlo__msg--${role}`;
    bubble.textContent = text;
    row.appendChild(bubble);
    log.appendChild(row);
    log.scrollTop = log.scrollHeight;
    return bubble;
  }

  function appendThinking(): HTMLElement {
    const row = document.createElement("div");
    row.className = "arlo__row";
    row.innerHTML = `
      <span class="arlo__row-avatar" aria-hidden="true">${ARLO_MASCOT_SVG}</span>
      <div class="arlo__msg arlo__msg--thinking"><div class="loading-bar"></div></div>
    `;
    log.appendChild(row);
    log.scrollTop = log.scrollHeight;
    return row;
  }

  function open() {
    panel.hidden = false;
    launcher.setAttribute("aria-expanded", "true");
    opened = true;
    if (!greeted) {
      greeted = true;
      appendMessage("assistant", GREETING);
    }
    window.requestAnimationFrame(() => input.focus());
  }

  function close() {
    panel.hidden = true;
    launcher.setAttribute("aria-expanded", "false");
    launcher.focus();
  }

  launcher.addEventListener("click", () => {
    if (panel.hidden) open();
    else close();
  });

  closeBtn.addEventListener("click", close);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && opened && !panel.hidden) close();
  });

  // auto-grow the textarea up to the CSS max-height, then it scrolls
  input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = `${input.scrollHeight}px`;
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text || sending) return;

    input.value = "";
    input.style.height = "auto";
    appendMessage("user", text);
    history.push({ role: "user", content: text });

    sending = true;
    sendBtn.disabled = true;
    const thinking = appendThinking();

    try {
      const res = await fetch(`${API_BASE}/api/arlo`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      thinking.remove();

      if (res.status === 503) {
        appendMessage("error", "I'm not fully wired up yet — email hello@arthic.tech and a real person will help.");
        return;
      }

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        appendMessage("error", data?.error ?? "something went wrong — try again in a moment.");
        return;
      }

      const data = (await res.json()) as { reply: string };
      appendMessage("assistant", data.reply);
      history.push({ role: "assistant", content: data.reply });
    } catch {
      thinking.remove();
      appendMessage("error", "couldn't reach arlo — check your connection and try again.");
    } finally {
      sending = false;
      sendBtn.disabled = false;
    }
  });

  initLauncherTracking(launcher);
}

/**
 * Smooth cursor tracking for the launcher's own eyes only — the header
 * avatar and every message-bubble avatar render the same character
 * markup but stay completely still, matching every other instance on
 * the page.
 *
 * Two things that make this read as smooth instead of jumpy, both
 * learned the hard way from earlier passes at this:
 *  1. The target is viewport-relative (cursor position across the
 *     whole window), not distance-from-the-button — the launcher sits
 *     fixed in a corner, so "distance from it" saturates at its max
 *     for nearly the entire page and barely changes as the cursor
 *     moves around. Viewport-relative responds continuously, everywhere.
 *  2. The eyes don't jump straight to that target each frame — they
 *     ease toward it a fraction at a time (the 0.12 below), which is
 *     what actually produces a gliding motion instead of a snap. rAF
 *     drives this continuously, not an event-triggered one-off.
 */
function initLauncherTracking(launcher: HTMLButtonElement): void {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  const eyes = launcher.querySelectorAll<SVGRectElement>(".arlo-eye");
  if (eyes.length === 0) return;

  const EYE_MAX = 2.4; // svg viewBox units
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let raf = 0;

  window.addEventListener("mousemove", (event) => {
    // -1 (left/top edge) to 1 (right/bottom edge) across the viewport
    targetX = (event.clientX / window.innerWidth) * 2 - 1;
    targetY = (event.clientY / window.innerHeight) * 2 - 1;
  });

  function tick() {
    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;
    const ex = currentX * EYE_MAX;
    const ey = currentY * EYE_MAX;
    eyes.forEach((eye) => eye.setAttribute("transform", `translate(${ex.toFixed(2)} ${ey.toFixed(2)})`));
    raf = requestAnimationFrame(tick);
  }
  tick();

  // not strictly necessary today (the launcher persists for the whole
  // session) but cheap insurance if that ever changes.
  window.addEventListener("beforeunload", () => cancelAnimationFrame(raf), { once: true });
}
