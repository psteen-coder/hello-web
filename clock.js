(function () {
  var el = document.getElementById("now");
  var tzEl = document.getElementById("tz");
  if (!el) return;

  var iana = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var short =
    new Intl.DateTimeFormat(undefined, { timeZoneName: "short" })
      .formatToParts(new Date())
      .find(function (p) {
        return p.type === "timeZoneName";
      })?.value || iana;

  if (tzEl) {
    tzEl.textContent = short;
    tzEl.setAttribute("title", iana);
  }

  function tick() {
    var now = new Date();
    el.textContent = now.toLocaleString();
    el.setAttribute("datetime", now.toISOString());
  }

  tick();
  setInterval(tick, 1000);
})();
