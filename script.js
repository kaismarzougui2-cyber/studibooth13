/* ============================================
   StudioBooth13 — Interactions partagées
   ============================================ */
(function () {
  "use strict";

  /* ---- Année footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Header au scroll + FAB "Réserver" ---- */
  var header = document.getElementById("header");
  var fabBook = document.querySelector(".fab--reveal");
  var onScroll = function () {
    var y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 20);
    if (fabBook) fabBook.classList.toggle("is-visible", y > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Menu mobile ---- */
  var navToggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  var closeNav = function () {
    if (!nav || !navToggle) return;
    nav.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
  }

  /* ---- Reveal au scroll ---- */
  var revealTargets = document.querySelectorAll(
    ".section__head, .card, .step, .gallery__item, .testimonial, .plan, .option," +
    " .split__visual, .split__content, .faq__item, .contact__form, .contact__intro," +
    " .included-banner, .price-table-wrap, .cta-band, .pricing-group__head"
  );
  revealTargets.forEach(function (el, i) {
    el.setAttribute("data-reveal", "");
    el.style.transitionDelay = (i % 4) * 70 + "ms";
  });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Formulaire de réservation ---- */
  var form = document.getElementById("bookingForm");
  var status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form__status";

      var name = (form.name && form.name.value.trim()) || "";
      var email = (form.email && form.email.value.trim()) || "";
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailOk) {
        status.textContent = "Merci de renseigner votre nom et un email valide.";
        status.classList.add("is-error");
        return;
      }

      var get = function (n) { return form[n] ? (form[n].value || "-") : "-"; };
      var subject = encodeURIComponent("Réservation StudioBooth13 — " + name);
      var bodyLines = [
        "Nom complet : " + name,
        "Email : " + email,
        "Téléphone : " + get("phone"),
        "Type d'événement : " + get("eventType"),
        "Produit souhaité : " + get("product"),
        "Date de l'événement : " + get("date"),
        "Option Animateur : " + get("animator"),
        "",
        "Message :",
        get("message")
      ];
      var body = encodeURIComponent(bodyLines.join("\n"));

      status.textContent =
        "Réservation envoyée — Nous vous contacterons très rapidement pour confirmer. Votre messagerie va s'ouvrir.";
      status.classList.add("is-success");
      form.reset();

      window.setTimeout(function () {
        window.location.href =
          "mailto:studiobooth13@outlook.com?subject=" + subject + "&body=" + body;
      }, 700);
    });
  }
})();
