(() => {
  "use strict";

  const API = ""; // same-origin: this admin page is served by the API itself

  let authHeader = sessionStorage.getItem("arthic_admin_auth") || "";

  const loginView = document.getElementById("loginView");
  const appView = document.getElementById("appView");
  const loginForm = document.getElementById("loginForm");
  const loginError = document.getElementById("loginError");

  async function api(path, options = {}) {
    const res = await fetch(API + path, {
      ...options,
      headers: {
        ...(options.body ? { "Content-Type": "application/json" } : {}),
        ...(authHeader ? { Authorization: authHeader } : {}),
        ...(options.headers || {}),
      },
    });
    if (res.status === 401) throw new Error("UNAUTHORIZED");
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(body.error || `request failed (${res.status})`);
    }
    if (res.status === 204) return null;
    return res.json();
  }

  function showApp() {
    loginView.hidden = true;
    appView.hidden = false;
    loadSubscribers();
  }

  function showLogin(message) {
    sessionStorage.removeItem("arthic_admin_auth");
    authHeader = "";
    loginView.hidden = false;
    appView.hidden = true;
    loginError.textContent = message || "";
  }

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value;
    const candidate = "Basic " + btoa(`${user}:${pass}`);
    authHeader = candidate;
    try {
      await api("/api/subscribers"); // cheapest authenticated GET, just to verify creds
      sessionStorage.setItem("arthic_admin_auth", candidate);
      loginError.textContent = "";
      showApp();
    } catch {
      showLogin("wrong username or password");
    }
  });

  document.getElementById("signOutBtn").addEventListener("click", () => showLogin());

  /* ---------- waitlist ---------- */
  const subList = document.getElementById("subList");
  const subCount = document.getElementById("subCount");
  const exportStatus = document.getElementById("exportStatus");
  let subscriberEmails = [];

  async function loadSubscribers() {
    try {
      const subs = await api("/api/subscribers");
      subscriberEmails = subs.map((s) => s.email);
      subCount.textContent = String(subs.length);
      subList.innerHTML = "";
      subs.forEach((s) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${escapeHtml(s.email)}</span><span>${s.created_at}</span>`;
        subList.appendChild(li);
      });
    } catch (err) {
      if (err.message === "UNAUTHORIZED") return showLogin("session expired — sign in again");
    }
  }

  document.getElementById("exportBtn").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(subscriberEmails.join(", "));
      exportStatus.textContent = `copied ${subscriberEmails.length} emails.`;
    } catch {
      exportStatus.textContent = subscriberEmails.join(", ");
    }
  });

  /* ---------- utility ---------- */
  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------- boot ---------- */
  if (authHeader) {
    showApp();
  }
})();
