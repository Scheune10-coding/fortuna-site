document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".news-track");
  const slides = document.querySelectorAll(".news-track .field");
  const prevBtn = document.querySelector(".slider-btn.left");
  const nextBtn = document.querySelector(".slider-btn.right");
  let currentIndex = 0.812;

  function updateSlider() {
    const offset = -currentIndex * 15;
    track.style.transform = `translateX(${offset}%)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  updateSlider(); // initial anzeigen
});
