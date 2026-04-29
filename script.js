const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: .16 });
reveals.forEach(el => io.observe(el));

window.addEventListener('load', () => {
  document.body.animate([
    { opacity: 0, filter: 'blur(8px)' },
    { opacity: 1, filter: 'blur(0)' }
  ], { duration: 750, easing: 'ease-out' });
});
