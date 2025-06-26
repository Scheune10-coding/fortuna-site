document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slider-track");
  const slides = Array.from(document.querySelectorAll(".slide"));
  const containerWidth = document.querySelector("#hero").offsetWidth;

  const slideWidth = slides[0].offsetWidth + 20; // Breite + Abstand (gap)
  const totalWidth = slideWidth * slides.length;

  // Dupliziere die Slides für nahtlosen Loop
  track.innerHTML += track.innerHTML;
  const allSlides = Array.from(track.querySelectorAll(".slide"));
  const doubleTotalWidth = slideWidth * allSlides.length;

  let position = 0;

  function loop() {
    position -= getSpeed();

    if (position <= -totalWidth) {
      position = 0;
    }

    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(loop);
  }

  function getSpeed() {
    let baseSpeed = 3;
    let slowDownRadius = 100;
    let minSpeed = 0.2;
    let centerX = containerWidth / 2;

    let speeds = allSlides.map((slide, i) => {
      let slideCenter = - position + i * slideWidth + slideWidth / 2;
      let distanceToCenter = Math.abs(centerX - (-slideCenter));

      if (distanceToCenter < slowDownRadius) {
        return minSpeed + (baseSpeed - minSpeed) * (distanceToCenter / slowDownRadius);
      }
      return baseSpeed;
    });

    return Math.min(...speeds);
  }

  loop();
});
