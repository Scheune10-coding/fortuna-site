document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dropdown-toggle");
  const menu = document.getElementById("dropdown-menu");

  // Toggle-Menü anzeigen/verstecken
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("hidden");

    // Button-Pfeil anpassen
    toggle.innerHTML = menu.classList.contains("hidden")
      ? "Startseite ▾"
      : "Startseite ▴";
  });

  // Klick im Menü nicht weiterleiten
  menu.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Klick außerhalb -> Menü schließen
  document.addEventListener("click", () => {
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
      toggle.innerHTML = "Startseite ▾";
    }
  });

  // Optional: Tastatursteuerung (Barrierefreiheit)
  toggle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle.click();
    }
  });
});
