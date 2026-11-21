(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  let auth = sessionStorage.getItem("arthic_admin_auth") || "";
  let questions = [], selected = null, busy = false, dirty = false;

  async function api(path, options = {}) {
    const response = await fetch(path, {
      ...options,
      headers: { ...(options.body ? { "Content-Type": "application/json" } : {}), ...(auth ? { Authorization: auth } : {}), ...(options.headers || {}) },
    });
    if (response.status === 401) throw new Error("UNAUTHORIZED");
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `request failed (${response.status})`);
    return data;
  }

  function login(message = "") {
    auth = ""; sessionStorage.removeItem("arthic_admin_auth");
    $("loginView").hidden = false; $("appView").hidden = true; $("loginError").textContent = message;
  }
  function showApp() {
    $("loginView").hidden = true; $("appView").hidden = false;
    loadSubscribers(); loadQuestions();
  }
  $("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    auth = "Basic " + btoa(`${$("loginUser").value.trim()}:${$("loginPass").value}`);
    try {
      await api("/api/subscribers");
      sessionStorage.setItem("arthic_admin_auth", auth);
      $("loginPass").value = ""; showApp();
    } catch { login("Could not sign in. Check the credentials and database configuration."); }
  });
  $("signOutBtn").addEventListener("click", () => login());

  let emails = [];
  async function loadSubscribers() {
    try {
      const items = await api("/api/subscribers");
      emails = items.map((item) => item.email);
      $("subCount").textContent = String(items.length);
      $("subList").replaceChildren();
      items.forEach((item) => {
        const li = document.createElement("li"), email = document.createElement("span"), date = document.createElement("span");
        email.textContent = item.email; date.textContent = item.created_at; li.append(email, date); $("subList").append(li);
      });
    } catch (error) { if (error.message === "UNAUTHORIZED") login("Session expired. Sign in again."); else $("subList").textContent = error.message; }
  }
  $("exportBtn").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(emails.join(", ")); $("exportStatus").textContent = `copied ${emails.length} emails.`; }
    catch { $("exportStatus").textContent = "clipboard unavailable."; }
  });

  const fields = { examCode:"qExam", subjectCode:"qSubject", topic:"qTopic", prompt:"qPrompt", instruction:"qInstruction", sourceKind:"qSource", sourceNote:"qSourceNote", difficulty:"qDifficulty", examYear:"qExamYear", examMonth:"qExamMonth", examSession:"qExamSession", explanation:"qExplanation", takeaway:"qTakeaway" };
  const list = $("questionList");
  const message = (text, error = false) => { $("questionStatus").textContent = text; $("questionStatus").dataset.error = String(error); };
  const options = () => $("qOptions").value.split("\n").map((line) => {
    const m = /^\s*([A-F])\s*[|:]\s*(.+?)\s*$/.exec(line);
    return m ? { key:m[1], text:m[2] } : null;
  }).filter(Boolean);
  const payload = () => {
    const data = Object.fromEntries(Object.entries(fields).map(([key,id]) => [key, $(id).value]));
    return {
      ...data,
      examYear: data.examYear ? Number(data.examYear) : null,
      examMonth: data.examMonth ? Number(data.examMonth) : null,
      examSession: data.examSession || null,
      options: options(),
      answerKey: $("qAnswer").value,
    };
  };

  function renderList() {
    $("questionCount").textContent = String(questions.length); list.replaceChildren();
    const filter = $("questionFilter").value;
    const shown = questions.filter((q) => filter === "draft" ? !q.is_published && !q.is_archived :
      filter === "published" ? q.is_published && !q.is_archived :
      filter === "archived" ? q.is_archived : true);
    if (!shown.length) { const p=document.createElement("p"); p.className="empty-state"; p.textContent="No questions in this view yet."; list.append(p); return; }
    shown.forEach((q) => {
      const button=document.createElement("button"), title=document.createElement("strong"), prompt=document.createElement("span"), meta=document.createElement("small");
      button.type="button"; button.className="question-list__item"+(selected?.id===q.id?" is-selected":"");
      title.textContent=q.topic; prompt.textContent=q.prompt;
      const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      const provenance = q.source_kind === "past-paper" && q.exam_year && q.exam_month
        ? `${monthNames[q.exam_month - 1]} ${q.exam_year}`
        : "original / licensed";
      meta.textContent=`${q.exam_code} · ${q.subject_code} · ${q.difficulty || "STANDARD"} · ${provenance} · ${q.is_archived?"archived":q.is_published?"published":"draft"}`;
      button.append(title,prompt,meta); button.addEventListener("click",()=>edit(q)); list.append(button);
    });
  }

  function edit(q) {
    selected=q; dirty=false; $("questionForm").reset();
    if(q) {
      Object.entries(fields).forEach(([key,id]) => {
        const snake=key.replace(/[A-Z]/g,(letter)=>"_"+letter.toLowerCase());
        $(id).value=q[key]??q[snake]??"";
      });
      $("qAnswer").value=q.answer_key||"A";
      $("qOptions").value=(q.options||[]).map((o)=>`${o.key} | ${o.text}`).join("\n");
      $("editorMode").textContent=q.is_archived?"ARCHIVED":q.is_published?"PUBLISHED":"DRAFT";
      $("editorTitle").textContent=q.topic; $("editorVersion").textContent="v"+q.version;
    } else {
      $("qSubject").value="BIO"; $("qInstruction").value="Choose one answer.";
      $("editorMode").textContent="NEW DRAFT"; $("editorTitle").textContent="Create a question"; $("editorVersion").textContent="";
    }
    $("questionPreview").hidden=true; message("");
    updatePaperDateVisibility();
    $("saveQuestionBtn").disabled=Boolean(q?.is_archived);
    $("publishQuestionBtn").disabled=!q||q.is_archived;
    $("unpublishQuestionBtn").disabled=!q||!q.is_published;
    $("archiveQuestionBtn").disabled=!q||q.is_archived;
    renderList();
  }

  async function loadQuestions() {
    try {
      const result=await api("/api/admin/questions"); questions=result.questions||[];
      if(selected) selected=questions.find((q)=>q.id===selected.id)||null;
      renderList();
      if(selected) edit(selected); else if(questions.length) edit(questions[0]);
    } catch(error) {
      if(error.message==="UNAUTHORIZED") login("Session expired. Sign in again.");
      else list.textContent=error.message;
    }
  }

  function updatePaperDateVisibility() {
    const isPastPaper = $("qSource").value === "past-paper";
    $("paperDateFields").hidden = !isPastPaper;
    $("qExamYear").required = isPastPaper;
    $("qExamMonth").required = isPastPaper;
  }

  $("qSource").addEventListener("change", updatePaperDateVisibility);

  function setBusy(value) {
    busy = value;
    $("saveQuestionBtn").disabled = value || Boolean(selected?.is_archived);
    $("publishQuestionBtn").disabled = value || !selected || Boolean(selected.is_archived) || dirty;
    $("unpublishQuestionBtn").disabled = value || !selected || !selected.is_published || dirty;
    $("archiveQuestionBtn").disabled = value || !selected || Boolean(selected.is_archived) || dirty;
    $("newQuestionBtn").disabled = value;
  }
  async function save(event) {
    event?.preventDefault(); if(busy) return;
    setBusy(true);
    try {
      const data=payload();
      const result=selected
        ? await api("/api/admin/questions",{method:"PATCH",body:JSON.stringify({...data,id:selected.id,action:"save",expectedVersion:selected.version})})
        : await api("/api/admin/questions",{method:"POST",body:JSON.stringify(data)});
      selected=result.question; dirty=false; await loadQuestions();
      if(selected) edit(selected);
      message("Saved as a draft. Publish when ready.");
    } catch(error) {
      if(error.message==="UNAUTHORIZED") login("Session expired. Sign in again.");
      else message(error.message,true);
    } finally { setBusy(false); }
  }
  async function action(type) {
    if(!selected||busy) return;
    if(dirty) return message("Save or discard your edits before changing publication status.",true);
    if(type==="archive"&&!window.confirm("Archive this question? It will disappear from the published feed.")) return;
    setBusy(true);
    try {
      await api("/api/admin/questions",{method:"PATCH",body:JSON.stringify({id:selected.id,action:type})});
      selected=null; await loadQuestions();
      message(type==="publish"?"Question published.":type==="unpublish"?"Question returned to drafts.":"Question archived.");
    } catch(error) {
      if(error.message==="UNAUTHORIZED") login("Session expired. Sign in again.");
      else message(error.message,true);
    } finally { setBusy(false); }
  }
  function preview() {
    const q=payload();
    const level = q.difficulty === "CHALLENGING" ? "Challenging" : q.difficulty === "EASY" ? "Easy" : "Standard";
    const source = q.sourceKind === "past-paper" && q.examYear && q.examMonth
      ? `${q.examYear}-${String(q.examMonth).padStart(2,"0")} · ${q.sourceNote}`
      : q.sourceNote || "Original Arthic practice · not an official past paper";
    $("previewTopic").textContent=`${q.examCode} · ${q.subjectCode} · ${level} · ${source}`;
    $("previewPrompt").textContent=q.prompt; $("previewInstruction").textContent=q.instruction;
    $("previewOptions").replaceChildren();
    q.options.forEach((o)=>{const li=document.createElement("li");li.textContent=o.text;if(o.key===q.answerKey)li.dataset.correct="true";$("previewOptions").append(li);});
    $("previewAnswer").textContent="Correct option: "+q.answerKey;
    $("previewExplanation").textContent=q.explanation; $("previewTakeaway").textContent=q.takeaway;
    $("questionPreview").hidden=false;
  }

  document.querySelectorAll("[data-tab]").forEach((button)=>button.addEventListener("click",()=>{
    document.querySelectorAll("[data-tab]").forEach((item)=>item.classList.toggle("is-active",item===button));
    $("subscribersPanel").classList.toggle("is-active",button.dataset.tab==="subscribers");
    $("questionsPanel").classList.toggle("is-active",button.dataset.tab==="questions");
    if(button.dataset.tab==="questions")loadQuestions();
  }));
  $("questionFilter").addEventListener("change",renderList);
  $("newQuestionBtn").addEventListener("click",()=>edit(null));
  $("questionForm").addEventListener("input",()=>{dirty=true;$("publishQuestionBtn").disabled=true;$("unpublishQuestionBtn").disabled=true;$("archiveQuestionBtn").disabled=true;});
  $("questionForm").addEventListener("submit",save);
  $("previewQuestionBtn").addEventListener("click",preview);
  $("closePreviewBtn").addEventListener("click",()=>{$("questionPreview").hidden=true;});
  $("publishQuestionBtn").addEventListener("click",()=>action("publish"));
  $("unpublishQuestionBtn").addEventListener("click",()=>action("unpublish"));
  $("archiveQuestionBtn").addEventListener("click",()=>action("archive"));
  if(auth)showApp();
})();
