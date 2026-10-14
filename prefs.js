(function () {
  var KEYS = ["theme", "clockFormat", "visitorName"];
  var btn = document.getElementById("reset-prefs");
  if (!btn) return;

  btn.addEventListener("click", function () {
    var ok = window.confirm("Reset theme, clock format, and name preferences?");
    if (!ok) return;

    try {
      for (var i = 0; i < KEYS.length; i++) {
        localStorage.removeItem(KEYS[i]);
      }
    } catch (e) {
      // Storage unavailable: keep going and reset the in-memory UI.
    }

    var root = document.documentElement;
    root.removeAttribute("data-theme");
    var prefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    if (prefersLight) {
      root.setAttribute("data-theme", "light");
    }
    if (window.__helloTheme) {
      window.__helloTheme.render();
    }
    if (window.__helloClock) {
      window.__helloClock.reset();
    }
  });
})();
