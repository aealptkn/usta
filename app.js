/* ===== İş Pedagojisi Quiz — iPhone & PWA Uyumlu Uygulama Mantığı ===== */
(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const screens = {
    start: $("screen-start"),
    quiz: $("screen-quiz"),
    pdf: $("screen-pdf"),
    result: $("screen-result"),
  };

  const els = {
    clock: $("clock"),
    btnTheme: $("btn-theme"),
    metaTheme: $("meta-theme-color"),
    infoCount: $("info-count"),
    btnResume: $("btn-resume"),
    resumeInfo: $("resume-info"),
    selectUnit: $("select-unit"),
    orderToggle: $("order-toggle"),
    btnReviewWrong: $("btn-review-wrong"),
    wrongCount: $("wrong-count"),
    qCounter: $("q-counter"),
    scoreBadge: $("score-badge"),
    progressBar: $("progress-bar"),
    qUnitTag: $("q-unit-tag"),
    questionText: $("question-text"),
    options: $("options"),
    explanationBox: $("explanation-box"),
    explanationTitle: $("explanation-title"),
    explanationText: $("explanation-text"),
    quizFooterActions: $("quiz-footer-actions"),
    btnNextQ: $("btn-next-q"),
    btnOpenRefPdf: $("btn-open-ref-pdf"),
    pdfViewport: $("pdf-viewport"),
    pdfCanvas: $("pdf-canvas"),
    pdfStatus: $("pdf-status"),
    pdfPageNum: $("pdf-page-num"),
    pdfPageTotal: $("pdf-page-total"),
    resultScore: $("result-score"),
    resultPct: $("result-pct"),
    resultTitle: $("result-title"),
    resultMsg: $("result-msg"),
    ringFill: $("ring-fill"),
    statCorrect: $("stat-correct"),
    statWrong: $("stat-wrong"),
  };

  const PDF_FILE = "materyal.pdf";
  const STORAGE_KEYS = {
    THEME: "ip_quiz_theme",
    STATE: "ip_quiz_saved_state",
    WRONGS: "ip_quiz_wrong_indices",
  };

  const LETTERS = ["A", "B", "C", "D"];

  let order = [];
  let current = 0;
  let correctCount = 0;
  let isReviewMode = false;
  let sortMode = "sequential";
  let locked = false;
  let previousScreen = "start";
  let currentRefPage = 1;

  /* --- 1. Kalıcı Tema Yönetimi --- */
  function applyTheme(theme) {
    const isLight = theme === "light";
    document.body.classList.toggle("light-theme", isLight);
    els.btnTheme.textContent = isLight ? "🌙" : "☀️";
    if (els.metaTheme) {
      els.metaTheme.setAttribute("content", isLight ? "#e5e5ea" : "#0b0b12");
    }
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }

  applyTheme(localStorage.getItem(STORAGE_KEYS.THEME) || "dark");

  els.btnTheme.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
    applyTheme(nextTheme);
  });

  /* --- 2. Saat --- */
  function tickClock() {
    const d = new Date();
    els.clock.textContent =
      String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
  }
  tickClock();
  setInterval(tickClock, 15000);

  /* --- 3. Yanlış Sorular ve Kayıtlı İlerleme --- */
  function getWrongList() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.WRONGS)) || [];
    } catch {
      return [];
    }
  }

  function saveWrongList(list) {
    const unique = [...new Set(list)].filter((idx) => QUESTIONS[idx]);
    localStorage.setItem(STORAGE_KEYS.WRONGS, JSON.stringify(unique));
    updateStartScreenUI();
  }

  function saveProgress() {
    if (isReviewMode) return;
    localStorage.setItem(STORAGE_KEYS.STATE, JSON.stringify({ order, current, correctCount }));
  }

  function clearProgress() {
    localStorage.removeItem(STORAGE_KEYS.STATE);
  }

  function getSavedProgress() {
    try {
      const s = JSON.parse(localStorage.getItem(STORAGE_KEYS.STATE));
      if (s && Array.isArray(s.order) && s.current < s.order.length) return s;
    } catch {}
    return null;
  }

  function updateStartScreenUI() {
    const wrongs = getWrongList();
    els.wrongCount.textContent = wrongs.length;
    els.btnReviewWrong.disabled = wrongs.length === 0;

    const saved = getSavedProgress();
    if (saved) {
      els.btnResume.classList.remove("hidden");
      els.resumeInfo.textContent = `Soru ${saved.current + 1} / ${saved.order.length}`;
    } else {
      els.btnResume.classList.add("hidden");
    }
  }

  /* --- 4. PDF.js Mobil Okuyucu (iPhone 16 Tüm Sayfalar & Yakınlaştırma) --- */
  let pdfDoc = null;
  let pdfPage = 1;
  let pdfScale = 1.0;
  let pdfRendering = false;
  let pdfPendingPage = null;

  if (window.pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  }

  function renderPdfPage(num) {
    if (!pdfDoc) return;
    pdfRendering = true;
    pdfDoc.getPage(num).then((page) => {
      const containerWidth = els.pdfViewport.clientWidth - 16;
      const unscaledViewport = page.getViewport({ scale: 1 });
      const fitScale = containerWidth / unscaledViewport.width;
      const finalScale = fitScale * pdfScale;

      const dpr = window.devicePixelRatio || 1;
      const viewport = page.getViewport({ scale: finalScale });
      const canvas = els.pdfCanvas;
      const ctx = canvas.getContext("2d");

      canvas.width = Math.floor(viewport.width * dpr);
      canvas.height = Math.floor(viewport.height * dpr);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const renderTask = page.render({ canvasContext: ctx, viewport: viewport });
      renderTask.promise.then(() => {
        pdfRendering = false;
        els.pdfStatus.classList.add("hidden");
        els.pdfPageNum.value = num;
        els.pdfViewport.scrollTop = 0;
        if (pdfPendingPage !== null) {
          const nextP = pdfPendingPage;
          pdfPendingPage = null;
          renderPdfPage(nextP);
        }
      });
    });
  }

  function queuePdfPage(num) {
    if (!pdfDoc) return;
    const target = Math.max(1, Math.min(pdfDoc.numPages, num));
    pdfPage = target;
    if (pdfRendering) {
      pdfPendingPage = target;
    } else {
      renderPdfPage(target);
    }
  }

  function openPdfAtPage(pageNum = 1, fromScreen = "start") {
    previousScreen = fromScreen;
    pdfScale = 1.0;
    show("pdf");

    if (!window.pdfjsLib) {
      els.pdfStatus.textContent = "PDF motoru yüklenemedi. İnternet bağlantınızı kontrol edin.";
      els.pdfStatus.classList.remove("hidden");
      return;
    }

    if (pdfDoc) {
      queuePdfPage(pageNum);
    } else {
      els.pdfStatus.textContent = "Ders kitabı yükleniyor (227 sayfa)...";
      els.pdfStatus.classList.remove("hidden");
      pdfjsLib.getDocument(PDF_FILE).promise.then((doc) => {
        pdfDoc = doc;
        els.pdfPageTotal.textContent = `/ ${doc.numPages}`;
        els.pdfPageNum.max = doc.numPages;
        queuePdfPage(pageNum);
      }).catch(() => {
        els.pdfStatus.textContent = "materyal.pdf bulunamadı. Dosya adını kontrol edin.";
      });
    }
  }

  $("btn-open-pdf").addEventListener("click", () => openPdfAtPage(1, "start"));
  els.btnOpenRefPdf.addEventListener("click", () => openPdfAtPage(currentRefPage, "quiz"));
  $("btn-close-pdf").addEventListener("click", () => show(previousScreen));

  $("btn-pdf-prev").addEventListener("click", () => queuePdfPage(pdfPage - 1));
  $("btn-pdf-next").addEventListener("click", () => queuePdfPage(pdfPage + 1));
  els.pdfPageNum.addEventListener("change", () => {
    const val = parseInt(els.pdfPageNum.value, 10);
    if (!isNaN(val)) queuePdfPage(val);
  });

  $("btn-zoom-in").addEventListener("click", () => {
    pdfScale = Math.min(3.0, pdfScale + 0.35);
    renderPdfPage(pdfPage);
  });
  $("btn-zoom-out").addEventListener("click", () => {
    pdfScale = Math.max(0.75, pdfScale - 0.35);
    renderPdfPage(pdfPage);
  });

  function extractPageFromExplanation(expText) {
    if (!expText) return 1;
    const match = expText.match(/Sayfa\s*(\d+)/i);
    return match ? parseInt(match[1], 10) : 1;
  }

  /* --- 5. Ekran ve Soru Filtreleme --- */
  function show(name) {
    Object.values(screens).forEach((s) => s.classList.remove("active"));
    screens[name].classList.add("active");
    if (name === "start") updateStartScreenUI();
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function filterIndices(mode) {
    return QUESTIONS.map((_, i) => i).filter((i) => {
      const qText = QUESTIONS[i].question;
      if (mode === "TEMEL") return !qText.startsWith("SENARYO:");
      if (mode === "SENARYO") return qText.startsWith("SENARYO:");
      return true;
    });
  }

  function startNewQuiz() {
    isReviewMode = false;
    let indices = filterIndices(els.selectUnit.value);
    if (sortMode === "random") indices = shuffle(indices);

    order = indices;
    current = 0;
    correctCount = 0;
    saveProgress();
    renderQuestion();
    show("quiz");
  }

  function resumeQuiz() {
    const saved = getSavedProgress();
    if (!saved) return;
    isReviewMode = false;
    order = saved.order;
    current = saved.current;
    correctCount = saved.correctCount;
    renderQuestion();
    show("quiz");
  }

  function startWrongReview() {
    const wrongs = getWrongList();
    if (wrongs.length === 0) return;
    isReviewMode = true;
    order = sortMode === "random" ? shuffle(wrongs) : [...wrongs];
    current = 0;
    correctCount = 0;
    renderQuestion();
    show("quiz");
  }

  function renderQuestion() {
    locked = false;
    const qIdx = order[current];
    const q = QUESTIONS[qIdx];

    els.qCounter.textContent = isReviewMode
      ? `Yanlış Tekrarı ${current + 1}/${order.length}`
      : `Soru ${current + 1}/${order.length}`;
    els.scoreBadge.textContent = `⭐ ${correctCount}`;
    els.progressBar.style.width = `${(current / order.length) * 100}%`;
    els.qUnitTag.textContent = q.question.startsWith("SENARYO:") ? "Atölye Senaryosu" : "İş Pedagojisi";
    els.questionText.textContent = q.question;

    els.explanationBox.classList.add("hidden");
    els.quizFooterActions.classList.add("hidden");
    els.btnOpenRefPdf.classList.add("hidden");
    els.options.innerHTML = "";

    q.options.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.innerHTML = `<span class="letter">${LETTERS[i]}</span><span>${text}</span>`;
      btn.addEventListener("click", () => onAnswer(i, btn));
      els.options.appendChild(btn);
    });
  }

  function onAnswer(choice, btn) {
    if (locked) return;
    locked = true;

    const qIdx = order[current];
    const q = QUESTIONS[qIdx];
    const buttons = [...els.options.children];
    buttons.forEach((b) => b.classList.add("disabled"));

    const wrongs = getWrongList();
    const expText = q.explanation || "MEB İş Pedagojisi Kursu Usta Öğreticilik Öğretim Materyali.";
    currentRefPage = extractPageFromExplanation(expText);

    if (choice === q.answer) {
      btn.classList.add("correct");
      correctCount++;
      els.scoreBadge.textContent = `⭐ ${correctCount}`;
      els.explanationTitle.textContent = "✓ Doğru Cevap!";
      els.explanationTitle.style.color = "var(--green)";
      navigator.vibrate?.(40);

      if (wrongs.includes(qIdx)) {
        saveWrongList(wrongs.filter((id) => id !== qIdx));
      }
    } else {
      btn.classList.add("wrong");
      buttons[q.answer].classList.add("reveal");
      els.explanationTitle.textContent = `✕ Yanlış! Doğru Cevap: ${LETTERS[q.answer]}`;
      els.explanationTitle.style.color = "var(--red)";
      navigator.vibrate?.([80, 60, 80]);

      if (!wrongs.includes(qIdx)) {
        saveWrongList([...wrongs, qIdx]);
      }

      // Yanlış cevapta ilgili sayfa butonunu göster
      els.btnOpenRefPdf.textContent = `📖 İlgili Bölümü Kitapta Aç (Sayfa ${currentRefPage})`;
      els.btnOpenRefPdf.classList.remove("hidden");
    }

    els.explanationText.textContent = expText;
    els.explanationBox.classList.remove("hidden");
    els.quizFooterActions.classList.remove("hidden");
  }

  function next() {
    current++;
    if (current < order.length) {
      saveProgress();
      renderQuestion();
    } else {
      if (!isReviewMode) clearProgress();
      showResult();
    }
  }

  function showResult() {
    const total = order.length;
    const wrong = total - correctCount;
    const pct = Math.round((correctCount / total) * 100);

    els.resultScore.textContent = `${correctCount}/${total}`;
    els.resultPct.textContent = `%${pct}`;
    els.statCorrect.textContent = correctCount;
    els.statWrong.textContent = wrong;

    if (pct >= 70) {
      els.resultTitle.textContent = "Tebrikler! 🎉";
      els.resultMsg.textContent = "Sınavı başarıyla geçtiniz. Usta öğreticilik sınavına hazırsınız!";
    } else if (pct >= 50) {
      els.resultTitle.textContent = "Fena değil 💪";
      els.resultMsg.textContent = "Yanlışlarınızı gözden geçirerek başarı oranınızı artırabilirsiniz.";
    } else {
      els.resultTitle.textContent = "Tekrar gerekli 📚";
      els.resultMsg.textContent = "Ana ekrandan Ders Kitabını (PDF) inceleyip yeniden deneyin.";
    }

    show("result");
    requestAnimationFrame(() => {
      const C = 326.7;
      els.ringFill.style.strokeDashoffset = String(C - (C * correctCount) / total);
    });
    els.progressBar.style.width = "100%";
  }

  /* --- 6. Olay Dinleyicileri --- */
  els.orderToggle.addEventListener("click", (e) => {
    const btn = e.target.closest(".seg-btn");
    if (!btn) return;
    sortMode = btn.dataset.mode;
    [...els.orderToggle.children].forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });

  els.btnNextQ.addEventListener("click", () => {
    if (locked) next();
  });

  document.addEventListener("keydown", (e) => {
    if (locked && (e.key === "Enter" || e.key === "ArrowRight")) {
      next();
    }
  });

  $("btn-start").addEventListener("click", startNewQuiz);
  els.btnResume.addEventListener("click", resumeQuiz);
  els.btnReviewWrong.addEventListener("click", startWrongReview);
  $("btn-home").addEventListener("click", () => {
    saveProgress();
    show("start");
  });
  $("btn-result-home").addEventListener("click", () => show("start"));
  $("btn-restart").addEventListener("click", () => {
    els.ringFill.style.strokeDashoffset = "326.7";
    isReviewMode ? startWrongReview() : startNewQuiz();
  });

  // Başlangıç verilerini yükle
  if (typeof QUESTIONS !== "undefined") {
    els.infoCount.textContent = `${QUESTIONS.length} soru`;
    els.selectUnit.options[0].textContent = `Tüm Sorular (${QUESTIONS.length})`;
  }
  updateStartScreenUI();

  /* --- 7. PWA Service Worker --- */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
})();
