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
    loadEntries();
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

  /* ---------- tabs ---------- */
  document.querySelectorAll(".app__tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".app__tab").forEach((t) => t.classList.remove("is-active"));
      document.querySelectorAll(".panel").forEach((p) => p.classList.remove("is-active"));
      tab.classList.add("is-active");
      document.getElementById(tab.dataset.tab + "Panel").classList.add("is-active");
    });
  });

  /* ---------- journal ---------- */
  const entryList = document.getElementById("entryList");
  const entryForm = document.getElementById("entryForm");
  const entrySlug = document.getElementById("entrySlug");
  const entryTitle = document.getElementById("entryTitle");
  const entryExcerpt = document.getElementById("entryExcerpt");
  const entryBody = document.getElementById("entryBody");
  const entryDate = document.getElementById("entryDate");
  const entryStatus = document.getElementById("entryStatus");
  const entryDeleteBtn = document.getElementById("entryDeleteBtn");
  const formHeading = document.getElementById("formHeading");

  let entries = [];

  async function loadEntries() {
    try {
      entries = await api("/api/journal");
      renderEntryList();
    } catch (err) {
      if (err.message === "UNAUTHORIZED") return showLogin("session expired — sign in again");
      entryStatus.textContent = err.message;
      entryStatus.className = "panel__status is-error";
    }
  }

  function renderEntryList() {
    entryList.innerHTML = "";
    entries.forEach((entry) => {
      const li = document.createElement("li");
      li.dataset.slug = entry.slug;
      li.innerHTML = `<span class="entry-list__title">${escapeHtml(entry.title)}</span><span class="entry-list__date">${entry.published_at}</span>`;
      li.addEventListener("click", () => selectEntry(entry.slug));
      entryList.appendChild(li);
    });
  }

  async function selectEntry(slug) {
    try {
      const full = await api(`/api/journal/${encodeURIComponent(slug)}`);
      entrySlug.value = full.slug;
      entryTitle.value = full.title;
      entryExcerpt.value = full.excerpt;
      entryBody.value = full.body || "";
      entryDate.value = full.published_at;
      formHeading.textContent = "edit entry";
      entryDeleteBtn.hidden = false;
      entryStatus.textContent = "";
      document.querySelectorAll("#entryList li").forEach((li) => {
        li.classList.toggle("is-selected", li.dataset.slug === slug);
      });
    } catch (err) {
      entryStatus.textContent = err.message;
      entryStatus.className = "panel__status is-error";
    }
  }

  document.getElementById("entryNewBtn").addEventListener("click", () => {
    entryForm.reset();
    entrySlug.value = "";
    formHeading.textContent = "new entry";
    entryDeleteBtn.hidden = true;
    entryStatus.textContent = "";
    document.querySelectorAll("#entryList li").forEach((li) => li.classList.remove("is-selected"));
  });

  entryForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const payload = {
      title: entryTitle.value.trim(),
      excerpt: entryExcerpt.value.trim(),
      body: entryBody.value,
      published_at: entryDate.value,
    };
    const isEdit = Boolean(entrySlug.value);

    try {
      if (isEdit) {
        await api(`/api/journal/${encodeURIComponent(entrySlug.value)}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
      } else {
        await api("/api/journal", { method: "POST", body: JSON.stringify(payload) });
      }
      entryStatus.textContent = "saved.";
      entryStatus.className = "panel__status is-success";
      await loadEntries();
    } catch (err) {
      if (err.message === "UNAUTHORIZED") return showLogin("session expired — sign in again");
      entryStatus.textContent = err.message;
      entryStatus.className = "panel__status is-error";
    }
  });

  entryDeleteBtn.addEventListener("click", async () => {
    if (!entrySlug.value) return;
    if (!confirm(`delete "${entryTitle.value}"? this can't be undone.`)) return;
    try {
      await api(`/api/journal/${encodeURIComponent(entrySlug.value)}`, { method: "DELETE" });
      document.getElementById("entryNewBtn").click();
      await loadEntries();
    } catch (err) {
      entryStatus.textContent = err.message;
      entryStatus.className = "panel__status is-error";
    }
  });

  /* ---------- subscribers ---------- */
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
