document.addEventListener("DOMContentLoaded", () => {
  // Track-Element auswählen (enthält alle Slides)
  const track = document.querySelector(".slider-track");

  // Ursprüngliche Slides erfassen
  const slides = Array.from(track.querySelectorAll(".slide"));

  // Abstand zwischen den Slides
  const slideGap = 20;

  // Funktion zur Ermittlung der tatsächlichen Breite eines Slides (inkl. Abstand)
  function getSlideWidth() {
    return slides[0].offsetWidth + slideGap;
  }

  // Anzahl der Duplikationen zur Erzeugung eines echten Endlos-Loops
  const DUPLICATE_COUNT = 4;

  // Original-Slides mehrfach duplizieren und ans Ende des Tracks anhängen
  for (let i = 0; i < DUPLICATE_COUNT; i++) {
    slides.forEach(slide => {
      const clone = slide.cloneNode(true);
      track.appendChild(clone);
    });
  }

  // Alle Slides (inkl. der Duplikate) erneut erfassen
  const allSlides = Array.from(track.querySelectorAll(".slide"));

  // Aktuelle Position des Tracks (für translateX)
  let position = 0;

  // Aktuelle Scrollgeschwindigkeit
  let currentSpeed = 2;

  // Hauptloop zur kontinuierlichen Bewegung des Sliders
  function loop() {
    const slideWidth = getSlideWidth();
    const totalWidth = slideWidth * allSlides.length;

    // Geschwindigkeit dynamisch anpassen (je nach Position zur Mitte)
    currentSpeed = getDynamicSpeed();

    // Position nach links verschieben, mit Modulo um nahtlosen Loop zu erzeugen
    position += (currentSpeed + totalWidth) % totalWidth;

    // Bewegung anwenden
    track.style.transform = `translateX(${-position}px)`;

    // Nächsten Frame rendern
    requestAnimationFrame(loop);
  }

  // Funktion zur dynamischen Berechnung der Geschwindigkeit je nach Position zur Mitte
  function getDynamicSpeed() {
    const viewportCenter = window.innerWidth / 2;
    const baseSpeed = 2;     // Normale Geschwindigkeit
    const minSpeed = 0.2;    // Minimale Geschwindigkeit (wenn Slide in der Mitte)
    const slowdownRadius = 150; // Bereich um die Mitte, in dem verlangsamt wird

    let slowest = baseSpeed;

    allSlides.forEach(slide => {
      const rect = slide.getBoundingClientRect();
      const slideCenter = (rect.left + rect.right) / 2;
      const distToCenter = Math.abs(viewportCenter - slideCenter);

      if (distToCenter < slowdownRadius) {
        // Je näher am Zentrum, desto langsamer (linearer Übergang)
        const factor = distToCenter / slowdownRadius;
        const thisSpeed = minSpeed + (baseSpeed - minSpeed) * factor;

        // Die kleinste Geschwindigkeit beibehalten (für weicheren Übergang)
        if (thisSpeed < slowest) slowest = thisSpeed;
      }
    });

    return slowest;
  }

  // Starte die Animation
  loop();
});
