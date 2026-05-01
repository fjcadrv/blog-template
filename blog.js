(function () {
  "use strict";

  function initMobileNav() {
    var toggle = document.querySelector("[data-blog-menu-toggle]");
    var panel = document.querySelector("[data-blog-mobile-panel]");
    if (!toggle || !panel) return;

    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        panel.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function setActiveNav() {
    var path = window.location.pathname || "";
    var page = path.split("/").pop() || "index.html";
    document.querySelectorAll("[data-blog-nav]").forEach(function (a) {
      var href = a.getAttribute("href") || "";
      if (href === page || (page === "" && href === "index.html")) {
        a.classList.add("active");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initMobileNav();
      setActiveNav();
    });
  } else {
    initMobileNav();
    setActiveNav();
  }
})();
