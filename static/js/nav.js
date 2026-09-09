// Menu mobile — progressive enhancement. Sem JS, a navegação aparece expandida.
(function () {
  "use strict";
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  var mobile = window.matchMedia("(max-width: 860px)");
  document.querySelectorAll(".nav-item.has-dropdown > a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (mobile.matches && !link.parentElement.classList.contains("is-open")) {
        e.preventDefault();
        link.parentElement.classList.add("is-open");
      }
    });
  });
})();
