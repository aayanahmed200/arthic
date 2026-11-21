import "./styles/main.css";
import "./styles/brand-final.css";
import "./styles/ui-polish.css";
import "./styles/workspace.css";
import { initCommon } from "./lib/common-init";
import {
  clearAccountConsent, clearAuthIntent, completeGoogleCallback, currentAuthIntent,
  getAccessToken, readAccountConsent,
} from "./lib/student-auth";

initCommon();

const status = document.querySelector<HTMLElement>("[data-callback-status]");
function say(message: string, error = false): void {
  if (status) {
    status.textContent = message;
    status.dataset.state = error ? "error" : "idle";
  }
}

async function finish(): Promise<void> {
  try {
    say("Completing secure sign-in…");
    await completeGoogleCallback();
    const intent = currentAuthIntent();
    const token = await getAccessToken();
    if (!token) throw new Error("Your sign-in session could not be established. Please start again.");

    if (intent === "student") {
      const consent = readAccountConsent();
      if (!consent) throw new Error("Before creating a student workspace, return to the Dashboard and review the Terms, Privacy Policy and age requirements.");
      const response = await fetch("/api/student/account", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          acceptTerms: consent.acceptedTerms,
          acceptPrivacy: consent.acceptedPrivacy,
          ageDeclaration: consent.ageDeclaration,
          termsVersion: "2026-11-21",
          privacyVersion: "2026-11-21",
        }),
        cache: "no-store",
      });
      const result = await response.json().catch(() => ({})) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Your account could not be created.");
      clearAccountConsent();
      clearAuthIntent();
      window.location.replace("/dashboard.html");
      return;
    }

    if (intent === "admin") {
      clearAuthIntent();
      window.location.replace("/admin.html");
      return;
    }

    window.location.replace("/dashboard.html");
  } catch (error) {
    say(error instanceof Error ? error.message : "Sign-in failed. Please return to Arthic and try again.", true);
  }
}

void finish();
