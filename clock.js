(function () {
  var el = document.getElementById("now");
  var tzEl = document.getElementById("tz");
  var formatBtn = document.getElementById("clock-format");
  if (!el) return;

  var KEY = "clockFormat";
  var greetingEl = document.getElementById("greeting");
  var nameInput = document.getElementById("visitor-name");
  var NAME_KEY = "visitorName";
  var MAX_NAME = 50;

  function loadName() {
    try {
      return (localStorage.getItem(NAME_KEY) || "").slice(0, MAX_NAME);
    } catch (e) {
      return "";
    }
  }

  var visitorName = loadName();

  function greetingFor(date) {
    var h = date.getHours();
    if (h >= 5 && h <= 11) return "Good morning";
    if (h >= 12 && h <= 17) return "Good afternoon";
    return "Good evening";
  }

  function loadFormat() {
    try {
      var v = localStorage.getItem(KEY);
      return v === "12" || v === "24" ? v : null;
    } catch (e) {
      return null;
    }
  }

  // null = follow the locale's default
  var format = loadFormat();

  function localeUses12h() {
    return !!new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
    }).resolvedOptions().hour12;
  }

  function options() {
    return format ? { hour12: format === "12" } : {};
  }

  function tzShortName(date) {
    var part = new Intl.DateTimeFormat(undefined, {
      timeZoneName: "short",
    })
      .formatToParts(date)
      .find(function (p) {
        return p.type === "timeZoneName";
      });
    return part ? part.value : "";
  }

  function renderButton() {
    if (!formatBtn) return;
    var is12 = format ? format === "12" : localeUses12h();
    var label = is12 ? "Use 24-hour time" : "Use 12-hour time";
    formatBtn.textContent = label;
    formatBtn.setAttribute("aria-label", label);
  }

  function tick() {
    var now = new Date();
    el.textContent = now.toLocaleString(undefined, options());
    el.setAttribute("datetime", now.toISOString());
    if (tzEl) {
      tzEl.textContent = tzShortName(now);
      tzEl.setAttribute(
        "title",
        Intl.DateTimeFormat().resolvedOptions().timeZone,
      );
    }
    if (greetingEl) {
      // textContent, never innerHTML: names are shown as plain text.
      greetingEl.textContent =
        greetingFor(now) + (visitorName ? ", " + visitorName : "");
    }
  }

  if (formatBtn) {
    formatBtn.addEventListener("click", function () {
      var is12 = format ? format === "12" : localeUses12h();
      format = is12 ? "24" : "12";
      try {
        localStorage.setItem(KEY, format);
      } catch (e) {
        // localStorage unavailable: the choice just won't persist.
      }
      renderButton();
      tick();
    });
  }

  if (nameInput) {
    nameInput.value = visitorName;
    nameInput.addEventListener("input", function () {
      visitorName = nameInput.value.trim().slice(0, MAX_NAME);
      try {
        if (visitorName) localStorage.setItem(NAME_KEY, visitorName);
        else localStorage.removeItem(NAME_KEY);
      } catch (e) {
        // localStorage unavailable: the name just won't persist.
      }
      tick();
    });
  }

  renderButton();
  tick();
  setInterval(tick, 1000);
})();
