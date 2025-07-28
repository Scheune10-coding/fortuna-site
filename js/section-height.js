function setFullSectionHeights() {
  const nav = document.querySelector("header"); // dein Header mit Logo + Navigation
  const navHeight = nav.offsetHeight;

  const sections = document.querySelectorAll("main > section"); // alle Sections direkt im Main
  const viewportHeight = window.innerHeight;

  const fields = document.querySelectorAll("section > .field"); // alle field in Sections

  const availableHeight = viewportHeight - navHeight;

  // 10vh oben + 10vh unten = 20vh gesamt (0.2 * viewportHeight)
  const verticalPadding = viewportHeight * 0.2;

  // Jetzt setze nur den "Inhalt"-Bereich ohne Padding
  const contentHeight = availableHeight - verticalPadding;

  sections.forEach(section => {
    section.style.minHeight = `${availableHeight}px`;
  });

  fields.forEach(field => {
    field.style.minHeight = `${contentHeight}px`;
  });

}

// Beim Laden und bei Fenstergröße-Änderung ausführen
window.addEventListener("resize", setFullSectionHeights);
document.addEventListener("DOMContentLoaded", setFullSectionHeights);
