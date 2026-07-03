/* AA Premier Roofing & Construction — interaction layer */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // ?static renders the page fully-visible with native scroll (static review harness / QA)
  if (/[?&]static/.test(window.location.search)) reduce = true;
  var hasGSAP = !!(window.gsap && window.ScrollTrigger);
  if (hasGSAP) gsap.registerPlugin(ScrollTrigger);

  /* ---------- Year ---------- */
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Nav scrolled state + mobile action bar ---------- */
  var nav = document.getElementById("nav");
  var mobBar = document.getElementById("mobBar");
  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 24);
    if (mobBar) mobBar.classList.toggle("show", window.scrollY > window.innerHeight * 0.7);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById("burger");
  var menu = document.getElementById("mobileMenu");
  var closeBtn = document.getElementById("closeMenu");
  function openMenu() { menu.classList.add("open"); burger.setAttribute("aria-expanded", "true"); document.body.style.overflow = "hidden"; }
  function closeMenu() { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; }
  if (burger) burger.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  menu && menu.querySelectorAll("[data-close]").forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  /* ---------- Smooth scroll (Lenis) + GSAP sync ---------- */
  var lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true, lerp: 0.11 });
    window.__lenis = lenis;
    if (hasGSAP) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
    }
  }

  /* ---------- Anchor links -> smooth scroll with nav offset ---------- */
  var NAV_OFFSET = 68;
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -NAV_OFFSET });
      else target.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Hero video: right-size source, pause offscreen, ensure playback ---------- */
  var vid = document.getElementById("heroVid");
  if (vid) {
    var saveData = !!(navigator.connection && navigator.connection.saveData);
    if (reduce || saveData) {
      try { vid.pause(); vid.removeAttribute("autoplay"); } catch (e) {}
      if (saveData) { var h = vid.closest(".hero"); if (h) h.classList.add("no-video"); }
    }
    else {
      // phones get the 0.5MB encode instead of the 5MB one
      if (window.matchMedia("(max-width: 640px)").matches) { vid.src = "assets/video/hero-360.mp4"; vid.load(); }
      var tryPlay = vid.play(); if (tryPlay && tryPlay.catch) tryPlay.catch(function () {});
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(function (en) {
          en.forEach(function (e) { if (e.isIntersecting) { vid.play().catch(function () {}); } else { vid.pause(); } });
        }, { threshold: 0.05 }).observe(vid);
      }
    }
  }

  /* ---------- SIGNATURE: Anatomy of a Premium Roof ---------- */
  var layers = Array.prototype.slice.call(document.querySelectorAll(".roof-layer"));
  var pins = Array.prototype.slice.call(document.querySelectorAll(".roof-label"));
  var steps = Array.prototype.slice.call(document.querySelectorAll(".astep"));

  function showAllRoof() {
    layers.forEach(function (l) { l.style.opacity = 1; l.style.transform = "none"; });
    pins.forEach(function (p) { p.style.opacity = 1; });
    steps.forEach(function (s) { s.classList.add("active"); });
  }

  if (!steps.length) { /* nothing */ }
  else if (reduce || !hasGSAP) { showAllRoof(); }
  else {
    // initial hidden offsets for a subtle build-up
    layers.forEach(function (l) { gsap.set(l, { opacity: 0, y: 16 }); });
    pins.forEach(function (p) { gsap.set(p, { opacity: 0 }); });

    function setActive(n) {
      layers.forEach(function (l) {
        var idx = +l.getAttribute("data-layer");
        gsap.to(l, { opacity: idx <= n ? 1 : 0, y: idx <= n ? 0 : 16, duration: 0.5, ease: "power2.out", overwrite: true });
      });
      pins.forEach(function (p) {
        var idx = +p.getAttribute("data-layer");
        gsap.to(p, { opacity: idx <= n ? 1 : 0, duration: 0.4, overwrite: true });
      });
      steps.forEach(function (s) { s.classList.toggle("active", +s.getAttribute("data-step") === n); });
    }

    setActive(1);
    steps.forEach(function (step, i) {
      ScrollTrigger.create({
        trigger: step,
        start: "top 58%",
        end: "bottom 42%",
        onEnter: function () { setActive(i + 1); },
        onEnterBack: function () { setActive(i + 1); }
      });
    });

    ScrollTrigger.refresh();
  }

  /* ---------- Before/After comparison sliders ---------- */
  document.querySelectorAll(".ba").forEach(function (ba) {
    var r = ba.querySelector(".ba-range");
    if (!r) return;
    var upd = function () { ba.style.setProperty("--pos", r.value + "%"); };
    r.addEventListener("input", upd);
    upd();
  });

  /* ---------- Lead form (CRM-ready) ---------- */
  var form = document.getElementById("leadForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var endpoint = form.getAttribute("data-crm-endpoint");
      var payload = {};
      new FormData(form).forEach(function (v, k) { payload[k] = v; });
      payload.source = "aapremierroofing.com";
      payload.submittedAt = new Date().toISOString();

      function done() {
        form.classList.add("sent");
        var ok = document.getElementById("formOk");
        if (ok) ok.classList.add("show");
        if (lenis) lenis.scrollTo(form, { offset: -120 }); else form.scrollIntoView({ behavior: "smooth" });
      }
      // When a CRM/webhook endpoint (JobNimbus / AccuLynx / Zapier) is set on the form, POST the lead.
      if (endpoint) {
        fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
          .then(done).catch(done);
      } else {
        done();
      }
    });
  }
})();
