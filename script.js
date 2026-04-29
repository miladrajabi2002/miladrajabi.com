const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
  setTimeout(() => preloader.classList.add('hide'), 700);
  document.body.animate(
    [
      { opacity: 0, transform: 'translateY(10px)', filter: 'blur(6px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' }
    ],
    { duration: 900, easing: 'cubic-bezier(.2,.75,.2,1)' }
  );
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');

    const children = entry.target.querySelectorAll('.skill-card, .project, .timeline-item');
    children.forEach((el, i) => {
      el.style.transitionDelay = `${i * 90}ms`;
      el.classList.add('show');
    });

    observer.unobserve(entry.target);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
