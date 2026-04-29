const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
  setTimeout(() => preloader?.classList.add('hide'), 450);
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

window.addEventListener('scroll', () => {
  const offset = window.scrollY * 0.05;
  const a1 = document.querySelector('.ambient-1');
  const a2 = document.querySelector('.ambient-2');
  if (a1) a1.style.transform = `translate3d(0, ${offset}px, 0)`;
  if (a2) a2.style.transform = `translate3d(0, ${-offset}px, 0)`;
}, { passive: true });
