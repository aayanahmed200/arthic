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

const ARLO_MASCOT_SVG = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle class="arlo-blob" cx="16" cy="16" r="14.2" fill="currentColor" />
  <g class="arlo-eyes">
    <g class="arlo-eye">
      <circle cx="10.8" cy="15.5" r="4" fill="#ffffff" />
      <circle cx="10.8" cy="15.5" r="1.9" fill="#0a0a0a" />
    </g>
    <g class="arlo-eye">
      <circle cx="21.2" cy="15.5" r="4" fill="#ffffff" />
      <circle cx="21.2" cy="15.5" r="1.9" fill="#0a0a0a" />
    </g>
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
      <span class="arlo__launcher-mark" data-arlo-sphere-mount aria-hidden="true"></span>
    </button>
  `;
  document.body.appendChild(root);

  // Three.js is a genuinely heavy dependency for a decorative floating
  // button — code-split and loaded on idle instead of bundled into the
  // main script every page pays for upfront, so it starts downloading
  // once the rest of the page is actually interactive, not before.
  const sphereMount = root.querySelector<HTMLElement>("[data-arlo-sphere-mount]")!;
  const loadSphere = () => {
    import("./arlo-sphere").then(({ initArloSphere }) => initArloSphere(sphereMount));
  };
  const idle = (window as typeof window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => void })
    .requestIdleCallback;
  if (idle) {
    idle(loadSphere, { timeout: 2000 });
  } else {
    window.setTimeout(loadSphere, 300);
  }

  const panel = root.querySelector<HTMLElement>("[data-arlo-panel]")!;
  const launcher = root.querySelector<HTMLButtonElement>("[data-arlo-launcher]")!;
  const closeBtn = root.querySelector<HTMLButtonElement>("[data-arlo-close]")!;
  const log = root.querySelector<HTMLElement>("[data-arlo-log]")!;
  const form = root.querySelector<HTMLFormElement>("[data-arlo-form]")!;
  const input = root.querySelector<HTMLTextAreaElement>("[data-arlo-input]")!;
  const sendBtn = root.querySelector<HTMLButtonElement>("[data-arlo-send]")!;

  const history: ChatMessage[] = [];
  let greeted = false;
  let opened = false;
  let sending = false;

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
}
