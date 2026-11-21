import "./styles/main.css";
import "./styles/brand-final.css";
import "./styles/ui-polish.css";
import "./styles/workspace.css";
import { initCommon } from "./lib/common-init";
import {
  authIsConfigured, getAccessToken, saveAccountConsent, studentAccountsEnabled,
  startGoogleSignIn,
} from "./lib/student-auth";

initCommon();

const TERMS_VERSION = "2026-11-21";
const PRIVACY_VERSION = "2026-11-21";
type WorkspacePage = "dashboard" | "settings" | "admin";
type ApiOptions = { method?: string; body?: unknown };

function status(message: string, state: "idle" | "error" | "success" = "idle"): void {
  document.querySelectorAll<HTMLElement>("[data-workspace-status]").forEach((node) => {
    node.textContent = message;
    node.dataset.state = state;
  });
}

async function api(path: string, options: ApiOptions = {}): Promise<Response> {
  const token = await getAccessToken();
  if (!token) throw new Error("Your sign-in session has expired. Sign in again.");
  return fetch(path, {
    method: options.method ?? "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
      ...(options.body === undefined ? {} : { "Content-Type": "application/json" }),
    },
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
    cache: "no-store",
  });
}

async function payload(response: Response): Promise<Record<string, unknown>> {
  const value = await response.json().catch(() => ({})) as Record<string, unknown>;
  if (!response.ok) throw new Error(typeof value.error === "string" ? value.error : "The request could not be completed.");
  return value;
}

function show(element: string, visible: boolean): void {
  const node = document.querySelector<HTMLElement>(element);
  if (node) node.hidden = !visible;
}

function put(selector: string, value: unknown): void {
  const node = document.querySelector<HTMLElement>(selector);
  if (node) node.textContent = String(value ?? "—");
}

function showRows(selector: string, rows: Array<Record<string, unknown>>, fields: string[]): void {
  const body = document.querySelector<HTMLTableSectionElement>(selector);
  if (!body) return;
  body.replaceChildren();
  rows.forEach((row) => {
    const tr = document.createElement("tr");
    fields.forEach((field) => {
      const td = document.createElement("td");
      td.textContent = String(row[field] ?? "—");
      tr.append(td);
    });
    body.append(tr);
  });
  if (!rows.length) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = fields.length;
    td.className = "workspace-empty";
    td.textContent = "No activity recorded yet.";
    tr.append(td);
    body.append(tr);
  }
}

async function setupAccount(): Promise<void> {
  const form = document.querySelector<HTMLFormElement>("[data-account-consent]");
  if (!form || !form.reportValidity()) return;
  const consent = {
    acceptedTerms: Boolean(form.querySelector<HTMLInputElement>("[name=acceptTerms]")?.checked),
    acceptedPrivacy: Boolean(form.querySelector<HTMLInputElement>("[name=acceptPrivacy]")?.checked),
    ageDeclaration: Boolean(form.querySelector<HTMLInputElement>("[name=ageDeclaration]")?.checked),
  };
  if (!consent.acceptedTerms || !consent.acceptedPrivacy || !consent.ageDeclaration) return;
  saveAccountConsent(consent);

  const token = await getAccessToken();
  if (!token) {
    await startGoogleSignIn("student");
    return;
  }

  status("Saving your account preferences…");
  const response = await api("/api/student/account", {
    method: "POST",
    body: {
      acceptTerms: consent.acceptedTerms,
      acceptPrivacy: consent.acceptedPrivacy,
      ageDeclaration: consent.ageDeclaration,
      termsVersion: TERMS_VERSION,
      privacyVersion: PRIVACY_VERSION,
    },
  });
  await payload(response);
  status("Your Arthic account is ready.", "success");
  window.location.replace("/dashboard.html");
}

async function loadDashboard(): Promise<void> {
  try {
    const token = await getAccessToken();
    if (!token) {
      show("[data-dashboard-auth]", true);
      show("[data-dashboard-main]", false);
      return;
    }
    const me = await payload(await api("/api/student/me"));
    const workspace = me.workspace as Record<string, unknown> | undefined;
    if (workspace?.available !== true) {
      show("[data-dashboard-auth]", true);
      show("[data-dashboard-main]", false);
      status("Review the current policies and complete account setup to enable synced progress.");
      return;
    }
    show("[data-dashboard-auth]", false);
    show("[data-dashboard-main]", true);
    const identity = me.identity as Record<string, unknown> | undefined;
    put("[data-user-name]", identity?.displayName || identity?.email || "Student");
    put("[data-user-email]", identity?.email || "");
    const data = await payload(await api("/api/student/dashboard"));
    const totals = data.totals as Record<string, unknown> | undefined;
    put("[data-stat-sessions]", totals?.sessions ?? 0);
    put("[data-stat-answered]", totals?.answered ?? 0);
    put("[data-stat-accuracy]", totals?.accuracy == null ? "—" : String(totals.accuracy) + "%");
    showRows("[data-recent-sessions]", Array.isArray(data.recentSessions) ? data.recentSessions as Array<Record<string, unknown>> : [], ["examCode", "subjectCode", "answered", "correct", "startedAt"]);
  } catch (error) {
    status(error instanceof Error ? error.message : "Could not load your dashboard.", "error");
  }
}

async function loadSettings(): Promise<void> {
  try {
    const token = await getAccessToken();
    if (!token) {
      show("[data-settings-auth]", true);
      show("[data-settings-main]", false);
      return;
    }
    const me = await payload(await api("/api/student/me"));
    const workspace = me.workspace as Record<string, unknown> | undefined;
    if (workspace?.available !== true) {
      show("[data-settings-auth]", true);
      show("[data-settings-main]", false);
      status("Complete account setup from the Dashboard first.");
      return;
    }
    show("[data-settings-auth]", false);
    show("[data-settings-main]", true);
    const result = await payload(await api("/api/student/settings"));
    const preferences = result.preferences as Record<string, unknown> | undefined;
    const exam = document.querySelector<HTMLSelectElement>("[name=preferredExam]");
    const updates = document.querySelector<HTMLInputElement>("[name=emailUpdates]");
    if (exam && typeof preferences?.preferredExam === "string") exam.value = preferences.preferredExam;
    if (updates) updates.checked = preferences?.emailUpdates === true;
    const identity = me.identity as Record<string, unknown> | undefined;
    put("[data-settings-email]", identity?.email ?? "");
  } catch (error) {
    status(error instanceof Error ? error.message : "Could not load Settings.", "error");
  }
}

async function loadAdmin(): Promise<void> {
  const token = await getAccessToken();
  if (!token) {
    show("[data-admin-auth]", true);
    show("[data-admin-main]", false);
    return;
  }
  show("[data-admin-auth]", false);
  show("[data-admin-main]", true);
  try {
    const data = await payload(await api("/api/admin/stats"));
    const totals = data.totals as Record<string, unknown> | undefined;
    put("[data-admin-users]", totals?.users ?? 0);
    put("[data-admin-users-week]", totals?.newUsers7d ?? 0);
    put("[data-admin-sessions]", totals?.sessions ?? 0);
    put("[data-admin-answers]", totals?.answers ?? 0);
    put("[data-admin-accuracy]", totals?.accuracy == null ? "—" : String(totals.accuracy) + "%");
    put("[data-admin-questions]", totals?.publishedQuestions ?? 0);
    put("[data-admin-waitlist]", totals?.waitlist ?? 0);
    put("[data-admin-applications]", totals?.applications ?? 0);
    put("[data-admin-requests]", totals?.pendingDataRequests ?? 0);
    showRows("[data-admin-track-rows]", Array.isArray(data.examActivity) ? data.examActivity as Array<Record<string, unknown>> : [], ["examCode", "sessions", "answered", "correct"]);
    showRows("[data-admin-request-rows]", Array.isArray(data.dataRequests) ? data.dataRequests as Array<Record<string, unknown>> : [], ["email", "type", "status", "createdAt"]);
    status("Statistics refreshed.", "success");
  } catch (error) {
    status(error instanceof Error ? error.message : "Could not load admin statistics.", "error");
  }
}

function initPage(): void {
  const root = document.querySelector<HTMLElement>("[data-workspace]");
  if (!root) return;
  const page = root.dataset.workspace as WorkspacePage;
  document.querySelectorAll<HTMLButtonElement>("[data-google-signin]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        if (!authIsConfigured()) throw new Error("Google sign-in is not configured yet. Add the Supabase public settings first.");
        await startGoogleSignIn(page === "admin" ? "admin" : "student");
      } catch (error) {
        status(error instanceof Error ? error.message : "Could not start Google sign-in.", "error");
      }
    });
  });

  document.querySelectorAll<HTMLButtonElement>("[data-signout]").forEach((button) => {
    button.addEventListener("click", async () => {
      const { signOut } = await import("./lib/student-auth");
      await signOut();
      window.location.replace("/dashboard.html");
    });
  });

  document.querySelector<HTMLButtonElement>("[data-initialize-schema]")?.addEventListener("click", async () => {
    const button = document.querySelector<HTMLButtonElement>("[data-initialize-schema]");
    if (button) button.disabled = true;
    status("Preparing the student database and question tables…");
    try {
      const response = await api("/api/admin/setup-students", { method: "POST", body: {} });
      const result = await payload(response);
      status(typeof result.message === "string" ? result.message : "Database setup completed.", "success");
      await loadAdmin();
    } catch (error) {
      status(error instanceof Error ? error.message : "Database setup failed.", "error");
    } finally {
      if (button) button.disabled = false;
    }
  });

  const consentForm = document.querySelector<HTMLFormElement>("[data-account-consent]");
  if (page === "dashboard" && !studentAccountsEnabled()) {
    const submit = consentForm?.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (submit) submit.disabled = true;
    status("Student account sign-in is not enabled yet. You can still use the public practice preview.");
  }
  consentForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    void setupAccount().catch((error) => status(error instanceof Error ? error.message : "Account setup failed.", "error"));
  });

  const settingsForm = document.querySelector<HTMLFormElement>("[data-settings-form]");
  settingsForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const preferredExam = settingsForm.querySelector<HTMLSelectElement>("[name=preferredExam]")?.value || null;
    const emailUpdates = settingsForm.querySelector<HTMLInputElement>("[name=emailUpdates]")?.checked === true;
    try {
      await payload(await api("/api/student/settings", { method: "PUT", body: { preferredExam, emailUpdates } }));
      status("Settings saved to your account.", "success");
    } catch (error) {
      status(error instanceof Error ? error.message : "Settings could not be saved.", "error");
    }
  });

  document.querySelector<HTMLButtonElement>("[data-export-data]")?.addEventListener("click", async () => {
    try {
      const data = await payload(await api("/api/student/data"));
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "arthic-account-export.json";
      link.click();
      URL.revokeObjectURL(url);
      status("Your account export was prepared.", "success");
    } catch (error) {
      status(error instanceof Error ? error.message : "Export failed.", "error");
    }
  });

  document.querySelector<HTMLButtonElement>("[data-request-delete]")?.addEventListener("click", async () => {
    const confirmed = window.confirm("Send a request to delete your Arthic account and synced practice data? This request will be reviewed; it does not immediately erase your Google account.");
    if (!confirmed) return;
    try {
      await payload(await api("/api/student/data", { method: "POST", body: { requestType: "delete" } }));
      status("Your deletion request has been recorded. We will contact you if we need to verify it.", "success");
    } catch (error) {
      status(error instanceof Error ? error.message : "Could not submit the deletion request.", "error");
    }
  });

  if (page === "dashboard") void loadDashboard();
  else if (page === "settings") void loadSettings();
  else if (page === "admin") void loadAdmin();
}

initPage();
