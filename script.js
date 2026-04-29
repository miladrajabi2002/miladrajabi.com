const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
  setTimeout(() => preloader?.classList.add('hide'), 420);
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');

    if (entry.target.querySelector('.skills-grid')) {
      entry.target.querySelectorAll('.skill-row').forEach((row) => {
        const meter = row.querySelector('i');
        const width = Number(meter?.dataset.width || 0);
        row.style.setProperty('--w', String(width));
        row.classList.add('animate');
      });
    }

    observer.unobserve(entry.target);
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
