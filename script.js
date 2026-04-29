const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
  setTimeout(() => preloader.classList.add('hide'), 600);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

window.addEventListener('scroll', () => {
  const y = window.scrollY * 0.05;
  document.querySelector('.orb-a').style.transform = `translateY(${y}px)`;
  document.querySelector('.orb-b').style.transform = `translateY(${-y}px)`;
}, { passive: true });
