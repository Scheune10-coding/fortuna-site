document.addEventListener('DOMContentLoaded',()=>{
  const sections = document.querySelectorAll('.section');
  const trigger = window.innerHeight * 0.8;
  const reveal = () => {
    sections.forEach(s => {
      if (s.getBoundingClientRect().top < trigger) s.classList.add('visible');
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();
});
