import { API_BASE } from "./config";

/**
 * Email capture for "get the journal by email". Posts to the backend
 * when one is configured; otherwise tells the reader honestly that
 * signups aren't live yet rather than pretending to succeed.
 */
export function initSubscribeForm(): void {
  const form = document.querySelector<HTMLFormElement>("[data-subscribe-form]");
  if (!form) return;

  const status = form.querySelector<HTMLElement>("[data-subscribe-status]");
  const input = form.querySelector<HTMLInputElement>("input[type='email']");
  const button = form.querySelector<HTMLButtonElement>("button[type='submit']");

  const setStatus = (message: string, state: "idle" | "error" | "success") => {
    if (!status) return;
    status.textContent = message;
    status.dataset.state = state;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!input || !input.value) return;

    button?.setAttribute("disabled", "true");
    setStatus("sending…", "idle");

    try {
      const response = await fetch(`${API_BASE}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: input.value }),
      });

      if (response.status === 503) {
        setStatus("signups aren't connected to storage yet — check back soon.", "error");
        return;
      }
      if (!response.ok) throw new Error(`request failed (${response.status})`);

      setStatus("you're in — welcome.", "success");
      form.reset();
    } catch {
      setStatus("couldn't reach the server — try again shortly.", "error");
    } finally {
      button?.removeAttribute("disabled");
    }
  });
}
