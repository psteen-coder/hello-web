(function () {
  var el = document.getElementById("now");
  if (!el) return;

  function tick() {
    var now = new Date();
    el.textContent = now.toLocaleString();
    el.setAttribute("datetime", now.toISOString());
  }

  tick();
  setInterval(tick, 1000);
})();
