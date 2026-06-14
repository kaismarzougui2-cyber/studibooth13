/* ============================================
   StudiBooth — Interactions
   ============================================ */
(function () {
  "use strict";

  /* ---- Année footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Header au scroll + CTA flottant ---- */
  var header = document.getElementById("header");
  var floatingCta = document.querySelector(".floating-cta");
  var onScroll = function () {
    var y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 20);
    if (floatingCta) floatingCta.classList.toggle("is-visible", y > 700);
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
    ".section__head, .card, .occasion, .gallery__item, .step, .plan, .testimonial, .zone__text, .zone__map, .faq__item, .contact__form, .contact__intro"
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Formulaire de contact ---- */
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form__status";

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailOk) {
        status.textContent = "Merci de renseigner votre nom et un email valide.";
        status.classList.add("is-error");
        return;
      }

      // Démo front : pas de backend. Construit un lien mailto pré-rempli.
      var subject = encodeURIComponent("Demande de devis StudiBooth — " + name);
      var bodyLines = [
        "Nom : " + name,
        "Email : " + email,
        "Téléphone : " + (form.phone.value || "-"),
        "Occasion : " + (form.occasion.value || "-"),
        "Prestation : " + (form.prestation.value || "-"),
        "Date : " + (form.date.value || "-"),
        "Ville : " + (form.city.value || "-"),
        "",
        "Message :",
        form.message.value || "-"
      ];
      var body = encodeURIComponent(bodyLines.join("\n"));

      status.textContent = "Merci " + name + " ! Votre messagerie va s'ouvrir pour finaliser l'envoi. Réponse sous 24h.";
      status.classList.add("is-success");
      form.reset();

      window.setTimeout(function () {
        window.location.href = "mailto:contact@studibooth.fr?subject=" + subject + "&body=" + body;
      }, 600);
    });
  }
})();
