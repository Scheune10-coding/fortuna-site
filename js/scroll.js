document.addEventListener('DOMContentLoaded', () => {
  const fields = document.querySelectorAll('.field');
  const trigger = window.innerHeight * 0.8;

  const reveal = () => {
    fields.forEach(f => {
      if (f.getBoundingClientRect().top < trigger) f.classList.add('visible');
    });
  };

  window.addEventListener('scroll', reveal);
  reveal();
});
