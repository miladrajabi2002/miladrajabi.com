const items = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

items.forEach((el) => observer.observe(el));

window.addEventListener('load', () => {
  document.body.animate(
    [
      { opacity: 0, transform: 'translateY(6px)', filter: 'blur(5px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' }
    ],
    { duration: 850, easing: 'cubic-bezier(.2,.7,.2,1)' }
  );
});
