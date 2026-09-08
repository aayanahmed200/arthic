/**
 * Shared submit handler for the pre-order and job-application forms. Both
 * post JSON to a same-origin Vercel serverless function under /api — no
 * separate backend deploy required, unlike the journal/subscribe features.
 */
interface SubmitOptions {
  endpoint: string;
  buildPayload: (form: HTMLFormElement) => Record<string, unknown> | null;
  invalidMessage: string;
  successMessage: string;
}

export function initFormSubmit(form: HTMLFormElement, opts: SubmitOptions): void {
  const status = form.querySelector<HTMLElement>("[data-form-status]");
  const button = form.querySelector<HTMLButtonElement>("button[type='submit']");
  const honeypot = form.querySelector<HTMLInputElement>("input[name='website']");

  const setStatus = (message: string, state: "idle" | "error" | "success") => {
    if (!status) return;
    status.textContent = message;
    status.dataset.state = state;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (honeypot?.value) {
      // Hidden field — real visitors never fill this in. Pretend success
      // and skip the network call entirely rather than tipping off a bot.
      setStatus(opts.successMessage, "success");
      form.reset();
      return;
    }

    const payload = opts.buildPayload(form);
    if (!payload) {
      setStatus(opts.invalidMessage, "error");
      return;
    }

    button?.setAttribute("disabled", "true");
    setStatus("sending…", "idle");

    try {
      const response = await fetch(opts.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus(
          typeof data?.error === "string" ? data.error : "couldn't reach the server — try again shortly.",
          "error",
        );
        return;
      }

      setStatus(opts.successMessage, "success");
      form.reset();
    } catch {
      setStatus("couldn't reach the server — try again shortly.", "error");
    } finally {
      button?.removeAttribute("disabled");
    }
  });
}
