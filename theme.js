(function () {
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");
  if (!button) return;

  function current() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function render() {
    var next = current() === "light" ? "dark" : "light";
    button.textContent = "Switch to " + next + " theme";
    button.setAttribute("aria-pressed", String(current() === "light"));
  }

  button.addEventListener("click", function () {
    var next = current() === "light" ? "dark" : "light";
    if (next === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      // localStorage unavailable: the choice just won't persist.
    }
    render();
  });

  render();
})();
