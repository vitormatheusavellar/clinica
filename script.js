(function () {
  "use strict";

  const WHATSAPP_NUMBER = "5521993785466";

  const CLINIC = {
    name: "JS Massoterapia",
    fullName: "Clínica Massoterapia e Estética JS Massoterapia",
    instagramUrl: "https://www.instagram.com/jsmassoterapia_/",
    mapsUrl: "https://share.google/ajtnzSrm15v9oneCG"
  };

  const ICONS = {
    spa: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 42c8.8-6.2 14-13.4 14-20.4C38 14.2 32 10 24 16 16 10 10 14.2 10 21.6 10 28.6 15.2 35.8 24 42Z" stroke="currentColor" stroke-width="1.6"/><path d="M24 16c2.4-4.8 7.6-7.4 14-6.2-1.8 5.2-6.6 8.4-14 8.4-7.4 0-12.2-3.2-14-8.4C16.4 8.6 21.6 11.2 24 16Z" stroke="currentColor" stroke-width="1.6"/></svg>',
    hands: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M14 28c0-6 4-12 10-14 6 2 10 8 10 14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M18 34c1.6 4 3.8 6 6 6s4.4-2 6-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M16 22.5c-2.4-1-4.8.2-5.2 2.8-.4 2.6 1.4 4.4 3.6 5.2M32 22.5c2.4-1 4.8.2 5.2 2.8.4 2.6-1.4 4.4-3.6 5.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    drop: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 8c6 8.4 12 14.8 12 22a12 12 0 0 1-24 0c0-7.2 6-13.6 12-22Z" stroke="currentColor" stroke-width="1.6"/><path d="M20 30c1.2 2.6 3 4 4.8 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    leaf: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M12 32c10-16 18-20 26-22-2 10-6 20-18 26-4 2-8 0-8-4Z" stroke="currentColor" stroke-width="1.6"/><path d="M18 28c4-4 10-8 18-12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    pin: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 8v28" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="24" cy="16" r="6" stroke="currentColor" stroke-width="1.6"/><path d="M24 36c0 2.8-1.8 4.8-4 4.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    flower: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="24" r="4" stroke="currentColor" stroke-width="1.6"/><path d="M24 10c4 4 4 8 0 10-4-2-4-6 0-10ZM24 38c-4-4-4-8 0-10 4 2 4 6 0 10ZM10 24c4-4 8-4 10 0-2 4-6 4-10 0ZM38 24c-4 4-8 4-10 0 2-4 6-4 10 0Z" stroke="currentColor" stroke-width="1.6"/></svg>',
    wave: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M8 20c4 4 8 4 12 0s8-4 12 0 8 4 12 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M8 28c4 4 8 4 12 0s8-4 12 0 8 4 12 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    spark: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 8l2.4 10.6L36 24l-9.6 5.4L24 40l-2.4-10.6L12 24l9.6-5.4L24 8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>'
  };

  const SERVICES = [
    {
      id: "massagem-relaxante",
      name: "Massagem Relaxante",
      priceLabel: "R$ 100",
      category: "massoterapia",
      description: "Toques suaves para aliviar o ritmo do dia e promover um momento de relaxamento.",
      icon: "spa"
    },
    {
      id: "liberacao-miofascial",
      name: "Liberação Miofascial",
      priceLabel: "R$ 120",
      category: "massoterapia",
      description: "Técnica manual para soltar tensões e devolver mais conforto ao corpo.",
      icon: "hands"
    },
    {
      id: "ventosaterapia",
      name: "Ventosaterapia",
      priceLabel: "R$ 80",
      category: "terapias",
      description: "Aplicação de ventosas para estimular a circulação e favorecer o bem-estar.",
      icon: "drop"
    },
    {
      id: "massagem-desportiva",
      name: "Massagem Desportiva",
      priceLabel: "R$ 140",
      category: "massoterapia",
      description: "Foco em músculos trabalhados, para quem busca preparação ou recuperação.",
      icon: "leaf"
    },
    {
      id: "dry-needling",
      name: "Dry Needling",
      priceLabel: "R$ 100",
      category: "terapias",
      description: "Técnica com agulhas finas em pontos de tensão, de forma pontual e cuidadosa.",
      icon: "pin"
    },
    {
      id: "auriculoterapia",
      name: "Auriculoterapia",
      priceLabel: "R$ 70",
      category: "terapias",
      description: "Estimulação de pontos na orelha para apoiar o equilíbrio e o relaxamento.",
      icon: "flower"
    },
    {
      id: "drenagem-linfatica",
      name: "Drenagem Linfática",
      priceLabel: "R$ 100",
      category: "estetica",
      description: "Manobras rítmicas e leves voltadas ao conforto e à leveza corporal.",
      icon: "wave"
    },
    {
      id: "limpeza-de-pele",
      name: "Limpeza de Pele",
      priceLabel: "R$ 100",
      category: "estetica",
      description: "Cuidado estético para higienizar e revitalizar a aparência da pele.",
      icon: "spark"
    }
  ];

  const DEFAULT_MESSAGE =
    "Olá! Gostaria de agendar um horário na Clínica Massoterapia e Estética JS Massoterapia.";

  function trackEvent(name, payload) {
    const event = Object.assign(
      {
        event: name,
        timestamp: new Date().toISOString()
      },
      payload || {}
    );
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
    window.dispatchEvent(new CustomEvent("clinic:analytics", { detail: event }));
  }

  function openWhatsApp(message, source) {
    const text = message && String(message).trim() ? String(message).trim() : DEFAULT_MESSAGE;
    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
    trackEvent("whatsapp_click", {
      source: source || "unknown",
      has_custom_message: Boolean(message && String(message).trim())
    });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function serviceMessage(name, price) {
    return "Olá! Gostaria de agendar *" + name + "* (" + price + ") na Clínica Massoterapia e Estética JS Massoterapia.";
  }

  function bookingMessage(data) {
    const lines = [
      "Olá! Gostaria de agendar um horário na JS Massoterapia.",
      "",
      "Nome: " + data.name,
      "Serviço: " + data.service,
      "Data: " + data.date,
      "Horário: " + data.time
    ];
    if (data.message) lines.push("Mensagem: " + data.message);
    return lines.join("\n");
  }

  function formatDate(value) {
    if (!value) return "";
    const parts = value.split("-");
    return parts[2] + "/" + parts[1] + "/" + parts[0];
  }

  function formatTime(value) {
    if (!value) return "";
    const parts = value.split(":");
    return parts[0] + "h" + parts[1];
  }

  function renderServices() {
    const grid = document.getElementById("service-grid");
    const select = document.getElementById("booking-service");
    if (!grid) return;

    grid.innerHTML = SERVICES.map(function (service) {
      return (
        '<article class="service-card" data-category="' +
        service.category +
        '" data-service-id="' +
        service.id +
        '">' +
        '<div class="service-icon" aria-hidden="true">' +
        (ICONS[service.icon] || ICONS.spa) +
        "</div>" +
        "<h3>" +
        service.name +
        "</h3>" +
        "<p>" +
        service.description +
        "</p>" +
        '<div class="service-meta">' +
        '<span class="price">' +
        service.priceLabel +
        "</span>" +
        '<button class="btn btn-outline" type="button" data-service-book="' +
        service.id +
        '" aria-label="Agendar ' +
        service.name +
        " por " +
        service.priceLabel +
        '">Agendar</button>' +
        "</div></article>"
      );
    }).join("");

    if (select) {
      const current = select.value;
      select.innerHTML =
        '<option value="">Selecione um serviço</option>' +
        SERVICES.map(function (service) {
          return (
            '<option value="' +
            service.name +
            '">' +
            service.name +
            " — " +
            service.priceLabel +
            "</option>"
          );
        }).join("");
      if (current) select.value = current;
    }
  }

  function initHeader() {
    const header = document.getElementById("header");
    if (!header) return;
    const onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initMenuMobile() {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.getElementById("mobile-menu");
    if (!toggle || !menu) return;

    const close = function () {
      menu.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
      toggle.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    };

    const open = function () {
      menu.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Fechar menu");
      toggle.classList.add("is-open");
      document.body.classList.add("menu-open");
    };

    toggle.addEventListener("click", function () {
      if (menu.hidden) open();
      else close();
    });

    menu.addEventListener("click", function (event) {
      if (event.target === menu || event.target.closest("a") || event.target.closest("[data-whatsapp]")) {
        close();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") close();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 960) close();
    });
  }

  function initFilters() {
    const buttons = document.querySelectorAll("[data-filter]");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const filter = btn.getAttribute("data-filter");
        buttons.forEach(function (item) {
          const active = item === btn;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", active ? "true" : "false");
        });
        document.querySelectorAll(".service-card").forEach(function (card) {
          card.hidden = !(filter === "todos" || card.getAttribute("data-category") === filter);
        });
        trackEvent("service_filter", { filter: filter });
      });
    });
  }

  function initServiceCards() {
    const grid = document.getElementById("service-grid");
    if (!grid) return;
    grid.addEventListener("click", function (event) {
      const btn = event.target.closest("[data-service-book]");
      if (!btn) return;
      const card = btn.closest("[data-service-id]");
      const name = card && card.querySelector("h3") ? card.querySelector("h3").textContent.trim() : "";
      const price = card && card.querySelector(".price") ? card.querySelector(".price").textContent.trim() : "";
      if (!name || !price) return;
      trackEvent("service_select", { service: name, price: price });
      openWhatsApp(serviceMessage(name, price), "service-card");
    });
  }

  function initWhatsAppTriggers() {
    document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
      el.addEventListener("click", function (event) {
        event.preventDefault();
        const source = el.getAttribute("data-whatsapp") || "cta";
        const custom = el.getAttribute("data-whatsapp-message");
        openWhatsApp(custom || DEFAULT_MESSAGE, source);
      });
    });
  }

  function initLocation() {
    document.querySelectorAll("[data-location-link]").forEach(function (el) {
      el.addEventListener("click", function () {
        trackEvent("location_click", { url: CLINIC.mapsUrl });
      });
    });
  }

  function initInstagram() {
    document.querySelectorAll("[data-instagram-link]").forEach(function (el) {
      el.addEventListener("click", function () {
        trackEvent("instagram_click", { url: CLINIC.instagramUrl });
      });
    });
  }

  function initBookingForm() {
    const form = document.getElementById("booking-form");
    if (!form) return;

    const dateInput = form.querySelector("#booking-date");
    if (dateInput) {
      const now = new Date();
      const offset = now.getTimezoneOffset();
      const local = new Date(now.getTime() - offset * 60000);
      dateInput.min = local.toISOString().split("T")[0];
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const data = {
        name: form.name.value.trim(),
        service: form.service.value.trim(),
        date: form.date.value,
        time: form.time.value,
        message: form.message.value.trim()
      };

      const errors = {
        name: data.name ? "" : "Informe o seu nome.",
        service: data.service ? "" : "Escolha um serviço.",
        date: data.date ? "" : "Escolha uma data.",
        time: data.time ? "" : "Escolha um horário."
      };

      Object.keys(errors).forEach(function (key) {
        const field = form.querySelector('[name="' + key + '"]');
        const errorEl = form.querySelector('[data-error-for="' + key + '"]');
        const message = errors[key];
        if (field) {
          field.classList.toggle("has-error", Boolean(message));
          field.setAttribute("aria-invalid", message ? "true" : "false");
        }
        if (errorEl) errorEl.textContent = message;
      });

      const invalid = Object.keys(errors).filter(function (key) {
        return errors[key];
      });

      if (invalid.length) {
        trackEvent("form_validation_error", { fields: invalid });
        const first = form.querySelector('[name="' + invalid[0] + '"]');
        if (first) first.focus();
        return;
      }

      trackEvent("form_submit", {
        service: data.service,
        has_message: Boolean(data.message)
      });
      trackEvent("booking_start", { source: "form", service: data.service });

      openWhatsApp(
        bookingMessage({
          name: data.name,
          service: data.service,
          date: formatDate(data.date),
          time: formatTime(data.time),
          message: data.message
        }),
        "booking-form"
      );
    });
  }

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        const id = link.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", id);
      });
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  renderServices();
  initHeader();
  initMenuMobile();
  initFilters();
  initServiceCards();
  initWhatsAppTriggers();
  initLocation();
  initInstagram();
  initBookingForm();
  initSmoothAnchors();
})();
