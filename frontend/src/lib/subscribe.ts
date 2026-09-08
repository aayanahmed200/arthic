import { API_BASE } from "./config";

/**
 * Email capture for the early-access waitlist. Posts to the backend
 * when one is configured; otherwise tells the visitor honestly that
 * signups aren't live yet rather than pretending to succeed.
 */
export function initSubscribeForm(): void {
  const form = document.querySelector<HTMLFormElement>("[data-subscribe-form]");
  if (!form) return;

  const status = form.querySelector<HTMLElement>("[data-subscribe-status]");
  const input = form.querySelector<HTMLInputElement>("input[type='email']");
  const honeypot = form.querySelector<HTMLInputElement>("input[name='website']");
  const button = form.querySelector<HTMLButtonElement>("button[type='submit']");

  const setStatus = (message: string, state: "idle" | "error" | "success") => {
    if (!status) return;
    status.textContent = message;
    status.dataset.state = state;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!input || !input.value) return;

    if (honeypot?.value) {
      // Hidden field — real visitors never fill this in. Pretend success
      // and skip the network call entirely rather than tipping off a bot.
      setStatus("you're in — welcome.", "success");
      form.reset();
      return;
    }

    button?.setAttribute("disabled", "true");
    setStatus("sending…", "idle");

    try {
      const response = await fetch(`${API_BASE}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: input.value }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.status === 503) {
        setStatus("signups aren't connected to storage yet — check back soon.", "error");
        return;
      }
      if (!response.ok) {
        setStatus(
          typeof data?.error === "string" ? data.error : `couldn't reach the server — try again shortly.`,
          "error",
        );
        return;
      }

      setStatus("you're in — welcome.", "success");
      form.reset();
    } catch {
      setStatus("couldn't reach the server — try again shortly.", "error");
    } finally {
      button?.removeAttribute("disabled");
    }
  });
}
