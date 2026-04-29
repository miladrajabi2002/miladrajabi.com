const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
  setTimeout(() => preloader.classList.add('hide'), 650);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');

    entry.target.querySelectorAll('.stat, .project, .skill').forEach((item, index) => {
      item.style.transitionDelay = `${index * 90}ms`;
      item.classList.add('show');
    });

    observer.unobserve(entry.target);
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const id = anchor.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

window.addEventListener('scroll', () => {
  const y = window.scrollY * 0.06;
  document.querySelectorAll('.ambient').forEach((orb, i) => {
    orb.style.transform = `translateY(${i === 0 ? y : -y}px)`;
  });
}, { passive: true });
