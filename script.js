const preloader = document.getElementById('preloader');
window.addEventListener('load', () => setTimeout(() => preloader.classList.add('hide'), 700));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

window.addEventListener('scroll', () => {
  const val = window.scrollY * .05;
  document.querySelector('.g1').style.transform = `translateY(${val}px)`;
  document.querySelector('.g2').style.transform = `translateY(${-val}px)`;
}, { passive: true });
