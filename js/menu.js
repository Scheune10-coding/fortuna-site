document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dropdown-toggle");
  const menu = document.getElementById("dropdown-menu");

  // Menü anzeigen/verstecken mit .show
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("show");

    // Pfeil ändern
    toggle.innerHTML = menu.classList.contains("show")
      ? "Startseite ▴"
      : "Startseite ▾";
  });

  // Klick im Menü blockieren
  menu.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Klick außerhalb schließt Menü
  document.addEventListener("click", () => {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      toggle.innerHTML = "Startseite ▾";
    }
  });

  // Tastaturzugänglichkeit
  toggle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle.click();
    }
  });
});
