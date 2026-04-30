const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
  setTimeout(() => preloader?.classList.add('hide'), 420);
});

const animateSkills = (section) => {
  section.querySelectorAll('.skill-row').forEach((row, idx) => {
    const meter = row.querySelector('i');
    const width = Number(meter?.dataset.width || 0);
    row.style.setProperty('--w', String(width));
    setTimeout(() => row.classList.add('animate'), idx * 90);
  });
};

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');

    if (entry.target.querySelector('.skills-grid')) {
      animateSkills(entry.target);
    }

    const cards = entry.target.querySelectorAll('.feature-card, .project-card, .info-card');
    cards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 55}ms`;
      card.classList.add('pop-in');
    });

    observer.unobserve(entry.target);
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
