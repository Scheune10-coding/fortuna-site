document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dropdown-toggle");
  const menu = document.getElementById("dropdown-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Optional: Dropdown schließen beim Klicken außerhalb
  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add("hidden");
    }
  });
});
