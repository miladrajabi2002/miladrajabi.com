const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
  setTimeout(() => preloader.classList.add('hide'), 500);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const id = anchor.getAttribute('href');
    if (!id || id === '#') return;

    const target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
