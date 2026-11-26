/* ===== İş Pedagojisi Quiz — Uygulama Mantığı ===== */
(() => {
  "use strict";

  const PDF_FILE = "materyal.pdf";

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
    btnOpenPdf: $("btn-open-pdf"),
    btnClosePdf: $("btn-close-pdf"),
    btnExtPdf: $("btn-ext-pdf"),
    pdfPageLabel: $("pdf-page-label"),
    pdfIframe: $("pdf-iframe"),
    qCounter: $("q-counter"),
    scoreBadge: $("score-badge"),
    progressBar: $("progress-bar"),
    qUnitTag: $("q-unit-tag"),
    questionText: $("question-text"),
    options: $("options"),
    feedbackArea: $("feedback-area"),
    feedback: $("feedback"),
    explanationBox: $("explanation-box"),
    btnNext: $("btn-next"),
    btnWrongBook: $("btn-wrong-book"),
    resultScore: $("result-score"),
    resultPct: $("result-pct"),
    resultTitle: $("result-title"),
    resultMsg: $("result-msg"),
    ringFill: $("ring-fill"),
    statCorrect: $("stat-correct"),
    statWrong: $("stat-wrong"),
  };

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
  let lastScreenBeforePdf = "start";
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

  /* --- 3. Hafıza ve Yanlış Listesi --- */
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

  /* --- 4. Sayfa Numarası Çıkarımı ve Açıklama --- */
  function extractPageNumber(expText) {
    if (!expText) return 1;
    const match = expText.match(/Sayfa\s*(\d+)/i);
    return match ? parseInt(match[1], 10) : 1;
  }

  function getFallbackExplanation(q) {
    const t = q.question.toLowerCase();
    if (t.includes("3308") || t.includes("kalfa") || t.includes("çırak") || t.includes("asgari ücret") || t.includes("sözleşme") || t.includes("myk") || t.includes("önceki öğrenme")) {
      return "1. Öğrenme Birimi: Mesleki Eğitim (MEB Öğretim Materyali, Sayfa 10–30).";
    }
    if (t.includes("ahilik") || t.includes("etik") || t.includes("şed") || t.includes("tarafsızlık") || t.includes("gizlilik")) {
      return "2. Öğrenme Birimi: Meslek Etiği ve Ahilik (MEB Öğretim Materyali, Sayfa 32–41).";
    }
    if (t.includes("iş sağlığı") || t.includes("kaza") || t.includes("baret") || t.includes("maske") || t.includes("risk") || t.includes("ergonomi") || t.includes("tezgâh") || t.includes("forklift")) {
      return "3. Öğrenme Birimi: İş Sağlığı ve Güvenliği (MEB Öğretim Materyali, Sayfa 42–111).";
    }
    if (t.includes("iletişim") || t.includes("gürültü") || t.includes("dönüt") || t.includes("beden dili") || t.includes("göz temas") || t.includes("tokalaşma")) {
      return "4. Öğrenme Birimi: İletişim ve Beden Dili (MEB Öğretim Materyali, Sayfa 112–137).";
    }
    if (t.includes("psikoloji") || t.includes("davranış") || t.includes("gelişim") || t.includes("bilişsel") || t.includes("hazırbulunuşluk") || t.includes("olgunlaşma")) {
      return "5. Öğrenme Birimi: Eğitim Psikolojisi (MEB Öğretim Materyali, Sayfa 138–155).";
    }
    if (t.includes("öğretim") || t.includes("yöntem") || t.includes("takdim") || t.includes("hazırlık") || t.includes("ergenlik") || t.includes("gösteri")) {
      return "6. Öğrenme Birimi: Mesleki Öğretim Yöntem ve Teknikleri (MEB Öğretim Materyali, Sayfa 156–171).";
    }
    if (t.includes("modül") || t.includes("çerçeve") || t.includes("ders") || t.includes("yıllık plan") || t.includes("hafta")) {
      return "7. Öğrenme Birimi: Öğretim Programı Uygulamaları (MEB Öğretim Materyali, Sayfa 172–197).";
    }
    if (t.includes("kalite") || t.includes("verimlilik") || t.includes("maliyet") || t.includes("marka") || t.includes("patent") || t.includes("coğrafi") || t.includes("faydalı model") || t.includes("iso") || t.includes("haccp")) {
      return "8. Öğrenme Birimi: Kalite ve Verimlilik (MEB Öğretim Materyali, Sayfa 198–211).";
    }
    return "9. Öğrenme Birimi: Ölçme ve Değerlendirme Yöntemleri (MEB Öğretim Materyali, Sayfa 212–224).";
  }

  /* --- 5. Ekran Geçişleri ve Uygulama İçi PDF Okuyucu --- */
  function show(name) {
    Object.values(screens).forEach((s) => s.classList.remove("active"));
    screens[name].classList.add("active");
    if (name === "start") updateStartScreenUI();
  }

  function openPdfViewer(pageNum, returnToScreen) {
    lastScreenBeforePdf = returnToScreen;
    const page = pageNum && pageNum > 0 ? pageNum : 1;
    const targetUrl = `${PDF_FILE}#page=${page}`;
    els.pdfPageLabel.textContent = page > 1 ? `Öğretim Materyali (Sayfa ${page})` : "Öğretim Materyali (PDF)";
    els.btnExtPdf.href = targetUrl;
    els.pdfIframe.src = targetUrl;
    show("pdf");
  }

  els.btnOpenPdf.addEventListener("click", () => openPdfViewer(1, "start"));
  els.btnWrongBook.addEventListener("click", () => openPdfViewer(currentRefPage, "quiz"));
  els.btnClosePdf.addEventListener("click", () => {
    els.pdfIframe.src = "about:blank";
    show(lastScreenBeforePdf);
  });

  /* --- 6. Sınav Mantığı --- */
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
      const isScenario = QUESTIONS[i].question.startsWith("SENARYO:");
      if (mode === "SENARYO") return isScenario;
      if (mode === "TEMEL") return !isScenario;
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
    els.qUnitTag.textContent = q.question.startsWith("SENARYO:") ? "Atölye & Uygulama Senaryosu" : "İş Pedagojisi Soru Havuzu";
    els.questionText.textContent = q.question;

    els.feedbackArea.classList.add("hidden");
    els.btnWrongBook.classList.add("hidden");
    els.feedback.textContent = "";
    els.feedback.className = "feedback";
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
    const expText = q.explanation || getFallbackExplanation(q);
    currentRefPage = extractPageNumber(expText);

    els.explanationBox.innerHTML = `<strong>📖 Kitap Kaynağı ve Açıklama:</strong>${expText}`;
    els.feedbackArea.classList.remove("hidden");
    els.btnNext.textContent = current + 1 < order.length ? "Sonraki Soru ➔" : "Sınavı Bitir 🏁";

    if (choice === q.answer) {
      btn.classList.add("correct");
      correctCount++;
      els.scoreBadge.textContent = `⭐ ${correctCount}`;
      els.feedback.textContent = "Doğru Cevap! ✓";
      els.feedback.classList.add("ok");
      els.btnWrongBook.classList.add("hidden");
      navigator.vibrate?.(40);

      if (wrongs.includes(qIdx)) {
        saveWrongList(wrongs.filter((id) => id !== qIdx));
      }
    } else {
      btn.classList.add("wrong");
      buttons[q.answer].classList.add("reveal");
      els.feedback.textContent = `Yanlış! Doğru Cevap: ${LETTERS[q.answer]}`;
      els.feedback.classList.add("no");

      // Yanlış cevapta ilgili kitap sayfasını açma butonunu göster
      els.btnWrongBook.textContent = currentRefPage > 1
        ? `📖 İlgili Bölümü Kitapta Aç (Sayfa ${currentRefPage})`
        : "📖 İlgili Bölümü Kitapta Aç (PDF)";
      els.btnWrongBook.classList.remove("hidden");

      navigator.vibrate?.();

      if (!wrongs.includes(qIdx)) {
        saveWrongList([...wrongs, qIdx]);
      }
    }
  }

  function next() {
    if (!locked) return;
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

  /* --- 7. Olay Dinleyicileri --- */
  els.orderToggle.addEventListener("click", (e) => {
    const btn = e.target.closest(".seg-btn");
    if (!btn) return;
    sortMode = btn.dataset.mode;
    [...els.orderToggle.children].forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });

  $("btn-start").addEventListener("click", startNewQuiz);
  els.btnResume.addEventListener("click", resumeQuiz);
  els.btnReviewWrong.addEventListener("click", startWrongReview);
  els.btnNext.addEventListener("click", next);

  document.addEventListener("keydown", (e) => {
    if (screens.quiz.classList.contains("active") && locked && (e.key === "Enter" || e.key === "ArrowRight")) {
      next();
    }
  });

  $("btn-home").addEventListener("click", () => {
    saveProgress();
    show("start");
  });
  $("btn-result-home").addEventListener("click", () => show("start"));
  $("btn-restart").addEventListener("click", () => {
    els.ringFill.style.strokeDashoffset = "326.7";
    isReviewMode ? startWrongReview() : startNewQuiz();
  });

  if (typeof QUESTIONS !== "undefined") {
    els.infoCount.textContent = `${QUESTIONS.length} soru`;
    els.selectUnit.options.textContent = `Tüm Sorular (${QUESTIONS.length})`;
  }
  updateStartScreenUI();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
})();
